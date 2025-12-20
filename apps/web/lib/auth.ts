/**
 * Authentication utilities for ZUCA v2
 *
 * Uses JWT tokens stored in httpOnly cookies for security.
 * Supports two auth methods:
 * 1. Shared password (from ZUCA_PASSWORD env var)
 * 2. Invite codes (one-time use, creates user in DB)
 */

import { SignJWT, jwtVerify } from 'jose';
import { cookies } from 'next/headers';
import bcrypt from 'bcryptjs';
import { getUserById, createUser, validateInviteCode, useInviteCode } from './db';

// ============================================================================
// Constants
// ============================================================================

const JWT_SECRET = new TextEncoder().encode(
  process.env.JWT_SECRET || 'development-secret-change-in-production'
);
const COOKIE_NAME = 'auth-token';
const TOKEN_EXPIRY = '7d'; // 7 days

export interface JWTPayload {
  userId: string;
  type: 'password' | 'invite';
  iat: number;
  exp: number;
}

export interface AuthResult {
  success: boolean;
  error?: string;
  userId?: string;
}

// ============================================================================
// JWT Operations
// ============================================================================

export async function createToken(userId: string, type: 'password' | 'invite'): Promise<string> {
  return new SignJWT({ userId, type })
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
// Auth Methods
// ============================================================================

/**
 * Authenticate with the shared password
 */
export async function loginWithPassword(password: string): Promise<AuthResult> {
  const correctPassword = process.env.ZUCA_PASSWORD;

  if (!correctPassword) {
    return { success: false, error: 'Password authentication not configured' };
  }

  if (password !== correctPassword) {
    return { success: false, error: 'Invalid password' };
  }

  // For password auth, we use a fixed "admin" user ID
  const userId = 'password-user';
  const token = await createToken(userId, 'password');
  await setAuthCookie(token);

  return { success: true, userId };
}

/**
 * Authenticate with an invite code (creates a new user)
 */
export async function loginWithInviteCode(code: string, email?: string): Promise<AuthResult> {
  // Validate the invite code
  const isValid = await validateInviteCode(code);
  if (!isValid) {
    return { success: false, error: 'Invalid or expired invite code' };
  }

  // Use the invite code (increment usage count)
  const used = await useInviteCode(code);
  if (!used) {
    return { success: false, error: 'Failed to use invite code' };
  }

  // Create a new user
  const passwordHash = email ? await bcrypt.hash(code, 10) : null;
  const user = await createUser(email ?? null, passwordHash, code);

  // Create and set token
  const token = await createToken(user.id, 'invite');
  await setAuthCookie(token);

  return { success: true, userId: user.id };
}

// ============================================================================
// Session Validation
// ============================================================================

/**
 * Get the current authenticated user from the request
 */
export async function getCurrentUser(): Promise<{ userId: string; type: 'password' | 'invite' } | null> {
  const token = await getAuthCookie();
  if (!token) {
    return null;
  }

  const payload = await verifyToken(token);
  if (!payload) {
    return null;
  }

  // For password auth, skip DB check
  if (payload.type === 'password') {
    return { userId: payload.userId, type: 'password' };
  }

  // For invite auth, verify user exists and is active
  const user = await getUserById(payload.userId);
  if (!user) {
    return null;
  }

  return { userId: user.id, type: 'invite' };
}

/**
 * Require authentication - throws if not authenticated
 */
export async function requireAuth(): Promise<{ userId: string; type: 'password' | 'invite' }> {
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
