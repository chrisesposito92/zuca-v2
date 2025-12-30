/**
 * Postgres Backend for Prompt Suggestions
 *
 * Production-ready storage using Vercel Postgres.
 * Uses the same interface as JSON backend for seamless switching.
 */

import { sql } from '@vercel/postgres';
import { debugLog } from '../../config';
import type {
  SuggestionsBackend,
  PromptSuggestion,
  PromptSuggestionInsert,
  PromptSuggestionStatus,
} from './suggestions-types';

/**
 * Database row type for prompt suggestions
 */
interface SuggestionRow {
  id: string;
  step_name: string;
  pattern: string;
  occurrence_count: number;
  suggested_update: string;
  status: string;
  applied_at: Date | null;
  created_at: Date;
  updated_at: Date;
}

/**
 * Map database row to PromptSuggestion type
 */
function rowToSuggestion(row: SuggestionRow): PromptSuggestion {
  return {
    id: row.id,
    step_name: row.step_name,
    pattern: row.pattern,
    occurrence_count: row.occurrence_count,
    suggested_update: row.suggested_update,
    status: row.status as PromptSuggestionStatus,
    applied_at: row.applied_at?.toISOString(),
    created_at: row.created_at.toISOString(),
    updated_at: row.updated_at.toISOString(),
  };
}

/**
 * Postgres-based suggestions backend
 */
export class SuggestionsPostgresBackend implements SuggestionsBackend {
  /**
   * Insert a new suggestion (upsert on step_name + pattern)
   */
  async insert(input: PromptSuggestionInsert): Promise<PromptSuggestion> {
    debugLog('Postgres: inserting suggestion', { step: input.step_name, pattern: input.pattern });

    const result = await sql<SuggestionRow>`
      INSERT INTO prompt_suggestions (
        step_name, pattern, occurrence_count, suggested_update
      )
      VALUES (
        ${input.step_name},
        ${input.pattern},
        ${input.occurrence_count},
        ${input.suggested_update}
      )
      ON CONFLICT (step_name, pattern) WHERE status = 'pending'
      DO UPDATE SET
        occurrence_count = EXCLUDED.occurrence_count,
        suggested_update = EXCLUDED.suggested_update,
        updated_at = NOW()
      RETURNING *
    `;

    return rowToSuggestion(result.rows[0]);
  }

  /**
   * Get all suggestions
   */
  async getAll(): Promise<PromptSuggestion[]> {
    const result = await sql<SuggestionRow>`
      SELECT * FROM prompt_suggestions
      ORDER BY created_at DESC
    `;
    return result.rows.map(rowToSuggestion);
  }

  /**
   * Get a suggestion by ID
   */
  async getById(id: string): Promise<PromptSuggestion | null> {
    const result = await sql<SuggestionRow>`
      SELECT * FROM prompt_suggestions
      WHERE id = ${id}::uuid
    `;
    return result.rows[0] ? rowToSuggestion(result.rows[0]) : null;
  }

  /**
   * Get all suggestions for a specific step
   */
  async getByStep(stepName: string): Promise<PromptSuggestion[]> {
    const result = await sql<SuggestionRow>`
      SELECT * FROM prompt_suggestions
      WHERE step_name = ${stepName}
      ORDER BY created_at DESC
    `;
    return result.rows.map(rowToSuggestion);
  }

  /**
   * Get suggestions by status
   */
  async getByStatus(status: PromptSuggestionStatus): Promise<PromptSuggestion[]> {
    const result = await sql<SuggestionRow>`
      SELECT * FROM prompt_suggestions
      WHERE status = ${status}
      ORDER BY created_at DESC
    `;
    return result.rows.map(rowToSuggestion);
  }

  /**
   * Update suggestion status
   */
  async updateStatus(id: string, status: PromptSuggestionStatus): Promise<PromptSuggestion | null> {
    debugLog('Postgres: updating suggestion status', { id, status });

    const result = await sql<SuggestionRow>`
      UPDATE prompt_suggestions
      SET
        status = ${status},
        applied_at = CASE WHEN ${status} = 'applied' THEN NOW() ELSE applied_at END,
        updated_at = NOW()
      WHERE id = ${id}::uuid
      RETURNING *
    `;

    return result.rows[0] ? rowToSuggestion(result.rows[0]) : null;
  }

  /**
   * Delete a suggestion
   */
  async delete(id: string): Promise<boolean> {
    debugLog('Postgres: deleting suggestion', { id });

    const result = await sql`
      DELETE FROM prompt_suggestions
      WHERE id = ${id}::uuid
      RETURNING id
    `;

    return (result.rowCount ?? 0) > 0;
  }

  /**
   * Check if backend is ready (table exists)
   */
  async isReady(): Promise<boolean> {
    try {
      const result = await sql<{ exists: boolean }>`
        SELECT EXISTS (
          SELECT FROM information_schema.tables
          WHERE table_name = 'prompt_suggestions'
        ) as exists
      `;
      return result.rows[0]?.exists ?? false;
    } catch (error) {
      debugLog('Postgres suggestions check failed', error);
      return false;
    }
  }
}
