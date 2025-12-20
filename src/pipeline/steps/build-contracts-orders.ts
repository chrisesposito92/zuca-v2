import { complete } from '../../llm/client.js';
import { loadPrompt, PROMPTS } from '../../llm/prompts/index.js';
import {
  ContractsOrdersOutput,
  ContractsOrdersOutputSchema,
  SubscriptionSpec,
  PobMappingOutput,
  ContractIntel,
} from '../../types/output.js';
import { ZucaInput } from '../../types/input.js';
import { formatSubscriptionSpecForContext } from './generate-subscription.js';
import { formatPobMappingForContext } from './assign-pob-templates.js';
import { formatContractIntelForContext } from './contract-intel.js';
import { debugLog } from '../../config.js';

/**
 * JSON schema for Contracts/Orders structured output
 */
const contractsOrdersJsonSchema = {
  type: 'object',
  properties: {
    zr_contracts_orders: {
      type: 'array',
      items: {
        type: 'object',
        properties: {
          'POB Name': { type: 'string' },
          'POB Template': { type: 'string' },
          'POB Satisfied': { type: 'boolean' },
          'Release Event': { type: 'string' },
          'Billing Period': { type: 'string' },
          'Billing Timing': { type: 'string' },
          'Terms Months': { type: 'number' },
          'Trigger Event': { type: 'string' },
          'Lead Line': { type: 'boolean' },
          'Ordered Qty': { type: 'number' },
          'Line Item Num': { type: 'number' },
          'Subscription Name': { type: 'string' },
          'Subscription Version': { type: 'number' },
          'Sales Order Date': { type: 'string' },
          'RPC Segment': { type: 'string' },
          'RPC Type': { type: 'string' },
          'Revenue Start Date': { type: 'string' },
          'Revenue End Date': { type: 'string' },
          'Unit List Price': { type: 'number' },
          'Unit Sell Price': { type: 'number' },
          'Ext List Price': { type: 'number' },
          'Ext Sell Price': { type: 'number' },
          'SSP Price': { type: 'number' },
          'Ext SSP Price': { type: 'number' },
          'SSP Percent': { type: 'number' },
          'Ext Allocated Price': { type: 'number' },
          'Carves Adjustment': { type: 'number' },
          'Allocation Eligible Flag': { type: 'boolean' },
          'Unreleased Revenue': { type: 'number' },
          'Released Revenue': { type: 'number' },
          'Customer Name': { type: 'string' },
          'POB IDENTIFIER': { type: 'string' },
          'Product Category': { type: 'string' },
          'Product Family': { type: 'string' },
        },
        required: [
          'POB Name',
          'POB Template',
          'POB Satisfied',
          'Release Event',
          'Billing Period',
          'Billing Timing',
          'Terms Months',
          'Trigger Event',
          'Lead Line',
          'Ordered Qty',
          'Line Item Num',
          'Subscription Name',
          'Subscription Version',
          'Sales Order Date',
          'RPC Segment',
          'RPC Type',
          'Revenue Start Date',
          'Revenue End Date',
          'Unit List Price',
          'Unit Sell Price',
          'Ext List Price',
          'Ext Sell Price',
          'SSP Price',
          'Ext SSP Price',
          'SSP Percent',
          'Ext Allocated Price',
          'Carves Adjustment',
          'Allocation Eligible Flag',
          'Unreleased Revenue',
          'Released Revenue',
          'Customer Name',
          'POB IDENTIFIER',
          'Product Category',
          'Product Family',
        ],
        additionalProperties: false,
      },
    },
    assumptions: { type: 'array', items: { type: 'string' } },
    open_questions: { type: 'array', items: { type: 'string' } },
  },
  required: ['zr_contracts_orders', 'assumptions', 'open_questions'],
  additionalProperties: false,
};

/**
 * Build the user message for Contracts/Orders table generation
 */
function buildUserMessage(
  input: ZucaInput,
  subscriptionSpec: SubscriptionSpec,
  pobMapping: PobMappingOutput,
  contractIntel: ContractIntel
): string {
  const parts = [
    `Customer: ${input.customer_name}`,
    '',
    'Use case & notes:',
    input.use_case_description,
    '',
    `Allocations: ${input.is_allocations ? 'Yes' : 'No'}`,
    input.is_allocations ? `Allocation Method: ${input.allocation_method || 'Use List Price'}` : '',
    '',
    'Contract Intel:',
    formatContractIntelForContext(contractIntel),
    '',
    'Subscription Spec:',
    formatSubscriptionSpecForContext(subscriptionSpec),
    '',
    'POB Mapping:',
    formatPobMappingForContext(pobMapping),
    '',
    'Generate the ZR Contracts/Orders table with proper pricing and allocations.',
  ];

  return parts.filter(Boolean).join('\n');
}

/**
 * Execute the Build Contracts/Orders Table step
 * Generates ZR contracts/orders table with allocated prices
 */
export async function buildContractsOrders(
  input: ZucaInput,
  subscriptionSpec: SubscriptionSpec,
  pobMapping: PobMappingOutput,
  contractIntel: ContractIntel,
  previousOutput?: ContractsOrdersOutput
): Promise<ContractsOrdersOutput> {
  debugLog('Building Contracts/Orders table');

  const systemPrompt = await loadPrompt(PROMPTS.BUILD_CONTRACTS_ORDERS);
  let userMessage = buildUserMessage(input, subscriptionSpec, pobMapping, contractIntel);

  // Include previous results for multi-turn support
  if (previousOutput) {
    userMessage = `Previous Results:\n${JSON.stringify(previousOutput, null, 2)}\n\nUser Query:\n${userMessage}`;
  }

  const result = await complete<ContractsOrdersOutput>({
    systemPrompt,
    userMessage,
    responseSchema: contractsOrdersJsonSchema,
    tools: ['code_interpreter'], // Enable for complex calculations
    temperature: 0.3,
  });

  if (!result.structured) {
    throw new Error('Failed to build Contracts/Orders table: no structured output');
  }

  // Validate with Zod
  const validation = ContractsOrdersOutputSchema.safeParse(result.structured);
  if (!validation.success) {
    debugLog('Contracts/Orders validation failed:', validation.error.errors);
  }

  debugLog('Contracts/Orders table built:', {
    rowCount: result.structured.zr_contracts_orders?.length,
    totalAllocatedPrice: result.structured.zr_contracts_orders?.reduce(
      (sum, row) => sum + (row['Ext Allocated Price'] || 0),
      0
    ),
  });

  return result.structured;
}

/**
 * Format Contracts/Orders output for downstream prompts
 */
export function formatContractsOrdersForContext(output: ContractsOrdersOutput): string {
  const lines = output.zr_contracts_orders.map(
    (row) =>
      `Line ${row['Line Item Num']}: ${row['POB Name']} | ` +
      `${row['RPC Type']} | ${row['Revenue Start Date']} - ${row['Revenue End Date']} | ` +
      `Allocated: $${row['Ext Allocated Price'].toFixed(2)}`
  );

  return lines.join('\n');
}
