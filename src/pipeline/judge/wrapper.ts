import { complete } from '../../llm/client';
import { loadPrompt, PROMPTS } from '../../llm/prompts/index';
import { debugLog } from '../../config';
import { getStepConfig, isJudgeEnabled, isStepJudgeEnabled } from './config';
import type { JudgeableStep, JudgeEvaluation, JudgeWrapperResult } from './types';

// ============================================================================
// Schema Builder
// ============================================================================

/**
 * Create JSON schema for judge output that wraps the original schema
 * The judge must output the same schema in corrected_output, plus metadata
 */
function createJudgeSchema(originalSchema: Record<string, unknown>): Record<string, unknown> {
  return {
    type: 'object',
    properties: {
      corrected_output: originalSchema,
      made_changes: { type: 'boolean' },
      changes: {
        type: 'array',
        items: {
          type: 'object',
          properties: {
            field: { type: 'string' },
            original: {},
            corrected: {},
            confidence: { type: 'number', minimum: 0, maximum: 1 },
            reasoning: { type: 'string' },
          },
          required: ['field', 'original', 'corrected', 'confidence', 'reasoning'],
          additionalProperties: false,
        },
      },
      validation_passed: { type: 'boolean' },
      overall_confidence: { type: 'number', minimum: 0, maximum: 1 },
      notes: { type: 'string' },
    },
    required: ['corrected_output', 'made_changes', 'changes', 'validation_passed', 'overall_confidence'],
    additionalProperties: false,
  };
}

// ============================================================================
// Message Builder
// ============================================================================

type EnumConstraint = {
  path: string;
  values: unknown[];
};

export function collectEnumConstraints(schema: Record<string, unknown>, path = ''): EnumConstraint[] {
  const constraints: EnumConstraint[] = [];

  if (!schema || typeof schema !== 'object') {
    return constraints;
  }

  const record = schema as Record<string, unknown>;

  if (Array.isArray(record.enum)) {
    constraints.push({
      path: path || '(root)',
      values: record.enum as unknown[],
    });
  }

  const properties = record.properties;
  if (properties && typeof properties === 'object' && !Array.isArray(properties)) {
    for (const [key, value] of Object.entries(properties as Record<string, unknown>)) {
      const childPath = path ? `${path}.${key}` : key;
      if (value && typeof value === 'object') {
        constraints.push(...collectEnumConstraints(value as Record<string, unknown>, childPath));
      }
    }
  }

  const items = record.items;
  if (items && typeof items === 'object') {
    if (Array.isArray(items)) {
      items.forEach((item, index) => {
        const childPath = path ? `${path}[${index}]` : `[${index}]`;
        if (item && typeof item === 'object') {
          constraints.push(...collectEnumConstraints(item as Record<string, unknown>, childPath));
        }
      });
    } else {
      const childPath = path ? `${path}[]` : '[]';
      constraints.push(...collectEnumConstraints(items as Record<string, unknown>, childPath));
    }
  }

  const oneOf = record.oneOf;
  if (Array.isArray(oneOf)) {
    oneOf.forEach((entry) => {
      if (entry && typeof entry === 'object') {
        constraints.push(...collectEnumConstraints(entry as Record<string, unknown>, path));
      }
    });
  }

  const anyOf = record.anyOf;
  if (Array.isArray(anyOf)) {
    anyOf.forEach((entry) => {
      if (entry && typeof entry === 'object') {
        constraints.push(...collectEnumConstraints(entry as Record<string, unknown>, path));
      }
    });
  }

  const allOf = record.allOf;
  if (Array.isArray(allOf)) {
    allOf.forEach((entry) => {
      if (entry && typeof entry === 'object') {
        constraints.push(...collectEnumConstraints(entry as Record<string, unknown>, path));
      }
    });
  }

  return constraints;
}

export function formatEnumConstraints(schema: Record<string, unknown>): string | undefined {
  const constraints = collectEnumConstraints(schema);
  if (constraints.length === 0) {
    return undefined;
  }

  const lines = constraints.map((constraint) =>
    `- ${constraint.path}: ${JSON.stringify(constraint.values)}`
  );

  return ['## Enum Constraints', ...lines].join('\n');
}

/**
 * Build the user message for the judge
 */
function buildJudgeUserMessage(
  stepName: string,
  inputContext: string,
  output: unknown,
  originalSchema: Record<string, unknown>
): string {
  const enumSection = formatEnumConstraints(originalSchema);
  const parts = [
    `## Step Being Validated`,
    `**Step Name:** ${stepName}`,
    '',
    `## Input Context`,
    inputContext,
    '',
  ];

  if (enumSection) {
    parts.push(enumSection, '');
  }

  parts.push(
    `## Output to Validate`,
    '```json',
    JSON.stringify(output, null, 2),
    '```',
    '',
    `## Instructions`,
    `Review the output above for errors, inconsistencies, or quality issues. If you are changing`,
    `an ENUM field, IT MUST BE A VALID VALUE.`,
    `If you find issues with HIGH CONFIDENCE corrections, apply them to corrected_output.`,
    `If no changes needed, return the original output unchanged with made_changes: false.`
  );

  return parts.join('\n');
}

// ============================================================================
// Main Wrapper Function
// ============================================================================

