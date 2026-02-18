import { z } from 'zod';

// ============================================================================
// Golden Use Cases - Capabilities
// ============================================================================

export const RevenueCapabilitiesSchema = z.object({
  ALLOCATION: z.string().nullable(),
  'CONTRACT MOD': z.string().nullable(),
  'CUSTOM EVENT': z.string().nullable(),
  BUNDLE: z.string().nullable(),
  COST: z.string().nullable(),
  VC: z.string().nullable(),
  RAMP: z.string().nullable(),
  'ADVANCED CONSUMPTION': z.string().nullable(),
  DELIVERY: z.string().nullable(),
  SFC: z.string().nullable(),
});

export type RevenueCapabilities = z.infer<typeof RevenueCapabilitiesSchema>;

export const BillingCapabilitiesSchema = z.object({
  AMENDMENT: z.string().nullable(),
  USAGE: z.string().nullable(),
  RECURRING: z.string().nullable(),
  'ONE-TIME': z.string().nullable(),
  'ORDER LINE ITEM': z.string().nullable(),
  DISCOUNT: z.string().nullable(),
  PRORATION: z.string().nullable(),
  'MIN COMMIT': z.string().nullable(),
  'PREPAID DRAWDOWN': z.string().nullable(),
  'VOLUME PRICING': z.string().nullable(),
  'TIERED PRICING': z.string().nullable(),
  'DELIVERY PRICING': z.string().nullable(),
  'PRERATED PRICING': z.string().nullable(),
  OVERAGE: z.string().nullable(),
});

export type BillingCapabilities = z.infer<typeof BillingCapabilitiesSchema>;

export const GoldenUseCaseCapabilitySchema = z.object({
  'Use Case Name': z.string(),
  'Use Case Id': z.string(),
  Description: z.string(),
  'Revenue Capabilities': RevenueCapabilitiesSchema,
  'Billing Capabilities': BillingCapabilitiesSchema,
});

export type GoldenUseCaseCapability = z.infer<typeof GoldenUseCaseCapabilitySchema>;

// ============================================================================
// Golden Use Cases - Key Terms
// ============================================================================

export const KeyTermSchema = z.object({
  Term: z.string(),
  Definition: z.string(),
  Synonyms: z.array(z.string()).optional(),
  Category: z.string().optional(),
});

export type KeyTerm = z.infer<typeof KeyTermSchema>;

// ============================================================================
// Golden Use Cases - POB Templates
// ============================================================================

export const PobTemplateSchema = z.object({
  'POB Identifier': z.string(),
  'Template Name': z.string(),
  'Description': z.string(),
  'Release Event': z.string(),
  'Ratable Method': z.string(),
  'POB Satisfied': z.string(),
  'Accounting Method': z.string(),
  'VC Enabled': z.string(),
  'Recognition Notes': z.string().optional(),
});

export type PobTemplate = z.infer<typeof PobTemplateSchema>;

/**
 * Normalized POB template for internal use
 */
export interface NormalizedPobTemplate {
  id: string;
  name: string;
  description: string;
  releaseEvent: string;
  ratableMethod: string;
  pobSatisfied: string;
  accountingMethod: string;
  vcEnabled: boolean;
  recognitionNotes?: string;
}

// ============================================================================
// Golden Use Cases - Subscriptions
// ============================================================================

export const GoldenSubscriptionSchema = z.object({
  'Use Case Id': z.string(),
  'Use Case Name': z.string().optional(),
  Subscriptions: z.array(z.object({
    subscriptionNumber: z.string(),
    termType: z.string(),
    subscriptionStartDate: z.string(),
    subscriptionEndDate: z.string().nullable().optional(),
    initialTerm: z.number().nullable().optional(),
    initialTermPeriodType: z.string().nullable().optional(),
    autoRenew: z.boolean().optional(),
    renewalTerm: z.number().nullable().optional(),
    renewalTermPeriodType: z.string().nullable().optional(),
    currency: z.string().nullable().optional(),
  })),
});

export type GoldenSubscription = z.infer<typeof GoldenSubscriptionSchema>;

// ============================================================================
// Golden Use Cases - Rate Plans & Charges
// ============================================================================

export const GoldenRatePlanChargeSchema = z.object({
  name: z.string(),
  type: z.string(),
  model: z.string(),
  uom: z.string().nullable().optional(),
  billingPeriod: z.string().nullable().optional(),
  billingTiming: z.string().nullable().optional(),
  billingPeriodAlignment: z.string().nullable().optional(),
  listPriceBase: z.string().nullable().optional(),
  triggerEvent: z.string().nullable().optional(),
  endDateCondition: z.string().nullable().optional(),
  quantity: z.number().nullable().optional(),
  price: z.number().nullable().optional(),
  tiers: z.any().nullable().optional(),
  effectiveStartDate: z.string().nullable().optional(),
  effectiveEndDate: z.string().nullable().optional(),
});

export type GoldenRatePlanCharge = z.infer<typeof GoldenRatePlanChargeSchema>;

export const GoldenRatePlanSchema = z.object({
  productName: z.string(),
  ratePlanName: z.string(),
});

export type GoldenRatePlan = z.infer<typeof GoldenRatePlanSchema>;

export const GoldenRatePlanChargesDocSchema = z.object({
  'Use Case Id': z.string(),
  'Use Case Name': z.string().optional(),
  'Rate Plans': z.array(GoldenRatePlanSchema),
  'Rate Plan Charges': z.array(GoldenRatePlanChargeSchema),
});

export type GoldenRatePlanChargesDoc = z.infer<typeof GoldenRatePlanChargesDocSchema>;

// ============================================================================
// Golden Use Cases - ZR Tables
// ============================================================================

export const GoldenZRTableRowSchema = z.looseObject({
  'Use Case Id': z.string(),
  'Line Item Num': z.string().optional(),
  'POB Name': z.string().optional(),
  'POB Template': z.string().optional(),
  'Release Event': z.string().optional(),
  'Revenue Start Date': z.string().optional(),
  'Revenue End Date': z.string().optional(),
  'Ext Sell Price': z.number().optional(),
  'Ext Allocated Price': z.number().optional(),
  // Dynamic month columns like "Jan-25", "Feb-25", etc.
});

export type GoldenZRTableRow = z.infer<typeof GoldenZRTableRowSchema>;

// ============================================================================
// Combined Golden Use Cases Data
// ============================================================================

export interface GoldenUseCasesData {
  capabilities: GoldenUseCaseCapability[];
  keyTerms: KeyTerm[];
  pobTemplates: PobTemplate[];
  subscriptions: GoldenSubscription[];
  ratePlansCharges: GoldenRatePlanChargesDoc[];
  zrTables: GoldenZRTableRow[];
}
