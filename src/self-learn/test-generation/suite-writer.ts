/**
 * Test Suite Writer
 *
 * Writes generated test cases to YAML files in the test suites format.
 * Supports creating new suites or appending to existing ones.
 */

import * as fs from 'fs';
import * as path from 'path';
import { stringify as stringifyYaml, parse as parseYaml } from 'yaml';
import { debugLog } from '../../config';
import { TestSuiteSchema, type TestSuite, type TestCase } from '../types';
import type { GeneratedTestCase } from './types';

const DEFAULT_SUITES_DIR = path.join(process.cwd(), 'data', 'test-suites');

/**
 * Options for writing a test suite
 */
export interface WriteSuiteOptions {
  /** Description for the suite (used when creating new) */
  description?: string;
  /** Append to existing suite instead of overwriting */
  append?: boolean;
  /** Output directory for the suite file */
  suitesDir?: string;
  /** Version string for the suite */
  version?: string;
}

/**
 * Result of writing a test suite
 */
export interface WriteSuiteResult {
  /** Path to the written file */
  filePath: string;
  /** Total test cases in the suite */
  totalTests: number;
  /** Number of new tests added */
  testsAdded: number;
  /** Number of duplicates skipped (in append mode) */
  duplicatesSkipped: number;
}

/**
 * Convert a GeneratedTestCase to the standard TestCase format
 */
function toTestCase(generated: GeneratedTestCase): TestCase {
  return {
    id: generated.id,
    name: generated.name,
    description: generated.description,
    input: {
      customer_name: generated.input.customer_name,
      use_case_description: generated.input.use_case_description,
      terms_months: generated.input.terms_months,
      billing_period: generated.input.billing_period,
      contract_start_date: generated.input.contract_start_date,
      transaction_currency: generated.input.transaction_currency,
      is_allocations: generated.input.is_allocations,
      ...(generated.input.allocation_method && {
        allocation_method: generated.input.allocation_method,
      }),
      ...(generated.input.rev_rec_notes && {
        rev_rec_notes: generated.input.rev_rec_notes,
      }),
    },
    focus_steps: generated.focus_steps,
    expected_patterns: generated.expectedFailurePattern
      ? [generated.expectedFailurePattern]
      : undefined,
    tags: generated.tags,
  };
}

/**
 * Load an existing test suite or return empty structure
 */
function loadExistingSuite(
  suiteName: string,
  suitesDir: string
): TestSuite | null {
  const filePath = path.join(suitesDir, `${suiteName}.yaml`);

  if (!fs.existsSync(filePath)) {
    return null;
  }

  try {
    const content = fs.readFileSync(filePath, 'utf-8');
    const parsed = parseYaml(content);
    return TestSuiteSchema.parse(parsed);
  } catch (error) {
    debugLog(`Failed to load existing suite ${suiteName}: ${error}`);
    return null;
  }
}

/**
 * Deduplicate test cases by ID
 */
function deduplicateById(
  existing: TestCase[],
  newTests: TestCase[]
): { merged: TestCase[]; added: number; skipped: number } {
  const existingIds = new Set(existing.map((t) => t.id));
  const added: TestCase[] = [];
  let skipped = 0;

  for (const test of newTests) {
    if (existingIds.has(test.id)) {
      skipped++;
    } else {
      added.push(test);
      existingIds.add(test.id);
    }
  }

  return {
    merged: [...existing, ...added],
    added: added.length,
    skipped,
  };
}

/**
 * Write a test suite to a YAML file
 *
 * @param suiteName - Name of the test suite (becomes filename)
 * @param testCases - Array of generated test cases
 * @param options - Write options
 * @returns Result with file path and statistics
 */
