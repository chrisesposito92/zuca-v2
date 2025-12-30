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
  'POB Satisfied': z.string(),
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
// Product Catalog Schema (For ZB API Creation)
// ============================================================================

export const ProductSchema = z.object({
  // Required fields
  name: z.string(),
  sku: z.string(), // Unique product identifier

  // Optional fields
  id: z.string().nullish(), // Zuora-assigned ID (for existing products)
  effectiveStartDate: z.string().nullish(),
  effectiveEndDate: z.string().nullish(),
  description: z.string().nullish(),
  category: z.string().nullish(),

  // Additional product attributes
  productNumber: z.string().nullish(), // Customer-facing product number
  allowFeatureChanges: z.boolean().nullish(),
});

export type Product = z.infer<typeof ProductSchema>;

// Product Rate Plan Charge for catalog (not subscription)
export const ProductRatePlanChargeSchema = z.object({
  // Required fields
  name: z.string(),
  type: ChargeTypeSchema, // Recurring, OneTime, Usage
  model: ChargeModelSchema, // FlatFee, PerUnit, Volume, Tiered, Overage

  // Optional fields
  id: z.string().nullish(), // Zuora-assigned ID
  uom: z.string().nullish(), // Unit of measure
  billingPeriod: z.string().nullish(), // Month, Quarter, Annual, etc.
  billingPeriodAlignment: z.string().nullish(), // AlignToCharge, AlignToSubscriptionStart, etc.
  billingTiming: BillingTimingSchema.nullish(), // InAdvance, InArrears
  listPriceBase: z.string().nullish(), // Per_Billing_Period, Per_Month, Per_Week
  triggerEvent: z.string().nullish(),
  endDateCondition: z.string().nullish(), // Subscription_End, Fixed_Period, Specific_End_Date
  upToPeriodsType: z.string().nullish(), // Billing_Periods, Days, Weeks, Months, Years
  upToPeriods: z.number().nullish(),

  // Pricing
  defaultQuantity: z.number().nullish(),
  price: z.number().nullish(), // For FlatFee or PerUnit
  includedUnits: z.number().nullish(), // For Overage model
  overagePrice: z.number().nullish(), // For Overage model

  // Tiered/Volume pricing
  tiers: z.array(z.object({
    tier: z.number(), // Tier number (1, 2, 3...)
    startingUnit: z.number(),
    endingUnit: z.number().nullable(),
    price: z.number(),
    priceFormat: z.enum(['FlatFee', 'PerUnit']).nullish(),
  })).nullish(),

  // Discounts
  applyDiscountTo: z.enum(['ONETIME', 'RECURRING', 'USAGE', 'ONETIMERECURRING', 'ONETIMEUSAGE', 'RECURRINGUSAGE', 'ONETIMERECURRINGUSAGE']).nullish(),
  discountLevel: z.enum(['subscription', 'account', 'rateplan']).nullish(),
  discountClass: z.string().nullish(),

  // Tax
  taxable: z.boolean().nullish(),
  taxCode: z.string().nullish(),
  taxMode: z.enum(['TaxExclusive', 'TaxInclusive']).nullish(),

  // Revenue Recognition
  revenueRecognitionRuleName: z.string().nullish(),
  deferredRevenueAccount: z.string().nullish(),
  recognizedRevenueAccount: z.string().nullish(),

  // Usage-specific
  ratingGroup: z.string().nullish(), // ByBillingPeriod, ByUsageStartDate, ByUsageRecord, ByUsageUpload
  usageRecordRatingOption: z.enum(['EndOfBillingPeriod', 'OnDemand']).nullish(),
  smoothingModel: z.enum(['RollingWindow', 'Rollover']).nullish(),
  numberOfPeriods: z.number().nullish(),
  overageUnusedUnitsCreditOption: z.enum(['NoCredit', 'CreditBySpecificRate']).nullish(),
  unusedUnitsCreditRates: z.number().nullish(),

  // Price change options
  priceChangeOption: z.enum(['NoChange', 'SpecificPercentageValue', 'UseLatestProductCatalogPricing']).nullish(),
  priceIncreasePercentage: z.number().nullish(),

  // PPDD-specific fields
  chargeFunction: ChargeFunctionSchema.nullish(),
  prepaidOperationType: z.enum(['topup', 'drawdown']).nullish(),
  prepaidQuantity: z.number().nullish(),
  prepaidTotalQuantity: z.number().nullish(),
  prepaidUom: z.string().nullish(),
  creditOption: z.enum(['TimeBased', 'ConsumptionBased', 'FullCreditBack']).nullish(),
  validityPeriodType: z.enum(['SUBSCRIPTION_TERM', 'ANNUAL', 'SEMI_ANNUAL', 'QUARTER', 'MONTH']).nullish(),
  drawdownRate: z.number().nullish(),
  drawdownUom: z.string().nullish(),

  // Commitment-specific
  isCommitted: z.boolean().nullish(),
  commitmentType: z.enum(['UNIT', 'AMOUNT']).nullish(),

  // Custom fields placeholder
  customFields: z.record(z.any()).nullish(),
});

