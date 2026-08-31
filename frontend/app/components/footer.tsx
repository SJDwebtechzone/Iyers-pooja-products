"use client";

import Link from "next/link";
import NextImage from "next/image";
import {
  ArrowUpRight,
  Mail,
  MapPin,
  Phone,
}  from "lucide-react";

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Contact", href: "/contact" },
  { label: "Order Now", href: "/order" },
];

const packageLinks = [
  { label: "Consumer Package", href: "/consumer-package" },
  { label: "Corporate Package", href: "/corporate-package" },
  { label: "Temple", href: "/temple" },
  { label: "Overseas", href: "/overseas" },
  { label: "Temple Package", href: "/temple-package" },
  { label: "Festivals Package", href: "/festivals-package" },
];

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-[#4A171E] via-[#3B1115] to-[#2B0C10] text-[#F8F4EC]">

      {/* =====================================================
          CTA SECTION
      ====================================================== */}
      


      {/* =====================================================
          MAIN FOOTER
      ====================================================== */}
      <div className="mx-auto max-w-[1700px] px-6 py-16 sm:px-10 lg:px-16 lg:py-20">

        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-[1.4fr_0.8fr_1.2fr_1fr] lg:gap-10">

          {/* =================================================
              BRAND
          ================================================== */}
          <div>

            {/* Logo */}
            <Link
              href="/"
              className="flex items-center gap-4"
              aria-label="Iyer's Pooja Products"
            >
              <NextImage
                src="/images/logo.jpeg"
                alt="Iyer's Pooja Products"
                width={220}
                height={80}
                className="h-[64px] w-[64px] rounded-full object-cover sm:h-[72px] sm:w-[72px]"
              />

              <div>
                <div className="font-[family-name:var(--font-cormorant)] text-3xl font-semibold tracking-[0.08em] text-[#F8F4EC]">
                  IYER&apos;S
                </div>

                <div className="mt-1 text-[9px] font-medium tracking-[0.28em] text-[#D4B978]">
                  POOJA PRODUCTS
                </div>
              </div>
            </Link>

            {/* Description */}
            <p className="mt-6 max-w-sm text-sm leading-7 text-[#D8C9B8]">
              Bringing together authentic pooja essentials and thoughtfully
              curated packages to make every sacred occasion simple,
              convenient and meaningful.
            </p>

            {/* Social Media */}
            <div className="mt-7 flex items-center gap-3">

  <a
    href="#"
    aria-label="Facebook"
    className="flex h-10 w-10 items-center justify-center rounded-full border border-[#B08A45]/30 text-sm font-semibold text-[#D8C9B8] transition-all duration-300 hover:border-[#D4B978] hover:bg-[#D4B978] hover:text-[#42161B]"
  >
    f
  </a>

  <a
    href="#"
    aria-label="Instagram"
    className="flex h-10 w-10 items-center justify-center rounded-full border border-[#B08A45]/30 text-sm font-semibold text-[#D8C9B8] transition-all duration-300 hover:border-[#D4B978] hover:bg-[#D4B978] hover:text-[#42161B]"
  >
    ◎
  </a>

  <a
    href="#"
    aria-label="YouTube"
    className="flex h-10 w-10 items-center justify-center rounded-full border border-[#B08A45]/30 text-sm font-semibold text-[#D8C9B8] transition-all duration-300 hover:border-[#D4B978] hover:bg-[#D4B978] hover:text-[#42161B]"
  >
    ▶
  </a>

</div>
          </div>


          {/* =================================================
              QUICK LINKS
          ================================================== */}
          <div>

            <h3 className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#D4B978]">
              Quick Links
            </h3>

            <ul className="mt-6 space-y-3.5">
              {quickLinks.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="group inline-flex items-center text-sm text-[#D8C9B8] transition-colors duration-300 hover:text-white"
                  >
                    <span className="mr-0 h-px w-0 bg-[#D4B978] transition-all duration-300 group-hover:mr-2 group-hover:w-3" />

                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>

          </div>


          {/* =================================================
              PACKAGES
          ================================================== */}
          <div>

            <h3 className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#D4B978]">
              Our Packages
            </h3>

            <ul className="mt-6 space-y-3.5">
              {packageLinks.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="group inline-flex items-center text-sm text-[#D8C9B8] transition-colors duration-300 hover:text-white"
                  >
                    <span className="mr-0 h-px w-0 bg-[#D4B978] transition-all duration-300 group-hover:mr-2 group-hover:w-3" />

                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>

          </div>


          {/* =================================================
              CONTACT
          ================================================== */}
          <div>

            <h3 className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#D4B978]">
              Get In Touch
            </h3>

            <div className="mt-6 space-y-5">

              {/* Phone */}
              <a
                href="tel:+919999999999"
                className="group flex items-start gap-3"
              >
                <div className="mt-0.5 text-[#D4B978]">
                  <Phone size={17} strokeWidth={1.5} />
                </div>

                <div>
                  <div className="text-[10px] uppercase tracking-[0.15em] text-[#9F8980]">
                    Phone
                  </div>

                  <div className="mt-1 text-sm text-[#D8C9B8] transition-colors group-hover:text-white">
                    +91 98844 62960
                  </div>
                </div>
              </a>


              {/* Email */}
              <a
                href="mailto:info@example.com"
                className="group flex items-start gap-3"
              >
                <div className="mt-0.5 text-[#D4B978]">
                  <Mail size={17} strokeWidth={1.5} />
                </div>

                <div>
                  <div className="text-[10px] uppercase tracking-[0.15em] text-[#9F8980]">
                    Email
                  </div>

                  <div className="mt-1 text-sm text-[#D8C9B8] transition-colors group-hover:text-white">
                    info@example.com
                  </div>
                </div>
              </a>


              {/* Address */}
              <div className="flex items-start gap-3">

                <div className="mt-0.5 text-[#D4B978]">
                  <MapPin size={17} strokeWidth={1.5} />
                </div>

                <div>
                  <div className="text-[10px] uppercase tracking-[0.15em] text-[#9F8980]">
                    Visit Us
                  </div>

                  <div className="mt-1 text-sm leading-6 text-[#D8C9B8]">
                    Chennai, Tamil Nadu,
                    <br />
                    India
                  </div>
                </div>

              </div>

            </div>

          </div>

        </div>

      </div>
      {/* =====================================================
          BOTTOM BAR
      ====================================================== */}
      <div className="border-t border-[#B08A45]/20">

        <div className="mx-auto flex max-w-[1700px] flex-col gap-4 px-6 py-6 text-xs text-[#9F8980] sm:px-10 md:flex-row md:items-center md:justify-center lg:px-16">

          {/* Copyright */}
          <p className="text-center">
            © {new Date().getFullYear()} DevSpectra   . All rights reserved.
          </p>

          {/* Legal Links */}
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2">

            <Link
              href="/privacy-policy"
              className="transition-colors hover:text-[#D4B978]"
            >
              Privacy Policy
            </Link>

            <Link
              href="/terms"
              className="transition-colors hover:text-[#D4B978]"
            >
              Terms & Conditions
            </Link>

            <Link
              href="/refund-policy"
              className="transition-colors hover:text-[#D4B978]"
            >
              Refund Policy
            </Link>

          </div>

        </div>

      </div>

    </footer>
  );
}