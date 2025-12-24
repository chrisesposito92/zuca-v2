# ZUCA v2 - Zuora Use Case Architect

## Documentation Guidelines

MAKE SURE YOU ARE UPDATING ALL RELEVANT DOCS AS YOU BUILD OUT NEW FEATURES, FIX BUGS, AND MAKE CHANGES. THIS INCLUDES README.md, CLAUDE.md, any roadmap or feature markdown files, etc.
WHEN PLANNING NEW FEATURES OUT YOU SHOULD BE DOCUMENTING THEM IN NEW MD FILES AND MAINTAINING A ROADMAP OF SORTS

## Key Documentation Files

| File | Purpose |
|------|---------|
| `docs/ARCHITECTURE.md` | Overall system design, pipeline steps, technology stack |
| `docs/ROADMAP-FRONTEND.md` | Web frontend implementation roadmap and status |
| `docs/ROADMAP-ZB-API-INTEGRATION.md` | Future plan for direct Zuora Billing API integration |
| `docs/ZUORA-MCP-README.md` | Zuora MCP tool documentation |
| `docs/ROADMAP-ZUORA-DOCS-RAG.md` | RAG system and Q&A dataset generation |
| `src/llm/prompts/*.md` | System prompts for each pipeline step |

## Project Structure

```
apps/
└── web/                      # Next.js 16 frontend (HeroUI + Vercel Postgres)
    ├── app/                  # App Router pages and API routes
    │   ├── (auth)/           # Login page
    │   ├── (main)/           # Protected pages (analyze, history)
    │   └── api/              # API routes (auth, sessions, etc.)
    ├── lib/                  # Database, auth utilities
    ├── hooks/                # React hooks (useAuth)
    └── components/           # UI components

src/
├── types/
│   ├── input.ts          # Input schema (ZucaInput)
│   ├── output.ts         # Output schemas (active + dormant ZB API schemas)
│   ├── uc-generator.ts   # UC Generator input/output schemas
│   └── golden-use-cases.ts
├── pipeline/
│   ├── orchestrator.ts   # Main ZUCA pipeline runner
│   ├── steps/            # Individual ZUCA pipeline steps
│   └── uc-generator/     # UC Generator pipeline (separate)
│       ├── orchestrator.ts
│       └── steps/
│           ├── research-customer.ts
│           ├── generate-use-cases.ts
│           └── format-output.ts
├── llm/
│   ├── client.ts         # LLM client (OpenAI + Gemini)
│   ├── mcp-client.ts     # MCP JSON-RPC client (Gemini function calls)
│   └── prompts/          # System prompts (markdown)
│       ├── *.md          # Main ZUCA prompts
│       └── uc-*.md       # UC Generator prompts
├── cli/
│   └── index.ts          # CLI commands (analyze, generate, etc.)
├── api/
│   └── server.ts         # REST API endpoints
├── rag/                  # Retrieval-Augmented Generation
│   ├── index.ts          # Main RAG interface
│   ├── chunker.ts        # Document chunking logic
│   ├── embeddings.ts     # OpenAI embeddings generation
│   ├── search.ts         # Vector similarity search
│   ├── cli.ts            # RAG CLI commands
│   └── types.ts          # Type definitions
└── data/
    └── loader.ts         # Golden Use Case loader

zuora-docs-scrapper/       # Separate scraper project
├── output/                # Scraped markdown files (4,482 total)
│   ├── zuora-billing/     # 1,949 pages
│   ├── zuora-platform/    # 1,999 pages
│   └── zuora-revenue/     # 534 pages
├── qa-dataset/            # Generated Q&A pairs for fine-tuning
└── src/
    ├── qa-generator.ts    # Q&A pair generator
    └── ...                # Scraper modules
```

## Schema Architecture

### Active Schemas (Used by LLM)
Each pipeline step has its own **hardcoded JSON schema** for structured output.
The Zod schemas in `output.ts` are used for TypeScript types and validation only.

### Dormant Schemas (Not Wired Yet)
The following schemas exist in `output.ts` but are NOT connected to any pipeline:
- `ProductSchema`, `ProductRatePlanSchema`, `ProductRatePlanChargeSchema`
- `AccountSchema`, `ContactSchema`, `PaymentMethodSchema`
- `EnhancedSubscriptionSchema`, `ChargeOverrideSchema`
- `OrderSchema`, `OrderActionSchema`
- `EnhancedBillingsRowSchema`
- `ZuoraBillingObjectsSchema`

These are for future ZB API write operations. See `docs/ROADMAP-ZB-API-INTEGRATION.md`.

## Key Zuora Concepts in Prompts

The prompts handle these advanced scenarios:
- **Contract Modifications**: Retrospective (2 ZR lines + catch-up) vs Prospective
- **PPDD**: Ratable (`BK-OT-CONSUMP-RATABLE`) vs Consumption (`EVT-OT-CONSUMP-USAGE`)
- **Bundle Explosion**: One billing line → multiple revenue POBs
- **Ramp Deals**: Escalating pricing with averaged allocation
- **Variable Consideration**: VC constraint and allocation

## MCP Tools

Use `ask_zuora` MCP tool when you need Zuora-specific guidance while working on prompts.

## RAG Module

The RAG (Retrieval-Augmented Generation) module provides semantic search over 4,482 scraped Zuora documentation pages (13,467 chunks).

### Dual Backend Architecture

The RAG system auto-detects which backend to use:

| Backend | Use Case | Detection |
|---------|----------|-----------|
| **Postgres (pgvector)** | Production, web app | `POSTGRES_URL` env var present |
| **Local JSON** | CLI dev, offline | No `POSTGRES_URL` |

### CLI Commands

