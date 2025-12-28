/**
 * HTML Template Result View Component
 *
 * Displays generated template code or expressions with syntax highlighting,
 * copy functionality, and explanations.
 */

"use client";

import { Button, Chip, addToast, Tooltip } from "@heroui/react";
import { useState } from "react";
import Link from "next/link";
import type {
  HTMLTemplateMode,
  HTMLTemplateCodeOutput,
  HTMLTemplateExpressionOutput,
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
