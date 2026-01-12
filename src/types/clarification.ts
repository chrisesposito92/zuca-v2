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
  selectedOptionLabel: z.string().optional(),
  selectedOptionDescription: z.string().optional(),
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
 *
 * IMPORTANT: These fields are REQUIRED in the schema to ensure LLMs always provide them.
 * When no clarification is needed, set needs_clarification: false and leave others null/empty.
 */
export const clarificationOutputJsonSchema = {
  type: 'object',
  properties: {
    needs_clarification: {
      type: 'boolean',
      description:
        'REQUIRED. Set to true ONLY if you need to ask the user a clarification question AND you have filled in clarification_question and clarification_options below. Set to false otherwise.',
    },
    clarification_question: {
      type: ['string', 'null'],
      description:
        'REQUIRED when needs_clarification is true. The question to ask the user (1-2 sentences). Set to null if needs_clarification is false.',
    },
    clarification_context: {
      type: ['string', 'null'],
      description: 'Brief context explaining why this matters. Set to null if not needed.',
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
        additionalProperties: false,
      },
      description:
        'REQUIRED when needs_clarification is true. 2-4 concrete options representing the most likely scenarios. Set to null if needs_clarification is false.',
    },
    clarification_priority: {
      type: ['string', 'null'],
      enum: ['critical', 'important', 'helpful', null],
      description: 'How important is this clarification. Set to null if not needed.',
    },
  },
  // These fields are REQUIRED in the schema - LLM must always output them
  required: [
    'needs_clarification',
    'clarification_question',
    'clarification_options',
  ],
};

/**
 * Required fields from clarification schema to spread into step schemas
 * Use: required: [...otherFields, ...clarificationRequiredFields]
 */
export const clarificationRequiredFields = clarificationOutputJsonSchema.required;

/**
 * Raw clarification output from LLM (flat structure before transformation)
 * All fields are nullable - when needs_clarification is false, others should be null
 */
export interface RawClarificationOutput {
  needs_clarification?: boolean | null;
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
 * Transform raw LLM clarification output to structured format
 * Returns null if the clarification request is invalid or not needed
 */
export function transformClarificationOutput(
  stepName: string,
  raw: RawClarificationOutput
): StepClarificationRequest | null {
  // Check if clarification is needed
  if (!raw.needs_clarification) {
    return null;
  }

  // Validate required companion fields
  if (!raw.clarification_question || raw.clarification_question.trim() === '') {
    console.warn(
      `[${stepName}] Clarification requested but clarification_question is missing/empty`
    );
    return null;
  }

  if (!raw.clarification_options || !Array.isArray(raw.clarification_options)) {
    console.warn(
      `[${stepName}] Clarification requested but clarification_options is missing/not an array`
    );
    return null;
  }

  // Validate options count
  if (raw.clarification_options.length < 2 || raw.clarification_options.length > 4) {
    console.warn(
      `[${stepName}] Clarification options count invalid: ${raw.clarification_options.length} (need 2-4)`
    );
    return null;
  }

  return {
    type: 'clarification_needed',
    question: {
      questionId: `${stepName}:${Date.now()}`,
      stepName,
      question: raw.clarification_question,
      context: raw.clarification_context ?? undefined, // Convert null to undefined
      options: raw.clarification_options.map((opt) => ({
        id: opt.id,
        label: opt.label,
        description: opt.description,
      })),
      allowSkip: true,
      allowFreeText: true,
      priority: raw.clarification_priority ?? 'important', // Convert null to default
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

  if (answer.selectedOptionId || answer.selectedOptionLabel) {
    const label = answer.selectedOptionLabel ?? answer.selectedOptionId;
    const suffix =
      answer.selectedOptionId && label && label !== answer.selectedOptionId
        ? ` (id: "${answer.selectedOptionId}")`
        : '';
    if (label) {
      parts.push(`User selected option: "${label}"${suffix}`);
    }
    if (answer.selectedOptionDescription) {
      parts.push(`Option details: "${answer.selectedOptionDescription}"`);
    }
  }

  if (answer.freeTextResponse) {
    parts.push(`User provided additional context: "${answer.freeTextResponse}"`);
  }

  return parts.length > 0
    ? `User clarification: ${parts.join('. ')}`
    : 'User provided no specific answer';
}
