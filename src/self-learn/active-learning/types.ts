/**
 * Active Learning Types
 *
 * Types for uncertainty sampling and human review queue.
 */

import { z } from 'zod';

// =============================================================================
// Self-Assessment Types
// =============================================================================

export const SelfAssessmentSchema = z.object({
  /** Confidence score from 0-1 */
  confidence: z.number().min(0).max(1),
  /** Areas where the model is uncertain */
  uncertainAreas: z.array(z.string()),
  /** Brief explanation of confidence level */
  reasoning: z.string(),
});

export type SelfAssessment = z.infer<typeof SelfAssessmentSchema>;

// =============================================================================
// Novelty Scoring Types
// =============================================================================

export const NoveltyScoreSchema = z.object({
  /** Novelty score from 0-1 (higher = more novel/unfamiliar) */
  score: z.number().min(0).max(1),
  /** Closest corrections found for context */
  closestCorrections: z.array(z.object({
    id: z.string(),
    pattern: z.string(),
    similarity: z.number(),
  })),
});

export type NoveltyScore = z.infer<typeof NoveltyScoreSchema>;

// =============================================================================
// Uncertainty Assessment Types
// =============================================================================

export const UncertaintyAssessmentSchema = z.object({
  /** Self-reported confidence from LLM (0-1, lower = less confident) */
  selfConfidence: z.number().min(0).max(1),
  /** Novelty score - how different from known patterns (0-1, higher = more novel) */
  noveltyScore: z.number().min(0).max(1),
  /** Combined uncertainty score (weighted average) */
  combinedUncertainty: z.number().min(0).max(1),
  /** Whether this should be flagged for human review */
  flagForReview: z.boolean(),
  /** Reasons for the assessment */
  reasons: z.array(z.string()),
});

export type UncertaintyAssessment = z.infer<typeof UncertaintyAssessmentSchema>;

export interface AssessmentContext {
  testCaseId?: string;
  stepName: string;
  model: string;
  input?: unknown;
}

// =============================================================================
// Review Queue Types
// =============================================================================

export const ReviewStatusSchema = z.enum(['pending', 'reviewed', 'dismissed']);

export type ReviewStatus = z.infer<typeof ReviewStatusSchema>;

export const ReviewItemSchema = z.object({
  id: z.string(),
  step: z.string(),
  testCaseId: z.string().optional(),
  output: z.unknown(),
  input: z.unknown().optional(),
  uncertainty: UncertaintyAssessmentSchema,
  status: ReviewStatusSchema.default('pending'),
  created_at: z.string(),
  reviewed_at: z.string().optional(),
});

export type ReviewItem = z.infer<typeof ReviewItemSchema>;

export const ReviewDecisionSchema = z.object({
  /** Whether the output was actually correct */
  isCorrect: z.boolean(),
  /** If not correct, the correction to add */
  correction: z.object({
    pattern: z.string(),
    expected_behavior: z.string(),
    fix: z.string(),
    example_fix: z.unknown().optional(),
  }).optional(),
  /** Notes from the reviewer */
  notes: z.string().optional(),
});

export type ReviewDecision = z.infer<typeof ReviewDecisionSchema>;

export const ReviewQueueIndexSchema = z.object({
  version: z.string(),
  updated_at: z.string(),
  items: z.array(ReviewItemSchema),
});

export type ReviewQueueIndex = z.infer<typeof ReviewQueueIndexSchema>;

// =============================================================================
// Configuration Types
// =============================================================================

export const ActiveLearningConfigSchema = z.object({
  /** Enable active learning during evaluation */
  enabled: z.boolean().default(false),
  /** Uncertainty threshold for flagging (0-1, flag if above) */
  uncertaintyThreshold: z.number().default(0.6),
  /** Weight for novelty score in combined uncertainty */
  noveltyWeight: z.number().default(0.4),
  /** Weight for self-confidence in combined uncertainty */
  selfConfidenceWeight: z.number().default(0.6),
  /** Model to use for self-assessment (use smaller model for cost) */
  assessmentModel: z.string().default('gpt-4o-mini'),
  /** Whether to perform self-assessment (can be slow) */
  performSelfAssessment: z.boolean().default(true),
  /** Whether to calculate novelty score */
  calculateNovelty: z.boolean().default(true),
});

export type ActiveLearningConfig = z.infer<typeof ActiveLearningConfigSchema>;

export const DEFAULT_ACTIVE_LEARNING_CONFIG: ActiveLearningConfig = {
  enabled: false,
  uncertaintyThreshold: 0.6,
  noveltyWeight: 0.4,
  selfConfidenceWeight: 0.6,
  assessmentModel: 'gpt-4o-mini',
  performSelfAssessment: true,
  calculateNovelty: true,
};
