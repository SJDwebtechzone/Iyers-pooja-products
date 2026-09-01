"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Flame,
  LayoutGrid,
  Package,
  Boxes,
  Briefcase,
  Gift,
  Globe,
  Phone,
  Settings,
  Menu,
  X,
  Bell,
  ChevronDown,
    Image,
    UserRoundCheck,
} from "lucide-react";

const NAV = [
  { label: "Overview", href: "/dashboard", icon: LayoutGrid },
   { label: "Home Page", href: "/dashboard/home-banner", icon: Image },
  
  { label: "Consumer Packages", href: "/dashboard/consumer-packages", icon: Boxes },
   { label: "Corporate Packages", href: "/dashboard/corporate-packages", icon: Briefcase },
   { label: "Temple Packages", href: "/dashboard/temple-packages", icon: Package },
    { label: "Overseas Temple Package", href: "/dashboard/overseas-temple-package", icon: Globe },
  { label: "Festival Packages", href: "/dashboard/festivals-packages", icon: Gift },
    { label: "Request  Iyer", href: "/dashboard/bookings", icon: UserRoundCheck },
  { label: "Contact Requests", href: "/dashboard/contact", icon: Phone },
  { label: "Settings", href: "/dashboard/settings", icon: Settings },
];

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#FBF6EE] flex">
      {/* Sidebar — desktop */}
      <aside className="hidden lg:flex lg:w-64 lg:flex-col border-r border-[#E4D7C3] bg-[#2B0C14]">
        <SidebarContent pathname={pathname} />
      </aside>

      {/* Sidebar — mobile drawer */}
      {mobileOpen && (
        <div className="lg:hidden fixed inset-0 z-40 flex">
          <div
            className="absolute inset-0 bg-black/40"
            onClick={() => setMobileOpen(false)}
          />
          <aside className="relative w-64 bg-[#2B0C14] flex flex-col">
            <button
              onClick={() => setMobileOpen(false)}
              className="absolute top-4 right-4 text-[#D9C4A9]/70"
              aria-label="Close menu"
            >
              <X className="w-5 h-5" />
            </button>
            <SidebarContent pathname={pathname} />
          </aside>
        </div>
      )}

      {/* Main column */}
      <div className="flex-1 flex flex-col min-w-0">
        <header className="h-16 border-b border-[#E4D7C3] bg-[#FBF6EE]/95 backdrop-blur flex items-center justify-between px-4 lg:px-8 sticky top-0 z-30">
          <button
            className="lg:hidden text-[#2B0C14]"
            onClick={() => setMobileOpen(true)}
            aria-label="Open menu"
          >
            <Menu className="w-5 h-5" />
          </button>

          <div className="hidden lg:block text-sm text-[#6B5A4E]">
            {NAV.find((n) => n.href === pathname)?.label ?? "Dashboard"}
          </div>

          <div className="flex items-center gap-4">
            <button
              className="relative text-[#6B5A4E] hover:text-[#2B0C14] transition"
              aria-label="Notifications"
            >
              <Bell className="w-4.5 h-4.5" strokeWidth={1.75} />
              <span className="absolute -top-1 -right-1 w-2 h-2 rounded-full bg-[#8A1C2B]" />
            </button>
            <button className="flex items-center gap-2 text-sm text-[#2B0C14]">
              <div className="w-7 h-7 rounded-full bg-[#8A1C2B] text-[#F3E7D3] text-xs flex items-center justify-center font-medium">
                A
              </div>
              <span className="hidden sm:block">Admin</span>
              <ChevronDown className="w-3.5 h-3.5 text-[#B5A290]" />
            </button>
          </div>
        </header>

        <main className="flex-1 p-4 lg:p-8">{children}</main>
      </div>
    </div>
  );
}

function SidebarContent({ pathname }: { pathname: string }) {
  return (
    <>
      <div className="h-16 flex items-center gap-2.5 px-6 border-b border-[#F3E7D3]/10">
        <Flame className="w-4.5 h-4.5 text-[#D4A017]" strokeWidth={1.75} />
        <span
          className="text-[#F3E7D3] text-sm tracking-wide"
          style={{ fontFamily: "'Fraunces', Georgia, serif" }}
        >
          Iyer&rsquo;s Pooja Products
        </span>
      </div>

      <nav className="flex-1 px-3 py-6 space-y-1">
        {NAV.map((item) => {
          const Icon = item.icon;
          const active = pathname === item.href;
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm transition ${
                active
                  ? "bg-[#F3E7D3]/10 text-[#F3E7D3]"
                  : "text-[#D9C4A9]/60 hover:text-[#F3E7D3] hover:bg-[#F3E7D3]/5"
              }`}
            >
              <Icon className="w-4 h-4" strokeWidth={1.75} />
              {item.label}
              {active && (
                <span className="ml-auto w-1.5 h-1.5 rounded-full bg-[#D4A017]" />
              )}
            </Link>
          );
        })}
      </nav>

      <div className="px-6 py-5 border-t border-[#F3E7D3]/10">
        <p className="text-[11px] text-[#D9C4A9]/40 leading-relaxed">
          Signed in as Admin
          <br />
          <Link href="/login" className="hover:text-[#D9C4A9]/70 underline">
            Sign out
          </Link>
        </p>
      </div>
    </>
  );
}