/**
 * Test Suite Loader
 *
 * Loads test suites from YAML files for evaluation.
 * Test suites define test cases that run through the pipeline.
 */

import * as fs from 'fs';
import * as path from 'path';
import { parse as parseYaml } from 'yaml';
import { TestSuiteSchema, type TestSuite, type TestCase } from '../types';
import type { ZucaInput } from '../../types/input';

const DEFAULT_SUITES_DIR = path.join(process.cwd(), 'data', 'test-suites');

/**
 * Cache for loaded test suites
 */
const suiteCache = new Map<string, TestSuite>();

/**
 * Load a test suite from a YAML file
 *
 * @param suiteName - Name of the test suite (without .yaml extension)
 * @param suitesDir - Optional custom directory path
 */
export async function loadTestSuite(
  suiteName: string,
  suitesDir: string = DEFAULT_SUITES_DIR
): Promise<TestSuite> {
  const cacheKey = `${suitesDir}:${suiteName}`;
  if (suiteCache.has(cacheKey)) {
    return suiteCache.get(cacheKey)!;
  }

  const filePath = path.join(suitesDir, `${suiteName}.yaml`);

  if (!fs.existsSync(filePath)) {
    throw new Error(`Test suite not found: ${filePath}`);
  }

  try {
    const content = fs.readFileSync(filePath, 'utf-8');
    const parsed = parseYaml(content);
    const validated = TestSuiteSchema.parse(parsed);

    suiteCache.set(cacheKey, validated);
    return validated;
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(`Failed to load test suite ${suiteName}: ${error.message}`);
    }
    throw error;
  }
}

/**
 * Load all available test suites
 *
 * @param suitesDir - Optional custom directory path
 */
export async function loadAllTestSuites(
  suitesDir: string = DEFAULT_SUITES_DIR
): Promise<Map<string, TestSuite>> {
  const suites = new Map<string, TestSuite>();

  if (!fs.existsSync(suitesDir)) {
    return suites;
  }

  const files = fs.readdirSync(suitesDir);
  const yamlFiles = files.filter((f) => f.endsWith('.yaml') || f.endsWith('.yml'));

  for (const file of yamlFiles) {
    const suiteName = file.replace(/\.(yaml|yml)$/, '');
    try {
      const suite = await loadTestSuite(suiteName, suitesDir);
      suites.set(suiteName, suite);
    } catch (error) {
      console.warn(`Skipping invalid test suite ${file}:`, error);
    }
  }

  return suites;
}

/**
 * List available test suite names
 *
 * @param suitesDir - Optional custom directory path
 */
export function listTestSuites(suitesDir: string = DEFAULT_SUITES_DIR): string[] {
  if (!fs.existsSync(suitesDir)) {
    return [];
  }

  const files = fs.readdirSync(suitesDir);
  return files
    .filter((f) => f.endsWith('.yaml') || f.endsWith('.yml'))
    .map((f) => f.replace(/\.(yaml|yml)$/, ''));
}

/**
 * Clear the test suite cache
 */
export function clearTestSuiteCache(): void {
  suiteCache.clear();
}

/**
 * Convert a test case input to ZucaInput
 * Test cases store input as generic record, this converts to typed input
 */
export function testCaseToZucaInput(testCase: TestCase): ZucaInput {
  const input = testCase.input as Record<string, unknown>;

  return {
    customer_name: (input.customer_name as string) || 'Test Customer',
    contract_start_date: (input.contract_start_date as string) || '01/01/2025',
    terms_months: (input.terms_months as number) || 12,
    transaction_currency: (input.transaction_currency as string) || 'USD',
    billing_period: (input.billing_period as string) || 'Monthly',
    is_allocations: (input.is_allocations as boolean) ?? false,
    allocation_method: input.allocation_method as string | undefined,
    rev_rec_notes: input.rev_rec_notes as string | undefined,
    use_case_description: (input.use_case_description as string) || '',
  } as ZucaInput;
}

/**
 * Create a simple test case for quick testing
 */
export function createQuickTestCase(
  id: string,
  description: string,
  overrides: Partial<ZucaInput> = {}
): TestCase {
  return {
    id,
    name: id,
    description,
    input: {
      customer_name: 'Quick Test',
      contract_start_date: '01/01/2025',
      terms_months: 12,
      transaction_currency: 'USD',
      billing_period: 'Monthly',
      is_allocations: false,
      use_case_description: description,
      ...overrides,
    },
  };
}

/**
 * Filter test cases by focus steps
 */
export function filterTestsByStep(
  suite: TestSuite,
  stepName: string
): TestCase[] {
  return suite.tests.filter((test) => {
    // If no focus_steps defined, include all tests
    if (!test.focus_steps?.length) return true;
    // Otherwise, only include if this step is in focus
    return test.focus_steps.includes(stepName);
  });
}

/**
 * Filter test cases by tags
 */
export function filterTestsByTags(
  suite: TestSuite,
  tags: string[]
): TestCase[] {
  return suite.tests.filter((test) => {
    if (!test.tags?.length) return false;
    return tags.some((tag) => test.tags!.includes(tag));
  });
}
