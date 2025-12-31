/**
 * Self-Learning Pipeline Types
 *
 * Types for the automated feedback loop that helps the pipeline learn from its mistakes.
 */

import { z } from 'zod';

// =============================================================================
// Correction Types
// =============================================================================

export const IssueTypeSchema = z.enum([
  'missing_field',
  'wrong_calculation',
  'logic_error',
  'format_error',
  'behavioral_violation',
  'structural_error',
]);

export type IssueType = z.infer<typeof IssueTypeSchema>;

export const CorrectionSchema = z.object({
  id: z.string(),
  test_case_id: z.string(),
  step_name: z.string(),
  issue_type: IssueTypeSchema,
  pattern: z.string(),
  pattern_embedding: z.array(z.number()).optional(),

  input_summary: z.string(),
  incorrect_output: z.unknown().optional(),
  expected_behavior: z.string(),
  correction: z.string(),
  example_fix: z.unknown().optional(),

  criteria_id: z.string().optional(),
  confidence: z.number().min(0).max(1).default(1.0),
  times_applied: z.number().default(0),
  success_rate: z.number().min(0).max(1).default(0),

  // Archive fields for correction lifecycle management
  archived: z.boolean().default(false),
  archived_at: z.string().optional(),
  archived_reason: z.string().optional(),
  last_maintained_at: z.string().optional(),

  created_at: z.string(),
  updated_at: z.string(),
});

export type Correction = z.infer<typeof CorrectionSchema>;

export const CorrectionInsertSchema = CorrectionSchema.omit({
  id: true,
  pattern_embedding: true,
  times_applied: true,
  success_rate: true,
  archived: true,
  archived_at: true,
  archived_reason: true,
  last_maintained_at: true,
  created_at: true,
  updated_at: true,
});

export type CorrectionInsert = z.infer<typeof CorrectionInsertSchema>;

export const CorrectionsIndexSchema = z.object({
  version: z.string(),
  updated_at: z.string(),
  corrections: z.array(CorrectionSchema),
});

export type CorrectionsIndex = z.infer<typeof CorrectionsIndexSchema>;

// =============================================================================
// Evaluation Criteria Types
// =============================================================================

export const SeveritySchema = z.enum(['critical', 'high', 'medium', 'low']);

export type Severity = z.infer<typeof SeveritySchema>;

export const CheckTypeSchema = z.enum(['behavioral', 'structural', 'numeric']);

export type CheckType = z.infer<typeof CheckTypeSchema>;

export const CriterionCheckSchema = z.object({
  type: CheckTypeSchema,
  rule: z.string(),
  threshold: z.number().optional(),
});

export type CriterionCheck = z.infer<typeof CriterionCheckSchema>;

export const CriterionExampleSchema = z.object({
  scenario: z.string(),
  expected: z.string().optional(),
  incorrect: z.string().optional(),
  why: z.string().optional(),
});

export type CriterionExample = z.infer<typeof CriterionExampleSchema>;

export const CriterionSchema = z.object({
  id: z.string(),
  name: z.string(),
  description: z.string(),
  severity: SeveritySchema,
  patterns: z.array(z.string()),
  check: CriterionCheckSchema,
  examples: z
    .object({
      passing: z.array(CriterionExampleSchema).optional(),
      failing: z.array(CriterionExampleSchema).optional(),
    })
    .optional(),
});

export type Criterion = z.infer<typeof CriterionSchema>;

export const EvaluationCriteriaSchema = z.object({
  name: z.string(),
  version: z.string().default('1.0'),
  step: z.string(),
  description: z.string().optional(),
  criteria: z.array(CriterionSchema),
});

export type EvaluationCriteria = z.infer<typeof EvaluationCriteriaSchema>;

// =============================================================================
// Judge Types
// =============================================================================

