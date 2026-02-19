import { z } from 'zod';
import { BillingsOutputSchema } from '../../types/output';
import { ClarificationFieldsSchema } from './clarification';

/**
 * Output schema for Build Billings step.
 * Reuses the existing Zod schema and merges clarification fields.
 */
export const BuildBillingsOutputSchema = BillingsOutputSchema
  .merge(ClarificationFieldsSchema);

export type BuildBillingsOutput = z.infer<typeof BuildBillingsOutputSchema>;
