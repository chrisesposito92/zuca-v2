import { beforeEach, describe, expect, it, vi } from 'vitest';
import { NextRequest } from 'next/server';

import { POST } from '@/app/api/auth/login/route';
import { login } from '@/lib/auth';

vi.mock('@/lib/auth', () => ({
  login: vi.fn(),
}));

const loginMock = vi.mocked(login);

describe('POST /api/auth/login', () => {
  beforeEach(() => {
    loginMock.mockReset();
  });

  it('returns 400 when required fields are missing', async () => {
    const request = new NextRequest('http://localhost/api/auth/login', {
      method: 'POST',
      body: JSON.stringify({ email: '' }),
      headers: { 'content-type': 'application/json' },
    });

    const response = await POST(request);
    const body = await response.json();

    expect(response.status).toBe(400);
    expect(body.error).toBe('Email and password are required');
  });

  it('returns 401 when credentials are invalid', async () => {
    loginMock.mockResolvedValue({ success: false, error: 'Invalid credentials' });

    const request = new NextRequest('http://localhost/api/auth/login', {
      method: 'POST',
      body: JSON.stringify({ email: 'user@example.com', password: 'bad' }),
      headers: { 'content-type': 'application/json' },
    });

    const response = await POST(request);
    const body = await response.json();

    expect(response.status).toBe(401);
    expect(body.error).toBe('Invalid credentials');
  });

  it('returns user info on success', async () => {
    loginMock.mockResolvedValue({ success: true, userId: 'user-123' });

    const request = new NextRequest('http://localhost/api/auth/login', {
      method: 'POST',
      body: JSON.stringify({ email: 'user@example.com', password: 'good' }),
      headers: { 'content-type': 'application/json' },
    });

    const response = await POST(request);
    const body = await response.json();

    expect(response.status).toBe(200);
    expect(body).toEqual({ success: true, userId: 'user-123' });
  });
});
