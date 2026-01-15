/**
 * Ralph Wiggum Self-Improvement Module
 *
 * Iterative self-improvement system for pipeline steps where the same model
 * evaluates its own output and decides to accept, iterate, or ask for clarification.
 */

// Configuration
export {
  loadRalphConfig,
  clearRalphConfigCache,
  isRalphEnabled,
  getRalphStepConfig,
  isStepRalphEnabled,
  isRalphEnabledStep,
  RALPH_ENABLED_STEPS,
  type RalphEnabledStep,
  type ResolvedRalphStepConfig,
} from './config';

// Context building
export {
  formatPreviousAttempts,
  formatPreviousClarifications,
  buildIterationContext,
  buildSelfEvalContext,
} from './context-builder';

// Self-evaluation
export { selfEvaluate, validateClarificationData } from './evaluator';

// Main wrapper
export { withRalph } from './wrapper';

// Re-export types for convenience
export type {
  SelfEvaluation,
  SelfEvaluationDecision,
  SpecificIssue,
  IterationAttempt,
  IterationClarification,
  StepIterationState,
  StepIterationStatus,
  RalphSessionState,
  RalphConfig,
  RalphStepConfig,
  WithRalphOptions,
  WithRalphResult,
} from '../../types/ralph';
