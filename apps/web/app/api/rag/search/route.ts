/**
 * RAG Search API
 *
 * Vector similarity search over Zuora documentation.
 *
 * POST /api/rag/search
 * Body: {
 *   query: string,
 *   options?: { product?: string, limit?: number, minScore?: number }
 * }
 */

import { NextResponse } from 'next/server';
import OpenAI from 'openai';
import { searchDocChunks, isRagIndexReady, type ZuoraProduct } from '@/lib/db';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { query, options = {} } = body;

    if (!query || typeof query !== 'string') {
      return NextResponse.json(
        { error: 'Query is required' },
        { status: 400 }
      );
    }

    // Check if index is ready
    const ready = await isRagIndexReady();
    if (!ready) {
      return NextResponse.json(
        { error: 'RAG index not initialized. Run migration first.' },
        { status: 503 }
      );
    }

    // Generate embedding for query
    const embeddingResponse = await openai.embeddings.create({
      model: 'text-embedding-3-small',
      input: query,
    });

    const queryEmbedding = embeddingResponse.data[0].embedding;

    // Search for similar chunks
    const results = await searchDocChunks(queryEmbedding, {
      product: options.product as ZuoraProduct | undefined,
      limit: options.limit || 5,
      minScore: options.minScore || 0.3,
    });

    return NextResponse.json({
      results: results.map(r => ({
        chunk: {
          id: r.chunk.id,
          content: r.chunk.content,
          metadata: {
            title: r.chunk.title,
            url: r.chunk.url,
            product: r.chunk.product,
            section: r.chunk.section,
            filename: r.chunk.filename,
          },
        },
        score: r.score,
      })),
      query,
    });
  } catch (error) {
    console.error('Search failed:', error);
    return NextResponse.json(
      { error: error instanceof Error ? error.message : 'Search failed' },
      { status: 500 }
    );
  }
}
