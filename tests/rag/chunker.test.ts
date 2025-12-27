import { describe, expect, it } from 'vitest';

import { chunkDocument, parseFrontmatter, type ParsedDoc } from '../../src/rag/chunker';

describe('parseFrontmatter', () => {
  it('parses YAML frontmatter with required fields', () => {
    const content = `---
title: Test Doc
url: https://example.com
product: zuora-billing
scraped_at: 2024-01-01
---

Body content`;

    const parsed = parseFrontmatter(content);
    expect(parsed).not.toBeNull();
    expect(parsed?.metadata.title).toBe('Test Doc');
    expect(parsed?.metadata.url).toBe('https://example.com');
    expect(parsed?.metadata.product).toBe('zuora-billing');
    expect(parsed?.body).toBe('Body content');
  });

  it('returns null when required fields are missing', () => {
    const content = `---
title: Missing Product
url: https://example.com
---
Body`;

    expect(parseFrontmatter(content)).toBeNull();
  });
});

describe('chunkDocument', () => {
  const baseMetadata = {
    title: 'Doc Title',
    url: 'https://example.com',
    product: 'zuora-billing' as const,
    scraped_at: '2024-01-01',
  };

  it('keeps short documents as a single chunk', () => {
    const doc: ParsedDoc = {
      metadata: baseMetadata,
      content: 'Short content for testing.',
      filename: 'zuora-billing/test.md',
    };

    const chunks = chunkDocument(doc);
    expect(chunks).toHaveLength(1);
    expect(chunks[0].content.startsWith('# Doc Title')).toBe(true);
  });

  it('splits long documents by headers into separate chunks', () => {
    const sectionA = 'A '.repeat(600);
    const sectionB = 'B '.repeat(600);
    const content = `## Section A
${sectionA}

## Section B
${sectionB}`;

    const doc: ParsedDoc = {
      metadata: baseMetadata,
      content,
      filename: 'zuora-billing/long.md',
    };

    const chunks = chunkDocument(doc);
    expect(chunks).toHaveLength(2);
    expect(chunks[0].metadata.section).toBe('Section A');
    expect(chunks[1].metadata.section).toBe('Section B');
    expect(chunks[0].content).toContain('## Section A');
    expect(chunks[1].content).toContain('## Section B');
  });
});
