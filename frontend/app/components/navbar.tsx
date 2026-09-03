"use client";

import { ChevronDown, Menu, X, UserPlus } from "lucide-react";
import { useState, type ChangeEvent, type FormEvent } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

const navItems = [
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

  {
    label: "Corporate Package",
    href: "/corporate-package",
    dropdown: [
      {
        label: "Friday Poojas",
        href: "/corporate-package#friday-poojas",
      },
      {
        label: "Amavasai Poojas",
        href: "/corporate-package#amavasai-poojas",
      },
      {
        label: "Ganapathi Homam",
        href: "/corporate-package#ganapathy-homam",
      },
      {
        label: "Ayudha Pooja & Vehicle Pooja",
        href: "/corporate-package#ayudha-pooja-vehicle-pooja",
      },
      {
        label: "Aarthi & Prasadam Distribution",
        href: "/corporate-package#aarthi-prasadam-distribution",
      },
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

  const [regModalOpen, setRegModalOpen] = useState(false);

  const [regForm, setRegForm] = useState({
    name: "",
    phone: "",
    email: "",
    location: "",
  });

  const [regSubmitting, setRegSubmitting] = useState(false);
  const [regSuccess, setRegSuccess] = useState(false);

  const pathname = usePathname();
  const router = useRouter();

  const handleRegChange = (e: ChangeEvent<HTMLInputElement>) => {
    setRegForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleRegSubmit = async (e: FormEvent) => {
    e.preventDefault();

    setRegSubmitting(true);

    try {
      const res = await fetch("http://localhost:3001/iyer-registrations", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(regForm),
      });

      if (!res.ok) throw new Error("Failed to submit");

      setRegSuccess(true);

      setRegForm({
        name: "",
        phone: "",
        email: "",
        location: "",
      });

      setTimeout(() => {
        setRegSuccess(false);
        setRegModalOpen(false);
      }, 1800);
    } catch {
      alert("Something went wrong. Please try again.");
    } finally {
      setRegSubmitting(false);
    }
  };

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    setMobileDropdown(null);

    if (typeof window === "undefined") {
      return;
    }

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

    router.push(href);
  };

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50 border-b border-[#D4B978]/30 bg-gradient-to-b from-[#4A171E] via-[#3B1115] to-[#2B0C10] backdrop-blur-md">
        {/* NAVBAR */}
        <div className="mx-auto flex h-[90px] max-w-[1600px] items-center px-5 sm:px-8 lg:px-10">
          {/* LOGO */}
          <Link
            href="/"
            className="mr-10 flex shrink-0 items-center py-1 2xl:mr-12"
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

          {/* DESKTOP NAVIGATION */}
          <nav className="hidden min-w-0 flex-1 items-center justify-center xl:flex">
            <div className="flex items-center gap-5 2xl:gap-8">
              {navItems.map((item) => (
                <div key={item.label} className="group relative">
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

                    <span className="absolute bottom-5 left-0 h-px w-0 bg-[#D4B978] transition-all duration-300 group-hover:w-full" />
                  </Link>

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

          {/* DESKTOP BUTTONS */}
          <div className="ml-6 hidden shrink-0 items-center gap-3 xl:flex 2xl:ml-8">
            {/* IYER REGISTRATION */}
            <button
              type="button"
              onClick={() => setRegModalOpen(true)}
              className="flex h-[54px] shrink-0 items-center justify-center gap-2.5 rounded-lg border border-[#D4B978]/50 px-4 text-[#D4B978] transition-all duration-300 hover:bg-[#D4B978]/10"
            >
              <UserPlus
                size={20}
                strokeWidth={1.7}
                className="shrink-0"
              />

              <span className="flex flex-col items-center justify-center text-center leading-[1.2]">
                <span className="text-[10px] font-semibold tracking-[0.08em]">
                  Iyer
                </span>

                <span className="text-[10px] font-semibold tracking-[0.06em]">
                  Registration
                </span>
              </span>
            </button>

            {/* ORDER NOW */}
            <Link
              href="/order"
              className="inline-flex h-11 items-center justify-center rounded-lg bg-[#D4B978] px-6 text-[12px] font-semibold tracking-[0.08em] text-[#3B1115] transition-all duration-300 hover:bg-[#E5CC8A] hover:shadow-[0_5px_20px_rgba(212,185,120,0.25)]"
            >
              ORDER NOW
            </Link>
          </div>

          {/* MOBILE MENU BUTTON */}
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

        {/* MOBILE MENU */}
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

                  {item.dropdown && (
                    <button
                      type="button"
                      onClick={() =>
                        setMobileDropdown((current) =>
                          current === item.label ? null : item.label
                        )
                      }
                      className="flex h-12 w-12 items-center justify-center text-white transition-colors hover:text-[#D4B978]"
                      aria-label={`Toggle ${item.label} menu`}
                      aria-expanded={mobileDropdown === item.label}
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

            {/* MOBILE ORDER NOW */}
            <Link
              href="/order"
              onClick={() => setMobileOpen(false)}
              className="mt-5 flex h-12 items-center justify-center rounded-lg bg-[#D4B978] text-xs font-semibold tracking-[0.1em] text-[#3B1115] transition-all duration-300 hover:bg-[#E5CC8A]"
            >
              ORDER NOW
            </Link>

            {/* MOBILE IYER REGISTRATION */}
            <button
              type="button"
              onClick={() => {
                setMobileOpen(false);
                setRegModalOpen(true);
              }}
              className="mt-3 flex h-12 w-full items-center justify-center gap-2 rounded-lg border border-[#D4B978]/50 text-xs font-semibold text-[#D4B978] transition-all duration-300 hover:bg-[#D4B978]/10"
            >
              <UserPlus size={16} strokeWidth={1.7} />

              <span className="flex flex-col items-center justify-center leading-tight text-center">
                <span>Iyer</span>
                <span>Registration</span>
              </span>
            </button>
          </nav>
        </div>
      </header>

      {/* IYER REGISTRATION MODAL */}
      {regModalOpen && (
        <div
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/60 px-4 py-6 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          aria-labelledby="iyer-registration-title"
        >
          <div className="relative w-full max-w-[530px] rounded-[20px] border border-[#D4B978]/50 bg-[#FDF8ED] px-6 py-8 shadow-[0_25px_80px_rgba(0,0,0,0.45)] sm:px-10 sm:py-9">
            {/* CLOSE BUTTON */}
            <button
              type="button"
              onClick={() => setRegModalOpen(false)}
              className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full text-[#6B625A] transition-all duration-200 hover:bg-[#EFE7D8] hover:text-[#5A2026]"
              aria-label="Close"
            >
              <X size={21} strokeWidth={1.5} />
            </button>

            {/* MODAL HEADER */}
            <div className="pr-10">
              <h3
                id="iyer-registration-title"
                className="font-[family-name:var(--font-cormorant)] text-[27px] font-semibold leading-tight text-[#5A2026]"
              >
                Iyer Registration
              </h3>

              <p className="mt-1.5 text-[14px] text-[#756B62]">
                Fill in your details.
              </p>
            </div>

            {/* SUCCESS */}
            {regSuccess ? (
              <div className="mt-7 rounded-xl border border-[#B08A45]/30 bg-[#B08A45]/10 px-5 py-8 text-center">
                <h4 className="text-lg font-semibold text-[#5A2026]">
                  Thank You!
                </h4>

                <p className="mt-2 text-sm text-[#756B62]">
                  Your request has been received successfully.
                </p>
              </div>
            ) : (
              <form
                onSubmit={handleRegSubmit}
                className="mt-7 space-y-4"
              >
                {/* FULL NAME */}
                <input
                  type="text"
                  name="name"
                  required
                  value={regForm.name}
                  onChange={handleRegChange}
                  placeholder="Full Name"
                  className="h-[51px] w-full rounded-xl border border-[#D8CDBA] bg-white px-4 text-[16px] text-[#3A2E27] outline-none transition-all placeholder:text-[#8C8A88] focus:border-[#B08A45] focus:ring-2 focus:ring-[#B08A45]/10"
                />

                {/* MOBILE */}
                <input
                  type="tel"
                  name="phone"
                  required
                  value={regForm.phone}
                  onChange={handleRegChange}
                  placeholder="Mobile Number"
                  className="h-[51px] w-full rounded-xl border border-[#D8CDBA] bg-white px-4 text-[16px] text-[#3A2E27] outline-none transition-all placeholder:text-[#8C8A88] focus:border-[#B08A45] focus:ring-2 focus:ring-[#B08A45]/10"
                />

                {/* EMAIL */}
                <input
                  type="email"
                  name="email"
                  required
                  value={regForm.email}
                  onChange={handleRegChange}
                  placeholder="Email Address"
                  className="h-[51px] w-full rounded-xl border border-[#D8CDBA] bg-white px-4 text-[16px] text-[#3A2E27] outline-none transition-all placeholder:text-[#8C8A88] focus:border-[#B08A45] focus:ring-2 focus:ring-[#B08A45]/10"
                />

                {/* ADDRESS */}
                <textarea
                  name="location"
                  required
                  value={regForm.location}
                  onChange={(e) =>
                    setRegForm((prev) => ({
                      ...prev,
                      location: e.target.value,
                    }))
                  }
                  placeholder="Address"
                  className="min-h-[75px] w-full resize-none rounded-xl border border-[#D8CDBA] bg-white px-4 py-3 text-[16px] text-[#3A2E27] outline-none transition-all placeholder:text-[#8C8A88] focus:border-[#B08A45] focus:ring-2 focus:ring-[#B08A45]/10"
                />

                {/* SUBMIT */}
                <button
                  type="submit"
                  disabled={regSubmitting}
                  className="mt-1 flex h-[54px] w-full items-center justify-center rounded-xl bg-[#681A20] text-[16px] font-semibold text-white transition-all duration-300 hover:bg-[#541319] hover:shadow-[0_8px_25px_rgba(104,26,32,0.25)] disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {regSubmitting ? "Submitting..." : "Submit"}
                </button>
              </form>
            )}
          </div>
        </div>
      )}
    </>
  );
}