/**
 * Judge LLM Validation Module
 *
 * Provides a validation layer that reviews pipeline step outputs
 * and applies corrections when confident.
 *
 * @example
 * ```typescript
 * import { withJudge, buildInputContext } from './judge';
 *
 * // After a pipeline step:
 * const judgeResult = await withJudge(
 *   'analyze_contract',
 *   stepOutput,
 *   contractAnalysisJsonSchema,
 *   buildInputContext(input)
 * );
 *
 * // Use the (potentially corrected) output
 * result.contract_intel = judgeResult.output.contractIntel;
 *
 * // Check if corrections were applied
 * if (judgeResult.judgeApplied) {
 *   console.log('Judge applied corrections:', judgeResult.judgeDetails);
 * }
 * ```
 */

// Main wrapper function
export { withJudge, buildInputContext } from './wrapper';

// Configuration
export {
  loadJudgeConfig,
  clearJudgeConfigCache,
  isJudgeEnabled,
  isStepJudgeEnabled,
  getStepConfig,
  type JudgeConfig,
  type JudgeStepConfig,
  type ResolvedStepConfig,
} from './config';

// Types
export {
  type JudgeChange,
  type JudgeEvaluation,
  type JudgeDetails,
  type JudgeWrapperResult,
  type JudgeableStep,
  JUDGEABLE_STEPS,
  isJudgeableStep,
  JudgeChangeSchema,
  JudgeEvaluationSchema,
} from './types';
