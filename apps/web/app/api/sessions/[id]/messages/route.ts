/**
 * DELETE /api/sessions/[id]/messages
 *
 * Clear all messages in a session's conversation history.
 */

import { NextRequest, NextResponse } from 'next/server';
import { getSession, clearMessages } from '@/lib/db';

interface RouteParams {
  params: Promise<{ id: string }>;
}

export async function DELETE(request: NextRequest, { params }: RouteParams) {
  try {
    const { id } = await params;

    // Verify session exists
    const session = await getSession(id);
    if (!session) {
      return NextResponse.json({ error: 'Session not found' }, { status: 404 });
    }

    // Clear all messages
    await clearMessages(id);

    return NextResponse.json({
      success: true,
      message: 'Conversation cleared',
      session_id: id,
    });
  } catch (error: unknown) {
    console.error('Clear messages error:', error);
    const message = error instanceof Error ? error.message : 'Internal server error';
    return NextResponse.json(
      { error: 'Internal server error', details: message },
      { status: 500 }
    );
  }
}
