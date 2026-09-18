"use client";

import { useEffect, useState, useCallback, useMemo } from "react";
import Link from "next/link";
import {
  Package,
  Gift,
  Phone,
  ShoppingBag,
  Clock,
  CheckCircle2,
  Briefcase,
  Globe,
  ArrowUpRight,
  TrendingUp,
  RefreshCw,
  AlertCircle,
  Calendar,
  Layers,
  ChevronRight,
} from "lucide-react";

const API_BASE =
  process.env.NEXT_PUBLIC_API_URL || "https://iyerspoojaproducts.com/api";

type OrderStatus = "new" | "processed" | "cancelled";

interface Order {
  id: number;
  name: string;
  mobile: string;
  email: string;
  address: string;
  package_name: string | null;
  preferred_date: string | null;
  status: OrderStatus;
  created_at: string;
}

interface Booking {
  id: number;
  name: string;
  mobile: string;
  email: string;
  address: string;
  pooja: string | null;
  created_at: string;
}

interface PackageItem {
  id: number;
  sno?: number;
  english?: string;
  name_english?: string;
  tamil?: string | null;
}

const STATUS_STYLES: Record<OrderStatus, string> = {
  new: "bg-[#FDF3E0] text-[#8A5A11] border-[#E9D4A8]",
  processed: "bg-[#E9F5EC] text-[#1F6B36] border-[#BFE0C8]",
  cancelled: "bg-[#FBEEEE] text-[#96201C] border-[#E7C4C2]",
};

const STATUS_LABELS: Record<OrderStatus, string> = {
  new: "Pending",
  processed: "Processed",
  cancelled: "Cancelled",
};

// Known static category counts based on app offerings
const FESTIVAL_PACKAGES_COUNT = 9;
const CORPORATE_PACKAGES_COUNT = 5;

function formatDate(value: string | null | undefined): string {
  if (!value) return "—";
  try {
    const d = new Date(value);
    if (Number.isNaN(d.getTime())) return String(value);
    return d.toLocaleDateString("en-IN", {
      day: "numeric",
      month: "short",
      year: "numeric",
    });
  } catch {
    return String(value);
  }
}

function formatTimeAgo(value: string | null | undefined): string {
  if (!value) return "—";
  try {
    const d = new Date(value);
    if (Number.isNaN(d.getTime())) return "Recently";
    const now = new Date();
    const diffSec = Math.floor((now.getTime() - d.getTime()) / 1000);
    if (diffSec < 60) return "Just now";
    const diffMin = Math.floor(diffSec / 60);
    if (diffMin < 60) return `${diffMin}m ago`;
    const diffHours = Math.floor(diffMin / 60);
    if (diffHours < 24) return `${diffHours}h ago`;
    const diffDays = Math.floor(diffHours / 24);
    if (diffDays < 30) return `${diffDays}d ago`;
    return formatDate(value);
  } catch {
    return "Recently";
  }
}

