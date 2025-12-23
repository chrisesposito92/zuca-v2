/**
 * Subscription Spec Formatting Utilities
 *
 * NOTE: The LLM step `generateSubscriptionSpec()` has been deprecated and removed.
 * Subscription generation is now handled by the combined `designSubscription()` step
 * in design-subscription.ts which merges subscription spec + POB assignment.
 *
 * This file is kept for the helper formatting function used by downstream steps.
 */

import { SubscriptionSpec } from '../../types/output';

/**
 * Format subscription spec for use in downstream prompts
 */
export function formatSubscriptionSpecForContext(spec: SubscriptionSpec): string {
  const subInfo = [
    `Subscription: ${spec.subscription.name}`,
    `  Type: ${spec.subscription.termType}`,
    `  Start: ${spec.subscription.subscriptionStartDate}`,
    `  End: ${spec.subscription.subscriptionEndDate || 'ongoing'}`,
    `  Currency: ${spec.subscription.currency}`,
  ];

  const chargeInfo = spec.rate_plans.flatMap((rp) =>
    rp.charges.map(
      (c) =>
        `  - ${rp.productName}/${rp.ratePlanName}/${c.name}: ${c.type}/${c.model}, ` +
        `${c.billingPeriod || 'N/A'} ${c.billingTiming || ''}, trigger=${c.triggerEvent}`
    )
  );

  return [...subInfo, '', 'Rate Plans & Charges:', ...chargeInfo].join('\n');
}
