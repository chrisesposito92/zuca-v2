/**
 * LLM Judge for Self-Learning System
 *
 * Evaluates pipeline step outputs against behavioral criteria
 * using an LLM to make judgment calls.
 */

import { complete, ReasoningEffort } from '../../llm/client';
import { loadPrompt, PROMPTS } from '../../llm/prompts/index';
import { debugLog } from '../../config';
import type { LlmModel } from '../../types/llm';
import type {
  JudgeResult,
  CriterionEvaluation,
  EvaluationCriteria,
  Criterion,
} from '../types';

/**
 * JSON schema for JudgeResult structured output
 */
const judgeResultSchema = {
  type: 'object',
  properties: {
    overall_pass: {
      type: 'boolean',
      description: 'True only if ALL criteria pass',
    },
    evaluations: {
      type: 'array',
      items: {
        type: 'object',
        properties: {
          criterion_id: { type: 'string' },
          criterion_name: { type: 'string' },
          passed: { type: 'boolean' },
          confidence: { type: 'number', minimum: 0, maximum: 1 },
          explanation: { type: 'string' },
          correction: {
            type: ['object', 'null'],
            properties: {
              issue_type: {
                type: 'string',
                enum: [
                  'missing_field',
                  'wrong_calculation',
                  'logic_error',
                  'format_error',
                  'behavioral_violation',
                  'structural_error',
                ],
              },
              expected_behavior: { type: 'string' },
              suggested_fix: { type: 'string' },
              example_output: {},
            },
            required: ['issue_type', 'expected_behavior', 'suggested_fix'],
          },
        },
        required: ['criterion_id', 'criterion_name', 'passed', 'confidence', 'explanation', 'correction'],
        additionalProperties: false,
      },
      description: 'Evaluation result for each criterion',
    },
    overall_notes: {
      type: 'string',
      description: 'Summary of key findings',
    },
  },
  required: ['overall_pass', 'evaluations', 'overall_notes'],
  additionalProperties: false,
};

/**
 * Options for evaluation
 */
export interface EvaluateOptions {
  /** LLM model to use for judging */
  model?: LlmModel;
  /** Reasoning effort level */
  reasoningEffort?: ReasoningEffort;
  /** Only evaluate specific criteria IDs */
  criteriaFilter?: string[];
}

/**
 * Format criteria for the LLM prompt
 */
function formatCriteriaForPrompt(criteria: Criterion[]): string {
  return criteria
    .map((c) => {
      const parts = [
        `### Criterion: ${c.id} - ${c.name}`,
        `**Severity:** ${c.severity}`,
        `**Description:** ${c.description}`,
        `**Patterns to watch for:** ${c.patterns.join(', ')}`,
        '',
        `**Rule (${c.check.type}):**`,
        c.check.rule,
      ];

      if (c.examples?.passing?.length) {
        parts.push('', '**Passing examples:**');
        c.examples.passing.forEach((ex) => {
          parts.push(`- Scenario: ${ex.scenario}`);
          if (ex.expected) parts.push(`  Expected: ${ex.expected}`);
        });
      }

      if (c.examples?.failing?.length) {
        parts.push('', '**Failing examples:**');
        c.examples.failing.forEach((ex) => {
          parts.push(`- Scenario: ${ex.scenario}`);
          if (ex.incorrect) parts.push(`  Incorrect: ${ex.incorrect}`);
          if (ex.why) parts.push(`  Why: ${ex.why}`);
        });
      }

      return parts.join('\n');
    })
    .join('\n\n---\n\n');
}

/**
 * Build the user message for evaluation
 */
function buildUserMessage(
  stepName: string,
  inputSummary: string,
  output: unknown,
  criteria: Criterion[]
): string {
  const parts = [
    '# Evaluation Request',
    '',
    `## Step Being Evaluated: ${stepName}`,
    '',
    '## Input Summary',
    inputSummary,
    '',
    '## Output to Evaluate',
    '```json',
    JSON.stringify(output, null, 2),
    '```',
    '',
    '## Criteria to Check',
    formatCriteriaForPrompt(criteria),
    '',
    '---',
    '',
    'Evaluate the output against each criterion above.',
    'For each criterion, determine if it passes or fails.',
    'If it fails, provide a correction with specific fix instructions.',
  ];

  return parts.join('\n');
}

