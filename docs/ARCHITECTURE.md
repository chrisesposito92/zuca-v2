# ZUCA v2: Dify Chatflow to Code Migration Plan

## Executive Summary

Rebuild the ZUCA (Zuora Use Case Architect) Dify chatflow as a TypeScript application using multi-provider LLMs (OpenAI Responses API + Gemini 3) with tools (web_search, code_interpreter, google_search, url_context, Zuora MCP).

---

## Current Dify Workflow Analysis

### Overview
ZUCA is a 9-LLM-node pipeline that:
1. Takes customer use cases as input
2. Detects Zuora Billing (ZB) and Revenue (ZR) capabilities
3. Matches to "Golden Use Cases" (38+ reference implementations)
4. Generates complete Zuora solutions (subscriptions, rate plans, POB mappings, tables)

### Input Variables
| Variable | Type | Description |
|----------|------|-------------|
| customer_name | string | Customer name |
| contract_start_date | string | Contract start (MM/DD/YYYY) |
| terms_months | number | Contract term in months |
| transaction_currency | select | USD/EUR/CAD |
| billing_period | select | Monthly/Quarterly/Semi-Annually/Annually |
| is_allocations | boolean | Perform revenue allocations |
| allocation_method | select | Use List Price/Use Sell Price/Custom Formula/N/A |
| allocation_custom_formula | string | Custom allocation formula |
| rev_rec_notes | text | Revenue recognition notes |

### Current 9 LLM Nodes
1. **Contract Intel** - Extract dates, terms, billing parameters
2. **Detect Capabilities** - Classify into ZB/ZR capability labels
3. **Generate ZB Subscription Spec** - Create subscription + rate plans + charges
4. **Assign POB Templates** - Map charges to POB templates
5. **Build Contracts/Orders Table** - Create ZR contracts/orders table
6. **Build Billings Table** - Create billing schedule
7. **Build Rev Rec Waterfall** - Create revenue recognition schedule
8. **Summarize Assumptions & Open Questions** - Consolidate
9. **Expert Assistant** - Answer general questions (separate path)

### Reference Data (Golden Use Cases)
Located in `/docs/Golden Use Cases/`:
- `golden_use_cases_capabilities.json` - 38+ use cases with capability flags
- `golden_use_cases_key_terms.json` - Zuora glossary (MEA, ACB, PPDD, etc.)
- `golden_use_cases_pob_templates.json` - 24 POB templates
- `golden_use_cases_subscriptions.json` - Example subscriptions
- `golden_use_cases_rate_plans-charges.json` - Example rate plans/charges
- `golden_use_cases_zr_tables.json` - Example ZR tables

---

## Proposed Architecture

### Technology Stack
- **Language**: TypeScript (Node.js)
- **LLM API**: OpenAI Responses API (gpt-5.2) + Gemini 3 API (gemini-3-pro-preview, gemini-3-flash-preview)
- **Tools**:
  - `web_search` - Research Zuora documentation
  - `code_interpreter` - Execute calculations for billings/waterfall
  - `google_search` - Gemini native web search
  - `url_context` - Gemini native URL context retrieval
  - `code_execution` - Gemini native code execution
  - Zuora MCP `ask_zuora` - Query Zuora knowledge base
- **Gemini mapping**: `web_search` → `google_search`, `code_interpreter` → `code_execution`, and `url_context` is enabled on all Gemini requests; `ask_zuora` is exposed via function calling when MCP is configured.
- **Framework**: Minimal - direct API calls with structured outputs

