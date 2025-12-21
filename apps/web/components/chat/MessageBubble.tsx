"use client";

import { Card, CardBody, Avatar } from "@heroui/react";
import ReactMarkdown from "react-markdown";

interface MessageBubbleProps {
  role: "user" | "assistant";
  content: string;
  timestamp?: string;
}

export function MessageBubble({ role, content, timestamp }: MessageBubbleProps) {
  const isUser = role === "user";

  return (
    <div className={`flex gap-3 ${isUser ? "flex-row-reverse" : "flex-row"}`}>
      <Avatar
        name={isUser ? "You" : "ZUCA"}
        size="sm"
        className={isUser ? "bg-primary" : "bg-secondary"}
        classNames={{
          name: isUser ? "text-primary-foreground" : "text-secondary-foreground",
        }}
      />
      <div className={`flex-1 max-w-[80%] ${isUser ? "flex justify-end" : ""}`}>
        <Card
          className={`${
            isUser
              ? "bg-primary text-primary-foreground"
              : "bg-content2"
          }`}
        >
          <CardBody className="py-2 px-3">
            {isUser ? (
              <p className="text-sm">{content}</p>
            ) : (
              <div className="prose prose-sm dark:prose-invert max-w-none">
                <ReactMarkdown>{content}</ReactMarkdown>
              </div>
            )}
          </CardBody>
        </Card>
        {timestamp && (
          <p className={`text-xs text-default-400 mt-1 ${isUser ? "text-right" : ""}`}>
            {new Date(timestamp).toLocaleTimeString([], {
              hour: "2-digit",
              minute: "2-digit",
            })}
          </p>
        )}
      </div>
    </div>
  );
}
