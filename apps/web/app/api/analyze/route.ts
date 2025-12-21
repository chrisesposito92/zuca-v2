/**
 * POST /api/analyze
 *
 * Run the main ZUCA pipeline to analyze a use case.
 * Stores the session and result in the database.
 */

import { NextRequest, NextResponse } from 'next/server';
import { validateZucaInput } from '@zuca/types';
import { runPipeline } from '@zuca/pipeline';
import { createSession, updateSessionResult, updateSessionStatus, addMessage } from '@/lib/db';
import { getCurrentUser } from '@/lib/auth';

export async function POST(request: NextRequest) {
  try {
    // Get current user (optional - sessions can be anonymous)
    const user = await getCurrentUser();

    // Parse and validate input
    const input = await request.json();

    try {
      validateZucaInput(input);
    } catch (error: unknown) {
      const message = error instanceof Error ? error.message : 'Invalid input';
      return NextResponse.json(
        { error: 'Invalid input', details: message },
        { status: 400 }
      );
    }

    // Create session in database
    const session = await createSession('analyze', input, user?.userId);

    // Update status to running
    await updateSessionStatus(session.id, 'running', 0);

    try {
      // Run the pipeline
      const result = await runPipeline(input);

      // Store the result
      await updateSessionResult(session.id, result);

      return NextResponse.json({
        success: true,
        session_id: session.id,
        result,
      });
    } catch (error: unknown) {
      const message = error instanceof Error ? error.message : 'Pipeline failed';
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
