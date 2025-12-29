/**
 * POST /api/html-template/groupby
 *
 * Generate GroupBy template code from wizard configuration.
 */

import { NextRequest, NextResponse } from 'next/server';
import {
  GroupByWizardRequestSchema,
  GroupByWizardOutput,
} from '@zuca/types/html-template';
import { LlmModelSchema } from '@zuca/types';
import { generateGroupByCode } from '@zuca/pipeline/steps/html-template-groupby';
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
    const parseResult = GroupByWizardRequestSchema.safeParse(body);
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
      { mode: 'groupby', ...validatedInput },
      user?.userId,
      selectedModel
    );

    // Update status to running
    await updateSessionStatus(session.id, 'running', 0);

    try {
      // Generate GroupBy code
      const result: GroupByWizardOutput = await generateGroupByCode(
        validatedInput,
        'medium',
        modelResult?.data
      );

      // Store the result
      await updateSessionResult(session.id, { mode: 'groupby', result });

      return NextResponse.json({
        success: true,
        session_id: session.id,
        mode: 'groupby',
        result,
      });
    } catch (error: unknown) {
      console.error('GroupBy generation error:', error);
      const message =
        error instanceof Error ? error.message : 'Generation failed';
      const stack = error instanceof Error ? error.stack : undefined;
      await updateSessionStatus(session.id, 'failed', undefined, message);

      return NextResponse.json(
        { error: 'Generation failed', details: message, stack },
        { status: 500 }
      );
    }
  } catch (error: unknown) {
    console.error('GroupBy API error:', error);
    const message =
      error instanceof Error ? error.message : 'Internal server error';
    const stack = error instanceof Error ? error.stack : undefined;
    return NextResponse.json(
      { error: 'Internal server error', details: message, stack },
      { status: 500 }
    );
  }
}
