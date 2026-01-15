/**
 * RAG Query Extractor
 *
 * Uses a lightweight LLM call to transform customer use-case descriptions
 * into capability-focused search keywords for more relevant RAG retrieval.
 */

import { complete } from '../llm/client';
import { debugLog } from '../config';

const EXTRACTION_PROMPT = `Extract Zuora-relevant technical keywords from this use case.
Return ONLY a comma-separated list of Zuora capability keywords.
Focus on: billing models, charge types, pricing strategies, revenue recognition concepts.
Examples: "usage-based billing", "tiered pricing", "SSP allocation", "POB", "ratable recognition"

Use case:
{USE_CASE}

Keywords:`;

/**
 * Extract capability-focused keywords from a use case description.
 * Uses gemini-3-flash-preview for fast, low-cost extraction.
 *
 * @param useCase - The customer's use case description
 * @param options - Optional rev rec notes to include in extraction
 * @returns A keyword query string prefixed with "Zuora"
 */
export async function extractRagKeywords(
  useCase: string,
  options?: { revRecNotes?: string }
): Promise<string> {
  const context = options?.revRecNotes
    ? `${useCase}\n\nRev Rec Notes: ${options.revRecNotes}`
    : useCase;

  try {
    const result = await complete({
      userMessage: EXTRACTION_PROMPT.replace('{USE_CASE}', context),
      model: 'gemini-3-flash-preview',
      reasoningEffort: 'low',
      maxTokens: 150,
    });

    const keywords = result.text.trim();
    const query = `Zuora ${keywords}`;
    debugLog('RAG keywords extracted', { keywords, query: query.substring(0, 100) });
    return query;
  } catch (error) {
    // Fallback to original use case on extraction failure
    debugLog('RAG keyword extraction failed, using fallback', { error });
    return useCase;
  }
}
