/**
 * ZUCA v2 - Zuora Use Case Architect
 *
 * Main entry point for the library.
 * This module exports all public APIs for programmatic usage.
 */

// Configuration
export { config, loadConfig, debugLog } from './config.js';

// Input types and validation
export {
  ZucaInput,
  ZucaInputSchema,
  validateZucaInput,
  BillingPeriod,
  BillingPeriodSchema,
  Currency,
  CurrencySchema,
  AllocationMethod,
  AllocationMethodSchema,
  toZuoraBillingPeriod,
  parseContractDate,
  formatContractDate,
  formatISODate,
} from './types/input.js';

// Output types
export {
  ZucaOutput,
  ZucaOutputSchema,
  ContractIntel,
  ContractIntelSchema,
  DetectedCapabilities,
  DetectedCapabilitiesSchema,
  MatchGoldenUseCasesOutput,
  MatchGoldenUseCasesOutputSchema,
  SubscriptionSpec,
  SubscriptionSpecSchema,
  PobMappingOutput,
  PobMappingOutputSchema,
  ContractsOrdersOutput,
  ContractsOrdersOutputSchema,
  BillingsOutput,
  BillingsOutputSchema,
  RevRecWaterfallOutput,
  RevRecWaterfallOutputSchema,
  SummaryOutput,
  SummaryOutputSchema,
} from './types/output.js';

// Pipeline
export {
  runPipeline,
  handleFollowUp,
  quickAnalysis,
  getSession,
  listSessions,
  deleteSession,
  PipelineOptions,
  PipelineSession,
} from './pipeline/index.js';

// Data loading
export {
  loadGoldenUseCasesData,
  GoldenUseCasesData,
} from './data/loader.js';

// Utilities
export {
  generateTable,
  formatSubscription,
  formatRatePlanCharges,
  formatBillingsTable,
  formatRevRecWaterfall,
  formatFullOutput,
} from './utils/markdown-tables.js';

// LLM Client (for advanced usage)
export {
  complete,
  createAskZuoraTool,
  CompletionOptions,
  CompletionResult,
} from './llm/client.js';

// Server (for programmatic server startup)
export { startServer, app, server } from './api/server.js';
