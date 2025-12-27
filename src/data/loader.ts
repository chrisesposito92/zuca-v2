import { readFile } from 'fs/promises';
import { join, resolve, dirname } from 'path';
import { fileURLToPath } from 'url';
import { z } from 'zod';

import { config, debugLog } from '../config';

// Get the project root relative to this file (src/data/loader.ts -> project root)
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const PROJECT_ROOT = resolve(__dirname, '../..');
import {
  GoldenUseCaseCapability,
  GoldenUseCaseCapabilitySchema,
  KeyTerm,
  KeyTermSchema,
  PobTemplate,
  PobTemplateSchema,
  NormalizedPobTemplate,
  GoldenSubscription,
  GoldenSubscriptionSchema,
  GoldenRatePlanChargesDoc,
  GoldenRatePlanChargesDocSchema,
  GoldenZRTableRow,
  GoldenZRTableRowSchema,
  GoldenUseCasesData,
} from '../types/golden-use-cases';

// Re-export types for convenience
export type { GoldenUseCasesData, GoldenSubscription, GoldenRatePlanChargesDoc as GoldenRatePlanCharge };

/**
 * File names for Golden Use Case data
 */
const FILE_NAMES = {
  capabilities: 'golden_use_cases_capabilities.json',
  keyTerms: 'golden_use_cases_key_terms.json',
  pobTemplates: 'golden_use_cases_pob_templates.json',
  subscriptions: 'golden_use_cases_subscriptions.json',
  ratePlansCharges: 'golden_use_cases_rate_plans-charges.json',
  zrTables: 'golden_use_cases_zr_tables.json',
} as const;

/**
 * Cache for loaded data
 */
let cachedData: GoldenUseCasesData | null = null;

/**
 * Load and parse a JSON file with schema validation
 */
async function loadJsonFile<T>(
  filePath: string,
  schema: z.ZodSchema<T>,
  arraySchema: boolean = true
): Promise<T[]> {
  try {
    const content = await readFile(filePath, 'utf-8');
    const parsed = JSON.parse(content);

    if (arraySchema) {
      // Validate as array of items
      const arrayResult = z.array(schema).safeParse(parsed);
      if (!arrayResult.success) {
        debugLog(`Validation warning for ${filePath}:`, arrayResult.error.errors);
        // Return parsed data without strict validation for flexibility
        return Array.isArray(parsed) ? parsed : [];
      }
      return arrayResult.data;
    } else {
      // Validate as single item
      const result = schema.safeParse(parsed);
      if (!result.success) {
        debugLog(`Validation warning for ${filePath}:`, result.error.errors);
        return parsed;
      }
      return [result.data];
    }
  } catch (error) {
    if (error instanceof Error && 'code' in error && error.code === 'ENOENT') {
      console.warn(`File not found: ${filePath}`);
      return [];
    }
    throw error;
  }
}

/**
 * Normalize a POB template for easier use
 */
export function normalizePobTemplate(template: PobTemplate): NormalizedPobTemplate {
  return {
    id: template['POB Identifier'],
    name: template['Template Name'],
    description: template['Description'],
    releaseEvent: template['Release Event'],
    ratableMethod: template['Ratable Method'],
    pobSatisfied: template['POB Satisfied'],
    accountingMethod: template['Accounting Method'],
    vcEnabled: template['VC Enabled'] === 'Y',
  };
}

/**
 * Load all Golden Use Case data files
 */
export async function loadGoldenUseCasesData(): Promise<GoldenUseCasesData> {
  if (cachedData) {
    debugLog('Returning cached Golden Use Cases data');
    return cachedData;
  }

  // Resolve relative paths from PROJECT_ROOT, not CWD
  const configPath = config.app.goldenUseCasesPath;
  const basePath = configPath.startsWith('.')
    ? resolve(PROJECT_ROOT, configPath)
    : resolve(configPath);
  debugLog('Loading Golden Use Cases from:', basePath);

  const [
    capabilities,
    keyTerms,
    pobTemplates,
    subscriptions,
    ratePlansCharges,
    zrTables,
  ] = await Promise.all([
    loadJsonFile(
      join(basePath, FILE_NAMES.capabilities),
      GoldenUseCaseCapabilitySchema
    ),
    loadJsonFile(
      join(basePath, FILE_NAMES.keyTerms),
      KeyTermSchema
    ),
    loadJsonFile(
      join(basePath, FILE_NAMES.pobTemplates),
      PobTemplateSchema
    ),
    loadJsonFile(
      join(basePath, FILE_NAMES.subscriptions),
      GoldenSubscriptionSchema
    ),
    loadJsonFile(
      join(basePath, FILE_NAMES.ratePlansCharges),
      GoldenRatePlanChargesDocSchema
    ),
    loadJsonFile(
      join(basePath, FILE_NAMES.zrTables),
      GoldenZRTableRowSchema
    ),
  ]);

  cachedData = {
    capabilities: capabilities as GoldenUseCaseCapability[],
    keyTerms: keyTerms as KeyTerm[],
    pobTemplates: pobTemplates as PobTemplate[],
    subscriptions: subscriptions as GoldenSubscription[],
    ratePlansCharges: ratePlansCharges as GoldenRatePlanChargesDoc[],
    zrTables: zrTables as GoldenZRTableRow[],
  };

  debugLog('Loaded Golden Use Cases:', {
    capabilities: cachedData.capabilities.length,
    keyTerms: cachedData.keyTerms.length,
    pobTemplates: cachedData.pobTemplates.length,
    subscriptions: cachedData.subscriptions.length,
    ratePlansCharges: cachedData.ratePlansCharges.length,
    zrTables: cachedData.zrTables.length,
  });

  return cachedData;
}

