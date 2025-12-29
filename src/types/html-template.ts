import { z } from 'zod';

// ============================================================================
// INPUT SCHEMA
// ============================================================================

/**
 * Mode for HTML template generation
 */
export const HTMLTemplateModeSchema = z.enum(['code', 'expression']);
export type HTMLTemplateMode = z.infer<typeof HTMLTemplateModeSchema>;

/**
 * Document type for template context
 */
export const DocumentTypeSchema = z.enum(['invoice', 'credit_memo', 'debit_memo']);
export type DocumentType = z.infer<typeof DocumentTypeSchema>;

/**
 * Context options for template generation
 */
export const HTMLTemplateContextSchema = z.object({
  documentType: DocumentTypeSchema.default('invoice'),
  existingCode: z.string().optional(),
});
export type HTMLTemplateContext = z.infer<typeof HTMLTemplateContextSchema>;

/**
 * Input schema for HTML Template Builder
 */
export const HTMLTemplateRequestSchema = z.object({
  /** Generation mode: 'code' for merge fields, 'expression' for Wp_Eval */
  mode: HTMLTemplateModeSchema,

  /** Natural language description of what to generate */
  description: z.string().min(10, 'Description must be at least 10 characters'),

  /** Optional context for generation */
  context: HTMLTemplateContextSchema.optional(),

  /** Optional quick template ID to use as starting point */
  templateId: z.string().optional(),
});

export type HTMLTemplateRequest = z.infer<typeof HTMLTemplateRequestSchema>;

// ============================================================================
// CODE GENERATOR OUTPUT SCHEMA
// ============================================================================

/**
 * Output from template code generation
 */
export const HTMLTemplateCodeOutputSchema = z.object({
  /** Generated HTML/merge field code */
  code: z.string(),

  /** Explanation of what the code does and why */
  explanation: z.string(),

  /** Zuora objects referenced in the code */
  objects_used: z.array(z.string()),

  /** Functions used in the code (Round, Localise, etc.) */
  functions_used: z.array(z.string()),

  /** Optional notes, caveats, or customization suggestions */
  notes: z.array(z.string()).optional(),
});

export type HTMLTemplateCodeOutput = z.infer<typeof HTMLTemplateCodeOutputSchema>;

// ============================================================================
// EXPRESSION BUILDER OUTPUT SCHEMA
// ============================================================================

/**
 * Output type for expressions
 */
export const ExpressionOutputTypeSchema = z.enum(['number', 'string', 'boolean', 'html']);
export type ExpressionOutputType = z.infer<typeof ExpressionOutputTypeSchema>;

/**
 * Key-value pair for example inputs (OpenAI strict mode compatible)
 */
export const ExpressionInputPairSchema = z.object({
  field: z.string(),
  value: z.string(),
});
export type ExpressionInputPair = z.infer<typeof ExpressionInputPairSchema>;

/**
 * Example input/output for an expression
 */
export const ExpressionExampleSchema = z.object({
  input_values: z.array(ExpressionInputPairSchema),
  output: z.string(),
});
export type ExpressionExample = z.infer<typeof ExpressionExampleSchema>;

/**
 * Output from expression generation
 */
export const HTMLTemplateExpressionOutputSchema = z.object({
  /** The complete Wp_Eval expression */
  expression: z.string(),

  /** Explanation of how the expression works */
  explanation: z.string(),

  /** Merge fields used as inputs to the expression */
  input_fields: z.array(z.string()),

  /** What type of value the expression produces */
  output_type: ExpressionOutputTypeSchema,

  /** Optional example inputs and outputs */
  examples: z.array(ExpressionExampleSchema).optional(),
});

export type HTMLTemplateExpressionOutput = z.infer<typeof HTMLTemplateExpressionOutputSchema>;

// ============================================================================
// COMBINED OUTPUT SCHEMA
// ============================================================================

/**
 * Complete output from HTML Template Builder (either mode)
 */
