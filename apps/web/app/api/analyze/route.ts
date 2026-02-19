/**
 * POST /api/analyze
 *
 * Run the main ZUCA pipeline to analyze a use case.
 * Stores the session and result in the database.
 *
 * In interactive mode, the pipeline may pause to request clarification
 * from the user. In this case, the response will have status 'awaiting_clarification'
 * and the client should show the question to the user.
 */

import { NextRequest, NextResponse } from 'next/server';
import { validateZucaInput, LlmModelSchema, isOpenAIModel, resolveModelId } from '@zuca/types';
import {
  runPipeline,
  isPipelineClarificationPause,
  createClarificationState,
} from '@zuca/pipeline';
import {
  createSession,
  updateSessionResult,
  updateSessionStatus,
  updateSessionClarificationState,
  shouldSkipClarifications,
} from '@/lib/db';
import { getCurrentUser } from '@/lib/auth';

const USE_AGENTS = process.env.USE_AGENTS_PIPELINE === 'true';

async function getRunPipelineFn(model?: string) {
  if (USE_AGENTS && (!model || isOpenAIModel(model))) {
    const { runAgentsPipeline } = await import('@zuca/pipeline-agents');
    return runAgentsPipeline;
  }
  return runPipeline;
}

export async function POST(request: NextRequest) {
  try {
    // Get current user (optional - sessions can be anonymous)
    const user = await getCurrentUser();

    // Parse and validate input
    const body = await request.json();
    const input = (body?.input ?? body) as unknown;
    const model = body?.model ? resolveModelId(body.model as string) : undefined;
    const modelResult = model ? LlmModelSchema.safeParse(model) : null;
    const clientSkipClarifications = body?.skipClarifications as boolean | undefined;

    if (modelResult && !modelResult.success) {
      return NextResponse.json(
        { error: 'Invalid model', details: `Model must be one of: ${LlmModelSchema.options.join(', ')}` },
        { status: 400 }
      );
    }

    let validatedInput;
    try {
      validatedInput = validateZucaInput(input);
    } catch (error: unknown) {
      const message = error instanceof Error ? error.message : 'Invalid input';
      return NextResponse.json(
        { error: 'Invalid input', details: message },
        { status: 400 }
      );
    }

    // Create session in database
    const defaultModel = process.env.LLM_MODEL || process.env.OPENAI_MODEL || 'gpt-5.2';
    const selectedModel = modelResult?.data || defaultModel;

    const session = await createSession('analyze', validatedInput, user?.userId, selectedModel);

    // Update status to running
    await updateSessionStatus(session.id, 'running', 0);

    try {
      // Check if clarifications should be skipped:
      // 1. Client can explicitly pass skipClarifications
      // 2. Otherwise, check user preference in database (if logged in)
      const skipClarifications = clientSkipClarifications !== undefined
        ? clientSkipClarifications
        : user?.userId
          ? await shouldSkipClarifications(user.userId)
          : false;

      // Run the pipeline with interactive mode enabled (web UI)
      const runFn = await getRunPipelineFn(modelResult?.data);
      const pipelineResult = await runFn(validatedInput, {
        sessionId: session.id,
        model: modelResult?.data,
        interactiveMode: true, // Web UI is interactive
        skipAllClarifications: skipClarifications,
      });

      // Check if pipeline is pausing for clarification
      if (isPipelineClarificationPause(pipelineResult)) {
        // Save clarification state to database
        const clarificationState = createClarificationState(pipelineResult);
        await updateSessionClarificationState(session.id, clarificationState);

        return NextResponse.json({
          status: 'awaiting_clarification',
          session_id: session.id,
          question: pipelineResult.question,
          paused_at_step: pipelineResult.pausedAtStep,
        });
      }

      // Pipeline completed - store the result
      await updateSessionResult(session.id, pipelineResult);

      return NextResponse.json({
        success: true,
        status: 'completed',
        session_id: session.id,
        result: pipelineResult,
      });
    } catch (error: unknown) {
      console.error('Pipeline error:', error);
      const message = error instanceof Error ? error.message : 'Pipeline failed';
      const stack = error instanceof Error ? error.stack : undefined;
      console.error('Pipeline error details:', { message, stack });
      await updateSessionStatus(session.id, 'failed', undefined, message);

      return NextResponse.json(
        { error: 'Analysis failed', details: message },
        { status: 500 }
      );
    }
  } catch (error: unknown) {
    console.error('Analyze error:', error);
    const message = error instanceof Error ? error.message : 'Internal server error';
    return NextResponse.json(
      { error: 'Internal server error', details: message },
      { status: 500 }
    );
  }
}
