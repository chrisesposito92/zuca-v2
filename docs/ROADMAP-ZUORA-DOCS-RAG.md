# Zuora Documentation RAG & Fine-tuning Roadmap

## Overview

Leverage 4,482 scraped Zuora documentation pages to enhance ZUCA through:
1. **RAG (Retrieval-Augmented Generation)** - Inject relevant docs into pipeline steps
2. **Fine-tuning Dataset** - Generate Q&A pairs for future model fine-tuning

## Architecture Constraint

> **Gemini Limitation**: Cannot use custom function calling alongside native tools.
>
> **Solution**: Retrieval happens in TypeScript orchestration layer, not as LLM tools.

```
┌─────────────────────────────────────────────────────────────────┐
│                     ORCHESTRATION LAYER                         │
│  ┌──────────────┐    ┌──────────────┐    ┌──────────────────┐  │
│  │ User Query   │───▶│ Vector Search│───▶│ Prompt + Context │  │
│  └──────────────┘    │  (pgvector)  │    └────────┬─────────┘  │
│                      └──────────────┘             │            │
│                                          ┌────────▼─────────┐  │
│                                          │   LLM Call       │  │
│                                          │ (Gemini/OpenAI)  │  │
│                                          └──────────────────┘  │
└─────────────────────────────────────────────────────────────────┘
```

## Dual Backend Architecture

The RAG system supports two backends:

| Backend | Use Case | Detection |
|---------|----------|-----------|
| **Postgres (pgvector)** | Production, web app | `POSTGRES_URL` env var present |
| **Local JSON** | CLI dev, offline | No `POSTGRES_URL` |

The system auto-detects which backend to use based on environment.

## Data Sources

| Product | Pages | Location |
|---------|-------|----------|
| Zuora Billing | 1,949 | `zuora-docs-scrapper/output/zuora-billing/` |
| Zuora Platform | 1,999 | `zuora-docs-scrapper/output/zuora-platform/` |
| Zuora Revenue | 534 | `zuora-docs-scrapper/output/zuora-revenue/` |

Each file has YAML frontmatter:
```yaml
---
title: "Contract Modifications"
url: "https://docs.zuora.com/..."
product: "zuora-billing"
scraped_at: "2025-12-24T..."
---
```

---

## Phase 1: Q&A Dataset Generation

Generate instruction/response pairs for future fine-tuning.

### Approach

For each doc, generate 3-5 Q&A pairs covering:
- **Definitional**: "What is [concept]?"
- **Procedural**: "How do I [task]?"
- **Troubleshooting**: "Why might [problem] occur?"
- **Comparison**: "What's the difference between [A] and [B]?"

### Output Format (JSONL)

```jsonl
{"instruction": "What is a bill run in Zuora?", "response": "A bill run is...", "source": "zuora-billing/bill-runs.md", "category": "definitional"}
{"instruction": "How do I create a scheduled bill run?", "response": "To create a scheduled bill run...", "source": "zuora-billing/create-scheduled-bill-run.md", "category": "procedural"}
```

### Script Location

```
zuora-docs-scrapper/
├── src/
│   └── qa-generator.ts      # Q&A pair generator
├── output/
│   ├── zuora-billing/        # Source docs
│   └── ...
└── qa-dataset/
    ├── billing-qa.jsonl      # Generated Q&A pairs
    ├── platform-qa.jsonl
    ├── revenue-qa.jsonl
    └── combined-qa.jsonl     # All products merged
```

### Implementation

```typescript
// qa-generator.ts pseudo-code
for each doc in output/:
  1. Parse frontmatter + content
  2. Call LLM to generate Q&A pairs
  3. Validate format
  4. Append to JSONL file

// Prompt template
`Given this Zuora documentation:
---
${docContent}
---

Generate 3-5 Q&A pairs. For each pair:
- instruction: A question a Zuora user might ask
- response: A helpful answer based ONLY on the doc content
- category: definitional | procedural | troubleshooting | comparison

Output as JSON array.`
```

### Estimated Output

- ~4,500 docs × 4 Q&A pairs = **~18,000 training examples**
- Cost: ~$5-15 with GPT-4o-mini for generation

---

## Phase 2: RAG Infrastructure

### Embedding Strategy

**Current Implementation**: OpenAI `text-embedding-3-small` with pgvector for production.

| Backend | Storage | Search Method |
|---------|---------|---------------|
| **Postgres (pgvector)** | Neon (via Vercel Postgres) | HNSW index, cosine similarity |
| **Local JSON** | `data/zuora-docs-index.json` | Brute-force cosine similarity |

The pgvector backend uses an HNSW index for fast approximate nearest neighbor search:
```sql
CREATE INDEX idx_doc_chunks_embedding ON doc_chunks
    USING hnsw (embedding vector_cosine_ops);
```

### Chunking Strategy

Documents vary from 200-5000 words. Chunk strategy:

1. **Keep short docs whole** (< 1000 tokens)
2. **Split long docs by headers** (H2/H3 boundaries)
3. **Preserve metadata** in each chunk

```typescript
interface DocChunk {
  id: string;
  content: string;
  embedding: number[];
  metadata: {
    title: string;
    url: string;
    product: 'billing' | 'platform' | 'revenue';
    section?: string;  // H2/H3 header if chunked
  };
}
```

