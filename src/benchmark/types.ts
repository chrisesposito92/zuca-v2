/**
 * Benchmark Type Definitions
 *
 * Types for cross-model comparison and performance benchmarking.
 */

import type { LlmModel } from '../types/llm';
import type { JudgeResult } from '../self-learn/types';

// =============================================================================
// Speed Metrics
// =============================================================================

export interface SpeedMetrics {
  /** Total time for all tests in ms */
  totalMs: number;
  /** Per-step timing breakdown (aggregated across tests) */
  stepTimings: Record<string, number>;
  /** Average time per test case in ms */
  avgTestMs: number;
  /** Minimum test time in ms */
  minTestMs: number;
  /** Maximum test time in ms */
  maxTestMs: number;
}

// =============================================================================
// Quality Metrics
// =============================================================================

export interface CriterionScore {
  /** Number of times this criterion passed */
  passed: number;
  /** Number of times this criterion failed */
  failed: number;
  /** Average confidence score from judge (0-1) */
  avgConfidence: number;
}

export interface QualityMetrics {
  /** Percentage of tests passing all criteria (0-1) */
  passRate: number;
  /** Total tests that passed */
  passedCount: number;
  /** Total tests that failed */
  failedCount: number;
  /** Per-criterion breakdown */
  criterionScores: Record<string, CriterionScore>;
  /** Average judge confidence across all evaluations (0-1) */
  overallConfidence: number;
}

// =============================================================================
// Cost Metrics
// =============================================================================

export interface CostMetrics {
  /** Total prompt/input tokens */
  promptTokens: number;
  /** Total completion/output tokens */
  completionTokens: number;
  /** Total tokens (prompt + completion) */
  totalTokens: number;
  /** Estimated cost in USD */
  estimatedCostUsd: number;
  /** Average tokens per test */
  avgTokensPerTest: number;
}

// =============================================================================
// Reliability Metrics
// =============================================================================

export interface BenchmarkError {
  /** Test case ID that failed */
  testId: string;
  /** Pipeline step that failed (if applicable) */
  step?: string;
  /** Error message */
  message: string;
  /** Error type/category */
  type: 'pipeline_error' | 'evaluation_error' | 'timeout' | 'unknown';
}

export interface ReliabilityMetrics {
  /** Number of tests that completed successfully (even if they failed quality checks) */
  completedCount: number;
  /** Number of tests that errored during execution */
  errorCount: number;
  /** Completion rate (0-1) */
  completionRate: number;
  /** Detailed error information */
  errors: BenchmarkError[];
}

// =============================================================================
// Per-Test Results
// =============================================================================

export interface TokenUsage {
  promptTokens: number;
  completionTokens: number;
  totalTokens: number;
}

export interface TestRunResult {
  /** Test case ID */
  testId: string;
  /** Test case name (if available) */
  testName?: string;
  /** Whether the test passed all quality criteria */
  passed: boolean;
  /** Whether the test completed without errors */
  completed: boolean;
  /** Total execution time in ms */
  durationMs: number;
  /** Per-step timing breakdown */
  stepTimings: Record<string, number>;
  /** Token usage for this test */
  tokenUsage?: TokenUsage;
  /** Judge evaluation result */
  judgeResult?: JudgeResult;
  /** Error if test failed to complete */
  error?: string;
  /** Error type if applicable */
  errorType?: BenchmarkError['type'];
}

// =============================================================================
// Model-Level Results
// =============================================================================

export interface ModelBenchmarkResult {
  /** Model identifier */
  model: LlmModel;
  /** Test suite name */
  suiteName: string;
  /** When this model's benchmark started */
  startedAt: string;
  /** When this model's benchmark completed */
  completedAt: string;

  /** Individual test results */
  testResults: TestRunResult[];

  /** Aggregated metrics */
  speed: SpeedMetrics;
  quality: QualityMetrics;
  cost: CostMetrics;
  reliability: ReliabilityMetrics;
}

// =============================================================================
// Cross-Model Comparison
// =============================================================================

