import { readFile } from 'fs/promises';
import { existsSync } from 'fs';
import { join } from 'path';

function resolveDocsDir(): string {
  const candidates = [
    join(process.cwd(), 'docs'),
    join(process.cwd(), '..', 'docs'),
    join(process.cwd(), '..', '..', 'docs'),
  ];
  for (const candidate of candidates) {
    if (existsSync(candidate)) return candidate;
  }
  return candidates[0];
}

const DOCS_DIR = resolveDocsDir();

async function readCsv(relativePath: string): Promise<string> {
  const filePath = join(DOCS_DIR, relativePath);
  const content = await readFile(filePath, 'utf-8');
  return content.trim();
}

export async function loadBookingMappingCsv(): Promise<string> {
  return readCsv('booking-template-revenue-field-mappings.csv');
}

export async function loadBillingMappingCsv(): Promise<string> {
  return readCsv('billing-template-revenue-field-mappings.csv');
}
