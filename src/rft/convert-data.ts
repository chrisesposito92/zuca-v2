/**
 * Convert SFT training data and test suites to RFT format
 *
 * RFT format requires:
 * - messages array ending with user role (no assistant response)
 * - Optional reference_answer for grader comparison
 * - Optional evaluation_criteria for grader guidance
 */

import fs from 'fs';
import path from 'path';
import yaml from 'yaml';
import { RFTExample, RFTExampleSchema } from './types';

interface SFTMessage {
  role: 'system' | 'user' | 'assistant';
  content: string;
}

interface SFTExample {
  messages: SFTMessage[];
}

interface TestCase {
  id: string;
  name: string;
  description?: string;
  input: Record<string, unknown>;
  focus_steps?: string[];
  tags?: string[];
}

interface TestSuite {
  name: string;
  version: string;
  description: string;
  tests: TestCase[];
}

/**
 * Convert SFT JSONL to RFT JSONL
 *
 * Takes input→output pairs and splits them:
 * - messages (system + user) → training prompt
 * - assistant message → reference_answer for grading
 */
export async function convertSFTtoRFT(
  inputPath: string,
  outputPath: string,
  options: {
    includeReference?: boolean;
    maxExamples?: number;
  } = {}
): Promise<{ converted: number; skipped: number }> {
  const { includeReference = true, maxExamples } = options;

  const content = fs.readFileSync(inputPath, 'utf-8');
  const lines = content.trim().split('\n');

  const rftExamples: RFTExample[] = [];
  let skipped = 0;

  for (const line of lines) {
    if (maxExamples && rftExamples.length >= maxExamples) break;

    try {
      const sftExample: SFTExample = JSON.parse(line);

      // Find system, user, and assistant messages
      const systemMsg = sftExample.messages.find((m) => m.role === 'system');
      const userMsg = sftExample.messages.find((m) => m.role === 'user');
      const assistantMsg = sftExample.messages.find((m) => m.role === 'assistant');

      if (!userMsg) {
        skipped++;
        continue;
      }

      // Build RFT example - messages end with user role
      const rftExample: RFTExample = {
        messages: [],
      };

      if (systemMsg) {
        rftExample.messages.push({
          role: 'system',
          content: systemMsg.content,
        });
      }

      rftExample.messages.push({
        role: 'user',
        content: userMsg.content,
      });

      // Include assistant response as reference for grading
      if (includeReference && assistantMsg) {
        rftExample.reference_answer = assistantMsg.content;
      }

      // Validate
      const parsed = RFTExampleSchema.safeParse(rftExample);
      if (parsed.success) {
        rftExamples.push(parsed.data);
      } else {
        skipped++;
      }
    } catch {
      skipped++;
    }
  }

  // Write output
  const outputContent = rftExamples.map((e) => JSON.stringify(e)).join('\n');
  fs.writeFileSync(outputPath, outputContent);

  return { converted: rftExamples.length, skipped };
}

/**
 * Convert test suite YAML to RFT JSONL
 *
 * Test cases become training prompts with:
 * - System prompt (pipeline system prompt)
 * - User prompt (built from test case input)
 * - Evaluation criteria (from focus_steps)
 */
