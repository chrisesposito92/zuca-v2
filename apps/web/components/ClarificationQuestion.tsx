"use client";

import { Button, Card, CardBody, CardHeader, RadioGroup, Radio, Textarea, Chip } from "@heroui/react";
import { useState } from "react";
import type { ClarificationQuestion, ClarificationAnswer } from "@zuca/types/clarification";

interface ClarificationQuestionProps {
  question: ClarificationQuestion;
  sessionId: string;
  onAnswer: (answer: ClarificationAnswer) => void;
  isSubmitting: boolean;
}

const priorityColors: Record<string, "danger" | "warning" | "default"> = {
  critical: "danger",
  important: "warning",
  helpful: "default",
};

const priorityLabels: Record<string, string> = {
  critical: "Critical Question",
  important: "Important Question",
  helpful: "Optional Question",
};

export function ClarificationQuestionCard({
  question,
  sessionId,
  onAnswer,
  isSubmitting,
}: ClarificationQuestionProps) {
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [freeText, setFreeText] = useState("");
  const [showFreeText, setShowFreeText] = useState(false);

  const handleSubmit = () => {
    if (!selectedOption && !freeText.trim()) return;

    const answer: ClarificationAnswer = {
      questionId: question.questionId,
      selectedOptionId: selectedOption || undefined,
      freeTextResponse: freeText.trim() || undefined,
      skipped: false,
    };
    onAnswer(answer);
  };

  const handleSkip = () => {
    const answer: ClarificationAnswer = {
      questionId: question.questionId,
      skipped: true,
    };
    onAnswer(answer);
  };

  const canSubmit = selectedOption || freeText.trim();

  return (
    <Card className="glass-card-elevated max-w-2xl mx-auto">
      <CardHeader className="flex flex-col items-start gap-2 pb-2">
        <div className="flex items-center gap-2">
          <Chip
            color={priorityColors[question.priority]}
            variant="flat"
            size="sm"
          >
            {priorityLabels[question.priority]}
          </Chip>
          <span className="text-xs text-gray-400">
            Step: {question.stepName.replace(/_/g, " ")}
          </span>
        </div>
      </CardHeader>
      <CardBody className="space-y-4">
        {/* Question */}
        <h3 className="text-lg font-semibold text-foreground">
          {question.question}
        </h3>

        {/* Context */}
        {question.context && (
          <p className="text-sm text-gray-400 bg-gray-800/50 p-3 rounded-lg">
            {question.context}
          </p>
        )}

        {/* Options */}
        <RadioGroup
          value={selectedOption || ""}
          onValueChange={(value) => {
            setSelectedOption(value);
            setShowFreeText(false);
          }}
          className="gap-3"
        >
          {question.options.map((opt) => (
            <Radio
              key={opt.id}
              value={opt.id}
              classNames={{
                base: "max-w-full p-3 border-2 border-gray-700 rounded-lg hover:border-primary data-[selected=true]:border-primary",
                label: "text-foreground",
                description: "text-gray-400",
              }}
              description={opt.description}
            >
              {opt.label}
            </Radio>
          ))}
        </RadioGroup>

        {/* Free text option */}
        {question.allowFreeText && (
          <div className="pt-2 border-t border-gray-700">
            {!showFreeText ? (
              <Button
                variant="light"
                size="sm"
                onPress={() => {
                  setShowFreeText(true);
                  setSelectedOption(null);
                }}
              >
                Or describe in your own words...
              </Button>
            ) : (
              <div className="space-y-2">
                <Textarea
                  value={freeText}
                  onValueChange={setFreeText}
                  placeholder="Type your answer here..."
                  minRows={2}
                  classNames={{
                    input: "bg-gray-800",
                    inputWrapper: "bg-gray-800 border-gray-700",
                  }}
                />
                <Button
                  variant="light"
                  size="sm"
                  onPress={() => {
                    setShowFreeText(false);
                    setFreeText("");
                  }}
                >
                  Cancel
                </Button>
              </div>
            )}
          </div>
        )}

        {/* Actions */}
        <div className="flex items-center justify-between pt-4 border-t border-gray-700">
          {question.allowSkip && (
            <Button
              variant="light"
              color="default"
              onPress={handleSkip}
              isDisabled={isSubmitting}
            >
              I don&apos;t know - use best judgment
            </Button>
          )}
          <div className="flex-1" />
          <Button
            color="primary"
            onPress={handleSubmit}
            isDisabled={!canSubmit || isSubmitting}
            isLoading={isSubmitting}
          >
            {isSubmitting ? "Continuing..." : "Continue"}
          </Button>
        </div>
      </CardBody>
    </Card>
  );
}
