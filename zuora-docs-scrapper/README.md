# Zuora Documentation Scraper

Scrapes all documentation pages from docs.zuora.com and converts them to clean, well-formatted Markdown files.

## Overview

- **Total pages**: ~4,482 across 3 products
- **Output format**: Markdown with YAML frontmatter
- **Rate limiting**: 100ms delay between requests (~7.5 hours for full scrape)
- **Incremental updates**: Only re-scrapes pages that have been modified since last scrape (using sitemap `lastmod`)

## Quick Start

```bash
# Install dependencies
npm install

# Test with 5 pages
npm run test

# Scrape all documentation
npm run scrape

# Scrape a specific product
npm run scrape:billing
npm run scrape:platform
npm run scrape:revenue
```

## Output Structure

```
output/
├── zuora-billing/           # 1,949 pages
│   ├── overview_zuora-billing-overview.md
│   ├── set-up-zuora-billing_zuora-billing-setup.md
│   └── ...
├── zuora-platform/          # 1,999 pages
│   └── ...
└── zuora-revenue/           # 534 pages
    └── ...

logs/
├── progress.json            # Current scrape progress
└── failed.json              # Failed URLs with error messages
```

## Markdown Format

Each file includes YAML frontmatter:

```yaml
---
title: "Accounting codes"
url: "https://docs.zuora.com/en/zuora-billing/.../accounting-codes"
product: "zuora-billing"
scraped_at: "2025-12-24T04:05:14.233Z"
breadcrumbs:
  - "Set up Zuora Billing"
  - "Build Product and Prices"
---

# Accounting codes

The accounting code in your product rate plan...
```

## CLI Options

```bash
# Normal scrape (incremental - only new/updated pages)
npm run scrape

# Force re-scrape all pages (ignores lastmod)
npm run scrape:force

# Scrape only one product
npm run scrape:billing
npm run scrape:platform
npm run scrape:revenue

# Test mode (5 pages only)
npm run test
```

## Incremental Scraping

The scraper uses the `lastmod` attribute from sitemaps to determine which pages need updating:

```
🔍 Checking for updated pages (use --force to re-scrape all)...
   📊 Total in sitemaps: 1949
   🆕 New pages:         0
   🔄 Updated pages:     12
   ⏭️  Unchanged:         1937
   📝 To scrape:         12
```

- **New pages**: Not in output directory yet
- **Updated pages**: `lastmod` > `scraped_at` in frontmatter
- **Unchanged**: Already scraped and no updates since

Use `--force` to bypass this check and re-scrape everything.

## How It Works

1. **Sitemap Parser** (`src/sitemap-parser.ts`)
   - Fetches XML sitemaps from docs.zuora.com
   - Extracts all documentation URLs

2. **Page Scraper** (`src/page-scraper.ts`)
   - Uses Puppeteer (headless Chrome) for JS-rendered pages
   - Extracts title, breadcrumbs, and main content
   - Retries failed pages up to 3 times

3. **Markdown Converter** (`src/markdown-converter.ts`)
   - Converts HTML to clean Markdown using Turndown
   - Handles tables, code blocks, and lists
   - Generates YAML frontmatter

4. **File Writer** (`src/file-writer.ts`)
   - Organizes output by product area
   - Tracks progress for resumable scrapes
   - Logs failed URLs for review

## Configuration

Edit `src/index.ts` to change:

```typescript
const DELAY_MS = 100; // Delay between requests (ms)
```

Edit `src/page-scraper.ts` to change:

```typescript
const MAX_RETRIES = 3;      // Retry attempts per page
const PAGE_TIMEOUT = 30000; // Page load timeout (ms)
```

## Q&A Dataset Generation

Generate instruction/response pairs from the scraped documentation for fine-tuning or evaluation.

```bash
# Test with 5 documents
npm run qa:test

# Generate Q&A for all products (~4,500 docs, ~1-2 hours)
npm run qa:generate

# Generate for a specific product
npm run qa:generate:billing
npm run qa:generate:platform
npm run qa:generate:revenue

# Resume interrupted generation
npm run qa:resume
```

### Output Format

```
qa-dataset/
├── zuora-billing.jsonl     # Billing Q&A pairs
├── zuora-platform.jsonl    # Platform Q&A pairs
├── zuora-revenue.jsonl     # Revenue Q&A pairs
└── combined.jsonl          # All products merged
```

Each line is a JSON object:
```json
{"instruction": "What is a bill run?", "response": "A bill run is...", "source": "zuora-billing/bill-runs.md", "product": "zuora-billing", "category": "definitional"}
```

### Q&A Categories

- **definitional**: "What is [concept]?"
- **procedural**: "How do I [task]?"
- **troubleshooting**: "Why might [issue] occur?"
- **comparison**: "What's the difference between [A] and [B]?"
- **example**: "Can you give an example of [scenario]?"

### Cost Estimate

Using GPT-4o-mini: ~$5-15 for full dataset (~18,000 Q&A pairs)

## Troubleshooting

**Scrape fails with timeout errors:**
- Increase `PAGE_TIMEOUT` in `page-scraper.ts`
- Increase `DELAY_MS` in `index.ts`

**Missing content:**
- Check `logs/failed.json` for failed URLs
- Re-run with `--resume` to retry failed pages

**Puppeteer installation issues:**
```bash
# On macOS, you may need:
npm install puppeteer --ignore-scripts
npx puppeteer browsers install chrome
```
