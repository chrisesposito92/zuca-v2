# ZUCA v2 - Zuora Use Case Architect

ZUCA is an AI-powered solution architect that generates complete Zuora Billing and Revenue configurations from natural language use case descriptions.

## Features

- **Use Case Analysis**: Extracts contract parameters, billing requirements, and revenue recognition rules from natural language descriptions
- **Golden Use Case Matching**: Matches detected capabilities to 38+ reference implementations using Jaccard similarity
- **Subscription Generation**: Creates complete subscription specifications with rate plans and charges
- **POB Template Mapping**: Maps charges to appropriate Performance Obligation templates for revenue recognition
- **Table Generation**: Generates Contracts/Orders, Billings, and Revenue Recognition Waterfall tables
- **Revenue Snapshot (Web)**: Connects to Zuora Billing and previews Revenue ingestion output from live tenant data (Excel export + Rev Rec chart toggle + table column filtering)
- **Multi-turn Conversations**: Supports follow-up questions and solution refinements
- **Multiple Interfaces**: CLI and Next.js web app (API routes under `/api`)

## Quick Start

### Installation

```bash
# Clone the repository
git clone <repository-url>
cd zuca-v2

# Install dependencies
npm install

# Copy environment file and configure (CLI/legacy server)
cp .env.example .env
# Edit .env with your OpenAI or Gemini API key

# Copy environment file for the web app
cp apps/web/.env.example apps/web/.env.local
# Edit apps/web/.env.local with Vercel Postgres + auth settings
```

### Configuration

Edit `.env` with your settings (CLI/legacy server):

```env
# Required (choose at least one provider)
OPENAI_API_KEY=your-openai-api-key
GEMINI_API_KEY=your-gemini-api-key

# Optional
LLM_MODEL=gpt-5.2  # gpt-5.2 | gemini-3-pro-preview | gemini-3-flash-preview
OPENAI_MODEL=gpt-5.2
OPENAI_REASONING_EFFORT=medium  # low, medium, high - controls gpt-5.2 reasoning depth
GEMINI_BASE_URL=https://generativelanguage.googleapis.com/v1beta
PORT=3000
NODE_ENV=development
DEBUG=true  # Set to 'true' for verbose logging

# Model selection applies to all steps within a run (no mix-and-match).

# Zuora MCP (optional - enables direct Zuora API integration)
ZUORA_MCP_SERVER_URL=http://localhost:8080/mcp  # Your MCP server endpoint

# Web app (Revenue Snapshot credential encryption)
ZUORA_CREDENTIALS_KEY=your-32+char-encryption-key
```

For the Next.js web app, use `apps/web/.env.local` (see `apps/web/.env.example` for the full list).

### Usage

#### CLI - Analyze a Use Case

```bash
# Analyze from JSON file
npm run cli analyze examples/sample-use-case.json

# With output file
npm run cli analyze examples/sample-use-case.json -o results.json

# With model selection
npm run cli analyze examples/sample-use-case.json -m gemini-3-pro-preview

# Interactive mode
npm run cli interactive

# Quick capability detection
npm run cli quick "Annual SaaS subscription with monthly billing"
```

#### CLI - Generate Use Cases

Generate realistic Zuora use cases by researching a company's website:

```bash
# Generate use cases for a company
npm run cli -- generate <customer_name> -w <website_url> [options]

# Examples
npm run cli -- generate "Salesforce" -w "https://www.salesforce.com" -c 3
npm run cli -- generate "Twilio" -w "https://www.twilio.com" -c 2 -m gemini-3-pro-preview
npm run cli -- generate "Datadog" -w "https://www.datadoghq.com" -c 3 -o generated-uc/datadog.json

# Options:
#   -w, --website <url>     Customer website URL (required)
#   -c, --count <number>    Number of use cases to generate (1-5, default: 1)
#   -n, --notes <text>      Additional notes to guide generation
#   -o, --output <file>     Save results to a JSON file
#   -l, --local             Use local formatting (faster, no LLM for formatting)
#   -m, --model <model>     LLM model (gpt-5.2 | gemini-3-pro-preview | gemini-3-flash-preview)

# Interactive mode (guided prompts)
npm run cli generate-interactive
npm run cli gi  # shorthand
```

#### CLI - Self-Learning System

ZUCA includes a self-learning pipeline that evaluates outputs against behavioral criteria and generates corrections for future improvement.

