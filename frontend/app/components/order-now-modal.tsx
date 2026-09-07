"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import Image from "next/image";
import {
  X,
  ArrowRight,
  ArrowLeft,
  Check,
  Copy,
  Loader2,
  QrCode,
  ShieldCheck,
  CircleAlert,
} from "lucide-react";

const API_BASE = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3001";

// -------------------------------------------------------------
// TYPES
// -------------------------------------------------------------

/**
 * Payment details are always fetched from the admin dashboard/backend.
 * Nothing about the business's bank account, UPI ID or QR code is ever
 * hardcoded in this file.
 */
interface PaymentSettings {
  business_name: string | null;
  account_holder: string | null;
  account_number: string | null;
  ifsc_code: string | null;
  upi_id: string | null;
  qr_filename: string | null;
  payment_note: string | null;
}

interface CustomerForm {
  name: string;
  mobile: string;
  email: string;
  address: string;
  preferredDate: string;
}

type FieldErrors = Partial<Record<keyof CustomerForm, string>>;

const EMPTY_FORM: CustomerForm = {
  name: "",
  mobile: "",
  email: "",
  address: "",
  preferredDate: "",
};

const NOT_SET = "—";

const DEFAULT_PAYMENT_NOTE =
  "Please complete the payment using the QR code or UPI ID.";

// -------------------------------------------------------------
// VALIDATION
// -------------------------------------------------------------

function validate(form: CustomerForm): FieldErrors {
  const errors: FieldErrors = {};

  if (!form.name.trim()) {
    errors.name = "Please enter your full name.";
  }

  const digits = form.mobile.replace(/\D/g, "");
  if (!form.mobile.trim()) {
    errors.mobile = "Please enter your mobile number.";
  } else if (digits.length < 10) {
    errors.mobile = "Please enter a valid mobile number.";
  }

  if (!form.email.trim()) {
    errors.email = "Please enter your email address.";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) {
    errors.email = "Please enter a valid email address.";
  }

  if (!form.address.trim()) {
    errors.address = "Please enter your address.";
  }

  if (!form.preferredDate) {
    errors.preferredDate = "Please choose your preferred date.";
  }

  return errors;
}

function formatDate(value: string) {
  if (!value) return NOT_SET;
  // `2026-09-10` alone parses as UTC midnight, which renders as the previous
  // day for anyone behind UTC. Appending a time forces local parsing.
  const parsed = new Date(`${value}T00:00:00`);
  if (Number.isNaN(parsed.getTime())) return value;
  return parsed.toLocaleDateString("en-IN", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

// -------------------------------------------------------------
// SMALL UI PIECES
// -------------------------------------------------------------

function Field({
  id,
  label,
  error,
  children,
}: {
  id: string;
  label: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label
        htmlFor={id}
        className="mb-1.5 block text-[13px] font-medium text-[#42151B]"
      >
        {label} <span className="text-[#9E2A2B]">*</span>
      </label>
      {children}
      {error ? (
        <p
          id={`${id}-error`}
          role="alert"
          className="mt-1.5 flex items-center gap-1 text-xs text-[#B3261E]"
        >
          <CircleAlert size={13} aria-hidden="true" />
          {error}
        </p>
      ) : null}
    </div>
  );
}

const inputClass = (hasError?: boolean) =>
  `w-full rounded-xl border bg-white px-3.5 py-2.5 text-sm text-[#2B0C14] placeholder:text-[#B0A093] transition-colors focus:outline-none focus:ring-2 focus:ring-[#E5C77A]/60 ${
    hasError
      ? "border-[#B3261E] focus:border-[#B3261E]"
      : "border-[#DFCBB0] focus:border-[#7D1E28]"
  }`;

/** One read-only payment row, with copy-to-clipboard for the values worth copying. */
function PaymentRow({
  label,
  value,
  copyable = false,
}: {
  label: string;
  value: string | null;
  copyable?: boolean;
}) {
  const [copied, setCopied] = useState(false);
  const copyTimer = useRef<number | null>(null);
  const display = value?.trim() ? value.trim() : NOT_SET;
  const canCopy = copyable && display !== NOT_SET;

  // The modal unmounts on close; don't leave a timer running behind it.
  useEffect(
    () => () => {
      if (copyTimer.current !== null) window.clearTimeout(copyTimer.current);
    },
    [],
  );

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(display);
      setCopied(true);
      if (copyTimer.current !== null) window.clearTimeout(copyTimer.current);
      copyTimer.current = window.setTimeout(() => setCopied(false), 1800);
    } catch {
      // Clipboard unavailable (older browser / insecure origin) — the value
      // is on screen and can still be selected manually.
    }
  };

  return (
    <div className="flex items-start justify-between gap-3 border-b border-[#EFE3CF] py-2.5 last:border-b-0">
      <span className="shrink-0 text-[13px] text-[#7A6458]">{label}</span>
      <span className="flex min-w-0 items-center gap-2 text-right">
        <span
          className={`break-all text-[13px] font-semibold ${
            display === NOT_SET ? "text-[#B0A093]" : "text-[#2B0C14]"
          }`}
        >
          {display}
        </span>
        {canCopy ? (
          <button
            type="button"
            onClick={handleCopy}
            aria-label={`Copy ${label}`}
            className="shrink-0 rounded-md p-1 text-[#8A7466] transition-colors hover:bg-[#F3E7D3] hover:text-[#7D1E28] focus:outline-none focus:ring-2 focus:ring-[#E5C77A]"
          >
            {copied ? (
              <Check size={14} className="text-green-700" />
            ) : (
              <Copy size={14} />
            )}
          </button>
        ) : null}
      </span>
    </div>
  );
}

