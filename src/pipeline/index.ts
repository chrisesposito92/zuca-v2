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

// All pipeline steps
export * from './steps/index';