export interface ModelRanking {
  model: LlmModel;
  value: number;
  /** 1 = best, higher = worse */
  rank: number;
}

export interface BenchmarkRankings {
  /** Ranked by quality (pass rate) - higher is better */
  byQuality: ModelRanking[];
  /** Ranked by speed (avg time) - lower is better */
  bySpeed: ModelRanking[];
  /** Ranked by cost - lower is better */
  byCost: ModelRanking[];
  /** Ranked by reliability (completion rate) - higher is better */
  byReliability: ModelRanking[];
  /** Overall composite score ranking */
  overall: ModelRanking[];
}

export interface BenchmarkComparison {
  /** Unique run identifier */
  runId: string;
  /** Test suite that was run */
  suiteName: string;
  /** When benchmark started */
  timestamp: string;
  /** Models that were benchmarked */
  models: LlmModel[];

  /** Per-model detailed results */
  results: Record<LlmModel, ModelBenchmarkResult>;

  /** Cross-model rankings */
  rankings: BenchmarkRankings;

  /** Summary statistics */
  summary: {
    totalTests: number;
    totalDurationMs: number;
    bestQuality: { model: LlmModel; passRate: number };
    bestSpeed: { model: LlmModel; avgMs: number };
    bestCost: { model: LlmModel; costUsd: number };
  };
}

// =============================================================================
// Configuration
// =============================================================================

export interface BenchmarkOptions {
  /** Models to benchmark (default: all) */
  models: LlmModel[];
  /** Test suite to use (default: golden-quick) */
  suite: string;
  /** Filter to specific test IDs */
  testIds?: string[];
  /** Filter to specific pipeline steps */
  steps?: string[];
  /** JSON output file path */
  outputFile?: string;
  /** Markdown report file path */
  markdownFile?: string;
  /** Show verbose output */
  verbose?: boolean;
  /** Model to use for LLM judge evaluation (default: same as pipeline model) */
  judgeModel?: LlmModel;
  /** Skip quality evaluation (speed-only benchmark) */
  skipEvaluation?: boolean;
}

// =============================================================================
// Model Capabilities & Pricing
// =============================================================================

export interface ModelPricing {
  /** Cost per 1K input tokens in USD */
  inputPer1k: number;
  /** Cost per 1K output tokens in USD */
  outputPer1k: number;
}

export interface ModelCapabilities {
  /** Whether model supports web search tool */
  supportsWebSearch: boolean;
  /** Whether model supports code interpreter */
  supportsCodeInterpreter: boolean;
  /** Whether model supports MCP tools */
  supportsMcp: boolean;
  /** Whether this is a fine-tuned model */
  isFineTuned: boolean;
  /** Pricing information */
  pricing: ModelPricing;
}

/**
 * Model capabilities and pricing information.
 * Pricing is approximate and may vary.
 */
export const MODEL_CAPABILITIES: Record<LlmModel, ModelCapabilities> = {
  'gpt-5.2': {
    supportsWebSearch: true,
    supportsCodeInterpreter: true,
    supportsMcp: true,
    isFineTuned: false,
    pricing: { inputPer1k: 0.005, outputPer1k: 0.015 },
  },
  'gemini-3-pro-preview': {
    supportsWebSearch: true,
    supportsCodeInterpreter: true,
    supportsMcp: false,
    isFineTuned: false,
    pricing: { inputPer1k: 0.00125, outputPer1k: 0.00375 },
  },
  'gemini-3-flash-preview': {
    supportsWebSearch: true,
    supportsCodeInterpreter: true,
    supportsMcp: false,
    isFineTuned: false,
    pricing: { inputPer1k: 0.0003, outputPer1k: 0.0009 },
  },
};

// =============================================================================
// Progress Callback
// =============================================================================

export type BenchmarkProgressCallback = (
  phase: 'model_start' | 'test_start' | 'test_complete' | 'model_complete',
  data: {
    model: LlmModel;
    testIndex?: number;
    totalTests?: number;
    testId?: string;
    passed?: boolean;
    durationMs?: number;
  }
) => void;
