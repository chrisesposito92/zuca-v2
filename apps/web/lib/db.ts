/**
 * Database client for Vercel Postgres
 *
 * Uses @vercel/postgres for serverless-compatible PostgreSQL connections.
 * All database operations go through this module.
 */

import { sql } from '@vercel/postgres';
import type { ZucaInput, ZucaOutput } from '@zuca/types';
import type { RevenueSnapshotInput, RevenueSnapshotOutput } from '@zuca/types/revenue-snapshot';
import type { UCGeneratorInput, UCGeneratorOutput } from '@zuca/types/uc-generator';
import type { HTMLTemplateRequest, HTMLTemplateOutput } from '@zuca/types/html-template';

// ============================================================================
// Types
// ============================================================================

export type SessionType = 'analyze' | 'uc-generate' | 'revenue-snapshot' | 'html-builder';
export type SessionStatus = 'pending' | 'running' | 'completed' | 'failed';
export type MessageRole = 'user' | 'assistant';

export interface DbSession {
  id: string;
  created_at: Date;
  updated_at: Date;
  session_type: SessionType;
  input: ZucaInput | UCGeneratorInput | RevenueSnapshotInput | HTMLTemplateRequest;
  result: ZucaOutput | UCGeneratorOutput | RevenueSnapshotOutput | HTMLTemplateOutput | null;
  status: SessionStatus;
  current_step: number;
  error_message: string | null;
  user_id: string | null;
  llm_model: string | null;
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

export interface DbZuoraConnection {
  id: string;
  user_id: string;
  tenant_name: string;
  base_url: string;
  client_id: string;
  client_secret_encrypted: string;
  is_active: boolean;
  created_at: Date;
  updated_at: Date;
}

// ============================================================================
// Session Operations
// ============================================================================

export async function createSession(
  sessionType: SessionType,
  input: ZucaInput | UCGeneratorInput | RevenueSnapshotInput,
  userId?: string | null,
  llmModel?: string | null
): Promise<DbSession> {
  const result = await sql<DbSession>`
    INSERT INTO sessions (session_type, input, user_id, status, llm_model)
    VALUES (${sessionType}, ${JSON.stringify(input)}, ${userId ?? null}, 'pending', ${llmModel ?? null})
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
  userId?: string | null,
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
  result: ZucaOutput | UCGeneratorOutput | RevenueSnapshotOutput
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

export async function updateSessionModel(id: string, model: string | null): Promise<void> {
  await sql`
    UPDATE sessions
    SET llm_model = ${model}
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
// Zuora Connection Operations
// ============================================================================

export async function upsertZuoraConnection(
  userId: string,
  tenantName: string,
  baseUrl: string,
  clientId: string,
  clientSecretEncrypted: string,
  setActive = true
): Promise<DbZuoraConnection> {
  if (setActive) {
    await sql`
      UPDATE zuora_connections
      SET is_active = false
      WHERE user_id = ${userId}
    `;
  }

  const result = await sql<DbZuoraConnection>`
    INSERT INTO zuora_connections (user_id, tenant_name, base_url, client_id, client_secret_encrypted, is_active)
    VALUES (${userId}, ${tenantName}, ${baseUrl}, ${clientId}, ${clientSecretEncrypted}, ${setActive})
    ON CONFLICT (user_id, tenant_name)
    DO UPDATE SET
      base_url = EXCLUDED.base_url,
      client_id = EXCLUDED.client_id,
      client_secret_encrypted = EXCLUDED.client_secret_encrypted,
      is_active = EXCLUDED.is_active,
      updated_at = NOW()
    RETURNING *
  `;
  return result.rows[0];
}

export async function listZuoraConnections(userId: string): Promise<DbZuoraConnection[]> {
  const result = await sql<DbZuoraConnection>`
    SELECT * FROM zuora_connections
    WHERE user_id = ${userId}
    ORDER BY updated_at DESC
  `;
  return result.rows;
}

export async function getActiveZuoraConnection(userId: string): Promise<DbZuoraConnection | null> {
  const result = await sql<DbZuoraConnection>`
    SELECT * FROM zuora_connections
    WHERE user_id = ${userId} AND is_active = true
    ORDER BY updated_at DESC
    LIMIT 1
  `;
  return result.rows[0] ?? null;
}

export async function getZuoraConnectionById(
  userId: string,
  connectionId: string
): Promise<DbZuoraConnection | null> {
  const result = await sql<DbZuoraConnection>`
    SELECT * FROM zuora_connections
    WHERE user_id = ${userId} AND id = ${connectionId}
  `;
  return result.rows[0] ?? null;
}

export async function setActiveZuoraConnection(
  userId: string,
  connectionId: string
): Promise<DbZuoraConnection | null> {
  await sql`
    UPDATE zuora_connections
    SET is_active = false
    WHERE user_id = ${userId}
  `;

  const result = await sql<DbZuoraConnection>`
    UPDATE zuora_connections
    SET is_active = true, updated_at = NOW()
    WHERE user_id = ${userId} AND id = ${connectionId}
    RETURNING *
  `;
  return result.rows[0] ?? null;
}

export async function deleteZuoraConnection(
  userId: string,
  connectionId: string
): Promise<boolean> {
  const result = await sql<DbZuoraConnection>`
    DELETE FROM zuora_connections
    WHERE user_id = ${userId} AND id = ${connectionId}
    RETURNING *
  `;
  const deleted = result.rows[0];
  if (!deleted) return false;

  if (deleted.is_active) {
    const next = await sql<DbZuoraConnection>`
      SELECT * FROM zuora_connections
      WHERE user_id = ${userId}
      ORDER BY updated_at DESC
      LIMIT 1
    `;
    const nextRow = next.rows[0];
    if (nextRow) {
      await sql`
        UPDATE zuora_connections
        SET is_active = true, updated_at = NOW()
        WHERE id = ${nextRow.id}
      `;
    }
  }

  return true;
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

export async function clearMessages(sessionId: string): Promise<void> {
  await sql`
    DELETE FROM messages
    WHERE session_id = ${sessionId}
  `;
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

// ============================================================================
// RAG Vector Operations (pgvector)
// ============================================================================

export type ZuoraProduct = 'zuora-billing' | 'zuora-platform' | 'zuora-revenue';

export interface DbDocChunk {
  id: string;
  content: string;
  embedding: number[];
  title: string;
  url: string;
  product: ZuoraProduct;
  section: string | null;
  filename: string;
  created_at: Date;
}

export interface VectorSearchResult {
  chunk: Omit<DbDocChunk, 'embedding'>;
  score: number;
}

/**
 * Search for similar document chunks using cosine similarity
 */
export async function searchDocChunks(
  queryEmbedding: number[],
  options: {
    product?: ZuoraProduct;
    limit?: number;
    minScore?: number;
  } = {}
): Promise<VectorSearchResult[]> {
  const { product, limit = 5, minScore = 0.3 } = options;

  // Format embedding as pgvector string: '[0.1,0.2,...]'
  const embeddingStr = `[${queryEmbedding.join(',')}]`;

  // Use cosine distance (1 - similarity), so we subtract from 1 for score
  if (product) {
    const result = await sql<{
      id: string;
      content: string;
      title: string;
      url: string;
      product: string;
      section: string | null;
      filename: string;
      created_at: Date;
      score: number;
    }>`
      SELECT
        id, content, title, url, product, section, filename, created_at,
        1 - (embedding <=> ${embeddingStr}::vector) as score
      FROM doc_chunks
      WHERE product = ${product}
        AND 1 - (embedding <=> ${embeddingStr}::vector) >= ${minScore}
      ORDER BY embedding <=> ${embeddingStr}::vector
      LIMIT ${limit}
    `;
    return result.rows.map(row => ({
      chunk: {
        id: row.id,
        content: row.content,
        title: row.title,
        url: row.url,
        product: row.product as ZuoraProduct,
        section: row.section,
        filename: row.filename,
        created_at: row.created_at,
      },
      score: row.score,
    }));
  }

  const result = await sql<{
    id: string;
    content: string;
    title: string;
    url: string;
    product: string;
    section: string | null;
    filename: string;
    created_at: Date;
    score: number;
  }>`
    SELECT
      id, content, title, url, product, section, filename, created_at,
      1 - (embedding <=> ${embeddingStr}::vector) as score
    FROM doc_chunks
    WHERE 1 - (embedding <=> ${embeddingStr}::vector) >= ${minScore}
    ORDER BY embedding <=> ${embeddingStr}::vector
    LIMIT ${limit}
  `;
  return result.rows.map(row => ({
    chunk: {
      id: row.id,
      content: row.content,
      title: row.title,
      url: row.url,
      product: row.product as ZuoraProduct,
      section: row.section,
      filename: row.filename,
      created_at: row.created_at,
    },
    score: row.score,
  }));
}

/**
 * Insert a document chunk (for migration)
 */
export async function insertDocChunk(chunk: {
  id: string;
  content: string;
  embedding: number[];
  title: string;
  url: string;
  product: ZuoraProduct;
  section?: string | null;
  filename: string;
}): Promise<void> {
  const embeddingStr = `[${chunk.embedding.join(',')}]`;
  await sql`
    INSERT INTO doc_chunks (id, content, embedding, title, url, product, section, filename)
    VALUES (
      ${chunk.id},
      ${chunk.content},
      ${embeddingStr}::vector,
      ${chunk.title},
      ${chunk.url},
      ${chunk.product},
      ${chunk.section ?? null},
      ${chunk.filename}
    )
    ON CONFLICT (id) DO UPDATE SET
      content = EXCLUDED.content,
      embedding = EXCLUDED.embedding,
      title = EXCLUDED.title,
      url = EXCLUDED.url,
      product = EXCLUDED.product,
      section = EXCLUDED.section,
      filename = EXCLUDED.filename
  `;
}

/**
 * Batch insert document chunks (for migration)
 */
export async function insertDocChunksBatch(chunks: Array<{
  id: string;
  content: string;
  embedding: number[];
  title: string;
  url: string;
  product: ZuoraProduct;
  section?: string | null;
  filename: string;
}>): Promise<void> {
  // Insert in batches to avoid hitting query size limits
  for (const chunk of chunks) {
    await insertDocChunk(chunk);
  }
}

/**
 * Get count of document chunks
 */
export async function getDocChunkCount(): Promise<number> {
  const result = await sql<{ count: string }>`
    SELECT COUNT(*) as count FROM doc_chunks
  `;
  return parseInt(result.rows[0]?.count ?? '0', 10);
}

/**
 * Check if RAG index exists in database
 */
export async function isRagIndexReady(): Promise<boolean> {
  const count = await getDocChunkCount();
  return count > 0;
}
