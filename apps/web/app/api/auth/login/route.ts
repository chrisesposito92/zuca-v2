/**
 * POST /api/auth/login
 *
 * Handles authentication via:
 * - Password (shared password from ZUCA_PASSWORD env var)
 * - Invite code (one-time use codes that create users)
 */

import { NextRequest, NextResponse } from 'next/server';
import { loginWithPassword, loginWithInviteCode } from '@/lib/auth';

interface LoginRequest {
  type: 'password' | 'invite';
  value: string;
  email?: string;
}

export async function POST(request: NextRequest) {
  try {
    const body: LoginRequest = await request.json();

    if (!body.type || !body.value) {
      return NextResponse.json(
        { error: 'Missing type or value' },
        { status: 400 }
      );
    }

    let result;

    if (body.type === 'password') {
      result = await loginWithPassword(body.value);
    } else if (body.type === 'invite') {
      result = await loginWithInviteCode(body.value, body.email);
    } else {
      return NextResponse.json(
        { error: 'Invalid authentication type' },
        { status: 400 }
      );
    }

    if (!result.success) {
      return NextResponse.json(
        { error: result.error },
        { status: 401 }
      );
    }

    return NextResponse.json({
      success: true,
      userId: result.userId,
    });
  } catch (error) {
    console.error('Login error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
