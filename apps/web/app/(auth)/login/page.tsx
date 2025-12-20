"use client";

import {
  Button,
  Card,
  CardBody,
  CardHeader,
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
        router.refresh(); // Ensure middleware picks up the new cookie
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
    <div className="min-h-screen flex items-center justify-center bg-background p-4">
      <Card className="w-full max-w-md">
        <CardHeader className="flex flex-col items-center gap-4 pt-8">
          <Image
            src="/zuca_logo_v2.png"
            alt="ZUCA"
            width={180}
            height={50}
            className="h-12 w-auto"
            priority
          />
          <p className="text-default-500 text-center">
            Zuora Use Case Architect
          </p>
        </CardHeader>
        <CardBody className="px-6 pb-6">
          <Tabs
            selectedKey={authType}
            onSelectionChange={(key) => {
              setAuthType(key as "password" | "invite");
              setValue("");
              setEmail("");
              setError("");
            }}
            className="mb-4"
            fullWidth
          >
            <Tab key="password" title="Password" />
            <Tab key="invite" title="Invite Code" />
          </Tabs>

          <form onSubmit={handleSubmit} className="space-y-4">
            {authType === "password" ? (
              <Input
                type="password"
                label="Password"
                placeholder="Enter your password..."
                value={value}
                onValueChange={setValue}
                isInvalid={!!error}
                errorMessage={error}
                autoFocus
              />
            ) : (
              <>
                <Input
                  type="text"
                  label="Invite Code"
                  placeholder="Enter your invite code..."
                  value={value}
                  onValueChange={setValue}
                  isInvalid={!!error}
                  autoFocus
                />
                <Input
                  type="email"
                  label="Email (optional)"
                  placeholder="your@email.com"
                  value={email}
                  onValueChange={setEmail}
                  description="Save your email for future logins"
                />
                {error && (
                  <p className="text-tiny text-danger">{error}</p>
                )}
              </>
            )}

            <Button
              type="submit"
              color="primary"
              className="w-full"
              isLoading={isLoading}
              isDisabled={!value.trim()}
            >
              {authType === "password" ? "Sign In" : "Use Invite Code"}
            </Button>
          </form>
        </CardBody>
      </Card>
    </div>
  );
}
