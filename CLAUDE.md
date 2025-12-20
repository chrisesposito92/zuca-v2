# ZUCA v2 - Zuora Use Case Architect

## Documentation Guidelines

MAKE SURE YOU ARE UPDATING ALL RELEVANT DOCS AS YOU BUILD OUT NEW FEATURES, FIX BUGS, AND MAKE CHANGES. THIS INCLUDES README.md, CLAUDE.md, any roadmap or feature markdown files, etc.
WHEN PLANNING NEW FEATURES OUT YOU SHOULD BE DOCUMENTING THEM IN NEW MD FILES AND MAINTAINING A ROADMAP OF SORTS

## Key Documentation Files

| File | Purpose |
|------|---------|
| `docs/ARCHITECTURE.md` | Overall system design, pipeline steps, technology stack |
| `docs/ROADMAP-ZB-API-INTEGRATION.md` | Future plan for direct Zuora Billing API integration |
| `docs/ZUORA-MCP-README.md` | Zuora MCP tool documentation |
| `src/llm/prompts/*.md` | System prompts for each pipeline step |

## Project Structure

```
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
│   ├── client.ts         # OpenAI Responses API client
│   └── prompts/          # System prompts (markdown)
│       ├── *.md          # Main ZUCA prompts
│       └── uc-*.md       # UC Generator prompts
├── cli/
│   └── index.ts          # CLI commands (analyze, generate, etc.)
├── api/
│   └── server.ts         # REST API endpoints
└── data/
    └── loader.ts         # Golden Use Case loader
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