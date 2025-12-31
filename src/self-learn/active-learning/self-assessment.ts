/**
 * Self-Assessment Module
 *
 * Asks the LLM to rate its own confidence in an output.
 * Uses a smaller/faster model to minimize cost.
 */

import OpenAI from 'openai';
import { debugLog } from '../../config';
import type { Criterion } from '../types';
import type { SelfAssessment } from './types';
import { SelfAssessmentSchema } from './types';

let openaiClient: OpenAI | null = null;

function getOpenAI(): OpenAI {
  if (!openaiClient) {
    const apiKey = process.env.OPENAI_API_KEY;
    if (!apiKey) {
      throw new Error('OPENAI_API_KEY required for self-assessment');
    }
    openaiClient = new OpenAI({ apiKey });
  }
  return openaiClient;
}

/**
 * Create a summary of criteria for the assessment prompt
 */
function summarizeCriteria(criteria: Criterion[]): string {
  return criteria
    .map((c) => `- ${c.id}: ${c.name} (${c.severity})`)
    .join('\n');
}

/**
 * Get self-confidence assessment from the LLM
 *
 * Makes a follow-up call asking the model to rate its confidence
 * in the output it just produced.
 *
 * @param output - The output to assess
 * @param stepName - The pipeline step name
 * @param criteria - The evaluation criteria for this step
 * @param model - Model to use for assessment (default: gpt-4o-mini)
 */
export async function getSelfConfidence(
  output: unknown,
  stepName: string,
  criteria: Criterion[] = [],
  model: string = 'gpt-4o-mini'
): Promise<SelfAssessment> {
  const outputStr = typeof output === 'object'
    ? JSON.stringify(output, null, 2)
    : String(output);

  // Truncate if too long
  const truncatedOutput = outputStr.length > 2000
    ? outputStr.slice(0, 2000) + '\n... [truncated]'
    : outputStr;

  const criteriaStr = criteria.length > 0
    ? `\nEvaluation Criteria:\n${summarizeCriteria(criteria)}`
    : '';

  const prompt = `You are reviewing an output from the "${stepName}" step of a revenue recognition pipeline.

Output to assess:
\`\`\`json
${truncatedOutput}
\`\`\`
${criteriaStr}

Rate your confidence that this output is CORRECT and follows best practices.

Consider:
1. Does the output follow the expected format?
2. Are there any obvious errors or inconsistencies?
3. Does the logic appear sound?
4. Are there edge cases that might not be handled?

Respond with ONLY valid JSON (no markdown):
{
  "confidence": <0.0-1.0>,
  "uncertainAreas": ["area1", "area2"],
  "reasoning": "brief explanation"
}`;

  try {
    const openai = getOpenAI();

    const response = await openai.chat.completions.create({
      model,
      messages: [
        {
          role: 'system',
          content: 'You are a quality assurance assistant. Respond with valid JSON only.',
        },
        {
          role: 'user',
          content: prompt,
        },
      ],
      temperature: 0.3,
      max_tokens: 500,
    });

    const content = response.choices[0]?.message?.content?.trim();
    if (!content) {
      throw new Error('Empty response from self-assessment');
    }

    // Try to parse the JSON response
    let parsed: unknown;
    try {
      // Handle potential markdown code blocks
      const jsonMatch = content.match(/```(?:json)?\s*([\s\S]*?)```/);
      const jsonStr = jsonMatch ? jsonMatch[1] : content;
      parsed = JSON.parse(jsonStr.trim());
    } catch {
      debugLog(`Failed to parse self-assessment response: ${content}`);
      return {
        confidence: 0.5,
        uncertainAreas: ['Failed to parse self-assessment'],
        reasoning: 'Self-assessment response could not be parsed',
      };
    }

    const validated = SelfAssessmentSchema.safeParse(parsed);
    if (!validated.success) {
      debugLog(`Self-assessment validation failed: ${validated.error}`);
      return {
        confidence: 0.5,
        uncertainAreas: ['Validation failed'],
        reasoning: 'Self-assessment response did not match expected schema',
      };
    }

    debugLog(`Self-assessment confidence: ${validated.data.confidence}`);
    return validated.data;
  } catch (error) {
    debugLog(`Self-assessment error: ${error}`);
    return {
      confidence: 0.5,
      uncertainAreas: ['Error during self-assessment'],
      reasoning: `Self-assessment failed: ${error instanceof Error ? error.message : 'Unknown error'}`,
    };
  }
}

/**
 * Quick confidence check without full self-assessment
 *
 * Uses heuristics to estimate confidence without an LLM call.
 * Faster but less accurate than getSelfConfidence.
 */
export function quickConfidenceCheck(output: unknown): number {
  if (output === null || output === undefined) {
    return 0.2; // Empty output = low confidence
  }

  if (typeof output === 'object') {
    const obj = output as Record<string, unknown>;
    const keys = Object.keys(obj);

    // Check for empty objects
    if (keys.length === 0) return 0.3;

    // Check for error indicators
    if (obj.error || obj.errors || obj.failed) return 0.3;

    // Check for empty arrays
    const hasEmptyArrays = keys.some(
      (k) => Array.isArray(obj[k]) && (obj[k] as unknown[]).length === 0
    );
    if (hasEmptyArrays) return 0.5;

    // Reasonable structure = moderate confidence
    return 0.7;
  }

  // String output
  if (typeof output === 'string') {
    if (output.length < 10) return 0.4;
    if (output.toLowerCase().includes('error')) return 0.4;
    return 0.6;
  }

  return 0.5;
}
