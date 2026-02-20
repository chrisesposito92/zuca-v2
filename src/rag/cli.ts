#!/usr/bin/env node
/**
 * RAG CLI
 *
 * Command-line interface for building and testing the RAG index.
 *
 * Usage:
 *   npm run rag:build          # Build the full index
 *   npm run rag:build:resume   # Resume interrupted build
 *   npm run rag:test           # Test with a sample query
 *   npm run rag:stats          # Show index statistics
 */

import * as path from 'path';
import { config } from 'dotenv';

// Load environment
config();

import { buildRagIndex, searchDocs, getDocContext, getRagStats, isIndexReady, loadEmbeddingIndex, saveEmbeddingIndex, chunkAllDocs } from './index';
import { sql } from '@vercel/postgres';
import * as fs from 'fs';
import OpenAI from 'openai';
import { config as appConfig } from '../config';
import type { ZuoraProduct, DocChunk, EmbeddingIndex } from './types';

const DOCS_DIR = path.join(process.cwd(), 'zuora-docs-scrapper', 'output');
const INDEX_PATH = path.join(process.cwd(), 'data', 'zuora-docs-index.json');
const PROGRESS_PATH = path.join(process.cwd(), 'data', 'rag-progress.json');

async function runBuild(resume: boolean, products?: ZuoraProduct[]) {
  console.log('\n🔨 Building RAG Index\n');
  console.log(`  Docs: ${DOCS_DIR}`);
  console.log(`  Index: ${INDEX_PATH}`);
  console.log(`  Resume: ${resume}`);
  if (products) {
    console.log(`  Products: ${products.join(', ')}`);
  }

  const startTime = Date.now();

  try {
    const index = await buildRagIndex({
      docsDir: DOCS_DIR,
      indexPath: INDEX_PATH,
      progressPath: PROGRESS_PATH,
      resume,
      products,
    });

    const elapsed = ((Date.now() - startTime) / 1000 / 60).toFixed(1);
    console.log(`\n✅ Index built successfully in ${elapsed} minutes`);
    console.log(`   Total chunks: ${index.chunks.length}`);
  } catch (error) {
    console.error('\n❌ Build failed:', error);
    process.exit(1);
  }
}

async function runTest(query: string) {
  console.log('\n🔍 Testing RAG Search\n');

  if (!(await isIndexReady())) {
    console.error('❌ Index not found. Run `npm run rag:build` first.');
    process.exit(1);
  }

  console.log(`Query: "${query}"\n`);

  // Use a very low minScore to debug
  const results = await searchDocs(query, { limit: 5, minScore: 0.1 });

  if (results.length === 0) {
    console.log('No results found (even with minScore=0.1). Check if embeddings are valid.\n');
    return;
  }

  // Show score range for debugging
  console.log(`Top score: ${(results[0].score * 100).toFixed(1)}%`);
  console.log(`Score range: ${(results[results.length - 1].score * 100).toFixed(1)}% - ${(results[0].score * 100).toFixed(1)}%\n`);

  console.log(`Found ${results.length} results:\n`);

  for (const { chunk, score } of results) {
    console.log(`  [${(score * 100).toFixed(0)}%] ${chunk.metadata.title}`);
    if (chunk.metadata.section) {
      console.log(`         > ${chunk.metadata.section}`);
    }
    console.log(`         ${chunk.metadata.product} | ${chunk.metadata.url}`);
    console.log(`         ${chunk.content.substring(0, 150).replace(/\n/g, ' ')}...`);
    console.log();
  }

  // Also show formatted context
  console.log('\n📄 Formatted Context for Prompt:\n');
  console.log('─'.repeat(60));
  const context = await getDocContext(query, { limit: 3 });
  console.log(context);
  console.log('─'.repeat(60));
}

async function runStats() {
  console.log('\n📊 RAG Index Statistics\n');

  if (!(await isIndexReady())) {
    console.error('❌ Index not found. Run `npm run rag:build` first.');
    process.exit(1);
  }

  const stats = await getRagStats();

  console.log(`  Total chunks: ${stats.totalChunks.toLocaleString()}`);
  console.log(`  Model: ${stats.model}`);
  console.log(`  Updated: ${stats.updatedAt}`);
  console.log();
  console.log('  By product:');
  console.log(`    zuora-billing:  ${stats.byProduct['zuora-billing'].toLocaleString()}`);
  console.log(`    zuora-platform: ${stats.byProduct['zuora-platform'].toLocaleString()}`);
  console.log(`    zuora-revenue:  ${stats.byProduct['zuora-revenue'].toLocaleString()}`);
  console.log();
}