export type ProductRatePlanCharge = z.infer<typeof ProductRatePlanChargeSchema>;

export const ProductRatePlanSchema = z.object({
  // Required fields
  name: z.string(),

  // Optional fields
  id: z.string().nullish(), // Zuora-assigned ID
  productId: z.string().nullish(), // Reference to parent product
  description: z.string().nullish(),
  effectiveStartDate: z.string().nullish(),
  effectiveEndDate: z.string().nullish(),

  // Charges
  charges: z.array(ProductRatePlanChargeSchema),

  // External reference
  externalIdSourceSystem: z.string().nullish(),
  externallyManagedPlanIds: z.array(z.string()).nullish(),

  // Custom fields placeholder
  customFields: z.record(z.any()).nullish(),
});

export type ProductRatePlan = z.infer<typeof ProductRatePlanSchema>;

export const ProductCatalogEntrySchema = z.object({
  product: ProductSchema,
  ratePlans: z.array(ProductRatePlanSchema),
});

export type ProductCatalogEntry = z.infer<typeof ProductCatalogEntrySchema>;

// ============================================================================
// Account Schema (For ZB API Creation)
// ============================================================================

export const ContactSchema = z.object({
  // Required fields
  firstName: z.string(),
  lastName: z.string(),

  // Address fields
  address1: z.string().nullish(),
  address2: z.string().nullish(),
  city: z.string().nullish(),
  state: z.string().nullish(),
  postalCode: z.string().nullish(),
  country: z.string().nullish(),

  // Communication
  workEmail: z.string().nullish(),
  workPhone: z.string().nullish(),
  mobilePhone: z.string().nullish(),
  fax: z.string().nullish(),

  // Additional info
  personalEmail: z.string().nullish(),
  homePhone: z.string().nullish(),
  otherPhone: z.string().nullish(),
  otherPhoneType: z.string().nullish(),
  nickname: z.string().nullish(),
  taxRegion: z.string().nullish(),

  // Custom fields placeholder
  customFields: z.record(z.any()).nullish(),
});

export type Contact = z.infer<typeof ContactSchema>;

export const PaymentMethodSchema = z.object({
  type: z.enum(['CreditCard', 'ACH', 'PayPal', 'WireTransfer', 'Check', 'Other']),

  // Credit Card fields
  creditCardType: z.enum(['Visa', 'MasterCard', 'AmericanExpress', 'Discover', 'JCB', 'Diners']).nullish(),
  creditCardNumber: z.string().nullish(), // Last 4 digits only for display
  creditCardMaskNumber: z.string().nullish(), // Masked number
  expirationMonth: z.number().nullish(),
  expirationYear: z.number().nullish(),
  cardHolderName: z.string().nullish(),

  // ACH fields
  bankAccountType: z.enum(['BusinessChecking', 'Checking', 'Saving']).nullish(),
  bankAccountName: z.string().nullish(),
  bankAccountMaskNumber: z.string().nullish(),
  bankName: z.string().nullish(),
  bankABACode: z.string().nullish(), // Routing number

  // General
  isDefault: z.boolean().nullish(),

  // Custom fields placeholder
  customFields: z.record(z.any()).nullish(),
});

export type PaymentMethod = z.infer<typeof PaymentMethodSchema>;

