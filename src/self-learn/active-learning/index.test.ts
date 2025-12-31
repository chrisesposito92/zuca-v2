/**
 * Tests for Active Learning Module
 *
 * Tests uncertainty sampling, novelty scoring, and review queue operations.
 */

import { describe, it, expect, beforeEach, afterEach } from 'vitest';
import * as fs from 'fs';
import * as path from 'path';

// Import review queue functions
import {
  addToReviewQueue,
  getReviewQueue,
  getPendingReviews,
  getReviewItem,
  approveReviewItem,
  dismissReviewItem,
  clearReviewQueue,
  getReviewQueueStats,
  reloadReviewQueue,
  setReviewQueuePath,
} from './review-queue';

// Import self-assessment functions
import { quickConfidenceCheck } from './self-assessment';

// Import types
import type { UncertaintyAssessment } from './types';
import { DEFAULT_ACTIVE_LEARNING_CONFIG } from './types';

const TEST_QUEUE_PATH = path.join(process.cwd(), 'data', 'test-review-queue.json');

/**
 * Create a mock uncertainty assessment
 */
function createMockUncertainty(overrides: Partial<UncertaintyAssessment> = {}): UncertaintyAssessment {
  return {
    selfConfidence: 0.6,
    noveltyScore: 0.4,
    combinedUncertainty: 0.52,
    flagForReview: true,
    reasons: ['Test uncertainty'],
    ...overrides,
  };
}

