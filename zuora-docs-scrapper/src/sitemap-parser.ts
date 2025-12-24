import { parseStringPromise } from 'xml2js';
import { SitemapEntry } from './types.js';

const SITEMAPS = [
  { url: 'https://docs.zuora.com/en/zuora-billing/sitemap.xml', product: 'zuora-billing' as const },
  { url: 'https://docs.zuora.com/en/zuora-platform/sitemap.xml', product: 'zuora-platform' as const },
  { url: 'https://docs.zuora.com/en/zuora-revenue/sitemap.xml', product: 'zuora-revenue' as const },
];

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

export async function parseSitemap(xml: string, product: SitemapEntry['product']): Promise<SitemapEntry[]> {
  const result = await parseStringPromise(xml) as SitemapXml;

  if (!result.urlset?.url) {
    return [];
  }

  return result.urlset.url.map((entry) => ({
    url: entry.loc[0],
    lastmod: entry.lastmod?.[0],
    product,
  }));
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
