/**
 * Active Learning Module
 *
 * Implements uncertainty sampling to identify outputs that
 * might benefit from human review.
 *
 * Combines two signals:
 * 1. Self-assessment: LLM rates its own confidence
 * 2. Novelty scoring: How different from known patterns
 */

import { debugLog } from '../../config';
import type { Criterion } from '../types';
import type {
  UncertaintyAssessment,
  AssessmentContext,
  ActiveLearningConfig,
} from './types';
import { DEFAULT_ACTIVE_LEARNING_CONFIG } from './types';
import { getSelfConfidence, quickConfidenceCheck } from './self-assessment';
import { calculateNoveltyScore } from './novelty-scorer';
import { addToReviewQueue } from './review-queue';

// Re-export types and functions
export * from './types';
export * from './review-queue';
export { calculateNoveltyScore, isHighlyNovel } from './novelty-scorer';
export { getSelfConfidence, quickConfidenceCheck } from './self-assessment';

/**
 * Assess uncertainty for a pipeline step output
 *
 * Combines self-assessment and novelty scoring to determine
 * if an output should be flagged for human review.
 *
 * @param output - The pipeline step output to assess
 * @param context - Assessment context (step name, model, etc.)
 * @param criteria - Optional evaluation criteria for this step
 * @param config - Active learning configuration
 */
export async function assessUncertainty(
  output: unknown,
  context: AssessmentContext,
  criteria: Criterion[] = [],
  config: Partial<ActiveLearningConfig> = {}
): Promise<UncertaintyAssessment> {
  const cfg = { ...DEFAULT_ACTIVE_LEARNING_CONFIG, ...config };
  const reasons: string[] = [];

  // 1. Self-assessment (optional)
  let selfConfidence = 0.7; // Default to moderate confidence
  if (cfg.performSelfAssessment) {
    try {
      const assessment = await getSelfConfidence(
        output,
        context.stepName,
        criteria,
        cfg.assessmentModel
      );
      selfConfidence = assessment.confidence;

      if (assessment.uncertainAreas.length > 0) {
        reasons.push(`Uncertain areas: ${assessment.uncertainAreas.join(', ')}`);
      }
      if (assessment.confidence < 0.5) {
        reasons.push(`Low self-confidence: ${(assessment.confidence * 100).toFixed(0)}%`);
      }
    } catch (error) {
      debugLog(`Self-assessment failed, using quick check: ${error}`);
      selfConfidence = quickConfidenceCheck(output);
    }
  } else {
    // Use quick heuristic check
    selfConfidence = quickConfidenceCheck(output);
  }

  // 2. Novelty scoring (optional)
  let noveltyScore = 0.5; // Default to moderate novelty
  if (cfg.calculateNovelty) {
    const novelty = await calculateNoveltyScore(output, context.stepName);
    noveltyScore = novelty.score;

    if (novelty.score > 0.7) {
      reasons.push(`High novelty: ${(novelty.score * 100).toFixed(0)}% (unfamiliar pattern)`);
    }
    if (novelty.closestCorrections.length > 0) {
      const closest = novelty.closestCorrections[0];
      if (closest.similarity > 0.5) {
        reasons.push(`Similar to known issue: ${closest.pattern}`);
      }
    }
  }

  // 3. Calculate combined uncertainty
  // Higher uncertainty = lower confidence OR higher novelty
  // We want to flag items where we're uncertain OR the scenario is novel
  const invertedConfidence = 1 - selfConfidence;
  const combinedUncertainty =
    cfg.selfConfidenceWeight * invertedConfidence +
    cfg.noveltyWeight * noveltyScore;

  // 4. Determine if we should flag for review
  const flagForReview = combinedUncertainty >= cfg.uncertaintyThreshold;

  if (flagForReview) {
    reasons.push(
      `Combined uncertainty ${(combinedUncertainty * 100).toFixed(0)}% exceeds threshold ${(cfg.uncertaintyThreshold * 100).toFixed(0)}%`
    );
  }

  debugLog(
    `Uncertainty assessment for ${context.stepName}: ` +
    `confidence=${(selfConfidence * 100).toFixed(0)}%, ` +
    `novelty=${(noveltyScore * 100).toFixed(0)}%, ` +
    `combined=${(combinedUncertainty * 100).toFixed(0)}%, ` +
    `flagged=${flagForReview}`
  );

  return {
    selfConfidence,
    noveltyScore,
    combinedUncertainty,
    flagForReview,
    reasons,
  };
}

/**
 * Assess and optionally queue for review
 *
 * Convenience function that assesses uncertainty and automatically
 * adds to the review queue if flagged.
 */
export async function assessAndQueueIfUncertain(
  output: unknown,
  context: AssessmentContext & { input?: unknown },
  criteria: Criterion[] = [],
  config: Partial<ActiveLearningConfig> = {}
): Promise<UncertaintyAssessment> {
  const assessment = await assessUncertainty(output, context, criteria, config);

  if (assessment.flagForReview) {
    await addToReviewQueue({
      step: context.stepName,
      testCaseId: context.testCaseId,
      output,
      input: context.input,
      uncertainty: assessment,
    });
    debugLog(`Added ${context.stepName} output to review queue`);
  }

  return assessment;
}

/**
 * Check if active learning should be enabled
 *
 * Reads from environment variable or config.
 */
export function isActiveLearningEnabled(): boolean {
  return process.env.ENABLE_ACTIVE_LEARNING === 'true';
}

/**
 * Get active learning config from environment
 */
export function getActiveLearningConfig(): ActiveLearningConfig {
  return {
    enabled: isActiveLearningEnabled(),
    uncertaintyThreshold: parseFloat(
      process.env.ACTIVE_LEARNING_THRESHOLD ?? '0.6'
    ),
    noveltyWeight: parseFloat(
      process.env.ACTIVE_LEARNING_NOVELTY_WEIGHT ?? '0.4'
    ),
    selfConfidenceWeight: parseFloat(
      process.env.ACTIVE_LEARNING_CONFIDENCE_WEIGHT ?? '0.6'
    ),
    assessmentModel: process.env.ACTIVE_LEARNING_MODEL ?? 'gpt-4o-mini',
    performSelfAssessment:
      process.env.ACTIVE_LEARNING_SELF_ASSESSMENT !== 'false',
    calculateNovelty:
      process.env.ACTIVE_LEARNING_NOVELTY !== 'false',
  };
}
