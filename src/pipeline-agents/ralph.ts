/**
 * Ralph Wrapper for OpenAI Agent SDK
 *
 * Adapts the withRalph() self-improvement pattern to work with Agent SDK run() calls.
 * Reuses all existing Ralph infrastructure: context building, config, types.
 */

import { run, type Agent } from '@openai/agents';
import { debugLog } from '../config';
import {
  type StepIterationState,
  type IterationAttempt,
  type IterationClarification,
  type WithRalphResult,
  type SelfEvaluation,
  createInitialIterationState,
  isIterationComplete,
  getBestOutput,
} from '../types/ralph';
import {
  type ClarificationQuestion,
  type ClarificationAnswer,
} from '../types/clarification';
import { getRalphStepConfig, isStepRalphEnabled } from '../pipeline/ralph/config';
import { buildIterationContext, buildSelfEvalContext } from '../pipeline/ralph/context-builder';
import { validateClarificationData } from '../pipeline/ralph/evaluator';
import { createSelfEvalAgent } from './agents/self-eval';
import type { PipelineContext } from './context';
import type { SelfEvalOutput } from './schemas/self-eval';

// ============================================================================
// Types
// ============================================================================

export interface WithRalphAgentOptions<T> {
  stepName: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  agent: Agent<PipelineContext, any>;
  /** Builds the user message for the step agent, given iteration context */
  buildUserMessage: (iterationContext: string) => string;
  pipelineContext: PipelineContext;
  previousState?: StepIterationState<T>;
  clarificationAnswer?: ClarificationAnswer;
}

// ============================================================================
// Helper Functions
// ============================================================================

function createClarificationFromEval(
  stepName: string,
  evaluation: SelfEvaluation
): ClarificationQuestion {
  return {
    questionId: `${stepName}:ralph:${Date.now()}`,
    stepName,
    question: evaluation.clarificationQuestion!,
    context: evaluation.clarificationContext,
    options: evaluation.clarificationOptions!.map((opt) => ({
      id: opt.id,
      label: opt.label,
      description: opt.description,
    })),
    allowSkip: true,
    allowFreeText: true,
    priority: evaluation.clarificationPriority || 'important',
  };
}

function applyClarificationAnswer(
  clarifications: IterationClarification[],
  answer: ClarificationAnswer
): IterationClarification[] {
  return clarifications.map((c) => {
    if (!c.answer && c.question.questionId === answer.questionId) {
      return { ...c, answer };
    }
    return c;
  });
}

/**
 * Check if an agent output has clarification fields set
 */
function isClarificationOutput(output: unknown): output is {
  needs_clarification: boolean;
  clarification_question: string | null;
  clarification_options: Array<{ id: string; label: string; description?: string }> | null;
  clarification_priority: string | null;
  clarification_context: string | null;
} {
  if (!output || typeof output !== 'object') return false;
  const o = output as Record<string, unknown>;
  return o.needs_clarification === true &&
    typeof o.clarification_question === 'string' &&
    Array.isArray(o.clarification_options);
}

/**
 * Transform SelfEvalOutput (from Zod schema) to internal SelfEvaluation type.
 * The Zod schema uses nullable fields; our internal type uses optional.
 */
function transformSelfEvalOutput(raw: SelfEvalOutput): SelfEvaluation {
  return {
    decision: raw.decision,
    confidence: raw.confidence,
    reasoning: raw.reasoning,
    iterationFeedback: raw.iterationFeedback ?? undefined,
    specificIssues: raw.specificIssues?.map((issue) => ({
      field: issue.field,
      issue: issue.issue,
      suggestion: issue.suggestion,
    })),
    clarificationQuestion: raw.clarificationQuestion ?? undefined,
    clarificationContext: raw.clarificationContext ?? undefined,
    clarificationOptions: raw.clarificationOptions?.map((opt) => ({
      id: opt.id,
      label: opt.label,
      description: opt.description,
    })),
    clarificationPriority: raw.clarificationPriority ?? undefined,
  };
}

// ============================================================================
// Main Wrapper
// ============================================================================

/**
 * Wrap a pipeline step agent with Ralph self-improvement iteration.
 *
 * Same logic as src/pipeline/ralph/wrapper.ts, but uses Agent SDK run() calls
 * instead of direct complete() calls.
 */