export const HTMLTemplateOutputSchema = z.discriminatedUnion('mode', [
  z.object({
    mode: z.literal('code'),
    result: HTMLTemplateCodeOutputSchema,
  }),
  z.object({
    mode: z.literal('expression'),
    result: HTMLTemplateExpressionOutputSchema,
  }),
]);

export type HTMLTemplateOutput = z.infer<typeof HTMLTemplateOutputSchema>;

// ============================================================================
// QUICK TEMPLATE TYPES
// ============================================================================

/**
 * Category for quick templates
 */
export const QuickTemplateCategorySchema = z.enum([
  'tables',
  'addresses',
  'payments',
  'taxes',
  'subscriptions',
  'calculations',
  'conditionals',
  'formatting',
]);
export type QuickTemplateCategory = z.infer<typeof QuickTemplateCategorySchema>;

/**
 * Quick template definition
 */
export const QuickTemplateSchema = z.object({
  id: z.string(),
  name: z.string(),
  description: z.string(),
  category: QuickTemplateCategorySchema,
  mode: HTMLTemplateModeSchema,
  prompt: z.string(),
});

export type QuickTemplate = z.infer<typeof QuickTemplateSchema>;

// ============================================================================
// JSON SCHEMAS FOR STRUCTURED OUTPUT
// ============================================================================

/**
 * JSON Schema for HTMLTemplateCodeOutput (used by LLM)
 */
export const htmlTemplateCodeJsonSchema = {
  type: 'object',
  properties: {
    code: {
      type: 'string',
      description: 'Generated HTML/merge field code',
    },
    explanation: {
      type: 'string',
      description: 'Explanation of what the code does and why this structure was chosen',
    },
    objects_used: {
      type: 'array',
      items: { type: 'string' },
      description: 'Zuora objects referenced (e.g., Invoice, InvoiceItem, Account)',
    },
    functions_used: {
      type: 'array',
      items: { type: 'string' },
      description: 'Functions applied (e.g., Round, Localise, SortBy)',
    },
    notes: {
      type: 'array',
      items: { type: 'string' },
      description: 'Optional caveats, tips, or customization suggestions',
    },
  },
  required: ['code', 'explanation', 'objects_used', 'functions_used', 'notes'],
  additionalProperties: false,
};

/**
 * JSON Schema for HTMLTemplateExpressionOutput (used by LLM)
 */
export const htmlTemplateExpressionJsonSchema = {
  type: 'object',
  properties: {
    expression: {
      type: 'string',
      description: 'The complete Wp_Eval expression including opening/closing tags',
    },
    explanation: {
      type: 'string',
      description: 'How the expression works and what it calculates',
    },
    input_fields: {
      type: 'array',
      items: { type: 'string' },
      description: 'Merge fields used as inputs to the expression',
    },
    output_type: {
      type: 'string',
      enum: ['number', 'string', 'boolean', 'html'],
      description: 'What type of value the expression produces',
    },
    examples: {
      type: 'array',
      items: {
        type: 'object',
        properties: {
          input_values: {
            type: 'array',
            items: {
              type: 'object',
              properties: {
                field: {
                  type: 'string',
                  description: 'The merge field name',
                },
                value: {
                  type: 'string',
                  description: 'The sample value for this field',
                },
              },
              required: ['field', 'value'],
              additionalProperties: false,
            },
            description: 'Sample input values for each merge field',
          },
          output: {
            type: 'string',
            description: 'What the expression produces with these inputs',
          },
        },
        required: ['input_values', 'output'],
        additionalProperties: false,
      },
      description: 'Optional example inputs and outputs',
    },
  },
  required: ['expression', 'explanation', 'input_fields', 'output_type', 'examples'],
  additionalProperties: false,
};

// ============================================================================
// VALIDATION HELPERS
// ============================================================================

/**
 * Validate and return an HTMLTemplateRequest object
 */