/**
 * Get normalized POB templates
 */
export async function getNormalizedPobTemplates(): Promise<NormalizedPobTemplate[]> {
  const data = await loadGoldenUseCasesData();
  return data.pobTemplates.map(normalizePobTemplate);
}

/**
 * Get capabilities as a lookup map by Use Case Id
 */
export async function getCapabilitiesMap(): Promise<Map<string, GoldenUseCaseCapability>> {
  const data = await loadGoldenUseCasesData();
  const map = new Map<string, GoldenUseCaseCapability>();
  for (const cap of data.capabilities) {
    map.set(cap['Use Case Id'], cap);
  }
  return map;
}

/**
 * Get key terms as a lookup map by term
 */
export async function getKeyTermsMap(): Promise<Map<string, KeyTerm>> {
  const data = await loadGoldenUseCasesData();
  const map = new Map<string, KeyTerm>();
  for (const term of data.keyTerms) {
    map.set(term.Term.toLowerCase(), term);
  }
  return map;
}

/**
 * Get subscriptions for specific use case IDs
 */
export async function getSubscriptionsForUseCases(
  useCaseIds: string[]
): Promise<GoldenSubscription[]> {
  const data = await loadGoldenUseCasesData();
  const idSet = new Set(useCaseIds);
  return data.subscriptions.filter((sub) => idSet.has(sub['Use Case Id']));
}

/**
 * Get rate plans and charges for specific use case IDs
 */
export async function getRatePlansChargesForUseCases(
  useCaseIds: string[]
): Promise<GoldenRatePlanChargesDoc[]> {
  const data = await loadGoldenUseCasesData();
  const idSet = new Set(useCaseIds);
  return data.ratePlansCharges.filter((rpc) => idSet.has(rpc['Use Case Id']));
}

/**
 * Get ZR tables for specific use case IDs
 */
export async function getZrTablesForUseCases(
  useCaseIds: string[]
): Promise<GoldenZRTableRow[]> {
  const data = await loadGoldenUseCasesData();
  const idSet = new Set(useCaseIds);
  return data.zrTables.filter((row) => idSet.has(row['Use Case Id']));
}

/**
 * Clear cached data (useful for testing)
 */
export function clearCache(): void {
  cachedData = null;
}

/**
 * Format capabilities for LLM context
 */
export function formatCapabilitiesForContext(
  capabilities: GoldenUseCaseCapability[]
): string {
  return JSON.stringify(
    capabilities.map((cap) => ({
      id: cap['Use Case Id'],
      name: cap['Use Case Name'],
      description: cap.Description,
      billing: cap['Billing Capabilities'],
      revenue: cap['Revenue Capabilities'],
    })),
    null,
    2
  );
}

/**
 * Format key terms for LLM context
 */
export function formatKeyTermsForContext(keyTerms: KeyTerm[]): string {
  return JSON.stringify(
    keyTerms.map((term) => ({
      term: term.Term,
      definition: term.Definition,
      synonyms: term.Synonyms || [],
    })),
    null,
    2
  );
}

/**
 * Format POB templates for LLM context
 */
export function formatPobTemplatesForContext(pobTemplates: PobTemplate[]): string {
  return pobTemplates
    .map((p) =>
      `${p['POB Identifier']}: ${p['Template Name']} | ` +
      `${p['Ratable Method']} | ${p['Release Event']} | ` +
      `${p['POB Satisfied']} | VC: ${p['VC Enabled']}`
    )
    .join('\n');
}
