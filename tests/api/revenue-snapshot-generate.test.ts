import { beforeEach, describe, expect, it, vi } from 'vitest';
import { NextRequest } from 'next/server';

import { POST } from '@/app/api/revenue-snapshot/generate/route';
import { getCurrentUser } from '@/lib/auth';
import { createSession, getActiveZuoraConnection, getZuoraConnectionById, updateSessionResult, updateSessionStatus } from '@/lib/db';
import { decryptSecret } from '@/lib/crypto';
import { fetchNonOtrSnapshotData, fetchOtrSnapshotData, fetchZuoraAccessToken } from '@/lib/zuora';
import { runRevenueSnapshotPipeline } from '@zuca/pipeline';

vi.mock('@/lib/auth', () => ({
  getCurrentUser: vi.fn(),
}));

vi.mock('@/lib/db', () => ({
  createSession: vi.fn(),
  getActiveZuoraConnection: vi.fn(),
  getZuoraConnectionById: vi.fn(),
  updateSessionResult: vi.fn(),
  updateSessionStatus: vi.fn(),
}));

vi.mock('@/lib/crypto', () => ({
  decryptSecret: vi.fn(),
}));

vi.mock('@/lib/zuora', () => ({
  fetchNonOtrSnapshotData: vi.fn(),
  fetchOtrSnapshotData: vi.fn(),
  fetchZuoraAccessToken: vi.fn(),
}));

vi.mock('@zuca/pipeline', () => ({
  runRevenueSnapshotPipeline: vi.fn(),
}));

const getCurrentUserMock = vi.mocked(getCurrentUser);
const getActiveZuoraConnectionMock = vi.mocked(getActiveZuoraConnection);
const getZuoraConnectionByIdMock = vi.mocked(getZuoraConnectionById);
const createSessionMock = vi.mocked(createSession);
const updateSessionStatusMock = vi.mocked(updateSessionStatus);
const updateSessionResultMock = vi.mocked(updateSessionResult);
const decryptSecretMock = vi.mocked(decryptSecret);
const fetchZuoraAccessTokenMock = vi.mocked(fetchZuoraAccessToken);
const fetchOtrSnapshotDataMock = vi.mocked(fetchOtrSnapshotData);
const fetchNonOtrSnapshotDataMock = vi.mocked(fetchNonOtrSnapshotData);
const runRevenueSnapshotPipelineMock = vi.mocked(runRevenueSnapshotPipeline);

describe('POST /api/revenue-snapshot/generate', () => {
  beforeEach(() => {
    getCurrentUserMock.mockReset();
    getActiveZuoraConnectionMock.mockReset();
    getZuoraConnectionByIdMock.mockReset();
    createSessionMock.mockReset();
    updateSessionStatusMock.mockReset();
    updateSessionResultMock.mockReset();
    decryptSecretMock.mockReset();
    fetchZuoraAccessTokenMock.mockReset();
    fetchOtrSnapshotDataMock.mockReset();
    fetchNonOtrSnapshotDataMock.mockReset();
    runRevenueSnapshotPipelineMock.mockReset();
  });

  it('rejects unauthenticated users', async () => {
    getCurrentUserMock.mockResolvedValue(null);
    const request = new NextRequest('http://localhost/api/revenue-snapshot/generate', {
      method: 'POST',
      body: JSON.stringify({ input: { subscription_numbers: ['A-S1'] } }),
      headers: { 'content-type': 'application/json' },
    });

    const response = await POST(request);
    expect(response.status).toBe(401);
  });

  it('rejects invalid model selections', async () => {
    getCurrentUserMock.mockResolvedValue({ userId: 'user-1' } as any);
    const request = new NextRequest('http://localhost/api/revenue-snapshot/generate', {
      method: 'POST',
      body: JSON.stringify({ model: 'bad-model', input: { subscription_numbers: ['A-S1'] } }),
      headers: { 'content-type': 'application/json' },
    });

    const response = await POST(request);
    expect(response.status).toBe(400);
  });

  it('validates input payload', async () => {
    getCurrentUserMock.mockResolvedValue({ userId: 'user-1' } as any);
    const request = new NextRequest('http://localhost/api/revenue-snapshot/generate', {
      method: 'POST',
      body: JSON.stringify({ input: {} }),
      headers: { 'content-type': 'application/json' },
    });

    const response = await POST(request);
    const body = await response.json();

    expect(response.status).toBe(400);
    expect(body.error).toBe('Invalid input');
  });

  it('requires a configured connection', async () => {
    getCurrentUserMock.mockResolvedValue({ userId: 'user-1' } as any);
    getActiveZuoraConnectionMock.mockResolvedValue(null);

    const request = new NextRequest('http://localhost/api/revenue-snapshot/generate', {
      method: 'POST',
      body: JSON.stringify({ input: { subscription_numbers: ['A-S1'] } }),
      headers: { 'content-type': 'application/json' },
    });

    const response = await POST(request);
    const body = await response.json();

    expect(response.status).toBe(400);
    expect(body.error).toBe('No Zuora connection configured');
  });

  it('falls back to non-OTR data when OTR fails', async () => {
    getCurrentUserMock.mockResolvedValue({ userId: 'user-1' } as any);
    getActiveZuoraConnectionMock.mockResolvedValue({
      base_url: 'https://rest.test.zuora.com',
      client_id: 'client',
      client_secret_encrypted: 'encrypted',
    } as any);
    decryptSecretMock.mockReturnValue('secret');
    fetchZuoraAccessTokenMock.mockResolvedValue({ access_token: 'token' } as any);
    fetchOtrSnapshotDataMock.mockRejectedValue(new Error('OTR failed'));
    fetchNonOtrSnapshotDataMock.mockResolvedValue({ source: 'fallback' } as any);
    createSessionMock.mockResolvedValue({
      id: 'session-1',
      session_type: 'revenue-snapshot',
      input: {},
      result: null,
      status: 'pending',
      created_at: new Date(),
      updated_at: new Date(),
      current_step: 0,
      error_message: null,
      user_id: 'user-1',
      llm_model: 'gpt-5.2',
    } as any);
    runRevenueSnapshotPipelineMock.mockResolvedValue({ summary: { output: 'ok' } } as any);

    const request = new NextRequest('http://localhost/api/revenue-snapshot/generate', {
      method: 'POST',
      body: JSON.stringify({ input: { subscription_numbers: ['A-S1'] } }),
      headers: { 'content-type': 'application/json' },
    });

    const response = await POST(request);
    const body = await response.json();

    expect(response.status).toBe(200);
    expect(body.success).toBe(true);
    expect(fetchNonOtrSnapshotDataMock).toHaveBeenCalled();
    expect(updateSessionResultMock).toHaveBeenCalled();
  });
});