async function runRepair() {
  console.log('\n🔧 Repairing RAG Index\n');

  if (!(await isIndexReady())) {
    console.error('❌ Index not found. Run `npm run rag:build` first.');
    process.exit(1);
  }

  // Load existing index
  const existingIndex = loadEmbeddingIndex(INDEX_PATH);
  if (!existingIndex) {
    console.error('❌ Could not load index.');
    process.exit(1);
  }

  console.log(`  Existing chunks: ${existingIndex.chunks.length}`);

  // Re-chunk all docs with fixed chunker
  console.log('\n  Re-chunking documents with updated chunker...');
  const allChunks = chunkAllDocs(DOCS_DIR);
  console.log(`  Expected chunks: ${allChunks.length}`);

  // Find missing chunk IDs
  const existingIds = new Set(existingIndex.chunks.map(c => c.id));
  const missingChunks = allChunks.filter(c => !existingIds.has(c.id));

  if (missingChunks.length === 0) {
    console.log('\n✅ No missing chunks found. Index is complete.');
    return;
  }

  console.log(`\n  Missing chunks: ${missingChunks.length}`);
  console.log('  Generating embeddings for missing chunks...\n');

  // Generate embeddings for missing chunks
  if (!appConfig.openai.apiKey) {
    console.error('❌ OPENAI_API_KEY required');
    process.exit(1);
  }

  const client = new OpenAI({ apiKey: appConfig.openai.apiKey });
  const newChunks: DocChunk[] = [];
  const BATCH_SIZE = 50; // Smaller batches for safety

  for (let i = 0; i < missingChunks.length; i += BATCH_SIZE) {
    const batch = missingChunks.slice(i, i + BATCH_SIZE);
    const progressPct = ((i + batch.length) / missingChunks.length * 100).toFixed(0);
    process.stdout.write(`  [${progressPct}%] Embedding batch... `);

    try {
      const response = await client.embeddings.create({
        model: 'text-embedding-3-small',
        input: batch.map(c => c.content),
      });

      const sorted = response.data.sort((a, b) => a.index - b.index);
      for (let j = 0; j < batch.length; j++) {
        newChunks.push({
          ...batch[j],
          embedding: sorted[j].embedding,
        });
      }
      console.log(`done (${batch.length} chunks)`);
    } catch (error) {
      console.log(`failed: ${error instanceof Error ? error.message : error}`);
      // Log which chunks failed for debugging
      console.log(`    Failed chunks: ${batch.map(c => c.id).join(', ')}`);
    }

    await new Promise(resolve => setTimeout(resolve, 100));
  }

  if (newChunks.length === 0) {
    console.error('\n❌ Failed to generate any new embeddings.');
    process.exit(1);
  }

  // Merge into existing index
  const mergedIndex: EmbeddingIndex = {
    version: existingIndex.version,
    updatedAt: new Date().toISOString(),
    model: existingIndex.model,
    chunks: [...existingIndex.chunks, ...newChunks],
  };

  // Save merged index (streaming write to avoid V8 string limit)
  saveEmbeddingIndex(mergedIndex, INDEX_PATH);

  console.log(`\n✅ Repair complete!`);
  console.log(`   Added: ${newChunks.length} chunks`);
  console.log(`   Total: ${mergedIndex.chunks.length} chunks`);
}

