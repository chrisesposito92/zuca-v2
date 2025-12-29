"use client";

import { Button, Card, CardBody, Skeleton, Chip } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { useAuth } from "../hooks/useAuth";
import { useQuery } from "@tanstack/react-query";

// ============================================================================
// VARIANT CONFIG - Change this to switch between home page styles
// Options: "welcome" (animated splash) or "dashboard" (data-rich hub)
// You can also use ?variant=dashboard in the URL to override
// ============================================================================
const DEFAULT_VARIANT: "welcome" | "dashboard" = "welcome";

// ============================================================================
// SHARED DATA
// ============================================================================

const tools = [
  {
    href: "/analyze",
    title: "Use Case Analysis",
    description: "Analyze subscription contracts and get tailored Zuora implementation guidance",
    shortDesc: "Analyze contracts for Zuora config",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
      </svg>
    ),
    smallIcon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
      </svg>
    ),
    gradient: "from-primary/20 to-primary/5",
    color: "primary" as const,
  },
  {
    href: "/revenue-snapshot",
    title: "Revenue Snapshot",
    description: "Visualize revenue recognition waterfall and allocation analysis",
    shortDesc: "Visualize revenue recognition waterfall",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
    smallIcon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
    gradient: "from-secondary/20 to-secondary/5",
    color: "secondary" as const,
  },
  {
    href: "/html-builder",
    title: "Template Builder",
    description: "Create and customize invoice and notification templates",
    shortDesc: "Create invoice and notification templates",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    ),
    smallIcon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    ),
    gradient: "from-warning/20 to-warning/5",
    color: "warning" as const,
  },
  {
    href: "/history",
    title: "History",
    description: "View and continue previous analysis sessions",
    shortDesc: "View and continue previous sessions",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    smallIcon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    gradient: "from-default-500/20 to-default-500/5",
    color: "default" as const,
  },
];

// ============================================================================
// WELCOME VARIANT - Animated branded splash with tool picker
// ============================================================================

