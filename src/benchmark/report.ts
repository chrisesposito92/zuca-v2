/**
 * Benchmark Report Generator
 *
 * Generates human-readable console output, JSON exports, and Markdown reports
 * for benchmark results.
 */

import chalk from 'chalk';
import type { LlmModel } from '../types/llm';
import { formatDuration, formatCost, formatPercent, formatNumber } from './metrics';
import type { BenchmarkComparison, BenchmarkRankings } from './types';

// =============================================================================
// Console Output Helpers
// =============================================================================

/**
 * Get medal emoji for ranking position
 */
function getMedal(rank: number): string {
  switch (rank) {
    case 1:
      return '🥇';
    case 2:
      return '🥈';
    case 3:
      return '🥉';
    default:
      return '  ';
  }
}

/**
 * Pad string to specified width
 */
function pad(str: string, width: number, align: 'left' | 'right' = 'left'): string {
  const padded = align === 'right' ? str.padStart(width) : str.padEnd(width);
  return padded.substring(0, width);
}

/**
 * Generate ASCII table row
 */
function tableRow(cells: string[], widths: number[]): string {
  return '│ ' + cells.map((cell, i) => pad(cell, widths[i])).join(' │ ') + ' │';
}

/**
 * Generate ASCII table separator
 */
function tableSeparator(widths: number[], type: 'top' | 'middle' | 'bottom'): string {
  const chars = {
    top: { left: '┌', mid: '┬', right: '┐', line: '─' },
    middle: { left: '├', mid: '┼', right: '┤', line: '─' },
    bottom: { left: '└', mid: '┴', right: '┘', line: '─' },
  };
  const c = chars[type];
  return c.left + widths.map((w) => c.line.repeat(w + 2)).join(c.mid) + c.right;
}

// =============================================================================
// Console Summary
// =============================================================================

/**
 * Print benchmark summary to console with colors
 */
export function printConsoleSummary(results: BenchmarkComparison, verbose = false): void {
  const models = results.models;

  console.log('');
  console.log(chalk.cyan.bold('═══════════════════════════════════════════════════════════════════'));
  console.log(chalk.cyan.bold('                    ZUCA BENCHMARK RESULTS                          '));
  console.log(chalk.cyan.bold('═══════════════════════════════════════════════════════════════════'));
  console.log('');

  // Metadata
  console.log(chalk.gray(`Run ID:    ${results.runId}`));
  console.log(chalk.gray(`Suite:     ${results.suiteName} (${results.summary.totalTests} tests)`));
  console.log(chalk.gray(`Duration:  ${formatDuration(results.summary.totalDurationMs)}`));
  console.log(chalk.gray(`Timestamp: ${results.timestamp}`));
  console.log('');

  // Comparison table
  console.log(chalk.yellow.bold('Model Comparison:'));
  console.log('');

  const headers = ['Model', 'Pass Rate', 'Avg Time', 'Tokens', 'Est. Cost', 'Errors'];
  const widths = [22, 10, 10, 10, 10, 7];

  const rows: string[][] = models.map((model) => {
    const r = results.results[model];
    return [
      model,
      formatPercent(r.quality.passRate),
      formatDuration(r.speed.avgTestMs),
      formatNumber(r.cost.totalTokens),
      formatCost(r.cost.estimatedCostUsd),
      r.reliability.errorCount.toString(),
    ];
  });

  console.log(tableSeparator(widths, 'top'));
  console.log(tableRow(headers, widths));
  console.log(tableSeparator(widths, 'middle'));
  for (const row of rows) {
    console.log(tableRow(row, widths));
  }
  console.log(tableSeparator(widths, 'bottom'));
  console.log('');

  // Rankings
  printRankings(results.rankings);

  // Per-model details (verbose)
  if (verbose) {
    console.log('');
    console.log(chalk.yellow.bold('Per-Model Details:'));

    for (const model of models) {
      const r = results.results[model];
      console.log('');
      console.log(chalk.cyan(`  ${model}:`));
      console.log(
        `    Tests: ${r.testResults.length} | Passed: ${r.quality.passedCount} | Failed: ${r.quality.failedCount}`
      );
      console.log(`    Total Time: ${formatDuration(r.speed.totalMs)}`);
      console.log(
        `    Tokens: ${formatNumber(r.cost.promptTokens)} in / ${formatNumber(r.cost.completionTokens)} out`
      );
      console.log(`    Estimated Cost: ${formatCost(r.cost.estimatedCostUsd)}`);

      if (r.reliability.errors.length > 0) {
        console.log(chalk.red(`    Errors:`));
        r.reliability.errors.slice(0, 3).forEach((e) => {
          console.log(chalk.red(`      - [${e.testId}] ${e.message.substring(0, 60)}...`));
        });
        if (r.reliability.errors.length > 3) {
          console.log(chalk.gray(`      ... and ${r.reliability.errors.length - 3} more`));
        }
      }
    }
  }

  console.log('');
}

