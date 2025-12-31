/**
 * Review Queue
 *
 * Manages items flagged for human review during active learning.
 * Supports both JSON (local) and Postgres (production) backends.
 */

import * as fs from 'fs';
import * as path from 'path';
import { v4 as uuidv4 } from 'uuid';
import { debugLog } from '../../config';
import type {
  ReviewItem,
  ReviewDecision,
  ReviewQueueIndex,
  UncertaintyAssessment,
} from './types';
import { ReviewQueueIndexSchema } from './types';

const DEFAULT_QUEUE_PATH = path.join(process.cwd(), 'data', 'review-queue.json');

// Configurable path (set via setReviewQueuePath for tests)
let configuredQueuePath: string | null = null;

/**
 * Set custom path for review queue (used for test isolation)
 */
export function setReviewQueuePath(customPath: string | null): void {
  configuredQueuePath = customPath;
  // Reset singleton so next access uses new path
  queueBackend = null;
}

/**
 * Get current review queue path
 */
export function getReviewQueuePath(): string {
  return configuredQueuePath ?? DEFAULT_QUEUE_PATH;
}

// =============================================================================
// JSON Backend
// =============================================================================

class ReviewQueueJsonBackend {
  private queuePath: string;
  private queue: ReviewQueueIndex | null = null;

  constructor(queuePath: string = DEFAULT_QUEUE_PATH) {
    this.queuePath = queuePath;
  }

  private loadQueue(): ReviewQueueIndex {
    if (this.queue) return this.queue;

    if (fs.existsSync(this.queuePath)) {
      try {
        const data = fs.readFileSync(this.queuePath, 'utf-8');
        const parsed = JSON.parse(data);
        const validated = ReviewQueueIndexSchema.safeParse(parsed);

        if (validated.success) {
          this.queue = validated.data;
        } else {
          debugLog('Review queue validation failed, creating new');
          this.queue = this.createEmptyQueue();
        }
      } catch (error) {
        debugLog('Failed to load review queue, creating new:', error);
        this.queue = this.createEmptyQueue();
      }
    } else {
      this.queue = this.createEmptyQueue();
    }

    return this.queue;
  }

  private createEmptyQueue(): ReviewQueueIndex {
    return {
      version: '1.0.0',
      updated_at: new Date().toISOString(),
      items: [],
    };
  }

  private saveQueue(): void {
    if (!this.queue) return;

    this.queue.updated_at = new Date().toISOString();

    const dir = path.dirname(this.queuePath);
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }

    fs.writeFileSync(this.queuePath, JSON.stringify(this.queue, null, 2));
  }

  async add(item: Omit<ReviewItem, 'id' | 'created_at' | 'status'>): Promise<ReviewItem> {
    const queue = this.loadQueue();

    const reviewItem: ReviewItem = {
      id: uuidv4(),
      ...item,
      status: 'pending',
      created_at: new Date().toISOString(),
    };

    queue.items.push(reviewItem);
    this.saveQueue();

    debugLog(`Added item to review queue: ${reviewItem.id}`);
    return reviewItem;
  }

  async getAll(): Promise<ReviewItem[]> {
    return this.loadQueue().items;
  }

  async getPending(): Promise<ReviewItem[]> {
    return this.loadQueue().items.filter((item) => item.status === 'pending');
  }

  async getById(id: string): Promise<ReviewItem | null> {
    return this.loadQueue().items.find((item) => item.id === id) ?? null;
  }

  async updateStatus(
    id: string,
    status: ReviewItem['status'],
    _decision?: ReviewDecision // Prefixed to indicate intentionally unused for now
  ): Promise<void> {
    const queue = this.loadQueue();
    const item = queue.items.find((i) => i.id === id);

    if (item) {
      item.status = status;
      if (status === 'reviewed') {
        item.reviewed_at = new Date().toISOString();
      }
      this.saveQueue();
    }
  }

  async remove(id: string): Promise<void> {
    const queue = this.loadQueue();
    queue.items = queue.items.filter((item) => item.id !== id);
    this.saveQueue();
  }

  async clear(): Promise<void> {
    this.queue = this.createEmptyQueue();
    this.saveQueue();
  }

  async getStats(): Promise<{
    total: number;
    pending: number;
    reviewed: number;
    dismissed: number;
    byStep: Record<string, number>;
  }> {
    const items = this.loadQueue().items;

    const byStep: Record<string, number> = {};
    for (const item of items) {
      byStep[item.step] = (byStep[item.step] || 0) + 1;
    }

    return {
      total: items.length,
      pending: items.filter((i) => i.status === 'pending').length,
      reviewed: items.filter((i) => i.status === 'reviewed').length,
      dismissed: items.filter((i) => i.status === 'dismissed').length,
      byStep,
    };
  }

  reload(): void {
    this.queue = null;
  }
}

// =============================================================================
// Singleton Instance
// =============================================================================

let queueBackend: ReviewQueueJsonBackend | null = null;

function getQueueBackend(): ReviewQueueJsonBackend {
  if (!queueBackend) {
    queueBackend = new ReviewQueueJsonBackend(getReviewQueuePath());
  }
  return queueBackend;
}

// =============================================================================
// Public API
// =============================================================================

/**
 * Add an item to the review queue
 */
export async function addToReviewQueue(params: {
  step: string;
  testCaseId?: string;
  output: unknown;
  input?: unknown;
  uncertainty: UncertaintyAssessment;
}): Promise<ReviewItem> {
  return getQueueBackend().add(params);
}

/**
 * Get all items in the review queue
 */
export async function getReviewQueue(): Promise<ReviewItem[]> {
  return getQueueBackend().getAll();
}

/**
 * Get pending items in the review queue
 */
export async function getPendingReviews(): Promise<ReviewItem[]> {
  return getQueueBackend().getPending();
}

/**
 * Get a specific review item by ID
 */
export async function getReviewItem(id: string): Promise<ReviewItem | null> {
  return getQueueBackend().getById(id);
}

/**
 * Mark a review item as reviewed (correct output - no action needed)
 */
export async function approveReviewItem(id: string): Promise<void> {
  await getQueueBackend().updateStatus(id, 'reviewed');
  debugLog(`Approved review item: ${id}`);
}

/**
 * Mark a review item as dismissed (not worth reviewing)
 */
export async function dismissReviewItem(id: string): Promise<void> {
  await getQueueBackend().updateStatus(id, 'dismissed');
  debugLog(`Dismissed review item: ${id}`);
}

/**
 * Process a review with a decision
 */
export async function processReview(
  id: string,
  decision: ReviewDecision
): Promise<void> {
  await getQueueBackend().updateStatus(id, 'reviewed', decision);
  debugLog(`Processed review: ${id}, isCorrect: ${decision.isCorrect}`);
}

/**
 * Remove a review item
 */
export async function removeReviewItem(id: string): Promise<void> {
  await getQueueBackend().remove(id);
}

/**
 * Clear the entire review queue
 */
export async function clearReviewQueue(): Promise<void> {
  await getQueueBackend().clear();
  debugLog('Cleared review queue');
}

/**
 * Get review queue statistics
 */
export async function getReviewQueueStats(): Promise<{
  total: number;
  pending: number;
  reviewed: number;
  dismissed: number;
  byStep: Record<string, number>;
}> {
  return getQueueBackend().getStats();
}

/**
 * Reload the review queue from disk
 */
export function reloadReviewQueue(): void {
  getQueueBackend().reload();
}