export const CriterionEvaluationSchema = z.object({
  criterion_id: z.string(),
  criterion_name: z.string(),
  passed: z.boolean(),
  confidence: z.number().min(0).max(1),
  explanation: z.string(),
  correction: z
    .object({
      issue_type: IssueTypeSchema,
      expected_behavior: z.string(),
      suggested_fix: z.string(),
      example_output: z.unknown().optional(),
    })
    .nullable(),
});

export type CriterionEvaluation = z.infer<typeof CriterionEvaluationSchema>;

export const JudgeResultSchema = z.object({
  overall_pass: z.boolean(),
  evaluations: z.array(CriterionEvaluationSchema),
  overall_notes: z.string(),
});

export type JudgeResult = z.infer<typeof JudgeResultSchema>;

// =============================================================================
// Test Suite Types
// =============================================================================

export const TestCaseSchema = z.object({
  id: z.string(),
  name: z.string().optional(),
  description: z.string().optional(),
  input: z.record(z.unknown()), // ZucaInput as record
  focus_steps: z.array(z.string()).optional(), // Which steps to evaluate
  expected_patterns: z.array(z.string()).optional(), // Patterns that should be detected
  tags: z.array(z.string()).optional(),
});

export type TestCase = z.infer<typeof TestCaseSchema>;

export const TestSuiteSchema = z.object({
  name: z.string(),
  version: z.string().default('1.0'),
  description: z.string().optional(),
  tests: z.array(TestCaseSchema),
});

export type TestSuite = z.infer<typeof TestSuiteSchema>;

// =============================================================================
// Evaluation Run Types
// =============================================================================

export const EvaluationFailureSchema = z.object({
  testId: z.string(),
  stepName: z.string(),
  criterionId: z.string(),
  explanation: z.string(),
  correction: CriterionEvaluationSchema.shape.correction,
});

export type EvaluationFailure = z.infer<typeof EvaluationFailureSchema>;

/**
 * Effectiveness record for a single correction application
 */
export const EffectivenessRecordSchema = z.object({
  correctionId: z.string(),
  stepName: z.string(),
  testId: z.string(),
  helped: z.boolean(),
  appliedAt: z.string(),
});

export type EffectivenessRecord = z.infer<typeof EffectivenessRecordSchema>;

/**
 * Summary of correction effectiveness across an evaluation run
 */
export const EffectivenessSummarySchema = z.object({
  totalApplied: z.number(),
  helped: z.number(),
  didNotHelp: z.number(),
  effectivenessRate: z.number(), // helped / totalApplied
  byStep: z.record(z.object({
    applied: z.number(),
    helped: z.number(),
    rate: z.number(),
  })),
  topPerformers: z.array(z.object({
    correctionId: z.string(),
    pattern: z.string(),
    helpedCount: z.number(),
    totalApplied: z.number(),
    rate: z.number(),
  })).optional(),
  lowPerformers: z.array(z.object({
    correctionId: z.string(),
    pattern: z.string(),
    helpedCount: z.number(),
    totalApplied: z.number(),
    rate: z.number(),
  })).optional(),
});

export type EffectivenessSummary = z.infer<typeof EffectivenessSummarySchema>;

export const EvaluationRunResultSchema = z.object({
  runId: z.string(),
  suiteName: z.string(),
  startedAt: z.string(),
  completedAt: z.string().optional(),
  total: z.number(),
  passed: z.number(),
  failed: z.number(),
  correctionsGenerated: z.number(),
  trainingExamplesCaptured: z.number().optional(),
  failures: z.array(EvaluationFailureSchema),
  model: z.string().optional(),
  effectivenessSummary: EffectivenessSummarySchema.optional(),
});

export type EvaluationRunResult = z.infer<typeof EvaluationRunResultSchema>;

// =============================================================================
// Prompt Evolution Types
// =============================================================================

export const PromptSuggestionStatusSchema = z.enum(['pending', 'approved', 'applied', 'rejected']);

export type PromptSuggestionStatus = z.infer<typeof PromptSuggestionStatusSchema>;

