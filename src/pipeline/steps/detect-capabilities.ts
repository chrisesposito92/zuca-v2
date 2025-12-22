import { complete, getZuoraMcpTools, ReasoningEffort } from '../../llm/client';
import type { LlmModel } from '../../types/llm';
import { loadPrompt, PROMPTS } from '../../llm/prompts/index';
import { DetectedCapabilities, DetectedCapabilitiesSchema } from '../../types/output';
import { GoldenUseCaseCapability, KeyTerm } from '../../types/golden-use-cases';
import { formatCapabilitiesForContext, formatKeyTermsForContext } from '../../data/loader';
import { debugLog } from '../../config';

/**
 * JSON schema for Detect Capabilities structured output
 */
const detectCapabilitiesJsonSchema = {
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
} as const;

/**
 * Build the user message for capability detection
 */
function buildUserMessage(
  useCaseDescription: string,
  revRecNotes: string | undefined,
  capabilities: GoldenUseCaseCapability[],
  keyTerms: KeyTerm[]
): string {
  const parts = [
    'use_case & notes:',
    useCaseDescription,
    '',
    'Rev Rec Notes (optional):',
    revRecNotes || '(none)',
    '',
    'Dictionaries (JSON):',
    '',
    'capabilities:',
    formatCapabilitiesForContext(capabilities),
    '',
    'keyTerms:',
    formatKeyTermsForContext(keyTerms),
    '',
    'If dates are present, they are hints only; do not invent any additional dates. Only pick labels that exist in the dictionaries.',
  ];

  return parts.join('\n');
}

/**
 * Execute the Detect Capabilities step
 * Classifies the use case into ZB and ZR capability labels
 */
export async function detectCapabilities(
  useCaseDescription: string,
  revRecNotes: string | undefined,
  capabilities: GoldenUseCaseCapability[],
  keyTerms: KeyTerm[],
  previousCapabilities?: DetectedCapabilities,
  reasoningEffort: ReasoningEffort = 'medium', // Capability detection needs solid reasoning
  model?: LlmModel
): Promise<DetectedCapabilities> {
  debugLog('Detecting capabilities from use case');

  const systemPrompt = await loadPrompt(PROMPTS.DETECT_CAPABILITIES);
  let userMessage = buildUserMessage(useCaseDescription, revRecNotes, capabilities, keyTerms);

  // Include previous results for multi-turn support
  if (previousCapabilities) {
    userMessage = `Previous Results:\n${JSON.stringify(previousCapabilities, null, 2)}\n\nUser Query:\n${userMessage}`;
  }

  const result = await complete<DetectedCapabilities>({
    systemPrompt,
    userMessage,
    responseSchema: detectCapabilitiesJsonSchema,
    tools: ['web_search', 'code_interpreter'],
    mcpTools: getZuoraMcpTools(),
    reasoningEffort,
    model,
  });

  if (!result.structured) {
    throw new Error('Failed to detect capabilities: no structured output');
  }

  // Validate with Zod
  const validation = DetectedCapabilitiesSchema.safeParse(result.structured);
  if (!validation.success) {
    debugLog('Capabilities validation failed:', validation.error.errors);
  }

  debugLog('Capabilities detected:', {
    billing: result.structured.billing_caps,
    revenue: result.structured.revenue_caps,
    confidence: result.structured.confidence,
  });

  return result.structured;
}

/**
 * Format detected capabilities for use in downstream prompts
 */
export function formatCapabilitiesForPrompt(caps: DetectedCapabilities): string {
  return [
    `Billing Capabilities: ${caps.billing_caps.join(', ') || 'none detected'}`,
    `Revenue Capabilities: ${caps.revenue_caps.join(', ') || 'none detected'}`,
    `Confidence: ${(caps.confidence * 100).toFixed(0)}%`,
    '',
    'Detection Hints:',
    ...caps.hints.map((h) => `  - ${h}`),
  ].join('\n');
}
