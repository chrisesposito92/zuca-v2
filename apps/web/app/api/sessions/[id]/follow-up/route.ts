/**
 * POST /api/sessions/[id]/follow-up
 *
 * Handle a follow-up query in an existing session.
 * Loads context from database, calls LLM, and saves the response.
 */

import { NextRequest, NextResponse } from 'next/server';
import { getSession, addMessage, getMessages } from '@/lib/db';
import { processFollowUp, type FollowUpContext } from '@zuca/pipeline/follow-up';
import { LlmModelSchema } from '@zuca/types';
import type { ZucaInput, ZucaOutput } from '@zuca/types';

interface RouteParams {
  params: Promise<{ id: string }>;
}

export async function POST(request: NextRequest, { params }: RouteParams) {
  try {
    const { id } = await params;
    const body = await request.json();
    const { query, model } = body as { query?: string; model?: string };

    const modelResult = model ? LlmModelSchema.safeParse(model) : null;
    if (modelResult && !modelResult.success) {
      return NextResponse.json(
        { error: 'Invalid model', details: `Model must be one of: ${LlmModelSchema.options.join(', ')}` },
        { status: 400 }
      );
    }

    if (!query || typeof query !== 'string') {
      return NextResponse.json(
        { error: 'Missing query', details: 'Request body must include a "query" string' },
        { status: 400 }
      );
    }

    // 1. Load session from database
    const session = await getSession(id);
    if (!session) {
      return NextResponse.json(
        { error: 'Session not found' },
        { status: 404 }
      );
    }

    // Verify session has completed results
    if (!session.result) {
      return NextResponse.json(
        { error: 'Session not ready', details: 'Analysis must complete before follow-up queries' },
        { status: 400 }
      );
    }

    // 2. Load conversation history from database
    const messages = await getMessages(id);
    const conversationHistory = messages.map((msg) => ({
      role: msg.role as 'user' | 'assistant',
      content: msg.content,
    }));

    // 3. Add user message to database (before processing)
    await addMessage(id, 'user', query);

    // 4. Build context and call LLM
    const context: FollowUpContext = {
      input: session.input as ZucaInput,
      result: session.result as ZucaOutput,
      conversationHistory,
    };

    type LlmModel = 'gpt-5.2' | 'gemini-3.1-pro-preview' | 'gemini-3-flash-preview';
    const defaultModel: LlmModel = (process.env.LLM_MODEL || process.env.OPENAI_MODEL || 'gpt-5.2') as LlmModel;
    const selectedModel: LlmModel = modelResult?.data || (session.llm_model as LlmModel) || defaultModel;
    const response = await processFollowUp(query, context, selectedModel);

    // 5. Save assistant response to database
    await addMessage(id, 'assistant', response.content);

    // 6. Return response
    return NextResponse.json({
      success: true,
      type: response.type,
      data: response.content,
      suggestedEdits: response.suggestedEdits,
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
