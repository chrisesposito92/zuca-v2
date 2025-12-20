#!/usr/bin/env node
/**
 * ZUCA CLI - Zuora Use Case Architect Command Line Interface
 *
 * Usage:
 *   zuca analyze <input.json>     - Analyze a use case from JSON file
 *   zuca interactive              - Interactive mode for multi-turn conversation
 *   zuca quick "<description>"    - Quick capability detection
 */

import { Command } from 'commander';
import chalk from 'chalk';
import { readFile, writeFile } from 'fs/promises';
import { createInterface } from 'readline';
import { ZucaInput } from '../types/input.js';
import {
  runPipeline,
  handleFollowUp,
  quickAnalysis,
  getSession,
} from '../pipeline/index.js';
import {
  formatSubscription,
  formatRatePlanCharges,
  formatBillingsTable,
  formatRevRecWaterfall,
} from '../utils/markdown-tables.js';
import { formatSummaryForDisplay } from '../pipeline/steps/summarize.js';

const program = new Command();

/**
 * Print a section header
 */
function printHeader(title: string): void {
  console.log('');
  console.log(chalk.cyan.bold(`═══ ${title} ${'═'.repeat(60 - title.length)}`));
  console.log('');
}

/**
 * Print the full analysis result
 */
function printResult(result: any): void {
  printHeader('Contract Intelligence');
  if (result.contract_intel) {
    console.log(`Service Start: ${chalk.yellow(result.contract_intel.service_start_mdy)}`);
    console.log(`Service End: ${chalk.yellow(result.contract_intel.service_end_mdy || 'Not specified')}`);
    console.log(`Term: ${chalk.yellow(result.contract_intel.term_months)} months`);
    console.log(`Billing Period: ${chalk.yellow(result.contract_intel.billing_period || 'N/A')}`);
    console.log(`Billing Timing: ${chalk.yellow(result.contract_intel.billing_timing || 'N/A')}`);
    console.log(`Trigger Event: ${chalk.yellow(result.contract_intel.trigger_event)}`);
  }

  printHeader('Detected Capabilities');
  if (result.detected_capabilities) {
    console.log(chalk.green('Billing Capabilities:'));
    result.detected_capabilities.billing_caps.forEach((cap: string) => {
      console.log(`  • ${cap}`);
    });
    console.log('');
    console.log(chalk.green('Revenue Capabilities:'));
    result.detected_capabilities.revenue_caps.forEach((cap: string) => {
      console.log(`  • ${cap}`);
    });
    console.log('');
    const confidencePercent = (result.detected_capabilities.confidence * 100).toFixed(0);
    console.log('Confidence: ' + chalk.yellow(confidencePercent + '%'));
  }

  printHeader('Matched Golden Use Cases');
  if (result.matched_golden_use_cases) {
    result.matched_golden_use_cases.matched_guc.forEach((match: any, i: number) => {
      const scoreColor = match.score >= 0.3 ? chalk.green : match.score >= 0.1 ? chalk.yellow : chalk.red;
      console.log(`${i + 1}. ${chalk.bold(match.title)} (${match.id})`);
      console.log(`   Score: ${scoreColor((match.score * 100).toFixed(1) + '%')}`);
    });
  }

  printHeader('Subscription Specification');
  if (result.subscription_spec) {
    console.log(formatSubscription(result.subscription_spec.subscription));
    console.log('');
    console.log(formatRatePlanCharges(result.subscription_spec.rate_plans));
  }

  printHeader('POB Mapping');
  if (result.pob_mapping) {
    result.pob_mapping.charge_pob_map.forEach((mapping: any) => {
      console.log(`${chalk.bold(mapping.chargeName)}:`);
      console.log(`  POB: ${chalk.yellow(mapping.pob_name)} (${mapping.pob_identifier})`);
      console.log(`  Method: ${mapping.ratable_method} | Event: ${mapping.release_event}`);
      console.log(`  Window: ${mapping.recognition_window.start} - ${mapping.recognition_window.end || 'ongoing'}`);
      console.log(`  Confidence: ${(mapping.confidence * 100).toFixed(0)}%`);
      console.log('');
    });
  }

  printHeader('Billings Schedule');
  if (result.billings) {
    console.log(formatBillingsTable(result.billings.zb_billings));
  }

  printHeader('Revenue Recognition Waterfall');
  if (result.revrec_waterfall) {
    console.log(formatRevRecWaterfall(result.revrec_waterfall.zr_revrec));
  }

  printHeader('Summary');
  if (result.summary) {
    console.log(formatSummaryForDisplay(result.summary));
  }
}

/**
 * Analyze command - process a use case from JSON file
 */
async function analyzeCommand(inputFile: string, options: { output?: string }): Promise<void> {
  try {
    console.log(chalk.blue(`Reading input from ${inputFile}...`));
    const inputJson = await readFile(inputFile, 'utf-8');
    const input: ZucaInput = JSON.parse(inputJson);

    console.log(chalk.blue(`Analyzing use case for ${input.customer_name}...`));
    console.log('');

    const result = await runPipeline(input);

    printResult(result);

    if (options.output) {
      await writeFile(options.output, JSON.stringify(result, null, 2));
      console.log('');
      console.log(chalk.green(`Results saved to ${options.output}`));
    }
  } catch (error: any) {
    console.error(chalk.red(`Error: ${error.message}`));
    process.exit(1);
  }
}

/**
 * Interactive command - multi-turn conversation mode
 */
