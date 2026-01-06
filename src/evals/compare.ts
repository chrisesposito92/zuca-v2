/**
 * Fine-Tune Eval Comparison
 *
 * Compares two eval runs to determine if fine-tuning improved the model.
 */

import type { FTEvalResult, FTEvalComparison, EvalStats } from './types';
import { loadResult } from './runner';

// =============================================================================
// Comparison Functions
// =============================================================================

/**
 * Compare two eval runs
 *
 * @param baselineIdOrName - Run ID or name of the baseline (e.g., base model)
 * @param candidateIdOrName - Run ID or name of the candidate (e.g., fine-tuned model)
 * @returns Comparison result with deltas and recommendations
 */
export function compareRuns(
  baselineIdOrName: string,
  candidateIdOrName: string
): FTEvalComparison {
  const baseline = loadResult(baselineIdOrName);
  const candidate = loadResult(candidateIdOrName);

  if (!baseline) {
    throw new Error(`Baseline run not found: ${baselineIdOrName}`);
  }
  if (!candidate) {
    throw new Error(`Candidate run not found: ${candidateIdOrName}`);
  }

  return compareResults(baseline, candidate);
}

/**
 * Compare two eval results directly
 */
export function compareResults(
  baseline: FTEvalResult,
  candidate: FTEvalResult
): FTEvalComparison {
  // Calculate overall delta
  const overallDelta = candidate.overall.pass_rate - baseline.overall.pass_rate;

  // Calculate per-step deltas
  const byStep = calculateStepDeltas(baseline.by_step, candidate.by_step);

  // Calculate per-criterion deltas
  const byCriterion = calculateCriterionDeltas(baseline.by_criterion, candidate.by_criterion);

  // Find regressions and improvements
  const { regressions, improvements } = findChanges(baseline, candidate);

  // Generate recommendation
  const { recommendation, reason } = generateRecommendation(
    overallDelta,
    regressions,
    improvements
  );

  return {
    baseline: {
      run_id: baseline.run_id,
      name: baseline.config.name,
      model: baseline.config.model,
      pass_rate: baseline.overall.pass_rate,
    },
    candidate: {
      run_id: candidate.run_id,
      name: candidate.config.name,
      model: candidate.config.model,
      pass_rate: candidate.overall.pass_rate,
    },
    overall_delta: overallDelta,
    by_step: byStep,
    by_criterion: byCriterion,
    regressions,
    improvements,
    recommendation,
    recommendation_reason: reason,
  };
}

/**
 * Calculate deltas for each step
 */
function calculateStepDeltas(
  baselineByStep: Record<string, EvalStats>,
  candidateByStep: Record<string, EvalStats>
): FTEvalComparison['by_step'] {
  const result: FTEvalComparison['by_step'] = {};

  // Get all steps from both runs
  const allSteps = new Set([
    ...Object.keys(baselineByStep),
    ...Object.keys(candidateByStep),
  ]);

  for (const step of allSteps) {
    const baselineRate = baselineByStep[step]?.pass_rate ?? 0;
    const candidateRate = candidateByStep[step]?.pass_rate ?? 0;

    result[step] = {
      baseline_pass_rate: baselineRate,
      candidate_pass_rate: candidateRate,
      delta: candidateRate - baselineRate,
    };
  }

  return result;
}

/**
 * Calculate deltas for each criterion
 */
function calculateCriterionDeltas(
  baselineByCriterion: Record<string, EvalStats>,
  candidateByCriterion: Record<string, EvalStats>
): FTEvalComparison['by_criterion'] {
  const result: FTEvalComparison['by_criterion'] = {};

  // Get all criteria from both runs
  const allCriteria = new Set([
    ...Object.keys(baselineByCriterion),
    ...Object.keys(candidateByCriterion),
  ]);

  for (const criterion of allCriteria) {
    const baselineRate = baselineByCriterion[criterion]?.pass_rate ?? 0;
    const candidateRate = candidateByCriterion[criterion]?.pass_rate ?? 0;

    result[criterion] = {
      baseline_pass_rate: baselineRate,
      candidate_pass_rate: candidateRate,
      delta: candidateRate - baselineRate,
    };
  }

  return result;
}

/**
 * Find test cases that regressed or improved
 */
