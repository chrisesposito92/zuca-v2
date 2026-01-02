# Zuora Documentation Scraper

Scrapes all documentation pages from Zuora's documentation sites and converts them to clean, well-formatted Markdown files.

## Supported Documentation Sites

| Site | Product | Pages | Content |
|------|---------|-------|---------|
| docs.zuora.com | zuora-billing | ~1,949 | Billing concepts, workflows, configuration |
| docs.zuora.com | zuora-platform | ~2,001 | Platform features, integrations |
| docs.zuora.com | zuora-revenue | ~536 | Revenue recognition |
| developer.zuora.com | zuora-developer | ~1,627 | API reference, SDKs, tutorials |

**Total**: ~6,100+ pages

## Overview

- **Output format**: Markdown with YAML frontmatter
- **Rate limiting**: 100ms delay between requests
- **Incremental updates**: Only re-scrapes pages modified since last scrape (using sitemap `lastmod`)
- **URL filtering**: Excludes blogs and SDK changelogs from developer docs

## Quick Start

```bash
# Install dependencies
npm install

# Test with 5 pages
npm run test

# Scrape all documentation (all sites)
npm run scrape

# Scrape a specific product
npm run scrape:billing
npm run scrape:platform
npm run scrape:revenue
npm run scrape:developer

# Test developer docs only (5 pages)
npm run test:developer
```

## Output Structure

```
output/
├── zuora-billing/           # ~1,949 pages
│   ├── overview_zuora-billing-overview.md
│   ├── set-up-zuora-billing_zuora-billing-setup.md
│   └── ...
├── zuora-platform/          # ~2,001 pages
│   └── ...
├── zuora-revenue/           # ~536 pages
│   └── ...
└── zuora-developer/         # ~1,627 pages
    ├── v1-api-reference_api_operation_post-account.md
    ├── docs_get-started_introduction.md
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

# Scrape specific products
npm run scrape:billing      # docs.zuora.com billing
npm run scrape:platform     # docs.zuora.com platform
npm run scrape:revenue      # docs.zuora.com revenue
npm run scrape:developer    # developer.zuora.com

# Test mode (5 pages only)
npm run test
npm run test:developer
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

## Developer Docs Filtering

For developer.zuora.com, certain URL patterns are automatically excluded:

| Pattern | Reason |
|---------|--------|
| `/blog*` | Blog posts - not technical documentation |
| `/sdk-changelogs/*` | Version-specific release notes |

This reduces the corpus from ~1,628 to ~1,627 pages, focusing on core technical content.

## How It Works

1. **Sitemap Parser** (`src/sitemap-parser.ts`)
   - Fetches XML sitemaps from both documentation sites
   - Extracts all documentation URLs
   - Applies URL filtering for developer docs

2. **Page Scraper** (`src/page-scraper.ts`)
   - Uses Puppeteer (headless Chrome) for JS-rendered pages
   - Detects source domain and applies appropriate extraction strategy:
     - `docs.zuora.com`: Standard semantic HTML selectors
     - `developer.zuora.com`: Styled-components based selectors
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

Edit `src/sitemap-parser.ts` to change URL filtering:

```typescript
const EXCLUDED_URL_PATTERNS = [
  '/blog',            // Blog index and posts
  '/sdk-changelogs/', // Version-specific changelogs
];
```

## Q&A Dataset Generation

Generate instruction/response pairs from the scraped documentation for fine-tuning or evaluation.

```bash
# Test with 5 documents
npm run qa:test

# Generate Q&A for all products (~6,100 docs, ~2-3 hours)
npm run qa:generate

# Generate for a specific product
npm run qa:generate:billing
npm run qa:generate:platform
npm run qa:generate:revenue
npm run qa:generate:developer

# Resume interrupted generation
npm run qa:resume
```

### Output Format

```
qa-dataset/
├── zuora-billing.jsonl     # Billing Q&A pairs
├── zuora-platform.jsonl    # Platform Q&A pairs
├── zuora-revenue.jsonl     # Revenue Q&A pairs
├── zuora-developer.jsonl   # Developer/API Q&A pairs
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

Using GPT-4o-mini: ~$10-20 for full dataset (~24,000+ Q&A pairs)

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

**Developer docs extraction issues:**
- The styled-components class names may change over time
- Check `src/page-scraper.ts` `extractDeveloperContent()` for selectors
- Test with `npm run test:developer` to verify extraction