async function interactiveCommand(): Promise<void> {
  const rl = createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  const prompt = (question: string): Promise<string> =>
    new Promise((resolve) => rl.question(question, resolve));

  console.log(chalk.cyan.bold('\n╔════════════════════════════════════════════════════════════╗'));
  console.log(chalk.cyan.bold('║         ZUCA - Zuora Use Case Architect                    ║'));
  console.log(chalk.cyan.bold('║         Interactive Mode                                   ║'));
  console.log(chalk.cyan.bold('╚════════════════════════════════════════════════════════════╝\n'));

  let sessionId: string | null = null;

  try {
    // Collect initial use case information
    console.log(chalk.yellow('Enter the use case details:'));
    console.log('');

    const customerName = await prompt(chalk.white('Customer Name: '));
    const contractStartDate = await prompt(chalk.white('Contract Start Date (MM/DD/YYYY): '));
    const termsMonths = await prompt(chalk.white('Contract Term (months): '));
    const billingPeriod = await prompt(chalk.white('Billing Period (Monthly/Quarterly/Semi-Annually/Annually): '));

    console.log('');
    console.log(chalk.yellow('Enter the use case description (end with an empty line):'));
    const descLines: string[] = [];
    let line = await prompt('');
    while (line.trim() !== '') {
      descLines.push(line);
      line = await prompt('');
    }
    const useCaseDescription = descLines.join('\n');

    const revRecNotes = await prompt(chalk.white('Revenue Recognition Notes (optional, press Enter to skip): '));

    const isAllocations = (await prompt(chalk.white('Perform Allocations? (y/n): '))).toLowerCase() === 'y';
    let allocationMethod: string | undefined;
    if (isAllocations) {
      allocationMethod = await prompt(chalk.white('Allocation Method (Use List Price/Use Sell Price): '));
    }

    const input: ZucaInput = {
      customer_name: customerName,
      contract_start_date: contractStartDate,
      terms_months: parseInt(termsMonths, 10),
      transaction_currency: 'USD',
      billing_period: billingPeriod as any,
      is_allocations: isAllocations,
      allocation_method: allocationMethod as any,
      rev_rec_notes: revRecNotes || undefined,
      use_case_description: useCaseDescription,
    };

    console.log('');
    console.log(chalk.blue('Processing use case...'));
    console.log('');

    const result = await runPipeline(input);
    sessionId = result.session_id;

    printResult(result);

    // Enter follow-up loop
    console.log('');
    console.log(chalk.green('Analysis complete! You can now ask follow-up questions.'));
    console.log(chalk.gray('Type "exit" to quit, "save <filename>" to save results.'));
    console.log('');

    while (true) {
      const query = await prompt(chalk.cyan('You: '));

      if (query.toLowerCase() === 'exit') {
        console.log(chalk.yellow('Goodbye!'));
        break;
      }

      if (query.toLowerCase().startsWith('save ')) {
        const filename = query.substring(5).trim();
        const session = getSession(sessionId!);
        if (session) {
          await writeFile(filename, JSON.stringify(session.result, null, 2));
          console.log(chalk.green(`Results saved to ${filename}`));
        }
        continue;
      }

      try {
        const response = await handleFollowUp(sessionId!, query);

        if (response.type === 'answer') {
          console.log('');
          console.log(chalk.green('ZUCA: ') + (response.data as any).answer);
          console.log('');
        } else {
          console.log('');
          console.log(chalk.yellow('Solution updated. Showing changes...'));
          printResult(response.data);
        }
      } catch (error: any) {
        console.error(chalk.red(`Error: ${error.message}`));
      }
    }
  } finally {
    rl.close();
  }
}

/**
 * Quick command - fast capability detection
 */
async function quickCommand(description: string): Promise<void> {
  try {
    console.log(chalk.blue('Running quick analysis...'));
    console.log('');

    const result = await quickAnalysis(description);

    printHeader('Detected Capabilities');
    console.log(chalk.green('Billing:'));
    result.detected.billing_caps.forEach((cap: string) => console.log(`  • ${cap}`));
    console.log('');
    console.log(chalk.green('Revenue:'));
    result.detected.revenue_caps.forEach((cap: string) => console.log(`  • ${cap}`));
    console.log('');
    const quickConfidencePercent = (result.detected.confidence * 100).toFixed(0);
    console.log('Confidence: ' + chalk.yellow(quickConfidencePercent + '%'));

    printHeader('Matched Golden Use Cases');
    result.matched.matched_guc.forEach((match: { title: string; score: number }, i: number) => {
      const scoreColor = match.score >= 0.3 ? chalk.green : match.score >= 0.1 ? chalk.yellow : chalk.red;
      console.log(`${i + 1}. ${chalk.bold(match.title)} - ${scoreColor((match.score * 100).toFixed(1) + '%')}`);
    });
  } catch (error: any) {
    console.error(chalk.red(`Error: ${error.message}`));
    process.exit(1);
  }
}

// Setup CLI commands
program
  .name('zuca')
  .description('Zuora Use Case Architect - Generate complete Zuora solutions from customer use cases')
  .version('1.0.0');

program
  .command('analyze <input>')
  .description('Analyze a use case from a JSON file')
  .option('-o, --output <file>', 'Save results to a JSON file')
  .action(analyzeCommand);

program
  .command('interactive')
  .alias('i')
  .description('Start interactive mode for multi-turn conversation')
  .action(interactiveCommand);

program
  .command('quick <description>')
  .description('Quick capability detection and matching')
  .action(quickCommand);

// Parse and execute
program.parse();