export const PromptSuggestionSchema = z.object({
  id: z.string(),
  step_name: z.string(),
  pattern: z.string(),
  occurrence_count: z.number().default(1),
  suggested_update: z.string(),
  status: PromptSuggestionStatusSchema.default('pending'),
  applied_at: z.string().optional(),
  created_at: z.string(),
  updated_at: z.string(),
});

export type PromptSuggestion = z.infer<typeof PromptSuggestionSchema>;

// =============================================================================
// Backend Interface
// =============================================================================

export interface CorrectionsBackend {
  insert(correction: CorrectionInsert): Promise<Correction>;
  search(query: string, stepName: string, limit?: number): Promise<Correction[]>;
  getByPattern(pattern: string): Promise<Correction[]>;
  getByStep(stepName: string): Promise<Correction[]>;
  getAll(): Promise<Correction[]>;
  updateStats(id: string, applied: boolean, helped: boolean): Promise<void>;
  getPatternFrequencies(stepName: string): Promise<Array<{ pattern: string; count: number }>>;
  isReady(): Promise<boolean>;

  // Maintenance methods for correction lifecycle
  archiveCorrection?(id: string, reason: string): Promise<void>;
  restoreCorrection?(id: string): Promise<void>;
  listArchived?(): Promise<Correction[]>;
  updateConfidence?(id: string, newConfidence: number): Promise<void>;
  getById?(id: string): Promise<Correction | null>;
}

// =============================================================================
// Maintenance Types
// =============================================================================

export const MaintenanceOptionsSchema = z.object({
  dryRun: z.boolean().default(false),
  verbose: z.boolean().default(false),
});

export type MaintenanceOptions = z.infer<typeof MaintenanceOptionsSchema>;

export const MaintenanceActionSchema = z.object({
  correctionId: z.string(),
  action: z.enum(['decay', 'archive', 'promote']),
  reason: z.string(),
  before: z.object({
    confidence: z.number(),
    archived: z.boolean().optional(),
  }),
  after: z.object({
    confidence: z.number(),
    archived: z.boolean().optional(),
  }),
});

export type MaintenanceAction = z.infer<typeof MaintenanceActionSchema>;

export const MaintenanceReportSchema = z.object({
  runAt: z.string(),
  dryRun: z.boolean(),
  decayed: z.number(),
  archived: z.number(),
  promoted: z.number(),
  actions: z.array(MaintenanceActionSchema),
});

export type MaintenanceReport = z.infer<typeof MaintenanceReportSchema>;

export const MaintenanceThresholdsSchema = z.object({
  decayAgeDays: z.number().default(30),
  decayMinApplies: z.number().default(3),
  decayFactor: z.number().default(0.9),
  archiveMinApplies: z.number().default(10),
  archiveThreshold: z.number().default(0.2),
  promoteMinApplies: z.number().default(5),
  promoteThreshold: z.number().default(0.8),
  promoteFactor: z.number().default(1.1),
  minConfidence: z.number().default(0.1),
});

export type MaintenanceThresholds = z.infer<typeof MaintenanceThresholdsSchema>;

// =============================================================================
// Injection Context
// =============================================================================

export interface InjectionContext {
  stepName: string;
  inputSummary: string;
  capabilities?: string[];
}

/**
 * Result of getting corrections context, including which corrections were applied
 */
export interface InjectionResult {
  /** Formatted corrections text for prompt injection */
  context: string;
  /** IDs of corrections that were applied */
  appliedCorrectionIds: string[];
  /** Number of corrections applied */
  count: number;
}

// =============================================================================
// Effectiveness Tracking
// =============================================================================

/**
 * Tracks corrections applied during a pipeline run for effectiveness measurement
 */
export interface CorrectionRunContext {
  runId: string;
  /** Map of step name -> applied correction IDs */
  appliedByStep: Map<string, string[]>;
  /** Timestamp when the run started */
  startedAt: Date;
}
