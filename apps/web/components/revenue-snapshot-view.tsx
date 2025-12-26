"use client";

import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Chip,
  Tab,
  Tabs,
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

function TableView({ rows }: { rows: Array<Record<string, any>> }) {
  if (!rows.length) {
    return <p className="text-default-500 italic">No data available</p>;
  }

  const columns = Object.keys(rows[0]);

  return (
    <div className="overflow-x-auto rounded-lg border border-default-200/50">
      <table className="w-full text-sm">
        <thead>
          <tr className="bg-default-100/80">
            {columns.map((col) => (
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
              {columns.map((col) => {
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
  Feb: 1,
  Mar: 2,
  Apr: 3,
  May: 4,
  Jun: 5,
  Jul: 6,
  Aug: 7,
  Sep: 8,
  Oct: 9,
  Nov: 10,
  Dec: 11,
};

function parsePeriod(period: string): number {
  const [mon, yr] = period.split("-");
  if (!mon || !yr) return Number.POSITIVE_INFINITY;
  const year = Number(yr);
  const month = MONTH_INDEX[mon] ?? 0;
  if (Number.isNaN(year)) return Number.POSITIVE_INFINITY;
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

function isRevRecRow(row: Record<string, any>): boolean {
  return "Period" in row || "period" in row;
}

function RevRecWaterfallTable({ rows }: { rows: Array<Record<string, any>> }) {
  if (!rows.length) {
    return <p className="text-default-500 italic">No data available</p>;
  }

  if (!isRevRecRow(rows[0])) {
    return <TableView rows={rows} />;
  }

  const periodSet = new Set<string>();
  const groups = new Map<string, { base: Record<string, any>; periods: Record<string, number> }>();

  rows.forEach((row) => {
    const period = (row.Period ?? row.period) as string | undefined;
    if (!period) return;
    periodSet.add(period);

    const lineItem = row["Line Item Num"] ?? row.LineItemNum ?? "";
    const pobName = row["POB Name"] ?? row.POBName ?? "";
    const eventName = row["Event Name"] ?? row.EventName ?? "";
    const startDate = row["Revenue Start Date"] ?? row.RevenueStartDate ?? "";
    const endDate = row["Revenue End Date"] ?? row.RevenueEndDate ?? "";
    const allocated = row["Ext Allocated Price"] ?? row.ExtAllocatedPrice ?? row.Allocated ?? 0;

    const key = [lineItem, pobName, eventName, startDate, endDate].join("|");
    if (!groups.has(key)) {
      groups.set(key, {
        base: {
          "POB Name": pobName,
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
    const amount = normalizeNumber(row.Amount ?? row.amount);
    group.periods[period] = (group.periods[period] ?? 0) + amount;
  });

  const periods = Array.from(periodSet).sort((a, b) => parsePeriod(a) - parsePeriod(b));
  const pivotRows: Array<Record<string, any>> = [];
  let totalAllocated = 0;
  const totals: Record<string, number> = {};

  groups.forEach((group) => {
    const row: Record<string, any> = { ...group.base };
    const allocated = normalizeNumber(group.base.Allocated);
    row.Allocated = allocated;
    totalAllocated += allocated;

    periods.forEach((period) => {
      const amount = group.periods[period] ?? 0;
      row[period] = amount;
      totals[period] = (totals[period] ?? 0) + amount;
    });

    pivotRows.push(row);
  });

  if (pivotRows.length > 1) {
    const totalRow: Record<string, any> = {
      "POB Name": "Total",
      "Event Name": "",
      "Line Item Num": "",
      "Revenue Start Date": "",
      "Revenue End Date": "",
      Allocated: totalAllocated,
    };
    periods.forEach((period) => {
      totalRow[period] = totals[period] ?? 0;
    });
    pivotRows.push(totalRow);
  }

  return <TableView rows={pivotRows} />;
}

export function RevenueSnapshotView({ result, sessionId, status, createdAt, model }: RevenueSnapshotViewProps) {
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

  return (
    <div className="space-y-8">
      <div className="flex items-center gap-4">
        <Link href="/history">
          <Button variant="bordered" size="sm" className="border-2 border-default-300 hover:border-primary">
            Back to History
          </Button>
        </Link>
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

      <Tabs
        aria-label="Revenue snapshot tables"
        variant="bordered"
        color="primary"
        classNames={{
          tabList: "border-default-200 bg-default-50/50",
          cursor: "bg-primary",
          tab: "h-10 px-4",
          tabContent: "group-data-[selected=true]:text-white font-medium text-default-500",
        }}
      >
        <Tab key="contracts" title="Contracts/Orders">
          <Card className="glass-card mt-4">
            <CardBody className="p-6">
              <TableView rows={result.contracts_orders.rows} />
            </CardBody>
          </Card>
        </Tab>
        <Tab key="billings" title="Billings">
          <Card className="glass-card mt-4">
            <CardBody className="p-6">
              <TableView rows={result.billings.rows} />
            </CardBody>
          </Card>
        </Tab>
        <Tab key="revrec" title="Rev Rec Waterfall">
          <Card className="glass-card mt-4">
            <CardBody className="p-6">
              <RevRecWaterfallTable rows={result.revrec_waterfall.rows} />
            </CardBody>
          </Card>
        </Tab>
      </Tabs>
    </div>
  );
}