export function validateHTMLTemplateRequest(input: unknown): HTMLTemplateRequest {
  const result = HTMLTemplateRequestSchema.safeParse(input);
  if (!result.success) {
    const errors = result.error.errors.map((e) => `${e.path.join('.')}: ${e.message}`);
    throw new Error(`Invalid HTML Template request: ${errors.join(', ')}`);
  }
  return result.data;
}

/**
 * Validate HTMLTemplateCodeOutput
 */
export function validateHTMLTemplateCodeOutput(data: unknown): HTMLTemplateCodeOutput {
  const result = HTMLTemplateCodeOutputSchema.safeParse(data);
  if (!result.success) {
    const errors = result.error.errors.map((e) => `${e.path.join('.')}: ${e.message}`);
    throw new Error(`Invalid template code output: ${errors.join(', ')}`);
  }
  return result.data;
}

/**
 * Validate HTMLTemplateExpressionOutput
 */
export function validateHTMLTemplateExpressionOutput(data: unknown): HTMLTemplateExpressionOutput {
  const result = HTMLTemplateExpressionOutputSchema.safeParse(data);
  if (!result.success) {
    const errors = result.error.errors.map((e) => `${e.path.join('.')}: ${e.message}`);
    throw new Error(`Invalid expression output: ${errors.join(', ')}`);
  }
  return result.data;
}

// ============================================================================
// TEMPLATE VALIDATOR TYPES
// ============================================================================

/**
 * Severity level for validation issues
 */
export const ValidationSeveritySchema = z.enum(['error', 'warning', 'suggestion']);
export type ValidationSeverity = z.infer<typeof ValidationSeveritySchema>;

/**
 * Category of validation issue
 */
export const ValidationCategorySchema = z.enum([
  'syntax', // Malformed merge fields, unclosed tags
  'section', // Unclosed sections, mismatched section tags
  'object_path', // Invalid or unknown object paths
  'function', // Unknown functions or incorrect usage
  'expression', // Issues inside Wp_Eval blocks
  'best_practice', // Style and best practice suggestions
]);
export type ValidationCategory = z.infer<typeof ValidationCategorySchema>;

/**
 * A single validation issue
 */
export const ValidationIssueSchema = z.object({
  /** Severity: error (won't render), warning (may cause issues), suggestion (improvement) */
  severity: ValidationSeveritySchema,

  /** Category of the issue */
  category: ValidationCategorySchema,

  /** Line number where issue occurs (1-indexed), null if not line-specific */
  line: z.number().nullable(),

  /** Column position (1-indexed), null if not position-specific */
  column: z.number().nullable(),

  /** The problematic code snippet */
  code_snippet: z.string(),

  /** Human-readable description of the issue */
  message: z.string(),

  /** Suggested fix or corrected code */
  suggestion: z.string().nullable(),
});

export type ValidationIssue = z.infer<typeof ValidationIssueSchema>;

/**
 * Summary statistics for validation results
 */
export const ValidationSummarySchema = z.object({
  /** Total number of issues found */
  total_issues: z.number(),

  /** Count by severity */
  errors: z.number(),
  warnings: z.number(),
  suggestions: z.number(),

  /** Whether the template is valid (no errors) */
  is_valid: z.boolean(),

  /** Objects detected in the template */
  objects_detected: z.array(z.string()),

  /** Functions detected in the template */
  functions_detected: z.array(z.string()),
});

export type ValidationSummary = z.infer<typeof ValidationSummarySchema>;

/**
 * Input for template validation
 */
export const TemplateValidationRequestSchema = z.object({
  /** The template code to validate */
  template: z.string().min(1, 'Template code is required'),

  /** Optional document type context */
  documentType: DocumentTypeSchema.optional().default('invoice'),
});

export type TemplateValidationRequest = z.infer<typeof TemplateValidationRequestSchema>;

/**
 * Output from template validation
 */
export const TemplateValidationOutputSchema = z.object({
  /** List of all issues found */
  issues: z.array(ValidationIssueSchema),

  /** Summary statistics */
  summary: ValidationSummarySchema,
});

