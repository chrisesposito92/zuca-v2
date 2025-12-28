/**
 * POST /api/bug-report
 *
 * Creates a GitHub issue for bug reports.
 * Requires GITHUB_TOKEN, GITHUB_OWNER, and GITHUB_REPO env vars.
 */

import { NextRequest, NextResponse } from "next/server";
import { getCurrentUser } from "@/lib/auth";

interface BugReportBody {
  title: string;
  description: string;
  steps?: string;
  expected?: string;
  actual?: string;
  sessionId?: string;
  pageUrl?: string;
  userAgent?: string;
}

export async function POST(request: NextRequest) {
  try {
    const user = await getCurrentUser();

    // Verify GitHub config
    const token = process.env.GITHUB_TOKEN;
    const owner = process.env.GITHUB_OWNER;
    const repo = process.env.GITHUB_REPO;

    if (!token || !owner || !repo) {
      return NextResponse.json(
        { error: "GitHub integration not configured" },
        { status: 500 }
      );
    }

    const body: BugReportBody = await request.json();

    // Validate required fields
    if (!body.title?.trim()) {
      return NextResponse.json(
        { error: "Title is required" },
        { status: 400 }
      );
    }

    if (!body.description?.trim()) {
      return NextResponse.json(
        { error: "Description is required" },
        { status: 400 }
      );
    }

    // Build the issue body with Markdown formatting
    const issueBody = buildIssueBody(body, user?.email ?? undefined);

    // Create the GitHub issue
    const response = await fetch(
      `https://api.github.com/repos/${owner}/${repo}/issues`,
      {
        method: "POST",
        headers: {
          Accept: "application/vnd.github+json",
          Authorization: `Bearer ${token}`,
          "X-GitHub-Api-Version": "2022-11-28",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title: `[Bug Report] ${body.title}`,
          body: issueBody,
          labels: ["bug", "user-reported"],
        }),
      }
    );

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      console.error("GitHub API error:", response.status, errorData);
      return NextResponse.json(
        { error: "Failed to create GitHub issue", details: errorData.message },
        { status: response.status }
      );
    }

    const issue = await response.json();

    return NextResponse.json({
      success: true,
      issue: {
        number: issue.number,
        url: issue.html_url,
        title: issue.title,
      },
    });
  } catch (error: unknown) {
    console.error("Bug report error:", error);
    const message = error instanceof Error ? error.message : "Internal server error";
    return NextResponse.json(
      { error: "Internal server error", details: message },
      { status: 500 }
    );
  }
}

function buildIssueBody(body: BugReportBody, userEmail?: string): string {
  const sections: string[] = [];

  // Description
  sections.push("## Description");
  sections.push(body.description);
  sections.push("");

  // Steps to reproduce
  if (body.steps?.trim()) {
    sections.push("## Steps to Reproduce");
    sections.push(body.steps);
    sections.push("");
  }

  // Expected behavior
  if (body.expected?.trim()) {
    sections.push("## Expected Behavior");
    sections.push(body.expected);
    sections.push("");
  }

  // Actual behavior
  if (body.actual?.trim()) {
    sections.push("## Actual Behavior");
    sections.push(body.actual);
    sections.push("");
  }

  // Context info
  const contextItems: string[] = [];

  if (body.pageUrl) {
    contextItems.push(`- **Page URL:** ${body.pageUrl}`);
  }

  if (body.sessionId) {
    contextItems.push(`- **Session ID:** \`${body.sessionId}\``);
  }

  if (body.userAgent) {
    contextItems.push(`- **User Agent:** ${body.userAgent}`);
  }

  if (userEmail) {
    contextItems.push(`- **Reported by:** ${userEmail}`);
  }

  contextItems.push(`- **Reported at:** ${new Date().toISOString()}`);

  if (contextItems.length > 0) {
    sections.push("## Context");
    sections.push(contextItems.join("\n"));
    sections.push("");
  }

  // Footer
  sections.push("---");
  sections.push("*This issue was automatically created via the ZUCA bug report feature.*");

  return sections.join("\n");
}
