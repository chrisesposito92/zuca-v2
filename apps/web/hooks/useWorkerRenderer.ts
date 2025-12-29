/**
 * Hook for Web Worker-based template rendering
 *
 * Manages the worker lifecycle and provides an async API for rendering
 * templates in a background thread.
 */

import { useRef, useCallback, useEffect, useState } from 'react';
import type { RenderResult, RenderOptions } from '@zuca/pipeline/template-preview';
import type {
  RenderWorkerRequest,
  RenderWorkerResponse,
  RenderWorkerError,
} from '@/workers/template-renderer.worker';

// ============================================================================
// Types
// ============================================================================

export interface UseWorkerRendererOptions {
  /** Enable worker rendering (default: true if supported) */
  enabled?: boolean;
  /** Size threshold in bytes to use worker (default: 50KB) */
  sizeThreshold?: number;
}

export interface UseWorkerRendererReturn {
  /** Whether worker is ready */
  isReady: boolean;
  /** Whether worker rendering is supported */
  isSupported: boolean;
  /** Render a template using the worker */
  render: (
    template: string,
    data: Record<string, unknown>,
    options?: RenderOptions
  ) => Promise<{ result: RenderResult; duration: number }>;
  /** Check if content should use worker based on size */
  shouldUseWorker: (template: string, data: Record<string, unknown>) => boolean;
  /** Terminate the worker */
  terminate: () => void;
}

// ============================================================================
// Hook Implementation
// ============================================================================

let requestIdCounter = 0;

export function useWorkerRenderer(
  options: UseWorkerRendererOptions = {}
): UseWorkerRendererReturn {
  const { enabled = true, sizeThreshold = 50 * 1024 } = options;

  const workerRef = useRef<Worker | null>(null);
  const callbacksRef = useRef<
    Map<
      string,
      {
        resolve: (value: { result: RenderResult; duration: number }) => void;
        reject: (error: Error) => void;
      }
    >
  >(new Map());
  const [isReady, setIsReady] = useState(false);

  // Check if workers are supported
  const isSupported = typeof Worker !== 'undefined';

  /**
   * Get or create the worker
   */
  const getWorker = useCallback((): Worker | null => {
    if (!isSupported || !enabled) {
      return null;
    }

    if (!workerRef.current) {
      try {
        workerRef.current = new Worker(
          new URL('../workers/template-renderer.worker.ts', import.meta.url)
        );

        workerRef.current.onmessage = (
          event: MessageEvent<RenderWorkerResponse | RenderWorkerError | { type: 'ready' }>
        ) => {
          const message = event.data;

          if (message.type === 'ready') {
            setIsReady(true);
            return;
          }

          const callback = callbacksRef.current.get(message.id);
          if (!callback) return;

          callbacksRef.current.delete(message.id);

          if (message.type === 'result') {
            callback.resolve({
              result: message.result,
              duration: message.duration,
            });
          } else if (message.type === 'error') {
            callback.reject(new Error(message.error));
          }
        };

        workerRef.current.onerror = (error) => {
          console.error('[WorkerRenderer] Worker error:', error);
          // Reject all pending callbacks
          callbacksRef.current.forEach((callback) => {
            callback.reject(new Error('Worker error'));
          });
          callbacksRef.current.clear();
        };
      } catch (error) {
        console.warn('[WorkerRenderer] Failed to create worker:', error);
        return null;
      }
    }

    return workerRef.current;
  }, [isSupported, enabled]);

  /**
   * Check if content size exceeds threshold
   */
  const shouldUseWorker = useCallback(
    (template: string, data: Record<string, unknown>): boolean => {
      if (!isSupported || !enabled) return false;

      const templateSize = new Blob([template]).size;
      const dataSize = new Blob([JSON.stringify(data)]).size;

      return templateSize + dataSize > sizeThreshold;
    },
    [isSupported, enabled, sizeThreshold]
  );

  /**
   * Render template using worker
   */
  const render = useCallback(
    async (
      template: string,
      data: Record<string, unknown>,
      renderOptions?: RenderOptions
    ): Promise<{ result: RenderResult; duration: number }> => {
      const worker = getWorker();

      if (!worker) {
        throw new Error('Worker not available');
      }

      const id = `render-${++requestIdCounter}`;

      return new Promise((resolve, reject) => {
        callbacksRef.current.set(id, { resolve, reject });

        const request: RenderWorkerRequest = {
          type: 'render',
          id,
          template,
          data,
          options: renderOptions,
        };

        worker.postMessage(request);

        // Timeout after 30 seconds
        setTimeout(() => {
          if (callbacksRef.current.has(id)) {
            callbacksRef.current.delete(id);
            reject(new Error('Worker render timeout'));
          }
        }, 30000);
      });
    },
    [getWorker]
  );

  /**
   * Terminate the worker
   */
  const terminate = useCallback(() => {
    if (workerRef.current) {
      workerRef.current.terminate();
      workerRef.current = null;
      setIsReady(false);
    }
    // Reject all pending callbacks
    callbacksRef.current.forEach((callback) => {
      callback.reject(new Error('Worker terminated'));
    });
    callbacksRef.current.clear();
  }, []);

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      terminate();
    };
  }, [terminate]);

  // Initialize worker on mount if enabled
  useEffect(() => {
    if (enabled && isSupported) {
      getWorker();
    }
  }, [enabled, isSupported, getWorker]);

  return {
    isReady,
    isSupported,
    render,
    shouldUseWorker,
    terminate,
  };
}
