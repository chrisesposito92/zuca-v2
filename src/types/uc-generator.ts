import { z } from 'zod';

// ============================================================================
// INPUT SCHEMA
// ============================================================================

/**
 * Number of use cases to generate (1-3)
 */
export const NumUseCasesSchema = z.union([z.literal(1), z.literal(2), z.literal(3)]);
export type NumUseCases = z.infer<typeof NumUseCasesSchema>;

/**
 * Input schema for UC Generator
 */
export const UCGeneratorInputSchema = z.object({
  /** Customer/Company name */
  customer_name: z.string().min(1, 'Customer name is required'),

  /** Customer website URL */
  customer_website: z.string().min(1, 'Customer website is required'),

  /** Number of use cases to generate (1-3) */
  num_use_cases: NumUseCasesSchema.default(1),

  /** Optional notes from the user to guide generation */
  user_notes: z.string().optional(),
});

export type UCGeneratorInput = z.infer<typeof UCGeneratorInputSchema>;

// ============================================================================
// CUSTOMER RESEARCH SCHEMA (Step 1 Output)
// ============================================================================

/**
 * Source visibility for pricing/naming
 */
export const SourceTypeSchema = z.enum(['explicit', 'inferred']);
export type SourceType = z.infer<typeof SourceTypeSchema>;

/**
 * Price source options
 */
export const PriceSourceSchema = z.enum(['explicit', 'inferred', 'none']);
export type PriceSource = z.infer<typeof PriceSourceSchema>;

/**
 * Pricing visibility options
 */
export const PricingVisibilitySchema = z.enum(['explicit', 'inferred', 'not_shown']);
export type PricingVisibility = z.infer<typeof PricingVisibilitySchema>;

/**
 * Product category
 */
export const ProductCategorySchema = z.enum(['SaaS', 'Service', 'Hardware', 'Support', 'Usage', 'Other']);
export type ProductCategory = z.infer<typeof ProductCategorySchema>;

/**
 * Primary billing model
 */
export const BillingModelSchema = z.enum(['recurring', 'one_time', 'usage', 'mixed', 'unknown']);
export type BillingModel = z.infer<typeof BillingModelSchema>;

/**
 * Typical contract term
 */
export const TypicalTermSchema = z.enum(['monthly', 'annual', 'multi_year', 'month_to_month', 'unknown']);
export type TypicalTerm = z.infer<typeof TypicalTermSchema>;

/**
 * Typical billing period for research
 */
export const ResearchBillingPeriodSchema = z.enum([
  'Monthly',
  'Quarterly',
  'Annually',
  'One-time',
  'Per-usage',
  'unknown',
]);
export type ResearchBillingPeriod = z.infer<typeof ResearchBillingPeriodSchema>;

/**
 * List price currency
 */
export const ListPriceCurrencySchema = z.enum(['USD', 'EUR', 'CAD', 'other', 'unknown']);
export type ListPriceCurrency = z.infer<typeof ListPriceCurrencySchema>;

/**
 * Company profile from research
 */
export const CompanyProfileSchema = z.object({
  name: z.string(),
  website: z.string(),
  industry_guess: z.string(),
  go_to_market_notes: z.string(),
});
export type CompanyProfile = z.infer<typeof CompanyProfileSchema>;

/**
 * Product in the catalog
 */
export const ProductCatalogItemSchema = z.object({
  product_name: z.string(),
  name_source: SourceTypeSchema,
  category: ProductCategorySchema,
  is_subscription: z.boolean(),
  primary_billing_model: BillingModelSchema,
  typical_term: TypicalTermSchema,
  typical_billing_period: ResearchBillingPeriodSchema,
  pricing_visibility: PricingVisibilitySchema,
  price_source: PriceSourceSchema,
  list_price_example: z.string(),
  list_price_currency: ListPriceCurrencySchema,
  list_price_unit: z.string(),
  pricing_notes: z.string(),
  packaging_notes: z.string(),
  key_features: z.array(z.string()),
});
export type ProductCatalogItem = z.infer<typeof ProductCatalogItemSchema>;