export default function DashboardOverviewPage() {
  const [orders, setOrders] = useState<Order[]>([]);
  const [bookings, setBookings] = useState<Booking[]>([]);
  const [templeItems, setTempleItems] = useState<PackageItem[]>([]);
  const [overseasItems, setOverseasItems] = useState<PackageItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [lastRefreshed, setLastRefreshed] = useState<Date>(new Date());

  const fetchData = useCallback(async () => {
    setLoading(true);
    setError(null);

    try {
      const [ordersRes, bookingsRes, templeRes, overseasRes] =
        await Promise.allSettled([
          fetch(`${API_BASE}/orders`, {
            credentials: "include",
            cache: "no-store",
          }),
          fetch(`${API_BASE}/bookings`, {
            credentials: "include",
            cache: "no-store",
          }),
          fetch(`${API_BASE}/temple-packages`, {
            cache: "no-store",
          }),
          fetch(`${API_BASE}/overseas-temple-package`, {
            cache: "no-store",
          }),
        ]);

      let fetchErrors = 0;

      // Handle Orders
      if (ordersRes.status === "fulfilled" && ordersRes.value.ok) {
        const data = await ordersRes.value.json();
        setOrders(Array.isArray(data) ? data : []);
      } else {
        fetchErrors++;
      }

      // Handle Bookings / Enquiries
      if (bookingsRes.status === "fulfilled" && bookingsRes.value.ok) {
        const data = await bookingsRes.value.json();
        setBookings(Array.isArray(data) ? data : []);
      } else {
        fetchErrors++;
      }

      // Handle Temple Packages
      if (templeRes.status === "fulfilled" && templeRes.value.ok) {
        const data = await templeRes.value.json();
        setTempleItems(Array.isArray(data) ? data : []);
      }

      // Handle Overseas Temple Packages
      if (overseasRes.status === "fulfilled" && overseasRes.value.ok) {
        const data = await overseasRes.value.json();
        setOverseasItems(Array.isArray(data) ? data : []);
      }

      if (fetchErrors >= 2) {
        setError(
          "Could not load live orders and booking requests. Please ensure you are logged in."
        );
      }

      setLastRefreshed(new Date());
    } catch {
      setError("An unexpected network error occurred while refreshing data.");
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  // Derived metrics
  const totalTempleCount = templeItems.length || 1;
  const totalOverseasCount = overseasItems.length;
  const totalOrdersCount = orders.length;
  const pendingOrdersCount = orders.filter((o) => o.status === "new").length;
  const processedOrdersCount = orders.filter((o) => o.status === "processed").length;
  const totalContactRequests = bookings.length;

  // Monthly stats
  const now = new Date();
  const currentYear = now.getFullYear();
  const currentMonth = now.getMonth();

  const ordersThisMonth = orders.filter((o) => {
    if (!o.created_at) return false;
    const d = new Date(o.created_at);
    return (
      !Number.isNaN(d.getTime()) &&
      d.getFullYear() === currentYear &&
      d.getMonth() === currentMonth
    );
  }).length;

  const contactsThisMonth = bookings.filter((b) => {
    if (!b.created_at) return false;
    const d = new Date(b.created_at);
    return (
      !Number.isNaN(d.getTime()) &&
      d.getFullYear() === currentYear &&
      d.getMonth() === currentMonth
    );
  }).length;

  // Most ordered package
  const mostOrderedPackage = useMemo(() => {
    if (orders.length === 0) return "N/A";
    const counts: Record<string, number> = {};
    for (const o of orders) {
      const name = o.package_name?.trim() || "Standard Pooja";
      counts[name] = (counts[name] || 0) + 1;
    }
    let topName = "Standard Pooja";
    let maxCount = 0;
    for (const [name, count] of Object.entries(counts)) {
      if (count > maxCount) {
        maxCount = count;
        topName = name;
      }
    }
    return topName;
  }, [orders]);

  // Recent 5 orders sorted by date desc
  const recentOrders = useMemo(() => {
    return [...orders]
      .sort((a, b) => {
        const timeA = new Date(a.created_at || 0).getTime();
        const timeB = new Date(b.created_at || 0).getTime();
        return timeB - timeA;
      })
      .slice(0, 5);
  }, [orders]);

  // Recent 5 contact bookings sorted by date desc
  const recentBookings = useMemo(() => {
    return [...bookings]
      .sort((a, b) => {
        const timeA = new Date(a.created_at || 0).getTime();
        const timeB = new Date(b.created_at || 0).getTime();
        return timeB - timeA;
      })
      .slice(0, 5);
  }, [bookings]);

  // 6-Month Trend Data for Chart
  const monthlyData = useMemo(() => {
    const months: { label: string; year: number; month: number; orders: number; contacts: number }[] = [];
    for (let i = 5; i >= 0; i--) {
      const d = new Date(currentYear, currentMonth - i, 1);
      const label = d.toLocaleDateString("en-US", { month: "short" });
      const year = d.getFullYear();
      const month = d.getMonth();
      months.push({ label, year, month, orders: 0, contacts: 0 });
    }

    orders.forEach((o) => {
      if (!o.created_at) return;
      const d = new Date(o.created_at);
      if (Number.isNaN(d.getTime())) return;
      const match = months.find(
        (m) => m.year === d.getFullYear() && m.month === d.getMonth()
      );
      if (match) match.orders++;
    });

    bookings.forEach((b) => {
      if (!b.created_at) return;
      const d = new Date(b.created_at);
      if (Number.isNaN(d.getTime())) return;
      const match = months.find(
        (m) => m.year === d.getFullYear() && m.month === d.getMonth()
      );
      if (match) match.contacts++;
    });

    return months;
  }, [orders, bookings, currentYear, currentMonth]);

  const maxChartVal = useMemo(() => {
    const highest = Math.max(
      ...monthlyData.map((m) => Math.max(m.orders, m.contacts)),
      1
    );
    return Math.max(highest, 5);
  }, [monthlyData]);

  const fulfillmentRate = totalOrdersCount > 0
    ? Math.round((processedOrdersCount / totalOrdersCount) * 100)
    : 0;

  return (
    <div className="max-w-6xl mx-auto space-y-8 pb-10">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1
            className="text-2xl lg:text-3xl text-[#2B0C14] font-medium"
            style={{ fontFamily: "'Fraunces', Georgia, serif" }}
          >
            Dashboard Overview
          </h1>
          <p className="text-sm text-[#6B5A4E] mt-1">
            Real-time insights across packages, customer orders, and priest booking requests.
          </p>
        </div>

        <div className="flex items-center gap-3 self-start sm:self-auto">
          <span className="text-xs text-[#8A7561] hidden sm:inline">
            Updated {lastRefreshed.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
          </span>
          <button
            onClick={fetchData}
            disabled={loading}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-[#E4D7C3] bg-white text-xs font-medium text-[#2B0C14] hover:bg-[#8A1C2B]/5 hover:border-[#8A1C2B]/30 transition disabled:opacity-50"
            title="Refresh dashboard metrics"
          >
            <RefreshCw
              className={`w-3.5 h-3.5 text-[#8A1C2B] ${loading ? "animate-spin" : ""}`}
            />
            {loading ? "Updating..." : "Refresh"}
          </button>
        </div>
      </div>

      {/* Error banner if any */}
      {error && (
        <div className="flex items-center justify-between p-4 bg-[#FBEEEE] border border-[#E7C4C2] rounded-xl text-sm text-[#96201C]">
          <div className="flex items-center gap-2.5">
            <AlertCircle className="w-5 h-5 flex-shrink-0" />
            <span>{error}</span>
          </div>
          <button
            onClick={fetchData}
            className="text-xs font-medium underline hover:text-[#2B0C14] ml-4"
          >
            Try Again
          </button>
        </div>
      )}

      {/* TOP KPI CARDS */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4">
        {/* 1. Total Temple Packages */}
        <Link
          href="/dashboard/temple-packages"
          className="group bg-white border border-[#E4D7C3] rounded-xl p-4.5 hover:border-[#8A1C2B]/40 hover:shadow-sm transition"
        >
          <div className="flex items-center justify-between mb-3">
            <div className="w-9 h-9 rounded-lg bg-[#8A1C2B]/10 flex items-center justify-center group-hover:scale-105 transition">
              <Package className="w-4.5 h-4.5 text-[#8A1C2B]" strokeWidth={1.75} />
            </div>
            <ArrowUpRight className="w-3.5 h-3.5 text-[#B5A290] group-hover:text-[#8A1C2B] transition" />
          </div>
          <p className="text-2xl text-[#2B0C14] font-semibold">
            {loading ? "..." : totalTempleCount}
          </p>
          <p className="text-xs text-[#6B5A4E] mt-1 font-medium">Temple Packages</p>
          <p className="text-[11px] text-[#8A1C2B] mt-1.5 flex items-center gap-1">
            <span>Thirumanjam & sets</span>
          </p>
        </Link>

        {/* 2. Total Festival Packages */}
        <Link
          href="/dashboard/festivals-packages"
          className="group bg-white border border-[#E4D7C3] rounded-xl p-4.5 hover:border-[#8A1C2B]/40 hover:shadow-sm transition"
        >
          <div className="flex items-center justify-between mb-3">
            <div className="w-9 h-9 rounded-lg bg-[#8A1C2B]/10 flex items-center justify-center group-hover:scale-105 transition">
              <Gift className="w-4.5 h-4.5 text-[#8A1C2B]" strokeWidth={1.75} />
            </div>
            <ArrowUpRight className="w-3.5 h-3.5 text-[#B5A290] group-hover:text-[#8A1C2B] transition" />
          </div>
          <p className="text-2xl text-[#2B0C14] font-semibold">
            {loading ? "..." : FESTIVAL_PACKAGES_COUNT}
          </p>
          <p className="text-xs text-[#6B5A4E] mt-1 font-medium">Festival Packages</p>
          <p className="text-[11px] text-[#8A1C2B] mt-1.5">
            9 Festivals active
          </p>
        </Link>

        {/* 3. Total Corporate Packages */}
        <Link
          href="/dashboard/corporate-packages"
          className="group bg-white border border-[#E4D7C3] rounded-xl p-4.5 hover:border-[#8A1C2B]/40 hover:shadow-sm transition"
        >
          <div className="flex items-center justify-between mb-3">
            <div className="w-9 h-9 rounded-lg bg-[#8A1C2B]/10 flex items-center justify-center group-hover:scale-105 transition">
              <Briefcase className="w-4.5 h-4.5 text-[#8A1C2B]" strokeWidth={1.75} />
            </div>
            <ArrowUpRight className="w-3.5 h-3.5 text-[#B5A290] group-hover:text-[#8A1C2B] transition" />
          </div>
          <p className="text-2xl text-[#2B0C14] font-semibold">
            {loading ? "..." : CORPORATE_PACKAGES_COUNT}
          </p>
          <p className="text-xs text-[#6B5A4E] mt-1 font-medium">Corporate Packages</p>
          <p className="text-[11px] text-[#8A1C2B] mt-1.5">
            5 Categories
          </p>
        </Link>

        {/* 4. Total Orders */}
        <Link
          href="/dashboard/orders"
          className="group bg-white border border-[#E4D7C3] rounded-xl p-4.5 hover:border-[#8A1C2B]/40 hover:shadow-sm transition"
        >
          <div className="flex items-center justify-between mb-3">
            <div className="w-9 h-9 rounded-lg bg-[#8A1C2B]/10 flex items-center justify-center group-hover:scale-105 transition">
              <ShoppingBag className="w-4.5 h-4.5 text-[#8A1C2B]" strokeWidth={1.75} />
            </div>
            <ArrowUpRight className="w-3.5 h-3.5 text-[#B5A290] group-hover:text-[#8A1C2B] transition" />
          </div>
          <p className="text-2xl text-[#2B0C14] font-semibold">
            {loading ? "..." : totalOrdersCount}
          </p>
          <p className="text-xs text-[#6B5A4E] mt-1 font-medium">Total Orders</p>
          <p className="text-[11px] text-[#8A1C2B] mt-1.5">
            {ordersThisMonth} this month
          </p>
        </Link>

        {/* 5. Pending Orders */}
        <Link
          href="/dashboard/orders"
          className="group bg-white border border-[#E4D7C3] rounded-xl p-4.5 hover:border-[#8A5A11]/50 hover:shadow-sm transition"
        >
          <div className="flex items-center justify-between mb-3">
            <div className="w-9 h-9 rounded-lg bg-[#FDF3E0] flex items-center justify-center group-hover:scale-105 transition">
              <Clock className="w-4.5 h-4.5 text-[#8A5A11]" strokeWidth={1.75} />
            </div>
            <ArrowUpRight className="w-3.5 h-3.5 text-[#B5A290] group-hover:text-[#8A5A11] transition" />
          </div>
          <p className="text-2xl text-[#8A5A11] font-semibold">
            {loading ? "..." : pendingOrdersCount}
          </p>
          <p className="text-xs text-[#6B5A4E] mt-1 font-medium">Pending Orders</p>
          <p className="text-[11px] text-[#8A5A11] mt-1.5 font-medium">
            Requires action
          </p>
        </Link>

        {/* 6. Contact / Priest Requests */}
        <Link
          href="/dashboard/bookings"
          className="group bg-white border border-[#E4D7C3] rounded-xl p-4.5 hover:border-[#8A1C2B]/40 hover:shadow-sm transition"
        >
          <div className="flex items-center justify-between mb-3">
            <div className="w-9 h-9 rounded-lg bg-[#8A1C2B]/10 flex items-center justify-center group-hover:scale-105 transition">
              <Phone className="w-4.5 h-4.5 text-[#8A1C2B]" strokeWidth={1.75} />
            </div>
            <ArrowUpRight className="w-3.5 h-3.5 text-[#B5A290] group-hover:text-[#8A1C2B] transition" />
          </div>
          <p className="text-2xl text-[#2B0C14] font-semibold">
            {loading ? "..." : totalContactRequests}
          </p>
          <p className="text-xs text-[#6B5A4E] mt-1 font-medium">Contact Requests</p>
          <p className="text-[11px] text-[#8A1C2B] mt-1.5">
            {contactsThisMonth} this month
          </p>
        </Link>
      </div>

      {/* QUICK STATS & CHART ROW */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Quick Insights Card */}
        <div className="bg-white border border-[#E4D7C3] rounded-xl p-5 flex flex-col justify-between">
          <div>
            <h2 className="text-sm font-semibold text-[#2B0C14] flex items-center gap-2 mb-4">
              <TrendingUp className="w-4 h-4 text-[#8A1C2B]" />
              Performance Highlights
            </h2>
            <div className="space-y-3.5">
              <div className="flex items-center justify-between p-3 rounded-lg bg-[#FAF6F0] border border-[#EFE5D5]">
                <span className="text-xs text-[#6B5A4E]">Fulfillment Rate</span>
                <span className="text-sm font-semibold text-[#1F6B36]">
                  {fulfillmentRate}% ({processedOrdersCount}/{totalOrdersCount})
                </span>
              </div>

              <div className="flex items-center justify-between p-3 rounded-lg bg-[#FAF6F0] border border-[#EFE5D5]">
                <span className="text-xs text-[#6B5A4E]">Orders This Month</span>
                <span className="text-sm font-semibold text-[#2B0C14]">
                  {ordersThisMonth} orders
                </span>
              </div>

              <div className="flex items-center justify-between p-3 rounded-lg bg-[#FAF6F0] border border-[#EFE5D5]">
                <span className="text-xs text-[#6B5A4E]">Enquiries This Month</span>
                <span className="text-sm font-semibold text-[#2B0C14]">
                  {contactsThisMonth} requests
                </span>
              </div>

              <div className="p-3 rounded-lg bg-[#FAF6F0] border border-[#EFE5D5]">
                <span className="text-xs text-[#6B5A4E] block mb-1">Most Requested Package</span>
                <span className="text-sm font-semibold text-[#8A1C2B] line-clamp-1">
                  {mostOrderedPackage}
                </span>
              </div>
            </div>
          </div>

          {/* Quick Actions Shortcuts */}
          <div className="mt-5 pt-4 border-t border-[#E4D7C3]">
            <span className="text-xs font-medium text-[#8A7561] uppercase tracking-wider block mb-2">
              Quick Shortcuts
            </span>
            <div className="grid grid-cols-2 gap-2">
              <Link
                href="/dashboard/orders"
                className="text-xs text-[#2B0C14] p-2 rounded-lg border border-[#E4D7C3] hover:bg-[#8A1C2B]/5 hover:border-[#8A1C2B]/30 transition flex items-center justify-between"
              >
                <span>Orders</span>
                <ChevronRight className="w-3.5 h-3.5 text-[#B5A290]" />
              </Link>
              <Link
                href="/dashboard/bookings"
                className="text-xs text-[#2B0C14] p-2 rounded-lg border border-[#E4D7C3] hover:bg-[#8A1C2B]/5 hover:border-[#8A1C2B]/30 transition flex items-center justify-between"
              >
                <span>Request Iyer</span>
                <ChevronRight className="w-3.5 h-3.5 text-[#B5A290]" />
              </Link>
            </div>
          </div>
        </div>

        {/* 6-Month Activity Chart */}
        <div className="lg:col-span-2 bg-white border border-[#E4D7C3] rounded-xl p-5 flex flex-col justify-between">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h2 className="text-sm font-semibold text-[#2B0C14] flex items-center gap-2">
                <Calendar className="w-4 h-4 text-[#8A1C2B]" />
                Activity Trend (Last 6 Months)
              </h2>
              <p className="text-xs text-[#6B5A4E] mt-0.5">
                Monthly comparison of customer orders vs booking requests
              </p>
            </div>
            <div className="flex items-center gap-3 text-xs">
              <span className="flex items-center gap-1.5 text-[#2B0C14]">
                <span className="w-2.5 h-2.5 rounded-sm bg-[#8A1C2B]" /> Orders
              </span>
              <span className="flex items-center gap-1.5 text-[#2B0C14]">
                <span className="w-2.5 h-2.5 rounded-sm bg-[#D4AF37]" /> Requests
              </span>
            </div>
          </div>

          {/* Bar chart */}
          <div className="pt-6 pb-2">
            <div className="h-44 flex items-end justify-between gap-2 sm:gap-6 border-b border-[#E4D7C3] px-2 sm:px-6">
              {monthlyData.map((item, idx) => {
                const orderHeightPercent = Math.min(
                  Math.round((item.orders / maxChartVal) * 100),
                  100
                );
                const contactHeightPercent = Math.min(
                  Math.round((item.contacts / maxChartVal) * 100),
                  100
                );

                return (
                  <div key={idx} className="flex-1 flex flex-col items-center gap-1 h-full justify-end group">
                    <div className="flex items-end gap-1 sm:gap-2 h-full justify-center w-full">
                      {/* Orders Bar */}
                      <div className="relative flex flex-col items-center flex-1 max-w-[20px] h-full justify-end">
                        <div
                          style={{ height: `${Math.max(orderHeightPercent, item.orders > 0 ? 8 : 2)}%` }}
                          className={`w-full rounded-t transition-all duration-300 ${
                            item.orders > 0 ? "bg-[#8A1C2B] group-hover:bg-[#6e1522]" : "bg-[#EFE5D5]"
                          }`}
                        />
                        {/* Tooltip on hover */}
                        <div className="absolute -top-7 hidden group-hover:flex items-center justify-center bg-[#2B0C14] text-white text-[10px] px-1.5 py-0.5 rounded shadow whitespace-nowrap z-10">
                          {item.orders} orders
                        </div>
                      </div>

                      {/* Contacts Bar */}
                      <div className="relative flex flex-col items-center flex-1 max-w-[20px] h-full justify-end">
                        <div
                          style={{ height: `${Math.max(contactHeightPercent, item.contacts > 0 ? 8 : 2)}%` }}
                          className={`w-full rounded-t transition-all duration-300 ${
                            item.contacts > 0 ? "bg-[#D4AF37] group-hover:bg-[#b89528]" : "bg-[#EFE5D5]"
                          }`}
                        />
                        {/* Tooltip on hover */}
                        <div className="absolute -top-7 hidden group-hover:flex items-center justify-center bg-[#2B0C14] text-white text-[10px] px-1.5 py-0.5 rounded shadow whitespace-nowrap z-10">
                          {item.contacts} requests
                        </div>
                      </div>
                    </div>
                    <span className="text-[11px] text-[#6B5A4E] mt-2 font-medium">{item.label}</span>
                  </div>
                );
              })}
            </div>
            <div className="flex items-center justify-between text-[11px] text-[#8A7561] mt-2 px-2">
              <span>0</span>
              <span>{Math.round(maxChartVal / 2)}</span>
              <span>{maxChartVal} max volume</span>
            </div>
          </div>
        </div>
      </div>

      {/* RECENT DATA TABLES ROW */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* RECENT ORDERS TABLE */}
        <div className="bg-white border border-[#E4D7C3] rounded-xl overflow-hidden flex flex-col">
          <div className="flex items-center justify-between px-5 py-4 border-b border-[#E4D7C3]">
            <div>
              <h2 className="text-sm font-semibold text-[#2B0C14] flex items-center gap-2">
                <ShoppingBag className="w-4 h-4 text-[#8A1C2B]" />
                Recent Orders
              </h2>
              <p className="text-xs text-[#6B5A4E] mt-0.5">Latest customer package purchases</p>
            </div>
            <Link
              href="/dashboard/orders"
              className="text-xs font-medium text-[#8A1C2B] flex items-center gap-1 hover:underline"
            >
              View all ({orders.length}) <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="flex-1">
            {loading ? (
              <div className="p-8 text-center text-xs text-[#8A7561]">Loading recent orders...</div>
            ) : recentOrders.length === 0 ? (
              <div className="p-8 text-center">
                <p className="text-sm text-[#2B0C14] font-medium">No orders recorded yet</p>
                <p className="text-xs text-[#8A7561] mt-1">Customer bookings will appear here automatically.</p>
              </div>
            ) : (
              <div className="divide-y divide-[#F3E7D3]">
                {recentOrders.map((order) => (
                  <div
                    key={order.id}
                    className="p-4 hover:bg-[#FAF6F0] transition flex items-center justify-between gap-3"
                  >
                    <div className="min-w-0 flex-1">
                      <div className="flex items-center gap-2">
                        <p className="text-sm font-medium text-[#2B0C14] truncate">
                          {order.name}
                        </p>
                        <span
                          className={`text-[10px] font-medium px-2 py-0.5 rounded-full border ${
                            STATUS_STYLES[order.status] || STATUS_STYLES.new
                          }`}
                        >
                          {STATUS_LABELS[order.status] || order.status}
                        </span>
                      </div>
                      <p className="text-xs text-[#6B5A4E] truncate mt-0.5">
                        {order.package_name || "Custom Pooja Order"} &bull; {order.mobile}
                      </p>
                    </div>
                    <div className="text-right flex-shrink-0">
                      <p className="text-xs font-medium text-[#2B0C14]">
                        {formatTimeAgo(order.created_at)}
                      </p>
                      <p className="text-[11px] text-[#8A7561] mt-0.5">
                        {formatDate(order.created_at)}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* RECENT CONTACT REQUESTS / BOOKINGS */}
        <div className="bg-white border border-[#E4D7C3] rounded-xl overflow-hidden flex flex-col">
          <div className="flex items-center justify-between px-5 py-4 border-b border-[#E4D7C3]">
            <div>
              <h2 className="text-sm font-semibold text-[#2B0C14] flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#8A1C2B]" />
                Recent Contact Requests
              </h2>
              <p className="text-xs text-[#6B5A4E] mt-0.5">Priest & pooja assistance requests</p>
            </div>
            <Link
              href="/dashboard/bookings"
              className="text-xs font-medium text-[#8A1C2B] flex items-center gap-1 hover:underline"
            >
              View all ({bookings.length}) <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="flex-1">
            {loading ? (
              <div className="p-8 text-center text-xs text-[#8A7561]">Loading recent requests...</div>
            ) : recentBookings.length === 0 ? (
              <div className="p-8 text-center">
                <p className="text-sm text-[#2B0C14] font-medium">No contact requests yet</p>
                <p className="text-xs text-[#8A7561] mt-1">Customer enquiries will appear here.</p>
              </div>
            ) : (
              <div className="divide-y divide-[#F3E7D3]">
                {recentBookings.map((b) => (
                  <div
                    key={b.id}
                    className="p-4 hover:bg-[#FAF6F0] transition flex items-center justify-between gap-3"
                  >
                    <div className="min-w-0 flex-1">
                      <p className="text-sm font-medium text-[#2B0C14] truncate">{b.name}</p>
                      <p className="text-xs text-[#6B5A4E] truncate mt-0.5">
                        {b.pooja || "General Priest Request"} &bull; {b.mobile}
                      </p>
                    </div>
                    <div className="text-right flex-shrink-0">
                      <p className="text-xs font-medium text-[#2B0C14]">
                        {formatTimeAgo(b.created_at)}
                      </p>
                      <p className="text-[11px] text-[#8A7561] mt-0.5">
                        {formatDate(b.created_at)}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* QUICK PACKAGES ACCESS DIRECTORY */}
      <div className="bg-white border border-[#E4D7C3] rounded-xl p-5">
        <h2 className="text-sm font-semibold text-[#2B0C14] flex items-center gap-2 mb-3">
          <Layers className="w-4 h-4 text-[#8A1C2B]" />
          Package Directories & Offerings
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
          <Link
            href="/dashboard/temple-packages"
            className="p-3.5 rounded-lg border border-[#E4D7C3] hover:border-[#8A1C2B]/40 hover:bg-[#8A1C2B]/5 transition flex items-center justify-between"
          >
            <div>
              <p className="text-xs font-semibold text-[#2B0C14]">Temple Packages</p>
              <p className="text-[11px] text-[#6B5A4E]">Thirumanjam items</p>
            </div>
            <ArrowUpRight className="w-3.5 h-3.5 text-[#B5A290]" />
          </Link>

          <Link
            href="/dashboard/festivals-packages"
            className="p-3.5 rounded-lg border border-[#E4D7C3] hover:border-[#8A1C2B]/40 hover:bg-[#8A1C2B]/5 transition flex items-center justify-between"
          >
            <div>
              <p className="text-xs font-semibold text-[#2B0C14]">Festival Packages</p>
              <p className="text-[11px] text-[#6B5A4E]">9 Festival categories</p>
            </div>
            <ArrowUpRight className="w-3.5 h-3.5 text-[#B5A290]" />
          </Link>

          <Link
            href="/dashboard/corporate-packages"
            className="p-3.5 rounded-lg border border-[#E4D7C3] hover:border-[#8A1C2B]/40 hover:bg-[#8A1C2B]/5 transition flex items-center justify-between"
          >
            <div>
              <p className="text-xs font-semibold text-[#2B0C14]">Corporate Packages</p>
              <p className="text-[11px] text-[#6B5A4E]">5 Ceremony types</p>
            </div>
            <ArrowUpRight className="w-3.5 h-3.5 text-[#B5A290]" />
          </Link>

          <Link
            href="/dashboard/overseas-temple-package"
            className="p-3.5 rounded-lg border border-[#E4D7C3] hover:border-[#8A1C2B]/40 hover:bg-[#8A1C2B]/5 transition flex items-center justify-between"
          >
            <div>
              <p className="text-xs font-semibold text-[#2B0C14]">Overseas Temple</p>
              <p className="text-[11px] text-[#6B5A4E]">International sets</p>
            </div>
            <ArrowUpRight className="w-3.5 h-3.5 text-[#B5A290]" />
          </Link>
        </div>
      </div>
    </div>
  );
}