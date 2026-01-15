/**
 * Authentication utilities for ZUCA v2
 *
 * Uses JWT tokens stored in httpOnly cookies for security.
 * Supports email/password authentication with individual user accounts.
 * Designed to easily add SSO/OAuth providers in the future.
 */

import { SignJWT, jwtVerify } from 'jose';
import { cookies } from 'next/headers';
import bcrypt from 'bcryptjs';
import crypto from 'crypto';
import {
  getUserById,
  getUserByEmail,
  createUser,
  createPasswordResetToken,
  findValidPasswordResetToken,
  markPasswordResetTokenUsed,
  updateUserPassword,
} from './db';

// ============================================================================
// Constants
// ============================================================================

const JWT_SECRET = new TextEncoder().encode(
  process.env.JWT_SECRET || 'development-secret-change-in-production'
);
const COOKIE_NAME = 'auth-token';
const TOKEN_EXPIRY = '7d'; // 7 days
const SALT_ROUNDS = 10;

// UUID v4 regex pattern for validation
const UUID_REGEX = /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;

// Auth provider types - extensible for future SSO
export type AuthProvider = 'email' | 'google' | 'okta';

export interface JWTPayload {
  userId: string;
  provider: AuthProvider;
  iat: number;
  exp: number;
}

export interface AuthResult {
  success: boolean;
  error?: string;
  userId?: string;
}

export interface AuthUser {
  userId: string;
  email: string | null;
  provider: AuthProvider;
}

// ============================================================================
// JWT Operations
// ============================================================================

export async function createToken(userId: string, provider: AuthProvider): Promise<string> {
  return new SignJWT({ userId, provider })
    .setProtectedHeader({ alg: 'HS256' })
    .setIssuedAt()
    .setExpirationTime(TOKEN_EXPIRY)
    .sign(JWT_SECRET);
}

export async function verifyToken(token: string): Promise<JWTPayload | null> {
  try {
    const { payload } = await jwtVerify(token, JWT_SECRET);
    return payload as unknown as JWTPayload;
  } catch {
    return null;
  }
}

// ============================================================================
// Cookie Operations
// ============================================================================

export async function setAuthCookie(token: string): Promise<void> {
  const cookieStore = await cookies();
  cookieStore.set(COOKIE_NAME, token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax',
    maxAge: 60 * 60 * 24 * 7, // 7 days
    path: '/',
  });
}

export async function getAuthCookie(): Promise<string | null> {
  const cookieStore = await cookies();
  return cookieStore.get(COOKIE_NAME)?.value ?? null;
}

export async function clearAuthCookie(): Promise<void> {
  const cookieStore = await cookies();
  cookieStore.delete(COOKIE_NAME);
}

// ============================================================================
// Email/Password Auth
// ============================================================================

/**
 * Register a new user with email and password
 */
export async function register(email: string, password: string): Promise<AuthResult> {
  // Validate email format
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return { success: false, error: 'Invalid email format' };
  }

  // Validate password strength
  if (password.length < 8) {
    return { success: false, error: 'Password must be at least 8 characters' };
  }

  // Check if user already exists
  const existingUser = await getUserByEmail(email);
  if (existingUser) {
    return { success: false, error: 'An account with this email already exists' };
  }

  // Hash password and create user
  const passwordHash = await bcrypt.hash(password, SALT_ROUNDS);
  const user = await createUser(email, passwordHash, null);

  // Create and set token
  const token = await createToken(user.id, 'email');
  await setAuthCookie(token);

  return { success: true, userId: user.id };
}

/**
 * Login with email and password
 */
export async function login(email: string, password: string): Promise<AuthResult> {
  // Find user by email
  const user = await getUserByEmail(email);
  if (!user) {
    return { success: false, error: 'Invalid email or password' };
  }

  // Verify password
  if (!user.password_hash) {
    return { success: false, error: 'This account uses a different login method' };
  }

  const passwordValid = await bcrypt.compare(password, user.password_hash);
  if (!passwordValid) {
    return { success: false, error: 'Invalid email or password' };
  }

  // Create and set token
  const token = await createToken(user.id, 'email');
  await setAuthCookie(token);

  return { success: true, userId: user.id };
}

// ============================================================================
// Session Validation
// ============================================================================

/**
 * Get the current authenticated user from the request
 */
