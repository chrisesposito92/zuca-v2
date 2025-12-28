"use client";

import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Select,
  SelectItem,
  Textarea,
  Tabs,
  Tab,
  Progress,
  Chip,
  addToast,
} from "@heroui/react";
import { useState, useMemo } from "react";
import { useHTMLBuilder, useGroupedTemplates, type HTMLTemplateMode } from "@/hooks/useHTMLBuilder";
import { useFunFacts } from "@/hooks/useFunFacts";
import { HTMLTemplateResultView } from "@/components/html-template-view";

const DEFAULT_MODEL = process.env.NEXT_PUBLIC_DEFAULT_MODEL || "gpt-5.2";

const modelOptions = [
  { key: "gpt-5.2", label: "GPT-5.2", time: "~15s", description: "Best accuracy for complex templates" },
  { key: "gemini-3-pro-preview", label: "Gemini 3 Pro", time: "~10s", description: "Balanced quality and speed" },
  { key: "gemini-3-flash-preview", label: "Gemini 3 Flash", time: "~5s", description: "Fastest, good for simple templates" },
];

const documentTypeOptions = [
  { key: "invoice", label: "Invoice" },
  { key: "credit_memo", label: "Credit Memo" },
  { key: "debit_memo", label: "Debit Memo" },
];

// Category display names
const categoryLabels: Record<string, string> = {
  tables: "Tables & Lists",
  addresses: "Address Blocks",
  payments: "Payments",
  taxes: "Tax Information",
  subscriptions: "Subscriptions",
  conditionals: "Conditional Sections",
  calculations: "Calculations",
  formatting: "Formatting",
};

