"use client";

import Image from "next/image";
import Link from "next/link";
import {
  useState,
  useRef,
  useEffect,
  type FormEvent,
} from "react";
import {
  ChevronRight,
  Package,
  Star,
  Info,
  CheckCircle2,
  Check,
  Sparkles,
  X,
  ShieldCheck,
  HeartHandshake,
  Gift,
  List,
  Flame,
} from "lucide-react";

// ==========================================
// DATA MODELS & CEREMONIES
// ==========================================

export type SamagriItem = {
  sno: number;
  english: string;
  tamil: string;
  quantity: string;
};

export type CeremonyData = {
  id: string;
  name: string;
  iconType:
    | "ganesh"
    | "house"
    | "vastu"
    | "office"
    | "business"
    | "ayush";
  tagline: string;
  description: string;
  image: string;
  price: string;
  highlights: string[];
  items: SamagriItem[];
  process: {
    step: string;
    title: string;
    desc: string;
  }[];
  benefits: {
    title: string;
    desc: string;
  }[];
  notes: string[];
};

const ceremonies: CeremonyData[] = [
  {
    id: "friday-poojas",
    name: "Friday Poojas",
    iconType: "business",
    tagline:
      "Weekly blessings of Goddess Mahalakshmi for prosperity and harmony.",
    description:
      "Friday Poojas are conducted weekly to invoke Goddess Mahalakshmi's blessings for prosperity, harmony and well-being in the workplace.",
    image: "/images/kalash.jpg",
    price: "₹2,999",
    highlights: [
      "Weekly Renewal",
      "Prosperity",
      "Team Positivity",
      "Performed by experienced priests",
    ],
    items: [
      {
        sno: 1,
        english: "Fresh Flowers & Garland",
        tamil: "பூக்கள் & மாலை",
        quantity: "1 Set",
      },
      {
        sno: 2,
        english: "Turmeric & Kumkum",
        tamil: "மஞ்சள் & குங்குமம்",
        quantity: "1 Packet",
      },
      {
        sno: 3,
        english: "Camphor & Incense Sticks",
        tamil: "கற்பூரம் & அகர்பத்தி",
        quantity: "1 Pack",
      },
      {
        sno: 4,
        english: "Betel Leaves & Areca Nuts",
        tamil: "வெற்றிலை பாக்கு",
        quantity: "9 Sets",
      },
      {
        sno: 5,
        english: "Fruits & Sweet Naivedyam",
        tamil: "பழங்கள் & நைவேத்தியம்",
        quantity: "1 Set",
      },
      {
        sno: 6,
        english: "Deepam Oil & Cotton Wicks",
        tamil: "தீப எண்ணெய் & திரி",
        quantity: "1 Small Bottle",
      },
    ],
    process: [
      {
        step: "01",
        title: "Deepa Prajwalanam",
        desc: "Lighting the lamp and offering prayers to Goddess Lakshmi.",
      },
      {
        step: "02",
        title: "Lakshmi Devi Archana",
        desc: "Performing Lakshmi Devi Archana with flowers and traditional prayers.",
      },
      {
        step: "03",
        title: "Naivedyam Samarpanam",
        desc: "Offering fruits and sweets as Naivedyam.",
      },
      {
        step: "04",
        title: "Aarthi & Prasadam",
        desc: "Concluding the pooja with Aarthi and distribution of Prasadam.",
      },
    ],
    benefits: [
      {
        title: "Weekly Renewal",
        desc: "Creates a positive and peaceful atmosphere in the workplace.",
      },
      {
        title: "Prosperity",
        desc: "Performed seeking Goddess Lakshmi's blessings for prosperity.",
      },
      {
        title: "Team Positivity",
        desc: "Provides employees with a meaningful shared spiritual experience.",
      },
    ],
    notes: [
      "Best performed in the morning.",
      "Can be scheduled as a recurring weekly service.",
    ],
  },

  {
    id: "amavasai-poojas",
    name: "Amavasai Poojas",
    iconType: "ayush",
    tagline:
      "Monthly new-moon observance seeking ancestral blessings.",
    description:
      "Amavasai Poojas are performed on the new moon day as a traditional observance seeking ancestral blessings and positive beginnings.",
    image: "/images/kalash.jpg",
    price: "₹3,499",
    highlights: [
      "Monthly Observance",
      "Ancestral Blessings",
      "Positive Beginning",
      "Customizable rituals",
    ],
    items: [
      {
        sno: 1,
        english: "Sesame Seeds",
        tamil: "எள்",
        quantity: "250 gms",
      },
      {
        sno: 2,
        english: "Darbai Grass",
        tamil: "தர்ப்பை புல்",
        quantity: "1 Bundle",
      },
      {
        sno: 3,
        english: "Black Til Oil",
        tamil: "எள் எண்ணெய்",
        quantity: "250 ml",
      },
      {
        sno: 4,
        english: "Turmeric & Kumkum",
        tamil: "மஞ்சள் & குங்குமம்",
        quantity: "1 Packet",
      },
      {
        sno: 5,
        english: "Camphor & Incense",
        tamil: "கற்பூரம் & அகர்பத்தி",
        quantity: "1 Pack",
      },
      {
        sno: 6,
        english: "Betel Leaves & Areca Nuts",
        tamil: "வெற்றிலை பாக்கு",
        quantity: "9 Sets",
      },
      {
        sno: 7,
        english: "Fruits & Naivedyam",
        tamil: "பழங்கள் & நைவேத்தியம்",
        quantity: "1 Set",
      },
    ],
    process: [
      {
        step: "01",
        title: "Amavasya Sankalpam",
        desc: "Declaring the intention for the Amavasya observance.",
      },
      {
        step: "02",
        title: "Traditional Offerings",
        desc: "Performing the traditional offerings using sesame and water.",
      },
      {
        step: "03",
        title: "Premises Cleansing",
        desc: "Performing traditional cleansing of the premises.",
      },
      {
        step: "04",
        title: "Aarthi & Prasadam",
        desc: "Concluding the ceremony with Aarthi and Prasadam.",
      },
    ],
    benefits: [
      {
        title: "Monthly Observance",
        desc: "Provides a traditional monthly spiritual observance.",
      },
      {
        title: "Ancestral Blessings",
        desc: "Performed seeking blessings of ancestors.",
      },
      {
        title: "Positive Beginning",
        desc: "Marks the beginning of a new lunar cycle.",
      },
    ],
    notes: [
      "Scheduled according to the Amavasya date.",
      "Specific rituals can be customized according to requirements.",
    ],
  },

  {
    id: "ganapathy-homam",
    name: "Ganapathi Homam",
    iconType: "ganesh",
    tagline:
      "Remove obstacles and begin every venture with divine blessings.",
    description:
      "A traditional Ganapathy Homam performed to invoke Lord Ganesha's blessings for removing obstacles, improving clarity and beginning important corporate activities on an auspicious note.",
    image: "/images/kalash.jpg",
    price: "₹3,999",
    highlights: [
      "Obstacle Removal",
      "Positive Environment",
      "Auspicious Beginning",
      "Ideal for inaugurations",
    ],
    items: [
      {
        sno: 1,
        english: "Ganapathy Homam Samagri",
        tamil: "கணபதி ஹோமம் சாமக்ரி",
        quantity: "1 Set",
      },
      {
        sno: 2,
        english: "Navadhanyam",
        tamil: "நவதானியம்",
        quantity: "1 Set",
      },
      {
        sno: 3,
        english: "Homa Samithu",
        tamil: "ஹோம சமித்து",
        quantity: "1 Bundle",
      },
      {
        sno: 4,
        english: "Pure Cow Ghee",
        tamil: "சுத்தமான பசு நெய்",
        quantity: "500 ml",
      },
      {
        sno: 5,
        english: "Turmeric & Kumkum",
        tamil: "மஞ்சள் & குங்குமம்",
        quantity: "1 Packet",
      },
      {
        sno: 6,
        english: "Flowers & Garland",
        tamil: "பூக்கள் & மாலை",
        quantity: "1 Set",
      },
      {
        sno: 7,
        english: "Coconut & Fruits",
        tamil: "தேங்காய் & பழங்கள்",
        quantity: "1 Set",
      },
      {
        sno: 8,
        english: "Camphor & Incense",
        tamil: "கற்பூரம் & அகர்பத்தி",
        quantity: "1 Pack",
      },
    ],
    process: [
      {
        step: "01",
        title: "Sankalpam",
        desc: "The priest begins the ceremony with Sankalpam for the organization.",
      },
      {
        step: "02",
        title: "Ganapathy Avahanam",
        desc: "Lord Ganesha is invoked through traditional prayers and offerings.",
      },
      {
        step: "03",
        title: "Ganapathy Homam",
        desc: "Sacred offerings are made into the homa fire with Vedic chanting.",
      },
      {
        step: "04",
        title: "Purnahuthi & Aarthi",
        desc: "The Homam concludes with Purnahuthi, Aarthi and Prasadam.",
      },
    ],
    benefits: [
      {
        title: "Obstacle Removal",
        desc: "Traditionally performed seeking Lord Ganesha's blessings before important activities.",
      },
      {
        title: "Positive Environment",
        desc: "Creates a spiritually positive atmosphere in the workplace.",
      },
      {
        title: "Auspicious Beginning",
        desc: "Ideal for inaugurations, new offices and important corporate milestones.",
      },
    ],
    notes: [
      "Ideal for office inaugurations and new beginnings.",
      "Can be customized according to the size of the organization.",
    ],
  },

  {
    id: "ayudha-pooja-vehicle-pooja",
    name: "Ayudha Pooja & Vehicle Pooja",
    iconType: "office",
    tagline:
      "Blessings for company vehicles, machinery and equipment.",
    description:
      "Ayudha Pooja is performed for company vehicles, machinery, computers, tools and equipment.",
    image: "/images/kalash.jpg",
    price: "₹4,499",
    highlights: [
      "Vehicle Blessing",
      "Equipment Blessing",
      "Team Confidence",
      "Scalable for fleets",
    ],
    items: [
      {
        sno: 1,
        english: "Lemon",
        tamil: "எலுமிச்சை",
        quantity: "9 Nos",
      },
      {
        sno: 2,
        english: "Flower Garlands",
        tamil: "பூ மாலைகள்",
        quantity: "4 Nos",
      },
      {
        sno: 3,
        english: "Turmeric & Kumkum",
        tamil: "மஞ்சள் & குங்குமம்",
        quantity: "1 Packet",
      },
      {
        sno: 4,
        english: "Camphor & Incense Sticks",
        tamil: "கற்பூரம் & அகர்பத்தி",
        quantity: "1 Pack",
      },
      {
        sno: 5,
        english: "Coconut",
        tamil: "தேங்காய்",
        quantity: "3 Pieces",
      },
      {
        sno: 6,
        english: "Betel Leaves & Areca Nuts",
        tamil: "வெற்றிலை பாக்கு",
        quantity: "21 Sets",
      },
      {
        sno: 7,
        english: "Sweet Naivedyam",
        tamil: "நைவேத்தியம்",
        quantity: "1 Set",
      },
    ],
    process: [
      {
        step: "01",
        title: "Sankalpam",
        desc: "Beginning the ceremony with Sankalpam.",
      },
      {
        step: "02",
        title: "Equipment Blessing",
        desc: "Applying turmeric and kumkum to vehicles and equipment.",
      },
      {
        step: "03",
        title: "Vehicle Pooja",
        desc: "Performing traditional prayers for company vehicles.",
      },
      {
        step: "04",
        title: "Maha Aarthi",
        desc: "Concluding the ceremony with Maha Aarthi and Prasadam.",
      },
    ],
    benefits: [
      {
        title: "Vehicle Blessing",
        desc: "Traditional prayers for company vehicles.",
      },
      {
        title: "Equipment Blessing",
        desc: "Covers machinery, tools and workplace equipment.",
      },
      {
        title: "Team Confidence",
        desc: "Creates a meaningful traditional experience for staff.",
      },
    ],
    notes: [
      "Ideal during Ayudha Pooja.",
      "Can be scaled for one vehicle or an entire fleet.",
    ],
  },

  {
    id: "aarthi-prasadam-distribution",
    name: "Aarthi & Prasadam Distribution",
    iconType: "vastu",
    tagline:
      "A simple, meaningful closing ceremony for corporate events.",
    description:
      "A simple closing ceremony suitable for corporate events, celebrations and office gatherings.",
    image: "/images/kalash.jpg",
    price: "₹1,999",
    highlights: [
      "Simple Closure",
      "Team Gathering",
      "Flexible",
      "Scales with headcount",
    ],
    items: [
      {
        sno: 1,
        english: "Camphor for Aarthi",
        tamil: "கற்பூரம்",
        quantity: "50 gms",
      },
      {
        sno: 2,
        english: "Brass Aarthi Plate",
        tamil: "ஆரத்தி தட்டு",
        quantity: "1 No",
      },
      {
        sno: 3,
        english: "Turmeric & Kumkum",
        tamil: "மஞ்சள் & குங்குமம்",
        quantity: "1 Packet",
      },
      {
        sno: 4,
        english: "Flowers",
        tamil: "பூக்கள்",
        quantity: "1 Packet",
      },
      {
        sno: 5,
        english: "Sweet Prasadam",
        tamil: "பிரசாதம்",
        quantity: "As per headcount",
      },
      {
        sno: 6,
        english: "Rosewater Sprinkler",
        tamil: "பன்னீர் சொம்பு",
        quantity: "1 No",
      },
    ],
    process: [
      {
        step: "01",
        title: "Gathering",
        desc: "Staff and attendees gather for the closing ceremony.",
      },
      {
        step: "02",
        title: "Camphor Aarthi",
        desc: "Traditional Aarthi is performed.",
      },
      {
        step: "03",
        title: "Prasadam Blessing",
        desc: "Prasadam is prepared for distribution.",
      },
      {
        step: "04",
        title: "Distribution",
        desc: "Prasadam is distributed to attendees.",
      },
    ],
    benefits: [
      {
        title: "Simple Closure",
        desc: "Provides a meaningful conclusion to corporate events.",
      },
      {
        title: "Team Gathering",
        desc: "Brings employees together for a shared ceremony.",
      },
      {
        title: "Flexible",
        desc: "Can be added to other corporate ceremonies.",
      },
    ],
    notes: [
      "Suitable for corporate events and celebrations.",
      "Prasadam quantity can be based on the number of attendees.",
    ],
  },
];

