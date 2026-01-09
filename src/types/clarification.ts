/**
 * Clarification Questions Types
 *
 * Types for the clarification question system that allows LLM pipeline steps
 * to pause and ask users for input before continuing.
 */

import { z } from 'zod';

// ============================================================================
// Clarification Question Types
// ============================================================================

/**
 * A single option in a clarification question
 */
export const ClarificationOptionSchema = z.object({
  id: z.string(),
  label: z.string(),
  description: z.string().optional(),
});

export type ClarificationOption = z.infer<typeof ClarificationOptionSchema>;

/**
 * Priority level for clarification questions
 */
export const ClarificationPrioritySchema = z.enum(['critical', 'important', 'helpful']);
export type ClarificationPriority = z.infer<typeof ClarificationPrioritySchema>;

/**
 * A clarification question from a pipeline step
 */
export const ClarificationQuestionSchema = z.object({
  questionId: z.string(),
  stepName: z.string(),
  question: z.string(),
  context: z.string().optional(),
  options: z.array(ClarificationOptionSchema).min(2).max(4),
  allowSkip: z.boolean().default(true),
  allowFreeText: z.boolean().default(true),
  priority: ClarificationPrioritySchema.default('important'),
});

export type ClarificationQuestion = z.infer<typeof ClarificationQuestionSchema>;

/**
 * User's answer to a clarification question
 */
export const ClarificationAnswerSchema = z.object({
  questionId: z.string(),
  selectedOptionId: z.string().optional(),
  freeTextResponse: z.string().optional(),
  skipped: z.boolean(),
  answeredAt: z.string().optional(), // ISO timestamp
});

export type ClarificationAnswer = z.infer<typeof ClarificationAnswerSchema>;

// ============================================================================
// Step Return Types
// ============================================================================

/**
 * A clarification request returned by a step instead of its normal output
 */
export const StepClarificationRequestSchema = z.object({
  type: z.literal('clarification_needed'),
  question: ClarificationQuestionSchema,
  partialOutput: z.unknown().optional(),
});

export type StepClarificationRequest = z.infer<typeof StepClarificationRequestSchema>;

/**
 * Type guard to check if a step result is a clarification request
 */
export function isClarificationRequest<T>(
  result: T | StepClarificationRequest
): result is StepClarificationRequest {
  return (
    typeof result === 'object' &&
    result !== null &&
    'type' in result &&
    (result as StepClarificationRequest).type === 'clarification_needed'
  );
}

// ============================================================================
// Session State Types
// ============================================================================

/**
 * State stored in session when pipeline is paused for clarification
 */
export const ClarificationStateSchema = z.object({
  pendingQuestion: ClarificationQuestionSchema,
  pausedAtStep: z.string(),
  partialResult: z.record(z.unknown()), // Partial<ZucaOutput>
  askedAt: z.string(), // ISO timestamp
  answers: z.array(ClarificationAnswerSchema), // All answers in this session
});

export type ClarificationState = z.infer<typeof ClarificationStateSchema>;

/**
 * Result returned when pipeline pauses for clarification
 */
export const PipelineClarificationResultSchema = z.object({
  status: z.literal('awaiting_clarification'),
  question: ClarificationQuestionSchema,
  pausedAtStep: z.string(),
  partialResult: z.record(z.unknown()),
  sessionId: z.string(),
});

export type PipelineClarificationResult = z.infer<typeof PipelineClarificationResultSchema>;

// ============================================================================
// LLM Output Schema Extensions
// ============================================================================

/**
 * JSON schema fragment for LLM structured output
 * Add this to step schemas to enable clarification requests
 */
export const clarificationOutputJsonSchema = {
  type: 'object',
  properties: {
    needs_clarification: {
      type: 'boolean',
      description: 'Set to true if you need to ask the user a clarification question',
    },
    clarification_question: {
      type: 'string',
      description: 'The question to ask the user (1-2 sentences)',
    },
    clarification_context: {
      type: 'string',
      description: 'Brief context explaining why this matters',
    },
    clarification_options: {
      type: 'array',
      items: {
        type: 'object',
        properties: {
          id: { type: 'string' },
          label: { type: 'string' },
          description: { type: 'string' },
        },
        required: ['id', 'label'],
        additionalProperties: false,
      },
      minItems: 2,
      maxItems: 4,
      description: '2-4 concrete options representing the most likely scenarios',
    },
    clarification_priority: {
      type: 'string',
      enum: ['critical', 'important', 'helpful'],
      description: 'How important is this clarification',
    },
  },
};

/**
 * Raw clarification output from LLM (flat structure before transformation)
 */
export interface RawClarificationOutput {
  needs_clarification?: boolean;
  clarification_question?: string;
  clarification_context?: string;
  clarification_options?: Array<{
    id: string;
    label: string;
    description?: string;
  }>;
  clarification_priority?: 'critical' | 'important' | 'helpful';
}

/**
 * Transform raw LLM clarification output to structured format
 */
export function transformClarificationOutput(
  stepName: string,
  raw: RawClarificationOutput
): StepClarificationRequest | null {
  if (!raw.needs_clarification || !raw.clarification_question || !raw.clarification_options) {
    return null;
  }

  // Validate options
  if (raw.clarification_options.length < 2 || raw.clarification_options.length > 4) {
    return null;
  }

  return {
    type: 'clarification_needed',
    question: {
      questionId: `${stepName}:${Date.now()}`,
      stepName,
      question: raw.clarification_question,
      context: raw.clarification_context,
      options: raw.clarification_options.map((opt) => ({
        id: opt.id,
        label: opt.label,
        description: opt.description,
      })),
      allowSkip: true,
      allowFreeText: true,
      priority: raw.clarification_priority || 'important',
    },
  };
}

/**
 * Get the user's answer for a specific step from the answers array
 */
export function getClarificationAnswerForStep(
  stepName: string,
  answers: ClarificationAnswer[]
): ClarificationAnswer | undefined {
  return answers.find((a) => a.questionId.startsWith(`${stepName}:`));
}

/**
 * Format a clarification answer as context for the LLM
 */
export function formatClarificationAnswerForPrompt(answer: ClarificationAnswer): string {
  if (answer.skipped) {
    return 'User response: "I don\'t know - use your best judgment"';
  }

  const parts: string[] = [];

  if (answer.selectedOptionId) {
    parts.push(`User selected option: "${answer.selectedOptionId}"`);
  }

  if (answer.freeTextResponse) {
    parts.push(`User provided additional context: "${answer.freeTextResponse}"`);
  }

  return parts.length > 0
    ? `User clarification: ${parts.join('. ')}`
    : 'User provided no specific answer';
}
