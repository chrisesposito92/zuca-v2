/**
 * POST /api/bugs
 * GET /api/bugs
 *
 * Submit bug reports that auto-create GitHub issues.
 */

import { NextRequest, NextResponse } from 'next/server';
import {
  createBugReport,
  updateBugReportGitHub,
  markBugReportFailed,
  listBugReports,
  getSession,
  type BugReportContext,
} from '@/lib/db';
import { getCurrentUser } from '@/lib/auth';

// GitHub API configuration
const GITHUB_TOKEN = process.env.GITHUB_TOKEN;
const GITHUB_OWNER = process.env.GITHUB_OWNER;
const GITHUB_REPO = process.env.GITHUB_REPO;

async function createGitHubIssue(
  title: string,
  body: string
): Promise<{ url: string; number: number } | null> {
  if (!GITHUB_TOKEN || !GITHUB_OWNER || !GITHUB_REPO) {
    console.warn('GitHub integration not configured');
    return null;
  }

  try {
    const response = await fetch(
      `https://api.github.com/repos/${GITHUB_OWNER}/${GITHUB_REPO}/issues`,
      {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${GITHUB_TOKEN}`,
          Accept: 'application/vnd.github+json',
          'X-GitHub-Api-Version': '2022-11-28',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          title,
          body,
          labels: ['bug', 'user-reported'],
        }),
      }
    );

    if (!response.ok) {
      const error = await response.text();
      console.error('GitHub API error:', error);
      return null;
    }

    const issue = await response.json();
    return {
      url: issue.html_url,
      number: issue.number,
    };
  } catch (error) {
    console.error('Failed to create GitHub issue:', error);
    return null;
  }
}

function formatIssueBody(
  description: string,
  context: BugReportContext | null
): string {
  let body = `## Description\n\n${description}\n\n`;

  if (context) {
    body += '## Context\n\n';

    if (context.url) {
      body += `**URL:** ${context.url}\n`;
    }

    if (context.timestamp) {
      body += `**Timestamp:** ${context.timestamp}\n`;
    }

    if (context.sessionStatus) {
      body += `**Session Status:** ${context.sessionStatus}\n`;
    }

    if (context.errorMessage) {
      body += `\n### Error Message\n\`\`\`\n${context.errorMessage}\n\`\`\`\n`;
    }

    if (context.browserInfo) {
      body += '\n### Browser Info\n';
      body += `- **User Agent:** ${context.browserInfo.userAgent}\n`;
      body += `- **Platform:** ${context.browserInfo.platform}\n`;
      body += `- **Language:** ${context.browserInfo.language}\n`;
      body += `- **Screen Size:** ${context.browserInfo.screenSize}\n`;
    }

    if (context.sessionInput) {
      body += '\n<details>\n<summary>Session Input</summary>\n\n```json\n';
      body += JSON.stringify(context.sessionInput, null, 2);
      body += '\n```\n</details>\n';
    }

    if (context.sessionResult) {
      body += '\n<details>\n<summary>Session Result (truncated)</summary>\n\n```json\n';
      const truncated = JSON.stringify(context.sessionResult, null, 2).slice(0, 5000);
      body += truncated;
      if (truncated.length >= 5000) body += '\n... (truncated)';
      body += '\n```\n</details>\n';
    }
  }

  body += '\n---\n*Submitted via ZUCA Bug Reporter*';

  return body;
}

export async function POST(request: NextRequest) {
  try {
    const user = await getCurrentUser();
    const body = await request.json();

    const { title, description, session_id, context } = body;

    // Validate required fields
    if (!title || typeof title !== 'string' || title.length < 5) {
      return NextResponse.json(
        { error: 'Title must be at least 5 characters' },
        { status: 400 }
      );
    }

    if (!description || typeof description !== 'string' || description.length < 10) {
      return NextResponse.json(
        { error: 'Description must be at least 10 characters' },
        { status: 400 }
      );
    }

    // Build context from session if provided
    let fullContext: BugReportContext | undefined = context;

    if (session_id) {
      const session = await getSession(session_id);
      if (session) {
        fullContext = {
          ...context,
          sessionInput: session.input,
          sessionResult: session.result,
          sessionStatus: session.status,
          errorMessage: session.error_message || undefined,
        };
      }
    }

    // Create bug report in database
    const bugReport = await createBugReport(
      title,
      description,
      session_id,
      user?.userId,
      fullContext
    );

    // Try to create GitHub issue
    const issueBody = formatIssueBody(description, fullContext || null);
    const githubIssue = await createGitHubIssue(`[Bug] ${title}`, issueBody);

    if (githubIssue) {
      await updateBugReportGitHub(bugReport.id, githubIssue.url, githubIssue.number);

      return NextResponse.json({
        success: true,
        bug_report: {
          id: bugReport.id,
          status: 'submitted',
          github_issue_url: githubIssue.url,
          github_issue_number: githubIssue.number,
        },
      });
    } else {
      await markBugReportFailed(bugReport.id);

      return NextResponse.json({
        success: true,
        bug_report: {
          id: bugReport.id,
          status: 'pending',
          message: 'Bug report saved but GitHub issue creation failed',
        },
      });
    }
  } catch (error: unknown) {
    console.error('Bug report error:', error);
    const message = error instanceof Error ? error.message : 'Internal server error';
    return NextResponse.json(
      { error: 'Internal server error', details: message },
      { status: 500 }
    );
  }
}

export async function GET(request: NextRequest) {
  try {
    const status = request.nextUrl.searchParams.get('status') as 'pending' | 'submitted' | 'failed' | null;
    const limit = parseInt(request.nextUrl.searchParams.get('limit') || '50', 10);

    const bugs = await listBugReports(status || undefined, limit);

    return NextResponse.json({
      success: true,
      bug_reports: bugs.map((b) => ({
        id: b.id,
        title: b.title,
        status: b.status,
        github_issue_url: b.github_issue_url,
        github_issue_number: b.github_issue_number,
        created_at: b.created_at,
      })),
    });
  } catch (error: unknown) {
    console.error('List bugs error:', error);
    const message = error instanceof Error ? error.message : 'Internal server error';
    return NextResponse.json(
      { error: 'Internal server error', details: message },
      { status: 500 }
    );
  }
}
