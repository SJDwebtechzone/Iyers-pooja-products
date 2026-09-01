"use client";

import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { useEffect, useState, type FormEvent } from "react";

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

// Booking states
const [isBookingOpen, setIsBookingOpen] = useState(false);
const [bookingSuccess, setBookingSuccess] = useState(false);

const [bookingForm, setBookingForm] = useState({
name: "",
mobile: "",
address: "",
email: "",
});

const packagePrice = "₹2,499";

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

const handleBookingSubmit = async (e: FormEvent) => {
e.preventDefault();


try {
  const res = await fetch(`${API_BASE}/bookings`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      ...bookingForm,
      pooja: "Ganapathy Homam",
    }),
  });

  if (!res.ok) {
    throw new Error("Booking failed");
  }

  setBookingSuccess(true);

  setTimeout(() => {
    setBookingSuccess(false);
    setIsBookingOpen(false);

    setBookingForm({
      name: "",
      mobile: "",
      address: "",
      email: "",
    });
  }, 2500);
} catch {
  alert("Something went wrong. Please try again.");
}


};

return ( <main className="min-h-screen bg-[#FAF6EE] text-[#29231F] font-sans antialiased">

```
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

    {/* BOOKING BOX */}
    <div className="mb-10 rounded-xl border border-[#E9DDC9] bg-[#FCFAF5] p-5 sm:p-6 max-w-sm">

      <span className="text-[10px] uppercase tracking-wider text-[#B08A45]">
        Package Price
      </span>

      <div className="font-[family-name:var(--font-cormorant)] text-3xl font-bold text-[#42151B]">
        {packagePrice}
      </div>

      <button
        type="button"
        onClick={() => setIsBookingOpen(true)}
        className="mt-4 w-full rounded-lg bg-[#5A121D] py-2.5 text-sm font-bold text-white tracking-wide hover:bg-[#400B13] transition-colors"
      >
          Order Now
      </button>

    <button
  type="button"
  onClick={() => setIsBookingOpen(true)}
  className="mt-3 w-full rounded-lg bg-[#F3D78A] px-3 py-2.5 text-center text-[11px] font-semibold text-[#3D1418] animate-priest-blink"
>
  Looking for an experienced Iyer for an
  upcoming pooja?
</button>
    </div>

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
          ) : samagriItems.length > 0 ? (
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
          ) : (
            <tr>
              <td
                colSpan={4}
                className="p-3 text-center text-[#55463E]"
              >
                No items available.
              </td>
            </tr>
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

  {/* =========================================================
      BOOKING MODAL
  ========================================================= */}
  {isBookingOpen && (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">

      <div className="relative w-full max-w-md rounded-2xl bg-[#FAF6EE] border-2 border-[#DECBB0] shadow-2xl p-6 sm:p-8">

        <button
          type="button"
          onClick={() => setIsBookingOpen(false)}
          className="absolute top-4 right-4 text-[#7A6458] hover:text-[#42151B]"
          aria-label="Close"
        >
          ✕
        </button>

        {bookingSuccess ? (
          <div className="py-8 text-center">

            <h3 className="font-[family-name:var(--font-cormorant)] text-2xl font-bold text-[#42151B] mb-2">
              Booking Received!
            </h3>

            <p className="text-sm text-[#55463E]">
              Our team will contact you shortly to confirm your priest booking.
            </p>

          </div>
        ) : (
          <>

            <h3 className="font-[family-name:var(--font-cormorant)] text-2xl font-bold text-[#42151B] mb-1">
               Request for an Iyer
            </h3>

            <p className="text-xs text-[#63534B] mb-5">
              Fill in your details and we'll get back to you shortly.
            </p>

            <form
              onSubmit={handleBookingSubmit}
              className="space-y-3.5"
            >

              <input
                type="text"
                required
                placeholder="Full Name"
                value={bookingForm.name}
                onChange={(e) =>
                  setBookingForm({
                    ...bookingForm,
                    name: e.target.value,
                  })
                }
                className="w-full rounded-lg border border-[#DFCBB0] bg-white px-3 py-2.5 text-sm focus:outline-none focus:border-[#7D1E28]"
              />

              <input
                type="tel"
                required
                placeholder="Mobile Number"
                value={bookingForm.mobile}
                onChange={(e) =>
                  setBookingForm({
                    ...bookingForm,
                    mobile: e.target.value,
                  })
                }
                className="w-full rounded-lg border border-[#DFCBB0] bg-white px-3 py-2.5 text-sm focus:outline-none focus:border-[#7D1E28]"
              />

              <input
                type="email"
                required
                placeholder="Email Address"
                value={bookingForm.email}
                onChange={(e) =>
                  setBookingForm({
                    ...bookingForm,
                    email: e.target.value,
                  })
                }
                className="w-full rounded-lg border border-[#DFCBB0] bg-white px-3 py-2.5 text-sm focus:outline-none focus:border-[#7D1E28]"
              />

              <textarea
                required
                rows={2}
                placeholder="Address"
                value={bookingForm.address}
                onChange={(e) =>
                  setBookingForm({
                    ...bookingForm,
                    address: e.target.value,
                  })
                }
                className="w-full rounded-lg border border-[#DFCBB0] bg-white px-3 py-2.5 text-sm focus:outline-none focus:border-[#7D1E28]"
              />

              <button
                type="submit"
                className="w-full rounded-lg bg-[#5A121D] py-3 text-sm font-bold text-white tracking-wide hover:bg-[#400B13] transition-colors"
              >
                Submit 
              </button>

            </form>

          </>
        )}

      </div>

    </div>
  )}

</main>


);
}
