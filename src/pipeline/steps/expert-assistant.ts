import { complete, createAskZuoraTool } from '../../llm/client.js';
import { loadPrompt, PROMPTS } from '../../llm/prompts/index.js';
import { ZucaOutput } from '../../types/output.js';
import { debugLog } from '../../config.js';

/**
 * Expert assistant response
 */
export interface ExpertResponse {
  answer: string;
  suggestedModifications?: string[];
  affectedSteps?: string[];
  confidence: number;
}

/**
 * JSON schema for Expert Assistant structured output
 */
const expertAssistantJsonSchema = {
  type: 'object',
  properties: {
    answer: {
      type: 'string',
      description: 'The answer to the user\'s question',
    },
    suggestedModifications: {
      type: 'array',
      items: { type: 'string' },
      description: 'Suggested changes to the current solution, if applicable',
    },
    affectedSteps: {
      type: 'array',
      items: { type: 'string' },
      description: 'Pipeline steps that would need to be re-run for modifications',
    },
    confidence: {
      type: 'number',
      minimum: 0,
      maximum: 1,
      description: 'Confidence in the answer',
    },
  },
  required: ['answer', 'confidence'],
};

/**
 * Format current solution context for the expert assistant
 */
function formatSolutionContext(solution?: Partial<ZucaOutput>): string {
  if (!solution) {
    return '(No solution has been generated yet)';
  }

  const parts: string[] = [];

  if (solution.input) {
    parts.push('## Use Case');
    parts.push(`Customer: ${solution.input.customer_name}`);
    parts.push(`Description: ${solution.input.use_case_description}`);
    parts.push('');
  }

  if (solution.contract_intel) {
    parts.push('## Contract Intel');
    parts.push(`- Service Start: ${solution.contract_intel.service_start_mdy}`);
    parts.push(`- Term: ${solution.contract_intel.term_months} months`);
    parts.push(`- Billing Period: ${solution.contract_intel.billing_period || 'N/A'}`);
    parts.push(`- Trigger Event: ${solution.contract_intel.trigger_event}`);
    parts.push('');
  }

  if (solution.detected_capabilities) {
    parts.push('## Detected Capabilities');
    parts.push(`- Billing: ${solution.detected_capabilities.billing_caps.join(', ') || 'none'}`);
    parts.push(`- Revenue: ${solution.detected_capabilities.revenue_caps.join(', ') || 'none'}`);
    parts.push('');
  }

  if (solution.subscription_spec) {
    parts.push('## Subscription Spec');
    parts.push(`- Name: ${solution.subscription_spec.subscription.name}`);
    parts.push(`- Type: ${solution.subscription_spec.subscription.termType}`);
    parts.push(`- Rate Plans: ${solution.subscription_spec.rate_plans.length}`);
    const chargeCount = solution.subscription_spec.rate_plans.reduce(
      (sum, rp) => sum + rp.charges.length,
      0
    );
    parts.push(`- Total Charges: ${chargeCount}`);
    parts.push('');
  }

  if (solution.pob_mapping) {
    parts.push('## POB Mapping');
    for (const mapping of solution.pob_mapping.charge_pob_map) {
      parts.push(`- ${mapping.chargeName}: ${mapping.pob_name} (${mapping.ratable_method})`);
    }
    parts.push('');
  }

  if (solution.contracts_orders) {
    parts.push('## Contracts/Orders');
    parts.push(`- Total Lines: ${solution.contracts_orders.zr_contracts_orders.length}`);
    const totalAllocated = solution.contracts_orders.zr_contracts_orders.reduce(
      (sum, row) => sum + (row['Ext Allocated Price'] || 0),
      0
    );
    parts.push(`- Total Allocated Price: $${totalAllocated.toFixed(2)}`);
    parts.push('');
  }

  if (solution.billings) {
    parts.push('## Billings');
    parts.push(`- Total Billing Events: ${solution.billings.zb_billings.length}`);
    const totalBilled = solution.billings.zb_billings.reduce(
      (sum, row) => sum + (row.Amount || 0),
      0
    );
    parts.push(`- Total Billed: $${totalBilled.toFixed(2)}`);
    parts.push('');
  }

  if (solution.revrec_waterfall) {
    parts.push('## Revenue Recognition');
    parts.push(`- Total Recognition Events: ${solution.revrec_waterfall.zr_revrec.length}`);
    const totalRecognized = solution.revrec_waterfall.zr_revrec.reduce(
      (sum, row) => sum + (row.Amount || 0),
      0
    );
    parts.push(`- Total Recognized: $${totalRecognized.toFixed(2)}`);
    parts.push('');
  }

  return parts.length > 0 ? parts.join('\n') : '(Solution is still being generated)';
}

/**
 * Build the user message for the expert assistant
 */
function buildUserMessage(
  question: string,
  solution?: Partial<ZucaOutput>
): string {
  const parts = [
    'Current Solution Context:',
    formatSolutionContext(solution),
    '',
    'User Question:',
    question,
  ];

  return parts.join('\n');
}

/**
 * Execute the Expert Assistant step
 * Answers questions about the current solution or general Zuora concepts
 */
export async function expertAssistant(
  question: string,
  solution?: Partial<ZucaOutput>
): Promise<ExpertResponse> {
  debugLog('Expert Assistant handling question', { questionLength: question.length });

  const systemPrompt = await loadPrompt(PROMPTS.EXPERT_ASSISTANT);
  const userMessage = buildUserMessage(question, solution);

  const result = await complete<ExpertResponse>({
    systemPrompt,
    userMessage,
    responseSchema: expertAssistantJsonSchema,
    tools: ['web_search'],
    customTools: [createAskZuoraTool()],
    temperature: 0.5,
  });

  if (!result.structured) {
    // Fallback response if LLM fails
    return {
      answer: 'I apologize, but I was unable to process your question. Please try rephrasing or ask a more specific question.',
      confidence: 0,
    };
  }

  debugLog('Expert response:', {
    answerLength: result.structured.answer?.length,
    hasSuggestions: !!result.structured.suggestedModifications?.length,
    confidence: result.structured.confidence,
  });

  return result.structured;
}

/**
 * Format expert response for display
 */
export function formatExpertResponse(response: ExpertResponse): string {
  const parts = [response.answer];

  if (response.suggestedModifications && response.suggestedModifications.length > 0) {
    parts.push('');
    parts.push('**Suggested Modifications:**');
    response.suggestedModifications.forEach((mod, i) => {
      parts.push(`${i + 1}. ${mod}`);
    });
  }

  if (response.affectedSteps && response.affectedSteps.length > 0) {
    parts.push('');
    parts.push(`**Affected Steps:** ${response.affectedSteps.join(', ')}`);
  }

  return parts.join('\n');
}
