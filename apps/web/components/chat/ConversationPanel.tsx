"use client";

import { Card, CardBody, CardHeader, Divider, addToast } from "@heroui/react";
import { useRef, useEffect } from "react";
import { MessageBubble } from "./MessageBubble";
import { ChatInput } from "./ChatInput";
import { ActionButtons } from "./ActionButtons";
import { useFollowUp } from "@/hooks/useSessions";

interface Message {
  role: "user" | "assistant";
  content: string;
  created_at: string;
}

interface ConversationPanelProps {
  sessionId: string;
  messages: Message[];
  currentInput: Record<string, unknown>;
  onRefresh?: () => void;
}

export function ConversationPanel({
  sessionId,
  messages,
  currentInput,
  onRefresh,
}: ConversationPanelProps) {
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const followUpMutation = useFollowUp(sessionId);

  // Scroll to bottom when new messages arrive
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSendMessage = async (message: string) => {
    try {
      const response = await followUpMutation.mutateAsync(message);

      // Handle different response types
      if (response.type === "clarification") {
        // Message was a clarification - result added to conversation
        onRefresh?.();
      } else if (response.type === "edit") {
        // Follow-up triggered an edit - pipeline re-running
        addToast({
          title: "Updating Analysis",
          description: "Your changes are being applied...",
          color: "success",
        });
        onRefresh?.();
      }
    } catch {
      addToast({
        title: "Error",
        description: "Failed to send message. Please try again.",
        color: "danger",
      });
    }
  };

  return (
    <Card className="h-full flex flex-col">
      <CardHeader className="flex justify-between items-center">
        <div>
          <h3 className="text-lg font-semibold">Conversation</h3>
          <p className="text-sm text-default-500">
            Ask questions or refine your analysis
          </p>
        </div>
        <ActionButtons
          sessionId={sessionId}
          currentInput={currentInput}
          onActionComplete={onRefresh}
        />
      </CardHeader>

      <Divider />

      <CardBody className="flex-1 overflow-y-auto space-y-4 min-h-[200px]">
        {messages.length === 0 ? (
          <div className="flex items-center justify-center h-full text-default-400">
            <p className="text-center">
              No messages yet. Ask a question about this analysis or use the action buttons above to make changes.
            </p>
          </div>
        ) : (
          <>
            {messages.map((msg, index) => (
              <MessageBubble
                key={index}
                role={msg.role}
                content={msg.content}
                timestamp={msg.created_at}
              />
            ))}
            <div ref={messagesEndRef} />
          </>
        )}
      </CardBody>

      <Divider />

      <div className="p-4">
        <ChatInput
          onSend={handleSendMessage}
          isLoading={followUpMutation.isPending}
          placeholder="Ask a follow-up question about this analysis..."
        />
      </div>
    </Card>
  );
}
