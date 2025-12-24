/**
 * RAG Migration API
 *
 * Migrates local JSON index to Postgres pgvector.
 * Call this endpoint to populate the database with embeddings.
 *
 * POST /api/rag/migrate
 * Body: { indexPath?: string }  // Optional custom path
 */

import { NextResponse } from 'next/server';
import * as fs from 'fs';
import * as path from 'path';
import { insertDocChunk, getDocChunkCount, type ZuoraProduct } from '@/lib/db';

interface DocChunk {
  id: string;
  content: string;
  embedding: number[];
  metadata: {
    title: string;
    url: string;
    product: ZuoraProduct;
    section?: string;
    filename: string;
  };
}

interface EmbeddingIndex {
  version: string;
  updatedAt: string;
  model: string;
  chunks: DocChunk[];
}

export async function POST(request: Request) {
  try {
    const body = await request.json().catch(() => ({}));
    const indexPath = body.indexPath || path.join(process.cwd(), '..', '..', 'data', 'zuora-docs-index.json');

    // Check if index file exists
    if (!fs.existsSync(indexPath)) {
      return NextResponse.json(
        { error: `Index file not found at ${indexPath}` },
        { status: 404 }
      );
    }

    // Load the index
    console.log(`Loading index from ${indexPath}...`);
    const indexData = fs.readFileSync(indexPath, 'utf-8');
    const index: EmbeddingIndex = JSON.parse(indexData);

    console.log(`Found ${index.chunks.length} chunks to migrate`);

    // Check current count
    const existingCount = await getDocChunkCount();
    console.log(`Existing chunks in database: ${existingCount}`);

    // Migrate in batches
    const BATCH_SIZE = 100;
    let migrated = 0;
    let errors = 0;

    for (let i = 0; i < index.chunks.length; i += BATCH_SIZE) {
      const batch = index.chunks.slice(i, i + BATCH_SIZE);

      for (const chunk of batch) {
        try {
          await insertDocChunk({
            id: chunk.id,
            content: chunk.content,
            embedding: chunk.embedding,
            title: chunk.metadata.title,
            url: chunk.metadata.url,
            product: chunk.metadata.product,
            section: chunk.metadata.section,
            filename: chunk.metadata.filename,
          });
          migrated++;
        } catch (err) {
          console.error(`Failed to insert chunk ${chunk.id}:`, err);
          errors++;
        }
      }

      // Log progress
      const progress = ((i + batch.length) / index.chunks.length * 100).toFixed(1);
      console.log(`Progress: ${progress}% (${migrated} migrated, ${errors} errors)`);
    }

    // Get final count
    const finalCount = await getDocChunkCount();

    return NextResponse.json({
      success: true,
      migrated,
      errors,
      totalChunks: index.chunks.length,
      databaseCount: finalCount,
      model: index.model,
      version: index.version,
    });
  } catch (error) {
    console.error('Migration failed:', error);
    return NextResponse.json(
      { error: error instanceof Error ? error.message : 'Migration failed' },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    const count = await getDocChunkCount();
    return NextResponse.json({
      ready: count > 0,
      chunkCount: count,
    });
  } catch (error) {
    return NextResponse.json(
      { error: error instanceof Error ? error.message : 'Failed to check status' },
      { status: 500 }
    );
  }
}
