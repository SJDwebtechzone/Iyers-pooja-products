"use client";

import { useCallback, useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useParams } from "next/navigation";
import {
  ArrowLeft,
  Check,
  CircleAlert,
  Loader2,
  Mail,
  MapPin,
  Package,
  Phone,
  QrCode,
  CalendarDays,
  Ban,
  RotateCcw,
} from "lucide-react";
import { refreshDashboardBadges } from "../../dashboard-events";

const API_BASE = process.env.NEXT_PUBLIC_API_URL || "https://iyerspoojaproducts.com/api";

type OrderStatus = "new" | "processed" | "cancelled";

type Order = {
  id: number;
  name: string;
  mobile: string;
  email: string;
  address: string;
  package_name: string | null;
  preferred_date: string | null;
  status: OrderStatus;
  created_at: string;
};

type PaymentSettings = {
  business_name: string | null;
  account_holder: string | null;
  account_number: string | null;
  ifsc_code: string | null;
  upi_id: string | null;
  qr_filename: string | null;
};

const STATUS_STYLES: Record<OrderStatus, string> = {
  new: "bg-[#FDF3E0] text-[#8A5A11] border-[#E9D4A8]",
  processed: "bg-[#E9F5EC] text-[#1F6B36] border-[#BFE0C8]",
  cancelled: "bg-[#FBEEEE] text-[#96201C] border-[#E7C4C2]",
};

const STATUS_LABELS: Record<OrderStatus, string> = {
  new: "New",
  processed: "Processed",
  cancelled: "Cancelled",
};

