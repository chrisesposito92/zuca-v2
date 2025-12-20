/**
 * Database client for Vercel Postgres
 *
 * Uses @vercel/postgres for serverless-compatible PostgreSQL connections.
 * All database operations go through this module.
 */

import { sql } from '@vercel/postgres';
import type { ZucaInput, ZucaOutput } from '@zuca/types';
import type { UCGeneratorInput, UCGeneratorOutput } from '@zuca/types/uc-generator';

// ============================================================================
// Types
// ============================================================================

export type SessionType = 'analyze' | 'uc-generate';
export type SessionStatus = 'pending' | 'running' | 'completed' | 'failed';
export type MessageRole = 'user' | 'assistant';

export interface DbSession {
  id: string;
  created_at: Date;
  updated_at: Date;
  session_type: SessionType;
  input: ZucaInput | UCGeneratorInput;
  result: ZucaOutput | UCGeneratorOutput | null;
  status: SessionStatus;
  current_step: number;
  error_message: string | null;
  user_id: string | null;
}

export interface DbMessage {
  id: string;
  session_id: string;
  role: MessageRole;
  content: string;
  message_type: string;
  created_at: Date;
  sequence_number: number;
}

export interface DbUser {
  id: string;
  email: string | null;
  password_hash: string | null;
  invite_code_used: string | null;
  is_active: boolean;
  created_at: Date;
}

export interface DbInviteCode {
  code: string;
  max_uses: number;
  use_count: number;
  expires_at: Date | null;
  is_active: boolean;
  created_at: Date;
}

// ============================================================================
// Session Operations
// ============================================================================

export async function createSession(
  sessionType: SessionType,
  input: ZucaInput | UCGeneratorInput,
  userId?: string
): Promise<DbSession> {
  const result = await sql<DbSession>`
    INSERT INTO sessions (session_type, input, user_id, status)
    VALUES (${sessionType}, ${JSON.stringify(input)}, ${userId ?? null}, 'pending')
    RETURNING *
  `;
  return result.rows[0];
}

export async function getSession(id: string): Promise<DbSession | null> {
  const result = await sql<DbSession>`
    SELECT * FROM sessions WHERE id = ${id}
  `;
  return result.rows[0] ?? null;
}

export async function listSessions(
  userId?: string,
  limit = 50,
  offset = 0
): Promise<DbSession[]> {
  if (userId) {
    const result = await sql<DbSession>`
      SELECT * FROM sessions
      WHERE user_id = ${userId}
      ORDER BY created_at DESC
      LIMIT ${limit} OFFSET ${offset}
    `;
    return result.rows;
  }

  const result = await sql<DbSession>`
    SELECT * FROM sessions
    ORDER BY created_at DESC
    LIMIT ${limit} OFFSET ${offset}
  `;
  return result.rows;
}

export async function updateSessionStatus(
  id: string,
  status: SessionStatus,
  currentStep?: number,
  errorMessage?: string
): Promise<void> {
  if (currentStep !== undefined && errorMessage !== undefined) {
    await sql`
      UPDATE sessions
      SET status = ${status}, current_step = ${currentStep}, error_message = ${errorMessage}
      WHERE id = ${id}
    `;
  } else if (currentStep !== undefined) {
    await sql`
      UPDATE sessions
      SET status = ${status}, current_step = ${currentStep}
      WHERE id = ${id}
    `;
  } else if (errorMessage !== undefined) {
    await sql`
      UPDATE sessions
      SET status = ${status}, error_message = ${errorMessage}
      WHERE id = ${id}
    `;
  } else {
    await sql`
      UPDATE sessions
      SET status = ${status}
      WHERE id = ${id}
    `;
  }
}

export async function updateSessionResult(
  id: string,
  result: ZucaOutput | UCGeneratorOutput
): Promise<void> {
  await sql`
    UPDATE sessions
    SET result = ${JSON.stringify(result)}, status = 'completed'
    WHERE id = ${id}
  `;
}

export async function updateSessionInput(
  id: string,
  input: ZucaInput | UCGeneratorInput
): Promise<void> {
  await sql`
    UPDATE sessions
    SET input = ${JSON.stringify(input)}
    WHERE id = ${id}
  `;
}

