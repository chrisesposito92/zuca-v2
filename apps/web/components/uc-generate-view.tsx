"use client";

import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Chip,
  Tab,
  Tabs,
  Tooltip,
  addToast,
} from "@heroui/react";
import Link from "next/link";
import ReactMarkdown from "react-markdown";
import {
  Document,
  Packer,
  Paragraph,
  TextRun,
  HeadingLevel,
  AlignmentType,
} from "docx";
import type { UCGeneratorOutput } from "@zuca/types";
import { FeedbackButtons } from "@/components/FeedbackButtons";

interface UCGenerateViewProps {
  result: UCGeneratorOutput;
  sessionId: string;
  customerName: string;
  status: string;
  createdAt: string;
  model?: string | null;
}

export function UCGenerateView({
  result,
  sessionId,
  customerName,
  status,
  createdAt,
  model,
}: UCGenerateViewProps) {
  const handleExportJSON = () => {
    const blob = new Blob([JSON.stringify(result, null, 2)], {
      type: "application/json",
    });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `uc-generate-${sessionId.slice(0, 8)}.json`;
    a.click();
    URL.revokeObjectURL(url);

    addToast({
      title: "Exported",
      description: "JSON file downloaded",
      color: "success",
    });
  };

  const handleCopyOTRInput = async (useCaseIndex: number) => {
    const useCase = result.use_cases[useCaseIndex];
    if (!useCase) return;

    // Transform to ZucaInput format
    const zucaInput = {
      customer_name: useCase.otr_workflow_inputs.customer_name,
      contract_start_date: useCase.otr_workflow_inputs.contract_start_date,
      terms_months: useCase.otr_workflow_inputs.terms_months,
      transaction_currency: useCase.otr_workflow_inputs.transaction_currency,
      billing_period: useCase.otr_workflow_inputs.billing_period,
      is_allocations: useCase.otr_workflow_inputs.is_allocations,
      allocation_method: useCase.otr_workflow_inputs.allocation_method || undefined,
      use_case_description: useCase.otr_workflow_inputs.use_case,
      rev_rec_notes: useCase.otr_workflow_inputs.rev_rec_notes
        .map((n) => `${n.charge_group}: ${n.notes}`)
        .join(" | "),
    };

    await navigator.clipboard.writeText(JSON.stringify(zucaInput, null, 2));
    addToast({
      title: "Copied",
      description: "OTR Input copied to clipboard (ready for Analyze)",
      color: "success",
    });
  };

  const handleCopyToClipboard = async () => {
    await navigator.clipboard.writeText(JSON.stringify(result, null, 2));
    addToast({
      title: "Copied",
      description: "Full JSON copied to clipboard",
      color: "success",
    });
  };

  const handleDownloadMarkdown = () => {
    if (!result.formatted) return;

    const blob = new Blob([result.formatted], { type: "text/markdown" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `${customerName.toLowerCase().replace(/\s+/g, "-")}-use-cases.md`;
    a.click();
    URL.revokeObjectURL(url);

    addToast({
      title: "Exported",
      description: "Markdown file downloaded",
      color: "success",
    });
  };

  const handleDownloadDocx = async () => {
    if (!result.formatted) return;

    // Parse markdown into docx paragraphs
    const lines = result.formatted.split("\n");
    const children: Paragraph[] = [];

    for (const line of lines) {
      if (line.startsWith("## ")) {
        // H2 heading
        children.push(
          new Paragraph({
            text: line.replace(/^## /, ""),
            heading: HeadingLevel.HEADING_2,
            spacing: { before: 400, after: 200 },
          })
        );
      } else if (line.startsWith("### ")) {
        // H3 heading
        children.push(
          new Paragraph({
            text: line.replace(/^### /, ""),
            heading: HeadingLevel.HEADING_3,
            spacing: { before: 300, after: 150 },
          })
        );
      } else if (line.startsWith("**") && line.endsWith("**")) {
        // Bold line
        children.push(
          new Paragraph({
            children: [
              new TextRun({
                text: line.replace(/^\*\*/, "").replace(/\*\*$/, ""),
                bold: true,
              }),
            ],
            spacing: { before: 200, after: 100 },
          })
        );
      } else if (line.startsWith("- ")) {
        // Bullet point
        children.push(
          new Paragraph({
            text: line.replace(/^- /, ""),
            bullet: { level: 0 },
          })
        );
      } else if (line.startsWith("```")) {
        // Skip code fence markers
        continue;
      } else if (line.trim() === "") {
        // Empty line
        children.push(new Paragraph({ text: "" }));
      } else {
        // Regular paragraph
        children.push(
          new Paragraph({
            text: line,
            spacing: { after: 100 },
          })
        );
      }
    }

    const doc = new Document({
      sections: [
        {
          properties: {},
          children: [
            new Paragraph({
              text: `${customerName} - Use Cases`,
              heading: HeadingLevel.HEADING_1,
              alignment: AlignmentType.CENTER,
              spacing: { after: 400 },
            }),
            ...children,
          ],
        },
      ],
    });

    const blob = await Packer.toBlob(doc);
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `${customerName.toLowerCase().replace(/\s+/g, "-")}-use-cases.docx`;
    a.click();
    URL.revokeObjectURL(url);

    addToast({
      title: "Exported",
      description: "Word document downloaded",
      color: "success",
    });
  };

  const getStatusColor = (s: string) => {
    switch (s) {
      case "completed":
        return "success";
      case "failed":
        return "danger";
      case "running":
        return "warning";
      default:
        return "default";
    }
  };

  const getStatusIcon = (s: string) => {
    switch (s) {
      case "completed":
        return (
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
            <path
              fillRule="evenodd"
              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
              clipRule="evenodd"
            />
          </svg>
        );
      case "failed":
        return (
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
            <path
              fillRule="evenodd"
              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        );
      case "running":
        return (
          <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            />
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            />
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
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 19l-7-7m0 0l7-7m-7 7h18"
                  />
                </svg>
              </Button>
            </Link>
            <div>
              <h1 className="text-3xl font-bold tracking-tight">
                <span className="gradient-text">{customerName}</span>
              </h1>
              <div className="flex items-center gap-3 mt-2">
                <Chip
                  size="sm"
                  color={getStatusColor(status)}
                  variant="flat"
                  className="capitalize"
                  startContent={getStatusIcon(status)}
                >
                  {status}
                </Chip>
                <Chip size="sm" variant="flat" className="bg-secondary/20 text-secondary">
                  UC Generate
                </Chip>
                {model && (
                  <Chip size="sm" variant="flat" className="bg-default-200/70 text-default-600">
                    {model}
                  </Chip>
                )}
                <span className="text-default-500 text-sm flex items-center gap-1.5">
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                  {new Date(createdAt).toLocaleString()}
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
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
                  />
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
              className="border-2 border-default-300 hover:border-primary hover:bg-primary/5"
              onPress={handleExportJSON}
              startContent={
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                  />
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
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 4v16m8-8H4"
                  />
                </svg>
              }
            >
              New Use Case Analysis
            </Button>
          </Link>
        </div>
      </div>

      {/* Main Content */}
      <Tabs
        aria-label="UC Generate sections"
        variant="underlined"
        color="primary"
        classNames={{
          tabList: "border-b border-default-200/50 gap-4",
          cursor: "bg-primary",
          tab: "h-10 px-2",
          tabContent:
            "group-data-[selected=true]:text-primary font-medium text-default-500",
        }}
      >
        {/* Generated Use Cases Tab */}
        <Tab
          key="use-cases"
          title={
            <div className="flex items-center gap-2">
              <svg
                className="w-4 h-4"
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
              Use Cases ({result.use_cases?.length || 0})
            </div>
          }
        >
          <div className="space-y-6 mt-4">
            {result.use_cases?.map((useCase, index) => (
              <Card key={useCase.id} className="glass-card">
                <CardHeader className="px-6 pt-5 pb-0 flex justify-between items-start">
                  <div>
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-secondary/20 flex items-center justify-center text-secondary font-bold">
                        {index + 1}
                      </div>
                      <h3 className="text-lg font-semibold">{useCase.label}</h3>
                    </div>
                    <p className="text-sm text-default-500 mt-2 ml-11">
                      {useCase.id}
                    </p>
                  </div>
                  <Tooltip content="Copy OTR input for Analyze">
                    <Button
                      size="sm"
                      variant="bordered"
                      className="border-primary text-primary hover:bg-primary/10"
                      onPress={() => handleCopyOTRInput(index)}
                      startContent={
                        <svg
                          className="w-4 h-4"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
                          />
                        </svg>
                      }
                    >
                      Copy for Analyze
                    </Button>
                  </Tooltip>
                </CardHeader>
                <CardBody className="p-6 space-y-4">
                  {/* Use Case Description */}
                  <div>
                    <h4 className="text-sm font-medium text-default-500 mb-2">
                      Scenario Description
                    </h4>
                    <p className="text-default-600 leading-relaxed">
                      {useCase.otr_workflow_inputs.use_case}
                    </p>
                  </div>

                  {/* Key Details */}
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <div className="bg-default-100/50 rounded-lg p-3">
                      <p className="text-xs text-default-500">Start Date</p>
                      <p className="font-medium">
                        {useCase.otr_workflow_inputs.contract_start_date}
                      </p>
                    </div>
                    <div className="bg-default-100/50 rounded-lg p-3">
                      <p className="text-xs text-default-500">Term</p>
                      <p className="font-medium">
                        {useCase.otr_workflow_inputs.terms_months} months
                      </p>
                    </div>
                    <div className="bg-default-100/50 rounded-lg p-3">
                      <p className="text-xs text-default-500">Billing Period</p>
                      <p className="font-medium">
                        {useCase.otr_workflow_inputs.billing_period}
                      </p>
                    </div>
                    <div className="bg-default-100/50 rounded-lg p-3">
                      <p className="text-xs text-default-500">Allocations</p>
                      <p className="font-medium">
                        {useCase.otr_workflow_inputs.is_allocations ? "Yes" : "No"}
                      </p>
                    </div>
                  </div>

                  {/* Assumptions */}
                  {useCase.assumptions?.length > 0 && (
                    <div>
                      <h4 className="text-sm font-medium text-default-500 mb-2 flex items-center gap-2">
                        <span className="w-1.5 h-1.5 bg-primary rounded-full" />
                        Assumptions
                      </h4>
                      <ul className="space-y-1 text-sm text-default-600">
                        {useCase.assumptions.map((assumption, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <span className="text-primary mt-0.5">•</span>
                            <span>{assumption}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Open Questions */}
                  {useCase.risks_or_open_questions?.length > 0 && (
                    <div>
                      <h4 className="text-sm font-medium text-default-500 mb-2 flex items-center gap-2">
                        <span className="w-1.5 h-1.5 bg-warning rounded-full" />
                        Open Questions
                      </h4>
                      <ul className="space-y-1 text-sm text-default-600">
                        {useCase.risks_or_open_questions.map((question, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <span className="text-warning mt-0.5">?</span>
                            <span>{question}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </CardBody>
              </Card>
            ))}
          </div>
        </Tab>

        {/* Formatted Output Tab */}
        <Tab
          key="formatted"
          title={
            <div className="flex items-center gap-2">
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                />
              </svg>
              Formatted
            </div>
          }
        >
          <Card className="glass-card mt-4">
            <CardHeader className="px-6 pt-5 pb-0 flex justify-between items-center">
              <h3 className="text-lg font-semibold flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-primary rounded-full" />
                Formatted Output
              </h3>
              {result.formatted && (
                <div className="flex gap-2">
                  <Tooltip content="Download as Markdown">
                    <Button
                      size="sm"
                      variant="bordered"
                      className="border-default-300 hover:border-primary"
                      onPress={handleDownloadMarkdown}
                      startContent={
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                        </svg>
                      }
                    >
                      .md
                    </Button>
                  </Tooltip>
                  <Tooltip content="Download as Word Document">
                    <Button
                      size="sm"
                      variant="bordered"
                      className="border-secondary/50 hover:border-secondary"
                      onPress={handleDownloadDocx}
                      startContent={
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                        </svg>
                      }
                    >
                      .docx
                    </Button>
                  </Tooltip>
                </div>
              )}
            </CardHeader>
            <CardBody className="p-6 prose prose-invert max-w-none prose-headings:text-foreground prose-p:text-default-600 prose-li:text-default-600 prose-strong:text-foreground">
              {result.formatted ? (
                <ReactMarkdown>{result.formatted}</ReactMarkdown>
              ) : (
                <p className="text-default-500 italic">No formatted output available</p>
              )}
            </CardBody>
          </Card>
        </Tab>

        {/* Research Tab */}
        <Tab
          key="research"
          title={
            <div className="flex items-center gap-2">
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
              Research
            </div>
          }
        >
          <div className="space-y-6 mt-4">
            {/* Company Profile */}
            <Card className="glass-card">
              <CardHeader className="px-6 pt-5 pb-0">
                <h3 className="text-lg font-semibold flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-primary rounded-full" />
                  Company Profile
                </h3>
              </CardHeader>
              <CardBody className="p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <p className="text-xs text-default-500">Company</p>
                    <p className="font-medium">{result.research?.company_profile?.name}</p>
                  </div>
                  <div>
                    <p className="text-xs text-default-500">Website</p>
                    <p className="font-medium">{result.research?.company_profile?.website}</p>
                  </div>
                  <div className="md:col-span-2">
                    <p className="text-xs text-default-500">Industry</p>
                    <p className="text-default-600">
                      {result.research?.company_profile?.industry_guess}
                    </p>
                  </div>
                  <div className="md:col-span-2">
                    <p className="text-xs text-default-500">Go-to-Market Notes</p>
                    <p className="text-default-600">
                      {result.research?.company_profile?.go_to_market_notes}
                    </p>
                  </div>
                </div>
              </CardBody>
            </Card>

            {/* Products */}
            {result.research?.product_catalog?.length > 0 && (
              <Card className="glass-card">
                <CardHeader className="px-6 pt-5 pb-0">
                  <h3 className="text-lg font-semibold flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-secondary rounded-full" />
                    Products ({result.research.product_catalog.length})
                  </h3>
                </CardHeader>
                <CardBody className="p-6 space-y-4">
                  {result.research.product_catalog.map((product, i) => (
                    <div
                      key={i}
                      className="bg-default-100/50 rounded-xl p-4 border border-default-200/50"
                    >
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="font-semibold">{product.product_name}</h4>
                        <div className="flex gap-2">
                          <Chip size="sm" variant="flat" className="bg-primary/10 text-primary">
                            {product.category}
                          </Chip>
                          <Chip size="sm" variant="flat">
                            {product.primary_billing_model}
                          </Chip>
                        </div>
                      </div>
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 text-sm">
                        <div>
                          <p className="text-xs text-default-500">Price</p>
                          <p>{product.list_price_example || "-"}</p>
                        </div>
                        <div>
                          <p className="text-xs text-default-500">Billing Period</p>
                          <p>{product.typical_billing_period}</p>
                        </div>
                        <div>
                          <p className="text-xs text-default-500">Term</p>
                          <p>{product.typical_term}</p>
                        </div>
                        <div>
                          <p className="text-xs text-default-500">Subscription</p>
                          <p>{product.is_subscription ? "Yes" : "No"}</p>
                        </div>
                      </div>
                      {product.pricing_notes && (
                        <p className="text-xs text-default-500 mt-2">
                          {product.pricing_notes}
                        </p>
                      )}
                    </div>
                  ))}
                </CardBody>
              </Card>
            )}

            {/* Research Meta */}
            {result.research?.research_meta && (
              <Card className="glass-card">
                <CardHeader className="px-6 pt-5 pb-0">
                  <h3 className="text-lg font-semibold flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-warning rounded-full" />
                    Research Quality
                  </h3>
                </CardHeader>
                <CardBody className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <Chip
                      size="sm"
                      variant="flat"
                      className={
                        result.research.research_meta.data_completeness === "high"
                          ? "bg-success/20 text-success"
                          : result.research.research_meta.data_completeness === "medium"
                          ? "bg-warning/20 text-warning"
                          : "bg-danger/20 text-danger"
                      }
                    >
                      {result.research.research_meta.data_completeness} completeness
                    </Chip>
                  </div>
                  {result.research.research_meta.known_gaps?.length > 0 && (
                    <div>
                      <p className="text-xs text-default-500 mb-2">Known Gaps</p>
                      <ul className="space-y-1 text-sm text-default-600">
                        {result.research.research_meta.known_gaps.map((gap, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <span className="text-warning mt-0.5">!</span>
                            <span>{gap}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </CardBody>
              </Card>
            )}
          </div>
        </Tab>

        {/* Raw JSON Tab */}
        <Tab
          key="raw"
          title={
            <div className="flex items-center gap-2">
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                />
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

      {/* Session Info */}
      <div className="divider-glow" />
      <Card className="glass-card">
        <CardHeader className="px-6 pt-5 pb-0">
          <h3 className="text-lg font-semibold flex items-center gap-2">
            <svg
              className="w-5 h-5 text-primary"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            Session Info
          </h3>
        </CardHeader>
        <CardBody className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="space-y-1">
              <p className="text-xs font-medium text-default-500 uppercase tracking-wide">
                Customer
              </p>
              <p className="font-medium text-foreground">{customerName}</p>
            </div>
            <div className="space-y-1">
              <p className="text-xs font-medium text-default-500 uppercase tracking-wide">
                Session Type
              </p>
              <Chip size="sm" variant="flat" className="bg-secondary/20 text-secondary">
                UC Generate
              </Chip>
            </div>
            <div className="space-y-1">
              <p className="text-xs font-medium text-default-500 uppercase tracking-wide">
                Model
              </p>
              <p className="font-medium text-foreground">{model || "-"}</p>
            </div>
            <div className="space-y-1">
              <p className="text-xs font-medium text-default-500 uppercase tracking-wide">
                Session ID
              </p>
              <p className="font-mono text-xs text-default-400">{sessionId}</p>
            </div>
          </div>
          {/* Feedback */}
          <div className="mt-6 pt-4 border-t border-default-200/30">
            <FeedbackButtons
              sessionId={sessionId}
              targetType="session"
              label="Was this generation helpful?"
            />
          </div>
        </CardBody>
      </Card>
    </div>
  );
}
