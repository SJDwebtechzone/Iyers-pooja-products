"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useRef, useEffect } from "react";
import {
  ChevronRight,
  ArrowRight,
  Package,
  ListOrdered,
  Star,
  Info,
  CheckCircle2,
  Sparkles,
  Phone,
  Calendar,
  User,
  Heart,
  ShieldCheck,
  Flame,
  Award,
  Send,
  X,
} from "lucide-react";

// -------------------------------------------------------------
// API BASE
// -------------------------------------------------------------

const API_BASE =
  process.env.NEXT_PUBLIC_API_URL || "http://localhost:3001";

// -------------------------------------------------------------
// SAMAGRI ITEM DATA MODEL
// -------------------------------------------------------------

interface SamagriItem {
  sno: number;
  nameEn: string;
  nameTa: string;
  quantity: string;
}

// -------------------------------------------------------------
// FALLBACK SAMAGRI ITEM DATA
// -------------------------------------------------------------

const fallbackSamagriList: SamagriItem[] = [
  {
    sno: 1,
    nameEn: "Betel Leaves",
    nameTa: "வெற்றிலை",
    quantity: "21 Pieces",
  },
  {
    sno: 2,
    nameEn: "Areca Nuts",
    nameTa: "பாக்கு",
    quantity: "21 Pieces",
  },
  {
    sno: 3,
    nameEn: "Banana",
    nameTa: "வாழைப்பழம்",
    quantity: "12 Pieces",
  },
  {
    sno: 4,
    nameEn: "Coconut",
    nameTa: "தேங்காய்",
    quantity: "2 Pieces",
  },
  {
    sno: 5,
    nameEn: "Turmeric",
    nameTa: "மஞ்சள்",
    quantity: "1 Packet",
  },
  {
    sno: 6,
    nameEn: "Kumkum",
    nameTa: "குங்குமம்",
    quantity: "1 Packet",
  },
  {
    sno: 7,
    nameEn: "Pooja Flowers",
    nameTa: "பூக்கள்",
    quantity: "1 Packet",
  },
  {
    sno: 8,
    nameEn: "Panchamirtham",
    nameTa: "பஞ்சாமிர்தம்",
    quantity: "1 Bowl",
  },
  {
    sno: 9,
    nameEn: "Ghee (Cow Ghee)",
    nameTa: "நெய்",
    quantity: "1 Small Cup",
  },
  {
    sno: 10,
    nameEn: "Incense Sticks",
    nameTa: "அகர்பத்தி",
    quantity: "1 Packet",
  },
  {
    sno: 11,
    nameEn: "Camphor (Karpooram)",
    nameTa: "கற்பூரம்",
    quantity: "1 Packet",
  },
  {
    sno: 12,
    nameEn: "Sandalwood Paste",
    nameTa: "சந்தனம்",
    quantity: "1 Cup",
  },
  {
    sno: 13,
    nameEn: "Akshatha (Sacred Rice)",
    nameTa: "அட்சதை",
    quantity: "1 Packet",
  },
  {
    sno: 14,
    nameEn: "Cotton Wicks & Oil",
    nameTa: "பஞ்சு திரி & நல்லெண்ணெய்",
    quantity: "1 Set",
  },
];

// -------------------------------------------------------------
// POOJA PROCESS
// -------------------------------------------------------------

const poojaProcessSteps = [
  {
    step: "01",
    title: "Sankalpam & Ganapathi Dhyanam",
    titleTa: "சங்கல்பம் & கணபதி பூஜை",
    desc: "Invoking Lord Ganesha with sacred Vedic chants, formally announcing the devotee's Gotram, Nakshatram, Rasi, and prayer intentions for divine blessings.",
  },
  {
    step: "02",
    title: "Punyahavachanam & Kalasha Sthapana",
    titleTa: "புண்யாஹவாசனம் & கலச ஸ்தாபனம்",
    desc: "Purification rituals invoking Varuna and holy river waters into the sacred copper/brass Kalash adorned with mango leaves and coconut.",
  },
  {
    step: "03",
    title: "Maha Abhishekam",
    titleTa: "மகா அபிஷேகம்",
    desc: "Sacred ritual bathing of the consecrated temple deity using pure Cow Milk, Honey, Curd, Panchamirtham, Tender Coconut water, Sandalwood paste, and Holy Teertham.",
  },
  {
    step: "04",
    title: "Alankaram & Archana",
    titleTa: "அலங்காரம் & அர்ச்சனை",
    desc: "Adorning the deity with sacred silk vastrams, fragrant fresh flower garlands, and reciting 108 / 1008 Ashtothra Shatanamavali divine names.",
  },
  {
    step: "05",
    title: "Maha Deeparadhana & Harathi",
    titleTa: "மகா தீபாராதனை",
    desc: "Waving multi-tiered sacred camphor lamps and ghee deepams with temple bells, Vedic chants, and sounding of divine instruments.",
  },
  {
    step: "06",
    title: "Prasadham & Ashirvachanam",
    titleTa: "பிரசாதம் & ஆசீர்வாதம்",
    desc: "Bestowing of energized temple teertham, vibhuti, kumkum, and Maha Prasadham along with traditional Vedic priest blessings for the entire family.",
  },
];

