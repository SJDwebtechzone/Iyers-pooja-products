"use client";

import { useCallback, useEffect, useState } from "react";
import {
  Check,
  CircleAlert,
  Loader2,
  MessageCircle,
  Phone,
  Save,
} from "lucide-react";

const API_BASE = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3001";

type ContactSettings = {
  whatsapp_number: string | null;
  phone_number: string | null;
  whatsapp_message: string | null;
};

type FormState = {
  whatsapp_number: string;
  phone_number: string;
  whatsapp_message: string;
};

const EMPTY_FORM: FormState = {
  whatsapp_number: "",
  phone_number: "",
  whatsapp_message: "",
};

/** WhatsApp needs country code + number, digits only. */
function whatsAppPreview(value: string) {
  const digits = value.replace(/\D/g, "");
  return digits ? `https://wa.me/${digits}` : null;
}

export default function ContactSettingsPage() {
  const [form, setForm] = useState<FormState>(EMPTY_FORM);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [saved, setSaved] = useState(false);

  const load = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch(`${API_BASE}/contact-settings`, {
        cache: "no-store",
      });
      if (!res.ok) throw new Error("Failed to load");
      const data = (await res.json()) as ContactSettings;
      setForm({
        whatsapp_number: data.whatsapp_number ?? "",
        phone_number: data.phone_number ?? "",
        whatsapp_message: data.whatsapp_message ?? "",
      });
    } catch {
      setError("Could not load contact settings.");
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    load();
  }, [load]);

  async function handleSave(event: React.FormEvent) {
    event.preventDefault();
    setSaving(true);
    setError(null);
    setSaved(false);

    try {
      const res = await fetch(`${API_BASE}/contact-settings`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify({
          whatsapp_number: form.whatsapp_number.trim(),
          phone_number: form.phone_number.trim(),
          whatsapp_message: form.whatsapp_message.trim(),
        }),
      });
      if (!res.ok) throw new Error("Save failed");

      setSaved(true);
      window.setTimeout(() => setSaved(false), 2500);
    } catch {
      setError("Save failed. Make sure you're logged in and try again.");
    } finally {
      setSaving(false);
    }
  }

  const waPreview = whatsAppPreview(form.whatsapp_number);

  return (
    <div>
      <h1
        className="text-2xl text-[#2B0C14] mb-1"
        style={{ fontFamily: "'Fraunces', Georgia, serif" }}
      >
        Contact Settings
      </h1>
      <p className="text-sm text-[#6B5A4E] mb-6 max-w-2xl">
        These numbers power the floating WhatsApp and Call buttons on the
        website. Changes take effect immediately — nothing is hardcoded in the
        site. Leave a number blank to hide that button.
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
        <form onSubmit={handleSave} className="max-w-2xl space-y-6">
          <div className="bg-white border border-[#E4D7C3] rounded-xl p-5 space-y-5">
            <div>
              <label
                htmlFor="cs-whatsapp"
                className="mb-1.5 flex items-center gap-1.5 text-[13px] font-medium text-[#2B0C14]"
              >
                <MessageCircle className="w-3.5 h-3.5 text-[#25D366]" />
                WhatsApp Number
              </label>
              <input
                id="cs-whatsapp"
                value={form.whatsapp_number}
                onChange={(e) =>
                  setForm({ ...form, whatsapp_number: e.target.value })
                }
                placeholder="+91 98844 62960"
                inputMode="tel"
                maxLength={32}
                className="w-full rounded-lg border border-[#E4D7C3] px-3 py-2 text-sm focus:border-[#8A1C2B] focus:outline-none focus:ring-2 focus:ring-[#E5C77A]/50"
              />
              <p className="mt-1.5 text-[11px] text-[#8A7466]">
                Include the country code. Spaces and symbols are fine — they are
                stripped automatically.
                {waPreview && (
                  <>
                    {" "}
                    Opens:{" "}
                    <span className="text-[#2B0C14] font-medium">
                      {waPreview}
                    </span>
                  </>
                )}
              </p>
            </div>

            <div>
              <label
                htmlFor="cs-phone"
                className="mb-1.5 flex items-center gap-1.5 text-[13px] font-medium text-[#2B0C14]"
              >
                <Phone className="w-3.5 h-3.5 text-[#8A1C2B]" />
                Phone Number
              </label>
              <input
                id="cs-phone"
                value={form.phone_number}
                onChange={(e) =>
                  setForm({ ...form, phone_number: e.target.value })
                }
                placeholder="+91 98844 62960"
                inputMode="tel"
                maxLength={32}
                className="w-full rounded-lg border border-[#E4D7C3] px-3 py-2 text-sm focus:border-[#8A1C2B] focus:outline-none focus:ring-2 focus:ring-[#E5C77A]/50"
              />
              <p className="mt-1.5 text-[11px] text-[#8A7466]">
                Opens the customer&apos;s phone dialer.
              </p>
            </div>

            <div>
              <label
                htmlFor="cs-message"
                className="mb-1.5 block text-[13px] font-medium text-[#2B0C14]"
              >
                WhatsApp Pre-filled Message
              </label>
              <textarea
                id="cs-message"
                rows={2}
                value={form.whatsapp_message}
                onChange={(e) =>
                  setForm({ ...form, whatsapp_message: e.target.value })
                }
                placeholder="Hello, I would like to know more about your pooja packages."
                className="w-full resize-none rounded-lg border border-[#E4D7C3] px-3 py-2 text-sm focus:border-[#8A1C2B] focus:outline-none focus:ring-2 focus:ring-[#E5C77A]/50"
              />
              <p className="mt-1.5 text-[11px] text-[#8A7466]">
                Appears in the customer&apos;s chat box, ready to send. Leave
                blank to open an empty chat.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
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
              {saving ? "Saving..." : "Save Contact Details"}
            </button>

            {saved && (
              <span
                role="status"
                className="flex items-center gap-1 text-sm text-green-700"
              >
                <Check className="w-4 h-4" />
                Saved — the website is now using these numbers.
              </span>
            )}
          </div>
        </form>
      )}
    </div>
  );
}
