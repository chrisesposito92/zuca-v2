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
  addToast,
} from "@heroui/react";
import { useState, useRef } from "react";
import { useAnalyze, formDataToZucaInput } from "@/hooks/useAnalyze";
import { useUCGenerator } from "@/hooks/useUCGenerator";
import type { UCGeneratorInput, GeneratedUseCase, UCRevRecNote } from "@zuca/types/uc-generator";

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

// Section icon component
const SectionIcon = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => (
  <div className={`w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center text-primary ${className}`}>
    {children}
  </div>
);

export default function AnalyzePage() {
  const [isAllocations, setIsAllocations] = useState(false);
  const [allocationMethod, setAllocationMethod] = useState<string>("");
  const formRef = useRef<HTMLFormElement>(null);

  // UC Generator modal state
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [ucInput, setUcInput] = useState<UCGeneratorInput>({
    customer_name: "",
    customer_website: "",
    num_use_cases: 2,
  });
  const [generatedUseCases, setGeneratedUseCases] = useState<GeneratedUseCase[]>([]);

  // Mutations
  const analyzeMutation = useAnalyze();
  const ucGeneratorMutation = useUCGenerator();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    formData.set("is_allocations", String(isAllocations));

    try {
      const input = formDataToZucaInput(formData);
      await analyzeMutation.mutateAsync(input);
    } catch (error) {
      const err = error as { error?: string; details?: string };
      addToast({
        title: "Analysis Failed",
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
    onOpen();
  };

  const handleGenerateUseCases = async () => {
    try {
      const result = await ucGeneratorMutation.mutateAsync(ucInput);
      setGeneratedUseCases(result.result.use_cases);
    } catch (error) {
      const err = error as { error?: string; details?: string };
      addToast({
        title: "Generation Failed",
        description: err.details || err.error || "An error occurred",
        color: "danger",
      });
    }
  };

  const formatRevRecNotes = (notes: UCRevRecNote[]): string => {
    return notes
      .map((n) => `${n.charge_group}: ${n.notes} (${n.likely_pob_type}, ${n.confidence} confidence)`)
      .join("\n");
  };

  const handleSelectUseCase = (useCase: GeneratedUseCase) => {
    if (!formRef.current) return;

    const otr = useCase.otr_workflow_inputs;

    const customerNameInput = formRef.current.querySelector<HTMLInputElement>('[name="customer_name"]');
    const contractDateInput = formRef.current.querySelector<HTMLInputElement>('[name="contract_start_date"]');
    const useCaseInput = formRef.current.querySelector<HTMLTextAreaElement>('[name="use_case_description"]');
    const termsInput = formRef.current.querySelector<HTMLInputElement>('[name="terms_months"]');
    const currencySelect = formRef.current.querySelector<HTMLSelectElement>('[name="transaction_currency"]');
    const billingSelect = formRef.current.querySelector<HTMLSelectElement>('[name="billing_period"]');
    const revRecNotesInput = formRef.current.querySelector<HTMLTextAreaElement>('[name="rev_rec_notes"]');

    if (customerNameInput) customerNameInput.value = otr.customer_name;
    if (contractDateInput) contractDateInput.value = otr.contract_start_date;
    if (useCaseInput) useCaseInput.value = otr.use_case;
    if (termsInput) termsInput.value = String(otr.terms_months);
    if (currencySelect) {
      const event = new Event("change", { bubbles: true });
      currencySelect.value = otr.transaction_currency;
      currencySelect.dispatchEvent(event);
    }
    if (billingSelect) {
      const event = new Event("change", { bubbles: true });
      billingSelect.value = otr.billing_period;
      billingSelect.dispatchEvent(event);
    }
    if (revRecNotesInput && otr.rev_rec_notes?.length > 0) {
      revRecNotesInput.value = formatRevRecNotes(otr.rev_rec_notes);
    }

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
            <span className="gradient-text">New Analysis</span>
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

      {/* Analysis in progress */}
      {analyzeMutation.isPending && (
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
                <h3 className="font-semibold text-lg">Running Analysis Pipeline</h3>
                <p className="text-default-500">Processing your use case through all pipeline steps...</p>
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
            <p className="text-sm text-default-400 mt-3">
              This typically takes 30-60 seconds. You&apos;ll be redirected when complete.
            </p>
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
                  isDisabled={analyzeMutation.isPending}
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
                  isDisabled={analyzeMutation.isPending}
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
                isDisabled={analyzeMutation.isPending}
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
                  isDisabled={analyzeMutation.isPending}
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
                  isDisabled={analyzeMutation.isPending}
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
                  isDisabled={analyzeMutation.isPending}
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
                  isDisabled={analyzeMutation.isPending}
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
                    isDisabled={analyzeMutation.isPending}
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
                      isDisabled={analyzeMutation.isPending}
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
                isDisabled={analyzeMutation.isPending}
                classNames={{
                  inputWrapper: "border-default-200 hover:border-primary/50 focus-within:border-primary",
                }}
              />
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
              isDisabled={analyzeMutation.isPending}
            >
              Clear Form
            </Button>
            <Button
              type="submit"
              color="primary"
              size="lg"
              className="px-8 font-semibold teal-glow-subtle"
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
        onClose={onClose}
        scrollBehavior="inside"
        classNames={{
          backdrop: "bg-[#050a08]/80 backdrop-blur-sm",
          base: "glass-card-elevated",
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
                    labelPlacement="outside"
                    variant="bordered"
                    size="lg"
                    isDisabled={ucGeneratorMutation.isPending}
                    classNames={{
                      inputWrapper: "border-default-200 hover:border-primary/50 focus-within:border-primary",
                    }}
                  />
                </div>

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
                      <p className="text-sm text-default-500 mt-3">
                        This typically takes 15-30 seconds.
                      </p>
                    </CardBody>
                  </Card>
                )}
              </div>
            ) : (
              <div className="space-y-4">
                <p className="text-sm text-default-500">
                  Select a use case to auto-fill the analysis form:
                </p>
                {generatedUseCases.map((useCase, index) => {
                  const chargeGroups = [...new Set(
                    useCase.otr_workflow_inputs.rev_rec_notes.map((n) => n.charge_group)
                  )];
                  const preview = useCase.otr_workflow_inputs.use_case.slice(0, 200);

                  return (
                    <Card
                      key={index}
                      isPressable
                      onPress={() => handleSelectUseCase(useCase)}
                      className="glass-card border-glow"
                    >
                      <CardBody className="p-5 space-y-3">
                        <div className="flex items-start justify-between">
                          <h4 className="font-semibold text-lg">{useCase.label}</h4>
                          <Chip size="sm" variant="flat" color="secondary">
                            {useCase.otr_workflow_inputs.terms_months} months
                          </Chip>
                        </div>
                        <p className="text-sm text-default-600 leading-relaxed">
                          {preview}{preview.length >= 200 ? "..." : ""}
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {chargeGroups.map((group, i) => (
                            <Chip key={i} size="sm" variant="bordered" className="border-default-300">
                              {group}
                            </Chip>
                          ))}
                        </div>
                        {useCase.assumptions.length > 0 && (
                          <p className="text-xs text-default-400">
                            {useCase.assumptions.length} assumptions included
                          </p>
                        )}
                      </CardBody>
                    </Card>
                  );
                })}
              </div>
            )}
          </ModalBody>
          <ModalFooter className="pb-6">
            <Button variant="light" onPress={onClose}>
              Cancel
            </Button>
            {generatedUseCases.length === 0 ? (
              <Button
                color="secondary"
                className="font-semibold"
                onPress={handleGenerateUseCases}
                isLoading={ucGeneratorMutation.isPending}
                isDisabled={!ucInput.customer_name}
              >
                Generate
              </Button>
            ) : (
              <Button
                variant="bordered"
                onPress={() => setGeneratedUseCases([])}
              >
                Start Over
              </Button>
            )}
          </ModalFooter>
        </ModalContent>
      </Modal>
    </div>
  );
}
