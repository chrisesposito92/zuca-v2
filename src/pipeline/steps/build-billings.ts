import { complete, getZuoraMcpTools, ReasoningEffort } from '../../llm/client';
import type { LlmModel } from '../../types/llm';
import { loadPrompt, PROMPTS } from '../../llm/prompts/index';
import {
  BillingsOutput,
  BillingsOutputSchema,
  SubscriptionSpec,
  ContractIntel,
} from '../../types/output';
import { ZucaInput } from '../../types/input';
import { formatSubscriptionSpecForContext } from './generate-subscription';
import { formatContractIntelForContext } from './contract-intel';
import { debugLog } from '../../config';
import { getDocContext, isIndexReady } from '../../rag';
import { getCorrectionsContext } from '../../self-learn';

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
          'Invoice Date': { type: 'string', description: 'Date the invoice is generated (MM/DD/YYYY)' },
          'Billing Date': { type: 'string', description: 'Target billing date per charge schedule (MM/DD/YYYY)' },
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
          'Invoice Date',
          'Billing Date',
          'Charge Name',
          'Rate Plan',
          'Product',
          'Billing Period Start',
          'Billing Period End',
          'Quantity',
          'Unit Price',
          'Amount',
          'Currency',
        ],
        additionalProperties: false,
      },
    },
    assumptions: { type: 'array', items: { type: 'string' } },
    open_questions: { type: 'array', items: { type: 'string' } },
  },
  required: ['zb_billings', 'assumptions', 'open_questions'],
  additionalProperties: false,
};

/**
 * Build the user message for Billings table generation
 */
function buildUserMessage(
  input: ZucaInput,
  subscriptionSpec: SubscriptionSpec,
  contractIntel: ContractIntel,
  docContext?: string,
  correctionsContext?: string
): string {
  const parts = [
    `Customer: ${input.customer_name}`,
    '',
    'Use case & notes:',
    input.use_case_description,
    '',
  ];

  // Include learned corrections if available
  if (correctionsContext) {
    parts.push(correctionsContext, '');
  }

  // Include retrieved documentation if available
  if (docContext) {
    parts.push(docContext, '');
  }

  parts.push(
    'Contract Intel:',
    formatContractIntelForContext(contractIntel),
    '',
    'Subscription Spec:',
    formatSubscriptionSpecForContext(subscriptionSpec),
    '',
    'Generate the complete billing schedule for this subscription.',
    'Include all billing events from contract start through contract end.'
  );

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
  previousOutput?: BillingsOutput,
  reasoningEffort: ReasoningEffort = 'medium', // Date calculations need solid reasoning
  model?: LlmModel
): Promise<BillingsOutput> {
  debugLog('Building Billings table');

  // Retrieve relevant documentation if RAG index is available
  // Query focuses on invoice items, proration, and billing patterns
  let docContext: string | undefined;
  if (await isIndexReady()) {
    debugLog('RAG index available, retrieving docs for billings...');
    const query = `Zuora Billing invoice items proration bill run ${input.billing_period} billing`;
    docContext = await getDocContext(query, { limit: 3, minScore: 0.3 });
    debugLog('Retrieved doc context', { length: docContext?.length || 0 });
  }

  // Retrieve learned corrections for this step
  const inputSummary = [
    `Customer: ${input.customer_name}`,
    `Description: ${input.use_case_description?.substring(0, 200)}`,
    `Billing Period: ${input.billing_period}`,
    `Terms: ${input.terms_months} months`,
  ].join('\n');

  const correctionsContext = await getCorrectionsContext({
    stepName: 'billings',
    inputSummary,
  });
  if (correctionsContext) {
    debugLog('Injecting corrections context', { length: correctionsContext.length });
  }

  const systemPrompt = await loadPrompt(PROMPTS.BUILD_BILLINGS);
  let userMessage = buildUserMessage(
    input,
    subscriptionSpec,
    contractIntel,
    docContext,
    correctionsContext
  );

  // Include previous results for multi-turn support
  if (previousOutput) {
    userMessage = `Previous Results:\n${JSON.stringify(previousOutput, null, 2)}\n\nUser Query:\n${userMessage}`;
  }

  const result = await complete<BillingsOutput>({
    systemPrompt,
    userMessage,
    responseSchema: billingsJsonSchema,
    tools: ['web_search', 'code_interpreter'],
    mcpTools: getZuoraMcpTools(),
    reasoningEffort,
    model,
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
