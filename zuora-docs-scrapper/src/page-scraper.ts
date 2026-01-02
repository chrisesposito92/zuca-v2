import puppeteer, { Browser, Page } from 'puppeteer';
import * as cheerio from 'cheerio';
import { SitemapEntry, ScrapedPage, ScrapeResult } from './types.js';

const MAX_RETRIES = 3;
const RETRY_DELAY = 1000;
const PAGE_TIMEOUT = 30000;
const PAGE_POOL_SIZE = 10; // Number of parallel pages to maintain

export class PageScraper {
  private browser: Browser | null = null;
  private pagePool: Page[] = [];
  private availablePages: Page[] = [];

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

    // Create a pool of pages for parallel scraping
    console.log(`   Creating ${PAGE_POOL_SIZE} browser tabs for parallel scraping...`);
    for (let i = 0; i < PAGE_POOL_SIZE; i++) {
      const page = await this.createConfiguredPage();
      this.pagePool.push(page);
      this.availablePages.push(page);
    }

    console.log('✅ Browser ready with page pool');
  }

  private async createConfiguredPage(): Promise<Page> {
    if (!this.browser) {
      throw new Error('Browser not initialized');
    }

    const page = await this.browser.newPage();

    // Set a realistic user agent
    await page.setUserAgent(
      'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
    );

    // Block unnecessary resources for faster loading
    await page.setRequestInterception(true);
    page.on('request', (request) => {
      const resourceType = request.resourceType();
      if (['image', 'stylesheet', 'font', 'media'].includes(resourceType)) {
        request.abort();
      } else {
        request.continue();
      }
    });

    return page;
  }

  private async acquirePage(): Promise<Page> {
    // Wait for an available page
    while (this.availablePages.length === 0) {
      await this.delay(50);
    }
    return this.availablePages.pop()!;
  }

  private releasePage(page: Page): void {
    this.availablePages.push(page);
  }

  async close(): Promise<void> {
    if (this.browser) {
      await this.browser.close();
      this.browser = null;
      this.pagePool = [];
      this.availablePages = [];
    }
  }

  async scrapePage(entry: SitemapEntry): Promise<ScrapeResult> {
    if (!this.browser) {
      throw new Error('Browser not initialized. Call init() first.');
    }

    const page = await this.acquirePage();
    let lastError: Error | null = null;

    try {
      for (let attempt = 1; attempt <= MAX_RETRIES; attempt++) {
        try {
          // Navigate to the page
          await page.goto(entry.url, {
            waitUntil: 'networkidle2',
            timeout: PAGE_TIMEOUT,
          });

          // Wait for main content to load
          await page.waitForSelector('article, main, .content, [role="main"]', {
            timeout: 10000,
          }).catch(() => {
            // Content selector not found, continue anyway
          });

          // Get the page HTML
          const html = await page.content();

          // Parse and extract content
          const scraped = this.extractContent(html, entry);

          if (!scraped.title || !scraped.content) {
            throw new Error('Failed to extract content - empty title or content');
          }

          return { success: true, page: scraped };
        } catch (error) {
          lastError = error as Error;

          if (attempt < MAX_RETRIES) {
            await this.delay(RETRY_DELAY * attempt);
          }
        }
      }

      return {
        success: false,
        error: lastError?.message || 'Unknown error',
      };
    } finally {
      this.releasePage(page);
    }
  }

  /**
   * Detect if URL is from developer.zuora.com (different extraction needed)
   */
  private isDeveloperDocs(url: string): boolean {
    return url.includes('developer.zuora.com');
  }

  /**
   * Main extraction router - delegates to source-specific methods
   */
  private extractContent(html: string, entry: SitemapEntry): ScrapedPage {
    if (this.isDeveloperDocs(entry.url)) {
      return this.extractDeveloperContent(html, entry);
    }
    return this.extractDocsContent(html, entry);
  }

  /**
   * Extract content from docs.zuora.com pages (original logic)
   */
  private extractDocsContent(html: string, entry: SitemapEntry): ScrapedPage {
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

  /**
   * Extract content from developer.zuora.com pages
   * Uses different selectors for styled-components based layout
   */
  private extractDeveloperContent(html: string, entry: SitemapEntry): ScrapedPage {
    const $ = cheerio.load(html);

    // Extract breadcrumbs - developer docs use different nav structure
    const breadcrumbs: string[] = [];
    // Try multiple breadcrumb selectors for developer docs
    $('[aria-label="breadcrumb"] a, nav.breadcrumb a, .breadcrumbs a').each((_, el) => {
      const text = $(el).text().trim();
      if (text && text !== 'Home' && text !== 'Developer') {
        breadcrumbs.push(text);
      }
    });

    // Remove unwanted elements (more aggressive for developer docs)
    $('script, style, noscript').remove();
    $('nav, header, footer').remove();
    $('[class*="Sidebar"], [class*="sidebar"]').remove();
    $('[class*="Navigation"], [class*="navigation"]').remove();
    $('[class*="TableOfContents"], [class*="toc"]').remove();
    $('[class*="Footer"], [class*="Header"]').remove();
    $('[data-testid*="nav"], [data-testid*="sidebar"]').remove();
    // Remove copy buttons from code blocks
    $('[class*="copy"], .gatsby-code-button-container').remove();

    // Developer docs content selectors (styled-components based)
    // These class names are generated but follow patterns
    let contentHtml = '';
    let $contentEl: cheerio.Cheerio<cheerio.Element> | null = null;
    const contentSelectors = [
      // Common styled-component patterns for main content
      '[class*="ContentWrapper"]',
      '[class*="MarkdownContent"]',
      '[class*="DocContent"]',
      '[class*="MainContent"]',
      // Standard semantic elements
      'article',
      'main article',
      '[role="main"]',
      'main',
      // Fallback class patterns
      '[class*="content"]',
      '[class*="markdown"]',
    ];

    for (const selector of contentSelectors) {
      const el = $(selector).first();
      if (el.length) {
        // Check if this element has substantial content
        const text = el.text().trim();
        if (text.length > 100) { // Minimum content threshold
          $contentEl = el;
          contentHtml = el.html() || '';
          break;
        }
      }
    }

    // Fallback to body if no content found
    if (!contentHtml) {
      $contentEl = $('body');
      contentHtml = $('body').html() || '';
    }

    // Extract title - developer docs often have different title structures
    let title = '';
    if ($contentEl) {
      // Try specific title selectors first
      const titleSelectors = [
        'h1:first',
        '[class*="Title"] h1',
        '[class*="PageTitle"]',
        '.page-title',
      ];

      for (const selector of titleSelectors) {
        const el = $contentEl.find(selector).first();
        if (el.length && el.text().trim()) {
          title = el.text().trim();
          break;
        }
      }

      // Fallback: try any h1
      if (!title) {
        const h1 = $contentEl.find('h1').first();
        if (h1.length) {
          title = h1.text().trim();
        }
      }
    }

    // Also check page-level h1 outside content area
    if (!title) {
      const h1 = $('h1').first();
      if (h1.length) {
        title = h1.text().trim();
      }
    }

    // Final fallback: use URL slug as title
    if (!title) {
      const urlPath = new URL(entry.url).pathname;
      const lastSegment = urlPath.split('/').filter(Boolean).pop() || 'untitled';
      // Handle API operation names like POST_Account
      title = lastSegment
        .replace(/_/g, ' ')
        .replace(/-/g, ' ')
        .replace(/\b\w/g, (c) => c.toUpperCase());
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
