/**
 * GET /api/sessions
 *
 * List all sessions for the current user.
 */

import { NextRequest, NextResponse } from 'next/server';
import { listSessions } from '@/lib/db';
import { getCurrentUser } from '@/lib/auth';

export async function GET(request: NextRequest) {
  try {
    const user = await getCurrentUser();

    // Get pagination params
    const limit = parseInt(request.nextUrl.searchParams.get('limit') || '50', 10);
    const offset = parseInt(request.nextUrl.searchParams.get('offset') || '0', 10);

    // List sessions (filter by user if authenticated)
    const sessions = await listSessions(user?.userId, limit, offset);

    const formatRevenueSnapshotName = (input: any, result: any): string => {
      const subs = input?.subscription_numbers ?? result?.input?.subscription_numbers;
      if (Array.isArray(subs) && subs.length) {
        const shown = subs.slice(0, 3).join(', ');
        return subs.length > 3 ? `${shown} (+${subs.length - 3} more)` : shown;
      }
      return 'Revenue Snapshot';
    };

    // Map to API response format
    const mapped = sessions.map((s) => ({
      id: s.id,
      session_type: s.session_type,
      customer_name:
        s.session_type === 'revenue-snapshot'
          ? formatRevenueSnapshotName(s.input, s.result)
          : (s.input as { customer_name?: string })?.customer_name || 'Unknown',
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