export default function HTMLBuilderPage() {
  const [activeTab, setActiveTab] = useState<HTMLTemplateMode>("code");
  const [description, setDescription] = useState("");
  const [documentType, setDocumentType] = useState("invoice");
  const [existingCode, setExistingCode] = useState("");
  const [selectedModel, setSelectedModel] = useState(DEFAULT_MODEL);
  const [selectedTemplateId, setSelectedTemplateId] = useState<string>("");

  const builderMutation = useHTMLBuilder();
  const { data: codeTemplates } = useGroupedTemplates("code");
  const { data: expressionTemplates } = useGroupedTemplates("expression");
  const { currentFact } = useFunFacts({ interval: 8000 });

  const isGenerating = builderMutation.isPending;

  // Get templates for current mode
  const currentTemplates = useMemo(() => {
    return activeTab === "code" ? codeTemplates?.templates : expressionTemplates?.templates;
  }, [activeTab, codeTemplates, expressionTemplates]);

  // Flatten templates for quick lookup
  const allTemplates = useMemo(() => {
    if (!currentTemplates) return [];
    return Object.values(currentTemplates).flat();
  }, [currentTemplates]);

  const handleTemplateSelect = (templateId: string) => {
    setSelectedTemplateId(templateId);
    const template = allTemplates.find((t) => t.id === templateId);
    if (template) {
      setDescription(template.prompt);
    }
  };

  const handleClear = () => {
    setDescription("");
    setExistingCode("");
    setSelectedTemplateId("");
  };

  const handleGenerate = async () => {
    if (!description.trim()) {
      addToast({
        title: "Description Required",
        description: "Please describe what you want to generate",
        color: "warning",
      });
      return;
    }

    try {
      await builderMutation.mutateAsync({
        mode: activeTab,
        description: description.trim(),
        context: activeTab === "code" ? {
          documentType: documentType as "invoice" | "credit_memo" | "debit_memo",
          existingCode: existingCode.trim() || undefined,
        } : undefined,
        templateId: selectedTemplateId || undefined,
        model: selectedModel,
      });
      addToast({
        title: "Generated Successfully",
        description: `Your ${activeTab === "code" ? "template code" : "expression"} has been generated`,
        color: "success",
      });
    } catch (error) {
      const err = error as { error?: string; details?: string };
      addToast({
        title: "Generation Failed",
        description: err.details || err.error || "An error occurred",
        color: "danger",
      });
    }
  };

  const handleTabChange = (key: React.Key) => {
    setActiveTab(key as HTMLTemplateMode);
    setSelectedTemplateId("");
    // Keep description if user typed something custom
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold tracking-tight">
          <span className="gradient-text">HTML Template Builder</span>
        </h1>
        <p className="text-default-500 text-lg mt-1">
          Generate Zuora merge field code and expressions from natural language descriptions.
        </p>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
        {/* Left panel: Input */}
        <Card className="glass-card">
          <CardHeader className="px-6 pt-5 pb-0">
            <Tabs
              aria-label="Template mode"
              selectedKey={activeTab}
              onSelectionChange={handleTabChange}
              color="primary"
              classNames={{
                tabList: "bg-default-100/50",
                cursor: "bg-primary",
                tab: "data-[selected=true]:text-black font-medium",
                tabContent: "group-data-[selected=true]:text-black",
              }}
              isDisabled={isGenerating}
            >
              <Tab
                key="code"
                title={
                  <div className="flex items-center gap-2">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                    </svg>
                    <span>Code Generator</span>
                  </div>
                }
              />
              <Tab
                key="expression"
                title={
                  <div className="flex items-center gap-2">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                    </svg>
                    <span>Expression Builder</span>
                  </div>
                }
              />
            </Tabs>
          </CardHeader>

          <CardBody className="p-6 space-y-5">
            {/* Quick templates dropdown */}
            {currentTemplates && Object.keys(currentTemplates).length > 0 && (
              <Select
                label="Quick Templates"
                placeholder="Start from a template or describe from scratch"
                selectedKeys={selectedTemplateId ? [selectedTemplateId] : []}
                onSelectionChange={(keys) => {
                  const id = Array.from(keys)[0] as string;
                  handleTemplateSelect(id);
                }}
                isDisabled={isGenerating}
                classNames={{
                  trigger: "min-h-unit-12",
                }}
              >
                {Object.entries(currentTemplates).flatMap(([category, templates]) => [
                  // Category header
                  <SelectItem key={`category-${category}`} textValue={categoryLabels[category] || category} isReadOnly>
                    <div className="text-xs font-semibold text-primary uppercase tracking-wider py-1">
                      {categoryLabels[category] || category}
                    </div>
                  </SelectItem>,
                  // Items in this category
                  ...templates.map((template) => (
                    <SelectItem key={template.id} textValue={template.name}>
                      <div className="flex flex-col gap-0.5">
                        <span className="font-medium">{template.name}</span>
                        <span className="text-xs text-default-400">{template.description}</span>
                      </div>
                    </SelectItem>
                  ))
                ])}
              </Select>
            )}

            {/* Description */}
            <Textarea
              label={activeTab === "code" ? "Describe what you want to display" : "Describe the calculation or logic"}
              placeholder={
                activeTab === "code"
                  ? "e.g., Show a table of invoice items with charge name, quantity, unit price, and subtotal"
                  : "e.g., Calculate the unit price by dividing charge amount by quantity, rounded to 2 decimal places"
              }
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              minRows={4}
              maxRows={8}
              isDisabled={isGenerating}
              classNames={{
                input: "resize-y",
              }}
            />

            {/* Code mode specific options */}
            {activeTab === "code" && (
              <>
                <Select
                  label="Document Type"
                  selectedKeys={[documentType]}
                  onSelectionChange={(keys) => setDocumentType(Array.from(keys)[0] as string)}
                  isDisabled={isGenerating}
                >
                  {documentTypeOptions.map((opt) => (
                    <SelectItem key={opt.key}>{opt.label}</SelectItem>
                  ))}
                </Select>

                <Textarea
                  label="Existing Code (Optional)"
                  placeholder="Paste existing template code for context..."
                  value={existingCode}
                  onChange={(e) => setExistingCode(e.target.value)}
                  minRows={2}
                  maxRows={6}
                  isDisabled={isGenerating}
                  classNames={{
                    input: "font-mono text-sm resize-y",
                  }}
                />
              </>
            )}

            {/* Model selector */}
            <Select
              label="Model"
              selectedKeys={[selectedModel]}
              onSelectionChange={(keys) => setSelectedModel(Array.from(keys)[0] as string)}
              isDisabled={isGenerating}
            >
              {modelOptions.map((model) => (
                <SelectItem key={model.key} textValue={model.label}>
                  <div className="flex flex-col">
                    <div className="flex items-center gap-2">
                      <span>{model.label}</span>
                      <span className="text-xs text-default-400">({model.time})</span>
                    </div>
                    <span className="text-xs text-default-400">{model.description}</span>
                  </div>
                </SelectItem>
              ))}
            </Select>

            {/* Actions */}
            <div className="flex items-center justify-between pt-2">
              <Button
                variant="flat"
                onClick={handleClear}
                isDisabled={isGenerating || (!description && !existingCode && !selectedTemplateId)}
              >
                Clear
              </Button>
              <Button
                color="primary"
                className="font-semibold teal-glow-subtle"
                onClick={handleGenerate}
                isLoading={isGenerating}
                isDisabled={isGenerating || !description.trim()}
              >
                {isGenerating ? "Generating..." : "Generate"}
              </Button>
            </div>
          </CardBody>
        </Card>

        {/* Right panel: Results */}
        <Card className="glass-card">
          <CardHeader className="px-6 pt-5 pb-0 flex items-center justify-between">
            <div>
              <h3 className="text-lg font-semibold">Generated Output</h3>
              <p className="text-xs text-default-500">
                {activeTab === "code" ? "HTML merge field code" : "Wp_Eval expression"}
              </p>
            </div>
            {builderMutation.data && (
              <Chip size="sm" variant="flat" className="bg-success/20 text-success">
                Ready
              </Chip>
            )}
          </CardHeader>

          <CardBody className="p-6">
            {isGenerating ? (
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="animate-spin h-5 w-5 border-2 border-primary border-t-transparent rounded-full" />
                  <div>
                    <p className="font-medium">Generating {activeTab === "code" ? "template code" : "expression"}...</p>
                    <p className="text-xs text-default-500">This usually takes a few seconds</p>
                  </div>
                </div>
                <Progress
                  isIndeterminate
                  color="primary"
                  size="sm"
                  aria-label="Generating"
                  classNames={{
                    indicator: "bg-gradient-to-r from-primary to-secondary",
                  }}
                />
                <div className="p-4 rounded-xl bg-default-100/50 border border-default-200/60">
                  <div className="flex items-center gap-2 mb-2 text-default-500">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-xs font-medium uppercase tracking-wider">Did you know?</span>
                  </div>
                  <p className="text-sm text-default-600 leading-relaxed min-h-[2.5rem] transition-opacity duration-300">
                    {currentFact}
                  </p>
                </div>
              </div>
            ) : builderMutation.data ? (
              <HTMLTemplateResultView
                mode={builderMutation.data.mode}
                result={builderMutation.data.result}
                sessionId={builderMutation.data.session_id}
              />
            ) : (
              <div className="flex flex-col items-center justify-center py-16 text-center">
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-4">
                  <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                  </svg>
                </div>
                <h4 className="text-lg font-medium text-foreground mb-1">No output yet</h4>
                <p className="text-sm text-default-500 max-w-xs">
                  {activeTab === "code"
                    ? "Describe what you want to display and click Generate to create template code."
                    : "Describe your calculation or logic and click Generate to create an expression."}
                </p>
              </div>
            )}
          </CardBody>
        </Card>
      </div>

      {/* Tips section */}
      <Card className="glass-card">
        <CardBody className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-primary">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                <span className="font-semibold">Quick Start</span>
              </div>
              <p className="text-sm text-default-500">
                Use the Quick Templates dropdown to start with common patterns, then customize the description to fit your needs.
              </p>
            </div>
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-primary">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
                <span className="font-semibold">Be Specific</span>
              </div>
              <p className="text-sm text-default-500">
                Include details like field names, formatting requirements, and conditions. The more specific your description, the better the output.
              </p>
            </div>
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-primary">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                </svg>
                <span className="font-semibold">Iterate</span>
              </div>
              <p className="text-sm text-default-500">
                Generate once, then refine your description based on the output. You can paste existing code for context when making improvements.
              </p>
            </div>
          </div>
        </CardBody>
      </Card>
    </div>
  );
}
