"use client";

import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Input,
  Select,
  SelectItem,
  Switch,
  Textarea,
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  useDisclosure,
  Chip,
  Progress,
  Tooltip,
  addToast,
} from "@heroui/react";
import { useState, useRef, useEffect } from "react";
import {
  useAnalyze,
  useClarify,
  formDataToZucaInput,
  isAnalyzeClarificationResponse,
  isClarifyClarificationResponse,
} from "@/hooks/useAnalyze";
import { useUCGenerator } from "@/hooks/useUCGenerator";
import { useFunFacts } from "@/hooks/useFunFacts";
import { useCompanyFunFacts } from "@/hooks/useCompanyFunFacts";
import {
  Document,
  Packer,
  Paragraph,
  TextRun,
  HeadingLevel,
  AlignmentType,
} from "docx";
import type { UCGeneratorInput, GeneratedUseCase, UCRevRecNote, CallTranscript } from "@zuca/types/uc-generator";
import type { ClarificationQuestion, ClarificationAnswer } from "@zuca/types/clarification";
import { ClarificationQuestionCard } from "@/components/ClarificationQuestion";

const currencies = [
  { key: "USD", label: "USD - US Dollar" },
  { key: "EUR", label: "EUR - Euro" },
  { key: "CAD", label: "CAD - Canadian Dollar" },
];

const billingPeriods = [
  { key: "Monthly", label: "Monthly" },
  { key: "Quarterly", label: "Quarterly" },
  { key: "Semi-Annually", label: "Semi-Annually" },
  { key: "Annually", label: "Annually" },
];

const allocationMethods = [
  { key: "Use List Price", label: "Use List Price" },
  { key: "Use Sell Price", label: "Use Sell Price" },
  { key: "Custom Formula", label: "Custom Formula" },
  { key: "N/A", label: "N/A" },
];

// Default model from environment variable (falls back to gpt-5.2)
const DEFAULT_MODEL = process.env.NEXT_PUBLIC_DEFAULT_MODEL || "gpt-5.2";

// Model options with estimated times from benchmarks
const analyzeModelOptions = [
  { key: "gpt-5.2", label: "GPT-5.2", time: "~7-9 min", description: "Best overall reasoning and accuracy" },
  { key: "gemini-3.1-pro-preview", label: "Gemini 3.1 Pro", time: "~4-5 min", description: "Balanced quality and speed" },
  { key: "gemini-3-flash-preview", label: "Gemini 3 Flash", time: "~1.5-2 min", description: "Fastest, good for interactive use" },
];

const ucGeneratorModelOptions = [
  { key: "gpt-5.2", label: "GPT-5.2", time: "~3 min", description: "Most detailed research" },
  { key: "gemini-3.1-pro-preview", label: "Gemini 3.1 Pro", time: "~1 min", description: "Balanced quality and speed" },
  { key: "gemini-3-flash-preview", label: "Gemini 3 Flash", time: "~30 sec", description: "Fastest generation" },
];

const MAX_TRANSCRIPT_FILES = 5;
const MAX_TRANSCRIPT_CHARS = 50000;
const MAX_TOTAL_TRANSCRIPT_CHARS = 150000;

// Section icon component
const SectionIcon = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => (
  <div className={`w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center text-primary ${className}`}>
    {children}
  </div>
);

type CallTranscriptUpload = CallTranscript & {
  size: number;
  truncated?: boolean;
};

