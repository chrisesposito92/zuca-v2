"use client";

import {
  Button,
  Card,
  CardBody,
  Input,
  Link,
} from "@heroui/react";
import Image from "next/image";
import { useState } from "react";
import NextLink from "next/link";

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [resetUrl, setResetUrl] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");

    try {
      const res = await fetch("/api/auth/forgot-password", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      const data = await res.json();

      if (res.ok) {
        setSubmitted(true);
        if (data.resetUrl) {
          setResetUrl(data.resetUrl);
        }
      } else {
        setError(data.error || "Something went wrong");
      }
    } catch {
      setError("An error occurred. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  if (submitted) {
    return (
      <div className="min-h-screen flex items-center justify-center p-4">
        <div className="w-full max-w-md">
          <Card className="glass-card-elevated overflow-hidden">
            <div className="h-1 bg-gradient-to-r from-primary via-secondary to-primary" />
            <CardBody className="p-8 text-center">
              <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h2 className="text-xl font-semibold mb-2">
                {resetUrl ? "Reset Link Ready" : "Check your email"}
              </h2>
              {resetUrl ? (
                <>
                  <p className="text-default-500 mb-4">
                    Click the link below to reset your password:
                  </p>
                  <div className="p-3 rounded-lg bg-default-100 border border-default-200 mb-6">
                    <Link
                      as={NextLink}
                      href={resetUrl}
                      className="text-primary text-sm break-all"
                    >
                      {resetUrl}
                    </Link>
                  </div>
                </>
              ) : (
                <p className="text-default-500 mb-6">
                  If an account exists for <span className="text-foreground">{email}</span>,
                  you&apos;ll receive a password reset link shortly.
                </p>
              )}
              <Link as={NextLink} href="/login" className="text-primary">
                Back to sign in
              </Link>
            </CardBody>
          </Card>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <Card className="glass-card-elevated overflow-hidden">
          <div className="h-1 bg-gradient-to-r from-primary via-secondary to-primary" />
          <CardBody className="p-8">
            {/* Logo */}
            <div className="flex flex-col items-center gap-2 mb-8">
              <Image
                src="/zuca_logo_dark_v1.png"
                alt="ZUCA"
                width={200}
                height={56}
                className="w-full h-auto -my-8"
                priority
              />
            </div>

            <h2 className="text-xl font-semibold text-center mb-2">Forgot your password?</h2>
            <p className="text-default-500 text-center text-sm mb-6">
              Enter your email and we&apos;ll send you a reset link.
            </p>

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

              {error && (
                <div className="p-3 rounded-lg bg-danger/10 border border-danger/20">
                  <p className="text-sm text-danger">{error}</p>
                </div>
              )}

              <Button
                type="submit"
                color="primary"
                size="lg"
                className="w-full font-semibold h-12"
                isLoading={isLoading}
                isDisabled={!email.trim()}
              >
                {isLoading ? "Sending..." : "Send Reset Link"}
              </Button>
            </form>

            <div className="mt-6 text-center">
              <Link as={NextLink} href="/login" className="text-sm text-primary">
                Back to sign in
              </Link>
            </div>
          </CardBody>
        </Card>
      </div>
    </div>
  );
}
