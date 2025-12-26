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
              <TableView rows={result.revrec_waterfall.rows} />
            </CardBody>
          </Card>
        </Tab>
      </Tabs>
    </div>
  );
}
