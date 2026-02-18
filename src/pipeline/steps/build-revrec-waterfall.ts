import { complete, getZuoraMcpTools, ReasoningEffort } from '../../llm/client';
import type { LlmModel } from '../../types/llm';
import { loadPrompt, PROMPTS } from '../../llm/prompts/index';
import {
  RevRecWaterfallOutput,
  RevRecWaterfallOutputSchema,
  ContractsOrdersOutput,
  PobMappingOutput,
  ContractIntel,
} from '../../types/output';
import { PobTemplate } from '../../types/golden-use-cases';
import { formatContractsOrdersForContext } from './build-contracts-orders';
import { formatContractIntelForContext } from './contract-intel';
import { debugLog } from '../../config';
import { getDocContext, isIndexReady } from '../../rag';
import { getCorrectionsContext } from '../../self-learn';
import {
  StepClarificationRequest,
  transformClarificationOutput,
  clarificationOutputJsonSchema,
  clarificationRequiredFields,
} from '../../types/clarification';

/**
 * JSON schema for Rev Rec Waterfall structured output
 * Exported for use by judge validation
 */
export const revRecWaterfallJsonSchema = {
  type: 'object',
  properties: {
    zr_revrec: {
      type: 'array',
      items: {
        type: 'object',
        properties: {
          'Line Item Num': { type: 'string' },
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
    // Clarification fields - REQUIRED with nullable values
    ...clarificationOutputJsonSchema.properties,
  },
  required: ['zr_revrec', 'assumptions', 'open_questions', ...clarificationRequiredFields],
  additionalProperties: false,
};

/**
 * Format POB mapping with Recognition Notes from templates
 * This enriches the POB mapping with waterfall-specific instructions
 */
function formatPobMappingWithRecognitionNotes(
  pobMapping: PobMappingOutput,
  pobTemplates: PobTemplate[]
): string {
  // Create lookup map for quick access to Recognition Notes
  const templateMap = new Map<string, string>();
  for (const template of pobTemplates) {
    if (template['Recognition Notes']) {
      templateMap.set(template['POB Identifier'], template['Recognition Notes']);
    }
  }

  const lines = pobMapping.charge_pob_map.map((m) => {
    const recognitionNotes = templateMap.get(m.pob_identifier) || 'No specific notes';
    return (
      `\n### ${m.chargeName}\n` +
      `- POB Template: ${m.pob_name} (${m.pob_identifier})\n` +
      `- Ratable Method: ${m.ratable_method}\n` +
      `- Release Event: ${m.release_event}\n` +
      `- Recognition Window: ${m.recognition_window.start} to ${m.recognition_window.end || 'ongoing'}\n` +
      `- **WATERFALL INSTRUCTIONS**: ${recognitionNotes}`
    );
  });

  return lines.join('\n');
}

/**
 * Build the user message for Rev Rec Waterfall generation
 */
function buildUserMessage(
  contractsOrders: ContractsOrdersOutput,
  pobMapping: PobMappingOutput,
  contractIntel: ContractIntel,
  pobTemplates: PobTemplate[],
  docContext?: string,
  correctionsContext?: string
): string {
  const parts = [
    'Generate the revenue recognition waterfall based on the following:',
    '',
  ];

  // Include retrieved documentation if available
  if (docContext) {
    parts.push('## Relevant Documentation', docContext, '');
  }

  // Include learned corrections if available
  if (correctionsContext) {
    parts.push(correctionsContext, '');
  }

  parts.push(
    '## Contract Intel',
    formatContractIntelForContext(contractIntel),
    '',
    '## POB Mapping with Recognition Instructions',
    '',
    'CRITICAL: Follow the WATERFALL INSTRUCTIONS for each POB exactly. These instructions are authoritative and must be followed precisely.',
    formatPobMappingWithRecognitionNotes(pobMapping, pobTemplates),
    '',
    '## Contracts/Orders Table',
    formatContractsOrdersForContext(contractsOrders),
    '',
    '## Instructions',
    '1. For each charge, follow the WATERFALL INSTRUCTIONS from its POB template exactly',
    '2. Event-driven templates (EVT-PIT-*) should show $0 in months without events',
    '3. Ratable templates (BK-OT-*, BL-OT-*) spread amounts evenly over the period',
    '4. Point-in-time templates recognize 100% in a single month',
    '5. If usage/consumption data is not provided for event-driven templates, show $0 amounts and add an open question',
    '',
    'Return one row per Line Item per Period with the recognition amount.'
  );

  return parts.join('\n');
}

/**
 * Execute the Build Rev Rec Waterfall step
 * Generates monthly revenue recognition schedule
 *
 * May return a StepClarificationRequest if the model needs user input on
 * a critical ambiguity (only in interactive mode, controlled by orchestrator)
 */
export async function buildRevRecWaterfall(
  contractsOrders: ContractsOrdersOutput,
  pobMapping: PobMappingOutput,
  contractIntel: ContractIntel,
  pobTemplates: PobTemplate[],
  clarificationContext?: string, // Context from user's clarification answer
  previousOutput?: RevRecWaterfallOutput,
  reasoningEffort: ReasoningEffort = 'high', // Complex rev rec calculations need thorough reasoning
  model?: LlmModel
): Promise<RevRecWaterfallOutput | StepClarificationRequest> {
  debugLog('Building Rev Rec Waterfall', {
    hasClarificationContext: !!clarificationContext,
  });

  // Decode POB template names into searchable Zuora concepts
  // POB names like "BK-OT-RATABLE" encode: trigger (BK=booking), timing (OT=over-time), method (RATABLE)
  const pobCodeMap: Record<string, string> = {
    'BK': 'booking-based',
    'BL': 'billing-based',
    'EVT': 'event-based',
    'OT': 'over-time recognition',
    'PIT': 'point-in-time recognition',
    'RATABLE': 'ratable method',
    'CONSUMP': 'consumption-based',
    'PAYGO': 'pay-as-you-go',
    'USAGE': 'usage-based',
    'INVRATABLE': 'invoice ratable',
    'CURRENT_PERIOD': 'current period',
    'STARTDATE': 'start date trigger',
    'COMPLETION': 'completion event',
    'ACCEPTAN': 'acceptance event',
    'GOLIVE': 'go-live event',
    'PM': 'prior month',
    'VC': 'variable consideration',
    'POC': 'percentage of completion',
    'QTY': 'quantity-based',
    'HOURS': 'hours-based',
    'AMOUNT': 'amount-based',
    'CUMPERCENT': 'cumulative percentage',
    'DELIVERY': 'delivery event',
  };

  const decodePobName = (pobName: string): string => {
    const parts = pobName.split('-');
    return parts
      .map((part) => pobCodeMap[part] || '')
      .filter(Boolean)
      .join(' ');
  };

  const pobKeywords = pobMapping.charge_pob_map
    ?.map((m) => decodePobName(m.pob_name))
    .filter(Boolean)
    .join(', ') || '';
  const ragQuery = `Zuora Revenue recognition waterfall ${pobKeywords} SSP allocation`;

  // Retrieve relevant documentation if RAG index is available
  let docContext: string | undefined;
  if (await isIndexReady()) {
    debugLog('RAG index available, retrieving docs for rev rec waterfall...');
    docContext = await getDocContext(ragQuery, { limit: 3, minScore: 0.3 });
    debugLog('Retrieved doc context', { length: docContext?.length || 0 });
  }

  // Retrieve learned corrections for this step (using capability keywords, not customer context)
  const correctionsResult = await getCorrectionsContext({
    stepName: 'revrec_waterfall',
    inputSummary: ragQuery,
  });
  if (correctionsResult.count > 0) {
    debugLog('Injecting corrections context', {
      count: correctionsResult.count,
      ids: correctionsResult.appliedCorrectionIds,
    });
  }

  const systemPrompt = await loadPrompt(PROMPTS.BUILD_REVREC_WATERFALL);
  let userMessage = buildUserMessage(contractsOrders, pobMapping, contractIntel, pobTemplates, docContext, correctionsResult.context);

  // Include previous results for multi-turn support
  if (previousOutput) {
    userMessage = `Previous Results:\n${JSON.stringify(previousOutput, null, 2)}\n\nUser Query:\n${userMessage}`;
  }

  // Include clarification context if user provided an answer
  if (clarificationContext) {
    userMessage = `${userMessage}\n\n---\n\n## User Clarification\n${clarificationContext}`;
  }

  const result = await complete<RevRecWaterfallOutput & {
    needs_clarification?: boolean;
    clarification_question?: string;
    clarification_context?: string;
    clarification_options?: Array<{ id: string; label: string; description?: string }>;
    clarification_priority?: 'critical' | 'important' | 'helpful';
  }>({
    systemPrompt,
    userMessage,
    responseSchema: revRecWaterfallJsonSchema,
    tools: ['web_search', 'code_interpreter'],
    mcpTools: getZuoraMcpTools(),
    reasoningEffort,
    model,
  });

  if (!result.structured) {
    throw new Error('Failed to build Rev Rec Waterfall: no structured output');
  }

  // Check if the model is requesting clarification
  if (result.structured.needs_clarification) {
    const clarificationRequest = transformClarificationOutput('revrec_waterfall', {
      needs_clarification: result.structured.needs_clarification,
      clarification_question: result.structured.clarification_question,
      clarification_context: result.structured.clarification_context,
      clarification_options: result.structured.clarification_options,
      clarification_priority: result.structured.clarification_priority,
    });

    if (clarificationRequest) {
      debugLog('Rev Rec Waterfall requesting clarification:', {
        question: clarificationRequest.question.question,
        optionCount: clarificationRequest.question.options.length,
      });
      return clarificationRequest;
    }
    // If transform failed (invalid options), fall through to normal output
    debugLog('Clarification request was invalid, proceeding with build');
  }

  // Validate with Zod
  const validation = RevRecWaterfallOutputSchema.safeParse(result.structured);
  if (!validation.success) {
    debugLog('Rev Rec Waterfall validation failed:', validation.error.issues);
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
  // Group by Line Item Num (which is the charge name, a string)
  const byLineItem = new Map<string, typeof output.zr_revrec>();
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

  // Get unique line items (charge names)
  const lineItems = [...new Set(output.zr_revrec.map((r) => r['Line Item Num']))].sort((a, b) => a.localeCompare(b));

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
