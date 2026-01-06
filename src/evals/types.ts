/**
 * Fine-Tune Evaluation Types
 *
 * Types for evaluating fine-tuned models against baseline models
 * using the existing golden-scenarios test suite and evaluation criteria.
 */

// =============================================================================
// Eval Run Types
// =============================================================================

/**
 * Configuration for a fine-tune eval run
 */
export interface FTEvalConfig {
  /** Descriptive name for this run (e.g., "baseline-gpt4.1-nano", "ft-v1-pipeline-only") */
  name: string;
  /** Model to evaluate */
  model: string;
  /** Test suite to use */
  suite: string;
  /** Model used for judging (defaults to gpt-4o) */
  judge_model?: string;
  /** Filter to specific steps */
  steps?: string[];
  /** Filter to specific test IDs */
  test_ids?: string[];
  /** Filter by tags */
  tags?: string[];
  /** Use ensemble evaluation */
  ensemble?: boolean;
}

/**
 * Result for a single criterion evaluation
 */
export interface CriterionResult {
  criterion_id: string;
  criterion_name: string;
  passed: boolean;
  confidence: number;
  explanation: string;
}

/**
 * Result for a single step in a test case
 */
export interface StepEvalResult {
  step: string;
  passed: boolean;
  criteria_results: CriterionResult[];
  /** Truncated output for debugging */
  output_preview?: string;
}

/**
 * Result for a single test case
 */
export interface TestCaseEvalResult {
  test_id: string;
  test_name: string;
  passed: boolean;
  step_results: StepEvalResult[];
  error?: string;
}

/**
 * Aggregated statistics
 */
export interface EvalStats {
  total: number;
  passed: number;
  failed: number;
  pass_rate: number;
}

/**
 * Complete result of a fine-tune eval run
 */
export interface FTEvalResult {
  /** Unique run ID */
  run_id: string;
  /** Configuration used */
  config: FTEvalConfig;
  /** When the run started */
  started_at: string;
  /** When the run completed */
  completed_at: string;
  /** Duration in milliseconds */
  duration_ms: number;
  /** Overall statistics */
  overall: EvalStats;
  /** Statistics by step */
  by_step: Record<string, EvalStats>;
  /** Statistics by criterion */
  by_criterion: Record<string, EvalStats>;
  /** Individual test case results */
  test_results: TestCaseEvalResult[];
}

// =============================================================================
// Comparison Types
// =============================================================================

/**
 * Comparison between two eval runs
 */
export interface FTEvalComparison {
  /** Baseline run info */
  baseline: {
    run_id: string;
    name: string;
    model: string;
    pass_rate: number;
  };
  /** Candidate run info */
  candidate: {
    run_id: string;
    name: string;
    model: string;
    pass_rate: number;
  };
  /** Overall improvement (positive = candidate is better) */
  overall_delta: number;
  /** Improvement by step */
  by_step: Record<string, {
    baseline_pass_rate: number;
    candidate_pass_rate: number;
    delta: number;
  }>;
  /** Improvement by criterion */
  by_criterion: Record<string, {
    baseline_pass_rate: number;
    candidate_pass_rate: number;
    delta: number;
  }>;
  /** Test cases that regressed (passed in baseline, failed in candidate) */
  regressions: Array<{
    test_id: string;
    step: string;
    criteria_that_failed: string[];
  }>;
  /** Test cases that improved (failed in baseline, passed in candidate) */
  improvements: Array<{
    test_id: string;
    step: string;
    criteria_that_passed: string[];
  }>;
  /** Summary recommendation */
  recommendation: 'ship' | 'investigate' | 'reject';
  recommendation_reason: string;
}

// =============================================================================
// Storage Types
// =============================================================================

/**
 * Index of all stored eval runs
 */
export interface EvalRunIndex {
  runs: Array<{
    run_id: string;
    name: string;
    model: string;
    suite: string;
    pass_rate: number;
    created_at: string;
    file_path: string;
  }>;
}
