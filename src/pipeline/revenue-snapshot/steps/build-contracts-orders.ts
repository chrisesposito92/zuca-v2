import { complete, getZuoraMcpTools, ReasoningEffort } from '../../../llm/client';
import type { LlmModel } from '../../../types/llm';
import { loadPrompt, PROMPTS } from '../../../llm/prompts/index';
import {
  RevenueSnapshotInput,
  RevenueSnapshotSource,
  RevenueSnapshotTableOutput,
  RevenueSnapshotTableOutputSchema,
} from '../../../types/revenue-snapshot';
import { loadBookingMappingCsv } from '../mappings';
import { extractJsonPayload } from './json';

const snapshotTableSchema = {
  type: 'object',
  properties: {
    rows: {
      type: 'array',
      items: {
        type: 'object',
        additionalProperties: true,
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
  bookingMappingCsv?: string
): string {
  const parts: string[] = [];

  parts.push(
    `Selected Subscriptions: ${input.subscription_numbers.join(', ')}`,
    `OTR Enabled: ${source.otr_enabled ? 'Yes' : 'No'}`,
    ''
  );

  if (input.ssp_method) {
    parts.push(`SSP Method: ${input.ssp_method}`);
    if (input.ssp_custom_formula) {
      parts.push(`SSP Custom Formula: ${input.ssp_custom_formula}`);
    }
    parts.push('');
  }

  if (input.data_augmentation_rules) {
    parts.push('Data Augmentation Rules:', input.data_augmentation_rules, '');
  }

  if (input.notes) {
    parts.push('Notes:', input.notes, '');
  }

  if (source.otr_enabled && bookingMappingCsv) {
    parts.push('BookingTransaction → Revenue Field Mapping (CSV):', bookingMappingCsv, '');
  }

  parts.push('Source Data (JSON):', JSON.stringify(source, null, 2));

  return parts.join('\n');
}

export async function buildSnapshotContractsOrders(
  input: RevenueSnapshotInput,
  source: RevenueSnapshotSource,
  previousOutput?: RevenueSnapshotTableOutput,
  reasoningEffort: ReasoningEffort = 'high',
  model?: LlmModel
): Promise<RevenueSnapshotTableOutput> {
  const bookingMappingCsv = source.otr_enabled ? await loadBookingMappingCsv() : undefined;
  const systemPrompt = await loadPrompt(PROMPTS.SNAPSHOT_CONTRACTS_ORDERS);
  let userMessage = buildUserMessage(input, source, bookingMappingCsv);

  if (previousOutput) {
    userMessage = `Previous Results:\n${JSON.stringify(previousOutput, null, 2)}\n\n${userMessage}`;
  }

  const result = await complete<RevenueSnapshotTableOutput>({
    systemPrompt,
    userMessage,
    tools: ['web_search', 'code_interpreter'],
    mcpTools: getZuoraMcpTools(),
    reasoningEffort,
    model,
  });

  let parsed: unknown;
  try {
    parsed = result.structured ?? (result.text ? JSON.parse(extractJsonPayload(result.text)) : null);
  } catch (error) {
    throw new Error(
      `Failed to parse snapshot Contracts/Orders JSON: ${error instanceof Error ? error.message : 'unknown error'}`
    );
  }

  if (!parsed) {
    throw new Error('Failed to build snapshot Contracts/Orders table: empty response');
  }

  const validation = RevenueSnapshotTableOutputSchema.safeParse(parsed);
  if (!validation.success) {
    throw new Error(`Invalid snapshot Contracts/Orders output: ${validation.error.message}`);
  }

  return validation.data;
}
