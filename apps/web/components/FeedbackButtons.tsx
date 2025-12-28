"use client";

import { Button, Textarea, Tooltip, addToast } from "@heroui/react";
import { useState } from "react";

export type FeedbackTargetType =
  | "session"
  | "summary"
  | "contracts"
  | "billings"
  | "revrec";
export type FeedbackRating = "positive" | "negative";

interface FeedbackButtonsProps {
  sessionId: string;
  targetType: FeedbackTargetType;
  /** Optional label to show above the buttons */
  label?: string;
  /** Size variant */
  size?: "sm" | "md";
  /** Optional callback when feedback is submitted */
  onFeedbackSubmitted?: (rating: FeedbackRating, comment?: string) => void;
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
  const [showCommentInput, setShowCommentInput] = useState(false);
  const [comment, setComment] = useState("");

  const submitFeedback = async (
    rating: FeedbackRating,
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
          comment: feedbackComment,
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to submit feedback");
      }

      setSubmitted(rating);
      setShowCommentInput(false);
      setComment("");

      addToast({
        title: "Thank you!",
        description: "Your feedback helps us improve.",
        color: "success",
      });

      onFeedbackSubmitted?.(rating, feedbackComment);
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
    submitFeedback("positive");
  };

  const handleThumbsDown = () => {
    setShowCommentInput(true);
  };

  const handleSubmitNegativeFeedback = () => {
    submitFeedback("negative", comment || undefined);
  };

  const handleCancelComment = () => {
    setShowCommentInput(false);
    setComment("");
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

  // Showing comment input for negative feedback
  if (showCommentInput) {
    return (
      <div className="space-y-3 max-w-md animate-fade-in-up">
        <div className="flex items-center gap-2 text-default-500 text-sm">
          <ThumbsDownIcon className="w-4 h-4 text-danger" />
          <span>What could be improved?</span>
        </div>
        <Textarea
          placeholder="Optional: Tell us what went wrong or how we can improve..."
          value={comment}
          onValueChange={setComment}
          variant="bordered"
          minRows={2}
          maxRows={4}
          classNames={{
            inputWrapper: "bg-default-100/50 border-default-300",
          }}
        />
        <div className="flex gap-2">
          <Button
            size="sm"
            color="danger"
            variant="flat"
            isLoading={isSubmitting}
            onPress={handleSubmitNegativeFeedback}
          >
            Submit Feedback
          </Button>
          <Button
            size="sm"
            variant="light"
            onPress={handleCancelComment}
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
      {label && (
        <span className="text-default-400 text-sm">{label}</span>
      )}
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
