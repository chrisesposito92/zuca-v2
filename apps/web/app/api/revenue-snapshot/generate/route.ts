/**
 * POST /api/revenue-snapshot/generate
 *
 * Generate a Zuora Billing → Revenue snapshot preview.
 */

import { NextRequest, NextResponse } from 'next/server';
import { RevenueSnapshotInputSchema } from '@zuca/types/revenue-snapshot';
import { runRevenueSnapshotPipeline } from '@zuca/pipeline';
import { createSession, updateSessionResult, updateSessionStatus } from '@/lib/db';
import { getCurrentUser } from '@/lib/auth';
import { getActiveZuoraConnection, getZuoraConnectionById } from '@/lib/db';
import { decryptSecret } from '@/lib/crypto';
import { fetchZuoraAccessToken, fetchOtrSnapshotData, fetchNonOtrSnapshotData } from '@/lib/zuora';
import { LlmModelSchema, resolveModelId } from '@zuca/types';

export async function POST(request: NextRequest) {
  try {
    const user = await getCurrentUser();
    if (!user?.userId) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const body = await request.json();
    const input = (body?.input ?? body) as unknown;
    const connectionId = body?.connection_id as string | undefined;
    const model = body?.model ? resolveModelId(body.model as string) : undefined;
    const modelResult = model ? LlmModelSchema.safeParse(model) : null;

    if (modelResult && !modelResult.success) {
      return NextResponse.json(
        { error: 'Invalid model', details: `Model must be one of: ${LlmModelSchema.options.join(', ')}` },
        { status: 400 }
      );
    }

    const validation = RevenueSnapshotInputSchema.safeParse(input);
    if (!validation.success) {
      return NextResponse.json(
        { error: 'Invalid input', details: validation.error.message },
        { status: 400 }
      );
    }

    const connection = connectionId
      ? await getZuoraConnectionById(user.userId, connectionId)
      : await getActiveZuoraConnection(user.userId);
    if (!connection) {
      return NextResponse.json({ error: 'No Zuora connection configured' }, { status: 400 });
    }

    const clientSecret = decryptSecret(connection.client_secret_encrypted);
    const token = await fetchZuoraAccessToken({
      baseUrl: connection.base_url,
      clientId: connection.client_id,
      clientSecret,
    });

    let source;
    try {
      source = await fetchOtrSnapshotData(connection.base_url, token, validation.data.subscription_numbers);
    } catch (error) {
      console.warn('OTR Data Query failed; falling back to non-OTR snapshot.', error);
      source = await fetchNonOtrSnapshotData(connection.base_url, token, validation.data.subscription_numbers);
    }

    const defaultModel = process.env.LLM_MODEL || process.env.OPENAI_MODEL || 'gpt-5.2';
    const selectedModel = modelResult?.data || defaultModel;

    const session = await createSession('revenue-snapshot', validation.data, user.userId, selectedModel);
    await updateSessionStatus(session.id, 'running', 0);

    try {
      const result = await runRevenueSnapshotPipeline(validation.data, source, { model: modelResult?.data });
      await updateSessionResult(session.id, result);

      return NextResponse.json({
        success: true,
        session_id: session.id,
        result,
      });
    } catch (error: unknown) {
      console.error('Revenue snapshot pipeline failed:', error);
      const message = error instanceof Error ? error.message : 'Snapshot pipeline failed';
      await updateSessionStatus(session.id, 'failed', undefined, message);
      return NextResponse.json(
        { error: 'Snapshot failed', details: message },
        { status: 500 }
      );
    }
  } catch (error: unknown) {
    console.error('Revenue snapshot generate error:', error);
    const message = error instanceof Error ? error.message : 'Internal server error';
    return NextResponse.json({ error: 'Internal server error', details: message }, { status: 500 });
  }
}
