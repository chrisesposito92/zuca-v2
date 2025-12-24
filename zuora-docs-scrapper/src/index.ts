import { getAllUrls } from './sitemap-parser.js';
import { PageScraper } from './page-scraper.js';
import { FileWriter } from './file-writer.js';
import { SitemapEntry, ScrapeProgress } from './types.js';

const DELAY_MS = 100; // 100ms delay between requests (fast mode)

interface CliOptions {
  product?: string;
  test?: boolean;
  force?: boolean;
}

function parseArgs(): CliOptions {
  const args = process.argv.slice(2);
  const options: CliOptions = {};

  for (let i = 0; i < args.length; i++) {
    if (args[i] === '--product' && args[i + 1]) {
      options.product = args[i + 1];
      i++;
    } else if (args[i] === '--test') {
      options.test = true;
    } else if (args[i] === '--force') {
      options.force = true;
    }
  }

  return options;
}

/**
 * Check if a page needs to be re-scraped based on lastmod date
 * Returns true if the page should be scraped (new or updated)
 */
function needsScraping(entry: SitemapEntry, scrapedDates: Map<string, Date>): boolean {
  const scrapedAt = scrapedDates.get(entry.url);

  // Never scraped before - needs scraping
  if (!scrapedAt) {
    return true;
  }

  // No lastmod in sitemap - assume it hasn't changed
  if (!entry.lastmod) {
    return false;
  }

  // Compare dates: scrape if lastmod is after scraped_at
  const lastmod = new Date(entry.lastmod);
  if (isNaN(lastmod.getTime())) {
    return false; // Invalid lastmod date, skip
  }

  return lastmod > scrapedAt;
}

function formatDuration(ms: number): string {
  const seconds = Math.floor(ms / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);

  if (hours > 0) {
    return `${hours}h ${minutes % 60}m ${seconds % 60}s`;
  } else if (minutes > 0) {
    return `${minutes}m ${seconds % 60}s`;
  } else {
    return `${seconds}s`;
  }
}

function estimateTimeRemaining(completed: number, total: number, elapsedMs: number): string {
  if (completed === 0) return 'calculating...';

  const avgTimePerPage = elapsedMs / completed;
  const remaining = total - completed;
  const estimatedMs = remaining * avgTimePerPage;

  return formatDuration(estimatedMs);
}

async function main(): Promise<void> {
  const options = parseArgs();
  const startTime = Date.now();

  console.log('');
  console.log('═══════════════════════════════════════════════════════');
  console.log('       Zuora Documentation Scraper');
  console.log('═══════════════════════════════════════════════════════');
  console.log('');

  // Initialize components
  const scraper = new PageScraper();
  const writer = new FileWriter();

  await writer.init();

  // Get all URLs from sitemaps
  console.log('📋 Fetching sitemaps...\n');
  let urls: SitemapEntry[] = await getAllUrls(options.product);

  // Test mode: only scrape first 5 pages
  if (options.test) {
    console.log('\n🧪 TEST MODE: Only scraping first 5 pages\n');
    urls = urls.slice(0, 5);
  }

  // Incremental mode: skip pages that haven't been updated since last scrape
  if (!options.force && !options.test) {
    console.log('\n🔍 Checking for updated pages (use --force to re-scrape all)...');
    const scrapedDates = await writer.getScrapedDates();
    const originalCount = urls.length;

    // Count new vs updated for reporting
    let newPages = 0;
    let updatedPages = 0;
    let unchangedPages = 0;

    urls = urls.filter((entry) => {
      const scrapedAt = scrapedDates.get(entry.url);

      if (!scrapedAt) {
        newPages++;
        return true; // New page
      }

      if (entry.lastmod) {
        const lastmod = new Date(entry.lastmod);
        if (!isNaN(lastmod.getTime()) && lastmod > scrapedAt) {
          updatedPages++;
          return true; // Updated page
        }
      }

      unchangedPages++;
      return false; // Unchanged
    });

    console.log(`   📊 Total in sitemaps: ${originalCount}`);
    console.log(`   🆕 New pages:         ${newPages}`);
    console.log(`   🔄 Updated pages:     ${updatedPages}`);
    console.log(`   ⏭️  Unchanged:         ${unchangedPages}`);
    console.log(`   📝 To scrape:         ${urls.length}\n`);
  } else if (options.force) {
    console.log('\n⚡ FORCE MODE: Re-scraping all pages regardless of lastmod\n');
  }

  if (urls.length === 0) {
    console.log('✅ All pages already scraped! Nothing to do.');
    return;
  }

  // Initialize browser
  await scraper.init();

  const progress: ScrapeProgress = {
    total: urls.length,
    completed: 0,
    failed: 0,
    skipped: 0,
  };

  console.log('');
  console.log('═══════════════════════════════════════════════════════');
  console.log(`  Starting scrape of ${urls.length} pages`);
  console.log(`  Estimated time: ${formatDuration(urls.length * (DELAY_MS + 2000))}`);
  console.log('═══════════════════════════════════════════════════════');
  console.log('');

  try {
    for (let i = 0; i < urls.length; i++) {
      const entry = urls[i];
      const elapsed = Date.now() - startTime;

      // Progress display
      const pct = ((i + 1) / urls.length * 100).toFixed(1);
      const eta = estimateTimeRemaining(i, urls.length, elapsed);
      console.log(`[${i + 1}/${urls.length}] (${pct}%) ETA: ${eta}`);
      console.log(`   📄 ${entry.url}`);

      progress.currentUrl = entry.url;

      // Scrape the page
      const result = await scraper.scrapePage(entry);

      if (result.success && result.page) {
        // Save to markdown file
        const filepath = await writer.savePage(result.page);
        console.log(`   ✅ Saved: ${filepath.split('/').slice(-2).join('/')}`);
        progress.completed++;
      } else {
        console.log(`   ❌ Failed: ${result.error}`);
        await writer.logFailed(entry.url, result.error || 'Unknown error');
        progress.failed++;
      }

      // Save progress periodically
      if (i % 10 === 0) {
        await writer.saveProgress(progress);
      }

      // Delay between requests
      if (i < urls.length - 1) {
        await new Promise((resolve) => setTimeout(resolve, DELAY_MS));
      }

      console.log('');
    }
  } finally {
    // Always close browser
    await scraper.close();

    // Save final progress
    await writer.saveProgress(progress);
  }

  const totalTime = Date.now() - startTime;

  console.log('');
  console.log('═══════════════════════════════════════════════════════');
  console.log('                    SCRAPE COMPLETE');
  console.log('═══════════════════════════════════════════════════════');
  console.log('');
  console.log(`  ✅ Completed: ${progress.completed}`);
  console.log(`  ❌ Failed:    ${progress.failed}`);
  console.log(`  ⏱️  Duration:  ${formatDuration(totalTime)}`);
  console.log('');
  console.log('  Output directory: ./output/');
  console.log('  Failed URLs log:  ./logs/failed.json');
  console.log('');
}

main().catch((error) => {
  console.error('Fatal error:', error);
  process.exit(1);
});
