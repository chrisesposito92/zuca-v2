import { z } from 'zod';
import { RevRecWaterfallOutputSchema } from '../../types/output';
import { ClarificationFieldsSchema } from './clarification';

/**
 * Output schema for Build Rev Rec Waterfall step.
 * Reuses the existing Zod schema and merges clarification fields.
 */
export const BuildRevRecWaterfallOutputSchema = RevRecWaterfallOutputSchema
  .merge(ClarificationFieldsSchema);

export type BuildRevRecWaterfallOutput = z.infer<typeof BuildRevRecWaterfallOutputSchema>;