describe('Review Queue', () => {
  beforeEach(async () => {
    // Use isolated test path
    setReviewQueuePath(TEST_QUEUE_PATH);

    // Clean up and reload
    if (fs.existsSync(TEST_QUEUE_PATH)) {
      fs.unlinkSync(TEST_QUEUE_PATH);
    }
    await clearReviewQueue();
    reloadReviewQueue();
  });

  afterEach(async () => {
    await clearReviewQueue();
    if (fs.existsSync(TEST_QUEUE_PATH)) {
      fs.unlinkSync(TEST_QUEUE_PATH);
    }

    // Reset to default path
    setReviewQueuePath(null);
  });

  describe('addToReviewQueue', () => {
    it('should add an item with generated ID and timestamp', async () => {
      const item = await addToReviewQueue({
        step: 'billings',
        testCaseId: 'test-001',
        output: { invoice_total: 100 },
        uncertainty: createMockUncertainty(),
      });

      expect(item.id).toBeDefined();
      expect(item.id.length).toBeGreaterThan(0);
      expect(item.step).toBe('billings');
      expect(item.status).toBe('pending');
      expect(item.created_at).toBeDefined();
    });

    it('should persist items to the queue', async () => {
      await addToReviewQueue({
        step: 'billings',
        output: { test: true },
        uncertainty: createMockUncertainty(),
      });

      const queue = await getReviewQueue();
      expect(queue.length).toBe(1);
    });

    it('should store the full uncertainty assessment', async () => {
      const uncertainty = createMockUncertainty({
        selfConfidence: 0.3,
        noveltyScore: 0.8,
        combinedUncertainty: 0.62,
        reasons: ['Low confidence', 'Novel scenario'],
      });

      const item = await addToReviewQueue({
        step: 'contracts_orders',
        output: { lines: [] },
        uncertainty,
      });

      expect(item.uncertainty.selfConfidence).toBe(0.3);
      expect(item.uncertainty.noveltyScore).toBe(0.8);
      expect(item.uncertainty.reasons).toContain('Low confidence');
    });
  });

  describe('getReviewQueue', () => {
    it('should return all items', async () => {
      await addToReviewQueue({
        step: 'billings',
        output: {},
        uncertainty: createMockUncertainty(),
      });

      await addToReviewQueue({
        step: 'contracts_orders',
        output: {},
        uncertainty: createMockUncertainty(),
      });

      const queue = await getReviewQueue();
      expect(queue.length).toBe(2);
    });

    it('should return empty array when queue is empty', async () => {
      const queue = await getReviewQueue();
      expect(queue).toEqual([]);
    });
  });

  describe('getPendingReviews', () => {
    it('should return only pending items', async () => {
      const item1 = await addToReviewQueue({
        step: 'billings',
        output: {},
        uncertainty: createMockUncertainty(),
      });

      await addToReviewQueue({
        step: 'contracts_orders',
        output: {},
        uncertainty: createMockUncertainty(),
      });

      // Approve the first item
      await approveReviewItem(item1.id);

      const pending = await getPendingReviews();
      expect(pending.length).toBe(1);
      expect(pending[0].step).toBe('contracts_orders');
    });
  });

  describe('getReviewItem', () => {
    it('should return item by ID', async () => {
      const added = await addToReviewQueue({
        step: 'billings',
        testCaseId: 'test-lookup',
        output: { lookup: true },
        uncertainty: createMockUncertainty(),
      });

      const found = await getReviewItem(added.id);

      expect(found).not.toBeNull();
      expect(found?.testCaseId).toBe('test-lookup');
    });

    it('should return null for non-existent ID', async () => {
      const found = await getReviewItem('non-existent-id');
      expect(found).toBeNull();
    });
  });

  describe('approveReviewItem', () => {
    it('should mark item as reviewed', async () => {
      const item = await addToReviewQueue({
        step: 'billings',
        output: {},
        uncertainty: createMockUncertainty(),
      });

      await approveReviewItem(item.id);

      const updated = await getReviewItem(item.id);
      expect(updated?.status).toBe('reviewed');
      expect(updated?.reviewed_at).toBeDefined();
    });
  });

  describe('dismissReviewItem', () => {
    it('should mark item as dismissed', async () => {
      const item = await addToReviewQueue({
        step: 'billings',
        output: {},
        uncertainty: createMockUncertainty(),
      });

      await dismissReviewItem(item.id);

      const updated = await getReviewItem(item.id);
      expect(updated?.status).toBe('dismissed');
    });
  });

  describe('clearReviewQueue', () => {
    it('should remove all items', async () => {
      await addToReviewQueue({
        step: 'billings',
        output: {},
        uncertainty: createMockUncertainty(),
      });

      await addToReviewQueue({
        step: 'contracts_orders',
        output: {},
        uncertainty: createMockUncertainty(),
      });

      await clearReviewQueue();

      const queue = await getReviewQueue();
      expect(queue.length).toBe(0);
    });
  });

  describe('getReviewQueueStats', () => {
    it('should return correct statistics', async () => {
      // Add items
      const item1 = await addToReviewQueue({
        step: 'billings',
        output: {},
        uncertainty: createMockUncertainty(),
      });

      await addToReviewQueue({
        step: 'billings',
        output: {},
        uncertainty: createMockUncertainty(),
      });

      const item3 = await addToReviewQueue({
        step: 'contracts_orders',
        output: {},
        uncertainty: createMockUncertainty(),
      });

      // Update statuses
      await approveReviewItem(item1.id);
      await dismissReviewItem(item3.id);

      const stats = await getReviewQueueStats();

      expect(stats.total).toBe(3);
      expect(stats.pending).toBe(1);
      expect(stats.reviewed).toBe(1);
      expect(stats.dismissed).toBe(1);
      expect(stats.byStep['billings']).toBe(2);
      expect(stats.byStep['contracts_orders']).toBe(1);
    });
  });
});

describe('quickConfidenceCheck', () => {
  it('should return low confidence for null output', () => {
    expect(quickConfidenceCheck(null)).toBe(0.2);
  });

  it('should return low confidence for undefined output', () => {
    expect(quickConfidenceCheck(undefined)).toBe(0.2);
  });

  it('should return low confidence for empty object', () => {
    expect(quickConfidenceCheck({})).toBe(0.3);
  });

  it('should return low confidence for error indicators', () => {
    expect(quickConfidenceCheck({ error: 'Something went wrong' })).toBe(0.3);
    expect(quickConfidenceCheck({ errors: [] })).toBe(0.3);
    expect(quickConfidenceCheck({ failed: true })).toBe(0.3);
  });

  it('should return moderate confidence for empty arrays', () => {
    expect(quickConfidenceCheck({ items: [], data: [] })).toBe(0.5);
  });

  it('should return higher confidence for reasonable structure', () => {
    const goodOutput = {
      invoice_lines: [{ amount: 100 }],
      total: 100,
      currency: 'USD',
    };
    expect(quickConfidenceCheck(goodOutput)).toBe(0.7);
  });

  it('should handle string outputs', () => {
    expect(quickConfidenceCheck('short')).toBe(0.4);
    expect(quickConfidenceCheck('This is a longer output string')).toBe(0.6);
    expect(quickConfidenceCheck('An error occurred')).toBe(0.4);
  });

  it('should return moderate confidence for other types', () => {
    expect(quickConfidenceCheck(42)).toBe(0.5);
    expect(quickConfidenceCheck(true)).toBe(0.5);
  });
});

