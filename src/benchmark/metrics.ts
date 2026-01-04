/**
 * Benchmark Metrics Utilities
 *
 * Functions for calculating costs, aggregating token usage, and computing statistics.
 */

import type { LlmModel } from '../types/llm';
import {
  MODEL_CAPABILITIES,
  type TestRunResult,
  type SpeedMetrics,
  type QualityMetrics,
  type CostMetrics,
  type ReliabilityMetrics,
  type TokenUsage,
  type CriterionScore,
  type BenchmarkError,
} from './types';

// =============================================================================
// Cost Calculation
// =============================================================================

/**
 * Calculate estimated cost in USD for token usage
 */
export function calculateCost(
  model: LlmModel,
  promptTokens: number,
  completionTokens: number
): number {
  const { pricing } = MODEL_CAPABILITIES[model];
  const inputCost = (promptTokens / 1000) * pricing.inputPer1k;
  const outputCost = (completionTokens / 1000) * pricing.outputPer1k;
  return inputCost + outputCost;
}

/**
 * Format cost as human-readable string
 */
export function formatCost(usd: number): string {
  if (usd < 0.01) {
    // Show in cents for very small amounts
    return `$${(usd * 100).toFixed(3)}c`;
  }
  if (usd < 1) {
    return `$${usd.toFixed(4)}`;
  }
  return `$${usd.toFixed(2)}`;
}

// =============================================================================
// Token Aggregation
// =============================================================================

/**
 * Aggregate token usage across multiple test results
 */
export function aggregateTokenUsage(results: TestRunResult[]): TokenUsage {
  let promptTokens = 0;
  let completionTokens = 0;

  for (const result of results) {
    if (result.tokenUsage) {
      promptTokens += result.tokenUsage.promptTokens;
      completionTokens += result.tokenUsage.completionTokens;
    }
  }

  return {
    promptTokens,
    completionTokens,
    totalTokens: promptTokens + completionTokens,
  };
}

// =============================================================================
// Speed Metrics Aggregation
// =============================================================================

/**
 * Aggregate timing data across test results
 */
export function aggregateSpeedMetrics(results: TestRunResult[]): SpeedMetrics {
  if (results.length === 0) {
    return {
      totalMs: 0,
      stepTimings: {},
      avgTestMs: 0,
      minTestMs: 0,
      maxTestMs: 0,
    };
  }

  const durations = results.map((r) => r.durationMs);
  const totalMs = durations.reduce((sum, d) => sum + d, 0);

  // Aggregate step timings
  const stepTimings: Record<string, number> = {};
  for (const result of results) {
    for (const [step, ms] of Object.entries(result.stepTimings)) {
      stepTimings[step] = (stepTimings[step] || 0) + ms;
    }
  }

  return {
    totalMs,
    stepTimings,
    avgTestMs: totalMs / results.length,
    minTestMs: Math.min(...durations),
    maxTestMs: Math.max(...durations),
  };
}

// =============================================================================
// Quality Metrics Aggregation
// =============================================================================

/**
 * Aggregate quality metrics from judge results
 */
export function aggregateQualityMetrics(results: TestRunResult[]): QualityMetrics {
  const completedResults = results.filter((r) => r.completed);

  if (completedResults.length === 0) {
    return {
      passRate: 0,
      passedCount: 0,
      failedCount: 0,
      criterionScores: {},
      overallConfidence: 0,
    };
  }

  const passedCount = completedResults.filter((r) => r.passed).length;
  const failedCount = completedResults.length - passedCount;

  // Aggregate per-criterion scores
  const criterionScores: Record<string, CriterionScore> = {};
  let totalConfidence = 0;
  let confidenceCount = 0;

  for (const result of completedResults) {
    if (result.judgeResult?.evaluations) {
      for (const evaluation of result.judgeResult.evaluations) {
        const criterionId = evaluation.criterion_id;

        if (!criterionScores[criterionId]) {
          criterionScores[criterionId] = {
            passed: 0,
            failed: 0,
            avgConfidence: 0,
          };
        }

        if (evaluation.passed) {
          criterionScores[criterionId].passed++;
        } else {
          criterionScores[criterionId].failed++;
        }

        totalConfidence += evaluation.confidence;
        confidenceCount++;
      }
    }
  }

  // Calculate average confidence per criterion
  // Note: We'd need to track sum of confidences per criterion for accurate avg
  // For now, use overall average as approximation
  for (const criterionId of Object.keys(criterionScores)) {
    criterionScores[criterionId].avgConfidence =
      confidenceCount > 0 ? totalConfidence / confidenceCount : 0;
  }

  return {
    passRate: completedResults.length > 0 ? passedCount / completedResults.length : 0,
    passedCount,
    failedCount,
    criterionScores,
    overallConfidence: confidenceCount > 0 ? totalConfidence / confidenceCount : 0,
  };
}

