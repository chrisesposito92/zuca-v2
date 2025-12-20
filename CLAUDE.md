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
│   └── golden-use-cases.ts
├── pipeline/
│   ├── orchestrator.ts   # Main pipeline runner
│   └── steps/            # Individual pipeline steps
├── llm/
│   ├── client.ts         # OpenAI Responses API client
│   └── prompts/          # System prompts (markdown)
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