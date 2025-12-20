"use client";

import {
  Card,
  CardBody,
  CardHeader,
  Input,
  Chip,
} from "@heroui/react";

export default function HistoryPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold">Session History</h1>
        <p className="text-default-500">
          View and resume your previous analysis sessions
        </p>
      </div>

      <Input
        placeholder="Search sessions..."
        startContent={<span>🔍</span>}
        className="max-w-md"
      />

      <Card>
        <CardBody className="text-center py-12">
          <p className="text-default-500">
            No sessions yet. Start a new analysis to see your history here.
          </p>
        </CardBody>
      </Card>
    </div>
  );
}
