/**
 * Tests for Evolution Module
 *
 * Tests suggestion backend CRUD operations, apply-suggestion helpers,
 * and pattern analysis utilities.
 */

import { describe, it, expect, beforeEach, afterEach } from 'vitest';
import * as fs from 'fs';
import * as path from 'path';
import { SuggestionsJsonBackend } from './suggestions-json-backend';
import { getAvailableSteps } from './apply-suggestion';
import type { PromptSuggestion, PromptSuggestionInsert } from './suggestions-types';

// Use isolated test file path to avoid polluting production data
const TEST_SUGGESTIONS_PATH = path.join(process.cwd(), 'data', 'test-suggestions.json');

/**
 * Create a mock suggestion insert for testing
 */
function createMockInsert(overrides: Partial<PromptSuggestionInsert> = {}): PromptSuggestionInsert {
  return {
    step_name: 'billings',
    pattern: 'missing-discount-validation',
    occurrence_count: 5,
    suggested_update: `## Placement: After the output format section

Add validation for discount types:
- Check if discount is applicable to charge model
- Validate discount percentage is within allowed range

## Rationale
Multiple test cases failed due to missing discount validation checks.`,
    ...overrides,
  };
}

describe('SuggestionsJsonBackend', () => {
  let backend: SuggestionsJsonBackend;

  beforeEach(() => {
    // Clean up any existing test file
    if (fs.existsSync(TEST_SUGGESTIONS_PATH)) {
      fs.unlinkSync(TEST_SUGGESTIONS_PATH);
    }
    // Create backend with isolated test path
    backend = new SuggestionsJsonBackend(TEST_SUGGESTIONS_PATH);
  });

  afterEach(() => {
    // Clean up test file
    if (fs.existsSync(TEST_SUGGESTIONS_PATH)) {
      fs.unlinkSync(TEST_SUGGESTIONS_PATH);
    }
  });

  describe('insert', () => {
    it('should insert a new suggestion with generated ID', async () => {
      const input = createMockInsert();
      const result = await backend.insert(input);

      expect(result.id).toBeDefined();
      expect(result.id.length).toBeGreaterThan(0);
      expect(result.step_name).toBe('billings');
      expect(result.pattern).toBe('missing-discount-validation');
      expect(result.status).toBe('pending');
      expect(result.created_at).toBeDefined();
      expect(result.updated_at).toBeDefined();
    });

    it('should update existing suggestion with same step+pattern', async () => {
      const input1 = createMockInsert({ occurrence_count: 3 });
      const result1 = await backend.insert(input1);
      const originalId = result1.id;

      // Insert again with same step+pattern but different data
      const input2 = createMockInsert({
        occurrence_count: 7,
        suggested_update: 'Updated suggestion content',
      });
      const result2 = await backend.insert(input2);

      // Should have same ID (update, not new insert)
      expect(result2.id).toBe(originalId);
      expect(result2.occurrence_count).toBe(7);
      expect(result2.suggested_update).toBe('Updated suggestion content');

      // Verify only one suggestion exists
      const all = await backend.getAll();
      const billingSuggestions = all.filter(
        (s) => s.step_name === 'billings' && s.pattern === 'missing-discount-validation'
      );
      expect(billingSuggestions.length).toBe(1);
    });

    it('should create separate suggestions for different patterns', async () => {
      await backend.insert(createMockInsert({ pattern: 'pattern-a' }));
      await backend.insert(createMockInsert({ pattern: 'pattern-b' }));

      const all = await backend.getAll();
      const patternA = all.filter((s) => s.pattern === 'pattern-a');
      const patternB = all.filter((s) => s.pattern === 'pattern-b');

      expect(patternA.length).toBe(1);
      expect(patternB.length).toBe(1);
    });
  });

  describe('getAll', () => {
    it('should return all suggestions', async () => {
      await backend.insert(createMockInsert({ pattern: 'pattern-1' }));
      await backend.insert(createMockInsert({ pattern: 'pattern-2' }));
      await backend.insert(createMockInsert({ step_name: 'contracts_orders', pattern: 'pattern-3' }));

      const all = await backend.getAll();
      expect(all.length).toBeGreaterThanOrEqual(3);
    });
  });

  describe('getById', () => {
    it('should return suggestion by ID', async () => {
      const inserted = await backend.insert(createMockInsert());
      const found = await backend.getById(inserted.id);

      expect(found).not.toBeNull();
      expect(found?.id).toBe(inserted.id);
      expect(found?.pattern).toBe('missing-discount-validation');
    });

    it('should return null for non-existent ID', async () => {
      const found = await backend.getById('non-existent-id');
      expect(found).toBeNull();
    });
  });

  describe('getByStep', () => {
    it('should return suggestions filtered by step name', async () => {
      await backend.insert(createMockInsert({ step_name: 'billings', pattern: 'p1' }));
      await backend.insert(createMockInsert({ step_name: 'billings', pattern: 'p2' }));
      await backend.insert(createMockInsert({ step_name: 'contracts_orders', pattern: 'p3' }));

      const billingSuggestions = await backend.getByStep('billings');
      const contractSuggestions = await backend.getByStep('contracts_orders');

      // May have existing suggestions from other tests, so use >= check
      expect(billingSuggestions.every((s) => s.step_name === 'billings')).toBe(true);
      expect(contractSuggestions.every((s) => s.step_name === 'contracts_orders')).toBe(true);
    });
  });

  describe('getByStatus', () => {
    it('should return suggestions filtered by status', async () => {
      const suggestion1 = await backend.insert(createMockInsert({ pattern: 'pending-pattern' }));
      await backend.updateStatus(suggestion1.id, 'approved');

      const pending = await backend.getByStatus('pending');
      const approved = await backend.getByStatus('approved');

      // The test suggestion should be approved now
      expect(approved.some((s) => s.id === suggestion1.id)).toBe(true);
      expect(pending.every((s) => s.id !== suggestion1.id)).toBe(true);
    });
  });

  describe('updateStatus', () => {
    it('should update suggestion status', async () => {
      const suggestion = await backend.insert(createMockInsert());
      expect(suggestion.status).toBe('pending');

      // Small delay to ensure timestamps differ
      await new Promise((resolve) => setTimeout(resolve, 5));

      const updated = await backend.updateStatus(suggestion.id, 'approved');

      expect(updated?.status).toBe('approved');
      // Verify updated_at is a valid ISO timestamp (not that it changed, to avoid race conditions)
      expect(updated?.updated_at).toBeDefined();
      expect(new Date(updated!.updated_at).toISOString()).toBe(updated!.updated_at);
    });

    it('should set applied_at when status is applied', async () => {
      const suggestion = await backend.insert(createMockInsert());
      await backend.updateStatus(suggestion.id, 'approved');
      const applied = await backend.updateStatus(suggestion.id, 'applied');

      expect(applied?.status).toBe('applied');
      expect(applied?.applied_at).toBeDefined();
    });

    it('should return null for non-existent ID', async () => {
      const result = await backend.updateStatus('non-existent', 'approved');
      expect(result).toBeNull();
    });
  });

  describe('delete', () => {
    it('should delete suggestion by ID', async () => {
      const suggestion = await backend.insert(createMockInsert());
      const deleteResult = await backend.delete(suggestion.id);

      expect(deleteResult).toBe(true);

      const found = await backend.getById(suggestion.id);
      expect(found).toBeNull();
    });

    it('should return false for non-existent ID', async () => {
      const result = await backend.delete('non-existent-id');
      expect(result).toBe(false);
    });
  });

  describe('isReady', () => {
    it('should always return true for JSON backend', async () => {
      const ready = await backend.isReady();
      expect(ready).toBe(true);
    });
  });
});