/** One read-only customer detail row shown while reviewing on Step 2. */
function ReviewRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-start justify-between gap-3 py-1.5">
      <span className="shrink-0 text-[13px] text-[#7A6458]">{label}</span>
      <span className="break-words text-right text-[13px] font-medium text-[#2B0C14]">
        {value.trim() || NOT_SET}
      </span>
    </div>
  );
}

// -------------------------------------------------------------
// MODAL
// -------------------------------------------------------------

export default function OrderNowModal({
  open,
  onClose,
  packageName,
  packagePrice,
}: {
  open: boolean;
  onClose: () => void;
  /** Package the customer is ordering — saved with the order. */
  packageName: string;
  /** Optional display-only price, e.g. "1,999". */
  packagePrice?: string | null;
}) {
  const [step, setStep] = useState<1 | 2>(1);
  const [form, setForm] = useState<CustomerForm>(EMPTY_FORM);
  const [errors, setErrors] = useState<FieldErrors>({});
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  const [payment, setPayment] = useState<PaymentSettings | null>(null);
  const [paymentLoading, setPaymentLoading] = useState(false);
  const [paymentError, setPaymentError] = useState<string | null>(null);

  const dialogRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  /** Element that had focus before the modal opened, so we can hand it back. */
  const triggerRef = useRef<HTMLElement | null>(null);

  // Today, in the user's local timezone — used as the date input's minimum.
  const today = useMemo(() => {
    const now = new Date();
    const offset = now.getTimezoneOffset() * 60000;
    return new Date(now.getTime() - offset).toISOString().slice(0, 10);
  }, []);

  const resetAll = useCallback(() => {
    setStep(1);
    setForm(EMPTY_FORM);
    setErrors({});
    setSubmitting(false);
    setSubmitError(null);
    setSuccess(false);
  }, []);

  // -----------------------------------------------------------
  // OPEN / CLOSE BEHAVIOUR
  // -----------------------------------------------------------

  const handleClose = useCallback(() => {
    // Closing mid-submit would hide the result of an in-flight request the
    // server is still processing — the customer would reorder and pay twice.
    if (submitting) return;
    onClose();
  }, [onClose, submitting]);

  useEffect(() => {
    if (!open) return;

    // Start every visit from a clean slate. Done synchronously on open rather
    // than on a timer after close, so a quick close-and-reopen can't show the
    // previous order's success screen.
    resetAll();

    // Remember what to give focus back to when the modal closes.
    triggerRef.current =
      document.activeElement instanceof HTMLElement
        ? document.activeElement
        : null;

    // Lock background scroll while the modal is open.
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    // Move focus into the dialog for screen-reader and keyboard users.
    headingRef.current?.focus();

    return () => {
      document.body.style.overflow = previousOverflow;
      triggerRef.current?.focus();
    };
  }, [open, resetAll]);

  // Escape to close + Tab focus trap.
  useEffect(() => {
    if (!open) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        handleClose();
        return;
      }

      if (event.key !== "Tab" || !dialogRef.current) return;

      const focusable = dialogRef.current.querySelectorAll<HTMLElement>(
        'a[href], button:not([disabled]), input:not([disabled]), textarea:not([disabled]), select:not([disabled]), [tabindex]:not([tabindex="-1"])',
      );
      if (focusable.length === 0) return;

      const first = focusable[0];
      const last = focusable[focusable.length - 1];

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [open, handleClose]);

  // -----------------------------------------------------------
  // PAYMENT DETAILS — always live from the admin dashboard
  // -----------------------------------------------------------

  const loadPayment = useCallback(async () => {
    setPaymentLoading(true);
    setPaymentError(null);
    try {
      const res = await fetch(`${API_BASE}/payment-settings`, {
        cache: "no-store",
      });
      if (!res.ok) throw new Error("Failed to load payment details");
      const data = (await res.json()) as PaymentSettings;
      setPayment(data);
    } catch (error) {
      console.error("Failed to load payment settings:", error);
      setPayment(null);
      setPaymentError(
        "We couldn't load the payment details just now. You can still submit your order and we'll email you the payment information.",
      );
    } finally {
      setPaymentLoading(false);
    }
  }, []);

  // Fetch as soon as the customer reaches Step 2 so the details are current.
  useEffect(() => {
    if (open && step === 2) {
      loadPayment();
    }
  }, [open, step, loadPayment]);

  // -----------------------------------------------------------
  // HANDLERS
  // -----------------------------------------------------------

  function setField(key: keyof CustomerForm, value: string) {
    setForm((previous) => ({ ...previous, [key]: value }));
    setErrors((previous) => {
      if (!previous[key]) return previous;
      const next = { ...previous };
      delete next[key];
      return next;
    });
  }

  function handleContinue(event: React.FormEvent) {
    event.preventDefault();
    const found = validate(form);
    setErrors(found);
    if (Object.keys(found).length > 0) {
      const firstKey = Object.keys(found)[0];
      document.getElementById(`order-${firstKey}`)?.focus();
      return;
    }
    setStep(2);
  }

  async function handleSubmit(event: React.FormEvent) {
    event.preventDefault();

    // Re-validate on submit — the customer may have gone back and edited.
    const found = validate(form);
    setErrors(found);
    if (Object.keys(found).length > 0) {
      setStep(1);
      return;
    }

    setSubmitting(true);
    setSubmitError(null);

    try {
      const res = await fetch(`${API_BASE}/orders`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.name.trim(),
          mobile: form.mobile.trim(),
          email: form.email.trim(),
          address: form.address.trim(),
          package_name: packageName,
          preferred_date: form.preferredDate,
        }),
      });

      if (!res.ok) {
        const detail = await res.json().catch(() => null);
        throw new Error(detail?.message || "Order failed");
      }

      setSuccess(true);
    } catch (error) {
      console.error("Order submission failed:", error);
      setSubmitError(
        "We couldn't submit your order just now. Please check your connection and try again.",
      );
    } finally {
      setSubmitting(false);
    }
  }

  if (!open) return null;

  const paymentNote = payment?.payment_note?.trim() || DEFAULT_PAYMENT_NOTE;
  const qrSrc = payment?.qr_filename ? `/images/${payment.qr_filename}` : null;

  // -----------------------------------------------------------
  // RENDER
  // -----------------------------------------------------------

  return (
    <div className="fixed inset-0 z-[100] overflow-y-auto bg-[#2B0C14]/60 backdrop-blur-sm">
      {/* min-h-full keeps the dialog scrollable in BOTH directions when it is
          taller than the viewport — plain flex centring clips the top edge. */}
      <div
        className="flex min-h-full items-end justify-center p-0 sm:items-center sm:p-4"
        onMouseDown={(event) => {
          if (event.target === event.currentTarget) handleClose();
        }}
      >
        <div
          ref={dialogRef}
          role="dialog"
          aria-modal="true"
          aria-labelledby="order-modal-title"
          className="animate-order-modal-in relative w-full max-w-lg overflow-hidden rounded-t-3xl border border-[#E4D7C3] bg-[#FDFAF4] shadow-2xl sm:rounded-3xl"
        >
          {/* ---------------- HEADER ---------------- */}
          <div className="relative border-b border-[#EFE3CF] bg-gradient-to-b from-[#FFFDF8] to-[#FBF6EE] px-5 pb-4 pt-5 sm:px-7 sm:pt-6">
            {/* Gold hairline accent */}
            <div
              aria-hidden="true"
              className="absolute inset-x-0 top-0 h-[3px] bg-gradient-to-r from-transparent via-[#E5C77A] to-transparent"
            />

            <button
              type="button"
              onClick={handleClose}
              aria-label="Close order form"
              className="absolute right-3 top-4 rounded-full p-2 text-[#8A7466] transition-colors hover:bg-[#F3E7D3] hover:text-[#7D1E28] focus:outline-none focus:ring-2 focus:ring-[#E5C77A] sm:right-5"
            >
              <X size={18} />
            </button>

            <h2
              id="order-modal-title"
              ref={headingRef}
              tabIndex={-1}
              className="pr-10 font-[family-name:var(--font-cormorant)] text-2xl font-bold tracking-tight text-[#42151B] outline-none sm:text-[26px]"
            >
              {success ? "Order Received" : "Complete Your Order"}
            </h2>

            {packageName ? (
              <p className="mt-1 text-[13px] text-[#7A6458]">
                {packageName}
                {packagePrice ? (
                  <span className="ml-2 font-semibold text-[#7D1E28]">
                    ₹{packagePrice}
                  </span>
                ) : null}
              </p>
            ) : null}

            {/* ---------------- STEPPER ---------------- */}
            {!success && (
              <ol
                className="mt-4 flex items-center gap-2"
                aria-label="Order steps"
              >
                {[
                  { number: 1 as const, label: "Your Details" },
                  { number: 2 as const, label: "Payment" },
                ].map((entry, index) => {
                  const isActive = step === entry.number;
                  const isDone = step > entry.number;
                  return (
                    <li
                      key={entry.number}
                      className="flex flex-1 items-center gap-2"
                      aria-current={isActive ? "step" : undefined}
                    >
                      <span
                        className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-[11px] font-bold transition-colors ${
                          isDone
                            ? "bg-[#7D1E28] text-[#F3D78A]"
                            : isActive
                              ? "bg-[#E5C77A] text-[#42151B]"
                              : "bg-[#EFE3CF] text-[#A99483]"
                        }`}
                      >
                        {isDone ? <Check size={13} /> : entry.number}
                      </span>
                      <span
                        className={`whitespace-nowrap text-[12px] font-medium ${
                          isActive || isDone
                            ? "text-[#42151B]"
                            : "text-[#A99483]"
                        }`}
                      >
                        {entry.label}
                      </span>
                      {index === 0 && (
                        <span
                          aria-hidden="true"
                          className={`ml-1 h-px flex-1 ${
                            step > 1 ? "bg-[#E5C77A]" : "bg-[#EFE3CF]"
                          }`}
                        />
                      )}
                    </li>
                  );
                })}
              </ol>
            )}
          </div>

          {/* ---------------- BODY ---------------- */}
          <div className="max-h-[70vh] overflow-y-auto px-5 py-5 sm:max-h-[65vh] sm:px-7 sm:py-6">
            {/* =============== SUCCESS =============== */}
            {success ? (
              <div className="py-6 text-center" role="status">
                <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-[#F3E7D3] ring-4 ring-[#E5C77A]/40">
                  <Check size={26} className="text-[#7D1E28]" />
                </div>
                <h3 className="font-[family-name:var(--font-cormorant)] text-xl font-bold text-[#42151B]">
                  Thank you, {form.name.trim().split(" ")[0] || "devotee"}
                </h3>
                <p className="mx-auto mt-2 max-w-sm text-sm leading-relaxed text-[#55463E]">
                  Your order has been submitted successfully. A confirmation
                  email has been sent to you.
                </p>
                <p className="mt-1 text-[13px] font-medium text-[#7D1E28]">
                  {form.email.trim()}
                </p>
                <button
                  type="button"
                  onClick={handleClose}
                  className="mt-6 rounded-xl bg-[#7D1E28] px-6 py-2.5 text-sm font-semibold text-[#F3D78A] transition-colors hover:bg-[#5A121D] focus:outline-none focus:ring-2 focus:ring-[#E5C77A]"
                >
                  Done
                </button>
              </div>
            ) : step === 1 ? (
              /* =============== STEP 1 — CUSTOMER DETAILS =============== */
              <form
                onSubmit={handleContinue}
                noValidate
                className="animate-order-step-in space-y-4"
              >
                <Field
                  id="order-name"
                  label="Customer Name"
                  error={errors.name}
                >
                  <input
                    id="order-name"
                    name="name"
                    type="text"
                    autoComplete="name"
                    maxLength={255}
                    placeholder="Full name"
                    value={form.name}
                    onChange={(e) => setField("name", e.target.value)}
                    aria-invalid={Boolean(errors.name)}
                    aria-describedby={
                      errors.name ? "order-name-error" : undefined
                    }
                    className={inputClass(Boolean(errors.name))}
                  />
                </Field>

                <div className="grid gap-4 sm:grid-cols-2">
                  <Field
                    id="order-mobile"
                    label="Mobile Number"
                    error={errors.mobile}
                  >
                    <input
                      id="order-mobile"
                      name="mobile"
                      type="tel"
                      inputMode="tel"
                      autoComplete="tel"
                      maxLength={20}
                      placeholder="10-digit mobile"
                      value={form.mobile}
                      onChange={(e) => setField("mobile", e.target.value)}
                      aria-invalid={Boolean(errors.mobile)}
                      aria-describedby={
                        errors.mobile ? "order-mobile-error" : undefined
                      }
                      className={inputClass(Boolean(errors.mobile))}
                    />
                  </Field>

                  <Field
                    id="order-preferredDate"
                    label="Preferred Date"
                    error={errors.preferredDate}
                  >
                    <input
                      id="order-preferredDate"
                      name="preferredDate"
                      type="date"
                      min={today}
                      value={form.preferredDate}
                      onChange={(e) =>
                        setField("preferredDate", e.target.value)
                      }
                      aria-invalid={Boolean(errors.preferredDate)}
                      aria-describedby={
                        errors.preferredDate
                          ? "order-preferredDate-error"
                          : undefined
                      }
                      className={inputClass(Boolean(errors.preferredDate))}
                    />
                  </Field>
                </div>

                <Field
                  id="order-email"
                  label="Email Address"
                  error={errors.email}
                >
                  <input
                    id="order-email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    maxLength={255}
                    placeholder="you@example.com"
                    value={form.email}
                    onChange={(e) => setField("email", e.target.value)}
                    aria-invalid={Boolean(errors.email)}
                    aria-describedby={
                      errors.email ? "order-email-error" : undefined
                    }
                    className={inputClass(Boolean(errors.email))}
                  />
                  <p className="mt-1.5 text-[11px] text-[#8A7466]">
                    Your order confirmation will be sent here.
                  </p>
                </Field>

                <Field
                  id="order-address"
                  label="Address"
                  error={errors.address}
                >
                  <textarea
                    id="order-address"
                    name="address"
                    rows={3}
                    autoComplete="street-address"
                    maxLength={2000}
                    placeholder="House / street, area, city, PIN code"
                    value={form.address}
                    onChange={(e) => setField("address", e.target.value)}
                    aria-invalid={Boolean(errors.address)}
                    aria-describedby={
                      errors.address ? "order-address-error" : undefined
                    }
                    className={`${inputClass(Boolean(errors.address))} resize-none`}
                  />
                </Field>

                <button
                  type="submit"
                  className="mt-2 flex w-full items-center justify-center gap-2 rounded-xl bg-[#7D1E28] px-5 py-3 text-sm font-semibold text-[#F3D78A] shadow-sm transition-colors hover:bg-[#5A121D] focus:outline-none focus:ring-2 focus:ring-[#E5C77A] focus:ring-offset-2 focus:ring-offset-[#FDFAF4]"
                >
                  Continue to Payment
                  <ArrowRight size={16} />
                </button>
              </form>
            ) : (
              /* =============== STEP 2 — PAYMENT =============== */
              <form
                onSubmit={handleSubmit}
                noValidate
                className="animate-order-step-in space-y-5"
              >
                {/* --- Customer details stay visible for review --- */}
                <section
                  aria-labelledby="order-review-heading"
                  className="rounded-2xl border border-[#EFE3CF] bg-white/70 px-4 py-3.5"
                >
                  <div className="mb-2 flex items-center justify-between gap-3">
                    <h3
                      id="order-review-heading"
                      className="text-[11px] font-semibold uppercase tracking-[0.12em] text-[#8A1C2B]"
                    >
                      Your Details
                    </h3>
                    <button
                      type="button"
                      onClick={() => {
                        setSubmitError(null);
                        setStep(1);
                      }}
                      className="flex items-center gap-1 rounded-md px-1.5 py-0.5 text-[12px] font-medium text-[#7D1E28] underline-offset-2 transition-colors hover:underline focus:outline-none focus:ring-2 focus:ring-[#E5C77A]"
                    >
                      <ArrowLeft size={12} />
                      Edit
                    </button>
                  </div>

                  <div className="divide-y divide-[#F5EDE0]">
                    <ReviewRow label="Name" value={form.name} />
                    <ReviewRow label="Mobile" value={form.mobile} />
                    <ReviewRow label="Email" value={form.email} />
                    <ReviewRow label="Address" value={form.address} />
                    <ReviewRow
                      label="Preferred Date"
                      value={formatDate(form.preferredDate)}
                    />
                    {packageName ? (
                      <ReviewRow label="Package" value={packageName} />
                    ) : null}
                  </div>
                </section>

                {/* --- Clear separation between details and payment --- */}
                <div className="flex items-center gap-3" aria-hidden="true">
                  <span className="h-px flex-1 bg-gradient-to-r from-transparent to-[#E5C77A]" />
                  <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#B08D57]">
                    Payment
                  </span>
                  <span className="h-px flex-1 bg-gradient-to-l from-transparent to-[#E5C77A]" />
                </div>

                {/* --- Payment details, fetched live from the dashboard --- */}
                <section
                  aria-labelledby="order-payment-heading"
                  aria-busy={paymentLoading}
                  className="rounded-2xl border border-[#E5C77A]/70 bg-gradient-to-b from-[#FFFDF8] to-[#FBF6EE] px-4 py-4 shadow-sm"
                >
                  <h3 id="order-payment-heading" className="sr-only">
                    Payment details
                  </h3>

                  {paymentLoading ? (
                    <div className="flex items-center justify-center gap-2 py-8 text-sm text-[#7A6458]">
                      <Loader2 size={16} className="animate-spin" />
                      Loading payment details...
                    </div>
                  ) : (
                    <>
                      {paymentError ? (
                        <p
                          role="alert"
                          className="mb-3 flex items-start gap-1.5 rounded-lg bg-[#FBEEEE] px-3 py-2 text-xs leading-relaxed text-[#B3261E]"
                        >
                          <CircleAlert
                            size={14}
                            className="mt-0.5 shrink-0"
                            aria-hidden="true"
                          />
                          {paymentError}
                        </p>
                      ) : null}

                      {payment?.business_name?.trim() ? (
                        <p className="mb-3 text-center font-[family-name:var(--font-cormorant)] text-lg font-bold text-[#42151B]">
                          {payment.business_name.trim()}
                        </p>
                      ) : null}

                      {/* QR code */}
                      <div className="mb-4 flex flex-col items-center">
                        <div className="rounded-2xl border border-[#E4D7C3] bg-white p-3 shadow-sm">
                          {qrSrc ? (
                            <Image
                              src={qrSrc}
                              alt={`UPI QR code for ${
                                payment?.business_name?.trim() || "payment"
                              }`}
                              width={168}
                              height={168}
                              unoptimized
                              className="h-[152px] w-[152px] object-contain sm:h-[168px] sm:w-[168px]"
                            />
                          ) : (
                            <div className="flex h-[152px] w-[152px] flex-col items-center justify-center gap-2 rounded-xl bg-[#FBF6EE] text-center sm:h-[168px] sm:w-[168px]">
                              <QrCode
                                size={30}
                                className="text-[#C4B3A2]"
                                aria-hidden="true"
                              />
                              <span className="px-3 text-[11px] leading-snug text-[#8A7466]">
                                QR code not uploaded yet
                              </span>
                            </div>
                          )}
                        </div>
                        <span className="mt-2.5 text-[11px] font-semibold uppercase tracking-[0.16em] text-[#B08D57]">
                          Scan to Pay
                        </span>
                      </div>

                      {/* Bank + UPI details */}
                      <div className="rounded-xl border border-[#EFE3CF] bg-white px-3.5 py-1">
                        <PaymentRow
                          label="Business Name"
                          value={payment?.business_name ?? null}
                        />
                        <PaymentRow
                          label="Account Holder"
                          value={payment?.account_holder ?? null}
                        />
                        <PaymentRow
                          label="Account Number"
                          value={payment?.account_number ?? null}
                          copyable
                        />
                        <PaymentRow
                          label="IFSC Code"
                          value={payment?.ifsc_code ?? null}
                          copyable
                        />
                        <PaymentRow
                          label="UPI ID"
                          value={payment?.upi_id ?? null}
                          copyable
                        />
                      </div>

                      <p className="mt-3 flex items-start gap-2 rounded-xl bg-[#F7EFE1] px-3 py-2.5 text-[12px] leading-relaxed text-[#6E584D]">
                        <ShieldCheck
                          size={15}
                          className="mt-px shrink-0 text-[#9E2A2B]"
                          aria-hidden="true"
                        />
                        {paymentNote}
                      </p>
                    </>
                  )}
                </section>

                {submitError ? (
                  <p
                    role="alert"
                    className="flex items-start gap-1.5 rounded-lg bg-[#FBEEEE] px-3 py-2 text-xs leading-relaxed text-[#B3261E]"
                  >
                    <CircleAlert
                      size={14}
                      className="mt-0.5 shrink-0"
                      aria-hidden="true"
                    />
                    {submitError}
                  </p>
                ) : null}

                <div className="flex flex-col-reverse gap-2.5 sm:flex-row">
                  <button
                    type="button"
                    onClick={() => {
                      setSubmitError(null);
                      setStep(1);
                    }}
                    disabled={submitting}
                    className="flex items-center justify-center gap-2 rounded-xl border border-[#DFCBB0] bg-white px-5 py-3 text-sm font-semibold text-[#7D1E28] transition-colors hover:bg-[#FBF6EE] focus:outline-none focus:ring-2 focus:ring-[#E5C77A] disabled:opacity-50 sm:flex-1"
                  >
                    <ArrowLeft size={16} />
                    Back
                  </button>

                  <button
                    type="submit"
                    disabled={submitting}
                    className="flex items-center justify-center gap-2 rounded-xl bg-[#7D1E28] px-5 py-3 text-sm font-semibold text-[#F3D78A] shadow-sm transition-colors hover:bg-[#5A121D] focus:outline-none focus:ring-2 focus:ring-[#E5C77A] focus:ring-offset-2 focus:ring-offset-[#FDFAF4] disabled:cursor-not-allowed disabled:opacity-70 sm:flex-[2]"
                  >
                    {submitting ? (
                      <>
                        <Loader2 size={16} className="animate-spin" />
                        Submitting...
                      </>
                    ) : (
                      <>
                        Submit Order
                        <Check size={16} />
                      </>
                    )}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