export default function AnalyzePage() {
  const [isAllocations, setIsAllocations] = useState(false);
  const [allocationMethod, setAllocationMethod] = useState<string>("");
  const [selectedModel, setSelectedModel] = useState<string>(DEFAULT_MODEL);
  const formRef = useRef<HTMLFormElement>(null);
  const transcriptInputRef = useRef<HTMLInputElement>(null);

  // UC Generator modal state
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [ucInput, setUcInput] = useState<UCGeneratorInput>({
    customer_name: "",
    customer_website: "",
    num_use_cases: 2,
  });
  const [generatedUseCases, setGeneratedUseCases] = useState<GeneratedUseCase[]>([]);
  const [generatedFormatted, setGeneratedFormatted] = useState<string | null>(null);
  const [selectedUseCaseIndex, setSelectedUseCaseIndex] = useState<number | null>(null);
  const [ucModel, setUcModel] = useState<string>(DEFAULT_MODEL);
  const [callTranscripts, setCallTranscripts] = useState<CallTranscriptUpload[]>([]);
  const [transcriptsLoading, setTranscriptsLoading] = useState(false);

  // Clarification state
  const [pendingClarification, setPendingClarification] = useState<{
    sessionId: string;
    question: ClarificationQuestion;
  } | null>(null);

  // User preference for skipping clarifications (persisted in localStorage)
  const [skipClarifications, setSkipClarifications] = useState(false);

  // Load skip clarifications preference from localStorage on mount
  useEffect(() => {
    const saved = localStorage.getItem('zuca_skip_clarifications');
    if (saved === 'true') {
      setSkipClarifications(true);
    }
  }, []);

  // Save skip clarifications preference to localStorage when changed
  const handleSkipClarificationsChange = (value: boolean) => {
    setSkipClarifications(value);
    localStorage.setItem('zuca_skip_clarifications', String(value));
  };

  // Mutations
  const analyzeMutation = useAnalyze();
  const clarifyMutation = useClarify();
  const ucGeneratorMutation = useUCGenerator();
  const pipelineLocked =
    analyzeMutation.isPending || clarifyMutation.isPending || pendingClarification !== null;

  // Update clarification state when analyze or clarify mutation returns a clarification
  useEffect(() => {
    if (analyzeMutation.data && isAnalyzeClarificationResponse(analyzeMutation.data)) {
      setPendingClarification({
        sessionId: analyzeMutation.data.session_id,
        question: analyzeMutation.data.question,
      });
    }
  }, [analyzeMutation.data]);

  useEffect(() => {
    if (clarifyMutation.data && isClarifyClarificationResponse(clarifyMutation.data)) {
      setPendingClarification({
        sessionId: clarifyMutation.data.session_id,
        question: clarifyMutation.data.question,
      });
    }
  }, [clarifyMutation.data]);

  // Fun facts for loading screen - rotates every 10 seconds
  const { currentFact } = useFunFacts({ interval: 10000 });

  // Company-specific fun facts for UC Generator loading
  const {
    fetchFacts: fetchCompanyFacts,
    currentFact: companyFact,
    isLoading: factsLoading,
    isReady: factsReady,
    reset: resetFacts,
  } = useCompanyFunFacts({ interval: 10000 });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    formData.set("is_allocations", String(isAllocations));

    // Clear any previous clarification state
    setPendingClarification(null);

    try {
      const input = formDataToZucaInput(formData);
      await analyzeMutation.mutateAsync({
        input,
        model: selectedModel,
        skipClarifications,
      });
    } catch (error) {
      const err = error as { error?: string; details?: string };
      addToast({
        title: "Analysis Failed",
        description: err.details || err.error || "An error occurred",
        color: "danger",
      });
    }
  };

  const handleClarificationAnswer = async (answer: ClarificationAnswer) => {
    if (!pendingClarification) return;

    try {
      await clarifyMutation.mutateAsync({
        sessionId: pendingClarification.sessionId,
        answer,
      });
      // Note: clarifyMutation handles navigation on completion
      // and useEffect handles new clarification questions
    } catch (error) {
      const err = error as { error?: string; details?: string };
      addToast({
        title: "Failed to submit answer",
        description: err.details || err.error || "An error occurred",
        color: "danger",
      });
    }
  };

  const handleClear = () => {
    formRef.current?.reset();
    setIsAllocations(false);
    setAllocationMethod("");
  };

  const handleOpenUCGenerator = () => {
    const formData = new FormData(formRef.current!);
    const customerName = formData.get("customer_name") as string;
    setUcInput((prev) => ({ ...prev, customer_name: customerName || "" }));
    setGeneratedUseCases([]);
    setGeneratedFormatted(null);
    setSelectedUseCaseIndex(null);
    setCallTranscripts([]);
    if (transcriptInputRef.current) {
      transcriptInputRef.current.value = "";
    }
    onOpen();
  };

  const handleCloseUCGenerator = () => {
    onClose();
    resetFacts();
    setCallTranscripts([]);
    if (transcriptInputRef.current) {
      transcriptInputRef.current.value = "";
    }
  };

  const formatFileSize = (bytes: number) => {
    if (bytes < 1024) return `${bytes} B`;
    if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
    return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
  };

  const parseTranscriptFile = async (file: File): Promise<CallTranscriptUpload | null> => {
    const extension = file.name.split(".").pop()?.toLowerCase();
    if (!extension || (extension !== "txt" && extension !== "docx")) {
      addToast({
        title: "Unsupported file",
        description: `${file.name} must be a .txt or .docx transcript`,
        color: "warning",
      });
      return null;
    }

    let content = "";
    try {
      if (extension === "txt") {
        content = await file.text();
      } else {
        const arrayBuffer = await file.arrayBuffer();
        const mammothModule = await import("mammoth/mammoth.browser");
        const mammoth = "default" in mammothModule ? mammothModule.default : mammothModule;
        const result = await mammoth.extractRawText({ arrayBuffer });
        content = result?.value ?? "";
      }
    } catch (error) {
      addToast({
        title: "Transcript parse failed",
        description: `Couldn't read ${file.name}. Please try a .txt file.`,
        color: "danger",
      });
      return null;
    }

    content = content.replace(/\r/g, "").trim();

    if (!content) {
      addToast({
        title: "Empty transcript",
        description: `${file.name} doesn't contain readable text`,
        color: "warning",
      });
      return null;
    }

    let truncated = false;
    if (content.length > MAX_TRANSCRIPT_CHARS) {
      content = content.slice(0, MAX_TRANSCRIPT_CHARS);
      truncated = true;
    }

    return {
      filename: file.name,
      content,
      size: file.size,
      truncated,
    };
  };

  const handleTranscriptUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files ? Array.from(event.target.files) : [];
    if (!files.length) return;

    setTranscriptsLoading(true);
    const parsed = await Promise.all(files.map((file) => parseTranscriptFile(file)));
    setTranscriptsLoading(false);

    const nextTranscripts = parsed.filter(Boolean) as CallTranscriptUpload[];
    if (!nextTranscripts.length) {
      if (transcriptInputRef.current) {
        transcriptInputRef.current.value = "";
      }
      return;
    }

    const warnings: string[] = [];

    setCallTranscripts((prev) => {
      const existingNames = new Set(prev.map((t) => t.filename));
      let totalChars = prev.reduce((sum, t) => sum + t.content.length, 0);
      const updated = [...prev];

      for (const transcript of nextTranscripts) {
        if (existingNames.has(transcript.filename)) {
          warnings.push(`${transcript.filename} is already attached.`);
          continue;
        }

        if (updated.length >= MAX_TRANSCRIPT_FILES) {
          warnings.push(`Only ${MAX_TRANSCRIPT_FILES} transcripts are allowed.`);
          break;
        }

        let remaining = MAX_TOTAL_TRANSCRIPT_CHARS - totalChars;
        if (remaining <= 0) {
          warnings.push("Transcript limit reached. Remove a transcript to add another.");
          break;
        }

        let content = transcript.content;
        let truncated = transcript.truncated;

        if (content.length > remaining) {
          content = content.slice(0, remaining);
          truncated = true;
        }

        updated.push({
          ...transcript,
          content,
          truncated,
        });
        totalChars += content.length;

        if (truncated) {
          warnings.push(`${transcript.filename} was truncated to fit the context limit.`);
        }
      }

      return updated;
    });

    warnings.forEach((message) =>
      addToast({
        title: "Transcript upload",
        description: message,
        color: "warning",
      })
    );

    if (transcriptInputRef.current) {
      transcriptInputRef.current.value = "";
    }
  };

  const handleRemoveTranscript = (filename: string) => {
    setCallTranscripts((prev) => prev.filter((transcript) => transcript.filename !== filename));
  };

  const totalTranscriptChars = callTranscripts.reduce((sum, transcript) => sum + transcript.content.length, 0);

  const handleGenerateUseCases = async () => {
    try {
      // Start fetching company fun facts in parallel
      if (ucInput.customer_name) {
        fetchCompanyFacts(ucInput.customer_name, ucInput.customer_website);
      }

      const transcriptsPayload = callTranscripts.length
        ? callTranscripts.map(({ filename, content }) => ({ filename, content }))
        : undefined;

      const result = await ucGeneratorMutation.mutateAsync({
        input: {
          ...ucInput,
          call_transcripts: transcriptsPayload,
        },
        model: ucModel,
      });
      setGeneratedUseCases(result.use_cases);
      setGeneratedFormatted(result.formatted || null);
      setSelectedUseCaseIndex(null);
    } catch (error) {
      const err = error as { error?: string; details?: string };
      addToast({
        title: "Generation Failed",
        description: err.details || err.error || "An error occurred",
        color: "danger",
      });
    }
  };

  const handleDownloadMarkdown = () => {
    if (!generatedFormatted) return;

    const blob = new Blob([generatedFormatted], { type: "text/markdown" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `${ucInput.customer_name.toLowerCase().replace(/\s+/g, "-")}-use-cases.md`;
    a.click();
    URL.revokeObjectURL(url);

    addToast({
      title: "Exported",
      description: "Markdown file downloaded",
      color: "success",
    });
  };

  const handleDownloadDocx = async () => {
    if (!generatedFormatted) return;

    // Parse markdown into docx paragraphs
    const lines = generatedFormatted.split("\n");
    const children: Paragraph[] = [];

    for (const line of lines) {
      if (line.startsWith("## ")) {
        children.push(
          new Paragraph({
            text: line.replace(/^## /, ""),
            heading: HeadingLevel.HEADING_2,
            spacing: { before: 400, after: 200 },
          })
        );
      } else if (line.startsWith("### ")) {
        children.push(
          new Paragraph({
            text: line.replace(/^### /, ""),
            heading: HeadingLevel.HEADING_3,
            spacing: { before: 300, after: 150 },
          })
        );
      } else if (line.startsWith("**") && line.endsWith("**")) {
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
        children.push(
          new Paragraph({
            text: line.replace(/^- /, ""),
            bullet: { level: 0 },
          })
        );
      } else if (line.startsWith("```")) {
        continue;
      } else if (line.trim() === "") {
        children.push(new Paragraph({ text: "" }));
      } else {
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
              text: `${ucInput.customer_name} - Use Cases`,
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
    a.download = `${ucInput.customer_name.toLowerCase().replace(/\s+/g, "-")}-use-cases.docx`;
    a.click();
    URL.revokeObjectURL(url);

    addToast({
      title: "Exported",
      description: "Word document downloaded",
      color: "success",
    });
  };

  const handleConfirmUseCase = () => {
    if (selectedUseCaseIndex === null) return;
    const useCase = generatedUseCases[selectedUseCaseIndex];
    handleSelectUseCase(useCase);
  };

  const formatRevRecNotes = (notes: UCRevRecNote[]): string => {
    return notes
      .map((n) => `${n.charge_group}: ${n.notes} (${n.likely_pob_type}, ${n.confidence} confidence)`)
      .join("\n");
  };

  const handleSelectUseCase = (useCase: GeneratedUseCase) => {
    if (!formRef.current) return;

    const otr = useCase.otr_workflow_inputs;

    // Helper to set value and trigger React-compatible events
    const setInputValue = (selector: string, value: string) => {
      const input = formRef.current?.querySelector<HTMLInputElement | HTMLTextAreaElement>(selector);
      if (input) {
        // Use native setter to bypass React's synthetic event system
        const nativeInputValueSetter = Object.getOwnPropertyDescriptor(
          window.HTMLInputElement.prototype,
          "value"
        )?.set;
        const nativeTextAreaValueSetter = Object.getOwnPropertyDescriptor(
          window.HTMLTextAreaElement.prototype,
          "value"
        )?.set;

        if (input.tagName === "TEXTAREA" && nativeTextAreaValueSetter) {
          nativeTextAreaValueSetter.call(input, value);
        } else if (nativeInputValueSetter) {
          nativeInputValueSetter.call(input, value);
        }

        // Dispatch input event for React to pick up
        input.dispatchEvent(new Event("input", { bubbles: true }));
      }
    };

    // Set all form values
    setInputValue('[name="customer_name"]', otr.customer_name);
    setInputValue('[name="contract_start_date"]', otr.contract_start_date);
    setInputValue('[name="use_case_description"]', otr.use_case);
    setInputValue('[name="terms_months"]', String(otr.terms_months));

    // Handle selects (HeroUI Select uses hidden input)
    const currencyInput = formRef.current.querySelector<HTMLInputElement>('[name="transaction_currency"]');
    const billingInput = formRef.current.querySelector<HTMLInputElement>('[name="billing_period"]');

    if (currencyInput) {
      currencyInput.value = otr.transaction_currency;
    }
    if (billingInput) {
      billingInput.value = otr.billing_period;
    }

    // Set rev rec notes if present
    if (otr.rev_rec_notes?.length > 0) {
      setInputValue('[name="rev_rec_notes"]', formatRevRecNotes(otr.rev_rec_notes));
    }

    // Set React state for controlled components
    setIsAllocations(otr.is_allocations);
    if (otr.allocation_method) {
      setAllocationMethod(otr.allocation_method);
    }

    onClose();

    addToast({
      title: "Use Case Selected",
      description: `"${useCase.label}" has been loaded into the form`,
      color: "success",
    });
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex justify-between items-start">
        <div className="space-y-1">
          <h1 className="text-3xl font-bold tracking-tight">
            <span className="gradient-text">Use Case Analysis</span>
          </h1>
          <p className="text-default-500 text-lg">
            Configure your use case to generate a complete Zuora solution
          </p>
        </div>
        <Button
          variant="bordered"
          color="secondary"
          size="lg"
          className="border-2 border-secondary/50 hover:border-secondary hover:bg-secondary/10 transition-all"
          isDisabled={pipelineLocked}
          startContent={
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
            </svg>
          }
          onPress={handleOpenUCGenerator}
        >
          Generate Use Cases
        </Button>
      </div>

      {/* Clarification Question */}
      {pendingClarification && !clarifyMutation.isPending && (
        <div className="animate-fade-in-up">
          <div className="text-center mb-4">
            <h2 className="text-xl font-semibold text-foreground">We need a bit more information</h2>
            <p className="text-default-500 text-sm mt-1">
              The analysis found an ambiguity that could affect the result
            </p>
          </div>
          <ClarificationQuestionCard
            question={pendingClarification.question}
            sessionId={pendingClarification.sessionId}
            onAnswer={handleClarificationAnswer}
            isSubmitting={clarifyMutation.isPending}
          />
        </div>
      )}

      {/* Analysis in progress (initial or after clarification) */}
      {(analyzeMutation.isPending || clarifyMutation.isPending) && (
        <Card className="glass-card-elevated border-primary/30 overflow-hidden animate-fade-in-up">
          <div className="h-1 bg-gradient-to-r from-primary via-secondary to-primary animate-pulse" />
          <CardBody className="p-6">
            <div className="flex items-center gap-4 mb-4">
              <div className="relative">
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                  <div className="animate-spin h-6 w-6 border-2 border-primary border-t-transparent rounded-full" />
                </div>
                <div className="absolute inset-0 bg-primary/20 rounded-full blur-xl" />
              </div>
              <div>
                <h3 className="font-semibold text-lg">
                  {clarifyMutation.isPending ? "Resuming Analysis Pipeline" : "Running Analysis Pipeline"}
                </h3>
                <p className="text-default-500">
                  {clarifyMutation.isPending
                    ? "Continuing analysis with your answer..."
                    : "Processing your use case through all pipeline steps..."}
                </p>
              </div>
            </div>
            <Progress
              isIndeterminate
              color="primary"
              size="sm"
              aria-label="Running pipeline"
              classNames={{
                indicator: "bg-gradient-to-r from-primary to-secondary",
              }}
            />
            <div className="mt-4 p-4 rounded-xl bg-default-100/30 border border-default-200/30">
              <p className="text-sm text-default-600 italic leading-relaxed min-h-[2.5rem] transition-opacity duration-300">
                &ldquo;{currentFact}&rdquo;
              </p>
            </div>
            <div className="flex items-center justify-between mt-3">
              <p className="text-xs text-default-400">
                You&apos;ll be redirected when complete.
              </p>
              <Button
                size="sm"
                variant="flat"
                color="danger"
                onPress={() => {
                  if (clarifyMutation.isPending) {
                    clarifyMutation.reset();
                  } else {
                    analyzeMutation.reset();
                  }
                  setPendingClarification(null);
                }}
              >
                Cancel
              </Button>
            </div>
          </CardBody>
        </Card>
      )}

      {/* Form */}
      <form ref={formRef} onSubmit={handleSubmit}>
        <div className="grid gap-8">
          {/* Required Fields */}
          <Card className="glass-card overflow-hidden animate-fade-in-up stagger-1">
            <CardHeader className="flex gap-3 p-6 pb-0">
              <SectionIcon>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </SectionIcon>
              <div>
                <h2 className="text-lg font-semibold">Required Information</h2>
                <p className="text-sm text-default-500">Core details about the customer and use case</p>
              </div>
            </CardHeader>
            <CardBody className="p-6 space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input
                  name="customer_name"
                  label="Customer Name"
                  placeholder="e.g., Acme Corporation"
                  isRequired
                  labelPlacement="outside"
                  variant="bordered"
                  size="lg"
                  isDisabled={pipelineLocked}
                  classNames={{
                    inputWrapper: "border-default-200 hover:border-primary/50 focus-within:border-primary",
                  }}
                />

                <Input
                  name="contract_start_date"
                  label="Contract Start Date"
                  placeholder="MM/DD/YYYY"
                  isRequired
                  labelPlacement="outside"
                  variant="bordered"
                  size="lg"
                  isDisabled={pipelineLocked}
                  classNames={{
                    inputWrapper: "border-default-200 hover:border-primary/50 focus-within:border-primary",
                  }}
                />
              </div>

              <Textarea
                name="use_case_description"
                label="Use Case Description"
                placeholder="Describe the customer's billing scenario in detail. Include products, pricing models, billing frequencies, any special terms, and revenue recognition requirements..."
                isRequired
                minRows={5}
                labelPlacement="outside"
                variant="bordered"
                size="lg"
                isDisabled={pipelineLocked}
                classNames={{
                  inputWrapper: "border-default-200 hover:border-primary/50 focus-within:border-primary",
                }}
              />
            </CardBody>
          </Card>

          {/* Contract Settings */}
          <Card className="glass-card overflow-hidden animate-fade-in-up stagger-2">
            <CardHeader className="flex gap-3 p-6 pb-0">
              <SectionIcon>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
              </SectionIcon>
              <div>
                <h2 className="text-lg font-semibold">Contract Settings</h2>
                <p className="text-sm text-default-500">Define contract terms and billing parameters</p>
              </div>
            </CardHeader>
            <CardBody className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Input
                  name="terms_months"
                  type="number"
                  label="Term (Months)"
                  placeholder="12"
                  defaultValue="12"
                  labelPlacement="outside"
                  variant="bordered"
                  size="lg"
                  isDisabled={pipelineLocked}
                  classNames={{
                    inputWrapper: "border-default-200 hover:border-primary/50 focus-within:border-primary",
                  }}
                />

                <Select
                  name="transaction_currency"
                  label="Currency"
                  placeholder="Select currency"
                  defaultSelectedKeys={["USD"]}
                  labelPlacement="outside"
                  variant="bordered"
                  size="lg"
                  isDisabled={pipelineLocked}
                  classNames={{
                    trigger: "border-default-200 hover:border-primary/50 data-[focus=true]:border-primary",
                  }}
                >
                  {currencies.map((currency) => (
                    <SelectItem key={currency.key}>
                      {currency.label}
                    </SelectItem>
                  ))}
                </Select>

                <Select
                  name="billing_period"
                  label="Billing Period"
                  placeholder="Select billing period"
                  defaultSelectedKeys={["Monthly"]}
                  labelPlacement="outside"
                  variant="bordered"
                  size="lg"
                  isDisabled={pipelineLocked}
                  classNames={{
                    trigger: "border-default-200 hover:border-primary/50 data-[focus=true]:border-primary",
                  }}
                >
                  {billingPeriods.map((period) => (
                    <SelectItem key={period.key}>
                      {period.label}
                    </SelectItem>
                  ))}
                </Select>
              </div>
            </CardBody>
          </Card>

          {/* Revenue Recognition */}
          <Card className="glass-card overflow-hidden animate-fade-in-up stagger-3">
            <CardHeader className="flex gap-3 p-6 pb-0">
              <SectionIcon>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </SectionIcon>
              <div>
                <h2 className="text-lg font-semibold">Revenue Recognition</h2>
                <p className="text-sm text-default-500">Configure ASC 606 compliance settings</p>
              </div>
            </CardHeader>
            <CardBody className="p-6 space-y-6">
              <div className="flex items-center justify-between p-4 rounded-xl bg-default-100/30 border border-default-200/50">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-secondary/20 flex items-center justify-center">
                    <svg className="w-5 h-5 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-medium">Enable Allocations</p>
                    <p className="text-sm text-default-500">
                      SSP-based allocation across multiple performance obligations
                    </p>
                  </div>
                </div>
                <Switch
                  isSelected={isAllocations}
                  onValueChange={setIsAllocations}
                  isDisabled={pipelineLocked}
                  classNames={{
                    wrapper: "group-data-[selected=true]:bg-primary",
                  }}
                />
              </div>

              {isAllocations && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2 animate-fade-in-up">
                  <Select
                    name="allocation_method"
                    label="Allocation Method"
                    placeholder="Select allocation method"
                    labelPlacement="outside"
                    variant="bordered"
                    size="lg"
                    selectedKeys={allocationMethod ? [allocationMethod] : []}
                    onSelectionChange={(keys) =>
                      setAllocationMethod(Array.from(keys)[0] as string)
                    }
                    isDisabled={pipelineLocked}
                    classNames={{
                      trigger: "border-default-200 hover:border-primary/50 data-[focus=true]:border-primary",
                    }}
                  >
                    {allocationMethods.map((method) => (
                      <SelectItem key={method.key}>
                        {method.label}
                      </SelectItem>
                    ))}
                  </Select>

                  {allocationMethod === "Custom Formula" && (
                    <Textarea
                      name="allocation_custom_formula"
                      label="Custom Formula"
                      placeholder="Enter your custom allocation formula..."
                      labelPlacement="outside"
                      variant="bordered"
                      size="lg"
                      isDisabled={pipelineLocked}
                      classNames={{
                        inputWrapper: "border-default-200 hover:border-primary/50 focus-within:border-primary",
                      }}
                    />
                  )}
                </div>
              )}

              <div className="divider-glow my-4" />

              <Textarea
                name="rev_rec_notes"
                label="Revenue Recognition Notes (Optional)"
                placeholder="Add any specific notes about revenue recognition requirements, constraints, or special handling..."
                labelPlacement="outside"
                variant="bordered"
                size="lg"
                isDisabled={pipelineLocked}
                classNames={{
                  inputWrapper: "border-default-200 hover:border-primary/50 focus-within:border-primary",
                }}
              />
            </CardBody>
          </Card>

          {/* Model Selection */}
          <Card className="glass-card overflow-hidden animate-fade-in-up stagger-4">
            <CardHeader className="flex gap-3 p-6 pb-0">
              <SectionIcon>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </SectionIcon>
              <div>
                <h2 className="text-lg font-semibold">Model Selection</h2>
                <p className="text-sm text-default-500">Choose the model used for every pipeline step</p>
              </div>
            </CardHeader>
            <CardBody className="p-6 space-y-4">
              <Select
                label="Execution Model"
                selectedKeys={[selectedModel]}
                onSelectionChange={(keys) => setSelectedModel(Array.from(keys)[0] as string)}
                labelPlacement="outside"
                variant="bordered"
                size="lg"
                isDisabled={pipelineLocked}
                classNames={{
                  trigger: "border-default-200 hover:border-primary/50 data-[focus=true]:border-primary",
                }}
              >
                {analyzeModelOptions.map((model) => (
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
              <p className="text-xs text-default-500">
                Model changes apply to the entire run. Switching is disabled while a run is in progress.
              </p>

              {/* Skip Clarifications Toggle */}
              <div className="pt-2 border-t border-default-200/50">
                <div className="flex items-center justify-between p-3 rounded-lg bg-default-100/30">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-warning/10 flex items-center justify-center">
                      <svg className="w-4 h-4 text-warning" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm font-medium">Skip Clarification Questions</p>
                      <p className="text-xs text-default-500">
                        When enabled, the pipeline won&apos;t pause to ask questions
                      </p>
                    </div>
                  </div>
                  <Switch
                    isSelected={skipClarifications}
                    onValueChange={handleSkipClarificationsChange}
                    isDisabled={pipelineLocked}
                    classNames={{
                      wrapper: "group-data-[selected=true]:bg-warning",
                    }}
                  />
                </div>
              </div>
            </CardBody>
          </Card>

          {/* Submit */}
          <div className="flex justify-end gap-4 animate-fade-in-up stagger-4">
            <Button
              type="button"
              variant="bordered"
              size="lg"
              className="px-8 border-2 border-default-300 hover:border-default-400"
              onPress={handleClear}
              isDisabled={pipelineLocked}
            >
              Clear Form
            </Button>
            <Button
              type="submit"
              color="primary"
              size="lg"
              className="px-8 font-semibold teal-glow-subtle"
              isDisabled={pipelineLocked}
              isLoading={analyzeMutation.isPending}
            >
              {analyzeMutation.isPending ? "Analyzing..." : "Analyze Use Case"}
            </Button>
          </div>
        </div>
      </form>

      {/* UC Generator Modal */}
      <Modal
        size="3xl"
        isOpen={isOpen}
        onClose={handleCloseUCGenerator}
        scrollBehavior="inside"
        classNames={{
          backdrop: "bg-[#050a08]/80 backdrop-blur-sm",
          base: "glass-card-elevated max-h-[90vh]",
          body: "overflow-y-auto",
        }}
      >
        <ModalContent>
          <ModalHeader className="flex flex-col gap-1 pt-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-secondary/20 flex items-center justify-center">
                <svg className="w-5 h-5 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-semibold">Generate Use Cases</h3>
                <p className="text-sm text-default-500 font-normal">
                  Research a customer&apos;s website to auto-generate demo-ready use cases
                </p>
              </div>
            </div>
          </ModalHeader>
          <ModalBody className="py-6">
            {generatedUseCases.length === 0 ? (
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Input
                    label="Customer Name"
                    placeholder="e.g., Slack"
                    value={ucInput.customer_name}
                    onChange={(e) =>
                      setUcInput((prev) => ({ ...prev, customer_name: e.target.value }))
                    }
                    isRequired
                    labelPlacement="outside"
                    variant="bordered"
                    size="lg"
                    isDisabled={ucGeneratorMutation.isPending}
                    classNames={{
                      inputWrapper: "border-default-200 hover:border-primary/50 focus-within:border-primary",
                    }}
                  />

                  <Input
                    label="Customer Website"
                    placeholder="e.g., slack.com"
                    value={ucInput.customer_website}
                    onChange={(e) =>
                      setUcInput((prev) => ({ ...prev, customer_website: e.target.value }))
                    }
                    isRequired
                    labelPlacement="outside"
                    variant="bordered"
                    size="lg"
                    isDisabled={ucGeneratorMutation.isPending}
                    classNames={{
                      inputWrapper: "border-default-200 hover:border-primary/50 focus-within:border-primary",
                    }}
                  />
                </div>

                <div className="pt-4">
                  <Select
                    label="Number of Use Cases"
                    selectedKeys={[String(ucInput.num_use_cases)]}
                    onSelectionChange={(keys) =>
                      setUcInput((prev) => ({
                        ...prev,
                        num_use_cases: parseInt(Array.from(keys)[0] as string, 10) as 1 | 2 | 3 | 4 | 5,
                      }))
                    }
                    labelPlacement="outside"
                    variant="bordered"
                    size="lg"
                    isDisabled={ucGeneratorMutation.isPending}
                    classNames={{
                      trigger: "border-default-200 hover:border-primary/50 data-[focus=true]:border-primary",
                    }}
                  >
                    <SelectItem key="1">1 Use Case</SelectItem>
                    <SelectItem key="2">2 Use Cases</SelectItem>
                    <SelectItem key="3">3 Use Cases</SelectItem>
                    <SelectItem key="4">4 Use Cases</SelectItem>
                    <SelectItem key="5">5 Use Cases</SelectItem>
                  </Select>
                </div>

                <div className="pt-4">
                  <Select
                    label="Execution Model"
                    selectedKeys={[ucModel]}
                    onSelectionChange={(keys) => setUcModel(Array.from(keys)[0] as string)}
                    labelPlacement="outside"
                    variant="bordered"
                    size="lg"
                    isDisabled={ucGeneratorMutation.isPending}
                    classNames={{
                      trigger: "border-default-200 hover:border-primary/50 data-[focus=true]:border-primary",
                    }}
                  >
                    {ucGeneratorModelOptions.map((model) => (
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
                </div>

                <Textarea
                  label="Additional Notes (Optional)"
                  placeholder="e.g., Focus on enterprise plans, include usage-based pricing..."
                  value={ucInput.user_notes || ""}
                  onChange={(e) =>
                    setUcInput((prev) => ({ ...prev, user_notes: e.target.value }))
                  }
                  labelPlacement="outside"
                  variant="bordered"
                  size="lg"
                  isDisabled={ucGeneratorMutation.isPending}
                  className="pt-2"
                  classNames={{
                    inputWrapper: "border-default-200 hover:border-primary/50 focus-within:border-primary",
                  }}
                />

                <div className="pt-2 space-y-3">
                  <div>
                    <p className="text-sm font-medium text-default-600">
                      Discovery Call Transcripts (Optional)
                    </p>
                    <p className="text-xs text-default-500 mt-1">
                      Attach .txt or .docx transcripts so the generator can pull exact language and requirements.
                      Formatting is ignored; only text is used.
                    </p>
                  </div>

                  <input
                    ref={transcriptInputRef}
                    type="file"
                    accept=".txt,.docx,text/plain,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
                    multiple
                    onChange={handleTranscriptUpload}
                    disabled={ucGeneratorMutation.isPending || transcriptsLoading}
                    className="block w-full text-sm text-default-600 file:mr-4 file:rounded-lg file:border-0 file:bg-primary/10 file:px-4 file:py-2 file:text-sm file:font-medium file:text-primary hover:file:bg-primary/20"
                  />

                  <p className="text-xs text-default-400">
                    Up to {MAX_TRANSCRIPT_FILES} files. {MAX_TRANSCRIPT_CHARS.toLocaleString()} characters per
                    file, {MAX_TOTAL_TRANSCRIPT_CHARS.toLocaleString()} total.
                  </p>

                  {transcriptsLoading && (
                    <div className="flex items-center gap-2 text-xs text-default-500">
                      <div className="animate-spin h-3 w-3 border-2 border-primary border-t-transparent rounded-full" />
                      Parsing transcripts...
                    </div>
                  )}

                  {callTranscripts.length > 0 && (
                    <div className="space-y-2">
                      {callTranscripts.map((transcript) => (
                        <div
                          key={transcript.filename}
                          className="flex items-center justify-between gap-3 rounded-xl border border-default-200/70 bg-default-100/40 px-3 py-2"
                        >
                          <div className="flex flex-col">
                            <span className="text-sm font-medium text-default-600">
                              {transcript.filename}
                            </span>
                            <span className="text-xs text-default-400">
                              {formatFileSize(transcript.size)} · {transcript.content.length.toLocaleString()} chars
                              {transcript.truncated ? " (truncated)" : ""}
                            </span>
                          </div>
                          <Button
                            isIconOnly
                            size="sm"
                            variant="light"
                            className="text-default-400 hover:text-danger"
                            onPress={() => handleRemoveTranscript(transcript.filename)}
                            isDisabled={ucGeneratorMutation.isPending}
                          >
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                            </svg>
                          </Button>
                        </div>
                      ))}

                      <p className="text-xs text-default-400">
                        {totalTranscriptChars.toLocaleString()} characters queued for context.
                      </p>
                    </div>
                  )}
                </div>

                {ucGeneratorMutation.isPending && (
                  <Card className="glass-card border-secondary/30">
                    <CardBody className="p-5">
                      <div className="flex items-center gap-4 mb-3">
                        <div className="animate-spin h-5 w-5 border-2 border-secondary border-t-transparent rounded-full" />
                        <span className="font-medium">Researching and generating use cases...</span>
                      </div>
                      <Progress
                        isIndeterminate
                        color="secondary"
                        size="sm"
                        aria-label="Generating use cases"
                        classNames={{
                          indicator: "bg-gradient-to-r from-secondary to-primary",
                        }}
                      />

                      {/* Company fun facts */}
                      {(factsLoading || factsReady) && (
                        <div className="mt-4 p-4 rounded-xl bg-secondary/10 border border-secondary/20">
                          <div className="flex items-center gap-2 mb-2 text-secondary">
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            <span className="text-xs font-medium uppercase tracking-wider">
                              Did you know about {ucInput.customer_name}?
                            </span>
                          </div>
                          {factsLoading && !companyFact ? (
                            <p className="text-sm text-default-400 italic">
                              Finding interesting facts...
                            </p>
                          ) : companyFact ? (
                            <p className="text-sm text-default-600 leading-relaxed min-h-[2.5rem] transition-opacity duration-300">
                              {companyFact}
                            </p>
                          ) : null}
                        </div>
                      )}

                      <p className="text-xs text-default-400 mt-3">
                        Researching the customer&apos;s website and generating detailed use cases...
                      </p>
                    </CardBody>
                  </Card>
                )}
              </div>
            ) : (
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <p className="text-sm text-default-500">
                    Click a use case to preview details, then confirm your selection:
                  </p>
                  {generatedFormatted && (
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
                </div>

                {/* Use case list */}
                <div className="space-y-3">
                  {generatedUseCases.map((useCase, index) => {
                    const chargeGroups = [...new Set(
                      useCase.otr_workflow_inputs.rev_rec_notes.map((n) => n.charge_group)
                    )];
                    const isSelected = selectedUseCaseIndex === index;

                    return (
                      <Card
                        key={index}
                        isPressable
                        onPress={() => setSelectedUseCaseIndex(index)}
                        className={`glass-card transition-all ${
                          isSelected
                            ? "border-2 border-primary ring-2 ring-primary/20"
                            : "border-transparent hover:border-default-300"
                        }`}
                      >
                        <CardBody className="p-4">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-3">
                              <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                                isSelected ? "border-primary bg-primary" : "border-default-300"
                              }`}>
                                {isSelected && (
                                  <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                  </svg>
                                )}
                              </div>
                              <div>
                                <h4 className="font-semibold">{useCase.label}</h4>
                                <div className="flex items-center gap-2 mt-1">
                                  <Chip size="sm" variant="flat" color="secondary">
                                    {useCase.otr_workflow_inputs.terms_months} months
                                  </Chip>
                                  {chargeGroups.slice(0, 3).map((group, i) => (
                                    <Chip key={i} size="sm" variant="bordered" className="border-default-300">
                                      {group}
                                    </Chip>
                                  ))}
                                  {chargeGroups.length > 3 && (
                                    <span className="text-xs text-default-400">+{chargeGroups.length - 3} more</span>
                                  )}
                                </div>
                              </div>
                            </div>
                          </div>
                        </CardBody>
                      </Card>
                    );
                  })}
                </div>

                {/* Selected use case details */}
                {selectedUseCaseIndex !== null && (
                  <Card className="glass-card border-primary/30 mt-4">
                    <CardBody className="p-5 space-y-4">
                      <div className="flex items-center gap-2 text-primary">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span className="font-medium">Use Case Details</span>
                      </div>

                      <div>
                        <p className="text-xs text-default-400 uppercase tracking-wide mb-1">Description</p>
                        <p className="text-sm text-default-600 leading-relaxed">
                          {generatedUseCases[selectedUseCaseIndex].otr_workflow_inputs.use_case}
                        </p>
                      </div>

                      {generatedUseCases[selectedUseCaseIndex].assumptions.length > 0 && (
                        <div>
                          <p className="text-xs text-default-400 uppercase tracking-wide mb-2">Assumptions</p>
                          <ul className="space-y-1">
                            {generatedUseCases[selectedUseCaseIndex].assumptions.map((assumption, i) => (
                              <li key={i} className="text-sm text-default-500 flex items-start gap-2">
                                <span className="text-primary mt-1">•</span>
                                {assumption}
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}

                      <div className="grid grid-cols-2 gap-4 pt-2">
                        <div>
                          <p className="text-xs text-default-400 uppercase tracking-wide mb-1">Contract Terms</p>
                          <p className="text-sm font-medium">{generatedUseCases[selectedUseCaseIndex].otr_workflow_inputs.terms_months} months</p>
                        </div>
                        <div>
                          <p className="text-xs text-default-400 uppercase tracking-wide mb-1">Billing Period</p>
                          <p className="text-sm font-medium capitalize">{generatedUseCases[selectedUseCaseIndex].otr_workflow_inputs.billing_period}</p>
                        </div>
                        <div>
                          <p className="text-xs text-default-400 uppercase tracking-wide mb-1">Currency</p>
                          <p className="text-sm font-medium">{generatedUseCases[selectedUseCaseIndex].otr_workflow_inputs.transaction_currency}</p>
                        </div>
                        <div>
                          <p className="text-xs text-default-400 uppercase tracking-wide mb-1">Allocations</p>
                          <p className="text-sm font-medium">{generatedUseCases[selectedUseCaseIndex].otr_workflow_inputs.is_allocations ? "Yes" : "No"}</p>
                        </div>
                      </div>
                    </CardBody>
                  </Card>
                )}
              </div>
            )}
          </ModalBody>
          <ModalFooter className="pb-6">
            <Button variant="light" onPress={handleCloseUCGenerator}>
              Cancel
            </Button>
            {generatedUseCases.length === 0 ? (
              <Button
                color="secondary"
                className="font-semibold"
                onPress={handleGenerateUseCases}
                isLoading={ucGeneratorMutation.isPending}
                isDisabled={!ucInput.customer_name || !ucInput.customer_website || transcriptsLoading}
              >
                Generate
              </Button>
            ) : (
              <>
                <Button
                  variant="bordered"
                  className="border-2 border-default-300"
                  onPress={() => {
                    setGeneratedUseCases([]);
                    setGeneratedFormatted(null);
                    setSelectedUseCaseIndex(null);
                  }}
                >
                  Start Over
                </Button>
                <Button
                  color="primary"
                  className="font-semibold"
                  onPress={handleConfirmUseCase}
                  isDisabled={selectedUseCaseIndex === null}
                >
                  Use This Use Case
                </Button>
              </>
            )}
          </ModalFooter>
        </ModalContent>
      </Modal>
    </div>
  );
}
