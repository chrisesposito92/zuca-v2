/**
 * POST /api/sessions/[id]/follow-up
 *
 * Handle a follow-up query in an existing session.
 * For now, this stores the message and returns a placeholder response.
 * Full AI-powered follow-up can be implemented later.
 */

import { NextRequest, NextResponse } from 'next/server';
import { getSession, addMessage } from '@/lib/db';

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

    // For now, provide a simple acknowledgment response
    // TODO: Implement proper AI-powered follow-up using session context
    const assistantResponse = `Thank you for your question. The follow-up feature is being enhanced. Your question has been recorded: "${query.slice(0, 100)}${query.length > 100 ? '...' : ''}"

For now, please use the **Edit Field** or **Regenerate** buttons above to make changes to the analysis. Full conversational AI follow-up will be available soon.`;

    await addMessage(id, 'assistant', assistantResponse);

    return NextResponse.json({
      success: true,
      type: 'clarification',
      data: assistantResponse,
    });
  } catch (error: unknown) {
    console.error('Follow-up error:', error);
    const message = error instanceof Error ? error.message : 'Internal server error';
    return NextResponse.json(
      { error: 'Internal server error', details: message },
      { status: 500 }
    );
  }
}