export type TemplateValidationOutput = z.infer<typeof TemplateValidationOutputSchema>;

// ============================================================================
// VALIDATOR JSON SCHEMAS FOR LLM
// ============================================================================

/**
 * JSON Schema for LLM semantic validation output
 */
export const templateValidationJsonSchema = {
  type: 'object',
  properties: {
    issues: {
      type: 'array',
      items: {
        type: 'object',
        properties: {
          severity: {
            type: 'string',
            enum: ['error', 'warning', 'suggestion'],
            description: 'Severity: error (breaks rendering), warning (may cause issues), suggestion (improvement)',
          },
          category: {
            type: 'string',
            enum: ['syntax', 'section', 'object_path', 'function', 'expression', 'best_practice'],
            description: 'Category of the issue',
          },
          line: {
            type: ['number', 'null'],
            description: 'Line number (1-indexed) or null if not line-specific',
          },
          column: {
            type: ['number', 'null'],
            description: 'Column position (1-indexed) or null if not position-specific',
          },
          code_snippet: {
            type: 'string',
            description: 'The problematic code snippet',
          },
          message: {
            type: 'string',
            description: 'Human-readable description of the issue',
          },
          suggestion: {
            type: ['string', 'null'],
            description: 'Suggested fix or corrected code, null if no fix available',
          },
        },
        required: ['severity', 'category', 'line', 'column', 'code_snippet', 'message', 'suggestion'],
        additionalProperties: false,
      },
      description: 'List of validation issues found',
    },
    objects_detected: {
      type: 'array',
      items: { type: 'string' },
      description: 'Zuora objects detected in template (e.g., Invoice, Account, InvoiceItem)',
    },
    functions_detected: {
      type: 'array',
      items: { type: 'string' },
      description: 'Functions detected in template (e.g., Round, Localise, GroupBy)',
    },
  },
  required: ['issues', 'objects_detected', 'functions_detected'],
  additionalProperties: false,
};

/**
 * Validate TemplateValidationOutput
 */
export function validateTemplateValidationOutput(data: unknown): TemplateValidationOutput {
  const result = TemplateValidationOutputSchema.safeParse(data);
  if (!result.success) {
    const errors = result.error.errors.map((e) => `${e.path.join('.')}: ${e.message}`);
    throw new Error(`Invalid validation output: ${errors.join(', ')}`);
  }
  return result.data;
}

// ============================================================================
// GROUPBY WIZARD TYPES
// ============================================================================

/**
 * Available source lists for GroupBy operations
 */
export const GroupBySourceSchema = z.enum([
  'InvoiceItems',
  'TaxationItems',
  'InvoicePayments',
  'PaymentParts',
]);
export type GroupBySource = z.infer<typeof GroupBySourceSchema>;

/**
 * Common fields available for grouping
 */
export const GroupByFieldSchema = z.enum([
  // Subscription level
  'Subscription.Name',
  'Subscription.SubscriptionNumber',
  // Charge level
  'RatePlanCharge.ChargeType',
  'RatePlanCharge.ChargeModel',
  'RatePlanCharge.Name',
  // Product level
  'RatePlanCharge.ProductRatePlanCharge.ProductRatePlan.Product.Name',
  // Invoice Item fields
  'ChargeName',
  'ProcessingType',
  'UOM',
  // Service period
  'ServiceStartDate',
  'ServiceEndDate',
  // Custom - allows any dotted path
  'custom',
]);
export type GroupByField = z.infer<typeof GroupByFieldSchema>;

/**
 * A single grouping level configuration
 */
export const GroupByLevelSchema = z.object({
  /** Field to group by */
  field: z.string().min(1, 'Field is required'),

  /** Display label for this grouping level */
  label: z.string().optional(),
});
export type GroupByLevel = z.infer<typeof GroupByLevelSchema>;

/**
 * Aggregation type
 */
export const AggregationTypeSchema = z.enum(['Sum', 'Count', 'Average']);
export type AggregationType = z.infer<typeof AggregationTypeSchema>;

