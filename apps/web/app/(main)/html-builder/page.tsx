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
import {
  useHTMLBuilder,
  useGroupedTemplates,
  useTemplateValidator,
  useGroupByWizard,
  useSampleDataGenerator,
  type HTMLTemplateMode,
  type GroupByWizardRequest,
  type SampleDataRequest,
} from "@/hooks/useHTMLBuilder";
import { useFunFacts } from "@/hooks/useFunFacts";
import { HTMLTemplateResultView, TemplateValidationResultView, SampleDataResultView } from "@/components/html-template-view";

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

const groupBySourceOptions = [
  { key: "InvoiceItems", label: "Invoice Items" },
  { key: "TaxationItems", label: "Taxation Items" },
  { key: "InvoicePayments", label: "Invoice Payments" },
  { key: "PaymentParts", label: "Payment Parts" },
];

const industryOptions = [
  { key: "saas", label: "SaaS / Software" },
  { key: "telecom", label: "Telecommunications" },
  { key: "utilities", label: "Utilities" },
  { key: "professional_services", label: "Professional Services" },
  { key: "media", label: "Media / Streaming" },
  { key: "healthcare", label: "Healthcare" },
  { key: "general", label: "General / Other" },
];

const aggregationTypeOptions = [
  { key: "Sum", label: "Sum" },
  { key: "Count", label: "Count" },
  { key: "Average", label: "Average" },
  { key: "Min", label: "Min" },
  { key: "Max", label: "Max" },
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

type BuilderMode = HTMLTemplateMode | "validate" | "groupby" | "sample-data";

// Types for GroupBy wizard state
interface GroupByField {
  field: string;
  label?: string;
}

interface GroupByColumn {
  field: string;
  label: string;
  localise?: boolean;
  decimals?: number;
  align?: "left" | "center" | "right";
}

interface GroupByAggregation {
  field: string;
  type: "Sum" | "Count" | "Average" | "Min" | "Max";
  label?: string;
  decimals?: number;
  localise?: boolean;
}

const defaultGroupByField: GroupByField = { field: "", label: "" };
const defaultGroupByColumn: GroupByColumn = { field: "", label: "", localise: false, align: "left" };
const defaultGroupByAggregation: GroupByAggregation = { field: "", type: "Sum", label: "", decimals: 2, localise: true };

export default function HTMLBuilderPage() {
  const [activeTab, setActiveTab] = useState<BuilderMode>("code");
  const [description, setDescription] = useState("");
  const [documentType, setDocumentType] = useState("invoice");
  const [existingCode, setExistingCode] = useState("");
  const [selectedModel, setSelectedModel] = useState(DEFAULT_MODEL);
  const [selectedTemplateId, setSelectedTemplateId] = useState<string>("");
  const [templateToValidate, setTemplateToValidate] = useState("");

  // GroupBy wizard state
  const [groupBySource, setGroupBySource] = useState("InvoiceItems");
  const [groupByFields, setGroupByFields] = useState<GroupByField[]>([{ ...defaultGroupByField }]);
  const [groupByColumns, setGroupByColumns] = useState<GroupByColumn[]>([{ ...defaultGroupByColumn }]);
  const [groupByAggregations, setGroupByAggregations] = useState<GroupByAggregation[]>([]);
  const [includeSubtotals, setIncludeSubtotals] = useState(true);
  const [includeGrandTotal, setIncludeGrandTotal] = useState(false);
  const [groupByDescription, setGroupByDescription] = useState("");

  // Sample Data wizard state
  const [sampleDataTemplate, setSampleDataTemplate] = useState("");
  const [sampleDataIndustry, setSampleDataIndustry] = useState("general");
  const [sampleDataItemCount, setSampleDataItemCount] = useState(3);
  const [sampleDataCurrency, setSampleDataCurrency] = useState("USD");
  const [sampleDataCompanyName, setSampleDataCompanyName] = useState("");

  const builderMutation = useHTMLBuilder();
  const validatorMutation = useTemplateValidator();
  const groupByMutation = useGroupByWizard();
  const sampleDataMutation = useSampleDataGenerator();
  const { data: codeTemplates } = useGroupedTemplates("code");
  const { data: expressionTemplates } = useGroupedTemplates("expression");
  const { currentFact } = useFunFacts({ interval: 8000 });

  const isGenerating = builderMutation.isPending;
  const isValidating = validatorMutation.isPending;
  const isGroupByGenerating = groupByMutation.isPending;
  const isSampleDataGenerating = sampleDataMutation.isPending;

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
    setActiveTab(key as BuilderMode);
    setSelectedTemplateId("");
    // Keep description if user typed something custom
  };

  // GroupBy wizard handlers
  const handleAddGroupByField = () => {
    if (groupByFields.length < 6) {
      setGroupByFields([...groupByFields, { ...defaultGroupByField }]);
    }
  };

  const handleRemoveGroupByField = (index: number) => {
    if (groupByFields.length > 1) {
      setGroupByFields(groupByFields.filter((_, i) => i !== index));
    }
  };

  const handleUpdateGroupByField = (index: number, updates: Partial<GroupByField>) => {
    setGroupByFields(groupByFields.map((f, i) => i === index ? { ...f, ...updates } : f));
  };

  const handleAddColumn = () => {
    setGroupByColumns([...groupByColumns, { ...defaultGroupByColumn }]);
  };

  const handleRemoveColumn = (index: number) => {
    if (groupByColumns.length > 1) {
      setGroupByColumns(groupByColumns.filter((_, i) => i !== index));
    }
  };

  const handleUpdateColumn = (index: number, updates: Partial<GroupByColumn>) => {
    setGroupByColumns(groupByColumns.map((c, i) => i === index ? { ...c, ...updates } : c));
  };

  const handleAddAggregation = () => {
    setGroupByAggregations([...groupByAggregations, { ...defaultGroupByAggregation }]);
  };

  const handleRemoveAggregation = (index: number) => {
    setGroupByAggregations(groupByAggregations.filter((_, i) => i !== index));
  };

  const handleUpdateAggregation = (index: number, updates: Partial<GroupByAggregation>) => {
    setGroupByAggregations(groupByAggregations.map((a, i) => i === index ? { ...a, ...updates } : a));
  };

  const handleGroupByGenerate = async () => {
    // Validate required fields
    const validFields = groupByFields.filter((f) => f.field.trim());
    const validColumns = groupByColumns.filter((c) => c.field.trim() && c.label.trim());

    if (validFields.length === 0) {
      addToast({
        title: "Group By Field Required",
        description: "Please add at least one field to group by",
        color: "warning",
      });
      return;
    }

    if (validColumns.length === 0) {
      addToast({
        title: "Column Required",
        description: "Please add at least one column to display",
        color: "warning",
      });
      return;
    }

    const validAggregations = groupByAggregations.filter((a) => a.field.trim());

    const request: GroupByWizardRequest = {
      source: groupBySource as GroupByWizardRequest["source"],
      documentType: documentType as GroupByWizardRequest["documentType"],
      groupByFields: validFields,
      columns: validColumns,
      aggregations: validAggregations.length > 0 ? validAggregations : undefined,
      includeSubtotals,
      includeGrandTotal,
      description: groupByDescription.trim() || undefined,
    };

    try {
      await groupByMutation.mutateAsync({ ...request, model: selectedModel });
      addToast({
        title: "Generated Successfully",
        description: "Your GroupBy template code has been generated",
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

  const handleGroupByClear = () => {
    setGroupBySource("InvoiceItems");
    setGroupByFields([{ ...defaultGroupByField }]);
    setGroupByColumns([{ ...defaultGroupByColumn }]);
    setGroupByAggregations([]);
    setIncludeSubtotals(true);
    setIncludeGrandTotal(false);
    setGroupByDescription("");
  };

  // Sample Data handlers
  const handleSampleDataGenerate = async () => {
    if (!sampleDataTemplate.trim()) {
      addToast({
        title: "Template Required",
        description: "Please paste template code to generate sample data",
        color: "warning",
      });
      return;
    }

    const request: SampleDataRequest = {
      template: sampleDataTemplate.trim(),
      documentType: documentType as SampleDataRequest["documentType"],
      industry: sampleDataIndustry as SampleDataRequest["industry"],
      itemCount: sampleDataItemCount,
      currency: sampleDataCurrency,
      companyName: sampleDataCompanyName.trim() || undefined,
    };

    try {
      await sampleDataMutation.mutateAsync({ ...request, model: selectedModel });
      addToast({
        title: "Generated Successfully",
        description: "Sample data has been generated for your template",
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

  const handleSampleDataClear = () => {
    setSampleDataTemplate("");
    setSampleDataIndustry("general");
    setSampleDataItemCount(3);
    setSampleDataCurrency("USD");
    setSampleDataCompanyName("");
  };

  const handleValidate = async () => {
    if (!templateToValidate.trim()) {
      addToast({
        title: "Template Required",
        description: "Please paste template code to validate",
        color: "warning",
      });
      return;
    }

    try {
      await validatorMutation.mutateAsync({
        template: templateToValidate.trim(),
        documentType: documentType as "invoice" | "credit_memo" | "debit_memo",
        model: selectedModel,
      });
      addToast({
        title: "Validation Complete",
        description: "Template has been analyzed for errors and suggestions",
        color: "success",
      });
    } catch (error) {
      const err = error as { error?: string; details?: string };
      addToast({
        title: "Validation Failed",
        description: err.details || err.error || "An error occurred",
        color: "danger",
      });
    }
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
                tabList: "bg-default-100/50 gap-0 overflow-x-auto",
                cursor: "bg-primary",
                tab: "data-[selected=true]:text-black font-medium text-sm px-2.5",
                tabContent: "group-data-[selected=true]:text-black whitespace-nowrap",
              }}
              isDisabled={isGenerating || isValidating || isGroupByGenerating || isSampleDataGenerating}
            >
              <Tab
                key="code"
                title={
                  <div className="flex items-center gap-1.5">
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                    </svg>
                    <span>Code</span>
                  </div>
                }
              />
              <Tab
                key="expression"
                title={
                  <div className="flex items-center gap-1.5">
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                    </svg>
                    <span>Expression</span>
                  </div>
                }
              />
              <Tab
                key="validate"
                title={
                  <div className="flex items-center gap-1.5">
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>Validate</span>
                  </div>
                }
              />
              <Tab
                key="groupby"
                title={
                  <div className="flex items-center gap-1.5">
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                    </svg>
                    <span>GroupBy</span>
                  </div>
                }
              />
              <Tab
                key="sample-data"
                title={
                  <div className="flex items-center gap-1.5">
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
                    </svg>
                    <span>Sample Data</span>
                  </div>
                }
              />
            </Tabs>
          </CardHeader>

          <CardBody className="p-6 space-y-5">
            {/* Validator mode UI */}
            {activeTab === "validate" ? (
              <>
                <Textarea
                  label="Template Code to Validate"
                  placeholder="Paste your HTML template code with merge fields here..."
                  value={templateToValidate}
                  onChange={(e) => setTemplateToValidate(e.target.value)}
                  minRows={10}
                  maxRows={20}
                  isDisabled={isValidating}
                  classNames={{
                    input: "font-mono text-sm resize-y",
                  }}
                />

                <Select
                  label="Document Type"
                  selectedKeys={[documentType]}
                  onSelectionChange={(keys) => setDocumentType(Array.from(keys)[0] as string)}
                  isDisabled={isValidating}
                >
                  {documentTypeOptions.map((opt) => (
                    <SelectItem key={opt.key}>{opt.label}</SelectItem>
                  ))}
                </Select>

                <Select
                  label="Model"
                  selectedKeys={[selectedModel]}
                  onSelectionChange={(keys) => setSelectedModel(Array.from(keys)[0] as string)}
                  isDisabled={isValidating}
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

                <div className="flex items-center justify-between pt-2">
                  <Button
                    variant="flat"
                    onClick={() => setTemplateToValidate("")}
                    isDisabled={isValidating || !templateToValidate}
                  >
                    Clear
                  </Button>
                  <Button
                    color="primary"
                    className="font-semibold teal-glow-subtle"
                    onClick={handleValidate}
                    isLoading={isValidating}
                    isDisabled={isValidating || !templateToValidate.trim()}
                  >
                    {isValidating ? "Validating..." : "Validate Template"}
                  </Button>
                </div>
              </>
            ) : activeTab === "groupby" ? (
              /* GroupBy Wizard mode UI */
              <div className="space-y-5 max-h-[600px] overflow-y-auto pr-2">
                {/* Source and Document Type */}
                <div className="grid grid-cols-2 gap-4">
                  <Select
                    label="Source List"
                    selectedKeys={[groupBySource]}
                    onSelectionChange={(keys) => setGroupBySource(Array.from(keys)[0] as string)}
                    isDisabled={isGroupByGenerating}
                  >
                    {groupBySourceOptions.map((opt) => (
                      <SelectItem key={opt.key}>{opt.label}</SelectItem>
                    ))}
                  </Select>
                  <Select
                    label="Document Type"
                    selectedKeys={[documentType]}
                    onSelectionChange={(keys) => setDocumentType(Array.from(keys)[0] as string)}
                    isDisabled={isGroupByGenerating}
                  >
                    {documentTypeOptions.map((opt) => (
                      <SelectItem key={opt.key}>{opt.label}</SelectItem>
                    ))}
                  </Select>
                </div>

                {/* Group By Fields */}
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <label className="text-sm font-medium text-foreground">Group By Fields (order matters)</label>
                    <Button
                      size="sm"
                      variant="flat"
                      onClick={handleAddGroupByField}
                      isDisabled={isGroupByGenerating || groupByFields.length >= 6}
                    >
                      + Add Level
                    </Button>
                  </div>
                  {groupByFields.map((field, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <Chip size="sm" variant="flat" className="bg-primary/20 text-primary min-w-[28px]">
                        {idx + 1}
                      </Chip>
                      <input
                        type="text"
                        placeholder="Field path (e.g., ServiceStartDate)"
                        value={field.field}
                        onChange={(e) => handleUpdateGroupByField(idx, { field: e.target.value })}
                        disabled={isGroupByGenerating}
                        className="flex-1 px-3 py-2 rounded-lg bg-default-100 border border-default-200 text-sm focus:outline-none focus:border-primary"
                      />
                      <input
                        type="text"
                        placeholder="Label (optional)"
                        value={field.label || ""}
                        onChange={(e) => handleUpdateGroupByField(idx, { label: e.target.value })}
                        disabled={isGroupByGenerating}
                        className="w-32 px-3 py-2 rounded-lg bg-default-100 border border-default-200 text-sm focus:outline-none focus:border-primary"
                      />
                      <Button
                        size="sm"
                        variant="light"
                        isIconOnly
                        onClick={() => handleRemoveGroupByField(idx)}
                        isDisabled={isGroupByGenerating || groupByFields.length <= 1}
                        className="text-danger"
                      >
                        ×
                      </Button>
                    </div>
                  ))}
                </div>

                {/* Columns to Display */}
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <label className="text-sm font-medium text-foreground">Columns to Display</label>
                    <Button
                      size="sm"
                      variant="flat"
                      onClick={handleAddColumn}
                      isDisabled={isGroupByGenerating}
                    >
                      + Add Column
                    </Button>
                  </div>
                  {groupByColumns.map((col, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <input
                        type="text"
                        placeholder="Field path"
                        value={col.field}
                        onChange={(e) => handleUpdateColumn(idx, { field: e.target.value })}
                        disabled={isGroupByGenerating}
                        className="flex-1 px-3 py-2 rounded-lg bg-default-100 border border-default-200 text-sm focus:outline-none focus:border-primary"
                      />
                      <input
                        type="text"
                        placeholder="Header label"
                        value={col.label}
                        onChange={(e) => handleUpdateColumn(idx, { label: e.target.value })}
                        disabled={isGroupByGenerating}
                        className="w-32 px-3 py-2 rounded-lg bg-default-100 border border-default-200 text-sm focus:outline-none focus:border-primary"
                      />
                      <Button
                        size="sm"
                        variant="light"
                        isIconOnly
                        onClick={() => handleRemoveColumn(idx)}
                        isDisabled={isGroupByGenerating || groupByColumns.length <= 1}
                        className="text-danger"
                      >
                        ×
                      </Button>
                    </div>
                  ))}
                </div>

                {/* Aggregations */}
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <label className="text-sm font-medium text-foreground">Aggregations (Subtotals)</label>
                    <Button
                      size="sm"
                      variant="flat"
                      onClick={handleAddAggregation}
                      isDisabled={isGroupByGenerating}
                    >
                      + Add Aggregation
                    </Button>
                  </div>
                  {groupByAggregations.length === 0 ? (
                    <p className="text-xs text-default-400 italic">No aggregations added. Click &quot;+ Add Aggregation&quot; to add subtotals.</p>
                  ) : (
                    groupByAggregations.map((agg, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <Select
                          size="sm"
                          selectedKeys={[agg.type]}
                          onSelectionChange={(keys) => handleUpdateAggregation(idx, { type: Array.from(keys)[0] as GroupByAggregation["type"] })}
                          isDisabled={isGroupByGenerating}
                          className="w-24"
                        >
                          {aggregationTypeOptions.map((opt) => (
                            <SelectItem key={opt.key}>{opt.label}</SelectItem>
                          ))}
                        </Select>
                        <input
                          type="text"
                          placeholder="Field path"
                          value={agg.field}
                          onChange={(e) => handleUpdateAggregation(idx, { field: e.target.value })}
                          disabled={isGroupByGenerating}
                          className="flex-1 px-3 py-2 rounded-lg bg-default-100 border border-default-200 text-sm focus:outline-none focus:border-primary"
                        />
                        <input
                          type="text"
                          placeholder="Label"
                          value={agg.label || ""}
                          onChange={(e) => handleUpdateAggregation(idx, { label: e.target.value })}
                          disabled={isGroupByGenerating}
                          className="w-28 px-3 py-2 rounded-lg bg-default-100 border border-default-200 text-sm focus:outline-none focus:border-primary"
                        />
                        <Button
                          size="sm"
                          variant="light"
                          isIconOnly
                          onClick={() => handleRemoveAggregation(idx)}
                          isDisabled={isGroupByGenerating}
                          className="text-danger"
                        >
                          ×
                        </Button>
                      </div>
                    ))
                  )}
                </div>

                {/* Options */}
                <div className="flex flex-wrap gap-4">
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={includeSubtotals}
                      onChange={(e) => setIncludeSubtotals(e.target.checked)}
                      disabled={isGroupByGenerating}
                      className="w-4 h-4 rounded border-default-300 text-primary focus:ring-primary"
                    />
                    <span className="text-sm">Include subtotals per group</span>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={includeGrandTotal}
                      onChange={(e) => setIncludeGrandTotal(e.target.checked)}
                      disabled={isGroupByGenerating}
                      className="w-4 h-4 rounded border-default-300 text-primary focus:ring-primary"
                    />
                    <span className="text-sm">Include grand total</span>
                  </label>
                </div>

                {/* Additional description */}
                <Textarea
                  label="Additional Requirements (Optional)"
                  placeholder="Any special formatting, sorting, or display requirements..."
                  value={groupByDescription}
                  onChange={(e) => setGroupByDescription(e.target.value)}
                  minRows={2}
                  maxRows={4}
                  isDisabled={isGroupByGenerating}
                />

                {/* Model selector */}
                <Select
                  label="Model"
                  selectedKeys={[selectedModel]}
                  onSelectionChange={(keys) => setSelectedModel(Array.from(keys)[0] as string)}
                  isDisabled={isGroupByGenerating}
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
                    onClick={handleGroupByClear}
                    isDisabled={isGroupByGenerating}
                  >
                    Clear
                  </Button>
                  <Button
                    color="primary"
                    className="font-semibold teal-glow-subtle"
                    onClick={handleGroupByGenerate}
                    isLoading={isGroupByGenerating}
                    isDisabled={isGroupByGenerating}
                  >
                    {isGroupByGenerating ? "Generating..." : "Generate GroupBy Code"}
                  </Button>
                </div>
              </div>
            ) : activeTab === "sample-data" ? (
              /* Sample Data mode UI */
              <div className="space-y-5">
                <Textarea
                  label="Template Code"
                  placeholder="Paste your HTML template code with merge fields here..."
                  value={sampleDataTemplate}
                  onChange={(e) => setSampleDataTemplate(e.target.value)}
                  minRows={8}
                  maxRows={14}
                  isDisabled={isSampleDataGenerating}
                  classNames={{
                    input: "font-mono text-sm resize-y",
                  }}
                />

                <div className="grid grid-cols-2 gap-4">
                  <Select
                    label="Industry"
                    selectedKeys={[sampleDataIndustry]}
                    onSelectionChange={(keys) => setSampleDataIndustry(Array.from(keys)[0] as string)}
                    isDisabled={isSampleDataGenerating}
                  >
                    {industryOptions.map((opt) => (
                      <SelectItem key={opt.key}>{opt.label}</SelectItem>
                    ))}
                  </Select>
                  <Select
                    label="Document Type"
                    selectedKeys={[documentType]}
                    onSelectionChange={(keys) => setDocumentType(Array.from(keys)[0] as string)}
                    isDisabled={isSampleDataGenerating}
                  >
                    {documentTypeOptions.map((opt) => (
                      <SelectItem key={opt.key}>{opt.label}</SelectItem>
                    ))}
                  </Select>
                </div>

                <div className="grid grid-cols-3 gap-4">
                  <div className="space-y-1">
                    <label className="text-sm font-medium text-foreground">Number of Items</label>
                    <input
                      type="number"
                      min={1}
                      max={20}
                      value={sampleDataItemCount}
                      onChange={(e) => setSampleDataItemCount(Math.min(20, Math.max(1, parseInt(e.target.value) || 1)))}
                      disabled={isSampleDataGenerating}
                      className="w-full px-3 py-2 rounded-lg bg-default-100 border border-default-200 text-sm focus:outline-none focus:border-primary"
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="text-sm font-medium text-foreground">Currency</label>
                    <input
                      type="text"
                      placeholder="USD"
                      value={sampleDataCurrency}
                      onChange={(e) => setSampleDataCurrency(e.target.value.toUpperCase().slice(0, 3))}
                      disabled={isSampleDataGenerating}
                      className="w-full px-3 py-2 rounded-lg bg-default-100 border border-default-200 text-sm focus:outline-none focus:border-primary"
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="text-sm font-medium text-foreground">Company Name (Optional)</label>
                    <input
                      type="text"
                      placeholder="Acme Corp"
                      value={sampleDataCompanyName}
                      onChange={(e) => setSampleDataCompanyName(e.target.value)}
                      disabled={isSampleDataGenerating}
                      className="w-full px-3 py-2 rounded-lg bg-default-100 border border-default-200 text-sm focus:outline-none focus:border-primary"
                    />
                  </div>
                </div>

                <Select
                  label="Model"
                  selectedKeys={[selectedModel]}
                  onSelectionChange={(keys) => setSelectedModel(Array.from(keys)[0] as string)}
                  isDisabled={isSampleDataGenerating}
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

                <div className="flex items-center justify-between pt-2">
                  <Button
                    variant="flat"
                    onClick={handleSampleDataClear}
                    isDisabled={isSampleDataGenerating}
                  >
                    Clear
                  </Button>
                  <Button
                    color="primary"
                    className="font-semibold teal-glow-subtle"
                    onClick={handleSampleDataGenerate}
                    isLoading={isSampleDataGenerating}
                    isDisabled={isSampleDataGenerating || !sampleDataTemplate.trim()}
                  >
                    {isSampleDataGenerating ? "Generating..." : "Generate Sample Data"}
                  </Button>
                </div>
              </div>
            ) : (
            <>
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
            </>
            )}
          </CardBody>
        </Card>

        {/* Right panel: Results */}
        <Card className="glass-card">
          <CardHeader className="px-6 pt-5 pb-0 flex items-center justify-between">
            <div>
              <h3 className="text-lg font-semibold">
                {activeTab === "validate" ? "Validation Results" : "Generated Output"}
              </h3>
              <p className="text-xs text-default-500">
                {activeTab === "code"
                  ? "HTML merge field code"
                  : activeTab === "expression"
                  ? "Wp_Eval expression"
                  : activeTab === "groupby"
                  ? "GroupBy template with subtotals"
                  : activeTab === "sample-data"
                  ? "Generated JSON for template testing"
                  : "Errors, warnings, and suggestions"}
              </p>
            </div>
            {activeTab === "validate" && validatorMutation.data && (
              <Chip
                size="sm"
                variant="flat"
                className={
                  validatorMutation.data.result.summary.errorCount > 0
                    ? "bg-danger/20 text-danger"
                    : validatorMutation.data.result.summary.warningCount > 0
                    ? "bg-warning/20 text-warning"
                    : "bg-success/20 text-success"
                }
              >
                {validatorMutation.data.result.summary.errorCount > 0
                  ? `${validatorMutation.data.result.summary.errorCount} Errors`
                  : validatorMutation.data.result.summary.warningCount > 0
                  ? `${validatorMutation.data.result.summary.warningCount} Warnings`
                  : "Valid"}
              </Chip>
            )}
            {activeTab === "groupby" && groupByMutation.data && (
              <Chip size="sm" variant="flat" className="bg-success/20 text-success">
                Ready
              </Chip>
            )}
            {activeTab === "sample-data" && sampleDataMutation.data && (
              <Chip size="sm" variant="flat" className="bg-success/20 text-success">
                Ready
              </Chip>
            )}
            {activeTab !== "validate" && activeTab !== "groupby" && activeTab !== "sample-data" && builderMutation.data && (
              <Chip size="sm" variant="flat" className="bg-success/20 text-success">
                Ready
              </Chip>
            )}
          </CardHeader>

          <CardBody className="p-6">
            {/* Validate mode */}
            {activeTab === "validate" ? (
              isValidating ? (
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="animate-spin h-5 w-5 border-2 border-primary border-t-transparent rounded-full" />
                    <div>
                      <p className="font-medium">Validating template...</p>
                      <p className="text-xs text-default-500">Checking syntax, object paths, and best practices</p>
                    </div>
                  </div>
                  <Progress
                    isIndeterminate
                    color="primary"
                    size="sm"
                    aria-label="Validating"
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
              ) : validatorMutation.data ? (
                <TemplateValidationResultView
                  result={validatorMutation.data.result}
                  sessionId={validatorMutation.data.session_id}
                />
              ) : (
                <div className="flex flex-col items-center justify-center py-16 text-center">
                  <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-4">
                    <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h4 className="text-lg font-medium text-foreground mb-1">No validation yet</h4>
                  <p className="text-sm text-default-500 max-w-xs">
                    Paste your HTML template code and click Validate to check for errors, warnings, and improvement suggestions.
                  </p>
                </div>
              )
            ) : activeTab === "groupby" ? (
              /* GroupBy mode */
              isGroupByGenerating ? (
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="animate-spin h-5 w-5 border-2 border-primary border-t-transparent rounded-full" />
                    <div>
                      <p className="font-medium">Generating GroupBy template...</p>
                      <p className="text-xs text-default-500">Creating nested loops with subtotals</p>
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
              ) : groupByMutation.data ? (
                <HTMLTemplateResultView
                  mode="code"
                  result={{
                    code: groupByMutation.data.result.code,
                    explanation: groupByMutation.data.result.explanation,
                    objects_used: groupByMutation.data.result.objects_used,
                    functions_used: groupByMutation.data.result.functions_used,
                    customization_tips: groupByMutation.data.result.customization_tips,
                  }}
                  sessionId={groupByMutation.data.session_id}
                />
              ) : (
                <div className="flex flex-col items-center justify-center py-16 text-center">
                  <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-4">
                    <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                    </svg>
                  </div>
                  <h4 className="text-lg font-medium text-foreground mb-1">No output yet</h4>
                  <p className="text-sm text-default-500 max-w-xs">
                    Configure your GroupBy fields, columns, and aggregations, then click Generate to create template code with nested loops and subtotals.
                  </p>
                </div>
              )
            ) : activeTab === "sample-data" ? (
              /* Sample Data mode */
              isSampleDataGenerating ? (
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="animate-spin h-5 w-5 border-2 border-primary border-t-transparent rounded-full" />
                    <div>
                      <p className="font-medium">Generating sample data...</p>
                      <p className="text-xs text-default-500">Parsing template and creating realistic test data</p>
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
              ) : sampleDataMutation.data ? (
                <SampleDataResultView
                  result={sampleDataMutation.data.result}
                  sessionId={sampleDataMutation.data.session_id}
                />
              ) : (
                <div className="flex flex-col items-center justify-center py-16 text-center">
                  <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-4">
                    <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
                    </svg>
                  </div>
                  <h4 className="text-lg font-medium text-foreground mb-1">No output yet</h4>
                  <p className="text-sm text-default-500 max-w-xs">
                    Paste your HTML template code and configure the industry settings, then click Generate to create sample test data.
                  </p>
                </div>
              )
            ) : (
              /* Code/Expression mode */
              isGenerating ? (
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
              )
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
