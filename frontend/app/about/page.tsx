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
  Globe2,
  Sparkles,
  Heart,
  Landmark,
  HandHeart,
} from "lucide-react";

// Flourish divider component
function Flourish({
  label,
  light = false,
}: {
  label: string;
  light?: boolean;
}) {
  return (
    <div className="inline-flex items-center gap-3">
      <span
        className={`h-px w-6 sm:w-8 ${
          light ? "bg-[#D4B978]/60" : "bg-[#B08A45]"
        }`}
      />

      <span className="text-[10px] text-[#D4B978]">✦</span>

      <span
        className={`text-[10px] sm:text-[11px] font-semibold uppercase tracking-[0.25em] ${
          light ? "text-[#D4B978]" : "text-[#B08A45]"
        }`}
      >
        {label}
      </span>

      <span className="text-[10px] text-[#D4B978]">✦</span>

      <span
        className={`h-px w-6 sm:w-8 ${
          light ? "bg-[#D4B978]/60" : "bg-[#B08A45]"
        }`}
      />
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
      {/* ============================================================
          ORBIT ANIMATION STYLES
      ============================================================ */}

      <style>{`
        @keyframes orbitClockwise {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        @keyframes orbitCounterClockwise {
          from {
            transform: rotate(360deg);
          }
          to {
            transform: rotate(0deg);
          }
        }

        .orbit-slow {
          animation: orbitClockwise 18s linear infinite;
        }

        .orbit-medium {
          animation: orbitCounterClockwise 14s linear infinite;
        }

        .orbit-fast {
          animation: orbitClockwise 10s linear infinite;
        }

        .orbit-reverse-slow {
          animation: orbitCounterClockwise 22s linear infinite;
        }

        .mission-orbit-one {
          animation: orbitClockwise 24s linear infinite;
        }

        .mission-orbit-two {
          animation: orbitCounterClockwise 30s linear infinite;
        }

        .mission-orbit-three {
          animation: orbitClockwise 36s linear infinite;
        }

        .mission-orbit-fast {
          animation: orbitClockwise 15s linear infinite;
        }

        .mission-orbit-reverse {
          animation: orbitCounterClockwise 19s linear infinite;
        }

        .orbit-marker {
          position: absolute;
          left: 50%;
          top: 0;
          transform: translate(-50%, -50%);
        }

        .mission-orbit-marker {
          position: absolute;
          left: 50%;
          top: 0;
          transform: translate(-50%, -50%);
        }

        .mission-orbit-content {
          animation: orbitCounterClockwise 24s linear infinite;
        }

        .mission-orbit-content-two {
          animation: orbitClockwise 30s linear infinite;
        }

        .mission-orbit-content-three {
          animation: orbitCounterClockwise 36s linear infinite;
        }

        @media (prefers-reduced-motion: reduce) {
          .orbit-slow,
          .orbit-medium,
          .orbit-fast,
          .orbit-reverse-slow,
          .mission-orbit-one,
          .mission-orbit-two,
          .mission-orbit-three,
          .mission-orbit-fast,
          .mission-orbit-reverse,
          .mission-orbit-content,
          .mission-orbit-content-two,
          .mission-orbit-content-three {
            animation: none !important;
          }
        }
      `}</style>

      {/* ============================================================
          1. HERO SECTION
      ============================================================ */}
       

      <section className="relative w-full min-h-[520px] sm:min-h-[600px] lg:min-h-[680px] overflow-hidden border-b border-[#3D1A14]">
        {/* Full-bleed background image */}
        <div className="absolute inset-0">
          <Image
            src="/images/about/hero_kalash.jpg"
            alt="Sacred Kalash and Brass Lamps Pooja Setup"
            fill
            priority
            className="object-cover object-center"
            sizes="100vw"
          />

          {/* Gradient overlays so text stays readable without covering the whole image */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#120807] via-[#120807]/80 sm:via-[#120807]/70 to-transparent" />

          <div className="absolute inset-0 bg-gradient-to-t from-[#120807]/70 via-transparent to-[#120807]/30" />
        </div>

        {/* Decorative glows */}
        <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[500px] h-[500px] bg-[#B08A45]/10 rounded-full blur-3xl pointer-events-none" />

        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[#A71930]/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 mx-auto max-w-[1600px] px-6 sm:px-10 lg:px-16 py-24 sm:py-28 lg:py-36 flex items-center min-h-[520px] sm:min-h-[600px] lg:min-h-[680px]">
          <div className="w-full text-center lg:text-right lg:ml-auto lg:max-w-2xl text-white space-y-5 sm:space-y-6">
            <div className="flex justify-center lg:justify-end">
              <Flourish label="About Us" light />
            </div>

            <h1 className="font-[family-name:var(--font-cormorant)] text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-semibold leading-[1.12] tracking-tight">
              Honoring Traditions.
              <br />
              Serving <span className="text-[#E5B563]">Devotion.</span>
            </h1>

            <p className="max-w-xl mx-auto lg:ml-auto lg:mr-0 text-sm sm:text-base lg:text-[17px] leading-relaxed text-[#D8C9B8]">
              At Iyyars Pooja List, we are dedicated to preserving the sacred
              traditions of our culture and making your spiritual journey
              simple, authentic, and meaningful.
            </p>
          </div>
        </div>
      </section>

      {/* ============================================================
          2. OUR STORY
      ============================================================ */}

      <section className="relative px-6 sm:px-10 lg:px-16 py-20 sm:py-24 lg:py-28 bg-[#FAF6EE]">
        <div
          className="absolute inset-0 opacity-[0.035] pointer-events-none"
          style={{
            backgroundImage: `radial-gradient(#5A2026 1px, transparent 1px)`,
            backgroundSize: "24px 24px",
          }}
        />

        <div className="mx-auto max-w-[1500px]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <div className="lg:col-span-6 space-y-6">
              <Flourish label="Our Story" />

              <h2 className="font-[family-name:var(--font-cormorant)] text-3xl sm:text-4xl lg:text-5xl font-semibold leading-tight text-[#4A141A]">
                Rooted in Tradition,
                <br />
                Driven by Devotion
              </h2>

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

            <div className="lg:col-span-6 relative flex justify-center">
              <div className="relative p-2.5 sm:p-3.5 rounded-2xl bg-gradient-to-br from-[#E8DEC8] via-[#FAF6EE] to-[#DFCBB0] shadow-[0_15px_40px_rgba(90,32,38,0.12)] border border-[#DFCBB0]">
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

      {/* ============================================================
          3. WHY CHOOSE US
      ============================================================ */}

      <section className="px-6 sm:px-10 lg:px-16 py-20 sm:py-24 bg-[#F5EFE4] border-t border-b border-[#E7DBC9]">
        <div className="mx-auto max-w-[1600px]">
          <div className="text-center max-w-2xl mx-auto mb-14 sm:mb-16">
            <Flourish label="Why Choose Us" />

            <h2 className="mt-4 font-[family-name:var(--font-cormorant)] text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#4A141A]">
              What Makes Us Different
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5 sm:gap-6">
            {[
              {
                icon: <Award size={28} strokeWidth={1.5} />,
                title: "Authentic & Pure",
                text: "We ensure every item is genuine, pure, and traditionally sourced.",
              },
              {
                icon: <HeartHandshake size={28} strokeWidth={1.5} />,
                title: "Trusted Priests",
                text: "Our experienced priests follow Vedic rituals with dedication and devotion.",
              },
              {
                icon: <Package size={28} strokeWidth={1.5} />,
                title: "Complete Convenience",
                text: "Everything you need for your pooja, delivered to your doorstep.",
              },
              {
                icon: <ShieldCheck size={28} strokeWidth={1.5} />,
                title: "Quality Assured",
                text: "We maintain the highest standards of quality and hygiene.",
              },
              {
                icon: <Users size={28} strokeWidth={1.5} />,
                title: "Customer First",
                text: "Your satisfaction and peace of mind are our top priorities.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="group relative rounded-2xl bg-[#FFFDF9] p-6 sm:p-7 text-center border border-[#E9DFC9] shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_12px_28px_rgba(90,24,32,0.08)] hover:border-[#D4B978]"
              >
                <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-xl bg-[#F8F2E6] text-[#B08A45] border border-[#EADBCA] transition-colors duration-300 group-hover:bg-[#5A1820] group-hover:text-[#F3E5C8]">
                  {item.icon}
                </div>

                <h3 className="font-[family-name:var(--font-cormorant)] text-xl font-bold text-[#4A141A] mb-2">
                  {item.title}
                </h3>

                <p className="text-xs sm:text-sm leading-relaxed text-[#73665D]">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================
          4. OUR VISION
      ============================================================ */}

      <section className="relative overflow-hidden bg-[#FBF8F2] px-6 sm:px-10 lg:px-16 py-20 sm:py-24 lg:py-28 border-t border-[#E7DBC9]">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-32 -left-32 h-[420px] w-[420px] rounded-full bg-[#D4B978]/10 blur-3xl" />
          <div className="absolute bottom-0 right-0 h-[350px] w-[350px] rounded-full bg-[#5A1820]/5 blur-3xl" />
        </div>

        <div className="relative z-10 mx-auto max-w-[1500px]">
          <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-16">
            <Flourish label="Our Vision" />

            <h2 className="mt-5 font-[family-name:var(--font-cormorant)] text-4xl sm:text-5xl lg:text-6xl font-semibold leading-[1.08] text-[#4A141A]">
              Reaching <span className="text-[#B08A45]">360°</span>
              <br />
              Around the Globe
            </h2>

            <p className="mt-5 text-sm sm:text-base lg:text-[17px] leading-relaxed text-[#73665D]">
              Carrying the essence of sacred traditions beyond boundaries and
              making authentic pooja experiences accessible to devotees
              everywhere.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative w-full max-w-[500px] aspect-square flex items-center justify-center">
                <div className="absolute inset-[3%] rounded-full border border-[#D4B978]/30" />
                <div className="absolute inset-[10%] rounded-full border border-[#D4B978]/40" />
                <div className="absolute inset-[18%] rounded-full border border-[#B08A45]/20 border-dashed" />

                <div className="absolute inset-[3%] rounded-full orbit-slow pointer-events-none">
                  <span className="orbit-marker h-3 w-3 rounded-full bg-[#B08A45] shadow-[0_0_15px_rgba(176,138,69,0.45)]" />
                </div>

                <div className="absolute inset-[10%] rounded-full orbit-medium pointer-events-none">
                  <span className="orbit-marker text-[#B08A45] text-lg drop-shadow-sm">
                    ✦
                  </span>
                </div>

                <div className="absolute inset-[18%] rounded-full orbit-reverse-slow pointer-events-none">
                  <span className="orbit-marker h-2.5 w-2.5 rounded-full bg-[#5A1820]/70 shadow-[0_0_12px_rgba(90,24,32,0.3)]" />
                </div>

                <div className="absolute inset-[18%] rounded-full orbit-fast pointer-events-none">
                  <span className="orbit-marker text-[#B08A45] text-sm">✦</span>
                </div>

                <div className="absolute inset-[20%] rounded-full bg-[#D4B978]/15 blur-3xl" />

                <div className="relative z-10 flex h-48 w-48 sm:h-56 sm:w-56 lg:h-64 lg:w-64 items-center justify-center rounded-full bg-gradient-to-br from-[#5A1820] via-[#7A2630] to-[#3D1016] shadow-[0_25px_60px_rgba(74,20,26,0.28)] border-[8px] border-[#F4EBDD]">
                  <div className="absolute inset-3 rounded-full border border-[#D4B978]/40" />

                  <div className="flex flex-col items-center">
                    <span className="font-serif text-7xl sm:text-8xl lg:text-9xl text-[#F5DFA8] leading-none">
                      ॐ
                    </span>

                    <span className="mt-2 text-[9px] sm:text-[10px] uppercase tracking-[0.3em] text-[#D4B978]">
                      Sacred Tradition
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7">
              <div className="max-w-2xl">
                <div className="flex items-center gap-3 mb-6">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#F4EBDD] border border-[#E2D0AF] text-[#B08A45]">
                    <Globe2 size={24} strokeWidth={1.5} />
                  </div>

                  <div>
                    <p className="text-[10px] sm:text-xs font-semibold uppercase tracking-[0.22em] text-[#B08A45]">
                      Our Purpose
                    </p>

                    <h3 className="font-[family-name:var(--font-cormorant)] text-2xl sm:text-3xl font-semibold text-[#4A141A]">
                      Devotion Without Boundaries
                    </h3>
                  </div>
                </div>

                <div className="space-y-5 text-sm sm:text-base lg:text-[17px] leading-8 text-[#63574F]">
                  <p>
                    Our vision is to become a trusted bridge between timeless
                    traditions and modern-day devotees, ensuring that the sacred
                    practices of our culture remain accessible across every
                    home, city, and country.
                  </p>

                  <p>
                    We aspire to make authentic pooja products, knowledgeable
                    guidance, and meaningful spiritual experiences available to
                    everyone—while preserving the purity and essence of every
                    tradition we serve.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          5. OUR MISSION
      ============================================================ */}

     {/* ========================= OUR MISSION ========================= */}
<section className="relative overflow-hidden bg-[#F5EFE4] px-6 sm:px-10 lg:px-16 py-20 sm:py-24 lg:py-28 border-t border-[#E7DBC9]">

  {/* Background Pattern */}
  <div
    className="absolute inset-0 opacity-[0.035] pointer-events-none"
    style={{
      backgroundImage:
        "radial-gradient(#5A2026 1px, transparent 1px)",
      backgroundSize: "24px 24px",
    }}
  />

  {/* Decorative Glow */}
  <div className="absolute top-[-120px] right-[-120px] h-[420px] w-[420px] rounded-full bg-[#D4B978]/10 blur-3xl pointer-events-none" />

  <div className="absolute bottom-[-150px] left-[-150px] h-[420px] w-[420px] rounded-full bg-[#5A1820]/5 blur-3xl pointer-events-none" />

  <div className="relative z-10 mx-auto max-w-[1500px]">

    {/* ================= HEADER ================= */}

    <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-20">

      <Flourish label="Our Mission" />

      <h2 className="mt-5 font-[family-name:var(--font-cormorant)] text-4xl sm:text-5xl lg:text-6xl font-semibold leading-[1.08] text-[#4A141A]">
        Preserving What Is Sacred,
        <br />

        <span className="text-[#B08A45]">
          Serving With Purpose
        </span>
      </h2>

      <p className="mt-5 text-sm sm:text-base lg:text-[17px] leading-relaxed text-[#73665D]">
        Making sacred traditions easier to experience while protecting
        the authenticity and meaning behind every ritual.
      </p>

    </div>


    {/* ================= MAIN CONTENT ================= */}

    <div className="grid grid-cols-1 lg:grid-cols-12 gap-14 lg:gap-20 items-center">


      {/* =====================================================
          LEFT — ANIMATED MISSION VISUAL
      ====================================================== */}

      <div className="lg:col-span-5 flex justify-center">

        <div className="relative w-full max-w-[540px] aspect-square flex items-center justify-center">


          {/* ================= STATIC CIRCLES ================= */}

          <div className="absolute inset-[2%] rounded-full border border-[#D4B978]/30" />

          <div className="absolute inset-[10%] rounded-full border border-[#D4B978]/40" />

          <div className="absolute inset-[19%] rounded-full border border-dashed border-[#B08A45]/30" />


          {/* Glow */}

          <div className="absolute inset-[25%] rounded-full bg-[#D4B978]/20 blur-3xl" />


          {/* =====================================================
              PRESERVE ORBIT
          ====================================================== */}

          <div className="absolute inset-[2%] rounded-full orbit-slow pointer-events-none">

            {/* TOP POSITION */}

            <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2">

              {/* COUNTER ROTATION KEEPS TEXT STRAIGHT */}

              <div
                className="flex flex-col items-center orbit-reverse-slow"
                style={{
                  animationDuration: "18s",
                }}
              >

                <div className="h-3 w-3 rounded-full bg-[#B08A45] shadow-[0_0_14px_rgba(176,138,69,0.45)]" />

                <div className="mt-2 rounded-full bg-[#FFFDF9] border border-[#E2D0AF] px-4 py-1.5 shadow-md whitespace-nowrap">

                  <span className="text-[10px] sm:text-xs font-semibold uppercase tracking-[0.18em] text-[#7A5A2C]">
                    Preserve
                  </span>

                </div>

              </div>

            </div>

          </div>


          {/* =====================================================
              SIMPLIFY ORBIT
          ====================================================== */}

          <div className="absolute inset-[10%] rounded-full orbit-medium pointer-events-none">

            {/* POSITION AT LOWER LEFT */}

            <div className="absolute left-[5%] bottom-[8%]">

              {/* COUNTER ROTATE */}

              <div
                className="flex flex-col items-center orbit-slow"
                style={{
                  animationDuration: "14s",
                }}
              >

                <span className="text-lg text-[#B08A45] drop-shadow-sm">
                  ✦
                </span>

                <div className="mt-2 rounded-full bg-[#FFFDF9] border border-[#E2D0AF] px-4 py-1.5 shadow-md whitespace-nowrap">

                  <span className="text-[10px] sm:text-xs font-semibold uppercase tracking-[0.18em] text-[#7A5A2C]">
                    Simplify
                  </span>

                </div>

              </div>

            </div>

          </div>


          {/* =====================================================
              SERVE ORBIT
          ====================================================== */}

          <div className="absolute inset-[19%] rounded-full orbit-reverse-slow pointer-events-none">

            {/* POSITION AT LOWER RIGHT */}

            <div className="absolute right-[0%] bottom-[2%]">

              {/* COUNTER ROTATE */}

              <div
                className="flex flex-col items-center orbit-slow"
                style={{
                  animationDuration: "22s",
                }}
              >

                <span className="text-lg text-[#5A1820] drop-shadow-sm">
                  ✦
                </span>

                <div className="mt-2 rounded-full bg-[#FFFDF9] border border-[#E2D0AF] px-4 py-1.5 shadow-md whitespace-nowrap">

                  <span className="text-[10px] sm:text-xs font-semibold uppercase tracking-[0.18em] text-[#7A5A2C]">
                    Serve
                  </span>

                </div>

              </div>

            </div>

          </div>


          {/* =====================================================
              MOVING DECORATIVE DOTS
          ====================================================== */}


          {/* Gold Dot */}

          <div className="absolute inset-[2%] rounded-full orbit-medium pointer-events-none">

            <span className="orbit-marker h-3 w-3 rounded-full bg-[#B08A45] shadow-[0_0_15px_rgba(176,138,69,0.45)]" />

          </div>


          {/* Maroon Dot */}

          <div className="absolute inset-[10%] rounded-full orbit-slow pointer-events-none">

            <span className="orbit-marker h-2.5 w-2.5 rounded-full bg-[#5A1820]/80 shadow-[0_0_12px_rgba(90,24,32,0.3)]" />

          </div>


          {/* Gold Star */}

          <div className="absolute inset-[19%] rounded-full orbit-fast pointer-events-none">

            <span className="orbit-marker text-[#B08A45] text-lg">
              ✦
            </span>

          </div>


          {/* Small Moving Star */}

          <div className="absolute inset-[10%] rounded-full orbit-reverse-slow pointer-events-none">

            <span className="orbit-marker text-[#B08A45] text-sm">
              ✦
            </span>

          </div>


          {/* =====================================================
              CENTRAL SACRED CIRCLE
          ====================================================== */}

          <div className="relative z-10 flex h-52 w-52 sm:h-60 sm:w-60 lg:h-72 lg:w-72 items-center justify-center rounded-full bg-gradient-to-br from-[#5A1820] via-[#76242D] to-[#3D1016] border-[9px] border-[#FFF7E8] shadow-[0_30px_70px_rgba(74,20,26,0.25)]">

            {/* Inner Border */}

            <div className="absolute inset-4 rounded-full border border-[#D4B978]/40" />


            {/* Central Content */}

            <div className="relative z-10 flex flex-col items-center text-center px-6">

              <div className="flex h-14 w-14 sm:h-16 sm:w-16 items-center justify-center rounded-2xl bg-[#F5DFA8]/10 border border-[#F5DFA8]/30 text-[#F5DFA8]">

                <Landmark
                  size={30}
                  strokeWidth={1.4}
                />

              </div>


              <span className="mt-5 font-[family-name:var(--font-cormorant)] text-2xl sm:text-3xl font-semibold text-[#FFF4D6]">
                Our Commitment
              </span>


              <span className="mt-2 text-[9px] sm:text-[10px] uppercase tracking-[0.25em] text-[#D4B978]">
                Tradition • Devotion • Service
              </span>

            </div>

          </div>

        </div>

      </div>


      {/* =====================================================
          RIGHT — MISSION CONTENT
      ====================================================== */}

      <div className="lg:col-span-7">

        <div className="max-w-2xl">


          {/* Title */}

          <div className="flex items-center gap-3 mb-6">

            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#FFFDF9] border border-[#E2D0AF] text-[#B08A45]">

              <HeartHandshake
                size={24}
                strokeWidth={1.5}
              />

            </div>


            <div>

              <p className="text-[10px] sm:text-xs font-semibold uppercase tracking-[0.22em] text-[#B08A45]">
                Our Commitment
              </p>


              <h3 className="font-[family-name:var(--font-cormorant)] text-3xl sm:text-4xl font-semibold text-[#4A141A]">
                Tradition Made Meaningful
              </h3>

            </div>

          </div>


          {/* Description */}

          <div className="space-y-5 text-sm sm:text-base lg:text-[17px] leading-8 text-[#63574F]">

            <p>
              Our mission is to preserve the authenticity of sacred
              traditions while making pooja preparation simple and
              accessible for modern families.
            </p>


            <p>
              We bring together authentic pooja essentials, trusted
              guidance, and meaningful spiritual experiences so devotees
              can spend less time worrying about preparation and more
              time focusing on faith and devotion.
            </p>

          </div>


          {/* ================= MISSION PILLARS ================= */}

          <div className="mt-9 space-y-4">


            {/* PRESERVE */}

            <div className="group rounded-2xl bg-[#FFFDF9] border border-[#E7DCC8] p-5 sm:p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#D4B978] hover:shadow-[0_15px_35px_rgba(90,24,32,0.08)]">

              <div className="flex items-start gap-4">

                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-[#F8F2E6] border border-[#EADBCA] text-[#B08A45] transition-all duration-300 group-hover:bg-[#5A1820] group-hover:text-[#F3E5C8]">

                  <Landmark size={23} strokeWidth={1.5} />

                </div>


                <div>

                  <h4 className="font-[family-name:var(--font-cormorant)] text-xl sm:text-2xl font-semibold text-[#4A141A]">
                    Preserve the Tradition
                  </h4>


                  <p className="mt-1.5 text-xs sm:text-sm leading-relaxed text-[#73665D]">
                    Protecting the purity, authenticity, and cultural
                    meaning behind every sacred practice.
                  </p>

                </div>

              </div>

            </div>


            {/* SIMPLIFY */}

            <div className="group rounded-2xl bg-[#FFFDF9] border border-[#E7DCC8] p-5 sm:p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#D4B978] hover:shadow-[0_15px_35px_rgba(90,24,32,0.08)]">

              <div className="flex items-start gap-4">

                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-[#F8F2E6] border border-[#EADBCA] text-[#B08A45] transition-all duration-300 group-hover:bg-[#5A1820] group-hover:text-[#F3E5C8]">

                  <Package size={23} strokeWidth={1.5} />

                </div>


                <div>

                  <h4 className="font-[family-name:var(--font-cormorant)] text-xl sm:text-2xl font-semibold text-[#4A141A]">
                    Simplify the Experience
                  </h4>


                  <p className="mt-1.5 text-xs sm:text-sm leading-relaxed text-[#73665D]">
                    Making pooja preparation easier through thoughtfully
                    arranged essentials and reliable guidance.
                  </p>

                </div>

              </div>

            </div>


            {/* SERVE */}

            <div className="group rounded-2xl bg-[#FFFDF9] border border-[#E7DCC8] p-5 sm:p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#D4B978] hover:shadow-[0_15px_35px_rgba(90,24,32,0.08)]">

              <div className="flex items-start gap-4">

                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-[#F8F2E6] border border-[#EADBCA] text-[#B08A45] transition-all duration-300 group-hover:bg-[#5A1820] group-hover:text-[#F3E5C8]">

                  <HandHeart size={23} strokeWidth={1.5} />

                </div>


                <div>

                  <h4 className="font-[family-name:var(--font-cormorant)] text-xl sm:text-2xl font-semibold text-[#4A141A]">
                    Serve With Devotion
                  </h4>


                  <p className="mt-1.5 text-xs sm:text-sm leading-relaxed text-[#73665D]">
                    Supporting every devotee with sincerity, care, and
                    respect throughout their spiritual journey.
                  </p>

                </div>

              </div>

            </div>

          </div>


          {/* Decorative Line */}

          <div className="flex items-center gap-2 mt-9">

            <span className="h-px w-14 bg-[#B08A45]" />

            <span className="text-xs text-[#B08A45]">
              ✦
            </span>

            <span className="h-px w-7 bg-[#B08A45]/40" />

          </div>

        </div>

      </div>

    </div>


    {/* ================= BOTTOM STATEMENT ================= */}

    <div className="mt-16 sm:mt-20">

      <div className="relative mx-auto max-w-5xl overflow-hidden rounded-2xl border border-[#E2D2BA] bg-[#FFFDF9] px-7 py-9 sm:px-12 sm:py-12 text-center shadow-[0_18px_45px_rgba(90,24,32,0.06)]">

        <div className="absolute top-0 left-1/2 -translate-x-1/2 h-px w-48 bg-gradient-to-r from-transparent via-[#D4B978] to-transparent" />


        <div className="flex justify-center mb-5">

          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#F8F2E6] border border-[#E2D0AF] text-[#B08A45]">

            <Heart size={22} strokeWidth={1.5} />

          </div>

        </div>


        <blockquote className="font-[family-name:var(--font-cormorant)] text-2xl sm:text-3xl lg:text-4xl font-semibold leading-snug text-[#4A141A]">

          “Preserving the wisdom of yesterday,
          <br className="hidden sm:block" />
          while serving the devotion of today.”

        </blockquote>


        <div className="pt-6 flex items-center justify-center gap-2">

          <span className="h-px w-10 bg-[#C59B4B]/40" />

          <span className="text-xs text-[#C59B4B]">
            ✦
          </span>

          <span className="h-px w-10 bg-[#C59B4B]/40" />

        </div>

      </div>

    </div>

  </div>

</section>

   

      {/* ============================================================
          6. CTA
      ============================================================ */}

      <section className="px-6 sm:px-10 lg:px-16 py-14 sm:py-18 bg-[#FBF8F2]">
        <div className="mx-auto max-w-[1500px]">
          <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-[#4A1117] via-[#5C161D] to-[#4A1117] px-6 sm:px-10 lg:px-12 py-8 sm:py-10 text-white shadow-xl border border-[#7A2832]">
            <div className="absolute left-0 top-0 w-48 h-full bg-[#D4B978]/10 rounded-full blur-2xl pointer-events-none" />

            <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-8">
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

              <div className="hidden xl:block h-16 w-px bg-white/20" />

              <div className="max-w-md text-center lg:text-left text-xs sm:text-sm text-[#E6D5C3] leading-relaxed">
                Whether it&apos;s a simple pooja at home or a grand celebration,
                we are here to make it truly memorable and blessed.
              </div>

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