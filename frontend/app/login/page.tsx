"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Flame, Mail, Lock, Eye, EyeOff, ArrowRight } from "lucide-react";
import Link from "next/link";

const API_URL = "http://localhost:3001";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [remember, setRemember] = useState(true);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");

    if (!email || !password) {
      setError("Enter your email and password to continue.");
      return;
    }

    setLoading(true);
    try {
      const res = await fetch(`${API_URL}/auth/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include", // required so the httpOnly cookie gets saved
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.message || "Invalid email or password.");
        setLoading(false);
        return;
      }

      router.push("/dashboard");
    } catch {
      setError("Couldn't reach the server. Is the backend running?");
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen w-full flex items-stretch bg-[#1F0A10]">
      {/* Left panel — brand / signature element */}
      <div className="hidden lg:flex lg:w-[42%] relative flex-col justify-between p-12 overflow-hidden bg-[#2B0C14]">
        <div
          className="absolute inset-0 opacity-[0.07]"
          style={{
            backgroundImage:
              "radial-gradient(circle at 20% 20%, #D4A017 0, transparent 45%), radial-gradient(circle at 80% 70%, #D4A017 0, transparent 40%)",
          }}
        />
        <svg
          className="absolute bottom-0 left-0 right-0 opacity-20"
          viewBox="0 0 400 200"
          fill="none"
        >
          <path
            d="M0 200 L0 140 Q40 130 60 100 Q80 60 200 40 Q320 60 340 100 Q360 130 400 140 L400 200 Z"
            stroke="#D4A017"
            strokeWidth="1.5"
          />
          <path
            d="M40 200 L40 155 Q120 130 200 130 Q280 130 360 155 L360 200"
            stroke="#D4A017"
            strokeWidth="1"
          />
        </svg>

        <div className="relative z-10 flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-[#D4A017]/15 border border-[#D4A017]/40 flex items-center justify-center">
            <Flame className="w-5 h-5 text-[#D4A017]" strokeWidth={1.75} />
          </div>
          <span
            className="text-[#F3E7D3] text-lg tracking-wide"
            style={{ fontFamily: "'Fraunces', Georgia, serif" }}
          >
            Iyer&rsquo;s Pooja Products
          </span>
        </div>

        <div className="relative z-10 max-w-sm">
          <h1
            className="text-4xl leading-tight text-[#F3E7D3] mb-4"
            style={{ fontFamily: "'Fraunces', Georgia, serif" }}
          >
            Every offering,
            <br />
            in its right order.
          </h1>
          <p className="text-[#D9C4A9]/70 text-sm leading-relaxed">
            Manage temple kits, festival packages, and customer requests from
            one place.
          </p>
        </div>

        <p className="relative z-10 text-[11px] text-[#D9C4A9]/40 tracking-wide uppercase">
          Admin Console
        </p>
      </div>

      {/* Right panel — form */}
      <div className="flex-1 flex items-center justify-center px-6 py-16 bg-[#FBF6EE]">
        <div className="w-full max-w-sm">
          <div className="lg:hidden flex items-center gap-2 mb-10">
            <Flame className="w-5 h-5 text-[#8A1C2B]" strokeWidth={1.75} />
            <span
              className="text-[#2B0C14] text-base"
              style={{ fontFamily: "'Fraunces', Georgia, serif" }}
            >
              Iyer&rsquo;s Pooja Products
            </span>
          </div>

          <h2
            className="text-2xl text-[#2B0C14] mb-1"
            style={{ fontFamily: "'Fraunces', Georgia, serif" }}
          >
            Sign in
          </h2>
          <p className="text-sm text-[#6B5A4E] mb-8">
            Enter your admin credentials to open the dashboard.
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
                  autoComplete="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@iyerspooja.com"
                  className="w-full pl-10 pr-3 py-2.5 rounded-lg border border-[#E4D7C3] bg-white text-sm text-[#2B0C14] placeholder:text-[#B5A290] outline-none focus:border-[#8A1C2B] focus:ring-2 focus:ring-[#8A1C2B]/15 transition"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between mb-1.5">
                <label
                  htmlFor="password"
                  className="block text-xs font-medium text-[#6B5A4E]"
                >
                  Password
                </label>
                <Link
  href="/forgot-password"
  className="text-xs text-[#8A1C2B] hover:underline"
>
  Forgot password?
</Link>
              </div>
              <div className="relative">
                <Lock
                  className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#B5A290]"
                  strokeWidth={1.75}
                />
                <input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  autoComplete="current-password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
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

            <label className="flex items-center gap-2 text-xs text-[#6B5A4E] cursor-pointer select-none">
              <input
                type="checkbox"
                checked={remember}
                onChange={(e) => setRemember(e.target.checked)}
                className="w-3.5 h-3.5 rounded border-[#E4D7C3] accent-[#8A1C2B]"
              />
              Keep me signed in
            </label>

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
              {loading ? "Signing in…" : "Sign in"}
              {!loading && <ArrowRight className="w-4 h-4" strokeWidth={2} />}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}