// =============================================================================
// Cost Metrics Aggregation
// =============================================================================

/**
 * Aggregate cost metrics from test results
 */
export function aggregateCostMetrics(
  model: LlmModel,
  results: TestRunResult[]
): CostMetrics {
  const tokenUsage = aggregateTokenUsage(results);
  const estimatedCostUsd = calculateCost(
    model,
    tokenUsage.promptTokens,
    tokenUsage.completionTokens
  );

  return {
    promptTokens: tokenUsage.promptTokens,
    completionTokens: tokenUsage.completionTokens,
    totalTokens: tokenUsage.totalTokens,
    estimatedCostUsd,
    avgTokensPerTest: results.length > 0 ? tokenUsage.totalTokens / results.length : 0,
  };
}

// =============================================================================
// Reliability Metrics Aggregation
// =============================================================================

/**
 * Aggregate reliability metrics from test results
 */
export function aggregateReliabilityMetrics(results: TestRunResult[]): ReliabilityMetrics {
  const completedCount = results.filter((r) => r.completed).length;
  const errorCount = results.filter((r) => !r.completed).length;

  const errors: BenchmarkError[] = results
    .filter((r) => !r.completed && r.error)
    .map((r) => ({
      testId: r.testId,
      message: r.error || 'Unknown error',
      type: r.errorType || 'unknown',
    }));

  return {
    completedCount,
    errorCount,
    completionRate: results.length > 0 ? completedCount / results.length : 0,
    errors,
  };
}

// =============================================================================
// Duration Formatting
// =============================================================================

/**
 * Format duration in human-readable form
 */
export function formatDuration(ms: number): string {
  if (ms < 1000) {
    return `${Math.round(ms)}ms`;
  }
  if (ms < 60000) {
    return `${(ms / 1000).toFixed(1)}s`;
  }
  const minutes = Math.floor(ms / 60000);
  const seconds = Math.round((ms % 60000) / 1000);
  return `${minutes}m ${seconds}s`;
}

/**
 * Format duration as compact string (e.g., "45.2s")
 */
export function formatDurationCompact(ms: number): string {
  if (ms < 1000) {
    return `${Math.round(ms)}ms`;
  }
  return `${(ms / 1000).toFixed(1)}s`;
}

// =============================================================================
// Number Formatting
// =============================================================================

/**
 * Format large numbers with commas
 */
export function formatNumber(n: number): string {
  return n.toLocaleString();
}

/**
 * Format percentage (0-1 to "XX.X%")
 */
export function formatPercent(ratio: number): string {
  return `${(ratio * 100).toFixed(1)}%`;
}

// =============================================================================
// Statistical Helpers
// =============================================================================

/**
 * Calculate standard deviation
 */
export function standardDeviation(values: number[]): number {
  if (values.length === 0) return 0;
  const avg = values.reduce((sum, v) => sum + v, 0) / values.length;
  const squaredDiffs = values.map((v) => Math.pow(v - avg, 2));
  const avgSquaredDiff = squaredDiffs.reduce((sum, v) => sum + v, 0) / values.length;
  return Math.sqrt(avgSquaredDiff);
}

/**
 * Calculate percentile value
 */
export function percentile(values: number[], p: number): number {
  if (values.length === 0) return 0;
  const sorted = [...values].sort((a, b) => a - b);
  const index = Math.ceil((p / 100) * sorted.length) - 1;
  return sorted[Math.max(0, index)];
}
