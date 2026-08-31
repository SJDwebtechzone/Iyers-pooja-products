"use client";

import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { useEffect, useState } from "react";

type SamagriItem = {
  id: number;
  sno: number;
  name_english: string;
  name_tamil: string | null;
  quantity: string | null;
};

const API_BASE = "http://localhost:3000";

const processSteps = [
  {
    step: "01",
    title: "Vigneshwara Pooja & Sankalpam",
    desc: "Invocation of Lord Ganesha seeking permission and chanting the organization name, leaders' names, and corporate vision for divine success.",
  },
  {
    step: "02",
    title: "Punyahavachanam & Kalasha Sthapana",
    desc: "Purification of the premises with holy water, sacred herbs, and invoking celestial energies into the Kalash.",
  },
  {
    step: "03",
    title: "Agni Prathishta & Ganapathi Moola Mantra",
    desc: "Kindling the sacred homam fire with dry coconut halves, pure cow ghee, and chanting 108 Ganapathi Atharvashirsha mantras.",
  },
  {
    step: "04",
    title: "Maha Poornahuthi & Raksha Tilak",
    desc: "Offering auspicious silk vastram, dry fruits, and gold coin into the fire followed by applying sacred homa vibhuti and blessings for employees.",
  },
];

const benefits = [
  {
    title: "Removes Business Hurdles",
    desc: "Neutralizes unforeseen blockages in contracts, funding, team harmony, and client deliveries.",
  },
  {
    title: "Positive Office Energy",
    desc: "Purifies workplace atmosphere and replaces stagnation with high productivity and enthusiasm.",
  },
  {
    title: "Financial Stability & Growth",
    desc: "Invokes continuous financial turnover, profitability, and expansion across ventures.",
  },
  {
    title: "Leadership Clarity & Vision",
    desc: "Bestows mental sharpness and strategic foresight upon corporate leaders and team heads.",
  },
];

const notes = [
  "Homam can be arranged during auspicious Brahma Muhurtham or morning corporate hours.",
  "Eco-friendly homa kunda with smoke mitigation dravyas suitable for air-conditioned and indoor offices.",
  "Custom sankalpam done for all founding members, directors, and department heads.",
];

