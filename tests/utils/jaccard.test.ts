import { describe, expect, it } from 'vitest';

import { formatMatchedGucForContext, matchToGoldenUseCases } from '../../src/utils/jaccard';
import type { DetectedCapabilities } from '../../src/types/output';
import type { GoldenUseCaseCapability } from '../../src/types/golden-use-cases';

const baseBilling = {
  AMENDMENT: null,
  USAGE: null,
  RECURRING: null,
  'ONE-TIME': null,
  'ORDER LINE ITEM': null,
  DISCOUNT: null,
  PRORATION: null,
  'MIN COMMIT': null,
  'PREPAID DRAWDOWN': null,
  'VOLUME PRICING': null,
  'TIERED PRICING': null,
  'DELIVERY PRICING': null,
  'PRERATED PRICING': null,
  OVERAGE: null,
};

const baseRevenue = {
  ALLOCATION: null,
  'CONTRACT MOD': null,
  'CUSTOM EVENT': null,
  BUNDLE: null,
  COST: null,
  VC: null,
  RAMP: null,
  'ADVANCED CONSUMPTION': null,
  DELIVERY: null,
  SFC: null,
};

const goldenUseCases: GoldenUseCaseCapability[] = [
  {
    'Use Case Id': 'UC-1',
    'Use Case Name': 'Recurring + Allocation',
    Description: 'Recurring revenue with allocation',
    'Billing Capabilities': {
      ...baseBilling,
      RECURRING: 'X',
      'ORDER LINE ITEM': 'Yes',
    },
    'Revenue Capabilities': {
      ...baseRevenue,
      ALLOCATION: 'x',
    },
  },
  {
    'Use Case Id': 'UC-2',
    'Use Case Name': 'Usage only',
    Description: 'Usage heavy model',
    'Billing Capabilities': {
      ...baseBilling,
      USAGE: 'X',
    },
    'Revenue Capabilities': {
      ...baseRevenue,
      DELIVERY: 'Yes',
    },
  },
];

describe('matchToGoldenUseCases', () => {
  it('matches using canonicalized capability labels and ranks the best fit', () => {
    const detected: DetectedCapabilities = {
      billing_caps: ['Recurring', 'Order Line Item'],
      revenue_caps: ['Allocation'],
      hints: [],
      confidence: 0.9,
    };

    const result = matchToGoldenUseCases(detected, goldenUseCases, { topK: 1 });

    expect(result.matched_guc).toHaveLength(1);
    expect(result.matched_guc[0].id).toBe('UC-1');
    expect(result.matched_guc[0].billing.intersection).toEqual(
      expect.arrayContaining(['Recurring', 'Order Line Item'])
    );
    expect(result.normalized_inputs.billing_caps).toEqual(
      expect.arrayContaining(['Recurring', 'Order Line Item'])
    );
  });

  it('returns no matches when scores fall below the minimum score', () => {
    const detected: DetectedCapabilities = {
      billing_caps: [],
      revenue_caps: [],
      hints: [],
      confidence: 0,
    };

    const result = matchToGoldenUseCases(detected, goldenUseCases, { minScore: 0.05 });
    expect(result.matched_guc).toHaveLength(0);
  });
});

describe('formatMatchedGucForContext', () => {
  it('returns a friendly message when no matches are found', () => {
    expect(formatMatchedGucForContext([])).toBe('No matching golden use cases found.');
  });

  it('formats a readable summary for matched use cases', () => {
    const detected: DetectedCapabilities = {
      billing_caps: ['Recurring'],
      revenue_caps: ['Allocation'],
      hints: [],
      confidence: 0.8,
    };

    const { matched_guc } = matchToGoldenUseCases(detected, goldenUseCases, { topK: 1 });
    const context = formatMatchedGucForContext(matched_guc);

    expect(context).toContain('Score:');
    expect(context).toContain('Billing match:');
    expect(context).toContain('Revenue match:');
  });
});
