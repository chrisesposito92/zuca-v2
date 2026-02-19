/**
 * POST /api/html-template
 *
 * Generate HTML template merge field code or Wp_Eval expressions.
 * Stores the session and result in the database.
 */

import { NextRequest, NextResponse } from 'next/server';
import {
  validateHTMLTemplateRequest,
  HTMLTemplateCodeOutput,
  HTMLTemplateExpressionOutput,
  HTMLTemplateOutput,
} from '@zuca/types/html-template';
import { LlmModelSchema, resolveModelId } from '@zuca/types';
import { generateTemplateCode } from '@zuca/pipeline/steps/html-template-code';
import { generateExpression } from '@zuca/pipeline/steps/html-template-expression';
import { getTemplateById } from '@zuca/pipeline/html-templates/quick-templates';
import { createSession, updateSessionResult, updateSessionStatus } from '@/lib/db';
import { getCurrentUser } from '@/lib/auth';

export async function POST(request: NextRequest) {
  try {
    // Get current user (optional)
    const user = await getCurrentUser();

    // Parse and validate input
    const body = await request.json();
    const model = body?.model ? resolveModelId(body.model as string) : undefined;
    const modelResult = model ? LlmModelSchema.safeParse(model) : null;

    if (modelResult && !modelResult.success) {
      return NextResponse.json(
        { error: 'Invalid model', details: `Model must be one of: ${LlmModelSchema.options.join(', ')}` },
        { status: 400 }
      );
    }

    let validatedInput;
    try {
      validatedInput = validateHTMLTemplateRequest(body);
    } catch (error: unknown) {
      const message = error instanceof Error ? error.message : 'Invalid input';
      return NextResponse.json({ error: 'Invalid input', details: message }, { status: 400 });
    }

    // If a template ID is provided, get the template prompt
    let description = validatedInput.description;
    if (validatedInput.templateId) {
      const template = getTemplateById(validatedInput.templateId);
      if (template) {
        description = template.prompt;
      }
    }

    // Create session in database
    const defaultModel = process.env.LLM_MODEL || process.env.OPENAI_MODEL || 'gpt-5.2';
    const selectedModel = modelResult?.data || defaultModel;

    const session = await createSession('html-builder', validatedInput, user?.userId, selectedModel);

    // Update status to running
    await updateSessionStatus(session.id, 'running', 0);

    try {
      let result: HTMLTemplateCodeOutput | HTMLTemplateExpressionOutput;
      let output: HTMLTemplateOutput;

      if (validatedInput.mode === 'code') {
        // Generate template code
        result = await generateTemplateCode(
          description,
          validatedInput.context?.documentType || 'invoice',
          validatedInput.context?.existingCode,
          'medium',
          modelResult?.data
        );
        output = { mode: 'code', result };
      } else {
        // Generate expression
        result = await generateExpression(description, undefined, 'medium', modelResult?.data);
        output = { mode: 'expression', result };
      }

      // Store the result
      await updateSessionResult(session.id, output);

      return NextResponse.json({
        success: true,
        session_id: session.id,
        mode: validatedInput.mode,
        result,
      });
    } catch (error: unknown) {
      console.error('HTML Template generation error:', error);
      const message = error instanceof Error ? error.message : 'Generation failed';
      const stack = error instanceof Error ? error.stack : undefined;
      await updateSessionStatus(session.id, 'failed', undefined, message);

      return NextResponse.json({ error: 'Generation failed', details: message, stack }, { status: 500 });
    }
  } catch (error: unknown) {
    console.error('HTML Template error:', error);
    const message = error instanceof Error ? error.message : 'Internal server error';
    const stack = error instanceof Error ? error.stack : undefined;
    return NextResponse.json({ error: 'Internal server error', details: message, stack }, { status: 500 });
  }
}
