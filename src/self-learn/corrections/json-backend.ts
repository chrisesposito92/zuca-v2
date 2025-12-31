/**
 * JSON Backend for Corrections Store
 *
 * Local file-based storage for development and testing.
 * Follows the same pattern as the RAG JSON backend.
 */

import * as fs from 'fs';
import * as path from 'path';
import { v4 as uuidv4 } from 'uuid';
import type {
  CorrectionsBackend,
  Correction,
  CorrectionInsert,
  CorrectionsIndex,
} from './types';
import { CorrectionsIndexSchema } from './types';

const DEFAULT_INDEX_PATH = path.join(process.cwd(), 'data', 'corrections-index.json');

// Note: cosineSimilarity function will be added in Phase 2 when embeddings are implemented

/**
 * JSON-based corrections backend for local development
 */
export class CorrectionsJsonBackend implements CorrectionsBackend {
  private indexPath: string;
  private index: CorrectionsIndex | null = null;

  constructor(indexPath: string = DEFAULT_INDEX_PATH) {
    this.indexPath = indexPath;
  }

  /**
   * Load the corrections index from disk
   */
  private loadIndex(): CorrectionsIndex {
    if (this.index) return this.index;

    if (fs.existsSync(this.indexPath)) {
      try {
        const data = fs.readFileSync(this.indexPath, 'utf-8');
        const parsed = JSON.parse(data);
        const validated = CorrectionsIndexSchema.safeParse(parsed);

        if (validated.success) {
          this.index = validated.data;
        } else {
          console.warn('Corrections index validation failed, creating new index');
          this.index = this.createEmptyIndex();
        }
      } catch (error) {
        console.warn('Failed to load corrections index, creating new:', error);
        this.index = this.createEmptyIndex();
      }
    } else {
      this.index = this.createEmptyIndex();
    }

    return this.index!;
  }

  /**
   * Create an empty index
   */
  private createEmptyIndex(): CorrectionsIndex {
    return {
      version: '1.0.0',
      updated_at: new Date().toISOString(),
      corrections: [],
    };
  }

  /**
   * Save the index to disk
   */
  private saveIndex(): void {
    if (!this.index) return;

    this.index.updated_at = new Date().toISOString();

    // Ensure directory exists
    const dir = path.dirname(this.indexPath);
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }

