"use client";

/**
 * TemplatePreviewPanel - Main panel for interactive template preview.
 *
 * Provides a split view with template code on left and live preview on right.
 * Includes sample data editor and render statistics.
 */

import { useState, useCallback, useMemo } from "react";
import {
  Card,
  CardBody,
  Button,
  Chip,
  Tooltip,
  Tabs,
  Tab,
  Textarea,
} from "@heroui/react";

// Inline SVG icons
const RefreshIcon = ({ className = "w-4 h-4" }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
  </svg>
);

const AlertTriangleIcon = ({ className = "w-4 h-4" }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
  </svg>
);

const AlertCircleIcon = ({ className = "w-4 h-4" }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

const InfoIcon = ({ className = "w-4 h-4" }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

const CodeIcon = ({ className = "w-4 h-4" }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
  </svg>
);

const DatabaseIcon = ({ className = "w-4 h-4" }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
  </svg>
);

const EyeIcon = ({ className = "w-4 h-4" }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
  </svg>
);

const CopyIcon = ({ className = "w-4 h-4" }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
  </svg>
);

const CheckIcon = ({ className = "w-4 h-4" }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
  </svg>
);
import {
  useTemplatePreview,
  parseSampleData,
  stringifySampleData,
} from "@/hooks/useTemplatePreview";
import type { RenderResult } from "@zuca/pipeline/template-preview";
import PreviewFrame from "./PreviewFrame";

interface TemplatePreviewPanelProps {
  /** Initial template code */
  initialTemplate?: string;
  /** Initial sample data */
  initialData?: Record<string, unknown>;
  /** Currency for formatting */
  currency?: string;
  /** Whether to show the data editor (default: true) */
  showDataEditor?: boolean;
  /** Whether to show stats (default: true) */
  showStats?: boolean;
  /** Additional class name */
  className?: string;
  /** Callback when template changes */
  onTemplateChange?: (template: string) => void;
  /** Callback when data changes */
  onDataChange?: (data: Record<string, unknown>) => void;
}

/**
 * Render statistics display
 */
function RenderStats({ stats }: { stats: RenderResult["stats"] }) {
  return (
    <div className="flex flex-wrap gap-2 text-xs">
      <Chip size="sm" variant="flat" color="default">
        {stats.fieldsProcessed} fields
      </Chip>
      {stats.loopsProcessed > 0 && (
        <Chip size="sm" variant="flat" color="primary">
          {stats.loopsProcessed} loops
        </Chip>
      )}
      {stats.conditionalsProcessed > 0 && (
        <Chip size="sm" variant="flat" color="secondary">
          {stats.conditionalsProcessed} conditionals
        </Chip>
      )}
      {stats.expressionsProcessed > 0 && (
        <Chip size="sm" variant="flat" color="warning">
          {stats.expressionsProcessed} expressions
        </Chip>
      )}
    </div>
  );
}

/**
 * Errors and warnings display
 */
function RenderMessages({
  errors,
  warnings,
}: {
  errors: RenderResult["errors"];
  warnings: RenderResult["warnings"];
}) {
  if (errors.length === 0 && warnings.length === 0) {
    return null;
  }

  return (
    <div className="space-y-2 max-h-32 overflow-y-auto">
      {errors.map((error, i) => (
        <div
          key={`error-${i}`}
          className="flex items-start gap-2 text-xs text-danger-600 bg-danger-50 rounded-md p-2"
        >
          <AlertCircleIcon className="w-4 h-4 flex-shrink-0 mt-0.5" />
          <div>
            <span className="font-medium">{error.type}:</span> {error.message}
            {error.field && (
              <span className="text-danger-400 ml-1">({error.field})</span>
            )}
          </div>
        </div>
      ))}
      {warnings.map((warning, i) => (
        <div
          key={`warning-${i}`}
          className="flex items-start gap-2 text-xs text-warning-600 bg-warning-50 rounded-md p-2"
        >
          <AlertTriangleIcon className="w-4 h-4 flex-shrink-0 mt-0.5" />
          <div>
            <span className="font-medium">{warning.type}:</span> {warning.message}
            {warning.field && (
              <span className="text-warning-400 ml-1">({warning.field})</span>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}

export default function TemplatePreviewPanel({
  initialTemplate = "",
  initialData = {},
  currency = "USD",
  showDataEditor = true,
  showStats = true,
  className = "",
  onTemplateChange,
  onDataChange,
}: TemplatePreviewPanelProps) {
  const [activeTab, setActiveTab] = useState<"preview" | "code" | "data">("preview");
  const [dataJson, setDataJson] = useState(stringifySampleData(initialData));
  const [dataError, setDataError] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);

  const {
    template,
    setTemplate,
    data,
    setData,
    result,
    isRendering,
    renderNow,
    options,
    setOptions,
  } = useTemplatePreview({
    initialTemplate,
    initialData,
    renderOptions: { currency, showMissingFields: true },
    debounceMs: 300,
  });

  // Handle template changes
  const handleTemplateChange = useCallback(
    (newTemplate: string) => {
      setTemplate(newTemplate);
      onTemplateChange?.(newTemplate);
    },
    [setTemplate, onTemplateChange]
  );

  // Handle data JSON changes
  const handleDataJsonChange = useCallback(
    (json: string) => {
      setDataJson(json);
      const parsed = parseSampleData(json);
      if (parsed) {
        setDataError(null);
        setData(parsed);
        onDataChange?.(parsed);
      } else {
        setDataError("Invalid JSON format");
      }
    },
    [setData, onDataChange]
  );

  // Copy rendered HTML to clipboard
  const handleCopyHtml = useCallback(async () => {
    if (!result?.html) return;
    try {
      await navigator.clipboard.writeText(result.html);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Clipboard API not available
    }
  }, [result?.html]);

  // Currency change handler
  const handleCurrencyChange = useCallback(
    (newCurrency: string) => {
      setOptions({ currency: newCurrency });
    },
    [setOptions]
  );

  // Status indicator
  const statusInfo = useMemo(() => {
    if (isRendering) {
      return { color: "warning" as const, text: "Rendering..." };
    }
    if (!result) {
      return { color: "default" as const, text: "Ready" };
    }
    if (result.errors.length > 0) {
      return { color: "danger" as const, text: `${result.errors.length} errors` };
    }
    if (result.warnings.length > 0) {
      return {
        color: "warning" as const,
        text: `${result.warnings.length} warnings`,
      };
    }
    return { color: "success" as const, text: "Success" };
  }, [isRendering, result]);

  return (
    <Card className={`${className}`}>
      <CardBody className="p-0">
        {/* Header */}
        <div className="flex items-center justify-between px-4 py-3 border-b border-default-200">
          <div className="flex items-center gap-3">
            <EyeIcon className="w-5 h-5 text-primary-500" />
            <span className="font-semibold">Live Preview</span>
            <Chip size="sm" color={statusInfo.color} variant="flat">
              {statusInfo.text}
            </Chip>
          </div>

          <div className="flex items-center gap-2">
            {showStats && result && (
              <RenderStats stats={result.stats} />
            )}

            <Tooltip content="Refresh preview">
              <Button
                isIconOnly
                size="sm"
                variant="light"
                onPress={renderNow}
                isLoading={isRendering}
              >
                <RefreshIcon />
              </Button>
            </Tooltip>
          </div>
        </div>

        {/* Tabs */}
        <div className="border-b border-default-200">
          <Tabs
            selectedKey={activeTab}
            onSelectionChange={(key) => setActiveTab(key as typeof activeTab)}
            variant="underlined"
            classNames={{
              tabList: "px-4",
              tab: "h-10",
            }}
          >
            <Tab
              key="preview"
              title={
                <div className="flex items-center gap-2">
                  <EyeIcon />
                  <span>Preview</span>
                </div>
              }
            />
            <Tab
              key="code"
              title={
                <div className="flex items-center gap-2">
                  <CodeIcon />
                  <span>Rendered HTML</span>
                </div>
              }
            />
            {showDataEditor && (
              <Tab
                key="data"
                title={
                  <div className="flex items-center gap-2">
                    <DatabaseIcon />
                    <span>Sample Data</span>
                    {dataError && (
                      <AlertCircleIcon className="w-3 h-3 text-danger-500" />
                    )}
                  </div>
                }
              />
            )}
          </Tabs>
        </div>

        {/* Content */}
        <div className="p-4">
          {activeTab === "preview" && (
            <div className="space-y-4">
              {/* Messages */}
              {result && (
                <RenderMessages
                  errors={result.errors}
                  warnings={result.warnings}
                />
              )}

              {/* Preview frame */}
              {result?.html ? (
                <PreviewFrame
                  html={result.html}
                  title="Template Preview"
                  initialZoom={100}
                />
              ) : (
                <div className="flex flex-col items-center justify-center py-16 text-default-400">
                  <InfoIcon className="w-12 h-12 mb-4" />
                  <p className="text-lg font-medium">No preview available</p>
                  <p className="text-sm">
                    Enter template code and sample data to see the preview
                  </p>
                </div>
              )}
            </div>
          )}

          {activeTab === "code" && (
            <div className="space-y-2">
              <div className="flex justify-end">
                <Tooltip content={copied ? "Copied!" : "Copy HTML"}>
                  <Button
                    size="sm"
                    variant="flat"
                    startContent={
                      copied ? (
                        <CheckIcon />
                      ) : (
                        <CopyIcon />
                      )
                    }
                    onPress={handleCopyHtml}
                    isDisabled={!result?.html}
                  >
                    {copied ? "Copied" : "Copy"}
                  </Button>
                </Tooltip>
              </div>
              <pre className="p-4 bg-default-100 rounded-lg overflow-auto max-h-96 text-sm font-mono">
                {result?.html || "No rendered HTML yet"}
              </pre>
            </div>
          )}

          {activeTab === "data" && showDataEditor && (
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="text-sm text-default-500">
                  Edit the JSON below to provide sample data for merge fields
                </div>
                {dataError && (
                  <Chip size="sm" color="danger" variant="flat">
                    {dataError}
                  </Chip>
                )}
              </div>

              <Textarea
                value={dataJson}
                onValueChange={handleDataJsonChange}
                placeholder='{\n  "Invoice": {\n    "Number": "INV-001",\n    "Amount": 1000\n  }\n}'
                minRows={12}
                maxRows={20}
                classNames={{
                  input: "font-mono text-sm",
                }}
                isInvalid={!!dataError}
              />

              <div className="flex items-center gap-2 text-xs text-default-400">
                <InfoIcon />
                <span>
                  Use dot notation for nested paths (e.g., Invoice.LineItems)
                </span>
              </div>
            </div>
          )}
        </div>
      </CardBody>
    </Card>
  );
}

// Export subcomponents for flexible usage
export { PreviewFrame, RenderStats, RenderMessages };
