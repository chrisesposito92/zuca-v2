/**
 * POST /api/html-template/validate
 *
 * Validate HTML template code for errors, warnings, and suggestions.
 * Uses hybrid approach: code-based parsing + LLM semantic validation.
 */

import { NextRequest, NextResponse } from 'next/server';
import {
  TemplateValidationRequestSchema,
  TemplateValidationOutput,
} from '@zuca/types/html-template';
import { LlmModelSchema } from '@zuca/types';
import { validateTemplate } from '@zuca/pipeline/steps/html-template-validator';
import { createSession, updateSessionResult, updateSessionStatus } from '@/lib/db';
import { getCurrentUser } from '@/lib/auth';

export async function POST(request: NextRequest) {
  try {
    // Get current user (optional)
    const user = await getCurrentUser();

    // Parse and validate input
    const body = await request.json();
    const model = body?.model as string | undefined;
    const modelResult = model ? LlmModelSchema.safeParse(model) : null;

    if (modelResult && !modelResult.success) {
      return NextResponse.json(
        {
          error: 'Invalid model',
          details: `Model must be one of: ${LlmModelSchema.options.join(', ')}`,
        },
        { status: 400 }
      );
    }

    // Validate request body
    const parseResult = TemplateValidationRequestSchema.safeParse(body);
    if (!parseResult.success) {
      const errors = parseResult.error.errors
        .map((e) => `${e.path.join('.')}: ${e.message}`)
        .join(', ');
      return NextResponse.json(
        { error: 'Invalid input', details: errors },
        { status: 400 }
      );
    }

    const validatedInput = parseResult.data;

    // Create session in database
    const defaultModel =
      process.env.LLM_MODEL || process.env.OPENAI_MODEL || 'gpt-5.2';
    const selectedModel = modelResult?.data || defaultModel;

    const session = await createSession(
      'html-builder',
      { mode: 'validate', ...validatedInput },
      user?.userId,
      selectedModel
    );

    // Update status to running
    await updateSessionStatus(session.id, 'running', 0);

    try {
      // Run validation
      const result: TemplateValidationOutput = await validateTemplate(
        validatedInput.template,
        validatedInput.documentType,
        'medium',
        modelResult?.data
      );

      // Store the result
      await updateSessionResult(session.id, { mode: 'validate', result });

      return NextResponse.json({
        success: true,
        session_id: session.id,
        result,
      });
    } catch (error: unknown) {
      console.error('HTML Template validation error:', error);
      const message =
        error instanceof Error ? error.message : 'Validation failed';
      const stack = error instanceof Error ? error.stack : undefined;
      await updateSessionStatus(session.id, 'failed', undefined, message);

      return NextResponse.json(
        { error: 'Validation failed', details: message, stack },
        { status: 500 }
      );
    }
  } catch (error: unknown) {
    console.error('HTML Template validate error:', error);
    const message =
      error instanceof Error ? error.message : 'Internal server error';
    const stack = error instanceof Error ? error.stack : undefined;
    return NextResponse.json(
      { error: 'Internal server error', details: message, stack },
      { status: 500 }
    );
  }
}
