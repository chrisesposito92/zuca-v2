/**
 * GET /api/sessions
 *
 * List all sessions for the current user.
 */

import { NextRequest, NextResponse } from 'next/server';
import { listSessions, getSessionCount, fixStuckRunningSessions } from '@/lib/db';
import { getCurrentUser } from '@/lib/auth';

export async function GET(request: NextRequest) {
  try {
    const user = await getCurrentUser();

    // Get pagination params (default to 1000 to get all sessions)
    const limit = parseInt(request.nextUrl.searchParams.get('limit') || '1000', 10);
    const offset = parseInt(request.nextUrl.searchParams.get('offset') || '0', 10);

    // Auto-cleanup stuck running sessions (older than 30 min)
    await fixStuckRunningSessions(user?.userId, 30);

    // List sessions (filter by user if authenticated)
    const sessions = await listSessions(user?.userId, limit, offset);
    const total = await getSessionCount(user?.userId);

    // Helper to get display name based on session type
    const getSessionDisplayName = (session: typeof sessions[0]): string => {
      const input = session.input as Record<string, unknown>;
      const result = session.result as Record<string, unknown> | null;

      switch (session.session_type) {
        case 'revenue-snapshot': {
          const subs = (input?.subscription_numbers ?? result?.input) as string[] | undefined;
          if (Array.isArray(subs) && subs.length) {
            const shown = subs.slice(0, 3).join(', ');
            return subs.length > 3 ? `${shown} (+${subs.length - 3} more)` : shown;
          }
          return 'Revenue Snapshot';
        }
        case 'html-builder': {
          const desc = input?.description as string | undefined;
          return desc?.slice(0, 60) || 'Template Request';
        }
        case 'uc-generate': {
          return (input?.customer_name as string) || 'Use Case Generation';
        }
        case 'analyze':
        default: {
          return (input?.customer_name as string) || 'Analysis Session';
        }
      }
    };

    // Map to API response format (include input for dashboard display)
    const mapped = sessions.map((s) => ({
      id: s.id,
      session_type: s.session_type,
      customer_name: getSessionDisplayName(s),
      input: s.input, // Include input for rich display in dashboard/history
      status: s.status,
      created_at: s.created_at,
      updated_at: s.updated_at,
      llm_model: s.llm_model,
    }));

    return NextResponse.json({
      success: true,
      sessions: mapped,
      pagination: {
        limit,
        offset,
        count: mapped.length,
        total,
      },
    });
  } catch (error: unknown) {
    console.error('List sessions error:', error);
    const message = error instanceof Error ? error.message : 'Internal server error';
    return NextResponse.json(
      { error: 'Internal server error', details: message },
      { status: 500 }
    );
  }
}