### Project Structure
```
zuca-v2/
├── src/
│   ├── index.ts                 # Main entry point
│   ├── config.ts                # Configuration / environment
│   ├── types/
│   │   ├── input.ts             # Input schema types
│   │   ├── output.ts            # Output schema types
│   │   └── golden-use-cases.ts  # GUC reference types
│   ├── pipeline/
│   │   ├── orchestrator.ts      # Main pipeline orchestrator
│   │   ├── router.ts            # Question classifier (use case vs general)
│   │   └── steps/
│   │       ├── contract-intel.ts
│   │       ├── detect-capabilities.ts
│   │       ├── match-golden-use-cases.ts  # Pure code (Jaccard)
│   │       ├── generate-subscription.ts
│   │       ├── assign-pob-templates.ts
│   │       ├── build-contracts-orders.ts
│   │       ├── build-billings.ts
│   │       ├── build-revrec-waterfall.ts
│   │       └── summarize.ts
│   ├── llm/
│   │   ├── client.ts            # LLM client (OpenAI + Gemini)
│   │   ├── mcp-client.ts        # MCP JSON-RPC client (Gemini function calls)
│   │   └── prompts/             # System prompts for each step
│   ├── rag/                     # RAG (Retrieval-Augmented Generation)
│   │   ├── index.ts             # Main interface (auto-detects backend)
│   │   ├── postgres-backend.ts  # pgvector search implementation
│   │   ├── search.ts            # Local JSON search implementation
│   │   ├── chunker.ts           # Document chunking logic
│   │   └── cli.ts               # RAG CLI commands
│   ├── tools/
│   │   ├── web-search.ts        # Web search tool config
│   │   ├── code-interpreter.ts  # Code interpreter tool config
│   │   └── zuora-mcp.ts         # Zuora MCP integration
│   ├── data/
│   │   └── loader.ts            # Load Golden Use Case JSON files
│   ├── cli/
│   │   └── index.ts             # CLI interface
│   ├── api/
│   │   └── server.ts            # HTTP API server
│   └── utils/
│       ├── markdown-tables.ts   # Format output tables
│       ├── jaccard.ts           # Jaccard similarity matching
│       └── date-utils.ts        # Date formatting helpers
├── apps/
│   └── web/                     # Next.js 16 frontend (HeroUI + Vercel Postgres)
├── docs/
│   └── Golden Use Cases/        # Existing reference data
├── tests/
│   ├── pipeline.test.ts
│   └── steps/                   # Unit tests per step
├── package.json
├── tsconfig.json
└── README.md
```

---

## Design Decisions

| Decision | Choice | Rationale |
|----------|--------|-----------|
| Interface | **CLI + HTTP API** | CLI for local use, API for integrations |
| Zuora MCP | **Design-only + ask_zuora** | Use `ask_zuora` tool for Zuora knowledge. No create operations (future state) |
| Conversation | **Multi-turn** | Remember context, allow follow-up queries |
| Output | **Markdown + JSON** | Human-readable tables + machine-readable JSON |

---

## Pipeline Steps

| Step | LLM? | Tools | Description |
|------|------|-------|-------------|
| Router | Yes | web_search / code_interpreter | Classify: use case vs general question |
| Contract Intel | Yes | None | Extract dates/terms from use case text |
| Detect Capabilities | Yes | web_search | Classify into ZB/ZR capabilities |
| Match Golden Use Cases | **No** | None | Pure code: Jaccard similarity |
| Generate Subscription | Yes | ask_zuora | Create subscription spec |
| Assign POB Templates | Yes | None | Map charges to POB templates |
| Build Contracts/Orders | Yes | code_interpreter | Generate table with calculations; POB template + release event must follow the POB mapping |
| Build Billings | Yes | code_interpreter | Generate billing schedule |
| Build Rev Rec Waterfall | Yes | code_interpreter | Generate rev rec schedule |
| Summarize | Yes | None | Consolidate assumptions/questions |
| Expert Assistant | Yes | web_search, ask_zuora | Answer general questions |

---

## Revenue Snapshot Pipeline (Read-Only)

This is a parallel pipeline used by the web app to generate Zuora Revenue-style snapshots from **actual** Zuora Billing tenant data. It is intentionally read-only and does not create or modify any tenant records.

| Step | LLM? | Description |
|------|------|-------------|
| Fetch Source Data | No | OAuth + Data Query (OTR) or ZOQL/REST (non-OTR) |
| Build Contracts/Orders | Yes | Map BookingTransaction → Revenue fields |
| Build Billings | Yes | Map BillingTransaction → Revenue fields |
| Build Rev Rec Waterfall | Yes | Snapshot recognition from Contracts/Orders |
| Summarize | Yes | Consolidate assumptions/questions |

