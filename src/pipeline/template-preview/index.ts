/**
 * Template Preview Module
 *
 * Client-side rendering engine for Zuora HTML templates.
 * Provides live preview with sample data substitution.
 */

export { render, TemplateRenderer } from './template-renderer';
export type {
  RenderResult,
  RenderError,
  RenderWarning,
  RenderOptions,
} from './template-renderer';

export { pipeRegistry, PipeRegistry } from './function-registry';
export type {
  PipeHandler,
  PipeContext,
  PipeDefinition,
} from './function-registry';

export { evaluateExpression, safeEvaluate } from './expression-evaluator';
export type { ExpressionContext } from './expression-evaluator';
