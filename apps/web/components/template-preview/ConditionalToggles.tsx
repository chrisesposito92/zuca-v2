"use client";

/**
 * ConditionalToggles - UI for testing conditional branches in templates.
 *
 * Extracts conditional fields from templates and provides toggles
 * to simulate empty/non-empty states for testing different code paths.
 */

import { useMemo, useCallback } from "react";
import { Switch, Chip, Tooltip, Card, CardBody } from "@heroui/react";

// Inline SVG icons
const ToggleIcon = ({ className = "w-4 h-4" }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l4-4 4 4m0 6l-4 4-4-4" />
  </svg>
);

const BranchIcon = ({ className = "w-4 h-4" }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 5l7 7-7 7M5 5l7 7-7 7" />
  </svg>
);

// ============================================================================
// Types
// ============================================================================

export interface ConditionalField {
  /** Full field path (e.g., "Invoice.Discount") */
  path: string;
  /** Condition pipe applied (e.g., "IsEmpty", "EqualToVal('Active')") */
  condition: string | null;
  /** Display name for the UI */
  displayName: string;
  /** Whether this is an inverted condition (^) */
  isInverted: boolean;
}

interface ConditionalTogglesProps {
  /** The template code to analyze */
  template: string;
  /** Current sample data */
  data: Record<string, unknown>;
  /** Callback when data is modified */
  onDataChange: (data: Record<string, unknown>) => void;
  /** Additional class name */
  className?: string;
}

// ============================================================================
// Helpers
// ============================================================================

/**
 * Extract conditional fields from template code
 */
