/**
 * Apply Prompt Suggestions
 *
 * Applies approved prompt suggestions to prompt files with backup and rollback support.
 */

import * as fs from 'fs/promises';
import * as path from 'path';
import { debugLog } from '../../config';
import { getSuggestion, updateSuggestionStatus } from './index';

export interface ApplyResult {
  success: boolean;
  backupPath?: string;
  promptPath?: string;
  error?: string;
  contentAdded?: string;
}

export interface RollbackResult {
  success: boolean;
  error?: string;
}

/**
 * Map step names to prompt file paths
 */
const STEP_TO_PROMPT_FILE: Record<string, string> = {
  analyze_contract: 'src/llm/prompts/analyze-contract.md',
  design_subscription: 'src/llm/prompts/design-subscription.md',
  contracts_orders: 'src/llm/prompts/build-contracts-orders.md',
  billings: 'src/llm/prompts/build-billings.md',
  revrec_waterfall: 'src/llm/prompts/build-revrec-waterfall.md',
  summarize: 'src/llm/prompts/summarize.md',
};

/**
 * Get the file path for a step's prompt
 */
function getPromptFilePath(stepName: string): string | null {
  const relativePath = STEP_TO_PROMPT_FILE[stepName];
  if (!relativePath) {
    return null;
  }
  return path.join(process.cwd(), relativePath);
}

/**
 * Parse suggestion content to extract placement instructions and content
 *
 * Handles the format from generatePromptSuggestion:
 * ```
 * ## Placement: [placement instructions]
 *
 * [content to add]
 *
 * ## Rationale
 * [why this change helps]
 * ```
 */
interface ParsedSuggestion {
  placement: 'before' | 'after' | 'replace' | 'append';
  anchor?: string; // Section name or marker
  content: string;
  rationale?: string;
}

