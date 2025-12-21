/**
 * Hook for fetching and rotating through company-specific fun facts
 * during the UC Generator loading screen.
 */

import { useState, useEffect, useCallback, useRef } from "react";
import { useMutation } from "@tanstack/react-query";

interface FunFactsResponse {
  success: boolean;
  company_name: string;
  fun_facts: string[];
}

interface FunFactsError {
  error: string;
  details?: string;
}

/**
 * Fisher-Yates shuffle algorithm
 */
function shuffleArray<T>(array: T[]): T[] {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

async function fetchCompanyFunFacts(input: {
  customer_name: string;
  customer_website?: string;
}): Promise<FunFactsResponse> {
  const response = await fetch("/api/uc-generate/fun-facts", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(input),
  });

  const data = await response.json();

  if (!response.ok) {
    throw data as FunFactsError;
  }

  return data;
}

interface UseCompanyFunFactsOptions {
  /** Interval in milliseconds between fact changes. Default: 5000 (5 seconds) */
  interval?: number;
  /** Whether to auto-rotate facts. Default: true */
  autoRotate?: boolean;
}

interface UseCompanyFunFactsReturn {
  /** Start fetching fun facts for a company */
  fetchFacts: (customerName: string, customerWebsite?: string) => void;
  /** Current fact being displayed */
  currentFact: string | null;
  /** All fetched fun facts */
  allFacts: string[];
  /** Whether facts are being fetched */
  isLoading: boolean;
  /** Whether facts have been loaded */
  isReady: boolean;
  /** Error if fetch failed */
  error: FunFactsError | null;
  /** Manually advance to next fact */
  nextFact: () => void;
  /** Reset state */
  reset: () => void;
}

/**
 * Hook that fetches company-specific fun facts and rotates through them.
 * Designed for displaying entertaining content during loading screens.
 */
export function useCompanyFunFacts(
  options: UseCompanyFunFactsOptions = {}
): UseCompanyFunFactsReturn {
  const { interval = 5000, autoRotate = true } = options;

  // State for facts and rotation
  const [allFacts, setAllFacts] = useState<string[]>([]);
  const [currentFact, setCurrentFact] = useState<string | null>(null);
  const [isReady, setIsReady] = useState(false);

  // Refs for rotation tracking
  const shuffledFactsRef = useRef<string[]>([]);
  const currentIndexRef = useRef(0);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  // Mutation for fetching facts
  const mutation = useMutation({
    mutationFn: fetchCompanyFunFacts,
    onSuccess: (data) => {
      const facts = data.fun_facts;
      setAllFacts(facts);

      // Shuffle and start rotation
      shuffledFactsRef.current = shuffleArray(facts);
      currentIndexRef.current = 0;

      if (shuffledFactsRef.current.length > 0) {
        setCurrentFact(shuffledFactsRef.current[0]);
        setIsReady(true);
      }
    },
  });

  // Get next fact (with cycling)
  const getNextFact = useCallback(() => {
    if (shuffledFactsRef.current.length === 0) return;

    currentIndexRef.current++;

    // Reshuffle if we've shown all facts
    if (currentIndexRef.current >= shuffledFactsRef.current.length) {
      shuffledFactsRef.current = shuffleArray(shuffledFactsRef.current);
      currentIndexRef.current = 0;
    }

    setCurrentFact(shuffledFactsRef.current[currentIndexRef.current]);
  }, []);

  // Start fetching facts
  const fetchFacts = useCallback(
    (customerName: string, customerWebsite?: string) => {
      // Reset state
      setAllFacts([]);
      setCurrentFact(null);
      setIsReady(false);
      shuffledFactsRef.current = [];
      currentIndexRef.current = 0;

      // Clear any existing interval
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }

      // Start fetch
      mutation.mutate({
        customer_name: customerName,
        customer_website: customerWebsite,
      });
    },
    [mutation]
  );

  // Reset state
  const reset = useCallback(() => {
    setAllFacts([]);
    setCurrentFact(null);
    setIsReady(false);
    shuffledFactsRef.current = [];
    currentIndexRef.current = 0;

    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }

    mutation.reset();
  }, [mutation]);

  // Auto-rotate when ready
  useEffect(() => {
    if (!autoRotate || !isReady) return;

    intervalRef.current = setInterval(() => {
      getNextFact();
    }, interval);

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
    };
  }, [autoRotate, isReady, interval, getNextFact]);

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, []);

  return {
    fetchFacts,
    currentFact,
    allFacts,
    isLoading: mutation.isPending,
    isReady,
    error: mutation.error as FunFactsError | null,
    nextFact: getNextFact,
    reset,
  };
}
