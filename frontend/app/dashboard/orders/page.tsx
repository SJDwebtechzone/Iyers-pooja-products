"use client";

import { useCallback, useEffect, useState } from "react";
import Link from "next/link";
import { Trash2, Loader2, CircleAlert, ChevronRight } from "lucide-react";
import { refreshDashboardBadges } from "../dashboard-events";

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

const STATUSES: OrderStatus[] = ["new", "processed", "cancelled"];

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
  // Date-only strings parse as UTC midnight, which reads a day early behind UTC.
  const parsed = new Date(`${String(value).slice(0, 10)}T00:00:00`);
  if (Number.isNaN(parsed.getTime())) return value;
  return parsed.toLocaleDateString("en-IN", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
}

function formatDateTime(value: string | null) {
  if (!value) return "—";
  const parsed = new Date(value);
  if (Number.isNaN(parsed.getTime())) return value;
  return parsed.toLocaleString("en-IN", {
    day: "numeric",
    month: "short",
    year: "numeric",
    hour: "numeric",
    minute: "2-digit",
  });
}

export default function OrdersPage() {
  const [orders, setOrders] = useState<Order[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [busyId, setBusyId] = useState<number | null>(null);
  const [showDeleteAll, setShowDeleteAll] = useState(false);
  const [deletingAll, setDeletingAll] = useState(false);

  const load = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch(`${API_BASE}/orders`, {
        credentials: "include",
        cache: "no-store",
      });
      if (!res.ok) throw new Error("Failed to load");
      const data = await res.json();
      setOrders(Array.isArray(data) ? data : []);
    } catch {
      setError("Could not load orders. Make sure you're logged in.");
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    load();
  }, [load]);

  async function updateStatus(id: number, status: OrderStatus) {
    setBusyId(id);
    try {
      const res = await fetch(`${API_BASE}/orders/${id}/status`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify({ status }),
      });
      if (!res.ok) throw new Error();
      setOrders((previous) =>
        previous.map((order) =>
          order.id === id ? { ...order, status } : order,
        ),
      );
      // The Orders badge counts unprocessed orders — refresh it now.
      refreshDashboardBadges();
    } catch {
      alert("Could not update the order status. Make sure you're logged in.");
    } finally {
      setBusyId(null);
    }
  }

  async function handleDelete(id: number) {
    if (!confirm("Delete this order? This cannot be undone.")) return;
    try {
      const res = await fetch(`${API_BASE}/orders/${id}`, {
        method: "DELETE",
        credentials: "include",
      });
      if (!res.ok) throw new Error();
      load();
      refreshDashboardBadges();
    } catch {
      alert("Delete failed. Make sure you're logged in.");
    }
  }

  async function handleDeleteAll() {
    setDeletingAll(true);
    try {
      const res = await fetch(`${API_BASE}/orders/all`, {
        method: "DELETE",
        credentials: "include",
      });
      if (!res.ok) throw new Error();
      setShowDeleteAll(false);
      load();
      refreshDashboardBadges();
    } catch {
      alert("Delete all failed — make sure you're logged in.");
    } finally {
      setDeletingAll(false);
    }
  }

  return (
    <div>
      <div className="flex items-start justify-between gap-4 mb-1">
        <h1
          className="text-2xl text-[#2B0C14]"
          style={{ fontFamily: "'Fraunces', Georgia, serif" }}
        >
          Orders
        </h1>
        {orders.length > 0 && (
          <button
            onClick={() => setShowDeleteAll(true)}
            className="shrink-0 inline-flex items-center gap-1.5 rounded-lg border border-red-300 text-red-600 px-3 py-1.5 text-sm font-medium hover:bg-red-50"
          >
            <Trash2 className="w-4 h-4" />
            Clear All Orders
          </button>
        )}
      </div>
      <p className="text-sm text-[#6B5A4E] mb-6 max-w-2xl">
        Orders submitted through the Order Now flow. Open an order to review it,
        then mark it processed once you have verified the payment in your bank
        or UPI app.
      </p>

      {error && (
        <p className="mb-4 flex items-start gap-1.5 rounded-lg bg-red-50 px-3 py-2 text-sm text-red-700">
          <CircleAlert className="w-4 h-4 mt-0.5 shrink-0" />
          {error}
        </p>
      )}

      <div className="bg-white border border-[#E4D7C3] rounded-xl overflow-x-auto">
        <table className="w-full text-sm min-w-[1000px]">
          <thead>
            <tr className="bg-[#8A1C2B] text-[#F3E7D3] text-left">
              <th className="px-4 py-3 font-normal w-16">Order</th>
              <th className="px-4 py-3 font-normal">Customer</th>
              <th className="px-4 py-3 font-normal">Contact</th>
              <th className="px-4 py-3 font-normal">Package</th>
              <th className="px-4 py-3 font-normal">Delivery Date</th>
              <th className="px-4 py-3 font-normal">Placed On</th>
              <th className="px-4 py-3 font-normal w-36">Status</th>
              <th className="px-4 py-3 font-normal w-16 text-right">Actions</th>
            </tr>
          </thead>
          <tbody>
            {loading ? (
              <tr>
                <td
                  colSpan={8}
                  className="px-4 py-8 text-center text-[#6B5A4E]"
                >
                  <span className="inline-flex items-center gap-2">
                    <Loader2 className="w-4 h-4 animate-spin" />
                    Loading...
                  </span>
                </td>
              </tr>
            ) : orders.length === 0 ? (
              <tr>
                <td
                  colSpan={8}
                  className="px-4 py-8 text-center text-[#6B5A4E]"
                >
                  No orders yet.
                </td>
              </tr>
            ) : (
              orders.map((order) => (
                <tr
                  key={order.id}
                  className="border-t border-[#F3E7D3] align-top hover:bg-[#FBF6EE]"
                >
                  <td className="px-4 py-3">
                    <Link
                      href={`/dashboard/orders/${order.id}`}
                      className="inline-flex items-center gap-0.5 font-medium text-[#8A1C2B] hover:underline"
                    >
                      #{order.id}
                      <ChevronRight className="w-3.5 h-3.5" />
                    </Link>
                  </td>

                  <td className="px-4 py-3">
                    <div className="text-[#2B0C14] font-medium">
                      {order.name}
                    </div>
                    <div className="text-[#6B5A4E] text-xs mt-0.5 max-w-[220px]">
                      {order.address}
                    </div>
                  </td>

                  <td className="px-4 py-3 text-[#6B5A4E]">
                    <div>{order.mobile}</div>
                    <a
                      href={`mailto:${order.email}`}
                      className="text-xs text-[#8A1C2B] hover:underline break-all"
                    >
                      {order.email}
                    </a>
                  </td>

                  <td className="px-4 py-3 text-[#2B0C14]">
                    {order.package_name || "—"}
                  </td>

                  <td className="px-4 py-3 text-[#2B0C14] whitespace-nowrap">
                    {formatDate(order.preferred_date)}
                  </td>

                  <td className="px-4 py-3 text-[#6B5A4E] whitespace-nowrap text-xs">
                    {formatDateTime(order.created_at)}
                  </td>

                  <td className="px-4 py-3">
                    <label htmlFor={`status-${order.id}`} className="sr-only">
                      Status for order #{order.id}
                    </label>
                    <select
                      id={`status-${order.id}`}
                      value={order.status}
                      disabled={busyId === order.id}
                      onChange={(e) =>
                        updateStatus(order.id, e.target.value as OrderStatus)
                      }
                      className={`w-full rounded-lg border px-2 py-1.5 text-xs font-medium focus:outline-none focus:ring-2 focus:ring-[#E5C77A] disabled:opacity-60 ${
                        STATUS_STYLES[order.status]
                      }`}
                    >
                      {STATUSES.map((status) => (
                        <option key={status} value={status}>
                          {STATUS_LABELS[status]}
                        </option>
                      ))}
                    </select>
                  </td>

                  <td className="px-4 py-3">
                    <div className="flex items-center justify-end gap-3">
                      <Link
                        href={`/dashboard/orders/${order.id}`}
                        className="text-xs text-[#8A1C2B] hover:underline"
                      >
                        Open
                      </Link>
                      <button
                        onClick={() => handleDelete(order.id)}
                        className="text-[#6B5A4E] hover:text-red-600"
                        aria-label={`Delete order #${order.id}`}
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      {showDeleteAll && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 px-4">
          <div className="bg-white rounded-xl border border-[#E4D7C3] max-w-sm w-full p-6">
            <h2
              className="text-lg text-[#2B0C14] mb-2"
              style={{ fontFamily: "'Fraunces', Georgia, serif" }}
            >
              Delete all orders?
            </h2>
            <p className="text-sm text-[#6B5A4E] mb-6">
              Are you sure you want to delete all orders? This action cannot be
              undone.
            </p>
            <div className="flex justify-end gap-3">
              <button
                onClick={() => setShowDeleteAll(false)}
                disabled={deletingAll}
                className="px-4 py-2 text-sm rounded-lg border border-[#E4D7C3] text-[#6B5A4E] hover:bg-[#FBF6EE] disabled:opacity-60"
              >
                Cancel
              </button>
              <button
                onClick={handleDeleteAll}
                disabled={deletingAll}
                className="px-4 py-2 text-sm rounded-lg bg-red-600 text-white hover:bg-red-700 disabled:opacity-60 inline-flex items-center gap-2"
              >
                {deletingAll && <Loader2 className="w-4 h-4 animate-spin" />}
                Delete All
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}