/**
 * Print rankings section
 */
function printRankings(rankings: BenchmarkRankings): void {
  console.log(chalk.yellow.bold('Rankings:'));
  console.log('');

  // Quality
  console.log(chalk.green('  🎯 Quality (Pass Rate):'));
  for (const r of rankings.byQuality) {
    console.log(`    ${getMedal(r.rank)} ${r.model}: ${formatPercent(r.value)}`);
  }
  console.log('');

  // Speed
  console.log(chalk.blue('  ⚡ Speed (Avg Time):'));
  for (const r of rankings.bySpeed) {
    console.log(`    ${getMedal(r.rank)} ${r.model}: ${formatDuration(r.value)}`);
  }
  console.log('');

  // Cost
  console.log(chalk.magenta('  💰 Cost (Estimated):'));
  for (const r of rankings.byCost) {
    console.log(`    ${getMedal(r.rank)} ${r.model}: ${formatCost(r.value)}`);
  }
  console.log('');

  // Reliability
  console.log(chalk.red('  🛡️  Reliability (Completion Rate):'));
  for (const r of rankings.byReliability) {
    console.log(`    ${getMedal(r.rank)} ${r.model}: ${formatPercent(r.value)}`);
  }
  console.log('');

  // Overall
  console.log(chalk.yellow('  🏆 Overall (Composite Score):'));
  for (const r of rankings.overall) {
    const avgRank = r.value.toFixed(2);
    console.log(`    ${getMedal(r.rank)} ${r.model}: avg rank ${avgRank}`);
  }
}

// =============================================================================
// Markdown Report
// =============================================================================

/**
 * Generate Markdown report
 */
