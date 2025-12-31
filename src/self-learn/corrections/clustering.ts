/**
 * Correction Clustering
 *
 * Groups semantically similar corrections using embeddings.
 * Reduces noise in correction retrieval by using cluster representatives.
 */

import { v4 as uuidv4 } from 'uuid';
import { debugLog } from '../../config';
import { getCorrectionsForStep, getAllCorrections } from './index';
import {
  getEmbedding,
  getEmbeddings,
  cosineSimilarity,
  findMostSimilar,
} from '../../rag/embeddings';
import type { Correction } from '../types';
import type {
  CorrectionCluster,
  ClusteringConfig,
  ClusteringResult,
} from './clustering-types';
import { DEFAULT_CLUSTERING_CONFIG } from './clustering-types';

// =============================================================================
// Embedding Cache (specific to clustering operations)
// =============================================================================

interface CorrectionWithEmbedding {
  correction: Correction;
  embedding: number[];
}

/**
 * Get embeddings for multiple corrections efficiently
 */
async function getCorrectionEmbeddings(
  corrections: Correction[],
  forceRecalculate: boolean
): Promise<CorrectionWithEmbedding[]> {
  // Separate corrections that have embeddings from those that need them
  const withEmbeddings: CorrectionWithEmbedding[] = [];
  const needEmbeddings: { correction: Correction; text: string; index: number }[] = [];

  for (let i = 0; i < corrections.length; i++) {
    const correction = corrections[i];

    if (!forceRecalculate && correction.pattern_embedding?.length) {
      withEmbeddings.push({
        correction,
        embedding: correction.pattern_embedding,
      });
    } else {
      const text = [
        correction.pattern,
        correction.input_summary,
        correction.expected_behavior,
      ].join(' ');
      needEmbeddings.push({ correction, text, index: i });
    }
  }

  if (needEmbeddings.length > 0) {
    debugLog(`Generating ${needEmbeddings.length} embeddings for clustering`);

    // Batch generate embeddings
    const texts = needEmbeddings.map((n) => n.text);
    const embeddings = await getEmbeddings(texts);

    for (let i = 0; i < needEmbeddings.length; i++) {
      withEmbeddings.push({
        correction: needEmbeddings[i].correction,
        embedding: embeddings[i],
      });
    }
  }

  // Sort back to original order
  return withEmbeddings.sort((a, b) => {
    const aIdx = corrections.findIndex((c) => c.id === a.correction.id);
    const bIdx = corrections.findIndex((c) => c.id === b.correction.id);
    return aIdx - bIdx;
  });
}

// =============================================================================
// Cluster Building Utilities
// =============================================================================

/**
 * Calculate centroid (average) of embeddings
 */
function calculateCentroid(embeddings: number[][]): number[] {
  if (embeddings.length === 0) return [];

  const dim = embeddings[0].length;
  const centroid = new Array(dim).fill(0);

  for (const embedding of embeddings) {
    for (let i = 0; i < dim; i++) {
      centroid[i] += embedding[i];
    }
  }

  for (let i = 0; i < dim; i++) {
    centroid[i] /= embeddings.length;
  }

  return centroid;
}

/**
 * Select the best representative correction from a cluster
 *
 * Prefers corrections that:
 * 1. Have an example_fix (most educational)
 * 2. Have higher confidence
 * 3. Have better success rate
 * 4. Have been applied more times
 */
function selectRepresentative(corrections: Correction[]): Correction {
  return corrections.sort((a, b) => {
    // Prefer corrections with example_fix
    if (a.example_fix && !b.example_fix) return -1;
    if (b.example_fix && !a.example_fix) return 1;

    // Then by confidence
    if (a.confidence !== b.confidence) return b.confidence - a.confidence;

    // Then by success rate
    if (a.success_rate !== b.success_rate) return b.success_rate - a.success_rate;

    // Then by times applied
    return b.times_applied - a.times_applied;
  })[0];
}

/**
 * Generate a canonical pattern name from cluster
 *
 * Uses the most common pattern or the representative's pattern.
 */