function extractConditionalFields(template: string): ConditionalField[] {
  const fields: ConditionalField[] = [];
  const seen = new Set<string>();

  // Match {{^FieldName}} or {{^FieldName|Condition}}
  const conditionalPattern = /\{\{\^([^{}|]+)(?:\|([^{}]+))?\}\}/g;

  let match;
  while ((match = conditionalPattern.exec(template)) !== null) {
    const path = match[1].trim();
    const condition = match[2]?.trim() || null;

    // Create a unique key for deduplication
    const key = `${path}|${condition || 'default'}`;
    if (seen.has(key)) continue;
    seen.add(key);

    // Extract display name (last part of path)
    const pathParts = path.split('.');
    const displayName = pathParts[pathParts.length - 1];

    fields.push({
      path,
      condition,
      displayName,
      isInverted: true, // ^ means inverted (show when empty/false)
    });
  }

  // Also extract regular conditionals from {{#Field}} used as boolean checks
  // These are less common but can exist
  const loopPattern = /\{\{#([^{}|]+)\}\}/g;
  while ((match = loopPattern.exec(template)) !== null) {
    const path = match[1].trim();

    // Skip if it looks like a loop (would have array data)
    // We'll include it if there's no closing tag nearby with array content
    const key = `${path}|boolean`;
    if (seen.has(key)) continue;

    // Check if this is likely a boolean check by looking for simple content patterns
    const closeTagIndex = template.indexOf(`{{/${path}}}`, match.index);
    if (closeTagIndex === -1) continue;

    const content = template.substring(match.index + match[0].length, closeTagIndex);
    // If content doesn't have nested merge fields with the same prefix, it might be boolean
    if (!content.includes(`{{${path}.`) && content.length < 500) {
      seen.add(key);

      const pathParts = path.split('.');
      const displayName = pathParts[pathParts.length - 1];

      fields.push({
        path,
        condition: null,
        displayName,
        isInverted: false,
      });
    }
  }

  return fields;
}

/**
 * Get a nested value from an object
 */
function getNestedValue(obj: Record<string, unknown>, path: string): unknown {
  const parts = path.split('.');
  let current: unknown = obj;

  for (const part of parts) {
    if (current === null || current === undefined) return undefined;
    if (typeof current !== 'object') return undefined;
    current = (current as Record<string, unknown>)[part];
  }

  return current;
}

/**
 * Set a nested value in an object (returns new object)
 */
function setNestedValue(
  obj: Record<string, unknown>,
  path: string,
  value: unknown
): Record<string, unknown> {
  const result = { ...obj };
  const parts = path.split('.');
  let current: Record<string, unknown> = result;

  for (let i = 0; i < parts.length - 1; i++) {
    const part = parts[i];
    if (current[part] === undefined || current[part] === null) {
      current[part] = {};
    } else if (typeof current[part] === 'object' && !Array.isArray(current[part])) {
      current[part] = { ...(current[part] as Record<string, unknown>) };
    }
    current = current[part] as Record<string, unknown>;
  }

  current[parts[parts.length - 1]] = value;
  return result;
}

/**
 * Check if a value would be considered "empty" by IsEmpty pipe
 */
function isValueEmpty(value: unknown): boolean {
  if (value === null || value === undefined) return true;
  if (value === '') return true;
  if (value === 0) return false; // 0 is not empty
  if (Array.isArray(value) && value.length === 0) return true;
  return false;
}

/**
 * Get a non-empty placeholder value for a field
 */
function getNonEmptyValue(field: ConditionalField): unknown {
  // Based on the condition, return appropriate non-empty value
  if (field.condition) {
    const condLower = field.condition.toLowerCase();
    if (condLower.includes('equaltoval')) {
      // Extract the value from EqualToVal('value')
      const match = field.condition.match(/equaltoval\s*\(\s*['"]?([^'")\s]+)['"]?\s*\)/i);
      if (match) {
        return match[1];
      }
    }
  }

  // Default: return a placeholder string
  return `[${field.displayName}]`;
}

// ============================================================================
// Component
// ============================================================================

export default function ConditionalToggles({
  template,
  data,
  onDataChange,
  className = "",
}: ConditionalTogglesProps) {
  // Extract conditional fields from template
  const conditionalFields = useMemo(
    () => extractConditionalFields(template),
    [template]
  );

  // Handle toggle change
  const handleToggle = useCallback(
    (field: ConditionalField, shouldBeEmpty: boolean) => {
      const newValue = shouldBeEmpty ? null : getNonEmptyValue(field);
      const newData = setNestedValue(data, field.path, newValue);
      onDataChange(newData);
    },
    [data, onDataChange]
  );

  // Get current state for a field
  const getFieldState = useCallback(
    (field: ConditionalField): { isEmpty: boolean; showsBranch: boolean } => {
      const value = getNestedValue(data, field.path);
      const isEmpty = isValueEmpty(value);

      // For inverted conditionals (^), branch shows when condition is met
      // ^Field|IsEmpty shows content when field IS empty
      const showsBranch = field.isInverted ? isEmpty : !isEmpty;

      return { isEmpty, showsBranch };
    },
    [data]
  );

  // Don't render if no conditionals found
  if (conditionalFields.length === 0) {
    return null;
  }

  return (
    <Card className={className}>
      <CardBody className="p-3">
        <div className="flex items-center gap-2 mb-3">
          <BranchIcon className="w-4 h-4 text-secondary-500" />
          <span className="text-sm font-medium">Conditional Branches</span>
          <Chip size="sm" variant="flat" color="secondary">
            {conditionalFields.length} found
          </Chip>
        </div>

        <div className="space-y-2">
          {conditionalFields.map((field) => {
            const { isEmpty, showsBranch } = getFieldState(field);

            return (
              <div
                key={`${field.path}-${field.condition}`}
                className="flex items-center justify-between py-1.5 px-2 bg-default-50 rounded-md"
              >
                <div className="flex items-center gap-2 flex-1 min-w-0">
                  <Tooltip
                    content={
                      <div className="p-1">
                        <div className="font-mono text-xs mb-1">{field.path}</div>
                        {field.condition && (
                          <div className="text-xs text-default-400">
                            Condition: {field.condition}
                          </div>
                        )}
                      </div>
                    }
                  >
                    <code className="text-xs font-mono text-default-600 truncate">
                      {field.isInverted ? "^" : "#"}{field.displayName}
                    </code>
                  </Tooltip>

                  {field.condition && (
                    <Chip size="sm" variant="dot" color="secondary" className="text-xs">
                      {field.condition.length > 15
                        ? field.condition.substring(0, 12) + "..."
                        : field.condition}
                    </Chip>
                  )}
                </div>

                <div className="flex items-center gap-3">
                  <span className={`text-xs ${showsBranch ? 'text-success-600' : 'text-default-400'}`}>
                    {showsBranch ? "Branch shown" : "Branch hidden"}
                  </span>

                  <Tooltip
                    content={isEmpty ? "Set non-empty (hide branch)" : "Set empty (show branch)"}
                  >
                    <Switch
                      size="sm"
                      isSelected={isEmpty}
                      onValueChange={(selected) => handleToggle(field, selected)}
                      classNames={{
                        wrapper: "group-data-[selected=true]:bg-secondary-500",
                      }}
                    >
                      <span className="text-xs">
                        {isEmpty ? "Empty" : "Has Value"}
                      </span>
                    </Switch>
                  </Tooltip>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-3 text-xs text-default-400 flex items-center gap-1">
          <ToggleIcon className="w-3 h-3" />
          <span>Toggle switches to test different conditional paths</span>
        </div>
      </CardBody>
    </Card>
  );
}

// Export extraction function for external use
export { extractConditionalFields };
