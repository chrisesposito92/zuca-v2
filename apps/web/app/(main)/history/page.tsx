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
  Tabs,
  Tab,
} from "@heroui/react";
import Link from "next/link";
import { useState } from "react";
import { useSessions, useDeleteSession } from "@/hooks/useSessions";

type SessionTypeFilter = "all" | "analyze" | "uc-generate";

export default function HistoryPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [sessionTypeFilter, setSessionTypeFilter] = useState<SessionTypeFilter>("all");
  const [sessionToDelete, setSessionToDelete] = useState<string | null>(null);
  const { isOpen, onOpen, onClose } = useDisclosure();

  const { data, isLoading, error, refetch } = useSessions();
  const deleteMutation = useDeleteSession();

  const sessions = data?.sessions || [];

  // Filter sessions by search query and session type
  const filteredSessions = sessions.filter((s) => {
    const matchesSearch =
      s.customer_name?.toLowerCase().includes(searchQuery.toLowerCase()) ||
      s.id.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesType =
      sessionTypeFilter === "all" || s.session_type === sessionTypeFilter;
    return matchesSearch && matchesType;
  });

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

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "completed":
        return (
          <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
          </svg>
        );
      case "failed":
        return (
          <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
        );
      case "running":
        return (
          <svg className="w-3.5 h-3.5 animate-spin" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
          </svg>
        );
      default:
        return null;
    }
  };

  if (isLoading) {
    return (
      <div className="space-y-8">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">
            <span className="gradient-text">Session History</span>
          </h1>
          <p className="text-default-500 text-lg mt-1">
            View and resume your previous analysis sessions
          </p>
        </div>
        <div className="space-y-4">
          {[1, 2, 3].map((i) => (
            <Card key={i} className="glass-card">
              <CardBody className="p-5">
                <div className="flex items-center gap-4">
                  <Skeleton className="w-10 h-10 rounded-lg" />
                  <div className="flex-1 space-y-2">
                    <Skeleton className="h-5 w-40 rounded" />
                    <Skeleton className="h-4 w-24 rounded" />
                  </div>
                  <Skeleton className="h-8 w-20 rounded-lg" />
                </div>
              </CardBody>
            </Card>
          ))}
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="space-y-8">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">
            <span className="gradient-text">Session History</span>
          </h1>
          <p className="text-default-500 text-lg mt-1">
            View and resume your previous analysis sessions
          </p>
        </div>
        <Card className="glass-card border-danger/30">
          <CardBody className="p-6 flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-danger/20 flex items-center justify-center">
              <svg className="w-6 h-6 text-danger" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div>
              <p className="font-medium text-danger">Failed to load sessions</p>
              <p className="text-sm text-default-500">Please try refreshing the page</p>
            </div>
          </CardBody>
        </Card>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex justify-between items-start">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">
            <span className="gradient-text">Session History</span>
          </h1>
          <p className="text-default-500 text-lg mt-1">
            View and resume your previous analysis sessions
          </p>
        </div>
        <Link href="/analyze">
          <Button
            color="primary"
            size="lg"
            className="font-semibold teal-glow-subtle"
            startContent={
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
              </svg>
            }
          >
            New Analysis
          </Button>
        </Link>
      </div>

      {/* Filters */}
      <div className="flex flex-col sm:flex-row gap-4">
        {/* Session Type Filter */}
        <Tabs
          aria-label="Session type filter"
          selectedKey={sessionTypeFilter}
          onSelectionChange={(key) => setSessionTypeFilter(key as SessionTypeFilter)}
          variant="bordered"
          color="primary"
          classNames={{
            tabList: "border-default-200 bg-default-50/50",
            cursor: "bg-primary",
            tab: "h-9 px-4",
            tabContent: "group-data-[selected=true]:text-white font-medium text-default-500",
          }}
        >
          <Tab
            key="all"
            title={
              <div className="flex items-center gap-2">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 10h16M4 14h16M4 18h16" />
                </svg>
                <span>All</span>
                <Chip size="sm" variant="flat" className="bg-default-200 text-default-600 text-xs">
                  {sessions.length}
                </Chip>
              </div>
            }
          />
          <Tab
            key="analyze"
            title={
              <div className="flex items-center gap-2">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
                <span>Analyze</span>
                <Chip size="sm" variant="flat" className="bg-primary/20 text-primary text-xs">
                  {sessions.filter((s) => s.session_type === "analyze").length}
                </Chip>
              </div>
            }
          />
          <Tab
            key="uc-generate"
            title={
              <div className="flex items-center gap-2">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
                <span>Generate</span>
                <Chip size="sm" variant="flat" className="bg-secondary/20 text-secondary text-xs">
                  {sessions.filter((s) => s.session_type === "uc-generate").length}
                </Chip>
              </div>
            }
          />
        </Tabs>

        {/* Search */}
        <div className="flex-1">
          <Input
            placeholder="Search by customer name or session ID..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            variant="bordered"
            size="lg"
            classNames={{
              inputWrapper: "border-default-200 hover:border-primary/50 focus-within:border-primary bg-default-50/50",
            }}
            startContent={
              <svg className="w-5 h-5 text-default-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            }
          />
        </div>
      </div>

      {/* Sessions list */}
      {filteredSessions.length === 0 ? (
        <Card className="glass-card">
          <CardBody className="py-16 text-center">
            <div className="w-16 h-16 rounded-full bg-default-100 flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-default-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>
            <p className="text-default-500 text-lg">
              {sessions.length === 0
                ? "No sessions yet"
                : sessionTypeFilter !== "all" && sessions.filter(s => s.session_type === sessionTypeFilter).length === 0
                ? `No ${sessionTypeFilter === "analyze" ? "analysis" : "generation"} sessions yet`
                : "No sessions match your search"}
            </p>
            <p className="text-default-400 text-sm mt-1">
              {sessions.length === 0
                ? "Start a new analysis to see your history here"
                : sessionTypeFilter !== "all" && sessions.filter(s => s.session_type === sessionTypeFilter).length === 0
                ? sessionTypeFilter === "analyze" ? "Run an analysis from the Analyze page" : "Generate use cases from the Analyze page"
                : "Try adjusting your search terms or filter"}
            </p>
          </CardBody>
        </Card>
      ) : (
        <div className="space-y-3">
          {filteredSessions.map((session, index) => (
            <Card
              key={session.id}
              className="glass-card border-glow overflow-hidden animate-fade-in-up"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <CardBody className="p-5">
                <div className="flex items-center gap-4">
                  {/* Status indicator */}
                  <div className={`
                    w-10 h-10 rounded-lg flex items-center justify-center
                    ${session.status === 'completed' ? 'bg-success/20 text-success' :
                      session.status === 'failed' ? 'bg-danger/20 text-danger' :
                      session.status === 'running' ? 'bg-warning/20 text-warning' :
                      'bg-default-100 text-default-500'}
                  `}>
                    {getStatusIcon(session.status)}
                  </div>

                  {/* Session info */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-3 flex-wrap">
                      <Link href={`/solution/${session.id}`}>
                        <h3 className="font-semibold text-lg hover:text-primary transition-colors cursor-pointer truncate">
                          {session.customer_name || "Untitled"}
                        </h3>
                      </Link>
                      <Chip
                        size="sm"
                        color={getStatusColor(session.status)}
                        variant="flat"
                        className="capitalize"
                      >
                        {session.status}
                      </Chip>
                      <Chip
                        size="sm"
                        variant="flat"
                        className={
                          session.session_type === "analyze"
                            ? "bg-primary/20 text-primary"
                            : "bg-secondary/20 text-secondary"
                        }
                      >
                        {session.session_type === "analyze" ? "Analyze" : "Generate"}
                      </Chip>
                      {session.llm_model && (
                        <Chip
                          size="sm"
                          variant="flat"
                          className="bg-default-200/70 text-default-600"
                        >
                          {session.llm_model}
                        </Chip>
                      )}
                    </div>
                    <div className="flex items-center gap-4 mt-1.5 text-sm text-default-500">
                      <span className="flex items-center gap-1.5">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        {new Date(session.created_at).toLocaleDateString(undefined, {
                          year: "numeric",
                          month: "short",
                          day: "numeric",
                        })}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        {new Date(session.created_at).toLocaleTimeString(undefined, {
                          hour: "2-digit",
                          minute: "2-digit",
                        })}
                      </span>
                      <span className="font-mono text-xs text-default-400">
                        {session.id.slice(0, 8)}
                      </span>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex gap-2">
                    <Link href={`/solution/${session.id}`}>
                      <Button
                        size="sm"
                        variant="bordered"
                        className="border-2 border-default-300 hover:border-primary hover:bg-primary/5"
                      >
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

      {/* Stats footer */}
      {sessions.length > 0 && (
        <div className="flex items-center justify-center gap-6 text-sm text-default-400 pt-4">
          <span>{filteredSessions.length} {sessionTypeFilter === "all" ? "total" : sessionTypeFilter === "analyze" ? "analysis" : "generation"} sessions</span>
          <span className="w-1 h-1 bg-default-300 rounded-full" />
          <span>{filteredSessions.filter(s => s.status === 'completed').length} completed</span>
          <span className="w-1 h-1 bg-default-300 rounded-full" />
          <span>{filteredSessions.filter(s => s.status === 'failed').length} failed</span>
        </div>
      )}

      {/* Delete Confirmation Modal */}
      <Modal
        isOpen={isOpen}
        onClose={onClose}
        classNames={{
          backdrop: "bg-[#050a08]/80 backdrop-blur-sm",
          base: "glass-card-elevated",
        }}
      >
        <ModalContent>
          <ModalHeader className="flex items-center gap-3 pt-6">
            <div className="w-10 h-10 rounded-full bg-danger/20 flex items-center justify-center">
              <svg className="w-5 h-5 text-danger" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
              </svg>
            </div>
            <span>Delete Session</span>
          </ModalHeader>
          <ModalBody>
            <p className="text-default-600">
              Are you sure you want to delete this session? This action cannot be undone and all associated data will be permanently removed.
            </p>
          </ModalBody>
          <ModalFooter className="pb-6">
            <Button variant="light" onPress={onClose}>
              Cancel
            </Button>
            <Button
              color="danger"
              onPress={handleDeleteConfirm}
              isLoading={deleteMutation.isPending}
            >
              Delete Session
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </div>
  );
}
