"use client";

import {
  Button,
  Card,
  CardBody,
  Chip,
  Input,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  Skeleton,
  useDisclosure,
  addToast,
} from "@heroui/react";
import Link from "next/link";
import { useState } from "react";
import { useSessions, useDeleteSession } from "@/hooks/useSessions";

export default function HistoryPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [sessionToDelete, setSessionToDelete] = useState<string | null>(null);
  const { isOpen, onOpen, onClose } = useDisclosure();

  const { data, isLoading, error, refetch } = useSessions();
  const deleteMutation = useDeleteSession();

  const sessions = data?.sessions || [];

  // Filter sessions by search query
  const filteredSessions = sessions.filter(
    (s) =>
      s.customer_name?.toLowerCase().includes(searchQuery.toLowerCase()) ||
      s.id.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleDeleteClick = (id: string) => {
    setSessionToDelete(id);
    onOpen();
  };

  const handleDeleteConfirm = async () => {
    if (!sessionToDelete) return;

    try {
      await deleteMutation.mutateAsync(sessionToDelete);
      addToast({
        title: "Deleted",
        description: "Session deleted successfully",
        color: "success",
      });
      onClose();
      setSessionToDelete(null);
      refetch();
    } catch {
      addToast({
        title: "Error",
        description: "Failed to delete session",
        color: "danger",
      });
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "completed":
        return "success";
      case "failed":
        return "danger";
      case "running":
        return "warning";
      default:
        return "default";
    }
  };

  if (isLoading) {
    return (
      <div className="space-y-6">
        <div>
          <h1 className="text-2xl font-bold">Session History</h1>
          <p className="text-default-500">
            View and resume your previous analysis sessions
          </p>
        </div>
        <div className="space-y-4">
          {[1, 2, 3].map((i) => (
            <Skeleton key={i} className="h-24 rounded-lg" />
          ))}
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="space-y-6">
        <div>
          <h1 className="text-2xl font-bold">Session History</h1>
          <p className="text-default-500">
            View and resume your previous analysis sessions
          </p>
        </div>
        <Card className="border-danger">
          <CardBody>
            <p className="text-danger">Failed to load sessions</p>
          </CardBody>
        </Card>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold">Session History</h1>
          <p className="text-default-500">
            View and resume your previous analysis sessions
          </p>
        </div>
        <Link href="/analyze">
          <Button color="primary">New Analysis</Button>
        </Link>
      </div>

      <Input
        placeholder="Search by customer name or session ID..."
        startContent={<span>🔍</span>}
        className="max-w-md"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />

      {filteredSessions.length === 0 ? (
        <Card>
          <CardBody className="text-center py-12">
            <p className="text-default-500">
              {sessions.length === 0
                ? "No sessions yet. Start a new analysis to see your history here."
                : "No sessions match your search."}
            </p>
          </CardBody>
        </Card>
      ) : (
        <div className="space-y-3">
          {filteredSessions.map((session) => (
            <Card key={session.id} className="hover:border-primary transition-colors">
              <CardBody>
                <div className="flex items-center justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-3">
                      <Link href={`/solution/${session.id}`}>
                        <h3 className="font-semibold hover:text-primary transition-colors cursor-pointer">
                          {session.customer_name || "Untitled"}
                        </h3>
                      </Link>
                      <Chip size="sm" color={getStatusColor(session.status)} variant="flat">
                        {session.status}
                      </Chip>
                      <Chip size="sm" variant="bordered">
                        {session.session_type}
                      </Chip>
                    </div>
                    <p className="text-sm text-default-500 mt-1">
                      {new Date(session.created_at).toLocaleDateString(undefined, {
                        year: "numeric",
                        month: "short",
                        day: "numeric",
                        hour: "2-digit",
                        minute: "2-digit",
                      })}
                    </p>
                    <p className="text-xs text-default-400 font-mono mt-1">
                      {session.id.slice(0, 8)}...
                    </p>
                  </div>
                  <div className="flex gap-2">
                    <Link href={`/solution/${session.id}`}>
                      <Button size="sm" variant="bordered">
                        View
                      </Button>
                    </Link>
                    <Button
                      size="sm"
                      variant="light"
                      color="danger"
                      onPress={() => handleDeleteClick(session.id)}
                    >
                      Delete
                    </Button>
                  </div>
                </div>
              </CardBody>
            </Card>
          ))}
        </div>
      )}

      {/* Delete Confirmation Modal */}
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalContent>
          <ModalHeader>Delete Session</ModalHeader>
          <ModalBody>
            <p>
              Are you sure you want to delete this session? This action cannot be undone.
            </p>
          </ModalBody>
          <ModalFooter>
            <Button variant="light" onPress={onClose}>
              Cancel
            </Button>
            <Button
              color="danger"
              onPress={handleDeleteConfirm}
              isLoading={deleteMutation.isPending}
            >
              Delete
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </div>
  );
}
