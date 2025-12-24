/**
 * Vector Search
 *
 * Semantic search over embedded document chunks.
 * Uses cosine similarity for ranking.
 */

import { EmbeddingIndex, SearchOptions, SearchResult, ZuoraProduct } from './types';
import { embedQuery, loadEmbeddingIndex } from './embeddings';

/**
 * Cosine similarity between two vectors
 */
function cosineSimilarity(a: number[], b: number[]): number {
  if (a.length !== b.length) {
    throw new Error(`Vector length mismatch: ${a.length} vs ${b.length}`);
  }

  let dotProduct = 0;
  let normA = 0;
  let normB = 0;

  for (let i = 0; i < a.length; i++) {
    dotProduct += a[i] * b[i];
    normA += a[i] * a[i];
    normB += b[i] * b[i];
  }

  if (normA === 0 || normB === 0) return 0;
  return dotProduct / (Math.sqrt(normA) * Math.sqrt(normB));
}

/**
 * Search for similar documents
 */
export async function searchChunks(
  query: string,
  index: EmbeddingIndex,
  options: SearchOptions = {}
): Promise<SearchResult[]> {
  const { product, limit = 5, minScore = 0.3 } = options; // Lowered default from 0.7 to 0.3

  // Embed the query
  const queryEmbedding = await embedQuery(query);

  // Filter chunks by product if specified
  let candidates = index.chunks;
  if (product) {
    candidates = candidates.filter(c => c.metadata.product === product);
  }

  // Calculate similarity for all candidates
  const scored: SearchResult[] = candidates.map(chunk => ({
    chunk,
    score: cosineSimilarity(queryEmbedding, chunk.embedding),
  }));

  // Sort by score descending
  scored.sort((a, b) => b.score - a.score);

  // Filter by minimum score and limit
  return scored
    .filter(r => r.score >= minScore)
    .slice(0, limit);
}

/**
 * RAG Search Interface
 *
 * Main interface for searching Zuora documentation.
 */
export class ZuoraDocsSearch {
  private index: EmbeddingIndex | null = null;
  private indexPath: string;

  constructor(indexPath: string) {
    this.indexPath = indexPath;
  }

  /**
   * Load the embedding index (lazy loading)
   */
  private async ensureIndex(): Promise<EmbeddingIndex> {
    if (!this.index) {
      this.index = loadEmbeddingIndex(this.indexPath);
      if (!this.index) {
        throw new Error(`Embedding index not found at ${this.indexPath}. Run 'npm run rag:build' first.`);
      }
    }
    return this.index;
  }

  /**
   * Search for relevant documentation
   */
  async search(query: string, options: SearchOptions = {}): Promise<SearchResult[]> {
    const index = await this.ensureIndex();
    return searchChunks(query, index, options);
  }

  /**
   * Get formatted context for injection into prompts
   */
  async getContext(
    query: string,
    options: SearchOptions = {}
  ): Promise<string> {
    const results = await this.search(query, options);

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

  /**
   * Search by specific product area
   */
  async searchBilling(query: string, options: Omit<SearchOptions, 'product'> = {}): Promise<SearchResult[]> {
    return this.search(query, { ...options, product: 'zuora-billing' });
  }

  async searchRevenue(query: string, options: Omit<SearchOptions, 'product'> = {}): Promise<SearchResult[]> {
    return this.search(query, { ...options, product: 'zuora-revenue' });
  }

  async searchPlatform(query: string, options: Omit<SearchOptions, 'product'> = {}): Promise<SearchResult[]> {
    return this.search(query, { ...options, product: 'zuora-platform' });
  }

  /**
   * Get index statistics
   */
  async getStats(): Promise<{
    totalChunks: number;
    byProduct: Record<ZuoraProduct, number>;
    model: string;
    updatedAt: string;
  }> {
    const index = await this.ensureIndex();

    const byProduct: Record<ZuoraProduct, number> = {
      'zuora-billing': 0,
      'zuora-platform': 0,
      'zuora-revenue': 0,
    };

    for (const chunk of index.chunks) {
      byProduct[chunk.metadata.product]++;
    }

    return {
      totalChunks: index.chunks.length,
      byProduct,
      model: index.model,
      updatedAt: index.updatedAt,
    };
  }

  /**
   * Reload the index from disk
   */
  reload(): void {
    this.index = null;
  }
}

/**
 * Create a search instance with default paths
 */
export function createSearchInstance(indexPath?: string): ZuoraDocsSearch {
  const defaultPath = indexPath || './data/zuora-docs-index.json';
  return new ZuoraDocsSearch(defaultPath);
}
