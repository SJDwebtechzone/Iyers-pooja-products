"use client";

import { useState } from "react";
import Link from "next/link";
import { Mail, ArrowRight } from "lucide-react";

const API_URL = "http://localhost:3001";

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    setMessage("");

    if (!email) {
      setError("Enter your email address.");
      return;
    }

    setLoading(true);
    try {
      const res = await fetch(`${API_URL}/auth/forgot-password`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.message || "Something went wrong.");
        return;
      }

      setMessage(data.message);
    } catch {
      setError("Couldn't reach the server. Is the backend running?");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-[#FBF6EE] px-6">
      <div className="w-full max-w-sm">
        <h2
          className="text-2xl text-[#2B0C14] mb-1"
          style={{ fontFamily: "'Fraunces', Georgia, serif" }}
        >
          Forgot password
        </h2>
        <p className="text-sm text-[#6B5A4E] mb-8">
          Enter your admin email and we&rsquo;ll send you a reset link.
        </p>

        <form onSubmit={handleSubmit} className="space-y-4" noValidate>
          <div>
            <label
              htmlFor="email"
              className="block text-xs font-medium text-[#6B5A4E] mb-1.5"
            >
              Email
            </label>
            <div className="relative">
              <Mail
                className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#B5A290]"
                strokeWidth={1.75}
              />
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@iyerspooja.com"
                className="w-full pl-10 pr-3 py-2.5 rounded-lg border border-[#E4D7C3] bg-white text-sm text-[#2B0C14] placeholder:text-[#B5A290] outline-none focus:border-[#8A1C2B] focus:ring-2 focus:ring-[#8A1C2B]/15 transition"
              />
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
            className="w-full flex items-center justify-center gap-2 py-2.5 rounded-lg bg-[#8A1C2B] text-[#F3E7D3] text-sm font-medium hover:bg-[#701623] active:scale-[0.99] transition disabled:opacity-60"
          >
            {loading ? "Sending…" : "Send reset link"}
            {!loading && <ArrowRight className="w-4 h-4" strokeWidth={2} />}
          </button>

          <Link
            href="/login"
            className="block text-center text-xs text-[#8A1C2B] hover:underline"
          >
            Back to sign in
          </Link>
        </form>
      </div>
    </div>
  );
}