/**
 * Bundle or plan
 */
export const BundleOrPlanSchema = z.object({
  plan_name: z.string(),
  name_source: SourceTypeSchema,
  included_products: z.array(z.string()),
  who_it_is_for: z.string(),
  price_presentation: z.string(),
  plan_pricing_visibility: PricingVisibilitySchema,
  plan_price_example: z.string(),
  plan_price_source: PriceSourceSchema,
  discount_or_tier_notes: z.string(),
  source_urls: z.array(z.string()),
});
export type BundleOrPlan = z.infer<typeof BundleOrPlanSchema>;

/**
 * Charge pattern for revenue recognition
 */
export const ChargePatternSchema = z.enum([
  'recurring_subscription',
  'onboarding_service',
  'implementation',
  'training',
  'support',
  'usage',
  'hardware',
  'other',
]);
export type ChargePattern = z.infer<typeof ChargePatternSchema>;

/**
 * Likely POB type
 */
export const LikelyPobTypeSchema = z.enum(['over_time', 'point_in_time', 'consumption', 'event_based', 'unknown']);
export type LikelyPobType = z.infer<typeof LikelyPobTypeSchema>;

/**
 * Likely release pattern
 */
export const LikelyReleasePatternSchema = z.enum([
  'ratable_over_term',
  'at_go_live',
  'at_delivery',
  'as_billed',
  'as_used',
  'unknown',
]);
export type LikelyReleasePattern = z.infer<typeof LikelyReleasePatternSchema>;

/**
 * Confidence level
 */
export const ConfidenceLevelSchema = z.enum(['low', 'medium', 'high']);
export type ConfidenceLevel = z.infer<typeof ConfidenceLevelSchema>;

/**
 * Revenue recognition inference
 */
export const RevRecInferenceSchema = z.object({
  charge_pattern: ChargePatternSchema,
  likely_pob_type: LikelyPobTypeSchema,
  likely_release_pattern: LikelyReleasePatternSchema,
  reasoning: z.string(),
  confidence: ConfidenceLevelSchema,
});
export type RevRecInference = z.infer<typeof RevRecInferenceSchema>;

/**
 * Data completeness level
 */
export const DataCompletenessSchema = z.enum(['high', 'medium', 'low']);
export type DataCompleteness = z.infer<typeof DataCompletenessSchema>;

/**
 * Research metadata
 */
export const ResearchMetaSchema = z.object({
  primary_pages_considered: z.array(z.string()),
  data_completeness: DataCompletenessSchema,
  known_gaps: z.array(z.string()),
});
export type ResearchMeta = z.infer<typeof ResearchMetaSchema>;

/**
 * Complete customer research output (Step 1)
 */
export const CustomerResearchSchema = z.object({
  company_profile: CompanyProfileSchema,
  product_catalog: z.array(ProductCatalogItemSchema),
  bundles_or_plans: z.array(BundleOrPlanSchema),
  revrec_inferences: z.array(RevRecInferenceSchema),
  research_meta: ResearchMetaSchema,
});
export type CustomerResearch = z.infer<typeof CustomerResearchSchema>;

// ============================================================================
// GENERATED USE CASES SCHEMA (Step 2 Output)
// ============================================================================

/**
 * Charge group for revenue recognition notes
 */
export const ChargeGroupSchema = z.enum(['Subscription', 'Onboarding', 'Services', 'Usage', 'Hardware', 'Other']);
export type ChargeGroup = z.infer<typeof ChargeGroupSchema>;

/**
 * Release pattern for use case rev rec notes
 */
export const UCReleasePatternSchema = z.enum([
  'ratable_over_term',
  'at_go_live',
  'at_delivery',
  'as_billed',
  'as_used',
  'unknown',
]);
export type UCReleasePattern = z.infer<typeof UCReleasePatternSchema>;

/**
 * Revenue recognition note for a use case
 */
