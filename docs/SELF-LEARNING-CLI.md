# Self-Learning CLI Reference

Complete reference for all self-learning CLI commands, options, and workflows.

## Table of Contents

1. [Overview](#overview)
2. [Quick Start](#quick-start)
3. [Command Reference](#command-reference)
   - [evaluate](#evaluate)
   - [self-improve](#self-improve)
   - [corrections](#corrections)
   - [prompts](#prompts)
   - [training](#training)
   - [consolidate](#consolidate)
   - [testgen](#testgen)
4. [Workflows](#workflows)
5. [Configuration](#configuration)

---

## Overview

The self-learning system is an automated feedback loop that helps the pipeline learn from its mistakes:

```
┌─────────────────────────────────────────────────────────────────┐
│                    Self-Learning Pipeline                        │
├─────────────────────────────────────────────────────────────────┤
│  1. evaluate     Run test cases, judge outputs against criteria  │
│  2. corrections  Store what went wrong and how to fix it         │
│  3. injector     Inject corrections as few-shot examples         │
│  4. prompts      Suggest permanent prompt improvements           │
│  5. training     Export data for SLM fine-tuning                 │
│  6. testgen      Generate synthetic test cases from failures     │
└─────────────────────────────────────────────────────────────────┘
```

---

## Quick Start

```bash
# Run basic evaluation
npm run cli -- evaluate --suite golden-scenarios

# Run evaluation and generate corrections for failures
npm run cli -- evaluate --suite golden-scenarios --corrections

# Run full self-improvement loop
npm run cli -- self-improve --suite golden-scenarios --auto-suggest

# Generate synthetic tests from failures
npm run cli -- testgen from-failures billings -o generated-tests
```

---

## Command Reference

### evaluate

Run test cases through the pipeline and evaluate outputs against behavioral criteria.

```bash
npm run cli -- evaluate [options]
```

#### Options

| Option | Short | Description | Default |
|--------|-------|-------------|---------|
| `--suite <name>` | `-s` | Test suite to run | (lists available) |
| `--model <model>` | `-m` | LLM model for pipeline/evaluation | gpt-5.2 |
| `--step <step>` | | Only evaluate specific step | (all steps) |
| `--corrections` | | Generate corrections for failures | false |
| `--capture-training` | | Capture passing outputs as training data | false |
| `--ensemble` | | Use multi-judge ensemble evaluation | false |
| `--ensemble-models <list>` | | Comma-separated models for ensemble | (default 3) |

#### Examples

```bash
# Basic evaluation - shows available suites and criteria
npm run cli -- evaluate

# Run specific suite
npm run cli -- evaluate --suite golden-scenarios

# Use different model
npm run cli -- evaluate --suite golden-scenarios -m gemini-3-flash-preview

# Generate corrections for failures
npm run cli -- evaluate --suite golden-scenarios --corrections

# Capture passing outputs as training data
npm run cli -- evaluate --suite golden-scenarios --capture-training

# Evaluate only one step
npm run cli -- evaluate --suite golden-scenarios --step billings

# Use ensemble (multi-judge) evaluation for higher accuracy
npm run cli -- evaluate --suite golden-scenarios --ensemble

# Custom ensemble judges
npm run cli -- evaluate --suite golden-scenarios --ensemble --ensemble-models gpt-5.2,gemini-3-pro-preview
```

#### When to Use

- **Basic evaluation**: Quick check if outputs meet criteria
- **With `--corrections`**: When you want to build up the corrections database
- **With `--capture-training`**: When collecting examples for SLM fine-tuning
- **With `--ensemble`**: When accuracy is critical and you want consensus from multiple judges

---

### self-improve

Automated improvement loop that runs evaluation, generates corrections, analyzes patterns, and optionally suggests prompt improvements.

```bash
npm run cli -- self-improve [options]
```

#### Options

| Option | Short | Description | Default |
|--------|-------|-------------|---------|
| `--suite <name>` | `-s` | Test suite to run | golden-scenarios |
| `--iterations <n>` | `-i` | Number of improvement iterations | 1 |
| `--model <model>` | `-m` | LLM model for evaluation | gpt-5.2 |
| `--auto-suggest` | | Auto-generate prompt suggestions | false |
| `--capture-training` | | Capture passing outputs as training | false |
| `--ensemble` | | Use multi-judge ensemble evaluation | false |
| `--ensemble-models <list>` | | Comma-separated models for ensemble | (default 3) |

#### Examples

```bash
# Basic self-improvement (1 iteration)
npm run cli -- self-improve

# Use custom suite
npm run cli -- self-improve --suite real-world-scenarios

# Multiple iterations (stops early if all pass)
npm run cli -- self-improve -i 3

# Auto-generate prompt suggestions for top patterns
npm run cli -- self-improve --auto-suggest

# Collect training data while improving
npm run cli -- self-improve --capture-training

# Use ensemble for more accurate judging
npm run cli -- self-improve --ensemble

# Full featured run
npm run cli -- self-improve --suite golden-scenarios -i 2 --auto-suggest --capture-training --ensemble
```

#### When to Use

- **Basic run**: Daily improvement check
- **With `--auto-suggest`**: When you want automated prompt improvement ideas
- **With `--iterations`**: For deeper improvement (each iteration learns from previous)
- **With `--ensemble`**: When you need high-confidence judgments

#### Difference from `evaluate`

| Feature | evaluate | self-improve |
|---------|----------|--------------|
| Runs test suite | Yes | Yes |
| Generates corrections | Optional | Always |
| Analyzes patterns | No | Yes |
| Suggests improvements | No | Optional |
| Multiple iterations | No | Yes |
| Stops when passing | No | Yes |

---

### corrections

Manage the corrections database (learned failures and fixes).

```bash
npm run cli -- corrections <subcommand> [options]
```

#### Subcommands

##### list

List stored corrections.

```bash
npm run cli -- corrections list [--step <step>]
```

| Option | Description |
|--------|-------------|
| `--step <step>` | Filter by step name |

##### summary

Show correction statistics and top patterns.

```bash
npm run cli -- corrections summary [--step <step>]
```

| Option | Description |
|--------|-------------|
| `--step <step>` | Filter by step name |

##### cluster

Group similar corrections by semantic similarity.

```bash
npm run cli -- corrections cluster <stepName> [--threshold <n>]
```

| Option | Description | Default |
|--------|-------------|---------|
| `--threshold <n>` | Similarity threshold (0.0-1.0) | 0.85 |

#### Examples

```bash
# List all corrections
npm run cli -- corrections list

# List corrections for specific step
npm run cli -- corrections list --step billings

# Show summary with top patterns
npm run cli -- corrections summary

# Cluster similar corrections (finds duplicates)
npm run cli -- corrections cluster billings

# Use tighter similarity for clustering
npm run cli -- corrections cluster billings --threshold 0.9
```

#### When to Use

- **list**: Review what issues have been found
- **summary**: Get high-level view of problem areas
- **cluster**: Find duplicate patterns, reduce noise

---

### prompts

Manage prompt evolution - analyze patterns and generate/apply improvements.

```bash
npm run cli -- prompts <subcommand> [options]
```

#### Subcommands

##### analyze

Analyze correction patterns for potential prompt improvements.

```bash
npm run cli -- prompts analyze [--step <step>]
```

##### suggest

Generate a prompt improvement suggestion for a specific pattern.

```bash
npm run cli -- prompts suggest <step> "<pattern>" [-m <model>]
```

##### list

List pending prompt suggestions.

```bash
npm run cli -- prompts list
```

##### show

Show full details of a prompt suggestion.

```bash
npm run cli -- prompts show <id>
```

##### approve

Approve a suggestion for application.

```bash
npm run cli -- prompts approve <id>
```

##### reject

Reject a suggestion.

```bash
npm run cli -- prompts reject <id>
```

##### apply

Auto-apply an approved suggestion to its prompt file.

```bash
npm run cli -- prompts apply <id>
```

##### rollback

Rollback an applied suggestion using backup.

```bash
npm run cli -- prompts rollback <id> <backupPath>
```

##### backups

List prompt backups.

```bash
npm run cli -- prompts backups [stepName]
```

#### Examples

```bash
# Analyze patterns across all steps
npm run cli -- prompts analyze

# Analyze specific step
npm run cli -- prompts analyze --step contracts_orders

# Generate suggestion for a pattern
npm run cli -- prompts suggest billings "BL-006: billing-timing-accuracy"

# List pending suggestions
npm run cli -- prompts list

# View full suggestion details before approving
npm run cli -- prompts show abc123

# Approve and apply a suggestion
npm run cli -- prompts approve abc123
npm run cli -- prompts apply abc123

# Rollback if something went wrong
npm run cli -- prompts rollback abc123 "src/llm/prompts/build-billings.md.backup.1704067200000"

# View backups
npm run cli -- prompts backups
npm run cli -- prompts backups billings
```

#### Workflow

```
1. Run evaluation with --corrections
2. npm run cli -- prompts analyze
3. npm run cli -- prompts suggest <step> "<pattern>"
4. npm run cli -- prompts show <id>     # Review full suggestion details
5. npm run cli -- prompts approve <id>
6. npm run cli -- prompts apply <id>
7. Re-run evaluation to verify improvement
8. (Optional) npm run cli -- prompts rollback <id> <backup> if issues
```

---

### training

Manage training data for SLM (Small Language Model) fine-tuning.

```bash
npm run cli -- training <subcommand> [options]
```

#### Subcommands

##### stats

Show training data statistics.

```bash
npm run cli -- training stats
```

##### sync

Sync corrections (with example_fix) to training data.

```bash
npm run cli -- training sync
```

##### list

List training examples.

```bash
npm run cli -- training list [--step <step>] [--limit <n>]
```

##### export

Export training data to file.

```bash
npm run cli -- training export <output> [options]
```

| Option | Description | Default |
|--------|-------------|---------|
| `-f, --format <format>` | Output format: jsonl, json, huggingface | jsonl |
| `--step <step>` | Filter by step name | (all) |
| `--source <source>` | Filter by source: evaluation_pass, correction_fix | (all) |
| `--max-per-step <n>` | Max examples per step (for balancing) | (unlimited) |
| `--no-system-prompt` | Exclude system prompts | false |

#### Examples

```bash
# Show training data statistics
npm run cli -- training stats

# Sync corrections to training data
npm run cli -- training sync

# List training examples
npm run cli -- training list
npm run cli -- training list --step billings --limit 20

# Export to JSONL (OpenAI/HuggingFace format)
npm run cli -- training export data/zuora-training.jsonl

# Export in HuggingFace format
npm run cli -- training export data/zuora-training.jsonl --format huggingface

# Export balanced dataset (max 100 per step)
npm run cli -- training export data/balanced.jsonl --max-per-step 100

# Export only evaluation passes
npm run cli -- training export data/passes.jsonl --source evaluation_pass
```

#### When to Use

- **stats**: Check how much training data you have
- **sync**: Convert corrections with example_fix to training examples
- **export**: When ready to fine-tune an SLM

---

### consolidate

Consolidate multiple training data sources into a single JSONL file for fine-tuning. This is a standalone script (not part of the CLI) that combines various training sources.

```bash
npx tsx scripts/consolidate-training-data.ts [output-file] [options]
```

#### Options

| Option | Description | Default |
|--------|-------------|---------|
| `--only <sources>` | Only include these sources (comma-separated) | (all) |
| `--exclude <sources>` | Exclude these sources (comma-separated) | (none) |
| `--only-category <cats>` | Only include sources from these categories | (all) |
| `--exclude-category <cats>` | Exclude sources from these categories | (none) |
| `--stats` | Show statistics without consolidating | false |
| `--shuffle` | Randomize the order of training examples | false |
| `--with-metadata` | Include source/category in output records | false |

#### Available Sources

| Category | Source Name | Description |
|----------|-------------|-------------|
| `pipeline` | `pipeline-outputs` | Task-specific pipeline input→output pairs |
| `docs` | `zuora-billing` | Zuora Billing documentation Q&A |
| `docs` | `zuora-developer` | Zuora API/developer documentation Q&A |
| `docs` | `zuora-platform` | Zuora Platform documentation Q&A |
| `docs` | `zuora-revenue` | Zuora Revenue (rev rec) documentation Q&A |
| `internal` | `glean-qa` | Internal knowledge base Q&A |
| `internal` | `slack-data` | Slack conversation extracts |
| `internal` | `zendesk-data` | Support ticket extracts |
| `internal` | `tech-talks` | Tech talk transcript Q&A |
| `custom` | `pob-templates` | POB template selection Q&A |
| `custom` | `zuca-training` | Custom ZUCA usage Q&A |

#### Examples

```bash
# Show all source statistics
npx tsx scripts/consolidate-training-data.ts --stats

# Show stats for specific sources
npx tsx scripts/consolidate-training-data.ts --stats --only pipeline-outputs

# Pipeline outputs only (recommended for task-specific fine-tuning)
npx tsx scripts/consolidate-training-data.ts data/gpt-4.1-training.jsonl --only pipeline-outputs --shuffle

# Pipeline + revenue docs
npx tsx scripts/consolidate-training-data.ts data/training.jsonl --only pipeline-outputs,zuora-revenue --shuffle

# All sources except noisy internal data
npx tsx scripts/consolidate-training-data.ts data/training.jsonl --exclude slack-data,zendesk-data --shuffle

# Only pipeline category
npx tsx scripts/consolidate-training-data.ts data/training.jsonl --only-category pipeline --shuffle

# All docs, no internal
npx tsx scripts/consolidate-training-data.ts data/training.jsonl --only-category docs,pipeline --shuffle
```

#### When to Use

- **`--only pipeline-outputs`**: Task-specific fine-tuning (recommended starting point)
- **Adding `zuora-revenue`**: When model makes factual errors about rev rec concepts
- **`--exclude slack-data,zendesk-data`**: When you want docs but not noisy conversational data
- **`--stats`**: Before consolidating, to see what you're working with

#### Recommendations

1. **Start with pipeline-outputs only** - These are actual pipeline input→output pairs, perfectly matched to your task
2. **Avoid mixing task types** - General Q&A (docs) can dilute task-specific learning
3. **GPT-4.1 already knows Zuora** - You're teaching format/reasoning, not Zuora concepts
4. **Use `--shuffle`** - Always shuffle to prevent ordering bias in training

---

### testgen

Generate synthetic test cases from corrections and failure patterns.

```bash
npm run cli -- testgen <subcommand> [options]
```

#### Subcommands

##### from-failures

Generate tests from step failures.

```bash
npm run cli -- testgen from-failures <stepName> [options]
```

| Option | Description | Default |
|--------|-------------|---------|
| `-c, --count <n>` | Number of tests to generate | 3 |
| `-o, --output <suite>` | Write to test suite | (none) |
| `-a, --adversarial` | Generate adversarial edge cases | false |
| `-m, --model <model>` | LLM model for generation | gpt-5.2 |
| `--append` | Append to existing suite | false |

##### from-pattern

Generate tests from a specific failure pattern.

```bash
npm run cli -- testgen from-pattern "<pattern>" <stepName> [options]
```

| Option | Description | Default |
|--------|-------------|---------|
| `-c, --count <n>` | Number of tests to generate | 3 |
| `-o, --output <suite>` | Write to test suite | (none) |
| `-m, --model <model>` | LLM model for generation | gpt-5.2 |
| `--append` | Append to existing suite | false |

##### from-correction

Generate tests from a specific correction ID.

```bash
npm run cli -- testgen from-correction <correctionId> [options]
```

| Option | Description | Default |
|--------|-------------|---------|
| `-c, --count <n>` | Number of tests to generate | 3 |
| `-o, --output <suite>` | Write to test suite | (none) |
| `-m, --model <model>` | LLM model for generation | gpt-5.2 |
| `--append` | Append to existing suite | false |

##### stats

Show generated test statistics.

```bash
npm run cli -- testgen stats
```

##### list

List test suites with generated tests.

```bash
npm run cli -- testgen list
```

#### Examples

```bash
# Generate 3 tests from billings failures
npm run cli -- testgen from-failures billings

# Generate 5 tests and save to suite
npm run cli -- testgen from-failures billings -c 5 -o generated-billings

# Generate adversarial edge cases
npm run cli -- testgen from-failures billings -a -o edge-cases

# Append more tests to existing suite
npm run cli -- testgen from-failures billings -c 3 -o generated-billings --append

# Generate from specific pattern
npm run cli -- testgen from-pattern "step-up pricing" billings -o stepup-tests

# Generate from correction ID
npm run cli -- testgen from-correction abc123-def456 -o regression-tests

# View statistics
npm run cli -- testgen stats
npm run cli -- testgen list
```

#### When to Use

- **from-failures**: Expand test coverage for problem areas
- **with `-a` (adversarial)**: Stress-test with edge cases
- **from-pattern**: Target specific recurring issues
- **from-correction**: Regression tests for specific bugs

---

## Workflows

### Daily Improvement Cycle

```bash
# 1. Run self-improvement
npm run cli -- self-improve --auto-suggest

# 2. Review suggestions
npm run cli -- prompts list

# 3. Apply good suggestions
npm run cli -- prompts approve <id>
npm run cli -- prompts apply <id>

# 4. Verify improvement
npm run cli -- evaluate --suite golden-scenarios
```

### Building Training Data

```bash
# 1. Run evaluation with training capture
npm run cli -- evaluate --suite golden-scenarios --capture-training

# 2. Sync corrections to training
npm run cli -- training sync

# 3. Check stats
npm run cli -- training stats

# 4. Export for fine-tuning
npm run cli -- training export data/zuora-training.jsonl
```

### Consolidating Training Sources for Fine-Tuning

Use `scripts/consolidate-training-data.ts` to combine multiple training sources into a single JSONL file for fine-tuning. This is separate from the `training export` command which exports from `pipeline-outputs.json` only.

```bash
# Show all available sources and their example counts
npx tsx scripts/consolidate-training-data.ts --stats

# Pipeline outputs only (recommended for task-specific fine-tuning)
npx tsx scripts/consolidate-training-data.ts data/gpt-4.1-training.jsonl --only pipeline-outputs --shuffle

# Pipeline + revenue docs (if model needs Zuora concepts)
npx tsx scripts/consolidate-training-data.ts data/training.jsonl --only pipeline-outputs,zuora-revenue --shuffle

# All docs except noisy internal sources
npx tsx scripts/consolidate-training-data.ts data/training.jsonl --exclude slack-data,zendesk-data --shuffle

# Only pipeline category
npx tsx scripts/consolidate-training-data.ts data/training.jsonl --only-category pipeline --shuffle

# Check filtered stats before consolidating
npx tsx scripts/consolidate-training-data.ts --stats --only pipeline-outputs
```

**Available Sources:**
| Category | Sources | Description |
|----------|---------|-------------|
| `pipeline` | `pipeline-outputs` | Task-specific input→output pairs (recommended) |
| `docs` | `zuora-billing`, `zuora-developer`, `zuora-platform`, `zuora-revenue` | Zuora documentation Q&A |
| `internal` | `glean-qa`, `slack-data`, `zendesk-data`, `tech-talks` | Internal knowledge (may be noisy) |
| `custom` | `pob-templates`, `zuca-training` | Custom ZUCA-specific training |

**Recommendations:**
- **Task-specific fine-tuning**: Start with `--only pipeline-outputs` (3K+ examples)
- **If model makes factual errors**: Add `zuora-revenue` for rev rec concepts
- **Avoid**: `slack-data`, `zendesk-data` unless you need conversational style

### Expanding Test Coverage

```bash
# 1. Run evaluation to find failures
npm run cli -- evaluate --suite golden-scenarios --corrections

# 2. Analyze patterns
npm run cli -- prompts analyze

# 3. Generate tests from top failures
npm run cli -- testgen from-failures billings -c 10 -o expanded-tests

# 4. Run new tests
npm run cli -- evaluate --suite expanded-tests --corrections
```

### High-Confidence Evaluation

```bash
# Use ensemble (3 judges) for critical evaluation
npm run cli -- evaluate --suite golden-scenarios --ensemble

# Custom judges for specific needs
npm run cli -- evaluate --suite golden-scenarios --ensemble --ensemble-models gpt-5.2,gemini-3-pro-preview

# Ensemble in self-improve loop
npm run cli -- self-improve --ensemble --auto-suggest
```

---

## Configuration

### Environment Variables

```bash
# Use Postgres backend for corrections (default: JSON file)
POSTGRES_URL=postgresql://...
USE_POSTGRES_CORRECTIONS=true

# Use Postgres backend for suggestions
USE_POSTGRES_SUGGESTIONS=true

# Disable embeddings for corrections (faster, keyword-only search)
USE_CORRECTIONS_EMBEDDINGS=false
```

### File Locations

| File/Directory | Purpose |
|----------------|---------|
| `data/test-suites/*.yaml` | Test case definitions |
| `data/evaluation-criteria/*.yaml` | Behavioral criteria |
| `data/corrections.json` | Stored corrections (JSON backend) |
| `data/training-data.json` | Training examples |
| `data/prompt-suggestions.json` | Prompt suggestions (JSON backend) |

### Available Models

```
gpt-5.2                  # OpenAI GPT-5.2 (recommended)
gemini-3-pro-preview     # Google Gemini 3 Pro
gemini-3-flash-preview   # Google Gemini 3 Flash (fastest)
```

### Available Steps

```
analyze_contract      # Contract intelligence extraction
design_subscription   # Subscription design
contracts_orders      # Contracts/orders table
billings              # Billing schedule
revrec_waterfall      # Revenue recognition waterfall
summarize             # Solution summary
```

---

## Tips

1. **Start simple**: Run `evaluate` first to see what's failing
2. **Build up corrections**: Use `--corrections` flag consistently
3. **Use ensemble for accuracy**: When results matter, use `--ensemble`
4. **Generate tests from failures**: Expand coverage with `testgen`
5. **Review before applying**: Always review prompt suggestions before `apply`
6. **Keep backups**: The system auto-backs up, but check with `prompts backups`
7. **Export training regularly**: Build up training data for SLM fine-tuning
