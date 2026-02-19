import { z } from 'zod';

/**
 * Output schema for Summarize step.
 * No clarification fields — this is a simple consolidation step.
 */
export const SummarizeOutputSchema = z.object({
  assumptions: z.array(z.string()).describe('Consolidated assumptions from all pipeline steps'),
  open_questions: z.array(z.string()).describe('Consolidated open questions from all pipeline steps'),
});

export type SummarizeOutput = z.infer<typeof SummarizeOutputSchema>;