export async function deleteSession(id: string): Promise<boolean> {
  const result = await sql`
    DELETE FROM sessions WHERE id = ${id}
  `;
  return (result.rowCount ?? 0) > 0;
}

// ============================================================================
// Message Operations
// ============================================================================

export async function addMessage(
  sessionId: string,
  role: MessageRole,
  content: string,
  messageType = 'text'
): Promise<DbMessage> {
  // Get the next sequence number
  const seqResult = await sql<{ max_seq: number }>`
    SELECT COALESCE(MAX(sequence_number), 0) + 1 as max_seq
    FROM messages
    WHERE session_id = ${sessionId}
  `;
  const sequenceNumber = seqResult.rows[0]?.max_seq ?? 1;

  const result = await sql<DbMessage>`
    INSERT INTO messages (session_id, role, content, message_type, sequence_number)
    VALUES (${sessionId}, ${role}, ${content}, ${messageType}, ${sequenceNumber})
    RETURNING *
  `;
  return result.rows[0];
}

export async function getMessages(sessionId: string): Promise<DbMessage[]> {
  const result = await sql<DbMessage>`
    SELECT * FROM messages
    WHERE session_id = ${sessionId}
    ORDER BY sequence_number ASC
  `;
  return result.rows;
}

// ============================================================================
// User Operations
// ============================================================================

export async function createUser(
  email: string | null,
  passwordHash: string | null,
  inviteCodeUsed: string | null
): Promise<DbUser> {
  const result = await sql<DbUser>`
    INSERT INTO auth_users (email, password_hash, invite_code_used)
    VALUES (${email}, ${passwordHash}, ${inviteCodeUsed})
    RETURNING *
  `;
  return result.rows[0];
}

export async function getUserByEmail(email: string): Promise<DbUser | null> {
  const result = await sql<DbUser>`
    SELECT * FROM auth_users WHERE email = ${email} AND is_active = true
  `;
  return result.rows[0] ?? null;
}

export async function getUserById(id: string): Promise<DbUser | null> {
  const result = await sql<DbUser>`
    SELECT * FROM auth_users WHERE id = ${id} AND is_active = true
  `;
  return result.rows[0] ?? null;
}

// ============================================================================
// Invite Code Operations
// ============================================================================

export async function validateInviteCode(code: string): Promise<boolean> {
  const result = await sql<DbInviteCode>`
    SELECT * FROM invite_codes
    WHERE code = ${code}
      AND is_active = true
      AND use_count < max_uses
      AND (expires_at IS NULL OR expires_at > NOW())
  `;
  return result.rows.length > 0;
}

export async function useInviteCode(code: string): Promise<boolean> {
  const result = await sql`
    UPDATE invite_codes
    SET use_count = use_count + 1
    WHERE code = ${code}
      AND is_active = true
      AND use_count < max_uses
      AND (expires_at IS NULL OR expires_at > NOW())
  `;
  return (result.rowCount ?? 0) > 0;
}

export async function createInviteCode(
  code: string,
  maxUses = 1,
  expiresAt?: Date
): Promise<DbInviteCode> {
  const expiresAtStr = expiresAt ? expiresAt.toISOString() : null;
  const result = await sql<DbInviteCode>`
    INSERT INTO invite_codes (code, max_uses, expires_at)
    VALUES (${code}, ${maxUses}, ${expiresAtStr})
    RETURNING *
  `;
  return result.rows[0];
}

// ============================================================================
// Feedback Types & Operations
// ============================================================================

export type FeedbackTargetType = 'session' | 'summary' | 'contracts' | 'billings' | 'revrec';
export type FeedbackRating = 'positive' | 'negative';

export interface DbFeedback {
  id: string;
  session_id: string;
  user_id: string | null;
  target_type: FeedbackTargetType;
  rating: FeedbackRating;
  comment: string | null;
  created_at: Date;
}

