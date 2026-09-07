import { RotateCcw, Clock, AlertCircle, Mail, HelpCircle, FileText, CheckCircle2, XCircle } from 'lucide-react';
import Link from 'next/link';

export default function RefundPolicy() {
  return (
    <main className="bg-[#FCFAF6] text-[#29231F] min-h-screen">
      {/* Hero Section */}
      <section className="relative mt-[90px] pt-16 pb-24 overflow-hidden bg-gradient-to-b from-[#5A2026] via-[#6B242D] to-[#5A2026] isolate">
        {/* Background Patterns */}
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#E8D5B5 1px, transparent 1px)', backgroundSize: '32px 32px' }} />
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#D4B978]/20 rounded-full blur-[100px] -z-10 mix-blend-overlay" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#5A2026]/40 rounded-full blur-[100px] -z-10 mix-blend-overlay" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#FCFAF6]/10 border border-[#D4B978]/30 backdrop-blur-md mb-6">
            <RotateCcw className="w-4 h-4 text-[#D4B978]" />
            <span className="text-xs font-semibold tracking-wider text-[#D4B978] uppercase">ORDER & REFUND INFORMATION</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-[family-name:var(--font-cormorant)] text-[#F8F4EC] font-bold mb-6 tracking-wide">
            Refund Policy
          </h1>
          
          {/* Decorative Divider */}
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="h-[1px] w-12 bg-gradient-to-r from-transparent to-[#D4B978]" />
            <div className="w-2 h-2 rotate-45 bg-[#D4B978]" />
            <div className="h-[1px] w-12 bg-gradient-to-l from-transparent to-[#D4B978]" />
          </div>
          
          <p className="max-w-2xl mx-auto text-lg text-[#F8F4EC]/80 font-light">
            Understand our procedures and policies regarding order cancellations, returns, and refunds.
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 -mt-10 relative z-20">
        <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl border border-[#E8D5B5] overflow-hidden">
          <div className="p-8 md:p-12">
            <p className="text-sm text-[#73665D] mb-8 italic">Last Updated: 10.9.2026</p>
            
            <div className="space-y-12">
              {/* 1. Introduction */}
              <div className="pb-8 border-b border-[#E8D5B5]/50">
                <div className="flex items-start gap-4">
                  <div className="mt-1 bg-[#F8F4EC] p-2 rounded-lg border border-[#E8D5B5]">
                    <FileText className="w-5 h-5 text-[#B08A45]" />
                  </div>
                  <div>
                    <h2 className="font-[family-name:var(--font-cormorant)] text-2xl font-semibold text-[#5A2026] mb-4">
                      1. Introduction
                    </h2>
                    <p className="text-sm leading-7 text-justify text-[#5B514A]">
                      At Iyer's Pooja Products, we strive to provide the highest quality pooja products and services to our customers. We understand that circumstances may change, and you may need to cancel an order or request a refund. This Refund Policy outlines the terms and conditions under which refunds and cancellations are processed to ensure fairness and transparency.
                    </p>
                  </div>
                </div>
              </div>

              {/* 2. Cancellation Requests */}
              <div className="pb-8 border-b border-[#E8D5B5]/50">
                <div className="flex items-start gap-4">
                  <div className="mt-1 bg-[#F8F4EC] p-2 rounded-lg border border-[#E8D5B5]">
                    <XCircle className="w-5 h-5 text-[#B08A45]" />
                  </div>
                  <div>
                    <h2 className="font-[family-name:var(--font-cormorant)] text-2xl font-semibold text-[#5A2026] mb-4">
                      2. Cancellation Requests
                    </h2>
                    <p className="text-sm leading-7 text-justify text-[#5B514A]">
                      Customers may request the cancellation of an order before it has been dispatched or before the service has commenced. If your order has already been processed and shipped, or if the specific service has begun, cancellation may no longer be possible. To request a cancellation, please contact us immediately using the information provided below.
                    </p>
                  </div>
                </div>
              </div>

              {/* 3. Refund Eligibility */}
              <div className="pb-8 border-b border-[#E8D5B5]/50">
                <div className="flex items-start gap-4">
                  <div className="mt-1 bg-[#F8F4EC] p-2 rounded-lg border border-[#E8D5B5]">
                    <CheckCircle2 className="w-5 h-5 text-[#B08A45]" />
                  </div>
                  <div>
                    <h2 className="font-[family-name:var(--font-cormorant)] text-2xl font-semibold text-[#5A2026] mb-4">
                      3. Refund Eligibility
                    </h2>
                    <div className="text-sm leading-7 text-justify text-[#5B514A] space-y-4">
                      <p>
                        Refunds are applicable under specific circumstances, subject to the applicable cancellation and refund conditions. You may be eligible for a refund if:
                      </p>
                      <ul className="list-disc pl-5 space-y-2 marker:text-[#B08A45]">
                        <li>You successfully cancel your order before it has been dispatched.</li>
                        <li>You receive a product that is demonstrably damaged, defective, or incorrect upon arrival.</li>
                        <li>The requested service cannot be fulfilled by us.</li>
                      </ul>
                      <p>
                        Please note that we do not promise automatic refunds in every situation. Refund eligibility may depend on the package or service status at the time of your request.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* 4. How to Request a Refund */}
              <div className="pb-8 border-b border-[#E8D5B5]/50">
                <div className="flex items-start gap-4">
                  <div className="mt-1 bg-[#F8F4EC] p-2 rounded-lg border border-[#E8D5B5]">
                    <HelpCircle className="w-5 h-5 text-[#B08A45]" />
                  </div>
                  <div>
                    <h2 className="font-[family-name:var(--font-cormorant)] text-2xl font-semibold text-[#5A2026] mb-4">
                      4. How to Request a Refund
                    </h2>
                    <p className="text-sm leading-7 text-justify text-[#5B514A] mb-4">
                      To initiate a refund request, customers must contact our support team. Your request must include the following required information to ensure timely processing:
                    </p>
                    <ul className="list-disc pl-5 space-y-2 text-sm leading-7 text-justify text-[#5B514A] marker:text-[#B08A45]">
                      <li>Your full name and contact information.</li>
                      <li>The order number or receipt details.</li>
                      <li>A clear explanation or reason for the refund request.</li>
                      <li>If applicable, photographic evidence of any damaged or defective products.</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* 5. Refund Processing */}
              <div className="pb-8 border-b border-[#E8D5B5]/50">
                <div className="flex items-start gap-4">
                  <div className="mt-1 bg-[#F8F4EC] p-2 rounded-lg border border-[#E8D5B5]">
                    <Clock className="w-5 h-5 text-[#B08A45]" />
                  </div>
                  <div>
                    <h2 className="font-[family-name:var(--font-cormorant)] text-2xl font-semibold text-[#5A2026] mb-4">
                      5. Refund Processing
                    </h2>
                    <p className="text-sm leading-7 text-justify text-[#5B514A]">
                      Once your refund request is received and reviewed, we will notify you of the approval or rejection of your refund. If approved, the refund will be processed and returned through the applicable payment method used during the original transaction wherever possible. Please allow an expected processing time of 5-10 business days for the funds to appear in your account, depending on your bank or payment provider.
                    </p>
                  </div>
                </div>
              </div>

              {/* 6. Non-Refundable Situations */}
              <div className="pb-8 border-b border-[#E8D5B5]/50">
                <div className="flex items-start gap-4">
                  <div className="mt-1 bg-[#F8F4EC] p-2 rounded-lg border border-[#E8D5B5]">
                    <AlertCircle className="w-5 h-5 text-[#B08A45]" />
                  </div>
                  <div>
                    <h2 className="font-[family-name:var(--font-cormorant)] text-2xl font-semibold text-[#5A2026] mb-4">
                      6. Non-Refundable Situations
                    </h2>
                    <p className="text-sm leading-7 text-justify text-[#5B514A] mb-4">
                      Certain scenarios are strictly non-refundable. These include, but are not limited to:
                    </p>
                    <ul className="list-disc pl-5 space-y-2 text-sm leading-7 text-justify text-[#5B514A] marker:text-[#B08A45]">
                      <li>Cases involving incorrect customer information (such as an incorrect shipping address provided by the customer).</li>
                      <li>Failure to follow payment instructions or completion of necessary documentation.</li>
                      <li>Products that have been used, tampered with, or are not in their original condition and packaging.</li>
                      <li>Change of mind after the product has been dispatched or service has been fulfilled.</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* 7. Contact for Refund Questions */}
              <div>
                <div className="flex items-start gap-4">
                  <div className="mt-1 bg-[#F8F4EC] p-2 rounded-lg border border-[#E8D5B5]">
                    <Mail className="w-5 h-5 text-[#B08A45]" />
                  </div>
                  <div>
                    <h2 className="font-[family-name:var(--font-cormorant)] text-2xl font-semibold text-[#5A2026] mb-4">
                      7. Contact for Refund Questions
                    </h2>
                    <p className="text-sm leading-7 text-justify text-[#5B514A] mb-4">
                      If you have any questions or require further assistance regarding our Refund Policy, please do not hesitate to reach out to us:
                    </p>
                    <div className="bg-[#FAF6EE] p-6 rounded-xl border border-[#DFCBB0] space-y-3 text-sm text-[#5B514A]">
                      <p><strong className="text-[#29231F] font-semibold">Business Name:</strong> Iyer's Pooja Products</p>
                      <p><strong className="text-[#29231F] font-semibold">Email Address:</strong> <a href="mailto:[Email Address]" className="text-[#B08A45] hover:underline transition-all">[Email Address]</a></p>
                      <p><strong className="text-[#29231F] font-semibold">Phone Number:</strong> <a href="tel:[Phone Number]" className="text-[#B08A45] hover:underline transition-all">[Phone Number]</a></p>
                      <p><strong className="text-[#29231F] font-semibold">Business Address:</strong> Kolathur, Chennai</p>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
