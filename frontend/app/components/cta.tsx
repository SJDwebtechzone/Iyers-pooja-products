import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

export default function CTA() {
  return (
    <section className="relative overflow-hidden border-b border-[#B08A45]/20 bg-[#2A1517] px-6 py-16 sm:px-10 lg:py-24">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/bg.jpg"
          alt="Pooja background"
          fill
          className="object-cover object-center opacity-75 brightness-105 saturate-105"
          sizes="100vw"
        />
        {/* Subtle Overlay Gradient for readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#240C0E]/60 via-[#240C0E]/40 to-[#240C0E]/60" />
        <div className="absolute inset-0 bg-black/20" />
      </div>

      <div className="relative z-10 mx-auto max-w-5xl text-center">

        {/* Decorative Element */}
        <div className="mb-7 flex items-center justify-center gap-4">
          <span className="h-px w-12 bg-[#D4B978] shadow-sm" />

          <span className="text-sm text-[#F3D78A] [text-shadow:_0_1px_6px_rgba(0,0,0,0.8)]">
            ✦
          </span>

          <span className="h-px w-12 bg-[#D4B978] shadow-sm" />
        </div>

        {/* Heading */}
        <h2 className="font-[family-name:var(--font-cormorant)] text-4xl font-semibold leading-tight text-[#FFFDF8] sm:text-5xl lg:text-6xl [text-shadow:_0_2px_12px_rgba(0,0,0,0.85)]">
          Planning a Pooja?
          <br />

          <span className="text-[#F3D78A]">
            We&apos;ve Got Everything Ready.
          </span>
        </h2>

        {/* Description */}
        <p className="mx-auto mt-6 max-w-2xl text-sm leading-7 text-[#FFF8EF] sm:text-base font-medium [text-shadow:_0_1px_8px_rgba(0,0,0,0.9)]">
          Save your valuable time with thoughtfully curated pooja products
          and packages, brought together for every sacred occasion.
        </p>

        {/* CTA */}
        <div className="mt-9">
          <Link
            href="/order"
            className="group inline-flex h-12 items-center gap-3 rounded-md bg-[#A71930] px-8 text-[12px] font-semibold tracking-[0.1em] text-white shadow-lg transition-all duration-300 hover:bg-[#8A1528] hover:shadow-xl hover:scale-105 active:scale-95"
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
  );
}