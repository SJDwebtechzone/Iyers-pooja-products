import { ShieldCheck, Lock, Mail, Shield, Eye, CreditCard, Share2, Cookie, Database, Clock, RefreshCw, FileText } from "lucide-react";

export default function PrivacyPolicyPage() {
  return (
    <main className="bg-[#FCFAF6] text-[#29231F] min-h-screen">
      {/* Hero Section */}
      <section className="relative mt-[90px] bg-gradient-to-b from-[#5A2026] via-[#6B242D] to-[#5A2026] pt-20 pb-32 overflow-hidden">
        {/* Background Patterns */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.08)_1px,transparent_1px)] bg-[size:24px_24px] opacity-40"></div>
        <div className="absolute top-10 left-1/4 w-72 h-72 bg-[#7A1524] rounded-full mix-blend-multiply filter blur-3xl opacity-40"></div>
        <div className="absolute top-20 right-1/4 w-72 h-72 bg-[#4A171E] rounded-full mix-blend-multiply filter blur-3xl opacity-40"></div>

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-[#D4B978]/30 backdrop-blur-md mb-6 shadow-sm">
            <Lock className="w-4 h-4 text-[#D4B978]" />
            <span className="text-xs font-semibold tracking-wider text-[#F5DFA8] uppercase">
              Your Privacy Matters
            </span>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-[family-name:var(--font-cormorant)] font-bold text-white mb-6 tracking-tight">
            Privacy Policy
          </h1>
          
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="w-16 h-[1px] bg-gradient-to-r from-transparent to-[#D4B978]"></div>
            <div className="w-2.5 h-2.5 rotate-45 bg-[#D4B978]"></div>
            <div className="w-16 h-[1px] bg-gradient-to-l from-transparent to-[#D4B978]"></div>
          </div>
          
          <p className="max-w-2xl mx-auto text-white/80 text-lg font-light">
            We value your trust and are committed to protecting your personal information while providing you with our divine pooja services.
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 -mt-16 pb-24 z-20">
        <div className="bg-white rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-[#E8D5B5] p-6 sm:p-10 md:p-14">
          
          <div className="mb-10 pb-6 border-b border-[#E8D5B5]/50 flex justify-between items-center flex-wrap gap-4">
            <p className="text-sm text-[#73665D] italic">
              Last Updated: <span className="font-medium not-italic text-[#29231F]">10.9.2026</span>
            </p>
          </div>

          <div className="space-y-12">
            
            {/* 1. Introduction */}
            <div className="scroll-mt-24">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-[#FCFAF6] border border-[#E8D5B5] flex items-center justify-center text-[#5A2026] flex-shrink-0">
                  <FileText className="w-5 h-5" />
                </div>
                <h2 className="font-[family-name:var(--font-cormorant)] text-2xl md:text-3xl font-semibold text-[#5A2026]">
                  1. Introduction
                </h2>
              </div>
              <div className="pl-13 text-sm leading-7 text-justify text-[#5B514A]">
                <p>
                  Welcome to Iyer's Pooja Products. We respect your privacy and are committed to protecting your personal data. This privacy policy explains how we collect, use, and safeguard your information when you visit our website or purchase our pooja packages and products. By using our services, you consent to the data practices described in this statement.
                </p>
              </div>
            </div>

            <div className="w-full h-px bg-gradient-to-r from-transparent via-[#E8D5B5]/50 to-transparent"></div>

            {/* 2. Information We Collect */}
            <div className="scroll-mt-24">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-[#FCFAF6] border border-[#E8D5B5] flex items-center justify-center text-[#5A2026] flex-shrink-0">
                  <Database className="w-5 h-5" />
                </div>
                <h2 className="font-[family-name:var(--font-cormorant)] text-2xl md:text-3xl font-semibold text-[#5A2026]">
                  2. Information We Collect
                </h2>
              </div>
              <div className="pl-13 text-sm leading-7 text-justify text-[#5B514A]">
                <p className="mb-4">
                  To provide you with our services effectively, we collect certain personal information when you place an order or interact with our website. The types of personal information we may collect include:
                </p>
                <ul className="space-y-2">
                  {[
                    "Full Name",
                    "Mobile Number",
                    "Email Address",
                    "Delivery / Billing Address",
                    "Selected package and order details",
                    "Preferred date and day for the package delivery or service"
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-[#D4B978] mt-1.5">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="w-full h-px bg-gradient-to-r from-transparent via-[#E8D5B5]/50 to-transparent"></div>

            {/* 3. How We Use Your Information */}
            <div className="scroll-mt-24">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-[#FCFAF6] border border-[#E8D5B5] flex items-center justify-center text-[#5A2026] flex-shrink-0">
                  <Eye className="w-5 h-5" />
                </div>
                <h2 className="font-[family-name:var(--font-cormorant)] text-2xl md:text-3xl font-semibold text-[#5A2026]">
                  3. How We Use Your Information
                </h2>
              </div>
              <div className="pl-13 text-sm leading-7 text-justify text-[#5B514A]">
                <p className="mb-4">We use the information we collect for the following purposes:</p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="text-[#D4B978] mt-1.5">•</span>
                    <span>To accurately process and manage your pooja package orders.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#D4B978] mt-1.5">•</span>
                    <span>To communicate with you regarding your order status, delivery, or any issues.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#D4B978] mt-1.5">•</span>
                    <span>To send purchase or order confirmation emails and notifications.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#D4B978] mt-1.5">•</span>
                    <span>To provide dedicated customer support and respond to your inquiries.</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="w-full h-px bg-gradient-to-r from-transparent via-[#E8D5B5]/50 to-transparent"></div>

            {/* 4. Payment Information */}
            <div className="scroll-mt-24">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-[#FCFAF6] border border-[#E8D5B5] flex items-center justify-center text-[#5A2026] flex-shrink-0">
                  <CreditCard className="w-5 h-5" />
                </div>
                <h2 className="font-[family-name:var(--font-cormorant)] text-2xl md:text-3xl font-semibold text-[#5A2026]">
                  4. Payment Information
                </h2>
              </div>
              <div className="pl-13 text-sm leading-7 text-justify text-[#5B514A]">
                <p>
                  Any payment or account details displayed on our order page are provided solely by the website administrator to facilitate manual or direct payment transfers. We explicitly <strong>do not collect, process, or store</strong> your bank account, credit card, or payment card information on our servers. All financial transactions are managed outside of our system through your personal banking applications or chosen payment methods.
                </p>
              </div>
            </div>

            <div className="w-full h-px bg-gradient-to-r from-transparent via-[#E8D5B5]/50 to-transparent"></div>

            {/* 5. Information Sharing */}
            <div className="scroll-mt-24">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-[#FCFAF6] border border-[#E8D5B5] flex items-center justify-center text-[#5A2026] flex-shrink-0">
                  <Share2 className="w-5 h-5" />
                </div>
                <h2 className="font-[family-name:var(--font-cormorant)] text-2xl md:text-3xl font-semibold text-[#5A2026]">
                  5. Information Sharing
                </h2>
              </div>
              <div className="pl-13 text-sm leading-7 text-justify text-[#5B514A]">
                <p>
                  Your privacy is our priority. Customer information will be handled securely and will <strong>never be sold, rented, or unnecessarily shared</strong> with third parties. Information may only be shared with trusted service providers (such as delivery partners) strictly when required to fulfill your order or provide core website services.
                </p>
              </div>
            </div>

            <div className="w-full h-px bg-gradient-to-r from-transparent via-[#E8D5B5]/50 to-transparent"></div>

            {/* 6. Cookies & Technologies */}
            <div className="scroll-mt-24">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-[#FCFAF6] border border-[#E8D5B5] flex items-center justify-center text-[#5A2026] flex-shrink-0">
                  <Cookie className="w-5 h-5" />
                </div>
                <h2 className="font-[family-name:var(--font-cormorant)] text-2xl md:text-3xl font-semibold text-[#5A2026]">
                  6. Cookies & Technologies
                </h2>
              </div>
              <div className="pl-13 text-sm leading-7 text-justify text-[#5B514A]">
                <p>
                  Our website may use cookies and similar tracking technologies to ensure basic website functionality and to gather basic analytics. This helps us understand how our platform is used and allows us to improve your browsing experience. You can choose to disable cookies through your browser settings, though some features of the site may not function properly without them.
                </p>
              </div>
            </div>

            <div className="w-full h-px bg-gradient-to-r from-transparent via-[#E8D5B5]/50 to-transparent"></div>

            {/* 7. Data Security */}
            <div className="scroll-mt-24">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-[#FCFAF6] border border-[#E8D5B5] flex items-center justify-center text-[#5A2026] flex-shrink-0">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <h2 className="font-[family-name:var(--font-cormorant)] text-2xl md:text-3xl font-semibold text-[#5A2026]">
                  7. Data Security
                </h2>
              </div>
              <div className="pl-13 text-sm leading-7 text-justify text-[#5B514A]">
                <p>
                  We implement appropriate technical and organizational security measures designed to protect your personal data against accidental loss, unauthorized access, alteration, or disclosure. However, please remember that no method of transmission over the Internet or method of electronic storage is 100% secure.
                </p>
              </div>
            </div>

            <div className="w-full h-px bg-gradient-to-r from-transparent via-[#E8D5B5]/50 to-transparent"></div>

            {/* 8. Data Retention */}
            <div className="scroll-mt-24">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-[#FCFAF6] border border-[#E8D5B5] flex items-center justify-center text-[#5A2026] flex-shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <h2 className="font-[family-name:var(--font-cormorant)] text-2xl md:text-3xl font-semibold text-[#5A2026]">
                  8. Data Retention
                </h2>
              </div>
              <div className="pl-13 text-sm leading-7 text-justify text-[#5B514A]">
                <p>
                  We will retain your personal information only for as long as is necessary for the purposes set out in this Privacy Policy. Customer details are kept securely on file to assist with future orders and historical record-keeping, and will be deleted when no longer required or upon valid request.
                </p>
              </div>
            </div>

            <div className="w-full h-px bg-gradient-to-r from-transparent via-[#E8D5B5]/50 to-transparent"></div>

            {/* 9. Your Rights */}
            <div className="scroll-mt-24">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-[#FCFAF6] border border-[#E8D5B5] flex items-center justify-center text-[#5A2026] flex-shrink-0">
                  <Shield className="w-5 h-5" />
                </div>
                <h2 className="font-[family-name:var(--font-cormorant)] text-2xl md:text-3xl font-semibold text-[#5A2026]">
                  9. Your Rights
                </h2>
              </div>
              <div className="pl-13 text-sm leading-7 text-justify text-[#5B514A]">
                <p>
                  You have the right to access the personal information we hold about you and to ask that your personal information be corrected, updated, or deleted. If you would like to exercise this right, please contact us using the contact information provided below.
                </p>
              </div>
            </div>

            <div className="w-full h-px bg-gradient-to-r from-transparent via-[#E8D5B5]/50 to-transparent"></div>

            {/* 10. Policy Updates */}
            <div className="scroll-mt-24">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-[#FCFAF6] border border-[#E8D5B5] flex items-center justify-center text-[#5A2026] flex-shrink-0">
                  <RefreshCw className="w-5 h-5" />
                </div>
                <h2 className="font-[family-name:var(--font-cormorant)] text-2xl md:text-3xl font-semibold text-[#5A2026]">
                  10. Policy Updates
                </h2>
              </div>
              <div className="pl-13 text-sm leading-7 text-justify text-[#5B514A]">
                <p>
                  We reserve the right to update or modify this Privacy Policy at any time. Any changes will be reflected on this page with an updated "Last Updated" date at the top. We encourage you to review this policy periodically to stay informed about how we are protecting your information.
                </p>
              </div>
            </div>

            <div className="w-full h-px bg-gradient-to-r from-transparent via-[#E8D5B5]/50 to-transparent"></div>

            {/* 11. Contact Us */}
            <div className="scroll-mt-24">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-[#FCFAF6] border border-[#E8D5B5] flex items-center justify-center text-[#5A2026] flex-shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <h2 className="font-[family-name:var(--font-cormorant)] text-2xl md:text-3xl font-semibold text-[#5A2026]">
                  11. Contact Us
                </h2>
              </div>
              <div className="pl-13 text-sm leading-7 text-justify text-[#5B514A]">
                <p className="mb-6">
                  If you have any questions or concerns regarding this Privacy Policy or our data practices, please do not hesitate to contact us at:
                </p>
                <div className="bg-[#FCFAF6] border border-[#E8D5B5] rounded-xl p-6">
                  <ul className="space-y-4">
                    <li className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-4">
                      <span className="font-semibold text-[#29231F] min-w-32">Business Name:</span>
                      <span>Iyer's Pooja Products</span>
                    </li>
                    <li className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-4">
                      <span className="font-semibold text-[#29231F] min-w-32">Email Address:</span>
                      <a href="mailto:[Email Address]" className="text-[#6B242D] hover:text-[#5A2026] transition-colors">[Email Address]</a>
                    </li>
                    <li className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-4">
                      <span className="font-semibold text-[#29231F] min-w-32">Phone Number:</span>
                      <a href="tel:[Phone Number]" className="text-[#6B242D] hover:text-[#5A2026] transition-colors">[Phone Number]</a>
                    </li>
                    <li className="flex flex-col sm:flex-row sm:items-start gap-1 sm:gap-4">
                      <span className="font-semibold text-[#29231F] min-w-32">Business Address:</span>
                      <span>Kolathur , Chennai</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </main>
  );
}
