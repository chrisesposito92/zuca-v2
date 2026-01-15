import { complete } from '../../llm/client';
import { loadPrompt } from '../../llm/prompts/index';
import { debugLog } from '../../config';
import { resolveModelId } from '../../types/llm';
import {
  type SelfEvaluation,
  type IterationAttempt,
  type IterationClarification,
  type RawSelfEvaluationOutput,
  selfEvaluationJsonSchema,
  transformSelfEvaluationOutput,
} from '../../types/ralph';
import { buildSelfEvalContext } from './context-builder';

// ============================================================================
// Self-Evaluation
// ============================================================================

/**
 * Evaluate a step's output using the same model
 * Returns a decision: done, iterate, or clarify
 */
export async function selfEvaluate<T>(
  stepName: string,
  output: T,
  originalInput: unknown,
  previousAttempts: IterationAttempt<T>[],
  clarifications: IterationClarification[],
  model?: string,
  currentIteration?: number,
  maxIterations?: number
): Promise<SelfEvaluation> {
  const startTime = Date.now();

  try {
    // Load the self-evaluation prompt
    const systemPrompt = await loadPrompt('ralph-self-eval');

    // Build the context for evaluation
    const userMessage = buildSelfEvalContext(
      stepName,
      output,
      originalInput,
      previousAttempts,
      clarifications
    );

    // Use the same model that ran the step
    const resolvedModel = resolveModelId(model || 'gpt-5.2');

    debugLog('Ralph self-evaluation starting', {
      stepName,
      model: resolvedModel,
      attemptNumber: (previousAttempts.length + 1),
      previousClarifications: clarifications.length,
    });

    // Make the LLM call
    const result = await complete<RawSelfEvaluationOutput>({
      systemPrompt,
      userMessage,
      responseSchema: selfEvaluationJsonSchema,
      model: resolvedModel,
      temperature: 0.3, // Lower temperature for more consistent evaluation
    });

    if (!result.structured) {
      throw new Error('Self-evaluation did not return structured output');
    }

    // Transform to our internal format
    const evaluation = transformSelfEvaluationOutput(result.structured);

    // Force "done" if at max iterations
    if (currentIteration !== undefined && maxIterations !== undefined) {
      if (currentIteration >= maxIterations && evaluation.decision === 'iterate') {
        debugLog('Ralph forcing done at max iterations', {
          stepName,
          currentIteration,
          maxIterations,
        });
        return {
          ...evaluation,
          decision: 'done',
          reasoning: `${evaluation.reasoning} (Forced done at max iterations - iteration ${currentIteration}/${maxIterations})`,
        };
      }
    }

    const durationMs = Date.now() - startTime;
    debugLog('Ralph self-evaluation complete', {
      stepName,
      decision: evaluation.decision,
      confidence: evaluation.confidence,
      durationMs,
    });

    return evaluation;
  } catch (error) {
    const durationMs = Date.now() - startTime;
    const message = error instanceof Error ? error.message : String(error);

    debugLog('Ralph self-evaluation failed', {
      stepName,
      error: message,
      durationMs,
    });

    // On error, default to "done" to avoid blocking the pipeline
    return {
      decision: 'done',
      confidence: 0.5,
      reasoning: `Self-evaluation failed: ${message}. Proceeding with current output.`,
    };
  }
}

/**
 * Validate that a self-evaluation has valid clarification data if needed
 */
export function validateClarificationData(evaluation: SelfEvaluation): boolean {
  if (evaluation.decision !== 'clarify') {
    return true;
  }

  if (!evaluation.clarificationQuestion || evaluation.clarificationQuestion.trim() === '') {
    return false;
  }

  if (
    !evaluation.clarificationOptions ||
    !Array.isArray(evaluation.clarificationOptions) ||
    evaluation.clarificationOptions.length < 2 ||
    evaluation.clarificationOptions.length > 4
  ) {
    return false;
  }

  return true;
}
