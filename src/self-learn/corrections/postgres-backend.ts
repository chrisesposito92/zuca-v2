/**
 * Postgres Backend for Corrections Store
 *
 * Production-ready storage with pgvector for semantic search.
 * Uses the same interface as JSON backend for seamless switching.
 */

import { sql } from '@vercel/postgres';
import OpenAI from 'openai';
import type { CorrectionsBackend, Correction, CorrectionInsert } from './types';
import { debugLog } from '../../config';

// =============================================================================
// OpenAI Client & Embedding Generation
// =============================================================================

// OpenAI client for generating embeddings
let openaiClient: OpenAI | null = null;

function getOpenAI(): OpenAI {
  if (!openaiClient) {
    const apiKey = process.env.OPENAI_API_KEY;
    if (!apiKey) {
      throw new Error('OPENAI_API_KEY required for corrections embeddings');
    }
    openaiClient = new OpenAI({ apiKey });
  }
  return openaiClient;
}

// =============================================================================
// Embedding Cache (Performance Optimization)
// =============================================================================

interface CacheEntry {
  embedding: number[];
  timestamp: number;
}

/** LRU cache for embeddings to avoid redundant API calls */
class EmbeddingCache {
  private cache: Map<string, CacheEntry> = new Map();
  private maxSize: number;
  private ttlMs: number;

  constructor(maxSize = 100, ttlMinutes = 30) {
    this.maxSize = maxSize;
    this.ttlMs = ttlMinutes * 60 * 1000;
  }

  get(key: string): number[] | null {
    const entry = this.cache.get(key);
    if (!entry) return null;

    // Check if expired
    if (Date.now() - entry.timestamp > this.ttlMs) {
      this.cache.delete(key);
      return null;
    }

    // Move to end (LRU update)
    this.cache.delete(key);
    this.cache.set(key, entry);

    return entry.embedding;
  }

  set(key: string, embedding: number[]): void {
    // Evict oldest if at capacity
    if (this.cache.size >= this.maxSize) {
      const oldest = this.cache.keys().next().value;
      if (oldest) this.cache.delete(oldest);
    }

    this.cache.set(key, { embedding, timestamp: Date.now() });
  }

  clear(): void {
    this.cache.clear();
  }
}

const embeddingCache = new EmbeddingCache();

/**
 * Generate embedding for a pattern/query (with caching)
 */
async function embedText(text: string): Promise<number[]> {
  // Check cache first
  const cached = embeddingCache.get(text);
  if (cached) {
    debugLog('Embedding cache hit');
    return cached;
  }

  const openai = getOpenAI();
  const response = await openai.embeddings.create({
    model: 'text-embedding-3-small',
    input: text,
  });

  const embedding = response.data[0].embedding;

  // Cache the result
  embeddingCache.set(text, embedding);

  return embedding;
}

/**
 * Clear embedding cache (useful for testing)
 */
export function clearEmbeddingCache(): void {
  embeddingCache.clear();
}

/**
 * Database row type for corrections
 */
interface CorrectionRow {
  id: string;
  test_case_id: string;
  step_name: string;
  issue_type: string;
  pattern: string;
  input_summary: string;
  incorrect_output: unknown;
  expected_behavior: string;
  correction: string;
  example_fix: unknown;
  criteria_id: string | null;
  confidence: number;
  times_applied: number;
  success_rate: number;
  // Archive fields
  archived: boolean | null;
  archived_at: Date | null;
  archived_reason: string | null;
  last_maintained_at: Date | null;
  created_at: Date;
  updated_at: Date;
}

/**
 * Map database row to Correction type
 */
function rowToCorrection(row: CorrectionRow): Correction {
  return {
    id: row.id,
    test_case_id: row.test_case_id,
    step_name: row.step_name,
    issue_type: row.issue_type as Correction['issue_type'],
    pattern: row.pattern,
    input_summary: row.input_summary,
    incorrect_output: row.incorrect_output,
    expected_behavior: row.expected_behavior,
    correction: row.correction,
    example_fix: row.example_fix,
    criteria_id: row.criteria_id ?? undefined,
    confidence: row.confidence,
    times_applied: row.times_applied,
    success_rate: row.success_rate,
    // Archive fields
    archived: row.archived ?? false,
    archived_at: row.archived_at?.toISOString(),
    archived_reason: row.archived_reason ?? undefined,
    last_maintained_at: row.last_maintained_at?.toISOString(),
    created_at: row.created_at.toISOString(),
    updated_at: row.updated_at.toISOString(),
  };
}

/**
 * Postgres-based corrections backend with vector search
 */
export class CorrectionsPostgresBackend implements CorrectionsBackend {
  private useEmbeddings: boolean;

