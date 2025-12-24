/**
 * RAG Types
 *
 * Type definitions for the Retrieval-Augmented Generation system.
 */

export type ZuoraProduct = 'zuora-billing' | 'zuora-platform' | 'zuora-revenue';

/**
 * Metadata from document frontmatter
 */
export interface DocMetadata {
  title: string;
  url: string;
  product: ZuoraProduct;
  scraped_at: string;
}

/**
 * A chunk of documentation with its embedding
 */
export interface DocChunk {
  /** Unique identifier for this chunk */
  id: string;

  /** The text content of this chunk */
  content: string;

  /** OpenAI embedding vector (1536 dimensions for text-embedding-3-small) */
  embedding: number[];

  /** Source document metadata */
  metadata: {
    title: string;
    url: string;
    product: ZuoraProduct;
    /** Section header if this is a sub-chunk of a larger doc */
    section?: string;
    /** Source filename */
    filename: string;
  };
}

/**
 * Search result with similarity score
 */
export interface SearchResult {
  chunk: DocChunk;
  score: number;
}

/**
 * Options for document search
 */
export interface SearchOptions {
  /** Filter by product area */
  product?: ZuoraProduct;

  /** Maximum number of results (default: 5) */
  limit?: number;

  /** Minimum similarity score threshold (default: 0.7) */
  minScore?: number;
}

/**
 * Embedding index stored on disk
 */
export interface EmbeddingIndex {
  /** Version for cache invalidation */
  version: string;

  /** When the index was last updated */
  updatedAt: string;

  /** Model used for embeddings */
  model: string;

  /** All document chunks with embeddings */
  chunks: DocChunk[];
}

/**
 * Progress tracking for embedding generation
 */
export interface EmbeddingProgress {
  total: number;
  completed: number;
  failed: number;
  lastProcessedFile?: string;
}
