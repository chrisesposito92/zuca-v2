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
  Divider,
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

    // Add the allocation toggle state since Switch doesn't use native form value
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
    // Pre-fill customer name from form
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

  /**
   * Convert UCRevRecNote[] to a string for the rev rec notes field
   */
  const formatRevRecNotes = (notes: UCRevRecNote[]): string => {
    return notes
      .map((n) => `${n.charge_group}: ${n.notes} (${n.likely_pob_type}, ${n.confidence} confidence)`)
      .join("\n");
  };

  const handleSelectUseCase = (useCase: GeneratedUseCase) => {
    if (!formRef.current) return;

    const otr = useCase.otr_workflow_inputs;

    // Fill form fields with generated use case data
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
      // HeroUI Select needs special handling - dispatch change event
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

    // Set allocation state
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
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold">New Analysis</h1>
          <p className="text-default-500">
            Enter your use case details to generate a Zuora billing and revenue solution
          </p>
        </div>
        <Button
          variant="bordered"
          color="secondary"
          startContent={<span>✨</span>}
          onPress={handleOpenUCGenerator}
        >
          Generate Use Cases
        </Button>
      </div>

      {/* Analysis in progress */}
      {analyzeMutation.isPending && (
        <Card className="border-primary">
          <CardBody className="space-y-3">
            <div className="flex items-center gap-3">
              <div className="animate-spin h-5 w-5 border-2 border-primary border-t-transparent rounded-full" />
              <span className="font-medium">Running analysis pipeline...</span>
            </div>
            <Progress
              isIndeterminate
              color="primary"
              size="sm"
              aria-label="Running pipeline"
            />
            <p className="text-sm text-default-500">
              This typically takes 30-60 seconds. You&apos;ll be redirected when complete.
            </p>
          </CardBody>
        </Card>
      )}

      {/* Form */}
      <form ref={formRef} onSubmit={handleSubmit}>
        <div className="grid gap-6">
          {/* Required Fields */}
          <Card>
            <CardHeader>
              <h2 className="text-lg font-semibold">Required Information</h2>
            </CardHeader>
            <CardBody className="space-y-4">
              <Input
                name="customer_name"
                label="Customer Name"
                placeholder="Enter customer name"
                isRequired
                labelPlacement="outside"
                isDisabled={analyzeMutation.isPending}
              />

              <Input
                name="contract_start_date"
                label="Contract Start Date"
                placeholder="MM/DD/YYYY"
                isRequired
                labelPlacement="outside"
                isDisabled={analyzeMutation.isPending}
              />

              <Textarea
                name="use_case_description"
                label="Use Case Description"
                placeholder="Describe the customer's use case, including products, pricing, billing terms, and any special requirements..."
                isRequired
                minRows={4}
                labelPlacement="outside"
                isDisabled={analyzeMutation.isPending}
              />
            </CardBody>
          </Card>

          {/* Contract Settings */}
          <Card>
            <CardHeader>
              <h2 className="text-lg font-semibold">Contract Settings</h2>
            </CardHeader>
            <CardBody className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <Input
                  name="terms_months"
                  type="number"
                  label="Term (Months)"
                  placeholder="12"
                  defaultValue="12"
                  labelPlacement="outside"
                  isDisabled={analyzeMutation.isPending}
                />

                <Select
                  name="transaction_currency"
                  label="Currency"
                  placeholder="Select currency"
                  defaultSelectedKeys={["USD"]}
                  labelPlacement="outside"
                  isDisabled={analyzeMutation.isPending}
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
                  isDisabled={analyzeMutation.isPending}
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
          <Card>
            <CardHeader>
              <h2 className="text-lg font-semibold">Revenue Recognition</h2>
            </CardHeader>
            <CardBody className="space-y-4">
              <div className="flex items-center gap-4">
                <Switch
                  isSelected={isAllocations}
                  onValueChange={setIsAllocations}
                  isDisabled={analyzeMutation.isPending}
                >
                  Enable Allocations
                </Switch>
                <span className="text-sm text-default-500">
                  Enable if this deal requires SSP-based allocation across multiple POBs
                </span>
              </div>

              {isAllocations && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4">
                  <Select
                    name="allocation_method"
                    label="Allocation Method"
                    placeholder="Select allocation method"
                    labelPlacement="outside"
                    selectedKeys={allocationMethod ? [allocationMethod] : []}
                    onSelectionChange={(keys) =>
                      setAllocationMethod(Array.from(keys)[0] as string)
                    }
                    isDisabled={analyzeMutation.isPending}
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
                      isDisabled={analyzeMutation.isPending}
                    />
                  )}
                </div>
              )}

              <Divider className="my-4" />

              <Textarea
                name="rev_rec_notes"
                label="Revenue Recognition Notes (Optional)"
                placeholder="Add any additional notes about revenue recognition requirements..."
                labelPlacement="outside"
                isDisabled={analyzeMutation.isPending}
              />
            </CardBody>
          </Card>

          {/* Submit */}
          <div className="flex justify-end gap-4">
            <Button
              type="button"
              variant="bordered"
              onPress={handleClear}
              isDisabled={analyzeMutation.isPending}
            >
              Clear
            </Button>
            <Button
              type="submit"
              color="primary"
              isLoading={analyzeMutation.isPending}
            >
              Analyze Use Case
            </Button>
          </div>
        </div>
      </form>

      {/* UC Generator Modal */}
      <Modal size="3xl" isOpen={isOpen} onClose={onClose} scrollBehavior="inside">
        <ModalContent>
          <ModalHeader>
            <div>
              <h3 className="text-lg font-semibold">Generate Use Cases</h3>
              <p className="text-sm text-default-500 font-normal">
                Research a customer&apos;s website to auto-generate demo-ready use cases
              </p>
            </div>
          </ModalHeader>
          <ModalBody>
            {generatedUseCases.length === 0 ? (
              <div className="space-y-4">
                <Input
                  label="Customer Name"
                  placeholder="e.g., Slack"
                  value={ucInput.customer_name}
                  onChange={(e) =>
                    setUcInput((prev) => ({ ...prev, customer_name: e.target.value }))
                  }
                  isRequired
                  labelPlacement="outside"
                  isDisabled={ucGeneratorMutation.isPending}
                />

                <Input
                  label="Customer Website"
                  placeholder="e.g., slack.com"
                  value={ucInput.customer_website}
                  onChange={(e) =>
                    setUcInput((prev) => ({ ...prev, customer_website: e.target.value }))
                  }
                  labelPlacement="outside"
                  isDisabled={ucGeneratorMutation.isPending}
                />

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
                  isDisabled={ucGeneratorMutation.isPending}
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
                  isDisabled={ucGeneratorMutation.isPending}
                />

                {ucGeneratorMutation.isPending && (
                  <Card className="border-secondary">
                    <CardBody className="space-y-3">
                      <div className="flex items-center gap-3">
                        <div className="animate-spin h-5 w-5 border-2 border-secondary border-t-transparent rounded-full" />
                        <span className="font-medium">Researching and generating use cases...</span>
                      </div>
                      <Progress
                        isIndeterminate
                        color="secondary"
                        size="sm"
                        aria-label="Generating use cases"
                      />
                      <p className="text-sm text-default-500">
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
                  // Get unique charge groups from rev rec notes
                  const chargeGroups = [...new Set(
                    useCase.otr_workflow_inputs.rev_rec_notes.map((n) => n.charge_group)
                  )];
                  // Truncate use case description for preview
                  const preview = useCase.otr_workflow_inputs.use_case.slice(0, 200);

                  return (
                    <Card
                      key={index}
                      isPressable
                      onPress={() => handleSelectUseCase(useCase)}
                      className="border hover:border-primary transition-colors"
                    >
                      <CardBody className="space-y-2">
                        <div className="flex items-start justify-between">
                          <h4 className="font-semibold">{useCase.label}</h4>
                          <Chip size="sm" variant="flat" color="secondary">
                            {useCase.otr_workflow_inputs.terms_months}mo
                          </Chip>
                        </div>
                        <p className="text-sm text-default-600">
                          {preview}{preview.length >= 200 ? "..." : ""}
                        </p>
                        <div className="flex flex-wrap gap-1">
                          {chargeGroups.map((group, i) => (
                            <Chip key={i} size="sm" variant="bordered">
                              {group}
                            </Chip>
                          ))}
                        </div>
                        {useCase.assumptions.length > 0 && (
                          <p className="text-xs text-default-400">
                            {useCase.assumptions.length} assumptions
                          </p>
                        )}
                      </CardBody>
                    </Card>
                  );
                })}
              </div>
            )}
          </ModalBody>
          <ModalFooter>
            <Button variant="light" onPress={onClose}>
              Cancel
            </Button>
            {generatedUseCases.length === 0 ? (
              <Button
                color="secondary"
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
