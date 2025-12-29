"use client";

import {
  Button,
  Card,
  CardBody,
  Input,
  Tabs,
  Tab,
  Link,
} from "@heroui/react";
import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const [mode, setMode] = useState<"login" | "register">("login");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");

    // Validate for registration
    if (mode === "register") {
      if (password !== confirmPassword) {
        setError("Passwords do not match");
        setIsLoading(false);
        return;
      }
      if (password.length < 8) {
        setError("Password must be at least 8 characters");
        setIsLoading(false);
        return;
      }
    }

    try {
      const endpoint = mode === "login" ? "/api/auth/login" : "/api/auth/register";
      const res = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
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

  const isFormValid = mode === "login"
    ? email.trim() && password.trim()
    : email.trim() && password.trim() && confirmPassword.trim();

  return (
    <div className="min-h-screen flex items-center justify-center p-4 relative overflow-hidden">

      {/* Main card container */}
      <div className="relative z-10 w-full max-w-md animate-fade-in-up">

        <Card className="glass-card-elevated overflow-hidden">
          {/* Top accent bar */}
          <div className="h-1 bg-gradient-to-r from-primary via-secondary to-primary" />

          <CardBody className="p-8 pt-10">
            {/* Logo and header */}
            <div className="flex flex-col items-center gap-4 mb-8">
              <div className="relative">
                <Image
                  src="/zuca_logo_dark_v1.png"
                  alt="ZUCA"
                  width={200}
                  height={56}
                  className="w-full h-auto transition-transform group-hover:scale-[1.02]"
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

            {/* Auth mode tabs */}
            <Tabs
              selectedKey={mode}
              onSelectionChange={(key) => {
                setMode(key as "login" | "register");
                setError("");
                setPassword("");
                setConfirmPassword("");
              }}
              className="mb-6"
              fullWidth
              classNames={{
                tabList: "bg-default-100/50 p-1",
                cursor: "bg-primary",
                tab: "h-10",
                tabContent: "group-data-[selected=true]:text-white group-data-[selected=false]:text-default-300 font-medium",
              }}
            >
              <Tab key="login" title="Sign In" />
              <Tab key="register" title="Create Account" />
            </Tabs>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              <Input
                type="email"
                label="Email"
                placeholder="you@company.com"
                value={email}
                onValueChange={(val) => {
                  setEmail(val);
                  setError("");
                }}
                variant="bordered"
                size="lg"
                classNames={{
                  inputWrapper: "border-default-200 hover:border-primary/50 focus-within:border-primary",
                  input: "text-base",
                }}
                autoFocus
              />

              <Input
                type="password"
                label="Password"
                placeholder={mode === "register" ? "Min 8 characters" : "Enter your password"}
                value={password}
                onValueChange={(val) => {
                  setPassword(val);
                  setError("");
                }}
                variant="bordered"
                size="lg"
                classNames={{
                  inputWrapper: "border-default-200 hover:border-primary/50 focus-within:border-primary",
                  input: "text-base",
                }}
              />

              {mode === "register" && (
                <Input
                  type="password"
                  label="Confirm Password"
                  placeholder="Re-enter your password"
                  value={confirmPassword}
                  onValueChange={(val) => {
                    setConfirmPassword(val);
                    setError("");
                  }}
                  variant="bordered"
                  size="lg"
                  classNames={{
                    inputWrapper: "border-default-200 hover:border-primary/50 focus-within:border-primary",
                    input: "text-base",
                  }}
                />
              )}

              {error && (
                <div className="p-3 rounded-lg bg-danger/10 border border-danger/20">
                  <p className="text-sm text-danger">{error}</p>
                </div>
              )}

              <Button
                type="submit"
                color="primary"
                size="lg"
                className="w-full font-semibold h-12 text-base mt-2"
                isLoading={isLoading}
                isDisabled={!isFormValid}
              >
                {isLoading
                  ? mode === "login" ? "Signing in..." : "Creating account..."
                  : mode === "login" ? "Sign In" : "Create Account"
                }
              </Button>
            </form>

            {/* Mode switch prompt */}
            <div className="mt-6 text-center">
              <p className="text-sm text-default-400">
                {mode === "login" ? (
                  <>
                    Don&apos;t have an account?{" "}
                    <Link
                      as="button"
                      className="text-primary font-medium"
                      onPress={() => {
                        setMode("register");
                        setError("");
                        setPassword("");
                        setConfirmPassword("");
                      }}
                    >
                      Create one
                    </Link>
                  </>
                ) : (
                  <>
                    Already have an account?{" "}
                    <Link
                      as="button"
                      className="text-primary font-medium"
                      onPress={() => {
                        setMode("login");
                        setError("");
                        setPassword("");
                        setConfirmPassword("");
                      }}
                    >
                      Sign in
                    </Link>
                  </>
                )}
              </p>
            </div>

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
