/**
 * Ensemble Judge
 *
 * Runs multiple LLM judges in parallel and calculates consensus.
 * Reduces false positives/negatives through weighted voting.
 */

import { debugLog } from '../../config';
import { evaluateOutput } from './index';
import type { EvaluationCriteria, JudgeResult, CriterionEvaluation, Severity } from '../types';
import type {
  EnsembleConfig,
  EnsembleResult,
  SingleJudgeResult,
  Disagreement,
  JudgeConfig,
} from './ensemble-types';
import { DEFAULT_ENSEMBLE_CONFIG } from './ensemble-types';

/**
 * Evaluate output using multiple judges
 *
 * Runs each judge in parallel (or sequentially) and calculates
 * a consensus result based on weighted voting.
 */
export async function evaluateWithEnsemble(
  stepName: string,
  inputSummary: string,
  output: unknown,
  criteria: EvaluationCriteria,
  config: Partial<EnsembleConfig> = {}
): Promise<EnsembleResult> {
  const fullConfig: EnsembleConfig = { ...DEFAULT_ENSEMBLE_CONFIG, ...config };
  const startTime = Date.now();

  debugLog(
    `Starting ensemble evaluation with ${fullConfig.judges.length} judges ` +
      `(threshold: ${fullConfig.consensusThreshold})`
  );

  // Run all judges
  const individualResults = await runJudges(
    fullConfig.judges,
    stepName,
    inputSummary,
    output,
    criteria,
    fullConfig.parallel
  );

  // Check if we have enough successful judges
  const successfulResults = individualResults.filter((r) => r.success);
  if (successfulResults.length < fullConfig.minJudgesRequired) {
    debugLog(
      `Insufficient judges succeeded: ${successfulResults.length}/${fullConfig.minJudgesRequired}`
    );

    if (!fullConfig.tolerateFailures) {
      throw new Error(
        `Only ${successfulResults.length} judges succeeded, ` +
          `but ${fullConfig.minJudgesRequired} are required`
      );
    }
  }

  // Calculate consensus
  const { consensus, disagreements, overallConfidence } = calculateConsensus(
    successfulResults,
    criteria,
    fullConfig.consensusThreshold
  );

  const totalDurationMs = Date.now() - startTime;

  debugLog(
    `Ensemble evaluation complete: ${consensus.overall_pass ? 'PASS' : 'FAIL'} ` +
      `(confidence: ${(overallConfidence * 100).toFixed(1)}%, ` +
      `${disagreements.length} disagreements, ${totalDurationMs}ms)`
  );

  return {
    consensus,
    individualResults,
    disagreements,
    overallConfidence,
    judgesSucceeded: successfulResults.length,
    totalDurationMs,
  };
}

/**
 * Run all judges (parallel or sequential)
 */
async function runJudges(
  judges: JudgeConfig[],
  stepName: string,
  inputSummary: string,
  output: unknown,
  criteria: EvaluationCriteria,
  parallel: boolean
): Promise<SingleJudgeResult[]> {
  const runSingleJudge = async (judge: JudgeConfig): Promise<SingleJudgeResult> => {
    const startTime = Date.now();

    try {
      debugLog(`Running judge: ${judge.label || judge.model}`);

      // Create a timeout promise if configured
      let result: JudgeResult;
      if (judge.timeout) {
        result = await Promise.race([
          evaluateOutput(stepName, inputSummary, output, criteria, { model: judge.model }),
          new Promise<never>((_, reject) =>
            setTimeout(() => reject(new Error('Judge timeout')), judge.timeout)
          ),
        ]);
      } else {
        result = await evaluateOutput(stepName, inputSummary, output, criteria, {
          model: judge.model,
        });
      }

      return {
        model: judge.model,
        weight: judge.weight,
        result,
        durationMs: Date.now() - startTime,
        success: true,
      };
    } catch (error) {
      debugLog(`Judge ${judge.model} failed: ${error}`);
      return {
        model: judge.model,
        weight: judge.weight,
        result: createEmptyResult(),
        durationMs: Date.now() - startTime,
        success: false,
        error: error instanceof Error ? error.message : 'Unknown error',
      };
    }
  };

  if (parallel) {
    return Promise.all(judges.map(runSingleJudge));
  }

  // Sequential execution
  const results: SingleJudgeResult[] = [];
  for (const judge of judges) {
    results.push(await runSingleJudge(judge));
  }
  return results;
}

