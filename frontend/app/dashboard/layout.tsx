"use client";

import { useState, useEffect } from "react";
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
  UserPlus,
} from "lucide-react";
import NextImage from "next/image";

const API_BASE = "http://localhost:3001";
const BOOKINGS_LAST_SEEN_KEY = "bookingsLastSeen";
const REGISTRATIONS_LAST_SEEN_KEY = "registrationsLastSeen";

const NAV = [
  { label: "Overview", href: "/dashboard", icon: LayoutGrid },
  { label: "Home Page", href: "/dashboard/home-banner", icon: Image },
  { label: "Consumer Packages", href: "/dashboard/consumer-packages", icon: Boxes },
  { label: "Corporate Packages", href: "/dashboard/corporate-packages", icon: Briefcase },
  { label: "Temple Packages", href: "/dashboard/temple-packages", icon: Package },
  { label: "Overseas Temple Package", href: "/dashboard/overseas-temple-package", icon: Globe },
  { label: "Festival Packages", href: "/dashboard/festivals-packages", icon: Gift },
  { label: "Request  Iyer", href: "/dashboard/bookings", icon: UserRoundCheck },
  { label: "Iyer Registration", href: "/dashboard/iyer-registrations", icon: UserPlus },
  
  { label: "Settings", href: "/dashboard/settings", icon: Settings },
];

type Booking = {
  id: number;
  name: string;
  pooja: string;
  created_at: string;
};

