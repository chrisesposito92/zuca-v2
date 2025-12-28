"use client";

import {
  Button,
  Input,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  Textarea,
  addToast,
  useDisclosure,
} from "@heroui/react";
import { useState } from "react";
import { usePathname } from "next/navigation";

interface BugReportModalProps {
  /** Optional session ID to include in the report */
  sessionId?: string;
  /** Custom trigger button, defaults to floating bug icon */
  trigger?: React.ReactNode;
}

export function BugReportModal({ sessionId, trigger }: BugReportModalProps) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const pathname = usePathname();

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [steps, setSteps] = useState("");
  const [expected, setExpected] = useState("");
  const [actual, setActual] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async () => {
    if (!title.trim() || !description.trim()) {
      addToast({
        title: "Missing fields",
        description: "Please provide a title and description",
        color: "warning",
      });
      return;
    }

    setIsSubmitting(true);
    try {
      const response = await fetch("/api/bug-report", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          title: title.trim(),
          description: description.trim(),
          steps: steps.trim() || undefined,
          expected: expected.trim() || undefined,
          actual: actual.trim() || undefined,
          sessionId,
          pageUrl: typeof window !== "undefined" ? window.location.href : pathname,
          userAgent: typeof navigator !== "undefined" ? navigator.userAgent : undefined,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Failed to submit bug report");
      }

      addToast({
        title: "Bug report submitted",
        description: `Issue #${data.issue.number} created. Thank you!`,
        color: "success",
      });

      // Reset form and close
      resetForm();
      onClose();
    } catch (error) {
      console.error("Bug report error:", error);
      addToast({
        title: "Error",
        description: error instanceof Error ? error.message : "Failed to submit bug report",
        color: "danger",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const resetForm = () => {
    setTitle("");
    setDescription("");
    setSteps("");
    setExpected("");
    setActual("");
  };

  const handleClose = () => {
    resetForm();
    onClose();
  };

  return (
    <>
      {/* Trigger */}
      {trigger ? (
        <div onClick={onOpen}>{trigger}</div>
      ) : (
        <Button
          isIconOnly
          size="sm"
          variant="flat"
          className="fixed bottom-6 right-6 z-50 bg-danger/20 text-danger hover:bg-danger/30 shadow-lg"
          onPress={onOpen}
          aria-label="Report a bug"
        >
          <BugIcon className="w-5 h-5" />
        </Button>
      )}

      {/* Modal */}
      <Modal
        isOpen={isOpen}
        onClose={handleClose}
        size="2xl"
        scrollBehavior="inside"
        classNames={{
          backdrop: "bg-[#050a08]/80 backdrop-blur-sm",
          base: "glass-card-elevated max-h-[90vh]",
          body: "py-4",
        }}
      >
        <ModalContent>
          <ModalHeader className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-danger/20 flex items-center justify-center">
              <BugIcon className="w-5 h-5 text-danger" />
            </div>
            <div>
              <h2 className="text-lg font-semibold">Report a Bug</h2>
              <p className="text-xs text-default-500 font-normal">
                Help us improve by reporting issues you encounter
              </p>
            </div>
          </ModalHeader>

          <ModalBody className="space-y-4">
            {/* Title */}
            <Input
              label="Title"
              placeholder="Brief summary of the issue"
              value={title}
              onValueChange={setTitle}
              variant="bordered"
              isRequired
              labelPlacement="outside"
              classNames={{
                inputWrapper: "bg-default-100/50",
              }}
            />

            {/* Description */}
            <Textarea
              label="Description"
              placeholder="Describe the bug in detail..."
              value={description}
              onValueChange={setDescription}
              variant="bordered"
              isRequired
              labelPlacement="outside"
              minRows={3}
              classNames={{
                inputWrapper: "bg-default-100/50",
              }}
            />

            {/* Steps to Reproduce */}
            <Textarea
              label="Steps to Reproduce"
              placeholder="1. Go to...&#10;2. Click on...&#10;3. Observe..."
              value={steps}
              onValueChange={setSteps}
              variant="bordered"
              labelPlacement="outside"
              minRows={2}
              classNames={{
                inputWrapper: "bg-default-100/50",
              }}
            />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Expected Behavior */}
              <Textarea
                label="Expected Behavior"
                placeholder="What should happen?"
                value={expected}
                onValueChange={setExpected}
                variant="bordered"
                labelPlacement="outside"
                minRows={2}
                classNames={{
                  inputWrapper: "bg-default-100/50",
                }}
              />

              {/* Actual Behavior */}
              <Textarea
                label="Actual Behavior"
                placeholder="What actually happened?"
                value={actual}
                onValueChange={setActual}
                variant="bordered"
                labelPlacement="outside"
                minRows={2}
                classNames={{
                  inputWrapper: "bg-default-100/50",
                }}
              />
            </div>

            {/* Context info */}
            <div className="rounded-lg bg-default-100/50 p-3 text-xs text-default-500 space-y-1">
              <p className="font-medium text-default-600">Additional info included automatically:</p>
              <ul className="list-disc list-inside space-y-0.5">
                <li>Current page URL</li>
                <li>Browser information</li>
                {sessionId && <li>Session ID: {sessionId.slice(0, 8)}...</li>}
              </ul>
            </div>
          </ModalBody>

          <ModalFooter>
            <Button
              variant="light"
              onPress={handleClose}
              isDisabled={isSubmitting}
            >
              Cancel
            </Button>
            <Button
              color="danger"
              onPress={handleSubmit}
              isLoading={isSubmitting}
              startContent={
                !isSubmitting && (
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
                      d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                    />
                  </svg>
                )
              }
            >
              Submit Report
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

function BugIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
      />
      <circle cx="12" cy="8" r="3" strokeWidth={2} />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M12 11v4m0 4v.01M9 8H4m16 0h-5M5 15l2-1m12 1l-2-1M5 9l2 1m12-1l-2 1"
      />
    </svg>
  );
}

// Also export a simple bug report button for use in other places
export function BugReportButton({
  sessionId,
  className,
}: {
  sessionId?: string;
  className?: string;
}) {
  return (
    <BugReportModal
      sessionId={sessionId}
      trigger={
        <Button
          size="sm"
          variant="flat"
          className={`bg-danger/10 text-danger hover:bg-danger/20 ${className}`}
          startContent={<BugIcon className="w-4 h-4" />}
        >
          Report Bug
        </Button>
      }
    />
  );
}
