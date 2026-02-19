/**
 * OpenAI Agent SDK Pipeline — Public API
 *
 * Drop-in alternative to @zuca/pipeline that uses Agent SDK run() calls.
 * Activated via `USE_AGENTS_PIPELINE=true` environment variable.
 */

export { runAgentsPipeline } from './orchestrator';
export type { AgentsPipelineOptions } from './orchestrator';

// Re-export shared types from current pipeline (no duplication)
export type {
  PipelineResult,
  PipelineClarificationPause,
  PipelineOptions,
} from '../pipeline/orchestrator';
export {
  isPipelineClarificationPause,
  createClarificationState,
} from '../pipeline/orchestrator';
