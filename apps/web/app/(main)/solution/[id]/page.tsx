"use client";

import { use } from "react";
import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Chip,
  Skeleton,
  Tab,
  Tabs,
  Tooltip,
  addToast,
} from "@heroui/react";
import Link from "next/link";
import ReactMarkdown from "react-markdown";
import { useSession } from "@/hooks/useSessions";
import { useQueryClient } from "@tanstack/react-query";
import { ConversationPanel } from "@/components/chat";
import { UCGenerateView } from "@/components/uc-generate-view";
import type { ZucaOutput, UCGeneratorOutput } from "@zuca/types";
import type { RevenueSnapshotOutput } from "@zuca/types/revenue-snapshot";
import type { HTMLTemplateOutput, HTMLTemplateRequest } from "@zuca/types/html-template";
import { RevenueSnapshotView } from "@/components/revenue-snapshot-view";
import { HTMLTemplateResultView } from "@/components/html-template-view";
import { FeedbackButtons } from "@/components/FeedbackButtons";
import * as XLSX from "xlsx";

interface PageProps {
  params: Promise<{ id: string }>;
}

export default function SolutionPage({ params }: PageProps) {
  const { id } = use(params);
  const { data, isLoading, error, refetch } = useSession(id);
  const queryClient = useQueryClient();

  const handleRefresh = () => {
    refetch();
    queryClient.invalidateQueries({ queryKey: ["session", id] });
  };

  if (isLoading) {
    return (
      <div className="space-y-8">
        <div className="flex items-center gap-4">
          <Skeleton className="w-10 h-10 rounded-lg" />
          <div className="space-y-2">
            <Skeleton className="h-8 w-64 rounded-lg" />
            <Skeleton className="h-4 w-48 rounded" />
          </div>
        </div>
        <Card className="glass-card">
          <CardBody className="p-6">
            <div className="space-y-4">
              <Skeleton className="h-10 w-full rounded-lg" />
              <Skeleton className="h-40 rounded-lg" />
            </div>
          </CardBody>
        </Card>
      </div>
    );
  }

  if (error || !data?.session) {
    return (
      <div className="space-y-8">
        <div className="flex items-center gap-4">
          <Link href="/history">
            <Button
              variant="bordered"
              size="sm"
              className="border-2 border-default-300 hover:border-primary"
              startContent={
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                </svg>
              }
            >
              Back to History
            </Button>
          </Link>
        </div>
        <Card className="glass-card border-danger/30">
          <CardBody className="p-6 flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-danger/20 flex items-center justify-center">
              <svg className="w-6 h-6 text-danger" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div>
              <p className="font-medium text-danger">Session Not Found</p>
              <p className="text-sm text-default-500">
                {(error as { error?: string })?.error || "The requested session could not be loaded"}
              </p>
            </div>
          </CardBody>
        </Card>
      </div>
    );
  }

  const session = data.session;

  // Route to appropriate view based on session type
  if (session.session_type === "uc-generate") {
    const ucResult = session.result as UCGeneratorOutput | null;
    const ucInput = session.input as { customer_name?: string; customer_website?: string };

    if (!ucResult) {
      return (
        <div className="space-y-8">
          <div className="flex items-center gap-4">
            <Link href="/history">
              <Button
                variant="bordered"
                size="sm"
                className="border-2 border-default-300 hover:border-primary"
                startContent={
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                  </svg>
                }
              >
                Back to History
              </Button>
            </Link>
          </div>
          <Card className="glass-card border-warning/30">
            <CardBody className="p-6 flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-warning/20 flex items-center justify-center">
                <svg className="w-6 h-6 text-warning" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <p className="font-medium text-warning">No Results</p>
                <p className="text-sm text-default-500">
                  This UC Generate session has no results yet. The session may still be processing or may have failed.
                </p>
              </div>
            </CardBody>
          </Card>
        </div>
      );
    }

    return (
      <UCGenerateView
        result={ucResult}
        sessionId={session.id}
        customerName={ucInput.customer_name || ucResult.generated?.customer_name || "Unknown"}
        status={session.status}
        createdAt={session.created_at}
        model={session.llm_model}
      />
    );
  }

  if (session.session_type === "revenue-snapshot") {
    const snapshotResult = session.result as RevenueSnapshotOutput | null;
    if (!snapshotResult) {
      return (
        <div className="space-y-8">
          <div className="flex items-center gap-4">
            <Link href="/history">
              <Button
                variant="bordered"
                size="sm"
                className="border-2 border-default-300 hover:border-primary"
                startContent={
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                  </svg>
                }
              >
                Back to History
              </Button>
            </Link>
          </div>
          <Card className="glass-card border-warning/30">
            <CardBody className="p-6 flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-warning/20 flex items-center justify-center">
                <svg className="w-6 h-6 text-warning" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <p className="font-medium text-warning">No Results</p>
                <p className="text-sm text-default-500">
                  This Revenue Snapshot session has no results yet.
                </p>
              </div>
            </CardBody>
          </Card>
        </div>
      );
    }

    return (
      <RevenueSnapshotView
        result={snapshotResult}
        sessionId={session.id}
        status={session.status}
        createdAt={session.created_at}
        model={session.llm_model}
      />
    );
  }

  if (session.session_type === "html-builder") {
    const htmlResult = session.result as HTMLTemplateOutput | null;
    const htmlInput = session.input as HTMLTemplateRequest;

    if (!htmlResult) {
      return (
        <div className="space-y-8">
          <div className="flex items-center gap-4">
            <Link href="/history">
              <Button
                variant="bordered"
                size="sm"
                className="border-2 border-default-300 hover:border-primary"
                startContent={
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                  </svg>
                }
              >
                Back to History
              </Button>
            </Link>
          </div>
          <Card className="glass-card border-warning/30">
            <CardBody className="p-6 flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-warning/20 flex items-center justify-center">
                <svg className="w-6 h-6 text-warning" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <p className="font-medium text-warning">No Results</p>
                <p className="text-sm text-default-500">
                  This HTML Template session has no results yet. The session may still be processing or may have failed.
                </p>
              </div>
            </CardBody>
          </Card>
        </div>
      );
    }

    return (
      <div className="space-y-8">
        {/* Header */}
        <div className="flex justify-between items-start">
          <div>
            <div className="flex items-center gap-4">
              <Link href="/html-builder">
                <Button
                  variant="light"
                  size="sm"
                  isIconOnly
                  className="text-default-500 hover:text-primary"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                  </svg>
                </Button>
              </Link>
              <div>
                <h1 className="text-3xl font-bold tracking-tight">
                  <span className="gradient-text">
                    {htmlResult.mode === "code" ? "Template Code" : "Expression"}
                  </span>
                </h1>
                <div className="flex items-center gap-3 mt-2">
                  <Chip
                    size="sm"
                    variant="flat"
                    className="bg-primary/10 text-primary capitalize"
                  >
                    {htmlResult.mode}
                  </Chip>
                  {session.llm_model && (
                    <Chip
                      size="sm"
                      variant="flat"
                      className="bg-default-200/70 text-default-600"
                    >
                      {session.llm_model}
                    </Chip>
                  )}
                  <span className="text-default-500 text-sm flex items-center gap-1.5">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    {new Date(session.created_at).toLocaleString()}
                  </span>
                </div>
              </div>
            </div>
          </div>
          <Link href="/html-builder">
            <Button
              color="primary"
              size="sm"
              className="font-semibold teal-glow-subtle"
              startContent={
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                </svg>
              }
            >
              New Template
            </Button>
          </Link>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
          {/* Result */}
          <Card className="glass-card">
            <CardHeader className="px-6 pt-5 pb-0">
              <h3 className="text-lg font-semibold">Generated Output</h3>
            </CardHeader>
            <CardBody className="p-6">
              <HTMLTemplateResultView
                mode={htmlResult.mode}
                result={htmlResult.result}
                sessionId={session.id}
              />
            </CardBody>
          </Card>

          {/* Input Summary */}
          <Card className="glass-card">
            <CardHeader className="px-6 pt-5 pb-0">
              <h3 className="text-lg font-semibold">Input</h3>
            </CardHeader>
            <CardBody className="p-6 space-y-4">
              <div className="space-y-2">
                <p className="text-xs font-medium text-default-500 uppercase tracking-wide">Description</p>
                <p className="text-default-600 leading-relaxed">{htmlInput.description}</p>
              </div>
              {htmlInput.context?.documentType && (
                <div className="space-y-2">
                  <p className="text-xs font-medium text-default-500 uppercase tracking-wide">Document Type</p>
                  <Chip size="sm" variant="flat" className="bg-default-100 capitalize">
                    {htmlInput.context.documentType}
                  </Chip>
                </div>
              )}
              {htmlInput.context?.existingCode && (
                <div className="space-y-2">
                  <p className="text-xs font-medium text-default-500 uppercase tracking-wide">Existing Code</p>
                  <pre className="text-xs bg-default-100/50 p-3 rounded-lg overflow-x-auto font-mono">
                    {htmlInput.context.existingCode}
                  </pre>
                </div>
              )}
            </CardBody>
          </Card>
        </div>
      </div>
    );
  }

  // Default: Analyze session view
  const result = session.result as ZucaOutput | null;
  const input = session.input as { customer_name?: string; use_case_description?: string };

  const handleExportJSON = () => {
    const blob = new Blob([JSON.stringify(result, null, 2)], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `zuca-${id.slice(0, 8)}.json`;
    a.click();
    URL.revokeObjectURL(url);

    addToast({
      title: "Exported",
      description: "JSON file downloaded",
      color: "success",
    });
  };

  const handleExportExcel = () => {
    if (!result) return;

    const workbook = XLSX.utils.book_new();

    // Helper to add a sheet from raw JSON array
    const addSheetFromArray = (data: unknown[], sheetName: string) => {
      if (data && data.length > 0) {
        const sheet = XLSX.utils.json_to_sheet(data as Record<string, unknown>[]);
        XLSX.utils.book_append_sheet(workbook, sheet, sheetName.slice(0, 31)); // Sheet names max 31 chars
      }
    };

    // Contracts/Orders - raw data with all columns
    if (result.contracts_orders?.zr_contracts_orders?.length) {
      addSheetFromArray(result.contracts_orders.zr_contracts_orders, "Contracts-Orders");
    }

    // Billings - raw data with all columns
    if (result.billings?.zb_billings?.length) {
      addSheetFromArray(result.billings.zb_billings, "Billings");
    }

    // Rev Rec Waterfall - raw data
    if (result.revrec_waterfall?.zr_revrec?.length) {
      addSheetFromArray(result.revrec_waterfall.zr_revrec, "Rev Rec Raw");

      // Also add pivot table version
      const revrec = result.revrec_waterfall.zr_revrec;
      const months: Record<string, number> = {
        Jan: 0, Feb: 1, Mar: 2, Apr: 3, May: 4, Jun: 5,
        Jul: 6, Aug: 7, Sep: 8, Oct: 9, Nov: 10, Dec: 11
      };
      const periods = [...new Set(revrec.map(r => r["Period"]))].sort((a, b) => {
        const [aMonth, aYear] = a.split("-");
        const [bMonth, bYear] = b.split("-");
        const aDate = new Date(2000 + parseInt(aYear), months[aMonth] || 0);
        const bDate = new Date(2000 + parseInt(bYear), months[bMonth] || 0);
        return aDate.getTime() - bDate.getTime();
      });

      const pobMap = new Map<string, { allocatedPrice: number; periodAmounts: Map<string, number> }>();
      revrec.forEach(row => {
        const key = row["POB Name"];
        if (!pobMap.has(key)) {
          pobMap.set(key, { allocatedPrice: row["Ext Allocated Price"] || 0, periodAmounts: new Map() });
        }
        const pob = pobMap.get(key)!;
        const currentAmount = pob.periodAmounts.get(row["Period"]) || 0;
        pob.periodAmounts.set(row["Period"], currentAmount + (row["Amount"] || 0));
      });

      const pivotData = Array.from(pobMap.entries()).map(([pobName, data]) => {
        const row: Record<string, string | number> = {
          "POB Name": pobName,
          "Allocated Price": data.allocatedPrice,
        };
        let total = 0;
        periods.forEach(period => {
          const amount = data.periodAmounts.get(period) || 0;
          row[period] = amount;
          total += amount;
        });
        row["Total"] = total;
        return row;
      });
      addSheetFromArray(pivotData, "Rev Rec Pivot");
    }

    // Subscription - flatten charges with all fields
    if (result.subscription_spec?.rate_plans?.length) {
      const subscriptionData: Record<string, unknown>[] = [];
      result.subscription_spec.rate_plans.forEach(plan => {
        plan.charges?.forEach(charge => {
          subscriptionData.push({
            productName: plan.productName,
            ratePlanName: plan.ratePlanName,
            ...charge,
          });
        });
      });
      addSheetFromArray(subscriptionData, "Subscription");
    }

    // POB Mapping - raw data
    if (result.pob_mapping?.charge_pob_map?.length) {
      addSheetFromArray(result.pob_mapping.charge_pob_map, "POB Mapping");
    }

    // Contract Intel - as single row
    if (result.contract_intel) {
      addSheetFromArray([result.contract_intel], "Contract Intel");
    }

    // Detected Capabilities
    if (result.detected_capabilities) {
      const capsData = [{
        billing_caps: result.detected_capabilities.billing_caps?.join(", "),
        revenue_caps: result.detected_capabilities.revenue_caps?.join(", "),
        hints: result.detected_capabilities.hints?.join(", "),
        confidence: result.detected_capabilities.confidence,
      }];
      addSheetFromArray(capsData, "Detected Capabilities");
    }

    // Download the workbook
    XLSX.writeFile(workbook, `zuca-${id.slice(0, 8)}.xlsx`);

    addToast({
      title: "Exported",
      description: "Excel file downloaded with all data",
      color: "success",
    });
  };

  const handleCopyToClipboard = async () => {
    await navigator.clipboard.writeText(JSON.stringify(result, null, 2));
    addToast({
      title: "Copied",
      description: "JSON copied to clipboard",
      color: "success",
    });
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "completed": return "success";
      case "failed": return "danger";
      case "running": return "warning";
      default: return "default";
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "completed":
        return (
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
          </svg>
        );
      case "failed":
        return (
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
        );
      case "running":
        return (
          <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
          </svg>
        );
      default:
        return null;
    }
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex justify-between items-start">
        <div>
          <div className="flex items-center gap-4">
            <Link href="/history">
              <Button
                variant="light"
                size="sm"
                isIconOnly
                className="text-default-500 hover:text-primary"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                </svg>
              </Button>
            </Link>
            <div>
              <h1 className="text-3xl font-bold tracking-tight">
                <span className="gradient-text">{input.customer_name || "Analysis Results"}</span>
              </h1>
              <div className="flex items-center gap-3 mt-2">
                <Chip
                  size="sm"
                  color={getStatusColor(session.status)}
                  variant="flat"
                  className="capitalize"
                  startContent={getStatusIcon(session.status)}
                >
                  {session.status}
                </Chip>
                {session.llm_model && (
                  <Chip
                    size="sm"
                    variant="flat"
                    className="bg-default-200/70 text-default-600"
                  >
                    {session.llm_model}
                  </Chip>
                )}
                <span className="text-default-500 text-sm flex items-center gap-1.5">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  {new Date(session.created_at).toLocaleString()}
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="flex gap-2">
          <Tooltip content="Copy JSON to clipboard">
            <Button
              variant="bordered"
              size="sm"
              className="border-2 border-default-300 hover:border-primary hover:bg-primary/5"
              onPress={handleCopyToClipboard}
              startContent={
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
              }
            >
              Copy
            </Button>
          </Tooltip>
          <Tooltip content="Download Excel file with all tables">
            <Button
              variant="bordered"
              size="sm"
              className="border-2 border-secondary/50 hover:border-secondary hover:bg-secondary/5"
              onPress={handleExportExcel}
              startContent={
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              }
            >
              Excel
            </Button>
          </Tooltip>
          <Tooltip content="Download JSON file">
            <Button
              variant="bordered"
              size="sm"
              className="border-2 border-default-300 hover:border-primary hover:bg-primary/5"
              onPress={handleExportJSON}
              startContent={
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
              }
            >
              JSON
            </Button>
          </Tooltip>
          <Link href="/analyze">
            <Button
              color="primary"
              size="sm"
              className="font-semibold teal-glow-subtle"
              startContent={
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                </svg>
              }
            >
              New Use Case Analysis
            </Button>
          </Link>
        </div>
      </div>

      {/* Error State */}
      {session.status === "failed" && (
        <Card className="glass-card border-danger/30">
          <CardBody className="p-5 flex items-center gap-4">
            <div className="w-10 h-10 rounded-lg bg-danger/20 flex items-center justify-center text-danger">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
              </svg>
            </div>
            <div>
              <p className="font-medium text-danger">Analysis Failed</p>
              <p className="text-sm text-default-500 mt-0.5">
                {session.error_message || "An unknown error occurred during processing"}
              </p>
            </div>
          </CardBody>
        </Card>
      )}

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Results - 2 columns on large screens */}
        <div className="lg:col-span-2">
          {result && (
            <Tabs
              aria-label="Solution sections"
              variant="underlined"
              color="primary"
              classNames={{
                tabList: "border-b border-default-200/50 gap-4",
                cursor: "bg-primary",
                tab: "h-10 px-2",
                tabContent: "group-data-[selected=true]:text-primary font-medium text-default-500",
              }}
            >
              {/* Summary Tab */}
              <Tab
                key="summary"
                title={
                  <div className="flex items-center gap-2">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                    Summary
                  </div>
                }
              >
                <Card className="glass-card mt-4">
                  <CardBody className="p-6 prose prose-invert max-w-none prose-headings:text-foreground prose-p:text-default-600 prose-li:text-default-600 prose-strong:text-foreground">
                    {result.markdown_output ? (
                      <ReactMarkdown>{result.markdown_output}</ReactMarkdown>
                    ) : result.summary ? (
                      <div className="space-y-6">
                        {result.summary.assumptions?.length > 0 && (
                          <div>
                            <h4 className="text-lg font-semibold mb-3 flex items-center gap-2">
                              <span className="w-1.5 h-1.5 bg-primary rounded-full" />
                              Assumptions
                            </h4>
                            <ul className="space-y-2">
                              {result.summary.assumptions.map((a, i) => (
                                <li key={i} className="flex items-start gap-2">
                                  <span className="text-primary mt-1">•</span>
                                  <span>{a}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}
                        {result.summary.open_questions?.length > 0 && (
                          <div>
                            <h4 className="text-lg font-semibold mb-3 flex items-center gap-2">
                              <span className="w-1.5 h-1.5 bg-warning rounded-full" />
                              Open Questions
                            </h4>
                            <ul className="space-y-2">
                              {result.summary.open_questions.map((q, i) => (
                                <li key={i} className="flex items-start gap-2">
                                  <span className="text-warning mt-1">?</span>
                                  <span>{q}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}
                      </div>
                    ) : (
                      <p className="text-default-500 italic">No summary available</p>
                    )}
                    {/* Feedback */}
                    <div className="mt-6 pt-4 border-t border-default-200/30">
                      <FeedbackButtons
                        sessionId={id}
                        targetType="summary"
                        label="Was this summary helpful?"
                      />
                    </div>
                  </CardBody>
                </Card>
              </Tab>

              {/* Subscription Spec Tab */}
              <Tab
                key="subscription"
                title={
                  <div className="flex items-center gap-2">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 10h16M4 14h16M4 18h16" />
                    </svg>
                    Subscription
                  </div>
                }
              >
                <Card className="glass-card mt-4">
                  <CardHeader className="px-6 pt-5 pb-0">
                    <h3 className="text-lg font-semibold flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-primary rounded-full" />
                      Subscription Specification
                    </h3>
                  </CardHeader>
                  <CardBody className="p-6">
                    {result.subscription_spec?.rate_plans?.length ? (
                      <div className="space-y-4">
                        {result.subscription_spec.rate_plans.map((plan, i) => (
                          <div key={i} className="bg-default-100/50 rounded-xl p-4 border border-default-200/50">
                            <div className="flex items-center justify-between mb-3">
                              <h4 className="font-semibold text-foreground">{plan.ratePlanName}</h4>
                              <Chip size="sm" variant="flat" className="bg-primary/10 text-primary">
                                {plan.productName}
                              </Chip>
                            </div>
                            <div className="space-y-3">
                              {plan.charges?.map((charge, j) => (
                                <div key={j} className="ml-2 pl-3 border-l-2 border-primary/30 py-1">
                                  <div className="flex items-center justify-between">
                                    <p className="font-medium text-sm text-foreground">{charge.name}</p>
                                    {charge.quantity != null && (
                                      <span className="text-xs text-default-500 bg-default-200/50 px-2 py-0.5 rounded">
                                        Qty: {charge.quantity}
                                      </span>
                                    )}
                                  </div>
                                  <div className="text-xs text-default-500 mt-1 space-y-1">
                                    <div className="flex items-center gap-1.5 flex-wrap">
                                      <span className="px-1.5 py-0.5 bg-default-200/50 rounded">{charge.type}</span>
                                      <span className="text-default-400">•</span>
                                      <span className="px-1.5 py-0.5 bg-default-200/50 rounded">{charge.model}</span>
                                      {charge.price != null && (
                                        <>
                                          <span className="text-default-400">•</span>
                                          <span className="text-primary font-medium">${charge.price.toLocaleString()}</span>
                                        </>
                                      )}
                                      {charge.uom && (
                                        <span className="text-default-400">/ {charge.uom}</span>
                                      )}
                                      {charge.billingPeriod && (
                                        <>
                                          <span className="text-default-400">•</span>
                                          <span className="px-1.5 py-0.5 bg-secondary/10 text-secondary rounded">{charge.billingPeriod}</span>
                                        </>
                                      )}
                                    </div>
                                    {(charge.effectiveStartDate || charge.effectiveEndDate) && (
                                      <div className="flex items-center gap-1.5 text-default-400">
                                        <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                        </svg>
                                        <span>{charge.effectiveStartDate || "—"}</span>
                                        <span>→</span>
                                        <span>{charge.effectiveEndDate || "Ongoing"}</span>
                                      </div>
                                    )}
                                  </div>
                                </div>
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <p className="text-default-500 italic">No subscription spec available</p>
                    )}
                  </CardBody>
                </Card>
              </Tab>

              {/* Contracts Tab */}
              <Tab
                key="contracts"
                title={
                  <div className="flex items-center gap-2">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                    </svg>
                    Contracts/Orders
                  </div>
                }
              >
                <Card className="glass-card mt-4">
                  <CardHeader className="px-6 pt-5 pb-0">
                    <h3 className="text-lg font-semibold flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-primary rounded-full" />
                      Contracts & Orders
                    </h3>
                  </CardHeader>
                  <CardBody className="p-6">
                    {result.contracts_orders?.zr_contracts_orders?.length ? (
                      (() => {
                        const rows = result.contracts_orders.zr_contracts_orders;
                        const columns = Object.keys(rows[0]) as (keyof typeof rows[0])[];

                        return (
                          <div className="overflow-x-auto rounded-lg border border-default-200/50">
                            <table className="w-full text-sm">
                              <thead>
                                <tr className="bg-default-100/80">
                                  {columns.map((col) => (
                                    <th key={col} className="px-3 py-3 text-left font-semibold text-default-600 whitespace-nowrap text-xs">
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
                                      return (
                                        <td key={col} className={`px-3 py-2.5 whitespace-nowrap text-xs ${isNumber ? "text-right font-mono" : ""}`}>
                                          {isBool ? (value ? "Yes" : "No") : isNumber ? value.toLocaleString() : (value ?? "-")}
                                        </td>
                                      );
                                    })}
                                  </tr>
                                ))}
                              </tbody>
                            </table>
                          </div>
                        );
                      })()
                    ) : (
                      <p className="text-default-500 italic">No contract data available</p>
                    )}
                    {/* Feedback */}
                    <div className="mt-6 pt-4 border-t border-default-200/30">
                      <FeedbackButtons
                        sessionId={id}
                        targetType="contracts"
                        label="Was this contracts data helpful?"
                      />
                    </div>
                  </CardBody>
                </Card>
              </Tab>

              {/* Billings Tab */}
              <Tab
                key="billings"
                title={
                  <div className="flex items-center gap-2">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                    Billings
                  </div>
                }
              >
                <Card className="glass-card mt-4">
                  <CardHeader className="px-6 pt-5 pb-0">
                    <h3 className="text-lg font-semibold flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-primary rounded-full" />
                      Billing Schedule
                    </h3>
                  </CardHeader>
                  <CardBody className="p-6">
                    {result.billings?.zb_billings?.length ? (
                      (() => {
                        // Group billings by invoice date
                        const groupedBillings = result.billings.zb_billings.reduce((acc, row) => {
                          const date = row["Invoice Date"];
                          if (!acc[date]) {
                            acc[date] = [];
                          }
                          acc[date].push(row);
                          return acc;
                        }, {} as Record<string, typeof result.billings.zb_billings>);

                        const invoiceDates = Object.keys(groupedBillings).sort((a, b) =>
                          new Date(a).getTime() - new Date(b).getTime()
                        );

                        return (
                          <div className="space-y-4">
                            {invoiceDates.map((invoiceDate, groupIndex) => {
                              const rows = groupedBillings[invoiceDate];
                              const total = rows.reduce((sum, r) => sum + (r["Amount"] || 0), 0);

                              return (
                                <div key={invoiceDate} className="rounded-lg border border-default-200/50 overflow-hidden">
                                  {/* Invoice Date Header */}
                                  <div className="bg-default-100/80 px-4 py-3 flex items-center justify-between">
                                    <div className="flex items-center gap-3">
                                      <div className="w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center text-primary text-xs font-bold">
                                        {groupIndex + 1}
                                      </div>
                                      <div>
                                        <span className="font-semibold text-foreground">Invoice Date: {invoiceDate}</span>
                                        <span className="text-xs text-default-500 ml-3">({rows.length} line{rows.length > 1 ? "s" : ""})</span>
                                      </div>
                                    </div>
                                    <div className="text-right">
                                      <span className="text-xs text-default-500">Total:</span>
                                      <span className="ml-2 font-mono font-semibold text-primary">${total.toLocaleString()}</span>
                                    </div>
                                  </div>

                                  {/* Billing Lines Table */}
                                  <div className="overflow-x-auto">
                                    <table className="min-w-[800px] w-full text-sm">
                                      <thead>
                                        <tr className="bg-default-50/50">
                                          <th className="px-4 py-2 text-left font-medium text-default-500 whitespace-nowrap">Charge</th>
                                          <th className="px-4 py-2 text-left font-medium text-default-500 whitespace-nowrap">Rate Plan</th>
                                          <th className="px-4 py-2 text-left font-medium text-default-500 whitespace-nowrap">Period</th>
                                          <th className="px-4 py-2 text-right font-medium text-default-500 whitespace-nowrap">Qty</th>
                                          <th className="px-4 py-2 text-right font-medium text-default-500 whitespace-nowrap">Unit Price</th>
                                          <th className="px-4 py-2 text-right font-medium text-default-500 whitespace-nowrap">Amount</th>
                                        </tr>
                                      </thead>
                                      <tbody>
                                        {rows.map((row, i) => (
                                          <tr key={i} className="border-t border-default-200/30 hover:bg-default-100/30 transition-colors">
                                            <td className="px-4 py-2.5 text-foreground whitespace-nowrap">{row["Charge Name"]}</td>
                                            <td className="px-4 py-2.5 text-default-500 whitespace-nowrap">{row["Rate Plan"]}</td>
                                            <td className="px-4 py-2.5 text-default-400 text-xs whitespace-nowrap">
                                              {row["Billing Period Start"]} → {row["Billing Period End"]}
                                            </td>
                                            <td className="px-4 py-2.5 text-right font-mono text-default-500 whitespace-nowrap">{row["Quantity"]}</td>
                                            <td className="px-4 py-2.5 text-right font-mono text-default-500 whitespace-nowrap">
                                              ${row["Unit Price"]?.toLocaleString() ?? "-"}
                                            </td>
                                            <td className="px-4 py-2.5 text-right font-mono text-primary font-medium whitespace-nowrap">
                                              ${row["Amount"]?.toLocaleString() ?? "-"}
                                            </td>
                                          </tr>
                                        ))}
                                      </tbody>
                                    </table>
                                  </div>
                                </div>
                              );
                            })}
                          </div>
                        );
                      })()
                    ) : (
                      <p className="text-default-500 italic">No billing data available</p>
                    )}
                    {/* Feedback */}
                    <div className="mt-6 pt-4 border-t border-default-200/30">
                      <FeedbackButtons
                        sessionId={id}
                        targetType="billings"
                        label="Was this billing data helpful?"
                      />
                    </div>
                  </CardBody>
                </Card>
              </Tab>

              {/* Rev Rec Tab */}
              <Tab
                key="revrec"
                title={
                  <div className="flex items-center gap-2">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                    Rev Rec
                  </div>
                }
              >
                <Card className="glass-card mt-4">
                  <CardHeader className="px-6 pt-5 pb-0">
                    <h3 className="text-lg font-semibold flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-primary rounded-full" />
                      Revenue Recognition Waterfall
                    </h3>
                  </CardHeader>
                  <CardBody className="p-6">
                    {result.revrec_waterfall?.zr_revrec?.length ? (
                      (() => {
                        // Build pivot table: POB rows × Period columns
                        const revrec = result.revrec_waterfall.zr_revrec;

                        // Get unique periods sorted chronologically
                        const periods = [...new Set(revrec.map(r => r["Period"]))].sort((a, b) => {
                          // Parse period like "Jan-25" into a sortable format
                          const months: Record<string, number> = {
                            Jan: 0, Feb: 1, Mar: 2, Apr: 3, May: 4, Jun: 5,
                            Jul: 6, Aug: 7, Sep: 8, Oct: 9, Nov: 10, Dec: 11
                          };
                          const [aMonth, aYear] = a.split("-");
                          const [bMonth, bYear] = b.split("-");
                          const aDate = new Date(2000 + parseInt(aYear), months[aMonth] || 0);
                          const bDate = new Date(2000 + parseInt(bYear), months[bMonth] || 0);
                          return aDate.getTime() - bDate.getTime();
                        });

                        // Get unique POBs with their metadata
                        const pobMap = new Map<string, { name: string; total: number; allocatedPrice: number }>();
                        revrec.forEach(row => {
                          const key = row["POB Name"];
                          if (!pobMap.has(key)) {
                            pobMap.set(key, {
                              name: row["POB Name"],
                              total: 0,
                              allocatedPrice: row["Ext Allocated Price"] || 0
                            });
                          }
                          const pob = pobMap.get(key)!;
                          pob.total += row["Amount"] || 0;
                        });

                        // Build pivot data: POB → Period → Amount
                        const pivotData = new Map<string, Map<string, number>>();
                        revrec.forEach(row => {
                          const pobKey = row["POB Name"];
                          if (!pivotData.has(pobKey)) {
                            pivotData.set(pobKey, new Map());
                          }
                          const periodMap = pivotData.get(pobKey)!;
                          const currentAmount = periodMap.get(row["Period"]) || 0;
                          periodMap.set(row["Period"], currentAmount + (row["Amount"] || 0));
                        });

                        const pobs = Array.from(pobMap.keys());

                        // Calculate column totals
                        const columnTotals = periods.map(period =>
                          pobs.reduce((sum, pob) => sum + (pivotData.get(pob)?.get(period) || 0), 0)
                        );

                        return (
                          <div className="overflow-x-auto rounded-lg border border-default-200/50">
                            <table className="w-full text-sm">
                              <thead>
                                <tr className="bg-default-100/80">
                                  <th className="px-4 py-3 text-left font-semibold text-default-600 whitespace-nowrap">POB Name</th>
                                  <th className="px-3 py-3 text-right font-semibold text-default-600 whitespace-nowrap">Allocated</th>
                                  {periods.map(period => (
                                    <th key={period} className="px-3 py-3 text-right font-semibold text-default-600 whitespace-nowrap">
                                      {period}
                                    </th>
                                  ))}
                                  <th className="px-3 py-3 text-right font-semibold text-primary whitespace-nowrap">Total</th>
                                </tr>
                              </thead>
                              <tbody>
                                {pobs.map((pobKey, i) => {
                                  const pob = pobMap.get(pobKey)!;
                                  const periodAmounts = pivotData.get(pobKey)!;
                                  return (
                                    <tr key={i} className="border-t border-default-200/30 hover:bg-default-100/30 transition-colors">
                                      <td className="px-4 py-2.5 text-foreground whitespace-nowrap">{pob.name}</td>
                                      <td className="px-3 py-2.5 text-right font-mono text-xs text-default-400 whitespace-nowrap">
                                        ${pob.allocatedPrice.toLocaleString()}
                                      </td>
                                      {periods.map(period => {
                                        const amount = periodAmounts.get(period) || 0;
                                        return (
                                          <td key={period} className={`px-3 py-2.5 text-right font-mono text-xs whitespace-nowrap ${amount > 0 ? "text-foreground" : "text-default-400"}`}>
                                            ${amount.toLocaleString()}
                                          </td>
                                        );
                                      })}
                                      <td className="px-3 py-2.5 text-right font-mono text-sm text-primary font-medium whitespace-nowrap">
                                        ${pob.total.toLocaleString()}
                                      </td>
                                    </tr>
                                  );
                                })}
                                {/* Totals Row */}
                                <tr className="border-t-2 border-default-300 bg-default-100/50">
                                  <td className="px-4 py-3 font-semibold text-foreground whitespace-nowrap">Total</td>
                                  <td className="px-3 py-3 text-right font-mono text-xs text-default-500 whitespace-nowrap">
                                    ${pobs.reduce((sum, pob) => sum + pobMap.get(pob)!.allocatedPrice, 0).toLocaleString()}
                                  </td>
                                  {columnTotals.map((total, i) => (
                                    <td key={i} className="px-3 py-3 text-right font-mono text-xs font-medium text-foreground whitespace-nowrap">
                                      ${total.toLocaleString()}
                                    </td>
                                  ))}
                                  <td className="px-3 py-3 text-right font-mono text-sm text-primary font-bold whitespace-nowrap">
                                    ${pobs.reduce((sum, pob) => sum + pobMap.get(pob)!.total, 0).toLocaleString()}
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                        );
                      })()
                    ) : (
                      <p className="text-default-500 italic">No rev rec data available</p>
                    )}
                    {/* Feedback */}
                    <div className="mt-6 pt-4 border-t border-default-200/30">
                      <FeedbackButtons
                        sessionId={id}
                        targetType="revrec"
                        label="Was this rev rec data helpful?"
                      />
                    </div>
                  </CardBody>
                </Card>
              </Tab>

              {/* Raw JSON Tab */}
              <Tab
                key="raw"
                title={
                  <div className="flex items-center gap-2">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                    </svg>
                    Raw JSON
                  </div>
                }
              >
                <Card className="glass-card mt-4 overflow-hidden">
                  <CardBody className="p-4 overflow-hidden">
                    <div className="overflow-auto rounded-lg max-h-[500px] border border-default-200/30">
                      <pre className="text-xs bg-[#050a08] p-4 text-default-500 font-mono whitespace-pre">
                        {JSON.stringify(result, null, 2)}
                      </pre>
                    </div>
                  </CardBody>
                </Card>
              </Tab>
            </Tabs>
          )}
        </div>

        {/* Conversation Panel - 1 column on large screens */}
        <div className="lg:col-span-1">
          <ConversationPanel
            sessionId={id}
            messages={data?.session?.conversation_history || []}
            currentInput={session.input as Record<string, unknown>}
            currentModel={session.llm_model}
            onRefresh={handleRefresh}
          />
        </div>
      </div>

      {/* Input Summary */}
      <div className="divider-glow" />
      <Card className="glass-card">
        <CardHeader className="px-6 pt-5 pb-0">
          <h3 className="text-lg font-semibold flex items-center gap-2">
            <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            Input Summary
          </h3>
        </CardHeader>
        <CardBody className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="space-y-1">
              <p className="text-xs font-medium text-default-500 uppercase tracking-wide">Customer</p>
              <p className="font-medium text-foreground">{input.customer_name || "-"}</p>
            </div>
            <div className="space-y-1">
              <p className="text-xs font-medium text-default-500 uppercase tracking-wide">Session Type</p>
              <Chip size="sm" variant="bordered" className="border-default-300 capitalize">
                {session.session_type}
              </Chip>
            </div>
            <div className="space-y-1">
              <p className="text-xs font-medium text-default-500 uppercase tracking-wide">Model</p>
              <p className="font-medium text-foreground">{session.llm_model || "-"}</p>
            </div>
            <div className="space-y-1">
              <p className="text-xs font-medium text-default-500 uppercase tracking-wide">Session ID</p>
              <p className="font-mono text-xs text-default-400">{session.id}</p>
            </div>
            <div className="md:col-span-3 space-y-1">
              <p className="text-xs font-medium text-default-500 uppercase tracking-wide">Use Case Description</p>
              <p className="text-default-600 leading-relaxed">{input.use_case_description || "-"}</p>
            </div>
          </div>
        </CardBody>
      </Card>
    </div>
  );
}
