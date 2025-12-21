/**
 * POST /api/sessions/[id]/follow-up
 *
 * Handle a follow-up query in an existing session.
 */

import { NextRequest, NextResponse } from 'next/server';
import { getSession, addMessage } from '@/lib/db';
import { handleFollowUp } from '@zuca/pipeline';

interface RouteParams {
  params: Promise<{ id: string }>;
}

export async function POST(request: NextRequest, { params }: RouteParams) {
  try {
    const { id } = await params;
    const body = await request.json();
    const { query } = body;

    if (!query || typeof query !== 'string') {
      return NextResponse.json(
        { error: 'Missing query', details: 'Request body must include a "query" string' },
        { status: 400 }
      );
    }

    // Verify session exists
    const session = await getSession(id);
    if (!session) {
      return NextResponse.json(
        { error: 'Session not found' },
        { status: 404 }
      );
    }

    // Add user message to conversation
    await addMessage(id, 'user', query);

    try {
      // Handle the follow-up using the pipeline
      const response = await handleFollowUp(id, query);

      // Add assistant response to conversation
      const responseContent = typeof response.data === 'string'
        ? response.data
        : JSON.stringify(response.data);
      await addMessage(id, 'assistant', responseContent);

      return NextResponse.json({
        success: true,
        type: response.type,
        data: response.data,
      });
    } catch (error: unknown) {
      const message = error instanceof Error ? error.message : 'Follow-up failed';

      if (message.includes('Session not found')) {
        return NextResponse.json(
          { error: 'Session not found', details: message },
          { status: 404 }
        );
      }

      return NextResponse.json(
        { error: 'Follow-up failed', details: message },
        { status: 500 }
      );
    }
  } catch (error: unknown) {
    console.error('Follow-up error:', error);
    const message = error instanceof Error ? error.message : 'Internal server error';
    return NextResponse.json(
      { error: 'Internal server error', details: message },
      { status: 500 }
    );
  }
}
