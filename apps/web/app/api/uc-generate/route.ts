/**
 * POST /api/uc-generate
 *
 * Run the UC Generator pipeline to research a customer and generate use cases.
 * Stores the session and result in the database.
 */

import { NextRequest, NextResponse } from 'next/server';
import { validateUCGeneratorInput } from '@zuca/types/uc-generator';
import { runUCGenerator } from '@zuca/pipeline/uc-generator';
import { createSession, updateSessionResult, updateSessionStatus } from '@/lib/db';
import { getCurrentUser } from '@/lib/auth';

export async function POST(request: NextRequest) {
  try {
    // Get current user (optional)
    const user = await getCurrentUser();

    // Parse and validate input
    const input = await request.json();

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
    const session = await createSession('uc-generate', input, user?.userId);

    // Update status to running
    await updateSessionStatus(session.id, 'running', 0);

    try {
      // Check for local formatting option
      const useLocalFormatting = request.nextUrl.searchParams.get('local') === 'true';

      // Run the UC Generator pipeline
      const result = await runUCGenerator(input, { useLocalFormatting });

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
