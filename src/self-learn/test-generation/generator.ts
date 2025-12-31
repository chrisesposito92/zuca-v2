/**
 * Test Case Generator
 *
 * Generates synthetic test cases from corrections, patterns, or clusters.
 * These test cases can be used to expand test coverage and find edge cases.
 */

import { v4 as uuidv4 } from 'uuid';
import { completeText } from '../../llm/client';
import { getCorrection, getCorrectionsForStep } from '../corrections';
import { clusterCorrections } from '../corrections/clustering';
import { debugLog } from '../../config';
import type { Correction } from '../types';
import type {
  GenerationSource,
  GeneratedTestCase,
  GenerationConfig,
  GenerationResult,
} from './types';
import { DEFAULT_GENERATION_CONFIG } from './types';

/**
 * Build generation prompt for the LLM
 */
function buildGenerationPrompt(
  _source: GenerationSource,
  corrections: Correction[],
  config: GenerationConfig
): string {
  const isAdversarial = config.adversarial;

  const correctionContext = corrections
    .map(
      (c) => `
Pattern: ${c.pattern}
Issue Type: ${c.issue_type}
What went wrong: ${c.expected_behavior}
Input that caused failure: ${c.input_summary}
${c.correction ? `How to fix: ${c.correction}` : ''}
`
    )
    .join('\n---\n');

  return `You are a QA engineer creating test cases for a Zuora billing/subscription system architect.

${
  isAdversarial
    ? `
TASK: Generate ${config.count} ADVERSARIAL test cases designed to trigger the same failures.
These should be tricky edge cases that stress-test the system.
`
    : `
TASK: Generate ${config.count} test cases that test similar scenarios.
These should be realistic variations that would catch similar bugs.
`
}

CONTEXT - Previous failures:
${correctionContext}

REQUIREMENTS:
1. Use realistic company names (real tech companies, SaaS providers, media companies, etc.)
2. Each test case should be DIFFERENT from the others
3. Include variations in:
   - Billing periods (Monthly, Quarterly, Semi-Annually, Annually)
   - Term lengths (6, 12, 18, 24, 36 months)
   - Currencies (USD, EUR, GBP, JPY)
   - Pricing structures (flat, ramp/step-up, tiered, usage-based)
4. Focus on the specific failure patterns shown above
5. Make descriptions clear about what the test validates

${
  config.ensureDiversity
    ? `
DIVERSITY: Ensure significant variation between test cases:
- Different industries (SaaS, telecom, media, fintech, healthcare)
- Different pricing models (subscription, usage, hybrid)
- Different contract structures (simple, complex, multi-year)
`
    : ''
}

RESPOND WITH JSON ARRAY (no markdown code blocks):
[
  {
    "name": "Short descriptive name",
    "description": "What this test validates and why",
    "customer_name": "Company Name",
    "use_case_description": "Detailed scenario with specific pricing, terms, etc.",
    "terms_months": 12,
    "billing_period": "Monthly",
    "contract_start_date": "01/01/2026",
    "transaction_currency": "USD",
    "is_allocations": false,
    "focus_steps": ["billings", "design_subscription"],
    "tags": ["tag1", "tag2"]
  }
]

Generate exactly ${config.count} test cases.`;
}

/**
 * Parse and validate generated test cases from LLM response
 */
function parseGeneratedTests(
  response: string,
  source: GenerationSource,
  config: GenerationConfig
): GeneratedTestCase[] {
  try {
    // Extract JSON from response (handle markdown code blocks)
    let jsonStr = response.trim();
    const jsonMatch = response.match(/```(?:json)?\s*([\s\S]*?)```/);
    if (jsonMatch) {
      jsonStr = jsonMatch[1].trim();
    }

    // Try to find JSON array if not at start
    if (!jsonStr.startsWith('[')) {
      const arrayStart = jsonStr.indexOf('[');
      const arrayEnd = jsonStr.lastIndexOf(']');
      if (arrayStart !== -1 && arrayEnd !== -1) {
        jsonStr = jsonStr.substring(arrayStart, arrayEnd + 1);
      }
    }

    const parsed = JSON.parse(jsonStr);

    if (!Array.isArray(parsed)) {
      throw new Error('Response is not an array');
    }

    return parsed.map((tc, i) => ({
      id: `generated-${source.sourceId.substring(0, 8)}-${uuidv4().slice(0, 8)}`,
      name: tc.name || `Generated Test ${i + 1}`,
      description: tc.description || '',
      input: {
        customer_name: tc.customer_name || 'Generated Corp',
        use_case_description: tc.use_case_description || '',
        terms_months: tc.terms_months || 12,
        billing_period: tc.billing_period || 'Monthly',
        contract_start_date: tc.contract_start_date || '01/01/2026',
        transaction_currency: tc.transaction_currency || 'USD',
        is_allocations: tc.is_allocations ?? false,
      },
      focus_steps: tc.focus_steps || ['billings'],
      tags: [...(tc.tags || []), 'generated', config.adversarial ? 'adversarial' : 'variation'],
      derivedFrom: source,
      expectedFailurePattern: config.adversarial ? source.sourceId : undefined,
      metadata: {
        generatedAt: new Date().toISOString(),
        model: config.model,
        validated: false,
      },
    }));
  } catch (error) {
    debugLog(`Failed to parse generated tests: ${error}`);
    return [];
  }
}

