import { beforeEach, describe, expect, it, vi } from 'vitest';
import { NextRequest } from 'next/server';

import { GET } from '@/app/api/sessions/route';
import { getCurrentUser } from '@/lib/auth';
import { listSessions, getSessionCount, fixStuckRunningSessions } from '@/lib/db';

vi.mock('@/lib/auth', () => ({
  getCurrentUser: vi.fn(),
}));

vi.mock('@/lib/db', () => ({
  listSessions: vi.fn(),
  getSessionCount: vi.fn(),
  fixStuckRunningSessions: vi.fn(),
}));

const getCurrentUserMock = vi.mocked(getCurrentUser);
const listSessionsMock = vi.mocked(listSessions);
const getSessionCountMock = vi.mocked(getSessionCount);
const fixStuckRunningSessionsMock = vi.mocked(fixStuckRunningSessions);

describe('GET /api/sessions', () => {
  beforeEach(() => {
    getCurrentUserMock.mockReset();
    listSessionsMock.mockReset();
    getSessionCountMock.mockReset();
    fixStuckRunningSessionsMock.mockReset();

    // Default mock implementations
    getSessionCountMock.mockResolvedValue(0);
    fixStuckRunningSessionsMock.mockResolvedValue(0);
  });

  it('formats revenue snapshot session names with subscription numbers', async () => {
    getCurrentUserMock.mockResolvedValue({ userId: 'user-1' });
    listSessionsMock.mockResolvedValue([
      {
        id: 'session-1',
        session_type: 'revenue-snapshot',
        input: { subscription_numbers: ['A-001', 'A-002', 'A-003', 'A-004'] },
        result: null,
        status: 'completed',
        created_at: new Date('2025-01-01'),
        updated_at: new Date('2025-01-02'),
        llm_model: 'gpt-5.2',
        current_step: 0,
        error_message: null,
        user_id: 'user-1',
      },
      {
        id: 'session-2',
        session_type: 'analyze',
        input: { customer_name: 'Acme Corp' },
        result: null,
        status: 'completed',
        created_at: new Date('2025-01-03'),
        updated_at: new Date('2025-01-04'),
        llm_model: 'gpt-5.2',
        current_step: 0,
        error_message: null,
        user_id: 'user-1',
      },
    ]);

    const request = new NextRequest('http://localhost/api/sessions?limit=2&offset=10');
    const response = await GET(request);
    const body = await response.json();

    expect(response.status).toBe(200);
    expect(body.sessions[0].customer_name).toBe('A-001, A-002, A-003 (+1 more)');
    expect(body.sessions[1].customer_name).toBe('Acme Corp');
    expect(body.pagination).toEqual({ limit: 2, offset: 10, count: 2, total: 0 });
  });
});
