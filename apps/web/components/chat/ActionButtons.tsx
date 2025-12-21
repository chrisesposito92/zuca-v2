"use client";

import {
  Button,
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Input,
  Textarea,
  Select,
  SelectItem,
  useDisclosure,
  addToast,
} from "@heroui/react";
import { useState } from "react";
import { useEditField, useRegenerate } from "@/hooks/useSessions";

interface ActionButtonsProps {
  sessionId: string;
  currentInput: Record<string, unknown>;
  onActionComplete?: () => void;
}

// Fields that can be edited
const EDITABLE_FIELDS = [
  { key: "customer_name", label: "Customer Name", type: "text" },
  { key: "contract_start_date", label: "Contract Start Date", type: "date" },
  { key: "terms_months", label: "Term (Months)", type: "number" },
  { key: "use_case_description", label: "Use Case Description", type: "textarea" },
  { key: "transaction_currency", label: "Currency", type: "text" },
  { key: "billing_period", label: "Billing Period", type: "select", options: ["Monthly", "Quarterly", "Annually"] },
  { key: "is_allocations", label: "Enable Allocations", type: "boolean" },
] as const;

export function ActionButtons({ sessionId, currentInput, onActionComplete }: ActionButtonsProps) {
  const editModal = useDisclosure();
  const regenerateModal = useDisclosure();

  const [selectedField, setSelectedField] = useState<string>("");
  const [fieldValue, setFieldValue] = useState<string>("");

  const editMutation = useEditField(sessionId);
  const regenerateMutation = useRegenerate(sessionId);

  const handleEditField = async () => {
    if (!selectedField) return;

    try {
      let value: unknown = fieldValue;

      // Convert types as needed
      const fieldConfig = EDITABLE_FIELDS.find((f) => f.key === selectedField);
      if (fieldConfig?.type === "number") {
        value = parseInt(fieldValue, 10);
      } else if (fieldConfig?.type === "boolean") {
        value = fieldValue === "true";
      }

      await editMutation.mutateAsync({ field: selectedField, value });

      addToast({
        title: "Field Updated",
        description: "The analysis is being re-run with your changes.",
        color: "success",
      });

      editModal.onClose();
      setSelectedField("");
      setFieldValue("");
      onActionComplete?.();
    } catch {
      addToast({
        title: "Error",
        description: "Failed to update field.",
        color: "danger",
      });
    }
  };

  const handleRegenerate = async () => {
    try {
      await regenerateMutation.mutateAsync(undefined);

      addToast({
        title: "Regenerating",
        description: "Running full analysis from scratch.",
        color: "success",
      });

      regenerateModal.onClose();
      onActionComplete?.();
    } catch {
      addToast({
        title: "Error",
        description: "Failed to regenerate.",
        color: "danger",
      });
    }
  };

  const handleFieldSelect = (key: string) => {
    setSelectedField(key);
    const currentValue = currentInput[key];
    if (currentValue !== undefined && currentValue !== null) {
      setFieldValue(String(currentValue));
    } else {
      setFieldValue("");
    }
    editModal.onOpen();
  };

  const selectedFieldConfig = EDITABLE_FIELDS.find((f) => f.key === selectedField);

  return (
    <>
      <div className="flex gap-2 w-full">
        <Dropdown>
          <DropdownTrigger>
            <Button
              variant="bordered"
              size="sm"
              className="flex-1 border-default-300 hover:border-primary hover:bg-primary/5"
              startContent={
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                </svg>
              }
            >
              Edit Field
            </Button>
          </DropdownTrigger>
          <DropdownMenu
            aria-label="Edit field options"
            onAction={(key) => handleFieldSelect(key as string)}
            classNames={{
              base: "bg-content1 border border-default-200",
            }}
          >
            {EDITABLE_FIELDS.map((field) => (
              <DropdownItem key={field.key} className="text-sm">
                {field.label}
              </DropdownItem>
            ))}
          </DropdownMenu>
        </Dropdown>

        <Button
          variant="bordered"
          size="sm"
          className="flex-1 border-warning/50 text-warning hover:border-warning hover:bg-warning/10"
          onPress={regenerateModal.onOpen}
          startContent={
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
            </svg>
          }
        >
          Regenerate
        </Button>
      </div>

      {/* Edit Field Modal */}
      <Modal
        isOpen={editModal.isOpen}
        onClose={editModal.onClose}
        classNames={{
          backdrop: "bg-[#050a08]/80 backdrop-blur-sm",
          base: "glass-card-elevated",
        }}
      >
        <ModalContent>
          <ModalHeader className="flex items-center gap-3 pt-6">
            <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
              <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
              </svg>
            </div>
            <span>Edit {selectedFieldConfig?.label}</span>
          </ModalHeader>
          <ModalBody>
            <div className="bg-default-100/50 rounded-lg p-3 mb-4 border border-default-200/50">
              <p className="text-sm text-default-500 flex items-start gap-2">
                <svg className="w-4 h-4 mt-0.5 text-primary flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Only affected pipeline steps will be re-run. This is faster than a full regeneration.
              </p>
            </div>

            {selectedFieldConfig?.type === "textarea" ? (
              <Textarea
                label={selectedFieldConfig.label}
                value={fieldValue}
                onChange={(e) => setFieldValue(e.target.value)}
                minRows={3}
                variant="bordered"
                classNames={{
                  inputWrapper: "border-default-200 hover:border-primary/50 focus-within:border-primary",
                }}
              />
            ) : selectedFieldConfig?.type === "select" ? (
              <Select
                label={selectedFieldConfig.label}
                selectedKeys={fieldValue ? [fieldValue] : []}
                onSelectionChange={(keys) =>
                  setFieldValue(Array.from(keys)[0] as string)
                }
                variant="bordered"
                classNames={{
                  trigger: "border-default-200 hover:border-primary/50 data-[focus=true]:border-primary",
                }}
              >
                {(selectedFieldConfig.options || []).map((opt) => (
                  <SelectItem key={opt}>{opt}</SelectItem>
                ))}
              </Select>
            ) : selectedFieldConfig?.type === "boolean" ? (
              <Select
                label={selectedFieldConfig.label}
                selectedKeys={[fieldValue]}
                onSelectionChange={(keys) =>
                  setFieldValue(Array.from(keys)[0] as string)
                }
                variant="bordered"
                classNames={{
                  trigger: "border-default-200 hover:border-primary/50 data-[focus=true]:border-primary",
                }}
              >
                <SelectItem key="true">Yes</SelectItem>
                <SelectItem key="false">No</SelectItem>
              </Select>
            ) : selectedFieldConfig?.type === "date" ? (
              <Input
                type="text"
                label={selectedFieldConfig.label}
                placeholder="MM/DD/YYYY"
                value={fieldValue}
                onChange={(e) => setFieldValue(e.target.value)}
                variant="bordered"
                classNames={{
                  inputWrapper: "border-default-200 hover:border-primary/50 focus-within:border-primary",
                }}
              />
            ) : selectedFieldConfig?.type === "number" ? (
              <Input
                type="number"
                label={selectedFieldConfig.label}
                value={fieldValue}
                onChange={(e) => setFieldValue(e.target.value)}
                variant="bordered"
                classNames={{
                  inputWrapper: "border-default-200 hover:border-primary/50 focus-within:border-primary",
                }}
              />
            ) : (
              <Input
                label={selectedFieldConfig?.label || "Value"}
                value={fieldValue}
                onChange={(e) => setFieldValue(e.target.value)}
                variant="bordered"
                classNames={{
                  inputWrapper: "border-default-200 hover:border-primary/50 focus-within:border-primary",
                }}
              />
            )}
          </ModalBody>
          <ModalFooter className="pb-6">
            <Button variant="light" onPress={editModal.onClose}>
              Cancel
            </Button>
            <Button
              color="primary"
              onPress={handleEditField}
              isLoading={editMutation.isPending}
              className="font-semibold"
            >
              Update & Re-run
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>

      {/* Regenerate Confirmation Modal */}
      <Modal
        isOpen={regenerateModal.isOpen}
        onClose={regenerateModal.onClose}
        classNames={{
          backdrop: "bg-[#050a08]/80 backdrop-blur-sm",
          base: "glass-card-elevated",
        }}
      >
        <ModalContent>
          <ModalHeader className="flex items-center gap-3 pt-6">
            <div className="w-10 h-10 rounded-full bg-warning/20 flex items-center justify-center">
              <svg className="w-5 h-5 text-warning" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
              </svg>
            </div>
            <span>Regenerate Analysis</span>
          </ModalHeader>
          <ModalBody>
            <p className="text-default-600">
              This will run the full analysis pipeline from scratch. Use this when you need a completely fresh analysis.
            </p>
            <div className="bg-default-100/50 rounded-lg p-3 mt-3 border border-default-200/50">
              <p className="text-sm text-default-500 flex items-start gap-2">
                <svg className="w-4 h-4 mt-0.5 text-primary flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
                For minor changes, consider using "Edit Field" instead — it only re-runs affected steps.
              </p>
            </div>
          </ModalBody>
          <ModalFooter className="pb-6">
            <Button variant="light" onPress={regenerateModal.onClose}>
              Cancel
            </Button>
            <Button
              color="warning"
              onPress={handleRegenerate}
              isLoading={regenerateMutation.isPending}
              className="font-semibold"
            >
              Regenerate
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