function findChanges(
  baseline: FTEvalResult,
  candidate: FTEvalResult
): {
  regressions: FTEvalComparison['regressions'];
  improvements: FTEvalComparison['improvements'];
} {
  const regressions: FTEvalComparison['regressions'] = [];
  const improvements: FTEvalComparison['improvements'] = [];

  // Build maps for quick lookup
  const baselineResults = new Map(
    baseline.test_results.map((t) => [t.test_id, t])
  );
  const candidateResults = new Map(
    candidate.test_results.map((t) => [t.test_id, t])
  );

  // Get all test IDs
  const allTestIds = new Set([
    ...baselineResults.keys(),
    ...candidateResults.keys(),
  ]);

  for (const testId of allTestIds) {
    const baselineTest = baselineResults.get(testId);
    const candidateTest = candidateResults.get(testId);

    // Compare step-by-step
    const baselineSteps = new Map(
      baselineTest?.step_results.map((s) => [s.step, s]) || []
    );
    const candidateSteps = new Map(
      candidateTest?.step_results.map((s) => [s.step, s]) || []
    );

    const allSteps = new Set([...baselineSteps.keys(), ...candidateSteps.keys()]);

    for (const step of allSteps) {
      const baselineStep = baselineSteps.get(step);
      const candidateStep = candidateSteps.get(step);

      const baselinePassed = baselineStep?.passed ?? true; // Assume pass if not present
      const candidatePassed = candidateStep?.passed ?? true;

      if (baselinePassed && !candidatePassed) {
        // Regression: was passing, now failing
        regressions.push({
          test_id: testId,
          step,
          criteria_that_failed: candidateStep?.criteria_results
            .filter((c) => !c.passed)
            .map((c) => c.criterion_id) || [],
        });
      } else if (!baselinePassed && candidatePassed) {
        // Improvement: was failing, now passing
        improvements.push({
          test_id: testId,
          step,
          criteria_that_passed: baselineStep?.criteria_results
            .filter((c) => !c.passed)
            .map((c) => c.criterion_id) || [],
        });
      }
    }
  }

  return { regressions, improvements };
}

/**
 * Generate a recommendation based on the comparison
 */
function generateRecommendation(
  overallDelta: number,
  regressions: FTEvalComparison['regressions'],
  _improvements: FTEvalComparison['improvements']
): { recommendation: FTEvalComparison['recommendation']; reason: string } {
  const deltaPercent = (overallDelta * 100).toFixed(1);
  const hasRegressions = regressions.length > 0;
  // Note: improvements count is captured in overallDelta; could be used for more nuanced recommendations

  // Decision matrix
  if (overallDelta >= 0.05 && !hasRegressions) {
    return {
      recommendation: 'ship',
      reason: `Pass rate improved by ${deltaPercent}% with no regressions. Safe to deploy.`,
    };
  }

  if (overallDelta >= 0.05 && hasRegressions) {
    return {
      recommendation: 'investigate',
      reason: `Pass rate improved by ${deltaPercent}%, but ${regressions.length} test(s) regressed. Review regressions before deploying.`,
    };
  }

  if (overallDelta >= 0 && overallDelta < 0.05) {
    if (hasRegressions) {
      return {
        recommendation: 'investigate',
        reason: `Minimal improvement (${deltaPercent}%) with ${regressions.length} regression(s). May not be worth the regressions.`,
      };
    }
    return {
      recommendation: 'investigate',
      reason: `Minimal improvement (${deltaPercent}%). Consider if fine-tuning cost is justified.`,
    };
  }

  if (overallDelta < 0 && overallDelta > -0.05) {
    return {
      recommendation: 'investigate',
      reason: `Slight regression (${deltaPercent}%). Fine-tuning may have hurt more than helped.`,
    };
  }

  // Significant regression
  return {
    recommendation: 'reject',
    reason: `Significant regression (${deltaPercent}%). Do not deploy. Review training data and approach.`,
  };
}

// =============================================================================
// Formatting Functions
// =============================================================================

/**
 * Format comparison as a markdown report
 */
