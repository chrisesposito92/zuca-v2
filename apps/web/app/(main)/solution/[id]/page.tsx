"use client";

import { use } from "react";
import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Chip,
  Divider,
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
      <div className="space-y-6">
        <Skeleton className="h-8 w-64 rounded-lg" />
        <Skeleton className="h-4 w-48 rounded" />
        <div className="grid gap-4">
          <Skeleton className="h-40 rounded-lg" />
          <Skeleton className="h-64 rounded-lg" />
        </div>
      </div>
    );
  }

  if (error || !data?.session) {
    return (
      <div className="space-y-6">
        <div className="flex items-center gap-4">
          <Link href="/history">
            <Button variant="bordered" size="sm">
              ← Back to History
            </Button>
          </Link>
        </div>
        <Card className="border-danger">
          <CardBody>
            <p className="text-danger">
              {(error as { error?: string })?.error || "Session not found"}
            </p>
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

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-start">
        <div>
          <div className="flex items-center gap-3">
            <Link href="/history">
              <Button variant="light" size="sm" isIconOnly>
                ←
              </Button>
            </Link>
            <h1 className="text-2xl font-bold">
              {input.customer_name || "Analysis Results"}
            </h1>
            <Chip
              size="sm"
              color={session.status === "completed" ? "success" : session.status === "failed" ? "danger" : "warning"}
              variant="flat"
            >
              {session.status}
            </Chip>
          </div>
          <p className="text-default-500 mt-1">
            Created {new Date(session.created_at).toLocaleString()}
          </p>
        </div>
        <div className="flex gap-2">
          <Tooltip content="Copy JSON">
            <Button variant="bordered" size="sm" onPress={handleCopyToClipboard}>
              Copy
            </Button>
          </Tooltip>
          <Tooltip content="Download JSON">
            <Button variant="bordered" size="sm" onPress={handleExportJSON}>
              Export
            </Button>
          </Tooltip>
          <Link href="/analyze">
            <Button color="primary" size="sm">
              New Analysis
            </Button>
          </Link>
        </div>
      </div>

      {/* Error State */}
      {session.status === "failed" && (
        <Card className="border-danger">
          <CardBody>
            <p className="text-danger font-medium">Analysis Failed</p>
            <p className="text-sm text-default-500 mt-1">
              {session.error_message || "An unknown error occurred"}
            </p>
          </CardBody>
        </Card>
      )}

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Results - 2 columns on large screens */}
        <div className="lg:col-span-2">
          {result && (
            <Tabs aria-label="Solution sections" variant="underlined" color="primary">
          {/* Summary Tab */}
          <Tab key="summary" title="Summary">
            <Card className="mt-4">
              <CardBody className="prose dark:prose-invert max-w-none">
                {result.markdown_output ? (
                  <ReactMarkdown>{result.markdown_output}</ReactMarkdown>
                ) : result.summary ? (
                  <div className="space-y-4">
                    {result.summary.assumptions?.length > 0 && (
                      <div>
                        <h4 className="font-semibold mb-2">Assumptions</h4>
                        <ul className="list-disc pl-4">
                          {result.summary.assumptions.map((a, i) => (
                            <li key={i}>{a}</li>
                          ))}
                        </ul>
                      </div>
                    )}
                    {result.summary.open_questions?.length > 0 && (
                      <div>
                        <h4 className="font-semibold mb-2">Open Questions</h4>
                        <ul className="list-disc pl-4">
                          {result.summary.open_questions.map((q, i) => (
                            <li key={i}>{q}</li>
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
          <Tab key="subscription" title="Subscription">
            <Card className="mt-4">
              <CardHeader>
                <h3 className="text-lg font-semibold">Subscription Specification</h3>
              </CardHeader>
              <CardBody>
                {result.subscription_spec?.rate_plans?.length ? (
                  <div className="space-y-4">
                    {result.subscription_spec.rate_plans.map((plan, i) => (
                      <div key={i} className="border rounded-lg p-4">
                        <div className="flex items-center justify-between mb-2">
                          <h4 className="font-medium">{plan.ratePlanName}</h4>
                          <Chip size="sm" variant="flat">
                            {plan.productName}
                          </Chip>
                        </div>
                        {plan.charges?.map((charge, j) => (
                          <div key={j} className="ml-4 mt-2 text-sm border-l-2 border-default-200 pl-3">
                            <p className="font-medium">{charge.name}</p>
                            <p className="text-default-500">
                              {charge.type} • {charge.model}
                              {charge.price != null ? ` • $${charge.price}` : ""}
                              {charge.uom ? ` / ${charge.uom}` : ""}
                            </p>
                          </div>
                        ))}
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
          <Tab key="contracts" title="Contracts/Orders">
            <Card className="mt-4">
              <CardHeader>
                <h3 className="text-lg font-semibold">Contracts & Orders</h3>
              </CardHeader>
              <CardBody>
                {result.contracts_orders?.zr_contracts_orders?.length ? (
                  <div className="overflow-x-auto">
                    <table className="min-w-full text-sm">
                      <thead className="bg-default-100">
                        <tr>
                          <th className="px-4 py-2 text-left">Line #</th>
                          <th className="px-4 py-2 text-left">POB Name</th>
                          <th className="px-4 py-2 text-left">Template</th>
                          <th className="px-4 py-2 text-right">Ext Sell Price</th>
                          <th className="px-4 py-2 text-right">Allocated</th>
                        </tr>
                      </thead>
                      <tbody>
                        {result.contracts_orders.zr_contracts_orders.map((row, i) => (
                          <tr key={i} className="border-t">
                            <td className="px-4 py-2">{row["Line Item Num"]}</td>
                            <td className="px-4 py-2">{row["POB Name"]}</td>
                            <td className="px-4 py-2">{row["POB Template"]}</td>
                            <td className="px-4 py-2 text-right">
                              ${row["Ext Sell Price"]?.toLocaleString() ?? "-"}
                            </td>
                            <td className="px-4 py-2 text-right">
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
          <Tab key="billings" title="Billings">
            <Card className="mt-4">
              <CardHeader>
                <h3 className="text-lg font-semibold">Billing Schedule</h3>
              </CardHeader>
              <CardBody>
                {result.billings?.zb_billings?.length ? (
                  <div className="overflow-x-auto">
                    <table className="min-w-full text-sm">
                      <thead className="bg-default-100">
                        <tr>
                          <th className="px-4 py-2 text-left">Invoice Date</th>
                          <th className="px-4 py-2 text-left">Charge</th>
                          <th className="px-4 py-2 text-left">Rate Plan</th>
                          <th className="px-4 py-2 text-right">Amount</th>
                        </tr>
                      </thead>
                      <tbody>
                        {result.billings.zb_billings.map((row, i) => (
                          <tr key={i} className="border-t">
                            <td className="px-4 py-2">{row["Invoice Date"]}</td>
                            <td className="px-4 py-2">{row["Charge Name"]}</td>
                            <td className="px-4 py-2">{row["Rate Plan"]}</td>
                            <td className="px-4 py-2 text-right">
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
          <Tab key="revrec" title="Rev Rec">
            <Card className="mt-4">
              <CardHeader>
                <h3 className="text-lg font-semibold">Revenue Recognition Waterfall</h3>
              </CardHeader>
              <CardBody>
                {result.revrec_waterfall?.zr_revrec?.length ? (
                  <div className="overflow-x-auto">
                    <table className="min-w-full text-sm">
                      <thead className="bg-default-100">
                        <tr>
                          <th className="px-4 py-2 text-left">POB</th>
                          <th className="px-4 py-2 text-left">Period</th>
                          <th className="px-4 py-2 text-left">Event</th>
                          <th className="px-4 py-2 text-right">Amount</th>
                        </tr>
                      </thead>
                      <tbody>
                        {result.revrec_waterfall.zr_revrec.map((row, i) => (
                          <tr key={i} className="border-t">
                            <td className="px-4 py-2">{row["POB Name"]}</td>
                            <td className="px-4 py-2">{row["Period"]}</td>
                            <td className="px-4 py-2">{row["Event Name"]}</td>
                            <td className="px-4 py-2 text-right">
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
          <Tab key="raw" title="Raw JSON">
            <Card className="mt-4">
              <CardBody>
                <pre className="text-xs overflow-x-auto bg-default-100 p-4 rounded-lg max-h-96 overflow-y-auto">
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
      <Divider />
      <Card>
        <CardHeader>
          <h3 className="text-lg font-semibold">Input Summary</h3>
        </CardHeader>
        <CardBody>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
            <div>
              <p className="text-default-500">Customer</p>
              <p className="font-medium">{input.customer_name || "-"}</p>
            </div>
            <div>
              <p className="text-default-500">Session Type</p>
              <p className="font-medium">{session.session_type}</p>
            </div>
            <div className="md:col-span-2">
              <p className="text-default-500">Use Case</p>
              <p className="font-medium">{input.use_case_description || "-"}</p>
            </div>
          </div>
        </CardBody>
      </Card>
    </div>
  );
}
