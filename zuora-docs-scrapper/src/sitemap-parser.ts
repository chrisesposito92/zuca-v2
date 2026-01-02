import { parseStringPromise } from 'xml2js';
import { SitemapEntry, ProductType } from './types.js';

const SITEMAPS: Array<{ url: string; product: ProductType }> = [
  { url: 'https://docs.zuora.com/en/zuora-billing/sitemap.xml', product: 'zuora-billing' },
  { url: 'https://docs.zuora.com/en/zuora-platform/sitemap.xml', product: 'zuora-platform' },
  { url: 'https://docs.zuora.com/en/zuora-revenue/sitemap.xml', product: 'zuora-revenue' },
  { url: 'https://developer.zuora.com/sitemap.xml', product: 'zuora-developer' },
];

// URL patterns to exclude from developer.zuora.com
const EXCLUDED_URL_PATTERNS = [
  '/blog',            // Blog index and posts - not technical docs
  '/sdk-changelogs/', // Version-specific changelogs
];

function shouldIncludeUrl(url: string, product: ProductType): boolean {
  // Only apply filtering to developer docs
  if (product !== 'zuora-developer') {
    return true;
  }
  return !EXCLUDED_URL_PATTERNS.some(pattern => url.includes(pattern));
}

interface SitemapXml {
  urlset: {
    url: Array<{
      loc: string[];
      lastmod?: string[];
    }>;
  };
}

export async function fetchSitemap(sitemapUrl: string): Promise<string> {
  const response = await fetch(sitemapUrl);
  if (!response.ok) {
    throw new Error(`Failed to fetch sitemap: ${sitemapUrl} - ${response.status}`);
  }
  return response.text();
}

export async function parseSitemap(xml: string, product: ProductType): Promise<SitemapEntry[]> {
  const result = await parseStringPromise(xml) as SitemapXml;

  if (!result.urlset?.url) {
    return [];
  }

  return result.urlset.url
    .map((entry) => ({
      url: entry.loc[0],
      lastmod: entry.lastmod?.[0],
      product,
    }))
    .filter((entry) => shouldIncludeUrl(entry.url, product));
}

export async function getAllUrls(productFilter?: string): Promise<SitemapEntry[]> {
  const allEntries: SitemapEntry[] = [];

  const sitemapsToProcess = productFilter
    ? SITEMAPS.filter(s => s.product.includes(productFilter))
    : SITEMAPS;

  for (const sitemap of sitemapsToProcess) {
    console.log(`📥 Fetching sitemap: ${sitemap.product}...`);

    try {
      const xml = await fetchSitemap(sitemap.url);
      const entries = await parseSitemap(xml, sitemap.product);
      allEntries.push(...entries);
      console.log(`   Found ${entries.length} URLs in ${sitemap.product}`);
    } catch (error) {
      console.error(`❌ Failed to fetch ${sitemap.product}:`, error);
    }
  }

  console.log(`\n📊 Total URLs to scrape: ${allEntries.length}`);
  return allEntries;
}