function WelcomeHome() {
  const [animationPhase, setAnimationPhase] = useState<"logo" | "tagline" | "tools" | "complete">("logo");

  useEffect(() => {
    const timers = [
      setTimeout(() => setAnimationPhase("tagline"), 800),
      setTimeout(() => setAnimationPhase("tools"), 1600),
      setTimeout(() => setAnimationPhase("complete"), 2200),
    ];
    return () => timers.forEach(clearTimeout);
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6 relative overflow-hidden">
      {/* Animated background orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className={`absolute top-1/4 left-1/4 w-[600px] h-[600px] rounded-full bg-primary/10 blur-[120px] transition-all duration-[2000ms] ${
            animationPhase !== "logo" ? "opacity-100 scale-100" : "opacity-0 scale-50"
          }`}
        />
        <div
          className={`absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full bg-secondary/10 blur-[100px] transition-all duration-[2500ms] delay-300 ${
            animationPhase !== "logo" ? "opacity-100 scale-100" : "opacity-0 scale-50"
          }`}
        />
      </div>

      {/* Main content */}
      <div className="relative z-10 w-full max-w-4xl">
        {/* Logo section */}
        <div
          className={`flex flex-col items-center transition-all duration-700 ${
            animationPhase === "logo" ? "scale-110 opacity-100" : "scale-100 opacity-100"
          }`}
        >
          <div className={`relative transition-all duration-700 ${
            animationPhase === "logo" ? "scale-125" : "scale-100"
          }`}>
            <Image
              src="/zuca_logo_dark_v1.png"
              alt="ZUCA"
              width={320}
              height={90}
              className="w-auto h-auto transition-transform"
              priority
            />
            <div
              className={`absolute inset-0 bg-primary/30 blur-3xl -z-10 transition-opacity duration-1000 ${
                animationPhase === "logo" ? "opacity-100" : "opacity-40"
              }`}
            />
          </div>

          <div
            className={`mt-4 text-center transition-all duration-700 ${
              animationPhase === "logo" ? "opacity-0 translate-y-4" : "opacity-100 translate-y-0"
            }`}
          >
            <p className="text-xl text-default-400 font-medium">Zuora Use Case Assistant</p>
            <p className="mt-2 text-default-500 text-sm max-w-md mx-auto">
              AI-powered subscription intelligence for Zuora implementations
            </p>
          </div>
        </div>

        {/* Tools grid */}
        <div
          className={`mt-16 transition-all duration-700 ${
            animationPhase === "tools" || animationPhase === "complete"
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-8"
          }`}
        >
          <p className="text-center text-sm text-default-500 mb-6 uppercase tracking-wider font-medium">
            What would you like to do?
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {tools.map((tool, index) => (
              <Link key={tool.href} href={tool.href}>
                <Card
                  className="glass-card-elevated hover:border-primary/30 cursor-pointer transition-all duration-300 hover:scale-[1.02] hover:shadow-lg h-full"
                  style={{
                    transitionDelay: animationPhase === "tools" ? `${index * 100}ms` : "0ms",
                  }}
                >
                  <CardBody className="p-6 h-full flex flex-col">
                    <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${tool.gradient} flex items-center justify-center text-primary mb-4`}>
                      {tool.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-foreground text-lg">{tool.title}</h3>
                      <p className="text-default-500 text-sm mt-1">{tool.description}</p>
                    </div>
                  </CardBody>
                </Card>
              </Link>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div
          className={`mt-12 text-center transition-all duration-500 ${
            animationPhase === "complete" ? "opacity-100" : "opacity-0"
          }`}
        >
          <div className="flex items-center justify-center gap-2 text-xs text-default-400">
            <div className="w-1.5 h-1.5 bg-primary rounded-full pulse-teal" />
            <span>ZUCA v2 • Powered by Zuora</span>
          </div>
        </div>
      </div>
    </div>
  );
}

// ============================================================================
// DASHBOARD VARIANT - Data-rich hub with recent sessions and stats
// ============================================================================

interface ApiSession {
  id: string;
  session_type: "analyze" | "uc-generate" | "revenue-snapshot" | "html-builder";
  customer_name: string;
  input: Record<string, unknown>;
  status: string;
  created_at: string;
  updated_at: string;
}

interface Session {
  id: string;
  type: "analyze" | "uc-generate" | "revenue-snapshot" | "html-builder";
  customerName: string;
  input: Record<string, unknown>;
  status: string;
  created_at: string;
  updated_at: string;
}

const typeLabels: Record<string, string> = {
  "analyze": "Analysis",
  "uc-generate": "Use Case",
  "revenue-snapshot": "Revenue",
  "html-builder": "Template",
};

const typeColors: Record<string, "primary" | "secondary" | "warning" | "default"> = {
  "analyze": "primary",
  "uc-generate": "secondary",
  "revenue-snapshot": "warning",
  "html-builder": "warning",
};

function getGreeting(): string {
  const hour = new Date().getHours();
  if (hour < 12) return "Good morning";
  if (hour < 17) return "Good afternoon";
  return "Good evening";
}

function formatRelativeTime(dateString: string): string {
  const date = new Date(dateString);
  const now = new Date();
  const diffMs = now.getTime() - date.getTime();
  const diffMins = Math.floor(diffMs / 60000);
  const diffHours = Math.floor(diffMins / 60);
  const diffDays = Math.floor(diffHours / 24);

  if (diffMins < 1) return "Just now";
  if (diffMins < 60) return `${diffMins}m ago`;
  if (diffHours < 24) return `${diffHours}h ago`;
  if (diffDays < 7) return `${diffDays}d ago`;
  return date.toLocaleDateString();
}

function getSessionTitle(session: Session): string {
  // Use customerName from API (already computed server-side)
  if (session.customerName && session.customerName !== "Unknown") {
    return session.customerName;
  }
  // Fallback to extracting from input
  const input = session.input as Record<string, unknown>;
  if (session.type === "analyze" && input.contractText) {
    const text = String(input.contractText);
    return text.slice(0, 50) + (text.length > 50 ? "..." : "");
  }
  if (session.type === "revenue-snapshot") {
    const subs = input.subscription_numbers as string[] | undefined;
    if (Array.isArray(subs) && subs.length) {
      const shown = subs.slice(0, 2).join(", ");
      return subs.length > 2 ? `${shown} (+${subs.length - 2})` : shown;
    }
    return "Revenue Snapshot";
  }
  if (session.type === "html-builder") {
    const desc = input.description as string | undefined;
    return desc?.slice(0, 50) || "Template Request";
  }
  return `${typeLabels[session.type] || session.type} Session`;
}

function DashboardHome() {
  const { user, isLoading: authLoading } = useAuth();

  // Helper to map API response to internal Session type
  const mapApiSession = (s: ApiSession): Session => ({
    id: s.id,
    type: s.session_type,
    customerName: s.customer_name,
    input: s.input,
    status: s.status,
    created_at: s.created_at,
    updated_at: s.updated_at,
  });

  const { data: sessions, isLoading: sessionsLoading } = useQuery<Session[]>({
    queryKey: ["sessions", "recent"],
    queryFn: async () => {
      const res = await fetch("/api/sessions?limit=5");
      const data = await res.json();
      return (data.sessions || []).map(mapApiSession);
    },
    staleTime: 30000,
  });

  const { data: stats } = useQuery({
    queryKey: ["sessions", "stats"],
    queryFn: async () => {
      // Fetch with high limit to get accurate count
      const res = await fetch("/api/sessions?limit=1000");
      const data = await res.json();
      const allSessions: ApiSession[] = data.sessions || [];

      const today = new Date();
      today.setHours(0, 0, 0, 0);
      const thisWeek = new Date(today);
      thisWeek.setDate(thisWeek.getDate() - 7);

      return {
        total: allSessions.length,
        thisWeek: allSessions.filter((s) => new Date(s.created_at) >= thisWeek).length,
      };
    },
    staleTime: 60000,
  });

  const userName = user?.email?.split("@")[0] || "there";

  return (
    <div className="min-h-screen p-6 md:p-10 relative">
      {/* Background gradient */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-[800px] h-[600px] rounded-full bg-primary/5 blur-[150px]" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[400px] rounded-full bg-secondary/5 blur-[120px]" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-10">
          <div>
            <Link href="/" className="inline-block mb-4">
              <Image
                src="/zuca_logo_dark_v1.png"
                alt="ZUCA"
                width={180}
                height={50}
                className="h-auto w-auto"
                priority
              />
            </Link>
            <h1 className="text-3xl font-bold text-foreground">
              {getGreeting()}, {authLoading ? <Skeleton className="inline-block w-24 h-8" /> : userName}
            </h1>
            <p className="text-default-500 mt-1">What would you like to work on today?</p>
          </div>

          {/* Quick stats */}
          <div className="hidden md:flex items-center gap-6">
            <div className="text-right">
              <p className="text-2xl font-bold text-foreground">{stats?.total || 0}</p>
              <p className="text-xs text-default-500 uppercase tracking-wider">Total Sessions</p>
            </div>
            <div className="w-px h-10 bg-default-200" />
            <div className="text-right">
              <p className="text-2xl font-bold text-primary">{stats?.thisWeek || 0}</p>
              <p className="text-xs text-default-500 uppercase tracking-wider">This Week</p>
            </div>
          </div>
        </div>

        {/* Quick actions grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
          {tools.filter(t => t.href !== "/history").slice(0, 3).map((tool) => (
            <Link key={tool.href} href={tool.href}>
              <Card className="glass-card-elevated hover:border-primary/30 cursor-pointer transition-all duration-300 hover:scale-[1.02] h-full">
                <CardBody className="p-5 flex flex-row items-center gap-4">
                  <div className={`
                    w-12 h-12 rounded-xl flex items-center justify-center
                    ${tool.color === "primary" ? "bg-primary/20 text-primary" : ""}
                    ${tool.color === "secondary" ? "bg-secondary/20 text-secondary" : ""}
                    ${tool.color === "warning" ? "bg-warning/20 text-warning" : ""}
                  `}>
                    {tool.smallIcon}
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-semibold text-foreground">{tool.title}</h3>
                    <p className="text-default-500 text-sm truncate">{tool.shortDesc}</p>
                  </div>
                  <svg className="w-5 h-5 text-default-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </CardBody>
              </Card>
            </Link>
          ))}
        </div>

        {/* Recent sessions */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-semibold text-foreground">Recent Sessions</h2>
              <Link href="/history">
                <Button variant="light" size="sm" className="text-primary">View All</Button>
              </Link>
            </div>

            <Card className="glass-card">
              <CardBody className="p-0 divide-y divide-default-100">
                {sessionsLoading ? (
                  Array.from({ length: 3 }).map((_, i) => (
                    <div key={i} className="p-4 flex items-center gap-4">
                      <Skeleton className="w-10 h-10 rounded-lg" />
                      <div className="flex-1 space-y-2">
                        <Skeleton className="w-3/4 h-4 rounded" />
                        <Skeleton className="w-1/2 h-3 rounded" />
                      </div>
                    </div>
                  ))
                ) : sessions && sessions.length > 0 ? (
                  sessions.map((session) => (
                    <Link
                      key={session.id}
                      href={session.type === "analyze" ? `/solution/${session.id}` : `/history`}
                      className="block p-4 hover:bg-default-50/50 transition-colors"
                    >
                      <div className="flex items-center gap-4">
                        <div className={`
                          w-10 h-10 rounded-lg flex items-center justify-center text-sm font-medium
                          ${session.type === "analyze" ? "bg-primary/10 text-primary" : ""}
                          ${session.type === "revenue-snapshot" ? "bg-secondary/10 text-secondary" : ""}
                          ${session.type === "uc-generate" ? "bg-warning/10 text-warning" : ""}
                        `}>
                          {typeLabels[session.type]?.[0] || "?"}
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="font-medium text-foreground truncate">{getSessionTitle(session)}</p>
                          <p className="text-sm text-default-500">
                            {formatRelativeTime(session.updated_at || session.created_at)}
                          </p>
                        </div>
                        <Chip size="sm" variant="flat" color={typeColors[session.type] || "default"}>
                          {typeLabels[session.type] || session.type}
                        </Chip>
                      </div>
                    </Link>
                  ))
                ) : (
                  <div className="p-8 text-center">
                    <div className="w-12 h-12 rounded-full bg-default-100 flex items-center justify-center mx-auto mb-3">
                      <svg className="w-6 h-6 text-default-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                      </svg>
                    </div>
                    <p className="text-default-500 text-sm">No sessions yet</p>
                    <p className="text-default-400 text-xs mt-1">Start a new analysis to get going</p>
                  </div>
                )}
              </CardBody>
            </Card>
          </div>

          {/* Getting started */}
          <div>
            <h2 className="text-lg font-semibold text-foreground mb-4">Getting Started</h2>
            <Card className="glass-card">
              <CardBody className="p-5 space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary/20 text-primary flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">1</div>
                  <div>
                    <p className="font-medium text-foreground text-sm">Paste your contract</p>
                    <p className="text-default-500 text-xs mt-0.5">Start with your subscription agreement or pricing terms</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary/20 text-primary flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">2</div>
                  <div>
                    <p className="font-medium text-foreground text-sm">Get AI analysis</p>
                    <p className="text-default-500 text-xs mt-0.5">ZUCA extracts pricing, terms, and recommends Zuora config</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary/20 text-primary flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">3</div>
                  <div>
                    <p className="font-medium text-foreground text-sm">Refine with chat</p>
                    <p className="text-default-500 text-xs mt-0.5">Ask follow-up questions and iterate on the design</p>
                  </div>
                </div>

                <div className="pt-2">
                  <Link href="/analyze">
                    <Button
                      color="primary"
                      className="w-full font-semibold"
                      endContent={
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                        </svg>
                      }
                    >
                      Start Analysis
                    </Button>
                  </Link>
                </div>
              </CardBody>
            </Card>

            {/* Footer badge */}
            <div className="mt-6 flex items-center justify-center gap-2 text-xs text-default-400">
              <div className="w-1.5 h-1.5 bg-primary rounded-full pulse-teal" />
              <span>ZUCA v2</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// ============================================================================
// MAIN PAGE COMPONENT - Switches between variants
// ============================================================================

function HomePageContent() {
  const searchParams = useSearchParams();
  const variantParam = searchParams.get("variant");
  const variant = variantParam === "dashboard" || variantParam === "welcome"
    ? variantParam
    : DEFAULT_VARIANT;

  if (variant === "dashboard") {
    return <DashboardHome />;
  }

  return <WelcomeHome />;
}

export default function HomePage() {
  return (
    <Suspense fallback={<WelcomeHome />}>
      <HomePageContent />
    </Suspense>
  );
}
