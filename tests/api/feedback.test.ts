import { beforeEach, describe, expect, it, vi } from 'vitest';
import { NextRequest } from 'next/server';

import { POST, GET } from '@/app/api/feedback/route';
import { getCurrentUser } from '@/lib/auth';
import { createFeedback, getFeedbackStats } from '@/lib/db';

// Mock auth
vi.mock('@/lib/auth', () => ({
  getCurrentUser: vi.fn(),
}));

// Mock db
vi.mock('@/lib/db', () => ({
  createFeedback: vi.fn(),
  getFeedbackStats: vi.fn(),
}));

const getCurrentUserMock = vi.mocked(getCurrentUser);
const createFeedbackMock = vi.mocked(createFeedback);
const getFeedbackStatsMock = vi.mocked(getFeedbackStats);

describe('POST /api/feedback', () => {
  beforeEach(() => {
    getCurrentUserMock.mockReset();
    createFeedbackMock.mockReset();
  });

  it('returns 400 when session_id is missing', async () => {
    getCurrentUserMock.mockResolvedValue(null);

    const request = new NextRequest('http://localhost/api/feedback', {
      method: 'POST',
      body: JSON.stringify({ target_type: 'summary', rating: 'positive' }),
      headers: { 'content-type': 'application/json' },
    });

    const response = await POST(request);
    const body = await response.json();

    expect(response.status).toBe(400);
    expect(body.error).toBe('Missing session_id');
  });

  it('returns 400 when target_type is invalid', async () => {
    getCurrentUserMock.mockResolvedValue(null);

    const request = new NextRequest('http://localhost/api/feedback', {
      method: 'POST',
      body: JSON.stringify({
        session_id: 'session-123',
        target_type: 'invalid_type',
        rating: 'positive',
      }),
      headers: { 'content-type': 'application/json' },
    });

    const response = await POST(request);
    const body = await response.json();

    expect(response.status).toBe(400);
    expect(body.error).toBe('Invalid target_type');
    expect(body.valid).toEqual(['session', 'summary', 'contracts', 'billings', 'revrec']);
  });

  it('returns 400 when rating is invalid', async () => {
    getCurrentUserMock.mockResolvedValue(null);

    const request = new NextRequest('http://localhost/api/feedback', {
      method: 'POST',
      body: JSON.stringify({
        session_id: 'session-123',
        target_type: 'summary',
        rating: 'neutral',
      }),
      headers: { 'content-type': 'application/json' },
    });

    const response = await POST(request);
    const body = await response.json();

    expect(response.status).toBe(400);
    expect(body.error).toBe('Invalid rating');
    expect(body.valid).toEqual(['positive', 'negative']);
  });

  it('creates feedback with positive rating', async () => {
    getCurrentUserMock.mockResolvedValue({
      userId: 'user-123',
      email: 'test@example.com',
      provider: 'email',
    });

    const mockFeedback = {
      id: 'feedback-1',
      session_id: 'session-123',
      target_type: 'summary' as const,
      rating: 'positive' as const,
      user_id: 'user-123',
      comment: null,
      created_at: '2024-01-01T00:00:00Z',
    };
    createFeedbackMock.mockResolvedValue(mockFeedback);

    const request = new NextRequest('http://localhost/api/feedback', {
      method: 'POST',
      body: JSON.stringify({
        session_id: 'session-123',
        target_type: 'summary',
        rating: 'positive',
      }),
      headers: { 'content-type': 'application/json' },
    });

    const response = await POST(request);
    const body = await response.json();

    expect(response.status).toBe(200);
    expect(body.success).toBe(true);
    expect(body.feedback.id).toBe('feedback-1');
    expect(body.feedback.target_type).toBe('summary');
    expect(body.feedback.rating).toBe('positive');

    expect(createFeedbackMock).toHaveBeenCalledWith(
      'session-123',
      'summary',
      'positive',
      'user-123',
      undefined
    );
  });

  it('creates feedback with negative rating and comment', async () => {
    getCurrentUserMock.mockResolvedValue({
      userId: 'user-123',
      email: 'test@example.com',
      provider: 'email',
    });

    const mockFeedback = {
      id: 'feedback-2',
      session_id: 'session-123',
      target_type: 'contracts' as const,
      rating: 'negative' as const,
      user_id: 'user-123',
      comment: 'The data was incorrect',
      created_at: '2024-01-01T00:00:00Z',
    };
    createFeedbackMock.mockResolvedValue(mockFeedback);

    const request = new NextRequest('http://localhost/api/feedback', {
      method: 'POST',
      body: JSON.stringify({
        session_id: 'session-123',
        target_type: 'contracts',
        rating: 'negative',
        comment: 'The data was incorrect',
      }),
      headers: { 'content-type': 'application/json' },
    });

    const response = await POST(request);
    const body = await response.json();

    expect(response.status).toBe(200);
    expect(body.success).toBe(true);
    expect(body.feedback.rating).toBe('negative');

    expect(createFeedbackMock).toHaveBeenCalledWith(
      'session-123',
      'contracts',
      'negative',
      'user-123',
      'The data was incorrect'
    );
  });

  it('works for all valid target types', async () => {
    getCurrentUserMock.mockResolvedValue(null);

    const targetTypes = ['session', 'summary', 'contracts', 'billings', 'revrec'];

    for (const targetType of targetTypes) {
      createFeedbackMock.mockResolvedValue({
        id: `feedback-${targetType}`,
        session_id: 'session-123',
        target_type: targetType as 'session' | 'summary' | 'contracts' | 'billings' | 'revrec',
        rating: 'positive' as const,
        user_id: null,
        comment: null,
        created_at: '2024-01-01T00:00:00Z',
      });

      const request = new NextRequest('http://localhost/api/feedback', {
        method: 'POST',
        body: JSON.stringify({
          session_id: 'session-123',
          target_type: targetType,
          rating: 'positive',
        }),
        headers: { 'content-type': 'application/json' },
      });

      const response = await POST(request);
      expect(response.status).toBe(200);
    }
  });

  it('handles database errors', async () => {
    getCurrentUserMock.mockResolvedValue(null);
    createFeedbackMock.mockRejectedValue(new Error('Database connection failed'));

    const request = new NextRequest('http://localhost/api/feedback', {
      method: 'POST',
      body: JSON.stringify({
        session_id: 'session-123',
        target_type: 'summary',
        rating: 'positive',
      }),
      headers: { 'content-type': 'application/json' },
    });

    const response = await POST(request);
    const body = await response.json();

    expect(response.status).toBe(500);
    expect(body.error).toBe('Internal server error');
    expect(body.details).toBe('Database connection failed');
  });
});

describe('GET /api/feedback', () => {
  beforeEach(() => {
    getFeedbackStatsMock.mockReset();
  });

  it('returns feedback stats', async () => {
    const mockStats = {
      total: 100,
      positive: 80,
      negative: 20,
      byTarget: {
        session: { positive: 20, negative: 5 },
        summary: { positive: 30, negative: 10 },
        contracts: { positive: 15, negative: 3 },
        billings: { positive: 10, negative: 1 },
        revrec: { positive: 5, negative: 1 },
      },
    };
    getFeedbackStatsMock.mockResolvedValue(mockStats);

    const response = await GET();
    const body = await response.json();

    expect(response.status).toBe(200);
    expect(body.success).toBe(true);
    expect(body.stats.total).toBe(100);
    expect(body.stats.positive).toBe(80);
    expect(body.stats.negative).toBe(20);
  });

  it('handles database errors', async () => {
    getFeedbackStatsMock.mockRejectedValue(new Error('Database error'));

    const response = await GET();
    const body = await response.json();

    expect(response.status).toBe(500);
    expect(body.error).toBe('Internal server error');
  });
});
