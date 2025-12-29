"use client";

import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Input,
  Select,
  SelectItem,
  Textarea,
  Progress,
  addToast,
} from "@heroui/react";
import { useState, useRef } from "react";
import { useRouter } from "next/navigation";
import { useUCGenerator } from "@/hooks/useUCGenerator";
import { useCompanyFunFacts } from "@/hooks/useCompanyFunFacts";
import type { UCGeneratorInput, CallTranscript } from "@zuca/types/uc-generator";

// Default model from environment variable (falls back to gpt-5.2)
const DEFAULT_MODEL = process.env.NEXT_PUBLIC_DEFAULT_MODEL || "gpt-5.2";

// Model options with estimated times from benchmarks
const ucGeneratorModelOptions = [
  { key: "gpt-5.2", label: "GPT-5.2", time: "~3 min", description: "Most detailed research" },
  { key: "gemini-3-pro-preview", label: "Gemini 3 Pro", time: "~1 min", description: "Balanced quality and speed" },
  { key: "gemini-3-flash-preview", label: "Gemini 3 Flash", time: "~30 sec", description: "Fastest generation" },
];

const MAX_TRANSCRIPT_FILES = 5;
const MAX_TRANSCRIPT_CHARS = 50000;
const MAX_TOTAL_TRANSCRIPT_CHARS = 150000;

type CallTranscriptUpload = CallTranscript & {
  size: number;
  truncated?: boolean;
};

export default function UCGeneratePage() {
  const router = useRouter();
  const transcriptInputRef = useRef<HTMLInputElement>(null);

  // Form state
  const [ucInput, setUcInput] = useState<UCGeneratorInput>({
    customer_name: "",
    customer_website: "",
    num_use_cases: 2,
  });
  const [ucModel, setUcModel] = useState<string>(DEFAULT_MODEL);
  const [callTranscripts, setCallTranscripts] = useState<CallTranscriptUpload[]>([]);
  const [transcriptsLoading, setTranscriptsLoading] = useState(false);

  // Mutation
  const ucGeneratorMutation = useUCGenerator();

  // Company-specific fun facts for loading
  const {
    fetchFacts: fetchCompanyFacts,
    currentFact: companyFact,
    isLoading: factsLoading,
    isReady: factsReady,
    reset: resetFacts,
  } = useCompanyFunFacts({ interval: 10000 });

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

      // Navigate to the solution page to view the results
      if (result.session_id) {
        router.push(`/solution/${result.session_id}`);
      }
    } catch (error) {
      const err = error as { error?: string; details?: string };
      addToast({
        title: "Generation Failed",
        description: err.details || err.error || "An error occurred",
        color: "danger",
      });
      resetFacts();
    }
  };

  const handleClear = () => {
    setUcInput({
      customer_name: "",
      customer_website: "",
      num_use_cases: 2,
    });
    setCallTranscripts([]);
    if (transcriptInputRef.current) {
      transcriptInputRef.current.value = "";
    }
    resetFacts();
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <div className="flex items-center gap-3 mb-2">
          <div className="w-10 h-10 rounded-xl bg-secondary/20 flex items-center justify-center">
            <svg className="w-5 h-5 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
            </svg>
          </div>
          <div>
            <h1 className="text-3xl font-bold tracking-tight">
              <span className="gradient-text">Use Case Generator</span>
            </h1>
            <p className="text-default-500 mt-1">
              Research a customer&apos;s website to auto-generate demo-ready use cases
            </p>
          </div>
        </div>
      </div>

      {/* Form Card */}
      <Card className="glass-card">
        <CardHeader className="px-6 pt-6 pb-0">
          <h2 className="text-lg font-semibold flex items-center gap-2">
            <span className="w-1.5 h-1.5 bg-secondary rounded-full" />
            Customer Information
          </h2>
        </CardHeader>
        <CardBody className="p-6 space-y-6">
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
              labelPlacement="outside"
              variant="bordered"
              size="lg"
              isDisabled={ucGeneratorMutation.isPending}
              classNames={{
                inputWrapper: "border-default-200 hover:border-primary/50 focus-within:border-primary",
              }}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Select
              label="Number of Use Cases"
              selectedKeys={[String(ucInput.num_use_cases)]}
              onSelectionChange={(keys) =>
                setUcInput((prev) => ({
                  ...prev,
                  num_use_cases: parseInt(Array.from(keys)[0] as string, 10) as 1 | 2 | 3,
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
            </Select>

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
            classNames={{
              inputWrapper: "border-default-200 hover:border-primary/50 focus-within:border-primary",
            }}
          />

          <div className="space-y-3">
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

          {/* Loading State */}
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

          {/* Action Buttons */}
          <div className="flex justify-end gap-3 pt-4">
            <Button
              variant="light"
              onPress={handleClear}
              isDisabled={ucGeneratorMutation.isPending}
            >
              Clear Form
            </Button>
            <Button
              color="secondary"
              className="font-semibold"
              onPress={handleGenerateUseCases}
              isLoading={ucGeneratorMutation.isPending}
              isDisabled={!ucInput.customer_name || transcriptsLoading}
              startContent={
                !ucGeneratorMutation.isPending && (
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                )
              }
            >
              Generate Use Cases
            </Button>
          </div>
        </CardBody>
      </Card>

      {/* Info Card */}
      <Card className="glass-card">
        <CardBody className="p-6">
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-xl bg-primary/20 flex items-center justify-center shrink-0">
              <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div>
              <h3 className="font-semibold text-foreground mb-2">How it works</h3>
              <ol className="space-y-2 text-sm text-default-600">
                <li className="flex items-start gap-2">
                  <span className="w-5 h-5 rounded-full bg-secondary/20 text-secondary flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">1</span>
                  <span>Enter the customer name and optionally their website URL</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-5 h-5 rounded-full bg-secondary/20 text-secondary flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">2</span>
                  <span>Optionally upload discovery call transcripts for more context</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-5 h-5 rounded-full bg-secondary/20 text-secondary flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">3</span>
                  <span>ZUCA researches their pricing page and generates demo-ready use cases</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-5 h-5 rounded-full bg-secondary/20 text-secondary flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">4</span>
                  <span>Export to Markdown/Word or use directly in Use Case Analysis</span>
                </li>
              </ol>
            </div>
          </div>
        </CardBody>
      </Card>
    </div>
  );
}
