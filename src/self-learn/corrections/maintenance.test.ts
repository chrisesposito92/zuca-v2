/**
 * Tests for Correction Maintenance Module
 *
 * Tests the lifecycle management: decay, archive, and promote operations.
 */

import { describe, it, expect, vi } from 'vitest';
import {
  runMaintenance,
  getMaintenanceStats,
  formatMaintenanceReport,
  DEFAULT_THRESHOLDS,
} from './maintenance';
import type { Correction, CorrectionsBackend, MaintenanceThresholds } from '../types';

/**
 * Create a mock correction with specified properties
 */
function createMockCorrection(overrides: Partial<Correction> = {}): Correction {
  const now = new Date().toISOString();
  return {
    id: `test-${Math.random().toString(36).slice(2)}`,
    test_case_id: 'test-case-001',
    step_name: 'billings',
    issue_type: 'logic_error',
    pattern: 'test-pattern',
    input_summary: 'Test input',
    expected_behavior: 'Expected behavior',
    correction: 'Test correction',
    confidence: 1.0,
    times_applied: 0,
    success_rate: 0,
    archived: false,
    created_at: now,
    updated_at: now,
    ...overrides,
  };
}

/**
 * Create a correction with a specific age in days
 */
function createAgedCorrection(ageDays: number, overrides: Partial<Correction> = {}): Correction {
  const created = new Date();
  created.setDate(created.getDate() - ageDays);
  return createMockCorrection({
    created_at: created.toISOString(),
    ...overrides,
  });
}

/**
 * Create a mock backend for testing
 */
function createMockBackend(corrections: Correction[]): CorrectionsBackend {
  const store = new Map(corrections.map((c) => [c.id, { ...c }]));

  return {
    insert: vi.fn(),
    search: vi.fn(),
    getByPattern: vi.fn(),
    getByStep: vi.fn(),
    getAll: vi.fn(async () => Array.from(store.values())),
    updateStats: vi.fn(),
    getPatternFrequencies: vi.fn(),
    isReady: vi.fn(async () => true),
    archiveCorrection: vi.fn(async (id: string, reason: string) => {
      const c = store.get(id);
      if (c) {
        c.archived = true;
        c.archived_reason = reason;
        c.archived_at = new Date().toISOString();
      }
    }),
    restoreCorrection: vi.fn(async (id: string) => {
      const c = store.get(id);
      if (c) {
        c.archived = false;
        c.archived_reason = undefined;
        c.archived_at = undefined;
      }
    }),
    updateConfidence: vi.fn(async (id: string, newConfidence: number) => {
      const c = store.get(id);
      if (c) {
        c.confidence = newConfidence;
        c.last_maintained_at = new Date().toISOString();
      }
    }),
    getById: vi.fn(async (id: string) => store.get(id) || null),
    listArchived: vi.fn(async () => Array.from(store.values()).filter((c) => c.archived)),
  };
}