    fs.writeFileSync(this.indexPath, JSON.stringify(this.index, null, 2));
  }

  /**
   * Insert a new correction
   */
  async insert(input: CorrectionInsert): Promise<Correction> {
    const index = this.loadIndex();
    const now = new Date().toISOString();

    const correction: Correction = {
      id: uuidv4(),
      ...input,
      pattern_embedding: undefined, // Will be added in Phase 2 with embeddings
      times_applied: 0,
      success_rate: 0,
      archived: false,
      created_at: now,
      updated_at: now,
    };

    // Check for existing correction with same test case, step, and pattern
    const existingIdx = index.corrections.findIndex(
      (c) =>
        c.test_case_id === input.test_case_id &&
        c.step_name === input.step_name &&
        c.pattern === input.pattern
    );

    if (existingIdx >= 0) {
      // Update existing correction - preserve some fields
      const existing = index.corrections[existingIdx];
      correction.id = existing.id;
      correction.created_at = existing.created_at;
      correction.times_applied = existing.times_applied;
      correction.success_rate = existing.success_rate;
      correction.archived = existing.archived;
      correction.archived_at = existing.archived_at;
      correction.archived_reason = existing.archived_reason;
      correction.last_maintained_at = existing.last_maintained_at;
      index.corrections[existingIdx] = correction;
    } else {
      // Add new correction
      index.corrections.push(correction);
    }

    this.saveIndex();
    return correction;
  }

  /**
   * Search for relevant corrections by query and step
   * Note: Full semantic search will be added in Phase 2 with embeddings
   * For now, uses simple keyword matching on pattern field
   * Excludes archived corrections
   */
  async search(query: string, stepName: string, limit = 3): Promise<Correction[]> {
    const index = this.loadIndex();

    // Filter by step first, exclude archived
    const stepCorrections = index.corrections.filter(
      (c) => c.step_name === stepName && !c.archived
    );
    if (stepCorrections.length === 0) return [];

    // If embeddings exist, use cosine similarity
    const queryLower = query.toLowerCase();
    const scored = stepCorrections.map((c) => {
      // Simple keyword matching score for now
      const patternWords = c.pattern.toLowerCase().split(/[\s-_]+/);
      const queryWords = queryLower.split(/[\s-_]+/);

      let matchCount = 0;
      for (const pw of patternWords) {
        if (queryWords.some((qw) => qw.includes(pw) || pw.includes(qw))) {
          matchCount++;
        }
      }

      const keywordScore = patternWords.length > 0 ? matchCount / patternWords.length : 0;

      return {
        correction: c,
        score: keywordScore,
      };
    });

    // Sort by score and return top N
    return scored
      .filter((s) => s.score > 0)
      .sort((a, b) => b.score - a.score)
      .slice(0, limit)
      .map((s) => s.correction);
  }

  /**
   * Get all corrections matching a pattern
   */
  async getByPattern(pattern: string): Promise<Correction[]> {
    const index = this.loadIndex();
    return index.corrections.filter((c) => c.pattern === pattern);
  }

  /**
   * Get all corrections for a step
   */
  async getByStep(stepName: string): Promise<Correction[]> {
    const index = this.loadIndex();
    return index.corrections.filter((c) => c.step_name === stepName);
  }

  /**
   * Get all corrections
   */
  async getAll(): Promise<Correction[]> {
    const index = this.loadIndex();
    return index.corrections;
  }

  /**
   * Update stats after a correction is applied
   */
  async updateStats(id: string, applied: boolean, helped: boolean): Promise<void> {
    const index = this.loadIndex();
    const correction = index.corrections.find((c) => c.id === id);

    if (correction && applied) {
      correction.times_applied++;

      if (helped) {
        const totalHelped = correction.success_rate * (correction.times_applied - 1) + 1;
        correction.success_rate = totalHelped / correction.times_applied;
      } else {
        const totalHelped = correction.success_rate * (correction.times_applied - 1);
        correction.success_rate = totalHelped / correction.times_applied;
      }

      correction.updated_at = new Date().toISOString();
      this.saveIndex();
    }
  }

  /**
   * Get pattern frequencies for a step
   */
  async getPatternFrequencies(
    stepName: string
  ): Promise<Array<{ pattern: string; count: number }>> {
    const index = this.loadIndex();
    const patterns = new Map<string, number>();

    for (const c of index.corrections) {
      if (c.step_name === stepName) {
        patterns.set(c.pattern, (patterns.get(c.pattern) || 0) + 1);
      }
    }

    return Array.from(patterns.entries())
      .map(([pattern, count]) => ({ pattern, count }))
      .sort((a, b) => b.count - a.count);
  }

  /**
   * Check if backend is ready
   */
  async isReady(): Promise<boolean> {
    return true; // JSON backend is always ready
  }

  /**
   * Reload the index from disk
   */
  reload(): void {
    this.index = null;
  }

  /**
   * Get index statistics
   */
  getStats(): {
    totalCorrections: number;
    byStep: Record<string, number>;
    updatedAt: string;
  } {
    const index = this.loadIndex();
    const byStep: Record<string, number> = {};

    for (const c of index.corrections) {
      byStep[c.step_name] = (byStep[c.step_name] || 0) + 1;
    }

    return {
      totalCorrections: index.corrections.length,
      byStep,
      updatedAt: index.updated_at,
    };
  }

  // =========================================================================
  // Maintenance Methods (for correction lifecycle management)
  // =========================================================================

  /**
   * Get a correction by ID
   */
  async getById(id: string): Promise<Correction | null> {
    const index = this.loadIndex();
    return index.corrections.find((c) => c.id === id) ?? null;
  }

  /**
   * Archive a correction (mark as inactive)
   */
  async archiveCorrection(id: string, reason: string): Promise<void> {
    const index = this.loadIndex();
    const correction = index.corrections.find((c) => c.id === id);

    if (correction) {
      correction.archived = true;
      correction.archived_at = new Date().toISOString();
      correction.archived_reason = reason;
      correction.last_maintained_at = new Date().toISOString();
      correction.updated_at = new Date().toISOString();
      this.saveIndex();
    }
  }

  /**
   * Restore an archived correction to active status
   */
  async restoreCorrection(id: string): Promise<void> {
    const index = this.loadIndex();
    const correction = index.corrections.find((c) => c.id === id);

    if (correction) {
      correction.archived = false;
      correction.archived_at = undefined;
      correction.archived_reason = undefined;
      correction.last_maintained_at = new Date().toISOString();
      correction.updated_at = new Date().toISOString();
      this.saveIndex();
    }
  }

  /**
   * List all archived corrections
   */
  async listArchived(): Promise<Correction[]> {
    const index = this.loadIndex();
    return index.corrections.filter((c) => c.archived === true);
  }

  /**
   * Update confidence value for a correction
   */
  async updateConfidence(id: string, newConfidence: number): Promise<void> {
    const index = this.loadIndex();
    const correction = index.corrections.find((c) => c.id === id);

    if (correction) {
      correction.confidence = newConfidence;
      correction.last_maintained_at = new Date().toISOString();
      correction.updated_at = new Date().toISOString();
      this.saveIndex();
    }
  }
}
