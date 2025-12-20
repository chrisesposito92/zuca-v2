/**
 * Match Golden Use Cases Step
 *
 * This is a pure code step (no LLM) that uses Jaccard similarity
 * to match detected capabilities against the Golden Use Cases database.
 */

import { GoldenUseCaseCapability } from '../../types/golden-use-cases.js';
import { DetectedCapabilities, MatchGoldenUseCasesOutput } from '../../types/output.js';
import { matchToGoldenUseCases, formatMatchedGucForContext } from '../../utils/jaccard.js';
import { debugLog } from '../../config.js';

export interface MatchOptions {
  /** Number of top matches to return (default: 3) */
  topK?: number;
  /** Minimum score threshold (default: 0.05) */
  minScore?: number;
  /** Weight for billing capabilities (default: 1.0) */
  billingWeight?: number;
  /** Weight for revenue capabilities (default: 1.0) */
  revenueWeight?: number;
}

/**
 * Execute the Match Golden Use Cases step
 * Pure code implementation using Jaccard similarity
 */
export function matchGoldenUseCases(
  detected: DetectedCapabilities,
  goldenUseCases: GoldenUseCaseCapability[],
  options: MatchOptions = {}
): MatchGoldenUseCasesOutput {
  debugLog('Matching to golden use cases', {
    billingCaps: detected.billing_caps.length,
    revenueCaps: detected.revenue_caps.length,
    goldenUseCases: goldenUseCases.length,
  });

  const result = matchToGoldenUseCases(detected, goldenUseCases, {
    topK: options.topK ?? 3,
    minScore: options.minScore ?? 0.05,
    billingWeight: options.billingWeight ?? 1.0,
    revenueWeight: options.revenueWeight ?? 1.0,
  });

  debugLog('Match results:', {
    topMatch: result.matched_guc[0]?.title || 'none',
    topScore: result.matched_guc[0]?.score || 0,
    matchCount: result.matched_guc.length,
  });

  return result;
}

/**
 * Get the IDs of matched golden use cases
 */
export function getMatchedUseCaseIds(matchResult: MatchGoldenUseCasesOutput): string[] {
  return matchResult.matched_guc.map((m) => m.id);
}

/**
 * Format match results for use in downstream prompts
 */
export function formatMatchResultsForContext(matchResult: MatchGoldenUseCasesOutput): string {
  return formatMatchedGucForContext(matchResult.matched_guc);
}

/**
 * Check if any matches were found above threshold
 */
export function hasGoodMatches(
  matchResult: MatchGoldenUseCasesOutput,
  minScore: number = 0.1
): boolean {
  return matchResult.matched_guc.some((m) => m.score >= minScore);
}
