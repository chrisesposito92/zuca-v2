/**
 * UC Generator Step: Generate Company Fun Facts
 *
 * Uses web search to find interesting facts about a company
 * for display during loading screens.
 */

import { complete, ReasoningEffort } from '../../../llm/client';
import { loadPrompt, PROMPTS } from '../../../llm/prompts/index';
import { debugLog } from '../../../config';

/**
 * Input for company fun facts generation
 */
export interface CompanyFunFactsInput {
  customer_name: string;
  customer_website?: string;
}

/**
 * Output from fun facts generation
 */
export interface CompanyFunFactsOutput {
  company_name: string;
  fun_facts: string[];
}

/**
 * JSON schema for structured output
 */
const companyFunFactsJsonSchema = {
  type: 'object',
  properties: {
    company_name: {
      type: 'string',
      description: 'The name of the company',
    },
    fun_facts: {
      type: 'array',
      items: {
        type: 'string',
      },
      description: 'Array of fun facts about the company',
      minItems: 15,
      maxItems: 25,
    },
  },
  required: ['company_name', 'fun_facts'],
  additionalProperties: false,
};

/**
 * Clean citation markers from web search results
 * These appear as patterns like "turn3search1", "citeturn4search0", "cite", or "【4:0†source】"
 */
function cleanCitationMarkers(text: string): string {
  return text
    // Remove patterns like "turn3search1", "turn2search2turn2search1", "citeturn4search0"
    .replace(/\s*(cite)?(turn\d+search\d+)+/gi, '')
    // Remove standalone "cite" anywhere (with word boundaries)
    .replace(/\s+cite(?:\s|$)/gi, ' ')
    // Remove patterns like "【4:0†source】" or similar
    .replace(/【[^】]*】/g, '')
    // Remove patterns like "[1]" or "(source)" at end
    .replace(/\s*\[\d+\]\s*$/g, '')
    .replace(/\s*\(source\)\s*$/gi, '')
    // Clean up extra whitespace
    .replace(/\s+/g, ' ')
    .trim();
}

/**
 * Build the user message for fun facts generation
 */
function buildUserMessage(input: CompanyFunFactsInput): string {
  const parts = [`Research and generate fun facts about: ${input.customer_name}`];

  if (input.customer_website) {
    parts.push(`Website: ${input.customer_website}`);
  }

  return parts.join('\n');
}

/**
 * Generate fun facts about a company using web search
 *
 * This is designed to be fast and lightweight, providing entertaining
 * content for loading screens during longer pipeline operations.
 */
export async function generateCompanyFunFacts(
  input: CompanyFunFactsInput,
  reasoningEffort: ReasoningEffort = 'low' // Keep it fast
): Promise<CompanyFunFactsOutput> {
  debugLog('Generating fun facts for:', input.customer_name);

  const systemPrompt = await loadPrompt(PROMPTS.UC_COMPANY_FUN_FACTS);
  const userMessage = buildUserMessage(input);

  const result = await complete<CompanyFunFactsOutput>({
    systemPrompt,
    userMessage,
    responseSchema: companyFunFactsJsonSchema,
    tools: ['web_search'], // Essential for finding facts
    reasoningEffort,
  });

  if (!result.structured) {
    throw new Error('Failed to generate fun facts: no structured output');
  }

  // Clean citation markers from all facts
  const cleanedFacts = result.structured.fun_facts.map(cleanCitationMarkers);

  debugLog('Fun facts generated:', {
    companyName: result.structured.company_name,
    factCount: cleanedFacts.length,
  });

  return {
    company_name: result.structured.company_name,
    fun_facts: cleanedFacts,
  };
}