/**
 * A single aggregation configuration
 */
export const GroupByAggregationSchema = z.object({
  /** Field to aggregate */
  field: z.string().min(1, 'Field is required'),

  /** Aggregation function */
  type: AggregationTypeSchema.default('Sum'),

  /** Display label */
  label: z.string().optional(),

  /** Number of decimal places for rounding */
  decimals: z.number().min(0).max(10).default(2),

  /** Whether to format with locale */
  localise: z.boolean().default(true),
});
export type GroupByAggregation = z.infer<typeof GroupByAggregationSchema>;

/**
 * Column configuration for display within groups
 */
export const GroupByColumnSchema = z.object({
  /** Field path to display */
  field: z.string().min(1, 'Field is required'),

  /** Column header label */
  label: z.string(),

  /** Whether to format with locale */
  localise: z.boolean().default(false),

  /** Number of decimal places (for numbers) */
  decimals: z.number().min(0).max(10).optional(),

  /** Column alignment */
  align: z.enum(['left', 'center', 'right']).default('left'),
});
export type GroupByColumn = z.infer<typeof GroupByColumnSchema>;

/**
 * Sort configuration
 */
export const GroupBySortSchema = z.object({
  /** Field to sort by */
  field: z.string().min(1, 'Field is required'),

  /** Sort direction */
  direction: z.enum(['ASC', 'DESC']).default('ASC'),
});
export type GroupBySort = z.infer<typeof GroupBySortSchema>;

/**
 * Input for GroupBy Wizard
 */
export const GroupByWizardRequestSchema = z.object({
  /** Source list to group */
  source: GroupBySourceSchema.default('InvoiceItems'),

  /** Fields to group by (1-6 levels) */
  groupByFields: z.array(GroupByLevelSchema).min(1).max(6),

  /** Columns to display within each group */
  columns: z.array(GroupByColumnSchema).min(1),

  /** Aggregations to calculate for each group */
  aggregations: z.array(GroupByAggregationSchema).optional(),

  /** Sort before grouping */
  sortBy: GroupBySortSchema.optional(),

  /** Document type context */
  documentType: DocumentTypeSchema.default('invoice'),

  /** Whether to include subtotals for each group */
  includeSubtotals: z.boolean().default(true),

  /** Whether to show grand total at the end */
  includeGrandTotal: z.boolean().default(false),

  /** Optional natural language description for additional context */
  description: z.string().optional(),
});

export type GroupByWizardRequest = z.infer<typeof GroupByWizardRequestSchema>;

/**
 * Output from GroupBy Wizard
 */
export const GroupByWizardOutputSchema = z.object({
  /** Generated HTML/merge field code */
  code: z.string(),

  /** Explanation of the generated structure */
  explanation: z.string(),

  /** Variable assignments generated */
  variables: z.array(z.object({
    name: z.string(),
    purpose: z.string(),
  })),

  /** Objects used in the template */
  objects_used: z.array(z.string()),

  /** Functions used in the template */
  functions_used: z.array(z.string()),

  /** Tips for customization */
  customization_tips: z.array(z.string()),
});

export type GroupByWizardOutput = z.infer<typeof GroupByWizardOutputSchema>;

/**
 * JSON Schema for GroupBy Wizard Output (used by LLM)
 */
