"use client";

import { Card, CardBody, CardHeader, addToast } from "@heroui/react";
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
    <Card className="glass-card h-full flex flex-col">
      <CardHeader className="flex flex-col gap-3 px-5 pt-5 pb-4">
        <div className="flex justify-between items-start w-full">
          <div>
            <h3 className="text-lg font-semibold flex items-center gap-2">
              <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
              Conversation
            </h3>
            <p className="text-sm text-default-500 mt-1">
              Ask questions or refine your analysis
            </p>
          </div>
        </div>
        <ActionButtons
          sessionId={sessionId}
          currentInput={currentInput}
          onActionComplete={onRefresh}
        />
      </CardHeader>

      <div className="divider-glow mx-5" />

      <CardBody className="flex-1 overflow-y-auto space-y-4 min-h-[250px] px-5 py-4">
        {messages.length === 0 ? (
          <div className="flex items-center justify-center h-full">
            <div className="text-center max-w-xs">
              <div className="w-12 h-12 rounded-full bg-default-100 flex items-center justify-center mx-auto mb-3">
                <svg className="w-6 h-6 text-default-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              </div>
              <p className="text-default-500 text-sm">
                No messages yet
              </p>
              <p className="text-default-400 text-xs mt-1">
                Ask a question about this analysis or use the actions above
              </p>
            </div>
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

      <div className="divider-glow mx-5" />

      <div className="p-5 pt-4">
        <ChatInput
          onSend={handleSendMessage}
          isLoading={followUpMutation.isPending}
          placeholder="Ask a follow-up question..."
        />
      </div>
    </Card>
  );
}
