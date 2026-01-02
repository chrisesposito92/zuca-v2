import fs from 'fs/promises';
import path from 'path';
import crypto from 'crypto';
import { ScrapedPage, ScrapeProgress, ProductType } from './types.js';
import { MarkdownConverter } from './markdown-converter.js';

// All product types for directory creation and scanning
const ALL_PRODUCTS: ProductType[] = [
  'zuora-billing',
  'zuora-platform',
  'zuora-revenue',
  'zuora-developer',
];

const OUTPUT_DIR = path.join(process.cwd(), 'output');
const LOGS_DIR = path.join(process.cwd(), 'logs');
const PROGRESS_FILE = path.join(LOGS_DIR, 'progress.json');
const FAILED_FILE = path.join(LOGS_DIR, 'failed.json');

// macOS has 255 byte filename limit, leave room for .md extension and hash
const MAX_FILENAME_LENGTH = 200;

export class FileWriter {
  private converter: MarkdownConverter;

  constructor() {
    this.converter = new MarkdownConverter();
  }

  async init(): Promise<void> {
    // Create output directories for each product
    for (const product of ALL_PRODUCTS) {
      await fs.mkdir(path.join(OUTPUT_DIR, product), { recursive: true });
    }
    await fs.mkdir(LOGS_DIR, { recursive: true });
  }

  generateFilename(url: string): string {
    const parsedUrl = new URL(url);
    const urlPath = parsedUrl.pathname;
    const segments = urlPath.split('/').filter(Boolean);

    // Check if this is a developer.zuora.com URL
    const isDeveloperDocs = parsedUrl.hostname === 'developer.zuora.com';

    let relevantSegments: string[];

    if (isDeveloperDocs) {
      // developer.zuora.com URLs don't have /en/product/ prefix
      // e.g., /v1-api-reference/api/operation/POST_Account
      // Use all segments for the filename
      relevantSegments = segments;
    } else {
      // docs.zuora.com URLs have /en/product/ prefix
      // e.g., /en/zuora-billing/overview/zuora-billing-overview
      // Skip 'en' and product (first 2 segments)
      relevantSegments = segments.slice(2);
    }

    if (relevantSegments.length === 0) {
      return 'index.md';
    }

    // Join with underscores for flat structure in each product folder
    let filename = relevantSegments.join('_') + '.md';

    // Sanitize filename
    filename = filename
      .toLowerCase()
      .replace(/[^a-z0-9_\-.]/g, '-')
      .replace(/-+/g, '-');

    // Handle filenames that are too long (macOS 255 byte limit)
    if (filename.length > MAX_FILENAME_LENGTH) {
      // Create a short hash from the full URL for uniqueness
      const hash = crypto.createHash('md5').update(url).digest('hex').slice(0, 8);

      // Truncate and append hash
      // Leave room for: _[8-char-hash].md = 13 chars
      const truncateAt = MAX_FILENAME_LENGTH - 13;
      const truncated = filename.slice(0, truncateAt).replace(/_$/, ''); // Remove trailing underscore
      filename = `${truncated}_${hash}.md`;
    }

    return filename;
  }

  async savePage(page: ScrapedPage): Promise<string> {
    const filename = this.generateFilename(page.url);
    const filepath = path.join(OUTPUT_DIR, page.product, filename);

    const markdown = this.converter.convert(page);

    await fs.writeFile(filepath, markdown, 'utf-8');

    return filepath;
  }

  async saveProgress(progress: ScrapeProgress): Promise<void> {
    await fs.writeFile(PROGRESS_FILE, JSON.stringify(progress, null, 2), 'utf-8');
  }

  async loadProgress(): Promise<ScrapeProgress | null> {
    try {
      const data = await fs.readFile(PROGRESS_FILE, 'utf-8');
      return JSON.parse(data);
    } catch {
      return null;
    }
  }

  async logFailed(url: string, error: string): Promise<void> {
    let failed: Array<{ url: string; error: string; timestamp: string }> = [];

    try {
      const data = await fs.readFile(FAILED_FILE, 'utf-8');
      failed = JSON.parse(data);
    } catch {
      // File doesn't exist yet
    }

    failed.push({
      url,
      error,
      timestamp: new Date().toISOString(),
    });

    await fs.writeFile(FAILED_FILE, JSON.stringify(failed, null, 2), 'utf-8');
  }

  async getCompletedUrls(): Promise<Set<string>> {
    const completed = new Set<string>();

    for (const product of ALL_PRODUCTS) {
      const productDir = path.join(OUTPUT_DIR, product);

      try {
        const files = await fs.readdir(productDir);

        for (const file of files) {
          if (!file.endsWith('.md')) continue;

          const filepath = path.join(productDir, file);
          const content = await fs.readFile(filepath, 'utf-8');

          // Extract URL from frontmatter
          const urlMatch = content.match(/^url:\s*"([^"]+)"/m);
          if (urlMatch) {
            completed.add(urlMatch[1]);
          }
        }
      } catch {
        // Directory doesn't exist yet
      }
    }

    return completed;
  }

  /**
   * Get a map of URL -> scraped_at date for all scraped pages
   * Used for incremental scraping based on lastmod dates
   */
  async getScrapedDates(): Promise<Map<string, Date>> {
    const scrapedDates = new Map<string, Date>();

    for (const product of ALL_PRODUCTS) {
      const productDir = path.join(OUTPUT_DIR, product);

      try {
        const files = await fs.readdir(productDir);

        for (const file of files) {
          if (!file.endsWith('.md')) continue;

          const filepath = path.join(productDir, file);
          const content = await fs.readFile(filepath, 'utf-8');

          // Extract URL and scraped_at from frontmatter
          const urlMatch = content.match(/^url:\s*"([^"]+)"/m);
          const scrapedAtMatch = content.match(/^scraped_at:\s*"([^"]+)"/m);

          if (urlMatch && scrapedAtMatch) {
            const url = urlMatch[1];
            const scrapedAt = new Date(scrapedAtMatch[1]);
            if (!isNaN(scrapedAt.getTime())) {
              scrapedDates.set(url, scrapedAt);
            }
          }
        }
      } catch {
        // Directory doesn't exist yet
      }
    }

    return scrapedDates;
  }
}