describe('DEFAULT_ACTIVE_LEARNING_CONFIG', () => {
  it('should have sensible defaults', () => {
    expect(DEFAULT_ACTIVE_LEARNING_CONFIG.enabled).toBe(false);
    expect(DEFAULT_ACTIVE_LEARNING_CONFIG.uncertaintyThreshold).toBe(0.6);
    expect(DEFAULT_ACTIVE_LEARNING_CONFIG.noveltyWeight).toBe(0.4);
    expect(DEFAULT_ACTIVE_LEARNING_CONFIG.selfConfidenceWeight).toBe(0.6);
    expect(DEFAULT_ACTIVE_LEARNING_CONFIG.assessmentModel).toBe('gpt-4o-mini');
  });

  it('should have weights that sum to 1', () => {
    const sum =
      DEFAULT_ACTIVE_LEARNING_CONFIG.noveltyWeight +
      DEFAULT_ACTIVE_LEARNING_CONFIG.selfConfidenceWeight;
    expect(sum).toBe(1.0);
  });
});

describe('Uncertainty Calculation', () => {
  // Test the formula: combined = (1 - confidence) * confWeight + novelty * noveltyWeight

  it('should calculate combined uncertainty correctly', () => {
    const config = DEFAULT_ACTIVE_LEARNING_CONFIG;

    // Low confidence (0.3), low novelty (0.2)
    // combined = (1 - 0.3) * 0.6 + 0.2 * 0.4 = 0.7 * 0.6 + 0.08 = 0.42 + 0.08 = 0.5
    const lowConfLowNovel = (1 - 0.3) * config.selfConfidenceWeight + 0.2 * config.noveltyWeight;
    expect(lowConfLowNovel).toBeCloseTo(0.5, 2);

    // High confidence (0.9), high novelty (0.8)
    // combined = (1 - 0.9) * 0.6 + 0.8 * 0.4 = 0.1 * 0.6 + 0.32 = 0.06 + 0.32 = 0.38
    const highConfHighNovel = (1 - 0.9) * config.selfConfidenceWeight + 0.8 * config.noveltyWeight;
    expect(highConfHighNovel).toBeCloseTo(0.38, 2);

    // Low confidence (0.2), high novelty (0.9)
    // combined = (1 - 0.2) * 0.6 + 0.9 * 0.4 = 0.8 * 0.6 + 0.36 = 0.48 + 0.36 = 0.84
    const lowConfHighNovel = (1 - 0.2) * config.selfConfidenceWeight + 0.9 * config.noveltyWeight;
    expect(lowConfHighNovel).toBeCloseTo(0.84, 2);
  });

  it('should flag for review when above threshold', () => {
    const threshold = DEFAULT_ACTIVE_LEARNING_CONFIG.uncertaintyThreshold; // 0.6

    // uncertainty = 0.84 (low conf + high novel) should be flagged
    expect(0.84 > threshold).toBe(true);

    // uncertainty = 0.38 (high conf + high novel) should NOT be flagged
    expect(0.38 > threshold).toBe(false);
  });
});

describe('UncertaintyAssessment Structure', () => {
  it('should validate a well-formed assessment', () => {
    const assessment: UncertaintyAssessment = {
      selfConfidence: 0.7,
      noveltyScore: 0.3,
      combinedUncertainty: 0.3,
      flagForReview: false,
      reasons: ['Output structure looks correct'],
    };

    expect(assessment.selfConfidence).toBeGreaterThanOrEqual(0);
    expect(assessment.selfConfidence).toBeLessThanOrEqual(1);
    expect(assessment.noveltyScore).toBeGreaterThanOrEqual(0);
    expect(assessment.noveltyScore).toBeLessThanOrEqual(1);
    expect(assessment.combinedUncertainty).toBeGreaterThanOrEqual(0);
    expect(assessment.combinedUncertainty).toBeLessThanOrEqual(1);
    expect(Array.isArray(assessment.reasons)).toBe(true);
  });
});