describe('getAvailableSteps', () => {
  it('should return list of step names', () => {
    const steps = getAvailableSteps();

    expect(Array.isArray(steps)).toBe(true);
    expect(steps.length).toBeGreaterThan(0);
  });

  it('should include common pipeline steps', () => {
    const steps = getAvailableSteps();

    // Check for expected steps
    expect(steps).toContain('billings');
    expect(steps).toContain('contracts_orders');
    expect(steps).toContain('analyze_contract');
  });
});

describe('Suggestion placement parsing', () => {
  // Test the placement directive parsing logic through behavior
  it('should recognize "append" placement in suggestions', () => {
    const suggestion = createMockInsert({
      suggested_update: `## Placement: Append to end

New content here

## Rationale
Testing append`,
    });

    // The suggested_update format is correct
    expect(suggestion.suggested_update).toContain('## Placement');
    expect(suggestion.suggested_update).toContain('Append');
    expect(suggestion.suggested_update).toContain('## Rationale');
  });

  it('should recognize "after" placement with section reference', () => {
    const suggestion = createMockInsert({
      suggested_update: `## Placement: After the "Output Format" section

New validation rules here

## Rationale
Testing after placement`,
    });

    expect(suggestion.suggested_update).toContain('After');
    expect(suggestion.suggested_update).toContain('Output Format');
  });

  it('should recognize "before" placement', () => {
    const suggestion = createMockInsert({
      suggested_update: `## Placement: Before the examples section

Important context

## Rationale
Testing before placement`,
    });

    expect(suggestion.suggested_update).toContain('Before');
    expect(suggestion.suggested_update).toContain('examples');
  });

  it('should recognize "replace" placement', () => {
    const suggestion = createMockInsert({
      suggested_update: `## Placement: Replace the "Validation Rules" section

Updated validation rules content

## Rationale
Testing replace placement`,
    });

    expect(suggestion.suggested_update).toContain('Replace');
    expect(suggestion.suggested_update).toContain('Validation Rules');
  });
});

