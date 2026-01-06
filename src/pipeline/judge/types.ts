import { z } from 'zod';

// ============================================================================
// Judge Change Schema
// ============================================================================

/**
 * Represents a single change made by the judge
 */
export const JudgeChangeSchema = z.object({
  /** Path to the changed field (e.g., "subscription_spec.charges[0].amount") */
  field: z.string(),
  /** Original value before correction */
  original: z.unknown(),
  /** Corrected value */
  corrected: z.unknown(),
  /** Confidence in this specific change (0-1) */
  confidence: z.number().min(0).max(1),
  /** Explanation of why the change was made */
  reasoning: z.string(),
});

export type JudgeChange = z.infer<typeof JudgeChangeSchema>;

// ============================================================================
// Judge Evaluation Schema (LLM Output)
// ============================================================================

/**
 * The structured output from the judge LLM
 * Note: corrected_output is validated separately against the original step's schema
 */
export const JudgeEvaluationSchema = z.object({
  /** The output with corrections applied (same schema as original step) */
  corrected_output: z.unknown(),
  /** Whether any changes were made */
  made_changes: z.boolean(),
  /** List of all changes made */
  changes: z.array(JudgeChangeSchema),
  /** Whether the output passes validation (can be true even with changes) */
  validation_passed: z.boolean(),
  /** Overall confidence across all changes (1.0 if no changes) */
  overall_confidence: z.number().min(0).max(1),
  /** Optional notes about edge cases or items needing review */
  notes: z.string().optional(),
});

export type JudgeEvaluation = z.infer<typeof JudgeEvaluationSchema>;

// ============================================================================
// Judge Wrapper Result (returned to caller)
// ============================================================================

/**
 * Details about the judge's evaluation (for logging/debugging)
 */
export interface JudgeDetails {
  madeChanges: boolean;
  changes: JudgeChange[];
  validationPassed: boolean;
  confidence: number;
  notes?: string;
}

/**
 * Result from the withJudge wrapper function
 */
export interface JudgeWrapperResult<T> {
  /** The final output (either corrected or original) */
  output: T;
  /** Whether the judge made and applied changes */
  judgeApplied: boolean;
  /** Details about changes made (if any) */
  judgeDetails?: JudgeDetails;
  /** Error message if judge failed (output will be original) */
  judgeError?: string;
  /** Time taken by judge in milliseconds */
  judgeDurationMs: number;
}

// ============================================================================
// Judgeable Steps
// ============================================================================

/**
 * Steps that can be validated by the judge
 */
export const JUDGEABLE_STEPS = [
  'analyze_contract',
  'design_subscription',
  'contracts_orders',
  'billings',
  'revrec_waterfall',
] as const;

export type JudgeableStep = (typeof JUDGEABLE_STEPS)[number];

/**
 * Type guard to check if a step name is judgeable
 */
export function isJudgeableStep(step: string): step is JudgeableStep {
  return JUDGEABLE_STEPS.includes(step as JudgeableStep);
}
