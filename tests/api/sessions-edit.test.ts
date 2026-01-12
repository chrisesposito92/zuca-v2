import { beforeEach, describe, expect, it, vi } from 'vitest';
import { NextRequest } from 'next/server';

import { POST } from '@/app/api/sessions/[id]/edit/route';
import { getSession, updateSessionInput, updateSessionResult, updateSessionStatus } from '@/lib/db';
import { runPipeline, isPipelineClarificationPause } from '@zuca/pipeline';

vi.mock('@/lib/db', () => ({
  getSession: vi.fn(),
  updateSessionInput: vi.fn(),
  updateSessionResult: vi.fn(),
  updateSessionStatus: vi.fn(),
}));

vi.mock('@zuca/pipeline', () => ({
  runPipeline: vi.fn(),
  isPipelineClarificationPause: vi.fn(),
}));

const getSessionMock = vi.mocked(getSession);
const updateSessionInputMock = vi.mocked(updateSessionInput);
const updateSessionResultMock = vi.mocked(updateSessionResult);
const updateSessionStatusMock = vi.mocked(updateSessionStatus);
const runPipelineMock = vi.mocked(runPipeline);
const isPipelineClarificationPauseMock = vi.mocked(isPipelineClarificationPause);

describe('POST /api/sessions/[id]/edit', () => {
  beforeEach(() => {
    getSessionMock.mockReset();
    updateSessionInputMock.mockReset();
    updateSessionResultMock.mockReset();
    updateSessionStatusMock.mockReset();
    runPipelineMock.mockReset();
    isPipelineClarificationPauseMock.mockReset();
    process.env.LLM_MODEL = 'gpt-5.2';
  });

  it('returns 400 when field is missing', async () => {
    const request = new NextRequest('http://localhost/api/sessions/123/edit', {
      method: 'POST',
      body: JSON.stringify({}),
      headers: { 'content-type': 'application/json' },
    });

    const response = await POST(request, { params: Promise.resolve({ id: '123' }) });
    const body = await response.json();

    expect(response.status).toBe(400);
    expect(body.error).toBe('Missing field');
  });

  it('updates input without rerunning pipeline for display-only fields', async () => {
    getSessionMock.mockResolvedValue({
      id: 'session-1',
      session_type: 'analyze',
      input: {
        customer_name: 'Acme',
        contract_start_date: '01/01/2025',
        terms_months: 12,
        transaction_currency: 'USD',
        billing_period: 'Monthly',
        is_allocations: false,
        use_case_description: 'Annual SaaS subscription with monthly billing.',
      },
      result: { summary: { output: 'ok' } },
      status: 'completed',
      created_at: new Date(),
      updated_at: new Date(),
      llm_model: 'gpt-5.2',
      current_step: 0,
      error_message: null,
      user_id: 'user-1',
    });

    const request = new NextRequest('http://localhost/api/sessions/session-1/edit', {
      method: 'POST',
      body: JSON.stringify({ field: 'customer_name', value: 'Acme Updated' }),
      headers: { 'content-type': 'application/json' },
    });

    const response = await POST(request, { params: Promise.resolve({ id: 'session-1' }) });
    const body = await response.json();

    expect(response.status).toBe(200);
    expect(body.message).toContain('no pipeline rerun');
    expect(updateSessionInputMock).toHaveBeenCalledTimes(1);
    expect(runPipelineMock).not.toHaveBeenCalled();
  });

  it('reruns pipeline when core fields change', async () => {
    getSessionMock.mockResolvedValue({
      id: 'session-2',
      session_type: 'analyze',
      input: {
        customer_name: 'Beta',
        contract_start_date: '01/01/2025',
        terms_months: 12,
        transaction_currency: 'USD',
        billing_period: 'Monthly',
        is_allocations: false,
        use_case_description: 'Annual SaaS subscription with monthly billing.',
      },
      result: { summary: { output: 'ok' } },
      status: 'completed',
      created_at: new Date(),
      updated_at: new Date(),
      llm_model: 'gpt-5.2',
      current_step: 0,
      error_message: null,
      user_id: 'user-1',
    });

    runPipelineMock.mockResolvedValue({ summary: { output: 'updated' } } as any);
    isPipelineClarificationPauseMock.mockReturnValue(false);

    const request = new NextRequest('http://localhost/api/sessions/session-2/edit', {
      method: 'POST',
      body: JSON.stringify({ field: 'terms_months', value: 24 }),
      headers: { 'content-type': 'application/json' },
    });

    const response = await POST(request, { params: Promise.resolve({ id: 'session-2' }) });
    const body = await response.json();

    expect(response.status).toBe(200);
    expect(body.affected_steps.length).toBeGreaterThan(0);
    expect(updateSessionStatusMock).toHaveBeenCalledWith('session-2', 'running', 0);
    expect(updateSessionResultMock).toHaveBeenCalledTimes(1);
    expect(runPipelineMock).toHaveBeenCalledTimes(1);
  });
});