export const groupByWizardJsonSchema = {
  type: 'object',
  properties: {
    code: {
      type: 'string',
      description: 'Generated HTML and merge field code with GroupBy, Cmd_Assign, nested loops, and aggregations',
    },
    explanation: {
      type: 'string',
      description: 'Explanation of the generated structure and how it works',
    },
    variables: {
      type: 'array',
      items: {
        type: 'object',
        properties: {
          name: {
            type: 'string',
            description: 'Variable name assigned via Cmd_Assign',
          },
          purpose: {
            type: 'string',
            description: 'What this variable holds and how it is used',
          },
        },
        required: ['name', 'purpose'],
        additionalProperties: false,
      },
      description: 'Variables created via Cmd_Assign for nested group access',
    },
    objects_used: {
      type: 'array',
      items: { type: 'string' },
      description: 'Zuora objects used (e.g., InvoiceItems, Subscription)',
    },
    functions_used: {
      type: 'array',
      items: { type: 'string' },
      description: 'Functions used (e.g., GroupBy, Sum, SortBy, FlatMap)',
    },
    customization_tips: {
      type: 'array',
      items: { type: 'string' },
      description: 'Tips for customizing the output (styling, additional fields, etc.)',
    },
  },
  required: ['code', 'explanation', 'variables', 'objects_used', 'functions_used', 'customization_tips'],
  additionalProperties: false,
};

/**
 * Validate GroupByWizardRequest
 */
export function validateGroupByWizardRequest(input: unknown): GroupByWizardRequest {
  const result = GroupByWizardRequestSchema.safeParse(input);
  if (!result.success) {
    const errors = result.error.errors.map((e) => `${e.path.join('.')}: ${e.message}`);
    throw new Error(`Invalid GroupBy Wizard request: ${errors.join(', ')}`);
  }
  return result.data;
}

/**
 * Validate GroupByWizardOutput
 */
export function validateGroupByWizardOutput(data: unknown): GroupByWizardOutput {
  const result = GroupByWizardOutputSchema.safeParse(data);
  if (!result.success) {
    const errors = result.error.errors.map((e) => `${e.path.join('.')}: ${e.message}`);
    throw new Error(`Invalid GroupBy Wizard output: ${errors.join(', ')}`);
  }
  return result.data;
}

// ============================================================================
// SAMPLE DATA GENERATOR TYPES
// ============================================================================

/**
 * Industry preset for sample data generation
 */
export const SampleDataIndustrySchema = z.enum([
  'saas',
  'telecom',
  'utilities',
  'professional_services',
  'media',
  'healthcare',
  'general',
]);
export type SampleDataIndustry = z.infer<typeof SampleDataIndustrySchema>;

/**
 * Field type detected from merge fields
 */
export const ExtractedFieldTypeSchema = z.enum([
  'string',
  'number',
  'date',
  'boolean',
  'currency',
  'list',
  'object',
]);
export type ExtractedFieldType = z.infer<typeof ExtractedFieldTypeSchema>;

/**
 * A single field extracted from the template
 */
export const ExtractedFieldSchema = z.object({
  /** Full object path (e.g., "Invoice.Account.BillTo.FirstName") */
  path: z.string(),

  /** Inferred data type */
  type: ExtractedFieldTypeSchema,

  /** Whether this field is inside a loop */
  inLoop: z.boolean(),

  /** If in a loop, which loop (e.g., "InvoiceItems") */
  loopContext: z.string().nullable(),

  /** Functions applied to this field (e.g., ["Round", "Localise"]) */
  functions: z.array(z.string()),
});
export type ExtractedField = z.infer<typeof ExtractedFieldSchema>;

/**
 * Input for sample data generation
 */
export const SampleDataRequestSchema = z.object({
  /** The template code to parse for merge fields */
  template: z.string().min(1, 'Template code is required'),

  /** Document type context */
  documentType: DocumentTypeSchema.default('invoice'),

  /** Optional industry preset for realistic data */
  industry: SampleDataIndustrySchema.optional().default('general'),

  /** Number of invoice items to generate */
  itemCount: z.number().min(1).max(20).default(3),

  /** Currency code for amounts */
  currency: z.string().default('USD'),

  /** Optional custom company name */
  companyName: z.string().optional(),

  /** Optional seed for reproducible data */
  seed: z.string().optional(),
});
export type SampleDataRequest = z.infer<typeof SampleDataRequestSchema>;

/**
 * Output from sample data generation
 */
