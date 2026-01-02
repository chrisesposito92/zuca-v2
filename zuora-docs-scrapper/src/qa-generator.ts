/**
 * Q&A Dataset Generator
 *
 * Generates instruction/response pairs from Zuora documentation
 * for future fine-tuning or evaluation datasets.
 *
 * Usage:
 *   npm run qa:generate              # Generate Q&A for all products
 *   npm run qa:generate -- --product billing  # Single product
 *   npm run qa:test                  # Test with 5 docs
 */

import * as fs from 'fs';
import * as path from 'path';
import { config } from 'dotenv';
import OpenAI from 'openai';

// Load .env from parent zuca-v2 directory
config({ path: path.join(process.cwd(), '..', '.env') });

// ============================================================================
// Types
// ============================================================================

interface DocMetadata {
  title: string;
  url: string;
  product: 'zuora-billing' | 'zuora-platform' | 'zuora-revenue' | 'zuora-developer';
  scraped_at: string;
}

interface ParsedDoc {
  metadata: DocMetadata;
  content: string;
  filename: string;
}

interface QAPair {
  instruction: string;
  response: string;
  source: string;
  product: string;
  category: 'definitional' | 'procedural' | 'troubleshooting' | 'comparison' | 'example';
}

interface GeneratorProgress {
  total: number;
  completed: number;
  failed: number;
  lastProcessedFile?: string;
}

// ============================================================================
// Configuration
// ============================================================================

const OUTPUT_DIR = path.join(process.cwd(), 'qa-dataset');
const DOCS_DIR = path.join(process.cwd(), 'output');
const LOGS_DIR = path.join(process.cwd(), 'logs');
const PROGRESS_FILE = path.join(LOGS_DIR, 'qa-progress.json');
const FAILED_FILE = path.join(LOGS_DIR, 'qa-failed.json');
const ERROR_LOG_FILE = path.join(LOGS_DIR, 'qa-errors.log');

const DELAY_MS = 50; // Reduced delay between batches
const MAX_RETRIES = 3;
const MODEL = 'gpt-4o-mini'; // Cost-effective for generation
const PARALLEL_BATCH_SIZE = 15; // Process 15 docs in parallel (Tier 4 limits: 10K RPM)
const REQUEST_TIMEOUT_MS = 60000; // 60 second timeout per request

// ============================================================================
// OpenAI Client
// ============================================================================

function getOpenAIClient(): OpenAI {
  const apiKey = process.env.OPENAI_API_KEY;
  if (!apiKey) {
    throw new Error('OPENAI_API_KEY environment variable is required');
  }
  return new OpenAI({ apiKey });
}

// ============================================================================
// File Parsing
// ============================================================================

function parseFrontmatter(content: string): { metadata: DocMetadata; body: string } | null {
  const frontmatterMatch = content.match(/^---\n([\s\S]*?)\n---\n([\s\S]*)$/);
  if (!frontmatterMatch) {
    return null;
  }

  const [, frontmatterStr, body] = frontmatterMatch;

  // Parse YAML frontmatter manually (simple key: "value" format)
  const metadata: Record<string, string> = {};
  for (const line of frontmatterStr.split('\n')) {
    const match = line.match(/^(\w+):\s*"?([^"]*)"?$/);
    if (match) {
      metadata[match[1]] = match[2];
    }
  }

  if (!metadata.title || !metadata.url || !metadata.product) {
    return null;
  }

  return {
    metadata: metadata as unknown as DocMetadata,
    body: body.trim(),
  };
}

function loadAllDocs(products?: string[]): ParsedDoc[] {
  const docs: ParsedDoc[] = [];
  const targetProducts = products || ['zuora-billing', 'zuora-platform', 'zuora-revenue', 'zuora-developer'];

  for (const product of targetProducts) {
    const productDir = path.join(DOCS_DIR, product);
    if (!fs.existsSync(productDir)) {
      console.warn(`  ⚠️  Product directory not found: ${productDir}`);
      continue;
    }

    const files = fs.readdirSync(productDir).filter(f => f.endsWith('.md'));
    console.log(`  📁 ${product}: ${files.length} files`);

    for (const file of files) {
      const filePath = path.join(productDir, file);
      const content = fs.readFileSync(filePath, 'utf-8');
      const parsed = parseFrontmatter(content);

      if (parsed) {
        docs.push({
          metadata: parsed.metadata,
          content: parsed.body,
          filename: `${product}/${file}`,
        });
      }
    }
  }

  return docs;
}

