/**
 * React hook for HTML template preview state management.
 *
 * Manages template code, sample data, and render results with debounced updates.
 */

import { useState, useCallback, useEffect, useRef, useMemo } from 'react';
import { render, type RenderResult, type RenderOptions } from '@zuca/pipeline/template-preview';

export interface UseTemplatePreviewOptions {
  /** Initial template code */
  initialTemplate?: string;
  /** Initial sample data */
  initialData?: Record<string, unknown>;
  /** Render options */
  renderOptions?: RenderOptions;
  /** Debounce delay in ms (default: 300) */
  debounceMs?: number;
  /** Auto-render on changes (default: true) */
  autoRender?: boolean;
}

export interface UseTemplatePreviewReturn {
  /** Current template code */
  template: string;
  /** Set template code */
  setTemplate: (template: string) => void;
  /** Current sample data */
  data: Record<string, unknown>;
  /** Set sample data */
  setData: (data: Record<string, unknown>) => void;
  /** Update a single field in sample data */
  updateDataField: (path: string, value: unknown) => void;
  /** Current render result */
  result: RenderResult | null;
  /** Whether rendering is in progress (debounce pending) */
  isRendering: boolean;
  /** Manually trigger a render */
  renderNow: () => void;
  /** Clear all state */
  reset: () => void;
  /** Render options */
  options: RenderOptions;
  /** Update render options */
  setOptions: (options: Partial<RenderOptions>) => void;
}

/**
 * Hook for managing template preview state with debounced rendering
 */
export function useTemplatePreview(
  hookOptions: UseTemplatePreviewOptions = {}
): UseTemplatePreviewReturn {
  const {
    initialTemplate = '',
    initialData = {},
    renderOptions = {},
    debounceMs = 300,
    autoRender = true,
  } = hookOptions;

  // State
  const [template, setTemplate] = useState(initialTemplate);
  const [data, setData] = useState<Record<string, unknown>>(initialData);
  const [result, setResult] = useState<RenderResult | null>(null);
  const [isRendering, setIsRendering] = useState(false);
  const [options, setOptionsState] = useState<RenderOptions>(renderOptions);

  // Refs
  const debounceRef = useRef<NodeJS.Timeout | null>(null);
  const templateRef = useRef(template);
  const dataRef = useRef(data);
  const optionsRef = useRef(options);

  // Keep refs in sync
  templateRef.current = template;
  dataRef.current = data;
  optionsRef.current = options;

  /**
   * Perform the actual render
   */
  const doRender = useCallback(() => {
    if (!templateRef.current) {
      setResult(null);
      setIsRendering(false);
      return;
    }

    try {
      const renderResult = render(templateRef.current, dataRef.current, optionsRef.current);
      setResult(renderResult);
    } catch (error) {
      setResult({
        html: '',
        errors: [{
          type: 'syntax',
          message: error instanceof Error ? error.message : 'Render failed',
        }],
        warnings: [],
        stats: {
          fieldsProcessed: 0,
          loopsProcessed: 0,
          conditionalsProcessed: 0,
          expressionsProcessed: 0,
        },
      });
    }

    setIsRendering(false);
  }, []);

  /**
   * Schedule a debounced render
   */
  const scheduleRender = useCallback(() => {
    if (debounceRef.current) {
      clearTimeout(debounceRef.current);
    }

    setIsRendering(true);

    debounceRef.current = setTimeout(() => {
      doRender();
      debounceRef.current = null;
    }, debounceMs);
  }, [debounceMs, doRender]);

  /**
   * Manually trigger an immediate render
   */
  const renderNow = useCallback(() => {
    if (debounceRef.current) {
      clearTimeout(debounceRef.current);
      debounceRef.current = null;
    }
    setIsRendering(true);
    // Use requestAnimationFrame to ensure state updates have applied
    requestAnimationFrame(() => {
      doRender();
    });
  }, [doRender]);

  /**
   * Update template and optionally trigger render
   */
  const handleSetTemplate = useCallback((newTemplate: string) => {
    setTemplate(newTemplate);
    if (autoRender) {
      scheduleRender();
    }
  }, [autoRender, scheduleRender]);

  /**
   * Update data and optionally trigger render
   */
  const handleSetData = useCallback((newData: Record<string, unknown>) => {
    setData(newData);
    if (autoRender) {
      scheduleRender();
    }
  }, [autoRender, scheduleRender]);

  /**
   * Update a single field in the data using dot notation path
   */
  const updateDataField = useCallback((path: string, value: unknown) => {
    setData((prevData) => {
      const newData = { ...prevData };
      const parts = path.split('.');
      let current: Record<string, unknown> = newData;

      for (let i = 0; i < parts.length - 1; i++) {
        const part = parts[i];
        if (!(part in current) || typeof current[part] !== 'object') {
          current[part] = {};
        }
        current = current[part] as Record<string, unknown>;
      }

      current[parts[parts.length - 1]] = value;
      return newData;
    });

    if (autoRender) {
      scheduleRender();
    }
  }, [autoRender, scheduleRender]);

  /**
   * Update render options
   */
  const setOptions = useCallback((newOptions: Partial<RenderOptions>) => {
    setOptionsState((prev) => ({ ...prev, ...newOptions }));
    if (autoRender) {
      scheduleRender();
    }
  }, [autoRender, scheduleRender]);

  /**
   * Reset all state
   */
  const reset = useCallback(() => {
    if (debounceRef.current) {
      clearTimeout(debounceRef.current);
      debounceRef.current = null;
    }
    setTemplate(initialTemplate);
    setData(initialData);
    setResult(null);
    setIsRendering(false);
    setOptionsState(renderOptions);
  }, [initialTemplate, initialData, renderOptions]);

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      if (debounceRef.current) {
        clearTimeout(debounceRef.current);
      }
    };
  }, []);

  // Initial render if template is provided
  useEffect(() => {
    if (initialTemplate && autoRender) {
      doRender();
    }
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return useMemo(() => ({
    template,
    setTemplate: handleSetTemplate,
    data,
    setData: handleSetData,
    updateDataField,
    result,
    isRendering,
    renderNow,
    reset,
    options,
    setOptions,
  }), [
    template,
    handleSetTemplate,
    data,
    handleSetData,
    updateDataField,
    result,
    isRendering,
    renderNow,
    reset,
    options,
    setOptions,
  ]);
}

/**
 * Parse sample data from JSON string
 */
export function parseSampleData(jsonString: string): Record<string, unknown> | null {
  try {
    const parsed = JSON.parse(jsonString);
    if (typeof parsed === 'object' && parsed !== null && !Array.isArray(parsed)) {
      return parsed as Record<string, unknown>;
    }
    return null;
  } catch {
    return null;
  }
}

/**
 * Stringify sample data to formatted JSON
 */
export function stringifySampleData(data: Record<string, unknown>): string {
  return JSON.stringify(data, null, 2);
}
