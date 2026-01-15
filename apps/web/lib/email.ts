/**
 * Email utilities using Resend
 */

import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

const FROM_EMAIL = process.env.EMAIL_FROM || 'ZUCA <noreply@zuca.app>';
const APP_URL = process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000';

export interface SendEmailResult {
  success: boolean;
  error?: string;
}

/**
 * Send password reset email
 */
export async function sendPasswordResetEmail(
  email: string,
  resetToken: string
): Promise<SendEmailResult> {
  const resetUrl = `${APP_URL}/reset-password?token=${resetToken}`;

  try {
    await resend.emails.send({
      from: FROM_EMAIL,
      to: email,
      subject: 'Reset your ZUCA password',
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
        </head>
        <body style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; background-color: #0a0a0a; color: #e5e5e5; padding: 40px 20px;">
          <div style="max-width: 500px; margin: 0 auto; background-color: #171717; border-radius: 12px; padding: 40px; border: 1px solid #262626;">
            <h1 style="color: #14b8a6; margin-top: 0; font-size: 24px;">Reset Your Password</h1>
            <p style="color: #a3a3a3; line-height: 1.6;">
              We received a request to reset your ZUCA password. Click the button below to create a new password:
            </p>
            <div style="text-align: center; margin: 32px 0;">
              <a href="${resetUrl}" style="background-color: #14b8a6; color: #000; padding: 14px 28px; border-radius: 8px; text-decoration: none; font-weight: 600; display: inline-block;">
                Reset Password
              </a>
            </div>
            <p style="color: #737373; font-size: 14px; line-height: 1.5;">
              This link will expire in 1 hour. If you didn't request a password reset, you can safely ignore this email.
            </p>
            <hr style="border: none; border-top: 1px solid #262626; margin: 32px 0;" />
            <p style="color: #525252; font-size: 12px; margin-bottom: 0;">
              ZUCA - Zuora Use Case Assistant
            </p>
          </div>
        </body>
        </html>
      `,
      text: `Reset your ZUCA password\n\nClick the link below to reset your password:\n${resetUrl}\n\nThis link will expire in 1 hour.\n\nIf you didn't request this, you can ignore this email.`,
    });

    return { success: true };
  } catch (error) {
    console.error('Failed to send password reset email:', error);
    return {
      success: false,
      error: 'Failed to send email. Please try again.',
    };
  }
}
