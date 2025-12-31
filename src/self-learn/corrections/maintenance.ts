/**
 * Correction Maintenance Module
 *
 * Handles correction lifecycle management:
 * - Decay: Reduce confidence of stale, unused corrections
 * - Archive: Remove ineffective corrections from active use
 * - Promote: Boost confidence of proven effective corrections
 */

import type {
  Correction,
  CorrectionsBackend,
  MaintenanceOptions,
  MaintenanceReport,
  MaintenanceAction,
  MaintenanceThresholds,
} from '../types';

// Default thresholds for maintenance operations
export const DEFAULT_THRESHOLDS: MaintenanceThresholds = {
  decayAgeDays: 30, // Corrections unused for 30+ days
  decayMinApplies: 3, // Must have been applied < 3 times to decay
  decayFactor: 0.9, // Multiply confidence by 0.9
  archiveMinApplies: 10, // Need enough data to judge
  archiveThreshold: 0.2, // success_rate < 20% → archive
  promoteMinApplies: 5, // Need enough data to promote
  promoteThreshold: 0.8, // success_rate > 80% → promote
  promoteFactor: 1.1, // Multiply confidence by 1.1
  minConfidence: 0.1, // Floor for confidence after decay
};

/**
 * Calculate the age of a correction in days
 */
function getAgeDays(correction: Correction): number {
  const created = new Date(correction.created_at);
  const now = new Date();
  const diffMs = now.getTime() - created.getTime();
  return Math.floor(diffMs / (1000 * 60 * 60 * 24));
}

/**
 * Check if a correction should be decayed
 * Criteria: Old (> 30 days) AND rarely applied (< 3 times)
 */
function shouldDecay(
  correction: Correction,
  thresholds: MaintenanceThresholds
): boolean {
  if (correction.archived) return false;

  const age = getAgeDays(correction);
  const timesApplied = correction.times_applied ?? 0;

  return age > thresholds.decayAgeDays && timesApplied < thresholds.decayMinApplies;
}

/**
 * Check if a correction should be archived
 * Criteria: Applied enough times (>= 10) but ineffective (< 20% success)
 */
function shouldArchive(
  correction: Correction,
  thresholds: MaintenanceThresholds
): boolean {
  if (correction.archived) return false;

  const timesApplied = correction.times_applied ?? 0;
  const successRate = correction.success_rate ?? 0;

  return (
    timesApplied >= thresholds.archiveMinApplies &&
    successRate < thresholds.archiveThreshold
  );
}

/**
 * Check if a correction should be promoted
 * Criteria: Applied enough times (>= 5) AND effective (> 80% success)
 */
function shouldPromote(
  correction: Correction,
  thresholds: MaintenanceThresholds
): boolean {
  if (correction.archived) return false;

  const timesApplied = correction.times_applied ?? 0;
  const successRate = correction.success_rate ?? 0;
  const confidence = correction.confidence ?? 1.0;

  // Already at max confidence
  if (confidence >= 1.0) return false;

  return (
    timesApplied >= thresholds.promoteMinApplies &&
    successRate > thresholds.promoteThreshold
  );
}

/**
 * Run maintenance on all corrections
 */
