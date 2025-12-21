/**
 * POST /api/feedback
 * GET /api/feedback/stats
 *
 * Submit feedback (thumbs up/down) for session outputs.
 */

import { NextRequest, NextResponse } from 'next/server';
import {
  createFeedback,
  getFeedbackStats,
  type FeedbackTargetType,
  type FeedbackRating,
} from '@/lib/db';
import { getCurrentUser } from '@/lib/auth';

const VALID_TARGETS: FeedbackTargetType[] = ['session', 'summary', 'contracts', 'billings', 'revrec'];
const VALID_RATINGS: FeedbackRating[] = ['positive', 'negative'];

export async function POST(request: NextRequest) {
  try {
    const user = await getCurrentUser();
    const body = await request.json();

    const { session_id, target_type, rating, comment } = body;

    // Validate required fields
    if (!session_id || typeof session_id !== 'string') {
      return NextResponse.json(
        { error: 'Missing session_id' },
        { status: 400 }
      );
    }

    if (!target_type || !VALID_TARGETS.includes(target_type)) {
      return NextResponse.json(
        { error: 'Invalid target_type', valid: VALID_TARGETS },
        { status: 400 }
      );
    }

    if (!rating || !VALID_RATINGS.includes(rating)) {
      return NextResponse.json(
        { error: 'Invalid rating', valid: VALID_RATINGS },
        { status: 400 }
      );
    }

    // Create feedback
    const feedback = await createFeedback(
      session_id,
      target_type as FeedbackTargetType,
      rating as FeedbackRating,
      user?.userId,
      comment
    );

    return NextResponse.json({
      success: true,
      feedback: {
        id: feedback.id,
        target_type: feedback.target_type,
        rating: feedback.rating,
        created_at: feedback.created_at,
      },
    });
  } catch (error: unknown) {
    console.error('Feedback error:', error);
    const message = error instanceof Error ? error.message : 'Internal server error';
    return NextResponse.json(
      { error: 'Internal server error', details: message },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    const stats = await getFeedbackStats();

    return NextResponse.json({
      success: true,
      stats,
    });
  } catch (error: unknown) {
    console.error('Feedback stats error:', error);
    const message = error instanceof Error ? error.message : 'Internal server error';
    return NextResponse.json(
      { error: 'Internal server error', details: message },
      { status: 500 }
    );
  }
}
