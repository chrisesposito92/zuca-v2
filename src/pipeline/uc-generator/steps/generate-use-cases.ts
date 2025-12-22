/**
 * UC Generator Step 2: Generate Structured Use Cases
 *
 * Takes customer research and generates 1-3 structured use cases
 * with otr_workflow_inputs ready for the main ZUCA pipeline.
 */

import { complete, getZuoraMcpTools, ReasoningEffort } from '../../../llm/client';
import type { LlmModel } from '../../../types/llm';
import { loadPrompt, PROMPTS } from '../../../llm/prompts/index';
import {
  UCGeneratorInput,
  CustomerResearch,
  GeneratedUseCases,
  GeneratedUseCasesSchema,
  generatedUseCasesJsonSchema,
} from '../../../types/uc-generator';
import { debugLog } from '../../../config';
import { formatCustomerResearchForContext } from './research-customer';

/**
 * Build the user message for use case generation
 */
function buildUserMessage(input: UCGeneratorInput, research: CustomerResearch): string {
  const parts = [
    `- customer_name: ${input.customer_name}`,
    `- customer_website: ${input.customer_website}`,
    `- num_use_cases: ${input.num_use_cases}`,
  ];

  if (input.user_notes) {
    parts.push(`- user_notes: ${input.user_notes}`);
  }

  parts.push('', '- catalog_summary:', formatCustomerResearchForContext(research));

  return parts.join('\n');
}

/**
 * Execute the Generate Use Cases step
 *
 * Takes customer research and generates structured use cases
 * that are ready to be fed into the main ZUCA OTR pipeline.
 */
export async function generateUseCases(
  input: UCGeneratorInput,
  research: CustomerResearch,
  reasoningEffort: ReasoningEffort = 'high', // Complex Zuora reasoning
  model?: LlmModel
): Promise<GeneratedUseCases> {
  debugLog('Generating use cases for:', input.customer_name);

  const systemPrompt = await loadPrompt(PROMPTS.UC_GENERATE_USE_CASES);
  const userMessage = buildUserMessage(input, research);

  const result = await complete<GeneratedUseCases>({
    systemPrompt,
    userMessage,
    responseSchema: generatedUseCasesJsonSchema,
    tools: ['code_interpreter'], // May need for calculations
    mcpTools: getZuoraMcpTools(), // Zuora-specific guidance
    reasoningEffort,
    model,
  });

  if (!result.structured) {
    throw new Error('Failed to generate use cases: no structured output');
  }

  // Validate with Zod
  const validation = GeneratedUseCasesSchema.safeParse(result.structured);
  if (!validation.success) {
    debugLog('Generated use cases validation warnings:', validation.error.errors);
    // Return raw result anyway, let caller decide how to handle
  }

  debugLog('Use cases generated:', {
    customerName: result.structured.customer_name,
    numUseCases: result.structured.use_cases?.length,
    useCaseLabels: result.structured.use_cases?.map((uc) => uc.label),
  });

  return result.structured;
}

/**
 * Format generated use cases for use in the format step
 * Extracts just the use_cases array as a JSON string
 */
export function formatUseCasesForOutput(useCases: GeneratedUseCases): string {
  return JSON.stringify(useCases.use_cases, null, 2);
}
