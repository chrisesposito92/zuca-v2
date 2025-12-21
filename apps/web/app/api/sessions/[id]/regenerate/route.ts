/**
 * POST /api/sessions/[id]/regenerate
 *
 * Full regeneration of a session's pipeline output.
 * Used when the user wants to completely re-run the analysis with the same or updated input.
 */

import { NextRequest, NextResponse } from 'next/server';
import {
  getSession,
  updateSessionInput,
  updateSessionResult,
  updateSessionStatus,
  addMessage,
} from '@/lib/db';
import { runPipeline } from '@zuca/pipeline';
import { runUCGenerator } from '@zuca/pipeline/uc-generator';
import type { ZucaInput } from '@zuca/types';
import type { UCGeneratorInput } from '@zuca/types/uc-generator';

interface RouteParams {
  params: Promise<{ id: string }>;
}

export async function POST(request: NextRequest, { params }: RouteParams) {
  try {
    const { id } = await params;
    const body = await request.json().catch(() => ({}));

    // Optional: allow updating input fields before regeneration
    const inputUpdates = body.input_updates || {};

    // Get existing session
    const session = await getSession(id);
    if (!session) {
      return NextResponse.json({ error: 'Session not found' }, { status: 404 });
    }

    // Update session status
    await updateSessionStatus(id, 'running', 0);

    // Add regeneration message to conversation history
    await addMessage(id, 'user', '[Requested full regeneration]');

    try {
      if (session.session_type === 'analyze') {
        // Merge any input updates
        const updatedInput: ZucaInput = {
          ...(session.input as ZucaInput),
          ...inputUpdates,
        };

        // Persist updated input if there were changes
        if (Object.keys(inputUpdates).length > 0) {
          await updateSessionInput(id, updatedInput);
        }

        // Run full pipeline (no previousResult = fresh run)
        const result = await runPipeline(updatedInput, {
          sessionId: id,
        });

        // Persist result
        await updateSessionResult(id, result);

        // Add completion message
        await addMessage(id, 'assistant', 'Regeneration complete. All steps have been re-run.');

        return NextResponse.json({
          success: true,
          message: 'Full regeneration complete',
          session_id: id,
          result,
        });
      } else if (session.session_type === 'uc-generate') {
        // Merge any input updates
        const updatedInput: UCGeneratorInput = {
          ...(session.input as UCGeneratorInput),
          ...inputUpdates,
        };

        // Persist updated input if there were changes
        if (Object.keys(inputUpdates).length > 0) {
          await updateSessionInput(id, updatedInput);
        }

        // Run UC Generator pipeline
        const result = await runUCGenerator(updatedInput);

        // Persist result
        await updateSessionResult(id, result);

        // Add completion message
        await addMessage(id, 'assistant', 'Use case generation complete.');

        return NextResponse.json({
          success: true,
          message: 'UC Generator regeneration complete',
          session_id: id,
          result,
        });
      } else {
        return NextResponse.json(
          { error: 'Unknown session type', details: session.session_type },
          { status: 400 }
        );
      }
    } catch (pipelineError: unknown) {
      const message = pipelineError instanceof Error ? pipelineError.message : 'Pipeline failed';
      await updateSessionStatus(id, 'failed', undefined, message);
      await addMessage(id, 'assistant', `Regeneration failed: ${message}`);

      return NextResponse.json(
        { error: 'Regeneration failed', details: message },
        { status: 500 }
      );
    }
  } catch (error: unknown) {
    console.error('Regenerate session error:', error);
    const message = error instanceof Error ? error.message : 'Internal server error';
    return NextResponse.json(
      { error: 'Internal server error', details: message },
      { status: 500 }
    );
  }
}
