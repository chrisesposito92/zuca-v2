/**
 * Postgres Backend for RAG
 *
 * Uses pgvector for vector similarity search in production.
 * This module is only used when POSTGRES_URL environment variable is set.
 */

import { sql } from '@vercel/postgres';
import OpenAI from 'openai';
import type { SearchOptions, SearchResult, ZuoraProduct } from './types';
import { debugLog } from '../config';

// OpenAI client for generating query embeddings
let openaiClient: OpenAI | null = null;

function getOpenAI(): OpenAI {
  if (!openaiClient) {
    const apiKey = process.env.OPENAI_API_KEY;
    if (!apiKey) {
      throw new Error('OPENAI_API_KEY required for RAG search');
    }
    openaiClient = new OpenAI({ apiKey });
  }
  return openaiClient;
}

/**
 * Generate embedding for a query
 */
async function embedQuery(query: string): Promise<number[]> {
  const openai = getOpenAI();
  const response = await openai.embeddings.create({
    model: 'text-embedding-3-small',
    input: query,
  });
  return response.data[0].embedding;
}

/**
 * Search for similar document chunks using Postgres pgvector
 */
export async function searchWithPostgres(
  query: string,
  options: SearchOptions = {}
): Promise<SearchResult[]> {
  const { product, limit = 5, minScore = 0.3 } = options;

  debugLog('Postgres RAG search', { query: query.substring(0, 50), product, limit });

  // Generate embedding for query
  const queryEmbedding = await embedQuery(query);
  const embeddingStr = `[${queryEmbedding.join(',')}]`;

  // Search using cosine similarity
  let result;
  if (product) {
    result = await sql<{
      id: string;
      content: string;
      title: string;
      url: string;
      product: string;
      section: string | null;
      filename: string;
      score: number;
    }>`
      SELECT
        id, content, title, url, product, section, filename,
        1 - (embedding <=> ${embeddingStr}::vector) as score
      FROM doc_chunks
      WHERE product = ${product}
        AND 1 - (embedding <=> ${embeddingStr}::vector) >= ${minScore}
      ORDER BY embedding <=> ${embeddingStr}::vector
      LIMIT ${limit}
    `;
  } else {
    result = await sql<{
      id: string;
      content: string;
      title: string;
      url: string;
      product: string;
      section: string | null;
      filename: string;
      score: number;
    }>`
      SELECT
        id, content, title, url, product, section, filename,
        1 - (embedding <=> ${embeddingStr}::vector) as score
      FROM doc_chunks
      WHERE 1 - (embedding <=> ${embeddingStr}::vector) >= ${minScore}
      ORDER BY embedding <=> ${embeddingStr}::vector
      LIMIT ${limit}
    `;
  }

  debugLog('Postgres search results', { count: result.rows.length });

  // Map to SearchResult format
  return result.rows.map(row => ({
    chunk: {
      id: row.id,
      content: row.content,
      embedding: [], // Not returned from search
      metadata: {
        title: row.title,
        url: row.url,
        product: row.product as ZuoraProduct,
        section: row.section ?? undefined,
        filename: row.filename,
      },
    },
    score: row.score,
  }));
}

/**
 * Check if Postgres RAG index is ready
 */
export async function isPostgresReady(): Promise<boolean> {
  try {
    const result = await sql<{ count: string }>`
      SELECT COUNT(*) as count FROM doc_chunks
    `;
    const count = parseInt(result.rows[0]?.count ?? '0', 10);
    return count > 0;
  } catch (error) {
    debugLog('Postgres RAG check failed', error);
    return false;
  }
}

/**
 * Get formatted context for prompt injection using Postgres
 */
export async function formatPostgresContext(
  query: string,
  options: SearchOptions = {}
): Promise<string> {
  const results = await searchWithPostgres(query, options);

  if (results.length === 0) {
    return '';
  }

  const sections = results.map((r, i) => {
    const { chunk, score } = r;
    const source = chunk.metadata.section
      ? `${chunk.metadata.title} > ${chunk.metadata.section}`
      : chunk.metadata.title;

    return `### [${i + 1}] ${source}
*Relevance: ${(score * 100).toFixed(0)}% | Source: ${chunk.metadata.url}*

${chunk.content}`;
  });

  return `## Relevant Zuora Documentation

${sections.join('\n\n---\n\n')}`;
}
