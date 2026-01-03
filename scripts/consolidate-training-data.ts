#!/usr/bin/env npx tsx
/**
 * Consolidate all training data sources into a single JSONL file
 * for fine-tuning a Zuora-specialized model.
 *
 * Usage:
 *   npx tsx scripts/consolidate-training-data.ts [output-file]
 *   npx tsx scripts/consolidate-training-data.ts --stats
 *   npx tsx scripts/consolidate-training-data.ts --shuffle  # Randomize order
 *
 * Output format (OpenAI/HuggingFace compatible):
 *   {"messages": [{"role": "system", "content": "..."}, {"role": "user", "content": "..."}, {"role": "assistant", "content": "..."}]}
 */

import * as fs from 'fs';
import * as path from 'path';
import * as readline from 'readline';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const ROOT = path.resolve(__dirname, '..');

// Define all data sources with their paths and formats
interface DataSource {
  name: string;
  path: string;
  format: 'instruction-response' | 'messages' | 'training-json';
  systemPrompt?: string;
  category: string;
}

const DATA_SOURCES: DataSource[] = [
  // Zuora docs scraper outputs
  {
    name: 'zuora-billing',
    path: 'data/training-sources/zuora-billing.jsonl',
    format: 'instruction-response',
    systemPrompt: 'You are a Zuora Billing expert. Answer questions accurately based on Zuora Billing documentation and best practices.',
    category: 'docs',
  },
  {
    name: 'zuora-developer',
    path: 'data/training-sources/zuora-developer.jsonl',
    format: 'instruction-response',
    systemPrompt: 'You are a Zuora API and developer expert. Answer questions about Zuora APIs, SDKs, and integration patterns.',
    category: 'docs',
  },
  {
    name: 'zuora-platform',
    path: 'data/training-sources/zuora-platform.jsonl',
    format: 'instruction-response',
    systemPrompt: 'You are a Zuora Platform expert. Answer questions about Zuora platform features, configuration, and administration.',
    category: 'docs',
  },
  {
    name: 'zuora-revenue',
    path: 'data/training-sources/zuora-revenue.jsonl',
    format: 'instruction-response',
    systemPrompt: 'You are a Zuora Revenue expert. Answer questions about revenue recognition, ASC 606, POB templates, and Zuora Revenue configuration.',
    category: 'docs',
  },
  // Internal knowledge sources
  {
    name: 'glean-qa',
    path: 'data/training-sources/glean-qa.jsonl',
    format: 'instruction-response',
    systemPrompt: 'You are a Zuora expert with deep internal knowledge. Answer questions based on internal documentation, runbooks, and tribal knowledge.',
    category: 'internal',
  },
  {
    name: 'slack-data',
    path: 'data/training-sources/slack-data.jsonl',
    format: 'instruction-response',
    systemPrompt: 'You are a Zuora expert helping colleagues. Answer questions in a helpful, conversational manner based on real team discussions.',
    category: 'internal',
  },
  {
    name: 'zendesk-data',
    path: 'data/training-sources/zendesk-data.jsonl',
    format: 'instruction-response',
    systemPrompt: 'You are a Zuora support expert. Help troubleshoot issues and explain solutions based on real customer support cases.',
    category: 'internal',
  },
  {
    name: 'tech-talks',
    path: 'data/training-sources/tech-talks.jsonl',
    format: 'instruction-response',
    systemPrompt: 'You are a Zuora expert explaining technical concepts. Provide clear, educational explanations based on internal tech talks and presentations.',
    category: 'internal',
  },
  // Custom ZUCA sources
  {
    name: 'pob-templates',
    path: 'data/training-sources/pob-templates-qa.jsonl',
    format: 'instruction-response',
    systemPrompt: 'You are a Zuora Revenue POB template expert. Help select and configure the correct Performance Obligation templates for revenue recognition scenarios. Note: These are custom templates configured in internal demo tenants.',
    category: 'custom',
  },
  {
    name: 'zuca-training',
    path: 'data/training-sources/zuca-training-qa.jsonl',
    format: 'instruction-response',
    systemPrompt: 'You are ZUCA, the Zuora Use Case Architect. Help users understand and use ZUCA for generating Zuora Billing and Revenue configurations.',
    category: 'custom',
  },
  // Pipeline training data
  {
    name: 'pipeline-outputs',
    path: 'data/training-sources/pipeline-outputs.json',
    format: 'training-json',
    category: 'pipeline',
  },
];

interface Stats {
  source: string;
  count: number;
  category: string;
}

interface Message {
  role: 'system' | 'user' | 'assistant';
  content: string;
}

interface OutputRecord {
  messages: Message[];
  source?: string;
  category?: string;
}

async function countLines(filePath: string): Promise<number> {
  return new Promise((resolve, reject) => {
    let count = 0;
    const stream = fs.createReadStream(filePath);
    const rl = readline.createInterface({ input: stream, crlfDelay: Infinity });
    rl.on('line', () => count++);
    rl.on('close', () => resolve(count));
    rl.on('error', reject);
  });
}


