import { describe, expect, it } from 'vitest';

import {
  getAffectedSteps,
  getValueAtPath,
  parsePathContext,
  setValueAtPath,
} from '../../src/pipeline/patch';

describe('pipeline patch helpers', () => {
  it('retrieves and updates values by JSON path without mutating the original object', () => {
    const original = {
      subscription_spec: {
        rate_plans: [
          {
            charges: [
              { billingTiming: 'InAdvance', price: 100 },
            ],
          },
        ],
      },
    };

    const path = 'subscription_spec.rate_plans[0].charges[0].billingTiming';
    expect(getValueAtPath(original, path)).toBe('InAdvance');

    const updated = setValueAtPath(original, path, 'InArrears');

    expect(getValueAtPath(updated, path)).toBe('InArrears');
    expect(getValueAtPath(original, path)).toBe('InAdvance');
    expect(updated).not.toBe(original);
    expect(updated.subscription_spec).not.toBe(original.subscription_spec);
  });

  it('maps output paths to downstream affected steps', () => {
    expect(
      getAffectedSteps('subscription_spec.rate_plans[0].charges[0].billingTiming')
    ).toEqual(['billings', 'summary']);

    expect(
      getAffectedSteps('pob_mapping.charge_pob_map[2].recognition_window')
    ).toEqual(['revrec_waterfall', 'summary']);
  });

  it('parses path context for rate plan and charge fields', () => {
    const context = parsePathContext('subscription_spec.rate_plans[1].charges[2].billingTiming');
    expect(context).toEqual({
      section: 'subscription_spec',
      ratePlanIndex: 1,
      chargeIndex: 2,
      field: 'billingTiming',
    });
  });
});
