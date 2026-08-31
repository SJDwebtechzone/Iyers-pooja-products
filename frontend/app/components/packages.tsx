"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { ArrowRight, CheckCircle2, Sparkles } from "lucide-react";
import { packagesData as staticPackagesData, PackageItem } from "../data/packagesData";

const API_BASE = "http://localhost:3001";

export default function PackagesSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isManualScroll, setIsManualScroll] = useState(false);
  const [isDesktop, setIsDesktop] = useState(true);
  const [packagesData, setPackagesData] = useState<PackageItem[]>(staticPackagesData);

  // Fetch dashboard-uploaded package card images and override defaults
  useEffect(() => {
    fetch(`${API_BASE}/home-package-images`)
      .then((res) => {
        if (!res.ok) throw new Error();
        return res.json();
      })
      .then((images: { id: string; image_filename: string }[]) => {
        if (!images || images.length === 0) return;
        setPackagesData((prev) =>
          prev.map((pkg) => {
            const match = images.find((img) => img.id === pkg.id);
            return match ? { ...pkg, image: `/images/${match.image_filename}` } : pkg;
          }),
        );
      })
      .catch(() => {
        // keep static fallback images on failure
      });
  }, []);

  // Track window size for clean desktop vs mobile transform switching
  useEffect(() => {
    const handleResize = () => setIsDesktop(window.innerWidth >= 1024);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Auto-cycle through all 5 cards every 3.5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      if (!isManualScroll) {
        setActiveIndex((prev) => (prev + 1) % packagesData.length);
      }
    }, 3500);

    return () => clearInterval(interval);
  }, [isManualScroll]);

  // Track scroll progress inside pinned section (Card 1 -> 5)
  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current || isManualScroll) return;

      const rect = sectionRef.current.getBoundingClientRect();
      const totalScrollable = rect.height - window.innerHeight;

      if (totalScrollable <= 0) return;

      const scrolled = -rect.top;
      const progress = Math.max(0, Math.min(1, scrolled / totalScrollable));

      const newIndex = Math.min(
        packagesData.length - 1,
        Math.floor(progress * packagesData.length)
      );

      setActiveIndex(newIndex);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, [isManualScroll]);

  const selectCard = (index: number) => {
    setActiveIndex(index);
    setIsManualScroll(true);
    setTimeout(() => setIsManualScroll(false), 700);
  };

  const activePackage = packagesData[activeIndex];

  // Precise fan geometry with 65% heavy overlap and requested rotations (-14° to 12°)
  const getFanCardTransform = (index: number) => {
    const isActive = index === activeIndex;

    const rotations = [-14, -7, -2, 5, 12];
    const xOffsets = [-80, -40, 0, 40, 80];
    const yOffsets = [16, 5, 0, 4, 14];

    const rot = rotations[index];
    const x = xOffsets[index];
    const y = yOffsets[index];

    if (isActive) {
      return {
        desktopTransform: `translate3d(${x}px, ${y - 16}px, 0px) rotate(0deg) scale(1.04)`,
        mobileTransform: `translate3d(${x * 0.45}px, ${y * 0.4 - 10}px, 0px) rotate(0deg) scale(1.03)`,
        zIndex: 50,
        opacity: 1,
      };
    }

    const distFromActive = Math.abs(index - activeIndex);
    return {
      desktopTransform: `translate3d(${x}px, ${y}px, 0px) rotate(${rot}deg) scale(0.96)`,
      mobileTransform: `translate3d(${x * 0.45}px, ${y * 0.4}px, 0px) rotate(${rot * 0.75}deg) scale(0.92)`,
      zIndex: 30 - distFromActive,
      opacity: 0.92,
    };
  };

  return (
    <section
      ref={sectionRef}
      className="relative w-full bg-[#FAF6F0] text-[#29231F] border-t border-[#E8DFC9]"
    >
      {/* Pinned Scroll Container (300vh on desktop, natural height on mobile) */}
      <div className="relative w-full lg:min-h-[300vh]">
        {/* Sticky Viewport Frame on desktop, normal flow with clear vertical padding on mobile */}
        <div className="relative flex w-full flex-col justify-center px-6 py-12 sm:px-10 lg:sticky lg:top-[90px] lg:min-h-[calc(100vh-90px)] lg:max-h-[760px] lg:px-16 lg:pt-14 lg:pb-8">

          {/* Section Header */}
          <div className="mx-auto mb-6 max-w-2xl text-center lg:mb-8">
            <div className="mb-2 inline-flex items-center gap-2 rounded-full border border-[#D4B978]/60 bg-[#F4EBD9]/60 px-4 py-1 text-xs font-semibold uppercase tracking-[0.25em] text-[#5A2026]">
              <Sparkles size={13} className="text-[#B08A45]" />
              Pooja Offerings & Packages
            </div>

            <h2 className="font-[family-name:var(--font-cormorant)] text-3xl font-bold tracking-tight text-[#5A2026] sm:text-4xl lg:text-5xl">
              Sacred Packages for Every Occasion
            </h2>

            <p className="mt-1.5 text-xs text-[#6E6359] sm:text-sm">
              Scroll down to view our 5 package cards. All 5 cards remain visible in the hand.
            </p>
          </div>

          {/* Split Layout: Left 45% Card Fan, Right 48% Editorial Panel */}
          <div className="mx-auto flex w-full max-w-7xl flex-col items-center gap-8 lg:flex-row lg:items-center lg:justify-between lg:gap-12">

            {/* LEFT 45%: Compact Fan of 5 Rummy Cards */}
            <div className="relative flex h-[320px] w-full items-center justify-center sm:h-[360px] lg:h-[400px] lg:w-[45%]">
              <div className="relative flex h-full w-full max-w-[420px] items-center justify-center">
                {packagesData.map((pkg, index) => {
                  const isActive = index === activeIndex;
                  const cardState = getFanCardTransform(index);
                  const currentTransform = isDesktop
                    ? cardState.desktopTransform
                    : cardState.mobileTransform;

                  return (
                    <div
                      key={pkg.id}
                      onClick={() => selectCard(index)}
                      style={{
                        transform: currentTransform,
                        zIndex: cardState.zIndex,
                        opacity: cardState.opacity,
                      }}
                      className={`absolute top-1/2 left-1/2 -mt-[145px] -ml-[95px] h-[290px] w-[190px] cursor-pointer rounded-2xl border transition-all duration-500 ease-out sm:-mt-[170px] sm:-ml-[115px] sm:h-[340px] sm:w-[230px] lg:-mt-[185px] lg:-ml-[125px] lg:h-[370px] lg:w-[250px] ${
                        isActive
                          ? "border-[#B08A45] bg-[#FFFDF9] shadow-[0_16px_36px_rgba(90,32,38,0.25)] ring-2 ring-[#B08A45]"
                          : "border-[#E1D5C2] bg-[#FAF3E7] shadow-md hover:border-[#B08A45]/70"
                      }`}
                    >
                      {/* Card Content Interior */}
                      <div className="relative flex h-full w-full flex-col overflow-hidden rounded-2xl p-3.5">

                        {/* Top Card Header Tag */}
                        <div className="mb-2 flex items-center justify-between">
                          <span
                            className={`rounded-full px-2.5 py-0.5 text-[10px] font-bold tracking-wider ${
                              isActive
                                ? "bg-[#5A2026] text-[#E5C77A]"
                                : "bg-[#EDE4D2] text-[#5A2026]"
                            }`}
                          >
                            0{index + 1}
                          </span>

                          <span className="text-[10px] font-semibold text-[#7A6E63] truncate max-w-[110px]">
                            {pkg.category}
                          </span>
                        </div>

                        {/* Image Frame */}
                        <div className="relative flex-1 overflow-hidden rounded-xl border border-[#E6DBC6] bg-[#EAE0CD]">
                          <Image
                            src={pkg.image}
                            alt={pkg.title}
                            fill
                            sizes="(max-width: 768px) 190px, 250px"
                            className={`object-cover transition-transform duration-700 ${
                              isActive ? "scale-105" : "scale-100 grayscale-[10%]"
                            }`}
                          />

                          {/* Image Gradient overlay */}
                          <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />

                          {/* Image Bottom Text */}
                          <div className="absolute bottom-2.5 inset-x-2.5 text-white">
                            <p className="text-[8px] font-semibold uppercase tracking-widest text-[#E5C77A]">
                              {pkg.subtitle}
                            </p>
                            <h3 className="font-[family-name:var(--font-cormorant)] text-sm font-bold sm:text-base leading-tight">
                              {pkg.title}
                            </h3>
                          </div>
                        </div>

                        {/* Card Footer Indicator */}
                        <div className="mt-2.5 flex items-center justify-between text-[10px] font-bold">
                          <span className={isActive ? "text-[#5A2026]" : "text-[#7A6E63]"}>
                            {isActive ? "✦ Active Card" : "Card 0" + (index + 1)}
                          </span>

                          <span className="text-[#B08A45]">
                            {isActive ? "Viewing" : "Click"}
                          </span>
                        </div>

                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* RIGHT 48%: Dedicated Editorial Content Panel */}
            <div className="flex w-full flex-col justify-center lg:w-[48%]">
              <div
                key={activePackage.id}
                className="animate-in fade-in slide-in-from-right-3 duration-400 rounded-3xl border border-[#E8DFC9] bg-[#FFFDF9] p-6 shadow-xl sm:p-8"
              >
                {/* Category & Badge */}
                <div className="mb-3 flex flex-wrap items-center gap-2.5">
                  <span className="rounded-full bg-[#5A2026]/10 px-3.5 py-0.5 text-xs font-bold uppercase tracking-wider text-[#5A2026]">
                    {activePackage.category}
                  </span>

                  <span className="rounded-full border border-[#B08A45]/40 bg-[#F8F4EC] px-3.5 py-0.5 text-xs font-semibold text-[#B08A45]">
                    {activePackage.badge}
                  </span>
                </div>

                {/* Package Title */}
                <h3 className="font-[family-name:var(--font-cormorant)] text-3xl font-bold text-[#5A2026] sm:text-4xl lg:text-5xl">
                  {activePackage.title}
                </h3>

                {/* Subtitle */}
                <p className="mt-1 text-xs font-semibold tracking-wide text-[#B08A45] sm:text-sm">
                  {activePackage.subtitle}
                </p>

                {/* Description */}
                <p className="mt-3 text-xs leading-relaxed text-[#544A42] sm:text-sm">
                  {activePackage.description}
                </p>

                {/* Divider Line */}
                <div className="my-5 h-px w-full bg-[#E9DDC9]" />

                {/* Features Checklist */}
                <div>
                  <h4 className="mb-3 text-[11px] font-bold uppercase tracking-[0.2em] text-[#7A6E63]">
                    Included Package Offerings:
                  </h4>

                  <ul className="grid grid-cols-1 gap-2.5 sm:grid-cols-2">
                    {activePackage.features.map((feature, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-2 text-xs font-medium text-[#29231F] sm:text-sm"
                      >
                        <CheckCircle2
                          size={16}
                          className="mt-0.5 shrink-0 text-[#A71930]"
                        />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Action CTA Buttons */}
                <div className="mt-7 flex flex-wrap items-center gap-3.5 pt-1">
                  <a
                    href={activePackage.href}
                    className="inline-flex h-11 items-center justify-center gap-2 rounded-lg bg-[#A71930] px-6 text-xs font-semibold tracking-[0.1em] text-white shadow-md transition-all duration-300 hover:bg-[#7F1515] hover:scale-105"
                  >
                    <span>EXPLORE THIS PACKAGE</span>
                    <ArrowRight size={15} />
                  </a>

                  <a
                    href="/contact"
                    className="inline-flex h-11 items-center justify-center rounded-lg border border-[#B08A45] px-5 text-xs font-semibold tracking-[0.1em] text-[#5A2026] transition-all duration-300 hover:bg-[#5A2026] hover:text-white"
                  >
                    CUSTOMIZE ORDER
                  </a>
                </div>

              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