async function runMigrate() {
  console.log('\n🚀 Migrating RAG Index to Postgres\n');

  // Check for POSTGRES_URL
  if (!process.env.POSTGRES_URL) {
    console.error('❌ POSTGRES_URL environment variable required.');
    console.error('   Set it in your .env file or export it.');
    process.exit(1);
  }

  // Check for local index
  if (!fs.existsSync(INDEX_PATH)) {
    console.error(`❌ Local index not found at ${INDEX_PATH}`);
    console.error('   Run `npm run rag:build` first.');
    process.exit(1);
  }

  // Load the index (buffer-based read to avoid V8 string limit)
  console.log(`Loading index from ${INDEX_PATH}...`);
  const index = loadEmbeddingIndex(INDEX_PATH);
  if (!index) {
    console.error('❌ Could not parse index file.');
    process.exit(1);
  }
  console.log(`Found ${index.chunks.length} chunks to migrate\n`);

  // Check current count in Postgres
  const countResult = await sql<{ count: string }>`SELECT COUNT(*) as count FROM doc_chunks`;
  const existingCount = parseInt(countResult.rows[0]?.count ?? '0', 10);
  console.log(`Existing chunks in Postgres: ${existingCount}`);

  if (existingCount > 0) {
    console.log('⚠️  Database already has data. This will upsert (update or insert) all chunks.');
  }

  // Migrate in batches
  const BATCH_SIZE = 50;
  let migrated = 0;
  let errors = 0;
  const startTime = Date.now();

  for (let i = 0; i < index.chunks.length; i += BATCH_SIZE) {
    const batch = index.chunks.slice(i, i + BATCH_SIZE);

    for (const chunk of batch) {
      try {
        const embeddingStr = `[${chunk.embedding.join(',')}]`;
        await sql`
          INSERT INTO doc_chunks (id, content, embedding, title, url, product, section, filename)
          VALUES (
            ${chunk.id},
            ${chunk.content},
            ${embeddingStr}::vector,
            ${chunk.metadata.title},
            ${chunk.metadata.url},
            ${chunk.metadata.product},
            ${chunk.metadata.section ?? null},
            ${chunk.metadata.filename}
          )
          ON CONFLICT (id) DO UPDATE SET
            content = EXCLUDED.content,
            embedding = EXCLUDED.embedding,
            title = EXCLUDED.title,
            url = EXCLUDED.url,
            product = EXCLUDED.product,
            section = EXCLUDED.section,
            filename = EXCLUDED.filename
        `;
        migrated++;
      } catch (err) {
        console.error(`Failed to insert chunk ${chunk.id}:`, err instanceof Error ? err.message : err);
        errors++;
      }
    }

    // Log progress
    const progress = ((i + batch.length) / index.chunks.length * 100).toFixed(1);
    const elapsed = ((Date.now() - startTime) / 1000).toFixed(0);
    process.stdout.write(`\r  [${progress}%] ${migrated} migrated, ${errors} errors (${elapsed}s)`);
  }

  console.log('\n');

  // Get final count
  const finalResult = await sql<{ count: string }>`SELECT COUNT(*) as count FROM doc_chunks`;
  const finalCount = parseInt(finalResult.rows[0]?.count ?? '0', 10);

  const totalTime = ((Date.now() - startTime) / 1000 / 60).toFixed(1);
  console.log(`✅ Migration complete in ${totalTime} minutes`);
  console.log(`   Migrated: ${migrated}`);
  console.log(`   Errors: ${errors}`);
  console.log(`   Total in Postgres: ${finalCount}`);
}

// Parse CLI arguments
const args = process.argv.slice(2);
const command = args[0];

switch (command) {
  case 'build':
    const resume = args.includes('--resume');
    const productIndex = args.indexOf('--product');
    let products: ZuoraProduct[] | undefined;
    if (productIndex >= 0 && args[productIndex + 1]) {
      const product = args[productIndex + 1];
      products = [`zuora-${product}`] as ZuoraProduct[];
    }
    runBuild(resume, products);
    break;

  case 'test':
    const query = args.slice(1).join(' ') || 'contract modification retrospective';
    runTest(query);
    break;

  case 'stats':
    runStats();
    break;

  case 'repair':
    runRepair();
    break;

  case 'migrate':
    runMigrate();
    break;

  default:
    console.log(`
RAG CLI - Zuora Documentation Search

Usage:
  npm run rag:build              Build the embedding index
  npm run rag:build -- --resume  Resume interrupted build
  npm run rag:build -- --product billing  Build only billing docs
  npm run rag:repair             Find and embed missing chunks
  npm run rag:test               Test with default query
  npm run rag:test "your query"  Test with custom query
  npm run rag:stats              Show index statistics
  npm run rag:migrate            Migrate local index to Postgres (requires POSTGRES_URL)
`);
}
