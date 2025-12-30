/**
 * JSON Backend for Prompt Suggestions
 *
 * Local file-based storage for development and testing.
 * Stores suggestions in data/prompt-suggestions.json.
 */

import * as fs from 'fs';
import * as path from 'path';
import { v4 as uuidv4 } from 'uuid';
import { debugLog } from '../../config';
import type {
  SuggestionsBackend,
  PromptSuggestion,
  PromptSuggestionInsert,
  PromptSuggestionStatus,
} from './suggestions-types';

// Storage file path
const SUGGESTIONS_FILE = path.join(process.cwd(), 'data', 'prompt-suggestions.json');

/**
 * Store structure for JSON persistence
 */
interface SuggestionsStore {
  version: string;
  updated_at: string;
  suggestions: PromptSuggestion[];
}

/**
 * JSON-based suggestions backend for local development
 */
export class SuggestionsJsonBackend implements SuggestionsBackend {
  private loadStore(): SuggestionsStore {
    if (fs.existsSync(SUGGESTIONS_FILE)) {
      try {
        const data = fs.readFileSync(SUGGESTIONS_FILE, 'utf-8');
        return JSON.parse(data);
      } catch {
        debugLog('Failed to load suggestions file, creating new');
      }
    }
    return {
      version: '1.0',
      updated_at: new Date().toISOString(),
      suggestions: [],
    };
  }

  private saveStore(store: SuggestionsStore): void {
    store.updated_at = new Date().toISOString();
    const dir = path.dirname(SUGGESTIONS_FILE);
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }
    fs.writeFileSync(SUGGESTIONS_FILE, JSON.stringify(store, null, 2));
  }

  async insert(input: PromptSuggestionInsert): Promise<PromptSuggestion> {
    debugLog('JSON: inserting suggestion', { step: input.step_name, pattern: input.pattern });

    const store = this.loadStore();
    const now = new Date().toISOString();

    // Check for existing suggestion with same step+pattern
    const existingIdx = store.suggestions.findIndex(
      (s) => s.step_name === input.step_name && s.pattern === input.pattern
    );

    let suggestion: PromptSuggestion;

    if (existingIdx >= 0) {
      // Update existing
      suggestion = {
        ...store.suggestions[existingIdx],
        occurrence_count: input.occurrence_count,
        suggested_update: input.suggested_update,
        updated_at: now,
      };
      store.suggestions[existingIdx] = suggestion;
    } else {
      // Create new
      suggestion = {
        id: uuidv4(),
        step_name: input.step_name,
        pattern: input.pattern,
        occurrence_count: input.occurrence_count,
        suggested_update: input.suggested_update,
        status: 'pending',
        created_at: now,
        updated_at: now,
      };
      store.suggestions.push(suggestion);
    }

    this.saveStore(store);
    return suggestion;
  }

  async getAll(): Promise<PromptSuggestion[]> {
    const store = this.loadStore();
    return store.suggestions;
  }

  async getById(id: string): Promise<PromptSuggestion | null> {
    const store = this.loadStore();
    return store.suggestions.find((s) => s.id === id) ?? null;
  }

  async getByStep(stepName: string): Promise<PromptSuggestion[]> {
    const store = this.loadStore();
    return store.suggestions.filter((s) => s.step_name === stepName);
  }

  async getByStatus(status: PromptSuggestionStatus): Promise<PromptSuggestion[]> {
    const store = this.loadStore();
    return store.suggestions.filter((s) => s.status === status);
  }

  async updateStatus(id: string, status: PromptSuggestionStatus): Promise<PromptSuggestion | null> {
    debugLog('JSON: updating suggestion status', { id, status });

    const store = this.loadStore();
    const suggestion = store.suggestions.find((s) => s.id === id);

    if (!suggestion) {
      return null;
    }

    suggestion.status = status;
    suggestion.updated_at = new Date().toISOString();

    if (status === 'applied') {
      suggestion.applied_at = new Date().toISOString();
    }

    this.saveStore(store);
    return suggestion;
  }

  async delete(id: string): Promise<boolean> {
    debugLog('JSON: deleting suggestion', { id });

    const store = this.loadStore();
    const idx = store.suggestions.findIndex((s) => s.id === id);

    if (idx < 0) {
      return false;
    }

    store.suggestions.splice(idx, 1);
    this.saveStore(store);
    return true;
  }

  async isReady(): Promise<boolean> {
    return true; // JSON backend is always ready
  }
}
