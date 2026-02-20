/**
 * RAG Module
 *
 * Retrieval-Augmented Generation for Zuora documentation.
 * Provides semantic search over scraped docs to enhance LLM prompts.
 *
 * Supports two backends:
 * - Local JSON file (for CLI/development)
 * - Postgres pgvector (for production/Vercel)
 *
 * The backend is auto-detected based on POSTGRES_URL environment variable.
 *
 * Usage:
 *   // Build the index first (one-time)
 *   npm run rag:build
 *
 *   // Then use in code
 *   import { searchDocs, getDocContext } from './rag';
 *
 *   const results = await searchDocs('contract modification');
 *   const context = await getDocContext('how does proration work?');
 */

import * as path from 'path';
import { ZuoraDocsSearch, createSearchInstance } from './search';
import { buildIndex, loadEmbeddingIndex, saveEmbeddingIndex, embedQuery } from './embeddings';
import { chunkAllDocs, chunkDocument, loadAllDocs } from './chunker';
import type { DocChunk, EmbeddingIndex, SearchOptions, SearchResult, ZuoraProduct } from './types';
import { searchWithPostgres, isPostgresReady, formatPostgresContext } from './postgres-backend';

// Re-export types
export type { DocChunk, EmbeddingIndex, SearchOptions, SearchResult, ZuoraProduct };

// Re-export utilities
export { buildIndex, loadEmbeddingIndex, saveEmbeddingIndex, embedQuery, chunkAllDocs, chunkDocument, loadAllDocs, ZuoraDocsSearch, createSearchInstance };

// Re-export query extraction
export { extractRagKeywords } from './query-extractor';

// Default paths
const DEFAULT_DOCS_DIR = path.join(process.cwd(), 'zuora-docs-scrapper', 'output');
const DEFAULT_INDEX_PATH = path.join(process.cwd(), 'data', 'zuora-docs-index.json');
const DEFAULT_PROGRESS_PATH = path.join(process.cwd(), 'data', 'rag-progress.json');

// Singleton search instance (for local backend)
let searchInstance: ZuoraDocsSearch | null = null;

/**
 * Check if Postgres backend should be used
 */
function usePostgres(): boolean {
  return !!process.env.POSTGRES_URL;
}

/**
 * Get or create the local search instance
 */
function getSearchInstance(): ZuoraDocsSearch {
  if (!searchInstance) {
    searchInstance = createSearchInstance(DEFAULT_INDEX_PATH);
  }
  return searchInstance;
}

/**
 * Search Zuora documentation
 *
 * @param query - Natural language search query
 * @param options - Search options (product filter, limit, minScore)
 * @returns Array of search results with similarity scores
 */
export async function searchDocs(
  query: string,
  options: SearchOptions = {}
): Promise<SearchResult[]> {
  if (usePostgres()) {
    return searchWithPostgres(query, options);
  }
  return getSearchInstance().search(query, options);
}

/**
 * Get formatted documentation context for prompt injection
 *
 * @param query - What to search for
 * @param options - Search options
 * @returns Formatted markdown string ready for prompt injection
 */
export async function getDocContext(
  query: string,
  options: SearchOptions = {}
): Promise<string> {
  if (usePostgres()) {
    return formatPostgresContext(query, options);
  }
  return getSearchInstance().getContext(query, options);
}

/**
 * Search only billing documentation
 */
export async function searchBillingDocs(
  query: string,
  options: Omit<SearchOptions, 'product'> = {}
): Promise<SearchResult[]> {
  return getSearchInstance().searchBilling(query, options);
}

/**
 * Search only revenue documentation
 */
export async function searchRevenueDocs(
  query: string,
  options: Omit<SearchOptions, 'product'> = {}
): Promise<SearchResult[]> {
  return getSearchInstance().searchRevenue(query, options);
}

/**
 * Search only platform documentation
 */
export async function searchPlatformDocs(
  query: string,
  options: Omit<SearchOptions, 'product'> = {}
): Promise<SearchResult[]> {
  return getSearchInstance().searchPlatform(query, options);
}

/**
 * Get RAG index statistics
 */
export async function getRagStats(): Promise<{
  totalChunks: number;
  byProduct: Record<ZuoraProduct, number>;
  model: string;
  updatedAt: string;
}> {
  return getSearchInstance().getStats();
}

/**
 * Reload the index (after rebuilding)
 */
export function reloadIndex(): void {
  if (searchInstance) {
    searchInstance.reload();
  }
}

/**
 * Build the embedding index from scraped docs
 *
 * @param options - Build options
 */
export async function buildRagIndex(options: {
  docsDir?: string;
  indexPath?: string;
  progressPath?: string;
  resume?: boolean;
  products?: ZuoraProduct[];
} = {}): Promise<EmbeddingIndex> {
  const {
    docsDir = DEFAULT_DOCS_DIR,
    indexPath = DEFAULT_INDEX_PATH,
    progressPath = DEFAULT_PROGRESS_PATH,
    resume = false,
    products,
  } = options;

  return buildIndex({
    docsDir,
    indexPath,
    progressPath,
    resume,
    products,
  });
}

/**
 * Check if the RAG index exists (local or Postgres)
 */
export async function isIndexReady(): Promise<boolean> {
  if (usePostgres()) {
    return isPostgresReady();
  }
  const index = loadEmbeddingIndex(DEFAULT_INDEX_PATH);
  return index !== null;
}
