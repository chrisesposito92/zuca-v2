/**
 * Types for Reinforcement Fine-Tuning (RFT)
 */

import { z } from 'zod';

// RFT training example format
export const RFTExampleSchema = z.object({
  messages: z.array(
    z.object({
      role: z.enum(['system', 'user']),
      content: z.string(),
    })
  ),
  // Additional fields available to grader via {{ item.fieldName }}
  reference_answer: z.string().optional(),
  evaluation_criteria: z.string().optional(),
  test_id: z.string().optional(),
  focus_steps: z.array(z.string()).optional(),
});

export type RFTExample = z.infer<typeof RFTExampleSchema>;

// Grader score response
export const GraderResponseSchema = z.object({
  score: z.number().min(0).max(1),
  reasoning: z.string(),
});

export type GraderResponse = z.infer<typeof GraderResponseSchema>;

// RFT job configuration
export interface RFTJobConfig {
  model: 'o4-mini-2025-04-16';
  trainingFile: string;
  validationFile: string;
  graderType: 'model' | 'python' | 'multi';
  hyperparameters: {
    reasoningEffort: 'low' | 'medium' | 'high';
    epochs: number;
    batchSize: number;
  };
}

// RFT job status
export interface RFTJobStatus {
  id: string;
  status: 'validating_files' | 'queued' | 'running' | 'succeeded' | 'failed' | 'cancelled';
  model: string;
  createdAt: string;
  finishedAt?: string;
  trainedTokens?: number;
  error?: string;
}
