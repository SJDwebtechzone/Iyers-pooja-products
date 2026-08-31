"use client";

import { useState } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { Flame, Lock, Eye, EyeOff, ArrowRight, CheckCircle2 } from "lucide-react";

const API_URL = "http://localhost:3001";

function getPasswordError(password: string): string | null {
  if (password.length < 6) return "Password must be at least 6 characters.";
  if (!/[A-Z]/.test(password)) return "Password must contain at least one capital letter.";
  if (!/[^A-Za-z0-9]/.test(password)) return "Password must contain at least one special character.";
  return null;
}

export default function ResetPasswordPage() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const token = searchParams.get("token");

  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (!token) {
      setError("Missing or invalid reset link.");
      return;
    }

    const passwordError = getPasswordError(newPassword);
    if (passwordError) {
      setError(passwordError);
      return;
    }

    if (newPassword !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    setLoading(true);
    try {
      const res = await fetch(`${API_URL}/auth/reset-password`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ token, newPassword }),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.message || "Something went wrong.");
        return;
      }

      setSuccess(true);
      setTimeout(() => router.push("/login"), 2000);
    } catch {
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-[#FBF6EE] px-6 py-16">
      <div className="w-full max-w-sm">
        <div className="flex items-center gap-2 mb-10 justify-center">
          <Flame className="w-5 h-5 text-[#8A1C2B]" strokeWidth={1.75} />
          <span
            className="text-[#2B0C14] text-base"
            style={{ fontFamily: "'Fraunces', Georgia, serif" }}
          >
            Iyer&rsquo;s Pooja Products
          </span>
        </div>

        {success ? (
          <div className="text-center">
            <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-[#E9F5EC] border border-[#BFE3C8] flex items-center justify-center">
              <CheckCircle2 className="w-6 h-6 text-[#2E7D46]" strokeWidth={1.75} />
            </div>
            <h2
              className="text-2xl text-[#2B0C14] mb-1"
              style={{ fontFamily: "'Fraunces', Georgia, serif" }}
            >
              Password reset
            </h2>
            <p className="text-sm text-[#6B5A4E]">Redirecting you to login…</p>
          </div>
        ) : (
          <>
            <h2
              className="text-2xl text-[#2B0C14] mb-1"
              style={{ fontFamily: "'Fraunces', Georgia, serif" }}
            >
              Reset your password
            </h2>
            <p className="text-sm text-[#6B5A4E] mb-2">
              Choose a new password for your admin account.
            </p>
            <p className="text-xs text-[#8A7660] mb-6">
              Must be at least 6 characters, with one capital letter and one special character.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4" noValidate>
              <div>
                <label
                  htmlFor="newPassword"
                  className="block text-xs font-medium text-[#6B5A4E] mb-1.5"
                >
                  New password
                </label>
                <div className="relative">
                  <Lock
                    className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#B5A290]"
                    strokeWidth={1.75}
                  />
                  <input
                    id="newPassword"
                    type={showPassword ? "text" : "password"}
                    autoComplete="new-password"
                    value={newPassword}
                    onChange={(e) => setNewPassword(e.target.value)}
                    placeholder="••••••••"
                    required
                    className="w-full pl-10 pr-10 py-2.5 rounded-lg border border-[#E4D7C3] bg-white text-sm text-[#2B0C14] placeholder:text-[#B5A290] outline-none focus:border-[#8A1C2B] focus:ring-2 focus:ring-[#8A1C2B]/15 transition"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword((s) => !s)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-[#B5A290] hover:text-[#6B5A4E]"
                    aria-label={showPassword ? "Hide password" : "Show password"}
                  >
                    {showPassword ? (
                      <EyeOff className="w-4 h-4" strokeWidth={1.75} />
                    ) : (
                      <Eye className="w-4 h-4" strokeWidth={1.75} />
                    )}
                  </button>
                </div>
              </div>

              <div>
                <label
                  htmlFor="confirmPassword"
                  className="block text-xs font-medium text-[#6B5A4E] mb-1.5"
                >
                  Confirm new password
                </label>
                <div className="relative">
                  <Lock
                    className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#B5A290]"
                    strokeWidth={1.75}
                  />
                  <input
                    id="confirmPassword"
                    type={showConfirmPassword ? "text" : "password"}
                    autoComplete="new-password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    placeholder="••••••••"
                    required
                    className="w-full pl-10 pr-10 py-2.5 rounded-lg border border-[#E4D7C3] bg-white text-sm text-[#2B0C14] placeholder:text-[#B5A290] outline-none focus:border-[#8A1C2B] focus:ring-2 focus:ring-[#8A1C2B]/15 transition"
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

              {error && (
                <p className="text-xs text-[#B3261E] bg-[#FBEAE9] border border-[#F3CFCC] rounded-md px-3 py-2">
                  {error}
                </p>
              )}

              <button
                type="submit"
                disabled={loading}
                className="w-full flex items-center justify-center gap-2 py-2.5 rounded-lg bg-[#8A1C2B] text-[#F3E7D3] text-sm font-medium hover:bg-[#701623] active:scale-[0.99] transition disabled:opacity-60"
              >
                {loading ? "Resetting…" : "Reset password"}
                {!loading && <ArrowRight className="w-4 h-4" strokeWidth={2} />}
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
}