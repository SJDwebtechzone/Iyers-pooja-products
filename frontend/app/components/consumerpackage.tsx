"use client";

import Image from "next/image";
import { useState } from "react";
import {
  ArrowRight,
  Check,
  Gift,
  Info,
  List,
  Phone,
  Sparkles,
  Star,
} from "lucide-react";

export type PackageItem = {
  sno: number;
  english: string;
  tamil: string;
  quantity: string;
};

export type PackageData = {
  title: string;
  subtitle: string;
  breadcrumb: string;

  heroImage: string;
  introImage: string;
  bannerImage?: string;

  bannerTitle: string;
  bannerSubtitle: string;

  introTitle: string;
  introText: string;

  benefits: {
    icon: "peace" | "obstacles" | "family" | "success";
    title: string;
  }[];

  items: PackageItem[];

  process: string[];
  benefitsDetails: string[];
  notes: string[];

  enquireText?: string;
};

type PackagePageProps = {
  data: PackageData;
};

export default function PackagePage({ data }: PackagePageProps) {
  const [activeTab, setActiveTab] = useState("details");

  const tabs = [
    {
      id: "details",
      label: "Package Details",
      icon: Gift,
    },
    {
      id: "process",
      label: "Pooja Process",
      icon: List,
    },
    {
      id: "benefits",
      label: "Benefits",
      icon: Star,
    },
    {
      id: "notes",
      label: "Important Notes",
      icon: Info,
    },
  ];

  return (
    <main className="bg-[#FCFAF6] text-[#29231F]">

      {/* =====================================================
          HERO
      ===================================================== */}
      <section className="relative mt-[90px] min-h-[430px] overflow-hidden lg:h-[500px]">

        {/* Hero Image */}
        <div className="absolute inset-0 lg:w-[58%]">
          <Image
            src={data.heroImage}
            alt={data.title}
            fill
            priority
            className="object-cover"
          />

          {/* Image overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-black/5 to-black/30 lg:from-transparent lg:to-black/20" />
        </div>

        {/* Right Dark Content */}
        <div className="relative ml-auto flex min-h-[430px] w-full items-center bg-[#090807] px-6 py-16 sm:px-10 lg:min-h-full lg:w-[48%] lg:px-16 xl:px-24">

          {/* Decorative glow */}
          <div className="absolute left-0 top-0 h-full w-24 bg-gradient-to-r from-black/30 to-transparent lg:-left-12" />

          <div className="relative z-10 w-full max-w-[650px]">

            <p className="mb-5 text-[11px] font-semibold uppercase tracking-[0.35em] text-[#D4B978]">
              ✦ POOJA PACKAGE ✦
            </p>

            <h1 className="font-[family-name:var(--font-cormorant)] text-5xl font-medium leading-[1] text-white sm:text-6xl lg:text-7xl">
              {data.title}
            </h1>

            {/* Gold divider */}
            <div className="my-7 flex items-center gap-3">
              <span className="h-px w-14 bg-[#B08A45]" />
              <Sparkles
                size={14}
                strokeWidth={1}
                className="text-[#D4B978]"
              />
              <span className="h-px w-14 bg-[#B08A45]" />
            </div>

            <p className="max-w-lg text-sm leading-7 text-white/80 sm:text-base">
              {data.subtitle}
            </p>

            {/* Breadcrumb */}
            <div className="mt-8 flex flex-wrap items-center gap-3 border-t border-white/10 pt-6 text-xs">
              <a
                href="/"
                className="text-white/60 transition-colors hover:text-[#D4B978]"
              >
                Home
              </a>

              <span className="text-white/30">›</span>

              <a
                href="/consumer-package"
                className="text-white/60 transition-colors hover:text-[#D4B978]"
              >
                Pooja Packages
              </a>

              <span className="text-white/30">›</span>

              <span className="text-[#D4B978]">
                {data.breadcrumb}
              </span>
            </div>

          </div>
        </div>
      </section>


      {/* =====================================================
          DECORATIVE BANNER
      ===================================================== */}
      <section className="px-5 py-8 sm:px-8 lg:px-12 lg:py-10">

        <div className="relative mx-auto max-w-[1400px] overflow-hidden rounded-xl border border-[#E8D5B5] bg-[#FFF9EE]">

          {/* Optional background */}
          {data.bannerImage && (
            <Image
              src={data.bannerImage}
              alt=""
              fill
              className="object-cover opacity-[0.14]"
            />
          )}

          {/* Pattern */}
          <div className="absolute inset-0 opacity-[0.05]">
            <div
              className="h-full w-full"
              style={{
                backgroundImage:
                  "radial-gradient(#A71930 1px, transparent 1px)",
                backgroundSize: "18px 18px",
              }}
            />
          </div>

          <div className="relative flex min-h-[145px] items-center justify-center px-6 py-10 text-center">

            <div>

              <p className="font-[family-name:var(--font-cormorant)] text-2xl italic text-[#7C3030] sm:text-3xl">
                {data.bannerSubtitle}
              </p>

              <h2 className="mt-1 font-[family-name:var(--font-cormorant)] text-3xl font-semibold text-[#5A2026] sm:text-4xl">
                {data.bannerTitle}
              </h2>

              <div className="mx-auto mt-4 flex items-center justify-center gap-2">
                <span className="h-px w-12 bg-[#B08A45]" />
                <span className="h-1.5 w-1.5 rotate-45 bg-[#B08A45]" />
                <span className="h-px w-12 bg-[#B08A45]" />
              </div>

            </div>

          </div>
        </div>
      </section>


      {/* =====================================================
          INTRODUCTION
      ===================================================== */}
      <section className="px-5 py-14 sm:px-8 lg:px-12 lg:py-20">

        <div className="mx-auto grid max-w-[1400px] items-center gap-12 lg:grid-cols-2 lg:gap-20">

          {/* LEFT CONTENT */}
          <div>

            <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.28em] text-[#B08A45]">
              ABOUT THE POOJA
            </p>

            <h2 className="font-[family-name:var(--font-cormorant)] text-4xl font-semibold leading-tight text-[#5A2026] sm:text-5xl">
              {data.introTitle}
            </h2>

            <div className="my-6 flex items-center gap-2">
              <span className="h-px w-12 bg-[#B08A45]" />
              <span className="h-1.5 w-1.5 rotate-45 bg-[#B08A45]" />
            </div>

            <p className="max-w-xl text-[15px] leading-8 text-[#4B4540]">
              {data.introText}
            </p>

            {/* Benefits */}
            <div className="mt-10 grid grid-cols-2 gap-7 sm:grid-cols-4 lg:grid-cols-2 xl:grid-cols-4">

              {data.benefits.map((benefit) => (
                <Benefit
                  key={benefit.title}
                  type={benefit.icon}
                  title={benefit.title}
                />
              ))}

            </div>

          </div>


          {/* RIGHT IMAGE */}
          <div className="relative">

            <div className="absolute -inset-3 rounded-2xl border border-[#D9BC86]/40" />

            <div className="relative aspect-[4/3] overflow-hidden rounded-xl">
              <Image
                src={data.introImage}
                alt={data.introTitle}
                fill
                className="object-cover transition-transform duration-700 hover:scale-105"
              />
            </div>

            {/* Decorative corner */}
            <div className="absolute -bottom-5 -left-5 hidden h-20 w-20 border-b border-l border-[#B08A45] sm:block" />
            <div className="absolute -right-5 -top-5 hidden h-20 w-20 border-r border-t border-[#B08A45] sm:block" />

          </div>

        </div>
      </section>


      {/* =====================================================
          PACKAGE DETAILS
      ===================================================== */}
      <section className="bg-white px-5 py-14 sm:px-8 lg:px-12 lg:py-20">

        <div className="mx-auto max-w-[1400px]">

          {/* Heading */}
          <div className="mb-10 text-center">

            <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-[#B08A45]">
              WHAT'S INCLUDED
            </p>

            <h2 className="mt-2 font-[family-name:var(--font-cormorant)] text-4xl font-semibold text-[#5A2026] sm:text-5xl">
              Package Details
            </h2>

            <div className="mx-auto mt-4 flex items-center justify-center gap-2">
              <span className="h-px w-12 bg-[#B08A45]" />
              <span className="h-1.5 w-1.5 rotate-45 bg-[#B08A45]" />
              <span className="h-px w-12 bg-[#B08A45]" />
            </div>

          </div>


          {/* Details Card */}
          <div className="overflow-hidden rounded-xl border border-[#E8D5B5] bg-[#FFFCF7]">

            <div className="grid lg:grid-cols-[250px_1fr]">

              {/* SIDEBAR */}
              <div className="bg-[#5A2026] p-4 lg:p-5">

                <div className="flex gap-2 overflow-x-auto scrollbar-none [scrollbar-width:none] [&::-webkit-scrollbar]:hidden lg:block lg:space-y-2">

                  {tabs.map((tab) => {
                    const Icon = tab.icon;
                    const active = activeTab === tab.id;

                    return (
                      <button
                        key={tab.id}
                        type="button"
                        onClick={() => setActiveTab(tab.id)}
                        className={`flex min-w-max items-center gap-3 rounded-lg px-4 py-3.5 text-left text-sm transition-all duration-300 lg:w-full ${
                          active
                            ? "bg-[#7A202B] text-white shadow-md"
                            : "text-white/80 hover:bg-white/10 hover:text-white"
                        }`}
                      >
                        <Icon
                          size={19}
                          strokeWidth={1.5}
                          className={
                            active
                              ? "text-[#D4B978]"
                              : "text-white/70"
                          }
                        />

                        <span>{tab.label}</span>

                        {active && (
                          <span className="ml-auto hidden text-[#D4B978] lg:block">
                            ›
                          </span>
                        )}
                      </button>
                    );
                  })}

                </div>
              </div>


              {/* CONTENT */}
              <div className="min-w-0 p-2 sm:p-7 lg:p-9">

                {/* PACKAGE DETAILS */}
                {activeTab === "details" && (
                  <div>

                    <h3 className="font-[family-name:var(--font-cormorant)] text-xl font-semibold text-[#5A2026] sm:text-2xl">
                      Pooja Samagri / Items List
                    </h3>

                    <div className="mt-4 overflow-hidden rounded-lg border border-[#E8DCD0] shadow-sm">

                      <table className="w-full table-fixed border-collapse text-[10px] sm:text-xs md:text-sm">

                        <thead>
                          <tr className="bg-[#7A1524] text-white">
                            <th className="w-[10%] sm:w-[8%] px-1 py-2 sm:px-4 sm:py-3 text-center font-medium">
                              S.No
                            </th>

                            <th className="w-[36%] sm:w-[36%] px-1.5 py-2 sm:px-4 sm:py-3 text-left font-medium">
                              Name (English)
                            </th>

                            <th className="w-[32%] sm:w-[34%] px-1.5 py-2 sm:px-4 sm:py-3 text-left font-medium">
                              Name (Tamil)
                            </th>

                            <th className="w-[22%] sm:w-[22%] px-1.5 py-2 sm:px-4 sm:py-3 text-right sm:text-left font-medium">
                              Quantity
                            </th>
                          </tr>
                        </thead>

                        <tbody>
                          {data.items.map((item, index) => (
                            <tr
                              key={item.sno}
                              className={
                                index % 2 === 0
                                  ? "bg-white"
                                  : "bg-[#FBF5EC]"
                              }
                            >
                              <td className="border-b border-[#EEE5D9] px-1 py-2 sm:px-4 sm:py-3 text-center text-[#7A6E65] align-top">
                                {item.sno}.
                              </td>

                              <td className="border-b border-[#EEE5D9] px-1.5 py-2 sm:px-4 sm:py-3 font-medium text-[#29231F] align-top break-words leading-tight">
                                {item.english}
                              </td>

                              <td className="border-b border-[#EEE5D9] px-1.5 py-2 sm:px-4 sm:py-3 text-[#5A4F46] align-top break-words leading-tight">
                                {item.tamil}
                              </td>

                              <td className="border-b border-[#EEE5D9] px-1.5 py-2 sm:px-4 sm:py-3 text-right sm:text-left font-semibold sm:font-normal text-[#91202B] sm:text-[#4B4540] align-top break-words">
                                {item.quantity}
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>

                    <div className="mt-4 flex gap-2 text-xs text-[#876B50]">
                      <Info
                        size={15}
                        className="mt-0.5 shrink-0 text-[#B08A45]"
                      />

                      <span>
                        The items and quantities may vary slightly based on
                        the priest&apos;s guidance and tradition.
                      </span>
                    </div>

                  </div>
                )}


                {/* PROCESS */}
                {activeTab === "process" && (
                  <div>

                    <h3 className="font-[family-name:var(--font-cormorant)] text-2xl font-semibold text-[#5A2026]">
                      Pooja Process
                    </h3>

                    <div className="mt-6 space-y-4">

                      {data.process.map((step, index) => (
                        <div
                          key={step}
                          className="flex gap-4 rounded-lg border border-[#E9DDC9] bg-white p-4"
                        >
                          <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#F6EAD5] text-sm font-semibold text-[#7A202B]">
                            {index + 1}
                          </div>

                          <div className="flex items-center text-sm leading-6 text-[#4B4540]">
                            {step}
                          </div>
                        </div>
                      ))}

                    </div>

                  </div>
                )}


                {/* BENEFITS */}
                {activeTab === "benefits" && (
                  <div>

                    <h3 className="font-[family-name:var(--font-cormorant)] text-2xl font-semibold text-[#5A2026]">
                      Benefits of the Pooja
                    </h3>

                    <div className="mt-6 grid gap-4 sm:grid-cols-2">

                      {data.benefitsDetails.map((benefit) => (
                        <div
                          key={benefit}
                          className="flex gap-3 rounded-lg border border-[#E9DDC9] bg-white p-5"
                        >
                          <Check
                            size={19}
                            className="mt-0.5 shrink-0 text-[#B08A45]"
                          />

                          <p className="text-sm leading-6 text-[#4B4540]">
                            {benefit}
                          </p>
                        </div>
                      ))}

                    </div>

                  </div>
                )}


                {/* NOTES */}
                {activeTab === "notes" && (
                  <div>

                    <h3 className="font-[family-name:var(--font-cormorant)] text-2xl font-semibold text-[#5A2026]">
                      Important Notes
                    </h3>

                    <div className="mt-6 space-y-4">

                      {data.notes.map((note) => (
                        <div
                          key={note}
                          className="flex gap-3 rounded-lg bg-[#FBF5EC] p-5"
                        >
                          <Info
                            size={19}
                            className="mt-0.5 shrink-0 text-[#B08A45]"
                          />

                          <p className="text-sm leading-6 text-[#4B4540]">
                            {note}
                          </p>
                        </div>
                      ))}

                    </div>

                  </div>
                )}

              </div>
            </div>
          </div>

        </div>
      </section>


      {/* =====================================================
          CTA
      ===================================================== */}
      <section className="px-5 py-8 sm:px-8 lg:px-12">

        <div className="relative mx-auto flex max-w-[1400px] flex-col items-center justify-between gap-7 overflow-hidden rounded-xl border border-[#E8D5B5] bg-[#FFF8EC] px-7 py-8 sm:px-10 lg:flex-row">

          {/* Decorative pattern */}
          <div className="absolute -left-10 -top-10 h-40 w-40 rounded-full border border-[#B08A45]/20" />
          <div className="absolute -bottom-20 -right-10 h-48 w-48 rounded-full border border-[#B08A45]/20" />

          <div className="relative flex items-center gap-5">

            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-[#E5C98E] bg-white">
              <Phone
                size={23}
                strokeWidth={1.5}
                className="text-[#B87916]"
              />
            </div>

            <div>
              <h3 className="font-[family-name:var(--font-cormorant)] text-2xl font-semibold text-[#5A2026]">
                Have Questions?
              </h3>

              <p className="mt-1 text-sm text-[#5B514A]">
                Our team is here to help you!
              </p>
            </div>

          </div>

          <a
            href="/contact"
            className="group relative inline-flex h-14 items-center gap-4 rounded-lg bg-[#7A1524] px-9 text-sm font-semibold text-white transition-all duration-300 hover:bg-[#5A2026]"
          >
            {data.enquireText || "Enquire Now"}

            <ArrowRight
              size={18}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </a>

        </div>
      </section>

    </main>
  );
}


/* ============================================================
   BENEFIT ICON
============================================================ */

function Benefit({
  type,
  title,
}: {
  type: "peace" | "obstacles" | "family" | "success";
  title: string;
}) {
  const icons = {
    peace: Sparkles,
    obstacles: Check,
    family: Gift,
    success: Star,
  };

  const Icon = icons[type];

  return (
    <div className="text-center">

      <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full border border-[#E9D8BA] bg-[#FFF9EF]">
        <Icon
          size={24}
          strokeWidth={1.3}
          className="text-[#C48117]"
        />
      </div>

      <p className="mx-auto mt-3 max-w-[130px] text-xs font-medium leading-5 text-[#29231F]">
        {title}
      </p>

    </div>
  );
}