"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import {
  ArrowRight,
  Check,
  Gift,
  Info,
  List,
  Phone,
  Sparkles,
  Star,
} from "lucide-react";

import OrderNowModal from "../components/order-now-modal";

export type PackageItem = {
  sno: number;
  english: string;
  tamil: string;
  quantity: string;
};

export type OccasionPackage = {
  id: string;
  title: string;
  description: string;
  intro: string;
  icon: "peace" | "obstacles" | "family" | "success";
  image?: string;
  price: string;
  items: PackageItem[];
  process: string[];
  benefits: string[];
  notes: string[];
};

export type PackageData = {
  title: string;
  subtitle: string;
  breadcrumb: string;

  heroImage: string;
  introImage: string;
  bannerImage?: string;

  bannerTitle: string;
  bannerSubtitle: string;

  introTitle: string;
  introText: string;

  benefits: {
    icon: "peace" | "obstacles" | "family" | "success";
    title: string;
  }[];

  items: PackageItem[];

  process: string[];
  benefitsDetails: string[];
  notes: string[];

  occasions: OccasionPackage[];

  enquireText?: string;
};

type PackagePageProps = {
  data: PackageData;
};

const API_BASE =
  process.env.NEXT_PUBLIC_API_URL || "https://iyerspoojaproducts.com/api";

/*
  IMPORTANT:
  The value on the RIGHT must exactly match
  the category/slug stored in your backend database.
*/
const OCCASION_TO_API_CATEGORY: Record<string, string> = {
  "ganapathy-homam": "ganapathi-homam",
  "house-warming": "grahapravesam",
  "satyanarayana-vratam": "satyanarayana-vratam",
  "daily-pooja": "daily-pooja",
  marriage: "marriage",
  "bhoomi-poojai": "bhoomi-poojai",
  punyahavachanam: "punyahavachanam",
  "ruthu-punyahavachanam": "ruthu-punyahavachanam",
  "ayush-homam": "ayush-homam",
  "family-ceremony": "family-ceremony",
};

const consumerRitualIds = [
  "ganapathy-homam",
  "marriage",
  "house-warming",
  "bhoomi-poojai",
  "punyahavachanam",
  "ruthu-punyahavachanam",
  "ayush-homam",
];