/**
 * Remove duplicate test cases based on fingerprint
 */
function deduplicateTests(tests: GeneratedTestCase[]): {
  unique: GeneratedTestCase[];
  removed: number;
} {
  const seen = new Set<string>();
  const unique: GeneratedTestCase[] = [];

  for (const test of tests) {
    // Create fingerprint from key fields
    const fingerprint = [
      test.input.customer_name.toLowerCase(),
      test.input.use_case_description.substring(0, 100).toLowerCase(),
      test.input.terms_months,
      test.input.billing_period,
    ].join('|');

    if (!seen.has(fingerprint)) {
      seen.add(fingerprint);
      unique.push(test);
    }
  }

  return {
    unique,
    removed: tests.length - unique.length,
  };
}

/**
 * Generate test cases from a correction
 */
export async function generateFromCorrection(
  correctionId: string,
  config: Partial<GenerationConfig> = {}
): Promise<GenerationResult> {
  const fullConfig: GenerationConfig = { ...DEFAULT_GENERATION_CONFIG, ...config };

  const correction = await getCorrection(correctionId);
  if (!correction) {
    return {
      testCases: [],
      errors: [`Correction ${correctionId} not found`],
      stats: {
        requested: fullConfig.count,
        generated: 0,
        validated: 0,
        duplicatesRemoved: 0,
      },
    };
  }

  const source: GenerationSource = {
    type: 'correction',
    sourceId: correctionId,
    context: correction.step_name,
  };

  const prompt = buildGenerationPrompt(source, [correction], fullConfig);

  try {
    debugLog(`Generating ${fullConfig.count} tests from correction ${correctionId}...`);
    const response = await completeText('', prompt, {
      model: fullConfig.model,
      temperature: fullConfig.temperature,
    });

    const generated = parseGeneratedTests(response, source, fullConfig);
    const { unique, removed } = deduplicateTests(generated);

    return {
      testCases: unique,
      errors: [],
      stats: {
        requested: fullConfig.count,
        generated: generated.length,
        validated: unique.length,
        duplicatesRemoved: removed,
      },
    };
  } catch (error) {
    return {
      testCases: [],
      errors: [error instanceof Error ? error.message : 'Unknown error'],
      stats: {
        requested: fullConfig.count,
        generated: 0,
        validated: 0,
        duplicatesRemoved: 0,
      },
    };
  }
}

/**
 * Generate test cases from a pattern string
 */
export async function generateFromPattern(
  pattern: string,
  stepName: string,
  config: Partial<GenerationConfig> = {}
): Promise<GenerationResult> {
  const fullConfig: GenerationConfig = { ...DEFAULT_GENERATION_CONFIG, ...config };

  // Find corrections matching this pattern
  const allCorrections = await getCorrectionsForStep(stepName);
  const matchingCorrections = allCorrections.filter(
    (c) =>
      c.pattern.toLowerCase().includes(pattern.toLowerCase()) ||
      c.expected_behavior.toLowerCase().includes(pattern.toLowerCase())
  );

  if (matchingCorrections.length === 0) {
    return {
      testCases: [],
      errors: [`No corrections found matching pattern "${pattern}" in step "${stepName}"`],
      stats: {
        requested: fullConfig.count,
        generated: 0,
        validated: 0,
        duplicatesRemoved: 0,
      },
    };
  }

  const source: GenerationSource = {
    type: 'pattern',
    sourceId: pattern,
    context: stepName,
  };

  // Use top 5 matching corrections for context
  const topCorrections = matchingCorrections.slice(0, 5);
  const prompt = buildGenerationPrompt(source, topCorrections, fullConfig);

  try {
    debugLog(`Generating ${fullConfig.count} tests from pattern "${pattern}"...`);
    const response = await completeText('', prompt, {
      model: fullConfig.model,
      temperature: fullConfig.temperature,
    });

    const generated = parseGeneratedTests(response, source, fullConfig);
    const { unique, removed } = deduplicateTests(generated);

    return {
      testCases: unique,
      errors: [],
      stats: {
        requested: fullConfig.count,
        generated: generated.length,
        validated: unique.length,
        duplicatesRemoved: removed,
      },
    };
  } catch (error) {
    return {
      testCases: [],
      errors: [error instanceof Error ? error.message : 'Unknown error'],
      stats: {
        requested: fullConfig.count,
        generated: 0,
        validated: 0,
        duplicatesRemoved: 0,
      },
    };
  }
}

/**
 * Generate adversarial test cases designed to trigger failures
 */