export const SampleDataOutputSchema = z.object({
  /** Generated JSON data matching the template structure */
  data: z.record(z.unknown()),

  /** Fields extracted from the template */
  fields_extracted: z.array(ExtractedFieldSchema),

  /** Lists/loops detected in the template */
  lists_detected: z.array(z.string()),

  /** Notes about the generated data */
  notes: z.array(z.string()),

  /** Industry used for generation */
  industry: SampleDataIndustrySchema,

  /** Currency used */
  currency: z.string(),
});
export type SampleDataOutput = z.infer<typeof SampleDataOutputSchema>;

/**
 * JSON Schema for Sample Data Output (used by LLM)
 * Note: data is output as a JSON string to work around OpenAI's
 * additionalProperties:false requirement on nested objects
 */
export const sampleDataJsonSchema = {
  type: 'object',
  properties: {
    data_json: {
      type: 'string',
      description: 'Generated sample data as a JSON STRING (will be parsed). Must be valid JSON containing all detected objects like Invoice, Account, InvoiceItems array, etc. Example: {"Invoice":{"InvoiceNumber":"INV-001"},"InvoiceItems":[...]}',
    },
    notes: {
      type: 'array',
      items: { type: 'string' },
      description: 'Notes about the generated data (e.g., assumptions made, customization tips)',
    },
  },
  required: ['data_json', 'notes'],
  additionalProperties: false,
};

/**
 * Validate SampleDataRequest
 */
export function validateSampleDataRequest(input: unknown): SampleDataRequest {
  const result = SampleDataRequestSchema.safeParse(input);
  if (!result.success) {
    const errors = result.error.errors.map((e) => `${e.path.join('.')}: ${e.message}`);
    throw new Error(`Invalid Sample Data request: ${errors.join(', ')}`);
  }
  return result.data;
}

/**
 * Validate SampleDataOutput
 */
export function validateSampleDataOutput(data: unknown): SampleDataOutput {
  const result = SampleDataOutputSchema.safeParse(data);
  if (!result.success) {
    const errors = result.error.errors.map((e) => `${e.path.join('.')}: ${e.message}`);
    throw new Error(`Invalid Sample Data output: ${errors.join(', ')}`);
  }
  return result.data;
}

// ============================================================================
// TEMPLATE DESIGN TYPES (AI-Powered Full Template Generation)
// ============================================================================

/**
 * Visual style preset for template design
 */
export const TemplateDesignStyleSchema = z.enum([
  'modern',     // Clean, minimal, sans-serif fonts
  'classic',    // Traditional, serif fonts, bordered tables
  'minimal',    // Ultra-simple, lots of whitespace
  'corporate',  // Professional, logo-focused, formal
]);
export type TemplateDesignStyle = z.infer<typeof TemplateDesignStyleSchema>;

/**
 * Optional section configuration for template design
 */
export const TemplateDesignSectionsSchema = z.object({
  /** Include company logo and address header */
  companyBranding: z.boolean().default(true),

  /** Include invoice number, date, due date header */
  invoiceHeader: z.boolean().default(true),

  /** Include bill-to and sold-to addresses */
  customerInfo: z.boolean().default(true),

  /** Include line items table */
  lineItemsTable: z.boolean().default(true),

  /** Enable grouping of line items */
  groupByEnabled: z.boolean().default(false),

  /** Field to group by (if groupByEnabled) */
  groupByField: z.string().optional(),

  /** Include tax breakdown section */
  taxSummary: z.boolean().default(true),

  /** Include payment information section */
  paymentInfo: z.boolean().default(false),

  /** Include footer with terms/notes */
  footer: z.boolean().default(true),
});
export type TemplateDesignSections = z.infer<typeof TemplateDesignSectionsSchema>;

/**
 * Optional color scheme for template design
 */
export const TemplateDesignColorsSchema = z.object({
  /** Primary brand color (e.g., '#0066cc') */
  primary: z.string().optional(),

  /** Secondary color for accents */
  secondary: z.string().optional(),

  /** Accent color for highlights */
  accent: z.string().optional(),
});
export type TemplateDesignColors = z.infer<typeof TemplateDesignColorsSchema>;

