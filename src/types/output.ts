import { z } from 'zod';

// ============================================================================
// Contract Intel Output (Step 1)
// ============================================================================

export const BillingTimingSchema = z.enum(['InAdvance', 'InArrears']);
export type BillingTiming = z.infer<typeof BillingTimingSchema>;

export const TriggerEventSchema = z.enum([
  'ContractEffective',
  'ServiceActivation',
  'CustomerAcceptance',
  'SpecificDate',
]);
export type TriggerEvent = z.infer<typeof TriggerEventSchema>;

export const ContractIntelSchema = z.object({
  service_start_mdy: z.string(),
  service_end_mdy: z.string().nullable(),
  term_months: z.number(),
  billing_period: z.enum(['Month', 'Quarter', 'Year', 'Semi-Annual']).nullable(),
  billing_timing: BillingTimingSchema.nullable(),
  trigger_event: z.string(),
  go_live_mdy: z.string(),
  booking_mdy: z.string(),
  renewal_term_months: z.number(),
});

export type ContractIntel = z.infer<typeof ContractIntelSchema>;

// ============================================================================
// Detect Capabilities Output (Step 2)
// ============================================================================

export const DetectedCapabilitiesSchema = z.object({
  billing_caps: z.array(z.string()),
  revenue_caps: z.array(z.string()),
  hints: z.array(z.string()),
  confidence: z.number().min(0).max(1),
});

export type DetectedCapabilities = z.infer<typeof DetectedCapabilitiesSchema>;

// ============================================================================
// Match Golden Use Cases Output (Step 3 - Pure Code)
// ============================================================================

export const MatchedGoldenUseCaseSchema = z.object({
  id: z.string(),
  title: z.string(),
  score: z.number(),
  score_raw: z.number(),
  jaccard_billing: z.number(),
  jaccard_revenue: z.number(),
  billing: z.object({
    intersection: z.array(z.string()),
    missing: z.array(z.string()),
    unmatched: z.array(z.string()),
  }),
  revenue: z.object({
    intersection: z.array(z.string()),
    missing: z.array(z.string()),
    unmatched: z.array(z.string()),
  }),
});

export type MatchedGoldenUseCase = z.infer<typeof MatchedGoldenUseCaseSchema>;

export const MatchGoldenUseCasesOutputSchema = z.object({
  matched_guc: z.array(MatchedGoldenUseCaseSchema),
  scores_all: z.array(MatchedGoldenUseCaseSchema),
  normalized_inputs: z.object({
    billing_caps: z.array(z.string()),
    revenue_caps: z.array(z.string()),
  }),
});

export type MatchGoldenUseCasesOutput = z.infer<typeof MatchGoldenUseCasesOutputSchema>;

// ============================================================================
// Subscription Spec Output (Step 4)
// ============================================================================

export const ChargeTypeSchema = z.enum(['Recurring', 'OneTime', 'Usage']);
export type ChargeType = z.infer<typeof ChargeTypeSchema>;

export const ChargeModelSchema = z.enum([
  'FlatFee',
  'PerUnit',
  'Volume',
  'Tiered',
  'Overage',
]);
export type ChargeModel = z.infer<typeof ChargeModelSchema>;

export const ChargeFunctionSchema = z.enum([
  'None',
  'Prepayment',
  'Drawdown',
  'Commitment',
  'Overage',
]);
export type ChargeFunction = z.infer<typeof ChargeFunctionSchema>;

export const ChargeSchema = z.object({
  name: z.string(),
  type: ChargeTypeSchema,
  model: ChargeModelSchema,
  uom: z.string().nullish(), // null, undefined, or string
  billingPeriod: z.string().nullish(),
  billingTiming: BillingTimingSchema.nullish(),
  billingDay: z.string().nullish(),
  billingPeriodAlignment: z.string().nullish(),
  listPriceBase: z.string().nullish(),
  triggerEvent: z.string(),
  specificTriggerDate: z.string().nullish(),
  endDateCondition: z.string().nullish(),
  specificEndDate: z.string().nullish(),
  quantity: z.number().nullish(),
  listPrice: z.number().nullish(),
  sellPrice: z.number().nullish(),
  price: z.number().nullish(),
  tiers: z.array(z.object({
    startingUnit: z.number(),
    endingUnit: z.number().nullable(),
    price: z.number(),
    priceFormat: z.string().nullish(),
  })).nullish(),
  effectiveStartDate: z.string(),
  effectiveEndDate: z.string().nullish(),
  chargeFunction: ChargeFunctionSchema.nullish(),
  isAllocationEligible: z.boolean().nullish(),
  drawdownType: z.string().nullish(),
  commitmentType: z.string().nullish(),
  prepaymentUOM: z.string().nullish(),
  prepaymentUnits: z.number().nullish(),
  validityPeriod: z.string().nullish(),
});