function generateCanonicalPattern(corrections: Correction[]): string {
  const patternCounts = new Map<string, number>();

  for (const c of corrections) {
    const count = patternCounts.get(c.pattern) ?? 0;
    patternCounts.set(c.pattern, count + 1);
  }

  let maxCount = 0;
  let canonical = corrections[0].pattern;

  for (const [pattern, count] of patternCounts) {
    if (count > maxCount) {
      maxCount = count;
      canonical = pattern;
    }
  }

  return canonical;
}

/**
 * Merge input summaries from corrections for better search
 */
function mergeInputSummaries(corrections: Correction[]): string {
  const uniqueSummaries = new Set<string>();

  for (const c of corrections) {
    // Take first 100 chars of each summary
    const summary = c.input_summary.substring(0, 100);
    uniqueSummaries.add(summary);
  }

  return Array.from(uniqueSummaries).slice(0, 5).join(' | ');
}

/**
 * Build a cluster from a set of corrections
 */
function buildCluster(
  stepName: string,
  correctionsWithEmbeddings: CorrectionWithEmbedding[]
): CorrectionCluster {
  const corrections = correctionsWithEmbeddings.map((c) => c.correction);
  const embeddings = correctionsWithEmbeddings.map((c) => c.embedding);
  const representative = selectRepresentative(corrections);

  return {
    id: uuidv4(),
    stepName,
    canonicalPattern: generateCanonicalPattern(corrections),
    corrections,
    count: corrections.length,
    centroidEmbedding: calculateCentroid(embeddings),
    representativeCorrection: representative,
    mergedInputSummary: mergeInputSummaries(corrections),
    avgConfidence:
      corrections.reduce((s, c) => s + c.confidence, 0) / corrections.length,
    avgSuccessRate:
      corrections.reduce((s, c) => s + c.success_rate, 0) / corrections.length,
    totalTimesApplied: corrections.reduce((s, c) => s + c.times_applied, 0),
    updatedAt: new Date().toISOString(),
  };
}

// =============================================================================
// Main Clustering Functions
// =============================================================================

/**
 * Cluster corrections for a step using agglomerative clustering
 *
 * Algorithm:
 * 1. Get embeddings for all corrections
 * 2. Start with first unassigned correction as seed
 * 3. Find all corrections within similarity threshold
 * 4. Create cluster and mark as assigned
 * 5. Repeat until all corrections are assigned
 */
export async function clusterCorrections(
  stepName: string,
  config: Partial<ClusteringConfig> = {}
): Promise<ClusteringResult> {
  const fullConfig: ClusteringConfig = { ...DEFAULT_CLUSTERING_CONFIG, ...config };

  // Get all corrections for step
  const corrections = await getCorrectionsForStep(stepName);

  if (corrections.length === 0) {
    return {
      clusters: [],
      unclustered: [],
      stats: {
        totalCorrections: 0,
        totalClusters: 0,
        avgClusterSize: 0,
        largestCluster: 0,
        reductionRatio: 0,
      },
    };
  }

  debugLog(`Clustering ${corrections.length} corrections for ${stepName}`);

  // Get embeddings for all corrections
  const correctionsWithEmbeddings = await getCorrectionEmbeddings(
    corrections,
    fullConfig.forceRecalculate
  );

  // Agglomerative clustering
  const clusters: CorrectionCluster[] = [];
  const assigned = new Set<string>();

  for (let i = 0; i < correctionsWithEmbeddings.length; i++) {
    const seed = correctionsWithEmbeddings[i];

    if (assigned.has(seed.correction.id)) continue;

    // Start new cluster with this correction as seed
    const clusterMembers: CorrectionWithEmbedding[] = [seed];
    assigned.add(seed.correction.id);

    // Find all similar corrections
    for (let j = i + 1; j < correctionsWithEmbeddings.length; j++) {
      const candidate = correctionsWithEmbeddings[j];

      if (assigned.has(candidate.correction.id)) continue;

      const similarity = cosineSimilarity(seed.embedding, candidate.embedding);

      if (similarity >= fullConfig.similarityThreshold) {
        clusterMembers.push(candidate);
        assigned.add(candidate.correction.id);
      }
    }

    // Only create cluster if meets minimum size
    if (clusterMembers.length >= fullConfig.minClusterSize) {
      clusters.push(buildCluster(stepName, clusterMembers));
    }
  }

  // Sort by count (largest first)
  clusters.sort((a, b) => b.count - a.count);

  // Limit to maxClusters
  const limitedClusters = clusters.slice(0, fullConfig.maxClusters);

  // Find unclustered corrections
  const clusteredIds = new Set(
    limitedClusters.flatMap((c) => c.corrections.map((corr) => corr.id))
  );
  const unclustered = corrections.filter((c) => !clusteredIds.has(c.id));

  const stats = {
    totalCorrections: corrections.length,
    totalClusters: limitedClusters.length,
    avgClusterSize:
      limitedClusters.length > 0
        ? limitedClusters.reduce((s, c) => s + c.count, 0) / limitedClusters.length
        : 0,
    largestCluster: limitedClusters.length > 0 ? limitedClusters[0].count : 0,
    reductionRatio:
      corrections.length > 0
        ? 1 - limitedClusters.length / corrections.length
        : 0,
  };

  debugLog(
    `Created ${stats.totalClusters} clusters from ${stats.totalCorrections} corrections ` +
      `(${(stats.reductionRatio * 100).toFixed(1)}% reduction)`
  );

  return {
    clusters: limitedClusters,
    unclustered,
    stats,
  };
}

