import { z } from 'zod';
import {
  ContractIntelSchema,
  DetectedCapabilitiesSchema,
} from '../../types/output';
import { ClarificationFieldsSchema } from './clarification';

/**
 * Nested Zod output schema for the Analyze Contract step.
 *
 * Replaces the flat JSON schema + manual split pattern from the current pipeline.
 * The SDK uses this as `outputType` to get structured, validated output.
 */
export const AnalyzeContractOutputSchema = z.object({
  contractIntel: ContractIntelSchema.describe('Extracted contract parameters from the input'),
  detectedCapabilities: DetectedCapabilitiesSchema.describe('Detected Zuora Billing and Revenue capabilities'),
}).merge(ClarificationFieldsSchema);

export type AnalyzeContractOutput = z.infer<typeof AnalyzeContractOutputSchema>;