export async function createFeedback(
  sessionId: string,
  targetType: FeedbackTargetType,
  rating: FeedbackRating,
  userId?: string,
  comment?: string
): Promise<DbFeedback> {
  const result = await sql<DbFeedback>`
    INSERT INTO feedback (session_id, user_id, target_type, rating, comment)
    VALUES (${sessionId}, ${userId ?? null}, ${targetType}, ${rating}, ${comment ?? null})
    RETURNING *
  `;
  return result.rows[0];
}

export async function getFeedbackForSession(sessionId: string): Promise<DbFeedback[]> {
  const result = await sql<DbFeedback>`
    SELECT * FROM feedback
    WHERE session_id = ${sessionId}
    ORDER BY created_at ASC
  `;
  return result.rows;
}

export async function getFeedbackStats(): Promise<{
  total: number;
  positive: number;
  negative: number;
  byTarget: Record<string, { positive: number; negative: number }>;
}> {
  const result = await sql<{ target_type: string; rating: string; count: string }>`
    SELECT target_type, rating, COUNT(*) as count
    FROM feedback
    GROUP BY target_type, rating
  `;

  const stats = {
    total: 0,
    positive: 0,
    negative: 0,
    byTarget: {} as Record<string, { positive: number; negative: number }>,
  };

  for (const row of result.rows) {
    const count = parseInt(row.count, 10);
    stats.total += count;

    if (row.rating === 'positive') {
      stats.positive += count;
    } else {
      stats.negative += count;
    }

    if (!stats.byTarget[row.target_type]) {
      stats.byTarget[row.target_type] = { positive: 0, negative: 0 };
    }
    stats.byTarget[row.target_type][row.rating as FeedbackRating] += count;
  }

  return stats;
}

// ============================================================================
// Bug Report Types & Operations
// ============================================================================

export type BugReportStatus = 'pending' | 'submitted' | 'failed';

export interface BugReportContext {
  sessionInput?: ZucaInput | UCGeneratorInput;
  sessionResult?: ZucaOutput | UCGeneratorOutput | null;
  sessionStatus?: string;
  errorMessage?: string;
  browserInfo?: {
    userAgent: string;
    language: string;
    platform: string;
    screenSize: string;
  };
  url?: string;
  timestamp?: string;
}

export interface DbBugReport {
  id: string;
  session_id: string | null;
  user_id: string | null;
  title: string;
  description: string;
  context: BugReportContext | null;
  github_issue_url: string | null;
  github_issue_number: number | null;
  status: BugReportStatus;
  created_at: Date;
}

export async function createBugReport(
  title: string,
  description: string,
  sessionId?: string,
  userId?: string,
  context?: BugReportContext
): Promise<DbBugReport> {
  const result = await sql<DbBugReport>`
    INSERT INTO bug_reports (session_id, user_id, title, description, context, status)
    VALUES (
      ${sessionId ?? null},
      ${userId ?? null},
      ${title},
      ${description},
      ${context ? JSON.stringify(context) : null},
      'pending'
    )
    RETURNING *
  `;
  return result.rows[0];
}

export async function updateBugReportGitHub(
  id: string,
  issueUrl: string,
  issueNumber: number
): Promise<void> {
  await sql`
    UPDATE bug_reports
    SET github_issue_url = ${issueUrl},
        github_issue_number = ${issueNumber},
        status = 'submitted'
    WHERE id = ${id}
  `;
}

export async function markBugReportFailed(id: string): Promise<void> {
  await sql`
    UPDATE bug_reports
    SET status = 'failed'
    WHERE id = ${id}
  `;
}

export async function getBugReport(id: string): Promise<DbBugReport | null> {
  const result = await sql<DbBugReport>`
    SELECT * FROM bug_reports WHERE id = ${id}
  `;
  return result.rows[0] ?? null;
}

export async function listBugReports(
  status?: BugReportStatus,
  limit = 50
): Promise<DbBugReport[]> {
  if (status) {
    const result = await sql<DbBugReport>`
      SELECT * FROM bug_reports
      WHERE status = ${status}
      ORDER BY created_at DESC
      LIMIT ${limit}
    `;
    return result.rows;
  }

  const result = await sql<DbBugReport>`
    SELECT * FROM bug_reports
    ORDER BY created_at DESC
    LIMIT ${limit}
  `;
  return result.rows;
}