```bash
# Build the full embedding index (~13,500 chunks, ~30 min)
npm run rag:build

# Resume if interrupted
npm run rag:build:resume

# Test with a sample query (uses Postgres if POSTGRES_URL set)
npm run rag:test "contract modification"

# View index statistics
npm run rag:stats

# Migrate local index to Postgres (requires POSTGRES_URL)
npm run rag:migrate
```

### Usage in Code

```typescript
import { searchDocs, getDocContext, isIndexReady } from './rag';

// Check if RAG is available (async for Postgres check)
if (await isIndexReady()) {
  // Search for relevant documentation
  const results = await searchDocs('proration settings', {
    product: 'zuora-billing',  // optional filter
    limit: 5,
    minScore: 0.7,
  });

  // Get formatted context for prompt injection
  const context = await getDocContext('how do ramp deals work?');
  // Returns markdown-formatted docs ready to inject into prompts
}
```

### Architecture

Due to Gemini's limitation (can't use custom function calling with native tools), retrieval happens in the TypeScript orchestration layer **before** the LLM call, not as a tool:

```
User Query → Vector Search (pgvector) → Inject Docs into Prompt → LLM Call
```

### RAG-Enriched Pipeline Steps

| Step | Query Source | Docs Retrieved |
|------|--------------|----------------|
| `expert-assistant` | User's question | 3 chunks |
| `analyze-contract` | Use case description | 3 chunks |
| `design-subscription` | Use case + rev rec notes | 3 chunks |
| `build-contracts-orders` | Order actions, allocations, SSP, POB | 3 chunks |
| `build-billings` | Invoice items, proration, billing | 3 chunks |
| `build-revrec-waterfall` | Revenue recognition, POB, ratable methods | 3 chunks |

### Q&A Dataset Generation

For future fine-tuning, generate instruction/response pairs from the docs:

```bash
cd zuora-docs-scrapper

# Test with 5 docs
npm run qa:test

# Generate full dataset (~18,000 pairs, ~$10, ~1-2 hours)
npm run qa:generate
```

Output: `zuora-docs-scrapper/qa-dataset/*.jsonl`

See `docs/ROADMAP-ZUORA-DOCS-RAG.md` for full architecture details.

## UC Generator Module

The UC Generator is a **separate, optional pipeline** that generates demo-ready use cases for a customer based on web research.

### Purpose
- Research a customer's products, pricing, and business model using web search
- Generate 1-3 structured use cases with `otr_workflow_inputs` ready for the main ZUCA pipeline
- Format the output as human-readable markdown with JSON code blocks

### CLI Usage
```bash
# Generate use cases for a customer
zuca generate "Slack" --website slack.com --count 3

# Interactive mode
zuca generate-interactive
```

### API Usage
```bash
POST /api/uc-generate
{
  "customer_name": "Slack",
  "customer_website": "slack.com",
  "num_use_cases": 3,
  "user_notes": "Focus on enterprise plans"
}
```

### Pipeline Steps
1. **Research Customer** (`research-customer.ts`) - Uses web search to understand products/pricing
2. **Generate Use Cases** (`generate-use-cases.ts`) - Creates structured use cases with OTR inputs
3. **Format Output** (`format-output.ts`) - Produces markdown with JSON code blocks

### Integration with Main Pipeline
The UC Generator output includes `otr_workflow_inputs` which maps directly to `ZucaInput`:
```typescript
import { runUCGenerator, mapToZucaInput, runPipeline } from 'zuca';

const ucResult = await runUCGenerator(input);
const zucaInput = mapToZucaInput(ucResult.use_cases[0]);
const result = await runPipeline(zucaInput);
```

### Key Files
| File | Purpose |
|------|---------|
| `src/types/uc-generator.ts` | Input/output schemas |
| `src/pipeline/uc-generator/orchestrator.ts` | Pipeline runner |
| `src/llm/prompts/uc-research-customer.md` | Research prompt |
| `src/llm/prompts/uc-generate-use-cases.md` | Generation prompt |
| `src/llm/prompts/uc-format-output.md` | Formatting prompt |

## Web Frontend

The web frontend is a Next.js 16 application in `apps/web/` using HeroUI components and Vercel Postgres.

### Development

```bash
# Start the web dev server
npm run dev:web

# Or from apps/web directory
cd apps/web && npm run dev
```

### Tech Stack
- **Framework**: Next.js 16 App Router (Turbopack)
- **UI**: HeroUI with custom Zuora theme (`herouitheme.json`)
- **Database**: Vercel Postgres (Neon)
- **Auth**: JWT cookies (jose + bcrypt)
- **State**: React Query (server) + Zustand (client)

### Key Files
| File | Purpose |
|------|---------|
| `apps/web/lib/db.ts` | Database operations (sessions, feedback, bugs) |
| `apps/web/lib/auth.ts` | JWT authentication utilities |
| `apps/web/lib/schema.sql` | PostgreSQL schema |
| `apps/web/middleware.ts` | Route protection |

### Environment Variables
```bash
POSTGRES_URL=              # Vercel Postgres connection string
JWT_SECRET=                # Min 32 chars for production
ZUCA_PASSWORD=             # Shared password for simple auth
OPENAI_API_KEY=            # For pipeline processing
GEMINI_API_KEY=            # For Gemini models
LLM_MODEL=                 # Default model (gpt-5.2 | gemini-3-pro-preview | gemini-3-flash-preview)
OPENAI_MODEL=              # Optional OpenAI model override
GITHUB_TOKEN=              # For bug reporting (optional)
GITHUB_OWNER=              # Repository owner (optional)
GITHUB_REPO=               # Repository name (optional)
```

See `docs/ROADMAP-FRONTEND.md` for full implementation status and roadmap.