export const UCRevRecNoteSchema = z.object({
  charge_group: ChargeGroupSchema,
  likely_pob_type: LikelyPobTypeSchema,
  release_pattern: UCReleasePatternSchema,
  confidence: ConfidenceLevelSchema,
  notes: z.string(),
});
export type UCRevRecNote = z.infer<typeof UCRevRecNoteSchema>;

/**
 * OTR workflow inputs (maps to ZucaInput)
 */
export const OTRWorkflowInputsSchema = z.object({
  use_case: z.string(),
  customer_name: z.string(),
  contract_start_date: z.string().regex(/^(0[1-9]|1[0-2])\/(0[1-9]|[12][0-9]|3[01])\/\d{4}$/),
  terms_months: z.number().int().min(1),
  transaction_currency: z.enum(['USD', 'EUR', 'CAD', 'other']),
  billing_period: z.enum(['Monthly', 'Quarterly', 'Annually']),
  is_allocations: z.boolean(),
  allocation_method: z.enum(['Use List Price', 'Use Sell Price', 'Custom Formula', '']),
  allocation_custom_formula: z.string(),
  rev_rec_notes: z.array(UCRevRecNoteSchema).min(1),
});
export type OTRWorkflowInputs = z.infer<typeof OTRWorkflowInputsSchema>;

/**
 * Single generated use case
 */
export const GeneratedUseCaseSchema = z.object({
  id: z.string(),
  label: z.string(),
  otr_workflow_inputs: OTRWorkflowInputsSchema,
  assumptions: z.array(z.string()).min(1),
  risks_or_open_questions: z.array(z.string()).min(1),
});
export type GeneratedUseCase = z.infer<typeof GeneratedUseCaseSchema>;

/**
 * Complete generated use cases output (Step 2)
 */
export const GeneratedUseCasesSchema = z.object({
  customer_name: z.string(),
  customer_website: z.string(),
  num_use_cases: z.number().int().min(1),
  use_cases: z.array(GeneratedUseCaseSchema).min(1),
});
export type GeneratedUseCases = z.infer<typeof GeneratedUseCasesSchema>;

// ============================================================================
// FINAL OUTPUT SCHEMA
// ============================================================================

/**
 * Formatted output (Step 3)
 */
export const FormattedOutputSchema = z.object({
  markdown: z.string(),
});
export type FormattedOutput = z.infer<typeof FormattedOutputSchema>;

/**
 * Complete UC Generator output
 */
export const UCGeneratorOutputSchema = z.object({
  /** Raw customer research data */
  research: CustomerResearchSchema,

  /** Raw generated use cases */
  generated: GeneratedUseCasesSchema,

  /** Formatted markdown output */
  formatted: z.string(),

  /** Individual use cases for easy access */
  use_cases: z.array(GeneratedUseCaseSchema),

  /** Session metadata */
  session_id: z.string(),
  timestamp: z.string(),
});
export type UCGeneratorOutput = z.infer<typeof UCGeneratorOutputSchema>;

// ============================================================================
// JSON SCHEMAS FOR STRUCTURED OUTPUT
// ============================================================================

/**
 * JSON Schema for CustomerResearch (Step 1 output)
 */
