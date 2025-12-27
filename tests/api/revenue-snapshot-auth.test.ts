import { beforeEach, describe, expect, it, vi } from 'vitest';
import { NextRequest } from 'next/server';

import { DELETE, GET, PATCH, POST } from '@/app/api/revenue-snapshot/auth/route';
import { getCurrentUser } from '@/lib/auth';
import {
  deleteZuoraConnection,
  listZuoraConnections,
  setActiveZuoraConnection,
  upsertZuoraConnection,
} from '@/lib/db';
import { encryptSecret } from '@/lib/crypto';
import { fetchZuoraAccessToken } from '@/lib/zuora';

vi.mock('@/lib/auth', () => ({
  getCurrentUser: vi.fn(),
}));

vi.mock('@/lib/db', () => ({
  deleteZuoraConnection: vi.fn(),
  listZuoraConnections: vi.fn(),
  setActiveZuoraConnection: vi.fn(),
  upsertZuoraConnection: vi.fn(),
}));

vi.mock('@/lib/crypto', () => ({
  encryptSecret: vi.fn(),
}));

vi.mock('@/lib/zuora', () => ({
  fetchZuoraAccessToken: vi.fn(),
}));

const getCurrentUserMock = vi.mocked(getCurrentUser);
const listZuoraConnectionsMock = vi.mocked(listZuoraConnections);
const upsertZuoraConnectionMock = vi.mocked(upsertZuoraConnection);
const setActiveZuoraConnectionMock = vi.mocked(setActiveZuoraConnection);
const deleteZuoraConnectionMock = vi.mocked(deleteZuoraConnection);
const encryptSecretMock = vi.mocked(encryptSecret);
const fetchZuoraAccessTokenMock = vi.mocked(fetchZuoraAccessToken);

describe('Revenue snapshot auth routes', () => {
  beforeEach(() => {
    getCurrentUserMock.mockReset();
    listZuoraConnectionsMock.mockReset();
    upsertZuoraConnectionMock.mockReset();
    setActiveZuoraConnectionMock.mockReset();
    deleteZuoraConnectionMock.mockReset();
    encryptSecretMock.mockReset();
    fetchZuoraAccessTokenMock.mockReset();
  });

  it('rejects unauthenticated requests', async () => {
    getCurrentUserMock.mockResolvedValue(null);
    const response = await GET();
    expect(response.status).toBe(401);
  });

  it('lists connections and active connection', async () => {
    getCurrentUserMock.mockResolvedValue({ userId: 'user-1' } as any);
    listZuoraConnectionsMock.mockResolvedValue([
      {
        id: 'conn-1',
        tenant_name: 'Sandbox',
        base_url: 'https://rest.test.zuora.com',
        client_id: 'client',
        is_active: true,
        updated_at: new Date('2025-01-01'),
      },
    ] as any);

    const response = await GET();
    const body = await response.json();

    expect(response.status).toBe(200);
    expect(body.connected).toBe(true);
    expect(body.active_connection_id).toBe('conn-1');
    expect(body.connections).toHaveLength(1);
  });

  it('stores credentials after validating token', async () => {
    getCurrentUserMock.mockResolvedValue({ userId: 'user-1' } as any);
    fetchZuoraAccessTokenMock.mockResolvedValue({ access_token: 'token' } as any);
    encryptSecretMock.mockReturnValue('encrypted');
    upsertZuoraConnectionMock.mockResolvedValue({
      id: 'conn-1',
      tenant_name: 'Sandbox',
      base_url: 'https://rest.test.zuora.com',
      client_id: 'client',
      is_active: true,
      updated_at: new Date('2025-01-01'),
    } as any);

    const request = new NextRequest('http://localhost/api/revenue-snapshot/auth', {
      method: 'POST',
      body: JSON.stringify({
        tenant_name: 'Sandbox',
        base_url: 'https://rest.test.zuora.com',
        client_id: 'client',
        client_secret: 'secret',
      }),
      headers: { 'content-type': 'application/json' },
    });

    const response = await POST(request);
    const body = await response.json();

    expect(response.status).toBe(200);
    expect(body.connected).toBe(true);
    expect(encryptSecretMock).toHaveBeenCalledWith('secret');
    expect(upsertZuoraConnectionMock).toHaveBeenCalled();
  });

  it('sets active connection via PATCH', async () => {
    getCurrentUserMock.mockResolvedValue({ userId: 'user-1' } as any);
    setActiveZuoraConnectionMock.mockResolvedValue({ id: 'conn-2' } as any);

    const request = new NextRequest('http://localhost/api/revenue-snapshot/auth', {
      method: 'PATCH',
      body: JSON.stringify({ connection_id: 'conn-2' }),
      headers: { 'content-type': 'application/json' },
    });

    const response = await PATCH(request);
    const body = await response.json();

    expect(response.status).toBe(200);
    expect(body.active_connection_id).toBe('conn-2');
  });

  it('deletes a connection', async () => {
    getCurrentUserMock.mockResolvedValue({ userId: 'user-1' } as any);
    deleteZuoraConnectionMock.mockResolvedValue(true);

    const request = new NextRequest('http://localhost/api/revenue-snapshot/auth?connection_id=conn-1', {
      method: 'DELETE',
    });

    const response = await DELETE(request);
    const body = await response.json();

    expect(response.status).toBe(200);
    expect(body.success).toBe(true);
  });
});
