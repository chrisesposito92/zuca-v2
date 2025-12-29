/**
 * HTML Template Result View Component
 *
 * Displays generated template code or expressions with syntax highlighting,
 * copy functionality, and explanations.
 */

"use client";

import {
  Button,
  Chip,
  addToast,
  Tooltip,
  Tabs,
  Tab,
  Textarea,
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  useDisclosure,
  Select,
  SelectItem,
} from "@heroui/react";
import { useState, useMemo } from "react";
import Link from "next/link";
import { render } from "@zuca/pipeline/template-preview";
import { PreviewFrame } from "./template-preview";
import type {
  HTMLTemplateMode,
  HTMLTemplateCodeOutput,
  HTMLTemplateExpressionOutput,
  TemplateValidationOutput,
  ValidationIssue,
  SampleDataOutput,
  TemplateDesignOutput,
} from "@zuca/types/html-template";

interface HTMLTemplateResultViewProps {
  mode: HTMLTemplateMode;
  result: HTMLTemplateCodeOutput | HTMLTemplateExpressionOutput;
  sessionId?: string;
}

export function HTMLTemplateResultView({
  mode,
  result,
  sessionId,
}: HTMLTemplateResultViewProps) {
  const [copied, setCopied] = useState(false);

  const isCodeResult = mode === "code";
  const codeResult = isCodeResult ? (result as HTMLTemplateCodeOutput) : null;
  const expressionResult = !isCodeResult ? (result as HTMLTemplateExpressionOutput) : null;

  const copyContent = isCodeResult ? codeResult?.code : expressionResult?.expression;

  const handleCopy = async () => {
    if (!copyContent) return;
    try {
      await navigator.clipboard.writeText(copyContent);
      setCopied(true);
      addToast({
        title: "Copied!",
        description: `${isCodeResult ? "Code" : "Expression"} copied to clipboard`,
        color: "success",
      });
      setTimeout(() => setCopied(false), 2000);
    } catch {
      addToast({
        title: "Copy failed",
        description: "Unable to copy to clipboard",
        color: "danger",
      });
    }
  };

  return (
    <div className="space-y-5">
      {/* Code/Expression block */}
      <div className="relative group">
        <div className="absolute top-2 right-2 z-10 flex items-center gap-2">
          <Tooltip content={copied ? "Copied!" : "Copy to clipboard"}>
            <Button
              size="sm"
              variant="flat"
              isIconOnly
              onClick={handleCopy}
              className="bg-default-100/80 backdrop-blur-sm"
            >
              {copied ? (
                <svg className="w-4 h-4 text-success" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              ) : (
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
              )}
            </Button>
          </Tooltip>
        </div>
        <div className="rounded-xl border border-default-200/50 bg-default-50/50 overflow-hidden">
          <div className="px-4 py-2 border-b border-default-200/50 bg-default-100/30 flex items-center justify-between">
            <span className="text-xs font-medium text-default-500 uppercase tracking-wider">
              {isCodeResult ? "HTML Template Code" : "Wp_Eval Expression"}
            </span>
            <Chip size="sm" variant="flat" className="bg-primary/10 text-primary">
              {isCodeResult ? "Merge Fields" : "JEXL"}
            </Chip>
          </div>
          <pre className="p-4 overflow-x-auto text-sm font-mono leading-relaxed">
            <code className={isCodeResult ? "language-html" : "language-javascript"}>
              {copyContent}
            </code>
          </pre>
        </div>
      </div>

      {/* Explanation */}
      <div className="space-y-2">
        <h4 className="text-sm font-semibold text-foreground flex items-center gap-2">
          <svg className="w-4 h-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          Explanation
        </h4>
        <p className="text-sm text-default-600 leading-relaxed">
          {result.explanation}
        </p>
      </div>

      {/* Code-specific: Objects and Functions used */}
      {isCodeResult && codeResult && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {codeResult.objects_used.length > 0 && (
            <div className="space-y-2">
              <h4 className="text-sm font-semibold text-foreground flex items-center gap-2">
                <svg className="w-4 h-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
                Objects Used
              </h4>
              <div className="flex flex-wrap gap-1.5">
                {codeResult.objects_used.map((obj) => (
                  <Chip key={obj} size="sm" variant="flat" className="bg-default-100">
                    {obj}
                  </Chip>
                ))}
              </div>
            </div>
          )}

          {codeResult.functions_used.length > 0 && (
            <div className="space-y-2">
              <h4 className="text-sm font-semibold text-foreground flex items-center gap-2">
                <svg className="w-4 h-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
                Functions Used
              </h4>
              <div className="flex flex-wrap gap-1.5">
                {codeResult.functions_used.map((fn) => (
                  <Chip key={fn} size="sm" variant="flat" className="bg-secondary/10 text-secondary">
                    {fn}
                  </Chip>
                ))}
              </div>
            </div>
          )}
        </div>
      )}

      {/* Expression-specific: Input fields and output type */}
      {!isCodeResult && expressionResult && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {expressionResult.input_fields.length > 0 && (
            <div className="space-y-2">
              <h4 className="text-sm font-semibold text-foreground flex items-center gap-2">
                <svg className="w-4 h-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
                Input Fields
              </h4>
              <div className="flex flex-wrap gap-1.5">
                {expressionResult.input_fields.map((field) => (
                  <Chip key={field} size="sm" variant="flat" className="bg-default-100 font-mono text-xs">
                    {field}
                  </Chip>
                ))}
              </div>
            </div>
          )}

          <div className="space-y-2">
            <h4 className="text-sm font-semibold text-foreground flex items-center gap-2">
              <svg className="w-4 h-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
              Output Type
            </h4>
            <Chip size="sm" variant="flat" className="bg-success/10 text-success capitalize">
              {expressionResult.output_type}
            </Chip>
          </div>
        </div>
      )}

      {/* Expression-specific: Examples */}
      {!isCodeResult && expressionResult?.examples && expressionResult.examples.length > 0 && (
        <div className="space-y-2">
          <h4 className="text-sm font-semibold text-foreground flex items-center gap-2">
            <svg className="w-4 h-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
            </svg>
            Examples
          </h4>
          <div className="rounded-lg border border-default-200/50 overflow-hidden">
            <table className="w-full text-sm">
              <thead className="bg-default-100/50">
                <tr>
                  <th className="px-4 py-2 text-left font-medium text-default-600">Input</th>
                  <th className="px-4 py-2 text-left font-medium text-default-600">Output</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-default-200/50">
                {expressionResult.examples.map((example, idx) => (
                  <tr key={idx}>
                    <td className="px-4 py-2 font-mono text-xs">
                      {example.input_values
                        .map((pair) => `${pair.field}=${pair.value}`)
                        .join(", ")}
                    </td>
                    <td className="px-4 py-2 font-mono text-xs text-primary">
                      {example.output}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* Notes (for code results) */}
      {isCodeResult && codeResult?.notes && codeResult.notes.length > 0 && (
        <div className="space-y-2">
          <h4 className="text-sm font-semibold text-foreground flex items-center gap-2">
            <svg className="w-4 h-4 text-warning" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
            </svg>
            Notes
          </h4>
          <ul className="list-disc list-inside space-y-1 text-sm text-default-600">
            {codeResult.notes.map((note, idx) => (
              <li key={idx}>{note}</li>
            ))}
          </ul>
        </div>
      )}

      {/* Session link */}
      {sessionId && (
        <div className="pt-4 border-t border-default-200/50 flex items-center justify-between">
          <span className="text-xs text-default-400">Session: {sessionId.slice(0, 8)}...</span>
          <Link href={`/html-builder/${sessionId}`}>
            <Button size="sm" variant="flat">
              View Details
            </Button>
          </Link>
        </div>
      )}
    </div>
  );
}

// ============================================================================
// VALIDATION RESULT VIEW
// ============================================================================

interface TemplateValidationResultViewProps {
  result: TemplateValidationOutput;
  sessionId?: string;
}

/**
 * Display validation results with issues grouped by severity
 */
export function TemplateValidationResultView({
  result,
  sessionId,
}: TemplateValidationResultViewProps) {
  const { issues, summary } = result;

  const errors = issues.filter((i) => i.severity === "error");
  const warnings = issues.filter((i) => i.severity === "warning");
  const suggestions = issues.filter((i) => i.severity === "suggestion");

  return (
    <div className="space-y-5">
      {/* Status Banner */}
      <div
        className={`rounded-xl p-4 flex items-center gap-3 ${
          summary.is_valid
            ? "bg-success/10 border border-success/20"
            : "bg-danger/10 border border-danger/20"
        }`}
      >
        {summary.is_valid ? (
          <svg
            className="w-6 h-6 text-success flex-shrink-0"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        ) : (
          <svg
            className="w-6 h-6 text-danger flex-shrink-0"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        )}
        <div>
          <h3
            className={`font-semibold ${
              summary.is_valid ? "text-success" : "text-danger"
            }`}
          >
            {summary.is_valid ? "Template Valid" : "Template Has Errors"}
          </h3>
          <p className="text-sm text-default-600">
            {summary.is_valid
              ? "No critical errors found. Your template should render correctly."
              : `Found ${summary.errors} error(s) that must be fixed before deployment.`}
          </p>
        </div>
      </div>

      {/* Summary Stats */}
      <div className="grid grid-cols-3 gap-3">
        <div className="rounded-lg border border-default-200/50 p-3 text-center">
          <div className="text-2xl font-bold text-danger">{summary.errors}</div>
          <div className="text-xs text-default-500">Errors</div>
        </div>
        <div className="rounded-lg border border-default-200/50 p-3 text-center">
          <div className="text-2xl font-bold text-warning">{summary.warnings}</div>
          <div className="text-xs text-default-500">Warnings</div>
        </div>
        <div className="rounded-lg border border-default-200/50 p-3 text-center">
          <div className="text-2xl font-bold text-primary">{summary.suggestions}</div>
          <div className="text-xs text-default-500">Suggestions</div>
        </div>
      </div>

      {/* Errors Section */}
      {errors.length > 0 && (
        <IssueSection title="Errors" severity="error" issues={errors} />
      )}

      {/* Warnings Section */}
      {warnings.length > 0 && (
        <IssueSection title="Warnings" severity="warning" issues={warnings} />
      )}

      {/* Suggestions Section */}
      {suggestions.length > 0 && (
        <IssueSection title="Suggestions" severity="suggestion" issues={suggestions} />
      )}

      {/* Detected Objects and Functions */}
      {(summary.objects_detected.length > 0 || summary.functions_detected.length > 0) && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4 border-t border-default-200/50">
          {summary.objects_detected.length > 0 && (
            <div className="space-y-2">
              <h4 className="text-sm font-semibold text-foreground flex items-center gap-2">
                <svg
                  className="w-4 h-4 text-primary"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                  />
                </svg>
                Objects Detected
              </h4>
              <div className="flex flex-wrap gap-1.5">
                {summary.objects_detected.map((obj) => (
                  <Chip key={obj} size="sm" variant="flat" className="bg-default-100">
                    {obj}
                  </Chip>
                ))}
              </div>
            </div>
          )}

          {summary.functions_detected.length > 0 && (
            <div className="space-y-2">
              <h4 className="text-sm font-semibold text-foreground flex items-center gap-2">
                <svg
                  className="w-4 h-4 text-primary"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                  />
                </svg>
                Functions Detected
              </h4>
              <div className="flex flex-wrap gap-1.5">
                {summary.functions_detected.map((fn) => (
                  <Chip
                    key={fn}
                    size="sm"
                    variant="flat"
                    className="bg-secondary/10 text-secondary"
                  >
                    {fn}
                  </Chip>
                ))}
              </div>
            </div>
          )}
        </div>
      )}

      {/* Session link */}
      {sessionId && (
        <div className="pt-4 border-t border-default-200/50 flex items-center justify-between">
          <span className="text-xs text-default-400">Session: {sessionId.slice(0, 8)}...</span>
          <Link href={`/html-builder/${sessionId}`}>
            <Button size="sm" variant="flat">
              View Details
            </Button>
          </Link>
        </div>
      )}
    </div>
  );
}

// ============================================================================
// ISSUE SECTION COMPONENT
// ============================================================================

interface IssueSectionProps {
  title: string;
  severity: "error" | "warning" | "suggestion";
  issues: ValidationIssue[];
}

function IssueSection({ title, severity, issues }: IssueSectionProps) {
  const colorClasses = {
    error: {
      bg: "bg-danger/5",
      border: "border-danger/20",
      icon: "text-danger",
      badge: "bg-danger/10 text-danger",
    },
    warning: {
      bg: "bg-warning/5",
      border: "border-warning/20",
      icon: "text-warning",
      badge: "bg-warning/10 text-warning",
    },
    suggestion: {
      bg: "bg-primary/5",
      border: "border-primary/20",
      icon: "text-primary",
      badge: "bg-primary/10 text-primary",
    },
  };

  const colors = colorClasses[severity];

  const icons = {
    error: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    ),
    warning: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
        />
      </svg>
    ),
    suggestion: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
        />
      </svg>
    ),
  };

  return (
    <div className="space-y-3">
      <h4 className="text-sm font-semibold text-foreground flex items-center gap-2">
        <span className={colors.icon}>{icons[severity]}</span>
        {title}
        <Chip size="sm" className={colors.badge}>
          {issues.length}
        </Chip>
      </h4>
      <div className="space-y-2">
        {issues.map((issue, idx) => (
          <IssueCard key={idx} issue={issue} colors={colors} />
        ))}
      </div>
    </div>
  );
}

