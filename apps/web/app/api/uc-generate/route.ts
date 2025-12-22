/**
 * POST /api/uc-generate
 *
 * Run the UC Generator pipeline to research a customer and generate use cases.
 * Stores the session and result in the database.
 */

import { NextRequest, NextResponse } from 'next/server';
import { validateUCGeneratorInput } from '@zuca/types/uc-generator';
import { LlmModelSchema } from '@zuca/types';
import { runUCGenerator } from '@zuca/pipeline/uc-generator';
import { createSession, updateSessionResult, updateSessionStatus } from '@/lib/db';
import { getCurrentUser } from '@/lib/auth';

export async function POST(request: NextRequest) {
  try {
    // Get current user (optional)
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

    try {
      validateUCGeneratorInput(input);
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

    const session = await createSession('uc-generate', input, user?.userId, selectedModel);

    // Update status to running
    await updateSessionStatus(session.id, 'running', 0);

    try {
      // Check for local formatting option
      const useLocalFormatting = request.nextUrl.searchParams.get('local') === 'true';

      // Run the UC Generator pipeline
      const result = await runUCGenerator(input, { useLocalFormatting, model: modelResult?.data });

      // Store the result
      await updateSessionResult(session.id, result);

      return NextResponse.json({
        success: true,
        session_id: session.id,
        research: result.research,
        generated: result.generated,
        formatted: result.formatted,
        use_cases: result.use_cases,
      });
    } catch (error: unknown) {
      const message = error instanceof Error ? error.message : 'UC generation failed';
      await updateSessionStatus(session.id, 'failed', undefined, message);

      return NextResponse.json(
        { error: 'Use case generation failed', details: message },
        { status: 500 }
      );
    }
  } catch (error: unknown) {
    console.error('UC Generate error:', error);
    const message = error instanceof Error ? error.message : 'Internal server error';
    return NextResponse.json(
      { error: 'Internal server error', details: message },
      { status: 500 }
    );
  }
}