/**
 * Input for AI-powered template design
 */
export const TemplateDesignRequestSchema = z.object({
  /** Natural language description of template requirements */
  description: z.string().min(20, 'Description must be at least 20 characters'),

  /** Document type */
  documentType: DocumentTypeSchema.default('invoice'),

  /** Industry preset for semantic defaults */
  industry: SampleDataIndustrySchema.default('general'),

  /** Visual style preference */
  style: TemplateDesignStyleSchema.default('modern'),

  /** Currency for formatting */
  currency: z.string().default('USD'),

  /** Optional section configuration overrides */
  sections: TemplateDesignSectionsSchema.optional(),

  /** Optional custom color scheme */
  colors: TemplateDesignColorsSchema.optional(),
});
export type TemplateDesignRequest = z.infer<typeof TemplateDesignRequestSchema>;

/**
 * Output from AI-powered template design
 */
export const TemplateDesignOutputSchema = z.object({
  /** Complete HTML template with doctype, head, CSS, and body */
  html: z.string(),

  /** Explanation of design decisions and structure */
  explanation: z.string(),

  /** Sections included in the template */
  sections_included: z.array(z.string()),

  /** Zuora objects used in the template */
  objects_used: z.array(z.string()),

  /** Functions used in the template */
  functions_used: z.array(z.string()),

  /** Industry-specific customizations applied */
  industry_customizations: z.array(z.string()),

  /** Suggestions for further customization */
  customization_suggestions: z.array(z.string()),
});
export type TemplateDesignOutput = z.infer<typeof TemplateDesignOutputSchema>;

/**
 * JSON Schema for Template Design Output (used by LLM)
 */
export const templateDesignJsonSchema = {
  type: 'object',
  properties: {
    html: {
      type: 'string',
      description: 'Complete HTML template including <!DOCTYPE html>, <head> with inline CSS, and <body> with all merge fields',
    },
    explanation: {
      type: 'string',
      description: 'Explanation of design choices, structure, and how sections work together',
    },
    sections_included: {
      type: 'array',
      items: { type: 'string' },
      description: 'List of sections included (e.g., companyBranding, invoiceHeader, lineItemsTable)',
    },
    objects_used: {
      type: 'array',
      items: { type: 'string' },
      description: 'Zuora objects referenced (e.g., Invoice, Account, InvoiceItems)',
    },
    functions_used: {
      type: 'array',
      items: { type: 'string' },
      description: 'Template functions used (e.g., Round, Localise, GroupBy)',
    },
    industry_customizations: {
      type: 'array',
      items: { type: 'string' },
      description: 'Industry-specific features applied (e.g., "Grouped charges by subscription", "Usage breakdown table")',
    },
    customization_suggestions: {
      type: 'array',
      items: { type: 'string' },
      description: 'Suggestions for customizing the template (e.g., "Add logo URL", "Adjust colors")',
    },
  },
  required: [
    'html',
    'explanation',
    'sections_included',
    'objects_used',
    'functions_used',
    'industry_customizations',
    'customization_suggestions',
  ],
  additionalProperties: false,
};

/**
 * Validate TemplateDesignRequest
 */
export function validateTemplateDesignRequest(input: unknown): TemplateDesignRequest {
  const result = TemplateDesignRequestSchema.safeParse(input);
  if (!result.success) {
    const errors = result.error.errors.map((e) => `${e.path.join('.')}: ${e.message}`);
    throw new Error(`Invalid Template Design request: ${errors.join(', ')}`);
  }
  return result.data;
}

/**
 * Validate TemplateDesignOutput
 */
export function validateTemplateDesignOutput(data: unknown): TemplateDesignOutput {
  const result = TemplateDesignOutputSchema.safeParse(data);
  if (!result.success) {
    const errors = result.error.errors.map((e) => `${e.path.join('.')}: ${e.message}`);
    throw new Error(`Invalid Template Design output: ${errors.join(', ')}`);
  }
  return result.data;
}
