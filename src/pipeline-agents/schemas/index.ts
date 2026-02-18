import { z } from 'zod';

/**
 * Shared clarification fields merged into each step's output schema.
 * When the LLM needs user input, it sets needs_clarification to true.
 */
export const ClarificationFieldsSchema = z.object({
  needs_clarification: z.boolean().describe('Set to true if user clarification is needed before producing a confident result'),
  clarification_question: z.string().nullable().describe('The question to ask the user. Null if needs_clarification is false'),
  clarification_context: z.string().nullable().describe('Why this clarification is needed. Null if needs_clarification is false'),
  clarification_options: z.array(z.object({
    id: z.string(),
    label: z.string(),
    description: z.string().optional(),
  })).nullable().describe('2-4 options for the user to choose from. Null if needs_clarification is false'),
  clarification_priority: z.enum(['critical', 'important', 'helpful']).nullable().describe('How important is this clarification. Null if needs_clarification is false'),
});

export type ClarificationFields = z.infer<typeof ClarificationFieldsSchema>;

// Re-export all step schemas
export { AnalyzeContractOutputSchema } from './analyze-contract';
export { createDesignSubscriptionOutputSchema } from './design-subscription';
export { BuildContractsOrdersOutputSchema } from './build-contracts-orders';
export { BuildBillingsOutputSchema } from './build-billings';
export { BuildRevRecWaterfallOutputSchema } from './build-revrec-waterfall';
export { SummarizeOutputSchema } from './summarize';
export { SelfEvalOutputSchema } from './self-eval';