// -------------------------------------------------------------
// BENEFITS
// -------------------------------------------------------------

const benefitsList = [
  {
    icon: Sparkles,
    title: "Spiritual Elevation & Peace",
    titleTa: "மன அமைதி மற்றும் ஆன்மீக அருள்",
    desc: "Dissolves negative energy, relieves mental stress, and brings deep spiritual peace and tranquility into your life.",
  },
  {
    icon: ShieldCheck,
    title: "Obstacle Removal & Protection",
    titleTa: "தடைகள் நீங்குதல் மற்றும் பாதுகாப்பு",
    desc: "Removes unseen doshas, evil eye (drishti), and hurdles hindering your personal, professional, or academic progress.",
  },
  {
    icon: Heart,
    title: "Family Harmony & Health",
    titleTa: "குடும்ப நலம் மற்றும் நல்வாழ்வு",
    desc: "Promotes unity among family members, strengthens relationships, and invokes longevity, vitality, and well-being.",
  },
  {
    icon: Award,
    title: "Prosperity & Growth",
    titleTa: "செல்வ வளம் மற்றும் தொழில் வளர்ச்சி",
    desc: "Invokes the grace of Goddess Mahalakshmi for financial stability, successful business ventures, and career growth.",
  },
  {
    icon: Flame,
    title: "Planetary Dosha Nivarana",
    titleTa: "நவக்கிரக தோஷ நிவர்த்தி",
    desc: "Mitigates malefic planetary influences (Navagraha doshas) through authentic temple agamic rituals.",
  },
  {
    icon: CheckCircle2,
    title: "Generational Blessings",
    titleTa: "வம்ச விருத்தி மற்றும் சந்ததி நன்மை",
    desc: "Creates an enduring spiritual shield of divine grace that protects your lineage and future generations.",
  },
];

// -------------------------------------------------------------
// IMPORTANT NOTES
// -------------------------------------------------------------

const importantNotes = [
  {
    title: "Devotee Details for Sankalpam",
    points: [
      "Please provide the Full Name, Nakshatram (Birth Star), Rasi (Moon Sign), and Gotram of all family members participating.",
      "Specific prayer intentions (e.g., career growth, health, wedding, child blessing) can be included in the Sankalpam.",
    ],
  },
  {
    title: "Temple Attire & Guidelines",
    points: [
      "Traditional Indian attire is strictly recommended when attending in person.",
      "Devotees attending in person are advised to reach the temple 30 minutes prior to the scheduled Muhurtham.",
    ],
  },
  {
    title: "Auspicious Timing & Muhurtham",
    points: [
      "Temple rituals are scheduled according to auspicious Panchangam timings and temple Agamic traditions.",
      "Custom dates can be chosen based on your family's preferred Nakshatra, Tithi, or special occasion.",
    ],
  },
  {
    title: "Prasadham Dispatch & Delivery",
    points: [
      "For remote devotees, sanctified Prasadham may be dispatched according to package availability.",
      "Tracking details will be provided after postal dispatch where applicable.",
    ],
  },
];

// -------------------------------------------------------------
// COMPONENT
// -------------------------------------------------------------

