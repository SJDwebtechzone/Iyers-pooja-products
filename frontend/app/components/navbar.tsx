"use client";

import { ChevronDown, Menu, X } from "lucide-react";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

const navItems = [
  {
    label: "Home",
    href: "/",
  },

  {
    label: "About Us",
    href: "/about",
  },

  {
    label: "Consumer Package",
    href: "/package",
    dropdown: [
      {
        label: "Gaanapathi Homam",
        href: "/package#ganapathy-homam",
      },
      {
        label: "Marriage",
        href: "/package#marriage",
      },
      {
        label: "Grahapravesam",
        href: "/package#house-warming",
      },
      {
        label: "Bhoomi Poojai",
        href: "/package#bhoomi-poojai",
      },
      {
        label: "Punyahavachanam",
        href: "/package#punyahavachanam",
      },
      {
        label: "Ruthu Punyahavachanam",
        href: "/package#ruthu-punyahavachanam",
      },
      {
        label: "AYUSH HOMAM",
        href: "/package#ayush-homam",
      },
    ],
  },

  /*
   * IMPORTANT:
   * Corporate Package dropdown items now stay on
   * /corporate-package and only change the "package"
   * query parameter.
   */
  {
  label: "Corporate Package",
  href: "/corporate-package",
  dropdown: [
    { label: "Friday Poojas", href: "/corporate-package#friday-poojas" },
    { label: "Amavasai Poojas", href: "/corporate-package#amavasai-poojas" },
    { label: "Ganapathi Homam", href: "/corporate-package#ganapathy-homam" },
    { label: "Ayudha Pooja & Vehicle Pooja", href: "/corporate-package#ayudha-pooja-vehicle-pooja" },
    { label: "Aarthi & Prasadam Distribution", href: "/corporate-package#aarthi-prasadam-distribution" },
  ],
},

  {
    label: "Temple Package",
    href: "/temple",
    dropdown: [
      {
        label: "Thirumanjam",
        href: "/temple#thirumanjam",
      },
    ],
  },

  {
    label: "Overseas Temple Package",
    href: "/overseas",
    dropdown: [
      {
        label: "Thirumanjam",
        href: "/overseas#thirumanjam",
      },
    ],
  },

  {
  label: "Festivals Package",
  href: "/festivals-package",
  dropdown: [
    {
      label: "New Year Festival",
      href: "/festivals-package#new-year-festival",
    },
    {
      label: "Pongal",
      href: "/festivals-package#pongal",
    },
    {
      label: "Maatu Pongal",
      href: "/festivals-package#m-pongal",
    },
    {
      label: "Telugu New Year",
      href: "/festivals-package#telugu-new-year",
    },
    {
      label: "Gokulaastami",
      href: "/festivals-package#gokulaastami",
    },
    {
      label: "Vinayagarchaturdhi",
      href: "/festivals-package#vinayagarchaturdhi",
    },
    {
      label: "Ayudha Pooja",
      href: "/festivals-package#ayudha-pooja",
    },
    {
      label: "Vijayadasami",
      href: "/festivals-package#vijayadasami",
    },
    {
      label: "Deepavali",
      href: "/festivals-package#deepavali",
    },
  ],
},
  {
    label: "Contact",
    href: "/contact",
  },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileDropdown, setMobileDropdown] = useState<string | null>(null);

  const pathname = usePathname();
  const router = useRouter();

  /*
   * Handles dropdown navigation.
   *
   * Corporate Package:
   * /corporate-package?package=friday-poojas
   *
   * Hash based pages:
   * /package#marriage
   */
  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    setMobileDropdown(null);

    if (typeof window === "undefined") {
      return;
    }

    /*
     * Handle Corporate Package query parameters.
     */
    if (href.startsWith("/corporate-package?")) {
      const [path, query] = href.split("?");

      if (pathname === "/corporate-package") {
        /*
         * Stay on the exact same page.
         * Only change the query parameter.
         */
        router.push(`${path}?${query}`, { scroll: false });
      } else {
        /*
         * If coming from another page, go to
         * Corporate Package with the selected package.
         */
        router.push(`${path}?${query}`);
      }

      return;
    }

    /*
     * Handle normal hash links.
     */
    const [path, hash] = href.split("#");

    if (hash) {
      const isCurrentPage =
        window.location.pathname === path ||
        (path === "" && window.location.pathname === "/") ||
        (path === "/package" &&
          window.location.pathname.startsWith("/package")) ||
        (path === "/corporate-package" &&
          window.location.pathname.startsWith("/corporate-package")) ||
        (path === "/festivals-package" &&
          window.location.pathname.startsWith("/festivals-package")) ||
        (path === "/overseas" &&
          window.location.pathname.startsWith("/overseas")) ||
        (path === "/temple" &&
          window.location.pathname.startsWith("/temple"));

      if (isCurrentPage) {
        window.location.hash = hash;

        /*
         * Scroll to the selected section.
         */
        setTimeout(() => {
          const element = document.getElementById(hash);

          if (element) {
            element.scrollIntoView({
              behavior: "smooth",
              block: "start",
            });
          }
        }, 50);
      } else {
        router.push(href);
      }

      return;
    }

    /*
     * Normal navigation.
     */
    router.push(href);
  };

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-[#D4B978]/30 bg-gradient-to-b from-[#4A171E] via-[#3B1115] to-[#2B0C10] backdrop-blur-md">
      {/* =========================================================
          NAVBAR
      ========================================================== */}
      <div className="mx-auto flex h-[90px] max-w-[1600px] items-center px-5 sm:px-8 lg:px-10">

        {/* =====================================================
            LOGO
        ====================================================== */}
        <Link
          href="/"
          className="mr-8 flex shrink-0 items-center py-1"
          aria-label="Home"
        >
          <Image
            src="/images/logo.jpeg"
            alt="Homam - Sacred Traditions"
            width={250}
            height={90}
            priority
            className="h-[76px] w-[76px] rounded-full object-cover transition-transform duration-300 hover:scale-105 lg:h-[88px] lg:w-[88px]"
          />
        </Link>

        {/* =====================================================
            DESKTOP NAVIGATION
        ====================================================== */}
        <nav className="hidden min-w-0 flex-1 items-center justify-center xl:flex">
          <div className="flex items-center gap-7 2xl:gap-10">

            {navItems.map((item) => (
              <div
                key={item.label}
                className="group relative"
              >
                {/* MAIN NAV ITEM */}
                <Link
                  href={item.href}
                  className="flex items-center gap-1 whitespace-nowrap py-7 text-[15px] font-medium text-white transition-colors duration-300 hover:text-[#D4B978]"
                >
                  {item.label}

                  {item.dropdown && (
                    <ChevronDown
                      size={15}
                      strokeWidth={1.5}
                      className="transition-transform duration-300 group-hover:rotate-180"
                    />
                  )}

                  {/* GOLD UNDERLINE */}
                  <span className="absolute bottom-5 left-0 h-px w-0 bg-[#D4B978] transition-all duration-300 group-hover:w-full" />
                </Link>

                {/* =================================================
                    DESKTOP DROPDOWN
                ================================================== */}
                {item.dropdown && (
                  <div className="invisible absolute left-1/2 top-[76px] w-[280px] -translate-x-1/2 translate-y-2 opacity-0 transition-all duration-300 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
                    <div className="border border-[#D4B978]/30 bg-[#3B1115] py-2 shadow-[0_15px_40px_rgba(0,0,0,0.3)]">

                      {item.dropdown.map((dropdownItem) => (
                        <button
                          key={dropdownItem.label}
                          type="button"
                          onClick={() =>
                            handleNavClick(dropdownItem.href)
                          }
                          className="group/item relative block w-full px-5 py-3.5 text-left text-[13px] text-white transition-colors duration-200 hover:bg-[#4A171E] hover:text-[#D4B978]"
                        >
                          {dropdownItem.label}

                          {/* GOLD DROPDOWN UNDERLINE */}
                          <span className="absolute bottom-0 left-5 h-px w-0 bg-[#D4B978] transition-all duration-300 group-hover/item:w-[calc(100%-40px)]" />
                        </button>
                      ))}

                    </div>
                  </div>
                )}
              </div>
            ))}

          </div>
        </nav>

        {/* =====================================================
            ORDER NOW - DESKTOP
        ====================================================== */}
        <div className="ml-auto hidden shrink-0 xl:block">
          <Link
            href="/order"
            className="inline-flex h-11 items-center justify-center rounded-lg bg-[#D4B978] px-6 text-[12px] font-semibold tracking-[0.08em] text-[#3B1115] transition-all duration-300 hover:bg-[#E5CC8A] hover:shadow-[0_5px_20px_rgba(212,185,120,0.25)]"
          >
            ORDER NOW
          </Link>
        </div>

        {/* =====================================================
            MOBILE MENU BUTTON
        ====================================================== */}
        <button
          type="button"
          onClick={() => setMobileOpen((prev) => !prev)}
          className="ml-auto flex h-10 w-10 items-center justify-center text-white transition-colors duration-300 hover:text-[#D4B978] xl:hidden"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? (
            <X size={24} strokeWidth={1.5} />
          ) : (
            <Menu size={24} strokeWidth={1.5} />
          )}
        </button>
      </div>

      {/* =========================================================
          MOBILE MENU
      ========================================================== */}
      <div
        className={`overflow-hidden border-t border-[#D4B978]/30 bg-[#3B1115] transition-all duration-300 xl:hidden ${
          mobileOpen
            ? "max-h-[90vh] opacity-100"
            : "max-h-0 opacity-0"
        }`}
      >
        <nav className="mx-auto max-w-[1700px] px-6 py-4">

          {navItems.map((item) => (
            <div key={item.label}>

              {/* MOBILE MAIN ITEM */}
              <div className="flex items-center border-b border-[#D4B978]/20">

                <Link
                  href={item.href}
                  onClick={() => {
                    if (!item.dropdown) {
                      setMobileOpen(false);
                    }
                  }}
                  className="flex-1 py-4 text-sm font-medium text-white transition-colors hover:text-[#D4B978]"
                >
                  {item.label}
                </Link>

                {/* MOBILE DROPDOWN BUTTON */}
                {item.dropdown && (
                  <button
                    type="button"
                    onClick={() =>
                      setMobileDropdown((current) =>
                        current === item.label
                          ? null
                          : item.label
                      )
                    }
                    className="flex h-12 w-12 items-center justify-center text-white transition-colors hover:text-[#D4B978]"
                    aria-label={`Toggle ${item.label} menu`}
                    aria-expanded={
                      mobileDropdown === item.label
                    }
                  >
                    <ChevronDown
                      size={18}
                      strokeWidth={1.5}
                      className={`transition-transform duration-300 ${
                        mobileDropdown === item.label
                          ? "rotate-180"
                          : ""
                      }`}
                    />
                  </button>
                )}

              </div>

              {/* =================================================
                  MOBILE DROPDOWN
              ================================================== */}
              {item.dropdown && (
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    mobileDropdown === item.label
                      ? "max-h-96 overflow-y-auto opacity-100"
                      : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="border-b border-[#D4B978]/20 bg-[#2B0C10] py-1">

                    {item.dropdown.map((dropdownItem) => (
                      <button
                        key={dropdownItem.label}
                        type="button"
                        onClick={() =>
                          handleNavClick(dropdownItem.href)
                        }
                        className="block w-full px-6 py-3 text-left text-[13px] text-white transition-colors hover:bg-[#4A171E] hover:text-[#D4B978]"
                      >
                        {dropdownItem.label}
                      </button>
                    ))}

                  </div>
                </div>
              )}

            </div>
          ))}

          {/* =====================================================
              MOBILE ORDER BUTTON
          ====================================================== */}
          <Link
            href="/order"
            onClick={() => setMobileOpen(false)}
            className="mt-5 flex h-12 items-center justify-center rounded-lg bg-[#D4B978] text-xs font-semibold tracking-[0.1em] text-[#3B1115] transition-all duration-300 hover:bg-[#E5CC8A] hover:shadow-[0_5px_20px_rgba(212,185,120,0.25)]"
          >
            ORDER NOW
          </Link>

        </nav>
      </div>
    </header>
  );
}