export const AccountSchema = z.object({
  // Required fields
  name: z.string(),
  currency: z.string(),

  // Optional fields
  id: z.string().nullish(), // Zuora-assigned ID (for existing accounts)
  accountNumber: z.string().nullish(), // Customer-facing account number
  status: z.enum(['Draft', 'Active', 'Canceled']).nullish(),

  // Contacts (at least billTo required for orders)
  billToContact: ContactSchema.nullish(),
  soldToContact: ContactSchema.nullish(),

  // Billing settings
  autoPay: z.boolean().nullish(),
  paymentTerm: z.string().nullish(), // Net 30, Due Upon Receipt, etc.
  batch: z.string().nullish(), // Billing batch
  invoiceDeliveryPrefsEmail: z.boolean().nullish(),
  invoiceDeliveryPrefsPrint: z.boolean().nullish(),
  invoiceTemplateId: z.string().nullish(),
  communicationProfileId: z.string().nullish(),

  // Credit/Balance
  creditBalance: z.number().nullish(),
  creditMemoTemplateId: z.string().nullish(),
  debitMemoTemplateId: z.string().nullish(),

  // Payment Method
  paymentMethod: PaymentMethodSchema.nullish(),
  defaultPaymentMethodId: z.string().nullish(),
  paymentGateway: z.string().nullish(),

  // Tax
  taxCompanyCode: z.string().nullish(),
  taxExemptCertificateId: z.string().nullish(),
  taxExemptCertificateType: z.string().nullish(),
  taxExemptDescription: z.string().nullish(),
  taxExemptEffectiveDate: z.string().nullish(),
  taxExemptExpirationDate: z.string().nullish(),
  taxExemptIssuingJurisdiction: z.string().nullish(),
  taxExemptStatus: z.string().nullish(),
  VATId: z.string().nullish(),

  // CRM Integration
  crmId: z.string().nullish(),
  salesRep: z.string().nullish(),
  parentId: z.string().nullish(), // For account hierarchy

  // Subscription settings
  allowInvoiceEdit: z.boolean().nullish(),
  invoiceSeparately: z.boolean().nullish(),
  sequenceSetId: z.string().nullish(),

  // Notes
  notes: z.string().nullish(),
  additionalEmailAddresses: z.array(z.string()).nullish(),

  // Custom fields placeholder
  customFields: z.record(z.any()).nullish(),
});

export type Account = z.infer<typeof AccountSchema>;

// ============================================================================
// Enhanced Subscription Schema (For Orders API)
// ============================================================================

// Charge override for Orders API
export const ChargeOverrideSchema = z.object({
  // Identification
  productRatePlanChargeId: z.string().nullish(), // Required to identify which charge to override
  chargeNumber: z.string().nullish(), // For existing charges

  // Name override
  name: z.string().nullish(),
  description: z.string().nullish(),

  // Pricing overrides
  pricing: z.object({
    // For per-unit pricing
    listPrice: z.number().nullish(),

    // For flat fee or recurring
    recurringFlatFee: z.object({
      listPrice: z.number().nullish(),
    }).nullish(),

    // For tiered/volume pricing
    tiers: z.array(z.object({
      tier: z.number(),
      startingUnit: z.number(),
      endingUnit: z.number().nullable(),
      price: z.number(),
      priceFormat: z.enum(['FlatFee', 'PerUnit']).nullish(),
    })).nullish(),

    // For usage pricing
    usagePerUnit: z.object({
      listPrice: z.number().nullish(),
      includedUnits: z.number().nullish(),
      overagePrice: z.number().nullish(),
    }).nullish(),

    // Discount override
    discountPercentage: z.number().nullish(),
    discountAmount: z.number().nullish(),
  }).nullish(),

  // Quantity override
  quantity: z.number().nullish(),

  // Date overrides
  effectiveStartDate: z.string().nullish(),
  effectiveEndDate: z.string().nullish(),
  triggerDate: z.string().nullish(),
  triggerEvent: z.string().nullish(),

  // Billing overrides
  billingPeriod: z.string().nullish(),
  billingPeriodAlignment: z.string().nullish(),
  billingTiming: BillingTimingSchema.nullish(),
  specificBillingPeriod: z.number().nullish(),
  endDateCondition: z.string().nullish(),
  upToPeriods: z.number().nullish(),
  upToPeriodsType: z.string().nullish(),

  // Revenue schedule overrides
  revRecCode: z.string().nullish(),
  revRecTriggerCondition: z.string().nullish(),
  revenueRecognitionRuleName: z.string().nullish(),

  // Custom fields
  customFields: z.record(z.any()).nullish(),
});

export type ChargeOverride = z.infer<typeof ChargeOverrideSchema>;

// Rate plan for subscription (with overrides)
export const SubscriptionRatePlanSchema = z.object({
  // Required: Reference to product catalog
  productRatePlanId: z.string().nullish(), // For new rate plans from catalog
  ratePlanId: z.string().nullish(), // For existing subscription rate plans

  // Names (for display/documentation)
  productName: z.string(),
  ratePlanName: z.string(),

  // Charge overrides
  chargeOverrides: z.array(ChargeOverrideSchema).nullish(),

  // External reference
  externalIdSourceSystem: z.string().nullish(),
  externallyManagedPlanId: z.string().nullish(),

  // Custom fields
  customFields: z.record(z.any()).nullish(),
});

