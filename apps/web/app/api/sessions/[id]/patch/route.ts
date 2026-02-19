/**
 * POST /api/sessions/[id]/patch
 *
 * Apply a targeted patch to the session output and run incremental updates
 * on affected downstream steps. This is for small, surgical changes to the
 * output without regenerating everything.
 */

import { NextRequest, NextResponse } from 'next/server';
import { getSession, updateSessionResult, addMessage } from '@/lib/db';
import { applyPatch, getValueAtPath } from '@zuca/pipeline/patch';
import type { ZucaInput, ZucaOutput } from '@zuca/types';

interface RouteParams {
  params: Promise<{ id: string }>;
}

interface PatchRequestBody {
  /** JSON path to the field to update */
  path: string;
  /** New value */
  value: unknown;
  /** Optional description of what the user is trying to do */
  description?: string;
}

export async function POST(request: NextRequest, { params }: RouteParams) {
  try {
    const { id } = await params;
    const body: PatchRequestBody = await request.json();

    const { path, value, description } = body;

    // Validate request
    if (!path || typeof path !== 'string') {
      return NextResponse.json(
        { error: 'Missing path', details: 'Request body must include a "path" string' },
        { status: 400 }
      );
    }

    if (value === undefined) {
      return NextResponse.json(
        { error: 'Missing value', details: 'Request body must include a "value"' },
        { status: 400 }
      );
    }

    // Get existing session
    const session = await getSession(id);
    if (!session) {
      return NextResponse.json({ error: 'Session not found' }, { status: 404 });
    }

    // Only support analyze sessions
    if (session.session_type !== 'analyze') {
      return NextResponse.json(
        { error: 'Patch not supported for this session type' },
        { status: 400 }
      );
    }

    const currentInput = session.input as ZucaInput;
    const currentResult = session.result as ZucaOutput | null;

    if (!currentResult) {
      return NextResponse.json(
        { error: 'No result to patch', details: 'Session must have a completed result' },
        { status: 400 }
      );
    }

    // Get current value to check if change is needed
    const currentValue = getValueAtPath(currentResult, path);

    // Check if value actually changed
    if (JSON.stringify(currentValue) === JSON.stringify(value)) {
      return NextResponse.json({
        success: true,
        message: 'No change detected',
        session_id: id,
        result: currentResult,
      });
    }

    // Log the change in conversation
    const changeDescription = description || `Changed ${path} from ${JSON.stringify(currentValue)} to ${JSON.stringify(value)}`;
    await addMessage(id, 'user', `[Applied change: ${changeDescription}]`);

    // Apply the patch
    type LlmModel = 'gpt-5.2' | 'gemini-3.1-pro-preview' | 'gemini-3-flash-preview';
    const defaultModel: LlmModel = (process.env.LLM_MODEL || process.env.OPENAI_MODEL || 'gpt-5.2') as LlmModel;
    const selectedModel: LlmModel = (session.llm_model as LlmModel) || defaultModel;

    const patchResult = await applyPatch(
      currentInput,
      currentResult,
      {
        path,
        value,
        previousValue: currentValue,
      },
      selectedModel
    );

    if (!patchResult.success) {
      await addMessage(id, 'assistant', 'Failed to apply change. Please try regenerating.');
      return NextResponse.json(
        { error: 'Patch failed', details: 'Could not apply the change' },
        { status: 500 }
      );
    }

    // Persist updated result
    await updateSessionResult(id, patchResult.updatedResult);

    // Add completion message
    const changesDescription = patchResult.changes
      .map((c) => `- ${c.step}: ${c.description}`)
      .join('\n');
    await addMessage(
      id,
      'assistant',
      `Applied change and updated ${patchResult.affectedSteps.length} downstream step(s):\n${changesDescription}`
    );

    return NextResponse.json({
      success: true,
      message: `Patched ${path} and updated ${patchResult.affectedSteps.length} affected steps`,
      session_id: id,
      affected_steps: patchResult.affectedSteps,
      changes: patchResult.changes,
      result: patchResult.updatedResult,
    });
  } catch (error: unknown) {
    console.error('Patch session error:', error);
    const message = error instanceof Error ? error.message : 'Internal server error';
    return NextResponse.json(
      { error: 'Internal server error', details: message },
      { status: 500 }
    );
  }
}