/**
 * Calculate consensus from individual judge results
 */
function calculateConsensus(
  results: SingleJudgeResult[],
  criteria: EvaluationCriteria,
  threshold: number
): {
  consensus: JudgeResult;
  disagreements: Disagreement[];
  overallConfidence: number;
} {
  if (results.length === 0) {
    return {
      consensus: createEmptyResult(),
      disagreements: [],
      overallConfidence: 0,
    };
  }

  // Create a severity map for later use
  const severityMap = new Map<string, Severity>(
    criteria.criteria.map((c) => [c.id, c.severity])
  );

  // Collect all criterion IDs from all results
  const allCriterionIds = new Set<string>();
  for (const r of results) {
    for (const e of r.result.evaluations) {
      allCriterionIds.add(e.criterion_id);
    }
  }

  // Calculate consensus for each criterion
  const consensusEvaluations: CriterionEvaluation[] = [];
  const disagreements: Disagreement[] = [];

  for (const criterionId of allCriterionIds) {
    const votes: Array<{
      model: typeof results[number]['model'];
      passed: boolean;
      confidence: number;
      explanation: string;
      weight: number;
    }> = [];

    // Collect votes for this criterion
    for (const r of results) {
      const evaluation = r.result.evaluations.find((e) => e.criterion_id === criterionId);
      if (evaluation) {
        votes.push({
          model: r.model,
          passed: evaluation.passed,
          confidence: evaluation.confidence,
          explanation: evaluation.explanation,
          weight: r.weight,
        });
      }
    }

    // Calculate weighted pass ratio
    const weightedPasses = votes.reduce(
      (sum, v) => sum + (v.passed ? v.weight : 0),
      0
    );
    const voteTotalWeight = votes.reduce((sum, v) => sum + v.weight, 0);
    const weightedPassRatio = voteTotalWeight > 0 ? weightedPasses / voteTotalWeight : 0;

    // Determine consensus
    const consensusPassed = weightedPassRatio >= threshold;

    // Check for disagreement (not unanimous)
    const hasDisagreement = votes.some((v) => v.passed !== consensusPassed);

    if (hasDisagreement) {
      const criterionName =
        votes[0]?.model && results.find((r) => r.model === votes[0].model)
          ? results
              .find((r) => r.model === votes[0].model)
              ?.result.evaluations.find((e) => e.criterion_id === criterionId)?.criterion_name ||
            criterionId
          : criterionId;

      disagreements.push({
        criterionId,
        criterionName,
        severity: severityMap.get(criterionId) || 'medium',
        votes: votes.map((v) => ({
          model: v.model,
          passed: v.passed,
          confidence: v.confidence,
          explanation: v.explanation,
        })),
        weightedPassRatio,
        consensusDecision: consensusPassed,
      });
    }

    // Find the best explanation (highest confidence vote that matches consensus)
    const matchingVotes = votes.filter((v) => v.passed === consensusPassed);
    const bestVote = matchingVotes.sort((a, b) => b.confidence - a.confidence)[0];

    // Find the best correction if failing
    let correction: CriterionEvaluation['correction'] = null;
    if (!consensusPassed) {
      // Get correction from the most confident failing vote
      const failingVotes = votes.filter((v) => !v.passed);
      if (failingVotes.length > 0) {
        const bestFailingModel = failingVotes.sort((a, b) => b.confidence - a.confidence)[0].model;
        const bestFailingResult = results.find((r) => r.model === bestFailingModel);
        correction =
          bestFailingResult?.result.evaluations.find((e) => e.criterion_id === criterionId)
            ?.correction || null;
      }
    }

    // Calculate average confidence
    const avgConfidence = votes.reduce((sum, v) => sum + v.confidence, 0) / votes.length;

    consensusEvaluations.push({
      criterion_id: criterionId,
      criterion_name: bestVote
        ? results
            .find((r) => r.model === bestVote.model)
            ?.result.evaluations.find((e) => e.criterion_id === criterionId)?.criterion_name ||
          criterionId
        : criterionId,
      passed: consensusPassed,
      confidence: avgConfidence,
      explanation: bestVote?.explanation || 'Consensus based on weighted voting',
      correction,
    });
  }

  // Calculate overall pass based on all criteria
  const overallPass = consensusEvaluations.every((e) => e.passed);

  // Calculate overall confidence as average agreement level
  const agreementLevels = Array.from(allCriterionIds).map((criterionId) => {
    const votes = results
      .map((r) => r.result.evaluations.find((e) => e.criterion_id === criterionId))
      .filter(Boolean);
    if (votes.length <= 1) return 1; // Perfect agreement if only one vote

    const passCount = votes.filter((v) => v?.passed).length;
    const agreementRatio = Math.max(passCount, votes.length - passCount) / votes.length;
    return agreementRatio;
  });

  const overallConfidence =
    agreementLevels.length > 0
      ? agreementLevels.reduce((sum, a) => sum + a, 0) / agreementLevels.length
      : 0;

  // Combine overall notes from all judges
  const overallNotes = results
    .filter((r) => r.success)
    .map((r) => `[${r.model}]: ${r.result.overall_notes}`)
    .join('\n\n');

  return {
    consensus: {
      overall_pass: overallPass,
      evaluations: consensusEvaluations,
      overall_notes: overallNotes,
    },
    disagreements,
    overallConfidence,
  };
}