export async function withRalphAgent<T>(options: WithRalphAgentOptions<T>): Promise<WithRalphResult<T>> {
  const {
    stepName,
    agent,
    buildUserMessage,
    pipelineContext,
    previousState,
    clarificationAnswer,
  } = options;

  const interactiveMode = pipelineContext.interactiveMode && !pipelineContext.skipAllClarifications;

  // Check if Ralph is enabled for this step
  if (!isStepRalphEnabled(stepName)) {
    // Ralph disabled — just run the agent directly
    const userMessage = buildUserMessage('');
    const result = await run(agent, userMessage, { context: pipelineContext });
    const output = result.finalOutput as T;

    // Check for clarification request in output
    if (isClarificationOutput(output)) {
      return {
        output: undefined as unknown as T,
        state: createInitialIterationState(stepName, 1),
        clarificationRequest: {
          question: {
            questionId: `${stepName}:${Date.now()}`,
            stepName,
            question: (output as any).clarification_question,
            context: (output as any).clarification_context,
            options: (output as any).clarification_options,
            allowSkip: true,
            allowFreeText: true,
            priority: (output as any).clarification_priority || 'important',
          },
          source: 'step',
        },
        completed: false,
        iterationsUsed: 0,
      };
    }

    return {
      output,
      state: {
        stepName,
        currentIteration: 1,
        maxIterations: 1,
        attempts: [],
        clarifications: [],
        status: 'completed',
        finalOutput: output,
      },
      completed: true,
      iterationsUsed: 1,
    };
  }

  const config = getRalphStepConfig(stepName);

  // Initialize or restore state
  let state: StepIterationState<T> = previousState || createInitialIterationState(stepName, config.maxIterations);

  // Handle incoming clarification answer
  if (clarificationAnswer) {
    state = {
      ...state,
      clarifications: applyClarificationAnswer(state.clarifications, clarificationAnswer),
    };
  }

  // Check if already completed
  if (isIterationComplete(state) && state.finalOutput !== undefined) {
    return {
      output: state.finalOutput,
      state,
      completed: true,
      iterationsUsed: state.attempts.length,
    };
  }

  debugLog('Ralph agent iteration starting', {
    stepName,
    iteration: state.currentIteration,
    maxIterations: state.maxIterations,
    previousAttempts: state.attempts.length,
  });

  // Create self-eval agent (reused across iterations)
  const selfEvalAgent = createSelfEvalAgent(pipelineContext.model);

  // Main iteration loop
  while (state.currentIteration <= state.maxIterations) {
    const iterationStartTime = Date.now();

    // Build context from previous iterations
    const lastAttempt = state.attempts[state.attempts.length - 1];
    const iterationFeedback = lastAttempt?.selfEvaluation.iterationFeedback;

    const iterationContext = buildIterationContext(
      state.attempts,
      state.clarifications,
      iterationFeedback
    );

    // Execute the step agent
    let stepOutput: T;
    try {
      const userMessage = buildUserMessage(iterationContext);
      const result = await run(agent, userMessage, { context: pipelineContext });
      stepOutput = result.finalOutput as T;
    } catch (error) {
      const message = error instanceof Error ? error.message : String(error);
      debugLog('Ralph agent step execution failed', { stepName, error: message });

      const bestOutput = getBestOutput(state);
      if (bestOutput !== undefined) {
        state = { ...state, status: 'completed', finalOutput: bestOutput };
        return {
          output: bestOutput,
          state,
          completed: true,
          iterationsUsed: state.attempts.length,
        };
      }
      throw error;
    }

    // Handle step-generated clarification request
    if (isClarificationOutput(stepOutput)) {
      if (interactiveMode && config.allowClarifications) {
        const question: ClarificationQuestion = {
          questionId: `${stepName}:${Date.now()}`,
          stepName,
          question: (stepOutput as any).clarification_question,
          context: (stepOutput as any).clarification_context,
          options: (stepOutput as any).clarification_options,
          allowSkip: true,
          allowFreeText: true,
          priority: (stepOutput as any).clarification_priority || 'important',
        };

        const clarification: IterationClarification = {
          iterationNumber: state.currentIteration,
          question,
          source: 'step',
        };

        state = {
          ...state,
          currentIteration: state.currentIteration + 1,
          clarifications: [...state.clarifications, clarification],
          status: 'awaiting_clarification',
        };

        return {
          output: undefined as unknown as T,
          state,
          clarificationRequest: { question, source: 'step' },
          completed: false,
          iterationsUsed: state.attempts.length,
        };
      } else {
        debugLog('Ralph skipping step clarification (non-interactive)', { stepName });
        state = {
          ...state,
          currentIteration: state.currentIteration + 1,
          attempts: [
            ...state.attempts,
            {
              attemptNumber: state.currentIteration,
              output: undefined as unknown as T,
              selfEvaluation: {
                decision: 'iterate' as const,
                confidence: 0,
                reasoning: 'Skipped: clarification requested but non-interactive mode',
              },
              timestamp: new Date().toISOString(),
              durationMs: Date.now() - iterationStartTime,
            },
          ],
        };
        continue;
      }
    }

    // Self-evaluate using the self-eval agent
    let evaluation: SelfEvaluation;
    try {
      const evalMessage = buildSelfEvalContext(
        stepName,
        stepOutput,
        pipelineContext.input,
        state.attempts,
        state.clarifications
      );

      const evalResult = await run(selfEvalAgent, evalMessage, { context: pipelineContext });
      const rawEval = evalResult.finalOutput as SelfEvalOutput;
      evaluation = transformSelfEvalOutput(rawEval);

      // Force "done" if at max iterations
      if (state.currentIteration >= state.maxIterations && evaluation.decision === 'iterate') {
        debugLog('Ralph forcing done at max iterations', { stepName });
        evaluation = {
          ...evaluation,
          decision: 'done',
          reasoning: `${evaluation.reasoning} (Forced done at max iterations)`,
        };
      }
    } catch (error) {
      const message = error instanceof Error ? error.message : String(error);
      debugLog('Ralph self-eval failed, treating as done', { stepName, error: message });
      evaluation = {
        decision: 'done',
        confidence: 0.5,
        reasoning: `Self-evaluation failed: ${message}. Proceeding with current output.`,
      };
    }

    const iterationDurationMs = Date.now() - iterationStartTime;

    // Record this attempt
    const attempt: IterationAttempt<T> = {
      attemptNumber: state.currentIteration,
      output: stepOutput,
      selfEvaluation: evaluation,
      timestamp: new Date().toISOString(),
      durationMs: iterationDurationMs,
    };

    state = {
      ...state,
      attempts: [...state.attempts, attempt],
    };

    debugLog('Ralph agent iteration complete', {
      stepName,
      iteration: state.currentIteration,
      decision: evaluation.decision,
      confidence: evaluation.confidence,
    });

    // Handle evaluation decision
    switch (evaluation.decision) {
      case 'done': {
        state = { ...state, status: 'completed', finalOutput: stepOutput };
        return {
          output: stepOutput,
          state,
          completed: true,
          iterationsUsed: state.attempts.length,
        };
      }

      case 'clarify': {
        if (interactiveMode && config.allowClarifications && validateClarificationData(evaluation)) {
          const question = createClarificationFromEval(stepName, evaluation);
          const clarification: IterationClarification = {
            iterationNumber: state.currentIteration,
            question,
            source: 'self_eval',
          };

          state = {
            ...state,
            clarifications: [...state.clarifications, clarification],
            status: 'awaiting_clarification',
          };

          return {
            output: stepOutput,
            state,
            clarificationRequest: { question, source: 'self_eval' },
            completed: false,
            iterationsUsed: state.attempts.length,
          };
        }

        // Can't clarify — treat as done
        debugLog('Ralph cannot clarify (non-interactive), treating as done', { stepName });
        state = { ...state, status: 'completed', finalOutput: stepOutput };
        return {
          output: stepOutput,
          state,
          completed: true,
          iterationsUsed: state.attempts.length,
        };
      }

      case 'iterate': {
        state = { ...state, currentIteration: state.currentIteration + 1 };
        continue;
      }
    }
  }

  // Max iterations reached
  debugLog('Ralph agent max iterations reached', { stepName, maxIterations: state.maxIterations });

  const bestOutput = getBestOutput(state);
  if (bestOutput === undefined) {
    throw new Error(`Ralph: No output available after ${state.maxIterations} iterations`);
  }

  state = { ...state, status: 'max_reached', finalOutput: bestOutput };
  return {
    output: bestOutput,
    state,
    completed: true,
    iterationsUsed: state.attempts.length,
  };
}
