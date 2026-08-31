
"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import PackagesSection from "./components/packages";
import Faq from "./components/faq";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const API_BASE = "http://localhost:3001";

type Banner = {
  heading_line1: string;
  heading_line2: string;
  description: string;
  image_filename: string;
};

const FALLBACK_BANNER: Banner = {
  heading_line1: "Everything You Need.",
  heading_line2: "One Sacred Destination.",
  description:
    "We save your valuable time by bringing together multiple products for all your poojas, thoughtfully prepared for every occasion.",
  image_filename: "herobanner.png",
};

export default function Home() {
  const [banner, setBanner] = useState<Banner>(FALLBACK_BANNER);

  useEffect(() => {
    fetch(`${API_BASE}/home-banner`)
      .then((res) => {
        if (!res.ok) {
          throw new Error("Failed to fetch home banner");
        }

        return res.json();
      })
      .then((data) => {
        if (data) {
          setBanner(data);
        }
      })
      .catch(() => {
        // Keep fallback banner if API fails
      });
  }, []);

  return (
    <main className="bg-[#F8F4EC] pt-[90px]">

      {/* ================= HERO BANNER ================= */}
      <section className="relative w-full h-[460px] sm:h-[500px] md:h-auto md:aspect-[2.5/1] md:min-h-[480px] md:max-h-[750px] overflow-hidden bg-[#1D0C07]">

        {/* Background Image */}
        <Image
          src={`/images/${banner.image_filename}`}
          alt="Iyer's Pooja Products"
          fill
          priority
          className="object-cover object-[15%_10%] sm:object-[22%_center] md:object-center"
          sizes="100vw"
        />

        {/* Content */}
        <div className="absolute inset-0 z-10 flex items-end justify-center pb-4 sm:items-center sm:justify-end sm:pb-0">

          <div className="w-full max-w-2xl px-4 py-2 text-center sm:text-right sm:px-10 lg:mr-[6%] lg:px-0 sm:translate-y-6 md:translate-y-8 lg:translate-y-10">

            {/* Brand */}
            <div className="mb-2 sm:mb-4 flex items-center justify-center sm:justify-end gap-2 sm:gap-3">
              <span className="h-px w-6 bg-[#9A7228] sm:w-10" />

              <span className="text-[9px] sm:text-[11px] font-bold uppercase tracking-[0.25em] text-[#8C5D17]">
                Iyer&apos;s Pooja Products
              </span>

              <span className="h-px w-6 bg-[#9A7228] sm:hidden" />
            </div>

            {/* Heading */}
            <h1 className="font-[family-name:var(--font-cormorant)] text-2xl font-bold leading-tight text-[#4A171E] sm:text-3xl md:text-5xl lg:text-6xl xl:text-7xl">
              {banner.heading_line1}

              <br />

              <span className="text-[#A71930]">
                {banner.heading_line2}
              </span>
            </h1>

            {/* Description */}
            <p className="mx-auto sm:ml-auto mt-2 sm:mt-4 max-w-sm sm:max-w-xl text-[11px] font-medium leading-relaxed text-[#4A342B] sm:text-sm sm:leading-6 md:text-base md:leading-7">
              {banner.description}
            </p>

            {/* Buttons */}
            <div className="mt-4 sm:mt-7 flex flex-wrap items-center justify-center sm:justify-end gap-2 sm:gap-4">

              <a
                href="/order"
                className="inline-flex h-9 sm:h-11 items-center justify-center rounded-md bg-[#A71930] px-5 sm:px-7 text-[10px] sm:text-xs font-semibold tracking-[0.08em] text-white shadow-md transition-all duration-300 hover:bg-[#831424] active:scale-95"
              >
                ORDER NOW
              </a>

              <a
                href="/package"
                className="inline-flex h-9 sm:h-11 items-center justify-center rounded-md border border-[#5A2026] bg-white px-5 sm:px-7 text-[10px] sm:text-xs font-semibold tracking-[0.08em] text-[#5A2026] shadow-sm transition-all duration-300 hover:bg-[#5A2026] hover:text-white active:scale-95"
              >
                EXPLORE PACKAGES
              </a>

            </div>

          </div>

        </div>

        {/* Bottom Decorative Line */}
        <div className="absolute bottom-4 left-1/2 hidden h-px w-24 -translate-x-1/2 bg-[#9A7228]/50 md:block" />

      </section>


      {/* ================= INTRODUCTION ================= */}
      <section className="bg-[#FFFCF7] px-6 py-24 sm:px-10 sm:py-28 lg:py-32">

        <div className="mx-auto max-w-4xl text-center">

          {/* Label */}
          <div className="flex items-center justify-center gap-4">
            <span className="h-px w-12 bg-[#B08A45]" />

            <span className="text-[11px] font-semibold uppercase tracking-[0.3em] text-[#B08A45]">
              About Iyer&apos;s
            </span>

            <span className="h-px w-12 bg-[#B08A45]" />
          </div>

          {/* Heading */}
          <h2 className="mt-6 font-[family-name:var(--font-cormorant)] text-4xl font-semibold leading-tight text-[#5A2026] sm:text-5xl lg:text-6xl">
            Everything for Your Sacred
            <br className="hidden sm:block" />

            <span className="text-[#A71930]">
              Moments, Together.
            </span>
          </h2>

          {/* Description */}
          <p className="mx-auto mt-7 max-w-3xl text-base leading-8 text-[#756B62] sm:text-lg">
            At Iyer&apos;s Pooja Products, we believe preparing for a pooja
            should be meaningful, not time-consuming. We bring together
            carefully selected pooja essentials and thoughtfully curated
            packages, making it easier to find everything you need for every
            sacred occasion.
          </p>

          {/* Decorative Element */}
          <div className="mx-auto mt-10 flex items-center justify-center gap-3">
            <span className="h-px w-16 bg-[#E9DDC9]" />
            <span className="text-lg text-[#B08A45]">✦</span>
            <span className="h-px w-16 bg-[#E9DDC9]" />
          </div>

          {/* Highlights */}
          <div className="mt-14 grid grid-cols-1 gap-8 sm:grid-cols-3">

            {/* Highlight 1 */}
            <div className="px-4">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full border border-[#B08A45]/40 text-[#A71930]">
                ✦
              </div>

              <h3 className="mt-5 font-[family-name:var(--font-cormorant)] text-2xl font-semibold text-[#5A2026]">
                Authentic Products
              </h3>

              <p className="mt-2 text-sm leading-6 text-[#756B62]">
                Carefully selected pooja essentials for meaningful rituals.
              </p>
            </div>


            {/* Highlight 2 */}
            <div className="border-[#E9DDC9] px-4 sm:border-x">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full border border-[#B08A45]/40 text-[#A71930]">
                ✦
              </div>

              <h3 className="mt-5 font-[family-name:var(--font-cormorant)] text-2xl font-semibold text-[#5A2026]">
                Complete Packages
              </h3>

              <p className="mt-2 text-sm leading-6 text-[#756B62]">
                Thoughtfully curated packages with everything you need.
              </p>
            </div>


            {/* Highlight 3 */}
            <div className="px-4">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full border border-[#B08A45]/40 text-[#A71930]">
                ✦
              </div>

              <h3 className="mt-5 font-[family-name:var(--font-cormorant)] text-2xl font-semibold text-[#5A2026]">
                Save Your Time
              </h3>

              <p className="mt-2 text-sm leading-6 text-[#756B62]">
                Multiple products brought together conveniently in one place.
              </p>
            </div>

          </div>

        </div>

      </section>


      {/* ================= PACKAGES SECTION ================= */}
      <PackagesSection />


      {/* ================= CTA SECTION ================= */}
      <section className="border-b border-[#B08A45]/20 bg-[#6B705C] px-6 py-12 sm:px-10 lg:py-16">

        <div className="mx-auto max-w-5xl text-center">

          {/* Decorative Element */}
          <div className="mb-7 flex items-center justify-center gap-4">
            <span className="h-px w-12 bg-[#B08A45]" />

            <span className="text-sm text-[#D4B978]">
              ✦
            </span>

            <span className="h-px w-12 bg-[#B08A45]" />
          </div>


          {/* Heading */}
          <h2 className="font-[family-name:var(--font-cormorant)] text-4xl font-semibold leading-tight sm:text-5xl lg:text-6xl">
            Planning a Pooja?
            <br />

            <span className="text-[#D4B978]">
              We&apos;ve Got Everything Ready.
            </span>
          </h2>


          {/* Description */}
          <p className="mx-auto mt-6 max-w-2xl text-sm leading-7 text-[#D8C9B8] sm:text-base">
            Save your valuable time with thoughtfully curated pooja products
            and packages, brought together for every sacred occasion.
          </p>


          {/* CTA */}
          <div className="mt-9">
            <Link
              href="/order"
              className="group inline-flex h-12 items-center gap-3 rounded-md bg-[#A71930] px-8 text-[12px] font-semibold tracking-[0.1em] text-white transition-all duration-300 hover:bg-[#8A1528]"
            >
              ORDER NOW

              <ArrowUpRight
                size={16}
                strokeWidth={1.7}
                className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </Link>
          </div>

        </div>

      </section>


      {/* ================= FAQ ================= */}
      <Faq />

    </main>
  );
}

