import { complete, getZuoraMcpTools, ReasoningEffort } from '../../llm/client.js';
import { loadPrompt, PROMPTS } from '../../llm/prompts/index.js';
import {
  RevRecWaterfallOutput,
  RevRecWaterfallOutputSchema,
  ContractsOrdersOutput,
  PobMappingOutput,
  ContractIntel,
} from '../../types/output.js';
import { formatContractsOrdersForContext } from './build-contracts-orders.js';
import { formatPobMappingForContext } from './assign-pob-templates.js';
import { formatContractIntelForContext } from './contract-intel.js';
import { debugLog } from '../../config.js';

/**
 * JSON schema for Rev Rec Waterfall structured output
 */
const revRecWaterfallJsonSchema = {
  type: 'object',
  properties: {
    zr_revrec: {
      type: 'array',
      items: {
        type: 'object',
        properties: {
          'Line Item Num': { type: 'number' },
          'POB Name': { type: 'string' },
          'Event Name': { type: 'string' },
          'Revenue Start Date': { type: 'string' },
          'Revenue End Date': { type: 'string' },
          'Ext Allocated Price': { type: 'number' },
          'Period': { type: 'string' },
          'Amount': { type: 'number' },
        },
        required: [
          'Line Item Num',
          'POB Name',
          'Event Name',
          'Revenue Start Date',
          'Revenue End Date',
          'Ext Allocated Price',
          'Period',
          'Amount',
        ],
        additionalProperties: false,
      },
    },
    assumptions: { type: 'array', items: { type: 'string' } },
    open_questions: { type: 'array', items: { type: 'string' } },
  },
  required: ['zr_revrec', 'assumptions', 'open_questions'],
  additionalProperties: false,
};

/**
 * Build the user message for Rev Rec Waterfall generation
 */
function buildUserMessage(
  contractsOrders: ContractsOrdersOutput,
  pobMapping: PobMappingOutput,
  contractIntel: ContractIntel
): string {
  const parts = [
    'Generate the revenue recognition waterfall based on the following:',
    '',
    'Contract Intel:',
    formatContractIntelForContext(contractIntel),
    '',
    'POB Mapping (with ratable methods and release events):',
    formatPobMappingForContext(pobMapping),
    '',
    'Contracts/Orders Table:',
    formatContractsOrdersForContext(contractsOrders),
    '',
    'Calculate monthly recognition amounts based on:',
    '- Ratable method (spread over time vs immediate)',
    '- Release event (when revenue is released)',
    '- Revenue start/end dates from contracts/orders',
    '',
    'Return one row per Line Item per Period with the recognition amount.',
  ];

  return parts.join('\n');
}

/**
 * Execute the Build Rev Rec Waterfall step
 * Generates monthly revenue recognition schedule
 */
export async function buildRevRecWaterfall(
  contractsOrders: ContractsOrdersOutput,
  pobMapping: PobMappingOutput,
  contractIntel: ContractIntel,
  previousOutput?: RevRecWaterfallOutput,
  reasoningEffort: ReasoningEffort = 'high' // Complex rev rec calculations need thorough reasoning
): Promise<RevRecWaterfallOutput> {
  debugLog('Building Rev Rec Waterfall');

  const systemPrompt = await loadPrompt(PROMPTS.BUILD_REVREC_WATERFALL);
  let userMessage = buildUserMessage(contractsOrders, pobMapping, contractIntel);

  // Include previous results for multi-turn support
  if (previousOutput) {
    userMessage = `Previous Results:\n${JSON.stringify(previousOutput, null, 2)}\n\nUser Query:\n${userMessage}`;
  }

  const result = await complete<RevRecWaterfallOutput>({
    systemPrompt,
    userMessage,
    responseSchema: revRecWaterfallJsonSchema,
    tools: ['web_search', 'code_interpreter'],
    mcpTools: getZuoraMcpTools(),
    reasoningEffort,
  });

  if (!result.structured) {
    throw new Error('Failed to build Rev Rec Waterfall: no structured output');
  }

  // Validate with Zod
  const validation = RevRecWaterfallOutputSchema.safeParse(result.structured);
  if (!validation.success) {
    debugLog('Rev Rec Waterfall validation failed:', validation.error.errors);
  }

  debugLog('Rev Rec Waterfall built:', {
    rowCount: result.structured.zr_revrec?.length,
    totalRecognized: result.structured.zr_revrec?.reduce(
      (sum, row) => sum + (row.Amount || 0),
      0
    ),
  });

  return result.structured;
}

/**
 * Format Rev Rec Waterfall for downstream prompts or display
 */
export function formatRevRecWaterfallForContext(output: RevRecWaterfallOutput): string {
  // Group by Line Item Num
  const byLineItem = new Map<number, typeof output.zr_revrec>();
  for (const row of output.zr_revrec) {
    const existing = byLineItem.get(row['Line Item Num']) || [];
    existing.push(row);
    byLineItem.set(row['Line Item Num'], existing);
  }

  const lines: string[] = [];
  for (const [lineNum, rows] of byLineItem) {
    const firstRow = rows[0];
    const totalRecognized = rows.reduce((sum, r) => sum + r.Amount, 0);
    lines.push(
      `Line ${lineNum} (${firstRow['POB Name']}): ` +
      `$${totalRecognized.toFixed(2)} recognized over ${rows.length} periods`
    );
  }

  return lines.join('\n');
}

/**
 * Pivot waterfall data for tabular display
 * Returns rows with Line Item as first column and months as subsequent columns
 */
export function pivotWaterfallForDisplay(
  output: RevRecWaterfallOutput
): { headers: string[]; rows: (string | number)[][] } {
  // Get unique periods in order
  const periods = [...new Set(output.zr_revrec.map((r) => r.Period))].sort();

  // Get unique line items
  const lineItems = [...new Set(output.zr_revrec.map((r) => r['Line Item Num']))].sort((a, b) => a - b);

  // Build header row
  const headers = ['Line Item', 'POB Name', 'Total', ...periods];

  // Build data rows
  const rows: (string | number)[][] = [];
  for (const lineNum of lineItems) {
    const lineRows = output.zr_revrec.filter((r) => r['Line Item Num'] === lineNum);
    const pobName = lineRows[0]?.['POB Name'] || '';
    const total = lineRows.reduce((sum, r) => sum + r.Amount, 0);

    const row: (string | number)[] = [lineNum, pobName, total];
    for (const period of periods) {
      const periodRow = lineRows.find((r) => r.Period === period);
      row.push(periodRow?.Amount || 0);
    }
    rows.push(row);
  }

  return { headers, rows };
}
