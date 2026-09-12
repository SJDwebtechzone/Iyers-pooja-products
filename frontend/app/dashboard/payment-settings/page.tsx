"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import {
  Check,
  Loader2,
  QrCode,
  Save,
  Upload,
  CircleAlert,
} from "lucide-react";

const API_BASE = process.env.NEXT_PUBLIC_API_URL || "https://iyerspoojaproducts.com/api";

type PaymentSettings = {
  business_name: string | null;
  account_holder: string | null;
  account_number: string | null;
  ifsc_code: string | null;
  upi_id: string | null;
  qr_filename: string | null;
  payment_note: string | null;
};

type FormState = {
  business_name: string;
  account_holder: string;
  account_number: string;
  ifsc_code: string;
  upi_id: string;
  payment_note: string;
};

const EMPTY_FORM: FormState = {
  business_name: "",
  account_holder: "",
  account_number: "",
  ifsc_code: "",
  upi_id: "",
  payment_note: "",
};

const FIELDS: {
  key: keyof FormState;
  label: string;
  placeholder: string;
  hint?: string;
}[] = [
  {
    key: "business_name",
    label: "Business Name",
    placeholder: "e.g. Iyer's Pooja Products",
  },
  {
    key: "account_holder",
    label: "Account Holder Name",
    placeholder: "Name exactly as on the bank account",
  },
  {
    key: "account_number",
    label: "Account Number",
    placeholder: "Bank account number",
  },
  {
    key: "ifsc_code",
    label: "IFSC Code",
    placeholder: "e.g. HDFC0001234",
  },
  {
    key: "upi_id",
    label: "UPI ID",
    placeholder: "e.g. yourbusiness@okhdfcbank",
  },
];

const MAX_QR_BYTES = 2 * 1024 * 1024;

