"use client";

import { Button, Divider, Skeleton } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useAuth } from "../../hooks/useAuth";

const navItems = [
  { href: "/analyze", label: "New Analysis", icon: "+" },
  { href: "/history", label: "History", icon: "📋" },
];

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const { user, isLoading, logout } = useAuth();

  return (
    <div className="flex h-screen bg-background">
      {/* Sidebar */}
      <aside className="w-64 border-r border-default-200 flex flex-col">
        {/* Logo */}
        <div className="p-4">
          <Link href="/analyze" className="flex items-center gap-2">
            <Image
              src="/zuca_logo_v2.png"
              alt="ZUCA"
              width={140}
              height={40}
              className="h-10 w-auto"
              priority
            />
          </Link>
        </div>

        <Divider />

        {/* Navigation */}
        <nav className="flex-1 p-4 space-y-2">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href}>
              <Button
                variant={pathname === item.href ? "solid" : "light"}
                color={pathname === item.href ? "primary" : "default"}
                className="w-full justify-start"
                startContent={<span>{item.icon}</span>}
              >
                {item.label}
              </Button>
            </Link>
          ))}
        </nav>

        <Divider />

        {/* User section */}
        <div className="p-4 space-y-3">
          {isLoading ? (
            <Skeleton className="h-4 w-24 rounded" />
          ) : user ? (
            <>
              <p className="text-xs text-default-500 truncate">
                {user.type === "password" ? "Admin" : `User: ${user.userId.slice(0, 8)}...`}
              </p>
              <Button
                size="sm"
                variant="flat"
                color="danger"
                className="w-full"
                onPress={logout}
              >
                Sign Out
              </Button>
            </>
          ) : null}
        </div>

        <Divider />

        {/* Footer */}
        <div className="p-4">
          <p className="text-xs text-default-500">
            Zuora Use Case Architect v2
          </p>
        </div>
      </aside>

      {/* Main content */}
      <main className="flex-1 overflow-auto">
        <div className="container mx-auto p-6 max-w-6xl">
          {children}
        </div>
      </main>
    </div>
  );
}