/**
 * Wrap an LLM step output with judge validation
 *
 * @param stepName - Name of the pipeline step (e.g., 'analyze_contract')
 * @param output - The structured output from the original step
 * @param originalSchema - The JSON schema used for the original output
 * @param inputContext - Summary of the input for context
 * @returns The validated/corrected output and judge metadata
 *
 * @example
 * ```typescript
 * const judgeResult = await withJudge(
 *   'analyze_contract',
 *   stepOutput,
 *   contractAnalysisJsonSchema,
 *   `Customer: Acme Corp, Contract term: 12 months`
 * );
 * result.contract_intel = judgeResult.output.contractIntel;
 * ```
 */
export async function withJudge<T>(
  stepName: JudgeableStep,
  output: T,
  originalSchema: Record<string, unknown>,
  inputContext: string
): Promise<JudgeWrapperResult<T>> {
  const startTime = Date.now();

  // Check if judge is globally enabled
  if (!isJudgeEnabled()) {
    debugLog('[Judge] Globally disabled, skipping');
    return {
      output,
      judgeApplied: false,
      judgeDurationMs: Date.now() - startTime,
    };
  }

  // Check if this specific step has judge enabled
  if (!isStepJudgeEnabled(stepName)) {
    debugLog(`[Judge] Disabled for step: ${stepName}`);
    return {
      output,
      judgeApplied: false,
      judgeDurationMs: Date.now() - startTime,
    };
  }

  // Load step-specific config
  const stepConfig = getStepConfig(stepName);

  try {
    debugLog(`[Judge] Running for step: ${stepName}`, {
      model: stepConfig.model,
      threshold: stepConfig.confidenceThreshold,
    });

    // Load the judge system prompt
    const systemPrompt = await loadPrompt(PROMPTS.JUDGE_LLM);
    const userMessage = buildJudgeUserMessage(stepName, inputContext, output, originalSchema);
    const judgeSchema = createJudgeSchema(originalSchema);

    // Run the judge with timeout
    const judgePromise = complete<JudgeEvaluation>({
      systemPrompt,
      userMessage,
      responseSchema: judgeSchema,
      model: stepConfig.model,
      reasoningEffort: stepConfig.reasoningEffort,
    });

    // Apply timeout
    const timeoutPromise = new Promise<never>((_, reject) =>
      setTimeout(() => reject(new Error(`Judge timeout after ${stepConfig.timeoutMs}ms`)), stepConfig.timeoutMs)
    );

    const result = await Promise.race([judgePromise, timeoutPromise]);
    const durationMs = Date.now() - startTime;

    if (!result.structured) {
      throw new Error('Judge returned no structured output');
    }

    const evaluation = result.structured;

    debugLog(`[Judge] Completed for ${stepName}`, {
      madeChanges: evaluation.made_changes,
      changeCount: evaluation.changes.length,
      confidence: evaluation.overall_confidence,
      validationPassed: evaluation.validation_passed,
      durationMs,
    });

    // Apply changes only if confident enough
    if (evaluation.made_changes && evaluation.overall_confidence >= stepConfig.confidenceThreshold) {
      debugLog(`[Judge] Applying ${evaluation.changes.length} changes to ${stepName}`, {
        changes: evaluation.changes.map((c) => ({
          field: c.field,
          confidence: c.confidence,
        })),
      });

      return {
        output: evaluation.corrected_output as T,
        judgeApplied: true,
        judgeDetails: {
          madeChanges: evaluation.made_changes,
          changes: evaluation.changes,
          validationPassed: evaluation.validation_passed,
          confidence: evaluation.overall_confidence,
          notes: evaluation.notes,
        },
        judgeDurationMs: durationMs,
      };
    }

    // Low confidence - log but don't apply
    if (evaluation.made_changes) {
      debugLog(
        `[Judge] Found changes but confidence (${evaluation.overall_confidence.toFixed(2)}) below threshold (${stepConfig.confidenceThreshold}), not applying`,
        {
          suggestedChanges: evaluation.changes.map((c) => ({
            field: c.field,
            confidence: c.confidence,
            reasoning: c.reasoning,
          })),
        }
      );
    }

    return {
      output,
      judgeApplied: false,
      judgeDetails: {
        madeChanges: evaluation.made_changes,
        changes: evaluation.changes,
        validationPassed: evaluation.validation_passed,
        confidence: evaluation.overall_confidence,
        notes: evaluation.notes,
      },
      judgeDurationMs: durationMs,
    };
  } catch (error) {
    const durationMs = Date.now() - startTime;
    const errorMessage = error instanceof Error ? error.message : String(error);
    debugLog(`[Judge] Error for ${stepName}: ${errorMessage}`);

    // Never block pipeline - return original output
    return {
      output,
      judgeApplied: false,
      judgeError: errorMessage,
      judgeDurationMs: durationMs,
    };
  }
}

// ============================================================================
// Context Builder Helpers
// ============================================================================

/**
 * Helper to build input context string from ZucaInput
 * Can be extended with additional context as needed
 */
export function buildInputContext(
  input: {
    customer_name?: string;
    use_case?: string;
    service_start_mdy?: string;
    term_months?: number;
  },
  additionalContext?: string
): string {
  const parts: string[] = [];

  if (input.customer_name) {
    parts.push(`**Customer:** ${input.customer_name}`);
  }
  if (input.use_case) {
    parts.push(`**Use Case:** ${input.use_case.substring(0, 500)}${input.use_case.length > 500 ? '...' : ''}`);
  }
  if (input.service_start_mdy) {
    parts.push(`**Service Start:** ${input.service_start_mdy}`);
  }
  if (input.term_months) {
    parts.push(`**Term:** ${input.term_months} months`);
  }

  if (additionalContext) {
    parts.push('', additionalContext);
  }

  return parts.join('\n');
}