export default function PaymentSettingsPage() {
  const [form, setForm] = useState<FormState>(EMPTY_FORM);
  const [qrFilename, setQrFilename] = useState<string | null>(null);

  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [saved, setSaved] = useState(false);

  const [qrFile, setQrFile] = useState<File | null>(null);
  const [qrPreview, setQrPreview] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const load = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch(`${API_BASE}/payment-settings`, {
        cache: "no-store",
      });
      if (!res.ok) throw new Error("Failed to load");
      const data = (await res.json()) as PaymentSettings;
      setForm({
        business_name: data.business_name ?? "",
        account_holder: data.account_holder ?? "",
        account_number: data.account_number ?? "",
        ifsc_code: data.ifsc_code ?? "",
        upi_id: data.upi_id ?? "",
        payment_note: data.payment_note ?? "",
      });
      setQrFilename(data.qr_filename ?? null);
    } catch {
      setError("Could not load payment settings.");
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    load();
  }, [load]);

  // Release the object URL when the chosen file changes or the page unmounts.
  useEffect(() => {
    if (!qrFile) {
      setQrPreview(null);
      return;
    }
    const url = URL.createObjectURL(qrFile);
    setQrPreview(url);
    return () => URL.revokeObjectURL(url);
  }, [qrFile]);

  function handleFileChange(event: React.ChangeEvent<HTMLInputElement>) {
    const file = event.target.files?.[0];
    if (!file) return;

    if (!["image/png", "image/jpeg", "image/webp"].includes(file.type)) {
      setError("QR code must be a PNG, JPEG or WebP image.");
      event.target.value = "";
      return;
    }
    if (file.size > MAX_QR_BYTES) {
      setError("QR code image must be 2MB or smaller.");
      event.target.value = "";
      return;
    }

    setError(null);
    setQrFile(file);
  }

  async function handleSave(event: React.FormEvent) {
    event.preventDefault();
    setSaving(true);
    setError(null);
    setSaved(false);

    try {
      const body = new FormData();
      (Object.keys(form) as (keyof FormState)[]).forEach((key) => {
        body.append(key, form[key].trim());
      });
      if (qrFile) body.append("qr", qrFile);

      const res = await fetch(`${API_BASE}/payment-settings`, {
        method: "PATCH",
        credentials: "include",
        body,
      });
      if (!res.ok) throw new Error("Save failed");

      const data = (await res.json()) as PaymentSettings;
      setQrFilename(data.qr_filename ?? null);
      setQrFile(null);
      if (fileInputRef.current) fileInputRef.current.value = "";

      setSaved(true);
      window.setTimeout(() => setSaved(false), 2500);
    } catch {
      setError("Save failed. Make sure you're logged in and try again.");
    } finally {
      setSaving(false);
    }
  }

  const currentQrSrc =
    qrPreview ?? (qrFilename ? `/images/${qrFilename}` : null);

  return (
    <div>
      <h1
        className="text-2xl text-[#2B0C14] mb-1"
        style={{ fontFamily: "'Fraunces', Georgia, serif" }}
      >
        Payment Settings
      </h1>
      <p className="text-sm text-[#6B5A4E] mb-6 max-w-2xl">
        These details appear on Step 2 of the customer&apos;s Order Now flow.
        Anything you save here is used by the website immediately — nothing is
        hardcoded in the site.
      </p>

      {error && (
        <p className="mb-4 flex items-start gap-1.5 rounded-lg bg-red-50 px-3 py-2 text-sm text-red-700">
          <CircleAlert className="w-4 h-4 mt-0.5 shrink-0" />
          {error}
        </p>
      )}

      {loading ? (
        <div className="flex items-center gap-2 text-sm text-[#6B5A4E]">
          <Loader2 className="w-4 h-4 animate-spin" />
          Loading...
        </div>
      ) : (
        <form
          onSubmit={handleSave}
          className="grid gap-6 lg:grid-cols-[1fr_320px] items-start"
        >
          {/* ---- Bank / UPI fields ---- */}
          <div className="bg-white border border-[#E4D7C3] rounded-xl p-5 space-y-4">
            {FIELDS.map((field) => (
              <div key={field.key}>
                <label
                  htmlFor={`ps-${field.key}`}
                  className="mb-1.5 block text-[13px] font-medium text-[#2B0C14]"
                >
                  {field.label}
                </label>
                <input
                  id={`ps-${field.key}`}
                  value={form[field.key]}
                  onChange={(e) =>
                    setForm({ ...form, [field.key]: e.target.value })
                  }
                  placeholder={field.placeholder}
                  className="w-full rounded-lg border border-[#E4D7C3] px-3 py-2 text-sm focus:border-[#8A1C2B] focus:outline-none focus:ring-2 focus:ring-[#E5C77A]/50"
                />
              </div>
            ))}

            <div>
              <label
                htmlFor="ps-payment_note"
                className="mb-1.5 block text-[13px] font-medium text-[#2B0C14]"
              >
                Payment Message
              </label>
              <textarea
                id="ps-payment_note"
                rows={2}
                value={form.payment_note}
                onChange={(e) =>
                  setForm({ ...form, payment_note: e.target.value })
                }
                placeholder="Please complete the payment using the QR code or UPI ID."
                className="w-full resize-none rounded-lg border border-[#E4D7C3] px-3 py-2 text-sm focus:border-[#8A1C2B] focus:outline-none focus:ring-2 focus:ring-[#E5C77A]/50"
              />
              <p className="mt-1 text-[11px] text-[#8A7466]">
                Shown under the payment details. Leave blank to use the default
                message.
              </p>
            </div>
          </div>

          {/* ---- QR code ---- */}
          <div className="bg-white border border-[#E4D7C3] rounded-xl p-5">
            <h2 className="text-[13px] font-medium text-[#2B0C14] mb-3">
              UPI QR Code
            </h2>

            <div className="flex flex-col items-center">
              <div className="rounded-xl border border-[#E4D7C3] bg-[#FBF6EE] p-3">
                {currentQrSrc ? (
                  <Image
                    src={currentQrSrc}
                    alt="Current UPI QR code"
                    width={180}
                    height={180}
                    unoptimized
                    className="h-[180px] w-[180px] object-contain"
                  />
                ) : (
                  <div className="flex h-[180px] w-[180px] flex-col items-center justify-center gap-2 text-center">
                    <QrCode className="w-7 h-7 text-[#C4B3A2]" />
                    <span className="px-4 text-[11px] leading-snug text-[#8A7466]">
                      No QR code uploaded yet
                    </span>
                  </div>
                )}
              </div>

              {qrFile && (
                <p className="mt-2 text-[11px] text-[#8A1C2B]">
                  New image selected — save to apply.
                </p>
              )}

              <label
                htmlFor="ps-qr"
                className="mt-3 flex w-full cursor-pointer items-center justify-center gap-1.5 rounded-lg border border-[#E4D7C3] bg-white px-4 py-2 text-sm text-[#8A1C2B] transition hover:bg-[#FBF6EE] focus-within:ring-2 focus-within:ring-[#E5C77A]"
              >
                <Upload className="w-4 h-4" />
                {qrFilename || qrFile ? "Replace QR Code" : "Upload QR Code"}
              </label>
              <input
                ref={fileInputRef}
                id="ps-qr"
                type="file"
                accept="image/png,image/jpeg,image/webp"
                onChange={handleFileChange}
                className="sr-only"
              />
              <p className="mt-2 text-center text-[11px] text-[#8A7466]">
                PNG, JPEG or WebP. Maximum 2MB.
              </p>
            </div>
          </div>

          {/* ---- Save ---- */}
          <div className="lg:col-span-2 flex items-center gap-3">
            <button
              type="submit"
              disabled={saving}
              className="flex items-center gap-1.5 rounded-lg bg-[#8A1C2B] px-5 py-2.5 text-sm text-[#F3E7D3] transition hover:bg-[#701622] disabled:opacity-60"
            >
              {saving ? (
                <Loader2 className="w-4 h-4 animate-spin" />
              ) : (
                <Save className="w-4 h-4" />
              )}
              {saving ? "Saving..." : "Save Payment Details"}
            </button>

            {saved && (
              <span
                role="status"
                className="flex items-center gap-1 text-sm text-green-700"
              >
                <Check className="w-4 h-4" />
                Saved — the website is now using these details.
              </span>
            )}
          </div>
        </form>
      )}
    </div>
  );
}
