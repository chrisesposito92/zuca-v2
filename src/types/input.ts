import { z } from 'zod';

/**
 * Billing period options matching Zuora's supported periods
 */
export const BillingPeriodSchema = z.enum([
  'Monthly',
  'Quarterly',
  'Semi-Annually',
  'Annually',
]);
export type BillingPeriod = z.infer<typeof BillingPeriodSchema>;

/**
 * Zuora billing period values (API format)
 */
export const ZuoraBillingPeriodSchema = z.enum([
  'Month',
  'Quarter',
  'Semi-Annual',
  'Year',
]);
export type ZuoraBillingPeriod = z.infer<typeof ZuoraBillingPeriodSchema>;

/**
 * Currency options
 */
export const CurrencySchema = z.enum(['USD', 'EUR', 'CAD']);
export type Currency = z.infer<typeof CurrencySchema>;

/**
 * Allocation method options for revenue recognition
 */
export const AllocationMethodSchema = z.enum([
  'Use List Price',
  'Use Sell Price',
  'Custom Formula',
  'N/A',
]);
export type AllocationMethod = z.infer<typeof AllocationMethodSchema>;

/**
 * Main input schema for ZUCA analysis
 */
export const ZucaInputSchema = z.object({
  /** Customer/Company name */
  customer_name: z.string().min(1, 'Customer name is required'),

  /** Contract start date in MM/DD/YYYY format */
  contract_start_date: z
    .string()
    .regex(/^\d{2}\/\d{2}\/\d{4}$/, 'Date must be in MM/DD/YYYY format'),

  /** Contract term in months */
  terms_months: z.number().int().positive().default(12),

  /** Transaction currency */
  transaction_currency: CurrencySchema.default('USD'),

  /** Billing period/frequency */
  billing_period: BillingPeriodSchema.default('Monthly'),

  /** Whether to perform revenue allocations */
  is_allocations: z.boolean().default(false),

  /** Allocation method (required if is_allocations is true) */
  allocation_method: AllocationMethodSchema.optional(),

  /** Custom allocation formula (required if allocation_method is 'Custom Formula') */
  allocation_custom_formula: z.string().optional(),

  /** Additional revenue recognition notes */
  rev_rec_notes: z.string().optional(),

  /** The main use case description */
  use_case_description: z.string().min(10, 'Use case description is required'),
});

export type ZucaInput = z.infer<typeof ZucaInputSchema>;

/**
 * Follow-up query for multi-turn conversation
 */
export const FollowUpQuerySchema = z.object({
  /** The follow-up question or modification request */
  query: z.string().min(1),

  /** Optional: Reference to previous session for context */
  session_id: z.string().optional(),
});

export type FollowUpQuery = z.infer<typeof FollowUpQuerySchema>;

/**
 * Utility to convert user-friendly billing period to Zuora API format
 */
export function toZuoraBillingPeriod(period: BillingPeriod): ZuoraBillingPeriod {
  const mapping: Record<BillingPeriod, ZuoraBillingPeriod> = {
    'Monthly': 'Month',
    'Quarterly': 'Quarter',
    'Semi-Annually': 'Semi-Annual',
    'Annually': 'Year',
  };
  return mapping[period];
}

/**
 * Parse and validate date string to Date object
 */
export function parseContractDate(dateStr: string): Date {
  const [month, day, year] = dateStr.split('/').map(Number);
  return new Date(year, month - 1, day);
}

/**
 * Format date to MM/DD/YYYY string
 */
export function formatContractDate(date: Date): string {
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  const year = date.getFullYear();
  return `${month}/${day}/${year}`;
}

/**
 * Format date to YYYY-MM-DD (ISO format for Zuora API)
 */
export function formatISODate(date: Date): string {
  return date.toISOString().split('T')[0];
}

/**
 * Validate and return a ZucaInput object
 * Throws an error if validation fails
 */
export function validateZucaInput(input: unknown): ZucaInput {
  const result = ZucaInputSchema.safeParse(input);
  if (!result.success) {
    const errors = result.error.errors.map((e) => `${e.path.join('.')}: ${e.message}`);
    throw new Error(`Invalid input: ${errors.join(', ')}`);
  }
  return result.data;
}