function formatDate(value: string | null) {
  if (!value) return "—";
  const parsed = new Date(`${String(value).slice(0, 10)}T00:00:00`);
  if (Number.isNaN(parsed.getTime())) return String(value);
  return parsed.toLocaleDateString("en-IN", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

function formatDateTime(value: string | null) {
  if (!value) return "—";
  const parsed = new Date(value);
  if (Number.isNaN(parsed.getTime())) return String(value);
  return parsed.toLocaleString("en-IN", {
    day: "numeric",
    month: "long",
    year: "numeric",
    hour: "numeric",
    minute: "2-digit",
  });
}

function DetailRow({
  icon: Icon,
  label,
  children,
}: {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex gap-3 py-3 border-b border-[#F3E7D3] last:border-b-0">
      <Icon className="w-4 h-4 mt-0.5 shrink-0 text-[#B5A290]" />
      <div className="min-w-0">
        <div className="text-[11px] uppercase tracking-wide text-[#B5A290]">
          {label}
        </div>
        <div className="text-sm text-[#2B0C14] mt-0.5 break-words">
          {children}
        </div>
      </div>
    </div>
  );
}

function PaymentLine({
  label,
  value,
}: {
  label: string;
  value: string | null;
}) {
  return (
    <div className="flex items-start justify-between gap-3 py-2 border-b border-[#F3E7D3] last:border-b-0">
      <span className="text-[13px] text-[#6B5A4E] shrink-0">{label}</span>
      <span
        className={`text-[13px] text-right break-all ${
          value?.trim() ? "text-[#2B0C14] font-medium" : "text-[#B5A290]"
        }`}
      >
        {value?.trim() || "—"}
      </span>
    </div>
  );
}

export default function OrderDetailPage() {
  const params = useParams();
  const orderId = Array.isArray(params?.id) ? params.id[0] : params?.id;

  const [order, setOrder] = useState<Order | null>(null);
  const [payment, setPayment] = useState<PaymentSettings | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [busy, setBusy] = useState(false);

  const load = useCallback(async () => {
    if (!orderId) return;
    setLoading(true);
    setError(null);
    try {
      const res = await fetch(`${API_BASE}/orders/${orderId}`, {
        credentials: "include",
        cache: "no-store",
      });
      if (res.status === 404) throw new Error("not-found");
      if (!res.ok) throw new Error("failed");
      setOrder(await res.json());

      // Opening the order clears its notification server-side, so refresh
      // the shell's badges right away.
      refreshDashboardBadges();
    } catch (err) {
      setError(
        err instanceof Error && err.message === "not-found"
          ? "This order no longer exists."
          : "Could not load this order. Make sure you're logged in.",
      );
    } finally {
      setLoading(false);
    }
  }, [orderId]);

  useEffect(() => {
    load();
  }, [load]);

  // The payment details the customer was shown, so the admin can reconcile.
  useEffect(() => {
    fetch(`${API_BASE}/payment-settings`, { cache: "no-store" })
      .then((res) => (res.ok ? res.json() : null))
      .then((data) => setPayment(data))
      .catch(() => setPayment(null));
  }, []);

  async function setStatus(status: OrderStatus) {
    if (!order) return;
    setBusy(true);
    try {
      const res = await fetch(`${API_BASE}/orders/${order.id}/status`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify({ status }),
      });
      if (!res.ok) throw new Error();
      setOrder(await res.json());
      refreshDashboardBadges();
    } catch {
      alert("Could not update the order. Make sure you're logged in.");
    } finally {
      setBusy(false);
    }
  }

  if (loading) {
    return (
      <div className="flex items-center gap-2 text-sm text-[#6B5A4E]">
        <Loader2 className="w-4 h-4 animate-spin" />
        Loading order...
      </div>
    );
  }

  if (error || !order) {
    return (
      <div>
        <Link
          href="/dashboard/orders"
          className="inline-flex items-center gap-1.5 text-sm text-[#8A1C2B] hover:underline mb-4"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Orders
        </Link>
        <p className="flex items-start gap-1.5 rounded-lg bg-red-50 px-3 py-2 text-sm text-red-700">
          <CircleAlert className="w-4 h-4 mt-0.5 shrink-0" />
          {error ?? "Order not found."}
        </p>
      </div>
    );
  }

  const qrSrc = payment?.qr_filename ? `/images/${payment.qr_filename}` : null;

  return (
    <div>
      <Link
        href="/dashboard/orders"
        className="inline-flex items-center gap-1.5 text-sm text-[#8A1C2B] hover:underline mb-4"
      >
        <ArrowLeft className="w-4 h-4" />
        Back to Orders
      </Link>

      <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
        <div>
          <h1
            className="text-2xl text-[#2B0C14]"
            style={{ fontFamily: "'Fraunces', Georgia, serif" }}
          >
            Order #{order.id}
          </h1>
          <p className="text-sm text-[#6B5A4E] mt-0.5">
            Placed {formatDateTime(order.created_at)}
          </p>
        </div>

        <span
          className={`rounded-full border px-3 py-1 text-xs font-semibold ${
            STATUS_STYLES[order.status]
          }`}
        >
          {STATUS_LABELS[order.status]}
        </span>
      </div>

      <div className="grid gap-6 lg:grid-cols-[1fr_340px] items-start">
        {/* ---- Customer & package ---- */}
        <div className="space-y-6">
          <section className="bg-white border border-[#E4D7C3] rounded-xl p-5">
            <h2 className="text-[11px] font-semibold uppercase tracking-[0.12em] text-[#8A1C2B] mb-1">
              Customer Details
            </h2>
            <DetailRow icon={Package} label="Customer Name">
              {order.name}
            </DetailRow>
            <DetailRow icon={Phone} label="Mobile">
              <a
                href={`tel:${order.mobile}`}
                className="text-[#8A1C2B] hover:underline"
              >
                {order.mobile}
              </a>
            </DetailRow>
            <DetailRow icon={Mail} label="Email">
              <a
                href={`mailto:${order.email}`}
                className="text-[#8A1C2B] hover:underline"
              >
                {order.email}
              </a>
            </DetailRow>
            <DetailRow icon={MapPin} label="Address">
              {order.address}
            </DetailRow>
          </section>

          <section className="bg-white border border-[#E4D7C3] rounded-xl p-5">
            <h2 className="text-[11px] font-semibold uppercase tracking-[0.12em] text-[#8A1C2B] mb-1">
              Package & Schedule
            </h2>
            <DetailRow icon={Package} label="Package">
              {order.package_name || "—"}
            </DetailRow>
            <DetailRow icon={CalendarDays} label="Preferred Date">
              {formatDate(order.preferred_date)}
            </DetailRow>
          </section>

          {/* ---- Actions ---- */}
          <section className="bg-white border border-[#E4D7C3] rounded-xl p-5">
            <h2 className="text-[11px] font-semibold uppercase tracking-[0.12em] text-[#8A1C2B] mb-3">
              Actions
            </h2>
            <div className="flex flex-wrap gap-2.5">
              {order.status !== "processed" && (
                <button
                  onClick={() => setStatus("processed")}
                  disabled={busy}
                  className="flex items-center gap-1.5 rounded-lg bg-[#8A1C2B] px-4 py-2.5 text-sm text-[#F3E7D3] transition hover:bg-[#701622] disabled:opacity-60"
                >
                  {busy ? (
                    <Loader2 className="w-4 h-4 animate-spin" />
                  ) : (
                    <Check className="w-4 h-4" />
                  )}
                  Mark as Processed
                </button>
              )}

              {order.status !== "cancelled" && (
                <button
                  onClick={() => setStatus("cancelled")}
                  disabled={busy}
                  className="flex items-center gap-1.5 rounded-lg border border-[#E4D7C3] bg-white px-4 py-2.5 text-sm text-[#96201C] transition hover:bg-[#FBF6EE] disabled:opacity-60"
                >
                  <Ban className="w-4 h-4" />
                  Cancel Order
                </button>
              )}

              {order.status !== "new" && (
                <button
                  onClick={() => setStatus("new")}
                  disabled={busy}
                  className="flex items-center gap-1.5 rounded-lg border border-[#E4D7C3] bg-white px-4 py-2.5 text-sm text-[#6B5A4E] transition hover:bg-[#FBF6EE] disabled:opacity-60"
                >
                  <RotateCcw className="w-4 h-4" />
                  Reopen as New
                </button>
              )}
            </div>
            <p className="mt-3 text-[12px] text-[#8A7466]">
              Marking an order processed removes it from the Orders badge and
              clears its notification.
            </p>
          </section>
        </div>

        {/* ---- Payment reference ---- */}
        <section className="bg-white border border-[#E4D7C3] rounded-xl p-5">
          <h2 className="text-[11px] font-semibold uppercase tracking-[0.12em] text-[#8A1C2B] mb-3">
            Payment Details Shown to Customer
          </h2>

          <div className="flex justify-center mb-4">
            <div className="rounded-xl border border-[#E4D7C3] bg-[#FBF6EE] p-2.5">
              {qrSrc ? (
                <Image
                  src={qrSrc}
                  alt="UPI QR code shown at checkout"
                  width={140}
                  height={140}
                  unoptimized
                  className="h-[140px] w-[140px] object-contain"
                />
              ) : (
                <div className="flex h-[140px] w-[140px] flex-col items-center justify-center gap-2 text-center">
                  <QrCode className="w-6 h-6 text-[#C4B3A2]" />
                  <span className="px-3 text-[11px] leading-snug text-[#8A7466]">
                    No QR code uploaded
                  </span>
                </div>
              )}
            </div>
          </div>

          <PaymentLine
            label="Business"
            value={payment?.business_name ?? null}
          />
          <PaymentLine
            label="Account Holder"
            value={payment?.account_holder ?? null}
          />
          <PaymentLine
            label="Account Number"
            value={payment?.account_number ?? null}
          />
          <PaymentLine label="IFSC" value={payment?.ifsc_code ?? null} />
          <PaymentLine label="UPI ID" value={payment?.upi_id ?? null} />

          <p className="mt-3 text-[12px] leading-relaxed text-[#8A7466]">
            These are your current payment settings. Verify the transfer in your
            bank or UPI app before marking the order processed.{" "}
            <Link
              href="/dashboard/payment-settings"
              className="text-[#8A1C2B] hover:underline"
            >
              Edit payment settings
            </Link>
          </p>
        </section>
      </div>
    </div>
  );
}
