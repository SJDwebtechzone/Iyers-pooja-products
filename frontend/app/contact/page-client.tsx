"use client";

import { useState } from "react";
import Image from "next/image";
import {
  ArrowUpRight,
  CheckCircle2,
  ChevronDown,
  Clock,
  HelpCircle,
  Mail,
  MapPin,
  MessageCircle,
  Package,
  Phone,
  Send,
  Sparkles,
  User,
} from "lucide-react";

// Package options matching navbar + custom option
const packageOptions = [
  { value: "consumer-package", label: "Consumer Package" },
  { value: "corporate-package", label: "Corporate Package" },
  { value: "temple-package", label: "Temple Package" },
  { value: "overseas-temple-package", label: "Overseas Temple Package" },
  { value: "festivals-package", label: "Festivals Package" },
  { value: "custom-package", label: "Custom / Personalized Package" },
];

// FAQ items
const faqList = [
  {
    q: "How early in advance should I book a Homam or Pooja?",
    a: "We recommend booking at least 3 to 7 days in advance so our priests can calculate the auspicious muhurtham and prepare fresh, authentic samagri. For urgent bookings, please call our direct helpline.",
  },
  {
    q: "Can you arrange authorized Priests / Vadhyars for home ceremonies?",
    a: "Yes, we connect you with highly experienced, Vedic-certified Vadhyars trained in various traditions (Iyer, Iyengar, Smartha, Vaishnava) fluent in Tamil, Telugu, Kannada, and Hindi.",
  },
  {
    q: "Are the pooja samagri items 100% pure and traditionally sourced?",
    a: "Every item in our packages is meticulously curated — from pure A2 cow ghee and authentic homa wood to organic camphor, unadulterated turmeric, and fresh flowers.",
  },
  {
    q: "Do you deliver pooja packages pan-India and overseas?",
    a: "Yes! We ship complete non-perishable pooja samagri kits across India and internationally to countries including the USA, UK, Singapore, UAE, and Australia.",
  },
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
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate sending enquiry
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1000);
  };

  return (
    <>
      <style jsx>{`
        @keyframes ring {
          0%,
          100% { transform: rotate(0deg) scale(1); }
          10% { transform: rotate(-12deg) scale(1.04); }
          20% { transform: rotate(12deg) scale(1.05); }
          30% { transform: rotate(-10deg) scale(1.04); }
          40% { transform: rotate(10deg) scale(1.05); }
          50% { transform: rotate(0deg) scale(1); }
        }

        @keyframes whatsappPulse {
          0%,
          100% {
            transform: scale(1);
            box-shadow: 0 0 0 0 rgba(37, 211, 102, 0.14);
          }
          50% {
            transform: scale(1.08);
            box-shadow: 0 0 0 12px rgba(37, 211, 102, 0.04);
          }
        }

        @keyframes mailOpen {
          0%,
          100% {
            transform: rotateX(0deg) scale(1);
            opacity: 0.95;
          }
          25% {
            transform: rotateX(70deg) scale(0.98);
            opacity: 0.8;
          }
          50% {
            transform: rotateX(0deg) scale(1.02);
            opacity: 1;
          }
          75% {
            transform: rotateX(80deg) scale(0.98);
            opacity: 0.82;
          }
        }

        .contact-icon-call {
          animation: ring 1.8s ease-in-out infinite;
        }

        .contact-icon-whatsapp {
          animation: whatsappPulse 2.2s ease-in-out infinite;
        }

        .contact-icon-mail {
          animation: mailOpen 2.6s ease-in-out infinite;
        }
      `}</style>

      <main className="bg-[#FCFAF6] text-[#29231F]">
      {/* =====================================================
          1. ELEGANT HERO BANNER (Luxury Spiritual Design)
      ===================================================== */}
      <section className="relative mt-[90px] overflow-hidden bg-gradient-to-b from-[#5A2026] via-[#6B242D] to-[#5A2026] px-5 py-20 text-white sm:px-8 lg:px-12 lg:py-24">
        {/* Background decorative pattern */}
        <div className="absolute inset-0 opacity-10">
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
        <div className="absolute -left-20 -top-20 h-96 w-96 rounded-full bg-[#D4B978]/15 blur-3xl" />
        <div className="absolute -bottom-20 -right-20 h-96 w-96 rounded-full bg-[#D4B978]/15 blur-3xl" />

        <div className="relative mx-auto max-w-5xl text-center">
          {/* Badge */}
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#D4B978]/40 bg-white/5 px-5 py-2 backdrop-blur-sm">
            <Sparkles size={14} className="text-[#D4B978]" />
            <span className="text-[11px] font-semibold uppercase tracking-[0.3em] text-[#D4B978]">
              DEVOTIONAL CONCIERGE &amp; BOOKINGS
            </span>
          </div>

          {/* Heading */}
          <h1 className="font-[family-name:var(--font-cormorant)] text-5xl font-semibold leading-[1.08] text-white sm:text-6xl lg:text-7xl">
            We&apos;re Here to Assist Your
            <span className="mt-2 block italic text-[#D4B978]">
              Sacred Ceremonies
            </span>
          </h1>

          {/* Divider */}
          <div className="mx-auto my-6 flex items-center justify-center gap-3">
            <span className="h-px w-16 bg-[#D4B978]/60" />
            <span className="h-2 w-2 rotate-45 bg-[#D4B978]" />
            <span className="h-px w-16 bg-[#D4B978]/60" />
          </div>

          <p className="mx-auto max-w-2xl text-base leading-8 text-white/85 sm:text-lg">
            Whether you need guidance on auspicious dates, custom pooja samagri
            kits, or priest arrangements for your home, our team is at your
            service.
          </p>
        </div>
      </section>

      {/* =====================================================
          2. CONCIERGE CHANNELS (Direct Call, WhatsApp, Email)
      ===================================================== */}
      <section className="relative z-10 -mt-10 px-5 sm:px-8 lg:px-12">
        <div className="mx-auto grid max-w-[1400px] gap-6 md:grid-cols-3">
          {/* Card 1: Direct Call */}
          <a
            href="tel:+919884462960"
            className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-[#E8D5B5] bg-[#FFFDFC] p-8 shadow-[0_10px_30px_rgba(90,32,38,0.05)] transition-all duration-300 hover:-translate-y-1 hover:border-[#B08A45] hover:shadow-[0_15px_35px_rgba(90,32,38,0.1)]"
          >
            <div>
              <div className="contact-icon-call flex h-14 w-14 items-center justify-center rounded-2xl border border-[#E9D8BA] bg-[#FFF9EF] text-[#C48117] shadow-[0_0_0_0_rgba(196,129,23,0.15)] transition-colors group-hover:bg-[#7A1524] group-hover:text-white">
                <Phone size={26} strokeWidth={1.5} />
              </div>
              <h3 className="mt-6 font-[family-name:var(--font-cormorant)] text-2xl font-semibold text-[#5A2026]">
                Direct Call Support
              </h3>
              <p className="mt-1 text-sm font-semibold text-[#7A1524]">
                +91 98844 62960
              </p>
              <p className="mt-3 text-sm leading-6 text-[#5B514A]">
                Speak directly with our devotional coordinators for immediate
                booking assistance, priest confirmation, and urgent pooja needs.
              </p>
            </div>
            <div className="mt-6 flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#7A1524] transition-transform group-hover:translate-x-1">
              <span>Call Now</span>
              <ArrowUpRight size={15} />
            </div>
          </a>

          {/* Card 2: WhatsApp Connect */}
          <a
            href="https://wa.me/919884462960"
            target="_blank"
            rel="noreferrer"
            className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-[#E8D5B5] bg-[#FFFDFC] p-8 shadow-[0_10px_30px_rgba(90,32,38,0.05)] transition-all duration-300 hover:-translate-y-1 hover:border-[#B08A45] hover:shadow-[0_15px_35px_rgba(90,32,38,0.1)]"
          >
            <div>
              <div className="contact-icon-whatsapp relative flex h-14 w-14 items-center justify-center rounded-2xl border border-[#E9D8BA] bg-[#EAF9EE] text-[#25D366] transition-colors group-hover:bg-[#25D366] group-hover:text-white">
                <svg
                  viewBox="0 0 64 64"
                  aria-label="WhatsApp"
                  className="h-8 w-8 fill-current text-[#25D366] transition-colors group-hover:text-white"
                >
                  <path d="M32 6.5c-14.2 0-25.7 10.9-25.7 24.3 0 4.3 1.2 8.4 3.5 12l-3.7 13.1 13.4-3.7c3.4 1.8 7.3 2.8 11.5 2.8 14.2 0 25.7-10.9 25.7-24.3S46.2 6.5 32 6.5Zm0 42.1c-3.6 0-7.1-1-10.1-2.8l-.7-.4-8 2.2 2.1-7.4-.5-.8c-2.2-3.3-3.3-7.2-3.3-11.2 0-10.7 9.6-19.4 21.5-19.4 11.8 0 21.4 8.7 21.4 19.4 0 10.8-9.6 19.5-21.4 19.5Zm11.8-14.7c-.6-.3-3.6-1.8-4.2-2-.6-.3-1-.4-1.4.4-.4.8-1.6 2-1.9 2.4-.4.4-.8.4-1.5.1-.6-.3-2.7-1-5.1-3.1-1.9-1.7-3.2-3.7-3.5-4.3-.4-.6 0-.9.3-1.2.3-.3.6-.8.9-1.2.3-.4.4-.7.6-1.2.2-.5.1-.9-.1-1.2-.3-.3-1.4-3.4-1.9-4.7-.5-1.2-.9-1.1-1.3-1.1h-1.1c-.4 0-.9.1-1.4.6-.5.5-1.9 1.8-1.9 4.5s1.9 5.2 2.2 5.6c.3.4 3.7 5.7 9.1 7.9 1.3.6 2.4.9 3.2 1.1 1.3.4 2.4.3 3.3.2.9-.1 3.1-1.2 3.6-2.4.5-1.2.5-2.2.4-2.4-.2-.2-.6-.4-1.2-.7Z"/>
                </svg>
                <span className="absolute inset-0 rounded-2xl border border-[#25D366]/30" />
              </div>
              <h3 className="mt-6 font-[family-name:var(--font-cormorant)] text-2xl font-semibold text-[#5A2026]">
                WhatsApp Connect
              </h3>
              <p className="mt-1 text-sm font-semibold text-[#128C7E]">
                Instant Chat Support (2–5 mins)
              </p>
              <p className="mt-3 text-sm leading-6 text-[#5B514A]">
                Send your ritual dates, gothram, family custom requirements, or
                pooja samagri questions directly to our team via WhatsApp.
              </p>
            </div>
            <div className="mt-6 flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#7A1524] transition-transform group-hover:translate-x-1">
              <span>Chat on WhatsApp</span>
              <ArrowUpRight size={15} />
            </div>
          </a>

          {/* Card 3: Email Support */}
          <a
            href="mailto:spritualstore@iyerspoojaproducts.com"
            className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-[#E8D5B5] bg-[#FFFDFC] p-8 shadow-[0_10px_30px_rgba(90,32,38,0.05)] transition-all duration-300 hover:-translate-y-1 hover:border-[#B08A45] hover:shadow-[0_15px_35px_rgba(90,32,38,0.1)]"
          >
            <div>
              <div className="contact-icon-mail relative flex h-14 w-14 items-center justify-center rounded-2xl border border-[#E9D8BA] bg-[#FFF9EF] text-[#C48117] transition-colors group-hover:bg-[#7A1524] group-hover:text-white">
                <Mail size={26} strokeWidth={1.5} />
                <span className="absolute inset-x-2 top-2.5 h-3 rounded-t-sm border border-current/80 bg-white/20" />
              </div>
              <h3 className="mt-6 font-[family-name:var(--font-cormorant)] text-2xl font-semibold text-[#5A2026]">
                Email Support
              </h3>
              <p className="mt-1 text-sm font-semibold text-[#7A1524]">
                spritualstore@iyerspoojaproducts.com
              </p>
              <p className="mt-3 text-sm leading-6 text-[#5B514A]">
                For customized corporate event proposals, temple trusts, bulk
                order invoicing, or international temple shipment inquiries.
              </p>
            </div>
            <div className="mt-6 flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#7A1524] transition-transform group-hover:translate-x-1">
              <span>Send an Email</span>
              <ArrowUpRight size={15} />
            </div>
          </a>
        </div>
      </section>

      {/* =====================================================
          3. POOJA & PACKAGE INQUIRY FORM
      ===================================================== */}
      <section
        id="contact-form"
        className="px-5 py-16 sm:px-8 lg:px-12 lg:py-24"
      >
        <div className="mx-auto max-w-[1400px]">
          <div className="w-full">
            {/* FULL-WIDTH FORM */}
            <div className="rounded-3xl border border-[#E8D5B5] bg-white p-6 shadow-sm sm:p-10 lg:p-12">
              <div className="border-b border-[#E8D5B5]/60 pb-8">
                <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-[#B08A45]">
                  DIRECT INQUIRY
                </p>
                <h2 className="mt-2 font-[family-name:var(--font-cormorant)] text-3xl font-semibold text-[#5A2026] sm:text-4xl">
                  Tell Us About Your Pooja
                </h2>
                <p className="mt-2 text-sm text-[#5B514A]">
                  Select your package and enter your contact details. Our team
                  will contact you promptly.
                </p>
              </div>

              {isSubmitted ? (
                <div className="py-14 text-center">
                  <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full border border-[#D9BC86] bg-[#FFF9EF] text-[#7A1524]">
                    <CheckCircle2 size={42} strokeWidth={1.5} />
                  </div>
                  <h3 className="mt-6 font-[family-name:var(--font-cormorant)] text-3xl font-semibold text-[#5A2026]">
                    Dhanyosmi! Your Inquiry is Received
                  </h3>
                  <p className="mx-auto mt-3 max-w-md text-sm leading-7 text-[#5B514A]">
                    Our Vedic concierge has received your details. We will reach
                    out via phone or WhatsApp within 2–4 hours with complete
                    details and guidance.
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
                    className="mt-8 inline-flex items-center gap-2 rounded-full border border-[#7A1524] bg-[#7A1524] px-8 py-3 text-xs font-semibold tracking-wider text-white transition-all hover:bg-[#5A2026]"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="mt-8 space-y-6">
                  {/* Name */}
                  <div>
                    <span className="mb-1.5 block text-xs font-medium text-[#5B514A]">
                      Full Name *
                    </span>
                    <div className="relative">
                      <User
                        size={16}
                        className="absolute left-3.5 top-3.5 text-[#B08A45]"
                      />
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({ ...formData, name: e.target.value })
                        }
                        placeholder="e.g. Sridhar Sharma"
                        className="w-full rounded-xl border border-[#E8D5B5] bg-[#FFFDF8] py-3 pl-10 pr-4 text-sm text-[#29231F] outline-none transition-all placeholder:text-[#9B8C80] focus:border-[#7A1524] focus:ring-1 focus:ring-[#7A1524]"
                      />
                    </div>
                  </div>

                  {/* Phone & Email */}
                  <div className="grid gap-5 sm:grid-cols-2">
                    {/* Phone */}
                    <div>
                      <span className="mb-1.5 block text-xs font-medium text-[#5B514A]">
                        Phone / WhatsApp *
                      </span>
                      <div className="relative">
                        <Phone
                          size={16}
                          className="absolute left-3.5 top-3.5 text-[#B08A45]"
                        />
                        <input
                          type="tel"
                          required
                          value={formData.phone}
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              phone: e.target.value,
                            })
                          }
                          placeholder="+91 98400 XXXXX"
                          className="w-full rounded-xl border border-[#E8D5B5] bg-[#FFFDF8] py-3 pl-10 pr-4 text-sm text-[#29231F] outline-none transition-all placeholder:text-[#9B8C80] focus:border-[#7A1524] focus:ring-1 focus:ring-[#7A1524]"
                        />
                      </div>
                    </div>

                    {/* Email */}
                    <div>
                      <span className="mb-1.5 block text-xs font-medium text-[#5B514A]">
                        Email Address *
                      </span>
                      <div className="relative">
                        <Mail
                          size={16}
                          className="absolute left-3.5 top-3.5 text-[#B08A45]"
                        />
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              email: e.target.value,
                            })
                          }
                          placeholder="sridhar@example.com"
                          className="w-full rounded-xl border border-[#E8D5B5] bg-[#FFFDF8] py-3 pl-10 pr-4 text-sm text-[#29231F] outline-none transition-all placeholder:text-[#9B8C80] focus:border-[#7A1524] focus:ring-1 focus:ring-[#7A1524]"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Package Dropdown */}
                  <div>
                    <span className="mb-1.5 block text-xs font-medium text-[#5B514A]">
                      Select Package *
                    </span>
                    <div className="relative">
                      <Package
                        size={16}
                        className="absolute left-3.5 top-3.5 text-[#B08A45]"
                      />
                      <select
                        value={formData.packageType}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            packageType: e.target.value,
                          })
                        }
                        className="w-full appearance-none rounded-xl border border-[#E8D5B5] bg-[#FFFDF8] py-3 pl-10 pr-10 text-sm font-medium text-[#29231F] outline-none transition-all focus:border-[#7A1524] focus:ring-1 focus:ring-[#7A1524]"
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

                  {/* Custom Requirements / Notes */}
                  <div>
                    <span className="mb-1.5 block text-xs font-medium text-[#5B514A]">
                      Custom Requirements / Notes (Optional):
                    </span>
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

                  {/* SUBMIT BUTTON */}
                  <div>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="group inline-flex w-full items-center justify-center gap-3 rounded-xl bg-[#7A1524] py-4 text-xs font-semibold tracking-widest text-white shadow-lg transition-all duration-300 hover:bg-[#5A2026] disabled:opacity-75 sm:w-auto sm:px-10"
                    >
                      {isSubmitting ? (
                        <span>PROCESSING REQUEST...</span>
                      ) : (
                        <>
                          <span>SEND POOJA INQUIRY</span>
                          <Send
                            size={16}
                            className="transition-transform duration-300 group-hover:translate-x-1"
                          />
                        </>
                      )}
                    </button>
                    <p className="mt-3 text-[11px] text-[#876B50]">
                      ✦ We respect your privacy. Direct personal assistance
                      only.
                    </p>
                  </div>
                </form>
              )}
            </div>

          </div>
        </div>
      </section>

      {/* =====================================================
          4. FREQUENTLY ASKED QUESTIONS (FAQ ACCORDION)
      ===================================================== */}
      {/* <section className="border-t border-[#E8D5B5] bg-[#FFF9EE]/60 px-5 py-16 sm:px-8 lg:px-12 lg:py-20">
        <div className="mx-auto max-w-4xl">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.25em] text-[#B08A45]">
              <HelpCircle size={15} />
              <span>FREQUENTLY ASKED QUESTIONS</span>
            </div>
            <h2 className="mt-2 font-[family-name:var(--font-cormorant)] text-3xl font-semibold text-[#5A2026] sm:text-4xl">
              Common Inquiries on Pooja Bookings
            </h2>
          </div>

          <div className="mt-10 space-y-4">
            {faqList.map((item, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div
                  key={item.q}
                  className="overflow-hidden rounded-2xl border border-[#E8D5B5] bg-white transition-all"
                >
                  <button
                    type="button"
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    className="flex w-full items-center justify-between p-5 text-left text-sm font-semibold text-[#5A2026] sm:p-6"
                  >
                    <span>{item.q}</span>
                    <ChevronDown
                      size={18}
                      className={`shrink-0 text-[#B08A45] transition-transform duration-300 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  {isOpen && (
                    <div className="border-t border-[#E8D5B5]/60 bg-[#FFFDF8] px-5 pb-6 pt-4 text-sm leading-7 text-[#5B514A] sm:px-6">
                      {item.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section> */}
      </main>
    </>
  );
}

