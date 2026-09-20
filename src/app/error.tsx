"use client";

import { useEffect } from "react";
import { AlertTriangle, RefreshCw } from "lucide-react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="flex flex-col items-center justify-center min-h-[400px] p-8 text-center">
      <div className="flex items-center justify-center w-16 h-16 rounded-full bg-red-500/10 border border-red-500/20 mb-4">
        <AlertTriangle className="w-8 h-8 text-red-600 dark:text-red-500" />
      </div>

      <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100 mb-2">Something went wrong</h2>

      <p className="text-zinc-600 dark:text-zinc-400 mb-6 max-w-md">
        An unexpected error occurred while loading this page. Please try again.
      </p>

      <button
        onClick={reset}
        className="flex items-center gap-2 px-4 py-2 rounded-lg bg-zinc-200 text-zinc-900 hover:bg-zinc-300 transition-colors dark:bg-zinc-800 dark:text-zinc-100 dark:hover:bg-zinc-700"
      >
        <RefreshCw className="w-4 h-4" />
        Try again
      </button>
    </div>
  );
}