const consumerPackageData: PackageData = {
  title: "Consumer Package",
  subtitle:
    "Essential pooja essentials thoughtfully curated for sacred moments at home.",
  breadcrumb: "Consumer Package",

  heroImage: "/images/consumer-package-banner.png",
  introImage: "/images/image.png",
  bannerImage: "/images/kalash.jpg",

  bannerTitle: "Sacred Moments, Made Simple",
  bannerSubtitle: "Everything you need for your home pooja",

  introTitle: "A complete collection for every family ritual",

  introText:
    "Our consumer package brings together carefully selected pooja essentials for daily worship, festivals, and important family ceremonies. Each item is prepared to help you observe your traditions with ease and devotion.",

  benefits: [
    { icon: "peace", title: "Peace and positivity" },
    { icon: "obstacles", title: "Remove obstacles" },
    { icon: "family", title: "Family wellbeing" },
    { icon: "success", title: "Prosperity and success" },
  ],

  items: [
    {
      sno: 1,
      english: "Pure Brass Pooja Utensils Set",
      tamil: "பித்தளை பூஜை பாத்திரங்கள்",
      quantity: "1 set",
    },
  ],

  process: [],
  benefitsDetails: [],
  notes: [],

  occasions: [
    {
      id: "ganapathy-homam",
      title: "Ganapathy Homam",
      description:
        "Invoke Lord Ganesha's blessings to remove all obstacles.",
      intro:
        "Ganapathy Homam is a sacred fire ritual performed to invoke the blessings of Lord Ganesha. Our package includes all the essential samagri required for this ritual.",
      icon: "peace",
      price: "₹2,499",

      items: [
        {
          sno: 1,
          english: "Homa Kunda (Fire Pit)",
          tamil: "ஹோம குண்டம்",
          quantity: "1",
        },
        {
          sno: 2,
          english: "Pure A2 Cow Ghee",
          tamil: "தூய நெய்",
          quantity: "500 ml",
        },
      ],

      process: [
        "Prepare the homa kunda and arrange all samagri.",
        "Invoke Lord Ganesha.",
        "Perform the sankalpam.",
        "Offer ghee and samagri.",
      ],

      benefits: [
        "Removes obstacles before new beginnings.",
        "Invokes divine wisdom.",
      ],

      notes: [
        "A qualified priest is recommended.",
      ],
    },

    {
      id: "house-warming",
      title: "Grahapravesam",
      description:
        "Bless your new home with divine energy and positivity.",
      intro:
        "Griha Pravesham is an auspicious ceremony performed to sanctify a new home and invite divine blessings.",

      icon: "success",
      price: "₹4,999",

      items: [
        {
          sno: 1,
          english: "Kalash and Coconut",
          tamil: "கலசம் மற்றும் தேங்காய்",
          quantity: "1 set",
        },
      ],

      process: [
        "Prepare the home.",
        "Perform Vastu Pooja.",
        "Conduct Ganapathy Homam.",
      ],

      benefits: [
        "Creates an auspicious beginning.",
        "Invokes peace and prosperity.",
      ],

      notes: [
        "Confirm the muhurtham before the ceremony.",
      ],
    },

    {
      id: "satyanarayana-vratam",
      title: "Satyanarayana Vratam",
      description:
        "Thoughtfully prepared samagri for a devotional vratam.",
      intro:
        "Satyanarayana Vratam is a devotional ritual performed with family and devotees.",

      icon: "family",
      price: "₹2,999",

      items: [
        {
          sno: 1,
          english: "Satyanarayana Pooja Book",
          tamil: "சத்யநாராயண பூஜை புத்தகம்",
          quantity: "1",
        },
      ],

      process: [
        "Set up the altar.",
        "Perform the vratam.",
      ],

      benefits: [
        "Supports family devotion.",
      ],

      notes: [
        "Follow priest guidance.",
      ],
    },

    {
      id: "daily-pooja",
      title: "Daily Pooja",
      description:
        "Essential samagri for peaceful daily worship.",
      intro:
        "Daily Pooja helps maintain a peaceful and devotional household routine.",

      icon: "peace",
      price: "₹999",

      items: [
        {
          sno: 1,
          english: "Pure Brass Pooja Utensils Set",
          tamil: "பித்தளை பூஜை பாத்திரங்கள்",
          quantity: "1 set",
        },
      ],

      process: [
        "Clean the pooja space.",
        "Light the diya.",
      ],

      benefits: [
        "Supports a positive atmosphere.",
      ],

      notes: [
        "Follow family traditions.",
      ],
    },

    {
      id: "marriage",
      title: "Marriage",
      description:
        "Complete sacred samagri for wedding ceremonies.",
      intro:
        "Vivaha Samskara is a sacred ceremony performed according to Vedic traditions.",

      icon: "family",
      price: "₹15,999",

      items: [
        {
          sno: 1,
          english: "Pure Turmeric",
          tamil: "மஞ்சள்",
          quantity: "1 kg",
        },
      ],

      process: [
        "Vigneshwara Pooja.",
        "Kanyadaanam.",
        "Mangalya Dharanam.",
      ],

      benefits: [
        "Sanctifies the marital bond.",
      ],

      notes: [
        "Consult your family priest.",
      ],
    },

    {
      id: "bhoomi-poojai",
      title: "Bhoomi Poojai",
      description:
        "Sacred groundbreaking ritual before construction.",
      intro:
        "Bhoomi Pooja seeks blessings before beginning construction.",

      icon: "success",
      price: "₹3,499",

      items: [
        {
          sno: 1,
          english: "Navadhanyam",
          tamil: "நவதானியம்",
          quantity: "1 set",
        },
      ],

      process: [
        "Purify the construction site.",
        "Perform Bhoomi Devi invocation.",
      ],

      benefits: [
        "Brings auspiciousness to the property.",
      ],

      notes: [
        "Perform during an auspicious Muhurtham.",
      ],
    },

    {
      id: "punyahavachanam",
      title: "Punyahavachanam",
      description:
        "Sacred purification ceremony.",
      intro:
        "Punyahavachanam is a traditional Vedic purification ceremony.",

      icon: "peace",
      price: "₹1,999",

      items: [
        {
          sno: 1,
          english: "Copper Kalash",
          tamil: "செம்பு கலசம்",
          quantity: "1",
        },
      ],

      process: [
        "Perform Sankalpam.",
        "Invoke Varuna Deva.",
      ],

      benefits: [
        "Restores purity and positivity.",
      ],

      notes: [
        "Can be combined with other ceremonies.",
      ],
    },

    {
      id: "ruthu-punyahavachanam",
      title: "Ruthu Punyahavachanam",
      description:
        "Traditional coming-of-age ceremony.",
      intro:
        "A traditional family ceremony with prayers and blessings.",

      icon: "family",
      price: "₹4,499",

      items: [
        {
          sno: 1,
          english: "Turmeric Root",
          tamil: "மஞ்சள் கிழங்கு",
          quantity: "500 g",
        },
      ],

      process: [
        "Perform Vigneshwara invocation.",
        "Kalasha Sthapana.",
      ],

      benefits: [
        "Celebrates cultural traditions.",
      ],

      notes: [
        "Can be arranged according to family tradition.",
      ],
    },

    {
      id: "ayush-homam",
      title: "Ayush Homam",
      description:
        "Vedic longevity homam.",
      intro:
        "Ayush Homam is performed to seek blessings for health and long life.",

      icon: "peace",
      price: "₹2,799",

      items: [
        {
          sno: 1,
          english: "Homa Kunda",
          tamil: "ஹோம குண்டம்",
          quantity: "1 set",
        },
      ],

      process: [
        "Perform Sankalpam.",
        "Invoke Ayur Devata.",
      ],

      benefits: [
        "Seeks blessings for longevity.",
      ],

      notes: [
        "Often performed on the birth star.",
      ],
    },

    {
      id: "family-ceremony",
      title: "Family Ceremony",
      description:
        "A flexible pooja collection for family milestones.",
      intro:
        "A package designed for birthdays, anniversaries and family ceremonies.",

      icon: "obstacles",
      price: "₹2,499",

      items: [
        {
          sno: 1,
          english: "Brass Diya",
          tamil: "பித்தளை விளக்கு",
          quantity: "1",
        },
      ],

      process: [
        "Arrange the altar.",
        "Perform the prayer.",
      ],

      benefits: [
        "Creates an auspicious family gathering.",
      ],

      notes: [
        "Items can vary according to the ceremony.",
      ],
    },
  ],
};

