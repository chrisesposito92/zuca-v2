import type { ZucaInput } from '../types/input';
import type { ZucaOutput } from '../types/output';
import type { LlmModel } from '../types/llm';
import type { GoldenUseCasesData, GoldenSubscription, GoldenRatePlanCharge } from '../data/loader';
import type { ClarificationAnswer } from '../types/clarification';
import type { RalphSessionState } from '../types/ralph';

/**
 * Pipeline context shared across all agent runs within a single pipeline execution.
 *
 * Passed as the `context` generic to Agent<PipelineContext> and accessed via
 * `runContext.context` in dynamic instructions and tool functions.
 */
export interface PipelineContext {
  sessionId: string;
  input: ZucaInput;
  model: LlmModel;
  goldenData: GoldenUseCasesData;
  interactiveMode: boolean;
  skipAllClarifications: boolean;

  /** Accumulates step outputs as the pipeline progresses */
  result: Partial<ZucaOutput>;
  clarificationAnswers: ClarificationAnswer[];

  /** Ralph self-improvement state */
  ralphEnabled: boolean;
  ralphState: RalphSessionState;
  /** Step timing tracking */
  stepTimings: Record<string, number>;

  /**
   * Pre-fetched per-step context, set by the orchestrator before each agent run.
   * Agents read these in their dynamic instructions to inject into the system prompt.
   */
  ragContext?: string;
  correctionsContext?: string;
  clarificationContext?: string;

  /** Derived data set after match_golden_use_cases step */
  matchedUseCaseIds?: string[];
  contextSubscriptions?: GoldenSubscription[];
  contextRatePlanCharges?: GoldenRatePlanCharge[];
}
