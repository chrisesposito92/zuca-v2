/**
 * Fine-Tune Evaluation Module
 *
 * Tools for evaluating fine-tuned models against baseline models
 * using golden-scenarios test suite and evaluation criteria.
 *
 * Usage:
 *   npm run cli -- ft-eval run <name> --model <model>      # Run eval
 *   npm run cli -- ft-eval list                            # List runs
 *   npm run cli -- ft-eval compare <baseline> <candidate>  # Compare runs
 */

export * from './types';
export * from './runner';
export * from './compare';