function parseSuggestionContent(suggestedUpdate: string): ParsedSuggestion {
  const lines = suggestedUpdate.split('\n');

  let placement: ParsedSuggestion['placement'] = 'append';
  let anchor: string | undefined;
  let content = '';
  let rationale = '';

  // Find ## Placement line
  const placementIndex = lines.findIndex((line) =>
    line.trim().toLowerCase().startsWith('## placement')
  );

  // Find ## Rationale line
  const rationaleIndex = lines.findIndex((line) =>
    line.trim().toLowerCase().startsWith('## rationale')
  );

  // Extract placement directive
  if (placementIndex !== -1) {
    const placementLine = lines[placementIndex];
    const placementText = placementLine.replace(/^##\s*placement:?\s*/i, '').trim().toLowerCase();

    // Parse placement instruction
    if (placementText.includes('after')) {
      placement = 'after';
      // Extract anchor - look for quoted text or section reference
      const match = placementText.match(/after\s+(?:the\s+)?["'](.+?)["']/i) ||
        placementText.match(/after\s+(?:the\s+)?(.+?)(?:\s+section)?$/i);
      anchor = match?.[1]?.trim();
    } else if (placementText.includes('before')) {
      placement = 'before';
      const match = placementText.match(/before\s+(?:the\s+)?["'](.+?)["']/i) ||
        placementText.match(/before\s+(?:the\s+)?(.+?)(?:\s+section)?$/i);
      anchor = match?.[1]?.trim();
    } else if (placementText.includes('replace')) {
      placement = 'replace';
      const match = placementText.match(/replace\s+(?:the\s+)?["'](.+?)["']/i) ||
        placementText.match(/replace\s+(?:the\s+)?(.+?)(?:\s+section)?$/i);
      anchor = match?.[1]?.trim();
    } else if (
      placementText.includes('append') ||
      placementText.includes('end') ||
      placementText.includes('bottom')
    ) {
      placement = 'append';
    }
  }

  // Extract content between placement and rationale
  const contentStartIndex = placementIndex !== -1 ? placementIndex + 1 : 0;
  const contentEndIndex = rationaleIndex !== -1 ? rationaleIndex : lines.length;

  content = lines
    .slice(contentStartIndex, contentEndIndex)
    .join('\n')
    .trim();

  // Extract rationale if present
  if (rationaleIndex !== -1) {
    rationale = lines
      .slice(rationaleIndex + 1)
      .join('\n')
      .trim();
  }

  return { placement, anchor, content, rationale };
}

/**
 * Find the line index matching an anchor in the prompt content
 */
function findAnchorIndex(lines: string[], anchor: string): number {
  // Try exact match first
  let idx = lines.findIndex((line) => line.includes(anchor));
  if (idx !== -1) return idx;

  // Try case-insensitive match
  const lowerAnchor = anchor.toLowerCase();
  idx = lines.findIndex((line) => line.toLowerCase().includes(lowerAnchor));
  if (idx !== -1) return idx;

  // Try matching section headers
  idx = lines.findIndex((line) => {
    const lower = line.toLowerCase();
    return lower.startsWith('## ') && lower.includes(lowerAnchor);
  });

  return idx;
}

/**
 * Insert content into prompt at specified location
 */
function insertContent(promptContent: string, parsed: ParsedSuggestion): string {
  if (parsed.placement === 'append' || !parsed.anchor) {
    // Append to end of file
    return `${promptContent.trim()}\n\n${parsed.content}\n`;
  }

  const lines = promptContent.split('\n');
  const anchorIndex = findAnchorIndex(lines, parsed.anchor);

  if (anchorIndex === -1) {
    // Anchor not found, append to end with warning comment
    debugLog(`Anchor "${parsed.anchor}" not found, appending to end`);
    return `${promptContent.trim()}\n\n<!-- Auto-appended: anchor "${parsed.anchor}" not found -->\n${parsed.content}\n`;
  }

  if (parsed.placement === 'after') {
    // Find end of section (next ## header or end of file)
    let insertIndex = anchorIndex + 1;
    for (let i = anchorIndex + 1; i < lines.length; i++) {
      if (lines[i].startsWith('## ')) {
        insertIndex = i;
        break;
      }
      insertIndex = i + 1;
    }

    lines.splice(insertIndex, 0, '', parsed.content);
  } else if (parsed.placement === 'before') {
    lines.splice(anchorIndex, 0, parsed.content, '');
  } else if (parsed.placement === 'replace') {
    // Replace the section until next ## header
    let endIndex = anchorIndex + 1;
    for (let i = anchorIndex + 1; i < lines.length; i++) {
      if (lines[i].startsWith('## ')) {
        endIndex = i;
        break;
      }
      endIndex = i + 1;
    }

    lines.splice(anchorIndex, endIndex - anchorIndex, parsed.content);
  }

  return lines.join('\n');
}

/**
 * Apply a prompt suggestion
 *
 * @param suggestionId - The suggestion ID to apply
 * @returns Result with backup path for potential rollback
 */
export async function applyPromptSuggestion(suggestionId: string): Promise<ApplyResult> {
  try {
    // Get suggestion
    const suggestion = await getSuggestion(suggestionId);

    if (!suggestion) {
      return { success: false, error: `Suggestion ${suggestionId} not found` };
    }

    if (suggestion.status !== 'approved') {
      return {
        success: false,
        error: `Suggestion must be approved first (current status: ${suggestion.status})`,
      };
    }

    // Get prompt file path
    const promptPath = getPromptFilePath(suggestion.step_name);

    if (!promptPath) {
      return {
        success: false,
        error: `No prompt file found for step: ${suggestion.step_name}`,
      };
    }

    // Read current content
    let currentContent: string;
    try {
      currentContent = await fs.readFile(promptPath, 'utf-8');
    } catch (error) {
      return {
        success: false,
        error: `Failed to read prompt file: ${promptPath}`,
      };
    }

    // Create backup with timestamp
    const timestamp = Date.now();
    const backupPath = `${promptPath}.backup.${timestamp}`;
    await fs.writeFile(backupPath, currentContent);

    debugLog(`Created backup: ${backupPath}`);

    // Parse and apply suggestion
    const parsed = parseSuggestionContent(suggestion.suggested_update);
    const newContent = insertContent(currentContent, parsed);

    // Write updated content
    await fs.writeFile(promptPath, newContent);

    debugLog(`Applied suggestion to: ${promptPath}`);

    // Update suggestion status
    await updateSuggestionStatus(suggestionId, 'applied');

    return {
      success: true,
      backupPath,
      promptPath,
      contentAdded: parsed.content.substring(0, 200) + (parsed.content.length > 200 ? '...' : ''),
    };
  } catch (error) {
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Unknown error',
    };
  }
}

/**
 * Rollback a prompt suggestion by restoring from backup
 *
 * @param suggestionId - The suggestion ID to rollback
 * @param backupPath - Path to the backup file
 */
export async function rollbackPromptSuggestion(
  suggestionId: string,
  backupPath: string
): Promise<RollbackResult> {
  try {
    const suggestion = await getSuggestion(suggestionId);

    if (!suggestion) {
      return { success: false, error: `Suggestion ${suggestionId} not found` };
    }

    if (suggestion.status !== 'applied') {
      return {
        success: false,
        error: `Can only rollback applied suggestions (current status: ${suggestion.status})`,
      };
    }

    // Verify backup exists
    try {
      await fs.access(backupPath);
    } catch {
      return {
        success: false,
        error: `Backup file not found: ${backupPath}`,
      };
    }

    // Read backup content
    const backupContent = await fs.readFile(backupPath, 'utf-8');

    // Get prompt path and restore
    const promptPath = getPromptFilePath(suggestion.step_name);
    if (!promptPath) {
      return {
        success: false,
        error: `No prompt file found for step: ${suggestion.step_name}`,
      };
    }

    await fs.writeFile(promptPath, backupContent);

    debugLog(`Restored prompt from backup: ${backupPath}`);

    // Update suggestion status back to approved
    await updateSuggestionStatus(suggestionId, 'approved');

    return { success: true };
  } catch (error) {
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Unknown error',
    };
  }
}

/**
 * List all backups for a step's prompt file
 */
export async function listBackups(stepName: string): Promise<string[]> {
  const promptPath = getPromptFilePath(stepName);
  if (!promptPath) {
    return [];
  }

  const dir = path.dirname(promptPath);
  const basename = path.basename(promptPath);

  try {
    const files = await fs.readdir(dir);
    return files
      .filter((f) => f.startsWith(`${basename}.backup.`))
      .map((f) => path.join(dir, f))
      .sort()
      .reverse(); // Most recent first
  } catch {
    return [];
  }
}

/**
 * Get list of available step names that have prompt files
 */
export function getAvailableSteps(): string[] {
  return Object.keys(STEP_TO_PROMPT_FILE);
}
