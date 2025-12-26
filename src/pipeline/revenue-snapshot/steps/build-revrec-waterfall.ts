import { complete, getZuoraMcpTools, ReasoningEffort } from '../../../llm/client';
import type { LlmModel } from '../../../types/llm';
import { loadPrompt, PROMPTS } from '../../../llm/prompts/index';
import {
  RevenueSnapshotInput,
  RevenueSnapshotSource,
  RevenueSnapshotTableOutput,
  RevenueSnapshotTableOutputSchema,
} from '../../../types/revenue-snapshot';
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
  contractsOrders: RevenueSnapshotTableOutput
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

  parts.push('Contracts/Orders Snapshot Rows (JSON):', JSON.stringify(contractsOrders.rows, null, 2), '');
  parts.push('Source Data (JSON):', JSON.stringify(source, null, 2));

  return parts.join('\n');
}

export async function buildSnapshotRevRecWaterfall(
  input: RevenueSnapshotInput,
  source: RevenueSnapshotSource,
  contractsOrders: RevenueSnapshotTableOutput,
  previousOutput?: RevenueSnapshotTableOutput,
  reasoningEffort: ReasoningEffort = 'high',
  model?: LlmModel
): Promise<RevenueSnapshotTableOutput> {
  const systemPrompt = await loadPrompt(PROMPTS.SNAPSHOT_REVREC_WATERFALL);
  let userMessage = buildUserMessage(input, source, contractsOrders);

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
      `Failed to parse snapshot Rev Rec JSON: ${error instanceof Error ? error.message : 'unknown error'}`
    );
  }

  if (!parsed) {
    throw new Error('Failed to build snapshot Rev Rec Waterfall: empty response');
  }

  const validation = RevenueSnapshotTableOutputSchema.safeParse(parsed);
  if (!validation.success) {
    throw new Error(`Invalid snapshot Rev Rec output: ${validation.error.message}`);
  }

  return validation.data;
}