export async function generateAdversarialTests(
  stepName: string,
  count = 5,
  config: Partial<GenerationConfig> = {}
): Promise<GenerationResult> {
  const fullConfig: GenerationConfig = {
    ...DEFAULT_GENERATION_CONFIG,
    ...config,
    count,
    adversarial: true,
  };

  // Get clusters to find common failure patterns
  const { clusters } = await clusterCorrections(stepName);

  if (clusters.length === 0) {
    // Fall back to using individual corrections
    const corrections = await getCorrectionsForStep(stepName);

    if (corrections.length === 0) {
      return {
        testCases: [],
        errors: ['No corrections found - run evaluation with --corrections first'],
        stats: {
          requested: count,
          generated: 0,
          validated: 0,
          duplicatesRemoved: 0,
        },
      };
    }

    // Use top corrections by confidence
    const topCorrections = corrections.sort((a, b) => b.confidence - a.confidence).slice(0, 5);

    const source: GenerationSource = {
      type: 'pattern',
      sourceId: `${stepName}-adversarial`,
      context: stepName,
    };

    const prompt = buildGenerationPrompt(source, topCorrections, fullConfig);

    try {
      debugLog(`Generating ${count} adversarial tests for ${stepName}...`);
      const response = await completeText('', prompt, {
        model: fullConfig.model,
        temperature: fullConfig.temperature,
      });

      const generated = parseGeneratedTests(response, source, fullConfig);
      const { unique, removed } = deduplicateTests(generated);

      return {
        testCases: unique.slice(0, count),
        errors: [],
        stats: {
          requested: count,
          generated: generated.length,
          validated: unique.length,
          duplicatesRemoved: removed,
        },
      };
    } catch (error) {
      return {
        testCases: [],
        errors: [error instanceof Error ? error.message : 'Unknown error'],
        stats: {
          requested: count,
          generated: 0,
          validated: 0,
          duplicatesRemoved: 0,
        },
      };
    }
  }

  // Generate from top clusters
  const topClusters = clusters.slice(0, 3);
  const allTests: GeneratedTestCase[] = [];
  const allErrors: string[] = [];

  for (const cluster of topClusters) {
    const source: GenerationSource = {
      type: 'cluster',
      sourceId: cluster.id,
      context: cluster.canonicalPattern,
    };

    const testsPerCluster = Math.ceil(count / topClusters.length);
    const clusterConfig = { ...fullConfig, count: testsPerCluster };
    const prompt = buildGenerationPrompt(source, cluster.corrections.slice(0, 3), clusterConfig);

    try {
      debugLog(`Generating ${testsPerCluster} tests from cluster "${cluster.canonicalPattern}"...`);
      const response = await completeText('', prompt, {
        model: fullConfig.model,
        temperature: fullConfig.temperature,
      });

      const generated = parseGeneratedTests(response, source, clusterConfig);
      allTests.push(...generated);
    } catch (error) {
      allErrors.push(error instanceof Error ? error.message : 'Unknown error');
    }
  }

  const { unique, removed } = deduplicateTests(allTests);

  return {
    testCases: unique.slice(0, count),
    errors: allErrors,
    stats: {
      requested: count,
      generated: allTests.length,
      validated: unique.length,
      duplicatesRemoved: removed,
    },
  };
}

/**
 * Generate test cases from step failures (convenience function)
 */
export async function generateTestsFromFailures(
  stepName: string,
  count = 3,
  config: Partial<GenerationConfig> = {}
): Promise<GenerationResult> {
  const corrections = await getCorrectionsForStep(stepName);

  if (corrections.length === 0) {
    return {
      testCases: [],
      errors: [`No corrections found for step "${stepName}"`],
      stats: {
        requested: count,
        generated: 0,
        validated: 0,
        duplicatesRemoved: 0,
      },
    };
  }

  const fullConfig: GenerationConfig = { ...DEFAULT_GENERATION_CONFIG, ...config, count };

  // Use top corrections by confidence
  const topCorrections = corrections.sort((a, b) => b.confidence - a.confidence).slice(0, 5);

  const source: GenerationSource = {
    type: 'pattern',
    sourceId: `${stepName}-failures`,
    context: stepName,
  };

  const prompt = buildGenerationPrompt(source, topCorrections, fullConfig);

  try {
    debugLog(`Generating ${count} tests from ${stepName} failures...`);
    const response = await completeText('', prompt, {
      model: fullConfig.model,
      temperature: fullConfig.temperature,
    });

    const generated = parseGeneratedTests(response, source, fullConfig);
    const { unique, removed } = deduplicateTests(generated);

    return {
      testCases: unique,
      errors: [],
      stats: {
        requested: count,
        generated: generated.length,
        validated: unique.length,
        duplicatesRemoved: removed,
      },
    };
  } catch (error) {
    return {
      testCases: [],
      errors: [error instanceof Error ? error.message : 'Unknown error'],
      stats: {
        requested: count,
        generated: 0,
        validated: 0,
        duplicatesRemoved: 0,
      },
    };
  }
}
