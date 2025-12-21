"use client";

import { Button, Card, CardBody, addToast } from "@heroui/react";
import { usePatchOutput } from "@/hooks/useSessions";

interface SuggestedEdit {
  field: string;
  currentValue?: unknown;
  suggestedValue?: unknown;
  reason: string;
}

interface SuggestedEditsCardProps {
  sessionId: string;
  edits: SuggestedEdit[];
  onApplied?: () => void;
  onDismiss?: () => void;
}

export function SuggestedEditsCard({
  sessionId,
  edits,
  onApplied,
  onDismiss,
}: SuggestedEditsCardProps) {
  const patchMutation = usePatchOutput(sessionId);

  // Parse stringified value back to proper type
  const parseValue = (value: unknown): unknown => {
    if (typeof value !== 'string') return value;

    // Try to parse as JSON (handles numbers, booleans, objects, arrays)
    try {
      return JSON.parse(value);
    } catch {
      // If parsing fails, return as string (it's probably meant to be a string)
      return value;
    }
  };

  const handleApplyEdit = async (edit: SuggestedEdit) => {
    try {
      const parsedValue = parseValue(edit.suggestedValue);

      await patchMutation.mutateAsync({
        path: edit.field,
        value: parsedValue,
        description: edit.reason,
      });

      addToast({
        title: "Change Applied",
        description: "The analysis has been updated.",
        color: "success",
      });

      onApplied?.();
    } catch {
      addToast({
        title: "Error",
        description: "Failed to apply change. Please try again.",
        color: "danger",
      });
    }
  };

  const handleApplyAll = async () => {
    for (const edit of edits) {
      try {
        const parsedValue = parseValue(edit.suggestedValue);
        await patchMutation.mutateAsync({
          path: edit.field,
          value: parsedValue,
          description: edit.reason,
        });
      } catch (error) {
        console.error("Failed to apply edit:", edit.field, error);
      }
    }

    addToast({
      title: "All Changes Applied",
      description: `Applied ${edits.length} change(s) to the analysis.`,
      color: "success",
    });

    onApplied?.();
  };

  const formatValue = (value: unknown): string => {
    if (value === null || value === undefined) return "—";
    if (typeof value === "object") return JSON.stringify(value);
    return String(value);
  };

  const formatFieldPath = (path: string): string => {
    // Extract the most relevant part of the path for display
    const parts = path.split(".");
    const lastPart = parts[parts.length - 1];

    // Handle array indices
    const cleaned = lastPart.replace(/\[\d+\]/g, "");

    // Convert camelCase to Title Case
    return cleaned
      .replace(/([A-Z])/g, " $1")
      .replace(/^./, (str) => str.toUpperCase())
      .trim();
  };

  if (edits.length === 0) return null;

  return (
    <Card className="bg-primary/5 border border-primary/20 mt-3">
      <CardBody className="p-4">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-2">
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
                d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
              />
            </svg>
            <span className="text-sm font-medium text-primary">
              Suggested Changes
            </span>
          </div>
          <div className="flex gap-2">
            {edits.length > 1 && (
              <Button
                size="sm"
                color="primary"
                variant="flat"
                onPress={handleApplyAll}
                isLoading={patchMutation.isPending}
              >
                Apply All ({edits.length})
              </Button>
            )}
            <Button
              size="sm"
              variant="light"
              onPress={onDismiss}
              className="text-default-500"
            >
              Dismiss
            </Button>
          </div>
        </div>

        <div className="space-y-3">
          {edits.map((edit, index) => (
            <div
              key={index}
              className="bg-background/50 rounded-lg p-3 border border-default-200/50"
            >
              <div className="flex items-start justify-between gap-3">
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-foreground">
                    {formatFieldPath(edit.field)}
                  </p>
                  <p className="text-xs text-default-500 mt-0.5 font-mono truncate">
                    {edit.field}
                  </p>
                  <p className="text-sm text-default-600 mt-2">
                    {edit.reason}
                  </p>
                  <div className="flex items-center gap-2 mt-2 text-xs">
                    <span className="text-default-400">
                      {formatValue(edit.currentValue)}
                    </span>
                    <svg
                      className="w-3 h-3 text-primary"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 7l5 5m0 0l-5 5m5-5H6"
                      />
                    </svg>
                    <span className="text-primary font-medium">
                      {formatValue(edit.suggestedValue)}
                    </span>
                  </div>
                </div>
                <Button
                  size="sm"
                  color="primary"
                  onPress={() => handleApplyEdit(edit)}
                  isLoading={patchMutation.isPending}
                  className="flex-shrink-0"
                >
                  Apply
                </Button>
              </div>
            </div>
          ))}
        </div>
      </CardBody>
    </Card>
  );
}
