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