export async function runMaintenance(
  backend: CorrectionsBackend,
  options: MaintenanceOptions = { dryRun: false, verbose: false },
  thresholds: MaintenanceThresholds = DEFAULT_THRESHOLDS
): Promise<MaintenanceReport> {
  const actions: MaintenanceAction[] = [];
  let decayed = 0;
  let archived = 0;
  let promoted = 0;

  // Get all active (non-archived) corrections
  const allCorrections = await backend.getAll();
  const activeCorrections = allCorrections.filter((c) => !c.archived);

  for (const correction of activeCorrections) {
    // Check for archive first (highest priority - ineffective should be removed)
    if (shouldArchive(correction, thresholds)) {
      const reason = `Applied ${correction.times_applied} times with ${((correction.success_rate ?? 0) * 100).toFixed(1)}% success rate (below ${thresholds.archiveThreshold * 100}% threshold)`;

      actions.push({
        correctionId: correction.id,
        action: 'archive',
        reason,
        before: { confidence: correction.confidence ?? 1.0, archived: false },
        after: { confidence: correction.confidence ?? 1.0, archived: true },
      });

      if (!options.dryRun && backend.archiveCorrection) {
        await backend.archiveCorrection(correction.id, reason);
      }
      archived++;
      continue; // Don't process further if archived
    }

    // Check for decay (stale corrections)
    if (shouldDecay(correction, thresholds)) {
      const currentConfidence = correction.confidence ?? 1.0;
      const newConfidence = Math.max(
        currentConfidence * thresholds.decayFactor,
        thresholds.minConfidence
      );

      const age = getAgeDays(correction);
      const reason = `Unused for ${age} days with only ${correction.times_applied ?? 0} applications`;

      actions.push({
        correctionId: correction.id,
        action: 'decay',
        reason,
        before: { confidence: currentConfidence },
        after: { confidence: newConfidence },
      });

      if (!options.dryRun && backend.updateConfidence) {
        await backend.updateConfidence(correction.id, newConfidence);
      }
      decayed++;
      continue; // Don't promote something we just decayed
    }

    // Check for promotion (effective corrections)
    if (shouldPromote(correction, thresholds)) {
      const currentConfidence = correction.confidence ?? 1.0;
      const newConfidence = Math.min(
        currentConfidence * thresholds.promoteFactor,
        1.0
      );

      const reason = `Applied ${correction.times_applied} times with ${((correction.success_rate ?? 0) * 100).toFixed(1)}% success rate`;

      actions.push({
        correctionId: correction.id,
        action: 'promote',
        reason,
        before: { confidence: currentConfidence },
        after: { confidence: newConfidence },
      });

      if (!options.dryRun && backend.updateConfidence) {
        await backend.updateConfidence(correction.id, newConfidence);
      }
      promoted++;
    }
  }

  return {
    runAt: new Date().toISOString(),
    dryRun: options.dryRun,
    decayed,
    archived,
    promoted,
    actions,
  };
}

/**
 * Get all archived corrections
 */
export async function listArchivedCorrections(
  backend: CorrectionsBackend
): Promise<Correction[]> {
  if (backend.listArchived) {
    return backend.listArchived();
  }

  // Fallback: filter from getAll()
  const all = await backend.getAll();
  return all.filter((c) => c.archived);
}

/**
 * Restore an archived correction
 */
export async function restoreArchivedCorrection(
  backend: CorrectionsBackend,
  correctionId: string
): Promise<void> {
  if (!backend.restoreCorrection) {
    throw new Error('Backend does not support restoring archived corrections');
  }

  await backend.restoreCorrection(correctionId);
}

/**
 * Get maintenance statistics for reporting
 */
export async function getMaintenanceStats(
  backend: CorrectionsBackend,
  thresholds: MaintenanceThresholds = DEFAULT_THRESHOLDS
): Promise<{
  total: number;
  active: number;
  archived: number;
  pendingDecay: number;
  pendingArchive: number;
  pendingPromote: number;
}> {
  const allCorrections = await backend.getAll();

  const active = allCorrections.filter((c) => !c.archived);
  const archivedList = allCorrections.filter((c) => c.archived);

  const pendingDecay = active.filter((c) => shouldDecay(c, thresholds));
  const pendingArchive = active.filter((c) => shouldArchive(c, thresholds));
  const pendingPromote = active.filter((c) => shouldPromote(c, thresholds));

  return {
    total: allCorrections.length,
    active: active.length,
    archived: archivedList.length,
    pendingDecay: pendingDecay.length,
    pendingArchive: pendingArchive.length,
    pendingPromote: pendingPromote.length,
  };
}

/**
 * Format a maintenance report for display
 */
export function formatMaintenanceReport(report: MaintenanceReport): string {
  const lines: string[] = [];

  lines.push(`Maintenance Report (${report.dryRun ? 'DRY RUN' : 'EXECUTED'})`);
  lines.push(`Run at: ${report.runAt}`);
  lines.push('');
  lines.push(`Summary:`);
  lines.push(`  Decayed:  ${report.decayed}`);
  lines.push(`  Archived: ${report.archived}`);
  lines.push(`  Promoted: ${report.promoted}`);

  if (report.actions.length > 0) {
    lines.push('');
    lines.push('Actions:');
    for (const action of report.actions) {
      const icon =
        action.action === 'archive' ? '📦' : action.action === 'decay' ? '📉' : '📈';
      lines.push(
        `  ${icon} ${action.action.toUpperCase()} [${action.correctionId.slice(0, 8)}...]`
      );
      lines.push(`     ${action.reason}`);
      if (action.action !== 'archive') {
        lines.push(
          `     Confidence: ${action.before.confidence.toFixed(2)} → ${action.after.confidence.toFixed(2)}`
        );
      }
    }
  }

  return lines.join('\n');
}
