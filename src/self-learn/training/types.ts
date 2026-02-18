/**
 * Training Data Types
 *
 * Types for exporting self-learning data as fine-tuning training examples.
 * Follows HuggingFace's chat format for compatibility with TRL/SFTTrainer.
 */

import { z } from 'zod';

// =============================================================================
// HuggingFace Chat Format
// =============================================================================

export const ChatMessageSchema = z.object({
  role: z.enum(['system', 'user', 'assistant']),
  content: z.string(),
});

export type ChatMessage = z.infer<typeof ChatMessageSchema>;

export const TrainingExampleSchema = z.object({
  /** Unique identifier for the example */
  id: z.string(),

  /** The step this example is for (e.g., 'analyze_contract', 'billings') */
  step_name: z.string(),

  /** Source of the example: 'evaluation_pass' | 'correction_fix' | 'manual' */
  source: z.enum(['evaluation_pass', 'correction_fix', 'manual']),

  /** Messages in HuggingFace chat format */
  messages: z.array(ChatMessageSchema),

  /** Metadata about the example */
  metadata: z.object({
    /** Test case ID if from evaluation */
    test_case_id: z.string().optional(),
    /** Correction ID if from correction */
    correction_id: z.string().optional(),
    /** Model that generated the output (if from evaluation) */
    model: z.string().optional(),
    /** Evaluation run ID */
    run_id: z.string().optional(),
    /** Timestamp when created */
    created_at: z.string(),
  }),
});

export type TrainingExample = z.infer<typeof TrainingExampleSchema>;

// =============================================================================
// Training Dataset
// =============================================================================

export const TrainingDatasetSchema = z.object({
  /** Dataset version */
  version: z.string().default('1.0'),

  /** When the dataset was created */
  created_at: z.string(),

  /** When the dataset was last updated */
  updated_at: z.string(),

  /** Statistics about the dataset */
  stats: z.object({
    total_examples: z.number(),
    by_step: z.record(z.string(), z.number()),
    by_source: z.record(z.string(), z.number()),
  }),

  /** The training examples */
  examples: z.array(TrainingExampleSchema),
});

export type TrainingDataset = z.infer<typeof TrainingDatasetSchema>;

// =============================================================================
// Export Options
// =============================================================================

export interface TrainingExportOptions {
  /** Filter by step name */
  steps?: string[];

  /** Filter by source type */
  sources?: Array<'evaluation_pass' | 'correction_fix' | 'manual'>;

  /** Only include examples after this date */
  after?: Date;

  /** Maximum examples per step (for balancing) */
  maxPerStep?: number;

  /** Include system prompt in messages */
  includeSystemPrompt?: boolean;

  /** Output format */
  format?: 'jsonl' | 'json' | 'huggingface';
}

// =============================================================================
// Capture Context (for during evaluation)
// =============================================================================

export interface TrainingCaptureContext {
  /** Current evaluation run ID */
  runId: string;

  /** Model being used */
  model?: string;

  /** Examples captured during this run */
  capturedExamples: TrainingExample[];
}

/**
 * Input needed to create a training example from a successful evaluation
 */
export interface SuccessfulEvaluationInput {
  testCaseId: string;
  stepName: string;
  systemPrompt: string;
  userInput: string;
  assistantOutput: unknown;
  model?: string;
  runId?: string;
}

/**
 * Input needed to create a training example from a correction
 */
export interface CorrectionExampleInput {
  correctionId: string;
  stepName: string;
  systemPrompt: string;
  inputSummary: string;
  exampleFix: unknown;
}
