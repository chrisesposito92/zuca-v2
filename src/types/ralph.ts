/**
 * Ralph Wiggum Self-Improvement Types
 *
 * Types for the iterative self-improvement system where LLM steps
 * evaluate their own output and can iterate, ask clarifications, or complete.
 */

import { z } from 'zod';
import {
  ClarificationOptionSchema,
  ClarificationQuestionSchema,
  ClarificationAnswerSchema,
  ClarificationPrioritySchema,
  type ClarificationQuestion,
  type ClarificationAnswer,
  type StepClarificationRequest,
} from './clarification';

// ============================================================================
// Self-Evaluation Types
// ============================================================================

/**
 * Possible decisions from self-evaluation
 */
export const SelfEvaluationDecisionSchema = z.enum(['done', 'iterate', 'clarify']);
export type SelfEvaluationDecision = z.infer<typeof SelfEvaluationDecisionSchema>;

/**
 * A specific issue identified during self-evaluation
 */
export const SpecificIssueSchema = z.object({
  field: z.string(),
  issue: z.string(),
  suggestion: z.string(),
});
export type SpecificIssue = z.infer<typeof SpecificIssueSchema>;

/**
 * Self-evaluation response from LLM
 */
export const SelfEvaluationSchema = z.object({
  decision: SelfEvaluationDecisionSchema,
  confidence: z.number().min(0).max(1),
  reasoning: z.string(),
  // For 'iterate' decision
  iterationFeedback: z.string().optional(),
  specificIssues: z.array(SpecificIssueSchema).optional(),
  // For 'clarify' decision
  clarificationQuestion: z.string().optional(),
  clarificationContext: z.string().optional(),
  clarificationOptions: z.array(ClarificationOptionSchema).optional(),
  clarificationPriority: ClarificationPrioritySchema.optional(),
});

export type SelfEvaluation = z.infer<typeof SelfEvaluationSchema>;

// ============================================================================
// Iteration Tracking Types
// ============================================================================

/**
 * Records a single attempt within a step's iteration cycle
 */
export const IterationAttemptSchema = z.object({
  attemptNumber: z.number().int().min(1),
  output: z.unknown(),
  selfEvaluation: SelfEvaluationSchema,
  timestamp: z.string(),
  durationMs: z.number(),
});

export type IterationAttempt<T = unknown> = Omit<z.infer<typeof IterationAttemptSchema>, 'output'> & {
  output: T;
};

/**
 * Tracks a clarification question asked during a specific iteration
 */
export const IterationClarificationSchema = z.object({
  iterationNumber: z.number().int().min(1),
  question: ClarificationQuestionSchema,
  answer: ClarificationAnswerSchema.optional(),
  source: z.enum(['step', 'self_eval']), // Where the question came from
});

export type IterationClarification = z.infer<typeof IterationClarificationSchema>;

/**
 * Status of a step's iteration state
 */
export const StepIterationStatusSchema = z.enum([
  'iterating',
  'awaiting_clarification',
  'completed',
  'max_reached',
]);
export type StepIterationStatus = z.infer<typeof StepIterationStatusSchema>;

/**
 * Full iteration state for a single step
 */
export const StepIterationStateSchema = z.object({
  stepName: z.string(),
  currentIteration: z.number().int().min(1),
  maxIterations: z.number().int().min(1),
  attempts: z.array(IterationAttemptSchema),
  clarifications: z.array(IterationClarificationSchema),
  status: StepIterationStatusSchema,
  finalOutput: z.unknown().optional(),
});

export type StepIterationState<T = unknown> = Omit<
  z.infer<typeof StepIterationStateSchema>,
  'attempts' | 'finalOutput'
> & {
  attempts: IterationAttempt<T>[];
  finalOutput?: T;
};

/**
 * Session-level Ralph state tracking all steps
 */
export const RalphSessionStateSchema = z.object({
  stepStates: z.record(z.string(), StepIterationStateSchema),
});

export type RalphSessionState = z.infer<typeof RalphSessionStateSchema>;

// ============================================================================
// Configuration Types
// ============================================================================

/**
 * Per-step Ralph configuration
 */
export const RalphStepConfigSchema = z.object({
  enabled: z.boolean().default(true),
  maxIterations: z.number().int().min(1).max(10).default(3),
  allowClarifications: z.boolean().default(true),
});

export type RalphStepConfig = z.infer<typeof RalphStepConfigSchema>;

/**
 * Global Ralph configuration
 */
export const RalphConfigSchema = z.object({
  enabled: z.boolean().default(false),
  defaultMaxIterations: z.number().int().min(1).max(10).default(3),
  steps: z.record(z.string(), RalphStepConfigSchema.partial()).default({}),
});

export type RalphConfig = z.infer<typeof RalphConfigSchema>;

// ============================================================================
// Wrapper Types
// ============================================================================

/**
 * Options for the withRalph wrapper function
 */
export interface WithRalphOptions<T> {
  stepName: string;
  originalInput: unknown;
  /** Step function that may return output or a clarification request */
  stepFn: (iterationContext: string) => Promise<T | StepClarificationRequest>;
  previousState?: StepIterationState<T>;
  clarificationAnswer?: ClarificationAnswer;
  model?: string;
  interactiveMode?: boolean;
}

