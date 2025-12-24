/**
 * Document Chunker
 *
 * Splits long documents into smaller chunks for embedding.
 * Strategy:
 * - Short docs (< 1000 tokens) stay whole
 * - Long docs split at H2/H3 header boundaries
 * - Each chunk preserves metadata for context
 */

import * as fs from 'fs';
import * as path from 'path';
import { DocMetadata, ZuoraProduct } from './types';

/**
 * Parsed document with frontmatter and content
 */
export interface ParsedDoc {
  metadata: DocMetadata;
  content: string;
  filename: string;
}

/**
 * A chunk ready for embedding (without the embedding yet)
 */
export interface PreEmbeddingChunk {
  id: string;
  content: string;
  metadata: {
    title: string;
    url: string;
    product: ZuoraProduct;
    section?: string;
    filename: string;
  };
}

// Token estimation - be conservative (3 chars/token) because
// code, URLs, and special chars tokenize to more tokens
const CHARS_PER_TOKEN = 3;
const MAX_CHUNK_TOKENS = 500; // ~1500 chars with conservative estimate
const MIN_CHUNK_TOKENS = 50; // Don't create tiny chunks

// Hard limits for embedding API (text-embedding-3-small has 8191 token limit)
const MAX_CHUNK_CHARS = 6000; // ~2000 tokens worst case, leaves room for safety

/**
 * Parse YAML frontmatter from markdown content
 */
