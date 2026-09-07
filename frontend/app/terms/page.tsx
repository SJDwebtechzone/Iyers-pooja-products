import { FileText, ChevronRight } from 'lucide-react';
import Link from 'next/link';

export default function TermsAndConditions() {
  return (
    <main className="min-h-screen bg-[#FCFAF6] text-[#29231F] selection:bg-[#5A2026] selection:text-white pb-24">
      {/* Hero Section */}
      <section className="relative mt-[90px] bg-gradient-to-b from-[#5A2026] via-[#6B242D] to-[#5A2026] pt-24 pb-32 overflow-hidden">
        {/* Background Patterns */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[length:24px_24px] opacity-20" />
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#D4B978]/20 rounded-full blur-[128px]" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#7A1524]/40 rounded-full blur-[128px]" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 backdrop-blur-md mb-8">
            <FileText className="w-4 h-4 text-[#D4B978]" />
            <span className="text-xs font-semibold tracking-widest text-[#D4B978] uppercase">Legal Agreement</span>
          </div>
          
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-[family-name:var(--font-cormorant)] font-medium text-white mb-6 drop-shadow-lg">
            Terms &amp; Conditions
          </h1>
          
          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="w-16 h-[1px] bg-gradient-to-r from-transparent to-[#D4B978]" />
            <div className="w-3 h-3 rotate-45 border border-[#D4B978] bg-[#5A2026]" />
            <div className="w-16 h-[1px] bg-gradient-to-l from-transparent to-[#D4B978]" />
          </div>
          
          <p className="max-w-2xl mx-auto text-lg text-white/80 leading-relaxed font-light">
            Please read these terms carefully before using our website and services.
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 -mt-16">
        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-2xl border border-[#E8D5B5] relative z-10">
          <div className="text-sm text-[#876B50] mb-12 pb-6 border-b border-[#F5DFA8]/50 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2">
            <span>Effective Date: 10.9.2026</span>
            <span>Last Updated: 10.9.2026</span>
          </div>

          <div className="space-y-12">
            {/* 1. Introduction */}
            <div className="group">
              <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-6">
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-[#FFF9EF] border border-[#F5DFA8] flex items-center justify-center text-xl font-[family-name:var(--font-cormorant)] text-[#B08A45] font-bold shadow-sm group-hover:scale-110 group-hover:bg-[#5A2026] group-hover:text-[#D4B978] transition-all duration-300">
                  1
                </div>
                <div className="flex-1 pb-12 border-b border-[#F5DFA8]/30 w-full">
                  <h2 className="text-2xl font-[family-name:var(--font-cormorant)] font-semibold text-[#5A2026] mb-4">
                    Introduction &amp; Acceptance of Terms
                  </h2>
                  <div className="text-sm leading-7 text-justify text-[#5B514A] space-y-4">
                    <p>
                      Welcome to Iyer's Pooja Products. By accessing and using this website, you agree to comply with and be bound by the following terms and conditions. If you disagree with any part of these terms, please do not use our website or services.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* 2. Website Usage */}
            <div className="group">
              <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-6">
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-[#FFF9EF] border border-[#F5DFA8] flex items-center justify-center text-xl font-[family-name:var(--font-cormorant)] text-[#B08A45] font-bold shadow-sm group-hover:scale-110 group-hover:bg-[#5A2026] group-hover:text-[#D4B978] transition-all duration-300">
                  2
                </div>
                <div className="flex-1 pb-12 border-b border-[#F5DFA8]/30 w-full">
                  <h2 className="text-2xl font-[family-name:var(--font-cormorant)] font-semibold text-[#5A2026] mb-4">
                    Website Usage
                  </h2>
                  <div className="text-sm leading-7 text-justify text-[#5B514A] space-y-4">
                    <p>
                      The content of this website is for your general information and personal use only. It is subject to change without notice. Unauthorized use of this website may give rise to a claim for damages and/or be a criminal offense.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* 3. Customer Eligibility */}
            <div className="group">
              <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-6">
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-[#FFF9EF] border border-[#F5DFA8] flex items-center justify-center text-xl font-[family-name:var(--font-cormorant)] text-[#B08A45] font-bold shadow-sm group-hover:scale-110 group-hover:bg-[#5A2026] group-hover:text-[#D4B978] transition-all duration-300">
                  3
                </div>
                <div className="flex-1 pb-12 border-b border-[#F5DFA8]/30 w-full">
                  <h2 className="text-2xl font-[family-name:var(--font-cormorant)] font-semibold text-[#5A2026] mb-4">
                    Customer Eligibility &amp; Responsibility
                  </h2>
                  <div className="text-sm leading-7 text-justify text-[#5B514A] space-y-4">
                    <p>
                      To use our services, you must provide accurate, current, and complete information during the order placement process. You are solely responsible for ensuring the accuracy of your submitted details, including contact information and addresses.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* 4. Packages & Services */}
            <div className="group">
              <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-6">
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-[#FFF9EF] border border-[#F5DFA8] flex items-center justify-center text-xl font-[family-name:var(--font-cormorant)] text-[#B08A45] font-bold shadow-sm group-hover:scale-110 group-hover:bg-[#5A2026] group-hover:text-[#D4B978] transition-all duration-300">
                  4
                </div>
                <div className="flex-1 pb-12 border-b border-[#F5DFA8]/30 w-full">
                  <h2 className="text-2xl font-[family-name:var(--font-cormorant)] font-semibold text-[#5A2026] mb-4">
                    Packages &amp; Services
                  </h2>
                  <div className="text-sm leading-7 text-justify text-[#5B514A] space-y-4">
                    <p>
                      We offer a variety of pooja packages and related services as described on our website. While we strive to present accurate details, the exact nature of the services, inclusions, and materials provided may be subject to minor variations.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* 5. Order Placement Process */}
            <div className="group">
              <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-6">
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-[#FFF9EF] border border-[#F5DFA8] flex items-center justify-center text-xl font-[family-name:var(--font-cormorant)] text-[#B08A45] font-bold shadow-sm group-hover:scale-110 group-hover:bg-[#5A2026] group-hover:text-[#D4B978] transition-all duration-300">
                  5
                </div>
                <div className="flex-1 pb-12 border-b border-[#F5DFA8]/30 w-full">
                  <h2 className="text-2xl font-[family-name:var(--font-cormorant)] font-semibold text-[#5A2026] mb-4">
                    Order Placement Process
                  </h2>
                  <div className="text-sm leading-7 text-justify text-[#5B514A] space-y-4">
                    <ul className="list-none space-y-3">
                      <li className="flex items-start gap-2">
                        <ChevronRight className="w-4 h-4 text-[#D4B978] mt-1 flex-shrink-0" />
                        <span>During checkout, you will be required to provide your name, mobile number, email address, physical address, and selected date requirements.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <ChevronRight className="w-4 h-4 text-[#D4B978] mt-1 flex-shrink-0" />
                        <span>Submitting an order request constitutes an offer to purchase our services.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <ChevronRight className="w-4 h-4 text-[#D4B978] mt-1 flex-shrink-0" />
                        <span><strong>Important:</strong> Submitting an order request does not mean your order is finalized or confirmed. Confirmation is strictly subject to the completion of the required payment and our subsequent order verification process.</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* 6. Payment Terms */}
            <div className="group">
              <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-6">
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-[#FFF9EF] border border-[#F5DFA8] flex items-center justify-center text-xl font-[family-name:var(--font-cormorant)] text-[#B08A45] font-bold shadow-sm group-hover:scale-110 group-hover:bg-[#5A2026] group-hover:text-[#D4B978] transition-all duration-300">
                  6
                </div>
                <div className="flex-1 pb-12 border-b border-[#F5DFA8]/30 w-full">
                  <h2 className="text-2xl font-[family-name:var(--font-cormorant)] font-semibold text-[#5A2026] mb-4">
                    Payment Terms
                  </h2>
                  <div className="text-sm leading-7 text-justify text-[#5B514A] space-y-4">
                    <p>
                      Payments must be made following the instructions provided during the checkout process. Administrator-provided bank account details and UPI ID are displayed directly on the order page for your convenience.
                    </p>
                    <p>
                      It is the customer's sole responsibility to verify the payment details and the correct recipient before executing any transaction. Once payment is made and verified by our team, an official order confirmation will be issued.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* 7. Pricing & Availability */}
            <div className="group">
              <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-6">
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-[#FFF9EF] border border-[#F5DFA8] flex items-center justify-center text-xl font-[family-name:var(--font-cormorant)] text-[#B08A45] font-bold shadow-sm group-hover:scale-110 group-hover:bg-[#5A2026] group-hover:text-[#D4B978] transition-all duration-300">
                  7
                </div>
                <div className="flex-1 pb-12 border-b border-[#F5DFA8]/30 w-full">
                  <h2 className="text-2xl font-[family-name:var(--font-cormorant)] font-semibold text-[#5A2026] mb-4">
                    Pricing &amp; Availability
                  </h2>
                  <div className="text-sm leading-7 text-justify text-[#5B514A] space-y-4">
                    <p>
                      All prices, package availability, and related information are subject to change without prior notice. We reserve the right to modify or discontinue any service at our discretion. In the event of a change affecting a pending order, we will communicate with you to find a suitable resolution.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* 8. Communication */}
            <div className="group">
              <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-6">
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-[#FFF9EF] border border-[#F5DFA8] flex items-center justify-center text-xl font-[family-name:var(--font-cormorant)] text-[#B08A45] font-bold shadow-sm group-hover:scale-110 group-hover:bg-[#5A2026] group-hover:text-[#D4B978] transition-all duration-300">
                  8
                </div>
                <div className="flex-1 pb-12 border-b border-[#F5DFA8]/30 w-full">
                  <h2 className="text-2xl font-[family-name:var(--font-cormorant)] font-semibold text-[#5A2026] mb-4">
                    Communication
                  </h2>
                  <div className="text-sm leading-7 text-justify text-[#5B514A] space-y-4">
                    <p>
                      By providing your contact details, you consent to receive communications from us regarding your orders, inquiries, and related service updates via email, phone calls, or WhatsApp where applicable.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* 9. Cancellation & Refunds */}
            <div className="group">
              <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-6">
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-[#FFF9EF] border border-[#F5DFA8] flex items-center justify-center text-xl font-[family-name:var(--font-cormorant)] text-[#B08A45] font-bold shadow-sm group-hover:scale-110 group-hover:bg-[#5A2026] group-hover:text-[#D4B978] transition-all duration-300">
                  9
                </div>
                <div className="flex-1 pb-12 border-b border-[#F5DFA8]/30 w-full">
                  <h2 className="text-2xl font-[family-name:var(--font-cormorant)] font-semibold text-[#5A2026] mb-4">
                    Cancellation &amp; Refunds
                  </h2>
                  <div className="text-sm leading-7 text-justify text-[#5B514A] space-y-4">
                    <p>
                      Our policies regarding cancellations and refunds are outlined in a separate document. For detailed information on your rights and our procedures regarding cancellations and refunds, please review our comprehensive{' '}
                      <Link href="/refund-policy" className="text-[#6B242D] font-medium hover:text-[#D4B978] underline underline-offset-4 decoration-[#F5DFA8] transition-colors">
                        Refund Policy
                      </Link>.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* 10. Intellectual Property */}
            <div className="group">
              <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-6">
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-[#FFF9EF] border border-[#F5DFA8] flex items-center justify-center text-xl font-[family-name:var(--font-cormorant)] text-[#B08A45] font-bold shadow-sm group-hover:scale-110 group-hover:bg-[#5A2026] group-hover:text-[#D4B978] transition-all duration-300">
                  10
                </div>
                <div className="flex-1 pb-12 border-b border-[#F5DFA8]/30 w-full">
                  <h2 className="text-2xl font-[family-name:var(--font-cormorant)] font-semibold text-[#5A2026] mb-4">
                    Intellectual Property
                  </h2>
                  <div className="text-sm leading-7 text-justify text-[#5B514A] space-y-4">
                    <p>
                      This website contains material which is owned by or licensed to us. This material includes, but is not limited to, the design, layout, look, appearance, and graphics. Reproduction is prohibited other than in accordance with the copyright notice, which forms part of these terms and conditions.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* 11. Limitation of Liability */}
            <div className="group">
              <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-6">
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-[#FFF9EF] border border-[#F5DFA8] flex items-center justify-center text-xl font-[family-name:var(--font-cormorant)] text-[#B08A45] font-bold shadow-sm group-hover:scale-110 group-hover:bg-[#5A2026] group-hover:text-[#D4B978] transition-all duration-300">
                  11
                </div>
                <div className="flex-1 pb-12 border-b border-[#F5DFA8]/30 w-full">
                  <h2 className="text-2xl font-[family-name:var(--font-cormorant)] font-semibold text-[#5A2026] mb-4">
                    Limitation of Liability
                  </h2>
                  <div className="text-sm leading-7 text-justify text-[#5B514A] space-y-4">
                    <p>
                      Neither we nor any third parties provide any warranty or guarantee as to the accuracy, timeliness, performance, completeness, or suitability of the information and materials found or offered on this website for any particular purpose. You acknowledge that such information and materials may contain inaccuracies or errors and we expressly exclude liability for any such inaccuracies or errors to the fullest extent permitted by law.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* 12. Changes to Terms */}
            <div className="group">
              <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-6">
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-[#FFF9EF] border border-[#F5DFA8] flex items-center justify-center text-xl font-[family-name:var(--font-cormorant)] text-[#B08A45] font-bold shadow-sm group-hover:scale-110 group-hover:bg-[#5A2026] group-hover:text-[#D4B978] transition-all duration-300">
                  12
                </div>
                <div className="flex-1 pb-12 border-b border-[#F5DFA8]/30 w-full">
                  <h2 className="text-2xl font-[family-name:var(--font-cormorant)] font-semibold text-[#5A2026] mb-4">
                    Changes to Terms
                  </h2>
                  <div className="text-sm leading-7 text-justify text-[#5B514A] space-y-4">
                    <p>
                      We reserve the right to update, modify, or replace these Terms &amp; Conditions at any time. Any changes will be posted on this page with an updated &quot;Last Updated&quot; date. Continued use of the website following any changes constitutes acceptance of those changes.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* 13. Contact Information */}
            <div className="group">
              <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-6">
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-[#FFF9EF] border border-[#F5DFA8] flex items-center justify-center text-xl font-[family-name:var(--font-cormorant)] text-[#B08A45] font-bold shadow-sm group-hover:scale-110 group-hover:bg-[#5A2026] group-hover:text-[#D4B978] transition-all duration-300">
                  13
                </div>
                <div className="flex-1 w-full">
                  <h2 className="text-2xl font-[family-name:var(--font-cormorant)] font-semibold text-[#5A2026] mb-4">
                    Contact Information
                  </h2>
                  <div className="text-sm leading-7 text-justify text-[#5B514A] space-y-4">
                    <p>
                      If you have any questions or concerns regarding these Terms &amp; Conditions, please contact us at:
                    </p>
                    <div className="bg-[#FCFAF6] border border-[#E8D5B5] rounded-xl p-6 mt-4">
                      <ul className="space-y-3">
                        <li><strong>Business Name:</strong> Iyer's Pooja Products</li>
                        <li><strong>Email:</strong> <a href="mailto:[Email Address]" className="text-[#6B242D] hover:text-[#D4B978] transition-colors">[Email Address]</a></li>
                        <li><strong>Phone:</strong> <a href="tel:[Phone Number]" className="text-[#6B242D] hover:text-[#D4B978] transition-colors">[Phone Number]</a></li>
                        <li><strong>Address:</strong> Kolathur, Chennai</li>
                      </ul>
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
