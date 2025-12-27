import { complete, ReasoningEffort } from '../../../llm/client';
import type { LlmModel } from '../../../types/llm';
import { loadPrompt, PROMPTS } from '../../../llm/prompts/index';
import {
  RevenueSnapshotInput,
  RevenueSnapshotSource,
  RevenueSnapshotTableOutput,
  RevenueSnapshotTableOutputSchema,
} from '../../../types/revenue-snapshot';
import { loadBillingMappingCsv } from '../mappings';
import { extractJsonPayload } from './json';
// Field list sourced from docs/Golden Use Cases/golden_use_cases_zr_tables.json (BILLINGS).
const BILLINGS_FIELDS = [
  'Billing Quantity',
  'Billing Reference',
  'Ext List Price',
  'Functional Currency',
  'Functional Ex Rate',
  'Global Ex Rate',
  'Invoice Amount (F)',
  'Invoice Amount (T)',
  'Invoice Date',
  'Invoice Line ID',
  'Invoice Line Number',
  'Invoice Num',
  'Invoice Owner',
  'Invoice Qty',
  'Item Number',
  'Line Item Num',
  'Orig Inv Line ID',
  'Parent Charge Number',
  'Parent Charge Segment',
  'RPC Num',
  'RPC Segment',
  'RPC Trigger Event',
  'RPC Type',
  'Rate Plan Name',
  'Rc Bill Cancel Flag',
  'Rc Bill Credit Rule',
  'Rc Bill Source',
  'Rc Bill Type',
  'Rc Bill Unit List Price',
  'Rc Bill Unit Sell Price',
  'Released Revenue',
  'Revenue End Date',
  'Revenue Start Date',
  'Sales Order Line ID',
  'Sales Order Line Num',
  'Sales Order Num',
  'Subscription End Date',
  'Subscription Name',
  'Subscription Start Date',
  'Transaction Currency',
  'Unreleased Revenue',
  'Void Flag',
] as const;

const VALUE_SCHEMA = { type: ['string', 'number', 'boolean', 'null'] } as const;

const BILLINGS_FIELD_PROPERTIES = BILLINGS_FIELDS.reduce<Record<string, typeof VALUE_SCHEMA>>(
  (acc, field) => {
    acc[field] = VALUE_SCHEMA;
    return acc;
  },
  {}
);

const snapshotTableSchema = {
  type: 'object',
  properties: {
    rows: {
      type: 'array',
      items: {
        type: 'object',
        properties: BILLINGS_FIELD_PROPERTIES,
        additionalProperties: false,
      },
    },
    assumptions: { type: 'array', items: { type: 'string' } },
    open_questions: { type: 'array', items: { type: 'string' } },
  },
  required: ['rows', 'assumptions', 'open_questions'],
  additionalProperties: false,
} as const;

function buildUserMessage(
  input: RevenueSnapshotInput,
  source: RevenueSnapshotSource,
  billingMappingCsv?: string
): string {
  const parts: string[] = [];

  parts.push(
    `Selected Subscriptions: ${input.subscription_numbers.join(', ')}`,
    `OTR Enabled: ${source.otr_enabled ? 'Yes' : 'No'}`,
    ''
  );

  if (input.data_augmentation_rules) {
    parts.push('Data Augmentation Rules:', input.data_augmentation_rules, '');
  }

  if (input.notes) {
    parts.push('Notes:', input.notes, '');
  }

  if (source.otr_enabled && billingMappingCsv) {
    parts.push('BillingTransaction → Revenue Field Mapping (CSV):', billingMappingCsv, '');
  }

  parts.push('Source Data (JSON):', JSON.stringify(source, null, 2));

  return parts.join('\n');
}

export async function buildSnapshotBillings(
  input: RevenueSnapshotInput,
  source: RevenueSnapshotSource,
  previousOutput?: RevenueSnapshotTableOutput,
  reasoningEffort: ReasoningEffort = 'high',
  model?: LlmModel
): Promise<RevenueSnapshotTableOutput> {
  const billingMappingCsv = source.otr_enabled ? await loadBillingMappingCsv() : undefined;
  const systemPrompt = await loadPrompt(PROMPTS.SNAPSHOT_BILLINGS);
  let userMessage = buildUserMessage(input, source, billingMappingCsv);

  if (previousOutput) {
    userMessage = `Previous Results:\n${JSON.stringify(previousOutput, null, 2)}\n\n${userMessage}`;
  }

  const result = await complete<RevenueSnapshotTableOutput>({
    systemPrompt,
    userMessage,
    tools: ['web_search', 'code_interpreter'],
    reasoningEffort,
    model,
    responseSchema: snapshotTableSchema,
  });

  let parsed: unknown;
  try {
    parsed = result.structured ?? (result.text ? JSON.parse(extractJsonPayload(result.text)) : null);
  } catch (error) {
    throw new Error(
      `Failed to parse snapshot Billings JSON: ${error instanceof Error ? error.message : 'unknown error'}`
    );
  }

  if (!parsed) {
    throw new Error('Failed to build snapshot Billings table: empty response');
  }

  const validation = RevenueSnapshotTableOutputSchema.safeParse(parsed);
  if (!validation.success) {
    throw new Error(`Invalid snapshot Billings output: ${validation.error.message}`);
  }

  return validation.data;
}
