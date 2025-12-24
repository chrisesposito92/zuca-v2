/**
 * Combined Contract Analysis Step
 *
 * This step combines contract-intel and detect-capabilities into a single LLM call
 * for improved efficiency and coherence. The model analyzes the input once and
 * extracts both contract parameters AND capability classifications together.
 */

import { complete, getZuoraMcpTools, ReasoningEffort } from '../../llm/client';
import type { LlmModel } from '../../types/llm';
import { loadPrompt, PROMPTS } from '../../llm/prompts/index';
import { ContractIntel, ContractIntelSchema, DetectedCapabilities, DetectedCapabilitiesSchema } from '../../types/output';
import { ZucaInput } from '../../types/input';
import { GoldenUseCaseCapability, KeyTerm } from '../../types/golden-use-cases';
import { formatCapabilitiesForContext, formatKeyTermsForContext } from '../../data/loader';
import { debugLog } from '../../config';
import { getDocContext, isIndexReady } from '../../rag';

/**
 * Combined output from contract analysis
 */
export interface ContractAnalysisOutput {
  contractIntel: ContractIntel;
  detectedCapabilities: DetectedCapabilities;
}

/**
 * JSON schema for combined contract analysis structured output
 */
const contractAnalysisJsonSchema = {
  type: 'object',
  properties: {
    // Contract Intel fields
    service_start_mdy: { type: 'string' },
    service_end_mdy: { type: ['string', 'null'] },
    term_months: { type: 'number' },
    billing_period: {
      type: ['string', 'null'],
      enum: ['Month', 'Quarter', 'Year', 'Semi-Annual', null],
    },
    billing_timing: {
      type: ['string', 'null'],
      enum: ['InAdvance', 'InArrears', null],
    },
    trigger_event: { type: 'string' },
    go_live_mdy: { type: 'string' },
    booking_mdy: { type: 'string' },
    renewal_term_months: { type: 'number' },
    // Capability Detection fields
    billing_caps: {
      type: 'array',
      items: { type: 'string' },
      description: 'Exact capability labels for Zuora Billing',
    },
    revenue_caps: {
      type: 'array',
      items: { type: 'string' },
      description: 'Exact capability labels for Zuora Revenue',
    },
    hints: {
      type: 'array',
      items: { type: 'string' },
      description: 'Short reasons that justify matches',
    },
    confidence: {
      type: 'number',
      minimum: 0,
      maximum: 1,
      description: 'Confidence score based on how explicit the text is',
    },
  },
  required: [
    // Contract Intel required
    'service_start_mdy',
    'service_end_mdy',
    'term_months',
    'billing_period',
    'billing_timing',
    'trigger_event',
    'go_live_mdy',
    'booking_mdy',
    'renewal_term_months',
    // Capability Detection required
    'billing_caps',
    'revenue_caps',
    'hints',
    'confidence',
  ],
  additionalProperties: false,
};

/**
 * Build the user message for combined contract analysis
 */
function buildUserMessage(
  input: ZucaInput,
  capabilities: GoldenUseCaseCapability[],
  keyTerms: KeyTerm[],
  docContext?: string
): string {
  const parts = [
    `Customer: ${input.customer_name}`,
    `Contract Start Date: ${input.contract_start_date}`,
    `Terms (Months): ${input.terms_months}`,
    `Billing Period: ${input.billing_period}`,
    '',
    'Use Case Description:',
    input.use_case_description,
  ];

  if (input.rev_rec_notes) {
    parts.push('', 'Revenue Recognition Notes:', input.rev_rec_notes);
  }

  // Include retrieved documentation if available
  if (docContext) {
    parts.push('', docContext);
  }

  // Add capability dictionaries for classification
  parts.push(
    '',
    'Capability Dictionaries (JSON):',
    '',
    'capabilities:',
    formatCapabilitiesForContext(capabilities),
    '',
    'keyTerms:',
    formatKeyTermsForContext(keyTerms),
    '',
    'Only pick capability labels that exist in the dictionaries. Use exact strings.'
  );

  return parts.join('\n');
}