/**
 * Evaluate a pipeline step output against criteria
 *
 * @param stepName - Name of the pipeline step (e.g., 'contracts_orders')
 * @param inputSummary - Brief description of the input that produced this output
 * @param output - The actual output to evaluate
 * @param criteria - Evaluation criteria to check against
 * @param options - Evaluation options
 * @returns JudgeResult with pass/fail for each criterion
 */
export async function evaluateOutput(
  stepName: string,
  inputSummary: string,
  output: unknown,
  criteria: EvaluationCriteria,
  options: EvaluateOptions = {}
): Promise<JudgeResult> {
  debugLog(`Evaluating ${stepName} against ${criteria.criteria.length} criteria`);

  // Filter criteria if specified
  let criteriaToCheck = criteria.criteria;
  if (options.criteriaFilter?.length) {
    criteriaToCheck = criteria.criteria.filter((c) =>
      options.criteriaFilter!.includes(c.id)
    );
  }

  if (criteriaToCheck.length === 0) {
    return {
      overall_pass: true,
      evaluations: [],
      overall_notes: 'No criteria to evaluate',
    };
  }

  const systemPrompt = await loadPrompt(PROMPTS.SELF_LEARN_JUDGE);
  const userMessage = buildUserMessage(stepName, inputSummary, output, criteriaToCheck);

  try {
    const result = await complete<JudgeResult>({
      systemPrompt,
      userMessage,
      responseSchema: judgeResultSchema,
      reasoningEffort: options.reasoningEffort ?? 'medium',
      model: options.model,
    });

    if (result.structured) {
      debugLog(`Evaluation complete: ${result.structured.overall_pass ? 'PASS' : 'FAIL'}`);
      return result.structured;
    }

    // Fallback if structured output fails
    debugLog('Judge LLM failed to return structured output');
    return createFallbackResult(criteriaToCheck, 'LLM failed to return structured evaluation');
  } catch (error) {
    debugLog(`Judge LLM error: ${error}`);
    return createFallbackResult(
      criteriaToCheck,
      `Evaluation error: ${error instanceof Error ? error.message : 'Unknown error'}`
    );
  }
}

/**
 * Create a fallback result when LLM fails
 */
function createFallbackResult(criteria: Criterion[], reason: string): JudgeResult {
  return {
    overall_pass: false,
    evaluations: criteria.map((c) => ({
      criterion_id: c.id,
      criterion_name: c.name,
      passed: false,
      confidence: 0,
      explanation: reason,
      correction: null,
    })),
    overall_notes: reason,
  };
}

/**
 * Quick evaluation for a single criterion
 * Useful for testing or focused evaluation
 */
export async function evaluateSingleCriterion(
  stepName: string,
  inputSummary: string,
  output: unknown,
  criterion: Criterion,
  options: EvaluateOptions = {}
): Promise<CriterionEvaluation> {
  const mockCriteria: EvaluationCriteria = {
    name: `single-${criterion.id}`,
    version: '1.0',
    step: stepName,
    criteria: [criterion],
  };

  const result = await evaluateOutput(stepName, inputSummary, output, mockCriteria, options);
  return result.evaluations[0] || {
    criterion_id: criterion.id,
    criterion_name: criterion.name,
    passed: false,
    confidence: 0,
    explanation: 'Evaluation failed',
    correction: null,
  };
}

/**
 * Check if any critical criteria failed
 */
export function hasCriticalFailures(
  result: JudgeResult,
  criteria: EvaluationCriteria
): boolean {
  const criticalIds = criteria.criteria
    .filter((c) => c.severity === 'critical')
    .map((c) => c.id);

  return result.evaluations.some(
    (e) => criticalIds.includes(e.criterion_id) && !e.passed
  );
}

/**
 * Get failed evaluations sorted by severity
 */
export function getFailedEvaluations(
  result: JudgeResult,
  criteria: EvaluationCriteria
): CriterionEvaluation[] {
  const severityOrder = { critical: 0, high: 1, medium: 2, low: 3 };

  const severityMap = new Map(
    criteria.criteria.map((c) => [c.id, c.severity])
  );

  return result.evaluations
    .filter((e) => !e.passed)
    .sort((a, b) => {
      const aSev = severityOrder[severityMap.get(a.criterion_id) || 'low'];
      const bSev = severityOrder[severityMap.get(b.criterion_id) || 'low'];
      return aSev - bSev;
    });
}
