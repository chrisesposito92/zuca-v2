import { getAllUrls } from './sitemap-parser.js';
import { PageScraper } from './page-scraper.js';
import { FileWriter } from './file-writer.js';
import { SitemapEntry, ScrapeProgress } from './types.js';

const DELAY_MS = 100; // 100ms delay between batches
const PARALLEL_BATCH_SIZE = 10; // Process 10 pages in parallel (conservative for scraping)

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

  // Estimate based on batch processing (much faster than sequential)
  const estimatedBatches = Math.ceil(urls.length / PARALLEL_BATCH_SIZE);
  const estimatedTimeMs = estimatedBatches * (DELAY_MS + 3000); // ~3s per batch avg

  console.log('');
  console.log('═══════════════════════════════════════════════════════');
  console.log(`  Starting scrape of ${urls.length} pages`);
  console.log(`  Batch size: ${PARALLEL_BATCH_SIZE} pages in parallel`);
  console.log(`  Estimated time: ${formatDuration(estimatedTimeMs)}`);
  console.log('═══════════════════════════════════════════════════════');
  console.log('');

  // Helper to process a single page
  async function processPage(entry: SitemapEntry): Promise<{
    entry: SitemapEntry;
    success: boolean;
    filepath?: string;
    error?: string;
  }> {
    const result = await scraper.scrapePage(entry);
    if (result.success && result.page) {
      const filepath = await writer.savePage(result.page);
      return { entry, success: true, filepath };
    } else {
      await writer.logFailed(entry.url, result.error || 'Unknown error');
      return { entry, success: false, error: result.error };
    }
  }

  try {
    // Process in parallel batches
    for (let batchStart = 0; batchStart < urls.length; batchStart += PARALLEL_BATCH_SIZE) {
      const batchEnd = Math.min(batchStart + PARALLEL_BATCH_SIZE, urls.length);
      const batch = urls.slice(batchStart, batchEnd);
      const elapsed = Date.now() - startTime;

      // Progress display
      const progressPct = ((batchEnd) / urls.length * 100).toFixed(1);
      const eta = estimateTimeRemaining(batchEnd, urls.length, elapsed);
      console.log(`\n[${batchStart + 1}-${batchEnd}/${urls.length}] (${progressPct}%) ETA: ${eta}`);

      // Process batch in parallel
      const results = await Promise.all(batch.map(entry => processPage(entry)));

      // Report results
      let batchSuccess = 0;
      let batchFailed = 0;
      for (const result of results) {
        if (result.success) {
          progress.completed++;
          batchSuccess++;
        } else {
          progress.failed++;
          batchFailed++;
          console.log(`   ❌ ${result.entry.url.split('/').slice(-2).join('/')}: ${result.error}`);
        }
      }

      const errorSuffix = batchFailed > 0 ? `, ❌ ${batchFailed} failed` : '';
      console.log(`   ✅ ${batchSuccess} saved${errorSuffix}`);

      // Save progress after each batch
      await writer.saveProgress(progress);

      // Delay between batches
      if (batchEnd < urls.length) {
        await new Promise((resolve) => setTimeout(resolve, DELAY_MS));
      }
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
