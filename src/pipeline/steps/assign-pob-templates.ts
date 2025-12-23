/**
 * POB Mapping Formatting Utilities
 *
 * NOTE: The LLM step `assignPobTemplates()` has been deprecated and removed.
 * POB assignment is now handled by the combined `designSubscription()` step
 * in design-subscription.ts which merges subscription spec + POB assignment.
 *
 * This file is kept for the helper formatting function used by downstream steps.
 */

import { PobMappingOutput } from '../../types/output';

/**
 * Format POB mapping for use in downstream prompts
 */
export function formatPobMappingForContext(mapping: PobMappingOutput): string {
  const lines = mapping.charge_pob_map.map(
    (m) =>
      `${m.chargeName}: ${m.pob_name} (${m.pob_identifier}) | ` +
      `${m.ratable_method} | ${m.release_event} | ` +
      `${m.recognition_window.start} - ${m.recognition_window.end || 'ongoing'} | ` +
      `confidence=${(m.confidence * 100).toFixed(0)}%`
  );

  return lines.join('\n');
}