type Registration = {
  id: number;
  name: string;
  location: string;
  created_at: string;
};

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [notifOpen, setNotifOpen] = useState(false);

  const [bookingsUnread, setBookingsUnread] = useState(0);
  const [recentBookings, setRecentBookings] = useState<Booking[]>([]);

  const [registrationsUnread, setRegistrationsUnread] = useState(0);
  const [recentRegistrations, setRecentRegistrations] = useState<Registration[]>([]);

  const totalUnread = bookingsUnread + registrationsUnread;

  // Fetch bookings and figure out how many are "new" since we last looked
  useEffect(() => {
    const checkBookingsUnread = async () => {
      try {
        const res = await fetch(`${API_BASE}/bookings`, {
          credentials: "include",
        });
        if (!res.ok) return;
        const bookings: Booking[] = await res.json();

        const lastSeen = localStorage.getItem(BOOKINGS_LAST_SEEN_KEY);
        const lastSeenTime = lastSeen ? new Date(lastSeen).getTime() : 0;

        const sorted = [...bookings].sort(
          (a, b) =>
            new Date(b.created_at).getTime() - new Date(a.created_at).getTime()
        );

        const newOnes = sorted.filter(
          (b) => new Date(b.created_at).getTime() > lastSeenTime
        );

        setBookingsUnread(newOnes.length);
        setRecentBookings(newOnes);
      } catch (err) {
        console.error("Failed to check bookings", err);
      }
    };

    checkBookingsUnread();
  }, [pathname]);

  // Fetch registrations and figure out how many are "new" since we last looked
  useEffect(() => {
    const checkRegistrationsUnread = async () => {
      try {
        const res = await fetch(`${API_BASE}/iyer-registrations`, {
          credentials: "include",
        });
        if (!res.ok) return;
        const registrations: Registration[] = await res.json();

        const lastSeen = localStorage.getItem(REGISTRATIONS_LAST_SEEN_KEY);
        const lastSeenTime = lastSeen ? new Date(lastSeen).getTime() : 0;

        const sorted = [...registrations].sort(
          (a, b) =>
            new Date(b.created_at).getTime() - new Date(a.created_at).getTime()
        );

        const newOnes = sorted.filter(
          (r) => new Date(r.created_at).getTime() > lastSeenTime
        );

        setRegistrationsUnread(newOnes.length);
        setRecentRegistrations(newOnes);
      } catch (err) {
        console.error("Failed to check registrations", err);
      }
    };

    checkRegistrationsUnread();
  }, [pathname]);

  // If we're on the Bookings page itself, mark bookings as seen
  useEffect(() => {
    if (pathname === "/dashboard/bookings") {
      localStorage.setItem(BOOKINGS_LAST_SEEN_KEY, new Date().toISOString());
      setBookingsUnread(0);
    }
  }, [pathname]);

  // If we're on the Registrations page itself, mark registrations as seen
  useEffect(() => {
    if (pathname === "/dashboard/iyer-registrations") {
      localStorage.setItem(REGISTRATIONS_LAST_SEEN_KEY, new Date().toISOString());
      setRegistrationsUnread(0);
    }
  }, [pathname]);

  const markBookingsSeen = () => {
    localStorage.setItem(BOOKINGS_LAST_SEEN_KEY, new Date().toISOString());
    setBookingsUnread(0);
  };

  const markRegistrationsSeen = () => {
    localStorage.setItem(REGISTRATIONS_LAST_SEEN_KEY, new Date().toISOString());
    setRegistrationsUnread(0);
  };

  return (
    <div className="min-h-screen bg-[#FBF6EE] flex">
      {/* Sidebar — desktop */}
      <aside className="hidden lg:flex lg:w-64 lg:flex-col border-r border-[#E4D7C3] bg-[#2B0C14]">
        <SidebarContent
          pathname={pathname}
          bookingsUnread={bookingsUnread}
          registrationsUnread={registrationsUnread}
        />
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
            <SidebarContent
              pathname={pathname}
              bookingsUnread={bookingsUnread}
              registrationsUnread={registrationsUnread}
            />
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

          <div className="hidden lg:block text-base text-[#6B5A4E]">
            {NAV.find((n) => n.href === pathname)?.label ?? "Dashboard"}
          </div>

          <div className="flex items-center gap-4">
            <div className="relative">
              <button
                type="button"
                className="relative text-[#6B5A4E] hover:text-[#2B0C14] transition"
                aria-label="Notifications"
                onClick={() => setNotifOpen((prev) => !prev)}
              >
                <Bell className="w-5 h-5" strokeWidth={1.75} />
                {totalUnread > 0 && (
                  <span className="absolute -top-2 -right-2 min-w-[20px] h-[20px] px-1 rounded-full bg-[#D4A017] text-[#2B0C14] text-xs leading-none flex items-center justify-center font-bold border-2 border-[#FBF6EE]">
                    {totalUnread > 9 ? "9+" : totalUnread}
                  </span>
                )}
              </button>

              {notifOpen && (
                <>
                  <div
                    className="fixed inset-0 z-40"
                    onClick={() => setNotifOpen(false)}
                  />
                  <div className="absolute right-0 top-full mt-2 w-80 bg-white border border-[#E4D7C3] rounded-xl shadow-lg z-50 overflow-hidden">
                    <div className="px-4 py-3 border-b border-[#F3E7D3] flex items-center justify-between">
                      <span className="text-sm font-medium text-[#2B0C14]">
                        Notifications
                      </span>
                      {totalUnread > 0 && (
                        <span className="text-xs text-[#8A1C2B] font-medium">
                          {totalUnread} new
                        </span>
                      )}
                    </div>

                    <div className="max-h-96 overflow-y-auto">
                      {/* Bookings section */}
                      <div className="px-4 py-2 text-[11px] font-semibold text-[#B5A290] uppercase tracking-wide bg-[#FBF6EE]">
                        Request Iyer
                      </div>
                      {recentBookings.length === 0 ? (
                        <p className="px-4 py-4 text-sm text-[#6B5A4E] text-center">
                          No requests yet.
                        </p>
                      ) : (
                        recentBookings.map((b) => (
                          <Link
                            key={`booking-${b.id}`}
                            href="/dashboard/bookings"
                            onClick={() => {
                              markBookingsSeen();
                              setNotifOpen(false);
                            }}
                            className="block px-4 py-3 border-b border-[#F3E7D3] last:border-b-0 hover:bg-[#FBF6EE] transition"
                          >
                            <p className="text-sm text-[#2B0C14] font-medium">
                              {b.name}
                            </p>
                            <p className="text-xs text-[#6B5A4E] mt-0.5">
                              Requested: {b.pooja}
                            </p>
                            <p className="text-[11px] text-[#B5A290] mt-1">
                              {new Date(b.created_at).toLocaleString()}
                            </p>
                          </Link>
                        ))
                      )}

                      {/* Registrations section */}
                      <div className="px-4 py-2 text-[11px] font-semibold text-[#B5A290] uppercase tracking-wide bg-[#FBF6EE]">
                        Iyer Registration
                      </div>
                      {recentRegistrations.length === 0 ? (
                        <p className="px-4 py-4 text-sm text-[#6B5A4E] text-center">
                          No registrations yet.
                        </p>
                      ) : (
                        recentRegistrations.map((r) => (
                          <Link
                            key={`registration-${r.id}`}
                            href="/dashboard/iyer-registrations"
                            onClick={() => {
                              markRegistrationsSeen();
                              setNotifOpen(false);
                            }}
                            className="block px-4 py-3 border-b border-[#F3E7D3] last:border-b-0 hover:bg-[#FBF6EE] transition"
                          >
                            <p className="text-sm text-[#2B0C14] font-medium">
                              {r.name}
                            </p>
                            <p className="text-xs text-[#6B5A4E] mt-0.5">
                              Location: {r.location}
                            </p>
                            <p className="text-[11px] text-[#B5A290] mt-1">
                              {new Date(r.created_at).toLocaleString()}
                            </p>
                          </Link>
                        ))
                      )}
                    </div>
                  </div>
                </>
              )}
            </div>

            <button className="flex items-center gap-2 text-base text-[#2B0C14]">
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

function SidebarContent({
  pathname,
  bookingsUnread,
  registrationsUnread,
}: {
  pathname: string;
  bookingsUnread: number;
  registrationsUnread: number;
}) {
  return (
    <>
      <div className="flex items-center gap-2.5 px-6 py-4 border-b border-[#F3E7D3]/10">
        <NextImage
          src="/images/logo.jpeg"
          alt="Iyer's Pooja Products"
          width={76}
          height={76}
          className="h-[64px] w-[64px] rounded-full object-cover shrink-0"
        />
        <span
          className="text-[#F3E7D3] text-base tracking-wide"
          style={{ fontFamily: "'Fraunces', Georgia, serif" }}
        >
          Iyer&rsquo;s Pooja Products
        </span>
      </div>

      <nav className="flex-1 px-3 py-6 space-y-1">
        {NAV.map((item) => {
          const Icon = item.icon;
          const active = pathname === item.href;
          const isBookings = item.href === "/dashboard/bookings";
          const isRegistrations = item.href === "/dashboard/iyer-registrations";
          const badgeCount = isBookings
            ? bookingsUnread
            : isRegistrations
            ? registrationsUnread
            : 0;

          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex items-center gap-3 px-3.5 py-3 rounded-lg text-base transition ${
                active
                  ? "bg-[#F3E7D3]/10 text-[#F3E7D3]"
                  : "text-[#D9C4A9]/60 hover:text-[#F3E7D3] hover:bg-[#F3E7D3]/5"
              }`}
            >
              <Icon className="w-5 h-5" strokeWidth={1.75} />
              {item.label}
              {badgeCount > 0 && (
                <span className="ml-auto min-w-[22px] h-[22px] px-1.5 rounded-full bg-[#D4A017] text-[#2B0C14] text-xs flex items-center justify-center font-semibold">
                  {badgeCount > 9 ? "9+" : badgeCount}
                </span>
              )}
              {active && badgeCount === 0 && (
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