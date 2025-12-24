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
│  └──────────────┘    └──────────────┘    └────────┬─────────┘  │
│                                                    │            │
│                                          ┌────────▼─────────┐  │
│                                          │   LLM Call       │  │
│                                          │ (Gemini/OpenAI)  │  │
│                                          └──────────────────┘  │
└─────────────────────────────────────────────────────────────────┘
```

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

| Option | Pros | Cons |
|--------|------|------|
| **OpenAI Embeddings + Local JSON** | Simple, no infra | Slow search at scale |
| **Supabase pgvector** | Already use Vercel Postgres | Need migration |
| **Pinecone** | Fast, managed | Another service |
| **Local SQLite + sqlite-vss** | Zero dependencies | Less mature |

**Recommendation**: Start with **OpenAI embeddings + local JSON** for dev, migrate to **pgvector** for production (reuse Vercel Postgres).

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

## Implementation Order

| Phase | Task | Effort | Priority |
|-------|------|--------|----------|
| 1a | Q&A generator script | 1 day | **Start Now** |
| 1b | Generate full Q&A dataset | 2-3 hours (compute) | After 1a |
| 2a | Embedding generation script | 0.5 day | High |
| 2b | Local vector search | 0.5 day | High |
| 3a | Expert assistant integration | 0.5 day | High |
| 3b | Pipeline step enrichment | 1 day | Medium |
| 4 | pgvector migration (production) | 1 day | Later |

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
