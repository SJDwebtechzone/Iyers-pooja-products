"use client";

import { useEffect, useState } from "react";
import { Phone } from "lucide-react";
import Image from "next/image";

const API_BASE = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3001";
const DEFAULT_PHONE_NUMBER = "9884462960";
const DEFAULT_WHATSAPP_NUMBER = "9884462960";

/**
 * Business contact details, always fetched from the admin dashboard.
 * No number is ever hardcoded here — if the admin has not set one, that
 * button simply does not render.
 */
interface ContactSettings {
  whatsapp_number: string | null;
  phone_number: string | null;
  whatsapp_message: string | null;
}

/**
 * WhatsApp's click-to-chat API wants digits only, including the country code
 * and no leading +, so "+91 98844 62960" becomes "919884462960".
 */
function toWhatsAppDigits(value: string): string {
  return value.replace(/\D/g, "");
}

/** `tel:` keeps a leading + (it means "dial internationally") but nothing else. */
function toTelHref(value: string): string {
  const trimmed = value.trim();
  const digits = trimmed.replace(/[^\d]/g, "");
  if (!digits) return "";
  return trimmed.startsWith("+") ? `tel:+${digits}` : `tel:${digits}`;
}

export default function FloatingContact() {
  const [contact, setContact] = useState<ContactSettings | null>(null);

  useEffect(() => {
    let cancelled = false;

    fetch(`${API_BASE}/contact-settings`, { cache: "no-store" })
      .then((res) => (res.ok ? res.json() : null))
      .then((data: ContactSettings | null) => {
        if (!cancelled) setContact(data);
      })
      .catch(() => {
        // Contact details unavailable — render nothing rather than a dead link.
        if (!cancelled) setContact(null);
      });

    return () => {
      cancelled = true;
    };
  }, []);

  const whatsappDigits = toWhatsAppDigits(
    contact?.whatsapp_number || DEFAULT_WHATSAPP_NUMBER
  );
  const telHref = toTelHref(
    contact?.phone_number || DEFAULT_PHONE_NUMBER
  );

  const whatsappHref = whatsappDigits
    ? `https://wa.me/${whatsappDigits}${
        contact?.whatsapp_message?.trim()
          ? `?text=${encodeURIComponent(contact.whatsapp_message.trim())}`
          : ""
      }`
    : "";

  // Nothing configured yet — don't show an empty rail.
  if (!whatsappHref && !telHref) return null;

  return (
    /*
     * z-40 sits above page content but below the Order Now modal (z-100),
     * so the buttons never cover the checkout. The bottom offset respects
     * the iOS home-indicator safe area.
     */
    <div
      className="fixed right-4 z-40 flex flex-col items-end gap-3 sm:right-6"
      style={{ bottom: "calc(1rem + env(safe-area-inset-bottom, 0px))" }}
    >
      {whatsappHref && (
        <ContactButton
          href={whatsappHref}
          label="Chat on WhatsApp"
          external
          className="bg-white hover:bg-gray-50 focus-visible:ring-[#25D366]"
        >
          <Image
            src="/images/walogo.png"
            alt="WhatsApp"
            width={40}
            height={40}
            className="h-9 w-9 sm:h-10 sm:w-10"
          />
        </ContactButton>
      )}

      {telHref && (
        <ContactButton
          href={telHref}
          label="Call Us"
          className="bg-[#7D1E28] text-[#F3D78A] hover:bg-[#5A121D] focus-visible:ring-[#E5C77A]"
        >
          <Phone
            className="h-[22px] w-[22px] sm:h-6 sm:w-6"
            strokeWidth={2}
            fill="currentColor"
            stroke="none"
          />
        </ContactButton>
      )}
    </div>
  );
}

function ContactButton({
  href,
  label,
  className,
  external = false,
  children,
}: {
  href: string;
  label: string;
  className: string;
  external?: boolean;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      aria-label={label}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      className="group relative flex items-center outline-none"
    >
      {/*
        Tooltip: slides out on hover/focus on pointer devices. Hidden from
        screen readers because the anchor already carries aria-label, and
        hidden on touch, where there is no hover state to reveal it.
      */}
      <span
        aria-hidden="true"
        className="pointer-events-none absolute right-full mr-3 hidden whitespace-nowrap rounded-lg border border-[#E4D7C3] bg-[#FDFAF4] px-3 py-1.5 text-[13px] font-medium text-[#42151B] opacity-0 shadow-md transition-all duration-200 group-hover:translate-x-0 group-hover:opacity-100 group-focus-visible:translate-x-0 group-focus-visible:opacity-100 sm:block sm:translate-x-1"
      >
        {label}
      </span>

      <span
        className={`flex h-[52px] w-[52px] items-center justify-center rounded-full shadow-lg ring-1 ring-black/5 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-xl active:scale-95 group-focus-visible:ring-2 group-focus-visible:ring-offset-2 sm:h-14 sm:w-14 ${className}`}
      >
        {children}
      </span>
    </a>
  );
}