```bash
# Run evaluation suite against test cases
npm run cli evaluate

# Evaluate with specific model
npm run cli evaluate -m gemini-3-pro-preview

# Evaluate specific step only
npm run cli evaluate --step contracts_orders

# Generate corrections for failures
npm run cli evaluate --corrections

npm run cli -- evaluate --suite advanced-scenarios

# List stored corrections
npm run cli corrections list

# Show corrections summary by step
npm run cli corrections summary

# Filter corrections by step
npm run cli corrections list --step billings

# Correction lifecycle maintenance (decay, archive, promote)
npm run cli corrections maintain           # Run maintenance
npm run cli corrections maintain --dry-run # Preview without changes
npm run cli corrections archived           # List archived corrections
npm run cli corrections restore <id>       # Restore archived correction

# Analyze failure patterns for prompt improvement
npm run cli prompts analyze
npm run cli prompts analyze --step billings

# Generate a prompt improvement suggestion
npm run cli prompts suggest billings "missing payment term"

# View and manage prompt suggestions
npm run cli prompts list
npm run cli prompts approve <suggestion-id>
npm run cli prompts reject <suggestion-id>

# Run automated self-improvement loop
npm run cli self-improve
npm run cli self-improve -m gemini-3-flash-preview --auto-suggest
npm run cli self-improve --iterations 3
npm run cli -- self-improve --suite advanced-scenarios

# Build custom test suites from UC generator output (see "Generate Use Cases" above)
npm run uc:to-suite -- generated-uc/ data/test-suites/real-world-scenarios.yaml

# Active learning / Review queue (flag uncertain outputs for human review)
npm run cli review list               # List items flagged for review
npm run cli review list --status pending  # Filter by status
npm run cli review show <id>          # Show item details
npm run cli review approve <id>       # Mark as reviewed (correct)
npm run cli review dismiss <id>       # Dismiss (not worth reviewing)
npm run cli review stats              # Show queue statistics
```

See `docs/FEATURE-SELF-LEARNING.md` for full architecture and implementation details.

#### API Routes (Next.js)

When running the web app locally (`npm run dev:web`), API routes are available under `http://localhost:3000/api/*`.
For example, `/api/analyze`, `/api/sessions`, and `/api/health` mirror the deployed routes used by the UI.

#### Web App (Next.js)

```bash
# Run the Next.js app (local)
npm run dev:web

# Or from apps/web
npm run dev
```

## Input Schema

```typescript
interface ZucaInput {
  customer_name: string;           // Customer/company name
  contract_start_date: string;     // MM/DD/YYYY format
  terms_months: number;            // Contract term in months
  transaction_currency: 'USD' | 'EUR' | 'CAD';
  billing_period: 'Monthly' | 'Quarterly' | 'Semi-Annually' | 'Annually';
  is_allocations: boolean;         // Perform revenue allocations
  allocation_method?: 'Use List Price' | 'Use Sell Price' | 'Custom Formula' | 'N/A';
  allocation_custom_formula?: string;
  rev_rec_notes?: string;          // Additional rev rec notes
  use_case_description: string;    // Main use case description
}
```

## Output

ZUCA generates:

1. **Contract Intel**: Extracted dates, terms, and billing parameters
2. **Detected Capabilities**: Zuora Billing and Revenue capability labels
3. **Matched Golden Use Cases**: Similar reference implementations
4. **Subscription Spec**: Complete subscription with rate plans and charges
5. **POB Mapping**: Charge to POB template assignments with rationale
6. **Contracts/Orders Table**: ZR contracts/orders with allocated prices
7. **Billings Table**: Complete billing schedule
8. **Revenue Waterfall**: Monthly revenue recognition schedule
9. **Summary**: Consolidated assumptions and open questions

## Project Structure

```
zuca-v2/
├── src/
  │   ├── index.ts              # Main entry point
│   ├── config.ts             # Configuration
│   ├── types/                # Type definitions
│   ├── data/                 # Golden Use Case data loader
│   ├── llm/                  # LLM client (OpenAI + Gemini)
│   │   └── prompts/          # System prompts
│   ├── pipeline/             # Pipeline orchestration
│   │   ├── orchestrator.ts   # Main orchestrator
│   │   └── steps/            # Pipeline steps
│   ├── rag/                  # RAG (Retrieval-Augmented Generation)
│   │   ├── index.ts          # Main interface (auto-detects backend)
│   │   ├── postgres-backend.ts  # pgvector search
│   │   └── cli.ts            # RAG CLI commands
│   ├── utils/                # Utilities
│   ├── cli/                  # CLI interface
│   └── api/                  # HTTP API server
├── apps/
│   └── web/                  # Next.js 16 frontend
├── docs/
│   └── Golden Use Cases/     # Reference data
├── examples/                 # Example inputs
├── tests/                    # Test files
└── README.md
```