/**
 * Execute combined contract analysis
 * Extracts contract intel AND detects capabilities in a single LLM call
 */
export async function analyzeContract(
  input: ZucaInput,
  capabilities: GoldenUseCaseCapability[],
  keyTerms: KeyTerm[],
  previousAnalysis?: ContractAnalysisOutput,
  reasoningEffort: ReasoningEffort = 'medium', // Combined task needs solid reasoning
  model?: LlmModel
): Promise<ContractAnalysisOutput> {
  debugLog('Analyzing contract (combined contract intel + capability detection)');

  // Retrieve relevant documentation if RAG index is available
  let docContext: string | undefined;
  if (await isIndexReady()) {
    debugLog('RAG index available, retrieving docs for contract analysis...');
    // Query using the use case description to find relevant billing/revenue concepts
    docContext = await getDocContext(input.use_case_description, { limit: 3, minScore: 0.3 });
    debugLog('Retrieved doc context', { length: docContext?.length || 0 });
  }

  const systemPrompt = await loadPrompt(PROMPTS.ANALYZE_CONTRACT);
  let userMessage = buildUserMessage(input, capabilities, keyTerms, docContext);

  // Include previous results for multi-turn support
  if (previousAnalysis) {
    const flatPrevious = {
      ...previousAnalysis.contractIntel,
      ...previousAnalysis.detectedCapabilities,
    };
    userMessage = `Previous Results:\n${JSON.stringify(flatPrevious, null, 2)}\n\nUser Query:\n${userMessage}`;
  }

  const result = await complete<{
    // Contract Intel
    service_start_mdy: string;
    service_end_mdy: string | null;
    term_months: number;
    billing_period: string | null;
    billing_timing: string | null;
    trigger_event: string;
    go_live_mdy: string;
    booking_mdy: string;
    renewal_term_months: number;
    // Capabilities
    billing_caps: string[];
    revenue_caps: string[];
    hints: string[];
    confidence: number;
  }>({
    systemPrompt,
    userMessage,
    responseSchema: contractAnalysisJsonSchema,
    tools: ['web_search', 'code_interpreter'],
    mcpTools: getZuoraMcpTools(),
    reasoningEffort,
    model,
  });

  if (!result.structured) {
    throw new Error('Failed to analyze contract: no structured output');
  }

  // Split the combined result into separate outputs
  const contractIntel: ContractIntel = {
    service_start_mdy: result.structured.service_start_mdy,
    service_end_mdy: result.structured.service_end_mdy,
    term_months: result.structured.term_months,
    billing_period: result.structured.billing_period as ContractIntel['billing_period'],
    billing_timing: result.structured.billing_timing as ContractIntel['billing_timing'],
    trigger_event: result.structured.trigger_event,
    go_live_mdy: result.structured.go_live_mdy,
    booking_mdy: result.structured.booking_mdy,
    renewal_term_months: result.structured.renewal_term_months,
  };

  const detectedCapabilities: DetectedCapabilities = {
    billing_caps: result.structured.billing_caps,
    revenue_caps: result.structured.revenue_caps,
    hints: result.structured.hints,
    confidence: result.structured.confidence,
  };

  // Validate with Zod
  const contractValidation = ContractIntelSchema.safeParse(contractIntel);
  if (!contractValidation.success) {
    debugLog('Contract intel validation failed:', contractValidation.error.errors);
  }

  const capsValidation = DetectedCapabilitiesSchema.safeParse(detectedCapabilities);
  if (!capsValidation.success) {
    debugLog('Capabilities validation failed:', capsValidation.error.errors);
  }

  debugLog('Contract analysis complete:', {
    serviceStart: contractIntel.service_start_mdy,
    termMonths: contractIntel.term_months,
    billingCaps: detectedCapabilities.billing_caps,
    revenueCaps: detectedCapabilities.revenue_caps,
    confidence: detectedCapabilities.confidence,
  });

  return {
    contractIntel,
    detectedCapabilities,
  };
}