export async function convertTestSuiteToRFT(
  suitePath: string,
  outputPath: string,
  options: {
    systemPrompt?: string;
    referenceOutputsDir?: string;
  } = {}
): Promise<{ converted: number; skipped: number }> {
  const { systemPrompt, referenceOutputsDir } = options;

  const suiteContent = fs.readFileSync(suitePath, 'utf-8');
  const suite: TestSuite = yaml.parse(suiteContent);

  const rftExamples: RFTExample[] = [];
  let skipped = 0;

  for (const test of suite.tests) {
    try {
      // Build user prompt from test input
      const userPrompt = buildUserPromptFromInput(test.input, test.description);

      const rftExample: RFTExample = {
        messages: [],
        test_id: test.id,
        focus_steps: test.focus_steps,
      };

      // Add system prompt if provided
      if (systemPrompt) {
        rftExample.messages.push({
          role: 'system',
          content: systemPrompt,
        });
      }

      rftExample.messages.push({
        role: 'user',
        content: userPrompt,
      });

      // Try to load reference output if available
      if (referenceOutputsDir) {
        const refPath = path.join(referenceOutputsDir, `${test.id}.json`);
        if (fs.existsSync(refPath)) {
          rftExample.reference_answer = fs.readFileSync(refPath, 'utf-8');
        }
      }

      // Build evaluation criteria from focus_steps
      if (test.focus_steps && test.focus_steps.length > 0) {
        rftExample.evaluation_criteria = buildCriteriaFromSteps(test.focus_steps);
      }

      rftExamples.push(rftExample);
    } catch {
      skipped++;
    }
  }

  // Write output
  const outputContent = rftExamples.map((e) => JSON.stringify(e)).join('\n');
  fs.writeFileSync(outputPath, outputContent);

  return { converted: rftExamples.length, skipped };
}

/**
 * Build user prompt from test case input
 */
function buildUserPromptFromInput(
  input: Record<string, unknown>,
  description?: string
): string {
  const parts: string[] = [];

  if (description) {
    parts.push(`## Scenario\n${description}`);
  }

  parts.push(`## Contract Details`);

  if (input.customer_name) {
    parts.push(`Customer: ${input.customer_name}`);
  }
  if (input.contract_start_date) {
    parts.push(`Start Date: ${input.contract_start_date}`);
  }
  if (input.terms_months) {
    parts.push(`Term: ${input.terms_months} months`);
  }
  if (input.transaction_currency) {
    parts.push(`Currency: ${input.transaction_currency}`);
  }
  if (input.billing_period) {
    parts.push(`Billing Period: ${input.billing_period}`);
  }

  if (input.use_case_description) {
    parts.push(`\n## Use Case\n${input.use_case_description}`);
  }

  parts.push(`\nPlease analyze this subscription and generate the complete pipeline output including contracts/orders, billings, and revenue recognition.`);

  return parts.join('\n');
}

/**
 * Build evaluation criteria from focus steps
 */
function buildCriteriaFromSteps(focusSteps: string[]): string {
  const criteriaMap: Record<string, string> = {
    contracts_orders: `
- Verify contracts/orders table has correct structure
- Check that all line items are present
- Validate date ranges match contract terms
- Ensure amounts calculate correctly`,

    billings: `
- Verify billing schedule matches billing period
- Check invoice amounts are correct
- Validate billing dates align with contract
- Ensure total billings equal contract value`,

    rev_rec: `
- Verify revenue recognition periods
- Check revenue amounts per period
- Validate rev rec matches service delivery
- Ensure total recognized revenue equals contract value`,

    design_subscription: `
- Verify subscription structure is valid
- Check charge types are appropriate
- Validate pricing model selection
- Ensure all components are included`,

    pipeline: `
- Verify complete pipeline output
- Check all tables are present and valid
- Validate cross-table consistency
- Ensure business logic is correct`,
  };

  const criteria = focusSteps
    .map((step) => criteriaMap[step] || `- Evaluate ${step} output for correctness`)
    .join('\n');

  return `Focus on these areas:\n${criteria}`;
}

/**
 * Split RFT data into train/validation sets
 */
export function splitRFTData(
  inputPath: string,
  trainPath: string,
  validPath: string,
  validationRatio: number = 0.15
): { train: number; valid: number } {
  const content = fs.readFileSync(inputPath, 'utf-8');
  const lines = content.trim().split('\n');

  // Shuffle
  const shuffled = lines.sort(() => Math.random() - 0.5);

  // Split
  const validCount = Math.floor(shuffled.length * validationRatio);
  const validLines = shuffled.slice(0, validCount);
  const trainLines = shuffled.slice(validCount);

  fs.writeFileSync(trainPath, trainLines.join('\n'));
  fs.writeFileSync(validPath, validLines.join('\n'));

  return { train: trainLines.length, valid: validLines.length };
}