### File Structure

```
src/
├── rag/
│   ├── embeddings.ts     # Generate/cache embeddings
│   ├── search.ts         # Vector similarity search
│   ├── chunker.ts        # Document chunking logic
│   └── index.ts          # Main RAG interface
└── ...
```

### Search API

```typescript
// src/rag/search.ts
export async function searchDocs(
  query: string,
  options?: {
    product?: 'billing' | 'platform' | 'revenue';
    limit?: number;  // default 5
    minScore?: number;  // default 0.7
  }
): Promise<DocChunk[]>;

// Usage in pipeline step
const relevantDocs = await searchDocs(
  "contract modification retrospective",
  { product: 'billing', limit: 3 }
);

const enrichedPrompt = `
${basePrompt}

## Relevant Zuora Documentation
${relevantDocs.map(d => `### ${d.metadata.title}\n${d.content}`).join('\n\n')}
`;
```

---

## Phase 3: Pipeline Integration

### Expert Assistant Enhancement

```typescript
// src/pipeline/steps/expert-assistant.ts
export async function expertAssistant(
  question: string,
  context: PipelineSession
): Promise<ExpertResponse> {
  // NEW: Retrieve relevant docs
  const relevantDocs = await searchDocs(question, { limit: 5 });

  // Inject into prompt
  const prompt = buildExpertPrompt(question, context, relevantDocs);

  // Call LLM (no function calling needed)
  return await llmCall(prompt);
}
```

### Pipeline Step Enrichment

Each step can retrieve topic-specific documentation:

| Step | Search Query Pattern |
|------|---------------------|
| `analyze-contract` | Contract terms, billing scenarios, {detected_terms} |
| `design-subscription` | Charge model {type}, pricing {pattern} |
| `build-contracts-orders` | Order actions, amendments, {action_types} |
| `build-billings` | Invoice items, proration, {billing_patterns} |
| `build-revrec-waterfall` | POB allocation, SSP, {rev_rec_scenarios} |

```typescript
// Example: design-subscription enrichment
const searchQueries = [
  `charge model ${input.detected_capabilities.charge_models.join(' ')}`,
  `pricing ${input.detected_capabilities.pricing_patterns.join(' ')}`,
];

const docs = await Promise.all(
  searchQueries.map(q => searchDocs(q, { product: 'billing', limit: 2 }))
);
```

---

## Implementation Status

| Phase | Task | Status |
|-------|------|--------|
| 1a | Q&A generator script | ✅ Complete |
| 1b | Generate full Q&A dataset | 🔄 Ready (run `npm run qa:generate` in zuora-docs-scrapper) |
| 2a | Embedding generation script | ✅ Complete (13,467 chunks indexed) |
| 2b | Local vector search | ✅ Complete (cosine similarity with minScore 0.3) |
| 3a | Expert assistant integration | ✅ Complete |
| 3b | Pipeline step enrichment | ✅ Complete (analyze-contract, design-subscription) |
| 4a | pgvector schema + migration CLI | ✅ Complete |
| 4b | Postgres backend implementation | ✅ Complete |
| 4c | Production migration | ✅ Complete (13,467 chunks in Neon) |

### RAG CLI Commands

```bash
npm run rag:build          # Build local JSON index
npm run rag:build:resume   # Resume interrupted build
npm run rag:test "query"   # Test search (uses Postgres if POSTGRES_URL set)
npm run rag:stats          # Show index statistics
npm run rag:migrate        # Migrate local index to Postgres
```

### RAG-Enriched Steps

The following pipeline steps now retrieve relevant Zuora documentation before LLM calls:

| Step | Query Source | Docs Retrieved |
|------|--------------|----------------|
| `expert-assistant` | User's question | 3 chunks |
| `analyze-contract` | Use case description | 3 chunks |
| `design-subscription` | Use case + rev rec notes | 3 chunks |
| `build-contracts-orders` | Order actions, allocations, SSP, POB | 3 chunks |
| `build-billings` | Invoice items, proration, billing | 3 chunks |
| `build-revrec-waterfall` | Revenue recognition, POB, ratable methods | 3 chunks |

The retrieval is **graceful** - if the RAG index isn't available, steps run without doc enrichment.

### Backend Files

| File | Purpose |
|------|---------|
| `src/rag/index.ts` | Main interface, auto-detects backend |
| `src/rag/postgres-backend.ts` | Postgres/pgvector search implementation |
| `src/rag/search.ts` | Local JSON search implementation |
| `src/rag/cli.ts` | CLI commands including migration |
| `apps/web/lib/schema.sql` | pgvector table schema |

---

## Success Metrics

- **Q&A Dataset**: 15,000+ high-quality pairs
- **RAG Precision**: Top-5 retrieval contains relevant doc 80%+ of time
- **Pipeline Quality**: Reduced Zuora-specific errors in output

---

## Open Questions

1. Should we chunk by semantic similarity or just header boundaries?
2. Include API reference docs or focus on conceptual docs?
3. Fine-tuning target: OpenAI fine-tune, or open model (Llama)?
