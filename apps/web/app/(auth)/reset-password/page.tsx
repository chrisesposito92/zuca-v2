"use client";

import {
  Button,
  Card,
  CardBody,
  Input,
  Link,
  Spinner,
} from "@heroui/react";
import Image from "next/image";
import { useEffect, useState, Suspense } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import NextLink from "next/link";

function ResetPasswordContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const token = searchParams.get("token");

  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isValidating, setIsValidating] = useState(true);
  const [isValidToken, setIsValidToken] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  // Validate token on mount
  useEffect(() => {
    if (!token) {
      setIsValidating(false);
      return;
    }

    const validateToken = async () => {
      try {
        const res = await fetch("/api/auth/validate-reset-token", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ token }),
        });
        const data = await res.json();
        setIsValidToken(data.valid);
      } catch {
        setIsValidToken(false);
      } finally {
        setIsValidating(false);
      }
    };

    validateToken();
  }, [token]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    if (password.length < 8) {
      setError("Password must be at least 8 characters");
      return;
    }

    setIsLoading(true);

    try {
      const res = await fetch("/api/auth/reset-password", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ token, password }),
      });

      const data = await res.json();

      if (res.ok) {
        setSuccess(true);
        setTimeout(() => router.push("/login"), 3000);
      } else {
        setError(data.error || "Failed to reset password");
      }
    } catch {
      setError("An error occurred. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  // Loading state
  if (isValidating) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Spinner size="lg" color="primary" />
      </div>
    );
  }

  // Invalid or missing token
  if (!token || !isValidToken) {
    return (
      <div className="min-h-screen flex items-center justify-center p-4">
        <div className="w-full max-w-md">
          <Card className="glass-card-elevated overflow-hidden">
            <div className="h-1 bg-gradient-to-r from-danger via-danger to-danger" />
            <CardBody className="p-8 text-center">
              <div className="w-16 h-16 bg-danger/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-danger" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
              </div>
              <h2 className="text-xl font-semibold mb-2">Invalid Reset Link</h2>
              <p className="text-default-500 mb-6">
                This password reset link is invalid or has expired.
              </p>
              <Link as={NextLink} href="/forgot-password" className="text-primary">
                Request a new reset link
              </Link>
            </CardBody>
          </Card>
        </div>
      </div>
    );
  }

  // Success state
  if (success) {
    return (
      <div className="min-h-screen flex items-center justify-center p-4">
        <div className="w-full max-w-md">
          <Card className="glass-card-elevated overflow-hidden">
            <div className="h-1 bg-gradient-to-r from-success via-success to-success" />
            <CardBody className="p-8 text-center">
              <div className="w-16 h-16 bg-success/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-success" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h2 className="text-xl font-semibold mb-2">Password Reset!</h2>
              <p className="text-default-500 mb-4">
                Your password has been successfully reset.
              </p>
              <p className="text-sm text-default-400">
                Redirecting to sign in...
              </p>
            </CardBody>
          </Card>
        </div>
      </div>
    );
  }

  // Reset form
  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <Card className="glass-card-elevated overflow-hidden">
          <div className="h-1 bg-gradient-to-r from-primary via-secondary to-primary" />
          <CardBody className="p-8">
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

            <h2 className="text-xl font-semibold text-center mb-2">Set New Password</h2>
            <p className="text-default-500 text-center text-sm mb-6">
              Enter your new password below.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <Input
                type="password"
                label="New Password"
                placeholder="Min 8 characters"
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
                autoFocus
              />

              <Input
                type="password"
                label="Confirm New Password"
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
                isDisabled={!password || !confirmPassword}
              >
                {isLoading ? "Resetting..." : "Reset Password"}
              </Button>
            </form>
          </CardBody>
        </Card>
      </div>
    </div>
  );
}

export default function ResetPasswordPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen flex items-center justify-center">
        <Spinner size="lg" color="primary" />
      </div>
    }>
      <ResetPasswordContent />
    </Suspense>
  );
}