/**
 * Find relevant clusters for a query
 *
 * Returns clusters whose centroid is most similar to the query.
 */
export async function findRelevantClusters(
  query: string,
  stepName: string,
  limit = 3
): Promise<CorrectionCluster[]> {
  const { clusters } = await clusterCorrections(stepName);

  if (clusters.length === 0) return [];

  // Get query embedding
  const queryEmbedding = await getEmbedding(query);

  // Use findMostSimilar utility
  const clustersWithEmbeddings = clusters.map((cluster) => ({
    ...cluster,
    embedding: cluster.centroidEmbedding,
  }));

  const similar = findMostSimilar(queryEmbedding, clustersWithEmbeddings, limit);

  // Filter by minimum similarity threshold
  return similar
    .filter((s) => s.similarity > 0.3)
    .map((s) => {
      // Remove the temporary embedding property
      const { embedding, ...cluster } = s.item;
      return cluster as CorrectionCluster;
    });
}

/**
 * Get cluster statistics for a step
 */
export async function getClusterStats(stepName: string): Promise<{
  totalCorrections: number;
  totalClusters: number;
  reductionRatio: number;
  clusters: Array<{
    pattern: string;
    count: number;
    avgConfidence: number;
    avgSuccessRate: number;
  }>;
}> {
  const { clusters, stats } = await clusterCorrections(stepName);

  return {
    totalCorrections: stats.totalCorrections,
    totalClusters: stats.totalClusters,
    reductionRatio: stats.reductionRatio,
    clusters: clusters.map((c) => ({
      pattern: c.canonicalPattern,
      count: c.count,
      avgConfidence: c.avgConfidence,
      avgSuccessRate: c.avgSuccessRate,
    })),
  };
}

/**
 * Cluster all corrections across all steps
 */
export async function clusterAllCorrections(
  config: Partial<ClusteringConfig> = {}
): Promise<Map<string, ClusteringResult>> {
  const allCorrections = await getAllCorrections();

  // Group by step
  const byStep = new Map<string, Correction[]>();
  for (const correction of allCorrections) {
    const stepCorrections = byStep.get(correction.step_name) ?? [];
    stepCorrections.push(correction);
    byStep.set(correction.step_name, stepCorrections);
  }

  // Cluster each step
  const results = new Map<string, ClusteringResult>();

  for (const stepName of byStep.keys()) {
    const result = await clusterCorrections(stepName, config);
    results.set(stepName, result);
  }

  return results;
}