  constructor(options: { useEmbeddings?: boolean } = {}) {
    this.useEmbeddings = options.useEmbeddings ?? true;
  }

  /**
   * Insert a new correction (upsert on test_case_id + step_name + pattern)
   */
  async insert(input: CorrectionInsert): Promise<Correction> {
    debugLog('Postgres: inserting correction', { step: input.step_name, pattern: input.pattern });

    // Generate embedding for semantic search
    let embeddingStr: string | null = null;
    if (this.useEmbeddings) {
      try {
        const embedding = await embedText(`${input.pattern} ${input.input_summary}`);
        embeddingStr = `[${embedding.join(',')}]`;
      } catch (error) {
        debugLog('Failed to generate embedding, continuing without', error);
      }
    }

    // Upsert: insert or update on conflict
    const result = await sql<CorrectionRow>`
      INSERT INTO corrections (
        test_case_id, step_name, issue_type, pattern, pattern_embedding,
        input_summary, incorrect_output, expected_behavior, correction,
        example_fix, criteria_id, confidence
      )
      VALUES (
        ${input.test_case_id},
        ${input.step_name},
        ${input.issue_type},
        ${input.pattern},
        ${embeddingStr}::vector,
        ${input.input_summary},
        ${JSON.stringify(input.incorrect_output) ?? null}::jsonb,
        ${input.expected_behavior},
        ${input.correction},
        ${JSON.stringify(input.example_fix) ?? null}::jsonb,
        ${input.criteria_id ?? null},
        ${input.confidence ?? 1.0}
      )
      ON CONFLICT (test_case_id, step_name, pattern)
      DO UPDATE SET
        issue_type = EXCLUDED.issue_type,
        pattern_embedding = EXCLUDED.pattern_embedding,
        input_summary = EXCLUDED.input_summary,
        incorrect_output = EXCLUDED.incorrect_output,
        expected_behavior = EXCLUDED.expected_behavior,
        correction = EXCLUDED.correction,
        example_fix = EXCLUDED.example_fix,
        criteria_id = EXCLUDED.criteria_id,
        confidence = EXCLUDED.confidence,
        updated_at = NOW()
      RETURNING *
    `;

    return rowToCorrection(result.rows[0]);
  }

  /**
   * Search for relevant corrections using vector similarity or keyword matching
   * Excludes archived corrections by default
   */
  async search(query: string, stepName: string, limit = 3): Promise<Correction[]> {
    debugLog('Postgres: searching corrections', { query: query.substring(0, 50), stepName, limit });

    // Try vector search first if embeddings are enabled
    if (this.useEmbeddings) {
      try {
        const queryEmbedding = await embedText(query);
        const embeddingStr = `[${queryEmbedding.join(',')}]`;

        const result = await sql<CorrectionRow & { score: number }>`
          SELECT *,
            1 - (pattern_embedding <=> ${embeddingStr}::vector) as score
          FROM corrections
          WHERE step_name = ${stepName}
            AND pattern_embedding IS NOT NULL
            AND (archived IS NULL OR archived = false)
            AND 1 - (pattern_embedding <=> ${embeddingStr}::vector) >= 0.3
          ORDER BY pattern_embedding <=> ${embeddingStr}::vector
          LIMIT ${limit}
        `;

        if (result.rows.length > 0) {
          debugLog('Vector search found results', { count: result.rows.length });
          return result.rows.map(rowToCorrection);
        }
      } catch (error) {
        debugLog('Vector search failed, falling back to keyword search', error);
      }
    }

    // Fallback to keyword search using pattern matching
    const result = await sql<CorrectionRow>`
      SELECT *
      FROM corrections
      WHERE step_name = ${stepName}
        AND (archived IS NULL OR archived = false)
        AND (
          pattern ILIKE ${'%' + query + '%'}
          OR input_summary ILIKE ${'%' + query + '%'}
        )
      ORDER BY times_applied DESC, created_at DESC
      LIMIT ${limit}
    `;

    return result.rows.map(rowToCorrection);
  }

  /**
   * Get all corrections matching a pattern
   */
  async getByPattern(pattern: string): Promise<Correction[]> {
    const result = await sql<CorrectionRow>`
      SELECT * FROM corrections
      WHERE pattern = ${pattern}
      ORDER BY created_at DESC
    `;
    return result.rows.map(rowToCorrection);
  }

  /**
   * Get all corrections for a step
   */
  async getByStep(stepName: string): Promise<Correction[]> {
    const result = await sql<CorrectionRow>`
      SELECT * FROM corrections
      WHERE step_name = ${stepName}
      ORDER BY times_applied DESC, created_at DESC
    `;
    return result.rows.map(rowToCorrection);
  }