export type Charge = z.infer<typeof ChargeSchema>;

export const RatePlanSchema = z.object({
  productName: z.string(),
  ratePlanName: z.string(),
  charges: z.array(ChargeSchema),
});

export type RatePlan = z.infer<typeof RatePlanSchema>;

export const SubscriptionSchema = z.object({
  name: z.string(),
  termType: z.enum(['TERMED', 'EVERGREEN']),
  status: z.string(),
  currency: z.string(),
  contractEffectiveDate: z.string(),
  serviceActivationDate: z.string(),
  customerAcceptanceDate: z.string(),
  subscriptionStartDate: z.string(),
  subscriptionEndDate: z.string().nullish(),
  initialTerm: z.number().nullish(),
  initialTermPeriodType: z.enum(['Month', 'Year']).nullish(),
  renewalTerm: z.number().nullish(),
  renewalTermPeriodType: z.enum(['Month', 'Year']).nullish(),
  autoRenew: z.boolean().nullish(),
});

export type Subscription = z.infer<typeof SubscriptionSchema>;

export const UsageRecordSchema = z.object({
  Date: z.string(),
  UOM: z.string(),
  Quantity: z.number(),
  'Charge Name': z.string(),
  Amount: z.number(),
});

export type UsageRecord = z.infer<typeof UsageRecordSchema>;

export const SubscriptionSpecSchema = z.object({
  subscription: SubscriptionSchema,
  rate_plans: z.array(RatePlanSchema),
  usage: z.array(UsageRecordSchema),
  assumptions: z.array(z.string()),
  open_questions: z.array(z.string()),
});

export type SubscriptionSpec = z.infer<typeof SubscriptionSpecSchema>;

// ============================================================================
// POB Mapping Output (Step 5)
// ============================================================================

export const RatableMethodSchema = z.enum([
  'Ratable',
  'Immediate Using Open Period',
  'Immediate Using Start Date',
  'Invoice Ratable',
]);
export type RatableMethod = z.infer<typeof RatableMethodSchema>;

export const ReleaseEventSchema = z.enum([
  'Upon Booking (Full Booking Release)',
  'Upon Billing (Billed Release)',
  'Acceptance',
  'Go-Live Event',
  'BY_AMOUNT',
  'Completion',
  'Upon Consumption',
  'CUM_PCT_EVNT',
  'Hour Input',
  'POC',
  'USAGE_QTY',
  'BY_QTY',
]);
export type ReleaseEvent = z.infer<typeof ReleaseEventSchema>;

export const PobMappingItemSchema = z.object({
  chargeName: z.string(),
  productName: z.string().nullable(),
  ratePlanName: z.string().nullable(),
  pob_identifier: z.string(),
  pob_name: z.string(),
  ratable_method: RatableMethodSchema,
  release_event: ReleaseEventSchema,
  recognition_window: z.object({
    start: z.string(),
    end: z.string().nullable(),
  }),
  rationale: z.string(),
  confidence: z.number().min(0).max(1),
  alternatives: z.array(z.object({
    pob_identifier: z.string(),
    pob_name: z.string(),
    why_not: z.string(),
  })).optional(),
});

export type PobMappingItem = z.infer<typeof PobMappingItemSchema>;

export const PobMappingOutputSchema = z.object({
  charge_pob_map: z.array(PobMappingItemSchema),
  mapping_notes: z.array(z.string()),
});

export type PobMappingOutput = z.infer<typeof PobMappingOutputSchema>;

// ============================================================================
// Contracts/Orders Table Output (Step 6)
// ============================================================================

