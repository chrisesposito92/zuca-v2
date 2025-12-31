/**
 * Tests for JSON Backend Corrections Store
 *
 * Tests the local file-based storage for corrections used in development.
 */

import { describe, it, expect, beforeEach, afterEach } from 'vitest';
import * as fs from 'fs';
import * as path from 'path';
import { CorrectionsJsonBackend } from './json-backend';
import type { CorrectionInsert } from './types';

const TEST_INDEX_PATH = path.join(process.cwd(), 'data', 'test-corrections-index.json');

describe('CorrectionsJsonBackend', () => {
  let backend: CorrectionsJsonBackend;

  beforeEach(() => {
    // Clean up any existing test file
    if (fs.existsSync(TEST_INDEX_PATH)) {
      fs.unlinkSync(TEST_INDEX_PATH);
    }
    backend = new CorrectionsJsonBackend(TEST_INDEX_PATH);
  });

  afterEach(() => {
    // Clean up test file
    if (fs.existsSync(TEST_INDEX_PATH)) {
      fs.unlinkSync(TEST_INDEX_PATH);
    }
  });

  describe('insert', () => {
    it('should insert a new correction and assign an ID', async () => {
      const input: CorrectionInsert = {
        test_case_id: 'test-001',
        step_name: 'billings',
        issue_type: 'logic_error',
        pattern: 'missing-discount-validation',
        input_summary: 'Usage subscription with promotional discount',
        expected_behavior: 'Validate discount eligibility before applying',
        correction: 'Check discount type against charge model',
        confidence: 0.9,
      };

      const result = await backend.insert(input);

      expect(result.id).toBeDefined();
      expect(result.id.length).toBeGreaterThan(0);
      expect(result.test_case_id).toBe('test-001');
      expect(result.step_name).toBe('billings');
      expect(result.times_applied).toBe(0);
      expect(result.success_rate).toBe(0);
      expect(result.archived).toBe(false);
      expect(result.created_at).toBeDefined();
      expect(result.updated_at).toBeDefined();
    });

    it('should update existing correction with same test_case_id, step_name, and pattern', async () => {
      const input1: CorrectionInsert = {
        test_case_id: 'test-001',
        step_name: 'billings',
        issue_type: 'logic_error',
        pattern: 'missing-discount-validation',
        input_summary: 'Original summary',
        expected_behavior: 'Original behavior',
        correction: 'Original correction',
        confidence: 0.8,
      };

      const result1 = await backend.insert(input1);
      const originalId = result1.id;

      // Insert again with same key fields but different content
      const input2: CorrectionInsert = {
        test_case_id: 'test-001',
        step_name: 'billings',
        issue_type: 'behavioral_violation',
        pattern: 'missing-discount-validation',
        input_summary: 'Updated summary',
        expected_behavior: 'Updated behavior',
        correction: 'Updated correction',
        confidence: 0.95,
      };

      const result2 = await backend.insert(input2);

      // Should have same ID (update, not new insert)
      expect(result2.id).toBe(originalId);
      expect(result2.input_summary).toBe('Updated summary');
      expect(result2.correction).toBe('Updated correction');

      // Verify only one correction exists
      const all = await backend.getAll();
      expect(all.length).toBe(1);
    });

    it('should persist corrections to disk', async () => {
      const input: CorrectionInsert = {
        test_case_id: 'test-001',
        step_name: 'billings',
        issue_type: 'format_error',
        pattern: 'date-format-issue',
        input_summary: 'Test input',
        expected_behavior: 'Use ISO dates',
        correction: 'Format dates as ISO 8601',
        confidence: 1.0,
      };

      await backend.insert(input);

      // Create new backend instance to verify persistence
      const backend2 = new CorrectionsJsonBackend(TEST_INDEX_PATH);
      const all = await backend2.getAll();

      expect(all.length).toBe(1);
      expect(all[0].pattern).toBe('date-format-issue');
    });
  });

  describe('search', () => {
    beforeEach(async () => {
      // Insert test corrections
      await backend.insert({
        test_case_id: 'test-001',
        step_name: 'billings',
        issue_type: 'logic_error',
        pattern: 'discount-validation-missing',
        input_summary: 'Discount scenario',
        expected_behavior: 'Validate discounts',
        correction: 'Add validation',
        confidence: 0.9,
      });

      await backend.insert({
        test_case_id: 'test-002',
        step_name: 'billings',
        issue_type: 'wrong_calculation',
        pattern: 'proration-calculation-error',
        input_summary: 'Proration scenario',
        expected_behavior: 'Correct proration',
        correction: 'Fix calculation',
        confidence: 0.85,
      });

      await backend.insert({
        test_case_id: 'test-003',
        step_name: 'contracts_orders',
        issue_type: 'structural_error',
        pattern: 'missing-line-items',
        input_summary: 'Multi-line order',
        expected_behavior: 'Include all lines',
        correction: 'Iterate all charges',
        confidence: 0.95,
      });
    });

    it('should filter by step name', async () => {
      // Search uses keyword matching - query must contain relevant keywords
      const results = await backend.search('discount proration calculation', 'billings', 10);
      expect(results.length).toBe(2);
      expect(results.every((c) => c.step_name === 'billings')).toBe(true);
    });

    it('should match by keyword in pattern', async () => {
      const results = await backend.search('discount validation', 'billings', 10);
      expect(results.length).toBeGreaterThan(0);
      expect(results[0].pattern).toContain('discount');
    });

    it('should respect limit parameter', async () => {
      const results = await backend.search('', 'billings', 1);
      expect(results.length).toBeLessThanOrEqual(1);
    });

    it('should exclude archived corrections', async () => {
      // Archive one correction
      const all = await backend.getAll();
      const toArchive = all.find((c) => c.pattern === 'discount-validation-missing');
      if (toArchive) {
        await backend.archiveCorrection(toArchive.id, 'Test archive');
      }

      const results = await backend.search('discount', 'billings', 10);
      expect(results.every((c) => !c.archived)).toBe(true);
    });
  });

  describe('getByStep', () => {
    it('should return all corrections for a step', async () => {
      await backend.insert({
        test_case_id: 'test-001',
        step_name: 'billings',
        issue_type: 'logic_error',
        pattern: 'pattern-1',
        input_summary: 'Test',
        expected_behavior: 'Expected',
        correction: 'Fix',
        confidence: 1.0,
      });

      await backend.insert({
        test_case_id: 'test-002',
        step_name: 'billings',
        issue_type: 'logic_error',
        pattern: 'pattern-2',
        input_summary: 'Test',
        expected_behavior: 'Expected',
        correction: 'Fix',
        confidence: 1.0,
      });

      await backend.insert({
        test_case_id: 'test-003',
        step_name: 'contracts_orders',
        issue_type: 'logic_error',
        pattern: 'pattern-3',
        input_summary: 'Test',
        expected_behavior: 'Expected',
        correction: 'Fix',
        confidence: 1.0,
      });

      const billings = await backend.getByStep('billings');
      expect(billings.length).toBe(2);

      const contracts = await backend.getByStep('contracts_orders');
      expect(contracts.length).toBe(1);
    });
  });

  describe('updateStats', () => {
    it('should increment times_applied and update success_rate when helped', async () => {
      const inserted = await backend.insert({
        test_case_id: 'test-001',
        step_name: 'billings',
        issue_type: 'logic_error',
        pattern: 'test-pattern',
        input_summary: 'Test',
        expected_behavior: 'Expected',
        correction: 'Fix',
        confidence: 1.0,
      });

      // Apply and it helped
      await backend.updateStats(inserted.id, true, true);

      const updated = await backend.getById(inserted.id);
      expect(updated?.times_applied).toBe(1);
      expect(updated?.success_rate).toBe(1.0);

      // Apply again and it helped
      await backend.updateStats(inserted.id, true, true);

      const updated2 = await backend.getById(inserted.id);
      expect(updated2?.times_applied).toBe(2);
      expect(updated2?.success_rate).toBe(1.0);

      // Apply and it didn't help
      await backend.updateStats(inserted.id, true, false);

      const updated3 = await backend.getById(inserted.id);
      expect(updated3?.times_applied).toBe(3);
      expect(updated3?.success_rate).toBeCloseTo(0.667, 2);
    });

    it('should not update when applied is false', async () => {
      const inserted = await backend.insert({
        test_case_id: 'test-001',
        step_name: 'billings',
        issue_type: 'logic_error',
        pattern: 'test-pattern',
        input_summary: 'Test',
        expected_behavior: 'Expected',
        correction: 'Fix',
        confidence: 1.0,
      });

      await backend.updateStats(inserted.id, false, true);

      const updated = await backend.getById(inserted.id);
      expect(updated?.times_applied).toBe(0);
    });
  });

  describe('getPatternFrequencies', () => {
    it('should count pattern occurrences per step', async () => {
      // Insert multiple corrections with same patterns
      await backend.insert({
        test_case_id: 'test-001',
        step_name: 'billings',
        issue_type: 'logic_error',
        pattern: 'common-pattern',
        input_summary: 'Test 1',
        expected_behavior: 'Expected',
        correction: 'Fix',
        confidence: 1.0,
      });

      await backend.insert({
        test_case_id: 'test-002',
        step_name: 'billings',
        issue_type: 'logic_error',
        pattern: 'common-pattern',
        input_summary: 'Test 2',
        expected_behavior: 'Expected',
        correction: 'Fix',
        confidence: 1.0,
      });

      await backend.insert({
        test_case_id: 'test-003',
        step_name: 'billings',
        issue_type: 'logic_error',
        pattern: 'rare-pattern',
        input_summary: 'Test 3',
        expected_behavior: 'Expected',
        correction: 'Fix',
        confidence: 1.0,
      });

      const frequencies = await backend.getPatternFrequencies('billings');

      expect(frequencies.length).toBe(2);
      expect(frequencies[0].pattern).toBe('common-pattern');
      expect(frequencies[0].count).toBe(2);
      expect(frequencies[1].pattern).toBe('rare-pattern');
      expect(frequencies[1].count).toBe(1);
    });
  });

  describe('archive and restore', () => {
    it('should archive a correction with reason', async () => {
      const inserted = await backend.insert({
        test_case_id: 'test-001',
        step_name: 'billings',
        issue_type: 'logic_error',
        pattern: 'test-pattern',
        input_summary: 'Test',
        expected_behavior: 'Expected',
        correction: 'Fix',
        confidence: 1.0,
      });

      await backend.archiveCorrection(inserted.id, 'Low success rate');

      const archived = await backend.getById(inserted.id);
      expect(archived?.archived).toBe(true);
      expect(archived?.archived_reason).toBe('Low success rate');
      expect(archived?.archived_at).toBeDefined();
    });

    it('should restore an archived correction', async () => {
      const inserted = await backend.insert({
        test_case_id: 'test-001',
        step_name: 'billings',
        issue_type: 'logic_error',
        pattern: 'test-pattern',
        input_summary: 'Test',
        expected_behavior: 'Expected',
        correction: 'Fix',
        confidence: 1.0,
      });

      await backend.archiveCorrection(inserted.id, 'Test archive');
      await backend.restoreCorrection(inserted.id);

      const restored = await backend.getById(inserted.id);
      expect(restored?.archived).toBe(false);
      expect(restored?.archived_reason).toBeUndefined();
      expect(restored?.archived_at).toBeUndefined();
    });

    it('should list only archived corrections', async () => {
      await backend.insert({
        test_case_id: 'test-001',
        step_name: 'billings',
        issue_type: 'logic_error',
        pattern: 'active-pattern',
        input_summary: 'Test',
        expected_behavior: 'Expected',
        correction: 'Fix',
        confidence: 1.0,
      });

      const toArchive = await backend.insert({
        test_case_id: 'test-002',
        step_name: 'billings',
        issue_type: 'logic_error',
        pattern: 'archived-pattern',
        input_summary: 'Test',
        expected_behavior: 'Expected',
        correction: 'Fix',
        confidence: 1.0,
      });

      await backend.archiveCorrection(toArchive.id, 'Test');

      const archived = await backend.listArchived();
      expect(archived.length).toBe(1);
      expect(archived[0].pattern).toBe('archived-pattern');
    });
  });

  describe('updateConfidence', () => {
    it('should update confidence value', async () => {
      const inserted = await backend.insert({
        test_case_id: 'test-001',
        step_name: 'billings',
        issue_type: 'logic_error',
        pattern: 'test-pattern',
        input_summary: 'Test',
        expected_behavior: 'Expected',
        correction: 'Fix',
        confidence: 1.0,
      });

      await backend.updateConfidence(inserted.id, 0.5);

      const updated = await backend.getById(inserted.id);
      expect(updated?.confidence).toBe(0.5);
      expect(updated?.last_maintained_at).toBeDefined();
    });
  });

  describe('getStats', () => {
    it('should return correct statistics', async () => {
      await backend.insert({
        test_case_id: 'test-001',
        step_name: 'billings',
        issue_type: 'logic_error',
        pattern: 'pattern-1',
        input_summary: 'Test',
        expected_behavior: 'Expected',
        correction: 'Fix',
        confidence: 1.0,
      });

      await backend.insert({
        test_case_id: 'test-002',
        step_name: 'billings',
        issue_type: 'logic_error',
        pattern: 'pattern-2',
        input_summary: 'Test',
        expected_behavior: 'Expected',
        correction: 'Fix',
        confidence: 1.0,
      });

      await backend.insert({
        test_case_id: 'test-003',
        step_name: 'contracts_orders',
        issue_type: 'logic_error',
        pattern: 'pattern-3',
        input_summary: 'Test',
        expected_behavior: 'Expected',
        correction: 'Fix',
        confidence: 1.0,
      });

      const stats = backend.getStats();

      expect(stats.totalCorrections).toBe(3);
      expect(stats.byStep['billings']).toBe(2);
      expect(stats.byStep['contracts_orders']).toBe(1);
      expect(stats.updatedAt).toBeDefined();
    });
  });

  describe('isReady', () => {
    it('should always return true for JSON backend', async () => {
      const ready = await backend.isReady();
      expect(ready).toBe(true);
    });
  });

  describe('reload', () => {
    it('should clear cached index and reload from disk', async () => {
      await backend.insert({
        test_case_id: 'test-001',
        step_name: 'billings',
        issue_type: 'logic_error',
        pattern: 'original-pattern',
        input_summary: 'Test',
        expected_behavior: 'Expected',
        correction: 'Fix',
        confidence: 1.0,
      });

      // Directly modify the file (simulating external change)
      const data = JSON.parse(fs.readFileSync(TEST_INDEX_PATH, 'utf-8'));
      data.corrections[0].pattern = 'modified-pattern';
      fs.writeFileSync(TEST_INDEX_PATH, JSON.stringify(data, null, 2));

      // Before reload, cached value
      const beforeReload = await backend.getAll();
      expect(beforeReload[0].pattern).toBe('original-pattern');

      // After reload, reads from disk
      backend.reload();
      const afterReload = await backend.getAll();
      expect(afterReload[0].pattern).toBe('modified-pattern');
    });
  });
});
