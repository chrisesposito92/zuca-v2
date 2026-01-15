"use client";

import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Divider,
  Input,
} from "@heroui/react";
import { useState } from "react";
import { useAuth } from "@/hooks/useAuth";

export default function SettingsPage() {
  const { user } = useAuth();
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleChangePassword = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    if (newPassword !== confirmPassword) {
      setError("New passwords do not match");
      return;
    }

    if (newPassword.length < 8) {
      setError("New password must be at least 8 characters");
      return;
    }

    setIsLoading(true);

    try {
      const res = await fetch("/api/auth/change-password", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ currentPassword, newPassword }),
      });

      const data = await res.json();

      if (res.ok) {
        setSuccess("Password changed successfully!");
        setCurrentPassword("");
        setNewPassword("");
        setConfirmPassword("");
      } else {
        setError(data.error || "Failed to change password");
      }
    } catch {
      setError("An error occurred. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const isFormValid = currentPassword && newPassword && confirmPassword;

  return (
    <div className="max-w-2xl mx-auto space-y-6">
      <div>
        <h1 className="text-2xl font-bold">Settings</h1>
        <p className="text-default-500">Manage your account settings</p>
      </div>

      {/* Account Info */}
      <Card className="glass-card">
        <CardHeader className="pb-2">
          <h2 className="text-lg font-semibold">Account</h2>
        </CardHeader>
        <CardBody className="pt-2">
          <div className="space-y-4">
            <div>
              <label className="text-sm text-default-500">Email</label>
              <p className="text-foreground">{user?.email || "—"}</p>
            </div>
            <div>
              <label className="text-sm text-default-500">Login Method</label>
              <p className="text-foreground capitalize">{user?.provider || "—"}</p>
            </div>
          </div>
        </CardBody>
      </Card>

      {/* Change Password */}
      {user?.provider === "email" && (
        <Card className="glass-card">
          <CardHeader className="pb-2">
            <h2 className="text-lg font-semibold">Change Password</h2>
          </CardHeader>
          <Divider />
          <CardBody className="pt-4">
            <form onSubmit={handleChangePassword} className="space-y-4">
              <Input
                type="password"
                label="Current Password"
                placeholder="Enter your current password"
                value={currentPassword}
                onValueChange={(val) => {
                  setCurrentPassword(val);
                  setError("");
                  setSuccess("");
                }}
                variant="bordered"
              />

              <Input
                type="password"
                label="New Password"
                placeholder="Min 8 characters"
                value={newPassword}
                onValueChange={(val) => {
                  setNewPassword(val);
                  setError("");
                  setSuccess("");
                }}
                variant="bordered"
              />

              <Input
                type="password"
                label="Confirm New Password"
                placeholder="Re-enter new password"
                value={confirmPassword}
                onValueChange={(val) => {
                  setConfirmPassword(val);
                  setError("");
                  setSuccess("");
                }}
                variant="bordered"
              />

              {error && (
                <div className="p-3 rounded-lg bg-danger/10 border border-danger/20">
                  <p className="text-sm text-danger">{error}</p>
                </div>
              )}

              {success && (
                <div className="p-3 rounded-lg bg-success/10 border border-success/20">
                  <p className="text-sm text-success">{success}</p>
                </div>
              )}

              <Button
                type="submit"
                color="primary"
                isLoading={isLoading}
                isDisabled={!isFormValid}
              >
                {isLoading ? "Changing..." : "Change Password"}
              </Button>
            </form>
          </CardBody>
        </Card>
      )}
    </div>
  );
}
