"use client";

import {
  Button,
  Card,
  CardBody,
  Input,
  Tabs,
  Tab,
} from "@heroui/react";
import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const [authType, setAuthType] = useState<"password" | "invite">("password");
  const [value, setValue] = useState("");
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");

    try {
      const res = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          type: authType,
          value,
          ...(authType === "invite" && email ? { email } : {}),
        }),
      });

      const data = await res.json();

      if (res.ok && data.success) {
        router.push("/analyze");
        router.refresh();
      } else {
        setError(data.error || "Authentication failed");
      }
    } catch {
      setError("An error occurred. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4 relative overflow-hidden">
      {/* Ambient background effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#050a08] via-[#0a1510] to-[#050807]" />

      {/* Large decorative glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px]">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/10 to-transparent rounded-full blur-3xl" />
      </div>

      {/* Decorative grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 210, 185, 0.3) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(0, 210, 185, 0.3) 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
        }}
      />

      {/* Main card container */}
      <div className="relative z-10 w-full max-w-md animate-fade-in-up">
        {/* Floating accent elements */}
        <div className="absolute -top-20 -right-20 w-40 h-40 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-secondary/5 rounded-full blur-2xl" />

        <Card className="glass-card-elevated overflow-hidden">
          {/* Top accent bar */}
          <div className="h-1 bg-gradient-to-r from-primary via-secondary to-primary" />

          <CardBody className="p-8 pt-10">
            {/* Logo and header */}
            <div className="flex flex-col items-center gap-4 mb-8">
              <div className="relative">
                <Image
                  src="/zuca_logo_v2.png"
                  alt="ZUCA"
                  width={200}
                  height={56}
                  className="h-14 w-auto"
                  priority
                />
                {/* Subtle glow behind logo */}
                <div className="absolute inset-0 bg-primary/10 blur-2xl -z-10" />
              </div>
              <div className="text-center">
                <p className="text-default-500 text-sm">
                  Zuora Use Case Architect
                </p>
                <p className="text-default-400 text-xs mt-1">
                  Enterprise Billing & Revenue Solutions
                </p>
              </div>
            </div>

            {/* Auth type tabs */}
            <Tabs
              selectedKey={authType}
              onSelectionChange={(key) => {
                setAuthType(key as "password" | "invite");
                setValue("");
                setEmail("");
                setError("");
              }}
              className="mb-6"
              fullWidth
              classNames={{
                tabList: "bg-default-100/50 p-1",
                cursor: "bg-primary",
                tab: "h-10",
                tabContent: "group-data-[selected=true]:text-black font-medium",
              }}
            >
              <Tab key="password" title="Password" />
              <Tab key="invite" title="Invite Code" />
            </Tabs>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-5">
              {authType === "password" ? (
                <div className="space-y-2">
                  <Input
                    type="password"
                    label="Password"
                    placeholder="Enter your password"
                    value={value}
                    onValueChange={setValue}
                    isInvalid={!!error}
                    errorMessage={error}
                    variant="bordered"
                    size="lg"
                    classNames={{
                      inputWrapper: "border-default-200 hover:border-primary/50 focus-within:border-primary",
                      input: "text-base",
                    }}
                    autoFocus
                  />
                </div>
              ) : (
                <div className="space-y-4">
                  <Input
                    type="text"
                    label="Invite Code"
                    placeholder="Enter your invite code"
                    value={value}
                    onValueChange={setValue}
                    isInvalid={!!error}
                    variant="bordered"
                    size="lg"
                    classNames={{
                      inputWrapper: "border-default-200 hover:border-primary/50 focus-within:border-primary",
                      input: "text-base",
                    }}
                    autoFocus
                  />
                  <Input
                    type="email"
                    label="Email (optional)"
                    placeholder="your@email.com"
                    value={email}
                    onValueChange={setEmail}
                    description="Link your email for future logins"
                    variant="bordered"
                    size="lg"
                    classNames={{
                      inputWrapper: "border-default-200 hover:border-primary/50 focus-within:border-primary",
                      input: "text-base",
                    }}
                  />
                  {error && (
                    <p className="text-sm text-danger">{error}</p>
                  )}
                </div>
              )}

              <Button
                type="submit"
                color="primary"
                size="lg"
                className="w-full font-semibold h-12 text-base"
                isLoading={isLoading}
                isDisabled={!value.trim()}
              >
                {isLoading
                  ? "Signing in..."
                  : authType === "password"
                    ? "Sign In"
                    : "Continue with Invite"
                }
              </Button>
            </form>

            {/* Footer */}
            <div className="mt-8 pt-6 border-t border-default-100">
              <div className="flex items-center justify-center gap-2 text-xs text-default-400">
                <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                <span>Powered by Zuora</span>
              </div>
            </div>
          </CardBody>
        </Card>

        {/* Version indicator */}
        <p className="text-center text-xs text-default-400 mt-4">
          Version 2.0
        </p>
      </div>
    </div>
  );
}
