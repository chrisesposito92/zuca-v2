import { z } from 'zod';

/**
 * Shared clarification fields merged into each step's output schema.
 * When the LLM needs user input, it sets needs_clarification to true.
 *
 * Extracted to its own file to break a circular dependency:
 * schemas/index.ts re-exports step schemas, and step schemas import
 * ClarificationFieldsSchema. With both in index.ts, Turbopack's
 * module evaluation order causes a ReferenceError in production builds.
 */
export const ClarificationFieldsSchema = z.object({
  needs_clarification: z.boolean().optional().default(false).describe('Set to true if user clarification is needed before producing a confident result'),
  clarification_question: z.string().nullable().optional().default(null).describe('The question to ask the user. Null if needs_clarification is false'),
  clarification_context: z.string().nullable().optional().default(null).describe('Why this clarification is needed. Null if needs_clarification is false'),
  clarification_options: z.array(z.object({
    id: z.string(),
    label: z.string(),
    description: z.string().optional(),
  })).nullable().optional().default(null).describe('2-4 options for the user to choose from. Null if needs_clarification is false'),
  clarification_priority: z.enum(['critical', 'important', 'helpful']).nullable().optional().default(null).describe('How important is this clarification. Null if needs_clarification is false'),
});

export type ClarificationFields = z.infer<typeof ClarificationFieldsSchema>;
