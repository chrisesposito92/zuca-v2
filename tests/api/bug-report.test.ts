import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { NextRequest } from 'next/server';

import { POST } from '@/app/api/bug-report/route';
import { getCurrentUser } from '@/lib/auth';

// Mock auth
vi.mock('@/lib/auth', () => ({
  getCurrentUser: vi.fn(),
}));

const getCurrentUserMock = vi.mocked(getCurrentUser);

// Mock fetch for GitHub API
const originalFetch = global.fetch;
let fetchMock: ReturnType<typeof vi.fn>;

describe('POST /api/bug-report', () => {
  beforeEach(() => {
    getCurrentUserMock.mockReset();
    fetchMock = vi.fn();
    global.fetch = fetchMock;

    // Set up environment variables
    vi.stubEnv('GITHUB_TOKEN', 'test-token');
    vi.stubEnv('GITHUB_OWNER', 'test-owner');
    vi.stubEnv('GITHUB_REPO', 'test-repo');
  });

  afterEach(() => {
    global.fetch = originalFetch;
    vi.unstubAllEnvs();
  });

  it('returns 400 when title is missing', async () => {
    getCurrentUserMock.mockResolvedValue(null);

    const request = new NextRequest('http://localhost/api/bug-report', {
      method: 'POST',
      body: JSON.stringify({ description: 'A bug description' }),
      headers: { 'content-type': 'application/json' },
    });

    const response = await POST(request);
    const body = await response.json();

    expect(response.status).toBe(400);
    expect(body.error).toBe('Title is required');
  });

  it('returns 400 when description is missing', async () => {
    getCurrentUserMock.mockResolvedValue(null);

    const request = new NextRequest('http://localhost/api/bug-report', {
      method: 'POST',
      body: JSON.stringify({ title: 'A bug title' }),
      headers: { 'content-type': 'application/json' },
    });

    const response = await POST(request);
    const body = await response.json();

    expect(response.status).toBe(400);
    expect(body.error).toBe('Description is required');
  });

  it('returns 500 when GitHub config is missing', async () => {
    vi.stubEnv('GITHUB_TOKEN', '');
    getCurrentUserMock.mockResolvedValue(null);

    const request = new NextRequest('http://localhost/api/bug-report', {
      method: 'POST',
      body: JSON.stringify({ title: 'Bug', description: 'Description' }),
      headers: { 'content-type': 'application/json' },
    });

    const response = await POST(request);
    const body = await response.json();

    expect(response.status).toBe(500);
    expect(body.error).toBe('GitHub integration not configured');
  });

  it('creates GitHub issue successfully', async () => {
    getCurrentUserMock.mockResolvedValue({
      userId: 'user-123',
      email: 'test@example.com',
      provider: 'email',
    });

    fetchMock.mockResolvedValue({
      ok: true,
      json: async () => ({
        number: 42,
        html_url: 'https://github.com/test-owner/test-repo/issues/42',
        title: '[Bug Report] Test Bug',
      }),
    });

    const request = new NextRequest('http://localhost/api/bug-report', {
      method: 'POST',
      body: JSON.stringify({
        title: 'Test Bug',
        description: 'This is a test bug description',
        steps: '1. Do this\n2. Do that',
        expected: 'It should work',
        actual: 'It does not work',
        sessionId: 'session-123',
        pageUrl: 'http://localhost:3000/analyze',
      }),
      headers: { 'content-type': 'application/json' },
    });

    const response = await POST(request);
    const body = await response.json();

    expect(response.status).toBe(200);
    expect(body.success).toBe(true);
    expect(body.issue.number).toBe(42);
    expect(body.issue.url).toBe('https://github.com/test-owner/test-repo/issues/42');

    // Verify the GitHub API was called correctly
    expect(fetchMock).toHaveBeenCalledWith(
      'https://api.github.com/repos/test-owner/test-repo/issues',
      expect.objectContaining({
        method: 'POST',
        headers: expect.objectContaining({
          Authorization: 'Bearer test-token',
        }),
      })
    );

    // Verify the issue body contains expected sections
    const fetchCall = fetchMock.mock.calls[0];
    const requestBody = JSON.parse(fetchCall[1].body);
    expect(requestBody.title).toBe('[Bug Report] Test Bug');
    expect(requestBody.labels).toEqual(['bug', 'user-reported']);
    expect(requestBody.body).toContain('## Description');
    expect(requestBody.body).toContain('This is a test bug description');
    expect(requestBody.body).toContain('## Steps to Reproduce');
    expect(requestBody.body).toContain('## Expected Behavior');
    expect(requestBody.body).toContain('## Actual Behavior');
    expect(requestBody.body).toContain('**Session ID:** `session-123`');
    expect(requestBody.body).toContain('**Reported by:** test@example.com');
  });

  it('handles GitHub API errors gracefully', async () => {
    getCurrentUserMock.mockResolvedValue(null);

    fetchMock.mockResolvedValue({
      ok: false,
      status: 401,
      json: async () => ({ message: 'Bad credentials' }),
    });

    const request = new NextRequest('http://localhost/api/bug-report', {
      method: 'POST',
      body: JSON.stringify({
        title: 'Test Bug',
        description: 'Description',
      }),
      headers: { 'content-type': 'application/json' },
    });

    const response = await POST(request);
    const body = await response.json();

    expect(response.status).toBe(401);
    expect(body.error).toBe('Failed to create GitHub issue');
    expect(body.details).toBe('Bad credentials');
  });

  it('works without optional fields', async () => {
    getCurrentUserMock.mockResolvedValue(null);

    fetchMock.mockResolvedValue({
      ok: true,
      json: async () => ({
        number: 1,
        html_url: 'https://github.com/test-owner/test-repo/issues/1',
        title: '[Bug Report] Minimal Bug',
      }),
    });

    const request = new NextRequest('http://localhost/api/bug-report', {
      method: 'POST',
      body: JSON.stringify({
        title: 'Minimal Bug',
        description: 'Just a description',
      }),
      headers: { 'content-type': 'application/json' },
    });

    const response = await POST(request);
    const body = await response.json();

    expect(response.status).toBe(200);
    expect(body.success).toBe(true);

    // Verify the issue body doesn't include empty optional sections
    const fetchCall = fetchMock.mock.calls[0];
    const requestBody = JSON.parse(fetchCall[1].body);
    expect(requestBody.body).toContain('## Description');
    expect(requestBody.body).not.toContain('## Steps to Reproduce');
    expect(requestBody.body).not.toContain('## Expected Behavior');
    expect(requestBody.body).not.toContain('## Actual Behavior');
  });
});