export type SubscriptionRatePlan = z.infer<typeof SubscriptionRatePlanSchema>;

// Enhanced subscription for Orders API
export const EnhancedSubscriptionSchema = z.object({
  // Account reference (required for Orders API)
  accountId: z.string().nullish(),
  accountNumber: z.string().nullish(),
  invoiceOwnerAccountId: z.string().nullish(), // For invoice owner different from subscriber

  // Subscription identification
  subscriptionNumber: z.string().nullish(), // Customer-facing number
  name: z.string(),

  // Term settings
  termType: z.enum(['TERMED', 'EVERGREEN']),
  initialTerm: z.number().nullish(),
  initialTermPeriodType: z.enum(['Month', 'Year', 'Day', 'Week']).nullish(),
  renewalTerm: z.number().nullish(),
  renewalTermPeriodType: z.enum(['Month', 'Year', 'Day', 'Week']).nullish(),
  autoRenew: z.boolean().nullish(),
  renewalSetting: z.enum(['RENEW_WITH_SPECIFIC_TERM', 'RENEW_TO_EVERGREEN']).nullish(),

  // Key dates
  contractEffectiveDate: z.string(),
  serviceActivationDate: z.string(),
  customerAcceptanceDate: z.string(),
  subscriptionStartDate: z.string().nullish(),
  subscriptionEndDate: z.string().nullish(),
  termStartDate: z.string().nullish(),
  termEndDate: z.string().nullish(),

  // Version tracking
  version: z.number().nullish(),
  status: z.enum(['Draft', 'Pending Activation', 'Pending Acceptance', 'Active', 'Cancelled', 'Suspended', 'Expired']).nullish(),

  // Currency
  currency: z.string(),

  // Rate plans
  ratePlans: z.array(SubscriptionRatePlanSchema),

  // Invoice settings
  invoiceSeparately: z.boolean().nullish(),
  invoiceTemplateId: z.string().nullish(),
  notes: z.string().nullish(),

  // External management
  externallyManagedBy: z.string().nullish(),

  // Custom fields
  customFields: z.record(z.any()).nullish(),
});

export type EnhancedSubscription = z.infer<typeof EnhancedSubscriptionSchema>;

// ============================================================================
// Order Schema (For Orders API)
// ============================================================================

export const OrderActionSchema = z.object({
  type: z.enum([
    'CreateSubscription',
    'AddProduct',
    'UpdateProduct',
    'RemoveProduct',
    'RenewSubscription',
    'TermsAndConditions',
    'CancelSubscription',
    'SuspendSubscription',
    'ResumeSubscription',
    'OwnerTransfer',
  ]),

  // For CreateSubscription
  createSubscription: z.object({
    subscription: EnhancedSubscriptionSchema.nullish(),
    subscribeToRatePlans: z.array(SubscriptionRatePlanSchema).nullish(),
  }).nullish(),

  // For AddProduct
  addProduct: z.object({
    productRatePlanId: z.string().nullish(),
    chargeOverrides: z.array(ChargeOverrideSchema).nullish(),
  }).nullish(),

  // For UpdateProduct
  updateProduct: z.object({
    ratePlanId: z.string().nullish(),
    chargeUpdates: z.array(ChargeOverrideSchema).nullish(),
  }).nullish(),

  // For RemoveProduct
  removeProduct: z.object({
    ratePlanId: z.string().nullish(),
  }).nullish(),

  // Trigger dates
  triggerDates: z.array(z.object({
    name: z.enum(['ContractEffective', 'ServiceActivation', 'CustomerAcceptance']),
    triggerDate: z.string(),
  })).nullish(),

  // Billing details
  billToContactId: z.string().nullish(),
  soldToContactId: z.string().nullish(),
});

export type OrderAction = z.infer<typeof OrderActionSchema>;

export const OrderSchema = z.object({
  // Order identification
  orderNumber: z.string().nullish(), // Auto-generated or customer-provided
  orderDate: z.string(),
  description: z.string().nullish(),

  // Associated account
  existingAccountNumber: z.string().nullish(),
  newAccount: AccountSchema.nullish(), // For creating account with order

  // Actions in this order
  subscriptions: z.array(z.object({
    subscriptionNumber: z.string().nullish(),
    orderActions: z.array(OrderActionSchema),
  })),

  // Processing options
  processingOptions: z.object({
    runBilling: z.boolean().nullish(),
    collectPayment: z.boolean().nullish(),
  }).nullish(),

  // Custom fields
  customFields: z.record(z.any()).nullish(),
});