---

## Key Improvements Over Dify

### Tool Integration
| Dify (Current) | ZUCA v2 (New) |
|----------------|---------------|
| Chat Completions API | Responses API with native tools |
| Manual calculation prompts | `code_interpreter` tool |
| Static reference data only | `web_search` for Zuora docs |
| No Zuora integration | Zuora MCP `ask_zuora` |

### Simplifications
1. **Template Transform nodes** → Inline string interpolation
2. **Assigner nodes** → Pipeline state object
3. **Code nodes** → Utility functions or code_interpreter tool

---

## Success Criteria

1. **Functional Parity**: Generate same quality outputs as Dify workflow
2. **Tool Integration**: Successfully use web_search, code_interpreter, ask_zuora
3. **Multi-turn**: Handle follow-up queries that refine the solution
4. **Both Interfaces**: CLI and HTTP API working
5. **Test Coverage**: Core pipeline steps have tests

---

## RAG System

ZUCA uses a RAG (Retrieval-Augmented Generation) system to inject relevant Zuora documentation into pipeline steps.

### Architecture

Due to Gemini's limitation (can't use custom function calling with native tools), retrieval happens in TypeScript **before** the LLM call:

```
User Query → Vector Search (pgvector) → Inject Docs into Prompt → LLM Call
```

### Dual Backend

| Backend | Use Case | Detection |
|---------|----------|-----------|
| **Postgres (pgvector)** | Production, web app | `POSTGRES_URL` env var |
| **Local JSON** | CLI dev, offline | No `POSTGRES_URL` |

### RAG-Enhanced Steps

| Step | Query Source | Docs Retrieved |
|------|--------------|----------------|
| `expert-assistant` | User's question | 3 chunks |
| `analyze-contract` | Use case description | 3 chunks |
| `design-subscription` | Use case + rev rec notes | 3 chunks |

See [ROADMAP-ZUORA-DOCS-RAG.md](./ROADMAP-ZUORA-DOCS-RAG.md) for full details.

---

## Future Enhancements

1. **Multi-Model Support**: GPT-5.2 + Gemini 3 Pro/Flash (implemented)
2. **Zuora Write Operations**: Create products, rate plans, subscriptions via API
   - See [ROADMAP-ZB-API-INTEGRATION.md](./ROADMAP-ZB-API-INTEGRATION.md) for detailed plan
3. **Streaming Output**: Real-time streaming for long responses
4. **Caching**: Cache Golden Use Case matches for faster subsequent runs

---

## Schema Architecture

### Current Schemas (Active)
Used by pipeline steps for LLM structured output:
- `SubscriptionSchema` - Basic subscription definition
- `RatePlanSchema` / `ChargeSchema` - Rate plans and charges
- `BillingsRowSchema` - Billing schedule rows
- `ContractsOrdersRowSchema` - ZR table rows

### Future Schemas (Dormant)
Added to `src/types/output.ts` but **not yet wired to any pipeline steps**:
- `ProductSchema` / `ProductRatePlanSchema` / `ProductRatePlanChargeSchema` - Product catalog
- `AccountSchema` / `ContactSchema` / `PaymentMethodSchema` - Account with contacts
- `EnhancedSubscriptionSchema` / `ChargeOverrideSchema` - Orders API compatible
- `OrderSchema` / `OrderActionSchema` - Full Orders API payload
- `EnhancedBillingsRowSchema` - Invoice details, tax, accounting codes
- `ZuoraBillingObjectsSchema` - Master container for all ZB API objects

These schemas are comprehensive and cover all Zuora Billing API requirements. They will be activated when ZB write operations are implemented.

**Important**: Each pipeline step uses hardcoded JSON schemas passed to the LLM, not the Zod schemas. The dormant schemas are invisible to the LLM and won't be accidentally populated.

See [ROADMAP-ZB-API-INTEGRATION.md](./ROADMAP-ZB-API-INTEGRATION.md) for implementation plan
