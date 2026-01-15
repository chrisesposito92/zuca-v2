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
import { getDocContext, isIndexReady, extractRagKeywords } from '../../rag';
import { getCorrectionsContext } from '../../self-learn';
import {
  StepClarificationRequest,
  transformClarificationOutput,
  clarificationOutputJsonSchema,
  clarificationRequiredFields,
} from '../../types/clarification';

/**
 * Combined output from contract analysis
 */
export interface ContractAnalysisOutput {
  contractIntel: ContractIntel;
  detectedCapabilities: DetectedCapabilities;
}

/**
 * JSON schema for combined contract analysis structured output (FLAT)
 * Used for LLM structured output - the model returns all fields at root level
 * Includes optional clarification fields for when the model needs user input
 */
export const contractAnalysisJsonSchema = {
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
    // Clarification fields - REQUIRED with nullable values
    ...clarificationOutputJsonSchema.properties,
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
    // Clarification fields - REQUIRED (use null when not needed)
    ...clarificationRequiredFields,
  ],
  additionalProperties: false,
};

/**
 * JSON schema for contract analysis NESTED output (for judge validation)
 * Used by the Judge LLM to validate the transformed ContractAnalysisOutput
 * This matches the actual return type of analyzeContract()
 */
export const contractAnalysisNestedJsonSchema = {
  type: 'object',
  properties: {
    contractIntel: {
      type: 'object',
      properties: {
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
      },
      required: [
        'service_start_mdy',
        'service_end_mdy',
        'term_months',
        'billing_period',
        'billing_timing',
        'trigger_event',
        'go_live_mdy',
        'booking_mdy',
        'renewal_term_months',
      ],
      additionalProperties: false,
    },
    detectedCapabilities: {
      type: 'object',
      properties: {
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
      required: ['billing_caps', 'revenue_caps', 'hints', 'confidence'],
      additionalProperties: false,
    },
  },
  required: ['contractIntel', 'detectedCapabilities'],
  additionalProperties: false,
};

/**
 * Build the user message for combined contract analysis
 */
function buildUserMessage(
  input: ZucaInput,
  capabilities: GoldenUseCaseCapability[],
  keyTerms: KeyTerm[],
  docContext?: string,
  correctionsContext?: string
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

  // Include learned corrections if available
  if (correctionsContext) {
    parts.push('', correctionsContext);
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
 *
 * May return a StepClarificationRequest if the model needs user input on
 * a critical ambiguity (only in interactive mode, controlled by orchestrator)
 */
export async function analyzeContract(
  input: ZucaInput,
  capabilities: GoldenUseCaseCapability[],
  keyTerms: KeyTerm[],
  clarificationContext?: string, // Context from user's clarification answer
  previousAnalysis?: ContractAnalysisOutput,
  reasoningEffort: ReasoningEffort = 'medium', // Combined task needs solid reasoning
  model?: LlmModel
): Promise<ContractAnalysisOutput | StepClarificationRequest> {
  debugLog('Analyzing contract (combined contract intel + capability detection)', {
    hasClarificationContext: !!clarificationContext,
  });

  // Extract capability keywords for targeted RAG + corrections search
  const ragQuery = await extractRagKeywords(input.use_case_description);

  // Retrieve relevant documentation if RAG index is available
  let docContext: string | undefined;
  if (await isIndexReady()) {
    debugLog('RAG index available, retrieving docs for contract analysis...');
    docContext = await getDocContext(ragQuery, { limit: 3, minScore: 0.3 });
    debugLog('Retrieved doc context', { length: docContext?.length || 0 });
  }

  // Retrieve learned corrections for this step (using capability keywords, not customer context)
  const correctionsResult = await getCorrectionsContext({
    stepName: 'analyze_contract',
    inputSummary: ragQuery,
  });
  if (correctionsResult.count > 0) {
    debugLog('Injecting corrections context', {
      count: correctionsResult.count,
      ids: correctionsResult.appliedCorrectionIds,
    });
  }

  const systemPrompt = await loadPrompt(PROMPTS.ANALYZE_CONTRACT);
  let userMessage = buildUserMessage(input, capabilities, keyTerms, docContext, correctionsResult.context);

  // Include previous results for multi-turn support
  if (previousAnalysis) {
    const flatPrevious = {
      ...previousAnalysis.contractIntel,
      ...previousAnalysis.detectedCapabilities,
    };
    userMessage = `Previous Results:\n${JSON.stringify(flatPrevious, null, 2)}\n\nUser Query:\n${userMessage}`;
  }

  // Include clarification context if user provided an answer
  if (clarificationContext) {
    userMessage = `${userMessage}\n\n---\n\n## User Clarification\n${clarificationContext}`;
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
    // Optional clarification fields
    needs_clarification?: boolean;
    clarification_question?: string;
    clarification_context?: string;
    clarification_options?: Array<{ id: string; label: string; description?: string }>;
    clarification_priority?: 'critical' | 'important' | 'helpful';
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

  // Debug: Log clarification fields from LLM response to diagnose why questions aren't being asked
  debugLog('Analyze contract - clarification fields from LLM:', {
    needs_clarification: result.structured.needs_clarification,
    has_question: !!result.structured.clarification_question,
    question_preview: result.structured.clarification_question?.substring(0, 100),
    has_options: !!result.structured.clarification_options,
    options_count: result.structured.clarification_options?.length,
    priority: result.structured.clarification_priority,
  });

  // Check if the model is requesting clarification
  if (result.structured.needs_clarification) {
    const clarificationRequest = transformClarificationOutput('analyze_contract', {
      needs_clarification: result.structured.needs_clarification,
      clarification_question: result.structured.clarification_question,
      clarification_context: result.structured.clarification_context,
      clarification_options: result.structured.clarification_options,
      clarification_priority: result.structured.clarification_priority,
    });

    if (clarificationRequest) {
      debugLog('Contract analysis requesting clarification:', {
        question: clarificationRequest.question.question,
        optionCount: clarificationRequest.question.options.length,
      });
      return clarificationRequest;
    }
    // If transform failed (invalid options), fall through to normal output
    debugLog('Clarification request was invalid, proceeding with analysis');
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
