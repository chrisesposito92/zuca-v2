/**
 * Pipeline Steps Index
 *
 * This module exports all pipeline steps for easy import.
 *
 * OPTIMIZED PIPELINE (v2):
 * 1. Router - Classify input as use_case or general_question
 * 2. Analyze Contract (COMBINED) - Extract contract intel + detect capabilities
 * 3. Match Golden Use Cases - Find similar reference implementations (pure code)
 * 4. Design Subscription (COMBINED) - Create subscription + assign POB templates
 * 5. Build Contracts/Orders + Build Billings (PARALLEL)
 * 6. Build Rev Rec Waterfall
 * 7. Summarize
 *
 * LEGACY STEPS (still available for backwards compatibility):
 * - Contract Intel, Detect Capabilities, Generate Subscription, Assign POB Templates
 *
 * For general questions, the Expert Assistant handles responses.
 */

// Step 1: Router
export { routeQuery, quickRouteCheck, smartRoute, type RouterResult } from './router.js';

// Step 2: Analyze Contract (COMBINED - replaces contract-intel + detect-capabilities)
export { analyzeContract, type ContractAnalysisOutput } from './analyze-contract.js';

// Step 2 Legacy: Contract Intel (individual step)
export { extractContractIntel, formatContractIntelForContext } from './contract-intel.js';

// Step 2 Legacy: Detect Capabilities (individual step)
export { detectCapabilities, formatCapabilitiesForPrompt } from './detect-capabilities.js';

// Step 3: Match Golden Use Cases (Pure Code)
export {
  matchGoldenUseCases,
  getMatchedUseCaseIds,
  formatMatchResultsForContext,
  hasGoodMatches,
  type MatchOptions,
} from './match-golden-use-cases.js';

// Step 4: Design Subscription (COMBINED - replaces generate-subscription + assign-pob-templates)
export { designSubscription, type SubscriptionDesignOutput } from './design-subscription.js';

// Step 4 Legacy: Generate Subscription (individual step)
export { generateSubscriptionSpec, formatSubscriptionSpecForContext } from './generate-subscription.js';

// Step 4 Legacy: Assign POB Templates (individual step)
export { assignPobTemplates, formatPobMappingForContext } from './assign-pob-templates.js';

// Step 5a: Build Contracts/Orders (runs in PARALLEL with billings)
export { buildContractsOrders, formatContractsOrdersForContext } from './build-contracts-orders.js';

// Step 5b: Build Billings (runs in PARALLEL with contracts/orders)
export { buildBillings, formatBillingsForContext } from './build-billings.js';

// Step 6: Build Rev Rec Waterfall
export {
  buildRevRecWaterfall,
  formatRevRecWaterfallForContext,
  pivotWaterfallForDisplay,
} from './build-revrec-waterfall.js';

// Step 7: Summarize
export { summarizeResults, formatSummaryForDisplay } from './summarize.js';

// Expert Assistant (alternative path for general questions)
export { expertAssistant, formatExpertResponse, type ExpertResponse } from './expert-assistant.js';
