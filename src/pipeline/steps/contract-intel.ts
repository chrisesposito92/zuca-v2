/**
 * Contract Intel Formatting Utilities
 *
 * NOTE: The LLM step `extractContractIntel()` has been deprecated and removed.
 * Contract extraction is now handled by the combined `analyzeContract()` step
 * in analyze-contract.ts which merges contract intel + capability detection.
 *
 * This file is kept for the helper formatting function used by downstream steps.
 */

import { ContractIntel } from '../../types/output';

/**
 * Format contract intel for use in downstream prompts
 */
export function formatContractIntelForContext(intel: ContractIntel): string {
  return [
    `Service Start: ${intel.service_start_mdy}`,
    intel.service_end_mdy ? `Service End: ${intel.service_end_mdy}` : null,
    `Term: ${intel.term_months} months`,
    `Billing Period: ${intel.billing_period || 'not specified'}`,
    `Billing Timing: ${intel.billing_timing || 'not specified'}`,
    `Trigger Event: ${intel.trigger_event}`,
    `Go-Live Date: ${intel.go_live_mdy}`,
    `Booking Date: ${intel.booking_mdy}`,
    `Renewal Term: ${intel.renewal_term_months} months`,
  ]
    .filter(Boolean)
    .join('\n');
}
