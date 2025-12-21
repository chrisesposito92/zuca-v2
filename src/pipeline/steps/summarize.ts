import { complete, getZuoraMcpTools, ReasoningEffort } from '../../llm/client';
import { loadPrompt, PROMPTS } from '../../llm/prompts/index';
import {
  SummaryOutput,
  SummaryOutputSchema,
  SubscriptionSpec,
  PobMappingOutput,
  ContractsOrdersOutput,
  BillingsOutput,
  RevRecWaterfallOutput,
} from '../../types/output';
import { debugLog } from '../../config';

/**
 * JSON schema for Summary structured output
 */
const summaryJsonSchema = {
  type: 'object',
  properties: {
    assumptions: {
      type: 'array',
      items: { type: 'string' },
      description: 'Consolidated and prioritized assumptions',
    },
    open_questions: {
      type: 'array',
      items: { type: 'string' },
      description: 'Consolidated and prioritized open questions',
    },
  },
  required: ['assumptions', 'open_questions'],
  additionalProperties: false,
};

/**
 * Collect all assumptions from pipeline outputs
 */
function collectAssumptions(
  subscriptionSpec?: SubscriptionSpec,
  pobMapping?: PobMappingOutput,
  contractsOrders?: ContractsOrdersOutput,
  billings?: BillingsOutput,
  revRecWaterfall?: RevRecWaterfallOutput
): string[] {
  const assumptions: string[] = [];

  if (subscriptionSpec?.assumptions) {
    assumptions.push(...subscriptionSpec.assumptions.map((a) => `[Subscription] ${a}`));
  }
  if (pobMapping?.mapping_notes) {
    assumptions.push(...pobMapping.mapping_notes.map((n) => `[POB Mapping] ${n}`));
  }
  if (contractsOrders?.assumptions) {
    assumptions.push(...contractsOrders.assumptions.map((a) => `[Contracts/Orders] ${a}`));
  }
  if (billings?.assumptions) {
    assumptions.push(...billings.assumptions.map((a) => `[Billings] ${a}`));
  }
  if (revRecWaterfall?.assumptions) {
    assumptions.push(...revRecWaterfall.assumptions.map((a) => `[Rev Rec] ${a}`));
  }

  return assumptions;
}

/**
 * Collect all open questions from pipeline outputs
 */
function collectOpenQuestions(
  subscriptionSpec?: SubscriptionSpec,
  _pobMapping?: PobMappingOutput,
  contractsOrders?: ContractsOrdersOutput,
  billings?: BillingsOutput,
  revRecWaterfall?: RevRecWaterfallOutput
): string[] {
  const questions: string[] = [];

  if (subscriptionSpec?.open_questions) {
    questions.push(...subscriptionSpec.open_questions.map((q) => `[Subscription] ${q}`));
  }
  if (contractsOrders?.open_questions) {
    questions.push(...contractsOrders.open_questions.map((q) => `[Contracts/Orders] ${q}`));
  }
  if (billings?.open_questions) {
    questions.push(...billings.open_questions.map((q) => `[Billings] ${q}`));
  }
  if (revRecWaterfall?.open_questions) {
    questions.push(...revRecWaterfall.open_questions.map((q) => `[Rev Rec] ${q}`));
  }

  return questions;
}

/**
 * Build the user message for summary generation
 */
function buildUserMessage(
  useCaseDescription: string,
  allAssumptions: string[],
  allQuestions: string[]
): string {
  const parts = [
    'Original Use Case:',
    useCaseDescription,
    '',
    'All Assumptions (from pipeline steps):',
    ...allAssumptions.map((a, i) => `${i + 1}. ${a}`),
    '',
    'All Open Questions (from pipeline steps):',
    ...allQuestions.map((q, i) => `${i + 1}. ${q}`),
    '',
    'Consolidate and prioritize these assumptions and questions.',
    'Remove duplicates, group related items, and order by business impact.',
  ];

  return parts.join('\n');
}

/**
 * Execute the Summarize step
 * Consolidates assumptions and open questions from all pipeline steps
 */
export async function summarizeResults(
  useCaseDescription: string,
  subscriptionSpec?: SubscriptionSpec,
  pobMapping?: PobMappingOutput,
  contractsOrders?: ContractsOrdersOutput,
  billings?: BillingsOutput,
  revRecWaterfall?: RevRecWaterfallOutput,
  reasoningEffort: ReasoningEffort = 'low' // Simple consolidation task
): Promise<SummaryOutput> {
  debugLog('Summarizing assumptions and open questions');

  const allAssumptions = collectAssumptions(
    subscriptionSpec,
    pobMapping,
    contractsOrders,
    billings,
    revRecWaterfall
  );

  const allQuestions = collectOpenQuestions(
    subscriptionSpec,
    pobMapping,
    contractsOrders,
    billings,
    revRecWaterfall
  );

  // If there are no assumptions or questions, return empty result
  if (allAssumptions.length === 0 && allQuestions.length === 0) {
    return {
      assumptions: [],
      open_questions: [],
    };
  }

  const systemPrompt = await loadPrompt(PROMPTS.SUMMARIZE);
  const userMessage = buildUserMessage(useCaseDescription, allAssumptions, allQuestions);

  const result = await complete<SummaryOutput>({
    systemPrompt,
    userMessage,
    responseSchema: summaryJsonSchema,
    tools: ['web_search', 'code_interpreter'],
    mcpTools: getZuoraMcpTools(),
    reasoningEffort,
  });

  if (!result.structured) {
    // Fallback: return raw collected items if LLM fails
    debugLog('Summary LLM failed, returning raw collected items');
    return {
      assumptions: allAssumptions,
      open_questions: allQuestions,
    };
  }

  // Validate with Zod
  const validation = SummaryOutputSchema.safeParse(result.structured);
  if (!validation.success) {
    debugLog('Summary validation failed:', validation.error.errors);
  }

  debugLog('Summary generated:', {
    assumptionCount: result.structured.assumptions?.length,
    questionCount: result.structured.open_questions?.length,
  });

  return result.structured;
}

/**
 * Format summary for display
 */
export function formatSummaryForDisplay(summary: SummaryOutput): string {
  const parts: string[] = [];

  if (summary.assumptions.length > 0) {
    parts.push('## Assumptions');
    parts.push('');
    summary.assumptions.forEach((a, i) => {
      parts.push(`${i + 1}. ${a}`);
    });
  }

  if (summary.open_questions.length > 0) {
    if (parts.length > 0) parts.push('');
    parts.push('## Open Questions');
    parts.push('');
    summary.open_questions.forEach((q, i) => {
      parts.push(`${i + 1}. ${q}`);
    });
  }

  return parts.join('\n');
}
