/**
 * Zuora Billing Tenant Connection
 *
 * POST: store credentials (encrypted) for a named tenant
 * GET: fetch all saved connections (no secret)
 * PATCH: set active connection
 * DELETE: remove connection by id
 */

import { NextRequest, NextResponse } from 'next/server';
import { getCurrentUser } from '@/lib/auth';
import {
  upsertZuoraConnection,
  listZuoraConnections,
  setActiveZuoraConnection,
  deleteZuoraConnection,
} from '@/lib/db';
import { encryptSecret } from '@/lib/crypto';
import { fetchZuoraAccessToken } from '@/lib/zuora';

export async function GET() {
  try {
    const user = await getCurrentUser();
    if (!user?.userId) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const connections = await listZuoraConnections(user.userId);
    const active = connections.find((conn) => conn.is_active) ?? null;

    return NextResponse.json({
      connected: connections.length > 0,
      active_connection_id: active?.id ?? null,
      connections: connections.map((conn) => ({
        id: conn.id,
        tenant_name: conn.tenant_name,
        base_url: conn.base_url,
        client_id: conn.client_id,
        is_active: conn.is_active,
        updated_at: conn.updated_at,
      })),
    });
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : 'Internal server error';
    return NextResponse.json({ error: 'Internal server error', details: message }, { status: 500 });
  }
}

export async function POST(request: NextRequest) {
  try {
    const user = await getCurrentUser();
    if (!user?.userId) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const body = await request.json();
    const tenantName = (body?.tenant_name as string | undefined)?.trim();
    const baseUrl = (body?.base_url as string | undefined) || 'https://rest.test.zuora.com';
    const clientId = body?.client_id as string | undefined;
    const clientSecret = body?.client_secret as string | undefined;
    const setActive = body?.set_active !== false;

    if (!tenantName || !clientId || !clientSecret) {
      return NextResponse.json(
        { error: 'Missing tenant_name, client_id, or client_secret' },
        { status: 400 }
      );
    }

    // Validate credentials by requesting an access token
    await fetchZuoraAccessToken({ baseUrl, clientId, clientSecret });

    const encrypted = encryptSecret(clientSecret);
    const connection = await upsertZuoraConnection(
      user.userId,
      tenantName,
      baseUrl,
      clientId,
      encrypted,
      setActive
    );

    return NextResponse.json({
      connected: true,
      connection: {
        id: connection.id,
        tenant_name: connection.tenant_name,
        base_url: connection.base_url,
        client_id: connection.client_id,
        is_active: connection.is_active,
        updated_at: connection.updated_at,
      },
    });
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : 'Failed to save credentials';
    return NextResponse.json({ error: 'Failed to save credentials', details: message }, { status: 400 });
  }
}

export async function PATCH(request: NextRequest) {
  try {
    const user = await getCurrentUser();
    if (!user?.userId) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const body = await request.json();
    const connectionId = body?.connection_id as string | undefined;

    if (!connectionId) {
      return NextResponse.json({ error: 'Missing connection_id' }, { status: 400 });
    }

    const updated = await setActiveZuoraConnection(user.userId, connectionId);
    if (!updated) {
      return NextResponse.json({ error: 'Connection not found' }, { status: 404 });
    }

    return NextResponse.json({
      success: true,
      active_connection_id: updated.id,
    });
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : 'Failed to set active connection';
    return NextResponse.json({ error: 'Failed to set active connection', details: message }, { status: 500 });
  }
}

export async function DELETE(request: NextRequest) {
  try {
    const user = await getCurrentUser();
    if (!user?.userId) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const body = request.method === 'DELETE' ? await request.json().catch(() => ({})) : {};
    const connectionId =
      (body?.connection_id as string | undefined) || request.nextUrl.searchParams.get('connection_id') || undefined;

    if (!connectionId) {
      return NextResponse.json({ error: 'Missing connection_id' }, { status: 400 });
    }

    const deleted = await deleteZuoraConnection(user.userId, connectionId);
    if (!deleted) {
      return NextResponse.json({ error: 'Connection not found' }, { status: 404 });
    }

    return NextResponse.json({ success: true });
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : 'Failed to remove connection';
    return NextResponse.json({ error: 'Failed to remove connection', details: message }, { status: 500 });
  }
}
