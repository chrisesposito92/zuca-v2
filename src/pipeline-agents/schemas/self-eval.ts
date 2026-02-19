import { z } from 'zod';

/**
 * Output schema for Ralph self-evaluation agent.
 *
 * Uses Zod instead of the raw JSON schema in src/types/ralph.ts,
 * giving us both outputType validation and TypeScript types.
 */
export const SelfEvalOutputSchema = z.object({
  decision: z.enum(['done', 'iterate', 'clarify']).describe(
    'Your decision: "done" if output is good, "iterate" if you need to try again, "clarify" if you need user input'
  ),
  confidence: z.number().min(0).max(1).describe(
    'Your confidence in the output quality (0-1). Use >0.85 for "done"'
  ),
  reasoning: z.string().describe('Brief explanation of your decision (1-2 sentences)'),
  iterationFeedback: z.string().nullable().describe(
    'For "iterate": What specifically should be fixed on the next attempt. Null otherwise'
  ),
  specificIssues: z.array(z.object({
    field: z.string().describe('The field path with the issue'),
    issue: z.string().describe('What is wrong'),
    suggestion: z.string().describe('How to fix it'),
  })).nullable().describe('For "iterate": List of specific issues found. Null otherwise'),
  clarificationQuestion: z.string().nullable().describe(
    'For "clarify": The question to ask the user. Null otherwise'
  ),
  clarificationContext: z.string().nullable().describe(
    'For "clarify": Why this clarification is needed. Null otherwise'
  ),
  clarificationOptions: z.array(z.object({
    id: z.string(),
    label: z.string(),
    description: z.string().optional(),
  })).nullable().describe('For "clarify": 2-4 options for the user. Null otherwise'),
  clarificationPriority: z.enum(['critical', 'important', 'helpful']).nullable().describe(
    'For "clarify": How important is this question. Null otherwise'
  ),
});

export type SelfEvalOutput = z.infer<typeof SelfEvalOutputSchema>;
