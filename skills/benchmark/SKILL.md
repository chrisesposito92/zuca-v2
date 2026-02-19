---
name: benchmark
description: Run comparative benchmarks across ZUCA LLM models (generate/analyze pipelines), capture timings and quality metrics, and produce benchmark reports. Use when a user asks to benchmark models, compare performance/quality across gpt-5.2, gemini-3.1-pro-preview, gemini-3-flash-preview, or wants a benchmark report.
---

# Benchmark

## Overview
Run repeatable model benchmarks for the ZUCA CLI pipelines and append structured results to `.claude/benchmark-results.json`, then summarize as a markdown report when requested.

## Workflow

### 1) Prepare run workspace
Create a timestamped run directory for artifacts.

```bash
TIMESTAMP=$(date +%Y%m%d_%H%M%S)
mkdir -p /tmp/benchmark-$TIMESTAMP/{generate,analyze}
```

### 2) Run UC Generator (all models)
Run sequentially to get accurate wall-clock timing. Capture stdout/stderr for later parsing.

```bash
# Models: gpt-5.2, gemini-3.1-pro-preview, gemini-3-flash-preview
for model in gpt-5.2 gemini-3.1-pro-preview gemini-3-flash-preview; do
  time npm run cli -- generate "[customer]" -c 2 -m "$model" -o "/tmp/benchmark-$TIMESTAMP/generate/$model.json" --local 2>&1 | tee "/tmp/benchmark-$TIMESTAMP/generate/$model.log"
done
```

### 3) Create analyze input from UC2
Use UC2 (the more complex use case) from any model’s generate output.
Transform fields to analyze input format:
- `use_case` → `use_case_description`
- `rev_rec_notes` array → single string (join with newlines)

Save to `/tmp/benchmark-$TIMESTAMP/analyze/input.json`.

### 4) Run Analyze (all models)
Run sequentially to get accurate wall-clock timing.

```bash
for model in gpt-5.2 gemini-3.1-pro-preview gemini-3-flash-preview; do
  time npm run cli -- analyze "/tmp/benchmark-$TIMESTAMP/analyze/input.json" -m "$model" -o "/tmp/benchmark-$TIMESTAMP/analyze/$model.json" 2>&1 | tee "/tmp/benchmark-$TIMESTAMP/analyze/$model.log"
done
```

### 5) Extract metrics and append results
From logs and outputs, extract:
- Total runtime (from `time` output)
- Step timings (lines like `Completed step: X (Yms)`)
- Token usage (if present in DEBUG logs)
- Output quality indicators:
  - research completeness (high/medium/low)
  - charges designed
  - POB mappings
  - billing rows
  - waterfall rows
  - validation warnings

Append a new entry to `.claude/benchmark-results.json` at the repo root.

### 6) Generate report (optional)
When a report is requested (or after a run):
- Load `.claude/benchmark-results.json`
- Compute aggregates across all runs
- Output a markdown report with speed tables, quality metrics, recommendations, and trends

## Flags & Modes
- **Analyze-only**: Skip UC Generator and only run Analyze with a prepared input
- **Report-only**: Skip runs and produce a report from historical results

## Results Schema
```json
{
  "runs": [
    {
      "id": "20241223_143000",
      "timestamp": "2024-12-23T14:30:00Z",
      "customer": "Notion",
      "generate": {
        "gpt-5.2": {
          "total_ms": 124000,
          "steps": { "research_customer": 80000, "generate_use_cases": 44000 },
          "research_completeness": "medium",
          "use_cases_generated": 2,
          "tokens": { "prompt": 56000, "completion": 5000 }
        }
      },
      "analyze": {
        "gpt-5.2": {
          "total_ms": 550000,
          "steps": {
            "analyze_contract": 33000,
            "design_subscription": 116000,
            "billings": 84000,
            "contracts_orders": 159000,
            "revrec_waterfall": 121000,
            "summary": 37000
          },
          "charges_designed": 5,
          "pob_mappings": 5,
          "billing_rows": 40,
          "waterfall_rows": 73,
          "validation_warnings": 0
        }
      }
    }
  ]
}
```

## Notes
- Use `--local` for UC Generator to skip the LLM formatting step.
- Analyze pipeline runs some steps in parallel; use step timings from logs for granularity.
- Results file can be reset by deleting `.claude/benchmark-results.json`.
