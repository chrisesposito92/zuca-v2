/**
 * Tests for Corrections Injector Module
 *
 * Tests the formatting and context generation for few-shot correction injection.
 */

import { describe, it, expect, beforeEach, afterEach } from 'vitest';
import {
  formatCorrectionForPrompt,
  formatCorrectionsSection,
  buildInputSummary,
  startCorrectionTracking,
  getRunContext,
  clearRunContext,
  startEffectivenessTracking,
  recordEffectivenessOutcomes,
  getEffectivenessSummary,
  clearEffectivenessLog,
} from './index';
import type { Correction } from '../types';

/**
 * Create a mock correction for testing
 */
function createMockCorrection(overrides: Partial<Correction> = {}): Correction {
  const now = new Date().toISOString();
  return {
    id: 'test-correction-001',
    test_case_id: 'test-case-001',
    step_name: 'billings',
    issue_type: 'logic_error',
    pattern: 'Missing discount validation',
    input_summary: 'Usage subscription with promotional discount',
    expected_behavior: 'Validate discount eligibility before applying to charge',
    correction: 'Check discount type against charge model compatibility',
    confidence: 0.9,
    times_applied: 5,
    success_rate: 0.8,
    archived: false,
    created_at: now,
    updated_at: now,
    ...overrides,
  };
}

describe('formatCorrectionForPrompt', () => {
  it('should format a basic correction with contrastive structure', () => {
    const correction = createMockCorrection();
    const formatted = formatCorrectionForPrompt(correction);

    // Should have header with pattern
    expect(formatted).toContain('## 🔧 Past Mistake: Missing discount validation');

    // Should have scenario
    expect(formatted).toContain('**Scenario:**');
    expect(formatted).toContain('Usage subscription with promotional discount');

    // Should have expected behavior and fix
    expect(formatted).toContain('**Expected Behavior:**');
    expect(formatted).toContain('**Fix:**');
    expect(formatted).toContain('Check discount type against charge model compatibility');
  });

  it('should include criterion ID when present', () => {
    const correction = createMockCorrection({ criteria_id: 'BL-003' });
    const formatted = formatCorrectionForPrompt(correction);

    expect(formatted).toContain('(BL-003)');
  });

  it('should format incorrect output when present', () => {
    const correction = createMockCorrection({
      incorrect_output: {
        discount_applied: true,
        validation_performed: false,
      },
    });
    const formatted = formatCorrectionForPrompt(correction);

    expect(formatted).toContain('### ❌ INCORRECT OUTPUT (What NOT to do):');
    expect(formatted).toContain('"discount_applied": true');
    expect(formatted).toContain('"validation_performed": false');
  });

  it('should format example fix when present', () => {
    const correction = createMockCorrection({
      example_fix: {
        discount_applied: true,
        validation_performed: true,
        validation_result: 'eligible',
      },
    });
    const formatted = formatCorrectionForPrompt(correction);

    expect(formatted).toContain('### ✅ CORRECT OUTPUT (What to produce):');
    expect(formatted).toContain('"validation_performed": true');
    expect(formatted).toContain('"validation_result": "eligible"');
  });

  it('should truncate very long outputs', () => {
    const longOutput = { data: 'x'.repeat(1000) };
    const correction = createMockCorrection({
      incorrect_output: longOutput,
    });
    const formatted = formatCorrectionForPrompt(correction);

    expect(formatted).toContain('[truncated]');
    expect(formatted.length).toBeLessThan(2000);
  });

  it('should format issue type with spaces', () => {
    const correction = createMockCorrection({ issue_type: 'behavioral_violation' });
    const formatted = formatCorrectionForPrompt(correction);

    expect(formatted).toContain('behavioral violation');
  });
});

describe('formatCorrectionsSection', () => {
  it('should return empty string for empty corrections array', () => {
    const result = formatCorrectionsSection([]);
    expect(result).toBe('');
  });

  it('should format multiple corrections with header', () => {
    const corrections = [
      createMockCorrection({ id: 'corr-1', pattern: 'Pattern One' }),
      createMockCorrection({ id: 'corr-2', pattern: 'Pattern Two' }),
    ];
    const formatted = formatCorrectionsSection(corrections);

    // Should have main header
    expect(formatted).toContain('# 🎯 Learned Corrections (Contrastive Examples)');

    // Should explain the format
    expect(formatted).toContain('❌ **INCORRECT**');
    expect(formatted).toContain('✅ **CORRECT**');

    // Should include both corrections
    expect(formatted).toContain('Pattern One');
    expect(formatted).toContain('Pattern Two');

    // Should have separators
    expect(formatted).toContain('---');
  });

  it('should create valid markdown structure', () => {
    const corrections = [createMockCorrection()];
    const formatted = formatCorrectionsSection(corrections);

    // Should start and end with dividers
    expect(formatted.startsWith('---')).toBe(true);
    expect(formatted.trimEnd().endsWith('---')).toBe(true);
  });
});