export const ContractsOrdersRowSchema = z.object({
  'POB Name': z.string(),
  'POB Template': z.string(),
  'POB Satisfied': z.boolean(),
  'Release Event': z.string(),
  'Billing Period': z.string(),
  'Billing Timing': z.string(),
  'Terms Months': z.number(),
  'Trigger Event': z.string(),
  'Lead Line': z.boolean(),
  'Ordered Qty': z.number(),
  'Line Item Num': z.number(),
  'Subscription Name': z.string(),
  'Subscription Version': z.number(),
  'Sales Order Date': z.string(),
  'RPC Segment': z.string(),
  'RPC Type': z.string(),
  'Revenue Start Date': z.string(),
  'Revenue End Date': z.string(),
  'Unit List Price': z.number(),
  'Unit Sell Price': z.number(),
  'Ext List Price': z.number(),
  'Ext Sell Price': z.number(),
  'SSP Price': z.number(),
  'Ext SSP Price': z.number(),
  'SSP Percent': z.number(),
  'Ext Allocated Price': z.number(),
  'Carves Adjustment': z.number(),
  'Allocation Eligible Flag': z.boolean(),
  'Unreleased Revenue': z.number(),
  'Released Revenue': z.number(),
  'Customer Name': z.string(),
  'POB IDENTIFIER': z.string(),
  'Product Category': z.string(),
  'Product Family': z.string(),
});

export type ContractsOrdersRow = z.infer<typeof ContractsOrdersRowSchema>;

export const ContractsOrdersOutputSchema = z.object({
  zr_contracts_orders: z.array(ContractsOrdersRowSchema),
  assumptions: z.array(z.string()),
  open_questions: z.array(z.string()),
});

export type ContractsOrdersOutput = z.infer<typeof ContractsOrdersOutputSchema>;

// ============================================================================
// Billings Table Output (Step 7)
// ============================================================================

export const BillingsRowSchema = z.object({
  'Invoice Date': z.string(),
  'Billing Date': z.string(),
  'Charge Name': z.string(),
  'Rate Plan': z.string(),
  'Product': z.string(),
  'Billing Period Start': z.string(),
  'Billing Period End': z.string(),
  'Quantity': z.number(),
  'Unit Price': z.number(),
  'Amount': z.number(),
  'Currency': z.string(),
});

export type BillingsRow = z.infer<typeof BillingsRowSchema>;

export const BillingsOutputSchema = z.object({
  zb_billings: z.array(BillingsRowSchema),
  assumptions: z.array(z.string()),
  open_questions: z.array(z.string()),
});

export type BillingsOutput = z.infer<typeof BillingsOutputSchema>;

// ============================================================================
// Rev Rec Waterfall Output (Step 8)
// ============================================================================

export const RevRecWaterfallRowSchema = z.object({
  'Line Item Num': z.number(),
  'POB Name': z.string(),
  'Event Name': z.string(),
  'Revenue Start Date': z.string(),
  'Revenue End Date': z.string(),
  'Ext Allocated Price': z.number(),
  'Period': z.string(), // e.g., "Jan-25"
  'Amount': z.number(),
});

export type RevRecWaterfallRow = z.infer<typeof RevRecWaterfallRowSchema>;

export const RevRecWaterfallOutputSchema = z.object({
  zr_revrec: z.array(RevRecWaterfallRowSchema),
  assumptions: z.array(z.string()),
  open_questions: z.array(z.string()),
});

export type RevRecWaterfallOutput = z.infer<typeof RevRecWaterfallOutputSchema>;

// ============================================================================
// Summary Output (Step 9)
// ============================================================================

export const SummaryOutputSchema = z.object({
  assumptions: z.array(z.string()),
  open_questions: z.array(z.string()),
});

export type SummaryOutput = z.infer<typeof SummaryOutputSchema>;

// ============================================================================
// Full Pipeline Output
// ============================================================================

export const ZucaOutputSchema = z.object({
  // Metadata
  session_id: z.string(),
  timestamp: z.string(),
  input: z.any(), // Original ZucaInput

  // Pipeline step outputs
  contract_intel: ContractIntelSchema,
  detected_capabilities: DetectedCapabilitiesSchema,
  matched_golden_use_cases: MatchGoldenUseCasesOutputSchema,
  subscription_spec: SubscriptionSpecSchema,
  pob_mapping: PobMappingOutputSchema,
  contracts_orders: ContractsOrdersOutputSchema,
  billings: BillingsOutputSchema,
  revrec_waterfall: RevRecWaterfallOutputSchema,
  summary: SummaryOutputSchema,

  // Formatted outputs
  markdown_output: z.string().optional(),
});

export type ZucaOutput = z.infer<typeof ZucaOutputSchema>;