// ============================================================================
// Q&A Generation
// ============================================================================

const GENERATION_PROMPT = `You are a Zuora documentation expert. Given a documentation page, generate high-quality Q&A pairs that would help users understand and work with Zuora.

Generate 3-5 Q&A pairs covering different aspects:
- **Definitional**: "What is [concept]?" - Explain core concepts
- **Procedural**: "How do I [task]?" - Step-by-step guidance
- **Troubleshooting**: "Why might [issue] occur?" - Problem-solving
- **Comparison**: "What's the difference between [A] and [B]?" - Distinguish concepts
- **Example**: "Can you give an example of [scenario]?" - Practical illustrations

Rules:
1. Base answers ONLY on the provided documentation content
2. Keep responses concise but complete (100-300 words typically)
3. Use natural question phrasing a real user would ask
4. Include specific Zuora terminology correctly
5. If the doc is too short/simple, generate fewer pairs
6. Skip if the doc is just navigation/index content with no substance

Respond with a JSON array of objects with these fields:
- instruction: The question
- response: The answer
- category: One of "definitional", "procedural", "troubleshooting", "comparison", "example"

Example output:
[
  {
    "instruction": "What is a bill run in Zuora Billing?",
    "response": "A bill run is an automated process in Zuora Billing that generates invoices for billable charges across multiple customer accounts. You can create ad-hoc bill runs for immediate billing or schedule recurring bill runs to automate your billing cycle. Bill runs evaluate all unbilled charges up to a target date and create invoice items accordingly.",
    "category": "definitional"
  }
]`;

async function generateQAPairs(
  client: OpenAI,
  doc: ParsedDoc
): Promise<QAPair[]> {
  // Skip very short docs (likely navigation pages)
  if (doc.content.length < 200) {
    return [];
  }

  // Truncate very long docs to avoid token limits
  const maxContentLength = 20000;
  const truncatedContent = doc.content.length > maxContentLength
    ? doc.content.substring(0, maxContentLength) + '\n\n[Content truncated...]'
    : doc.content;

  const userMessage = `
Documentation Title: ${doc.metadata.title}
Product: ${doc.metadata.product}
URL: ${doc.metadata.url}

---

${truncatedContent}
`;

  const response = await client.chat.completions.create({
    model: MODEL,
    messages: [
      { role: 'system', content: GENERATION_PROMPT },
      { role: 'user', content: userMessage },
    ],
    temperature: 0.7,
    response_format: { type: 'json_object' },
  });

  const content = response.choices[0]?.message?.content;
  if (!content) {
    throw new Error('Empty response from OpenAI');
  }

  // Parse response - handle both array and object-with-array formats
  let parsed: unknown;
  try {
    parsed = JSON.parse(content);
  } catch {
    throw new Error(`Invalid JSON response: ${content.substring(0, 200)}`);
  }

  // Extract array from response
  let pairs: unknown[];
  if (Array.isArray(parsed)) {
    pairs = parsed;
  } else if (parsed && typeof parsed === 'object' && 'pairs' in parsed) {
    pairs = (parsed as { pairs: unknown[] }).pairs;
  } else if (parsed && typeof parsed === 'object') {
    const obj = parsed as Record<string, unknown>;
    // Check if it's a single Q&A object (has instruction + response)
    if (obj.instruction && obj.response) {
      // Wrap single object in array, default category if missing
      pairs = [{ ...obj, category: obj.category || 'definitional' }];
    } else {
      // Try to find any array property
      const arrayProp = Object.values(parsed).find(v => Array.isArray(v));
      if (arrayProp) {
        pairs = arrayProp as unknown[];
      } else {
        throw new Error(`Unexpected response format: ${JSON.stringify(parsed).substring(0, 200)}`);
      }
    }
  } else {
    throw new Error(`Unexpected response format: ${JSON.stringify(parsed).substring(0, 200)}`);
  }

  // Validate and transform pairs
  return pairs.map((pair: unknown) => {
    const p = pair as Record<string, unknown>;
    if (!p.instruction || !p.response || !p.category) {
      throw new Error(`Invalid pair format: ${JSON.stringify(p)}`);
    }
    return {
      instruction: String(p.instruction),
      response: String(p.response),
      source: doc.filename,
      product: doc.metadata.product,
      category: p.category as QAPair['category'],
    };
  });
}

// ============================================================================
// Progress Tracking
// ============================================================================