  /**
   * Get all corrections
   */
  async getAll(): Promise<Correction[]> {
    const result = await sql<CorrectionRow>`
      SELECT * FROM corrections
      ORDER BY step_name, times_applied DESC, created_at DESC
    `;
    return result.rows.map(rowToCorrection);
  }

  /**
   * Update stats after a correction is applied
   */
  async updateStats(id: string, applied: boolean, helped: boolean): Promise<void> {
    if (!applied) return;

    debugLog('Postgres: updating correction stats', { id, helped });

    // Calculate new success rate using weighted average
    await sql`
      UPDATE corrections
      SET
        times_applied = times_applied + 1,
        success_rate = CASE
          WHEN ${helped} THEN
            (success_rate * times_applied + 1) / (times_applied + 1)
          ELSE
            (success_rate * times_applied) / (times_applied + 1)
        END
      WHERE id = ${id}::uuid
    `;
  }

  /**
   * Get pattern frequencies for a step
   */
  async getPatternFrequencies(
    stepName: string
  ): Promise<Array<{ pattern: string; count: number }>> {
    const result = await sql<{ pattern: string; count: string }>`
      SELECT pattern, COUNT(*) as count
      FROM corrections
      WHERE step_name = ${stepName}
      GROUP BY pattern
      ORDER BY count DESC
    `;

    return result.rows.map((row) => ({
      pattern: row.pattern,
      count: parseInt(row.count, 10),
    }));
  }

  /**
   * Check if backend is ready
   */
  async isReady(): Promise<boolean> {
    try {
      const result = await sql<{ exists: boolean }>`
        SELECT EXISTS (
          SELECT FROM information_schema.tables
          WHERE table_name = 'corrections'
        ) as exists
      `;
      return result.rows[0]?.exists ?? false;
    } catch (error) {
      debugLog('Postgres corrections check failed', error);
      return false;
    }
  }

  /**
   * Get index statistics
   */
  async getStats(): Promise<{
    totalCorrections: number;
    byStep: Record<string, number>;
    withEmbeddings: number;
  }> {
    const totalResult = await sql<{ count: string }>`
      SELECT COUNT(*) as count FROM corrections
    `;

    const byStepResult = await sql<{ step_name: string; count: string }>`
      SELECT step_name, COUNT(*) as count
      FROM corrections
      GROUP BY step_name
    `;

    const embeddingsResult = await sql<{ count: string }>`
      SELECT COUNT(*) as count FROM corrections
      WHERE pattern_embedding IS NOT NULL
    `;

    const byStep: Record<string, number> = {};
    for (const row of byStepResult.rows) {
      byStep[row.step_name] = parseInt(row.count, 10);
    }

    return {
      totalCorrections: parseInt(totalResult.rows[0]?.count ?? '0', 10),
      byStep,
      withEmbeddings: parseInt(embeddingsResult.rows[0]?.count ?? '0', 10),
    };
  }

  // =========================================================================
  // Maintenance Methods (for correction lifecycle management)
  // =========================================================================

  /**
   * Get a correction by ID
   */
  async getById(id: string): Promise<Correction | null> {
    const result = await sql<CorrectionRow>`
      SELECT * FROM corrections WHERE id = ${id}::uuid
    `;
    return result.rows[0] ? rowToCorrection(result.rows[0]) : null;
  }

  /**
   * Archive a correction (mark as inactive)
   */
  async archiveCorrection(id: string, reason: string): Promise<void> {
    debugLog('Postgres: archiving correction', { id, reason });

    await sql`
      UPDATE corrections
      SET
        archived = true,
        archived_at = NOW(),
        archived_reason = ${reason},
        last_maintained_at = NOW(),
        updated_at = NOW()
      WHERE id = ${id}::uuid
    `;
  }

  /**
   * Restore an archived correction to active status
   */
  async restoreCorrection(id: string): Promise<void> {
    debugLog('Postgres: restoring correction', { id });

    await sql`
      UPDATE corrections
      SET
        archived = false,
        archived_at = NULL,
        archived_reason = NULL,
        last_maintained_at = NOW(),
        updated_at = NOW()
      WHERE id = ${id}::uuid
    `;
  }

  /**
   * List all archived corrections
   */
  async listArchived(): Promise<Correction[]> {
    const result = await sql<CorrectionRow>`
      SELECT * FROM corrections
      WHERE archived = true
      ORDER BY archived_at DESC
    `;
    return result.rows.map(rowToCorrection);
  }

  /**
   * Update confidence value for a correction
   */
  async updateConfidence(id: string, newConfidence: number): Promise<void> {
    debugLog('Postgres: updating confidence', { id, newConfidence });

    await sql`
      UPDATE corrections
      SET
        confidence = ${newConfidence},
        last_maintained_at = NOW(),
        updated_at = NOW()
      WHERE id = ${id}::uuid
    `;
  }
}
