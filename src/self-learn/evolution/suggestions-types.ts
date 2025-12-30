/**
 * Types for Prompt Suggestions Backend
 *
 * Defines the interface for dual-backend storage
 * of prompt improvement suggestions.
 *
 * Re-exports base types from the main types file for consistency.
 */

// Import types for local use
import type { PromptSuggestion, PromptSuggestionStatus } from '../types';

// Re-export types for external consumers
export type { PromptSuggestion, PromptSuggestionStatus } from '../types';

/**
 * Input for creating a new suggestion
 */
export interface PromptSuggestionInsert {
  step_name: string;
  pattern: string;
  occurrence_count: number;
  suggested_update: string;
}

/**
 * Backend interface for prompt suggestions storage
 */
export interface SuggestionsBackend {
  /**
   * Insert a new suggestion (or update if same step+pattern exists)
   */
  insert(input: PromptSuggestionInsert): Promise<PromptSuggestion>;

  /**
   * Get all suggestions
   */
  getAll(): Promise<PromptSuggestion[]>;

  /**
   * Get a suggestion by ID
   */
  getById(id: string): Promise<PromptSuggestion | null>;

  /**
   * Get all suggestions for a specific step
   */
  getByStep(stepName: string): Promise<PromptSuggestion[]>;

  /**
   * Get suggestions by status
   */
  getByStatus(status: PromptSuggestionStatus): Promise<PromptSuggestion[]>;

  /**
   * Update suggestion status
   */
  updateStatus(id: string, status: PromptSuggestionStatus): Promise<PromptSuggestion | null>;

  /**
   * Delete a suggestion
   */
  delete(id: string): Promise<boolean>;

  /**
   * Check if backend is ready
   */
  isReady(): Promise<boolean>;
}
