"use client";

import { Button, Textarea } from "@heroui/react";
import { useState, KeyboardEvent } from "react";

interface ChatInputProps {
  onSend: (message: string) => void;
  isLoading?: boolean;
  placeholder?: string;
}

export function ChatInput({
  onSend,
  isLoading = false,
  placeholder = "Ask a follow-up question...",
}: ChatInputProps) {
  const [message, setMessage] = useState("");

  const handleSend = () => {
    const trimmed = message.trim();
    if (!trimmed || isLoading) return;

    onSend(trimmed);
    setMessage("");
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div className="flex gap-2 items-end">
      <Textarea
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder={placeholder}
        minRows={1}
        maxRows={4}
        disabled={isLoading}
        variant="bordered"
        classNames={{
          inputWrapper: "border-default-200 hover:border-primary/50 focus-within:border-primary bg-default-50/50",
          input: "text-sm",
        }}
        className="flex-1"
      />
      <Button
        color="primary"
        onPress={handleSend}
        isLoading={isLoading}
        isDisabled={!message.trim()}
        className="font-semibold h-[42px] px-4"
        startContent={
          !isLoading && (
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
            </svg>
          )
        }
      >
        Send
      </Button>
    </div>
  );
}
