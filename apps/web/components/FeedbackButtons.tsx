"use client";

import { Button, Textarea, Tooltip, addToast, Chip } from "@heroui/react";
import { useState } from "react";

export type FeedbackTargetType =
  | "session"
  | "summary"
  | "contracts"
  | "billings"
  | "revrec";
export type FeedbackRating = "positive" | "negative";

// Preset categories for negative feedback (Glean-style)
const NEGATIVE_CATEGORIES = [
  { id: "incomplete", label: "Incomplete or missing info" },
  { id: "inaccurate", label: "Inaccurate response" },
  { id: "outdated", label: "Outdated information" },
  { id: "irrelevant", label: "Not relevant to my question" },
  { id: "confusing", label: "Confusing or unclear" },
  { id: "other", label: "Other" },
] as const;

interface FeedbackButtonsProps {
  sessionId: string;
  targetType: FeedbackTargetType;
  /** Optional label to show above the buttons */
  label?: string;
  /** Size variant */
  size?: "sm" | "md";
  /** Optional callback when feedback is submitted */
  onFeedbackSubmitted?: (
    rating: FeedbackRating,
    categories?: string[],
    comment?: string
  ) => void;
}

export function FeedbackButtons({
  sessionId,
  targetType,
  label = "Was this helpful?",
  size = "sm",
  onFeedbackSubmitted,
}: FeedbackButtonsProps) {
  const [submitted, setSubmitted] = useState<FeedbackRating | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [expandedRating, setExpandedRating] = useState<FeedbackRating | null>(
    null
  );
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [comment, setComment] = useState("");

  const submitFeedback = async (
    rating: FeedbackRating,
    categories?: string[],
    feedbackComment?: string
  ) => {
    setIsSubmitting(true);
    try {
      const response = await fetch("/api/feedback", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          session_id: sessionId,
          target_type: targetType,
          rating,
          categories: categories?.length ? categories : undefined,
          comment: feedbackComment || undefined,
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to submit feedback");
      }

      setSubmitted(rating);
      setExpandedRating(null);
      setSelectedCategories([]);
      setComment("");

      addToast({
        title: "Thank you!",
        description: "Your feedback helps us improve.",
        color: "success",
      });

      onFeedbackSubmitted?.(rating, categories, feedbackComment);
    } catch (error) {
      console.error("Feedback error:", error);
      addToast({
        title: "Error",
        description: "Failed to submit feedback. Please try again.",
        color: "danger",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleThumbsUp = () => {
    setExpandedRating("positive");
  };

  const handleThumbsDown = () => {
    setExpandedRating("negative");
  };

  const handleSubmitFeedback = () => {
    if (expandedRating) {
      submitFeedback(expandedRating, selectedCategories, comment || undefined);
    }
  };

  const handleCancel = () => {
    setExpandedRating(null);
    setSelectedCategories([]);
    setComment("");
  };

  const toggleCategory = (categoryId: string) => {
    setSelectedCategories((prev) =>
      prev.includes(categoryId)
        ? prev.filter((c) => c !== categoryId)
        : [...prev, categoryId]
    );
  };

  // Already submitted - show thank you state
  if (submitted) {
    return (
      <div className="flex items-center gap-2 text-default-400">
        <svg
          className="w-4 h-4 text-success"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M5 13l4 4L19 7"
          />
        </svg>
        <span className="text-sm">Thanks for your feedback!</span>
      </div>
    );
  }

  // Expanded feedback form (for both positive and negative)
  if (expandedRating) {
    const isNegative = expandedRating === "negative";

    return (
      <div className="space-y-4 max-w-md animate-fade-in-up p-4 rounded-lg bg-default-100/50 border border-default-200">
        {/* Header */}
        <div className="space-y-1">
          <h4 className="text-sm font-medium text-default-700">
            Thanks for your feedback
          </h4>
          <div className="flex items-center gap-2 text-sm text-default-500">
            {isNegative ? (
              <>
                <span>You found this</span>
                <span className="inline-flex items-center gap-1">
                  <ThumbsDownIcon className="w-4 h-4 text-danger" />
                  <span className="font-medium text-danger">Not helpful</span>
                </span>
              </>
            ) : (
              <>
                <span>You found this</span>
                <span className="inline-flex items-center gap-1">
                  <ThumbsUpIcon className="w-4 h-4 text-success" />
                  <span className="font-medium text-success">Helpful</span>
                </span>
              </>
            )}
          </div>
        </div>

        {/* Category chips (only for negative feedback) */}
        {isNegative && (
          <div className="space-y-2">
            <p className="text-sm font-medium text-default-600">Tell us more</p>
            <div className="flex flex-wrap gap-2">
              {NEGATIVE_CATEGORIES.map((category) => (
                <Chip
                  key={category.id}
                  variant={
                    selectedCategories.includes(category.id)
                      ? "solid"
                      : "bordered"
                  }
                  color={
                    selectedCategories.includes(category.id)
                      ? "danger"
                      : "default"
                  }
                  className="cursor-pointer transition-all hover:scale-105"
                  onClick={() => toggleCategory(category.id)}
                >
                  {category.label}
                </Chip>
              ))}
            </div>
          </div>
        )}

        {/* Comment textarea */}
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <p className="text-sm font-medium text-default-600">
              {isNegative ? "Share additional details" : "What did you like?"}
            </p>
            <span className="text-xs text-default-400">Optional</span>
          </div>
          <Textarea
            placeholder={
              isNegative
                ? "Tell us what went wrong or how we can improve..."
                : "Tell us what was helpful or what you liked..."
            }
            value={comment}
            onValueChange={setComment}
            variant="bordered"
            minRows={2}
            maxRows={4}
            classNames={{
              inputWrapper: "bg-default-50 border-default-300",
            }}
          />
        </div>

        {/* Action buttons */}
        <div className="flex gap-2 pt-1">
          <Button
            size="sm"
            color={isNegative ? "danger" : "success"}
            variant="flat"
            isLoading={isSubmitting}
            onPress={handleSubmitFeedback}
          >
            Submit Feedback
          </Button>
          <Button
            size="sm"
            variant="light"
            onPress={handleCancel}
            isDisabled={isSubmitting}
          >
            Cancel
          </Button>
        </div>
      </div>
    );
  }

  // Default state - show thumbs up/down buttons
  const buttonSize = size === "sm" ? "sm" : "md";
  const iconSize = size === "sm" ? "w-4 h-4" : "w-5 h-5";

  return (
    <div className="flex items-center gap-3">
      {label && <span className="text-default-400 text-sm">{label}</span>}
      <div className="flex items-center gap-1">
        <Tooltip content="Helpful" delay={500}>
          <Button
            isIconOnly
            size={buttonSize}
            variant="light"
            className="text-default-400 hover:text-success hover:bg-success/10"
            onPress={handleThumbsUp}
            isDisabled={isSubmitting}
          >
            <ThumbsUpIcon className={iconSize} />
          </Button>
        </Tooltip>
        <Tooltip content="Not helpful" delay={500}>
          <Button
            isIconOnly
            size={buttonSize}
            variant="light"
            className="text-default-400 hover:text-danger hover:bg-danger/10"
            onPress={handleThumbsDown}
            isDisabled={isSubmitting}
          >
            <ThumbsDownIcon className={iconSize} />
          </Button>
        </Tooltip>
      </div>
    </div>
  );
}

// Icon components
function ThumbsUpIcon({ className }: { className?: string }) {
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
        d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5"
      />
    </svg>
  );
}

function ThumbsDownIcon({ className }: { className?: string }) {
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
        d="M10 14H5.236a2 2 0 01-1.789-2.894l3.5-7A2 2 0 018.736 3h4.018a2 2 0 01.485.06l3.76.94m-7 10v5a2 2 0 002 2h.096c.5 0 .905-.405.905-.904 0-.715.211-1.413.608-2.008L17 13V4m-7 10h2m5-10h2a2 2 0 012 2v6a2 2 0 01-2 2h-2.5"
      />
    </svg>
  );
}
