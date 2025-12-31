/**
 * Clustering Types
 *
 * Types for semantic deduplication and clustering of corrections.
 * Groups similar corrections to reduce noise and improve retrieval.
 */

import type { Correction } from '../types';

/**
 * A cluster of semantically similar corrections
 */
export interface CorrectionCluster {
  /** Unique cluster ID */
  id: string;
  /** Step name these corrections belong to */
  stepName: string;
  /** Canonical pattern name (representative of the cluster) */
  canonicalPattern: string;
  /** All corrections in this cluster */
  corrections: Correction[];
  /** Number of corrections in cluster */
  count: number;
  /** Average embedding of cluster (centroid) */
  centroidEmbedding: number[];
  /** Best representative correction (highest confidence, has example) */
  representativeCorrection: Correction;
  /** Merged input summaries for better search */
  mergedInputSummary: string;
  /** Average confidence across corrections */
  avgConfidence: number;
  /** Average success rate across corrections */
  avgSuccessRate: number;
  /** Total times applied across all corrections */
  totalTimesApplied: number;
  /** When cluster was created/updated */
  updatedAt: string;
}

/**
 * Clustering configuration
 */
export interface ClusteringConfig {
  /** Minimum cosine similarity to be in same cluster (default: 0.85) */
  similarityThreshold: number;
  /** Minimum corrections to form a cluster (default: 1) */
  minClusterSize: number;
  /** Maximum clusters to return (default: 50) */
  maxClusters: number;
  /** Recalculate embeddings even if cached (default: false) */
  forceRecalculate: boolean;
}

/**
 * Clustering result
 */
export interface ClusteringResult {
  /** Generated clusters */
  clusters: CorrectionCluster[];
  /** Corrections that couldn't be clustered */
  unclustered: Correction[];
  /** Statistics */
  stats: {
    totalCorrections: number;
    totalClusters: number;
    avgClusterSize: number;
    largestCluster: number;
    /** Reduction ratio: 1 - (clusters / corrections) */
    reductionRatio: number;
  };
}

/**
 * Default clustering configuration
 */
export const DEFAULT_CLUSTERING_CONFIG: ClusteringConfig = {
  similarityThreshold: 0.85,
  minClusterSize: 1,
  maxClusters: 50,
  forceRecalculate: false,
};
