// All supported product types for scraping
export type ProductType =
  | 'zuora-billing'
  | 'zuora-platform'
  | 'zuora-revenue'
  | 'zuora-developer';

export interface SitemapEntry {
  url: string;
  lastmod?: string;
  product: ProductType;
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