async function showStats(): Promise<void> {
  console.log('\n📊 Training Data Statistics\n');
  console.log('═'.repeat(60));

  const stats: Stats[] = [];
  let total = 0;

  for (const source of DATA_SOURCES) {
    const filePath = path.join(ROOT, source.path);
    if (!fs.existsSync(filePath)) {
      stats.push({ source: source.name, count: 0, category: source.category });
      continue;
    }

    let count: number;
    if (source.format === 'training-json') {
      const data = JSON.parse(fs.readFileSync(filePath, 'utf-8'));
      count = data.examples?.length || 0;
    } else {
      count = await countLines(filePath);
    }

    stats.push({ source: source.name, count, category: source.category });
    total += count;
  }

  // Group by category
  const categories = ['docs', 'internal', 'custom', 'pipeline'];
  for (const cat of categories) {
    const catStats = stats.filter((s) => s.category === cat);
    const catTotal = catStats.reduce((sum, s) => sum + s.count, 0);

    console.log(`\n${cat.toUpperCase()} (${catTotal.toLocaleString()} total)`);
    console.log('─'.repeat(40));
    for (const s of catStats) {
      const status = s.count > 0 ? '✓' : '✗';
      console.log(`  ${status} ${s.source.padEnd(20)} ${s.count.toLocaleString().padStart(8)}`);
    }
  }

  console.log('\n' + '═'.repeat(60));
  console.log(`TOTAL: ${total.toLocaleString()} examples`);
  console.log('═'.repeat(60));

  // Recommendations
  console.log('\n💡 Recommendations:');
  if (total < 10000) {
    console.log('  • Dataset is small - consider gathering more examples');
  } else if (total < 30000) {
    console.log('  • Good dataset size for 7-8B model fine-tuning');
  } else {
    console.log('  • Excellent dataset size - ready for fine-tuning');
  }

  const pipelineCount = stats.find((s) => s.source === 'pipeline-outputs')?.count || 0;
  if (pipelineCount < 500) {
    console.log('  • Consider running more evaluations with --capture-training');
  }
}

// Fisher-Yates shuffle for proper randomization
function shuffleArray<T>(array: T[]): T[] {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

async function collectRecords(
  source: DataSource,
  includeMetadata: boolean
): Promise<OutputRecord[]> {
  const filePath = path.join(ROOT, source.path);
  if (!fs.existsSync(filePath)) {
    console.warn(`  ⚠️  File not found: ${source.path}`);
    return [];
  }

  const records: OutputRecord[] = [];

  if (source.format === 'training-json') {
    const data = JSON.parse(fs.readFileSync(filePath, 'utf-8'));
    const examples = data.examples || [];
    for (const example of examples) {
      if (!example.messages || example.messages.length < 2) continue;
      const record: OutputRecord = { messages: example.messages };
      if (includeMetadata) {
        record.source = source.name;
        record.category = source.category;
      }
      records.push(record);
    }
  } else {
    const stream = fs.createReadStream(filePath);
    const rl = readline.createInterface({ input: stream, crlfDelay: Infinity });

    for await (const line of rl) {
      if (!line.trim()) continue;
      try {
        const data = JSON.parse(line);
        const instruction = data.instruction || data.question || data.prompt;
        const response = data.response || data.answer || data.output;
        if (!instruction || !response) continue;

        const record: OutputRecord = {
          messages: [
            { role: 'system', content: source.systemPrompt || 'You are a helpful Zuora expert.' },
            { role: 'user', content: instruction },
            { role: 'assistant', content: response },
          ],
        };
        if (includeMetadata) {
          record.source = source.name;
          record.category = source.category;
        }
        records.push(record);
      } catch (e) {
        // Skip malformed lines
      }
    }
  }

  return records;
}

async function consolidate(outputPath: string, includeMetadata: boolean, shuffle: boolean): Promise<void> {
  console.log('\n🔄 Consolidating training data...\n');

  const stats: Stats[] = [];
  let allRecords: OutputRecord[] = [];

  for (const source of DATA_SOURCES) {
    process.stdout.write(`  Processing ${source.name}...`);

    const records = await collectRecords(source, includeMetadata);
    console.log(` ${records.length.toLocaleString()} examples`);

    stats.push({ source: source.name, count: records.length, category: source.category });
    allRecords = allRecords.concat(records);
  }

  if (shuffle) {
    console.log('\n🔀 Shuffling records...');
    allRecords = shuffleArray(allRecords);
  }

  // Write all records
  const outputStream = fs.createWriteStream(outputPath);
  for (const record of allRecords) {
    outputStream.write(JSON.stringify(record) + '\n');
  }
  outputStream.end();

  console.log('\n' + '═'.repeat(60));
  console.log(`✅ Wrote ${allRecords.length.toLocaleString()} examples to ${outputPath}${shuffle ? ' (shuffled)' : ''}`);
  console.log('═'.repeat(60));

  // Show file size
  const fileStat = fs.statSync(outputPath);
  const sizeMB = (fileStat.size / (1024 * 1024)).toFixed(2);
  console.log(`   File size: ${sizeMB} MB`);
}

// Main
const args = process.argv.slice(2);

if (args.includes('--stats')) {
  showStats().catch(console.error);
} else if (args.includes('--help') || args.includes('-h')) {
  console.log(`
Consolidate Training Data

Usage:
  npx tsx scripts/consolidate-training-data.ts [output-file] [options]
  npx tsx scripts/consolidate-training-data.ts --stats

Options:
  --stats           Show statistics without consolidating
  --shuffle         Randomize the order of training examples (recommended)
  --with-metadata   Include source/category in output records
  --help, -h        Show this help message

Examples:
  npx tsx scripts/consolidate-training-data.ts data/consolidated-training.jsonl
  npx tsx scripts/consolidate-training-data.ts data/consolidated-training.jsonl --shuffle
  npx tsx scripts/consolidate-training-data.ts --stats
`);
} else {
  const outputPath = args.find((a) => !a.startsWith('--')) || 'data/consolidated-training.jsonl';
  const includeMetadata = args.includes('--with-metadata');
  const shuffle = args.includes('--shuffle');
  consolidate(path.resolve(ROOT, outputPath), includeMetadata, shuffle).catch(console.error);
}
