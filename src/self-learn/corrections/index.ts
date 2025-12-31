/**
 * Corrections Store
 *
 * Dual-backend storage for learned corrections.
 * Uses JSON for local dev, Postgres for production.
 * Follows the same pattern as src/rag/index.ts
 */

import { CorrectionsJsonBackend } from './json-backend';
import { CorrectionsPostgresBackend, clearEmbeddingCache } from './postgres-backend';
import type { CorrectionsBackend, Correction, CorrectionInsert } from './types';
import { debugLog } from '../../config';

// Re-export types
export * from './types';

// Re-export clustering types and functions
export * from './clustering-types';
export {
  clusterCorrections,
  findRelevantClusters,
  getClusterStats,
  clusterAllCorrections,
} from './clustering';

// Re-export maintenance functions
export {
  runMaintenance,
  listArchivedCorrections,
  restoreArchivedCorrection,
  getMaintenanceStats,
  formatMaintenanceReport,
  DEFAULT_THRESHOLDS,
} from './maintenance';

// Re-export cache utilities
export { clearEmbeddingCache };

/**
 * Check if we should use Postgres backend
 * Requires both POSTGRES_URL and USE_POSTGRES_CORRECTIONS=true
 */
function usePostgres(): boolean {
  return !!process.env.POSTGRES_URL && process.env.USE_POSTGRES_CORRECTIONS === 'true';
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
      debugLog('Using Postgres corrections backend');
      backend = new CorrectionsPostgresBackend({
        useEmbeddings: process.env.USE_CORRECTIONS_EMBEDDINGS !== 'false',
      });
    } else {
      debugLog('Using JSON corrections backend');
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
 * Get a single correction by ID
 */
export async function getCorrection(id: string): Promise<Correction | undefined> {
  const all = await getCorrectionsBackend().getAll();
  return all.find((c) => c.id === id);
}

/**
 * Check if corrections store is ready
 */
export async function isCorrectionsReady(): Promise<boolean> {
  return getCorrectionsBackend().isReady();
}
