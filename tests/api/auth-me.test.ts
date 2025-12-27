import { beforeEach, describe, expect, it, vi } from 'vitest';

import { GET } from '@/app/api/auth/me/route';
import { getCurrentUser } from '@/lib/auth';

vi.mock('@/lib/auth', () => ({
  getCurrentUser: vi.fn(),
}));

const getCurrentUserMock = vi.mocked(getCurrentUser);

describe('GET /api/auth/me', () => {
  beforeEach(() => {
    getCurrentUserMock.mockReset();
  });

  it('returns null user when not authenticated', async () => {
    getCurrentUserMock.mockResolvedValue(null);

    const response = await GET();
    const body = await response.json();

    expect(response.status).toBe(200);
    expect(body).toEqual({ user: null });
  });

  it('returns user details when authenticated', async () => {
    getCurrentUserMock.mockResolvedValue({
      userId: 'user-1',
      email: 'user@example.com',
      provider: 'password',
    });

    const response = await GET();
    const body = await response.json();

    expect(response.status).toBe(200);
    expect(body.user).toEqual({
      userId: 'user-1',
      email: 'user@example.com',
      provider: 'password',
    });
  });
});