export function parseFrontmatter(content: string): { metadata: DocMetadata; body: string } | null {
  const frontmatterMatch = content.match(/^---\n([\s\S]*?)\n---\n([\s\S]*)$/);
  if (!frontmatterMatch) {
    return null;
  }

  const [, frontmatterStr, body] = frontmatterMatch;

  // Parse YAML frontmatter (simple key: "value" format)
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

/**
 * Estimate token count from text
 */
function estimateTokens(text: string): number {
  return Math.ceil(text.length / CHARS_PER_TOKEN);
}

/**
 * Split content by markdown headers (H2 and H3)
 */
function splitByHeaders(content: string): Array<{ section: string | undefined; content: string }> {
  const sections: Array<{ section: string | undefined; content: string }> = [];

  // Split by H2 or H3 headers
  const headerRegex = /^(#{2,3})\s+(.+)$/gm;
  let lastIndex = 0;
  let currentSection: string | undefined;
  let match;

  // Get content before first header (if any)
  const firstHeaderMatch = content.match(/^#{2,3}\s+/m);
  if (firstHeaderMatch && firstHeaderMatch.index && firstHeaderMatch.index > 0) {
    const preContent = content.slice(0, firstHeaderMatch.index).trim();
    if (preContent) {
      sections.push({ section: undefined, content: preContent });
    }
  }

  while ((match = headerRegex.exec(content)) !== null) {
    // Save previous section's content
    if (lastIndex > 0) {
      const sectionContent = content.slice(lastIndex, match.index).trim();
      if (sectionContent) {
        sections.push({ section: currentSection, content: sectionContent });
      }
    }

    currentSection = match[2].trim();
    lastIndex = match.index + match[0].length;
  }

  // Don't forget the last section
  if (lastIndex > 0 && lastIndex < content.length) {
    const sectionContent = content.slice(lastIndex).trim();
    if (sectionContent) {
      sections.push({ section: currentSection, content: sectionContent });
    }
  }

  // If no headers found, return whole content as single section
  if (sections.length === 0) {
    sections.push({ section: undefined, content: content.trim() });
  }

  return sections;
}

/**
 * Further split a section if it's too long
 */
function splitLongSection(
  text: string,
  maxTokens: number
): string[] {
  const chunks: string[] = [];
  const paragraphs = text.split(/\n\n+/);

  let currentChunk = '';

  for (const para of paragraphs) {
    const combined = currentChunk ? `${currentChunk}\n\n${para}` : para;

    if (estimateTokens(combined) <= maxTokens) {
      currentChunk = combined;
    } else {
      // Current chunk is full, start new one
      if (currentChunk) {
        chunks.push(currentChunk);
      }

      // If single paragraph is too long, split by sentences
      if (estimateTokens(para) > maxTokens) {
        const sentences = para.split(/(?<=[.!?])\s+/);
        let sentenceChunk = '';

        for (const sentence of sentences) {
          const sentenceCombined = sentenceChunk ? `${sentenceChunk} ${sentence}` : sentence;
          if (estimateTokens(sentenceCombined) <= maxTokens) {
            sentenceChunk = sentenceCombined;
          } else {
            if (sentenceChunk) chunks.push(sentenceChunk);
            sentenceChunk = sentence;
          }
        }
        if (sentenceChunk) currentChunk = sentenceChunk;
      } else {
        currentChunk = para;
      }
    }
  }

  if (currentChunk) {
    chunks.push(currentChunk);
  }

  return chunks;
}

/**
 * Truncate content to fit within embedding API limits
 */
function truncateContent(content: string, maxChars: number = MAX_CHUNK_CHARS): string {
  if (content.length <= maxChars) return content;
  // Truncate at word boundary
  const truncated = content.substring(0, maxChars);
  const lastSpace = truncated.lastIndexOf(' ');
  return (lastSpace > maxChars * 0.8 ? truncated.substring(0, lastSpace) : truncated) + '...';
}

/**
 * Chunk a single document into embedding-ready pieces
 */
export function chunkDocument(doc: ParsedDoc): PreEmbeddingChunk[] {
  const chunks: PreEmbeddingChunk[] = [];
  const tokens = estimateTokens(doc.content);

  // Short doc - keep whole (with hard truncation as safety net)
  if (tokens <= MAX_CHUNK_TOKENS) {
    const fullContent = `# ${doc.metadata.title}\n\n${doc.content}`;
    chunks.push({
      id: `${doc.filename}#0`,
      content: truncateContent(fullContent),
      metadata: {
        title: doc.metadata.title,
        url: doc.metadata.url,
        product: doc.metadata.product,
        filename: doc.filename,
      },
    });
    return chunks;
  }

  // Long doc - split by headers first
  const sections = splitByHeaders(doc.content);

  let chunkIndex = 0;
  for (const section of sections) {
    const sectionTokens = estimateTokens(section.content);

    if (sectionTokens < MIN_CHUNK_TOKENS) {
      // Skip very short sections (likely just links or navigation)
      continue;
    }

    if (sectionTokens <= MAX_CHUNK_TOKENS) {
      // Section fits in one chunk
      const prefix = section.section
        ? `# ${doc.metadata.title}\n## ${section.section}\n\n`
        : `# ${doc.metadata.title}\n\n`;

      chunks.push({
        id: `${doc.filename}#${chunkIndex}`,
        content: truncateContent(prefix + section.content),
        metadata: {
          title: doc.metadata.title,
          url: doc.metadata.url,
          product: doc.metadata.product,
          section: section.section,
          filename: doc.filename,
        },
      });
      chunkIndex++;
    } else {
      // Section too long - split further
      const subChunks = splitLongSection(section.content, MAX_CHUNK_TOKENS);

      for (let i = 0; i < subChunks.length; i++) {
        const prefix = section.section
          ? `# ${doc.metadata.title}\n## ${section.section} (${i + 1}/${subChunks.length})\n\n`
          : `# ${doc.metadata.title} (${i + 1}/${subChunks.length})\n\n`;

        chunks.push({
          id: `${doc.filename}#${chunkIndex}`,
          content: truncateContent(prefix + subChunks[i]),
          metadata: {
            title: doc.metadata.title,
            url: doc.metadata.url,
            product: doc.metadata.product,
            section: section.section,
            filename: doc.filename,
          },
        });
        chunkIndex++;
      }
    }
  }

  return chunks;
}

/**
 * Load all documents from the scraped output directory
 */
export function loadAllDocs(docsDir: string, products?: ZuoraProduct[]): ParsedDoc[] {
  const docs: ParsedDoc[] = [];
  const targetProducts = products || ['zuora-billing', 'zuora-platform', 'zuora-revenue'] as ZuoraProduct[];

  for (const product of targetProducts) {
    const productDir = path.join(docsDir, product);
    if (!fs.existsSync(productDir)) {
      console.warn(`  Product directory not found: ${productDir}`);
      continue;
    }

    const files = fs.readdirSync(productDir).filter(f => f.endsWith('.md'));
    console.log(`  ${product}: ${files.length} files`);

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

/**
 * Chunk all documents and return chunks ready for embedding
 */
export function chunkAllDocs(docsDir: string, products?: ZuoraProduct[]): PreEmbeddingChunk[] {
  console.log('\nLoading documents...');
  const docs = loadAllDocs(docsDir, products);
  console.log(`Loaded ${docs.length} documents\n`);

  console.log('Chunking documents...');
  const allChunks: PreEmbeddingChunk[] = [];

  for (const doc of docs) {
    const chunks = chunkDocument(doc);
    allChunks.push(...chunks);
  }

  console.log(`Created ${allChunks.length} chunks from ${docs.length} documents`);
  console.log(`Average chunks per doc: ${(allChunks.length / docs.length).toFixed(1)}\n`);

  return allChunks;
}
