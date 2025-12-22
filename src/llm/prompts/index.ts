import { readFile } from 'fs/promises';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

/**
 * Cache for loaded prompts
 */
const promptCache = new Map<string, string>();

/**
 * Load a prompt from the prompts directory
 */
export async function loadPrompt(name: string): Promise<string> {
  // Check cache first
  if (promptCache.has(name)) {
    return promptCache.get(name)!;
  }

  const filePath = join(__dirname, `${name}.md`);
  const content = await readFile(filePath, 'utf-8');

  // Extract just the content (skip the title line)
  const lines = content.split('\n');
  const startIndex = lines.findIndex(line => line.startsWith('##') || (lines.indexOf(line) > 0 && !line.startsWith('#')));
  const prompt = lines.slice(startIndex >= 0 ? startIndex : 1).join('\n').trim();

  promptCache.set(name, prompt);
  return prompt;
}

/**
 * Get all available prompt names
 */
export const PROMPTS = {
  CONTRACT_INTEL: 'contract-intel',
  DETECT_CAPABILITIES: 'detect-capabilities',
  ANALYZE_CONTRACT: 'analyze-contract', // Combined contract intel + detect capabilities
  GENERATE_SUBSCRIPTION: 'generate-subscription',
  ASSIGN_POB_TEMPLATES: 'assign-pob-templates',
  DESIGN_SUBSCRIPTION: 'design-subscription', // Combined subscription spec + POB mapping
  BUILD_CONTRACTS_ORDERS: 'build-contracts-orders',
  BUILD_BILLINGS: 'build-billings',
  BUILD_REVREC_WATERFALL: 'build-revrec-waterfall',
  SUMMARIZE: 'summarize',
  EXPERT_ASSISTANT: 'expert-assistant',
  ROUTER: 'router',
  // UC Generator prompts
  UC_RESEARCH_CUSTOMER: 'uc-research-customer',
  UC_GENERATE_USE_CASES: 'uc-generate-use-cases',
  UC_FORMAT_OUTPUT: 'uc-format-output',
  UC_COMPANY_FUN_FACTS: 'uc-company-fun-facts',
} as const;

export type PromptName = typeof PROMPTS[keyof typeof PROMPTS];
