/**
 * Pipeline Module Index
 *
 * Exports the main orchestrator and all pipeline steps.
 */

// Main orchestrator
export {
  runPipeline,
  handleFollowUp,
  getSession,
  listSessions,
  deleteSession,
  quickAnalysis,
  type PipelineOptions,
  type PipelineSession,
} from './orchestrator';

// Follow-up processing (for serverless/database-backed contexts)
export {
  processFollowUp,
  type FollowUpContext,
  type FollowUpResponse,
  type SuggestedEdit,
} from './follow-up';

// Patch/incremental update processing
export {
  applyPatch,
  getAffectedSteps,
  getValueAtPath,
  setValueAtPath,
  parsePathContext,
  type PatchOperation,
  type PatchResult,
  type IncrementalContext,
} from './patch';

// All pipeline steps
export * from './steps/index';
