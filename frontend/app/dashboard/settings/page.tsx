"use client";

import { useState } from "react";
import { Mail, Lock, Eye, EyeOff, ArrowRight } from "lucide-react";

const API_URL = "http://localhost:3001";

function getPasswordError(password: string): string | null {
  if (password.length < 6) return "New password must be at least 6 characters.";
  if (!/[A-Z]/.test(password)) return "New password must contain at least one capital letter.";
  if (!/[^A-Za-z0-9]/.test(password)) return "New password must contain at least one special character.";
  return null;
}

export default function SettingsPage() {
  const [currentPassword, setCurrentPassword] = useState("");
  const [newEmail, setNewEmail] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const [showCurrentPassword, setShowCurrentPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    setMessage("");

    if (!currentPassword) {
      setError("Enter your current password to confirm changes.");
      return;
    }

    if (!newEmail && !newPassword) {
      setError("Enter a new email or new password to update.");
      return;
    }

    if (newPassword) {
      const passwordError = getPasswordError(newPassword);
      if (passwordError) {
        setError(passwordError);
        return;
      }
      if (newPassword !== confirmPassword) {
        setError("New passwords do not match.");
        return;
      }
    }

    setLoading(true);
    try {
      const res = await fetch(`${API_URL}/auth/settings`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        credentials: "include", // sends the httpOnly JWT cookie
        body: JSON.stringify({
          currentPassword,
          newEmail: newEmail || undefined,
          newPassword: newPassword || undefined,
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.message || "Something went wrong.");
        return;
      }

      setMessage(data.message);
      setCurrentPassword("");
      setNewEmail("");
      setNewPassword("");
      setConfirmPassword("");
    } catch {
      setError("Couldn't reach the server. Is the backend running?");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="max-w-md">
      <h2
        className="text-2xl text-[#2B0C14] mb-1"
        style={{ fontFamily: "'Fraunces', Georgia, serif" }}
      >
        Account settings
      </h2>
      <p className="text-sm text-[#6B5A4E] mb-8">
        Update your admin email or password. Your current password is
        required to confirm any change.
      </p>

      <form onSubmit={handleSubmit} className="space-y-4" noValidate>
        <div>
          <label className="block text-xs font-medium text-[#6B5A4E] mb-1.5">
            New email (optional)
          </label>
          <div className="relative">
            <Mail
              className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#B5A290]"
              strokeWidth={1.75}
            />
            <input
              type="email"
              value={newEmail}
              onChange={(e) => setNewEmail(e.target.value)}
              placeholder="Leave blank to keep current email"
              className="w-full pl-10 pr-3 py-2.5 rounded-lg border border-[#E4D7C3] bg-white text-sm text-[#2B0C14] placeholder:text-[#B5A290] outline-none focus:border-[#8A1C2B] focus:ring-2 focus:ring-[#8A1C2B]/15 transition"
            />
          </div>
        </div>

        <div>
          <label className="block text-xs font-medium text-[#6B5A4E] mb-1.5">
            New password (optional)
          </label>
          <p className="text-[11px] text-[#8A7660] mb-1.5">
            At least 6 characters, one capital letter, one special character.
          </p>
          <div className="relative">
            <Lock
              className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#B5A290]"
              strokeWidth={1.75}
            />
            <input
              type={showNewPassword ? "text" : "password"}
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              placeholder="Leave blank to keep current password"
              className="w-full pl-10 pr-10 py-2.5 rounded-lg border border-[#E4D7C3] bg-white text-sm text-[#2B0C14] placeholder:text-[#B5A290] outline-none focus:border-[#8A1C2B] focus:ring-2 focus:ring-[#8A1C2B]/15 transition"
            />
            <button
              type="button"
              onClick={() => setShowNewPassword((s) => !s)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-[#B5A290] hover:text-[#6B5A4E]"
              aria-label={showNewPassword ? "Hide password" : "Show password"}
            >
              {showNewPassword ? (
                <EyeOff className="w-4 h-4" strokeWidth={1.75} />
              ) : (
                <Eye className="w-4 h-4" strokeWidth={1.75} />
              )}
            </button>
          </div>
        </div>

        {newPassword && (
          <div>
            <label className="block text-xs font-medium text-[#6B5A4E] mb-1.5">
              Confirm new password
            </label>
            <div className="relative">
              <Lock
                className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#B5A290]"
                strokeWidth={1.75}
              />
              <input
                type={showConfirmPassword ? "text" : "password"}
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="w-full pl-10 pr-10 py-2.5 rounded-lg border border-[#E4D7C3] bg-white text-sm text-[#2B0C14] outline-none focus:border-[#8A1C2B] focus:ring-2 focus:ring-[#8A1C2B]/15 transition"
              />
              <button
                type="button"
                onClick={() => setShowConfirmPassword((s) => !s)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-[#B5A290] hover:text-[#6B5A4E]"
                aria-label={showConfirmPassword ? "Hide password" : "Show password"}
              >
                {showConfirmPassword ? (
                  <EyeOff className="w-4 h-4" strokeWidth={1.75} />
                ) : (
                  <Eye className="w-4 h-4" strokeWidth={1.75} />
                )}
              </button>
            </div>
          </div>
        )}

        <div className="pt-2 border-t border-[#E4D7C3]">
          <label className="block text-xs font-medium text-[#6B5A4E] mb-1.5 mt-4">
            Current password (required to confirm)
          </label>
          <div className="relative">
            <Lock
              className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#B5A290]"
              strokeWidth={1.75}
            />
            <input
              type={showCurrentPassword ? "text" : "password"}
              value={currentPassword}
              onChange={(e) => setCurrentPassword(e.target.value)}
              className="w-full pl-10 pr-10 py-2.5 rounded-lg border border-[#E4D7C3] bg-white text-sm text-[#2B0C14] outline-none focus:border-[#8A1C2B] focus:ring-2 focus:ring-[#8A1C2B]/15 transition"
            />
            <button
              type="button"
              onClick={() => setShowCurrentPassword((s) => !s)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-[#B5A290] hover:text-[#6B5A4E]"
              aria-label={showCurrentPassword ? "Hide password" : "Show password"}
            >
              {showCurrentPassword ? (
                <EyeOff className="w-4 h-4" strokeWidth={1.75} />
              ) : (
                <Eye className="w-4 h-4" strokeWidth={1.75} />
              )}
            </button>
          </div>
        </div>

        {message && (
          <p className="text-xs text-[#2B6A3D] bg-[#EAF7EE] border border-[#CDEBD6] rounded-md px-3 py-2">
            {message}
          </p>
        )}

        {error && (
          <p className="text-xs text-[#B3261E] bg-[#FBEAE9] border border-[#F3CFCC] rounded-md px-3 py-2">
            {error}
          </p>
        )}

        <button
          type="submit"
          disabled={loading}
          className="flex items-center justify-center gap-2 py-2.5 px-5 rounded-lg bg-[#8A1C2B] text-[#F3E7D3] text-sm font-medium hover:bg-[#701623] active:scale-[0.99] transition disabled:opacity-60"
        >
          {loading ? "Saving…" : "Save changes"}
          {!loading && <ArrowRight className="w-4 h-4" strokeWidth={2} />}
        </button>
      </form>
    </div>
  );
}