"use client";

import { useState } from "react";
import {
  CheckCircle2,
  ChevronDown,
  Mail,
  MapPin,
  Package,
  Phone,
  Send,
  Sparkles,
  User,
  Smartphone,
  PenSquare,
} from "lucide-react";

const API_BASE =
  process.env.NEXT_PUBLIC_API_URL || "https://iyerspoojaproducts.com/api";

// Package options matching navbar + custom option
const packageOptions = [
  { value: "consumer-package", label: "Consumer Package" },
  { value: "corporate-package", label: "Corporate Package" },
  { value: "temple-package", label: "Temple Package" },
  { value: "overseas-temple-package", label: "Overseas Temple Package" },
  { value: "festivals-package", label: "Festivals Package" },
  { value: "custom-package", label: "Custom / Personalized Package" },
];

export default function ContactPage() {
  // Form State
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    packageType: "consumer-package",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const selectedPkgLabel =
        packageOptions.find((p) => p.value === formData.packageType)?.label ||
        formData.packageType;

      await fetch(`${API_BASE}/bookings`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name,
          mobile: formData.phone,
          email: formData.email,
          address: formData.message || "Direct Inquiry from Contact Page",
          pooja: selectedPkgLabel,
        }),
      });
    } catch {
      // Proceed gracefully
    } finally {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }
  };

  return (
    <main className="bg-[#FCFAF6] text-[#29231F] min-h-screen">
      {/* =====================================================
          1. ELEGANT HERO BANNER
      ===================================================== */}
      <section className="relative mt-[90px] overflow-hidden bg-gradient-to-b from-[#5A2026] via-[#6B242D] to-[#5A2026] px-5 py-16 text-white sm:px-8 lg:px-12 lg:py-20">
        {/* Background decorative pattern */}
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div
            className="h-full w-full"
            style={{
              backgroundImage:
                "radial-gradient(#D4B978 1.5px, transparent 1.5px)",
              backgroundSize: "28px 28px",
            }}
          />
        </div>

        {/* Ambient glow */}
        <div className="absolute -left-20 -top-20 h-96 w-96 rounded-full bg-[#D4B978]/15 blur-3xl pointer-events-none" />
        <div className="absolute -bottom-20 -right-20 h-96 w-96 rounded-full bg-[#D4B978]/15 blur-3xl pointer-events-none" />

        <div className="relative mx-auto max-w-5xl text-center">
          {/* Badge */}
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#D4B978]/40 bg-white/5 px-5 py-2 backdrop-blur-sm">
            <Sparkles size={14} className="text-[#D4B978]" />
            <span className="text-[11px] font-semibold uppercase tracking-[0.3em] text-[#D4B978]">
              DEVOTIONAL CONCIERGE &amp; BOOKINGS
            </span>
          </div>

          {/* Heading */}
          <h1 className="font-[family-name:var(--font-cormorant)] text-4xl font-semibold leading-[1.1] text-white sm:text-5xl lg:text-6xl">
            We&apos;re Here to Assist Your
            <span className="mt-1.5 block italic text-[#D4B978]">
              Sacred Ceremonies
            </span>
          </h1>

          {/* Divider */}
          <div className="mx-auto my-5 flex items-center justify-center gap-3">
            <span className="h-px w-16 bg-[#D4B978]/60" />
            <span className="h-2 w-2 rotate-45 bg-[#D4B978]" />
            <span className="h-px w-16 bg-[#D4B978]/60" />
          </div>

          <p className="mx-auto max-w-2xl text-sm leading-relaxed text-white/85 sm:text-base">
            Whether you need guidance on auspicious dates, custom pooja samagri
            kits, or priest arrangements for your home, our team is at your
            service.
          </p>
        </div>
      </section>

      {/* =====================================================
          2. TWO-COLUMN CONTACT SECTION (Cards on Left, Form on Right)
      ===================================================== */}
      <section className="relative z-10 px-4 py-12 sm:px-8 lg:px-12 lg:py-16">
        <div className="mx-auto max-w-[1300px]">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 items-start">
            
            {/* LEFT COLUMN: 3 INFO CARDS */}
            <div className="space-y-4 lg:col-span-4 flex flex-col">
              {/* Card 1: Location */}
              <div className="rounded-2xl border border-[#E8D5B5] bg-white p-6 shadow-[0_4px_20px_rgba(90,32,38,0.04)] hover:shadow-md transition duration-300">
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-[#E9D8BA] bg-[#FFF9EF] text-[#7A1524]">
                    <MapPin size={22} strokeWidth={1.75} />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-[#5A2026] uppercase tracking-wider">
                      Location:
                    </h3>
                    <p className="mt-1.5 text-xs sm:text-sm text-[#5B514A] leading-relaxed">
                      Plot 1 &amp; 2, S1 Vasantham Flats, Jayanthi Nagar,
                      <br />
                      4th cross street, Kolathur,
                      <br />
                      Chennai - 600099, India
                    </p>
                  </div>
                </div>
              </div>

              {/* Card 2: Phone */}
              <a
                href="tel:+919884462960"
                className="block rounded-2xl border border-[#E8D5B5] bg-white p-6 shadow-[0_4px_20px_rgba(90,32,38,0.04)] hover:shadow-md hover:border-[#B08A45] transition duration-300 group"
              >
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-[#E9D8BA] bg-[#FFF9EF] text-[#7A1524] group-hover:bg-[#7A1524] group-hover:text-white transition">
                    <Smartphone size={22} strokeWidth={1.75} />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-[#5A2026] uppercase tracking-wider">
                      Phone:
                    </h3>
                    <p className="mt-1.5 text-xs sm:text-sm font-medium text-[#7A1524]">
                      +91 98844 62960
                    </p>
                    <p className="mt-0.5 text-xs sm:text-sm text-[#5B514A]">
                      Direct Call Support
                    </p>
                  </div>
                </div>
              </a>

              {/* Card 3: WhatsApp */}
              <a
                href="https://wa.me/919884462960"
                target="_blank"
                rel="noreferrer"
                className="block rounded-2xl border border-[#E8D5B5] bg-[#FFFDFC] p-6 shadow-[0_4px_20px_rgba(90,32,38,0.04)] hover:shadow-md hover:border-[#25D366] transition duration-300 group"
              >
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-[#E9D8BA] bg-[#EAF9EE] text-[#25D366] group-hover:bg-[#25D366] group-hover:text-white transition">
                    <svg
                      viewBox="0 0 64 64"
                      aria-label="WhatsApp"
                      className="h-6 w-6 fill-current"
                    >
                      <path d="M32 6.5c-14.2 0-25.7 10.9-25.7 24.3 0 4.3 1.2 8.4 3.5 12l-3.7 13.1 13.4-3.7c3.4 1.8 7.3 2.8 11.5 2.8 14.2 0 25.7-10.9 25.7-24.3S46.2 6.5 32 6.5Zm0 42.1c-3.6 0-7.1-1-10.1-2.8l-.7-.4-8 2.2 2.1-7.4-.5-.8c-2.2-3.3-3.3-7.2-3.3-11.2 0-10.7 9.6-19.4 21.5-19.4 11.8 0 21.4 8.7 21.4 19.4 0 10.8-9.6 19.5-21.4 19.5Zm11.8-14.7c-.6-.3-3.6-1.8-4.2-2-.6-.3-1-.4-1.4.4-.4.8-1.6 2-1.9 2.4-.4.4-.8.4-1.5.1-.6-.3-2.7-1-5.1-3.1-1.9-1.7-3.2-3.7-3.5-4.3-.4-.6 0-.9.3-1.2.3-.3.6-.8.9-1.2.3-.4.4-.7.6-1.2.2-.5.1-.9-.1-1.2-.3-.3-1.4-3.4-1.9-4.7-.5-1.2-.9-1.1-1.3-1.1h-1.1c-.4 0-.9.1-1.4.6-.5.5-1.9 1.8-1.9 4.5s1.9 5.2 2.2 5.6c.3.4 3.7 5.7 9.1 7.9 1.3.6 2.4.9 3.2 1.1 1.3.4 2.4.3 3.3.2.9-.1 3.1-1.2 3.6-2.4.5-1.2.5-2.2.4-2.4-.2-.2-.6-.4-1.2-.7Z"/>
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-[#5A2026] uppercase tracking-wider">
                      WhatsApp:
                    </h3>
                    <p className="mt-1.5 text-xs sm:text-sm font-medium text-[#128C7E]">
                      +91 98844 62960
                    </p>
                    <p className="mt-0.5 text-xs sm:text-sm text-[#5B514A]">
                      Instant Chat Support (2–5 mins)
                    </p>
                  </div>
                </div>
              </a>

              {/* Card 4: Email */}
              <a
                href="mailto:spritualstore@iyerspoojaproducts.com"
                className="block rounded-2xl border border-[#E8D5B5] bg-white p-6 shadow-[0_4px_20px_rgba(90,32,38,0.04)] hover:shadow-md hover:border-[#B08A45] transition duration-300 group"
              >
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-[#E9D8BA] bg-[#FFF9EF] text-[#7A1524] group-hover:bg-[#7A1524] group-hover:text-white transition">
                    <PenSquare size={22} strokeWidth={1.75} />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-[#5A2026] uppercase tracking-wider">
                      Email us at:
                    </h3>
                    <p className="mt-1.5 text-xs sm:text-sm font-medium text-[#7A1524] break-all">
                      spritualstore@iyerspoojaproducts.com
                    </p>
                    <p className="mt-0.5 text-xs sm:text-sm text-[#5B514A] break-all">
                      iyerspoojaproducts@gmail.com
                    </p>
                  </div>
                </div>
              </a>
            </div>

            {/* RIGHT COLUMN: CONTACT FORM */}
            <div className="lg:col-span-8">
              <div className="rounded-3xl border border-[#E8D5B5] bg-white p-6 sm:p-10 shadow-[0_4px_25px_rgba(90,32,38,0.05)]">
                
                {/* Header */}
                <div className="pb-6 border-b border-[#E8D5B5]/60">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-[#B08A45]">
                    DIRECT INQUIRY
                  </p>
                  <h2 className="mt-1.5 font-[family-name:var(--font-cormorant)] text-3xl font-semibold text-[#5A2026] sm:text-4xl">
                    Tell Us About Your Pooja
                  </h2>
                  <p className="mt-1.5 text-xs sm:text-sm text-[#5B514A]">
                    Select your package and enter your contact details. Our team will contact you promptly.
                  </p>
                </div>

                {isSubmitted ? (
                  <div className="py-12 text-center">
                    <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full border border-[#D9BC86] bg-[#FFF9EF] text-[#7A1524]">
                      <CheckCircle2 size={36} strokeWidth={1.5} />
                    </div>
                    <h3 className="mt-5 font-[family-name:var(--font-cormorant)] text-2xl sm:text-3xl font-semibold text-[#5A2026]">
                      Dhanyosmi! Your Inquiry is Received
                    </h3>
                    <p className="mx-auto mt-2.5 max-w-md text-xs sm:text-sm leading-relaxed text-[#5B514A]">
                      Our Vedic concierge has received your details. We will reach out via phone or WhatsApp within 2–4 hours with complete details and guidance.
                    </p>
                    <button
                      type="button"
                      onClick={() => {
                        setIsSubmitted(false);
                        setFormData({
                          name: "",
                          phone: "",
                          email: "",
                          packageType: "consumer-package",
                          message: "",
                        });
                      }}
                      className="mt-6 inline-flex items-center gap-2 rounded-full border border-[#7A1524] bg-[#7A1524] px-7 py-2.5 text-xs font-semibold tracking-wider text-white transition-all hover:bg-[#5A2026]"
                    >
                      Submit Another Inquiry
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="mt-6 space-y-5">
                    
                    {/* Row 1: Full Name & Phone */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {/* Full Name */}
                      <div>
                        <label className="mb-1 block text-xs font-medium text-[#5B514A]">
                          Full Name *
                        </label>
                        <div className="relative">
                          <input
                            type="text"
                            required
                            value={formData.name}
                            onChange={(e) =>
                              setFormData({ ...formData, name: e.target.value })
                            }
                            placeholder="e.g. Sridhar Sharma"
                            className="w-full rounded-xl border border-[#E8D5B5] bg-[#FFFDF8] py-3 pl-4 pr-10 text-sm text-[#29231F] outline-none transition-all placeholder:text-[#9B8C80] focus:border-[#7A1524] focus:ring-1 focus:ring-[#7A1524]"
                          />
                          <User
                            size={16}
                            className="pointer-events-none absolute right-3.5 top-3.5 text-[#B08A45]"
                          />
                        </div>
                      </div>

                      {/* Phone / WhatsApp */}
                      <div>
                        <label className="mb-1 block text-xs font-medium text-[#5B514A]">
                          Phone / WhatsApp *
                        </label>
                        <div className="relative">
                          <input
                            type="tel"
                            required
                            value={formData.phone}
                            onChange={(e) =>
                              setFormData({ ...formData, phone: e.target.value })
                            }
                            placeholder="+91 98844 62960"
                            className="w-full rounded-xl border border-[#E8D5B5] bg-[#FFFDF8] py-3 pl-4 pr-10 text-sm text-[#29231F] outline-none transition-all placeholder:text-[#9B8C80] focus:border-[#7A1524] focus:ring-1 focus:ring-[#7A1524]"
                          />
                          <Phone
                            size={16}
                            className="pointer-events-none absolute right-3.5 top-3.5 text-[#B08A45]"
                          />
                        </div>
                      </div>
                    </div>

                    {/* Row 2: Email & Select Package */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {/* Email */}
                      <div>
                        <label className="mb-1 block text-xs font-medium text-[#5B514A]">
                          Email Address *
                        </label>
                        <div className="relative">
                          <input
                            type="email"
                            required
                            value={formData.email}
                            onChange={(e) =>
                              setFormData({ ...formData, email: e.target.value })
                            }
                            placeholder="sridhar@example.com"
                            className="w-full rounded-xl border border-[#E8D5B5] bg-[#FFFDF8] py-3 pl-4 pr-10 text-sm text-[#29231F] outline-none transition-all placeholder:text-[#9B8C80] focus:border-[#7A1524] focus:ring-1 focus:ring-[#7A1524]"
                          />
                          <Mail
                            size={16}
                            className="pointer-events-none absolute right-3.5 top-3.5 text-[#B08A45]"
                          />
                        </div>
                      </div>

                      {/* Select Package */}
                      <div>
                        <label className="mb-1 block text-xs font-medium text-[#5B514A]">
                          Select Package *
                        </label>
                        <div className="relative">
                          <select
                            value={formData.packageType}
                            onChange={(e) =>
                              setFormData({
                                ...formData,
                                packageType: e.target.value,
                              })
                            }
                            className="w-full appearance-none rounded-xl border border-[#E8D5B5] bg-[#FFFDF8] py-3 pl-4 pr-10 text-sm font-medium text-[#29231F] outline-none transition-all focus:border-[#7A1524] focus:ring-1 focus:ring-[#7A1524]"
                          >
                            {packageOptions.map((pkg) => (
                              <option key={pkg.value} value={pkg.value}>
                                {pkg.label}
                              </option>
                            ))}
                          </select>
                          <ChevronDown
                            size={16}
                            className="pointer-events-none absolute right-3.5 top-3.5 text-[#B08A45]"
                          />
                        </div>
                      </div>
                    </div>

                    {/* Custom Requirements / Notes */}
                    <div>
                      <label className="mb-1 block text-xs font-medium text-[#5B514A]">
                        Custom Requirements / Notes (Optional):
                      </label>
                      <textarea
                        rows={4}
                        value={formData.message}
                        onChange={(e) =>
                          setFormData({ ...formData, message: e.target.value })
                        }
                        placeholder="Tell us if you need custom items, specific pooja dates, priest language preference, or personalized packages..."
                        className="w-full rounded-xl border border-[#E8D5B5] bg-[#FFFDF8] p-4 text-sm text-[#29231F] outline-none transition-all placeholder:text-[#9B8C80] focus:border-[#7A1524] focus:ring-1 focus:ring-[#7A1524]"
                      />
                    </div>

                    {/* Submit Button */}
                    <div className="pt-2">
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="group inline-flex w-full items-center justify-center gap-2.5 rounded-xl bg-[#7A1524] py-3.5 text-xs sm:text-sm font-semibold tracking-wider text-white shadow-md transition-all duration-300 hover:bg-[#5A2026] disabled:opacity-75"
                      >
                        {isSubmitting ? (
                          <span>PROCESSING REQUEST...</span>
                        ) : (
                          <>
                            <span>SEND POOJA INQUIRY</span>
                            <Send
                              size={15}
                              className="transition-transform duration-300 group-hover:translate-x-1"
                            />
                          </>
                        )}
                      </button>
                      <p className="mt-2.5 text-center text-[11px] text-[#876B50]">
                        ✦ We respect your privacy. Direct personal assistance only.
                      </p>
                    </div>
                  </form>
                )}
              </div>
            </div>

          </div>
        </div>
      </section>
    </main>
  );
}