describe('buildInputSummary', () => {
  it('should build summary from input fields', () => {
    const input = {
      customer_name: 'Acme Corp',
      use_case_description: 'Monthly SaaS subscription with usage-based overages',
      billing_period: 'Monthly',
      terms_months: 12,
    };

    const summary = buildInputSummary(input);

    expect(summary).toContain('Customer: Acme Corp');
    expect(summary).toContain('Description: Monthly SaaS');
    expect(summary).toContain('Billing: Monthly');
    expect(summary).toContain('Terms: 12 months');
  });

  it('should handle allocation scenarios', () => {
    const input = {
      customer_name: 'Test Co',
      is_allocations: true,
      allocation_method: 'SSP',
    };

    const summary = buildInputSummary(input);

    expect(summary).toContain('Allocations: SSP');
  });

  it('should truncate long descriptions', () => {
    const input = {
      use_case_description: 'x'.repeat(300),
    };

    const summary = buildInputSummary(input);

    expect(summary.length).toBeLessThan(250);
    expect(summary).toContain('...');
  });

  it('should handle missing fields gracefully', () => {
    const input = {};
    const summary = buildInputSummary(input);

    // Should return empty or minimal summary
    expect(summary).toBeDefined();
    expect(typeof summary).toBe('string');
  });
});

describe('Correction Run Context', () => {
  beforeEach(() => {
    clearRunContext();
  });

  afterEach(() => {
    clearRunContext();
  });

  describe('startCorrectionTracking', () => {
    it('should create a new run context', () => {
      const context = startCorrectionTracking();

      expect(context.runId).toBeDefined();
      expect(context.appliedByStep).toBeInstanceOf(Map);
      expect(context.startedAt).toBeInstanceOf(Date);
    });

    it('should use provided run ID', () => {
      const context = startCorrectionTracking('custom-run-id');

      expect(context.runId).toBe('custom-run-id');
    });
  });

  describe('getRunContext', () => {
    it('should return null when no context exists', () => {
      expect(getRunContext()).toBeNull();
    });

    it('should return current context after starting', () => {
      startCorrectionTracking('test-run');
      const context = getRunContext();

      expect(context).not.toBeNull();
      expect(context?.runId).toBe('test-run');
    });
  });

  describe('clearRunContext', () => {
    it('should clear the current context', () => {
      startCorrectionTracking();
      expect(getRunContext()).not.toBeNull();

      clearRunContext();
      expect(getRunContext()).toBeNull();
    });
  });
});

describe('Effectiveness Tracking', () => {
  beforeEach(() => {
    clearRunContext();
    clearEffectivenessLog();
  });

  afterEach(() => {
    clearRunContext();
    clearEffectivenessLog();
  });

  describe('startEffectivenessTracking', () => {
    it('should initialize empty tracking state', () => {
      startEffectivenessTracking();
      const summary = getEffectivenessSummary();

      expect(summary).toBeUndefined();
    });
  });

  describe('recordEffectivenessOutcomes', () => {
    it('should not throw when no run context exists', () => {
      expect(() => {
        recordEffectivenessOutcomes('test-001', new Map([['billings', true]]));
      }).not.toThrow();
    });
  });

  describe('getEffectivenessSummary', () => {
    it('should return undefined when no outcomes recorded', () => {
      startEffectivenessTracking();
      const summary = getEffectivenessSummary();

      expect(summary).toBeUndefined();
    });
  });

  describe('clearEffectivenessLog', () => {
    it('should clear all tracking data', () => {
      startEffectivenessTracking();
      clearEffectivenessLog();

      const summary = getEffectivenessSummary();
      expect(summary).toBeUndefined();
    });
  });
});

describe('Integration: Contrastive Example Format', () => {
  it('should produce readable contrastive examples for LLM consumption', () => {
    const correction = createMockCorrection({
      pattern: 'Invoice amount mismatch',
      criteria_id: 'BL-001',
      input_summary: 'Multi-product bundle with tiered pricing',
      incorrect_output: {
        invoice_lines: [
          { product: 'Basic', amount: 100 },
          { product: 'Premium', amount: 200 },
        ],
        total: 250, // Wrong!
      },
      example_fix: {
        invoice_lines: [
          { product: 'Basic', amount: 100 },
          { product: 'Premium', amount: 200 },
        ],
        total: 300, // Correct
      },
      expected_behavior: 'Invoice total must equal sum of line amounts',
      correction: 'Sum all invoice_lines amounts to calculate total',
    });

    const formatted = formatCorrectionForPrompt(correction);

    // Verify all key sections are present
    expect(formatted).toContain('Invoice amount mismatch');
    expect(formatted).toContain('BL-001');
    expect(formatted).toContain('Multi-product bundle');
    expect(formatted).toContain('INCORRECT OUTPUT');
    expect(formatted).toContain('"total": 250');
    expect(formatted).toContain('CORRECT OUTPUT');
    expect(formatted).toContain('"total": 300');
    expect(formatted).toContain('sum of line amounts');
  });

  it('should work correctly even without example outputs', () => {
    const correction = createMockCorrection({
      pattern: 'Date format issue',
      incorrect_output: undefined,
      example_fix: undefined,
    });

    const formatted = formatCorrectionForPrompt(correction);

    // Should still have the essential sections
    expect(formatted).toContain('Date format issue');
    expect(formatted).toContain('**Scenario:**');
    expect(formatted).toContain('**Expected Behavior:**');
    expect(formatted).toContain('**Fix:**');

    // Should NOT have output sections
    expect(formatted).not.toContain('INCORRECT OUTPUT');
    expect(formatted).not.toContain('CORRECT OUTPUT');
  });
});
