import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function CTA() {
  return (
<section className="border-b border-[#B08A45]/20 px-6 py-20 sm:px-10 lg:py-24">
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
  );
}