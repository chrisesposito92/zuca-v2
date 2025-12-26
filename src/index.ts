/**
 * ZUCA v2 - Zuora Use Case Architect
 *
 * Main entry point for the library.
 * This module exports all public APIs for programmatic usage.
 */

// Configuration
export { config, loadConfig, debugLog } from './config';

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
} from './types/input';

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
} from './types/output';

// Revenue Snapshot types
export {
  RevenueSnapshotInput,
  RevenueSnapshotInputSchema,
  RevenueSnapshotOutput,
  RevenueSnapshotOutputSchema,
  RevenueSnapshotSource,
  RevenueSnapshotSourceSchema,
  RevenueSnapshotTableOutput,
  RevenueSnapshotTableOutputSchema,
  RevenueSnapshotSummary,
  RevenueSnapshotSummarySchema,
  SnapshotSspMethod,
  SnapshotSspMethodSchema,
} from './types/revenue-snapshot';

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
} from './pipeline/index';

export {
  runRevenueSnapshotPipeline,
  RevenueSnapshotOptions,
} from './pipeline/revenue-snapshot';

// UC Generator
export {
  runUCGenerator,
  mapToZucaInput,
  quickResearch,
  UCGeneratorOptions,
} from './pipeline/uc-generator/index';

// UC Generator types
export {
  UCGeneratorInput,
  UCGeneratorInputSchema,
  UCGeneratorOutput,
  UCGeneratorOutputSchema,
  CustomerResearch,
  CustomerResearchSchema,
  GeneratedUseCases,
  GeneratedUseCasesSchema,
  GeneratedUseCase,
  GeneratedUseCaseSchema,
  OTRWorkflowInputs,
  OTRWorkflowInputsSchema,
  validateUCGeneratorInput,
} from './types/uc-generator';

// Data loading
export {
  loadGoldenUseCasesData,
  GoldenUseCasesData,
} from './data/loader';

// Utilities
export {
  generateTable,
  formatSubscription,
  formatRatePlanCharges,
  formatBillingsTable,
  formatRevRecWaterfall,
  formatFullOutput,
} from './utils/markdown-tables';

// LLM Client (for advanced usage)
export {
  complete,
  getZuoraMcpTools,
  createZuoraMcpTool,
  CompletionOptions,
  CompletionResult,
} from './llm/client';

// Server (for programmatic server startup)
export { startServer, app, server } from './api/server';
