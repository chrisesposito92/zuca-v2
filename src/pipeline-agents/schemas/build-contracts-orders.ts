import { z } from 'zod';
import { ContractsOrdersOutputSchema } from '../../types/output';
import { ClarificationFieldsSchema } from './clarification';

/**
 * Output schema for Build Contracts/Orders step.
 * Reuses the existing Zod schema and merges clarification fields.
 */
export const BuildContractsOrdersOutputSchema = ContractsOrdersOutputSchema
  .merge(ClarificationFieldsSchema);

export type BuildContractsOrdersOutput = z.infer<typeof BuildContractsOrdersOutputSchema>;
