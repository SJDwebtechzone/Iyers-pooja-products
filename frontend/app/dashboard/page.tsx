import {
  Package,
  Gift,
  Phone,
  TrendingUp,
  ArrowUpRight,
  Clock,
} from "lucide-react";

// Placeholder data — swap for real fetches once the backend exists,
// e.g. const stats = await fetch("/api/dashboard/stats").then(r => r.json())
const STATS = [
  {
    label: "Temple Packages",
    value: "18",
    delta: "+2 this month",
    icon: Package,
  },
  {
    label: "Festival Packages",
    value: "12",
    delta: "+1 this month",
    icon: Gift,
  },
  {
    label: "Contact Requests",
    value: "34",
    delta: "9 unread",
    icon: Phone,
  },
  {
    label: "Orders (30d)",
    value: "142",
    delta: "+18% vs last month",
    icon: TrendingUp,
  },
];

const RECENT_REQUESTS = [
  { name: "Priya Raman", topic: "Griha Pravesham kit", time: "12m ago" },
  { name: "S. Narayanan", topic: "Navaratri package — bulk", time: "1h ago" },
  { name: "Lakshmi Iyer", topic: "Custom pooja items", time: "3h ago" },
  { name: "Ramesh Kumar", topic: "Delivery timing query", time: "5h ago" },
];

export default function DashboardOverviewPage() {
  return (
    <div className="max-w-6xl mx-auto space-y-8">
      <div>
        <h1
          className="text-2xl text-[#2B0C14]"
          style={{ fontFamily: "'Fraunces', Georgia, serif" }}
        >
          Overview
        </h1>
        <p className="text-sm text-[#6B5A4E] mt-1">
          A snapshot of packages, orders, and customer requests.
        </p>
      </div>

      {/* Stat cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {STATS.map((s) => {
          const Icon = s.icon;
          return (
            <div
              key={s.label}
              className="bg-white border border-[#E4D7C3] rounded-xl p-5"
            >
              <div className="flex items-center justify-between mb-3">
                <div className="w-9 h-9 rounded-lg bg-[#8A1C2B]/8 flex items-center justify-center">
                  <Icon className="w-4.5 h-4.5 text-[#8A1C2B]" strokeWidth={1.75} />
                </div>
              </div>
              <p className="text-2xl text-[#2B0C14] font-medium">{s.value}</p>
              <p className="text-xs text-[#6B5A4E] mt-1">{s.label}</p>
              <p className="text-[11px] text-[#8A1C2B] mt-2">{s.delta}</p>
            </div>
          );
        })}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Recent requests */}
        <div className="lg:col-span-2 bg-white border border-[#E4D7C3] rounded-xl">
          <div className="flex items-center justify-between px-5 py-4 border-b border-[#E4D7C3]">
            <h2 className="text-sm font-medium text-[#2B0C14]">
              Recent contact requests
            </h2>
            <a
              href="/dashboard/contact"
              className="text-xs text-[#8A1C2B] flex items-center gap-1 hover:underline"
            >
              View all <ArrowUpRight className="w-3 h-3" />
            </a>
          </div>
          <ul className="divide-y divide-[#F3E7D3]">
            {RECENT_REQUESTS.map((r) => (
              <li
                key={r.name + r.time}
                className="flex items-center justify-between px-5 py-3.5"
              >
                <div>
                  <p className="text-sm text-[#2B0C14]">{r.name}</p>
                  <p className="text-xs text-[#6B5A4E]">{r.topic}</p>
                </div>
                <span className="flex items-center gap-1 text-[11px] text-[#B5A290]">
                  <Clock className="w-3 h-3" />
                  {r.time}
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* Quick actions */}
        <div className="bg-white border border-[#E4D7C3] rounded-xl p-5 space-y-3">
          <h2 className="text-sm font-medium text-[#2B0C14] mb-2">
            Quick actions
          </h2>
          {[
            { label: "Add temple package", href: "/dashboard/temple-packages" },
            { label: "Add festival package", href: "/dashboard/festival-packages" },
            { label: "Review contact requests", href: "/dashboard/contact" },
          ].map((a) => (
            <a
              key={a.label}
              href={a.href}
              className="flex items-center justify-between px-3.5 py-2.5 rounded-lg border border-[#E4D7C3] text-sm text-[#2B0C14] hover:border-[#8A1C2B]/40 hover:bg-[#8A1C2B]/5 transition"
            >
              {a.label}
              <ArrowUpRight className="w-3.5 h-3.5 text-[#B5A290]" />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}