export const customerResearchJsonSchema = {
  type: 'object',
  properties: {
    company_profile: {
      type: 'object',
      properties: {
        name: { type: 'string' },
        website: { type: 'string' },
        industry_guess: { type: 'string' },
        go_to_market_notes: { type: 'string' },
      },
      required: ['name', 'website', 'industry_guess', 'go_to_market_notes'],
      additionalProperties: false,
    },
    product_catalog: {
      type: 'array',
      items: {
        type: 'object',
        properties: {
          product_name: { type: 'string' },
          name_source: { type: 'string', enum: ['explicit', 'inferred'] },
          category: { type: 'string', enum: ['SaaS', 'Service', 'Hardware', 'Support', 'Usage', 'Other'] },
          is_subscription: { type: 'boolean' },
          primary_billing_model: { type: 'string', enum: ['recurring', 'one_time', 'usage', 'mixed', 'unknown'] },
          typical_term: { type: 'string', enum: ['monthly', 'annual', 'multi_year', 'month_to_month', 'unknown'] },
          typical_billing_period: {
            type: 'string',
            enum: ['Monthly', 'Quarterly', 'Annually', 'One-time', 'Per-usage', 'unknown'],
          },
          pricing_visibility: { type: 'string', enum: ['explicit', 'inferred', 'not_shown'] },
          price_source: { type: 'string', enum: ['explicit', 'inferred', 'none'] },
          list_price_example: { type: 'string' },
          list_price_currency: { type: 'string', enum: ['USD', 'EUR', 'CAD', 'other', 'unknown'] },
          list_price_unit: { type: 'string' },
          pricing_notes: { type: 'string' },
          packaging_notes: { type: 'string' },
          key_features: { type: 'array', items: { type: 'string' } },
        },
        required: [
          'product_name',
          'name_source',
          'category',
          'is_subscription',
          'primary_billing_model',
          'typical_term',
          'typical_billing_period',
          'pricing_visibility',
          'price_source',
          'list_price_example',
          'list_price_currency',
          'list_price_unit',
          'pricing_notes',
          'packaging_notes',
          'key_features',
        ],
        additionalProperties: false,
      },
    },
    bundles_or_plans: {
      type: 'array',
      items: {
        type: 'object',
        properties: {
          plan_name: { type: 'string' },
          name_source: { type: 'string', enum: ['explicit', 'inferred'] },
          included_products: { type: 'array', items: { type: 'string' } },
          who_it_is_for: { type: 'string' },
          price_presentation: { type: 'string' },
          plan_pricing_visibility: { type: 'string', enum: ['explicit', 'inferred', 'not_shown'] },
          plan_price_example: { type: 'string' },
          plan_price_source: { type: 'string', enum: ['explicit', 'inferred', 'none'] },
          discount_or_tier_notes: { type: 'string' },
          source_urls: { type: 'array', items: { type: 'string' } },
        },
        required: [
          'plan_name',
          'name_source',
          'included_products',
          'who_it_is_for',
          'price_presentation',
          'plan_pricing_visibility',
          'plan_price_example',
          'plan_price_source',
          'discount_or_tier_notes',
          'source_urls',
        ],
        additionalProperties: false,
      },
    },
    revrec_inferences: {
      type: 'array',
      items: {
        type: 'object',
        properties: {
          charge_pattern: {
            type: 'string',
            enum: [
              'recurring_subscription',
              'onboarding_service',
              'implementation',
              'training',
              'support',
              'usage',
              'hardware',
              'other',
            ],
          },
          likely_pob_type: {
            type: 'string',
            enum: ['over_time', 'point_in_time', 'consumption', 'event_based', 'unknown'],
          },
          likely_release_pattern: {
            type: 'string',
            enum: ['ratable_over_term', 'at_go_live', 'at_delivery', 'as_billed', 'as_used', 'unknown'],
          },
          reasoning: { type: 'string' },
          confidence: { type: 'string', enum: ['low', 'medium', 'high'] },
        },
        required: ['charge_pattern', 'likely_pob_type', 'likely_release_pattern', 'reasoning', 'confidence'],
        additionalProperties: false,
      },
    },
    research_meta: {
      type: 'object',
      properties: {
        primary_pages_considered: { type: 'array', items: { type: 'string' } },
        data_completeness: { type: 'string', enum: ['high', 'medium', 'low'] },
        known_gaps: { type: 'array', items: { type: 'string' } },
      },
      required: ['primary_pages_considered', 'data_completeness', 'known_gaps'],
      additionalProperties: false,
    },
  },
  required: ['company_profile', 'product_catalog', 'bundles_or_plans', 'revrec_inferences', 'research_meta'],
  additionalProperties: false,
};

/**
 * JSON Schema for GeneratedUseCases (Step 2 output)
 */
