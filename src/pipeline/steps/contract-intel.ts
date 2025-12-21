import { complete, getZuoraMcpTools, ReasoningEffort } from '../../llm/client';
import { loadPrompt, PROMPTS } from '../../llm/prompts/index';
import { ContractIntel, ContractIntelSchema } from '../../types/output';
import { ZucaInput } from '../../types/input';
import { debugLog } from '../../config';

/**
 * JSON schema for Contract Intel structured output
 */
const contractIntelJsonSchema = {
  type: 'object',
  properties: {
    service_start_mdy: { type: 'string' },
    service_end_mdy: { type: ['string', 'null'] },
    term_months: { type: 'number' },
    billing_period: {
      type: ['string', 'null'],
      enum: ['Month', 'Quarter', 'Year', 'Semi-Annual', null],
    },
    billing_timing: {
      type: ['string', 'null'],
      enum: ['InAdvance', 'InArrears', null],
    },
    trigger_event: { type: 'string' },
    go_live_mdy: { type: 'string' },
    booking_mdy: { type: 'string' },
    renewal_term_months: { type: 'number' },
  },
  required: [
    'service_start_mdy',
    'service_end_mdy',
    'term_months',
    'billing_period',
    'billing_timing',
    'trigger_event',
    'go_live_mdy',
    'booking_mdy',
    'renewal_term_months',
  ],
  additionalProperties: false,
};

/**
 * Build the user message for contract intel extraction
 */
function buildUserMessage(input: ZucaInput): string {
  const parts = [
    `Customer: ${input.customer_name}`,
    `Contract Start Date: ${input.contract_start_date}`,
    `Terms (Months): ${input.terms_months}`,
    `Billing Period: ${input.billing_period}`,
    '',
    'Use Case Description:',
    input.use_case_description,
  ];

  if (input.rev_rec_notes) {
    parts.push('', 'Revenue Recognition Notes:', input.rev_rec_notes);
  }

  return parts.join('\n');
}

/**
 * Execute the Contract Intel step
 * Extracts key contract parameters from the use case description
 */
export async function extractContractIntel(
  input: ZucaInput,
  previousContractIntel?: ContractIntel,
  reasoningEffort: ReasoningEffort = 'low' // Simple extraction task
): Promise<ContractIntel> {
  debugLog('Extracting contract intel from use case');

  const systemPrompt = await loadPrompt(PROMPTS.CONTRACT_INTEL);
  let userMessage = buildUserMessage(input);

  // Include previous results for multi-turn support
  if (previousContractIntel) {
    userMessage = `Previous Results:\n${JSON.stringify(previousContractIntel, null, 2)}\n\nUser Query:\n${userMessage}`;
  }

  const result = await complete<ContractIntel>({
    systemPrompt,
    userMessage,
    responseSchema: contractIntelJsonSchema,
    tools: ['web_search', 'code_interpreter'],
    mcpTools: getZuoraMcpTools(),
    reasoningEffort,
  });

  if (!result.structured) {
    throw new Error('Failed to extract contract intel: no structured output');
  }

  // Validate with Zod
  const validation = ContractIntelSchema.safeParse(result.structured);
  if (!validation.success) {
    debugLog('Contract intel validation failed:', validation.error.errors);
    // Return raw result anyway, let caller decide how to handle
  }

  debugLog('Contract intel extracted:', result.structured);
  return result.structured;
}

/**
 * Format contract intel for use in downstream prompts
 */
export function formatContractIntelForContext(intel: ContractIntel): string {
  return [
    `Service Start: ${intel.service_start_mdy}`,
    intel.service_end_mdy ? `Service End: ${intel.service_end_mdy}` : null,
    `Term: ${intel.term_months} months`,
    `Billing Period: ${intel.billing_period || 'not specified'}`,
    `Billing Timing: ${intel.billing_timing || 'not specified'}`,
    `Trigger Event: ${intel.trigger_event}`,
    `Go-Live Date: ${intel.go_live_mdy}`,
    `Booking Date: ${intel.booking_mdy}`,
    `Renewal Term: ${intel.renewal_term_months} months`,
  ]
    .filter(Boolean)
    .join('\n');
}
