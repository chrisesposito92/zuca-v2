# ZUCA v2 - Zuora Use Case Architect

ZUCA is an AI-powered solution architect that generates complete Zuora Billing and Revenue configurations from natural language use case descriptions.

## Features

- **Use Case Analysis**: Extracts contract parameters, billing requirements, and revenue recognition rules from natural language descriptions
- **Golden Use Case Matching**: Matches detected capabilities to 38+ reference implementations using Jaccard similarity
- **Subscription Generation**: Creates complete subscription specifications with rate plans and charges
- **POB Template Mapping**: Maps charges to appropriate Performance Obligation templates for revenue recognition
- **Table Generation**: Generates Contracts/Orders, Billings, and Revenue Recognition Waterfall tables
- **Multi-turn Conversations**: Supports follow-up questions and solution refinements
- **Multiple Interfaces**: CLI, HTTP API, and WebSocket support

## Quick Start

### Installation

```bash
# Clone the repository
git clone <repository-url>
cd zuca-v2

# Install dependencies
npm install

# Copy environment file and configure
cp .env.example .env
# Edit .env with your OpenAI or Gemini API key
```

### Configuration

Edit `.env` with your settings:

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
```

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

#### HTTP API

```bash
# Start the server
npm run server
```

API Endpoints:

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/api/analyze` | Analyze a new use case |
| POST | `/api/sessions/:id/follow-up` | Handle follow-up query |
| GET | `/api/sessions` | List all sessions |
| GET | `/api/sessions/:id` | Get session details |
| DELETE | `/api/sessions/:id` | Delete a session |
| POST | `/api/quick` | Quick capability detection |
| GET | `/health` | Health check |

Example API call:

```bash
curl -X POST http://localhost:3000/api/analyze \
  -H "Content-Type: application/json" \
  -d @examples/sample-use-case.json
```

With explicit model:

```bash
curl -X POST http://localhost:3000/api/analyze \
  -H "Content-Type: application/json" \
  -d '{
    "model": "gemini-3-flash-preview",
    "input": {
      "customer_name": "Acme Corp",
      "contract_start_date": "01/01/2025",
      "terms_months": 12,
      "transaction_currency": "USD",
      "billing_period": "Monthly",
      "is_allocations": false,
      "use_case_description": "..."
    }
  }'
```

#### WebSocket

Connect to `ws://localhost:3000/ws` for streaming responses:

```javascript
const ws = new WebSocket('ws://localhost:3000/ws');

// Analyze use case
ws.send(JSON.stringify({
  type: 'analyze',
  input: {
    customer_name: 'Acme Corp',
    contract_start_date: '01/01/2025',
    // ... rest of input
  }
}));

// Follow-up question
ws.send(JSON.stringify({
  type: 'follow-up',
  session_id: 'session-uuid',
  query: 'Why did you choose Invoice Ratable for the usage charge?'
}));
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
│   ├── utils/                # Utilities
│   ├── cli/                  # CLI interface
│   └── api/                  # HTTP API server
├── docs/
│   └── Golden Use Cases/     # Reference data
├── examples/                 # Example inputs
├── tests/                    # Test files
└── README.md
```

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