export async function writeTestSuite(
  suiteName: string,
  testCases: GeneratedTestCase[],
  options: WriteSuiteOptions = {}
): Promise<WriteSuiteResult> {
  const {
    description,
    append = false,
    suitesDir = DEFAULT_SUITES_DIR,
    version = '1.0',
  } = options;

  // Ensure directory exists
  if (!fs.existsSync(suitesDir)) {
    fs.mkdirSync(suitesDir, { recursive: true });
  }

  const filePath = path.join(suitesDir, `${suiteName}.yaml`);

  // Convert generated tests to standard format
  const newTestCases = testCases.map(toTestCase);

  let suite: TestSuite;
  let testsAdded = newTestCases.length;
  let duplicatesSkipped = 0;

  if (append) {
    // Load existing and merge
    const existing = loadExistingSuite(suiteName, suitesDir);

    if (existing) {
      const { merged, added, skipped } = deduplicateById(
        existing.tests,
        newTestCases
      );
      suite = {
        ...existing,
        tests: merged,
      };
      testsAdded = added;
      duplicatesSkipped = skipped;

      debugLog(
        `Appending to ${suiteName}: ${added} new tests, ${skipped} duplicates skipped`
      );
    } else {
      // No existing suite, create new
      suite = {
        name: suiteName,
        version,
        description: description || `Generated test suite: ${suiteName}`,
        tests: newTestCases,
      };
    }
  } else {
    // Create new suite (overwrite if exists)
    suite = {
      name: suiteName,
      version,
      description: description || `Generated test suite: ${suiteName}`,
      tests: newTestCases,
    };
  }

  // Write to file
  const yamlContent = stringifyYaml(suite, {
    lineWidth: 120,
    defaultStringType: 'QUOTE_DOUBLE',
    defaultKeyType: 'PLAIN',
  });

  fs.writeFileSync(filePath, yamlContent, 'utf-8');

  debugLog(`Wrote test suite to ${filePath} (${suite.tests.length} tests)`);

  return {
    filePath,
    totalTests: suite.tests.length,
    testsAdded,
    duplicatesSkipped,
  };
}

/**
 * Export generated test cases to JSON format
 * Useful for debugging or importing into other systems
 */
export function exportToJson(
  testCases: GeneratedTestCase[],
  outputPath: string
): void {
  const jsonContent = JSON.stringify(testCases, null, 2);
  fs.writeFileSync(outputPath, jsonContent, 'utf-8');
  debugLog(`Exported ${testCases.length} test cases to ${outputPath}`);
}

/**
 * List all generated test suites (those with 'generated' tag)
 */
export function listGeneratedSuites(
  suitesDir: string = DEFAULT_SUITES_DIR
): string[] {
  if (!fs.existsSync(suitesDir)) {
    return [];
  }

  const files = fs.readdirSync(suitesDir);
  const generatedSuites: string[] = [];

  for (const file of files) {
    if (!file.endsWith('.yaml') && !file.endsWith('.yml')) continue;

    const filePath = path.join(suitesDir, file);
    try {
      const content = fs.readFileSync(filePath, 'utf-8');
      const parsed = parseYaml(content);
      const suite = TestSuiteSchema.parse(parsed);

      // Check if any test has 'generated' tag
      const hasGeneratedTests = suite.tests.some(
        (t) => t.tags?.includes('generated')
      );
      if (hasGeneratedTests) {
        generatedSuites.push(file.replace(/\.(yaml|yml)$/, ''));
      }
    } catch {
      // Skip invalid files
    }
  }

  return generatedSuites;
}

/**
 * Get statistics about generated tests across all suites
 */
export function getGeneratedTestStats(
  suitesDir: string = DEFAULT_SUITES_DIR
): {
  totalSuites: number;
  totalTests: number;
  bySource: Record<string, number>;
  byTag: Record<string, number>;
} {
  const stats = {
    totalSuites: 0,
    totalTests: 0,
    bySource: {} as Record<string, number>,
    byTag: {} as Record<string, number>,
  };

  if (!fs.existsSync(suitesDir)) {
    return stats;
  }

  const files = fs.readdirSync(suitesDir);

  for (const file of files) {
    if (!file.endsWith('.yaml') && !file.endsWith('.yml')) continue;

    const filePath = path.join(suitesDir, file);
    try {
      const content = fs.readFileSync(filePath, 'utf-8');
      const parsed = parseYaml(content);
      const suite = TestSuiteSchema.parse(parsed);

      // Only count suites with generated tests
      const generatedTests = suite.tests.filter(
        (t) => t.tags?.includes('generated')
      );
      if (generatedTests.length === 0) continue;

      stats.totalSuites++;
      stats.totalTests += generatedTests.length;

      for (const test of generatedTests) {
        // Count by tags
        for (const tag of test.tags || []) {
          stats.byTag[tag] = (stats.byTag[tag] || 0) + 1;
        }
      }
    } catch {
      // Skip invalid files
    }
  }

  return stats;
}