export async function getCurrentUser(): Promise<AuthUser | null> {
  const token = await getAuthCookie();
  if (!token) {
    return null;
  }

  const payload = await verifyToken(token);
  if (!payload) {
    // Invalid token - clear the cookie
    await clearAuthCookie();
    return null;
  }

  // Validate userId is a proper UUID (handles legacy "password-user" tokens)
  if (!UUID_REGEX.test(payload.userId)) {
    // Legacy or invalid token - clear it
    await clearAuthCookie();
    return null;
  }

  // Verify user exists and is active
  const user = await getUserById(payload.userId);
  if (!user) {
    // User no longer exists - clear the cookie
    await clearAuthCookie();
    return null;
  }

  return {
    userId: user.id,
    email: user.email,
    provider: payload.provider,
  };
}

/**
 * Require authentication - throws if not authenticated
 */
export async function requireAuth(): Promise<AuthUser> {
  const user = await getCurrentUser();
  if (!user) {
    throw new Error('Authentication required');
  }
  return user;
}

/**
 * Logout - clear the auth cookie
 */
export async function logout(): Promise<void> {
  await clearAuthCookie();
}

// ============================================================================
// Future: SSO/OAuth Helpers (placeholder for Option C)
// ============================================================================

/**
 * Handle OAuth callback - to be implemented when adding SSO
 * @param provider - The OAuth provider (google, okta, etc.)
 * @param code - The authorization code from the OAuth flow
 */
export async function handleOAuthCallback(
  _provider: 'google' | 'okta',
  _code: string
): Promise<AuthResult> {
  // TODO: Implement when adding SSO support
  // 1. Exchange code for tokens with provider
  // 2. Get user info from provider
  // 3. Create or find user in our DB
  // 4. Create JWT and set cookie
  return { success: false, error: 'SSO not yet implemented' };
}

// ============================================================================
// Password Reset Operations
// ============================================================================

const RESET_TOKEN_EXPIRY_HOURS = 1;

/**
 * Generate a secure random token and its hash
 */
export function generateResetToken(): { token: string; hash: string } {
  const token = crypto.randomBytes(32).toString('hex'); // 64 char hex string
  const hash = crypto.createHash('sha256').update(token).digest('hex');
  return { token, hash };
}

/**
 * Hash a token for lookup
 */
export function hashToken(token: string): string {
  return crypto.createHash('sha256').update(token).digest('hex');
}

/**
 * Create a password reset request
 * Returns the token to be sent via email (or null if user not found)
 */
export async function createPasswordResetRequest(email: string): Promise<string | null> {
  const user = await getUserByEmail(email);
  if (!user) {
    return null; // Don't reveal if email exists
  }

  const { token, hash } = generateResetToken();
  const expiresAt = new Date(Date.now() + RESET_TOKEN_EXPIRY_HOURS * 60 * 60 * 1000);

  await createPasswordResetToken(user.id, hash, expiresAt);

  return token;
}

/**
 * Validate a password reset token
 * Returns the user ID if valid, null otherwise
 */
export async function validateResetToken(token: string): Promise<string | null> {
  const hash = hashToken(token);
  const resetToken = await findValidPasswordResetToken(hash);

  if (!resetToken) {
    return null;
  }

  return resetToken.user_id;
}

/**
 * Reset password using a valid token
 */
export async function resetPassword(
  token: string,
  newPassword: string
): Promise<AuthResult> {
  // Validate password strength
  if (newPassword.length < 8) {
    return { success: false, error: 'Password must be at least 8 characters' };
  }

  const hash = hashToken(token);
  const resetToken = await findValidPasswordResetToken(hash);

  if (!resetToken) {
    return { success: false, error: 'Invalid or expired reset link' };
  }

  // Hash new password and update
  const passwordHash = await bcrypt.hash(newPassword, SALT_ROUNDS);
  await updateUserPassword(resetToken.user_id, passwordHash);

  // Mark token as used
  await markPasswordResetTokenUsed(resetToken.id);

  return { success: true, userId: resetToken.user_id };
}

/**
 * Change password for authenticated user
 */
export async function changePassword(
  userId: string,
  currentPassword: string,
  newPassword: string
): Promise<AuthResult> {
  // Validate new password strength
  if (newPassword.length < 8) {
    return { success: false, error: 'New password must be at least 8 characters' };
  }

  // Get user and verify current password
  const user = await getUserById(userId);
  if (!user || !user.password_hash) {
    return { success: false, error: 'User not found' };
  }

  const passwordValid = await bcrypt.compare(currentPassword, user.password_hash);
  if (!passwordValid) {
    return { success: false, error: 'Current password is incorrect' };
  }

  // Check new password isn't same as current
  const samePassword = await bcrypt.compare(newPassword, user.password_hash);
  if (samePassword) {
    return { success: false, error: 'New password must be different from current password' };
  }

  // Hash and update
  const passwordHash = await bcrypt.hash(newPassword, SALT_ROUNDS);
  await updateUserPassword(userId, passwordHash);

  return { success: true, userId };
}
