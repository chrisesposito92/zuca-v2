"use client";

import { Button, Card, CardBody } from "@heroui/react";
import { useEffect, useState } from "react";

export default function MainError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  const [showDetails, setShowDetails] = useState(false);

  useEffect(() => {
    // Log the error to console
    console.error("App error:", error);
  }, [error]);

  return (
    <div className="flex items-center justify-center min-h-[60vh] p-6">
      <Card className="glass-card-elevated max-w-lg w-full">
        <CardBody className="p-8 text-center space-y-6">
          {/* Error Icon */}
          <div className="w-20 h-20 mx-auto rounded-full bg-danger/20 flex items-center justify-center">
            <svg
              className="w-10 h-10 text-danger"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>

          {/* Error Message */}
          <div className="space-y-2">
            <h2 className="text-2xl font-semibold text-foreground">
              Oops! Something went wrong
            </h2>
            <p className="text-default-500">
              We encountered an error while processing your request. This has
              been logged and we&apos;ll look into it.
            </p>
          </div>

          {/* Error Details (collapsible) */}
          {(error.message || error.digest) && (
            <div className="space-y-2">
              <Button
                variant="light"
                size="sm"
                className="text-default-400"
                onPress={() => setShowDetails(!showDetails)}
              >
                {showDetails ? "Hide" : "Show"} Details
                <svg
                  className={`w-4 h-4 ml-1 transition-transform ${showDetails ? "rotate-180" : ""}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </Button>

              {showDetails && (
                <div className="p-4 rounded-lg bg-default-100/50 text-left">
                  <p className="text-sm text-danger font-mono break-all">
                    {error.message}
                  </p>
                  {error.digest && (
                    <p className="text-xs text-default-400 mt-2 font-mono">
                      Error ID: {error.digest}
                    </p>
                  )}
                </div>
              )}
            </div>
          )}

          {/* Actions */}
          <div className="flex flex-col sm:flex-row gap-3 pt-2">
            <Button
              color="primary"
              className="flex-1 teal-glow-subtle"
              onPress={reset}
            >
              <svg
                className="w-4 h-4 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                />
              </svg>
              Try Again
            </Button>
            <Button
              variant="bordered"
              className="flex-1 border-default-300"
              onPress={() => (window.location.href = "/analyze")}
            >
              Start Fresh
            </Button>
          </div>

          {/* Help text */}
          <p className="text-xs text-default-400">
            If this keeps happening, try refreshing the page or clearing your
            browser cache.
          </p>
        </CardBody>
      </Card>
    </div>
  );
}
