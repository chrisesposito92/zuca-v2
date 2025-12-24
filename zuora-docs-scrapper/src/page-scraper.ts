import puppeteer, { Browser, Page } from 'puppeteer';
import * as cheerio from 'cheerio';
import { SitemapEntry, ScrapedPage, ScrapeResult } from './types.js';

const MAX_RETRIES = 3;
const RETRY_DELAY = 1000;
const PAGE_TIMEOUT = 30000;

export class PageScraper {
  private browser: Browser | null = null;
  private page: Page | null = null;

  async init(): Promise<void> {
    console.log('🚀 Launching browser...');
    this.browser = await puppeteer.launch({
      headless: true,
      args: [
        '--no-sandbox',
        '--disable-setuid-sandbox',
        '--disable-dev-shm-usage',
        '--disable-gpu',
      ],
    });
    this.page = await this.browser.newPage();

    // Set a realistic user agent
    await this.page.setUserAgent(
      'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
    );

    // Block unnecessary resources for faster loading
    await this.page.setRequestInterception(true);
    this.page.on('request', (request) => {
      const resourceType = request.resourceType();
      if (['image', 'stylesheet', 'font', 'media'].includes(resourceType)) {
        request.abort();
      } else {
        request.continue();
      }
    });

    console.log('✅ Browser ready');
  }

  async close(): Promise<void> {
    if (this.browser) {
      await this.browser.close();
      this.browser = null;
      this.page = null;
    }
  }

  async scrapePage(entry: SitemapEntry): Promise<ScrapeResult> {
    if (!this.page) {
      throw new Error('Browser not initialized. Call init() first.');
    }

    let lastError: Error | null = null;

    for (let attempt = 1; attempt <= MAX_RETRIES; attempt++) {
      try {
        // Navigate to the page
        await this.page.goto(entry.url, {
          waitUntil: 'networkidle2',
          timeout: PAGE_TIMEOUT,
        });

        // Wait for main content to load
        await this.page.waitForSelector('article, main, .content, [role="main"]', {
          timeout: 10000,
        }).catch(() => {
          // Content selector not found, continue anyway
        });

        // Get the page HTML
        const html = await this.page.content();

        // Parse and extract content
        const page = this.extractContent(html, entry);

        if (!page.title || !page.content) {
          throw new Error('Failed to extract content - empty title or content');
        }

        return { success: true, page };
      } catch (error) {
        lastError = error as Error;
        console.log(`   ⚠️  Attempt ${attempt}/${MAX_RETRIES} failed: ${lastError.message}`);

        if (attempt < MAX_RETRIES) {
          await this.delay(RETRY_DELAY * attempt);
        }
      }
    }

    return {
      success: false,
      error: lastError?.message || 'Unknown error',
    };
  }

  private extractContent(html: string, entry: SitemapEntry): ScrapedPage {
    const $ = cheerio.load(html);

    // Extract breadcrumbs BEFORE removing nav elements
    const breadcrumbs: string[] = [];
    $('nav[aria-label*="breadcrumb"] a, .breadcrumb a, .breadcrumbs a').each((_, el) => {
      const text = $(el).text().trim();
      if (text && text !== 'Home') {
        breadcrumbs.push(text);
      }
    });

    // Remove unwanted elements
    $('script, style, nav, header, footer, .sidebar, .navigation, .toc, .table-of-contents').remove();
    $('[class*="sidebar"], [class*="nav-"], [class*="menu"]').remove();
    $('[data-testid*="nav"], [data-testid*="sidebar"]').remove();

    // Extract main content FIRST
    let contentHtml = '';
    let $contentEl: cheerio.Cheerio<cheerio.Element> | null = null;
    const contentSelectors = [
      'article',
      'main article',
      '[role="main"]',
      'main',
      '.content',
      '.documentation-content',
      '.article-content',
      '.page-content',
    ];

    for (const selector of contentSelectors) {
      const el = $(selector).first();
      if (el.length) {
        $contentEl = el;
        contentHtml = el.html() || '';
        break;
      }
    }

    // Fallback to body if no content found
    if (!contentHtml) {
      $contentEl = $('body');
      contentHtml = $('body').html() || '';
    }

    // Extract title from WITHIN the content area only
    let title = '';
    if ($contentEl) {
      const titleSelectors = [
        'h1:first',
        '.page-title',
        '.article-title',
      ];

      for (const selector of titleSelectors) {
        const el = $contentEl.find(selector).first();
        if (el.length && el.text().trim()) {
          title = el.text().trim();
          break;
        }
      }

      // Fallback: try any h1 in content
      if (!title) {
        const h1 = $contentEl.find('h1').first();
        if (h1.length) {
          title = h1.text().trim();
        }
      }
    }

    // Final fallback: use URL slug as title
    if (!title) {
      const urlPath = new URL(entry.url).pathname;
      const lastSegment = urlPath.split('/').filter(Boolean).pop() || 'untitled';
      title = lastSegment.replace(/-/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase());
    }

    return {
      url: entry.url,
      title,
      product: entry.product,
      breadcrumbs,
      content: contentHtml,
      scrapedAt: new Date().toISOString(),
    };
  }

  private delay(ms: number): Promise<void> {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }
}
