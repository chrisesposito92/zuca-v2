import { complete, ReasoningEffort } from '../../../llm/client';
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

// OpenAI structured output requires ALL properties in 'required' array
const summarySchema = {
  type: 'object',
  properties: {
    assumptions: { type: 'array', items: { type: 'string' } },
    open_questions: { type: 'array', items: { type: 'string' } },
    highlights: { type: 'array', items: { type: 'string' } },
  },
  required: ['assumptions', 'open_questions', 'highlights'],
  additionalProperties: false,
} as const;

function buildUserMessage(
  input: RevenueSnapshotInput,
  source: RevenueSnapshotSource,
  revrec: RevenueSnapshotTableOutput
): string {
  return [
    `Selected Subscriptions: ${input.subscription_numbers.join(', ')}`,
    `OTR Enabled: ${source.otr_enabled ? 'Yes' : 'No'}`,
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
  revrec: RevenueSnapshotTableOutput,
  previousOutput?: RevenueSnapshotSummary,
  reasoningEffort: ReasoningEffort = 'high',
  model?: LlmModel,
  iterationContext?: string
): Promise<RevenueSnapshotSummary> {
  const systemPrompt = await loadPrompt(PROMPTS.SNAPSHOT_SUMMARY);
  let userMessage = buildUserMessage(input, source, revrec);

  if (previousOutput) {
    userMessage = `Previous Summary:\n${JSON.stringify(previousOutput, null, 2)}\n\n${userMessage}`;
  }

  // Add iteration context from Ralph self-improvement
  if (iterationContext) {
    userMessage = iterationContext + '\n\n' + userMessage;
  }

  const result = await complete<RevenueSnapshotSummary>({
    systemPrompt,
    userMessage,
    tools: ['web_search', 'code_interpreter'],
    reasoningEffort,
    model,
    responseSchema: summarySchema,
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