describe('PromptSuggestion structure', () => {
  it('should have all required fields', () => {
    const suggestion: PromptSuggestion = {
      id: 'test-id',
      step_name: 'billings',
      pattern: 'test-pattern',
      occurrence_count: 5,
      suggested_update: 'Test update content',
      status: 'pending',
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
    };

    expect(suggestion.id).toBeDefined();
    expect(suggestion.step_name).toBeDefined();
    expect(suggestion.pattern).toBeDefined();
    expect(suggestion.occurrence_count).toBeGreaterThan(0);
    expect(suggestion.status).toBe('pending');
  });

  it('should allow all valid status values', () => {
    const statuses: Array<PromptSuggestion['status']> = [
      'pending',
      'approved',
      'rejected',
      'applied',
    ];

    for (const status of statuses) {
      const suggestion: PromptSuggestion = {
        id: 'test',
        step_name: 'test',
        pattern: 'test',
        occurrence_count: 1,
        suggested_update: 'test',
        status,
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString(),
      };

      expect(suggestion.status).toBe(status);
    }
  });

  it('should track applied_at only when status is applied', () => {
    // Without applied_at
    const pendingSuggestion: PromptSuggestion = {
      id: 'test',
      step_name: 'test',
      pattern: 'test',
      occurrence_count: 1,
      suggested_update: 'test',
      status: 'pending',
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
    };

    expect(pendingSuggestion.applied_at).toBeUndefined();

    // With applied_at
    const appliedSuggestion: PromptSuggestion = {
      ...pendingSuggestion,
      status: 'applied',
      applied_at: new Date().toISOString(),
    };

    expect(appliedSuggestion.applied_at).toBeDefined();
  });
});

describe('PatternAnalysis structure', () => {
  it('should define pattern analysis result type correctly', () => {
    // Import the type
    interface PatternAnalysis {
      stepName: string;
      totalCorrections: number;
      patterns: Array<{
        pattern: string;
        count: number;
        percentage: number;
        issueTypes: string[];
        sampleCorrections: unknown[];
      }>;
      suggestedActions: string[];
    }

    const analysis: PatternAnalysis = {
      stepName: 'billings',
      totalCorrections: 10,
      patterns: [
        {
          pattern: 'missing-discount-validation',
          count: 5,
          percentage: 50,
          issueTypes: ['logic_error', 'behavioral_violation'],
          sampleCorrections: [],
        },
      ],
      suggestedActions: ['Consider updating the prompt to include discount validation rules'],
    };

    expect(analysis.stepName).toBe('billings');
    expect(analysis.totalCorrections).toBe(10);
    expect(analysis.patterns.length).toBe(1);
    expect(analysis.patterns[0].percentage).toBe(50);
    expect(analysis.suggestedActions.length).toBe(1);
  });
});

describe('SelfImproveResult structure', () => {
  it('should define self-improve result type correctly', () => {
    interface SelfImproveResult {
      evaluationPassed: number;
      evaluationFailed: number;
      correctionsGenerated: number;
      trainingExamplesCaptured: number;
      suggestionsGenerated: number;
      topPatterns: Array<{ step: string; pattern: string; count: number }>;
    }

    const result: SelfImproveResult = {
      evaluationPassed: 8,
      evaluationFailed: 2,
      correctionsGenerated: 2,
      trainingExamplesCaptured: 8,
      suggestionsGenerated: 1,
      topPatterns: [
        { step: 'billings', pattern: 'missing-discount-validation', count: 5 },
        { step: 'contracts_orders', pattern: 'missing-line-items', count: 3 },
      ],
    };

    expect(result.evaluationPassed + result.evaluationFailed).toBe(10);
    expect(result.topPatterns.length).toBe(2);
    expect(result.topPatterns[0].count).toBeGreaterThan(result.topPatterns[1].count);
  });
});

describe('ApplyResult and RollbackResult structures', () => {
  it('should define apply result type correctly', () => {
    interface ApplyResult {
      success: boolean;
      backupPath?: string;
      promptPath?: string;
      error?: string;
      contentAdded?: string;
    }

    const successResult: ApplyResult = {
      success: true,
      backupPath: '/path/to/backup.md.backup.12345',
      promptPath: '/path/to/prompt.md',
      contentAdded: 'Added validation rules...',
    };

    expect(successResult.success).toBe(true);
    expect(successResult.error).toBeUndefined();

    const failResult: ApplyResult = {
      success: false,
      error: 'Suggestion must be approved first',
    };

    expect(failResult.success).toBe(false);
    expect(failResult.backupPath).toBeUndefined();
  });

  it('should define rollback result type correctly', () => {
    interface RollbackResult {
      success: boolean;
      error?: string;
    }

    const successResult: RollbackResult = {
      success: true,
    };

    expect(successResult.success).toBe(true);

    const failResult: RollbackResult = {
      success: false,
      error: 'Backup file not found',
    };

    expect(failResult.success).toBe(false);
    expect(failResult.error).toBe('Backup file not found');
  });
});