// ==========================================
// FEATURE CARDS
// ==========================================

const featureCards = [
  {
    icon: Flame,
    title: "Experienced Priests",
    description:
      "Our priests are well-versed in Vedic rituals and corporate pooja requirements.",
  },
  {
    icon: Package,
    title: "Complete Samagri",
    description:
      "All required items and samagri will be arranged with utmost care and purity.",
  },
  {
    icon: ShieldCheck,
    title: "Authentic & Reliable",
    description:
      "We follow authentic Vedic procedures passed down through generations.",
  },
  {
    icon: HeartHandshake,
    title: "Hassle-free Service",
    description:
      "End-to-end support for your corporate pooja, on time, every time.",
  },
];

// ==========================================
// MAIN COMPONENT
// ==========================================

export default function CorporatePackagePage() {
  const API_BASE = "http://localhost:3001";

  const [selectedCeremony, setSelectedCeremony] =
    useState<CeremonyData>(ceremonies[0]);

  const [selectedPackage, setSelectedPackage] =
    useState<CeremonyData>(ceremonies[0]);

  const [activeTab, setActiveTab] = useState<
    "details" | "process" | "benefits" | "notes"
  >("details");

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalSuccess, setModalSuccess] = useState(false);

  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [bookingSuccess, setBookingSuccess] = useState(false);

  const [bookingForm, setBookingForm] = useState({
    name: "",
    mobile: "",
    address: "",
    email: "",
  });

  const [liveItems, setLiveItems] =
    useState<SamagriItem[]>(ceremonies[0].items);

  const [itemsLoading, setItemsLoading] =
    useState(false);

      const [dynamicPrice, setDynamicPrice] =
    useState<string | null>(null);

  const [formData, setFormData] = useState({
    companyName: "",
    contactPerson: "",
    phone: "",
    email: "",
    ceremony: ceremonies[0].name,
    preferredDate: "",
    location: "",
    notes: "",
  });

  const ceremonySectionRef =
    useRef<HTMLElement>(null);

  const packageDetailsRef =
    useRef<HTMLElement>(null);

  // ==========================================
  // BOOKING SUBMIT
  // ==========================================

  const handleBookingSubmit = async (
    e: FormEvent
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
            pooja: selectedPackage.name,
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
    } catch {
      alert(
        "Something went wrong. Please try again."
      );
    }
  };

  // ==========================================
  // HANDLE URL HASH
  // ==========================================

  useEffect(() => {
    const handleHash = () => {
      if (typeof window === "undefined") return;

      const rawHash = window.location.hash
        .replace("#", "")
        .toLowerCase()
        .trim();

      if (!rawHash) return;

      const match = ceremonies.find(
        (c) =>
          c.id.toLowerCase() === rawHash ||
          rawHash.includes(c.id.toLowerCase()) ||
          c.id
            .toLowerCase()
            .replace(/-/g, "")
            .includes(
              rawHash.replace(/-/g, "")
            )
      );

      if (match) {
        setSelectedCeremony(match);
        setSelectedPackage(match);

        setFormData((prev) => ({
          ...prev,
          ceremony: match.name,
        }));

        setActiveTab("details");

        setTimeout(() => {
          const el =
            document.getElementById(
              "corporate-details-section"
            ) || packageDetailsRef.current;

          if (el) {
            el.scrollIntoView({
              behavior: "smooth",
            });
          }
        }, 120);
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
  }, []);

  // ==========================================
  // FETCH PACKAGE ITEMS
  // ==========================================

  useEffect(() => {
    let cancelled = false;

    async function loadItems() {
      setItemsLoading(true);

      try {
        const res = await fetch(
          `${API_BASE}/corporate-packages/${selectedPackage.id}`
        );

        if (!res.ok) {
          throw new Error(
            "Failed to load package items"
          );
        }

        const data = await res.json();

        if (!cancelled) {
          const rows = Array.isArray(data)
            ? data
            : data.items || [];

          const mapped: SamagriItem[] =
            rows.map(
              (
                row: Record<string, unknown>,
                index: number
              ) => ({
                sno:
                  (row.sno as number) ??
                  index + 1,

                english:
                  (row.name_english as string) ??
                  (row.english as string) ??
                  (row.nameEnglish as string) ??
                  "",

                tamil:
                  (row.name_tamil as string) ??
                  (row.tamil as string) ??
                  (row.nameTamil as string) ??
                  "",

                quantity:
                  (row.quantity as string) ??
                  "",
              })
            );

          setLiveItems(
            mapped.length > 0
              ? mapped
              : selectedPackage.items
          );
        }
      } catch (error) {
        console.error(
          "Failed to load corporate package items:",
          error
        );

        if (!cancelled) {
          setLiveItems(
            selectedPackage.items
          );
        }
      } finally {
        if (!cancelled) {
          setItemsLoading(false);
        }
      }
    }

    loadItems();

    return () => {
      cancelled = true;
    };
  }, [selectedPackage]);

    // ==========================================
  // FETCH LIVE PRICE
  // ==========================================

  useEffect(() => {
    let cancelled = false;

    async function loadPrice() {
      try {
        const res = await fetch(
          `${API_BASE}/package-prices/${selectedPackage.id}`
        );
        const data = await res.json();
        if (!cancelled) {
          setDynamicPrice(data?.price || null);
        }
      } catch {
        if (!cancelled) {
          setDynamicPrice(null);
        }
      }
    }

    loadPrice();

    return () => {
      cancelled = true;
    };
  }, [selectedPackage]);

  // ==========================================
  // SELECT CEREMONY
  // ==========================================

  const handleSelectCeremony = (
    ceremony: CeremonyData
  ) => {
    setSelectedCeremony(ceremony);

    setFormData((prev) => ({
      ...prev,
      ceremony: ceremony.name,
    }));
  };

  // ==========================================
  // SELECT PACKAGE
  // ==========================================

  const handleSelectPackage = (
    ceremony: CeremonyData
  ) => {
    setSelectedPackage(ceremony);

    setLiveItems(ceremony.items);

    setActiveTab("details");
  };

  // ==========================================
  // ENQUIRY FORM SUBMIT
  // ==========================================

  const handleFormSubmit = (
    e: FormEvent
  ) => {
    e.preventDefault();

    setModalSuccess(true);

    setTimeout(() => {
      setModalSuccess(false);
      setIsModalOpen(false);

      setFormData({
        companyName: "",
        contactPerson: "",
        phone: "",
        email: "",
        ceremony:
          selectedCeremony.name,
        preferredDate: "",
        location: "",
        notes: "",
      });
    }, 2500);
  };

  // ==========================================
  // RITUAL ICON
  // ==========================================

  const renderRitualIcon = (
    type: CeremonyData["iconType"],
    isActive: boolean
  ) => {
    const strokeColor = isActive
      ? "#FFFFFF"
      : "#B08A45";

    switch (type) {
      case "ganesh":
        return (
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke={strokeColor}
            strokeWidth="1.6"
            className="w-8 h-8"
          >
            <circle
              cx="12"
              cy="7"
              r="3.5"
            />
            <path d="M7 11c0 5 2 9 5 9s5-4 5-9" />
            <path d="M12 10.5v3.5a1.5 1.5 0 0 0 3 0" />
            <path d="M6 8.5C4 9 3 11 3 13" />
            <path d="M18 8.5C20 9 21 11 21 13" />
          </svg>
        );

      case "house":
        return (
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke={strokeColor}
            strokeWidth="1.6"
            className="w-8 h-8"
          >
            <path d="M3 10.5L12 3l9 7.5" />
            <path d="M5 9.5V20a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V9.5" />
            <path d="M10 21v-7h4v7" />
          </svg>
        );

      case "vastu":
        return (
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke={strokeColor}
            strokeWidth="1.6"
            className="w-8 h-8"
          >
            <rect
              x="3"
              y="3"
              width="18"
              height="18"
              rx="2"
            />
            <circle
              cx="12"
              cy="12"
              r="5"
            />
            <path d="M12 3v18" />
            <path d="M3 12h18" />
            <circle
              cx="12"
              cy="12"
              r="1.5"
            />
          </svg>
        );

      case "office":
        return (
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke={strokeColor}
            strokeWidth="1.6"
            className="w-8 h-8"
          >
            <rect
              x="4"
              y="2"
              width="16"
              height="20"
              rx="1"
            />
            <path d="M9 22v-4h6v4" />
            <path d="M8 6h2" />
            <path d="M14 6h2" />
            <path d="M8 10h2" />
            <path d="M14 10h2" />
            <path d="M8 14h2" />
            <path d="M14 14h2" />
          </svg>
        );

      case "business":
        return (
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke={strokeColor}
            strokeWidth="1.6"
            className="w-8 h-8"
          >
            <path d="M12 3c-2.5 3-4 6-4 9a4 4 0 0 0 8 0c0-3-1.5-6-4-9z" />
            <path d="M6 19c3 1.5 9 1.5 12 0" />
          </svg>
        );

      case "ayush":
        return (
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke={strokeColor}
            strokeWidth="1.6"
            className="w-8 h-8"
          >
            <path d="M12 2a4 4 0 0 0-4 4c0 3 4 7 4 7s4-4 4-7a4 4 0 0 0-4-4z" />
            <circle
              cx="12"
              cy="18"
              r="3"
            />
            <path d="M5 21c1.5-2 4-3 7-3s5.5 1 7 3" />
          </svg>
        );

      default:
        return (
          <Sparkles
            className="w-8 h-8"
            stroke={strokeColor}
          />
        );
    }
  };

  return (
    <main className="min-h-screen bg-[#FAF6EE] text-[#29231F] font-sans antialiased">
      {/* BLINK ANIMATION */}
      <style jsx global>{`
        @keyframes priest-blink {
          0%,
          100% {
            opacity: 1;
            box-shadow:
              0 0 0 rgba(
                243,
                215,
                138,
                0
              ),
              0 0 0 rgba(
                243,
                215,
                138,
                0
              );
          }

          50% {
            opacity: 0.82;
            box-shadow:
              0 0 18px rgba(
                243,
                215,
                138,
                0.9
              ),
              0 0 35px rgba(
                243,
                215,
                138,
                0.35
              );
          }
        }

        .animate-priest-blink {
          animation: priest-blink
            1.6s ease-in-out infinite;
        }
      `}</style>

      {/* HERO */}
      <section className="relative pt-[90px] overflow-hidden bg-[#FAF6EE] border-b border-[#E8DDC8]">
        <div className="mx-auto max-w-[1600px] grid grid-cols-1 lg:grid-cols-12 items-stretch min-h-[560px] lg:min-h-[620px]">
          <div className="lg:col-span-6 flex flex-col justify-between pt-12 pb-8 px-6 sm:px-10 lg:pl-16 lg:pr-8">
            <div>
              <h1 className="font-[family-name:var(--font-cormorant)] text-4xl sm:text-5xl lg:text-6xl font-bold text-[#42151B]">
                Corporate &amp;
                <br />
                Office Package
              </h1>

              <p className="mt-4 text-[#55463E] max-w-xl">
                Traditional poojas and homams
                for offices, new
                establishments, business
                spaces and important
                corporate occasions.
              </p>
            </div>

            <div className="mt-8">
              <div className="inline-flex items-center gap-2 bg-[#4A1015] text-white text-xs py-3 px-6 rounded-r-3xl">
                <Link href="/">
                  Home
                </Link>

                <ChevronRight size={14} />

                <Link href="/package">
                  Pooja Packages
                </Link>

                <ChevronRight size={14} />

                <span className="text-[#E7BE6B]">
                  Corporate Package
                </span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 relative min-h-[380px]">
            <Image
              src="/images/corporate_hero.jpg"
              alt="Corporate Pooja"
              fill
              priority
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* CHOOSE YOUR CEREMONY */}
      <section
        ref={ceremonySectionRef}
        className="py-10 sm:py-14 px-4 sm:px-8 max-w-[1400px] mx-auto"
      >
        <div className="text-center mb-10">
          <h2 className="font-[family-name:var(--font-cormorant)] text-3xl sm:text-4xl font-bold text-[#42151B]">
            Choose Your Ceremony
          </h2>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4">
          {ceremonies.map(
            (ceremony) => {
              const isActive =
                selectedCeremony.id ===
                ceremony.id;

              return (
                <button
                  key={ceremony.id}
                  type="button"
                  onClick={() =>
                    handleSelectCeremony(
                      ceremony
                    )
                  }
                  className={`flex flex-col items-center justify-center p-4 sm:p-5 rounded-2xl border transition-all ${
                    isActive
                      ? "bg-[#4A1015] border-[#4A1015] text-white shadow-md"
                      : "bg-[#FAF7F0] border-[#E8DEC8] text-[#42151B] hover:border-[#B08A45]"
                  }`}
                >
                  <div className="w-12 h-12 flex items-center justify-center mb-3">
                    {renderRitualIcon(
                      ceremony.iconType,
                      isActive
                    )}
                  </div>

                  <span className="font-[family-name:var(--font-cormorant)] text-base sm:text-lg font-bold text-center">
                    {ceremony.name}
                  </span>
                </button>
              );
            }
          )}
        </div>

        {/* CEREMONY OVERVIEW */}
        <div className="mt-8 rounded-2xl bg-white border border-[#DFCBB0] p-5 sm:p-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-5 relative aspect-[4/3] rounded-xl overflow-hidden">
              <Image
                src={
                  selectedCeremony.image
                }
                alt={
                  selectedCeremony.name
                }
                fill
                className="object-cover"
              />
            </div>

            <div className="lg:col-span-7">
              <h3 className="font-[family-name:var(--font-cormorant)] text-3xl font-bold text-[#42151B]">
                {selectedCeremony.name}
              </h3>

              <p className="mt-2 text-[#B37D2A] font-semibold">
                {selectedCeremony.tagline}
              </p>

              <p className="mt-4 text-sm text-[#55463E]">
                {
                  selectedCeremony.description
                }
              </p>

              <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3">
                {selectedCeremony.highlights.map(
                  (highlight) => (
                    <div
                      key={highlight}
                      className="flex items-center gap-2"
                    >
                      <Check
                        size={16}
                        className="text-[#7D1E28]"
                      />

                      <span className="text-sm">
                        {highlight}
                      </span>
                    </div>
                  )
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PACKAGE DETAILS */}
      <section
        ref={packageDetailsRef}
        id="corporate-details-section"
        className="scroll-mt-28 py-10 sm:py-14 px-4 sm:px-8 max-w-[1400px] mx-auto"
      >
        <div className="text-center mb-8">
          <span className="inline-block px-4 py-1 rounded-full bg-[#EFE3CF] text-xs font-bold text-[#88242F]">
            {selectedPackage.name}
          </span>

          <h2 className="mt-3 font-[family-name:var(--font-cormorant)] text-3xl sm:text-4xl font-bold text-[#42151B]">
            Package Details
          </h2>

          <p className="mt-2 text-sm text-[#7A6458]">
            Select a package to view
            its samagri items.
          </p>

          {/* INDEPENDENT PACKAGE SELECTOR */}
          <div className="mt-6 flex flex-wrap justify-center gap-2 sm:gap-3">
            {ceremonies.map(
              (ceremony) => {
                const isActive =
                  selectedPackage.id ===
                  ceremony.id;

                return (
                  <button
                    key={ceremony.id}
                    type="button"
                    onClick={() =>
                      handleSelectPackage(
                        ceremony
                      )
                    }
                    className={`rounded-full px-4 sm:px-5 py-2.5 text-xs sm:text-sm font-semibold transition-all duration-200 ${
                      isActive
                        ? "bg-[#4A1015] text-white shadow-md ring-2 ring-[#D4B978]/40"
                        : "bg-white text-[#42151B] border border-[#DFCBB0] hover:bg-[#F5EDE0]"
                    }`}
                  >
                    {ceremony.name}
                  </button>
                );
              }
            )}
          </div>
        </div>

        <div className="rounded-2xl bg-[#FCFAF5] border border-[#DFCBB0] p-4 sm:p-6 lg:p-7">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">

            {/* LEFT SIDEBAR */}
            <div className="lg:col-span-3">
              <div className="lg:sticky lg:top-28 bg-[#4A1015] rounded-xl p-3 shadow-lg">
                <div className="space-y-2">

                  {/* PACKAGE DETAILS TAB */}
                  <button
                    type="button"
                    onClick={() =>
                      setActiveTab(
                        "details"
                      )
                    }
                    className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-left transition-all duration-200 ${
                      activeTab ===
                      "details"
                        ? "bg-[#7D1E28] text-white shadow-md"
                        : "text-[#E6CFCE] hover:bg-white/10 hover:text-white"
                    }`}
                  >
                    <Gift
                      size={18}
                      className={
                        activeTab ===
                        "details"
                          ? "text-[#F3D78A]"
                          : "text-[#D4B978]"
                      }
                    />

                    <span className="font-medium">
                      Package Details
                    </span>
                  </button>

                  {/* PROCESS TAB */}
                  <button
                    type="button"
                    onClick={() =>
                      setActiveTab(
                        "process"
                      )
                    }
                    className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-left transition-all duration-200 ${
                      activeTab ===
                      "process"
                        ? "bg-[#7D1E28] text-white shadow-md"
                        : "text-[#E6CFCE] hover:bg-white/10 hover:text-white"
                    }`}
                  >
                    <List
                      size={18}
                      className={
                        activeTab ===
                        "process"
                          ? "text-[#F3D78A]"
                          : "text-[#D4B978]"
                      }
                    />

                    <span className="font-medium">
                      Pooja Process
                    </span>
                  </button>

                  {/* BENEFITS TAB */}
                  <button
                    type="button"
                    onClick={() =>
                      setActiveTab(
                        "benefits"
                      )
                    }
                    className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-left transition-all duration-200 ${
                      activeTab ===
                      "benefits"
                        ? "bg-[#7D1E28] text-white shadow-md"
                        : "text-[#E6CFCE] hover:bg-white/10 hover:text-white"
                    }`}
                  >
                    <Star
                      size={18}
                      className={
                        activeTab ===
                        "benefits"
                          ? "text-[#F3D78A]"
                          : "text-[#D4B978]"
                      }
                    />

                    <span className="font-medium">
                      Benefits
                    </span>
                  </button>

                  {/* NOTES TAB */}
                  <button
                    type="button"
                    onClick={() =>
                      setActiveTab(
                        "notes"
                      )
                    }
                    className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-left transition-all duration-200 ${
                      activeTab ===
                      "notes"
                        ? "bg-[#7D1E28] text-white shadow-md"
                        : "text-[#E6CFCE] hover:bg-white/10 hover:text-white"
                    }`}
                  >
                    <Info
                      size={18}
                      className={
                        activeTab ===
                        "notes"
                          ? "text-[#F3D78A]"
                          : "text-[#D4B978]"
                      }
                    />

                    <span className="font-medium">
                      Important Notes
                    </span>
                  </button>
                </div>

                {/* SELECTED PACKAGE */}
                <div className="mt-4 border-t border-white/15 pt-5">
                  <div className="mb-4">
                    <span className="block text-[10px] uppercase tracking-[0.16em] text-[#D4B978]">
                      Selected Package
                    </span>

                    <h3 className="mt-2 font-[family-name:var(--font-cormorant)] text-2xl font-bold leading-tight text-[#F3D78A]">
                      {selectedPackage.name}
                    </h3>

                                       <div className="mt-2 text-xl font-bold text-white">
                      {dynamicPrice
                        ? `₹${dynamicPrice}`
                        : selectedPackage.price}
                    </div>
                  </div>

                  {/* BOOK NOW */}
                  <button
                    type="button"
                    onClick={() =>
                      setIsBookingOpen(
                        true
                      )
                    }
                    className="w-full rounded-xl bg-[#E5C77A] px-4 py-3 text-sm font-bold text-[#3D1418] shadow-sm transition-all hover:bg-[#F3D78A] hover:shadow-md active:scale-[0.98]"
                  >
                      Order Now
                  </button>

                  {/* IYER REQUEST */}
                  <button
                    type="button"
                    onClick={() =>
                      setIsBookingOpen(
                        true
                      )
                    }
                    className="mt-3 w-full rounded-xl border border-[#F3D78A]/50 bg-[#F3D78A] px-3 py-3 text-center text-xs font-bold leading-relaxed text-[#3D1418] shadow-sm animate-priest-blink transition-transform hover:scale-[1.01]"
                  >
                    Looking for an
                    experienced Iyer for an
                    upcoming pooja?
                  </button>
                </div>
              </div>
            </div>

            {/* CONTENT */}
            <div className="lg:col-span-9">

              {/* DETAILS */}
              {activeTab ===
                "details" && (
                <div>
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-3 mb-4">
                    <h3 className="font-[family-name:var(--font-cormorant)] text-2xl font-bold text-[#42151B]">
                      Pooja Samagri / Items
                      List
                    </h3>

                    <span className="inline-flex w-fit rounded-full bg-[#F5EDE0] px-3 py-1 text-xs font-semibold text-[#7D1E28]">
                      {
                        selectedPackage.name
                      }{" "}
                      (
                      {liveItems.length}{" "}
                      Items)
                    </span>
                  </div>

                  <div className="overflow-x-auto rounded-xl border border-[#DFCBB0] bg-white">
                    <table className="w-full text-left text-sm">
                      <thead>
                        <tr className="bg-[#5A1015] text-white">
                          <th className="py-3 px-3 text-center">
                            S.No
                          </th>

                          <th className="py-3 px-4">
                            Name (English)
                          </th>

                          <th className="py-3 px-4">
                            Name (Tamil)
                          </th>

                          <th className="py-3 px-4">
                            Quantity
                          </th>
                        </tr>
                      </thead>

                      <tbody>
                        {itemsLoading ? (
                          <tr>
                            <td
                              colSpan={4}
                              className="py-10 text-center text-[#7A6458]"
                            >
                              Loading items...
                            </td>
                          </tr>
                        ) : liveItems.length ===
                          0 ? (
                          <tr>
                            <td
                              colSpan={4}
                              className="py-10 text-center text-[#7A6458]"
                            >
                              No items available.
                            </td>
                          </tr>
                        ) : (
                          liveItems.map(
                            (
                              item,
                              index
                            ) => (
                              <tr
                                key={`${item.sno}-${index}`}
                                className={`border-t border-[#F0E7D8] ${
                                  index %
                                    2 ===
                                  0
                                    ? "bg-[#FAF7F0]"
                                    : "bg-white"
                                }`}
                              >
                                <td className="py-3 px-3 text-center font-medium">
                                  {
                                    item.sno
                                  }
                                </td>

                                <td className="py-3 px-4 font-medium text-[#42151B]">
                                  {
                                    item.english
                                  }
                                </td>

                                <td className="py-3 px-4 text-[#55463E]">
                                  {
                                    item.tamil
                                  }
                                </td>

                                <td className="py-3 px-4 font-semibold text-[#7D1E28]">
                                  {
                                    item.quantity
                                  }
                                </td>
                              </tr>
                            )
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
                      The items and
                      quantities may vary
                      slightly based on the
                      priest&apos;s guidance
                      and tradition.
                    </p>
                  </div>
                </div>
              )}

              {/* PROCESS */}
              {activeTab ===
                "process" && (
                <div>
                  <h3 className="font-[family-name:var(--font-cormorant)] text-2xl font-bold text-[#42151B] mb-4">
                    Step-by-Step Pooja
                    Process
                  </h3>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {selectedCeremony.process.map(
                      (step) => (
                        <div
                          key={
                            step.step
                          }
                          className="bg-white p-5 rounded-xl border border-[#DFCBB0]"
                        >
                          <div className="flex gap-3">
                            <span className="w-9 h-9 shrink-0 rounded-full bg-[#4A1015] text-white flex items-center justify-center text-sm font-semibold">
                              {
                                step.step
                              }
                            </span>

                            <div>
                              <h4 className="font-[family-name:var(--font-cormorant)] text-xl font-bold text-[#42151B]">
                                {
                                  step.title
                                }
                              </h4>

                              <p className="mt-1 text-sm text-[#55463E]">
                                {
                                  step.desc
                                }
                              </p>
                            </div>
                          </div>
                        </div>
                      )
                    )}
                  </div>
                </div>
              )}

              {/* BENEFITS */}
              {activeTab ===
                "benefits" && (
                <div>
                  <h3 className="font-[family-name:var(--font-cormorant)] text-2xl font-bold text-[#42151B] mb-4">
                    Corporate Blessings
                    &amp; Benefits
                  </h3>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {selectedCeremony.benefits.map(
                      (
                        benefit,
                        index
                      ) => (
                        <div
                          key={index}
                          className="bg-white p-5 rounded-xl border border-[#DFCBB0]"
                        >
                          <div className="flex gap-3">
                            <Star
                              size={20}
                              className="shrink-0 text-[#B08A45]"
                            />

                            <div>
                              <h4 className="font-[family-name:var(--font-cormorant)] text-xl font-bold text-[#42151B]">
                                {
                                  benefit.title
                                }
                              </h4>

                              <p className="mt-1 text-sm text-[#55463E]">
                                {
                                  benefit.desc
                                }
                              </p>
                            </div>
                          </div>
                        </div>
                      )
                    )}
                  </div>
                </div>
              )}

              {/* NOTES */}
              {activeTab ===
                "notes" && (
                <div>
                  <h3 className="font-[family-name:var(--font-cormorant)] text-2xl font-bold text-[#42151B] mb-4">
                    Important Guidelines
                    &amp; Arrangements
                  </h3>

                  <div className="space-y-3">
                    {selectedCeremony.notes.map(
                      (
                        note,
                        index
                      ) => (
                        <div
                          key={index}
                          className="flex gap-3 bg-white p-4 rounded-xl border border-[#DFCBB0]"
                        >
                          <Info
                            size={18}
                            className="shrink-0 text-[#B08A45]"
                          />

                          <p className="text-sm text-[#55463E]">
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
      </section>

      {/* FEATURES */}
      <section className="py-10 px-4 sm:px-8 max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {featureCards.map(
            (card) => {
              const Icon =
                card.icon;

              return (
                <div
                  key={
                    card.title
                  }
                  className="bg-[#FCFAF5] rounded-2xl border border-[#E5D7C0] p-6"
                >
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center text-[#7D1E28] bg-white border border-[#E9DDC9] mb-4">
                    <Icon
                      size={22}
                    />
                  </div>

                  <h3 className="font-[family-name:var(--font-cormorant)] text-xl font-bold text-[#42151B]">
                    {
                      card.title
                    }
                  </h3>

                  <p className="mt-2 text-sm text-[#63534B]">
                    {
                      card.description
                    }
                  </p>

                  <button
                    type="button"
                    onClick={() =>
                      setIsBookingOpen(
                        true
                      )
                    }
                    className="mt-6 text-sm font-semibold text-[#7D1E28]"
                  >
                    Know More →
                  </button>
                </div>
              );
            }
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="px-4 pb-20 pt-6 sm:px-8 max-w-[1400px] mx-auto">
        <div className="rounded-3xl bg-[#4A1015] p-8 sm:p-12 text-white flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h2 className="font-[family-name:var(--font-cormorant)] text-3xl font-bold">
              Planning an Auspicious
              Beginning?
            </h2>

            <p className="mt-2 text-sm text-[#F3EAD8]">
              Let us help you choose
              the right pooja for your
              office or business.
            </p>
          </div>

          <button
            type="button"
            onClick={() =>
              setIsBookingOpen(true)
            }
            className="rounded-xl bg-[#E5C77A] px-8 py-4 text-sm font-bold text-[#3D1418]"
          >
            Book Now
          </button>
        </div>
      </section>

      {/* ENQUIRY MODAL */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60">
          <div className="relative w-full max-w-xl rounded-2xl bg-[#FCFAF5] p-6 sm:p-8 max-h-[90vh] overflow-y-auto">
            <button
              type="button"
              onClick={() =>
                setIsModalOpen(false)
              }
              className="absolute top-4 right-4"
            >
              <X size={22} />
            </button>

            {modalSuccess ? (
              <div className="py-10 text-center">
                <CheckCircle2
                  size={50}
                  className="mx-auto text-[#7D1E28]"
                />

                <h3 className="mt-4 font-[family-name:var(--font-cormorant)] text-3xl font-bold">
                  Enquiry Submitted
                  Successfully!
                </h3>

                <p className="mt-2 text-sm text-[#55463E]">
                  Thank you for reaching
                  out. Our coordinator
                  will contact you shortly.
                </p>
              </div>
            ) : (
              <form
                onSubmit={
                  handleFormSubmit
                }
                className="space-y-4"
              >
                <h3 className="font-[family-name:var(--font-cormorant)] text-3xl font-bold text-[#42151B] text-center">
                  Request a Customized
                  Quote
                </h3>

                <input
                  required
                  type="text"
                  placeholder="Company / Office Name"
                  value={
                    formData.companyName
                  }
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      companyName:
                        e.target.value,
                    })
                  }
                  className="w-full rounded-lg border p-3 text-sm"
                />

                <input
                  required
                  type="text"
                  placeholder="Contact Person Name"
                  value={
                    formData.contactPerson
                  }
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      contactPerson:
                        e.target.value,
                    })
                  }
                  className="w-full rounded-lg border p-3 text-sm"
                />

                <input
                  required
                  type="tel"
                  placeholder="Phone Number"
                  value={
                    formData.phone
                  }
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      phone:
                        e.target.value,
                    })
                  }
                  className="w-full rounded-lg border p-3 text-sm"
                />

                <input
                  type="email"
                  placeholder="Email Address"
                  value={
                    formData.email
                  }
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      email:
                        e.target.value,
                    })
                  }
                  className="w-full rounded-lg border p-3 text-sm"
                />

                <select
                  value={
                    formData.ceremony
                  }
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      ceremony:
                        e.target.value,
                    })
                  }
                  className="w-full rounded-lg border p-3 text-sm"
                >
                  {ceremonies.map(
                    (c) => (
                      <option
                        key={c.id}
                        value={
                          c.name
                        }
                      >
                        {c.name}
                      </option>
                    )
                  )}
                </select>

                <input
                  type="date"
                  value={
                    formData.preferredDate
                  }
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      preferredDate:
                        e.target.value,
                    })
                  }
                  className="w-full rounded-lg border p-3 text-sm"
                />

                <input
                  type="text"
                  placeholder="Office City / Location"
                  value={
                    formData.location
                  }
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      location:
                        e.target.value,
                    })
                  }
                  className="w-full rounded-lg border p-3 text-sm"
                />

                <textarea
                  rows={3}
                  placeholder="Additional Requirements / Notes"
                  value={
                    formData.notes
                  }
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      notes:
                        e.target.value,
                    })
                  }
                  className="w-full rounded-lg border p-3 text-sm"
                />

                <button
                  type="submit"
                  className="w-full rounded-xl bg-[#4A1015] py-3 text-sm font-bold text-white"
                >
                  SUBMIT ENQUIRY
                </button>
              </form>
            )}
          </div>
        </div>
      )}

      {/* BOOKING MODAL */}
      {isBookingOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
          <div className="relative w-full max-w-md rounded-2xl bg-[#FAF6EE] border-2 border-[#DECBB0] shadow-2xl p-6 sm:p-8">

            <button
              type="button"
              onClick={() =>
                setIsBookingOpen(false)
              }
              className="absolute top-4 right-4 w-9 h-9 rounded-full flex items-center justify-center text-[#7A6458] hover:bg-[#F1E5D2] hover:text-[#42151B] transition-colors"
              aria-label="Close"
            >
              <X size={20} />
            </button>

            {bookingSuccess ? (
              <div className="py-10 text-center">
                <div className="mx-auto w-14 h-14 rounded-full bg-[#E5C77A] flex items-center justify-center">
                  <Check
                    size={28}
                    className="text-[#42151B]"
                  />
                </div>

                <h3 className="mt-5 font-[family-name:var(--font-cormorant)] text-3xl font-bold text-[#42151B]">
                  Request Received!
                </h3>

                <p className="mt-3 text-sm leading-relaxed text-[#55463E]">
                  Our team will contact
                  you shortly to confirm
                  your Iyer request.
                </p>
              </div>
            ) : (
              <>
                <div className="pr-8">
                  <h3 className="font-[family-name:var(--font-cormorant)] text-3xl font-bold text-[#42151B]">
                    Request for an Iyer
                  </h3>

                  <p className="mt-2 text-sm text-[#63534B]">
                    Fill in your details
                    and we&apos;ll get
                    back to you shortly.
                  </p>
                </div>

                <div className="my-5 border-t border-[#DECBB0]" />

                <form
                  onSubmit={
                    handleBookingSubmit
                  }
                  className="space-y-3.5"
                >
                  <input
                    type="text"
                    required
                    placeholder="Full Name"
                    value={
                      bookingForm.name
                    }
                    onChange={(e) =>
                      setBookingForm({
                        ...bookingForm,
                        name:
                          e.target.value,
                      })
                    }
                    className="w-full rounded-lg border border-[#DFCBB0] bg-white px-3 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#7D1E28]/20 focus:border-[#7D1E28]"
                  />

                  <input
                    type="tel"
                    required
                    placeholder="Mobile Number"
                    value={
                      bookingForm.mobile
                    }
                    onChange={(e) =>
                      setBookingForm({
                        ...bookingForm,
                        mobile:
                          e.target.value,
                      })
                    }
                    className="w-full rounded-lg border border-[#DFCBB0] bg-white px-3 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#7D1E28]/20 focus:border-[#7D1E28]"
                  />

                  <input
                    type="email"
                    required
                    placeholder="Email Address"
                    value={
                      bookingForm.email
                    }
                    onChange={(e) =>
                      setBookingForm({
                        ...bookingForm,
                        email:
                          e.target.value,
                      })
                    }
                    className="w-full rounded-lg border border-[#DFCBB0] bg-white px-3 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#7D1E28]/20 focus:border-[#7D1E28]"
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
                    className="w-full resize-none rounded-lg border border-[#DFCBB0] bg-white px-3 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#7D1E28]/20 focus:border-[#7D1E28]"
                  />

                  <div className="rounded-lg bg-[#F3EAD8] px-3 py-2.5">
                    <span className="block text-[10px] uppercase tracking-wider text-[#7A6458]">
                      Selected Pooja
                    </span>

                    <span className="mt-1 block text-sm font-bold text-[#42151B]">
                      {
                        selectedPackage.name
                      }
                    </span>
                  </div>

                  <button
                    type="submit"
                    className="w-full rounded-xl bg-[#5A121D] py-3.5 text-sm font-bold text-white tracking-wide shadow-sm hover:bg-[#400B13] hover:shadow-md transition-all active:scale-[0.99]"
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