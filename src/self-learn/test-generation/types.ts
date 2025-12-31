/**
 * Test Generation Types
 *
 * Types for synthetic test case generation from corrections and patterns.
 */

import type { LlmModel } from '../../types/llm';

/**
 * Source for generating test cases
 */
export interface GenerationSource {
  /** Type of source */
  type: 'correction' | 'pattern' | 'cluster';
  /** Correction ID, pattern string, or cluster ID */
  sourceId: string;
  /** Additional context for generation (e.g., step name) */
  context?: string;
}

/**
 * Generated test case input (matches ZucaInput fields)
 */
export interface GeneratedTestInput {
  customer_name: string;
  use_case_description: string;
  terms_months: number;
  billing_period: string;
  contract_start_date: string;
  transaction_currency: string;
  is_allocations?: boolean;
  allocation_method?: string;
  rev_rec_notes?: string;
}

/**
 * Generated test case (before validation)
 */
export interface GeneratedTestCase {
  /** Generated ID */
  id: string;
  /** Test case name */
  name: string;
  /** Description of what this tests */
  description: string;
  /** Input fields (ZucaInput partial) */
  input: GeneratedTestInput;
  /** Steps to focus evaluation on */
  focus_steps: string[];
  /** Tags for filtering */
  tags: string[];
  /** Source information */
  derivedFrom: GenerationSource;
  /** Expected failure pattern (for adversarial tests) */
  expectedFailurePattern?: string;
  /** Generation metadata */
  metadata: {
    generatedAt: string;
    model: LlmModel;
    validated: boolean;
  };
}

/**
 * Generation configuration
 */
export interface GenerationConfig {
  /** Number of test cases to generate */
  count: number;
  /** Model to use for generation */
  model: LlmModel;
  /** Generate adversarial tests (designed to trigger failures) */
  adversarial: boolean;
  /** Ensure diversity in generated tests */
  ensureDiversity: boolean;
  /** Temperature for generation (higher = more diverse) */
  temperature: number;
}

/**
 * Generation result
 */
export interface GenerationResult {
  /** Successfully generated test cases */
  testCases: GeneratedTestCase[];
  /** Generation errors */
  errors: string[];
  /** Statistics */
  stats: {
    requested: number;
    generated: number;
    validated: number;
    duplicatesRemoved: number;
  };
}

/**
 * Default generation configuration
 */
export const DEFAULT_GENERATION_CONFIG: GenerationConfig = {
  count: 3,
  model: 'gpt-5.2',
  adversarial: false,
  ensureDiversity: true,
  temperature: 0.7,
};
