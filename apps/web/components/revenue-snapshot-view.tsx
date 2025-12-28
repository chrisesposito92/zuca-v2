"use client";

import { useState } from "react";
import * as XLSX from "xlsx";
import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Chip,
  Switch,
  addToast,
} from "@heroui/react";
import Link from "next/link";
import type { RevenueSnapshotOutput } from "@zuca/types/revenue-snapshot";

interface RevenueSnapshotViewProps {
  result: RevenueSnapshotOutput;
  sessionId: string;
  status: string;
  createdAt: string;
  model?: string | null;
}

function TableView({
  rows,
  columns,
}: {
  rows: Array<Record<string, any>>;
  columns?: string[];
}) {
  if (!rows.length) {
    return <p className="text-default-500 italic">No data available</p>;
  }

  const visibleColumns = columns?.length ? columns : Object.keys(rows[0]);

  return (
    <div className="overflow-x-auto rounded-lg border border-default-200/50">
      <table className="w-full text-sm">
        <thead>
          <tr className="bg-default-100/80">
            {visibleColumns.map((col) => (
              <th
                key={col}
                className="px-3 py-3 text-left font-semibold text-default-600 whitespace-nowrap text-xs"
              >
                {col}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr key={i} className="border-t border-default-200/30 hover:bg-default-100/30 transition-colors">
              {visibleColumns.map((col) => {
                const value = row[col];
                const isNumber = typeof value === "number";
                const isBool = typeof value === "boolean";
                const isObject = value !== null && typeof value === "object";
                return (
                  <td key={col} className={`px-3 py-2.5 whitespace-nowrap text-xs ${isNumber ? "text-right font-mono" : ""}`}>
                    {isBool
                      ? (value ? "Yes" : "No")
                      : isNumber
                      ? value.toLocaleString()
                      : isObject
                      ? JSON.stringify(value)
                      : value ?? "-"}
                  </td>
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

const MONTH_INDEX: Record<string, number> = {
  Jan: 0,
  January: 0,
  Feb: 1,
  February: 1,
  Mar: 2,
  March: 2,
  Apr: 3,
  April: 3,
  May: 4,
  Jun: 5,
  June: 5,
  Jul: 6,
  July: 6,
  Aug: 7,
  August: 7,
  Sep: 8,
  September: 8,
  Oct: 9,
  October: 9,
  Nov: 10,
  November: 10,
  Dec: 11,
  December: 11,
};

function parsePeriod(period: string): number {
  const [mon, yr] = period.split("-");
  if (!mon || !yr) return Number.POSITIVE_INFINITY;
  const normalizedMon = `${mon[0]?.toUpperCase() ?? ""}${mon.slice(1).toLowerCase()}`;
  const year = Number(yr);
  const month = MONTH_INDEX[normalizedMon];
  if (Number.isNaN(year)) return Number.POSITIVE_INFINITY;
  if (month === undefined) return Number.POSITIVE_INFINITY;
  return year * 12 + month;
}

function normalizeNumber(value: unknown): number {
  if (typeof value === "number" && Number.isFinite(value)) return value;
  if (typeof value === "string") {
    const parsed = Number(value.replace(/,/g, ""));
    if (Number.isFinite(parsed)) return parsed;
  }
  return 0;
}

type PeriodAggregation = "monthly" | "quarterly" | "yearly";

/**
 * Get the quarter key for a month column (e.g., "Jan-24" -> "Q1-24")
 */
function getQuarterKey(monthKey: string): string {
  const [mon, yr] = monthKey.split("-");
  if (!mon || !yr) return monthKey;
  const normalizedMon = `${mon[0]?.toUpperCase() ?? ""}${mon.slice(1).toLowerCase()}`;
  const monthIndex = MONTH_INDEX[normalizedMon];
  if (monthIndex === undefined) return monthKey;
  const quarter = Math.floor(monthIndex / 3) + 1;
  return `Q${quarter}-${yr}`;
}

/**
 * Get the year key for a month column (e.g., "Jan-24" -> "2024")
 */
function getYearKey(monthKey: string): string {
  const [, yr] = monthKey.split("-");
  if (!yr) return monthKey;
  const year = Number(yr);
  if (Number.isNaN(year)) return monthKey;
  return `20${yr}`;
}

/**
 * Parse a quarter key for sorting (e.g., "Q1-24" -> 2024 * 4 + 0)
 */
function parseQuarterKey(key: string): number {
  const match = key.match(/^Q(\d)-(\d{2})$/);
  if (!match) return Number.POSITIVE_INFINITY;
  const quarter = Number(match[1]);
  const year = 2000 + Number(match[2]);
  return year * 4 + (quarter - 1);
}

/**
 * Parse a year key for sorting (e.g., "2024" -> 2024)
 */
function parseYearKey(key: string): number {
  const year = Number(key);
  return Number.isNaN(year) ? Number.POSITIVE_INFINITY : year;
}

/**
 * Aggregate monthly period data into quarterly or yearly buckets
 */
function aggregatePeriods(
  periods: string[],
  periodData: Record<string, number>,
  aggregation: PeriodAggregation
): { periods: string[]; data: Record<string, number> } {
  if (aggregation === "monthly") {
    return { periods, data: periodData };
  }

  const aggregated: Record<string, number> = {};
  const getKey = aggregation === "quarterly" ? getQuarterKey : getYearKey;

  periods.forEach((period) => {
    const key = getKey(period);
    const value = periodData[period] ?? 0;
    aggregated[key] = (aggregated[key] ?? 0) + value;
  });

  const sortFn = aggregation === "quarterly" ? parseQuarterKey : parseYearKey;
  const sortedPeriods = Object.keys(aggregated).sort((a, b) => sortFn(a) - sortFn(b));

  return { periods: sortedPeriods, data: aggregated };
}


function isPeriodColumn(key: string): boolean {
  const [mon, yr] = key.split("-");
  if (!mon || !yr || !/^\d{2}$/.test(yr)) return false;
  const normalizedMon = `${mon[0]?.toUpperCase() ?? ""}${mon.slice(1).toLowerCase()}`;
  return normalizedMon in MONTH_INDEX;
}

function getMonthColumns(rows: Array<Record<string, any>>): string[] {
  const periodSet = new Set<string>();
  rows.forEach((row) => {
    Object.keys(row).forEach((key) => {
      if (isPeriodColumn(key)) {
        periodSet.add(key);
      }
    });
  });
  return Array.from(periodSet).sort((a, b) => parsePeriod(a) - parsePeriod(b));
}

type RevRecGroup = {
  key: string;
  label: string;
  allocated: number;
  periods: Record<string, number>;
};

function buildRevRecPivot(
  rows: Array<Record<string, any>>,
  aggregation: PeriodAggregation = "monthly"
): {
  periods: string[];
  rows: Array<Record<string, any>>;
  totals: Record<string, number>;
  totalAllocated: number;
  groups: RevRecGroup[];
} | null {
  if (!rows.length) return null;

  const hasPeriodRows = rows.some((row) => row?.Period !== undefined || row?.period !== undefined);
  const monthColumns = hasPeriodRows ? [] : getMonthColumns(rows);
  if (!hasPeriodRows && monthColumns.length === 0) return null;

  const periodSet = new Set<string>();
  const groups = new Map<string, { base: Record<string, any>; periods: Record<string, number> }>();

  rows.forEach((row) => {
    const lineItem = row["Line Item Num"] ?? row.LineItemNum ?? "";
    const subscriptionName = row["Subscription Name"] ?? row.SubscriptionName ?? "";
    const pobTemplate = row["POB Template"] ?? row.POBTemplate ?? "";
    const eventName = row["Event Name"] ?? row.EventName ?? "";
    const startDate = row["Revenue Start Date"] ?? row.RevenueStartDate ?? "";
    const endDate = row["Revenue End Date"] ?? row.RevenueEndDate ?? "";
    const allocated =
      row["Total"] ??
      row.Total ??
      row["Cumulative Allocated"] ??
      row["Ext Sell Price"] ??
      row["Ext Allocated Price"] ??
      row.ExtAllocatedPrice ??
      row.Allocated ??
      0;

    const key = [subscriptionName, lineItem, pobTemplate, eventName, startDate, endDate].join("|");
    if (!groups.has(key)) {
      groups.set(key, {
        base: {
          "Subscription Name": subscriptionName,
          "POB Template": pobTemplate,
          "Event Name": eventName,
          "Line Item Num": lineItem,
          "Revenue Start Date": startDate,
          "Revenue End Date": endDate,
          Allocated: allocated,
        },
        periods: {},
      });
    }
    const group = groups.get(key)!;

    if (hasPeriodRows) {
      const period = (row.Period ?? row.period) as string | undefined;
      if (!period) return;
      periodSet.add(period);
      const amount = normalizeNumber(row.Amount ?? row.amount);
      group.periods[period] = (group.periods[period] ?? 0) + amount;
      return;
    }

    monthColumns.forEach((period) => {
      if (!(period in row)) return;
      const rawValue = row[period];
      if (rawValue === null || rawValue === undefined || rawValue === "") return;
      const amount = normalizeNumber(rawValue);
      group.periods[period] = (group.periods[period] ?? 0) + amount;
    });
  });

  // Get raw monthly periods first
  const rawPeriods = hasPeriodRows
    ? Array.from(periodSet).sort((a, b) => parsePeriod(a) - parsePeriod(b))
    : monthColumns;

  const pivotRows: Array<Record<string, any>> = [];
  const totals: Record<string, number> = {};
  const groupRows: RevRecGroup[] = [];
  let totalAllocated = 0;

  // Determine aggregated period columns
  let outputPeriods = rawPeriods;
  if (aggregation !== "monthly" && rawPeriods.length > 0) {
    const { periods: aggPeriods } = aggregatePeriods(rawPeriods, {}, aggregation);
    // Get unique aggregated periods from the raw periods
    const getKey = aggregation === "quarterly" ? getQuarterKey : getYearKey;
    const aggSet = new Set<string>();
    rawPeriods.forEach((p) => aggSet.add(getKey(p)));
    const sortFn = aggregation === "quarterly" ? parseQuarterKey : parseYearKey;
    outputPeriods = Array.from(aggSet).sort((a, b) => sortFn(a) - sortFn(b));
  }

  groups.forEach((group, key) => {
    const row: Record<string, any> = { ...group.base };
    const allocated = normalizeNumber(group.base.Allocated);
    row.Allocated = allocated;
    totalAllocated += allocated;

    // Aggregate group periods if needed
    const { periods: groupPeriods, data: groupPeriodData } = aggregatePeriods(
      rawPeriods,
      group.periods,
      aggregation
    );

    let rowTotal = 0;
    outputPeriods.forEach((period) => {
      const amount = groupPeriodData[period] ?? 0;
      row[period] = amount;
      rowTotal += amount;
      totals[period] = (totals[period] ?? 0) + amount;
    });

    row["Total"] = rowTotal;
    totals["Total"] = (totals["Total"] ?? 0) + rowTotal;

    pivotRows.push(row);

    const labelParts = [
      group.base["Subscription Name"],
      group.base["Line Item Num"],
      group.base["POB Template"],
    ].filter(Boolean);
    groupRows.push({
      key,
      label: labelParts.join(" · "),
      allocated,
      periods: groupPeriodData, // Use aggregated periods for chart
    });
  });

  return { periods: outputPeriods, rows: pivotRows, totals, totalAllocated, groups: groupRows };
}

function RevRecWaterfallTable({
  rows,
  aggregation = "monthly",
}: {
  rows: Array<Record<string, any>>;
  aggregation?: PeriodAggregation;
}) {
  if (!rows.length) {
    return <p className="text-default-500 italic">No data available</p>;
  }

  const pivot = buildRevRecPivot(rows, aggregation);
  if (!pivot) {
    return <TableView rows={rows} />;
  }

  const pivotRows = [...pivot.rows];

  if (pivotRows.length > 1) {
    const totalRow: Record<string, any> = {
      "Subscription Name": "Total",
      "POB Template": "",
      "Event Name": "",
      "Line Item Num": "",
      "Revenue Start Date": "",
      "Revenue End Date": "",
      Allocated: pivot.totalAllocated,
    };
    pivot.periods.forEach((period) => {
      totalRow[period] = pivot.totals[period] ?? 0;
    });
    totalRow["Total"] = pivot.totals["Total"] ?? 0;
    pivotRows.push(totalRow);
  }

  return <TableView rows={pivotRows} />;
}

type RevRecChartMode = "total" | "stacked" | "grouped";

const CHART_COLORS = [
  "bg-primary/70",
  "bg-secondary/70",
  "bg-success/70",
  "bg-warning/70",
  "bg-danger/70",
  "bg-default/60",
];

function RevRecWaterfallChart({
  rows,
  mode,
  aggregation = "monthly",
}: {
  rows: Array<Record<string, any>>;
  mode: RevRecChartMode;
  aggregation?: PeriodAggregation;
}) {
  const pivot = buildRevRecPivot(rows, aggregation);
  if (!pivot || pivot.periods.length === 0) {
    return (
      <p className="text-default-500 italic text-sm">
        Chart unavailable (no periodized rev rec data).
      </p>
    );
  }

  if (mode === "total") {
    const series = pivot.periods.map((period) => ({
      period,
      amount: pivot.totals[period] ?? 0,
    }));
    const max = Math.max(...series.map((item) => item.amount), 0);

    return (
      <div className="rounded-lg border border-default-200/50 p-4 bg-default-50/40">
        <div className="flex items-center justify-between">
          <p className="text-sm font-semibold text-default-700">Revenue by Period</p>
          <p className="text-xs text-default-500">
            Total Allocated: {pivot.totalAllocated.toLocaleString()}
          </p>
        </div>
        <div className="mt-4 h-40 flex items-end gap-2">
          {series.map((item) => {
            const height = max > 0 ? (item.amount / max) * 100 : 0;
            return (
              <div key={item.period} className="flex-1 min-w-[32px] h-full flex flex-col items-center gap-2">
                <div className="w-full flex-1 flex items-end">
                  <div
                    className="w-full rounded-md bg-primary/70"
                    style={{ height: `${height}%`, minHeight: item.amount > 0 ? "2px" : "0px" }}
                  />
                </div>
                <div className="text-[11px] text-default-500">{item.period}</div>
                <div className="text-[10px] text-default-400">{item.amount.toLocaleString()}</div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }

  const groups = pivot.groups;
  const maxTotal = Math.max(
    ...pivot.periods.map((period) => pivot.totals[period] ?? 0),
    0
  );
  const maxGroupValue = Math.max(
    ...groups.flatMap((group) => pivot.periods.map((period) => group.periods[period] ?? 0)),
    0
  );

  return (
    <div className="rounded-lg border border-default-200/50 p-4 bg-default-50/40 space-y-4">
      <div className="flex items-center justify-between">
        <p className="text-sm font-semibold text-default-700">
          {mode === "stacked" ? "Revenue by Period (Stacked)" : "Revenue by Period (Grouped)"}
        </p>
        <p className="text-xs text-default-500">
          Total Allocated: {pivot.totalAllocated.toLocaleString()}
        </p>
      </div>

      <div className="flex flex-wrap gap-2 text-[11px] text-default-500">
        {groups.slice(0, 6).map((group, index) => (
          <div key={group.key} className="flex items-center gap-1">
            <span className={`inline-block h-2.5 w-2.5 rounded-full ${CHART_COLORS[index % CHART_COLORS.length]}`} />
            <span className="truncate max-w-[180px]">{group.label || "Line Item"}</span>
          </div>
        ))}
        {groups.length > 6 && (
          <span className="text-default-400">+{groups.length - 6} more</span>
        )}
      </div>

      <div className="h-40 flex items-end gap-2">
        {pivot.periods.map((period) => {
          const periodTotal = pivot.totals[period] ?? 0;
          const columnHeight = maxTotal > 0 ? (periodTotal / maxTotal) * 100 : 0;
          return (
            <div key={period} className="flex-1 min-w-[36px] h-full flex flex-col items-center gap-2">
              <div className="w-full flex-1 flex items-end">
                {mode === "stacked" ? (
                  <div
                    className="w-full flex flex-col-reverse rounded-md overflow-hidden"
                    style={{ height: `${columnHeight}%` }}
                  >
                    {groups.map((group, index) => {
                      const value = group.periods[period] ?? 0;
                      if (value <= 0) return null;
                      const segmentHeight = periodTotal > 0 ? (value / periodTotal) * 100 : 0;
                      return (
                        <div
                          key={`${group.key}-${period}`}
                          className={CHART_COLORS[index % CHART_COLORS.length]}
                          style={{ height: `${segmentHeight}%` }}
                          title={`${group.label}: ${value.toLocaleString()}`}
                        />
                      );
                    })}
                  </div>
                ) : (
                  <div className="w-full h-full flex items-end gap-1">
                    {groups.map((group, index) => {
                      const value = group.periods[period] ?? 0;
                      const height = maxGroupValue > 0 ? (value / maxGroupValue) * 100 : 0;
                      return (
                        <div
                          key={`${group.key}-${period}`}
                          className={`flex-1 rounded-md ${CHART_COLORS[index % CHART_COLORS.length]}`}
                          style={{ height: `${height}%`, minHeight: value > 0 ? "2px" : "0px" }}
                          title={`${group.label}: ${value.toLocaleString()}`}
                        />
                      );
                    })}
                  </div>
                )}
              </div>
              <div className="text-[11px] text-default-500">{period}</div>
              <div className="text-[10px] text-default-400">{periodTotal.toLocaleString()}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export function RevenueSnapshotView({ result, sessionId, status, createdAt, model }: RevenueSnapshotViewProps) {
  const [showRevRecChart, setShowRevRecChart] = useState(true);
  const [revRecChartMode, setRevRecChartMode] = useState<RevRecChartMode>("total");
  const [periodAggregation, setPeriodAggregation] = useState<PeriodAggregation>("monthly");
  const handleExportJSON = () => {
    const blob = new Blob([JSON.stringify(result, null, 2)], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `snapshot-${sessionId.slice(0, 8)}.json`;
    a.click();
    URL.revokeObjectURL(url);

    addToast({
      title: "Exported",
      description: "Snapshot JSON downloaded",
      color: "success",
    });
  };

  const handleExportExcel = () => {
    const workbook = XLSX.utils.book_new();

    const addSheetFromArray = (data: unknown[], sheetName: string) => {
      if (data && data.length > 0) {
        const sheet = XLSX.utils.json_to_sheet(data as Record<string, unknown>[]);
        XLSX.utils.book_append_sheet(workbook, sheet, sheetName.slice(0, 31));
      }
    };

    if (result.revrec_waterfall.rows.length) {
      addSheetFromArray(result.revrec_waterfall.rows, "Rev Rec Raw");
      const pivot = buildRevRecPivot(result.revrec_waterfall.rows);
      if (pivot) {
        const pivotRows = [...pivot.rows];
        if (pivotRows.length > 1) {
          const totalRow: Record<string, any> = {
            "Subscription Name": "Total",
            "POB Template": "",
            "Event Name": "",
            "Line Item Num": "",
            "Revenue Start Date": "",
            "Revenue End Date": "",
            Allocated: pivot.totalAllocated,
          };
          pivot.periods.forEach((period) => {
            totalRow[period] = pivot.totals[period] ?? 0;
          });
          totalRow["Total"] = pivot.totals["Total"] ?? 0;
          pivotRows.push(totalRow);
        }
        addSheetFromArray(pivotRows, "Rev Rec Pivot");
      }
    }

    addSheetFromArray(
      [
        {
          highlights: result.summary.highlights?.join(" | ") ?? "",
          assumptions: result.summary.assumptions.join(" | "),
          open_questions: result.summary.open_questions.join(" | "),
        },
      ],
      "Summary"
    );

    XLSX.writeFile(workbook, `snapshot-${sessionId.slice(0, 8)}.xlsx`);

    addToast({
      title: "Exported",
      description: "Excel file downloaded",
      color: "success",
    });
  };

  return (
    <div className="space-y-8">
      <div className="flex items-center gap-4">
        <Link href="/history">
          <Button variant="bordered" size="sm" className="border-2 border-default-300 hover:border-primary">
            Back to History
          </Button>
        </Link>
        <Button variant="bordered" size="sm" onClick={handleExportExcel}>
          Export Excel
        </Button>
        <Button color="primary" size="sm" onClick={handleExportJSON}>
          Export JSON
        </Button>
      </div>

      <Card className="glass-card">
        <CardHeader className="px-6 pt-5 pb-0 flex items-center justify-between">
          <div>
            <h3 className="text-lg font-semibold">Revenue Snapshot</h3>
            <p className="text-xs text-default-500">Session {sessionId.slice(0, 8)} · {createdAt}</p>
          </div>
          <div className="flex items-center gap-2">
            <Chip size="sm" variant="flat" className="capitalize">
              {status}
            </Chip>
            {model && (
              <Chip size="sm" variant="flat" className="bg-default-200/70 text-default-600">
                {model}
              </Chip>
            )}
          </div>
        </CardHeader>
        <CardBody className="p-6 space-y-4">
          <div className="flex flex-wrap gap-2">
            {Object.entries(result.source_counts || {}).map(([key, value]) => (
              <Chip key={key} size="sm" variant="flat" className="bg-default-100/80 text-default-600">
                {key.replace(/_/g, " ")}: {value ?? 0}
              </Chip>
            ))}
          </div>
          {result.summary.highlights?.length ? (
            <div className="space-y-2">
              <p className="text-sm font-semibold text-default-700">Highlights</p>
              <ul className="list-disc pl-5 text-sm text-default-600">
                {result.summary.highlights.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </div>
          ) : null}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <p className="text-sm font-semibold text-default-700">Assumptions</p>
              {result.summary.assumptions.length ? (
                <ul className="list-disc pl-5 text-sm text-default-600 mt-2">
                  {result.summary.assumptions.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              ) : (
                <p className="text-xs text-default-500 mt-2">None noted.</p>
              )}
            </div>
            <div>
              <p className="text-sm font-semibold text-default-700">Open Questions</p>
              {result.summary.open_questions.length ? (
                <ul className="list-disc pl-5 text-sm text-default-600 mt-2">
                  {result.summary.open_questions.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              ) : (
                <p className="text-xs text-default-500 mt-2">None noted.</p>
              )}
            </div>
          </div>
        </CardBody>
      </Card>

      <Card className="glass-card">
        <CardHeader className="px-6 pt-5 pb-0 flex items-center justify-between">
          <div>
            <h4 className="text-base font-semibold">Revenue Recognition Waterfall</h4>
            <p className="text-xs text-default-500">Periodized view with optional chart summary.</p>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 text-xs text-default-500">
              <span className="font-medium text-default-600">Period</span>
              <div className="flex items-center rounded-full border border-default-200/70 bg-default-50/80 p-1">
                {[
                  { key: "monthly", label: "Monthly" },
                  { key: "quarterly", label: "Quarterly" },
                  { key: "yearly", label: "Yearly" },
                ].map((option) => (
                  <button
                    key={option.key}
                    type="button"
                    onClick={() => setPeriodAggregation(option.key as PeriodAggregation)}
                    className={`px-2.5 py-1 rounded-full text-[11px] transition ${
                      periodAggregation === option.key
                        ? "bg-primary text-white"
                        : "text-default-500 hover:text-default-700"
                    }`}
                  >
                    {option.label}
                  </button>
                ))}
              </div>
            </div>
            <div className="flex items-center gap-2 text-xs text-default-500">
              <span className="font-medium text-default-600">Chart Mode</span>
              <div className="flex items-center rounded-full border border-default-200/70 bg-default-50/80 p-1">
                {[
                  { key: "total", label: "Totals" },
                  { key: "stacked", label: "Stacked" },
                  { key: "grouped", label: "Grouped" },
                ].map((option) => (
                  <button
                    key={option.key}
                    type="button"
                    onClick={() => setRevRecChartMode(option.key as RevRecChartMode)}
                    className={`px-2.5 py-1 rounded-full text-[11px] transition ${
                      revRecChartMode === option.key
                        ? "bg-primary text-white"
                        : "text-default-500 hover:text-default-700"
                    }`}
                  >
                    {option.label}
                  </button>
                ))}
              </div>
            </div>
            <Switch
              size="sm"
              isSelected={showRevRecChart}
              onValueChange={setShowRevRecChart}
              classNames={{
                wrapper: "group-data-[selected=true]:bg-primary",
              }}
            >
              Show chart
            </Switch>
          </div>
        </CardHeader>
        <CardBody className="p-6 space-y-4">
          {showRevRecChart ? (
            <RevRecWaterfallChart rows={result.revrec_waterfall.rows} mode={revRecChartMode} aggregation={periodAggregation} />
          ) : null}
          <RevRecWaterfallTable rows={result.revrec_waterfall.rows} aggregation={periodAggregation} />
        </CardBody>
      </Card>
    </div>
  );
}