export type Order = z.infer<typeof OrderSchema>;

// ============================================================================
// Enhanced Billings Schema (With Invoice Details)
// ============================================================================

export const EnhancedBillingsRowSchema = z.object({
  // Invoice identification
  'Invoice Number': z.string().nullish(),
  'Invoice Id': z.string().nullish(),
  'Invoice Date': z.string(),
  'Posted Date': z.string().nullish(),
  'Due Date': z.string().nullish(),
  'Invoice Status': z.enum(['Draft', 'Posted', 'Canceled', 'Error']).nullish(),

  // Charge details
  'Billing Date': z.string(),
  'Charge Name': z.string(),
  'Charge Number': z.string().nullish(),
  'Charge Id': z.string().nullish(),
  'Rate Plan': z.string(),
  'Rate Plan Id': z.string().nullish(),
  'Product': z.string(),
  'Product Id': z.string().nullish(),

  // Service period
  'Billing Period Start': z.string(),
  'Billing Period End': z.string(),
  'Service Start Date': z.string().nullish(),
  'Service End Date': z.string().nullish(),

  // Quantities and pricing
  'Quantity': z.number(),
  'Unit Price': z.number(),
  'Subtotal': z.number().nullish(), // Before tax/discount
  'Discount Amount': z.number().nullish(),
  'Tax Amount': z.number().nullish(),
  'Amount': z.number(), // Final amount

  // Tax details
  'Tax Code': z.string().nullish(),
  'Tax Rate': z.number().nullish(),
  'Tax Jurisdiction': z.string().nullish(),
  'Tax Exempt Amount': z.number().nullish(),

  // Currency
  'Currency': z.string(),

  // Payment
  'Payment Term': z.string().nullish(),
  'Balance': z.number().nullish(), // Amount remaining to be paid
  'Payment Amount': z.number().nullish(), // Amount already paid

  // Accounting
  'Accounting Code': z.string().nullish(),
  'Deferred Revenue Accounting Code': z.string().nullish(),
  'Recognized Revenue Accounting Code': z.string().nullish(),

  // Reference
  'Subscription Number': z.string().nullish(),
  'Subscription Id': z.string().nullish(),
  'Account Number': z.string().nullish(),
  'Account Id': z.string().nullish(),

  // UOM for usage
  'UOM': z.string().nullish(),

  // Processing info
  'Processing Type': z.enum(['Charge', 'Credit', 'Discount']).nullish(),
  'Applied To Invoice Item Id': z.string().nullish(), // For credits/discounts

  // Custom fields
  customFields: z.record(z.any()).nullish(),
});

export type EnhancedBillingsRow = z.infer<typeof EnhancedBillingsRowSchema>;

export const EnhancedBillingsOutputSchema = z.object({
  zb_billings: z.array(EnhancedBillingsRowSchema),

  // Invoice summary (aggregated by invoice)
  invoice_summary: z.array(z.object({
    'Invoice Number': z.string(),
    'Invoice Date': z.string(),
    'Due Date': z.string().nullish(),
    'Subtotal': z.number(),
    'Discount': z.number(),
    'Tax': z.number(),
    'Total': z.number(),
    'Balance': z.number(),
    'Currency': z.string(),
    'Line Count': z.number(),
  })).nullish(),

  assumptions: z.array(z.string()),
  open_questions: z.array(z.string()),
});

export type EnhancedBillingsOutput = z.infer<typeof EnhancedBillingsOutputSchema>;

// ============================================================================
// Full ZB API-Ready Output Schema
// ============================================================================

export const ZuoraBillingObjectsSchema = z.object({
  // Product catalog
  productCatalog: z.array(ProductCatalogEntrySchema).nullish(),

  // Account
  account: AccountSchema.nullish(),

  // Order (contains subscription actions)
  order: OrderSchema.nullish(),

  // Enhanced subscription (standalone, without order)
  subscription: EnhancedSubscriptionSchema.nullish(),

  // Enhanced billings
  billings: EnhancedBillingsOutputSchema.nullish(),
});

export type ZuoraBillingObjects = z.infer<typeof ZuoraBillingObjectsSchema>;

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

  // ZB API-ready objects (optional, for future direct API creation)
  zb_api_objects: ZuoraBillingObjectsSchema.optional(),
});

export type ZucaOutput = z.infer<typeof ZucaOutputSchema>;
