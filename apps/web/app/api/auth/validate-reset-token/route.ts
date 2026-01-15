/**
 * POST /api/auth/validate-reset-token
 *
 * Checks if a reset token is valid (for showing appropriate UI).
 */

import { NextRequest, NextResponse } from 'next/server';
import { validateResetToken } from '@/lib/auth';

interface ValidateTokenRequest {
  token: string;
}

export async function POST(request: NextRequest) {
  try {
    const body: ValidateTokenRequest = await request.json();

    if (!body.token) {
      return NextResponse.json(
        { valid: false, error: 'Token is required' },
        { status: 400 }
      );
    }

    const userId = await validateResetToken(body.token);

    return NextResponse.json({
      valid: !!userId,
    });
  } catch (error) {
    console.error('Validate token error:', error);
    return NextResponse.json(
      { valid: false, error: 'Internal server error' },
      { status: 500 }
    );
  }
}
