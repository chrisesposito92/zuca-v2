import { debugLog } from '../../config';
import {
  type StepIterationState,
  type IterationAttempt,
  type IterationClarification,
  type WithRalphOptions,
  type WithRalphResult,
  type SelfEvaluation,
  createInitialIterationState,
  isIterationComplete,
  getBestOutput,
} from '../../types/ralph';
import {
  type StepClarificationRequest,
  type ClarificationQuestion,
  type ClarificationAnswer,
  isClarificationRequest,
} from '../../types/clarification';
import { getRalphStepConfig, isStepRalphEnabled } from './config';
import { selfEvaluate, validateClarificationData } from './evaluator';
import { buildIterationContext } from './context-builder';

// ============================================================================
// Helper Functions
// ============================================================================

/**
 * Create a clarification question from self-evaluation data
 */
function createClarificationFromEval(
  stepName: string,
  evaluation: SelfEvaluation
): ClarificationQuestion {
  return {
    questionId: `ralph:${stepName}:${Date.now()}`,
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

/**
 * Apply an answer to a pending clarification
 */
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

// ============================================================================
// Main Wrapper
// ============================================================================

/**
 * Wrap a pipeline step with Ralph self-improvement iteration
 *
 * This wrapper:
 * 1. Executes the step
 * 2. Self-evaluates the output
 * 3. Based on decision:
 *    - "done": Returns the output
 *    - "iterate": Re-runs the step with feedback
 *    - "clarify": Pauses for user input
 * 4. Tracks all attempts and clarifications
 */
export async function withRalph<T>(options: WithRalphOptions<T>): Promise<WithRalphResult<T>> {
  const {
    stepName,
    originalInput,
    stepFn,
    previousState,
    clarificationAnswer,
    model,
    interactiveMode = false,
  } = options;

  // Check if Ralph is enabled for this step
  if (!isStepRalphEnabled(stepName)) {
    // Ralph disabled - just run the step directly
    const output = await stepFn('');

    // Handle step clarification request (pass through)
    if (isClarificationRequest(output)) {
      return {
        output: undefined as unknown as T,
        state: createInitialIterationState(stepName, 1),
        clarificationRequest: {
          question: output.question,
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

  debugLog('Ralph iteration starting', {
    stepName,
    iteration: state.currentIteration,
    maxIterations: state.maxIterations,
    previousAttempts: state.attempts.length,
    previousClarifications: state.clarifications.length,
  });

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

    // Execute the step
    let stepOutput: T | StepClarificationRequest;
    try {
      stepOutput = await stepFn(iterationContext);
    } catch (error) {
      const message = error instanceof Error ? error.message : String(error);
      debugLog('Ralph step execution failed', { stepName, error: message });

      // If we have a previous output, use it
      const bestOutput = getBestOutput(state);
      if (bestOutput !== undefined) {
        state = {
          ...state,
          status: 'completed',
          finalOutput: bestOutput,
        };
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
    if (isClarificationRequest(stepOutput)) {
      if (interactiveMode && config.allowClarifications) {
        // Add to clarifications and pause
        const clarification: IterationClarification = {
          iterationNumber: state.currentIteration,
          question: stepOutput.question,
          source: 'step',
        };

        state = {
          ...state,
          clarifications: [...state.clarifications, clarification],
          status: 'awaiting_clarification',
        };

        return {
          output: undefined as unknown as T,
          state,
          clarificationRequest: {
            question: stepOutput.question,
            source: 'step',
          },
          completed: false,
          iterationsUsed: state.attempts.length,
        };
      } else {
        // Skip clarification - re-run with "use best judgment"
        debugLog('Ralph skipping step clarification (non-interactive)', { stepName });
        continue;
      }
    }

    // Self-evaluate the output
    const evaluation = await selfEvaluate(
      stepName,
      stepOutput,
      originalInput,
      state.attempts,
      state.clarifications,
      model,
      state.currentIteration,
      state.maxIterations
    );

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

    debugLog('Ralph iteration complete', {
      stepName,
      iteration: state.currentIteration,
      decision: evaluation.decision,
      confidence: evaluation.confidence,
      durationMs: iterationDurationMs,
    });

    // Handle evaluation decision
    switch (evaluation.decision) {
      case 'done': {
        state = {
          ...state,
          status: 'completed',
          finalOutput: stepOutput,
        };
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
            output: stepOutput, // Return current output (may be partial)
            state,
            clarificationRequest: {
              question,
              source: 'self_eval',
            },
            completed: false,
            iterationsUsed: state.attempts.length,
          };
        }

        // Can't clarify - treat as done
        debugLog('Ralph cannot clarify (non-interactive or invalid data), treating as done', {
          stepName,
        });
        state = {
          ...state,
          status: 'completed',
          finalOutput: stepOutput,
        };
        return {
          output: stepOutput,
          state,
          completed: true,
          iterationsUsed: state.attempts.length,
        };
      }

      case 'iterate': {
        // Continue to next iteration
        state = {
          ...state,
          currentIteration: state.currentIteration + 1,
        };
        continue;
      }
    }
  }

  // Max iterations reached
  debugLog('Ralph max iterations reached', {
    stepName,
    maxIterations: state.maxIterations,
    attempts: state.attempts.length,
  });

  const bestOutput = getBestOutput(state);
  if (bestOutput === undefined) {
    throw new Error(`Ralph: No output available after ${state.maxIterations} iterations`);
  }

  state = {
    ...state,
    status: 'max_reached',
    finalOutput: bestOutput,
  };

  return {
    output: bestOutput,
    state,
    completed: true,
    iterationsUsed: state.attempts.length,
  };
}
