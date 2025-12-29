/**
 * Web Worker for Template Rendering
 *
 * Offloads heavy template rendering to a background thread to prevent
 * UI blocking on large templates or complex data structures.
 *
 * Usage: Import via `new Worker(new URL('./template-renderer.worker.ts', import.meta.url))`
 */

import { render, type RenderOptions, type RenderResult } from '@zuca/pipeline/template-preview';

// ============================================================================
// Message Types
// ============================================================================

export interface RenderWorkerRequest {
  type: 'render';
  id: string;
  template: string;
  data: Record<string, unknown>;
  options?: RenderOptions;
}

export interface RenderWorkerResponse {
  type: 'result';
  id: string;
  result: RenderResult;
  duration: number;
}

export interface RenderWorkerError {
  type: 'error';
  id: string;
  error: string;
}

export type WorkerMessage = RenderWorkerRequest;
export type WorkerResponse = RenderWorkerResponse | RenderWorkerError;

// ============================================================================
// Worker Handler
// ============================================================================

self.onmessage = (event: MessageEvent<WorkerMessage>) => {
  const message = event.data;

  if (message.type === 'render') {
    const startTime = performance.now();

    try {
      const result = render(message.template, message.data, message.options);
      const duration = performance.now() - startTime;

      const response: RenderWorkerResponse = {
        type: 'result',
        id: message.id,
        result,
        duration,
      };

      self.postMessage(response);
    } catch (error) {
      const errorResponse: RenderWorkerError = {
        type: 'error',
        id: message.id,
        error: error instanceof Error ? error.message : String(error),
      };

      self.postMessage(errorResponse);
    }
  }
};

// Signal worker is ready
self.postMessage({ type: 'ready' });
