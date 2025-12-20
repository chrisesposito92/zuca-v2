/**
 * Pipeline Steps Index
 *
 * This module exports all pipeline steps for easy import.
 * The pipeline executes in this order for use case processing:
 *
 * 1. Router - Classify input as use_case or general_question
 * 2. Contract Intel - Extract dates and contract parameters
 * 3. Detect Capabilities - Classify into ZB/ZR capability labels
 * 4. Match Golden Use Cases - Find similar reference implementations (pure code)
 * 5. Generate Subscription - Create subscription, rate plans, charges
 * 6. Assign POB Templates - Map charges to POB templates
 * 7. Build Contracts/Orders - Generate ZR contracts/orders table
 * 8. Build Billings - Generate billing schedule
 * 9. Build Rev Rec Waterfall - Generate revenue recognition schedule
 * 10. Summarize - Consolidate assumptions and questions
 *
 * For general questions, the Expert Assistant handles responses.
 */

// Step 1: Router
export { routeQuery, quickRouteCheck, smartRoute, type RouterResult } from './router.js';

// Step 2: Contract Intel
export { extractContractIntel, formatContractIntelForContext } from './contract-intel.js';

// Step 3: Detect Capabilities
export { detectCapabilities, formatCapabilitiesForPrompt } from './detect-capabilities.js';

// Step 4: Match Golden Use Cases (Pure Code)
export {
  matchGoldenUseCases,
  getMatchedUseCaseIds,
  formatMatchResultsForContext,
  hasGoodMatches,
  type MatchOptions,
} from './match-golden-use-cases.js';

// Step 5: Generate Subscription
export { generateSubscriptionSpec, formatSubscriptionSpecForContext } from './generate-subscription.js';

// Step 6: Assign POB Templates
export { assignPobTemplates, formatPobMappingForContext } from './assign-pob-templates.js';

// Step 7: Build Contracts/Orders
export { buildContractsOrders, formatContractsOrdersForContext } from './build-contracts-orders.js';

// Step 8: Build Billings
export { buildBillings, formatBillingsForContext } from './build-billings.js';

// Step 9: Build Rev Rec Waterfall
export {
  buildRevRecWaterfall,
  formatRevRecWaterfallForContext,
  pivotWaterfallForDisplay,
} from './build-revrec-waterfall.js';

// Step 10: Summarize
export { summarizeResults, formatSummaryForDisplay } from './summarize.js';

// Expert Assistant (alternative path for general questions)
export { expertAssistant, formatExpertResponse, type ExpertResponse } from './expert-assistant.js';