describe('runMaintenance', () => {
  describe('decay', () => {
    it('should decay corrections that are old and rarely applied', async () => {
      // Correction older than 30 days with fewer than 3 applies
      const oldUnusedCorrection = createAgedCorrection(45, {
        id: 'old-unused',
        times_applied: 2,
        confidence: 1.0,
      });

      const backend = createMockBackend([oldUnusedCorrection]);
      const report = await runMaintenance(backend, { dryRun: false, verbose: false });

      expect(report.decayed).toBe(1);
      expect(report.actions[0].action).toBe('decay');
      expect(report.actions[0].correctionId).toBe('old-unused');
      expect(backend.updateConfidence).toHaveBeenCalledWith(
        'old-unused',
        expect.closeTo(0.9, 2)
      );
    });

    it('should not decay corrections that have been applied many times', async () => {
      // Old but frequently used
      const oldUsedCorrection = createAgedCorrection(45, {
        id: 'old-used',
        times_applied: 10,
        confidence: 1.0,
      });

      const backend = createMockBackend([oldUsedCorrection]);
      const report = await runMaintenance(backend, { dryRun: false, verbose: false });

      expect(report.decayed).toBe(0);
      expect(backend.updateConfidence).not.toHaveBeenCalled();
    });

    it('should not decay recent corrections', async () => {
      // New and unused
      const newCorrection = createAgedCorrection(5, {
        id: 'new-unused',
        times_applied: 0,
        confidence: 1.0,
      });

      const backend = createMockBackend([newCorrection]);
      const report = await runMaintenance(backend, { dryRun: false, verbose: false });

      expect(report.decayed).toBe(0);
    });

    it('should respect minimum confidence floor during decay', async () => {
      // Already low confidence
      const lowConfidenceCorrection = createAgedCorrection(45, {
        id: 'low-conf',
        times_applied: 1,
        confidence: 0.15,
      });

      const backend = createMockBackend([lowConfidenceCorrection]);
      const thresholds: MaintenanceThresholds = {
        ...DEFAULT_THRESHOLDS,
        minConfidence: 0.1,
      };

      await runMaintenance(backend, { dryRun: false, verbose: false }, thresholds);

      // Should decay but not below minConfidence
      expect(backend.updateConfidence).toHaveBeenCalledWith(
        'low-conf',
        expect.any(Number)
      );

      const callArgs = (backend.updateConfidence as ReturnType<typeof vi.fn>).mock.calls[0];
      expect(callArgs[1]).toBeGreaterThanOrEqual(0.1);
    });
  });

  describe('archive', () => {
    it('should archive corrections with low success rate after many applies', async () => {
      // Applied 15 times with only 10% success
      const ineffectiveCorrection = createMockCorrection({
        id: 'ineffective',
        times_applied: 15,
        success_rate: 0.1,
      });

      const backend = createMockBackend([ineffectiveCorrection]);
      const report = await runMaintenance(backend, { dryRun: false, verbose: false });

      expect(report.archived).toBe(1);
      expect(report.actions[0].action).toBe('archive');
      expect(backend.archiveCorrection).toHaveBeenCalledWith(
        'ineffective',
        expect.stringContaining('10.0% success rate')
      );
    });

    it('should not archive corrections without enough data', async () => {
      // Low success but not enough applies
      const notEnoughData = createMockCorrection({
        id: 'not-enough',
        times_applied: 5,
        success_rate: 0.1,
      });

      const backend = createMockBackend([notEnoughData]);
      const report = await runMaintenance(backend, { dryRun: false, verbose: false });

      expect(report.archived).toBe(0);
      expect(backend.archiveCorrection).not.toHaveBeenCalled();
    });

    it('should not archive already archived corrections', async () => {
      const alreadyArchived = createMockCorrection({
        id: 'already-archived',
        times_applied: 15,
        success_rate: 0.1,
        archived: true,
      });

      const backend = createMockBackend([alreadyArchived]);
      const report = await runMaintenance(backend, { dryRun: false, verbose: false });

      expect(report.archived).toBe(0);
    });

    it('should prioritize archive over decay', async () => {
      // Both old/unused (decay candidate) and ineffective (archive candidate)
      const shouldArchive = createAgedCorrection(45, {
        id: 'should-archive',
        times_applied: 12,
        success_rate: 0.15,
      });

      const backend = createMockBackend([shouldArchive]);
      const report = await runMaintenance(backend, { dryRun: false, verbose: false });

      // Should archive, not decay
      expect(report.archived).toBe(1);
      expect(report.decayed).toBe(0);
      expect(backend.archiveCorrection).toHaveBeenCalled();
      expect(backend.updateConfidence).not.toHaveBeenCalled();
    });
  });

  describe('promote', () => {
    it('should promote corrections with high success rate', async () => {
      const effectiveCorrection = createMockCorrection({
        id: 'effective',
        times_applied: 8,
        success_rate: 0.9,
        confidence: 0.8,
      });

      const backend = createMockBackend([effectiveCorrection]);
      const report = await runMaintenance(backend, { dryRun: false, verbose: false });

      expect(report.promoted).toBe(1);
      expect(report.actions[0].action).toBe('promote');
      expect(backend.updateConfidence).toHaveBeenCalledWith(
        'effective',
        expect.closeTo(0.88, 2)
      );
    });

    it('should not promote corrections already at max confidence', async () => {
      const maxConfidence = createMockCorrection({
        id: 'max-conf',
        times_applied: 10,
        success_rate: 0.95,
        confidence: 1.0,
      });

      const backend = createMockBackend([maxConfidence]);
      const report = await runMaintenance(backend, { dryRun: false, verbose: false });

      expect(report.promoted).toBe(0);
    });

    it('should cap promoted confidence at 1.0', async () => {
      const highConfidence = createMockCorrection({
        id: 'high-conf',
        times_applied: 10,
        success_rate: 0.95,
        confidence: 0.95,
      });

      const backend = createMockBackend([highConfidence]);
      await runMaintenance(backend, { dryRun: false, verbose: false });

      const callArgs = (backend.updateConfidence as ReturnType<typeof vi.fn>).mock.calls[0];
      expect(callArgs[1]).toBeLessThanOrEqual(1.0);
    });

    it('should not promote corrections without enough applies', async () => {
      const notEnoughApplies = createMockCorrection({
        id: 'not-enough',
        times_applied: 3,
        success_rate: 0.9,
        confidence: 0.7,
      });

      const backend = createMockBackend([notEnoughApplies]);
      const report = await runMaintenance(backend, { dryRun: false, verbose: false });

      expect(report.promoted).toBe(0);
    });
  });

  describe('dry run', () => {
    it('should not modify corrections in dry run mode', async () => {
      const corrections = [
        createAgedCorrection(45, { id: 'decay-candidate', times_applied: 1 }),
        createMockCorrection({ id: 'archive-candidate', times_applied: 15, success_rate: 0.1 }),
        createMockCorrection({ id: 'promote-candidate', times_applied: 10, success_rate: 0.9, confidence: 0.7 }),
      ];

      const backend = createMockBackend(corrections);
      const report = await runMaintenance(backend, { dryRun: true, verbose: false });

      // Should report actions but not execute them
      expect(report.dryRun).toBe(true);
      expect(report.actions.length).toBe(3);
      expect(backend.updateConfidence).not.toHaveBeenCalled();
      expect(backend.archiveCorrection).not.toHaveBeenCalled();
    });
  });

  describe('multiple corrections', () => {
    it('should process multiple corrections in a single run', async () => {
      const corrections = [
        createAgedCorrection(50, { id: 'decay-1', times_applied: 1 }),
        createAgedCorrection(40, { id: 'decay-2', times_applied: 2 }),
        createMockCorrection({ id: 'archive-1', times_applied: 20, success_rate: 0.05 }),
        createMockCorrection({ id: 'promote-1', times_applied: 15, success_rate: 0.85, confidence: 0.6 }),
        createMockCorrection({ id: 'promote-2', times_applied: 8, success_rate: 0.9, confidence: 0.75 }),
        createMockCorrection({ id: 'unchanged', times_applied: 5, success_rate: 0.5, confidence: 0.8 }),
      ];

      const backend = createMockBackend(corrections);
      const report = await runMaintenance(backend, { dryRun: false, verbose: false });

      expect(report.decayed).toBe(2);
      expect(report.archived).toBe(1);
      expect(report.promoted).toBe(2);
      expect(report.actions.length).toBe(5);
    });
  });
});

