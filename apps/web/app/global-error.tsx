"use client";

/**
 * Global error boundary for the root layout.
 * This catches errors that occur in the root layout itself.
 * Note: This must include its own <html> and <body> tags.
 */
export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html lang="en" className="dark">
      <body className="bg-[#0a1612] text-white">
        <div className="min-h-screen flex items-center justify-center p-6">
          <div className="bg-[#0d1f1a]/80 backdrop-blur-xl border border-[#00d2b9]/20 rounded-2xl p-8 max-w-md w-full text-center space-y-6">
            {/* Error Icon */}
            <div className="w-16 h-16 mx-auto rounded-full bg-red-500/20 flex items-center justify-center">
              <svg
                className="w-8 h-8 text-red-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                />
              </svg>
            </div>

            {/* Error Message */}
            <div className="space-y-2">
              <h2 className="text-xl font-semibold">
                Critical Error
              </h2>
              <p className="text-gray-400 text-sm">
                A critical error occurred in the application. Please try
                refreshing the page.
              </p>
              {error.digest && (
                <p className="text-gray-500 text-xs font-mono">
                  Error ID: {error.digest}
                </p>
              )}
            </div>

            {/* Actions */}
            <div className="flex flex-col gap-3">
              <button
                onClick={reset}
                className="w-full py-3 px-4 bg-[#00d2b9] text-black font-medium rounded-xl hover:bg-[#00b8a3] transition-colors"
              >
                Try Again
              </button>
              <button
                onClick={() => (window.location.href = "/")}
                className="w-full py-3 px-4 bg-white/10 text-white font-medium rounded-xl hover:bg-white/20 transition-colors"
              >
                Reload Application
              </button>
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
