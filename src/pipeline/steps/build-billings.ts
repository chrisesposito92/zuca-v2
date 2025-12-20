import { complete } from '../../llm/client.js';
import { loadPrompt, PROMPTS } from '../../llm/prompts/index.js';
import {
  BillingsOutput,
  BillingsOutputSchema,
  SubscriptionSpec,
  ContractIntel,
} from '../../types/output.js';
import { ZucaInput } from '../../types/input.js';
import { formatSubscriptionSpecForContext } from './generate-subscription.js';
import { formatContractIntelForContext } from './contract-intel.js';
import { debugLog } from '../../config.js';

/**
 * JSON schema for Billings structured output
 */
const billingsJsonSchema = {
  type: 'object',
  properties: {
    zb_billings: {
      type: 'array',
      items: {
        type: 'object',
        properties: {
          'Billing Date': { type: 'string' },
          'Charge Name': { type: 'string' },
          'Rate Plan': { type: 'string' },
          'Product': { type: 'string' },
          'Billing Period Start': { type: 'string' },
          'Billing Period End': { type: 'string' },
          'Quantity': { type: 'number' },
          'Unit Price': { type: 'number' },
          'Amount': { type: 'number' },
          'Currency': { type: 'string' },
        },
        required: [
          'Billing Date',
          'Charge Name',
          'Rate Plan',
          'Billing Period Start',
          'Billing Period End',
          'Amount',
          'Currency',
        ],
      },
    },
    assumptions: { type: 'array', items: { type: 'string' } },
    open_questions: { type: 'array', items: { type: 'string' } },
  },
  required: ['zb_billings', 'assumptions', 'open_questions'],
};

/**
 * Build the user message for Billings table generation
 */
function buildUserMessage(
  input: ZucaInput,
  subscriptionSpec: SubscriptionSpec,
  contractIntel: ContractIntel
): string {
  const parts = [
    `Customer: ${input.customer_name}`,
    '',
    'Use case & notes:',
    input.use_case_description,
    '',
    'Contract Intel:',
    formatContractIntelForContext(contractIntel),
    '',
    'Subscription Spec:',
    formatSubscriptionSpecForContext(subscriptionSpec),
    '',
    'Generate the complete billing schedule for this subscription.',
    'Include all billing events from contract start through contract end.',
  ];

  return parts.join('\n');
}

/**
 * Execute the Build Billings Table step
 * Generates complete billing schedule based on subscription spec
 */
export async function buildBillings(
  input: ZucaInput,
  subscriptionSpec: SubscriptionSpec,
  contractIntel: ContractIntel,
  previousOutput?: BillingsOutput
): Promise<BillingsOutput> {
  debugLog('Building Billings table');

  const systemPrompt = await loadPrompt(PROMPTS.BUILD_BILLINGS);
  let userMessage = buildUserMessage(input, subscriptionSpec, contractIntel);

  // Include previous results for multi-turn support
  if (previousOutput) {
    userMessage = `Previous Results:\n${JSON.stringify(previousOutput, null, 2)}\n\nUser Query:\n${userMessage}`;
  }

  const result = await complete<BillingsOutput>({
    systemPrompt,
    userMessage,
    responseSchema: billingsJsonSchema,
    tools: ['code_interpreter'], // Enable for date calculations
    temperature: 0.3,
  });

  if (!result.structured) {
    throw new Error('Failed to build Billings table: no structured output');
  }

  // Validate with Zod
  const validation = BillingsOutputSchema.safeParse(result.structured);
  if (!validation.success) {
    debugLog('Billings validation failed:', validation.error.errors);
  }

  debugLog('Billings table built:', {
    rowCount: result.structured.zb_billings?.length,
    totalBilled: result.structured.zb_billings?.reduce(
      (sum, row) => sum + (row.Amount || 0),
      0
    ),
  });

  return result.structured;
}

/**
 * Format Billings output for downstream prompts
 */
export function formatBillingsForContext(output: BillingsOutput): string {
  const lines = output.zb_billings.map(
    (row) =>
      `${row['Billing Date']}: ${row['Charge Name']} | ` +
      `${row['Billing Period Start']} - ${row['Billing Period End']} | ` +
      `$${row.Amount.toFixed(2)} ${row.Currency}`
  );

  return lines.join('\n');
}
