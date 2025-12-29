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

/**
 * Generate embedding for a pattern/query
 */
async function embedText(text: string): Promise<number[]> {
  const openai = getOpenAI();
  const response = await openai.embeddings.create({
    model: 'text-embedding-3-small',
    input: text,
  });
  return response.data[0].embedding;
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
}
