/**
 * POST /api/sessions/[id]/clarify
 *
 * Submit a clarification answer and resume the pipeline from where it paused.
 * This endpoint is called when the user answers a clarification question
 * that was shown during the analyze pipeline.
 */

import { NextRequest, NextResponse } from 'next/server';
import {
  getSession,
  updateSessionResult,
  updateSessionStatus,
  updateSessionClarificationState,
  clearSessionClarificationState,
} from '@/lib/db';
import {
  runPipeline,
  isPipelineClarificationPause,
  createClarificationState,
} from '@zuca/pipeline';
import type { ZucaInput, ZucaOutput } from '@zuca/types';
import type { ClarificationAnswer, ClarificationState } from '@zuca/types/clarification';
import type { LlmModel } from '@zuca/types/llm';

const USE_AGENTS = process.env.USE_AGENTS_PIPELINE === 'true';

async function getRunPipelineFn() {
  if (USE_AGENTS) {
    const { runAgentsPipeline } = await import('@zuca/pipeline-agents');
    return runAgentsPipeline;
  }
  return runPipeline;
}

interface RouteParams {
  params: Promise<{ id: string }>;
}

export async function POST(request: NextRequest, { params }: RouteParams) {
  try {
    const { id } = await params;
    const body = await request.json();

    const { answer } = body as { answer: ClarificationAnswer };

    // Validate answer
    if (!answer || typeof answer.questionId !== 'string') {
      return NextResponse.json(
        { error: 'Invalid answer', details: 'Request body must include an "answer" object with a questionId' },
        { status: 400 }
      );
    }

    // Load session
    const session = await getSession(id);
    if (!session) {
      return NextResponse.json({ error: 'Session not found' }, { status: 404 });
    }

    // Check session is awaiting clarification
    if (session.status !== 'awaiting_clarification') {
      return NextResponse.json(
        { error: 'Invalid session state', details: `Session is ${session.status}, expected awaiting_clarification` },
        { status: 400 }
      );
    }

    // Get the clarification state
    const clarificationState = session.clarification_state as ClarificationState | null;
    if (!clarificationState) {
      return NextResponse.json(
        { error: 'Invalid session state', details: 'Session has no clarification state' },
        { status: 400 }
      );
    }

    // Validate the answer matches the pending question
    if (!answer.questionId.startsWith(clarificationState.pausedAtStep + ':')) {
      return NextResponse.json(
        { error: 'Invalid answer', details: 'Answer questionId does not match pending question' },
        { status: 400 }
      );
    }

    // Add timestamp and option context to answer (preserve meaning beyond ID)
    const selectedOption = answer.selectedOptionId
      ? clarificationState.pendingQuestion.options.find((opt) => opt.id === answer.selectedOptionId)
      : undefined;
    const answeredAnswer: ClarificationAnswer = {
      ...answer,
      answeredAt: new Date().toISOString(),
      selectedOptionLabel: selectedOption?.label,
      selectedOptionDescription: selectedOption?.description,
    };

    // Update answers list (upsert by questionId to avoid duplicates)
    const existingAnswerIndex = clarificationState.answers.findIndex(
      (existing) => existing.questionId === answeredAnswer.questionId
    );
    const updatedAnswers =
      existingAnswerIndex === -1
        ? [...clarificationState.answers, answeredAnswer]
        : [
            ...clarificationState.answers.slice(0, existingAnswerIndex),
            answeredAnswer,
            ...clarificationState.answers.slice(existingAnswerIndex + 1),
          ];

    // Mark session as running
    await updateSessionStatus(id, 'running');

    // Resume pipeline with the answer
    const input = session.input as ZucaInput;
    const model = session.llm_model as LlmModel | undefined;

    try {
      const runFn = await getRunPipelineFn();
      const pipelineResult = await runFn(input, {
        sessionId: id,
        previousResult: clarificationState.partialResult as Partial<ZucaOutput>,
        model,
        interactiveMode: true, // Still in interactive mode
        clarificationAnswers: updatedAnswers,
      });

      // Check if we need another clarification (different step)
      if (isPipelineClarificationPause(pipelineResult)) {
        // Update clarification state with new question
        const newState = createClarificationState(pipelineResult, updatedAnswers);
        await updateSessionClarificationState(id, newState);

        return NextResponse.json({
          status: 'awaiting_clarification',
          session_id: id,
          question: pipelineResult.question,
          paused_at_step: pipelineResult.pausedAtStep,
        });
      }

      // Pipeline completed - save results
      await clearSessionClarificationState(id, 'completed');
      await updateSessionResult(id, pipelineResult as ZucaOutput);

      return NextResponse.json({
        status: 'completed',
        session_id: id,
        result: pipelineResult,
      });
    } catch (error) {
      console.error('Error processing clarification:', error);
      const message = error instanceof Error ? error.message : 'Unknown error';
      try {
        const restoredState: ClarificationState = {
          ...clarificationState,
          answers: updatedAnswers,
        };
        await updateSessionClarificationState(id, restoredState);
        await updateSessionStatus(id, 'awaiting_clarification', undefined, message);
      } catch (restoreError) {
        console.error('Error restoring clarification state:', restoreError);
      }
      return NextResponse.json(
        {
          error: 'Failed to process clarification',
          details: message,
        },
        { status: 500 }
      );
    }
  } catch (error) {
    console.error('Error processing clarification:', error);
    return NextResponse.json(
      {
        error: 'Failed to process clarification',
        details: error instanceof Error ? error.message : 'Unknown error',
      },
      { status: 500 }
    );
  }
}
