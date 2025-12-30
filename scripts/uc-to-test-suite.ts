#!/usr/bin/env npx tsx
/**
 * Convert UC Generator outputs to a test suite YAML file
 *
 * Usage:
 *   npx tsx scripts/uc-to-test-suite.ts <input-dir-or-file> [output-yaml]
 *
 * Examples:
 *   # Convert all JSON files in a directory
 *   npx tsx scripts/uc-to-test-suite.ts /tmp/generated-uc/ data/test-suites/generated-scenarios.yaml
 *
 *   # Convert a single JSON file (may contain array of use cases)
 *   npx tsx scripts/uc-to-test-suite.ts /tmp/salesforce-uc.json data/test-suites/salesforce-scenarios.yaml
 */

import * as fs from 'fs';
import * as path from 'path';
import * as yaml from 'yaml';

interface UCGeneratorOutput {
  customer_name: string;
  contract_start_date: string;
  terms_months: number;
  transaction_currency: string;
  billing_period: string;
  is_allocations?: boolean;
  allocation_method?: string;
  rev_rec_notes?: string;
  use_case_description: string;
}

interface TestCase {
  id: string;
  name: string;
  description: string;
  input: {
    customer_name: string;
    contract_start_date: string;
    terms_months: number;
    transaction_currency: string;
    billing_period: string;
    is_allocations: boolean;
    allocation_method?: string;
    use_case_description: string;
  };
  focus_steps: string[];
  tags: string[];
}

interface TestSuite {
  name: string;
  description: string;
  version: string;
  tests: TestCase[];
}

function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '')
    .substring(0, 50);
}

function detectTags(useCase: UCGeneratorOutput): string[] {
  const tags: string[] = ['generated'];
  const desc = useCase.use_case_description.toLowerCase();

  // Detect patterns in the description
  if (desc.includes('ramp') || desc.includes('step-up') || desc.includes('escalat')) {
    tags.push('ramp');
  }
  if (desc.includes('usage') || desc.includes('consumption') || desc.includes('metered')) {
    tags.push('usage');
  }
  if (desc.includes('bundle') || desc.includes('package')) {
    tags.push('bundle');
  }
  if (desc.includes('discount')) {
    tags.push('discount');
  }
  if (desc.includes('one-time') || desc.includes('implementation') || desc.includes('setup')) {
    tags.push('one-time');
  }
  if (desc.includes('recurring') || desc.includes('subscription')) {
    tags.push('recurring');
  }
  if (desc.includes('support') || desc.includes('maintenance')) {
    tags.push('support');
  }
  if (desc.includes('license') || desc.includes('platform')) {
    tags.push('license');
  }
  if (useCase.is_allocations) {
    tags.push('allocation');
  }
  if (useCase.terms_months >= 24) {
    tags.push('multi-year');
  }

  return tags;
}

function convertToTestCase(useCase: UCGeneratorOutput, index: number): TestCase {
  const slug = slugify(useCase.customer_name);
  const tags = detectTags(useCase);

  return {
    id: `gen-${slug}-${index + 1}`,
    name: `${useCase.customer_name} - Use Case ${index + 1}`,
    description: `Generated use case for ${useCase.customer_name}`,
    input: {
      customer_name: useCase.customer_name,
      contract_start_date: useCase.contract_start_date,
      terms_months: useCase.terms_months,
      transaction_currency: useCase.transaction_currency,
      billing_period: useCase.billing_period,
      is_allocations: useCase.is_allocations ?? false,
      allocation_method: useCase.allocation_method,
      use_case_description: useCase.use_case_description,
    },
    focus_steps: [
      'design_subscription',
      'contracts_orders',
      'billings',
      'revrec_waterfall',
    ],
    tags,
  };
}

function loadUseCases(inputPath: string): UCGeneratorOutput[] {
  const useCases: UCGeneratorOutput[] = [];
  const stat = fs.statSync(inputPath);

  if (stat.isDirectory()) {
    // Load all JSON files in directory
    const files = fs.readdirSync(inputPath).filter((f) => f.endsWith('.json'));
    for (const file of files) {
      const filePath = path.join(inputPath, file);
      const content = JSON.parse(fs.readFileSync(filePath, 'utf-8'));

      if (Array.isArray(content)) {
        useCases.push(...content);
      } else if (content.use_cases && Array.isArray(content.use_cases)) {
        // Handle wrapped format from UC generator
        useCases.push(...content.use_cases);
      } else {
        useCases.push(content);
      }
    }
  } else {
    // Single file
    const content = JSON.parse(fs.readFileSync(inputPath, 'utf-8'));

    if (Array.isArray(content)) {
      useCases.push(...content);
    } else if (content.use_cases && Array.isArray(content.use_cases)) {
      useCases.push(...content.use_cases);
    } else {
      useCases.push(content);
    }
  }

  return useCases;
}

function main() {
  const args = process.argv.slice(2);

  if (args.length < 1) {
    console.log('Usage: npx tsx scripts/uc-to-test-suite.ts <input-dir-or-file> [output-yaml]');
    console.log('');
    console.log('Examples:');
    console.log('  npx tsx scripts/uc-to-test-suite.ts /tmp/generated-uc/ data/test-suites/generated.yaml');
    console.log('  npx tsx scripts/uc-to-test-suite.ts /tmp/salesforce.json');
    process.exit(1);
  }

  const inputPath = args[0];
  const outputPath = args[1] || 'data/test-suites/generated-scenarios.yaml';

  if (!fs.existsSync(inputPath)) {
    console.error(`Error: Input path does not exist: ${inputPath}`);
    process.exit(1);
  }

  console.log(`Loading use cases from: ${inputPath}`);
  const useCases = loadUseCases(inputPath);
  console.log(`Found ${useCases.length} use case(s)`);

  if (useCases.length === 0) {
    console.error('No use cases found in input');
    process.exit(1);
  }

  // Convert to test cases
  const testCases = useCases.map((uc, i) => convertToTestCase(uc, i));

  // Build suite name from output path
  const suiteName = path.basename(outputPath, '.yaml');

  const suite: TestSuite = {
    name: suiteName,
    description: `Generated from UC outputs - ${new Date().toISOString().split('T')[0]}`,
    version: '1.0',
    tests: testCases,
  };

  // Write YAML
  const yamlContent = yaml.stringify(suite, {
    lineWidth: 0, // Don't wrap long lines
    defaultStringType: 'QUOTE_DOUBLE',
    defaultKeyType: 'PLAIN',
  });

  // Ensure directory exists
  const outputDir = path.dirname(outputPath);
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }

  fs.writeFileSync(outputPath, yamlContent);
  console.log(`\nCreated test suite: ${outputPath}`);
  console.log(`  Tests: ${testCases.length}`);
  console.log(`  Suite name: ${suiteName}`);
  console.log('');
  console.log('Run with:');
  console.log(`  npm run cli -- evaluate --suite ${suiteName} -m gemini-3-flash-preview`);
}

main();