export default function TemplePackagePage() {
  const [activeTab, setActiveTab] = useState<
    "package" | "process" | "benefits" | "notes"
  >("package");

  // -----------------------------------------------------------
  // LIVE SAMAGRI DATA FROM BACKEND
  // -----------------------------------------------------------

  const [samagriList, setSamagriList] =
    useState<SamagriItem[]>(fallbackSamagriList);

  const [itemsLoading, setItemsLoading] = useState(true);

  useEffect(() => {
    const fetchTemplePackages = async () => {
      try {
        setItemsLoading(true);

        const res = await fetch(`${API_BASE}/temple-packages`);

        if (!res.ok) {
          throw new Error("Failed to fetch temple packages");
        }

        const data = await res.json();

        if (Array.isArray(data) && data.length > 0) {
          const mapped: SamagriItem[] = data.map(
            (item: {
              sno?: number;
              english?: string;
              tamil?: string;
              quantity?: string;
              nameEn?: string;
              nameTa?: string;
              name?: string;
            }, index: number) => ({
              sno: item.sno ?? index + 1,
              nameEn: item.english ?? item.nameEn ?? item.name ?? "",
              nameTa: item.tamil ?? item.nameTa ?? "",
              quantity: item.quantity ?? "",
            })
          );

          setSamagriList(mapped);
        }
      } catch (error) {
        console.error("Failed to load temple package items:", error);

        // Keep fallback data when backend is unavailable
        setSamagriList(fallbackSamagriList);
      } finally {
        setItemsLoading(false);
      }
    };

    fetchTemplePackages();
  }, []);

  // -----------------------------------------------------------

  const [isEnquiryOpen, setIsEnquiryOpen] = useState(false);

  // BOOKING STATE
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [bookingSuccess, setBookingSuccess] = useState(false);
  const [bookingForm, setBookingForm] = useState({
    name: "",
    mobile: "",
    address: "",
    email: "",
  });

  const handleBookingSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const res = await fetch(`${API_BASE}/bookings`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...bookingForm,
          pooja: "Thirumanjam (Temple Package)",
        }),
      });

      if (!res.ok) throw new Error("Booking failed");

      setBookingSuccess(true);

      setTimeout(() => {
        setBookingSuccess(false);
        setIsBookingOpen(false);
        setBookingForm({ name: "", mobile: "", address: "", email: "" });
      }, 2500);
    } catch {
      alert("Something went wrong. Please try again.");
    }
  };

  const detailsSectionRef = useRef<HTMLDivElement>(null);

  // -----------------------------------------------------------
  // SCROLL TO TAB
  // -----------------------------------------------------------

  const scrollToTab = (
    tab: "package" | "process" | "benefits" | "notes"
  ) => {
    setActiveTab(tab);

    if (detailsSectionRef.current) {
      const topOffset =
        detailsSectionRef.current.getBoundingClientRect().top +
        window.scrollY -
        100;

      window.scrollTo({
        top: topOffset,
        behavior: "smooth",
      });
    }
  };

  // -----------------------------------------------------------
  // HASH NAVIGATION
  // -----------------------------------------------------------

  useEffect(() => {
    const handleHash = () => {
      if (typeof window === "undefined") return;

      const rawHash = window.location.hash
        .replace("#", "")
        .toLowerCase()
        .trim();

      if (!rawHash) return;

      if (rawHash.includes("process")) {
        setActiveTab("process");
      } else if (rawHash.includes("benefit")) {
        setActiveTab("benefits");
      } else if (rawHash.includes("note")) {
        setActiveTab("notes");
      } else {
        setActiveTab("package");
      }

      setTimeout(() => {
        const el =
          document.getElementById("package-details") ||
          detailsSectionRef.current;

        if (el) {
          el.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }
      }, 120);
    };

    handleHash();

    window.addEventListener("hashchange", handleHash);

    return () => {
      window.removeEventListener("hashchange", handleHash);
    };
  }, []);

  // -----------------------------------------------------------
  // RETURN
  // -----------------------------------------------------------

  return (
    <div className="min-h-screen bg-[#FAF6EE] text-[#29231F] font-sans antialiased selection:bg-[#B08A45]/30">
      <style jsx global>{`
        @keyframes priest-blink {
          0%, 100% { opacity: 1; box-shadow: 0 0 0 rgba(243, 215, 138, 0); }
          50% { opacity: 0.7; box-shadow: 0 0 14px rgba(243, 215, 138, 0.9); }
        }
        .animate-priest-blink {
          animation: priest-blink 1.6s ease-in-out infinite;
        }
      `}</style>
      {/* ========================================================= */}
      {/* HERO SECTION */}
      {/* ========================================================= */}

      <section className="relative pt-[90px] overflow-hidden bg-[#FAF6EE] border-b border-[#E8DDC8]">
        <div className="mx-auto max-w-[1600px] grid grid-cols-1 lg:grid-cols-12 items-stretch min-h-[580px] lg:min-h-[640px]">
          <div className="lg:col-span-6 flex flex-col justify-between pt-10 sm:pt-14 lg:pt-16 pb-8 px-6 sm:px-10 lg:pl-16 lg:pr-10 z-10">
            <div>
              <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-normal tracking-tight text-[#42151B] leading-[1.15]">
                Temple Package
              </h1>

              <div className="flex items-center gap-3 my-4 sm:my-5">
                <span className="h-px w-12 bg-gradient-to-r from-transparent to-[#B08A45]" />

                <div className="flex items-center gap-1.5 text-[#B08A45]">
                  <span className="w-1.5 h-1.5 rotate-45 border border-[#B08A45]" />
                  <span className="w-2.5 h-2.5 rotate-45 bg-[#B08A45]" />
                  <span className="w-1.5 h-1.5 rotate-45 border border-[#B08A45]" />
                </div>

                <span className="h-px w-24 bg-gradient-to-l from-transparent to-[#B08A45]" />
              </div>

              <p className="text-[15px] sm:text-base text-[#52443C] leading-relaxed max-w-xl font-normal mt-2">
                Experience divine blessings with our specially curated Temple
                Packages performed in sacred temples by experienced priests
                with traditional rituals for peace, prosperity and spiritual
                growth.
              </p>

              <div className="grid grid-cols-3 gap-3 sm:gap-6 mt-8 sm:mt-10 max-w-lg">
                <div className="flex flex-col items-center text-center p-3 sm:p-4 rounded-xl bg-[#F4EDE0]/70 border border-[#E5D7C0] transition-transform hover:-translate-y-0.5">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center text-[#9E2A2B] mb-2">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="w-8 h-8"
                    >
                      <path d="M12 2v2m0 0l-3 3h6l-3-3z" />
                      <path d="M7 7h10l-1 4H8L7 7z" />
                      <path d="M5 11h14l-1 5H6l-1-5z" />
                      <path d="M3 16h18v6H3v-6z" />
                      <path d="M10 22v-4h4v4" />
                    </svg>
                  </div>

                  <span className="text-xs sm:text-[13px] font-semibold text-[#42151B] leading-tight">
                    Ancient Temples
                  </span>
                </div>

                <div className="flex flex-col items-center text-center p-3 sm:p-4 rounded-xl bg-[#F4EDE0]/70 border border-[#E5D7C0] transition-transform hover:-translate-y-0.5">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center text-[#9E2A2B] mb-2">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="w-8 h-8"
                    >
                      <circle cx="12" cy="7" r="4" />
                      <path d="M6 21v-2a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v2" />
                      <path d="M12 3v2" />
                      <path d="M10 5h4" />
                    </svg>
                  </div>

                  <span className="text-xs sm:text-[13px] font-semibold text-[#42151B] leading-tight">
                    Experienced Priests
                  </span>
                </div>

                <div className="flex flex-col items-center text-center p-3 sm:p-4 rounded-xl bg-[#F4EDE0]/70 border border-[#E5D7C0] transition-transform hover:-translate-y-0.5">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center text-[#9E2A2B] mb-2">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="w-8 h-8"
                    >
                      <path d="M12 4c-1.5 3-4 6-4 9a4 4 0 0 0 8 0c0-3-2.5-6-4-9z" />
                      <path d="M7 18c2.5 1 5 1 7.5 0" />
                    </svg>
                  </div>

                  <span className="text-xs sm:text-[13px] font-semibold text-[#42151B] leading-tight">
                    Traditional Rituals
                  </span>
                </div>
              </div>
            </div>

            <div className="mt-10 sm:mt-12 -ml-6 sm:-ml-10 lg:-ml-16 self-start">
              <div className="inline-flex items-center gap-2 bg-[#5A121D] text-[#F3EAD8] text-xs sm:text-sm font-medium py-2.5 pl-6 sm:pl-10 pr-8 rounded-r-3xl shadow-md border-y border-r border-[#782330]">
                <Link
                  href="/"
                  className="hover:text-amber-300 transition-colors"
                >
                  Home
                </Link>

                <ChevronRight size={14} className="text-[#C79D55]" />

                <Link
                  href="/package"
                  className="hover:text-amber-300 transition-colors"
                >
                  Pooja Packages
                </Link>

                <ChevronRight size={14} className="text-[#C79D55]" />

                <span className="text-[#E7BE6B] font-semibold">
                  Temple Package
                </span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 relative min-h-[380px] lg:min-h-full overflow-hidden">
            <Image
              src="/images/temple_hero_gopuram.jpg"
              alt="Illuminated ancient South Indian temple gopuram"
              fill
              priority
              className="object-cover object-center scale-105"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />

            <div className="absolute inset-y-0 left-0 w-24 sm:w-36 lg:w-48 bg-gradient-to-r from-[#FAF6EE] via-[#FAF6EE]/80 to-transparent pointer-events-none hidden lg:block" />

            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* PACKAGE DETAILS */}
      {/* ========================================================= */}

      <section
        ref={detailsSectionRef}
        id="package-details"
        className="scroll-mt-28 py-10 sm:py-16 px-4 sm:px-8 max-w-[1400px] mx-auto"
      >
        <div className="text-center mb-8">
          <span className="inline-block px-4 py-1 rounded-full bg-[#EFE3CF] border border-[#DECBB0] text-[11px] font-bold tracking-[0.25em] uppercase text-[#88242F] mb-3">
            Thirumanjam
          </span>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-[40px] font-normal text-[#42151B]">
            Package Details
          </h2>
        </div>

        <div className="relative rounded-2xl bg-[#FCFAF5] border border-[#DFCBB0] p-4 sm:p-7 shadow-[0_10px_35px_rgba(80,20,30,0.07)] overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">
            {/* SIDEBAR */}

            <div className="lg:col-span-3 bg-[#4A1018] rounded-xl p-3 sm:p-4 text-white shadow-lg space-y-2">
              <button
                type="button"
                onClick={() => setActiveTab("package")}
                className={`w-full flex items-center gap-3 px-4 py-3.5 rounded-lg text-left text-sm font-medium transition-all ${
                  activeTab === "package"
                    ? "bg-gradient-to-r from-[#7D1E28] to-[#8C232E] text-white shadow-md border-l-4 border-[#E7BE6B]"
                    : "text-[#E6CFCE] hover:bg-[#5E1520]"
                }`}
              >
                <Package size={18} />
                <span>Package Details</span>
              </button>

              <button
                type="button"
                onClick={() => setActiveTab("process")}
                className={`w-full flex items-center gap-3 px-4 py-3.5 rounded-lg text-left text-sm font-medium transition-all ${
                  activeTab === "process"
                    ? "bg-gradient-to-r from-[#7D1E28] to-[#8C232E] text-white shadow-md border-l-4 border-[#E7BE6B]"
                    : "text-[#E6CFCE] hover:bg-[#5E1520]"
                }`}
              >
                <ListOrdered size={18} />
                <span>Pooja Process</span>
              </button>

              <button
                type="button"
                onClick={() => setActiveTab("benefits")}
                className={`w-full flex items-center gap-3 px-4 py-3.5 rounded-lg text-left text-sm font-medium transition-all ${
                  activeTab === "benefits"
                    ? "bg-gradient-to-r from-[#7D1E28] to-[#8C232E] text-white shadow-md border-l-4 border-[#E7BE6B]"
                    : "text-[#E6CFCE] hover:bg-[#5E1520]"
                }`}
              >
                <Star size={18} />
                <span>Benefits</span>
              </button>

              <button
                type="button"
                onClick={() => setActiveTab("notes")}
                className={`w-full flex items-center gap-3 px-4 py-3.5 rounded-lg text-left text-sm font-medium transition-all ${
                  activeTab === "notes"
                    ? "bg-gradient-to-r from-[#7D1E28] to-[#8C232E] text-white shadow-md border-l-4 border-[#E7BE6B]"
                    : "text-[#E6CFCE] hover:bg-[#5E1520]"
                }`}
              >
                <Info size={18} />
                <span>Important Notes</span>
              </button>

              <div className="pt-4 mt-2 border-t border-white/15">
                <span className="text-[10px] uppercase tracking-wider text-[#D4B978]">
                  Selected Package
                </span>

                <div className="font-serif text-xl font-bold text-[#F3D78A] mt-1">
                  Thirumanjam
                </div>

                <div className="text-white text-lg font-semibold mt-1">
                  ₹1,999
                </div>

                <button
                  type="button"
                  onClick={() => setIsBookingOpen(true)}
                  className="mt-4 w-full rounded-lg bg-[#E5C77A] py-2.5 text-sm font-bold text-[#3D1418] hover:bg-[#F3D78A] transition-colors"
                >
                  Order Now
                </button>

                <button
                  type="button"
                  onClick={() => setIsBookingOpen(true)}
                  className="mt-3 w-full rounded-lg bg-[#F3D78A] px-3 py-2.5 text-center text-[11px] font-semibold text-[#3D1418] animate-priest-blink"
                >
                  Looking for an experienced Iyer for an upcoming pooja?
                </button>
              </div>
            </div>

            {/* CONTENT */}

            <div className="lg:col-span-9 relative min-h-[480px]">
              {/* PACKAGE TAB */}

              {activeTab === "package" && (
                <div className="space-y-4">
                  <div className="flex items-center justify-between gap-4">
                    <h3 className="font-serif text-xl sm:text-2xl text-[#42151B] font-semibold">
                      Pooja Samagri / Items List
                    </h3>

                    <span className="text-xs text-[#7A6458] font-medium bg-[#EFE3CF] px-3 py-1 rounded-md whitespace-nowrap">
                      {itemsLoading
                        ? "Loading..."
                        : `${samagriList.length} Sacred Items`}
                    </span>
                  </div>

                  <div className="overflow-x-auto rounded-lg border border-[#DFCBB0] shadow-sm bg-white">
                    <table className="w-full text-left text-xs sm:text-sm border-collapse">
                      <thead>
                        <tr className="bg-[#5A121D] text-white text-xs sm:text-[13px] font-semibold tracking-wider">
                          <th className="py-3 px-3 sm:px-4 w-14 text-center">
                            S.No
                          </th>

                          <th className="py-3 px-3 sm:px-5">
                            Name (English)
                          </th>

                          <th className="py-3 px-3 sm:px-5">
                            Name (Tamil)
                          </th>

                          <th className="py-3 px-3 sm:px-5">
                            Quantity
                          </th>
                        </tr>
                      </thead>

                      <tbody className="divide-y divide-[#EFE3CF]">
                        {samagriList.map((item, index) => (
                          <tr
                            key={`${item.sno}-${index}`}
                            className={`transition-colors hover:bg-[#F5EDE0] ${
                              index % 2 === 0
                                ? "bg-[#FAF7F0]"
                                : "bg-white"
                            }`}
                          >
                            <td className="py-2.5 px-3 sm:px-4 text-center text-[#7A6458] font-medium">
                              {item.sno}.
                            </td>

                            <td className="py-2.5 px-3 sm:px-5 font-medium text-[#3A2226]">
                              {item.nameEn}
                            </td>

                            <td className="py-2.5 px-3 sm:px-5 font-normal text-[#5A382A]">
                              {item.nameTa}
                            </td>

                            <td className="py-2.5 px-3 sm:px-5 font-medium text-[#7D1E28]">
                              {item.quantity}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>

                  <div className="flex items-start gap-2 text-xs sm:text-[13px] text-[#6E584D] italic bg-[#F7EFE1] p-3 rounded-lg border border-[#E5D7C0]">
                    <Info
                      size={16}
                      className="text-[#9E2A2B] shrink-0 mt-0.5"
                    />

                    <span>
                      The items and quantities may vary slightly based on the
                      priest&apos;s guidance and temple tradition.
                    </span>
                  </div>
                </div>
              )}

              {/* PROCESS TAB */}

              {activeTab === "process" && (
                <div className="space-y-4">
                  <div className="flex items-center justify-between gap-4">
                    <h3 className="font-serif text-xl sm:text-2xl text-[#42151B] font-semibold">
                      Step-by-Step Temple Pooja Process
                    </h3>

                    <span className="text-xs text-[#7A6458] font-medium bg-[#EFE3CF] px-3 py-1 rounded-md">
                      6 Sacred Steps
                    </span>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {poojaProcessSteps.map((step) => (
                      <div
                        key={step.step}
                        className="bg-white p-5 rounded-xl border border-[#DFCBB0] shadow-sm hover:shadow-md transition-shadow"
                      >
                        <div className="flex items-start gap-3">
                          <span className="w-9 h-9 rounded-full bg-[#5A121D] text-[#F5E6C8] flex items-center justify-center font-serif font-bold text-sm shrink-0">
                            {step.step}
                          </span>

                          <div>
                            <h4 className="font-serif text-lg font-semibold text-[#42151B]">
                              {step.title}
                            </h4>

                            <span className="text-xs text-[#8A5B3E] font-medium block mb-2">
                              {step.titleTa}
                            </span>

                            <p className="text-xs sm:text-[13px] text-[#5A4940] leading-relaxed">
                              {step.desc}
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="mt-4 p-4 rounded-xl bg-[#F7EFE1] border border-[#DFCBB0] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                    <p className="text-xs sm:text-sm text-[#523F36]">
                      Want to schedule a personalized Sankalpam for your
                      family?
                    </p>

                    <button
                      type="button"
                      onClick={() => setIsEnquiryOpen(true)}
                      className="px-4 py-2 bg-[#5A121D] text-white text-xs font-semibold rounded-lg hover:bg-[#400B13]"
                    >
                      Book Sankalpam
                    </button>
                  </div>
                </div>
              )}

              {/* BENEFITS TAB */}

              {activeTab === "benefits" && (
                <div className="space-y-4">
                  <div className="flex items-center justify-between gap-4">
                    <h3 className="font-serif text-xl sm:text-2xl text-[#42151B] font-semibold">
                      Spiritual & Worldly Benefits
                    </h3>

                    <span className="text-xs text-[#7A6458] font-medium bg-[#EFE3CF] px-3 py-1 rounded-md">
                      Divine Blessings
                    </span>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {benefitsList.map((item, idx) => {
                      const IconComp = item.icon;

                      return (
                        <div
                          key={idx}
                          className="bg-white p-5 rounded-xl border border-[#DFCBB0] shadow-sm hover:shadow-md transition-shadow flex items-start gap-4"
                        >
                          <div className="w-10 h-10 rounded-full bg-[#FAF2E6] border border-[#DECBB0] flex items-center justify-center text-[#781D27] shrink-0">
                            <IconComp size={20} />
                          </div>

                          <div>
                            <h4 className="font-serif text-base sm:text-lg font-semibold text-[#42151B]">
                              {item.title}
                            </h4>

                            <span className="text-xs text-[#8A5B3E] font-medium block mb-1.5">
                              {item.titleTa}
                            </span>

                            <p className="text-xs sm:text-[13px] text-[#5A4940] leading-relaxed">
                              {item.desc}
                            </p>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* NOTES TAB */}

              {activeTab === "notes" && (
                <div className="space-y-4">
                  <div className="flex items-center justify-between gap-4">
                    <h3 className="font-serif text-xl sm:text-2xl text-[#42151B] font-semibold">
                      Guidelines & Important Information
                    </h3>

                    <span className="text-xs text-[#7A6458] font-medium bg-[#EFE3CF] px-3 py-1 rounded-md">
                      Essential Guide
                    </span>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {importantNotes.map((section, idx) => (
                      <div
                        key={idx}
                        className="bg-white p-5 rounded-xl border border-[#DFCBB0] shadow-sm"
                      >
                        <h4 className="font-serif text-base sm:text-lg font-semibold text-[#42151B] mb-3 flex items-center gap-2">
                          <span className="w-2 h-2 rounded-full bg-[#9E2A2B]" />

                          {section.title}
                        </h4>

                        <ul className="space-y-2">
                          {section.points.map((pt, pIdx) => (
                            <li
                              key={pIdx}
                              className="text-xs sm:text-[13px] text-[#5A4940] leading-relaxed flex items-start gap-2"
                            >
                              <span className="text-[#9E2A2B] mt-1 font-bold">
                                •
                              </span>

                              <span>{pt}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* ACTION CARDS */}
      {/* ========================================================= */}

      <section className="py-6 sm:py-10 px-4 sm:px-8 max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6">
          <div className="bg-[#FCFAF5] rounded-2xl p-6 sm:p-7 border border-[#DFCBB0] shadow-[0_4px_20px_rgba(80,20,30,0.05)] flex flex-col justify-between">
            <div>
              <h3 className="font-serif text-xl sm:text-2xl font-semibold text-[#42151B] mb-2">
                Pooja Process
              </h3>

              <p className="text-xs sm:text-[13px] text-[#5D4E47] leading-relaxed mb-6">
                Step-by-step traditional rituals performed by our experienced
                priests with devotion and care.
              </p>
            </div>

            <button
              type="button"
              onClick={() => scrollToTab("process")}
              className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-[#781D27]"
            >
              <span>View Process</span>
              <ArrowRight size={15} />
            </button>
          </div>

          <div className="bg-[#FCFAF5] rounded-2xl p-6 sm:p-7 border border-[#DFCBB0] shadow-[0_4px_20px_rgba(80,20,30,0.05)] flex flex-col justify-between">
            <div>
              <h3 className="font-serif text-xl sm:text-2xl font-semibold text-[#42151B] mb-2">
                Benefits
              </h3>

              <p className="text-xs sm:text-[13px] text-[#5D4E47] leading-relaxed mb-6">
                Receive divine blessings for peace, prosperity, success and
                spiritual growth.
              </p>
            </div>

            <button
              type="button"
              onClick={() => scrollToTab("benefits")}
              className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-[#781D27]"
            >
              <span>View Benefits</span>
              <ArrowRight size={15} />
            </button>
          </div>

          <div className="bg-[#FCFAF5] rounded-2xl p-6 sm:p-7 border border-[#DFCBB0] shadow-[0_4px_20px_rgba(80,20,30,0.05)] flex flex-col justify-between">
            <div>
              <h3 className="font-serif text-xl sm:text-2xl font-semibold text-[#42151B] mb-2">
                Important Notes
              </h3>

              <p className="text-xs sm:text-[13px] text-[#5D4E47] leading-relaxed mb-6">
                Essential information and guidelines to ensure a smooth and
                meaningful pooja experience.
              </p>
            </div>

            <button
              type="button"
              onClick={() => scrollToTab("notes")}
              className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-[#781D27]"
            >
              <span>View Notes</span>
              <ArrowRight size={15} />
            </button>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* ENQUIRY BANNER */}
      {/* ========================================================= */}

      <section className="py-10 sm:py-14 px-4 sm:px-8 max-w-[1400px] mx-auto">
        <div className="relative rounded-2xl bg-[#4A1018] border border-[#782330] p-6 sm:p-8 lg:p-10 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 items-center gap-6">
            <div className="lg:col-span-9">
              <h3 className="font-serif text-2xl sm:text-3xl text-[#FDF7E7] mb-2">
                Have Questions About Our Temple Package?
              </h3>

              <p className="text-sm text-[#E2CDCD]">
                Our team is here to help you choose the perfect pooja for your
                needs.
              </p>
            </div>

            <div className="lg:col-span-3 flex justify-center lg:justify-end">
              <button
                type="button"
                onClick={() => setIsEnquiryOpen(true)}
                className="inline-flex items-center gap-2 bg-[#E7BE6B] hover:bg-[#D4A950] text-[#3D0D14] text-sm font-bold px-7 py-3.5 rounded-lg"
              >
                <span>Enquire Now</span>
                <ArrowRight size={16} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* ENQUIRY MODAL */}
      {/* ========================================================= */}

      {isEnquiryOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
          <div className="relative w-full max-w-lg bg-[#FAF6EE] rounded-2xl border-2 border-[#DECBB0] shadow-2xl p-6 sm:p-8">
            <button
              type="button"
              onClick={() => setIsEnquiryOpen(false)}
              className="absolute top-4 right-4 text-[#7A6458] hover:text-[#42151B]"
              aria-label="Close modal"
            >
              <X size={20} />
            </button>

            <div className="text-center mb-6">
              <span className="text-xs font-bold tracking-widest text-[#B08A45] uppercase">
                Divine Temple Rituals
              </span>

              <h3 className="font-serif text-2xl sm:text-3xl text-[#42151B] mt-1 font-semibold">
                Enquire About Temple Package
              </h3>

              <p className="text-xs text-[#6A574E] mt-1">
                Fill in your details below and our team will contact you.
              </p>
            </div>

            <form
              onSubmit={(e) => {
                e.preventDefault();

                alert(
                  "Thank you for your enquiry! Our team will contact you shortly."
                );

                setIsEnquiryOpen(false);
              }}
              className="space-y-3.5"
            >
              <div>
                <label className="block text-xs font-semibold text-[#42151B] mb-1">
                  Full Name *
                </label>

                <div className="relative">
                  <User
                    size={16}
                    className="absolute left-3 top-3 text-[#9E2A2B]"
                  />

                  <input
                    type="text"
                    required
                    placeholder="Enter your name"
                    className="w-full pl-9 pr-3 py-2 text-sm bg-white border border-[#DECBB0] rounded-lg focus:outline-none focus:border-[#781D27]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-[#42151B] mb-1">
                    Phone Number *
                  </label>

                  <div className="relative">
                    <Phone
                      size={16}
                      className="absolute left-3 top-3 text-[#9E2A2B]"
                    />

                    <input
                      type="tel"
                      required
                      placeholder="+91 98765 43210"
                      className="w-full pl-9 pr-3 py-2 text-sm bg-white border border-[#DECBB0] rounded-lg focus:outline-none focus:border-[#781D27]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#42151B] mb-1">
                    Preferred Date
                  </label>

                  <div className="relative">
                    <Calendar
                      size={16}
                      className="absolute left-3 top-3 text-[#9E2A2B]"
                    />

                    <input
                      type="date"
                      className="w-full pl-9 pr-3 py-2 text-sm bg-white border border-[#DECBB0] rounded-lg focus:outline-none focus:border-[#781D27]"
                    />
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#42151B] mb-1">
                  Gotram / Nakshatram
                </label>

                <input
                  type="text"
                  placeholder="e.g. Koundinya Gotram, Rohini Nakshatram"
                  className="w-full px-3 py-2 text-sm bg-white border border-[#DECBB0] rounded-lg focus:outline-none focus:border-[#781D27]"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#42151B] mb-1">
                  Specific Requests / Temple Preference
                </label>

                <textarea
                  rows={2}
                  placeholder="Mention any specific temple or pooja requirements..."
                  className="w-full px-3 py-2 text-sm bg-white border border-[#DECBB0] rounded-lg focus:outline-none focus:border-[#781D27]"
                />
              </div>

              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 bg-[#5A121D] hover:bg-[#400B13] text-white py-3 rounded-lg text-sm font-semibold"
              >
                <Send size={16} />

                <span>Submit Temple Enquiry</span>
              </button>
            </form>
          </div>
        </div>
      )}

      {/* ========================================================= */}
      {/* BOOKING MODAL */}
      {/* ========================================================= */}
      {isBookingOpen && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
          <div className="relative w-full max-w-md rounded-2xl border-2 border-[#DECBB0] bg-[#FAF6EE] p-6 shadow-2xl sm:p-8">
            <button type="button" onClick={() => setIsBookingOpen(false)} className="absolute right-4 top-4 text-[#7A6458] hover:text-[#42151B]" aria-label="Close">
              <X size={20} />
            </button>

            {bookingSuccess ? (
              <div className="py-8 text-center">
                <h3 className="mb-2 font-serif text-2xl font-bold text-[#42151B]">Request Received!</h3>
                <p className="text-sm text-[#55463E]">Our team will contact you shortly to confirm.</p>
              </div>
            ) : (
              <>
                <h3 className="mb-1 font-serif text-2xl font-bold text-[#42151B]">Request for an Iyer</h3>
                <p className="mb-5 text-xs text-[#63534B]">Fill in your details and we&apos;ll get back to you shortly.</p>
                <form onSubmit={handleBookingSubmit} className="space-y-3.5">
                  <input type="text" required placeholder="Full Name" value={bookingForm.name} onChange={(e) => setBookingForm({ ...bookingForm, name: e.target.value })} className="w-full rounded-lg border border-[#DFCBB0] bg-white px-3 py-2.5 text-sm focus:border-[#7D1E28] focus:outline-none" />
                  <input type="tel" required placeholder="Mobile Number" value={bookingForm.mobile} onChange={(e) => setBookingForm({ ...bookingForm, mobile: e.target.value })} className="w-full rounded-lg border border-[#DFCBB0] bg-white px-3 py-2.5 text-sm focus:border-[#7D1E28] focus:outline-none" />
                  <input type="email" required placeholder="Email Address" value={bookingForm.email} onChange={(e) => setBookingForm({ ...bookingForm, email: e.target.value })} className="w-full rounded-lg border border-[#DFCBB0] bg-white px-3 py-2.5 text-sm focus:border-[#7D1E28] focus:outline-none" />
                  <textarea required rows={2} placeholder="Address" value={bookingForm.address} onChange={(e) => setBookingForm({ ...bookingForm, address: e.target.value })} className="w-full rounded-lg border border-[#DFCBB0] bg-white px-3 py-2.5 text-sm focus:border-[#7D1E28] focus:outline-none" />
                  <button type="submit" className="w-full rounded-lg bg-[#5A121D] py-3 text-sm font-bold tracking-wide text-white transition-colors hover:bg-[#400B13]">Submit</button>
                </form>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
}