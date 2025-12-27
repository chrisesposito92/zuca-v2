import { complete, ReasoningEffort } from '../../../llm/client';
import type { LlmModel } from '../../../types/llm';
import { loadPrompt, PROMPTS } from '../../../llm/prompts/index';
import {
  RevenueSnapshotInput,
  RevenueSnapshotSource,
  RevenueSnapshotTableOutput,
  RevenueSnapshotTableOutputSchema,
} from '../../../types/revenue-snapshot';
import { extractJsonPayload } from './json';
import { loadBookingMappingCsv } from '../mappings';

const ALLOCATION_FIELDS = [
  'Line Item Num',
  'POB Template',
  'POB Satisfied',
  'Customer Name',
  'Subscription Name',
  'RPC Num',
  'RPC Version',
  'Ordered Qty',
  'Revenue Start Date',
  'Revenue End Date',
  'Allocation Eligible Flag',
  'Event Name',
  'Ext List Price',
  'Ext Sell Price',
  'SSP Price',
  'Ext SSP Price',
  'Ext Allocated Price',
  'Carves Amount',
  'Unreleased Revenue',
  'Transaction Currency',
  'Total',
] as const;

const OPENAI_VALUE_SCHEMA = { type: ['string', 'number', 'boolean', 'null'] } as const;
const GEMINI_VALUE_SCHEMA = { type: 'string', nullable: true } as const;

function buildAllocationSchema(
  valueSchema: typeof OPENAI_VALUE_SCHEMA | typeof GEMINI_VALUE_SCHEMA
) {
  const properties: Record<string, typeof valueSchema> = {};
  ALLOCATION_FIELDS.forEach((field) => {
    properties[field] = valueSchema;
  });

  return {
    type: 'object',
    properties: {
      rows: {
        type: 'array',
        items: {
          type: 'object',
          properties,
          additionalProperties: false,
        },
      },
      assumptions: { type: 'array', items: { type: 'string' } },
      open_questions: { type: 'array', items: { type: 'string' } },
    },
    required: ['rows', 'assumptions', 'open_questions'],
    additionalProperties: false,
  } as const;
}

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

export async function buildSnapshotRevRecAllocations(
  input: RevenueSnapshotInput,
  source: RevenueSnapshotSource,
  previousOutput?: RevenueSnapshotTableOutput,
  reasoningEffort: ReasoningEffort = 'high',
  model?: LlmModel
): Promise<RevenueSnapshotTableOutput> {
  const bookingMappingCsv = source.otr_enabled ? await loadBookingMappingCsv() : undefined;
  const systemPrompt = await loadPrompt(PROMPTS.SNAPSHOT_REVREC_ALLOCATIONS);
  let userMessage = buildUserMessage(input, source, bookingMappingCsv);

  if (previousOutput) {
    userMessage = `Previous Results:\n${JSON.stringify(previousOutput, null, 2)}\n\n${userMessage}`;
  }

  const resolvedModel = model ?? process.env.LLM_MODEL ?? process.env.OPENAI_MODEL ?? 'gpt-5.2';
  const useGeminiSchema = resolvedModel.startsWith('gemini');
  const responseSchema = buildAllocationSchema(useGeminiSchema ? GEMINI_VALUE_SCHEMA : OPENAI_VALUE_SCHEMA);

  const result = await complete<RevenueSnapshotTableOutput>({
    systemPrompt,
    userMessage,
    tools: ['web_search', 'code_interpreter'],
    reasoningEffort,
    model,
    responseSchema,
  });

  let parsed: unknown;
  try {
    parsed = result.structured ?? (result.text ? JSON.parse(extractJsonPayload(result.text)) : null);
  } catch (error) {
    throw new Error(
      `Failed to parse snapshot Rev Rec allocations JSON: ${error instanceof Error ? error.message : 'unknown error'}`
    );
  }

  if (!parsed) {
    throw new Error('Failed to build snapshot Rev Rec allocations: empty response');
  }

  const normalized = (() => {
    const asObj = parsed as Record<string, any>;
    if (Array.isArray(asObj?.['REV REC']) && !asObj?.rows) {
      return {
        rows: asObj['REV REC'],
        assumptions: Array.isArray(asObj.assumptions) ? asObj.assumptions : [],
        open_questions: Array.isArray(asObj.open_questions) ? asObj.open_questions : [],
      };
    }
    return parsed;
  })();

  const validation = RevenueSnapshotTableOutputSchema.safeParse(normalized);
  if (!validation.success) {
    throw new Error(`Invalid snapshot Rev Rec allocations output: ${validation.error.message}`);
  }

  return validation.data;
}
