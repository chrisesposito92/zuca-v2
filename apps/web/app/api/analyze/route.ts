/**
 * POST /api/analyze
 *
 * Run the main ZUCA pipeline to analyze a use case.
 * Stores the session and result in the database.
 */

import { NextRequest, NextResponse } from 'next/server';
import { validateZucaInput, LlmModelSchema } from '@zuca/types';
import { runPipeline } from '@zuca/pipeline';
import { createSession, updateSessionResult, updateSessionStatus, addMessage } from '@/lib/db';
import { getCurrentUser } from '@/lib/auth';

export async function POST(request: NextRequest) {
  try {
    // Get current user (optional - sessions can be anonymous)
    const user = await getCurrentUser();

    // Parse and validate input
    const body = await request.json();
    const input = (body?.input ?? body) as unknown;
    const model = body?.model as string | undefined;
    const modelResult = model ? LlmModelSchema.safeParse(model) : null;

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
      // Run the pipeline
      const result = await runPipeline(validatedInput, { model: modelResult?.data });

      // Store the result
      await updateSessionResult(session.id, result);

      return NextResponse.json({
        success: true,
        session_id: session.id,
        result,
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
