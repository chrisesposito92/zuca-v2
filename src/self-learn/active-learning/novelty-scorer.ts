/**
 * Novelty Scorer
 *
 * Calculates how novel/unfamiliar an output is compared to
 * existing corrections in the database.
 *
 * High novelty = output is different from known failure patterns
 * Low novelty = output is similar to known corrections
 */

import { debugLog } from '../../config';
import { getCorrectionsBackend } from '../corrections';
import type { Correction } from '../types';
import type { NoveltyScore } from './types';

// Simple keyword-based similarity for non-embedding scenarios
function keywordSimilarity(text1: string, text2: string): number {
  const words1 = new Set(text1.toLowerCase().split(/\s+/).filter(w => w.length > 2));
  const words2 = new Set(text2.toLowerCase().split(/\s+/).filter(w => w.length > 2));

  if (words1.size === 0 || words2.size === 0) return 0;

  let overlap = 0;
  for (const word of words1) {
    if (words2.has(word)) overlap++;
  }

  // Jaccard similarity
  const union = new Set([...words1, ...words2]).size;
  return overlap / union;
}

/**
 * Create a text representation of an output for comparison
 */
function outputToText(output: unknown): string {
  if (typeof output === 'string') return output;
  if (typeof output === 'object' && output !== null) {
    return JSON.stringify(output);
  }
  return String(output);
}

/**
 * Calculate novelty score for an output
 *
 * Compares the output against existing corrections for the step
 * to determine how "novel" or unfamiliar the scenario is.
 *
 * @param output - The pipeline step output to assess
 * @param stepName - The name of the pipeline step
 * @returns NoveltyScore with score (0-1) and closest matches
 */
export async function calculateNoveltyScore(
  output: unknown,
  stepName: string
): Promise<NoveltyScore> {
  const outputText = outputToText(output);

  try {
    // Get all corrections for this step
    const backend = getCorrectionsBackend();
    const corrections = await backend.getByStep(stepName);

    if (corrections.length === 0) {
      // No corrections exist = everything is novel
      debugLog(`No corrections for ${stepName}, returning max novelty`);
      return {
        score: 1.0,
        closestCorrections: [],
      };
    }

    // Calculate similarity to each correction
    const similarities: Array<{
      correction: Correction;
      similarity: number;
    }> = [];

    for (const correction of corrections) {
      // Compare against the incorrect_output if available
      const compareText = correction.incorrect_output
        ? outputToText(correction.incorrect_output)
        : correction.pattern + ' ' + correction.input_summary;

      const similarity = keywordSimilarity(outputText, compareText);
      similarities.push({ correction, similarity });
    }

    // Sort by similarity (highest first)
    similarities.sort((a, b) => b.similarity - a.similarity);

    // Take top 3 closest matches
    const closestCorrections = similarities.slice(0, 3).map((s) => ({
      id: s.correction.id,
      pattern: s.correction.pattern,
      similarity: s.similarity,
    }));

    // Novelty is inverse of highest similarity
    // If very similar to existing corrections, low novelty
    // If very different, high novelty
    const maxSimilarity = similarities[0]?.similarity ?? 0;
    const noveltyScore = 1 - maxSimilarity;

    debugLog(`Novelty score for ${stepName}: ${noveltyScore.toFixed(3)} (max similarity: ${maxSimilarity.toFixed(3)})`);

    return {
      score: noveltyScore,
      closestCorrections,
    };
  } catch (error) {
    debugLog(`Error calculating novelty score: ${error}`);
    // On error, return high novelty (err on side of flagging for review)
    return {
      score: 0.8,
      closestCorrections: [],
    };
  }
}

/**
 * Check if an output is highly novel (above threshold)
 */
export async function isHighlyNovel(
  output: unknown,
  stepName: string,
  threshold: number = 0.7
): Promise<boolean> {
  const { score } = await calculateNoveltyScore(output, stepName);
  return score >= threshold;
}
