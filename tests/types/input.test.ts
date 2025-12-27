import { describe, expect, it } from 'vitest';

import {
  formatContractDate,
  formatISODate,
  parseContractDate,
  toZuoraBillingPeriod,
  validateZucaInput,
} from '../../src/types/input';

describe('input helpers', () => {
  it('maps UI billing period values to Zuora API values', () => {
    expect(toZuoraBillingPeriod('Monthly')).toBe('Month');
    expect(toZuoraBillingPeriod('Quarterly')).toBe('Quarter');
    expect(toZuoraBillingPeriod('Semi-Annually')).toBe('Semi-Annual');
    expect(toZuoraBillingPeriod('Annually')).toBe('Year');
  });

  it('parses and formats contract dates consistently', () => {
    const date = parseContractDate('02/29/2024');
    expect(formatContractDate(date)).toBe('02/29/2024');
    expect(formatISODate(date)).toBe('2024-02-29');
  });

  it('applies defaults and validates required input fields', () => {
    const result = validateZucaInput({
      customer_name: 'Acme Corp',
      contract_start_date: '01/01/2025',
      use_case_description: 'Annual SaaS subscription with monthly billing and support.',
    });

    expect(result.transaction_currency).toBe('USD');
    expect(result.billing_period).toBe('Monthly');
    expect(result.is_allocations).toBe(false);
  });

  it('throws a helpful error when validation fails', () => {
    expect(() =>
      validateZucaInput({
        customer_name: 'Acme Corp',
        contract_start_date: '2025-01-01',
        use_case_description: 'Too short',
      })
    ).toThrow(/contract_start_date/);
  });
});