function loadProgress(): GeneratorProgress {
  if (fs.existsSync(PROGRESS_FILE)) {
    return JSON.parse(fs.readFileSync(PROGRESS_FILE, 'utf-8'));
  }
  return { total: 0, completed: 0, failed: 0 };
}

function saveProgress(progress: GeneratorProgress): void {
  fs.mkdirSync(path.dirname(PROGRESS_FILE), { recursive: true });
  fs.writeFileSync(PROGRESS_FILE, JSON.stringify(progress, null, 2));
}

function loadFailedDocs(): string[] {
  if (fs.existsSync(FAILED_FILE)) {
    return JSON.parse(fs.readFileSync(FAILED_FILE, 'utf-8'));
  }
  return [];
}

function saveFailedDocs(failed: string[]): void {
  fs.mkdirSync(path.dirname(FAILED_FILE), { recursive: true });
  fs.writeFileSync(FAILED_FILE, JSON.stringify(failed, null, 2));
}

function logError(filename: string, error: string): void {
  fs.mkdirSync(LOGS_DIR, { recursive: true });
  const timestamp = new Date().toISOString();
  const line = `[${timestamp}] ${filename}\n  Error: ${error}\n\n`;
  fs.appendFileSync(ERROR_LOG_FILE, line);
}

function clearErrorLog(): void {
  if (fs.existsSync(ERROR_LOG_FILE)) {
    fs.unlinkSync(ERROR_LOG_FILE);
  }
}

// ============================================================================
// Output Writing
// ============================================================================

function appendToJsonl(pairs: QAPair[], product: string): void {
  fs.mkdirSync(OUTPUT_DIR, { recursive: true });

  const productFile = path.join(OUTPUT_DIR, `${product}.jsonl`);
  const lines = pairs.map(p => JSON.stringify(p)).join('\n') + '\n';

  fs.appendFileSync(productFile, lines);
}

// ============================================================================
// Main Generator
// ============================================================================

interface GeneratorOptions {
  products?: string[];
  testMode?: boolean;
  resume?: boolean;
  retryFailed?: boolean;
}

