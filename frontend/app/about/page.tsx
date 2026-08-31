import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Award,
  HeartHandshake,
  Package,
  ShieldCheck,
  Users,
  CheckCircle2,
} from "lucide-react";

// Flourish divider component
function Flourish({ label, light = false }: { label: string; light?: boolean }) {
  return (
    <div className="inline-flex items-center gap-3">
      <span className={`h-px w-6 sm:w-8 ${light ? "bg-[#D4B978]/60" : "bg-[#B08A45]"}`} />
      <span className="text-[10px] text-[#D4B978]">✦</span>
      <span
        className={`text-[10px] sm:text-[11px] font-semibold uppercase tracking-[0.25em] ${
          light ? "text-[#D4B978]" : "text-[#B08A45]"
        }`}
      >
        {label}
      </span>
      <span className="text-[10px] text-[#D4B978]">✦</span>
      <span className={`h-px w-6 sm:w-8 ${light ? "bg-[#D4B978]/60" : "bg-[#B08A45]"}`} />
    </div>
  );
}

export const metadata = {
  title: "About Us | Iyer's Pooja Products",
  description:
    "Honoring Traditions. Serving Devotion. Learn more about Iyer's Pooja Products and our dedication to authentic Vedic rituals and pooja essentials.",
};

export default function AboutPage() {
  return (
    <main className="bg-[#FBF8F2] pt-[90px] text-[#29231F] overflow-hidden">
      {/* =========================================================================
          1. HERO SECTION (Dark Temple Theme with Kalash Setup & Devotional Heading)
      ========================================================================== */}
      <section className="relative w-full bg-[#120807] overflow-hidden border-b border-[#3D1A14]">
        {/* Subtle background glow effect */}
        <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[500px] h-[500px] bg-[#B08A45]/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[#A71930]/10 rounded-full blur-3xl pointer-events-none" />

        <div className="mx-auto max-w-[1600px] px-6 sm:px-10 lg:px-16 py-12 sm:py-16 lg:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Hero Left: Sacred Kalash & Lamps Image */}
            <div className="lg:col-span-6 relative">
              <div className="relative aspect-[4/3] sm:aspect-[16/11] w-full rounded-2xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.6)] border border-[#D4B978]/30 group">
                <Image
                  src="/images/about/hero_kalash.jpg"
                  alt="Sacred Kalash and Brass Lamps Pooja Setup"
                  fill
                  priority
                  className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                {/* Soft ambient gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute inset-0 ring-1 ring-inset ring-white/10 rounded-2xl" />
              </div>
            </div>

            {/* Hero Right: Typography & Breadcrumb */}
            <div className="lg:col-span-6 text-center lg:text-left text-white space-y-5 sm:space-y-6">
              <div className="flex justify-center lg:justify-start">
                <Flourish label="About Us" light />
              </div>

              <h1 className="font-[family-name:var(--font-cormorant)] text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-semibold leading-[1.12] tracking-tight">
                Honoring Traditions.
                <br />
                Serving <span className="text-[#E5B563]">Devotion.</span>
              </h1>

              <p className="max-w-xl mx-auto lg:mx-0 text-sm sm:text-base lg:text-[17px] leading-relaxed text-[#D8C9B8]">
                At Iyyars Pooja List, we are dedicated to preserving the sacred
                traditions of our culture and making your spiritual journey
                simple, authentic, and meaningful.
              </p>

              {/* Breadcrumbs */}
              <div className="pt-2 flex items-center justify-center lg:justify-start gap-2 text-xs sm:text-sm font-medium tracking-wide">
                <Link
                  href="/"
                  className="text-white/70 hover:text-white transition-colors duration-200"
                >
                  Home
                </Link>
                <span className="text-[#D4B978]">&gt;</span>
                <span className="text-[#E5B563] font-semibold">About Us</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          2. OUR STORY SECTION (Rooted in Tradition, Driven by Devotion)
      ========================================================================== */}
      <section className="relative px-6 sm:px-10 lg:px-16 py-20 sm:py-24 lg:py-28 bg-[#FAF6EE]">
        {/* Subtle decorative dot background */}
        <div
          className="absolute inset-0 opacity-[0.035] pointer-events-none"
          style={{
            backgroundImage: `radial-gradient(#5A2026 1px, transparent 1px)`,
            backgroundSize: "24px 24px",
          }}
        />

        <div className="mx-auto max-w-[1500px]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Story Text Left */}
            <div className="lg:col-span-6 space-y-6">
              <Flourish label="Our Story" />

              <h2 className="font-[family-name:var(--font-cormorant)] text-3xl sm:text-4xl lg:text-5xl font-semibold leading-tight text-[#4A141A]">
                Rooted in Tradition,
                <br />
                Driven by Devotion
              </h2>

              {/* Subtle gold line ornament */}
              <div className="flex items-center gap-2 pt-1">
                <span className="h-[1.5px] w-12 bg-[#B08A45]" />
                <span className="text-xs text-[#B08A45]">✦</span>
                <span className="h-[1.5px] w-6 bg-[#B08A45]/40" />
              </div>

              <div className="space-y-4 text-sm sm:text-base leading-7 text-[#63574F]">
                <p>
                  Iyyars Pooja List was founded with a simple purpose – to help
                  families perform poojas with ease, authenticity, and complete
                  trust.
                </p>
                <p>
                  From selecting the right samagri to connecting you with
                  experienced priests, we take care of every detail so you can
                  focus on what truly matters – devotion.
                </p>
              </div>

              <div className="pt-2">
                <Link
                  href="/package"
                  className="group inline-flex items-center gap-3 rounded-lg bg-[#5A1820] px-7 py-3.5 text-xs sm:text-sm font-semibold tracking-wider text-white shadow-md transition-all duration-300 hover:bg-[#3D1016] hover:shadow-lg active:scale-95"
                >
                  <span>Know More About Us</span>
                  <ArrowRight
                    size={16}
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />
                </Link>
              </div>
            </div>

            {/* Story Framed Image Right */}
            <div className="lg:col-span-6 relative flex justify-center">
              {/* Decorative Corner Accents / Frame */}
              <div className="relative p-2.5 sm:p-3.5 rounded-2xl bg-gradient-to-br from-[#E8DEC8] via-[#FAF6EE] to-[#DFCBB0] shadow-[0_15px_40px_rgba(90,32,38,0.12)] border border-[#DFCBB0]">
                {/* Corner ornamental brackets */}
                <div className="absolute top-2 left-2 w-4 h-4 border-t-2 border-l-2 border-[#B08A45]" />
                <div className="absolute top-2 right-2 w-4 h-4 border-t-2 border-r-2 border-[#B08A45]" />
                <div className="absolute bottom-2 left-2 w-4 h-4 border-b-2 border-l-2 border-[#B08A45]" />
                <div className="absolute bottom-2 right-2 w-4 h-4 border-b-2 border-r-2 border-[#B08A45]" />

                <div className="relative w-full max-w-[620px] aspect-[4/3] rounded-xl overflow-hidden group">
                  <Image
                    src="/images/about/story_thali.jpg"
                    alt="Devotee holding sacred brass pooja thali with flowers and diya"
                    fill
                    className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          3. WHY CHOOSE US ("What Makes Us Different")
      ========================================================================== */}
      <section className="px-6 sm:px-10 lg:px-16 py-20 sm:py-24 bg-[#F5EFE4] border-t border-b border-[#E7DBC9]">
        <div className="mx-auto max-w-[1600px]">
          {/* Section Header */}
          <div className="text-center max-w-2xl mx-auto mb-14 sm:mb-16">
            <Flourish label="Why Choose Us" />
            <h2 className="mt-4 font-[family-name:var(--font-cormorant)] text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#4A141A]">
              What Makes Us Different
            </h2>
          </div>

          {/* 5 Feature Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5 sm:gap-6">
            {/* Card 1: Authentic & Pure */}
            <div className="group relative rounded-2xl bg-[#FFFDF9] p-6 sm:p-7 text-center border border-[#E9DFC9] shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_12px_28px_rgba(90,24,32,0.08)] hover:border-[#D4B978]">
              <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-xl bg-[#F8F2E6] text-[#B08A45] border border-[#EADBCA] transition-colors duration-300 group-hover:bg-[#5A1820] group-hover:text-[#F3E5C8]">
                <Award size={28} strokeWidth={1.5} />
              </div>
              <h3 className="font-[family-name:var(--font-cormorant)] text-xl font-bold text-[#4A141A] mb-2">
                Authentic & Pure
              </h3>
              <p className="text-xs sm:text-sm leading-relaxed text-[#73665D]">
                We ensure every item is genuine, pure, and traditionally sourced.
              </p>
            </div>

            {/* Card 2: Trusted Priests */}
            <div className="group relative rounded-2xl bg-[#FFFDF9] p-6 sm:p-7 text-center border border-[#E9DFC9] shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_12px_28px_rgba(90,24,32,0.08)] hover:border-[#D4B978]">
              <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-xl bg-[#F8F2E6] text-[#B08A45] border border-[#EADBCA] transition-colors duration-300 group-hover:bg-[#5A1820] group-hover:text-[#F3E5C8]">
                <HeartHandshake size={28} strokeWidth={1.5} />
              </div>
              <h3 className="font-[family-name:var(--font-cormorant)] text-xl font-bold text-[#4A141A] mb-2">
                Trusted Priests
              </h3>
              <p className="text-xs sm:text-sm leading-relaxed text-[#73665D]">
                Our experienced priests follow Vedic rituals with dedication and devotion.
              </p>
            </div>

            {/* Card 3: Complete Convenience */}
            <div className="group relative rounded-2xl bg-[#FFFDF9] p-6 sm:p-7 text-center border border-[#E9DFC9] shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_12px_28px_rgba(90,24,32,0.08)] hover:border-[#D4B978]">
              <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-xl bg-[#F8F2E6] text-[#B08A45] border border-[#EADBCA] transition-colors duration-300 group-hover:bg-[#5A1820] group-hover:text-[#F3E5C8]">
                <Package size={28} strokeWidth={1.5} />
              </div>
              <h3 className="font-[family-name:var(--font-cormorant)] text-xl font-bold text-[#4A141A] mb-2">
                Complete Convenience
              </h3>
              <p className="text-xs sm:text-sm leading-relaxed text-[#73665D]">
                Everything you need for your pooja, delivered to your doorstep.
              </p>
            </div>

            {/* Card 4: Quality Assured */}
            <div className="group relative rounded-2xl bg-[#FFFDF9] p-6 sm:p-7 text-center border border-[#E9DFC9] shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_12px_28px_rgba(90,24,32,0.08)] hover:border-[#D4B978]">
              <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-xl bg-[#F8F2E6] text-[#B08A45] border border-[#EADBCA] transition-colors duration-300 group-hover:bg-[#5A1820] group-hover:text-[#F3E5C8]">
                <ShieldCheck size={28} strokeWidth={1.5} />
              </div>
              <h3 className="font-[family-name:var(--font-cormorant)] text-xl font-bold text-[#4A141A] mb-2">
                Quality Assured
              </h3>
              <p className="text-xs sm:text-sm leading-relaxed text-[#73665D]">
                We maintain the highest standards of quality and hygiene.
              </p>
            </div>

            {/* Card 5: Customer First */}
            <div className="group relative rounded-2xl bg-[#FFFDF9] p-6 sm:p-7 text-center border border-[#E9DFC9] shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_12px_28px_rgba(90,24,32,0.08)] hover:border-[#D4B978]">
              <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-xl bg-[#F8F2E6] text-[#B08A45] border border-[#EADBCA] transition-colors duration-300 group-hover:bg-[#5A1820] group-hover:text-[#F3E5C8]">
                <Users size={28} strokeWidth={1.5} />
              </div>
              <h3 className="font-[family-name:var(--font-cormorant)] text-xl font-bold text-[#4A141A] mb-2">
                Customer First
              </h3>
              <p className="text-xs sm:text-sm leading-relaxed text-[#73665D]">
                Your satisfaction and peace of mind are our top priorities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          4. OUR VALUES & MISSION (Temple Corridor Visual & Mission Quote Card)
      ========================================================================== */}
      <section className="relative w-full overflow-hidden bg-[#2D0A10] text-white">
        <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[540px]">
          {/* Left Values Column (Rich Maroon Background) */}
          <div className="lg:col-span-5 relative z-10 bg-gradient-to-b lg:bg-gradient-to-r from-[#380D13] via-[#431018] to-[#431018] px-8 sm:px-12 lg:px-14 py-16 sm:py-20 flex flex-col justify-center border-b lg:border-b-0 lg:border-r border-[#6B222C]">
            <div className="space-y-8 max-w-lg">
              <Flourish label="Our Values" light />

              {/* Value 1: Preserve Tradition */}
              <div className="flex items-start gap-4">
                <div className="mt-1 flex-shrink-0 text-[#E5B563]">
                  {/* Temple / Gopuram SVG */}
                  <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 2L9 6h6l-3-4z" />
                    <path d="M7 6h10v3H7z" />
                    <path d="M5 9h14v3H5z" />
                    <path d="M4 12h16v10H4z" />
                    <path d="M10 22v-6h4v6" />
                    <path d="M8 16h1" />
                    <path d="M15 16h1" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white tracking-wide mb-1">
                    Preserve Tradition
                  </h3>
                  <p className="text-xs sm:text-sm text-[#E0D0C5] leading-relaxed">
                    We are committed to preserving and promoting our rich Vedic traditions.
                  </p>
                </div>
              </div>

              {/* Value 2: Spiritual Integrity */}
              <div className="flex items-start gap-4">
                <div className="mt-1 flex-shrink-0 text-[#E5B563]">
                  {/* Lotus SVG */}
                  <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 3c-1.5 3-4 6-8 8 2 2 5 2 8-1 3 3 6 3 8 1-4-2-6.5-5-8-8z" />
                    <path d="M12 21c-2-3-4-7-4-11 1.5 2 3 3 4 3s2.5-1 4-3c0 4-2 8-4 11z" />
                    <path d="M3 15c3 1 6 0 9-3 3 3 6 4 9 3-2 3-5 5-9 5s-7-2-9-5z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white tracking-wide mb-1">
                    Spiritual Integrity
                  </h3>
                  <p className="text-xs sm:text-sm text-[#E0D0C5] leading-relaxed">
                    We conduct our work with honesty, transparency, and devotion.
                  </p>
                </div>
              </div>

              {/* Value 3: Community & Culture */}
              <div className="flex items-start gap-4">
                <div className="mt-1 flex-shrink-0 text-[#E5B563]">
                  {/* Community SVG */}
                  <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                    <circle cx="9" cy="7" r="4" />
                    <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white tracking-wide mb-1">
                    Community & Culture
                  </h3>
                  <p className="text-xs sm:text-sm text-[#E0D0C5] leading-relaxed">
                    We believe in strengthening our cultural roots and supporting our community.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Ancient Stone Temple Backdrop & Floating Quote */}
          <div className="lg:col-span-7 relative min-h-[380px] sm:min-h-[460px] lg:min-h-full flex items-center justify-end p-6 sm:p-10 lg:p-14">
            {/* Temple Backdrop Image */}
            <Image
              src="/images/about/temple_priest.jpg"
              alt="Priest walking inside ancient stone temple corridor"
              fill
              className="object-cover object-center"
              sizes="(max-width: 1024px) 100vw, 60vw"
            />
            {/* Shadow vignette */}
            <div className="absolute inset-0 bg-black/35 backdrop-brightness-90" />

            {/* Mission Quote Card */}
            <div className="relative z-10 w-full max-w-sm sm:max-w-md bg-[#FFFDF8] rounded-2xl p-7 sm:p-9 shadow-[0_20px_50px_rgba(0,0,0,0.4)] border border-[#E7D6BE] text-center space-y-4">
              {/* Gold Quote Mark */}
              <div className="font-serif text-5xl sm:text-6xl text-[#C59B4B] leading-none select-none">
                “
              </div>

              {/* Quote Text */}
              <blockquote className="font-[family-name:var(--font-cormorant)] text-xl sm:text-2xl lg:text-[26px] font-semibold text-[#4A141A] leading-snug">
                Our mission is to make every pooja experience sacred, simple,
                and soulful for every home.
              </blockquote>

              {/* Bottom Flourish */}
              <div className="pt-2 flex items-center justify-center gap-2">
                <span className="h-px w-8 bg-[#C59B4B]/40" />
                <span className="text-xs text-[#C59B4B]">✦</span>
                <span className="h-px w-8 bg-[#C59B4B]/40" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          5. STATS & IMPACT BAR (25K+, 500+, 100+, 99%)
      ========================================================================== */}
      <section className="bg-[#FAF5EC] py-10 sm:py-12 border-b border-[#E7DBC9]">
        <div className="mx-auto max-w-[1500px] px-6 sm:px-10 lg:px-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 lg:gap-12">
            {/* Stat 1: 25K+ */}
            <div className="flex items-center justify-center gap-3.5 sm:gap-4 group">
              <div className="flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-xl bg-[#F0E4D2] text-[#5A1820] border border-[#E0D0BB] transition-transform duration-300 group-hover:scale-110">
                <Users size={24} strokeWidth={1.6} />
              </div>
              <div className="text-left">
                <div className="font-[family-name:var(--font-cormorant)] text-2xl sm:text-3xl lg:text-4xl font-bold text-[#3B0E14] leading-tight">
                  25K+
                </div>
                <div className="text-[11px] sm:text-xs font-medium text-[#7D7066] uppercase tracking-wider">
                  Happy Customers
                </div>
              </div>
            </div>

            {/* Stat 2: 500+ */}
            <div className="flex items-center justify-center gap-3.5 sm:gap-4 group">
              <div className="flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-xl bg-[#F0E4D2] text-[#5A1820] border border-[#E0D0BB] transition-transform duration-300 group-hover:scale-110">
                {/* Namaste / Hands SVG */}
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 2a4 4 0 0 0-4 4c0 3 2 5 2 8v6a2 2 0 0 0 4 0v-6c0-3 2-5 2-8a4 4 0 0 0-4-4z" />
                  <path d="M8 8L5 12v6a2 2 0 0 0 4 0" />
                  <path d="M16 8l3 4v6a2 2 0 0 1-4 0" />
                </svg>
              </div>
              <div className="text-left">
                <div className="font-[family-name:var(--font-cormorant)] text-2xl sm:text-3xl lg:text-4xl font-bold text-[#3B0E14] leading-tight">
                  500+
                </div>
                <div className="text-[11px] sm:text-xs font-medium text-[#7D7066] uppercase tracking-wider">
                  Pooja Packages
                </div>
              </div>
            </div>

            {/* Stat 3: 100+ */}
            <div className="flex items-center justify-center gap-3.5 sm:gap-4 group">
              <div className="flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-xl bg-[#F0E4D2] text-[#5A1820] border border-[#E0D0BB] transition-transform duration-300 group-hover:scale-110">
                <Users size={24} strokeWidth={1.6} />
              </div>
              <div className="text-left">
                <div className="font-[family-name:var(--font-cormorant)] text-2xl sm:text-3xl lg:text-4xl font-bold text-[#3B0E14] leading-tight">
                  100+
                </div>
                <div className="text-[11px] sm:text-xs font-medium text-[#7D7066] uppercase tracking-wider">
                  Experienced Priests
                </div>
              </div>
            </div>

            {/* Stat 4: 99% */}
            <div className="flex items-center justify-center gap-3.5 sm:gap-4 group">
              <div className="flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-xl bg-[#F0E4D2] text-[#5A1820] border border-[#E0D0BB] transition-transform duration-300 group-hover:scale-110">
                <CheckCircle2 size={24} strokeWidth={1.6} />
              </div>
              <div className="text-left">
                <div className="font-[family-name:var(--font-cormorant)] text-2xl sm:text-3xl lg:text-4xl font-bold text-[#3B0E14] leading-tight">
                  99%
                </div>
                <div className="text-[11px] sm:text-xs font-medium text-[#7D7066] uppercase tracking-wider">
                  Customer Satisfaction
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          6. BOTTOM CTA BANNER (Let Us Be a Part of Your Sacred Moments)
      ========================================================================== */}
      <section className="px-6 sm:px-10 lg:px-16 py-14 sm:py-18 bg-[#FBF8F2]">
        <div className="mx-auto max-w-[1500px]">
          <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-[#4A1117] via-[#5C161D] to-[#4A1117] px-6 sm:px-10 lg:px-12 py-8 sm:py-10 text-white shadow-xl border border-[#7A2832]">
            {/* Soft backdrop glow */}
            <div className="absolute left-0 top-0 w-48 h-full bg-[#D4B978]/10 rounded-full blur-2xl pointer-events-none" />

            <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-8">
              {/* Left: Diya with Marigold Image & Headline */}
              <div className="flex flex-col sm:flex-row items-center gap-5 sm:gap-6 text-center sm:text-left">
                <div className="relative h-20 w-20 sm:h-24 sm:w-24 flex-shrink-0 rounded-full overflow-hidden border-2 border-[#D4B978]/50 shadow-md">
                  <Image
                    src="/images/about/cta_diya.jpg"
                    alt="Pooja Diya with marigold flowers"
                    fill
                    className="object-cover"
                  />
                </div>

                <div className="max-w-md">
                  <h3 className="font-[family-name:var(--font-cormorant)] text-2xl sm:text-3xl lg:text-4xl font-semibold leading-tight text-[#FFFDF8]">
                    Let Us Be a Part of
                    <br />
                    Your Sacred Moments
                  </h3>
                </div>
              </div>

              {/* Middle Divider & Subtext */}
              <div className="hidden xl:block h-16 w-px bg-white/20" />

              <div className="max-w-md text-center lg:text-left text-xs sm:text-sm text-[#E6D5C3] leading-relaxed">
                Whether it&apos;s a simple pooja at home or a grand celebration,
                we are here to make it truly memorable and blessed.
              </div>

              {/* Right: Enquire Now Button */}
              <div className="flex-shrink-0">
                <Link
                  href="/contact"
                  className="group inline-flex items-center gap-2 rounded-lg bg-[#FAF2DE] px-7 py-3.5 text-xs sm:text-sm font-semibold tracking-wider text-[#4A1117] shadow-md transition-all duration-300 hover:bg-white hover:shadow-lg active:scale-95"
                >
                  <span>Enquire Now</span>
                  <ArrowRight
                    size={16}
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
