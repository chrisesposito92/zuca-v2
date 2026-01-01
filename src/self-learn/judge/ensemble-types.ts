/**
 * Ensemble Judge Types
 *
 * Types for multi-judge evaluation with consensus calculation.
 * Uses multiple LLMs to reduce false positives and negatives.
 */

import type { JudgeResult, Severity } from '../types';
import type { LlmModel } from '../../types/llm';

/**
 * Configuration for a single judge in the ensemble
 */
export interface JudgeConfig {
  /** Model to use for this judge */
  model: LlmModel;
  /** Relative weight in consensus calculation (default: 1.0) */
  weight: number;
  /** Optional timeout in ms */
  timeout?: number;
  /** Optional label for display purposes */
  label?: string;
}

/**
 * Configuration for the ensemble
 */
export interface EnsembleConfig {
  /** Judges to use */
  judges: JudgeConfig[];
  /** Minimum agreement ratio for consensus (default: 0.66 = 2/3) */
  consensusThreshold: number;
  /** Run judges in parallel (default: true) */
  parallel: boolean;
  /** Continue if some judges fail (default: true) */
  tolerateFailures: boolean;
  /** Minimum number of judges required for valid consensus */
  minJudgesRequired: number;
}

/**
 * Result from a single judge
 */
export interface SingleJudgeResult {
  /** Which model produced this result */
  model: LlmModel;
  /** Weight of this judge in consensus */
  weight: number;
  /** The judge's evaluation result */
  result: JudgeResult;
  /** Time taken in ms */
  durationMs: number;
  /** Whether evaluation succeeded */
  success: boolean;
  /** Error message if failed */
  error?: string;
}

/**
 * A criterion where judges disagreed
 */
export interface Disagreement {
  /** Criterion ID */
  criterionId: string;
  /** Criterion name */
  criterionName: string;
  /** Severity of the criterion */
  severity: Severity;
  /** How each judge voted */
  votes: Array<{
    model: LlmModel;
    passed: boolean;
    confidence: number;
    explanation: string;
  }>;
  /** Weighted pass ratio (0-1) */
  weightedPassRatio: number;
  /** The consensus decision */
  consensusDecision: boolean;
}

/**
 * Full ensemble result
 */
export interface EnsembleResult {
  /** Consensus judge result */
  consensus: JudgeResult;
  /** Individual results from each judge */
  individualResults: SingleJudgeResult[];
  /** Criteria where judges disagreed */
  disagreements: Disagreement[];
  /** Overall confidence (agreement level) */
  overallConfidence: number;
  /** Number of judges that succeeded */
  judgesSucceeded: number;
  /** Total time taken */
  totalDurationMs: number;
}

/**
 * Default ensemble configuration
 *
 * Uses 3 judges with 2/3 consensus threshold.
 * Weights can be adjusted based on model quality/reliability.
 */
export const DEFAULT_ENSEMBLE_CONFIG: EnsembleConfig = {
  judges: [
    { model: 'gpt-5.2', weight: 1.0, label: 'GPT-5.2' },
    { model: 'gemini-3-pro-preview', weight: 1.0, label: 'Gemini 3 Pro' },
    { model: 'gemini-3-flash-preview', weight: 0.8, label: 'Gemini 3 Flash' },
  ],
  consensusThreshold: 0.66, // 2/3 majority
  parallel: true,
  tolerateFailures: true,
  minJudgesRequired: 2,
};

/**
 * Lightweight ensemble (faster, cheaper)
 *
 * Uses 2 fast models with strict consensus (both must agree).
 */
export const LIGHTWEIGHT_ENSEMBLE_CONFIG: EnsembleConfig = {
  judges: [
    { model: 'gpt-5.2', weight: 1.0, label: 'GPT-5.2' },
    { model: 'gemini-3-flash-preview', weight: 1.0, label: 'Gemini 3 Flash' },
  ],
  consensusThreshold: 0.5, // Both must agree
  parallel: true,
  tolerateFailures: false,
  minJudgesRequired: 2,
};

/**
 * Create a custom ensemble config from model names
 */
export function createEnsembleConfig(
  models: LlmModel[],
  options: Partial<Omit<EnsembleConfig, 'judges'>> = {}
): EnsembleConfig {
  return {
    judges: models.map((model) => ({
      model,
      weight: 1.0,
    })),
    consensusThreshold: options.consensusThreshold ?? 0.66,
    parallel: options.parallel ?? true,
    tolerateFailures: options.tolerateFailures ?? true,
    // minJudgesRequired should never exceed the number of judges
    // With 1 judge: require 1, with 2: require 2, with 3+: require majority
    minJudgesRequired: options.minJudgesRequired ?? Math.min(models.length, Math.max(1, Math.ceil(models.length / 2))),
  };
}