export function formatComparisonMarkdown(comparison: FTEvalComparison): string {
  const lines: string[] = [];

  // Header
  lines.push('# Fine-Tune Evaluation Comparison\n');

  // Summary
  lines.push('## Summary\n');
  lines.push(`| Metric | Baseline | Candidate | Delta |`);
  lines.push(`|--------|----------|-----------|-------|`);
  lines.push(
    `| **Model** | ${comparison.baseline.model} | ${comparison.candidate.model} | - |`
  );
  lines.push(
    `| **Pass Rate** | ${(comparison.baseline.pass_rate * 100).toFixed(1)}% | ${(comparison.candidate.pass_rate * 100).toFixed(1)}% | ${comparison.overall_delta >= 0 ? '+' : ''}${(comparison.overall_delta * 100).toFixed(1)}% |`
  );
  lines.push('');

  // Recommendation
  const emoji =
    comparison.recommendation === 'ship'
      ? '✅'
      : comparison.recommendation === 'investigate'
        ? '🔍'
        : '❌';
  lines.push(`## Recommendation: ${emoji} ${comparison.recommendation.toUpperCase()}\n`);
  lines.push(`${comparison.recommendation_reason}\n`);

  // Per-step breakdown
  lines.push('## By Step\n');
  lines.push(`| Step | Baseline | Candidate | Delta |`);
  lines.push(`|------|----------|-----------|-------|`);

  for (const [step, stats] of Object.entries(comparison.by_step)) {
    const deltaStr =
      stats.delta >= 0 ? `+${(stats.delta * 100).toFixed(1)}%` : `${(stats.delta * 100).toFixed(1)}%`;
    const emoji = stats.delta > 0 ? '📈' : stats.delta < 0 ? '📉' : '➖';
    lines.push(
      `| ${step} | ${(stats.baseline_pass_rate * 100).toFixed(1)}% | ${(stats.candidate_pass_rate * 100).toFixed(1)}% | ${emoji} ${deltaStr} |`
    );
  }
  lines.push('');

  // Regressions
  if (comparison.regressions.length > 0) {
    lines.push('## ⚠️ Regressions\n');
    lines.push('These test cases passed in baseline but failed in candidate:\n');
    for (const reg of comparison.regressions) {
      lines.push(`- **${reg.test_id}** (${reg.step})`);
      if (reg.criteria_that_failed.length > 0) {
        lines.push(`  - Failed criteria: ${reg.criteria_that_failed.join(', ')}`);
      }
    }
    lines.push('');
  }

  // Improvements
  if (comparison.improvements.length > 0) {
    lines.push('## 🎉 Improvements\n');
    lines.push('These test cases failed in baseline but passed in candidate:\n');
    for (const imp of comparison.improvements) {
      lines.push(`- **${imp.test_id}** (${imp.step})`);
      if (imp.criteria_that_passed.length > 0) {
        lines.push(`  - Now passing: ${imp.criteria_that_passed.join(', ')}`);
      }
    }
    lines.push('');
  }

  return lines.join('\n');
}

/**
 * Format comparison for console output
 */
export function formatComparisonConsole(comparison: FTEvalComparison): string {
  const lines: string[] = [];

  // Header
  lines.push('\n╔════════════════════════════════════════════════════════════╗');
  lines.push('║          FINE-TUNE EVALUATION COMPARISON                   ║');
  lines.push('╚════════════════════════════════════════════════════════════╝\n');

  // Models
  lines.push(`Baseline:  ${comparison.baseline.model} (${comparison.baseline.name})`);
  lines.push(`Candidate: ${comparison.candidate.model} (${comparison.candidate.name})\n`);

  // Overall
  const deltaStr =
    comparison.overall_delta >= 0
      ? `+${(comparison.overall_delta * 100).toFixed(1)}%`
      : `${(comparison.overall_delta * 100).toFixed(1)}%`;
  const deltaEmoji = comparison.overall_delta > 0 ? '📈' : comparison.overall_delta < 0 ? '📉' : '➖';

  lines.push('┌─────────────────────────────────────────────────────────────┐');
  lines.push(
    `│  Pass Rate: ${(comparison.baseline.pass_rate * 100).toFixed(1)}% → ${(comparison.candidate.pass_rate * 100).toFixed(1)}%  (${deltaEmoji} ${deltaStr})`.padEnd(62) + '│'
  );
  lines.push('└─────────────────────────────────────────────────────────────┘\n');

  // Recommendation
  const emoji =
    comparison.recommendation === 'ship'
      ? '✅'
      : comparison.recommendation === 'investigate'
        ? '🔍'
        : '❌';
  lines.push(`${emoji} Recommendation: ${comparison.recommendation.toUpperCase()}`);
  lines.push(`   ${comparison.recommendation_reason}\n`);

  // Per-step
  lines.push('By Step:');
  for (const [step, stats] of Object.entries(comparison.by_step)) {
    const stepDelta =
      stats.delta >= 0 ? `+${(stats.delta * 100).toFixed(1)}%` : `${(stats.delta * 100).toFixed(1)}%`;
    const stepEmoji = stats.delta > 0 ? '📈' : stats.delta < 0 ? '📉' : '  ';
    lines.push(
      `  ${stepEmoji} ${step.padEnd(20)} ${(stats.baseline_pass_rate * 100).toFixed(1)}% → ${(stats.candidate_pass_rate * 100).toFixed(1)}%  (${stepDelta})`
    );
  }
  lines.push('');

  // Regressions
  if (comparison.regressions.length > 0) {
    lines.push(`⚠️  ${comparison.regressions.length} Regression(s):`);
    for (const reg of comparison.regressions.slice(0, 5)) {
      lines.push(`    - ${reg.test_id} (${reg.step})`);
    }
    if (comparison.regressions.length > 5) {
      lines.push(`    ... and ${comparison.regressions.length - 5} more`);
    }
    lines.push('');
  }

  // Improvements
  if (comparison.improvements.length > 0) {
    lines.push(`🎉 ${comparison.improvements.length} Improvement(s):`);
    for (const imp of comparison.improvements.slice(0, 5)) {
      lines.push(`    - ${imp.test_id} (${imp.step})`);
    }
    if (comparison.improvements.length > 5) {
      lines.push(`    ... and ${comparison.improvements.length - 5} more`);
    }
    lines.push('');
  }

  return lines.join('\n');
}