export const generatedUseCasesJsonSchema = {
  type: 'object',
  properties: {
    customer_name: { type: 'string' },
    customer_website: { type: 'string' },
    num_use_cases: { type: 'integer', minimum: 1 },
    use_cases: {
      type: 'array',
      minItems: 1,
      items: {
        type: 'object',
        properties: {
          id: { type: 'string' },
          label: { type: 'string' },
          otr_workflow_inputs: {
            type: 'object',
            properties: {
              use_case: { type: 'string' },
              customer_name: { type: 'string' },
              contract_start_date: {
                type: 'string',
                pattern: '^(0[1-9]|1[0-2])/(0[1-9]|[12][0-9]|3[01])/\\d{4}$',
              },
              terms_months: { type: 'integer', minimum: 1 },
              transaction_currency: { type: 'string', enum: ['USD', 'EUR', 'CAD', 'other'] },
              billing_period: { type: 'string', enum: ['Monthly', 'Quarterly', 'Annually'] },
              is_allocations: { type: 'boolean' },
              allocation_method: { type: 'string', enum: ['Use List Price', 'Use Sell Price', 'Custom Formula', ''] },
              allocation_custom_formula: { type: 'string' },
              rev_rec_notes: {
                type: 'array',
                minItems: 1,
                items: {
                  type: 'object',
                  properties: {
                    charge_group: {
                      type: 'string',
                      enum: ['Subscription', 'Onboarding', 'Services', 'Usage', 'Hardware', 'Other'],
                    },
                    likely_pob_type: {
                      type: 'string',
                      enum: ['over_time', 'point_in_time', 'consumption', 'event_based', 'unknown'],
                    },
                    release_pattern: {
                      type: 'string',
                      enum: ['ratable_over_term', 'at_go_live', 'at_delivery', 'as_billed', 'as_used', 'unknown'],
                    },
                    confidence: { type: 'string', enum: ['low', 'medium', 'high'] },
                    notes: { type: 'string' },
                  },
                  required: ['charge_group', 'likely_pob_type', 'release_pattern', 'confidence', 'notes'],
                  additionalProperties: false,
                },
              },
            },
            required: [
              'use_case',
              'customer_name',
              'contract_start_date',
              'terms_months',
              'transaction_currency',
              'billing_period',
              'is_allocations',
              'allocation_method',
              'allocation_custom_formula',
              'rev_rec_notes',
            ],
            additionalProperties: false,
          },
          assumptions: { type: 'array', minItems: 1, items: { type: 'string' } },
          risks_or_open_questions: { type: 'array', minItems: 1, items: { type: 'string' } },
        },
        required: ['id', 'label', 'otr_workflow_inputs', 'assumptions', 'risks_or_open_questions'],
        additionalProperties: false,
      },
    },
  },
  required: ['customer_name', 'customer_website', 'num_use_cases', 'use_cases'],
  additionalProperties: false,
};

// ============================================================================
// VALIDATION HELPERS
// ============================================================================

/**
 * Validate and return a UCGeneratorInput object
 */
export function validateUCGeneratorInput(input: unknown): UCGeneratorInput {
  const result = UCGeneratorInputSchema.safeParse(input);
  if (!result.success) {
    const errors = result.error.errors.map((e) => `${e.path.join('.')}: ${e.message}`);
    throw new Error(`Invalid UC Generator input: ${errors.join(', ')}`);
  }
  return result.data;
}

/**
 * Validate CustomerResearch output
 */
export function validateCustomerResearch(data: unknown): CustomerResearch {
  const result = CustomerResearchSchema.safeParse(data);
  if (!result.success) {
    const errors = result.error.errors.map((e) => `${e.path.join('.')}: ${e.message}`);
    throw new Error(`Invalid customer research: ${errors.join(', ')}`);
  }
  return result.data;
}

/**
 * Validate GeneratedUseCases output
 */
export function validateGeneratedUseCases(data: unknown): GeneratedUseCases {
  const result = GeneratedUseCasesSchema.safeParse(data);
  if (!result.success) {
    const errors = result.error.errors.map((e) => `${e.path.join('.')}: ${e.message}`);
    throw new Error(`Invalid generated use cases: ${errors.join(', ')}`);
  }
  return result.data;
}