describe('getMaintenanceStats', () => {
  it('should return correct statistics', async () => {
    const corrections = [
      createAgedCorrection(50, { id: 'decay-pending', times_applied: 1 }),
      createMockCorrection({ id: 'archive-pending', times_applied: 15, success_rate: 0.1 }),
      createMockCorrection({ id: 'promote-pending', times_applied: 10, success_rate: 0.9, confidence: 0.7 }),
      createMockCorrection({ id: 'archived', archived: true }),
      createMockCorrection({ id: 'normal' }),
    ];

    const backend = createMockBackend(corrections);
    const stats = await getMaintenanceStats(backend);

    expect(stats.total).toBe(5);
    expect(stats.active).toBe(4);
    expect(stats.archived).toBe(1);
    expect(stats.pendingDecay).toBe(1);
    expect(stats.pendingArchive).toBe(1);
    expect(stats.pendingPromote).toBe(1);
  });
});

describe('formatMaintenanceReport', () => {
  it('should format a report for display', () => {
    const report = {
      runAt: '2024-01-15T10:30:00Z',
      dryRun: false,
      decayed: 2,
      archived: 1,
      promoted: 3,
      actions: [
        {
          correctionId: 'abc123456789',
          action: 'decay' as const,
          reason: 'Unused for 45 days',
          before: { confidence: 1.0 },
          after: { confidence: 0.9 },
        },
        {
          correctionId: 'def987654321',
          action: 'archive' as const,
          reason: 'Low success rate',
          before: { confidence: 0.8, archived: false },
          after: { confidence: 0.8, archived: true },
        },
      ],
    };

    const formatted = formatMaintenanceReport(report);

    expect(formatted).toContain('EXECUTED');
    expect(formatted).toContain('Decayed:  2');
    expect(formatted).toContain('Archived: 1');
    expect(formatted).toContain('Promoted: 3');
    expect(formatted).toContain('DECAY');
    expect(formatted).toContain('ARCHIVE');
    expect(formatted).toContain('abc12345');
  });

  it('should indicate dry run mode', () => {
    const report = {
      runAt: '2024-01-15T10:30:00Z',
      dryRun: true,
      decayed: 0,
      archived: 0,
      promoted: 0,
      actions: [],
    };

    const formatted = formatMaintenanceReport(report);
    expect(formatted).toContain('DRY RUN');
  });
});

describe('DEFAULT_THRESHOLDS', () => {
  it('should have sensible default values', () => {
    expect(DEFAULT_THRESHOLDS.decayAgeDays).toBe(30);
    expect(DEFAULT_THRESHOLDS.decayMinApplies).toBe(3);
    expect(DEFAULT_THRESHOLDS.decayFactor).toBe(0.9);
    expect(DEFAULT_THRESHOLDS.archiveMinApplies).toBe(10);
    expect(DEFAULT_THRESHOLDS.archiveThreshold).toBe(0.2);
    expect(DEFAULT_THRESHOLDS.promoteMinApplies).toBe(5);
    expect(DEFAULT_THRESHOLDS.promoteThreshold).toBe(0.8);
    expect(DEFAULT_THRESHOLDS.promoteFactor).toBe(1.1);
    expect(DEFAULT_THRESHOLDS.minConfidence).toBe(0.1);
  });
});
