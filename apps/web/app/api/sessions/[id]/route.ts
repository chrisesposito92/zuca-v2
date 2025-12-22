/**
 * GET /api/sessions/[id]
 * DELETE /api/sessions/[id]
 *
 * Get or delete a specific session.
 */

import { NextRequest, NextResponse } from 'next/server';
import { getSession, deleteSession, getMessages } from '@/lib/db';

interface RouteParams {
  params: Promise<{ id: string }>;
}

export async function GET(_request: NextRequest, { params }: RouteParams) {
  try {
    const { id } = await params;
    const session = await getSession(id);

    if (!session) {
      return NextResponse.json(
        { error: 'Session not found' },
        { status: 404 }
      );
    }

    // Get conversation history
    const messages = await getMessages(id);

    return NextResponse.json({
      success: true,
      session: {
        id: session.id,
        session_type: session.session_type,
        status: session.status,
        current_step: session.current_step,
        error_message: session.error_message,
        created_at: session.created_at,
        updated_at: session.updated_at,
        llm_model: session.llm_model,
        input: session.input,
        result: session.result,
        conversation_history: messages.map((m) => ({
          role: m.role,
          content: m.content,
          created_at: m.created_at,
        })),
      },
    });
  } catch (error: unknown) {
    console.error('Get session error:', error);
    const message = error instanceof Error ? error.message : 'Internal server error';
    return NextResponse.json(
      { error: 'Internal server error', details: message },
      { status: 500 }
    );
  }
}

export async function DELETE(_request: NextRequest, { params }: RouteParams) {
  try {
    const { id } = await params;
    const deleted = await deleteSession(id);

    if (!deleted) {
      return NextResponse.json(
        { error: 'Session not found' },
        { status: 404 }
      );
    }

    return NextResponse.json({
      success: true,
      message: 'Session deleted',
    });
  } catch (error: unknown) {
    console.error('Delete session error:', error);
    const message = error instanceof Error ? error.message : 'Internal server error';
    return NextResponse.json(
      { error: 'Internal server error', details: message },
      { status: 500 }
    );
  }
}
