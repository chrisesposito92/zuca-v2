import { beforeEach, describe, expect, it, vi } from 'vitest';
import { NextRequest } from 'next/server';

import { GET } from '@/app/api/revenue-snapshot/subscriptions/route';
import { getCurrentUser } from '@/lib/auth';
import { getActiveZuoraConnection, getZuoraConnectionById } from '@/lib/db';
import { decryptSecret } from '@/lib/crypto';
import { fetchZuoraAccessToken, getSubscriptionByKey, runDataQuery, runZoqlQuery } from '@/lib/zuora';

vi.mock('@/lib/auth', () => ({
  getCurrentUser: vi.fn(),
}));

vi.mock('@/lib/db', () => ({
  getActiveZuoraConnection: vi.fn(),
  getZuoraConnectionById: vi.fn(),
}));

vi.mock('@/lib/crypto', () => ({
  decryptSecret: vi.fn(),
}));

vi.mock('@/lib/zuora', () => ({
  fetchZuoraAccessToken: vi.fn(),
  getSubscriptionByKey: vi.fn(),
  runDataQuery: vi.fn(),
  runZoqlQuery: vi.fn(),
}));

const getCurrentUserMock = vi.mocked(getCurrentUser);
const getActiveZuoraConnectionMock = vi.mocked(getActiveZuoraConnection);
const getZuoraConnectionByIdMock = vi.mocked(getZuoraConnectionById);
const decryptSecretMock = vi.mocked(decryptSecret);
const fetchZuoraAccessTokenMock = vi.mocked(fetchZuoraAccessToken);
const runZoqlQueryMock = vi.mocked(runZoqlQuery);
const runDataQueryMock = vi.mocked(runDataQuery);
const getSubscriptionByKeyMock = vi.mocked(getSubscriptionByKey);

describe('GET /api/revenue-snapshot/subscriptions', () => {
  beforeEach(() => {
    getCurrentUserMock.mockReset();
    getActiveZuoraConnectionMock.mockReset();
    getZuoraConnectionByIdMock.mockReset();
    decryptSecretMock.mockReset();
    fetchZuoraAccessTokenMock.mockReset();
    runZoqlQueryMock.mockReset();
    runDataQueryMock.mockReset();
    getSubscriptionByKeyMock.mockReset();
  });

  it('rejects unauthenticated requests', async () => {
    getCurrentUserMock.mockResolvedValue(null);
    const request = new NextRequest('http://localhost/api/revenue-snapshot/subscriptions');
    const response = await GET(request);
    expect(response.status).toBe(401);
  });

  it('returns error when no connection configured', async () => {
    getCurrentUserMock.mockResolvedValue({ userId: 'user-1' } as any);
    getActiveZuoraConnectionMock.mockResolvedValue(null);

    const request = new NextRequest('http://localhost/api/revenue-snapshot/subscriptions');
    const response = await GET(request);
    const body = await response.json();

    expect(response.status).toBe(400);
    expect(body.error).toBe('No Zuora connection configured');
  });

  it('falls back to data query and dedupes by version', async () => {
    getCurrentUserMock.mockResolvedValue({ userId: 'user-1' } as any);
    getActiveZuoraConnectionMock.mockResolvedValue({
      base_url: 'https://rest.test.zuora.com',
      client_id: 'client',
      client_secret_encrypted: 'encrypted',
    } as any);
    decryptSecretMock.mockReturnValue('secret');
    fetchZuoraAccessTokenMock.mockResolvedValue({ access_token: 'token' } as any);
    runZoqlQueryMock.mockRejectedValue(new Error('ZOQL failed'));
    runDataQueryMock.mockResolvedValue([{ Name: 'A-S1' }, { Name: 'A-S2' }]);
    getSubscriptionByKeyMock
      .mockResolvedValueOnce({
        subscriptionNumber: 'A-S1',
        version: 1,
        ratePlans: [{ ratePlanCharges: [{ isAllocationEligible: true }] }],
      })
      .mockResolvedValueOnce({
        subscriptionNumber: 'A-S2',
        version: 1,
        ratePlans: [],
      });

    const request = new NextRequest('http://localhost/api/revenue-snapshot/subscriptions');
    const response = await GET(request);
    const body = await response.json();

    expect(response.status).toBe(200);
    expect(body.total).toBe(2);
    const sub1 = body.subscriptions.find((s: any) => s.subscription_number === 'A-S1');
    expect(sub1.has_allocation_eligible).toBe(true);
  });
});
