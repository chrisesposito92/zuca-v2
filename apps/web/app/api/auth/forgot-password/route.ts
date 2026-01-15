/**
 * POST /api/auth/forgot-password
 *
 * Initiates password reset flow.
 * For internal tools: returns reset link directly (set SKIP_EMAIL=true)
 * For production: sends email via Resend
 */

import { NextRequest, NextResponse } from 'next/server';
import { createPasswordResetRequest } from '@/lib/auth';
import { sendPasswordResetEmail } from '@/lib/email';
import { getUserByEmail } from '@/lib/db';

const APP_URL = process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000';
const SKIP_EMAIL = process.env.SKIP_RESET_EMAIL === 'true';

interface ForgotPasswordRequest {
  email: string;
}

export async function POST(request: NextRequest) {
  try {
    const body: ForgotPasswordRequest = await request.json();

    if (!body.email) {
      return NextResponse.json(
        { error: 'Email is required' },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(body.email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      );
    }

    // Create reset token (returns null if user doesn't exist)
    const resetToken = await createPasswordResetRequest(body.email);

    // For internal tools: return the reset link directly
    if (SKIP_EMAIL && resetToken) {
      const resetUrl = `${APP_URL}/reset-password?token=${resetToken}`;
      return NextResponse.json({
        success: true,
        message: 'Reset link generated.',
        resetUrl, // Only included when SKIP_RESET_EMAIL=true
      });
    }

    // For production: send email
    if (resetToken) {
      const user = await getUserByEmail(body.email);
      if (user?.email) {
        await sendPasswordResetEmail(user.email, resetToken);
      }
    }

    // Always return success to prevent email enumeration
    return NextResponse.json({
      success: true,
      message: 'If an account exists with this email, you will receive a password reset link.',
    });
  } catch (error) {
    console.error('Forgot password error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
