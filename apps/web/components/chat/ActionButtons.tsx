"use client";

import {
  Button,
  ButtonGroup,
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
      <ButtonGroup variant="bordered" size="sm">
        <Dropdown>
          <DropdownTrigger>
            <Button>Edit Field</Button>
          </DropdownTrigger>
          <DropdownMenu
            aria-label="Edit field options"
            onAction={(key) => handleFieldSelect(key as string)}
          >
            {EDITABLE_FIELDS.map((field) => (
              <DropdownItem key={field.key}>
                {field.label}
              </DropdownItem>
            ))}
          </DropdownMenu>
        </Dropdown>

        <Button
          color="warning"
          variant="bordered"
          onPress={regenerateModal.onOpen}
        >
          Regenerate
        </Button>
      </ButtonGroup>

      {/* Edit Field Modal */}
      <Modal isOpen={editModal.isOpen} onClose={editModal.onClose}>
        <ModalContent>
          <ModalHeader>Edit {selectedFieldConfig?.label}</ModalHeader>
          <ModalBody>
            <p className="text-sm text-default-500 mb-4">
              Only affected pipeline steps will be re-run. This is faster than a full regeneration.
            </p>

            {selectedFieldConfig?.type === "textarea" ? (
              <Textarea
                label={selectedFieldConfig.label}
                value={fieldValue}
                onChange={(e) => setFieldValue(e.target.value)}
                minRows={3}
              />
            ) : selectedFieldConfig?.type === "select" ? (
              <Select
                label={selectedFieldConfig.label}
                selectedKeys={fieldValue ? [fieldValue] : []}
                onSelectionChange={(keys) =>
                  setFieldValue(Array.from(keys)[0] as string)
                }
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
              />
            ) : selectedFieldConfig?.type === "number" ? (
              <Input
                type="number"
                label={selectedFieldConfig.label}
                value={fieldValue}
                onChange={(e) => setFieldValue(e.target.value)}
              />
            ) : (
              <Input
                label={selectedFieldConfig?.label || "Value"}
                value={fieldValue}
                onChange={(e) => setFieldValue(e.target.value)}
              />
            )}
          </ModalBody>
          <ModalFooter>
            <Button variant="light" onPress={editModal.onClose}>
              Cancel
            </Button>
            <Button
              color="primary"
              onPress={handleEditField}
              isLoading={editMutation.isPending}
            >
              Update & Re-run
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>

      {/* Regenerate Confirmation Modal */}
      <Modal isOpen={regenerateModal.isOpen} onClose={regenerateModal.onClose}>
        <ModalContent>
          <ModalHeader>Regenerate Analysis</ModalHeader>
          <ModalBody>
            <p>
              This will run the full analysis pipeline from scratch. Use this when you need a completely fresh analysis.
            </p>
            <p className="text-sm text-default-500 mt-2">
              For minor changes, consider using "Edit Field" instead - it's faster because it only re-runs affected steps.
            </p>
          </ModalBody>
          <ModalFooter>
            <Button variant="light" onPress={regenerateModal.onClose}>
              Cancel
            </Button>
            <Button
              color="warning"
              onPress={handleRegenerate}
              isLoading={regenerateMutation.isPending}
            >
              Regenerate
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
