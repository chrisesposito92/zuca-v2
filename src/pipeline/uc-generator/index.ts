/**
 * UC Generator Module
 *
 * Generates demo-ready use cases for a customer based on web research
 * of their products, pricing, and business model.
 *
 * The output is structured to feed directly into the main ZUCA pipeline.
 */

// Orchestrator exports
export {
  runUCGenerator,
  mapToZucaInput,
  quickResearch,
  type UCGeneratorOptions,
} from './orchestrator';

// Step exports (for advanced usage)
export {
  researchCustomer,
  generateUseCases,
  formatOutput,
  formatOutputLocally,
  formatCustomerResearchForContext,
  formatUseCasesForOutput,
  generateCompanyFunFacts,
  type CompanyFunFactsInput,
  type CompanyFunFactsOutput,
} from './steps/index';
