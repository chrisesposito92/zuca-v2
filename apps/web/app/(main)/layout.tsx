"use client";

import { Button, Skeleton } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useAuth } from "../../hooks/useAuth";
import { BugReportModal } from "@/components/BugReportModal";

const navItems = [
  { href: "/analyze", label: "New Analysis", icon: "+" },
  { href: "/revenue-snapshot", label: "Revenue Snapshot", icon: "table" },
  { href: "/history", label: "History", icon: "clock" },
];

// Custom icons as SVG components for a cleaner look
const icons = {
  "+": (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
    </svg>
  ),
  clock: (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  ),
  table: (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 6h18M3 10h18M3 14h18M3 18h18" />
    </svg>
  ),
  logout: (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
    </svg>
  ),
};

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const { user, isLoading, logout } = useAuth();

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <aside className="w-72 glass-sidebar flex flex-col relative">
        {/* Decorative top accent line */}
        <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-primary to-transparent opacity-50" />

        {/* Logo */}
        <div className="p-6 pt-8">
          <Link href="/analyze" className="flex items-center gap-3 group">
            <div className="relative">
              <Image
                src="/zuca_logo_v2.png"
                alt="ZUCA"
                width={160}
                height={45}
                className="h-11 w-auto transition-transform group-hover:scale-[1.02]"
                priority
              />
              {/* Subtle glow behind logo on hover */}
              <div className="absolute inset-0 bg-primary/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity -z-10" />
            </div>
          </Link>
        </div>

        {/* Divider with glow */}
        <div className="mx-4 divider-glow" />

        {/* Navigation */}
        <nav className="flex-1 p-4 space-y-2 mt-2">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link key={item.href} href={item.href}>
                <button
                  className={`
                    w-full flex items-center gap-3 px-4 py-3 rounded-xl
                    transition-all duration-200 text-left font-medium
                    ${isActive
                      ? 'bg-primary text-black teal-glow-subtle'
                      : 'text-default-600 hover:text-foreground hover:bg-default-100/50'
                    }
                  `}
                >
                  <span className={`${isActive ? 'text-black' : 'text-primary'}`}>
                    {icons[item.icon as keyof typeof icons]}
                  </span>
                  {item.label}
                  {isActive && (
                    <span className="ml-auto w-2 h-2 bg-black/30 rounded-full" />
                  )}
                </button>
              </Link>
            );
          })}
        </nav>

        {/* User section */}
        <div className="p-4 mt-auto">
          {/* Divider with glow */}
          <div className="mb-4 divider-glow" />

          {isLoading ? (
            <div className="space-y-2">
              <Skeleton className="h-4 w-20 rounded" />
              <Skeleton className="h-9 w-full rounded-lg" />
            </div>
          ) : user ? (
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center">
                  <span className="text-primary text-sm font-semibold">
                    {user.email ? user.email[0].toUpperCase() : "U"}
                  </span>
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-foreground truncate">
                    {user.email || "User"}
                  </p>
                  <p className="text-xs text-default-500 truncate">
                    {user.provider === "email" ? "Email login" : user.provider}
                  </p>
                </div>
              </div>
              <Button
                size="sm"
                variant="flat"
                className="w-full bg-danger/10 text-danger hover:bg-danger/20"
                startContent={icons.logout}
                onPress={logout}
              >
                Sign Out
              </Button>
            </div>
          ) : null}
        </div>

        {/* Footer */}
        <div className="p-4 pt-2">
          <div className="flex items-center gap-2 text-xs text-default-400">
            <div className="w-1.5 h-1.5 bg-primary rounded-full pulse-teal" />
            <span>ZUCA v2</span>
          </div>
        </div>
      </aside>

      {/* Main content */}
      <main className="flex-1 overflow-auto relative ambient-glow">
        <div className="relative z-10 p-6 max-w-[1600px] mx-auto">
          {children}
        </div>
      </main>

      {/* Floating bug report button */}
      <BugReportModal />
    </div>
  );
}
