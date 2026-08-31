"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    question: "What types of pooja products are available?",
    answer:
      "We offer a wide range of pooja essentials, including samagri, lamps, incense, diyas, idols, sacred items, and other traditional pooja products.",
  },
  {
    question: "Are the products available individually or as pooja kits?",
    answer:
      "Selected products are available individually, while some are also available as complete pooja kits for specific rituals and occasions.",
  },
  {
    question: "How can I know which products I need for my pooja?",
    answer:
      "Product details and descriptions will help you understand the purpose and usage of each item. You can also contact us if you need assistance.",
  },
  {
    question: "Are the products authentic and traditionally sourced?",
    answer:
      "Yes. We aim to provide authentic and traditionally sourced pooja products suitable for your spiritual practices and rituals.",
  },
  {
    question: "Do you provide delivery for pooja products?",
    answer:
      "Yes, delivery is available for eligible products and locations. Delivery details will be shown during the ordering process.",
  },
  {
    question: "Can I return or exchange a product?",
    answer:
      "Return and exchange eligibility depends on the product and its condition. Please check our return policy for complete details.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-[#faf8f3] py-24 px-6">
      <div className="mx-auto max-w-6xl">

        {/* Heading */}
        <div className="mb-14 text-center">
          <span className="mb-3 block text-sm font-medium uppercase tracking-[0.25em] text-[#a47b43]">
            FAQ
          </span>

          <h2 className="text-4xl font-semibold tracking-tight text-[#241d17] md:text-5xl">
            Frequently Asked Questions
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-[#746b61]">
            Find answers to common questions about our pooja products,
            availability, delivery, and more.
          </p>
        </div>

        {/* FAQ */}
        <div className="mx-auto max-w-4xl divide-y divide-[#ded7cd] border-y border-[#ded7cd]">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div key={faq.question}>
                <button
                  type="button"
                  onClick={() => toggleFAQ(index)}
                  className="flex w-full items-center justify-between gap-6 py-6 text-left"
                >
                  <span
                    className={`text-lg font-medium transition-colors duration-300 ${
                      isOpen ? "text-[#a47b43]" : "text-[#2b241e]"
                    }`}
                  >
                    {faq.question}
                  </span>

                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[#d8cfc3] text-[#8d6a3d]">
                    {isOpen ? (
                      <Minus size={17} strokeWidth={1.5} />
                    ) : (
                      <Plus size={17} strokeWidth={1.5} />
                    )}
                  </span>
                </button>

                <div
                  className={`grid transition-all duration-300 ease-in-out ${
                    isOpen
                      ? "grid-rows-[1fr] opacity-100"
                      : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="max-w-3xl pb-6 pr-14 text-[15px] leading-7 text-[#746b61]">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
