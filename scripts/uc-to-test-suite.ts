#!/usr/bin/env npx tsx
/**
 * Convert UC Generator outputs to a test suite YAML file
 *
 * Usage:
 *   npx tsx scripts/uc-to-test-suite.ts <input-dir-or-file> [output-yaml]
 *
 * Examples:
 *   # Convert all JSON files in a directory
 *   npx tsx scripts/uc-to-test-suite.ts generated-uc/ data/test-suites/generated-scenarios.yaml
 *
 *   # Convert a single JSON file (may contain array of use cases)
 *   npx tsx scripts/uc-to-test-suite.ts generated-uc/salesforce.json data/test-suites/salesforce-scenarios.yaml
 */

import * as fs from 'fs';
import * as path from 'path';
import * as yaml from 'yaml';

/**
 * Actual UC Generator output structure
 */
interface UCGeneratorFile {
  research?: {
    company_profile?: {
      name?: string;
      website?: string;
      industry_guess?: string;
    };
  };
  use_cases: UCGeneratorUseCase[];
  session_id?: string;
  timestamp?: string;
}

interface UCGeneratorUseCase {
  id: string;
  label: string;
  otr_workflow_inputs: {
    use_case: string; // This maps to use_case_description
    customer_name: string;
    contract_start_date: string;
    terms_months: number;
    transaction_currency: string;
    billing_period: string;
    is_allocations?: boolean;
    allocation_method?: string;
    allocation_custom_formula?: string;
    rev_rec_notes?: RevRecNote[] | string;
  };
  assumptions?: string[];
  risks_or_open_questions?: string[];
}

interface RevRecNote {
  charge_group?: string;
  likely_pob_type?: string;
  release_pattern?: string;
  confidence?: string;
  notes?: string;
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
    rev_rec_notes?: string;
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
  if (!text) return 'unknown';
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '')
    .substring(0, 50);
}

function serializeRevRecNotes(notes: RevRecNote[] | string | undefined): string | undefined {
  if (!notes) return undefined;
  if (typeof notes === 'string') return notes;
  if (!Array.isArray(notes)) return undefined;

  // Convert array of objects to a readable string
  return notes
    .map((note) => {
      const parts: string[] = [];
      if (note.charge_group) parts.push(`${note.charge_group}:`);
      if (note.likely_pob_type) parts.push(`POB=${note.likely_pob_type}`);
      if (note.release_pattern) parts.push(`release=${note.release_pattern}`);
      if (note.notes) parts.push(`(${note.notes})`);
      return parts.join(' ');
    })
    .join('; ');
}

function detectTags(useCase: UCGeneratorUseCase): string[] {
  const tags: string[] = ['generated'];
  const desc = (useCase.otr_workflow_inputs.use_case || '').toLowerCase();
  const label = (useCase.label || '').toLowerCase();
  const combined = `${desc} ${label}`;

  // Detect patterns in the description
  if (combined.includes('ramp') || combined.includes('step-up') || combined.includes('escalat')) {
    tags.push('ramp');
  }
  if (combined.includes('usage') || combined.includes('consumption') || combined.includes('metered')) {
    tags.push('usage');
  }
  if (combined.includes('bundle') || combined.includes('package')) {
    tags.push('bundle');
  }
  if (combined.includes('discount')) {
    tags.push('discount');
  }
  if (combined.includes('one-time') || combined.includes('implementation') || combined.includes('setup') || combined.includes('onboarding')) {
    tags.push('one-time');
  }
  if (combined.includes('recurring') || combined.includes('subscription')) {
    tags.push('recurring');
  }
  if (combined.includes('support') || combined.includes('maintenance')) {
    tags.push('support');
  }
  if (combined.includes('license') || combined.includes('platform') || combined.includes('saas')) {
    tags.push('license');
  }
  if (combined.includes('credit') || combined.includes('data cloud')) {
    tags.push('credits');
  }
  if (useCase.otr_workflow_inputs.is_allocations) {
    tags.push('allocation');
  }
  if (useCase.otr_workflow_inputs.terms_months >= 24) {
    tags.push('multi-year');
  }

  return tags;
}

function convertToTestCase(useCase: UCGeneratorUseCase, companyName: string, index: number): TestCase {
  const inputs = useCase.otr_workflow_inputs;
  const slug = slugify(companyName);
  const tags = detectTags(useCase);

  // Use the label for a more descriptive name
  const name = useCase.label
    ? `${companyName} - ${useCase.label}`
    : `${companyName} - Use Case ${index + 1}`;

  return {
    id: `gen-${slug}-${index + 1}`,
    name,
    description: useCase.label || `Generated use case for ${companyName}`,
    input: {
      customer_name: inputs.customer_name || companyName,
      contract_start_date: inputs.contract_start_date,
      terms_months: inputs.terms_months,
      transaction_currency: inputs.transaction_currency,
      billing_period: inputs.billing_period,
      is_allocations: inputs.is_allocations ?? false,
      allocation_method: inputs.allocation_method,
      rev_rec_notes: serializeRevRecNotes(inputs.rev_rec_notes),
      use_case_description: inputs.use_case, // Map use_case -> use_case_description
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

interface LoadedUseCase {
  useCase: UCGeneratorUseCase;
  companyName: string;
}

function loadUseCases(inputPath: string): LoadedUseCase[] {
  const loaded: LoadedUseCase[] = [];
  const stat = fs.statSync(inputPath);

  const processFile = (filePath: string) => {
    try {
      const content = JSON.parse(fs.readFileSync(filePath, 'utf-8')) as UCGeneratorFile;

      // Extract company name from research.company_profile.name
      const companyName = content.research?.company_profile?.name || 'Unknown';

      // Extract use cases
      const useCases = content.use_cases || [];

      for (const uc of useCases) {
        if (uc.otr_workflow_inputs) {
          loaded.push({
            useCase: uc,
            companyName,
          });
        }
      }

      console.log(`  ${path.basename(filePath)}: ${useCases.length} use case(s) from ${companyName}`);
    } catch (err) {
      console.warn(`  Warning: Could not parse ${filePath}: ${err}`);
    }
  };

  if (stat.isDirectory()) {
    // Load all JSON files in directory
    const files = fs.readdirSync(inputPath).filter((f) => f.endsWith('.json'));
    console.log(`Found ${files.length} JSON file(s):`);
    for (const file of files) {
      processFile(path.join(inputPath, file));
    }
  } else {
    // Single file
    processFile(inputPath);
  }

  return loaded;
}

function main() {
  const args = process.argv.slice(2);

  if (args.length < 1) {
    console.log('Usage: npm run uc:to-suite -- <input-dir-or-file> [output-yaml]');
    console.log('');
    console.log('Examples:');
    console.log('  npm run uc:to-suite -- generated-uc/ data/test-suites/real-world.yaml');
    console.log('  npm run uc:to-suite -- generated-uc/salesforce.json');
    process.exit(1);
  }

  const inputPath = args[0];
  const outputPath = args[1] || 'data/test-suites/generated-scenarios.yaml';

  if (!fs.existsSync(inputPath)) {
    console.error(`Error: Input path does not exist: ${inputPath}`);
    process.exit(1);
  }

  console.log(`Loading use cases from: ${inputPath}\n`);
  const loaded = loadUseCases(inputPath);
  console.log(`\nTotal: ${loaded.length} use case(s)`);

  if (loaded.length === 0) {
    console.error('No use cases found in input');
    process.exit(1);
  }

  // Convert to test cases
  const testCases = loaded.map(({ useCase, companyName }, i) =>
    convertToTestCase(useCase, companyName, i)
  );

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