// ============================================================================
// ISSUE CARD COMPONENT
// ============================================================================

interface IssueCardProps {
  issue: ValidationIssue;
  colors: {
    bg: string;
    border: string;
    icon: string;
    badge: string;
  };
}

function IssueCard({ issue, colors }: IssueCardProps) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div
      className={`rounded-lg border ${colors.border} ${colors.bg} overflow-hidden`}
    >
      <button
        onClick={() => setExpanded(!expanded)}
        className="w-full px-4 py-3 flex items-start gap-3 text-left hover:bg-white/5 transition-colors"
      >
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-1">
            {issue.line && (
              <Chip size="sm" variant="flat" className="bg-default-100 text-xs">
                Line {issue.line}
              </Chip>
            )}
            <Chip size="sm" variant="flat" className="bg-default-100 text-xs capitalize">
              {issue.category.replace("_", " ")}
            </Chip>
          </div>
          <p className="text-sm text-foreground">{issue.message}</p>
        </div>
        <svg
          className={`w-4 h-4 text-default-400 transition-transform ${
            expanded ? "rotate-180" : ""
          }`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>

      {expanded && (
        <div className="px-4 pb-3 space-y-3 border-t border-default-200/30">
          {/* Code Snippet */}
          <div className="mt-3">
            <div className="text-xs text-default-500 mb-1">Code:</div>
            <pre className="bg-default-100/50 rounded px-3 py-2 text-xs font-mono overflow-x-auto">
              {issue.code_snippet}
            </pre>
          </div>

          {/* Suggestion */}
          {issue.suggestion && (
            <div>
              <div className="text-xs text-default-500 mb-1">Suggestion:</div>
              <p className="text-sm text-success-600">{issue.suggestion}</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

// ============================================================================
// SAMPLE DATA RESULT VIEW
// ============================================================================

interface SampleDataResultViewProps {
  result: SampleDataOutput;
  sessionId?: string;
}

/**
 * Display sample data generation results with JSON viewer and metadata
 */
export function SampleDataResultView({
  result,
  sessionId,
}: SampleDataResultViewProps) {
  const [copied, setCopied] = useState(false);

  const jsonString = JSON.stringify(result.data, null, 2);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(jsonString);
      setCopied(true);
      addToast({
        title: "Copied!",
        description: "JSON data copied to clipboard",
        color: "success",
      });
      setTimeout(() => setCopied(false), 2000);
    } catch {
      addToast({
        title: "Copy failed",
        description: "Unable to copy to clipboard",
        color: "danger",
      });
    }
  };

  const handleDownload = () => {
    const blob = new Blob([jsonString], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `sample-data-${result.industry}-${Date.now()}.json`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    addToast({
      title: "Downloaded!",
      description: "JSON file saved to downloads",
      color: "success",
    });
  };

  return (
    <div className="space-y-5">
      {/* JSON Data Block */}
      <div className="relative group">
        <div className="absolute top-2 right-2 z-10 flex items-center gap-2">
          <Tooltip content="Download JSON">
            <Button
              size="sm"
              variant="flat"
              isIconOnly
              onClick={handleDownload}
              className="bg-default-100/80 backdrop-blur-sm"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
            </Button>
          </Tooltip>
          <Tooltip content={copied ? "Copied!" : "Copy to clipboard"}>
            <Button
              size="sm"
              variant="flat"
              isIconOnly
              onClick={handleCopy}
              className="bg-default-100/80 backdrop-blur-sm"
            >
              {copied ? (
                <svg className="w-4 h-4 text-success" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              ) : (
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
              )}
            </Button>
          </Tooltip>
        </div>
        <div className="rounded-xl border border-default-200/50 bg-default-50/50 overflow-hidden">
          <div className="px-4 py-2 border-b border-default-200/50 bg-default-100/30 flex items-center justify-between">
            <span className="text-xs font-medium text-default-500 uppercase tracking-wider">
              Sample Data
            </span>
            <div className="flex items-center gap-2">
              <Chip size="sm" variant="flat" className="bg-primary/10 text-primary capitalize">
                {result.industry}
              </Chip>
              <Chip size="sm" variant="flat" className="bg-secondary/10 text-secondary">
                {result.currency}
              </Chip>
            </div>
          </div>
          <pre className="p-4 overflow-x-auto text-sm font-mono leading-relaxed max-h-[400px] overflow-y-auto">
            <code className="language-json">{jsonString}</code>
          </pre>
        </div>
      </div>

      {/* Fields and Lists Summary */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Fields Extracted */}
        {result.fields_extracted.length > 0 && (
          <div className="space-y-2">
            <h4 className="text-sm font-semibold text-foreground flex items-center gap-2">
              <svg className="w-4 h-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
              </svg>
              Fields Extracted
              <Chip size="sm" variant="flat" className="bg-default-100">
                {result.fields_extracted.length}
              </Chip>
            </h4>
            <div className="flex flex-wrap gap-1.5 max-h-[120px] overflow-y-auto">
              {result.fields_extracted.map((field, idx) => (
                <Chip
                  key={idx}
                  size="sm"
                  variant="flat"
                  className="bg-default-100 font-mono text-xs"
                  title={`Type: ${field.type}${field.functions.length ? `, Functions: ${field.functions.join(", ")}` : ""}`}
                >
                  {field.path}
                </Chip>
              ))}
            </div>
          </div>
        )}

        {/* Lists Detected */}
        {result.lists_detected.length > 0 && (
          <div className="space-y-2">
            <h4 className="text-sm font-semibold text-foreground flex items-center gap-2">
              <svg className="w-4 h-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 10h16M4 14h16M4 18h16" />
              </svg>
              Lists Detected
              <Chip size="sm" variant="flat" className="bg-default-100">
                {result.lists_detected.length}
              </Chip>
            </h4>
            <div className="flex flex-wrap gap-1.5">
              {result.lists_detected.map((list, idx) => (
                <Chip
                  key={idx}
                  size="sm"
                  variant="flat"
                  className="bg-secondary/10 text-secondary font-mono text-xs"
                >
                  {list}
                </Chip>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Notes */}
      {result.notes.length > 0 && (
        <div className="space-y-2">
          <h4 className="text-sm font-semibold text-foreground flex items-center gap-2">
            <svg className="w-4 h-4 text-warning" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            Generation Notes
          </h4>
          <ul className="list-disc list-inside space-y-1 text-sm text-default-600">
            {result.notes.map((note, idx) => (
              <li key={idx}>{note}</li>
            ))}
          </ul>
        </div>
      )}

      {/* Session link */}
      {sessionId && (
        <div className="pt-4 border-t border-default-200/50 flex items-center justify-between">
          <span className="text-xs text-default-400">Session: {sessionId.slice(0, 8)}...</span>
          <Link href={`/html-builder/${sessionId}`}>
            <Button size="sm" variant="flat">
              View Details
            </Button>
          </Link>
        </div>
      )}
    </div>
  );
}

// ============================================================================
// TEMPLATE DESIGN RESULT VIEW
// ============================================================================

interface TemplateDesignResultViewProps {
  result: TemplateDesignOutput;
  sessionId?: string;
}

/**
 * Display component for AI-generated HTML template designs.
 * Shows the complete HTML template with preview, metadata, and customization suggestions.
 */
// Default sample data for live preview
// Sample data structured to match Zuora's nested object paths
// Templates use paths like Invoice.Account.Name, Invoice.Account.BillTo.City
const DEFAULT_SAMPLE_DATA = {
  Invoice: {
    InvoiceNumber: "INV-2024-001",
    InvoiceDate: "2024-01-15",
    DueDate: "2024-02-14",
    Amount: 1250.00,
    AmountWithoutTax: 1187.50,
    TaxAmount: 62.50,
    Balance: 1250.00,
    Status: "Posted",
    Currency: "USD",
    Account: {
      Name: "Acme Corporation",
      AccountNumber: "A-00001234",
      Currency: "USD",
      BillTo: {
        FirstName: "John",
        LastName: "Smith",
        Address1: "123 Main Street",
        Address2: "Suite 100",
        City: "San Francisco",
        State: "CA",
        PostalCode: "94105",
        Country: "United States",
        WorkEmail: "john.smith@acme.com",
        Company: "Acme Corporation",
      },
      SoldTo: {
        FirstName: "Jane",
        LastName: "Doe",
        Address1: "456 Oak Avenue",
        City: "Los Angeles",
        State: "CA",
        PostalCode: "90001",
        Country: "United States",
      },
    },
    InvoiceItems: [
      { ChargeName: "Monthly Subscription", ChargeDescription: "Base plan", ServiceStartDate: "2024-01-01", ServiceEndDate: "2024-01-31", Quantity: 1, UnitPrice: 500.00, ChargeAmount: 500.00 },
      { ChargeName: "Usage Overage", ChargeDescription: "API calls", ServiceStartDate: "2024-01-01", ServiceEndDate: "2024-01-31", Quantity: 150, UnitPrice: 5.00, ChargeAmount: 750.00 },
    ],
    TaxationItems: [
      { TaxName: "State Tax", TaxAmount: 62.50, TaxRate: 5.00, TaxJurisdiction: "California" },
    ],
  },
};

// Currency options for the picklist
const CURRENCY_OPTIONS = [
  { value: "USD", label: "USD - US Dollar" },
  { value: "CAD", label: "CAD - Canadian Dollar" },
  { value: "EUR", label: "EUR - Euro" },
];

export function TemplateDesignResultView({
  result,
  sessionId,
}: TemplateDesignResultViewProps) {
  const [copied, setCopied] = useState(false);
  const [activeTab, setActiveTab] = useState<"preview" | "code" | "live">("preview");
  const [sampleDataJson, setSampleDataJson] = useState(JSON.stringify(DEFAULT_SAMPLE_DATA, null, 2));
  const [dataError, setDataError] = useState<string | null>(null);
  const [currency, setCurrency] = useState<string>("USD");
  const { isOpen: isModalOpen, onOpen: onModalOpen, onClose: onModalClose } = useDisclosure();

  // Parse sample data and render preview
  const livePreview = useMemo(() => {
    try {
      const data = JSON.parse(sampleDataJson);
      setDataError(null);
      const renderResult = render(result.html, data, { currency, showMissingFields: true });
      return renderResult;
    } catch (err) {
      setDataError(err instanceof Error ? err.message : "Invalid JSON");
      return null;
    }
  }, [sampleDataJson, result.html, currency]);

  const copyToClipboard = async () => {
    await navigator.clipboard.writeText(result.html);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const downloadHtml = () => {
    const blob = new Blob([result.html], { type: "text/html" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "template.html";
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="space-y-6">
      {/* Header with actions */}
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold text-foreground flex items-center gap-2">
          <svg className="w-5 h-5 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
          </svg>
          Generated Template
        </h3>
        <div className="flex items-center gap-2">
          <Button
            size="sm"
            variant="flat"
            startContent={
              copied ? (
                <svg className="w-4 h-4 text-success" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              ) : (
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
              )
            }
            onPress={copyToClipboard}
          >
            {copied ? "Copied!" : "Copy HTML"}
          </Button>
          <Button
            size="sm"
            variant="flat"
            startContent={
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
            }
            onPress={downloadHtml}
          >
            Download
          </Button>
        </div>
      </div>

      {/* Preview/Code Tabs */}
      <Tabs
        selectedKey={activeTab}
        onSelectionChange={(key) => setActiveTab(key as "preview" | "code")}
        variant="underlined"
        classNames={{
          tabList: "gap-4",
          cursor: "bg-secondary",
          tab: "px-0 h-10",
        }}
      >
        <Tab
          key="preview"
          title={
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </svg>
              Preview
            </div>
          }
        />
        <Tab
          key="code"
          title={
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
              </svg>
              HTML Code
            </div>
          }
        />
        <Tab
          key="live"
          title={
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              Live Preview
              <Chip size="sm" variant="flat" className="bg-success/20 text-success text-xs">
                New
              </Chip>
            </div>
          }
        />
      </Tabs>

      {/* Tab Content */}
      {activeTab === "preview" ? (
        <div className="rounded-lg border border-default-200 bg-white overflow-hidden">
          <iframe
            srcDoc={result.html}
            className="w-full min-h-[600px]"
            title="Template Preview"
            sandbox="allow-same-origin"
          />
        </div>
      ) : activeTab === "code" ? (
        <div className="relative">
          <pre className="bg-default-100/50 rounded-lg p-4 overflow-x-auto text-sm max-h-[600px] overflow-y-auto">
            <code className="language-html text-default-700">{result.html}</code>
          </pre>
        </div>
      ) : (
        <div className="space-y-4">
          {/* Controls Bar */}
          <div className="flex items-center justify-between flex-wrap gap-3 p-3 bg-default-50 rounded-lg border border-default-200">
            <div className="flex items-center gap-3">
              {/* Currency Selector */}
              <div className="flex items-center gap-2">
                <span className="text-sm text-default-600">Currency:</span>
                <Select
                  size="sm"
                  selectedKeys={[currency]}
                  onSelectionChange={(keys) => {
                    const selected = Array.from(keys)[0] as string;
                    if (selected) setCurrency(selected);
                  }}
                  className="w-40"
                  aria-label="Select currency"
                >
                  {CURRENCY_OPTIONS.map((opt) => (
                    <SelectItem key={opt.value}>{opt.label}</SelectItem>
                  ))}
                </Select>
              </div>
            </div>

            {/* Modal Button */}
            <Button
              size="sm"
              variant="flat"
              color="primary"
              startContent={
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
                </svg>
              }
              onPress={onModalOpen}
            >
              Open Full Preview
            </Button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            {/* Sample Data Editor */}
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <h4 className="text-sm font-semibold text-foreground flex items-center gap-2">
                  <svg className="w-4 h-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4" />
                  </svg>
                  Sample Data (JSON)
                </h4>
                {dataError && (
                  <Chip size="sm" color="danger" variant="flat">
                    {dataError}
                  </Chip>
                )}
              </div>
              <Textarea
                value={sampleDataJson}
                onValueChange={setSampleDataJson}
                minRows={20}
                maxRows={30}
                classNames={{
                  input: "font-mono text-xs",
                }}
                isInvalid={!!dataError}
                placeholder="Edit JSON to see live preview..."
              />
              <p className="text-xs text-default-400">
                Edit the JSON above to see how the template renders with different data. The preview updates automatically.
              </p>
            </div>

          {/* Live Rendered Preview */}
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <h4 className="text-sm font-semibold text-foreground flex items-center gap-2">
                <svg className="w-4 h-4 text-success" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
                Rendered Output
              </h4>
              {livePreview && (
                <div className="flex items-center gap-2 text-xs">
                  <Chip size="sm" variant="flat" color="default">
                    {livePreview.stats.fieldsProcessed} fields
                  </Chip>
                  {livePreview.stats.loopsProcessed > 0 && (
                    <Chip size="sm" variant="flat" color="primary">
                      {livePreview.stats.loopsProcessed} loops
                    </Chip>
                  )}
                  {livePreview.warnings.length > 0 && (
                    <Chip size="sm" variant="flat" color="warning">
                      {livePreview.warnings.length} warnings
                    </Chip>
                  )}
                </div>
              )}
            </div>

            {/* Warnings */}
            {livePreview && livePreview.warnings.length > 0 && (
              <div className="space-y-1 max-h-20 overflow-y-auto">
                {livePreview.warnings.slice(0, 3).map((warning, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-xs text-warning-600 bg-warning-50 rounded px-2 py-1">
                    <svg className="w-3 h-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                    </svg>
                    <span>{warning.message}</span>
                  </div>
                ))}
                {livePreview.warnings.length > 3 && (
                  <p className="text-xs text-warning-400">...and {livePreview.warnings.length - 3} more</p>
                )}
              </div>
            )}

            {livePreview?.html ? (
              <PreviewFrame
                html={livePreview.html}
                title="Live Preview"
                initialZoom={75}
                className="min-h-[500px]"
              />
            ) : (
              <div className="flex items-center justify-center h-[500px] rounded-lg border border-default-200 bg-default-50">
                <p className="text-sm text-default-400">Fix JSON errors to see preview</p>
              </div>
            )}
          </div>
          </div>
        </div>
      )}

      {/* Full Preview Modal */}
      <Modal
        isOpen={isModalOpen}
        onClose={onModalClose}
        size="full"
        scrollBehavior="inside"
        classNames={{
          base: "max-w-[95vw] max-h-[95vh]",
          body: "p-0",
        }}
      >
        <ModalContent>
          <ModalHeader className="flex items-center justify-between gap-4 border-b border-default-200 px-6">
            <div className="flex items-center gap-3">
              <svg className="w-5 h-5 text-success" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </svg>
              <span>Full Preview</span>
              {livePreview && (
                <div className="flex items-center gap-2 text-xs">
                  <Chip size="sm" variant="flat" color="default">
                    {livePreview.stats.fieldsProcessed} fields
                  </Chip>
                  {livePreview.stats.loopsProcessed > 0 && (
                    <Chip size="sm" variant="flat" color="primary">
                      {livePreview.stats.loopsProcessed} loops
                    </Chip>
                  )}
                  {livePreview.warnings.length > 0 && (
                    <Chip size="sm" variant="flat" color="warning">
                      {livePreview.warnings.length} warnings
                    </Chip>
                  )}
                </div>
              )}
            </div>
            <div className="flex items-center gap-3">
              <span className="text-sm text-default-500">Currency:</span>
              <Select
                size="sm"
                selectedKeys={[currency]}
                onSelectionChange={(keys) => {
                  const selected = Array.from(keys)[0] as string;
                  if (selected) setCurrency(selected);
                }}
                className="w-40"
                aria-label="Select currency"
              >
                {CURRENCY_OPTIONS.map((opt) => (
                  <SelectItem key={opt.value}>{opt.label}</SelectItem>
                ))}
              </Select>
            </div>
          </ModalHeader>
          <ModalBody className="p-4 overflow-hidden">
            <div className="grid grid-cols-[350px_1fr] gap-4 h-full">
              {/* Sample Data Editor Panel */}
              <div className="flex flex-col space-y-3 overflow-hidden">
                <div className="flex items-center justify-between">
                  <h4 className="text-sm font-semibold text-foreground flex items-center gap-2">
                    <svg className="w-4 h-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4" />
                    </svg>
                    Sample Data (JSON)
                  </h4>
                  {dataError && (
                    <Chip size="sm" color="danger" variant="flat" className="text-xs">
                      Invalid
                    </Chip>
                  )}
                </div>
                <Textarea
                  value={sampleDataJson}
                  onValueChange={setSampleDataJson}
                  classNames={{
                    base: "flex-1",
                    inputWrapper: "h-full",
                    input: "font-mono text-xs h-full",
                  }}
                  isInvalid={!!dataError}
                  placeholder="Edit JSON to see live preview..."
                  style={{ minHeight: "calc(80vh - 100px)" }}
                />
                <p className="text-xs text-default-400 shrink-0">
                  Edit JSON to see live preview updates.
                </p>
              </div>

              {/* Preview Panel */}
              <div className="flex flex-col space-y-3 overflow-hidden">
                <div className="flex items-center justify-between">
                  <h4 className="text-sm font-semibold text-foreground flex items-center gap-2">
                    <svg className="w-4 h-4 text-success" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                    Rendered Output
                  </h4>
                </div>

                {/* Warnings */}
                {livePreview && livePreview.warnings.length > 0 && (
                  <div className="space-y-1 max-h-16 overflow-y-auto shrink-0">
                    {livePreview.warnings.slice(0, 2).map((warning, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-xs text-warning-600 bg-warning-50 rounded px-2 py-1">
                        <svg className="w-3 h-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                        </svg>
                        <span className="truncate">{warning.message}</span>
                      </div>
                    ))}
                    {livePreview.warnings.length > 2 && (
                      <p className="text-xs text-warning-400">...and {livePreview.warnings.length - 2} more</p>
                    )}
                  </div>
                )}

                {livePreview?.html ? (
                  <div className="flex-1 min-h-0" style={{ minHeight: "calc(80vh - 100px)" }}>
                    <PreviewFrame
                      html={livePreview.html}
                      title="Full Preview"
                      initialZoom={100}
                      className="h-full"
                    />
                  </div>
                ) : (
                  <div className="flex items-center justify-center flex-1 rounded-lg border border-default-200 bg-default-50" style={{ minHeight: "calc(80vh - 100px)" }}>
                    <p className="text-sm text-default-400">Fix JSON errors to see preview</p>
                  </div>
                )}
              </div>
            </div>
          </ModalBody>
        </ModalContent>
      </Modal>

      {/* Explanation */}
      <div className="space-y-2">
        <h4 className="text-sm font-semibold text-foreground flex items-center gap-2">
          <svg className="w-4 h-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
          </svg>
          Design Explanation
        </h4>
        <p className="text-sm text-default-600 leading-relaxed">{result.explanation}</p>
      </div>

      {/* Metadata Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Sections Included */}
        {result.sections_included.length > 0 && (
          <div className="space-y-2">
            <h4 className="text-sm font-semibold text-foreground">Sections Included</h4>
            <div className="flex flex-wrap gap-1.5">
              {result.sections_included.map((section, idx) => (
                <Chip key={idx} size="sm" variant="flat" color="primary">
                  {section}
                </Chip>
              ))}
            </div>
          </div>
        )}

        {/* Objects Used */}
        {result.objects_used.length > 0 && (
          <div className="space-y-2">
            <h4 className="text-sm font-semibold text-foreground">Objects Used</h4>
            <div className="flex flex-wrap gap-1.5">
              {result.objects_used.map((obj, idx) => (
                <Chip key={idx} size="sm" variant="flat" color="secondary">
                  {obj}
                </Chip>
              ))}
            </div>
          </div>
        )}

        {/* Functions Used */}
        {result.functions_used.length > 0 && (
          <div className="space-y-2">
            <h4 className="text-sm font-semibold text-foreground">Functions Used</h4>
            <div className="flex flex-wrap gap-1.5">
              {result.functions_used.map((func, idx) => (
                <Chip key={idx} size="sm" variant="flat" color="warning">
                  {func}
                </Chip>
              ))}
            </div>
          </div>
        )}

        {/* Industry Customizations */}
        {result.industry_customizations.length > 0 && (
          <div className="space-y-2">
            <h4 className="text-sm font-semibold text-foreground">Industry Customizations</h4>
            <div className="flex flex-wrap gap-1.5">
              {result.industry_customizations.map((custom, idx) => (
                <Chip key={idx} size="sm" variant="flat" color="success">
                  {custom}
                </Chip>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Customization Suggestions */}
      {result.customization_suggestions.length > 0 && (
        <div className="space-y-2">
          <h4 className="text-sm font-semibold text-foreground flex items-center gap-2">
            <svg className="w-4 h-4 text-warning" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
            </svg>
            Customization Suggestions
          </h4>
          <ul className="list-disc list-inside space-y-1 text-sm text-default-600">
            {result.customization_suggestions.map((suggestion, idx) => (
              <li key={idx}>{suggestion}</li>
            ))}
          </ul>
        </div>
      )}

      {/* Session link */}
      {sessionId && (
        <div className="pt-4 border-t border-default-200/50 flex items-center justify-between">
          <span className="text-xs text-default-400">Session: {sessionId.slice(0, 8)}...</span>
          <Link href={`/html-builder/${sessionId}`}>
            <Button size="sm" variant="flat">
              View Details
            </Button>
          </Link>
        </div>
      )}
    </div>
  );
}