export default function GanapathyHomamPage() {
  const [samagriItems, setSamagriItems] = useState<SamagriItem[]>([]);
  const [loadingItems, setLoadingItems] = useState(true);

  useEffect(() => {
    fetch(`${API_BASE}/consumer-packages/ganapathi-homam`)
      .then((res) => {
        if (!res.ok) {
          throw new Error("Failed to fetch samagri items");
        }

        return res.json();
      })
      .then((data) => {
        setSamagriItems(data);
      })
      .catch(() => {
        setSamagriItems([]);
      })
      .finally(() => {
        setLoadingItems(false);
      });
  }, []);

  return (
    <main className="min-h-screen bg-[#FAF6EE] text-[#29231F] font-sans antialiased">

      {/* =========================================================
          HERO BANNER
      ========================================================= */}
      <section className="relative min-h-screen w-full overflow-hidden bg-[#2c1c08]">

        {/* =====================================================
            GANESHA HERO IMAGE
        ====================================================== */}
        <Image
          src="/images/diwali.jpg"
          alt="Lord Ganesha"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />

        {/* Dark overlay on right side */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#3a250d]/20 to-[#24190b]/90" />

        {/* Right-side readability overlay */}
        <div className="absolute inset-y-0 right-0 w-[62%] bg-gradient-to-l from-[#21160a]/90 via-[#3a270f]/65 to-transparent" />

        {/* Bottom shadow */}
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black/45 to-transparent" />

        {/* Top maroon strip */}
        <div className="absolute top-0 left-0 right-0 z-30 h-[28px] bg-[#42151B]" />

        {/* Gold line below strip */}
        <div className="absolute top-[28px] left-0 right-0 z-30 h-[2px] bg-[#C49A4A]" />

        {/* =====================================================
            HERO CONTENT
        ====================================================== */}
        <div className="relative z-10 min-h-screen flex items-center">

          <div className="w-full max-w-[1600px] mx-auto px-6 sm:px-10 lg:px-16 xl:px-24">

            {/* Content on right */}
            <div className="ml-auto w-full md:w-[55%] lg:w-[52%] xl:w-[50%] pt-12 lg:pt-20">

              {/* Small heading */}
              <div className="flex items-center gap-4 mb-7">

                <span className="text-[#D6B15F] text-lg">
                  ✦
                </span>

                <span className="text-[#D6B15F] uppercase tracking-[0.4em] text-xs sm:text-sm font-medium">
                  Pooja Package
                </span>

                <span className="text-[#D6B15F] text-lg">
                  ✦
                </span>

              </div>

              {/* Main title */}
              <h1
                className="
                  font-[family-name:var(--font-cormorant)]
                  text-white
                  text-5xl
                  sm:text-6xl
                  md:text-7xl
                  lg:text-[76px]
                  xl:text-[88px]
                  leading-[0.92]
                  font-medium
                  tracking-tight
                "
              >
                Ganapathy
                <br />
                Homam
              </h1>

              {/* Decorative divider */}
              <div className="flex items-center gap-4 mt-9 mb-9">

                <div className="w-20 h-px bg-[#C8A45D]" />

                <span className="text-[#C8A45D] text-lg">
                  ✧
                </span>

                <div className="w-20 h-px bg-[#C8A45D]" />

              </div>

              {/* Description */}
              <p className="max-w-[650px] text-white/90 text-base sm:text-lg leading-8">
                A sacred fire ceremony invoking Lord Ganesha to remove
                obstacles and bless your ventures with prosperity, success
                and divine protection.
              </p>

              {/* Breadcrumb */}
              <div className="mt-11 pt-6 border-t border-white/25">

                <div className="flex flex-wrap items-center gap-2 sm:gap-3 text-sm">

                  <Link
                    href="/"
                    className="text-white/85 hover:text-[#D6B15F] transition-colors"
                  >
                    Home
                  </Link>

                  <ChevronRight
                    size={15}
                    className="text-[#C8A45D]"
                  />

                  <Link
                    href="/package"
                    className="text-white/85 hover:text-[#D6B15F] transition-colors"
                  >
                    Pooja Packages
                  </Link>

                  <ChevronRight
                    size={15}
                    className="text-[#C8A45D]"
                  />

                  <span className="text-[#D6B15F]">
                    Ganapathy Homam
                  </span>

                </div>

              </div>

            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          PACKAGE DETAILS
      ========================================================= */}
      <section className="py-12 lg:py-16 max-w-[1400px] mx-auto px-4 lg:px-12">

        <h2 className="font-[family-name:var(--font-cormorant)] text-3xl lg:text-4xl font-semibold text-[#42151B] mb-6">
          Package Details
        </h2>

        {/* Samagri Table */}
        <div className="overflow-x-auto mb-10">

          <table className="w-full table-auto border border-[#E9DDC9]">

            <thead className="bg-[#F5EDE0]">
              <tr>
                <th className="p-3 text-left">#</th>
                <th className="p-3 text-left">Item (EN)</th>
                <th className="p-3 text-left">Item (TA)</th>
                <th className="p-3 text-left">Qty</th>
              </tr>
            </thead>

            <tbody>
              {loadingItems ? (
                <tr>
                  <td
                    colSpan={4}
                    className="p-3 text-center text-[#55463E]"
                  >
                    Loading...
                  </td>
                </tr>
              ) : (
                samagriItems.map((it) => (
                  <tr
                    key={it.id}
                    className="border-t border-[#E9DDC9] hover:bg-[#FBF7F0]"
                  >
                    <td className="p-3">
                      {it.sno}
                    </td>

                    <td className="p-3">
                      {it.name_english}
                    </td>

                    <td className="p-3">
                      {it.name_tamil}
                    </td>

                    <td className="p-3">
                      {it.quantity}
                    </td>
                  </tr>
                ))
              )}
            </tbody>

          </table>

        </div>

        {/* =====================================================
            POOJA PROCESS
        ====================================================== */}
        <h3 className="font-[family-name:var(--font-cormorant)] text-2xl lg:text-3xl font-medium text-[#42151B] mb-5">
          Pooja Process
        </h3>

        <ol className="list-decimal list-inside space-y-3 text-[#55463E] leading-7">

          {processSteps.map((p) => (
            <li key={p.step}>
              <strong className="text-[#42151B]">
                {p.title}:
              </strong>{" "}
              {p.desc}
            </li>
          ))}

        </ol>

        {/* =====================================================
            BENEFITS
        ====================================================== */}
        <h3 className="font-[family-name:var(--font-cormorant)] text-2xl lg:text-3xl font-medium text-[#42151B] mt-12 mb-5">
          Benefits
        </h3>

        <ul className="list-disc list-inside space-y-3 text-[#55463E] leading-7">

          {benefits.map((b, i) => (
            <li key={i}>
              <strong className="text-[#42151B]">
                {b.title}:
              </strong>{" "}
              {b.desc}
            </li>
          ))}

        </ul>

        {/* =====================================================
            IMPORTANT NOTES
        ====================================================== */}
        <h3 className="font-[family-name:var(--font-cormorant)] text-2xl lg:text-3xl font-medium text-[#42151B] mt-12 mb-5">
          Important Notes
        </h3>

        <ul className="list-disc list-inside space-y-3 text-[#55463E] leading-7">

          {notes.map((n, i) => (
            <li key={i}>
              {n}
            </li>
          ))}

        </ul>

      </section>

    </main>
  );
}
```
