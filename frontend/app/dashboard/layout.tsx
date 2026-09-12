"use client";

import { useState, useEffect, useCallback, useRef } from "react";
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
  ShoppingBag,
  CreditCard,
  MessageCircle,
} from "lucide-react";
import NextImage from "next/image";
import { DASHBOARD_BADGES_EVENT } from "./dashboard-events";

const API_BASE = process.env.NEXT_PUBLIC_API_URL || "https://iyerspoojaproducts.com/api";
/** How often the shell re-asks the backend for live counts. */
const POLL_INTERVAL_MS = 20000;

const NAV = [
  { label: "Overview", href: "/dashboard", icon: LayoutGrid },
  { label: "Home Page", href: "/dashboard/home-banner", icon: Image },
  {
    label: "Consumer Packages",
    href: "/dashboard/consumer-packages",
    icon: Boxes,
  },
  {
    label: "Corporate Packages",
    href: "/dashboard/corporate-packages",
    icon: Briefcase,
  },
  {
    label: "Temple Packages",
    href: "/dashboard/temple-packages",
    icon: Package,
  },
  {
    label: "Overseas Temple Package",
    href: "/dashboard/overseas-temple-package",
    icon: Globe,
  },
  {
    label: "Festival Packages",
    href: "/dashboard/festivals-packages",
    icon: Gift,
  },
  { label: "Orders", href: "/dashboard/orders", icon: ShoppingBag },
  { label: "Request  Iyer", href: "/dashboard/bookings", icon: UserRoundCheck },
  {
    label: "Iyer Registration",
    href: "/dashboard/iyer-registrations",
    icon: UserPlus,
  },

  {
    label: "Payment Settings",
    href: "/dashboard/payment-settings",
    icon: CreditCard,
  },
  {
    label: "Contact Settings",
    href: "/dashboard/contact-settings",
    icon: MessageCircle,
  },
  { label: "Settings", href: "/dashboard/settings", icon: Settings },
];

/**
 * Notifications are persistent database records, so the unread count is the
 * same after a refresh, on another device, or after signing back in. Nothing
 * here is derived from localStorage or a hardcoded number.
 */
type Notification = {
  id: number;
  type: string;
  title: string;
  message: string;
  /** Secondary line, e.g. "Preferred Date: 15 Sep 2026". */
  detail: string | null;
  link: string | null;
  entity_type: string | null;
  entity_id: number | null;
  read_at: string | null;
  created_at: string;
};

