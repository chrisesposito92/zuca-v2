/**
 * Training Data Module
 *
 * Exports training data functionality for fine-tuning SLMs.
 */

// Types
export type {
  ChatMessage,
  TrainingExample,
  TrainingDataset,
  TrainingExportOptions,
  TrainingCaptureContext,
  SuccessfulEvaluationInput,
  CorrectionExampleInput,
} from './types';

// Capture functions (for use during evaluation)
export {
  startTrainingCapture,
  getCaptureContext,
  clearCaptureContext,
  captureSuccessfulOutput,
  flushCapturedExamples,
} from './exporter';

// Example creation
export {
  createExampleFromEvaluation,
  createExampleFromCorrection,
  generateExamplesFromCorrections,
} from './exporter';

// Dataset management
export {
  loadTrainingDataset,
  saveTrainingDataset,
  addExamplesToDataset,
} from './exporter';

// Export functions
export {
  exportTrainingData,
  getTrainingStats,
  syncCorrectionsToTraining,
} from './exporter';
