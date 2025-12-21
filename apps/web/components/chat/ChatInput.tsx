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
        classNames={{
          inputWrapper: "bg-content2",
        }}
        className="flex-1"
      />
      <Button
        color="primary"
        onPress={handleSend}
        isLoading={isLoading}
        isDisabled={!message.trim()}
      >
        Send
      </Button>
    </div>
  );
}
