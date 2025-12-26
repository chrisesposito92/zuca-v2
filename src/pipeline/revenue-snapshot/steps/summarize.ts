import { complete, getZuoraMcpTools, ReasoningEffort } from '../../../llm/client';
import type { LlmModel } from '../../../types/llm';
import { loadPrompt, PROMPTS } from '../../../llm/prompts/index';
import {
  RevenueSnapshotInput,
  RevenueSnapshotSource,
  RevenueSnapshotSummary,
  RevenueSnapshotSummarySchema,
  RevenueSnapshotTableOutput,
} from '../../../types/revenue-snapshot';
import { extractJsonPayload } from './json';

const summarySchema = {
  type: 'object',
  properties: {
    assumptions: { type: 'array', items: { type: 'string' } },
    open_questions: { type: 'array', items: { type: 'string' } },
    highlights: { type: 'array', items: { type: 'string' } },
  },
  required: ['assumptions', 'open_questions'],
  additionalProperties: false,
} as const;

function buildUserMessage(
  input: RevenueSnapshotInput,
  source: RevenueSnapshotSource,
  contractsOrders: RevenueSnapshotTableOutput,
  billings: RevenueSnapshotTableOutput,
  revrec: RevenueSnapshotTableOutput
): string {
  return [
    `Selected Subscriptions: ${input.subscription_numbers.join(', ')}`,
    `OTR Enabled: ${source.otr_enabled ? 'Yes' : 'No'}`,
    '',
    'Contracts/Orders Summary:',
    JSON.stringify({
      row_count: contractsOrders.rows.length,
      assumptions: contractsOrders.assumptions,
      open_questions: contractsOrders.open_questions,
    }, null, 2),
    '',
    'Billings Summary:',
    JSON.stringify({
      row_count: billings.rows.length,
      assumptions: billings.assumptions,
      open_questions: billings.open_questions,
    }, null, 2),
    '',
    'Rev Rec Waterfall Summary:',
    JSON.stringify({
      row_count: revrec.rows.length,
      assumptions: revrec.assumptions,
      open_questions: revrec.open_questions,
    }, null, 2),
  ].join('\n');
}

export async function summarizeSnapshot(
  input: RevenueSnapshotInput,
  source: RevenueSnapshotSource,
  contractsOrders: RevenueSnapshotTableOutput,
  billings: RevenueSnapshotTableOutput,
  revrec: RevenueSnapshotTableOutput,
  previousOutput?: RevenueSnapshotSummary,
  reasoningEffort: ReasoningEffort = 'medium',
  model?: LlmModel
): Promise<RevenueSnapshotSummary> {
  const systemPrompt = await loadPrompt(PROMPTS.SNAPSHOT_SUMMARY);
  let userMessage = buildUserMessage(input, source, contractsOrders, billings, revrec);

  if (previousOutput) {
    userMessage = `Previous Summary:\n${JSON.stringify(previousOutput, null, 2)}\n\n${userMessage}`;
  }

  const result = await complete<RevenueSnapshotSummary>({
    systemPrompt,
    userMessage,
    tools: ['web_search'],
    mcpTools: getZuoraMcpTools(),
    reasoningEffort,
    model,
  });

  let parsed: unknown;
  try {
    parsed = result.structured ?? (result.text ? JSON.parse(extractJsonPayload(result.text)) : null);
  } catch (error) {
    throw new Error(
      `Failed to parse snapshot summary JSON: ${error instanceof Error ? error.message : 'unknown error'}`
    );
  }

  if (!parsed) {
    throw new Error('Failed to build snapshot summary: empty response');
  }

  const validation = RevenueSnapshotSummarySchema.safeParse(parsed);
  if (!validation.success) {
    throw new Error(`Invalid snapshot summary: ${validation.error.message}`);
  }

  return validation.data;
}
