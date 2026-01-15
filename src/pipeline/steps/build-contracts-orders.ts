import { complete, getZuoraMcpTools, ReasoningEffort } from '../../llm/client';
import type { LlmModel } from '../../types/llm';
import { loadPrompt, PROMPTS } from '../../llm/prompts/index';
import {
  ContractsOrdersOutput,
  ContractsOrdersOutputSchema,
  SubscriptionSpec,
  PobMappingOutput,
  ContractIntel,
} from '../../types/output';
import { ZucaInput } from '../../types/input';
import { formatSubscriptionSpecForContext } from './generate-subscription';
import { formatPobMappingForContext } from './assign-pob-templates';
import { formatContractIntelForContext } from './contract-intel';
import { debugLog } from '../../config';
import { getDocContext, isIndexReady, extractRagKeywords } from '../../rag';
import { getCorrectionsContext } from '../../self-learn';
import {
  StepClarificationRequest,
  transformClarificationOutput,
  clarificationOutputJsonSchema,
  clarificationRequiredFields,
} from '../../types/clarification';

/**
 * JSON schema for Contracts/Orders structured output
 * Exported for use by judge validation
 */
export const contractsOrdersJsonSchema = {
  type: 'object',
  properties: {
    zr_contracts_orders: {
      type: 'array',
      items: {
        type: 'object',
        properties: {
          'POB Name': { type: 'string' },
          'POB Template': { type: 'string' },
          'POB Satisfied': { type: 'string' },
          'Release Event': { type: 'string' },
          'Billing Period': { type: 'string' },
          'Billing Timing': { type: 'string' },
          'Terms Months': { type: 'number' },
          'Trigger Event': { type: 'string' },
          'Lead Line': { type: 'boolean' },
          'Ordered Qty': { type: 'number' },
          'Line Item Num': { type: 'string' },
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
    // Clarification fields - REQUIRED with nullable values
    ...clarificationOutputJsonSchema.properties,
  },
  required: ['zr_contracts_orders', 'assumptions', 'open_questions', ...clarificationRequiredFields],
  additionalProperties: false,
};

/**
 * Build the user message for Contracts/Orders table generation
 */
function buildUserMessage(
  input: ZucaInput,
  subscriptionSpec: SubscriptionSpec,
  pobMapping: PobMappingOutput,
  contractIntel: ContractIntel,
  docContext?: string,
  correctionsContext?: string
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
  ];

  // Include learned corrections if available
  if (correctionsContext) {
    parts.push(correctionsContext, '');
  }

  // Include retrieved documentation if available
  if (docContext) {
    parts.push(docContext, '');
  }

  parts.push(
    'Contract Intel:',
    formatContractIntelForContext(contractIntel),
    '',
    'Subscription Spec:',
    formatSubscriptionSpecForContext(subscriptionSpec),
    '',
    'POB Mapping:',
    formatPobMappingForContext(pobMapping),
    '',
    'Generate the ZR Contracts/Orders table with proper pricing and allocations.'
  );

  return parts.filter(Boolean).join('\n');
}

/**
 * Execute the Build Contracts/Orders Table step
 * Generates ZR contracts/orders table with allocated prices
 *
 * May return a StepClarificationRequest if the model needs user input on
 * a critical ambiguity (only in interactive mode, controlled by orchestrator)
 */
export async function buildContractsOrders(
  input: ZucaInput,
  subscriptionSpec: SubscriptionSpec,
  pobMapping: PobMappingOutput,
  contractIntel: ContractIntel,
  clarificationContext?: string, // Context from user's clarification answer
  previousOutput?: ContractsOrdersOutput,
  reasoningEffort: ReasoningEffort = 'high', // Complex allocation calculations need thorough reasoning
  model?: LlmModel
): Promise<ContractsOrdersOutput | StepClarificationRequest> {
  debugLog('Building Contracts/Orders table', {
    hasClarificationContext: !!clarificationContext,
  });

  // Extract capability keywords for targeted RAG + corrections search
  const ragQuery = await extractRagKeywords(input.use_case_description);

  // Retrieve relevant documentation if RAG index is available
  let docContext: string | undefined;
  if (await isIndexReady()) {
    debugLog('RAG index available, retrieving docs for contracts/orders...');
    docContext = await getDocContext(ragQuery, { limit: 3, minScore: 0.3 });
    debugLog('Retrieved doc context', { length: docContext?.length || 0 });
  }

  // Retrieve learned corrections for this step (using capability keywords, not customer context)
  const correctionsResult = await getCorrectionsContext({
    stepName: 'contracts_orders',
    inputSummary: ragQuery,
  });
  if (correctionsResult.count > 0) {
    debugLog('Injecting corrections context', {
      count: correctionsResult.count,
      ids: correctionsResult.appliedCorrectionIds,
    });
  }

  const systemPrompt = await loadPrompt(PROMPTS.BUILD_CONTRACTS_ORDERS);
  let userMessage = buildUserMessage(
    input,
    subscriptionSpec,
    pobMapping,
    contractIntel,
    docContext,
    correctionsResult.context
  );

  // Include previous results for multi-turn support
  if (previousOutput) {
    userMessage = `Previous Results:\n${JSON.stringify(previousOutput, null, 2)}\n\nUser Query:\n${userMessage}`;
  }

  // Include clarification context if user provided an answer
  if (clarificationContext) {
    userMessage = `${userMessage}\n\n---\n\n## User Clarification\n${clarificationContext}`;
  }

  const result = await complete<ContractsOrdersOutput & {
    needs_clarification?: boolean;
    clarification_question?: string;
    clarification_context?: string;
    clarification_options?: Array<{ id: string; label: string; description?: string }>;
    clarification_priority?: 'critical' | 'important' | 'helpful';
  }>({
    systemPrompt,
    userMessage,
    responseSchema: contractsOrdersJsonSchema,
    tools: ['web_search', 'code_interpreter'],
    mcpTools: getZuoraMcpTools(),
    reasoningEffort,
    model,
  });

  if (!result.structured) {
    throw new Error('Failed to build Contracts/Orders table: no structured output');
  }

  // Check if the model is requesting clarification
  if (result.structured.needs_clarification) {
    const clarificationRequest = transformClarificationOutput('contracts_orders', {
      needs_clarification: result.structured.needs_clarification,
      clarification_question: result.structured.clarification_question,
      clarification_context: result.structured.clarification_context,
      clarification_options: result.structured.clarification_options,
      clarification_priority: result.structured.clarification_priority,
    });

    if (clarificationRequest) {
      debugLog('Contracts/Orders requesting clarification:', {
        question: clarificationRequest.question.question,
        optionCount: clarificationRequest.question.options.length,
      });
      return clarificationRequest;
    }
    // If transform failed (invalid options), fall through to normal output
    debugLog('Clarification request was invalid, proceeding with build');
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
