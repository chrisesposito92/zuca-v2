export interface SitemapEntry {
  url: string;
  lastmod?: string;
  product: 'zuora-billing' | 'zuora-platform' | 'zuora-revenue';
}

export interface ScrapedPage {
  url: string;
  title: string;
  product: string;
  breadcrumbs: string[];
  content: string;
  scrapedAt: string;
}

export interface ScrapeResult {
  success: boolean;
  page?: ScrapedPage;
  error?: string;
}

export interface ScrapeProgress {
  total: number;
  completed: number;
  failed: number;
  skipped: number;
  currentUrl?: string;
}