export function generateMarkdownReport(results: BenchmarkComparison): string {
  const lines: string[] = [];
  const models = results.models;

  // Header
  lines.push('# ZUCA Benchmark Report');
  lines.push('');
  lines.push(`**Run ID:** \`${results.runId}\``);
  lines.push(`**Suite:** ${results.suiteName}`);
  lines.push(`**Tests:** ${results.summary.totalTests}`);
  lines.push(`**Date:** ${results.timestamp}`);
  lines.push(`**Duration:** ${formatDuration(results.summary.totalDurationMs)}`);
  lines.push('');

  // Summary
  lines.push('## Summary');
  lines.push('');
  lines.push(
    `- **Best Quality:** ${results.summary.bestQuality.model} (${formatPercent(results.summary.bestQuality.passRate)})`
  );
  lines.push(
    `- **Fastest:** ${results.summary.bestSpeed.model} (${formatDuration(results.summary.bestSpeed.avgMs)})`
  );
  lines.push(
    `- **Cheapest:** ${results.summary.bestCost.model} (${formatCost(results.summary.bestCost.costUsd)})`
  );
  lines.push('');

  // Comparison table
  lines.push('## Model Comparison');
  lines.push('');
  lines.push('| Model | Pass Rate | Avg Time | Tokens | Est. Cost | Errors |');
  lines.push('|-------|-----------|----------|--------|-----------|--------|');

  for (const model of models) {
    const r = results.results[model];
    lines.push(
      `| ${model} | ${formatPercent(r.quality.passRate)} | ${formatDuration(r.speed.avgTestMs)} | ${formatNumber(r.cost.totalTokens)} | ${formatCost(r.cost.estimatedCostUsd)} | ${r.reliability.errorCount} |`
    );
  }
  lines.push('');

  // Rankings
  lines.push('## Rankings');
  lines.push('');

  lines.push('### Quality (Pass Rate)');
  lines.push('');
  for (const r of results.rankings.byQuality) {
    lines.push(`${r.rank}. **${r.model}**: ${formatPercent(r.value)}`);
  }
  lines.push('');

  lines.push('### Speed (Average Time)');
  lines.push('');
  for (const r of results.rankings.bySpeed) {
    lines.push(`${r.rank}. **${r.model}**: ${formatDuration(r.value)}`);
  }
  lines.push('');

  lines.push('### Cost (Estimated)');
  lines.push('');
  for (const r of results.rankings.byCost) {
    lines.push(`${r.rank}. **${r.model}**: ${formatCost(r.value)}`);
  }
  lines.push('');

  lines.push('### Reliability (Completion Rate)');
  lines.push('');
  for (const r of results.rankings.byReliability) {
    lines.push(`${r.rank}. **${r.model}**: ${formatPercent(r.value)}`);
  }
  lines.push('');

  lines.push('### Overall (Composite Score)');
  lines.push('');
  for (const r of results.rankings.overall) {
    lines.push(`${r.rank}. **${r.model}**: avg rank ${r.value.toFixed(2)}`);
  }
  lines.push('');

  // Per-model details
  lines.push('## Detailed Results');
  lines.push('');

  for (const model of models) {
    const r = results.results[model];
    lines.push(`### ${model}`);
    lines.push('');
    lines.push(`- **Pass Rate:** ${formatPercent(r.quality.passRate)} (${r.quality.passedCount}/${r.testResults.length})`);
    lines.push(`- **Total Time:** ${formatDuration(r.speed.totalMs)}`);
    lines.push(`- **Average Time:** ${formatDuration(r.speed.avgTestMs)}`);
    lines.push(`- **Prompt Tokens:** ${formatNumber(r.cost.promptTokens)}`);
    lines.push(`- **Completion Tokens:** ${formatNumber(r.cost.completionTokens)}`);
    lines.push(`- **Estimated Cost:** ${formatCost(r.cost.estimatedCostUsd)}`);
    lines.push(`- **Completion Rate:** ${formatPercent(r.reliability.completionRate)}`);

    if (r.reliability.errors.length > 0) {
      lines.push('');
      lines.push('**Errors:**');
      lines.push('');
      for (const e of r.reliability.errors) {
        lines.push(`- \`${e.testId}\`: ${e.message}`);
      }
    }
    lines.push('');
  }

  // Footer
  lines.push('---');
  lines.push('');
  lines.push('*Generated by ZUCA Benchmark CLI*');

  return lines.join('\n');
}

// =============================================================================
// JSON Export
// =============================================================================

/**
 * Serialize results to JSON (with pretty printing)
 */
export function serializeToJson(results: BenchmarkComparison): string {
  return JSON.stringify(results, null, 2);
}

// =============================================================================
// Progress Display
// =============================================================================

/**
 * Create a progress callback for console output
 */
export function createConsoleProgressCallback(verbose = false): (
  phase: 'model_start' | 'test_start' | 'test_complete' | 'model_complete',
  data: {
    model: LlmModel;
    testIndex?: number;
    totalTests?: number;
    testId?: string;
    passed?: boolean;
    durationMs?: number;
  }
) => void {
  return (phase, data) => {
    switch (phase) {
      case 'model_start':
        console.log('');
        console.log(chalk.cyan(`▶ Starting benchmark for ${data.model}...`));
        break;

      case 'test_start':
        if (verbose) {
          process.stdout.write(
            chalk.gray(`  [${data.testIndex}/${data.totalTests}] ${data.testId}... `)
          );
        }
        break;

      case 'test_complete':
        if (verbose) {
          const status = data.passed ? chalk.green('✓') : chalk.red('✗');
          console.log(`${status} ${formatDuration(data.durationMs || 0)}`);
        } else {
          // Simple progress indicator
          process.stdout.write(data.passed ? chalk.green('.') : chalk.red('x'));
        }
        break;

      case 'model_complete':
        if (!verbose) {
          console.log(''); // New line after dots
        }
        console.log(chalk.cyan(`✓ Completed ${data.model}`));
        break;
    }
  };
}