export default function ConsumerPackagePage() {
  return <PackagePage data={consumerPackageData} />;
}

function PackagePage({ data }: PackagePageProps) {
  const [activeTab, setActiveTab] = useState("details");

  const [selectedRitual, setSelectedRitual] =
    useState<OccasionPackage | null>(null);

  const [dynamicItems, setDynamicItems] =
    useState<PackageItem[] | null>(null);

  const [dynamicPrice, setDynamicPrice] =
    useState<string | null>(null);

  const [isOrderOpen, setIsOrderOpen] =
    useState(false);

  const [isBookingOpen, setIsBookingOpen] =
    useState(false);

  const [bookingSuccess, setBookingSuccess] =
    useState(false);

  const [bookingForm, setBookingForm] = useState({
    name: "",
    mobile: "",
    address: "",
    email: "",
  });

  const handleBookingSubmit = async (
    e: React.FormEvent
  ) => {
    e.preventDefault();

    try {
      const res = await fetch(
        `${API_BASE}/bookings`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            ...bookingForm,
            pooja:
              selectedRitual?.title ||
              "Consumer Package",
          }),
        }
      );

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
    } catch (error) {
      console.error(error);
      alert("Something went wrong. Please try again.");
    }
  };

  /*
    ====================================================
    FETCH DYNAMIC ITEMS + DYNAMIC PRICE
    ====================================================
  */

  useEffect(() => {
    const fetchPackageData = async () => {
      // VERY IMPORTANT:
      // Reset previous ritual values immediately
      setDynamicItems(null);
      setDynamicPrice(null);

      if (!selectedRitual) return;

      const apiCategory =
        OCCASION_TO_API_CATEGORY[
          selectedRitual.id
        ];

      if (!apiCategory) {
        console.warn(
          "No API mapping found for:",
          selectedRitual.id
        );
        return;
      }

      /*
        FETCH ITEMS
      */

      try {
        const url =
          `${API_BASE}/consumer-packages/${apiCategory}`;

        console.log(
          "Fetching Consumer Package Items:",
          url
        );

        const itemsRes =
          await fetch(url);

        if (!itemsRes.ok) {
          throw new Error(
            `Items API failed: ${itemsRes.status}`
          );
        }

        const itemsData =
          await itemsRes.json();

        console.log(
          "Consumer Items API Response:",
          itemsData
        );

        const rows =
          Array.isArray(itemsData)
            ? itemsData
            : Array.isArray(itemsData?.items)
            ? itemsData.items
            : Array.isArray(itemsData?.data)
            ? itemsData.data
            : [];

        const mapped: PackageItem[] =
          rows.map(
            (r: Record<string, unknown>, index: number) => ({
              sno:
                Number(r.sno ?? r.id ?? index + 1),

              english:
                String(
                  r.name_english ??
                    r.english ??
                    r.nameEnglish ??
                    r.name ??
                    ""
                ),

              tamil:
                String(
                  r.name_tamil ??
                    r.tamil ??
                    r.nameTamil ??
                    ""
                ),

              quantity:
                String(r.quantity ?? r.qty ?? ""),
            })
          );

        if (mapped.length > 0) {
          setDynamicItems(mapped);
        } else {
          setDynamicItems(null);
        }
      } catch (error) {
        console.error(
          "Failed to fetch consumer package items:",
          error
        );

        setDynamicItems(null);
      }

      /*
        FETCH PRICE
      */

      try {
        const url =
          `${API_BASE}/package-prices/${apiCategory}`;

        console.log(
          "Fetching Consumer Package Price:",
          url
        );

        const priceRes =
          await fetch(url);

        if (!priceRes.ok) {
          throw new Error(
            `Price API failed: ${priceRes.status}`
          );
        }

        const priceData =
          await priceRes.json();

        console.log(
          "Consumer Price API Response:",
          priceData
        );

        const price =
          priceData?.price ??
          priceData?.data?.price ??
          null;

        if (
          price !== null &&
          price !== undefined
        ) {
          setDynamicPrice(
            String(price)
          );
        } else {
          setDynamicPrice(null);
        }
      } catch (error) {
        console.error(
          "Failed to fetch consumer package price:",
          error
        );

        setDynamicPrice(null);
      }
    };

    fetchPackageData();
  }, [selectedRitual]);

  /*
    ====================================================
    INITIAL RITUAL FROM URL HASH
    ====================================================
  */

  useEffect(() => {
    const handleHash = () => {
      const rawHash =
        window.location.hash
          .replace("#", "")
          .toLowerCase()
          .trim();

      if (!rawHash) {
        if (
          data.occasions.length > 0
        ) {
          setSelectedRitual(
            data.occasions[0]
          );
        }

        return;
      }

      const match =
        data.occasions.find(
          (occasion) =>
            occasion.id
              .toLowerCase() ===
              rawHash ||
            occasion.id
              .toLowerCase()
              .replace(/-/g, "") ===
              rawHash.replace(/-/g, "")
        );

      if (match) {
        setSelectedRitual(match);
        setActiveTab("details");

        setTimeout(() => {
          document
            .getElementById(
              "ritual-details-section"
            )
            ?.scrollIntoView({
              behavior: "smooth",
            });
        }, 150);
      }
    };

    handleHash();

    window.addEventListener(
      "hashchange",
      handleHash
    );

    return () => {
      window.removeEventListener(
        "hashchange",
        handleHash
      );
    };
  }, [data.occasions]);

  const tabs = [
    {
      id: "details",
      label: "Package Details",
      icon: Gift,
    },
    {
      id: "process",
      label: "Pooja Process",
      icon: List,
    },
    {
      id: "benefits",
      label: "Benefits",
      icon: Star,
    },
    {
      id: "notes",
      label: "Important Notes",
      icon: Info,
    },
  ];

  const displayPrice = dynamicPrice
    ? dynamicPrice.startsWith("₹")
      ? dynamicPrice
      : `₹${dynamicPrice}`
    : selectedRitual?.price || "";

  return (
    <main className="bg-[#FCFAF6] text-[#29231F]">

      <style jsx global>{`
        @keyframes priest-blink {
          0%, 100% {
            opacity: 1;
            box-shadow:
              0 0 0
              rgba(243, 215, 138, 0);
          }

          50% {
            opacity: 0.7;
            box-shadow:
              0 0 14px
              rgba(243, 215, 138, 0.9);
          }
        }

        .animate-priest-blink {
          animation:
            priest-blink
            1.6s
            ease-in-out
            infinite;
        }
      `}</style>

      {/* HERO BANNER */}
      <section className="relative mt-[90px] min-h-[620px] w-full items-center overflow-hidden border-b border-[#3D1418] flex">
        <div className="absolute inset-0">
          <Image
            src={data.heroImage}
            alt={data.title}
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-white/5 via-white/10 to-white/25" />
        </div>

        <div className="relative z-10 mx-auto w-full max-w-[1800px] px-6 lg:px-10">
          <div className="max-w-[650px] lg:ml-[52%]">
            <h1 className="font-[family-name:var(--font-cormorant)] text-4xl font-semibold leading-none text-[#5A1820] md:text-5xl lg:text-[78px]">
              <span>{data.title.split(" ")[0]}</span>{" "}
              <span className="bg-gradient-to-r from-[#B8872F] via-[#E6C977] to-[#A8741F] bg-clip-text text-transparent">
                {data.title.split(" ").slice(1).join(" ")}
              </span>
            </h1>

            <div className="my-6 flex items-center gap-4">
              <span className="h-px w-24 bg-[#D4B978]" />
              <span className="text-xl text-[#C39A43]">❖</span>
              <span className="h-px w-24 bg-[#D4B978]" />
            </div>

            <p className="max-w-xl text-lg font-medium leading-relaxed text-[#4A1015]">
              {data.subtitle}
            </p>
          </div>
        </div>
      </section>

      {/* CHOOSE YOUR CEREMONY */}
      <section className="mx-auto max-w-[1400px] px-4 py-10 sm:px-8 sm:py-14">
        <div className="mb-10 text-center">
          <h2 className="font-[family-name:var(--font-cormorant)] text-3xl font-bold text-[#42151B] sm:text-4xl">
            Choose Your Ceremony
          </h2>
        </div>

        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 lg:grid-cols-5">
          {data.occasions.map((occasion) => {
            const isActive = selectedRitual?.id === occasion.id;

            return (
              <button
                key={occasion.id}
                type="button"
                onClick={() => {
                  setSelectedRitual(occasion);
                  setActiveTab("details");
                  window.history.replaceState(null, "", `#${occasion.id}`);
                }}
                className={`flex flex-col items-center justify-center rounded-2xl border p-4 transition-all sm:p-5 ${
                  isActive
                    ? "border-[#4A1015] bg-[#4A1015] text-white shadow-md"
                    : "border-[#E8DEC8] bg-[#FAF7F0] text-[#42151B] hover:border-[#B08A45]"
                }`}
              >
                <div className="mb-3 flex h-12 w-12 items-center justify-center">
                  <RitualIcon type={occasion.icon} active={isActive} />
                </div>
                <span className="text-center font-[family-name:var(--font-cormorant)] text-base font-bold sm:text-lg">
                  {occasion.title}
                </span>
              </button>
            );
          })}
        </div>

        {selectedRitual && (
          <div className="mt-8 rounded-2xl border border-[#DFCBB0] bg-white p-5 sm:p-8">
            <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-12">
              <div className="relative aspect-[4/3] overflow-hidden rounded-xl lg:col-span-5">
                <Image
                  src={selectedRitual.image || data.introImage}
                  alt={selectedRitual.title}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="lg:col-span-7">
                <h3 className="font-[family-name:var(--font-cormorant)] text-3xl font-bold text-[#42151B]">
                  {selectedRitual.title}
                </h3>
                <p className="mt-2 font-semibold text-[#B37D2A]">
                  {selectedRitual.description}
                </p>
                <p className="mt-4 text-base leading-relaxed text-[#55463E] sm:text-lg">
                  {selectedRitual.intro}
                </p>
                <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
                  {selectedRitual.benefits.map((benefit) => (
                    <div key={benefit} className="flex items-center gap-2">
                      <Check size={16} className="text-[#7D1E28]" />
                      <span className="text-base sm:text-lg">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </section>

      {/* PACKAGE DETAILS */}

      {selectedRitual && (

        <section
          id="ritual-details-section"
          className="scroll-mt-28 bg-[#FAF7F0] px-5 py-14 sm:px-8 lg:px-12 lg:py-20"
        >

          <div className="mx-auto max-w-[1400px]">

            <div className="mb-8 text-center">

              <span className="inline-block rounded-full bg-[#EFE3CF] px-4 py-1 text-xs font-bold text-[#88242F]">
                {selectedRitual.title}
              </span>

              <h2 className="mt-3 font-[family-name:var(--font-cormorant)] text-3xl font-bold text-[#42151B] sm:text-4xl">
                Package Details
              </h2>

              <p className="mt-2 text-sm text-[#7A6458] sm:text-base">
                Select a package to view its samagri items.
              </p>

              <div className="mt-6 flex flex-wrap justify-center gap-2 sm:gap-3">
                {data.occasions
                  .filter((occasion) =>
                    consumerRitualIds.includes(occasion.id)
                  )
                  .map((occasion) => {
                    const isActive = selectedRitual.id === occasion.id;

                    return (
                      <button
                        key={occasion.id}
                        type="button"
                        onClick={() => {
                          setSelectedRitual(occasion);
                          setActiveTab("details");
                          window.history.replaceState(
                            null,
                            "",
                            `#${occasion.id}`
                          );
                        }}
                        className={`rounded-full border px-4 py-2.5 text-xs font-semibold transition-all duration-200 sm:px-5 sm:text-sm ${
                          isActive
                            ? "border-[#4A1015] bg-[#4A1015] text-white shadow-md ring-2 ring-[#D4B978]/40"
                            : "border-[#DFCBB0] bg-white text-[#42151B] hover:bg-[#F5EDE0]"
                        }`}
                      >
                        {occasion.title}
                      </button>
                    );
                  })}
              </div>
            </div>

            <div className="overflow-hidden rounded-xl border border-[#E8D5B5] bg-[#FFFCF7]">

              <div className="grid lg:grid-cols-[250px_1fr]">

                {/* SIDEBAR */}

                <div className="min-w-0 bg-[#5A2026] p-4 lg:p-5">

                 <div className="space-y-2">

                    {tabs.map(
                      (tab) => {

                        const Icon =
                          tab.icon;

                        const active =
                          activeTab ===
                          tab.id;

                        return (
                          <button
                            key={tab.id}
                            type="button"
                            onClick={() =>
                              setActiveTab(
                                tab.id
                              )
                            }
                            className={`flex w-full items-center gap-3 rounded-lg px-4 py-3.5 text-left text-sm transition-all ${
                              active
                                ? "bg-[#7A202B] text-white shadow-md"
                                : "text-white/80 hover:bg-white/10"
                            }`}
                          >

                            <Icon
                              size={19}
                              className={
                                active
                                  ? "text-[#D4B978]"
                                  : "text-white/70"
                              }
                            />

                            <span>
                              {tab.label}
                            </span>

                          </button>
                        );
                      }
                    )}

                  </div>

                                    <div className="mt-4 border-t border-white/15 pt-5">

                    <div className="mb-4">
                      <span className="block text-[10px] uppercase tracking-[0.16em] text-[#D4B978]">
                        Selected Package
                      </span>

                      <h3 className="mt-2 font-[family-name:var(--font-cormorant)] text-2xl font-bold leading-tight text-[#F3D78A]">
                        {selectedRitual.title}
                      </h3>

                      <div className="mt-2 text-xl font-bold text-white">
                        {displayPrice}
                      </div>
                    </div>

                    <button
                      type="button"
                      onClick={() =>
                        setIsOrderOpen(true)
                      }
                      className="w-full rounded-xl bg-[#E5C77A] px-4 py-3 text-sm font-bold text-[#3D1418] shadow-sm transition-all hover:bg-[#F3D78A] hover:shadow-md active:scale-[0.98]"
                    >
                      Order Now
                    </button>

                    <button
                      type="button"
                      onClick={() =>
                        setIsBookingOpen(true)
                      }
                      className="mt-3 w-full rounded-xl border border-[#F3D78A]/50 bg-[#F3D78A] px-3 py-3 text-center text-xs font-bold leading-relaxed text-[#3D1418] shadow-sm animate-priest-blink transition-transform hover:scale-[1.01]"
                    >
                      Looking for an experienced Iyer for an upcoming pooja?
                    </button>

                  </div>
                </div>

                {/* CONTENT */}

                <div className="min-w-0 p-2 sm:p-7 lg:p-9">

                  {activeTab ===
                    "details" && (

                    <div>

                      <div className="mb-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                        <h3 className="font-[family-name:var(--font-cormorant)] text-2xl font-bold text-[#42151B]">
                          Pooja Samagri / Items List
                        </h3>

                        <span className="inline-flex w-fit rounded-full bg-[#F5EDE0] px-3 py-1 text-xs font-semibold text-[#7D1E28]">
                          {selectedRitual.title} ({(dynamicItems ?? selectedRitual.items).length} Items)
                        </span>
                      </div>

                      <div className="mt-4 overflow-hidden rounded-lg border border-[#E8DCD0] shadow-sm">

                        <table className="w-full table-fixed border-collapse text-[10px] sm:text-xs md:text-sm">

                          <thead>

                            <tr className="bg-[#7A1524] text-white">

                              <th className="w-[10%] px-2 py-3 text-center">
                                S.No
                              </th>

                              <th className="w-[36%] px-2 py-3 text-left">
                                Name (English)
                              </th>

                              <th className="w-[32%] px-2 py-3 text-left">
                                Name (Tamil)
                              </th>

                              <th className="w-[22%] px-2 py-3 text-left">
                                Quantity
                              </th>

                            </tr>

                          </thead>

                          <tbody>

                            {(
                              dynamicItems ??
                              selectedRitual.items
                            ).map(
                              (
                                item,
                                index
                              ) => (

                                <tr
                                  key={`${item.sno}-${index}`}
                                  className={
                                    index % 2 ===
                                    0
                                      ? "bg-white"
                                      : "bg-[#FBF5EC]"
                                  }
                                >

                                  <td className="border-b px-2 py-3 text-center">
                                    {item.sno}.
                                  </td>

                                  <td className="border-b px-2 py-3 font-medium break-words">
                                    {item.english}
                                  </td>

                                  <td className="border-b px-2 py-3 break-words">
                                    {item.tamil}
                                  </td>

                                  <td className="border-b px-2 py-3 break-words">
                                    {item.quantity}
                                  </td>

                                </tr>

                              )
                            )}

                          </tbody>

                        </table>

                      </div>

                      <div className="mt-4 flex items-start gap-2 text-sm text-[#7A6458]">
                        <Info
                          size={17}
                          className="mt-0.5 shrink-0 text-[#B08A45]"
                        />
                        <p>
                          The items and quantities may vary slightly based on the priest&apos;s guidance and tradition.
                        </p>
                      </div>

                    </div>

                  )}

                  {activeTab ===
                    "process" && (

                    <div>

                      <h3 className="font-[family-name:var(--font-cormorant)] text-2xl font-semibold text-[#5A2026]">
                        Pooja Process
                      </h3>

                      <div className="mt-6 space-y-4">

                        {selectedRitual.process.map(
                          (
                            step,
                            index
                          ) => (

                            <div
                              key={step}
                              className="flex gap-4 rounded-lg border border-[#E9DDC9] bg-white p-4"
                            >

                              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#F6EAD5]">
                                {index + 1}
                              </div>

                              <div className="flex items-center text-sm">
                                {step}
                              </div>

                            </div>

                          )
                        )}

                      </div>

                    </div>

                  )}

                  {activeTab ===
                    "benefits" && (

                    <div>

                      <h3 className="font-[family-name:var(--font-cormorant)] text-2xl font-semibold text-[#5A2026]">
                        Benefits of the Pooja
                      </h3>

                      <div className="mt-6 grid gap-4 sm:grid-cols-2">

                        {selectedRitual.benefits.map(
                          (
                            benefit
                          ) => (

                            <div
                              key={benefit}
                              className="flex gap-3 rounded-lg border border-[#E9DDC9] bg-white p-5"
                            >

                              <Check
                                size={19}
                                className="text-[#B08A45]"
                              />

                              <p className="text-sm">
                                {benefit}
                              </p>

                            </div>

                          )
                        )}

                      </div>

                    </div>

                  )}

                  {activeTab ===
                    "notes" && (

                    <div>

                      <h3 className="font-[family-name:var(--font-cormorant)] text-2xl font-semibold text-[#5A2026]">
                        Important Notes
                      </h3>

                      <div className="mt-6 space-y-4">

                        {selectedRitual.notes.map(
                          (
                            note
                          ) => (

                            <div
                              key={note}
                              className="flex gap-3 rounded-lg bg-[#FBF5EC] p-5"
                            >

                              <Info
                                size={19}
                                className="text-[#B08A45]"
                              />

                              <p className="text-sm">
                                {note}
                              </p>

                            </div>

                          )
                        )}

                      </div>

                    </div>

                  )}

                </div>

              </div>

            </div>

          </div>

        </section>

      )}

      {/* CTA */}

      <section className="px-5 py-8 sm:px-8 lg:px-12">

        <div className="mx-auto flex max-w-[1400px] flex-col items-center justify-between gap-7 rounded-xl border border-[#E8D5B5] bg-[#FFF8EC] px-7 py-8 lg:flex-row">

          <div className="flex items-center gap-5">

            <div className="flex h-14 w-14 items-center justify-center rounded-full border bg-white">

              <Phone
                size={23}
                className="text-[#B87916]"
              />

            </div>

            <div>

              <h3 className="font-[family-name:var(--font-cormorant)] text-2xl font-semibold text-[#5A2026]">
                Have Questions?
              </h3>

              <p className="mt-1 text-sm">
                Our team is here to help you!
              </p>

            </div>

          </div>

          <a
            href="/contact"
            className="inline-flex h-14 items-center gap-4 rounded-lg bg-[#7A1524] px-9 text-sm font-semibold text-white"
          >

            {data.enquireText ||
              "Enquire Now"}

            <ArrowRight
              size={18}
            />

          </a>

        </div>

      </section>

      {/* ORDER NOW */}

      <OrderNowModal
        open={isOrderOpen}
        onClose={() =>
          setIsOrderOpen(false)
        }
        packageName={
          selectedRitual?.title ||
          "Consumer Package"
        }
        packagePrice={
          dynamicPrice
        }
      />

      {/* IYER BOOKING MODAL */}

      {isBookingOpen && (

        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4">

          <div className="relative w-full max-w-md rounded-2xl bg-[#FAF6EE] p-6 shadow-2xl">

            <button
              type="button"
              onClick={() =>
                setIsBookingOpen(false)
              }
              className="absolute right-4 top-4"
            >
              ✕
            </button>

            {bookingSuccess ? (

              <div className="py-8 text-center">

                <h3 className="text-2xl font-bold">
                  Request Received!
                </h3>

                <p className="mt-2">
                  Our team will contact you shortly.
                </p>

              </div>

            ) : (

              <form
                onSubmit={
                  handleBookingSubmit
                }
                className="space-y-3"
              >

                <h3 className="text-2xl font-bold">
                  Request for an Iyer
                </h3>

                <input
                  required
                  placeholder="Full Name"
                  value={bookingForm.name}
                  onChange={(e) =>
                    setBookingForm({
                      ...bookingForm,
                      name:
                        e.target.value,
                    })
                  }
                  className="w-full rounded-lg border p-3"
                />

                <input
                  required
                  placeholder="Mobile Number"
                  value={bookingForm.mobile}
                  onChange={(e) =>
                    setBookingForm({
                      ...bookingForm,
                      mobile:
                        e.target.value,
                    })
                  }
                  className="w-full rounded-lg border p-3"
                />

                <input
                  required
                  type="email"
                  placeholder="Email Address"
                  value={bookingForm.email}
                  onChange={(e) =>
                    setBookingForm({
                      ...bookingForm,
                      email:
                        e.target.value,
                    })
                  }
                  className="w-full rounded-lg border p-3"
                />

                <textarea
                  required
                  rows={3}
                  placeholder="Address"
                  value={
                    bookingForm.address
                  }
                  onChange={(e) =>
                    setBookingForm({
                      ...bookingForm,
                      address:
                        e.target.value,
                    })
                  }
                  className="w-full rounded-lg border p-3"
                />

                <button
                  type="submit"
                  className="w-full rounded-lg bg-[#5A121D] py-3 font-bold text-white"
                >
                  Submit
                </button>

              </form>

            )}

          </div>

        </div>

      )}

    </main>
  );
}

/*
============================================================
RITUAL ICON
============================================================
*/

function RitualIcon({
  type,
  active,
}: {
  type:
    | "peace"
    | "obstacles"
    | "family"
    | "success";
  active: boolean;
}) {
  const icons = {
    peace: Sparkles,
    obstacles: Check,
    family: Gift,
    success: Star,
  };

  const Icon = icons[type];

  return (
    <Icon
      size={20}
      strokeWidth={1.3}
      className={
        active
          ? "text-[#D4B978]"
          : "text-[#C48117]"
      }
    />
  );
}
