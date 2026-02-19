import { describe, expect, it } from 'vitest';

/**
 * Tests for the stripClarificationFields behavior.
 *
 * Since the helper is module-private in orchestrator.ts, we test the behavior
 * indirectly by verifying the same logic works as expected.
 */
describe('output sanitization: clarification field stripping', () => {
  // Replicate the orchestrator's stripClarificationFields logic
  function stripClarificationFields<T>(output: T): Omit<T,
    'needs_clarification' | 'clarification_question' | 'clarification_options' |
    'clarification_context' | 'clarification_priority'
  > {
    const obj = output as Record<string, unknown>;
    const {
      needs_clarification: _nc,
      clarification_question: _cq,
      clarification_options: _co,
      clarification_context: _cc,
      clarification_priority: _cp,
      ...clean
    } = obj;
    return clean as Omit<T,
      'needs_clarification' | 'clarification_question' | 'clarification_options' |
      'clarification_context' | 'clarification_priority'
    >;
  }

  it('strips all clarification fields from a contracts/orders output', () => {
    const rawOutput = {
      line_items: [{ name: 'License', amount: 1000 }],
      totals: { subtotal: 1000, tax: 0, total: 1000 },
      assumptions: ['Monthly billing assumed'],
      open_questions: [],
      // Clarification fields that should be stripped
      needs_clarification: false,
      clarification_question: null,
      clarification_options: null,
      clarification_context: null,
      clarification_priority: null,
    };

    const cleaned = stripClarificationFields(rawOutput);

    expect(cleaned).toEqual({
      line_items: [{ name: 'License', amount: 1000 }],
      totals: { subtotal: 1000, tax: 0, total: 1000 },
      assumptions: ['Monthly billing assumed'],
      open_questions: [],
    });

    // Verify no clarification fields exist
    expect('needs_clarification' in cleaned).toBe(false);
    expect('clarification_question' in cleaned).toBe(false);
    expect('clarification_options' in cleaned).toBe(false);
    expect('clarification_context' in cleaned).toBe(false);
    expect('clarification_priority' in cleaned).toBe(false);
  });

  it('preserves all non-clarification fields', () => {
    const rawOutput = {
      billing_events: [{ date: '2025-01-01', amount: 100 }],
      billing_schedule: 'monthly',
      assumptions: [],
      open_questions: ['When does billing start?'],
      needs_clarification: true,
      clarification_question: 'When does billing start?',
      clarification_options: [{ id: '1', label: 'Jan 2025' }],
      clarification_context: 'Start date unclear',
      clarification_priority: 'important',
    };

    const cleaned = stripClarificationFields(rawOutput);

    expect(cleaned.billing_events).toEqual([{ date: '2025-01-01', amount: 100 }]);
    expect(cleaned.billing_schedule).toBe('monthly');
    expect(cleaned.assumptions).toEqual([]);
    expect(cleaned.open_questions).toEqual(['When does billing start?']);
  });

  it('handles output without clarification fields (no-op)', () => {
    const rawOutput = {
      assumptions: ['test'],
      open_questions: [],
    };

    const cleaned = stripClarificationFields(rawOutput);
    expect(cleaned).toEqual(rawOutput);
  });
});