## Testing

```bash
# Watch mode
npm run test

# CI-friendly run
npm run test:run
```

Database integration tests (in `tests/db/`) run only when `POSTGRES_URL_TEST` (or `POSTGRES_URL`) is set to a pooled Neon URL or a local Postgres URL. When using a pooled Neon URL, tests run in the default schema and clean up after themselves, so use a dedicated test branch/database.

```bash
# Run only DB integration tests
POSTGRES_URL_TEST="postgresql://...-pooler.neon.tech/..." npm run test:db
```

## RAG System

ZUCA includes a RAG (Retrieval-Augmented Generation) system that injects relevant Zuora documentation into pipeline steps.

### Dual Backend Architecture

The RAG system auto-detects which backend to use:

| Backend | Use Case | Detection |
|---------|----------|-----------|
| **Postgres (pgvector)** | Production, web app | `POSTGRES_URL` env var present |
| **Local JSON** | CLI dev, offline | No `POSTGRES_URL` |

### Setup

```bash
# Build the local index (one-time, ~30 min)
npm run rag:build

# For production, migrate to Postgres
npm run rag:migrate

# Test the RAG search
npm run rag:test "contract modification"
```

### RAG-Enhanced Steps

The following pipeline steps retrieve relevant documentation before LLM calls:
- `expert-assistant` - Answers Zuora questions using retrieved docs
- `analyze-contract` - Enriched with billing/revenue concepts
- `design-subscription` - Enriched with charge model and POB info

## Development

```bash
# Type checking
npm run typecheck

# Build
npm run build

# Run tests
npm test

# Development mode (with watch)
npm run dev
```

## Architecture

ZUCA uses a 10-step pipeline:

1. **Router** - Classify query (use case vs general question)
2. **Contract Intel** - Extract dates and parameters
3. **Detect Capabilities** - Classify into ZB/ZR capabilities
4. **Match Golden Use Cases** - Find similar implementations (pure code)
5. **Generate Subscription** - Create subscription spec
6. **Assign POB Templates** - Map charges to POB templates
7. **Build Contracts/Orders** - Generate ZR table
8. **Build Billings** - Generate billing schedule
9. **Build Rev Rec Waterfall** - Generate recognition schedule
10. **Summarize** - Consolidate assumptions/questions

The pipeline uses OpenAI's Responses API and the Gemini 3 API with structured outputs and tools:
- `web_search` (OpenAI) / `google_search` (Gemini) - Zuora documentation and web lookup
- `code_interpreter` (OpenAI) / `code_execution` (Gemini) - Date/amount calculations
- `url_context` (Gemini) - URL context retrieval
- **Zuora MCP** (optional) - Direct Zuora API access via Model Context Protocol
- `ask_zuora` - MCP tool for Zuora product guidance (function calling for Gemini)

### Tool Usage

Tools are provided to the LLM but used at the model's discretion:
- `web_search` / `google_search` - For up-to-date Zuora documentation lookups
- `code_interpreter` / `code_execution` - For complex date calculations in billing/revenue schedules
- `url_context` - Enabled on Gemini requests (no-op if unused)
- **Zuora MCP** - When configured, provides `ask_zuora`, `query_objects`, `zuora_codegen` tools

### MCP Configuration

To enable Zuora MCP integration, set the server URL in your `.env`:

```env
ZUORA_MCP_SERVER_URL=https://your-mcp-server.onrender.com/sse
```

The MCP server must support Streamable HTTP or SSE for OpenAI. For Gemini, the MCP server is called directly via JSON-RPC (HTTP endpoint required). When MCP is configured:
- The LLM can query Zuora knowledge base in real-time
- Tool calls show as `mcp_list_tools` and `mcp_call` in debug output
- Falls back to custom function tools if MCP is unavailable

Set `DEBUG=true` in your environment to see tool usage in the logs.

## License

MIT