/** "2 minutes ago" style timestamp for the notification list. */
function timeAgo(value: string) {
  const then = new Date(value).getTime();
  if (Number.isNaN(then)) return "";

  const seconds = Math.max(0, Math.floor((Date.now() - then) / 1000));
  if (seconds < 60) return "Just now";

  const minutes = Math.floor(seconds / 60);
  if (minutes < 60) return `${minutes} minute${minutes === 1 ? "" : "s"} ago`;

  const hours = Math.floor(minutes / 60);
  if (hours < 24) return `${hours} hour${hours === 1 ? "" : "s"} ago`;

  const days = Math.floor(hours / 24);
  if (days < 7) return `${days} day${days === 1 ? "" : "s"} ago`;

  return new Date(value).toLocaleDateString("en-IN", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
}

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [notifOpen, setNotifOpen] = useState(false);

  /**
   * Every badge below is a live database count fetched from the backend.
   * Nothing is stored in localStorage and nothing is hardcoded, so the numbers
   * are identical after a refresh, after signing out and back in, and on a
   * second device.
   */
  const [notifications, setNotifications] = useState<Notification[]>([]);
  const [notificationsUnread, setNotificationsUnread] = useState(0);
  const [unreadByType, setUnreadByType] = useState<Record<string, number>>({});
  const [newOrdersCount, setNewOrdersCount] = useState(0);

  const totalUnread = notificationsUnread;

  /**
   * Pulls the notification feed and the order counts from the backend.
   * Both numbers are SQL aggregates computed per request, so they survive a
   * refresh, a logout, or being opened on a different machine.
   */
  /** Generation counter so a slow earlier response can't overwrite a newer one. */
  const badgeRequestId = useRef(0);

  const loadDashboardBadges = useCallback(async () => {
    const requestId = ++badgeRequestId.current;

    try {
      const [feedRes, ordersRes] = await Promise.all([
        fetch(`${API_BASE}/notifications?limit=20`, {
          credentials: "include",
          cache: "no-store",
        }).catch(() => null),
        fetch(`${API_BASE}/orders/summary`, {
          credentials: "include",
          cache: "no-store",
        }).catch(() => null),
      ]);

      // A newer request has started since this one — discard this response.
      if (requestId !== badgeRequestId.current) return;

      if (feedRes?.ok) {
        const feed = await feedRes.json();
        const items: Notification[] = Array.isArray(feed?.items)
          ? feed.items
          : [];
        if (requestId !== badgeRequestId.current) return;
        setNotifications(items);
        setNotificationsUnread(Number(feed?.unread) || 0);
        setUnreadByType(
          feed?.byType && typeof feed.byType === "object" ? feed.byType : {},
        );
      }

      if (ordersRes?.ok) {
        const summary = await ordersRes.json();
        if (requestId !== badgeRequestId.current) return;
        setNewOrdersCount(Number(summary?.new_count) || 0);
      }
    } catch {
      // Leave the last known counts in place rather than flashing zero.
    }
  }, []);

  // Fetch on mount, on navigation, on a poll, and whenever a page signals a
  // change (an order opened, processed or deleted).
  useEffect(() => {
    loadDashboardBadges();

    const timer = window.setInterval(loadDashboardBadges, POLL_INTERVAL_MS);
    const onRefresh = () => loadDashboardBadges();
    window.addEventListener(DASHBOARD_BADGES_EVENT, onRefresh);

    // Catch up immediately when the admin returns to the tab.
    const onVisible = () => {
      if (document.visibilityState === "visible") loadDashboardBadges();
    };
    document.addEventListener("visibilitychange", onVisible);

    return () => {
      window.clearInterval(timer);
      window.removeEventListener(DASHBOARD_BADGES_EVENT, onRefresh);
      document.removeEventListener("visibilitychange", onVisible);
    };
  }, [loadDashboardBadges, pathname]);

  /** Marks one notification read, then refreshes the counts from the server. */
  const markNotificationRead = useCallback(
    async (id: number) => {
      // Optimistic so the badge responds instantly; the refetch is the truth.
      // Only decrement if this notification really was unread — clicking an
      // already-read entry must not move the count.
      let wasUnread = false;
      setNotifications((previous) =>
        previous.map((item) => {
          if (item.id !== id || item.read_at) return item;
          wasUnread = true;
          return { ...item, read_at: new Date().toISOString() };
        }),
      );
      if (wasUnread) {
        setNotificationsUnread((previous) => Math.max(0, previous - 1));
      }

      try {
        await fetch(`${API_BASE}/notifications/${id}/read`, {
          method: "PATCH",
          credentials: "include",
        });
      } catch {
        // ignore — the refetch below corrects any drift
      }
      loadDashboardBadges();
    },
    [loadDashboardBadges],
  );

  /** Clears every unread notification, or just one type when given. */
  const markAllNotificationsRead = useCallback(
    async (type?: string) => {
      const query = type ? `?type=${encodeURIComponent(type)}` : "";
      try {
        await fetch(`${API_BASE}/notifications/read-all${query}`, {
          method: "POST",
          credentials: "include",
        });
      } catch {
        // ignore — the refetch below corrects any drift
      }
      loadDashboardBadges();
    },
    [loadDashboardBadges],
  );

  // Opening the list page a notification points at counts as reading it, which
  // is what the bookings/registrations pages used to do via localStorage.
  useEffect(() => {
    const typeForPath: Record<string, string> = {
      "/dashboard/bookings": "booking",
      "/dashboard/iyer-registrations": "registration",
    };
    const type = typeForPath[pathname];
    if (type) markAllNotificationsRead(type);
  }, [pathname, markAllNotificationsRead]);

  return (
    <div className="min-h-screen bg-[#FBF6EE] flex">
      {/* Sidebar — desktop */}
      <aside className="hidden lg:flex lg:w-64 lg:flex-col border-r border-[#E4D7C3] bg-[#2B0C14]">
        <SidebarContent
          pathname={pathname}
          unreadByType={unreadByType}
          newOrdersCount={newOrdersCount}
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
              unreadByType={unreadByType}
              newOrdersCount={newOrdersCount}
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
                  <span
                    className="absolute -top-2 -right-2 min-w-[20px] h-[20px] px-1 rounded-full bg-[#D4A017] text-[#2B0C14] text-xs leading-none flex items-center justify-center font-bold border-2 border-[#FBF6EE]"
                    aria-hidden="true"
                  >
                    {totalUnread > 99 ? "99+" : totalUnread}
                  </span>
                )}
                <span className="sr-only">
                  {totalUnread > 0
                    ? `${totalUnread} unread notification${totalUnread === 1 ? "" : "s"}`
                    : "No unread notifications"}
                </span>
              </button>

              {notifOpen && (
                <>
                  <div
                    className="fixed inset-0 z-40"
                    onClick={() => setNotifOpen(false)}
                  />
                  <div className="absolute right-0 top-full mt-2 w-80 bg-white border border-[#E4D7C3] rounded-xl shadow-lg z-50 overflow-hidden">
                    <div className="px-4 py-3 border-b border-[#F3E7D3] flex items-center justify-between gap-3">
                      <span className="text-sm font-medium text-[#2B0C14]">
                        Notifications
                      </span>
                      <div className="flex items-center gap-2.5">
                        {totalUnread > 0 && (
                          <span className="text-xs text-[#8A1C2B] font-medium">
                            {totalUnread} new
                          </span>
                        )}
                        {notificationsUnread > 0 && (
                          <button
                            type="button"
                            onClick={() => markAllNotificationsRead()}
                            className="text-[11px] text-[#6B5A4E] hover:text-[#8A1C2B] hover:underline"
                          >
                            Mark all read
                          </button>
                        )}
                      </div>
                    </div>

                    <div className="max-h-96 overflow-y-auto">
                      {/* One feed of persistent notification records:
                          orders, Iyer requests and Iyer registrations. */}
                      {notifications.length === 0 ? (
                        <p className="px-4 py-6 text-sm text-[#6B5A4E] text-center">
                          No notifications yet.
                        </p>
                      ) : (
                        notifications.map((item) => {
                          const unread = !item.read_at;

                          return (
                            <Link
                              key={`notification-${item.id}`}
                              href={item.link ?? "/dashboard/orders"}
                              onClick={() => {
                                markNotificationRead(item.id);
                                setNotifOpen(false);
                              }}
                              className={`block px-4 py-3 border-b border-[#F3E7D3] last:border-b-0 transition hover:bg-[#FBF6EE] ${
                                unread ? "bg-[#FFFDF6]" : ""
                              }`}
                            >
                              <p className="flex items-center gap-2 text-sm text-[#2B0C14] font-medium">
                                {unread && (
                                  <span
                                    className="w-1.5 h-1.5 rounded-full bg-[#D4A017] shrink-0"
                                    aria-hidden="true"
                                  />
                                )}
                                {item.title}
                              </p>
                              <p className="text-xs text-[#6B5A4E] mt-0.5">
                                {item.message}
                              </p>
                              {item.detail && (
                                <p className="text-xs text-[#6B5A4E] mt-0.5">
                                  {item.detail}
                                </p>
                              )}
                              <p className="text-[11px] text-[#B5A290] mt-1">
                                {timeAgo(item.created_at)}
                              </p>
                            </Link>
                          );
                        })
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
  unreadByType,
  newOrdersCount,
}: {
  pathname: string;
  /** Unread notification counts per type, from GET /notifications. */
  unreadByType: Record<string, number>;
  /** Live count of unprocessed orders, from GET /orders/summary. */
  newOrdersCount: number;
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
          const active =
            pathname === item.href ||
            (item.href !== "/dashboard" &&
              pathname.startsWith(`${item.href}/`));
          const isBookings = item.href === "/dashboard/bookings";
          const isRegistrations = item.href === "/dashboard/iyer-registrations";
          const isOrders = item.href === "/dashboard/orders";
          // Orders shows unprocessed orders (the work still to do); the other
          // two show unread notifications. Both come from the database.
          const badgeCount = isOrders
            ? newOrdersCount
            : isBookings
              ? (unreadByType.booking ?? 0)
              : isRegistrations
                ? (unreadByType.registration ?? 0)
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
                  {badgeCount > 99 ? "99+" : badgeCount}
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
