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
import type { ZucaOutput } from "@zuca/types";

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
              className="border-default-300 hover:border-primary"
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
              className="border-default-300 hover:border-primary hover:bg-primary/5"
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
          <Tooltip content="Download JSON file">
            <Button
              variant="bordered"
              size="sm"
              className="border-default-300 hover:border-primary hover:bg-primary/5"
              onPress={handleExportJSON}
              startContent={
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
              }
            >
              Export
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
              New Analysis
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
                            <div className="space-y-2">
                              {plan.charges?.map((charge, j) => (
                                <div key={j} className="ml-2 pl-3 border-l-2 border-primary/30">
                                  <p className="font-medium text-sm text-foreground">{charge.name}</p>
                                  <p className="text-xs text-default-500 mt-0.5">
                                    <span className="inline-flex items-center gap-1.5">
                                      <span className="px-1.5 py-0.5 bg-default-200/50 rounded">{charge.type}</span>
                                      <span className="text-default-400">•</span>
                                      <span className="px-1.5 py-0.5 bg-default-200/50 rounded">{charge.model}</span>
                                      {charge.price != null && (
                                        <>
                                          <span className="text-default-400">•</span>
                                          <span className="text-primary font-medium">${charge.price}</span>
                                        </>
                                      )}
                                      {charge.uom && (
                                        <span className="text-default-400">/ {charge.uom}</span>
                                      )}
                                    </span>
                                  </p>
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
                    Contracts
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
                      <div className="overflow-x-auto rounded-lg border border-default-200/50">
                        <table className="min-w-full text-sm">
                          <thead>
                            <tr className="bg-default-100/80">
                              <th className="px-4 py-3 text-left font-semibold text-default-600">Line #</th>
                              <th className="px-4 py-3 text-left font-semibold text-default-600">POB Name</th>
                              <th className="px-4 py-3 text-left font-semibold text-default-600">Template</th>
                              <th className="px-4 py-3 text-right font-semibold text-default-600">Ext Sell Price</th>
                              <th className="px-4 py-3 text-right font-semibold text-default-600">Allocated</th>
                            </tr>
                          </thead>
                          <tbody>
                            {result.contracts_orders.zr_contracts_orders.map((row, i) => (
                              <tr key={i} className="border-t border-default-200/30 hover:bg-default-100/30 transition-colors">
                                <td className="px-4 py-3 font-mono text-xs text-default-500">{row["Line Item Num"]}</td>
                                <td className="px-4 py-3 text-foreground">{row["POB Name"]}</td>
                                <td className="px-4 py-3 text-default-500">{row["POB Template"]}</td>
                                <td className="px-4 py-3 text-right font-mono text-foreground">
                                  ${row["Ext Sell Price"]?.toLocaleString() ?? "-"}
                                </td>
                                <td className="px-4 py-3 text-right font-mono text-primary">
                                  ${row["Ext Allocated Price"]?.toLocaleString() ?? "-"}
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    ) : (
                      <p className="text-default-500 italic">No contract data available</p>
                    )}
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
                      <div className="overflow-x-auto rounded-lg border border-default-200/50">
                        <table className="min-w-full text-sm">
                          <thead>
                            <tr className="bg-default-100/80">
                              <th className="px-4 py-3 text-left font-semibold text-default-600">Invoice Date</th>
                              <th className="px-4 py-3 text-left font-semibold text-default-600">Charge</th>
                              <th className="px-4 py-3 text-left font-semibold text-default-600">Rate Plan</th>
                              <th className="px-4 py-3 text-right font-semibold text-default-600">Amount</th>
                            </tr>
                          </thead>
                          <tbody>
                            {result.billings.zb_billings.map((row, i) => (
                              <tr key={i} className="border-t border-default-200/30 hover:bg-default-100/30 transition-colors">
                                <td className="px-4 py-3 font-mono text-xs text-default-500">{row["Invoice Date"]}</td>
                                <td className="px-4 py-3 text-foreground">{row["Charge Name"]}</td>
                                <td className="px-4 py-3 text-default-500">{row["Rate Plan"]}</td>
                                <td className="px-4 py-3 text-right font-mono text-primary font-medium">
                                  ${row["Amount"]?.toLocaleString() ?? "-"}
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    ) : (
                      <p className="text-default-500 italic">No billing data available</p>
                    )}
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
                      <div className="overflow-x-auto rounded-lg border border-default-200/50">
                        <table className="min-w-full text-sm">
                          <thead>
                            <tr className="bg-default-100/80">
                              <th className="px-4 py-3 text-left font-semibold text-default-600">POB</th>
                              <th className="px-4 py-3 text-left font-semibold text-default-600">Period</th>
                              <th className="px-4 py-3 text-left font-semibold text-default-600">Event</th>
                              <th className="px-4 py-3 text-right font-semibold text-default-600">Amount</th>
                            </tr>
                          </thead>
                          <tbody>
                            {result.revrec_waterfall.zr_revrec.map((row, i) => (
                              <tr key={i} className="border-t border-default-200/30 hover:bg-default-100/30 transition-colors">
                                <td className="px-4 py-3 text-foreground">{row["POB Name"]}</td>
                                <td className="px-4 py-3 font-mono text-xs text-default-500">{row["Period"]}</td>
                                <td className="px-4 py-3 text-default-500">{row["Event Name"]}</td>
                                <td className="px-4 py-3 text-right font-mono text-primary font-medium">
                                  ${row["Amount"]?.toLocaleString() ?? "-"}
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    ) : (
                      <p className="text-default-500 italic">No rev rec data available</p>
                    )}
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
                <Card className="glass-card mt-4">
                  <CardBody className="p-4">
                    <pre className="text-xs overflow-x-auto bg-[#050a08] p-4 rounded-lg max-h-96 overflow-y-auto border border-default-200/30 text-default-500 font-mono">
                      {JSON.stringify(result, null, 2)}
                    </pre>
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