async function runGenerator(options: GeneratorOptions = {}): Promise<void> {
  console.log('\n🧠 Zuora Q&A Dataset Generator\n');

  // Initialize
  const client = getOpenAIClient();
  const docs = loadAllDocs(options.products);

  console.log(`\n📚 Loaded ${docs.length} documents\n`);

  if (docs.length === 0) {
    console.log('No documents found. Run the scraper first.');
    return;
  }

  // Test mode: only process 5 docs
  let docsToProcess = options.testMode ? docs.slice(0, 5) : docs;

  // Retry failed mode: only process previously failed docs
  if (options.retryFailed) {
    const previouslyFailed = loadFailedDocs();
    if (previouslyFailed.length === 0) {
      console.log('No failed documents to retry.');
      return;
    }
    const failedSet = new Set(previouslyFailed);
    docsToProcess = docs.filter(d => failedSet.has(d.filename));
    console.log(`🔄 Retrying ${docsToProcess.length} previously failed documents\n`);
  }

  // Resume support
  const progress = options.resume ? loadProgress() : { total: docsToProcess.length, completed: 0, failed: 0 };
  const failedDocs = options.retryFailed ? [] : (options.resume ? loadFailedDocs() : []);

  // Find resume point
  let startIndex = 0;
  if (options.resume && progress.lastProcessedFile) {
    const resumeIndex = docsToProcess.findIndex(d => d.filename === progress.lastProcessedFile);
    if (resumeIndex >= 0) {
      startIndex = resumeIndex + 1;
      console.log(`📍 Resuming from index ${startIndex} (${progress.lastProcessedFile})\n`);
    }
  }

  // Clear output files if starting fresh (only for products being processed)
  // Don't clear in retry mode - we're appending to existing files
  if (!options.resume && !options.retryFailed) {
    fs.mkdirSync(OUTPUT_DIR, { recursive: true });
    clearErrorLog();

    // Only clear files for the products we're actually generating
    const productsToClear = options.products || ['zuora-billing', 'zuora-platform', 'zuora-revenue', 'zuora-developer'];
    for (const product of productsToClear) {
      const file = path.join(OUTPUT_DIR, `${product}.jsonl`);
      if (fs.existsSync(file)) {
        fs.unlinkSync(file);
      }
    }
  }

  // Process documents in parallel batches
  let totalPairs = 0;
  const startTime = Date.now();

  // Helper to process a single doc with retries and timeout
  async function processDoc(doc: ParsedDoc): Promise<{ pairs: QAPair[]; failed: boolean; error?: string }> {
    let retries = 0;
    while (retries < MAX_RETRIES) {
      try {
        const pairs = await withTimeout(
          generateQAPairs(client, doc),
          REQUEST_TIMEOUT_MS,
          `Request timed out after ${REQUEST_TIMEOUT_MS / 1000}s`
        );
        return { pairs, failed: false };
      } catch (error) {
        retries++;
        if (retries < MAX_RETRIES) {
          await sleep(1000 * retries); // Exponential backoff
        } else {
          const errorMsg = error instanceof Error ? error.message : String(error);
          return { pairs: [], failed: true, error: errorMsg };
        }
      }
    }
    return { pairs: [], failed: true, error: 'Unknown error' };
  }

  // Process in batches
  for (let batchStart = startIndex; batchStart < docsToProcess.length; batchStart += PARALLEL_BATCH_SIZE) {
    const batchEnd = Math.min(batchStart + PARALLEL_BATCH_SIZE, docsToProcess.length);
    const batch = docsToProcess.slice(batchStart, batchEnd);
    const progressPct = ((batchEnd) / docsToProcess.length * 100).toFixed(1);

    console.log(`\n  [${progressPct}%] Processing batch ${batchStart + 1}-${batchEnd} of ${docsToProcess.length}...`);

    // Process batch in parallel
    const results = await Promise.all(batch.map(doc => processDoc(doc)));

    // Write results and update progress
    let batchPairs = 0;
    let batchSkipped = 0;
    let batchErrors = 0;
    for (let i = 0; i < results.length; i++) {
      const { pairs, failed, error } = results[i];
      const doc = batch[i];

      if (failed) {
        failedDocs.push(doc.filename);
        progress.failed++;
        batchErrors++;
        if (error) {
          logError(doc.filename, error);
        }
      } else if (pairs.length > 0) {
        appendToJsonl(pairs, doc.metadata.product);
        totalPairs += pairs.length;
        batchPairs += pairs.length;
        progress.completed++;
      } else {
        batchSkipped++;
        progress.completed++;
      }
    }

    // Compact output: show errors only if there are any
    const errorSuffix = batchErrors > 0 ? `, ❌ ${batchErrors} errors` : '';
    console.log(`  ✅ ${batchPairs} pairs, ${batchSkipped} skipped${errorSuffix}`);

    // Update progress after each batch
    progress.lastProcessedFile = batch[batch.length - 1].filename;
    saveProgress(progress);
    saveFailedDocs(failedDocs);

    // Brief delay between batches
    await sleep(DELAY_MS);
  }

  // Summary
  const elapsed = ((Date.now() - startTime) / 1000 / 60).toFixed(1);
  console.log('\n' + '='.repeat(60));
  console.log('📊 Generation Complete');
  console.log('='.repeat(60));
  console.log(`  ✅ Processed: ${progress.completed} documents`);
  console.log(`  ❌ Failed: ${progress.failed} documents`);
  console.log(`  📝 Generated: ${totalPairs} Q&A pairs`);
  console.log(`  ⏱️  Elapsed: ${elapsed} minutes`);
  console.log(`  📁 Output: ${OUTPUT_DIR}/`);
  if (progress.failed > 0) {
    console.log(`  📋 Error log: ${ERROR_LOG_FILE}`);
  }
  console.log('='.repeat(60) + '\n');
}

function sleep(ms: number): Promise<void> {
  return new Promise(resolve => setTimeout(resolve, ms));
}

function withTimeout<T>(promise: Promise<T>, ms: number, errorMsg: string): Promise<T> {
  return Promise.race([
    promise,
    new Promise<T>((_, reject) =>
      setTimeout(() => reject(new Error(errorMsg)), ms)
    )
  ]);
}

// ============================================================================
// CLI
// ============================================================================

async function main() {
  const args = process.argv.slice(2);

  const options: GeneratorOptions = {
    testMode: args.includes('--test'),
    resume: args.includes('--resume'),
    retryFailed: args.includes('--retry-failed'),
  };

  // Parse --product flag
  const productIndex = args.indexOf('--product');
  if (productIndex >= 0 && args[productIndex + 1]) {
    const product = args[productIndex + 1];
    options.products = [`zuora-${product}`];
  }

  try {
    await runGenerator(options);
  } catch (error) {
    console.error('Fatal error:', error);
    process.exit(1);
  }
}

main();
