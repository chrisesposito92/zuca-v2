/**
 * Corrections Store
 *
 * Dual-backend storage for learned corrections.
 * Uses JSON for local dev, Postgres for production.
 * Follows the same pattern as src/rag/index.ts
 */

import { CorrectionsJsonBackend } from './json-backend';
// import { CorrectionsPostgresBackend } from './postgres-backend'; // Phase 4
import type { CorrectionsBackend, Correction, CorrectionInsert } from './types';

// Re-export types
export * from './types';

/**
 * Check if we should use Postgres backend
 */
function usePostgres(): boolean {
  return !!process.env.POSTGRES_URL && !!process.env.USE_POSTGRES_CORRECTIONS;
}

/**
 * Singleton backend instance
 */
let backend: CorrectionsBackend | null = null;

/**
 * Get the corrections backend (creates singleton on first call)
 */
export function getCorrectionsBackend(): CorrectionsBackend {
  if (!backend) {
    if (usePostgres()) {
      // Phase 4: Postgres backend
      // backend = new CorrectionsPostgresBackend();
      console.warn('Postgres corrections backend not yet implemented, falling back to JSON');
      backend = new CorrectionsJsonBackend();
    } else {
      backend = new CorrectionsJsonBackend();
    }
  }
  return backend;
}

/**
 * Reset the backend (useful for testing)
 */
export function resetCorrectionsBackend(): void {
  backend = null;
}

// =============================================================================
// Convenience Functions
// =============================================================================

/**
 * Store a new correction
 */
export async function storeCorrection(correction: CorrectionInsert): Promise<Correction> {
  return getCorrectionsBackend().insert(correction);
}

/**
 * Find relevant corrections for a query and step
 */
export async function findRelevantCorrections(
  query: string,
  stepName: string,
  limit = 3
): Promise<Correction[]> {
  return getCorrectionsBackend().search(query, stepName, limit);
}

/**
 * Get pattern frequency statistics for a step
 */
export async function getPatternStats(
  stepName: string
): Promise<Array<{ pattern: string; count: number }>> {
  return getCorrectionsBackend().getPatternFrequencies(stepName);
}

/**
 * Get all corrections for a step
 */
export async function getCorrectionsForStep(stepName: string): Promise<Correction[]> {
  return getCorrectionsBackend().getByStep(stepName);
}

/**
 * Get all corrections
 */
export async function getAllCorrections(): Promise<Correction[]> {
  return getCorrectionsBackend().getAll();
}

/**
 * Check if corrections store is ready
 */
export async function isCorrectionsReady(): Promise<boolean> {
  return getCorrectionsBackend().isReady();
}
