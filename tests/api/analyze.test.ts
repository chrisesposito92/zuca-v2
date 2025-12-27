import { beforeEach, describe, expect, it, vi } from 'vitest';
import { NextRequest } from 'next/server';

import { POST } from '@/app/api/analyze/route';
import { getCurrentUser } from '@/lib/auth';
import { createSession, updateSessionResult, updateSessionStatus } from '@/lib/db';
import { runPipeline } from '@zuca/pipeline';

vi.mock('@/lib/auth', () => ({
  getCurrentUser: vi.fn(),
}));

vi.mock('@/lib/db', () => ({
  createSession: vi.fn(),
  updateSessionResult: vi.fn(),
  updateSessionStatus: vi.fn(),
}));

vi.mock('@zuca/pipeline', () => ({
  runPipeline: vi.fn(),
}));

const getCurrentUserMock = vi.mocked(getCurrentUser);
const createSessionMock = vi.mocked(createSession);
const updateSessionStatusMock = vi.mocked(updateSessionStatus);
const updateSessionResultMock = vi.mocked(updateSessionResult);
const runPipelineMock = vi.mocked(runPipeline);

describe('POST /api/analyze', () => {
  beforeEach(() => {
    getCurrentUserMock.mockReset();
    createSessionMock.mockReset();
    updateSessionStatusMock.mockReset();
    updateSessionResultMock.mockReset();
    runPipelineMock.mockReset();
  });

  it('rejects invalid model selections', async () => {
    const request = new NextRequest('http://localhost/api/analyze', {
      method: 'POST',
      body: JSON.stringify({ model: 'bad-model' }),
      headers: { 'content-type': 'application/json' },
    });

    const response = await POST(request);
    const body = await response.json();

    expect(response.status).toBe(400);
    expect(body.error).toBe('Invalid model');
  });

  it('validates input payloads', async () => {
    const request = new NextRequest('http://localhost/api/analyze', {
      method: 'POST',
      body: JSON.stringify({ input: { customer_name: 'Acme' } }),
      headers: { 'content-type': 'application/json' },
    });

    const response = await POST(request);
    const body = await response.json();

    expect(response.status).toBe(400);
    expect(body.error).toBe('Invalid input');
  });

  it('creates a session and stores results on success', async () => {
    getCurrentUserMock.mockResolvedValue({ userId: 'user-1' } as any);
    createSessionMock.mockResolvedValue({
      id: 'session-1',
      session_type: 'analyze',
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
    runPipelineMock.mockResolvedValue({ summary: { output: 'ok' } } as any);

    const request = new NextRequest('http://localhost/api/analyze', {
      method: 'POST',
      body: JSON.stringify({
        input: {
          customer_name: 'Acme Corp',
          contract_start_date: '01/01/2025',
          terms_months: 12,
          transaction_currency: 'USD',
          billing_period: 'Monthly',
          is_allocations: false,
          use_case_description: 'Annual SaaS subscription with monthly billing.',
        },
      }),
      headers: { 'content-type': 'application/json' },
    });

    const response = await POST(request);
    const body = await response.json();

    expect(response.status).toBe(200);
    expect(body.success).toBe(true);
    expect(body.session_id).toBe('session-1');
    expect(updateSessionStatusMock).toHaveBeenCalledWith('session-1', 'running', 0);
    expect(updateSessionResultMock).toHaveBeenCalledWith('session-1', { summary: { output: 'ok' } });
  });

  it('marks session failed when pipeline throws', async () => {
    getCurrentUserMock.mockResolvedValue({ userId: 'user-1' } as any);
    createSessionMock.mockResolvedValue({
      id: 'session-2',
      session_type: 'analyze',
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
    runPipelineMock.mockRejectedValue(new Error('Pipeline failed'));

    const request = new NextRequest('http://localhost/api/analyze', {
      method: 'POST',
      body: JSON.stringify({
        input: {
          customer_name: 'Acme Corp',
          contract_start_date: '01/01/2025',
          terms_months: 12,
          transaction_currency: 'USD',
          billing_period: 'Monthly',
          is_allocations: false,
          use_case_description: 'Annual SaaS subscription with monthly billing.',
        },
      }),
      headers: { 'content-type': 'application/json' },
    });

    const response = await POST(request);
    const body = await response.json();

    expect(response.status).toBe(500);
    expect(body.error).toBe('Analysis failed');
    expect(updateSessionStatusMock).toHaveBeenCalledWith(
      'session-2',
      'failed',
      undefined,
      'Pipeline failed'
    );
  });
});
