"use client";

import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import {
  Package,
  ListOrdered,
  Star,
  Info,
  ArrowLeft,
} from "lucide-react";

import { corporatePoojaPackages } from "@/app/data/packagesData";

export default function PackageDetailsPage() {
  const params = useParams();

  const slug = Array.isArray(params.slug)
    ? params.slug[0]
    : params.slug;

  const packageData = corporatePoojaPackages.find(
    (pkg) => pkg.id === slug
  );

  if (!packageData) {
    return (
      <main className="min-h-screen bg-[#F8F4EC] flex items-center justify-center px-6">
        <div className="text-center">
          <h1 className="font-[family-name:var(--font-cormorant)] text-4xl font-bold text-[#42151B] mb-4">
            Package Not Found
          </h1>

          <p className="text-[#42151B]/70 mb-6">
            The requested pooja package could not be found.
          </p>

          <Link
            href="/corporate-package"
            className="inline-flex items-center gap-2 bg-[#65151D] text-white px-6 py-3 rounded-lg"
          >
            <ArrowLeft size={18} />
            Back to Corporate Packages
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#F8F4EC] text-[#42151B]">

      {/* TOP BORDER */}
      <div className="h-1 bg-[#42151B]" />

      {/* HEADER */}
      <section className="pt-16 pb-10 px-6">
        <div className="text-center max-w-6xl mx-auto">

          <Link
            href="/corporate-package"
            className="inline-flex items-center gap-2 text-sm text-[#8B651C] hover:underline mb-8"
          >
            <ArrowLeft size={16} />
            Back to Corporate Packages
          </Link>

          <h1 className="font-[family-name:var(--font-cormorant)] text-4xl sm:text-5xl lg:text-[52px] font-bold text-[#42151B]">
            {packageData.name} Package Details
          </h1>

          <div className="flex items-center justify-center gap-3 mt-5">
            <span className="w-14 h-px bg-[#B78A32]" />
            <span className="text-[#B78A32]">
              ◇ ◆ ◇
            </span>
            <span className="w-14 h-px bg-[#B78A32]" />
          </div>

          {/* DESCRIPTION */}
          <p className="max-w-3xl mx-auto mt-6 text-[#42151B]/70 leading-7">
            {packageData.description}
          </p>

        </div>
      </section>

      {/* PACKAGE MAIN CARD */}
      <section className="px-4 sm:px-6 pb-20">
        <div className="max-w-[1670px] mx-auto border border-[#D9C39A] rounded-2xl p-5 sm:p-8 lg:p-10 bg-[#FBF9F4]">

          <div className="grid grid-cols-1 lg:grid-cols-[360px_1fr] gap-8">

            {/* LEFT SIDEBAR */}
            <aside className="bg-[#500F16] rounded-2xl p-5 sm:p-6 h-fit text-white shadow-lg">

              <div className="space-y-2">

                <div className="flex items-center gap-4 bg-[#8B1E29] border-l-4 border-[#E7C873] rounded-lg px-5 py-4">
                  <Package
                    className="text-[#E7C873]"
                    size={23}
                  />

                  <span className="font-semibold">
                    Package Details
                  </span>
                </div>

                <a
                  href="#process"
                  className="flex items-center gap-4 px-5 py-4 rounded-lg hover:bg-white/10 transition"
                >
                  <ListOrdered
                    className="text-[#D7A91D]"
                    size={22}
                  />

                  <span>
                    Pooja Process
                  </span>
                </a>

                <a
                  href="#benefits"
                  className="flex items-center gap-4 px-5 py-4 rounded-lg hover:bg-white/10 transition"
                >
                  <Star
                    className="text-[#D7A91D]"
                    size={22}
                  />

                  <span>
                    Benefits
                  </span>
                </a>

                <a
                  href="#notes"
                  className="flex items-center gap-4 px-5 py-4 rounded-lg hover:bg-white/10 transition"
                >
                  <Info
                    className="text-[#D7A91D]"
                    size={22}
                  />

                  <span>
                    Important Notes
                  </span>
                </a>

              </div>

              {/* SELECTED PACKAGE */}
              <div className="border-t border-white/15 mt-5 pt-7">

                <p className="uppercase text-xs tracking-wider text-[#E7C873] mb-2">
                  Selected Package
                </p>

                <h2 className="font-[family-name:var(--font-cormorant)] text-2xl font-bold text-[#E7C873]">
                  {packageData.name}
                </h2>

                <p className="text-white mt-1">
                  {packageData.price}
                </p>

                <Link
                  href="/contact"
                  className="block text-center bg-[#E7C873] text-[#42151B] font-semibold rounded-lg py-3 mt-5 hover:bg-[#f0d68c] transition"
                >
                  Enquire Now
                </Link>

              </div>

            </aside>

            {/* RIGHT CONTENT */}
            <div className="min-w-0">

              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-5">

                <h2 className="font-[family-name:var(--font-cormorant)] text-2xl sm:text-3xl font-bold">
                  Pooja Samagri / Items List
                </h2>

                <span className="font-semibold text-[#8B1720]">
                  {packageData.name} ({packageData.items.length} Items)
                </span>

              </div>

              {/* ITEMS TABLE */}
              <div className="overflow-x-auto rounded-xl border border-[#DCC9A5]">

                <table className="w-full min-w-[750px] border-collapse">

                  <thead>
                    <tr className="bg-[#5A0D14] text-white">

                      <th className="px-4 py-3 text-left text-sm">
                        S.No
                      </th>

                      <th className="px-4 py-3 text-left text-sm">
                        Name (English)
                      </th>

                      <th className="px-4 py-3 text-left text-sm">
                        Name (Tamil)
                      </th>

                      <th className="px-4 py-3 text-left text-sm">
                        Quantity
                      </th>

                    </tr>
                  </thead>

                  <tbody>

                    {packageData.items.map((item) => (
                      <tr
                        key={item.sno}
                        className="border-b border-[#E5D7BD] last:border-0"
                      >

                        <td className="px-4 py-3 text-[#795A38]">
                          {item.sno}.
                        </td>

                        <td className="px-4 py-3 font-medium">
                          {item.english}
                        </td>

                        <td className="px-4 py-3 text-lg">
                          {item.tamil}
                        </td>

                        <td className="px-4 py-3 font-semibold text-[#8B1720]">
                          {item.quantity}
                        </td>

                      </tr>
                    ))}

                  </tbody>

                </table>

              </div>

              {/* IMAGE */}
              <div className="flex justify-center mt-8">

                <div className="relative w-48 h-48">

                  <Image
                    src={packageData.image}
                    alt={packageData.name}
                    fill
                    className="object-contain"
                  />

                </div>

              </div>

            </div>

          </div>

        </div>
      </section>

      {/* PROCESS */}
      <section
        id="process"
        className="px-6 py-16 bg-[#F3EBDD]"
      >
        <div className="max-w-6xl mx-auto">

          <h2 className="font-[family-name:var(--font-cormorant)] text-4xl font-bold text-center mb-10">
            Pooja Process
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

            {packageData.process.map((item) => (
              <div
                key={item.step}
                className="bg-white border border-[#DCC9A5] rounded-xl p-6"
              >

                <div className="text-[#A27623] font-bold text-sm mb-2">
                  STEP {item.step}
                </div>

                <h3 className="font-[family-name:var(--font-cormorant)] text-2xl font-bold mb-2">
                  {item.title}
                </h3>

                <p className="text-[#42151B]/70 leading-7">
                  {item.description}
                </p>

              </div>
            ))}

          </div>

        </div>
      </section>

      {/* BENEFITS */}
      <section
        id="benefits"
        className="px-6 py-16 bg-[#FBF9F4]"
      >
        <div className="max-w-6xl mx-auto">

          <h2 className="font-[family-name:var(--font-cormorant)] text-4xl font-bold text-center mb-10">
            Benefits
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

            {packageData.benefits.map((benefit) => (
              <div
                key={benefit.title}
                className="border border-[#DCC9A5] rounded-xl p-6"
              >

                <Star
                  className="text-[#B78A32] mb-4"
                  size={25}
                />

                <h3 className="font-[family-name:var(--font-cormorant)] text-2xl font-bold mb-2">
                  {benefit.title}
                </h3>

                <p className="text-[#42151B]/70 leading-7">
                  {benefit.description}
                </p>

              </div>
            ))}

          </div>

        </div>
      </section>

      {/* NOTES */}
      <section
        id="notes"
        className="px-6 py-16 bg-[#F3EBDD]"
      >
        <div className="max-w-4xl mx-auto">

          <h2 className="font-[family-name:var(--font-cormorant)] text-4xl font-bold text-center mb-8">
            Important Notes
          </h2>

          <div className="bg-white border border-[#DCC9A5] rounded-xl p-6">

            <ul className="space-y-4">

              {packageData.notes.map((note, index) => (
                <li
                  key={index}
                  className="flex gap-3 text-[#42151B]/80"
                >

                  <span className="text-[#B78A32] font-bold">
                    •
                  </span>

                  <span>
                    {note}
                  </span>

                </li>
              ))}

            </ul>

          </div>

        </div>
      </section>

    </main>
  );
}