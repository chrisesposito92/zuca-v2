import { complete, getZuoraMcpTools, ReasoningEffort } from '../../llm/client.js';
import { loadPrompt, PROMPTS } from '../../llm/prompts/index.js';
import { debugLog } from '../../config.js';

/**
 * Classification result from the router
 */
export interface RouterResult {
  classification: 'use_case' | 'general_question';
  confidence: number;
  reasoning: string;
}

/**
 * JSON schema for Router structured output
 */
const routerJsonSchema = {
  type: 'object',
  properties: {
    classification: {
      type: 'string',
      enum: ['use_case', 'general_question'],
      description: 'Whether input is a use case or general question',
    },
    confidence: {
      type: 'number',
      minimum: 0,
      maximum: 1,
      description: 'Confidence score for the classification',
    },
    reasoning: {
      type: 'string',
      description: 'Brief explanation of classification decision',
    },
  },
  required: ['classification', 'confidence', 'reasoning'],
  additionalProperties: false,
};

/**
 * Route user input to appropriate pipeline path
 * Determines if input is a new use case or a general question
 */
export async function routeQuery(
  userInput: string,
  hasExistingSolution: boolean = false,
  reasoningEffort: ReasoningEffort = 'low' // Simple classification task
): Promise<RouterResult> {
  debugLog('Routing user query', { inputLength: userInput.length, hasExistingSolution });

  const systemPrompt = await loadPrompt(PROMPTS.ROUTER);

  const userMessage = hasExistingSolution
    ? `Context: A solution has already been generated for this session.\n\nUser Input: ${userInput}`
    : `Context: This is a new session with no existing solution.\n\nUser Input: ${userInput}`;

  const result = await complete<RouterResult>({
    systemPrompt,
    userMessage,
    responseSchema: routerJsonSchema,
    tools: ['web_search', 'code_interpreter'],
    mcpTools: getZuoraMcpTools(),
    reasoningEffort,
  });

  if (!result.structured) {
    // Default to use_case if classification fails
    debugLog('Router failed, defaulting to use_case');
    return {
      classification: 'use_case',
      confidence: 0.5,
      reasoning: 'Classification failed, defaulting to use case processing',
    };
  }

  debugLog('Query routed:', result.structured);
  return result.structured;
}

/**
 * Quick heuristic check before calling LLM router
 * Returns classification if confident, null if LLM needed
 */
export function quickRouteCheck(userInput: string): RouterResult | null {
  const input = userInput.toLowerCase().trim();

  // Strong signals for general question
  const questionPrefixes = [
    'what is',
    'what are',
    'what does',
    'how does',
    'how do',
    'why did',
    'why does',
    'can you explain',
    'explain',
    'tell me about',
    'what\'s the difference',
    'difference between',
  ];

  for (const prefix of questionPrefixes) {
    if (input.startsWith(prefix)) {
      return {
        classification: 'general_question',
        confidence: 0.85,
        reasoning: `Input starts with "${prefix}" - likely a question`,
      };
    }
  }

  // Strong signals for use case
  const useCaseKeywords = [
    'customer wants',
    'contract for',
    'subscription for',
    'build a solution',
    'create a solution',
    'analyze this use case',
    'term months',
    'billing period',
    'rate plan',
  ];

  for (const keyword of useCaseKeywords) {
    if (input.includes(keyword)) {
      return {
        classification: 'use_case',
        confidence: 0.85,
        reasoning: `Input contains "${keyword}" - likely a use case`,
      };
    }
  }

  // Not confident enough, need LLM
  return null;
}

/**
 * Smart routing with quick check fallback to LLM
 */
export async function smartRoute(
  userInput: string,
  hasExistingSolution: boolean = false
): Promise<RouterResult> {
  // Try quick heuristic first
  const quickResult = quickRouteCheck(userInput);
  if (quickResult && quickResult.confidence >= 0.8) {
    debugLog('Quick route matched:', quickResult);
    return quickResult;
  }

  // Fall back to LLM for ambiguous cases
  return routeQuery(userInput, hasExistingSolution);
}
