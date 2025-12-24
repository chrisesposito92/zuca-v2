/**
 * Embedding Generator
 *
 * Generates and caches OpenAI embeddings for document chunks.
 * Uses text-embedding-3-small for cost efficiency.
 */

import * as fs from 'fs';
import * as path from 'path';
import OpenAI from 'openai';
import { config } from '../config';
import { DocChunk, EmbeddingIndex, EmbeddingProgress } from './types';
import { PreEmbeddingChunk, chunkAllDocs } from './chunker';

// Configuration
const EMBEDDING_MODEL = 'text-embedding-3-small';
const INDEX_VERSION = '1.0.0';
const BATCH_SIZE = 100; // OpenAI supports up to 2048, but smaller batches = better progress tracking
const DELAY_MS = 100; // Rate limiting delay between batches

/**
 * Get OpenAI client
 */
function getOpenAIClient(): OpenAI {
  if (!config.openai.apiKey) {
    throw new Error('OPENAI_API_KEY is required for embeddings');
  }
  return new OpenAI({ apiKey: config.openai.apiKey });
}

/**
 * Generate embeddings for a batch of texts
 */
async function generateEmbeddingsBatch(
  client: OpenAI,
  texts: string[]
): Promise<number[][]> {
  const response = await client.embeddings.create({
    model: EMBEDDING_MODEL,
    input: texts,
  });

  // Sort by index to ensure order matches input
  const sorted = response.data.sort((a, b) => a.index - b.index);
  return sorted.map(d => d.embedding);
}

/**
 * Load existing embedding index from disk
 */
export function loadEmbeddingIndex(indexPath: string): EmbeddingIndex | null {
  if (!fs.existsSync(indexPath)) {
    return null;
  }

  try {
    const data = fs.readFileSync(indexPath, 'utf-8');
    const index = JSON.parse(data) as EmbeddingIndex;

    // Check version compatibility
    if (index.version !== INDEX_VERSION) {
      console.log(`Index version mismatch (${index.version} vs ${INDEX_VERSION}), will regenerate`);
      return null;
    }

    return index;
  } catch (error) {
    console.error('Failed to load embedding index:', error);
    return null;
  }
}

/**
 * Save embedding index to disk
 */
export function saveEmbeddingIndex(index: EmbeddingIndex, indexPath: string): void {
  fs.mkdirSync(path.dirname(indexPath), { recursive: true });
  fs.writeFileSync(indexPath, JSON.stringify(index));
}

/**
 * Load/save progress for resumable generation
 */
function loadProgress(progressPath: string): EmbeddingProgress {
  if (fs.existsSync(progressPath)) {
    return JSON.parse(fs.readFileSync(progressPath, 'utf-8'));
  }
  return { total: 0, completed: 0, failed: 0 };
}

function saveProgress(progress: EmbeddingProgress, progressPath: string): void {
  fs.mkdirSync(path.dirname(progressPath), { recursive: true });
  fs.writeFileSync(progressPath, JSON.stringify(progress, null, 2));
}

/**
 * Generate embeddings for all chunks
 */
export async function generateEmbeddings(
  chunks: PreEmbeddingChunk[],
  options: {
    indexPath: string;
    progressPath: string;
    resume?: boolean;
  }
): Promise<EmbeddingIndex> {
  const { indexPath, progressPath, resume = false } = options;
  const client = getOpenAIClient();

  // Try to resume from existing index
  let existingChunks: DocChunk[] = [];
  let startIndex = 0;

  if (resume) {
    const existingIndex = loadEmbeddingIndex(indexPath);
    if (existingIndex) {
      existingChunks = existingIndex.chunks;
      // Find where to resume based on chunk IDs
      const existingIds = new Set(existingChunks.map(c => c.id));
      startIndex = chunks.findIndex(c => !existingIds.has(c.id));
      if (startIndex === -1) {
        console.log('All chunks already embedded, nothing to do');
        return existingIndex;
      }
      console.log(`Resuming from chunk ${startIndex}/${chunks.length}`);
    }
  }

  const progress: EmbeddingProgress = resume
    ? loadProgress(progressPath)
    : { total: chunks.length, completed: 0, failed: 0 };

  progress.total = chunks.length;

  const results: DocChunk[] = [...existingChunks];
  const startTime = Date.now();

  // Process in batches
  for (let i = startIndex; i < chunks.length; i += BATCH_SIZE) {
    const batch = chunks.slice(i, i + BATCH_SIZE);
    const batchTexts = batch.map(c => c.content);

    const progressPct = ((i + batch.length) / chunks.length * 100).toFixed(1);
    process.stdout.write(`  [${progressPct}%] Embedding batch ${Math.floor(i / BATCH_SIZE) + 1}... `);

    try {
      const embeddings = await generateEmbeddingsBatch(client, batchTexts);

      for (let j = 0; j < batch.length; j++) {
        results.push({
          ...batch[j],
          embedding: embeddings[j],
        });
      }

      progress.completed += batch.length;
      console.log(`done (${batch.length} chunks)`);
    } catch (error) {
      console.log(`failed: ${error instanceof Error ? error.message : error}`);
      progress.failed += batch.length;
    }

    // Save progress after each batch
    saveProgress(progress, progressPath);

    // Save partial index periodically (every 10 batches)
    if ((i / BATCH_SIZE) % 10 === 0) {
      const partialIndex: EmbeddingIndex = {
        version: INDEX_VERSION,
        updatedAt: new Date().toISOString(),
        model: EMBEDDING_MODEL,
        chunks: results,
      };
      saveEmbeddingIndex(partialIndex, indexPath);
    }

    // Rate limiting
    await new Promise(resolve => setTimeout(resolve, DELAY_MS));
  }

  // Create final index
  const finalIndex: EmbeddingIndex = {
    version: INDEX_VERSION,
    updatedAt: new Date().toISOString(),
    model: EMBEDDING_MODEL,
    chunks: results,
  };

  // Save final index
  saveEmbeddingIndex(finalIndex, indexPath);

  const elapsed = ((Date.now() - startTime) / 1000 / 60).toFixed(1);
  console.log(`\nEmbedding complete: ${results.length} chunks in ${elapsed} minutes`);

  return finalIndex;
}

/**
 * Generate a single embedding for a query
 */
export async function embedQuery(query: string): Promise<number[]> {
  const client = getOpenAIClient();
  const response = await client.embeddings.create({
    model: EMBEDDING_MODEL,
    input: query,
  });
  return response.data[0].embedding;
}

/**
 * Build or update the embedding index
 */
export async function buildIndex(options: {
  docsDir: string;
  indexPath: string;
  progressPath: string;
  resume?: boolean;
  products?: ('zuora-billing' | 'zuora-platform' | 'zuora-revenue')[];
}): Promise<EmbeddingIndex> {
  const { docsDir, indexPath, progressPath, resume = false, products } = options;

  console.log('\n=== Building Embedding Index ===\n');

  // Chunk all documents
  const chunks = chunkAllDocs(docsDir, products);

  // Generate embeddings
  console.log('Generating embeddings...\n');
  const index = await generateEmbeddings(chunks, {
    indexPath,
    progressPath,
    resume,
  });

  console.log('\n=== Index Build Complete ===');
  console.log(`  Chunks: ${index.chunks.length}`);
  console.log(`  Model: ${index.model}`);
  console.log(`  Index: ${indexPath}\n`);

  return index;
}
