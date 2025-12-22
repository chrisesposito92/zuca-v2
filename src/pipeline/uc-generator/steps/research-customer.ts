/**
 * UC Generator Step 1: Research Customer
 *
 * Uses web search to understand what the customer sells and how they price it.
 * Produces a structured JSON summary of their commercial offering.
 */

import { complete, getZuoraMcpTools, ReasoningEffort } from '../../../llm/client';
import type { LlmModel } from '../../../types/llm';
import { loadPrompt, PROMPTS } from '../../../llm/prompts/index';
import {
  UCGeneratorInput,
  CustomerResearch,
  CustomerResearchSchema,
  customerResearchJsonSchema,
} from '../../../types/uc-generator';
import { debugLog } from '../../../config';

/**
 * Build the user message for customer research
 */
function buildUserMessage(input: UCGeneratorInput): string {
  const parts = [
    `- customer_name: ${input.customer_name}`,
    `- customer_website: ${input.customer_website}`,
    `- num_use_cases: ${input.num_use_cases}`,
  ];

  if (input.user_notes) {
    parts.push(`- user_notes: ${input.user_notes}`);
  }

  return parts.join('\n');
}

/**
 * Execute the Research Customer step
 *
 * Uses web search to understand the customer's products, pricing, and business model.
 * This is the most critical step for web research - web_search tool is essential.
 */
export async function researchCustomer(
  input: UCGeneratorInput,
  reasoningEffort: ReasoningEffort = 'medium', // Web research requires synthesis
  model?: LlmModel
): Promise<CustomerResearch> {
  debugLog('Researching customer offering:', input.customer_name);

  const systemPrompt = await loadPrompt(PROMPTS.UC_RESEARCH_CUSTOMER);
  const userMessage = buildUserMessage(input);

  const result = await complete<CustomerResearch>({
    systemPrompt,
    userMessage,
    responseSchema: customerResearchJsonSchema,
    tools: ['web_search', 'code_interpreter'], // web_search is CRUCIAL here
    mcpTools: getZuoraMcpTools(),
    reasoningEffort,
    model,
  });

  if (!result.structured) {
    throw new Error('Failed to research customer: no structured output');
  }

  // Validate with Zod
  const validation = CustomerResearchSchema.safeParse(result.structured);
  if (!validation.success) {
    debugLog('Customer research validation warnings:', validation.error.errors);
    // Return raw result anyway, let caller decide how to handle
  }

  debugLog('Customer research completed:', {
    companyName: result.structured.company_profile?.name,
    productCount: result.structured.product_catalog?.length,
    planCount: result.structured.bundles_or_plans?.length,
    dataCompleteness: result.structured.research_meta?.data_completeness,
  });

  return result.structured;
}

/**
 * Format customer research for use in downstream prompts
 */
export function formatCustomerResearchForContext(research: CustomerResearch): string {
  return JSON.stringify(research, null, 2);
}
