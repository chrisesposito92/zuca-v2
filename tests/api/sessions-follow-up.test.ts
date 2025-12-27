import { beforeEach, describe, expect, it, vi } from 'vitest';
import { NextRequest } from 'next/server';

import { POST } from '@/app/api/sessions/[id]/follow-up/route';
import { addMessage, getMessages, getSession } from '@/lib/db';
import { processFollowUp } from '@zuca/pipeline/follow-up';

vi.mock('@/lib/db', () => ({
  addMessage: vi.fn(),
  getMessages: vi.fn(),
  getSession: vi.fn(),
}));

vi.mock('@zuca/pipeline/follow-up', () => ({
  processFollowUp: vi.fn(),
}));

const addMessageMock = vi.mocked(addMessage);
const getMessagesMock = vi.mocked(getMessages);
const getSessionMock = vi.mocked(getSession);
const processFollowUpMock = vi.mocked(processFollowUp);

describe('POST /api/sessions/[id]/follow-up', () => {
  beforeEach(() => {
    addMessageMock.mockReset();
    getMessagesMock.mockReset();
    getSessionMock.mockReset();
    processFollowUpMock.mockReset();
  });

  it('rejects invalid model selections', async () => {
    const request = new NextRequest('http://localhost/api/sessions/1/follow-up', {
      method: 'POST',
      body: JSON.stringify({ query: 'hi', model: 'bad-model' }),
      headers: { 'content-type': 'application/json' },
    });

    const response = await POST(request, { params: Promise.resolve({ id: '1' }) });
    const body = await response.json();

    expect(response.status).toBe(400);
    expect(body.error).toBe('Invalid model');
  });

  it('requires a query string', async () => {
    const request = new NextRequest('http://localhost/api/sessions/1/follow-up', {
      method: 'POST',
      body: JSON.stringify({}),
      headers: { 'content-type': 'application/json' },
    });

    const response = await POST(request, { params: Promise.resolve({ id: '1' }) });
    const body = await response.json();

    expect(response.status).toBe(400);
    expect(body.error).toBe('Missing query');
  });

  it('returns 404 when the session does not exist', async () => {
    getSessionMock.mockResolvedValue(null);

    const request = new NextRequest('http://localhost/api/sessions/1/follow-up', {
      method: 'POST',
      body: JSON.stringify({ query: 'Update billing' }),
      headers: { 'content-type': 'application/json' },
    });

    const response = await POST(request, { params: Promise.resolve({ id: '1' }) });
    const body = await response.json();

    expect(response.status).toBe(404);
    expect(body.error).toBe('Session not found');
  });

  it('requires a completed session result', async () => {
    getSessionMock.mockResolvedValue({
      id: 'session-1',
      session_type: 'analyze',
      input: {},
      result: null,
    } as any);

    const request = new NextRequest('http://localhost/api/sessions/1/follow-up', {
      method: 'POST',
      body: JSON.stringify({ query: 'Update billing' }),
      headers: { 'content-type': 'application/json' },
    });

    const response = await POST(request, { params: Promise.resolve({ id: '1' }) });
    const body = await response.json();

    expect(response.status).toBe(400);
    expect(body.error).toBe('Session not ready');
  });

  it('stores messages and returns follow-up response', async () => {
    getSessionMock.mockResolvedValue({
      id: 'session-1',
      session_type: 'analyze',
      input: { customer_name: 'Acme' },
      result: { summary: { output: 'ok' } },
      llm_model: 'gpt-5.2',
    } as any);
    getMessagesMock.mockResolvedValue([{ role: 'user', content: 'Hi' }] as any);
    processFollowUpMock.mockResolvedValue({
      type: 'answer',
      content: 'Updated response',
      suggestedEdits: [{ path: 'input.billing_period', value: 'Monthly' }],
    } as any);

    const request = new NextRequest('http://localhost/api/sessions/1/follow-up', {
      method: 'POST',
      body: JSON.stringify({ query: 'Update billing' }),
      headers: { 'content-type': 'application/json' },
    });

    const response = await POST(request, { params: Promise.resolve({ id: '1' }) });
    const body = await response.json();

    expect(response.status).toBe(200);
    expect(body.success).toBe(true);
    expect(body.type).toBe('answer');
    expect(addMessageMock).toHaveBeenCalledTimes(2);
  });
});
