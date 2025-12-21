/**
 * POST /api/auth/register
 *
 * Creates a new user account with email and password.
 * Automatically logs in the user after registration.
 */

import { NextRequest, NextResponse } from 'next/server';
import { register } from '@/lib/auth';

interface RegisterRequest {
  email: string;
  password: string;
}

export async function POST(request: NextRequest) {
  try {
    const body: RegisterRequest = await request.json();

    if (!body.email || !body.password) {
      return NextResponse.json(
        { error: 'Email and password are required' },
        { status: 400 }
      );
    }

    const result = await register(body.email, body.password);

    if (!result.success) {
      return NextResponse.json(
        { error: result.error },
        { status: 400 }
      );
    }

    return NextResponse.json({
      success: true,
      userId: result.userId,
    });
  } catch (error) {
    console.error('Register error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
