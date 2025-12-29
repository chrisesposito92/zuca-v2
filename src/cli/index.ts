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
import { ZucaInput } from '../types/input';
import { LlmModelSchema, type LlmModel } from '../types/llm';
import { UCGeneratorInput, NumUseCases } from '../types/uc-generator';
import {
  runPipeline,
  handleFollowUp,
  quickAnalysis,
  getSession,
} from '../pipeline/index';
import { runUCGenerator, mapToZucaInput } from '../pipeline/uc-generator/index';
import {
  formatSubscription,
  formatRatePlanCharges,
  formatContractsOrdersTable,
  formatBillingsTable,
  formatRevRecWaterfall,
} from '../utils/markdown-tables';
import { formatSummaryForDisplay } from '../pipeline/steps/summarize';
import {
  getAllCorrections,
  getCorrectionsForStep,
  getPatternStats,
  listAvailableCriteria,
  listTestSuites,
  runEvaluationSuite,
  type Correction,
} from '../self-learn';

const program = new Command();

function parseModelOption(model?: string): LlmModel | undefined {
  if (!model) return undefined;
  const parsed = LlmModelSchema.safeParse(model);
  if (!parsed.success) {
    console.error(
      chalk.red(`Invalid model: "${model}". Allowed: ${LlmModelSchema.options.join(', ')}`)
    );
    process.exit(1);
  }
  return parsed.data;
}

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

  printHeader('Contracts/Orders Table');
  if (result.contracts_orders) {
    console.log(formatContractsOrdersTable(result.contracts_orders.zr_contracts_orders));
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
async function analyzeCommand(
  inputFile: string,
  options: { output?: string; model?: string }
): Promise<void> {
  try {
    console.log(chalk.blue(`Reading input from ${inputFile}...`));
    const inputJson = await readFile(inputFile, 'utf-8');
    const input: ZucaInput = JSON.parse(inputJson);

    console.log(chalk.blue(`Analyzing use case for ${input.customer_name}...`));
    console.log('');

    const model = parseModelOption(options.model);
    const result = await runPipeline(input, { model });

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
async function interactiveCommand(options: { model?: string } = {}): Promise<void> {
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
  const selectedModel = parseModelOption(options.model);

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

    const result = await runPipeline(input, { model: selectedModel });
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
        const response = await handleFollowUp(sessionId!, query, selectedModel);

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
async function quickCommand(description: string, options: { model?: string }): Promise<void> {
  try {
    console.log(chalk.blue('Running quick analysis...'));
    console.log('');

    const model = parseModelOption(options.model);
    const result = await quickAnalysis(description, model);

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
  .option('-m, --model <model>', 'LLM model (gpt-5.2 | gemini-3-pro-preview | gemini-3-flash-preview)')
  .action(analyzeCommand);

program
  .command('interactive')
  .alias('i')
  .description('Start interactive mode for multi-turn conversation')
  .option('-m, --model <model>', 'LLM model (gpt-5.2 | gemini-3-pro-preview | gemini-3-flash-preview)')
  .action(interactiveCommand);

program
  .command('quick <description>')
  .description('Quick capability detection and matching')
  .option('-m, --model <model>', 'LLM model (gpt-5.2 | gemini-3-pro-preview | gemini-3-flash-preview)')
  .action(quickCommand);

/**
 * Generate command - generate use cases for a customer
 */
async function generateCommand(
  customerName: string,
  options: {
    website: string;
    count?: string;
    notes?: string;
    output?: string;
    local?: boolean;
    model?: string;
  }
): Promise<void> {
  try {
    const numUseCases = (options.count ? parseInt(options.count, 10) : 1) as NumUseCases;
    if (numUseCases < 1 || numUseCases > 3) {
      console.error(chalk.red('Error: count must be 1, 2, or 3'));
      process.exit(1);
    }

    const input: UCGeneratorInput = {
      customer_name: customerName,
      customer_website: options.website,
      num_use_cases: numUseCases,
      user_notes: options.notes,
    };

    console.log(chalk.blue(`Generating ${numUseCases} use case(s) for ${customerName}...`));
    console.log(chalk.gray(`Researching ${options.website}...`));
    console.log('');

    const model = parseModelOption(options.model);
    const result = await runUCGenerator(input, {
      useLocalFormatting: options.local,
      model,
    });

    // Print formatted output
    console.log(result.formatted);
    console.log('');

    // Print summary
    printHeader('Generation Summary');
    console.log(`Customer: ${chalk.yellow(result.generated.customer_name)}`);
    console.log(`Use Cases Generated: ${chalk.yellow(result.use_cases.length.toString())}`);
    console.log(`Research Completeness: ${chalk.yellow(result.research.research_meta.data_completeness)}`);
    console.log('');

    result.use_cases.forEach((uc, i) => {
      console.log(`  ${i + 1}. ${chalk.bold(uc.label)} (${uc.id})`);
    });

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
 * Generate interactive command - interactive use case generation
 */
async function generateInteractiveCommand(options: { model?: string } = {}): Promise<void> {
  const rl = createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  const prompt = (question: string): Promise<string> =>
    new Promise((resolve) => rl.question(question, resolve));

  console.log(chalk.cyan.bold('\n╔════════════════════════════════════════════════════════════╗'));
  console.log(chalk.cyan.bold('║         ZUCA - Use Case Generator                          ║'));
  console.log(chalk.cyan.bold('║         Interactive Mode                                   ║'));
  console.log(chalk.cyan.bold('╚════════════════════════════════════════════════════════════╝\n'));

  const selectedModel = parseModelOption(options.model);

  try {
    console.log(chalk.yellow('Enter customer details:'));
    console.log('');

    const customerName = await prompt(chalk.white('Customer Name: '));
    const customerWebsite = await prompt(chalk.white('Customer Website: '));
    const numUseCasesStr = await prompt(chalk.white('Number of Use Cases (1-3): '));
    const userNotes = await prompt(chalk.white('Additional Notes (optional, press Enter to skip): '));

    const numUseCases = (parseInt(numUseCasesStr, 10) || 1) as NumUseCases;
    if (numUseCases < 1 || numUseCases > 3) {
      console.error(chalk.red('Error: count must be 1, 2, or 3'));
      rl.close();
      process.exit(1);
    }

    const input: UCGeneratorInput = {
      customer_name: customerName,
      customer_website: customerWebsite,
      num_use_cases: numUseCases,
      user_notes: userNotes || undefined,
    };

    console.log('');
    console.log(chalk.blue(`Generating ${numUseCases} use case(s) for ${customerName}...`));
    console.log(chalk.gray(`Researching ${customerWebsite}...`));
    console.log('');

    const result = await runUCGenerator(input, { model: selectedModel });

    // Print formatted output
    console.log(result.formatted);
    console.log('');

    // Ask if user wants to run a use case through the main pipeline
    const runPipelineAnswer = await prompt(
      chalk.yellow('Would you like to run one of these use cases through the full ZUCA pipeline? (y/n): ')
    );

    if (runPipelineAnswer.toLowerCase() === 'y') {
      const useCaseNumStr = await prompt(chalk.white(`Which use case? (1-${result.use_cases.length}): `));
      const useCaseNum = parseInt(useCaseNumStr, 10);

      if (useCaseNum >= 1 && useCaseNum <= result.use_cases.length) {
        const selectedUseCase = result.use_cases[useCaseNum - 1];
        const zucaInput = mapToZucaInput(selectedUseCase);

        console.log('');
        console.log(chalk.blue(`Running ${selectedUseCase.label} through ZUCA pipeline...`));
        console.log('');

        const pipelineResult = await runPipeline(zucaInput, { model: selectedModel });
        printResult(pipelineResult);

        const saveAnswer = await prompt(chalk.white('Save results? (filename or press Enter to skip): '));
        if (saveAnswer.trim()) {
          await writeFile(saveAnswer.trim(), JSON.stringify(pipelineResult, null, 2));
          console.log(chalk.green(`Results saved to ${saveAnswer.trim()}`));
        }
      } else {
        console.log(chalk.yellow('Invalid selection, skipping pipeline run.'));
      }
    }

    console.log('');
    console.log(chalk.green('Done!'));
  } catch (error: any) {
    console.error(chalk.red(`Error: ${error.message}`));
    process.exit(1);
  } finally {
    rl.close();
  }
}

program
  .command('generate <customer_name>')
  .description('Generate use cases for a customer based on web research')
  .requiredOption('-w, --website <url>', 'Customer website URL')
  .option('-c, --count <number>', 'Number of use cases to generate (1-3)', '1')
  .option('-n, --notes <text>', 'Additional notes to guide generation')
  .option('-o, --output <file>', 'Save results to a JSON file')
  .option('-l, --local', 'Use local formatting (faster, no LLM for formatting)')
  .option('-m, --model <model>', 'LLM model (gpt-5.2 | gemini-3-pro-preview | gemini-3-flash-preview)')
  .action(generateCommand);

program
  .command('generate-interactive')
  .alias('gi')
  .description('Interactive mode for use case generation')
  .option('-m, --model <model>', 'LLM model (gpt-5.2 | gemini-3-pro-preview | gemini-3-flash-preview)')
  .action(generateInteractiveCommand);

// =============================================================================
// Self-Learning Commands
// =============================================================================

/**
 * Evaluate command - run evaluation suite against pipeline
 */
async function evaluateCommand(options: {
  suite?: string;
  model?: string;
  step?: string;
  corrections?: boolean;
}): Promise<void> {
  try {
    console.log(chalk.cyan.bold('\n═══ Self-Learning Evaluation ═══\n'));

    // List available criteria
    const availableCriteria = listAvailableCriteria();

    if (availableCriteria.length === 0) {
      console.log(chalk.yellow('No evaluation criteria found.'));
      console.log(chalk.gray('Create criteria files in data/evaluation-criteria/*.yaml'));
      console.log('');
      console.log(chalk.gray('Example criteria file format:'));
      console.log(chalk.gray(`
name: contracts-orders-criteria
step: contracts_orders

criteria:
  - id: CO-001
    name: price-step-up-segments
    severity: high
    patterns: [step-up, ramp, introductory]
    check:
      type: behavioral
      rule: |
        If input has multiple price periods, output must have
        one row per price period with distinct dates and amounts.
`));
      return;
    }

    console.log(chalk.green('Available Criteria:'));
    availableCriteria.forEach((name) => {
      const indicator = options.step && options.step !== name ? chalk.gray('○') : chalk.green('●');
      console.log(`  ${indicator} ${name}`);
    });
    console.log('');

    // List available test suites
    const availableSuites = listTestSuites();
    if (availableSuites.length === 0) {
      console.log(chalk.yellow('No test suites found.'));
      console.log(chalk.gray('Create test suite files in data/test-suites/*.yaml'));
      console.log('');
      console.log(chalk.gray('Example test suite format:'));
      console.log(chalk.gray(`
name: golden-scenarios
version: "1.0"
description: Test cases from golden use cases

tests:
  - id: mint-mobile-intro
    name: Introductory Pricing Test
    description: 3 months at $15, then 9 months at $20
    input:
      customer_name: Mint Mobile
      contract_start_date: "01/01/2026"
      terms_months: 12
      billing_period: Monthly
      use_case_description: "3 months at $15/month, then $20/month for remaining 9 months"
    focus_steps: [contracts_orders, billings]
`));
      return;
    }

    console.log(chalk.green('Available Test Suites:'));
    availableSuites.forEach((name) => {
      const indicator = options.suite && options.suite !== name ? chalk.gray('○') : chalk.green('●');
      console.log(`  ${indicator} ${name}`);
    });
    console.log('');

    // If no suite specified, just show available options
    if (!options.suite) {
      console.log(chalk.yellow('Usage: npm run cli -- evaluate --suite <name>'));
      console.log(chalk.gray('Add --corrections to generate corrections for failures'));
      return;
    }

    // Run the evaluation suite
    const model = parseModelOption(options.model);
    console.log(chalk.blue(`Running evaluation suite: ${options.suite}...`));
    console.log('');

    const result = await runEvaluationSuite(options.suite, {
      model,
      steps: options.step ? [options.step] : undefined,
      generateCorrections: options.corrections ?? false,
      onProgress: (current, total, testId) => {
        console.log(chalk.gray(`  [${current}/${total}] ${testId}`));
      },
    });

    // Print results
    console.log('');
    console.log(chalk.cyan.bold('═══ Results ═══'));
    console.log('');
    console.log(`Total Tests: ${chalk.yellow(result.total.toString())}`);
    console.log(`Passed: ${chalk.green(result.passed.toString())}`);
    console.log(`Failed: ${result.failed > 0 ? chalk.red(result.failed.toString()) : chalk.green('0')}`);
    if (options.corrections) {
      console.log(`Corrections Generated: ${chalk.yellow(result.correctionsGenerated.toString())}`);
    }
    console.log('');

    if (result.failures.length > 0) {
      console.log(chalk.red('Failures:'));
      result.failures.forEach((f, i) => {
        console.log(`  ${i + 1}. [${f.stepName}] ${f.criterionId}`);
        console.log(`     Test: ${f.testId}`);
        console.log(`     ${chalk.gray(f.explanation.substring(0, 100))}${f.explanation.length > 100 ? '...' : ''}`);
        console.log('');
      });
    } else {
      console.log(chalk.green('All tests passed!'));
    }

    console.log(chalk.gray(`Run ID: ${result.runId}`));
    console.log(chalk.gray(`Duration: ${new Date(result.completedAt!).getTime() - new Date(result.startedAt).getTime()}ms`));
  } catch (error: any) {
    console.error(chalk.red(`Error: ${error.message}`));
    process.exit(1);
  }
}

/**
 * Corrections list command - show stored corrections
 */
async function correctionsListCommand(options: { step?: string }): Promise<void> {
  try {
    console.log(chalk.cyan.bold('\n═══ Stored Corrections ═══\n'));

    const corrections = options.step
      ? await getCorrectionsForStep(options.step)
      : await getAllCorrections();

    if (corrections.length === 0) {
      console.log(chalk.yellow('No corrections stored yet.'));
      console.log(chalk.gray('Corrections are generated when the evaluation suite detects failures.'));
      return;
    }

    console.log(`Found ${chalk.yellow(corrections.length.toString())} correction(s):`);
    console.log('');

    corrections.forEach((c: Correction, i: number) => {
      const severityColor =
        c.issue_type === 'behavioral_violation' ? chalk.red :
        c.issue_type === 'logic_error' ? chalk.yellow :
        chalk.white;

      console.log(`${chalk.bold(`${i + 1}. [${c.step_name}]`)} ${severityColor(c.pattern)}`);
      console.log(`   Issue: ${c.issue_type}`);
      console.log(`   ${chalk.gray(c.expected_behavior.substring(0, 100))}${c.expected_behavior.length > 100 ? '...' : ''}`);
      console.log(`   Applied: ${c.times_applied}x | Success: ${(c.success_rate * 100).toFixed(0)}%`);
      console.log('');
    });
  } catch (error: any) {
    console.error(chalk.red(`Error: ${error.message}`));
    process.exit(1);
  }
}

/**
 * Corrections summary command - show pattern statistics
 */
async function correctionsSummaryCommand(options: { step?: string }): Promise<void> {
  try {
    console.log(chalk.cyan.bold('\n═══ Corrections Summary ═══\n'));

    const corrections = await getAllCorrections();

    if (corrections.length === 0) {
      console.log(chalk.yellow('No corrections stored yet.'));
      return;
    }

    // Group by step
    const byStep = new Map<string, number>();
    corrections.forEach((c: Correction) => {
      byStep.set(c.step_name, (byStep.get(c.step_name) || 0) + 1);
    });

    console.log(chalk.green('Corrections by Step:'));
    for (const [step, count] of byStep.entries()) {
      console.log(`  ${step}: ${chalk.yellow(count.toString())}`);
    }
    console.log('');

    // Show patterns for specific step or all steps
    const stepsToShow = options.step ? [options.step] : Array.from(byStep.keys());

    for (const stepName of stepsToShow) {
      const patterns = await getPatternStats(stepName);
      if (patterns.length > 0) {
        console.log(chalk.green(`Top Patterns - ${stepName}:`));
        patterns.slice(0, 5).forEach((p) => {
          console.log(`  ${chalk.yellow(p.count.toString())}x ${p.pattern}`);
        });
        console.log('');
      }
    }

    // Overall stats
    const totalApplied = corrections.reduce((sum: number, c: Correction) => sum + c.times_applied, 0);
    const avgSuccessRate =
      corrections.length > 0
        ? corrections.reduce((sum: number, c: Correction) => sum + c.success_rate, 0) / corrections.length
        : 0;

    console.log(chalk.green('Overall Statistics:'));
    console.log(`  Total Corrections: ${chalk.yellow(corrections.length.toString())}`);
    console.log(`  Total Applied: ${chalk.yellow(totalApplied.toString())}`);
    console.log(`  Avg Success Rate: ${chalk.yellow((avgSuccessRate * 100).toFixed(1) + '%')}`);
  } catch (error: any) {
    console.error(chalk.red(`Error: ${error.message}`));
    process.exit(1);
  }
}

program
  .command('evaluate')
  .description('Run evaluation suite against pipeline')
  .option('-s, --suite <name>', 'Test suite name')
  .option('-m, --model <model>', 'LLM model for evaluation')
  .option('--step <step>', 'Only evaluate specific step')
  .option('--corrections', 'Generate corrections for failures')
  .action(evaluateCommand);

// Corrections subcommand group
const corrections = program
  .command('corrections')
  .description('Manage learned corrections');

corrections
  .command('list')
  .description('List stored corrections')
  .option('--step <step>', 'Filter by step name')
  .action(correctionsListCommand);

corrections
  .command('summary')
  .description('Show correction pattern statistics')
  .option('--step <step>', 'Filter by step name')
  .action(correctionsSummaryCommand);

// Parse and execute
program.parse();