/**
 * Result from the withRalph wrapper
 */
export interface WithRalphResult<T> {
  output: T;
  state: StepIterationState<T>;
  clarificationRequest?: {
    question: ClarificationQuestion;
    source: 'step' | 'self_eval';
  };
  completed: boolean;
  iterationsUsed: number;
}

// ============================================================================
// JSON Schema for Self-Evaluation LLM Output
// ============================================================================

/**
 * JSON schema for structured self-evaluation output from LLM
 */
export const selfEvaluationJsonSchema = {
  type: 'object',
  properties: {
    decision: {
      type: 'string',
      enum: ['done', 'iterate', 'clarify'],
      description:
        'Your decision: "done" if output is good, "iterate" if you need to try again, "clarify" if you need user input.',
    },
    confidence: {
      type: 'number',
      minimum: 0,
      maximum: 1,
      description: 'Your confidence in the output quality (0-1). Use >0.85 for "done".',
    },
    reasoning: {
      type: 'string',
      description: 'Brief explanation of your decision (1-2 sentences).',
    },
    iteration_feedback: {
      type: ['string', 'null'],
      description:
        'For "iterate": What specifically should be fixed on the next attempt. Null otherwise.',
    },
    specific_issues: {
      type: ['array', 'null'],
      items: {
        type: 'object',
        properties: {
          field: { type: 'string', description: 'The field path with the issue' },
          issue: { type: 'string', description: 'What is wrong' },
          suggestion: { type: 'string', description: 'How to fix it' },
        },
        required: ['field', 'issue', 'suggestion'],
      },
      description: 'For "iterate": List of specific issues found. Null otherwise.',
    },
    clarification_question: {
      type: ['string', 'null'],
      description: 'For "clarify": The question to ask the user. Null otherwise.',
    },
    clarification_context: {
      type: ['string', 'null'],
      description: 'For "clarify": Why this clarification is needed. Null otherwise.',
    },
    clarification_options: {
      type: ['array', 'null'],
      items: {
        type: 'object',
        properties: {
          id: { type: 'string' },
          label: { type: 'string' },
          description: { type: 'string' },
        },
        required: ['id', 'label'],
      },
      description: 'For "clarify": 2-4 options for the user. Null otherwise.',
    },
    clarification_priority: {
      type: ['string', 'null'],
      enum: ['critical', 'important', 'helpful', null],
      description: 'For "clarify": How important is this question. Null otherwise.',
    },
  },
  required: ['decision', 'confidence', 'reasoning'],
};

/**
 * Raw self-evaluation output from LLM (snake_case for JSON schema compatibility)
 */
export interface RawSelfEvaluationOutput {
  decision: 'done' | 'iterate' | 'clarify';
  confidence: number;
  reasoning: string;
  iteration_feedback?: string | null;
  specific_issues?: Array<{
    field: string;
    issue: string;
    suggestion: string;
  }> | null;
  clarification_question?: string | null;
  clarification_context?: string | null;
  clarification_options?: Array<{
    id: string;
    label: string;
    description?: string;
  }> | null;
  clarification_priority?: 'critical' | 'important' | 'helpful' | null;
}

/**
 * Transform raw LLM self-evaluation output to structured format
 */
export function transformSelfEvaluationOutput(raw: RawSelfEvaluationOutput): SelfEvaluation {
  return {
    decision: raw.decision,
    confidence: raw.confidence,
    reasoning: raw.reasoning,
    iterationFeedback: raw.iteration_feedback ?? undefined,
    specificIssues: raw.specific_issues?.map((issue) => ({
      field: issue.field,
      issue: issue.issue,
      suggestion: issue.suggestion,
    })),
    clarificationQuestion: raw.clarification_question ?? undefined,
    clarificationContext: raw.clarification_context ?? undefined,
    clarificationOptions: raw.clarification_options?.map((opt) => ({
      id: opt.id,
      label: opt.label,
      description: opt.description,
    })),
    clarificationPriority: raw.clarification_priority ?? undefined,
  };
}

// ============================================================================
// Helper Functions
// ============================================================================

/**
 * Create initial iteration state for a step
 */
export function createInitialIterationState<T>(
  stepName: string,
  maxIterations: number
): StepIterationState<T> {
  return {
    stepName,
    currentIteration: 1,
    maxIterations,
    attempts: [],
    clarifications: [],
    status: 'iterating',
  };
}

/**
 * Check if a step iteration state is completed or at max
 */
export function isIterationComplete(state: StepIterationState): boolean {
  return state.status === 'completed' || state.status === 'max_reached';
}

/**
 * Get the best output from iteration attempts (last completed or highest confidence)
 */
export function getBestOutput<T>(state: StepIterationState<T>): T | undefined {
  if (state.finalOutput !== undefined) {
    return state.finalOutput;
  }

  // Find attempt with highest confidence
  const sortedAttempts = [...state.attempts].sort(
    (a, b) => b.selfEvaluation.confidence - a.selfEvaluation.confidence
  );

  return sortedAttempts[0]?.output;
}