/**
 * Create an empty judge result for error cases
 */
function createEmptyResult(): JudgeResult {
  return {
    overall_pass: false,
    evaluations: [],
    overall_notes: 'No evaluation performed',
  };
}

/**
 * Format ensemble result for display
 */
export function formatEnsembleResultForDisplay(result: EnsembleResult): string {
  const lines: string[] = [];

  lines.push('Ensemble Evaluation Result');
  lines.push('═'.repeat(50));
  lines.push('');

  // Summary
  lines.push(`Overall: ${result.consensus.overall_pass ? 'PASS' : 'FAIL'}`);
  lines.push(`Confidence: ${(result.overallConfidence * 100).toFixed(1)}%`);
  lines.push(`Judges: ${result.judgesSucceeded}/${result.individualResults.length} succeeded`);
  lines.push(`Duration: ${result.totalDurationMs}ms`);
  lines.push('');

  // Individual results
  lines.push('Individual Judge Results:');
  for (const jr of result.individualResults) {
    const status = jr.success ? (jr.result.overall_pass ? 'PASS' : 'FAIL') : 'ERROR';
    const duration = `${jr.durationMs}ms`;
    lines.push(`  ${jr.model}: ${status} (${duration})`);
    if (jr.error) {
      lines.push(`    Error: ${jr.error}`);
    }
  }
  lines.push('');

  // Disagreements
  if (result.disagreements.length > 0) {
    lines.push('Disagreements:');
    for (const d of result.disagreements) {
      lines.push(`  ${d.criterionName} (${d.severity}):`);
      lines.push(`    Consensus: ${d.consensusDecision ? 'PASS' : 'FAIL'}`);
      lines.push(`    Pass ratio: ${(d.weightedPassRatio * 100).toFixed(1)}%`);
      for (const v of d.votes) {
        lines.push(`    - ${v.model}: ${v.passed ? 'PASS' : 'FAIL'} (${(v.confidence * 100).toFixed(0)}%)`);
      }
    }
    lines.push('');
  }

  return lines.join('\n');
}
