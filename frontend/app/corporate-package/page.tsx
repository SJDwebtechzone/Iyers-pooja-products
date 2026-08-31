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
  Check,
  Sparkles,
  Phone,
  Calendar,
  User,
  Building2,
  Mail,
  MapPin,
  Clock,
  Flame,
  Award,
  Send,
  X,
  ShieldCheck,
  HeartHandshake,
  Gift,
  List,
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
  iconType: "ganesh" | "house" | "vastu" | "office" | "business" | "ayush";
  tagline: string;
  description: string;
  image: string;
  price: string;
  highlights: string[];
  items: SamagriItem[];
  process: { step: string; title: string; desc: string }[];
  benefits: { title: string; desc: string }[];
  notes: string[];
};

const ceremonies: CeremonyData[] = [
  {
    id: "friday-poojas",
    name: "Friday Poojas",
    iconType: "business",
    tagline: "Weekly blessings of Goddess Mahalakshmi for prosperity and harmony.",
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
      { sno: 1, english: "Fresh Flowers & Garland", tamil: "பூக்கள் & மாலை", quantity: "1 Set" },
      { sno: 2, english: "Turmeric & Kumkum", tamil: "மஞ்சள் & குங்குமம்", quantity: "1 Packet" },
      { sno: 3, english: "Camphor & Incense Sticks", tamil: "கற்பூரம் & அகர்பத்தி", quantity: "1 Pack" },
      { sno: 4, english: "Betel Leaves & Areca Nuts", tamil: "வெற்றிலை பாக்கு", quantity: "9 Sets" },
      { sno: 5, english: "Fruits & Sweet Naivedyam", tamil: "பழங்கள் & நைவேத்தியம்", quantity: "1 Set" },
      { sno: 6, english: "Deepam Oil & Cotton Wicks", tamil: "தீப எண்ணெய் & திரி", quantity: "1 Small Bottle" },
    ],
    process: [
      { step: "01", title: "Deepa Prajwalanam", desc: "Lighting the lamp and offering prayers to Goddess Lakshmi." },
      { step: "02", title: "Lakshmi Devi Archana", desc: "Performing Lakshmi Devi Archana with flowers and traditional prayers." },
      { step: "03", title: "Naivedyam Samarpanam", desc: "Offering fruits and sweets as Naivedyam." },
      { step: "04", title: "Aarthi & Prasadam", desc: "Concluding the pooja with Aarthi and distribution of Prasadam." },
    ],
    benefits: [
      { title: "Weekly Renewal", desc: "Creates a positive and peaceful atmosphere in the workplace." },
      { title: "Prosperity", desc: "Performed seeking Goddess Lakshmi's blessings for prosperity." },
      { title: "Team Positivity", desc: "Provides employees with a meaningful shared spiritual experience." },
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
    tagline: "Monthly new-moon observance seeking ancestral blessings.",
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
      { sno: 1, english: "Sesame Seeds", tamil: "எள்", quantity: "250 gms" },
      { sno: 2, english: "Darbai Grass", tamil: "தர்ப்பை புல்", quantity: "1 Bundle" },
      { sno: 3, english: "Black Til Oil", tamil: "எள் எண்ணெய்", quantity: "250 ml" },
      { sno: 4, english: "Turmeric & Kumkum", tamil: "மஞ்சள் & குங்குமம்", quantity: "1 Packet" },
      { sno: 5, english: "Camphor & Incense", tamil: "கற்பூரம் & அகர்பத்தி", quantity: "1 Pack" },
      { sno: 6, english: "Betel Leaves & Areca Nuts", tamil: "வெற்றிலை பாக்கு", quantity: "9 Sets" },
      { sno: 7, english: "Fruits & Naivedyam", tamil: "பழங்கள் & நைவேத்தியம்", quantity: "1 Set" },
    ],
    process: [
      { step: "01", title: "Amavasya Sankalpam", desc: "Declaring the intention for the Amavasya observance." },
      { step: "02", title: "Traditional Offerings", desc: "Performing the traditional offerings using sesame and water." },
      { step: "03", title: "Premises Cleansing", desc: "Performing traditional cleansing of the premises." },
      { step: "04", title: "Aarthi & Prasadam", desc: "Concluding the ceremony with Aarthi and Prasadam." },
    ],
    benefits: [
      { title: "Monthly Observance", desc: "Provides a traditional monthly spiritual observance." },
      { title: "Ancestral Blessings", desc: "Performed seeking blessings of ancestors." },
      { title: "Positive Beginning", desc: "Marks the beginning of a new lunar cycle." },
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
    tagline: "Remove obstacles and begin every venture with divine blessings.",
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
      { sno: 1, english: "Ganapathy Homam Samagri", tamil: "கணபதி ஹோமம் சாமக்ரி", quantity: "1 Set" },
      { sno: 2, english: "Navadhanyam", tamil: "நவதானியம்", quantity: "1 Set" },
      { sno: 3, english: "Homa Samithu", tamil: "ஹோம சமித்து", quantity: "1 Bundle" },
      { sno: 4, english: "Pure Cow Ghee", tamil: "சுத்தமான பசு நெய்", quantity: "500 ml" },
      { sno: 5, english: "Turmeric & Kumkum", tamil: "மஞ்சள் & குங்குமம்", quantity: "1 Packet" },
      { sno: 6, english: "Flowers & Garland", tamil: "பூக்கள் & மாலை", quantity: "1 Set" },
      { sno: 7, english: "Coconut & Fruits", tamil: "தேங்காய் & பழங்கள்", quantity: "1 Set" },
      { sno: 8, english: "Camphor & Incense", tamil: "கற்பூரம் & அகர்பத்தி", quantity: "1 Pack" },
    ],
    process: [
      { step: "01", title: "Sankalpam", desc: "The priest begins the ceremony with Sankalpam for the organization." },
      { step: "02", title: "Ganapathy Avahanam", desc: "Lord Ganesha is invoked through traditional prayers and offerings." },
      { step: "03", title: "Ganapathy Homam", desc: "Sacred offerings are made into the homa fire with Vedic chanting." },
      { step: "04", title: "Purnahuthi & Aarthi", desc: "The Homam concludes with Purnahuthi, Aarthi and Prasadam." },
    ],
    benefits: [
      { title: "Obstacle Removal", desc: "Traditionally performed seeking Lord Ganesha's blessings before important activities." },
      { title: "Positive Environment", desc: "Creates a spiritually positive atmosphere in the workplace." },
      { title: "Auspicious Beginning", desc: "Ideal for inaugurations, new offices and important corporate milestones." },
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
    tagline: "Blessings for company vehicles, machinery and equipment.",
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
      { sno: 1, english: "Lemon", tamil: "எலுமிச்சை", quantity: "9 Nos" },
      { sno: 2, english: "Flower Garlands", tamil: "பூ மாலைகள்", quantity: "4 Nos" },
      { sno: 3, english: "Turmeric & Kumkum", tamil: "மஞ்சள் & குங்குமம்", quantity: "1 Packet" },
      { sno: 4, english: "Camphor & Incense Sticks", tamil: "கற்பூரம் & அகர்பத்தி", quantity: "1 Pack" },
      { sno: 5, english: "Coconut", tamil: "தேங்காய்", quantity: "3 Pieces" },
      { sno: 6, english: "Betel Leaves & Areca Nuts", tamil: "வெற்றிலை பாக்கு", quantity: "21 Sets" },
      { sno: 7, english: "Sweet Naivedyam", tamil: "நைவேத்தியம்", quantity: "1 Set" },
    ],
    process: [
      { step: "01", title: "Sankalpam", desc: "Beginning the ceremony with Sankalpam." },
      { step: "02", title: "Equipment Blessing", desc: "Applying turmeric and kumkum to vehicles and equipment." },
      { step: "03", title: "Vehicle Pooja", desc: "Performing traditional prayers for company vehicles." },
      { step: "04", title: "Maha Aarthi", desc: "Concluding the ceremony with Maha Aarthi and Prasadam." },
    ],
    benefits: [
      { title: "Vehicle Blessing", desc: "Traditional prayers for company vehicles." },
      { title: "Equipment Blessing", desc: "Covers machinery, tools and workplace equipment." },
      { title: "Team Confidence", desc: "Creates a meaningful traditional experience for staff." },
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
    tagline: "A simple, meaningful closing ceremony for corporate events.",
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
      { sno: 1, english: "Camphor for Aarthi", tamil: "கற்பூரம்", quantity: "50 gms" },
      { sno: 2, english: "Brass Aarthi Plate", tamil: "ஆரத்தி தட்டு", quantity: "1 No" },
      { sno: 3, english: "Turmeric & Kumkum", tamil: "மஞ்சள் & குங்குமம்", quantity: "1 Packet" },
      { sno: 4, english: "Flowers", tamil: "பூக்கள்", quantity: "1 Packet" },
      { sno: 5, english: "Sweet Prasadam", tamil: "பிரசாதம்", quantity: "As per headcount" },
      { sno: 6, english: "Rosewater Sprinkler", tamil: "பன்னீர் சொம்பு", quantity: "1 No" },
    ],
    process: [
      { step: "01", title: "Gathering", desc: "Staff and attendees gather for the closing ceremony." },
      { step: "02", title: "Camphor Aarthi", desc: "Traditional Aarthi is performed." },
      { step: "03", title: "Prasadam Blessing", desc: "Prasadam is prepared for distribution." },
      { step: "04", title: "Distribution", desc: "Prasadam is distributed to attendees." },
    ],
    benefits: [
      { title: "Simple Closure", desc: "Provides a meaningful conclusion to corporate events." },
      { title: "Team Gathering", desc: "Brings employees together for a shared ceremony." },
      { title: "Flexible", desc: "Can be added to other corporate ceremonies." },
    ],
    notes: [
      "Suitable for corporate events and celebrations.",
      "Prasadam quantity can be based on the number of attendees.",
    ],
  },
];

// ==========================================
// 4 FEATURE CARDS (WHY CHOOSE US)
// ==========================================

const featureCards = [
  {
    icon: Flame,
    title: "Experienced Priests",
    description: "Our priests are well-versed in Vedic rituals and corporate pooja requirements.",
  },
  {
    icon: Package,
    title: "Complete Samagri",
    description: "All required items and samagri will be arranged with utmost care and purity.",
  },
  {
    icon: ShieldCheck,
    title: "Authentic & Reliable",
    description: "We follow authentic Vedic procedures passed down through generations.",
  },
  {
    icon: HeartHandshake,
    title: "Hassle-free Service",
    description: "End-to-end support for your corporate pooja, on time, every time.",
  },
];

// ==========================================
// MAIN COMPONENT
// ==========================================

export default function CorporatePackagePage() {
  const API_BASE = "http://localhost:3001";

  const [selectedCeremony, setSelectedCeremony] = useState<CeremonyData>(ceremonies[0]);
  const [activeTab, setActiveTab] = useState<"details" | "process" | "benefits" | "notes">("details");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalSuccess, setModalSuccess] = useState(false);

  const [liveItems, setLiveItems] = useState<SamagriItem[]>(ceremonies[0].items);
  const [itemsLoading, setItemsLoading] = useState(false);

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

  const ceremonySectionRef = useRef<HTMLElement>(null);
  const packageDetailsRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleHash = () => {
      if (typeof window === "undefined") return;
      const rawHash = window.location.hash.replace("#", "").toLowerCase().trim();
      if (!rawHash) return;

      const match = ceremonies.find(
        (c) =>
          c.id.toLowerCase() === rawHash ||
          rawHash.includes(c.id.toLowerCase()) ||
          c.id.toLowerCase().replace(/-/g, "").includes(rawHash.replace(/-/g, "")) ||
          c.name.toLowerCase().replace(/[^a-z0-9]/g, "-").includes(rawHash)
      );

      if (match) {
        setSelectedCeremony(match);
        setFormData((prev) => ({ ...prev, ceremony: match.name }));
        setActiveTab("details");
        setTimeout(() => {
          const el = document.getElementById("corporate-details-section") || packageDetailsRef.current;
          if (el) {
            el.scrollIntoView({ behavior: "smooth" });
          }
        }, 120);
      }
    };

    handleHash();
    window.addEventListener("hashchange", handleHash);
    return () => window.removeEventListener("hashchange", handleHash);
  }, []);

  useEffect(() => {
    let cancelled = false;

    async function loadItems() {
      setItemsLoading(true);

      try {
        const res = await fetch(`${API_BASE}/corporate-packages/${selectedCeremony.id}`);

        if (!res.ok) {
          throw new Error("Failed to load items");
        }

        const data = await res.json();

        if (!cancelled) {
          const mapped: SamagriItem[] = data.map((row: any) => ({
            sno: row.sno,
            english: row.name_english,
            tamil: row.name_tamil ?? "",
            quantity: row.quantity ?? "",
          }));

          setLiveItems(mapped.length > 0 ? mapped : selectedCeremony.items);
        }
      } catch {
        if (!cancelled) {
          setLiveItems(selectedCeremony.items);
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
  }, [selectedCeremony.id]);

  const handleSelectCeremony = (ceremony: CeremonyData) => {
    setSelectedCeremony(ceremony);
    setFormData((prev) => ({ ...prev, ceremony: ceremony.name }));
  };

  const handleFormSubmit = (e: React.FormEvent) => {
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
        ceremony: selectedCeremony.name,
        preferredDate: "",
        location: "",
        notes: "",
      });
    }, 2500);
  };

  const renderRitualIcon = (type: CeremonyData["iconType"], isActive: boolean) => {
    const strokeColor = isActive ? "#FFFFFF" : "#B08A45";
    switch (type) {
      case "ganesh":
        return (
          <svg viewBox="0 0 24 24" fill="none" stroke={strokeColor} strokeWidth="1.6" className="w-8 h-8">
            <circle cx="12" cy="7" r="3.5" />
            <path d="M7 11c0 5 2 9 5 9s5-4 5-9" />
            <path d="M12 10.5v3.5a1.5 1.5 0 0 0 3 0" />
            <path d="M6 8.5C4 9 3 11 3 13" />
            <path d="M18 8.5C20 9 21 11 21 13" />
          </svg>
        );
      case "house":
        return (
          <svg viewBox="0 0 24 24" fill="none" stroke={strokeColor} strokeWidth="1.6" className="w-8 h-8">
            <path d="M3 10.5L12 3l9 7.5" />
            <path d="M5 9.5V20a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V9.5" />
            <path d="M10 21v-7h4v7" />
            <path d="M9 3v2" />
            <path d="M15 3v2" />
          </svg>
        );
      case "vastu":
        return (
          <svg viewBox="0 0 24 24" fill="none" stroke={strokeColor} strokeWidth="1.6" className="w-8 h-8">
            <rect x="3" y="3" width="18" height="18" rx="2" />
            <circle cx="12" cy="12" r="5" />
            <path d="M12 3v18" />
            <path d="M3 12h18" />
            <circle cx="12" cy="12" r="1.5" />
          </svg>
        );
      case "office":
        return (
          <svg viewBox="0 0 24 24" fill="none" stroke={strokeColor} strokeWidth="1.6" className="w-8 h-8">
            <rect x="4" y="2" width="16" height="20" rx="1" />
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
          <svg viewBox="0 0 24 24" fill="none" stroke={strokeColor} strokeWidth="1.6" className="w-8 h-8">
            <path d="M12 3c-2.5 3-4 6-4 9a4 4 0 0 0 8 0c0-3-1.5-6-4-9z" />
            <path d="M4 14c2-1 4.5-1 6.5 0-1.5-2.5-4-3.5-6.5-2 0 1 .5 2 .5 2z" />
            <path d="M20 14c-2-1-4.5-1-6.5 0 1.5-2.5 4-3.5 6.5-2 0 1-.5 2-.5 2z" />
            <path d="M6 19c3 1.5 9 1.5 12 0" />
          </svg>
        );
      case "ayush":
        return (
          <svg viewBox="0 0 24 24" fill="none" stroke={strokeColor} strokeWidth="1.6" className="w-8 h-8">
            <path d="M12 2a4 4 0 0 0-4 4c0 3 4 7 4 7s4-4 4-7a4 4 0 0 0-4-4z" />
            <circle cx="12" cy="18" r="3" />
            <path d="M5 21c1.5-2 4-3 7-3s5.5 1 7 3" />
          </svg>
        );
      default:
        return <Sparkles className="w-8 h-8" stroke={strokeColor} />;
    }
  };

  return (
    <main className="min-h-screen bg-[#FAF6EE] text-[#29231F] font-sans antialiased selection:bg-[#B08A45]/30">
      {/* 1. HERO */}
      <section className="relative pt-[90px] overflow-hidden bg-[#FAF6EE] border-b border-[#E8DDC8]">
        <div className="pointer-events-none absolute -left-24 -top-24 h-96 w-96 rounded-full bg-[#B08A45]/5 blur-3xl" />

        <div className="mx-auto max-w-[1600px] grid grid-cols-1 lg:grid-cols-12 items-stretch min-h-[560px] lg:min-h-[620px]">
          <div className="lg:col-span-6 flex flex-col justify-between pt-8 sm:pt-12 lg:pt-14 pb-8 px-6 sm:px-10 lg:pl-16 lg:pr-8 z-10">
            <div>
              <h1 className="font-[family-name:var(--font-cormorant)] text-4xl sm:text-5xl lg:text-6xl xl:text-[64px] font-bold tracking-tight text-[#42151B] leading-[1.12]">
                Corporate &amp;
                <br />
                Office Package
              </h1>

              <div className="mt-4 flex items-center gap-2">
                <span className="text-xs text-[#B08A45]">✦</span>
                <p className="font-[family-name:var(--font-cormorant)] text-xl sm:text-2xl font-semibold text-[#B37D2A]">
                  Auspicious Beginnings, Prosperous Journeys
                </p>
              </div>

              <p className="mt-3 text-sm sm:text-[15px] text-[#55463E] leading-relaxed max-w-xl">
                Traditional poojas and homams for offices, new establishments, business spaces and important corporate occasions.
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 mt-8 max-w-xl">
                <div className="flex flex-col items-center text-center p-3 rounded-xl bg-[#F5EDE0]/70 border border-[#E5D7C0] transition-transform hover:-translate-y-0.5">
                  <div className="w-10 h-10 rounded-full flex items-center justify-center text-[#7D1E28] mb-1.5 bg-[#FFFDF9] border border-[#DFCBB0]">
                    <Flame size={20} strokeWidth={1.8} />
                  </div>
                  <span className="text-[11px] sm:text-xs font-semibold text-[#42151B] leading-tight">
                    Sacred Rituals
                  </span>
                </div>

                <div className="flex flex-col items-center text-center p-3 rounded-xl bg-[#F5EDE0]/70 border border-[#E5D7C0] transition-transform hover:-translate-y-0.5">
                  <div className="w-10 h-10 rounded-full flex items-center justify-center text-[#7D1E28] mb-1.5 bg-[#FFFDF9] border border-[#DFCBB0]">
                    <Award size={20} strokeWidth={1.8} />
                  </div>
                  <span className="text-[11px] sm:text-xs font-semibold text-[#42151B] leading-tight">
                    Experienced Priests
                  </span>
                </div>

                <div className="flex flex-col items-center text-center p-3 rounded-xl bg-[#F5EDE0]/70 border border-[#E5D7C0] transition-transform hover:-translate-y-0.5">
                  <div className="w-10 h-10 rounded-full flex items-center justify-center text-[#7D1E28] mb-1.5 bg-[#FFFDF9] border border-[#DFCBB0]">
                    <Package size={20} strokeWidth={1.8} />
                  </div>
                  <span className="text-[11px] sm:text-xs font-semibold text-[#42151B] leading-tight">
                    Complete Samagri
                  </span>
                </div>

                <div className="flex flex-col items-center text-center p-3 rounded-xl bg-[#F5EDE0]/70 border border-[#E5D7C0] transition-transform hover:-translate-y-0.5">
                  <div className="w-10 h-10 rounded-full flex items-center justify-center text-[#7D1E28] mb-1.5 bg-[#FFFDF9] border border-[#DFCBB0]">
                    <Clock size={20} strokeWidth={1.8} />
                  </div>
                  <span className="text-[11px] sm:text-xs font-semibold text-[#42151B] leading-tight">
                    Timely &amp; Hassle-free
                  </span>
                </div>
              </div>
            </div>

            <div className="mt-8 sm:mt-10 -ml-6 sm:-ml-10 lg:-ml-16 self-start">
              <div className="inline-flex items-center gap-2 bg-[#4A1015] text-[#F3EAD8] text-xs sm:text-sm font-medium py-2.5 pl-6 sm:pl-10 pr-8 rounded-r-3xl shadow-md border-y border-r border-[#6B1E26]">
                <Link href="/" className="hover:text-amber-300 transition-colors">
                  Home
                </Link>
                <ChevronRight size={14} className="text-[#C79D55]" />
                <Link href="/package" className="hover:text-amber-300 transition-colors">
                  Pooja Packages
                </Link>
                <ChevronRight size={14} className="text-[#C79D55]" />
                <span className="text-[#E7BE6B] font-semibold">Corporate Package</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 relative min-h-[380px] lg:min-h-full overflow-hidden">
            <div className="absolute inset-0 w-full h-full">
              <Image
                src="/images/corporate_hero.jpg"
                alt="Traditional pooja setup in modern glass corporate boardroom"
                fill
                priority
                className="object-cover object-center scale-105"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-y-0 left-0 w-20 sm:w-28 lg:w-40 bg-gradient-to-r from-[#FAF6EE] via-[#FAF6EE]/80 to-transparent pointer-events-none hidden lg:block" />
              <div className="absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-[#FAF6EE] to-transparent pointer-events-none lg:hidden" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent pointer-events-none" />
            </div>
          </div>
        </div>
      </section>

      {/* 2. HIGHLIGHT STRIP */}
      <section className="py-8 sm:py-12 px-4 sm:px-8 max-w-[1400px] mx-auto">
        <div className="relative rounded-2xl bg-[#FCFAF5] border border-[#DFCBB0] p-6 sm:p-8 shadow-[0_6px_25px_rgba(90,20,30,0.05)] overflow-hidden">
          <div className="absolute top-2 left-2 w-5 h-5 border-t-2 border-l-2 border-[#C79D55]" />
          <div className="absolute top-2 right-2 w-5 h-5 border-t-2 border-r-2 border-[#C79D55]" />
          <div className="absolute bottom-2 left-2 w-5 h-5 border-b-2 border-l-2 border-[#C79D55]" />
          <div className="absolute bottom-2 right-2 w-5 h-5 border-b-2 border-r-2 border-[#C79D55]" />

          <div className="hidden md:flex absolute top-0 left-12 flex-col items-center pointer-events-none opacity-80">
            <div className="w-px h-6 bg-[#B08A45]" />
            <div className="text-lg">🔔</div>
          </div>
          <div className="hidden md:flex absolute top-0 right-12 flex-col items-center pointer-events-none opacity-80">
            <div className="w-px h-6 bg-[#B08A45]" />
            <div className="text-lg">🔔</div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 items-center gap-6 relative z-10">
            <div className="md:col-span-3 flex justify-center md:justify-start">
              <div className="relative w-28 h-28 sm:w-36 sm:h-36 transition-transform hover:scale-105 duration-300">
                <Image
                  src="/images/kalash_transparent.png"
                  alt="Sacred Kalash with Coconut and Mango Leaves"
                  fill
                  className="object-contain drop-shadow-[0_6px_14px_rgba(180,130,50,0.2)]"
                />
              </div>
            </div>

            <div className="md:col-span-6 text-center px-2">
              <h2 className="font-[family-name:var(--font-cormorant)] text-2xl sm:text-3xl lg:text-[34px] font-bold text-[#42151B] leading-tight">
                Auspicious Beginnings for Every Enterprise
              </h2>
              <div className="flex items-center justify-center gap-2 my-2.5">
                <span className="h-px w-10 bg-gradient-to-r from-transparent to-[#B08A45]" />
                <span className="w-1.5 h-1.5 rotate-45 bg-[#B08A45]" />
                <span className="h-px w-10 bg-gradient-to-l from-transparent to-[#B08A45]" />
              </div>
              <p className="text-xs sm:text-sm font-medium text-[#7D5F42] tracking-wide">
                Friday Poojas &nbsp;•&nbsp; Amavasai Poojas &nbsp;•&nbsp; Ganapathi Homam &nbsp;•&nbsp; Ayudha Pooja
              </p>
            </div>

            <div className="md:col-span-3 flex justify-center md:justify-end">
              <div className="relative w-28 h-28 sm:w-36 sm:h-36 transition-transform hover:scale-105 duration-300">
                <Image
                  src="/images/brassplate_transparent.png"
                  alt="Traditional Brass Diya Plate"
                  fill
                  className="object-contain drop-shadow-[0_6px_14px_rgba(180,130,50,0.2)]"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. CHOOSE YOUR CEREMONY */}
      <section ref={ceremonySectionRef} className="py-8 sm:py-14 px-4 sm:px-8 max-w-[1400px] mx-auto">
        <div className="text-center mb-10 sm:mb-12">
          <h2 className="font-[family-name:var(--font-cormorant)] text-3xl sm:text-4xl lg:text-[44px] font-bold text-[#42151B]">
            Choose Your Ceremony
          </h2>
          <div className="flex items-center justify-center gap-2 mt-3">
            <span className="h-px w-12 bg-gradient-to-r from-transparent to-[#B08A45]" />
            <span className="w-1.5 h-1.5 rotate-45 border border-[#B08A45]" />
            <span className="w-2.5 h-2.5 rotate-45 bg-[#B08A45]" />
            <span className="w-1.5 h-1.5 rotate-45 border border-[#B08A45]" />
            <span className="h-px w-12 bg-gradient-to-l from-transparent to-[#B08A45]" />
          </div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4">
          {ceremonies.map((ceremony) => {
            const isActive = selectedCeremony.id === ceremony.id;
            return (
              <button
                key={ceremony.id}
                type="button"
                onClick={() => handleSelectCeremony(ceremony)}
                className={`group flex flex-col items-center justify-center p-4 sm:p-5 rounded-2xl border transition-all duration-300 text-center ${
                  isActive
                    ? "bg-[#4A1015] border-[#4A1015] text-white shadow-[0_8px_25px_rgba(74,16,21,0.28)] scale-[1.03]"
                    : "bg-[#FAF7F0] border-[#E8DEC8] text-[#42151B] hover:bg-[#F3EDE0] hover:border-[#D4B978] hover:shadow-md"
                }`}
              >
                <div
                  className={`w-12 h-12 rounded-xl flex items-center justify-center mb-3 transition-colors ${
                    isActive ? "bg-white/10 text-white" : "bg-white text-[#B08A45] border border-[#E9DDC9]"
                  }`}
                >
                  {renderRitualIcon(ceremony.iconType, isActive)}
                </div>
                <span
                  className={`font-[family-name:var(--font-cormorant)] text-base sm:text-lg font-bold leading-tight ${
                    isActive ? "text-white" : "text-[#42151B]"
                  }`}
                >
                  {ceremony.name}
                </span>
              </button>
            );
          })}
        </div>

        {/* 4. SELECTED CEREMONY OVERVIEW */}
        <div className="mt-8 rounded-2xl bg-white border border-[#DFCBB0] p-5 sm:p-8 shadow-[0_10px_35px_rgba(80,20,30,0.06)] overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-center">
            <div className="lg:col-span-5 relative aspect-[16/10] sm:aspect-[4/3] w-full rounded-xl overflow-hidden shadow-md border border-[#E9DDC9]">
              <Image
                src={selectedCeremony.image}
                alt={selectedCeremony.name}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 40vw"
              />
              <div className="absolute bottom-3 left-3 rounded-lg bg-[#4A1015]/90 px-3 py-1.5 text-xs font-semibold text-white shadow-md backdrop-blur-sm">
                Starting at {selectedCeremony.price}
              </div>
            </div>

            <div className="lg:col-span-7 flex flex-col justify-center">
              <h3 className="font-[family-name:var(--font-cormorant)] text-2xl sm:text-3xl lg:text-4xl font-bold text-[#42151B]">
                {selectedCeremony.name}
              </h3>
              <p className="mt-1 text-xs sm:text-sm font-semibold text-[#B37D2A]">
                {selectedCeremony.tagline}
              </p>
              <p className="mt-3 text-xs sm:text-sm leading-relaxed text-[#55463E]">
                {selectedCeremony.description}
              </p>

              <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                {selectedCeremony.highlights.map((highlight, idx) => (
                  <div key={idx} className="flex items-start gap-2.5">
                    <div className="w-5 h-5 rounded-full bg-[#FAF3E5] border border-[#D4B978] flex items-center justify-center text-[#7D1E28] shrink-0 mt-0.5">
                      <Check size={12} strokeWidth={2.5} />
                    </div>
                    <span className="text-xs sm:text-[13px] font-medium text-[#42151B] leading-snug">
                      {highlight}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. PACKAGE DETAILS TABS */}
      <section ref={packageDetailsRef} id="corporate-details-section" className="scroll-mt-28 py-8 sm:py-14 px-4 sm:px-8 max-w-[1400px] mx-auto">
               <div className="text-center mb-8 sm:mb-10">
          <span className="inline-block px-4 py-1 rounded-full bg-[#EFE3CF] border border-[#DECBB0] text-[11px] sm:text-xs font-bold tracking-[0.2em] uppercase text-[#88242F] mb-3">
            {selectedCeremony.name}
          </span>
          <h2 className="font-[family-name:var(--font-cormorant)] text-3xl sm:text-4xl lg:text-[40px] font-bold text-[#42151B]">
            Package Details
          </h2>
          <div className="flex items-center justify-center gap-2 mt-3">
            <span className="h-px w-12 bg-gradient-to-r from-transparent to-[#B08A45]" />
            <span className="w-1.5 h-1.5 rotate-45 border border-[#B08A45]" />
            <span className="w-2.5 h-2.5 rotate-45 bg-[#B08A45]" />
            <span className="w-1.5 h-1.5 rotate-45 border border-[#B08A45]" />
            <span className="h-px w-12 bg-gradient-to-l from-transparent to-[#B08A45]" />
          </div>
        </div>

        <div className="relative rounded-2xl bg-[#FCFAF5] border border-[#DFCBB0] p-4 sm:p-6 lg:p-7 shadow-[0_10px_35px_rgba(80,20,30,0.06)] overflow-hidden">
          <div className="absolute top-2 left-2 w-4 h-4 border-t-2 border-l-2 border-[#C79D55]" />
          <div className="absolute top-2 right-2 w-4 h-4 border-t-2 border-r-2 border-[#C79D55]" />
          <div className="absolute bottom-2 left-2 w-4 h-4 border-b-2 border-l-2 border-[#C79D55]" />
          <div className="absolute bottom-2 right-2 w-4 h-4 border-b-2 border-r-2 border-[#C79D55]" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">
            <div className="lg:col-span-3 bg-[#4A1015] rounded-xl p-3 sm:p-4 text-white shadow-md space-y-2">
              <button
                type="button"
                onClick={() => setActiveTab("details")}
                className={`w-full flex items-center gap-3 px-4 py-3.5 rounded-lg text-left text-xs sm:text-sm font-medium transition-all duration-300 ${
                  activeTab === "details"
                    ? "bg-[#7D1E28] text-white shadow-sm border-l-4 border-[#E7BE6B]"
                    : "text-[#E6CFCE] hover:bg-[#5E1520] hover:text-white"
                }`}
              >
                <Gift size={18} className={activeTab === "details" ? "text-[#E7BE6B]" : "text-[#B8860B]"} />
                <span>Package Details</span>
              </button>

              <button
                type="button"
                onClick={() => setActiveTab("process")}
                className={`w-full flex items-center gap-3 px-4 py-3.5 rounded-lg text-left text-xs sm:text-sm font-medium transition-all duration-300 ${
                  activeTab === "process"
                    ? "bg-[#7D1E28] text-white shadow-sm border-l-4 border-[#E7BE6B]"
                    : "text-[#E6CFCE] hover:bg-[#5E1520] hover:text-white"
                }`}
              >
                <List size={18} className={activeTab === "process" ? "text-[#E7BE6B]" : "text-[#B8860B]"} />
                <span>Pooja Process</span>
              </button>

              <button
                type="button"
                onClick={() => setActiveTab("benefits")}
                className={`w-full flex items-center gap-3 px-4 py-3.5 rounded-lg text-left text-xs sm:text-sm font-medium transition-all duration-300 ${
                  activeTab === "benefits"
                    ? "bg-[#7D1E28] text-white shadow-sm border-l-4 border-[#E7BE6B]"
                    : "text-[#E6CFCE] hover:bg-[#5E1520] hover:text-white"
                }`}
              >
                <Star size={18} className={activeTab === "benefits" ? "text-[#E7BE6B]" : "text-[#B8860B]"} />
                <span>Benefits</span>
              </button>

              <button
                type="button"
                onClick={() => setActiveTab("notes")}
                className={`w-full flex items-center gap-3 px-4 py-3.5 rounded-lg text-left text-xs sm:text-sm font-medium transition-all duration-300 ${
                  activeTab === "notes"
                    ? "bg-[#7D1E28] text-white shadow-sm border-l-4 border-[#E7BE6B]"
                    : "text-[#E6CFCE] hover:bg-[#5E1520] hover:text-white"
                }`}
              >
                <Info size={18} className={activeTab === "notes" ? "text-[#E7BE6B]" : "text-[#B8860B]"} />
                <span>Important Notes</span>
              </button>

              <div className="pt-4 border-t border-white/10 hidden sm:block">
                <span className="text-[10px] uppercase tracking-wider text-[#D4B978]">Selected Package</span>
                <div className="font-[family-name:var(--font-cormorant)] text-xl font-bold text-[#F3D78A]">
                  {selectedCeremony.name}
                </div>
                <div className="text-xs text-white/80 mt-0.5">{selectedCeremony.price}</div>
                <button
                  type="button"
                  onClick={() => setIsModalOpen(true)}
                  className="mt-3 w-full rounded-lg bg-[#E5C77A] py-2 text-center text-xs font-bold text-[#3D1418] transition hover:bg-[#F3D78A]"
                >
                  Enquire Now
                </button>
              </div>
            </div>

            <div className="lg:col-span-9 relative">
              {activeTab === "details" && (
                <div className="space-y-4">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                    <h3 className="font-[family-name:var(--font-cormorant)] text-xl sm:text-2xl text-[#42151B] font-bold">
                      Pooja Samagri / Items List
                    </h3>
                    <span className="text-xs text-[#7D1E28] font-semibold">
                      {selectedCeremony.name} ({liveItems.length} Items)
                    </span>
                  </div>

                  <div className="grid grid-cols-1 xl:grid-cols-[1fr_160px] gap-4 items-center">
                    <div className="overflow-x-auto rounded-lg border border-[#DFCBB0] shadow-sm bg-white">
                      <table className="w-full text-left text-xs sm:text-sm border-collapse">
                        <thead>
                          <tr className="bg-[#5A1015] text-white text-[11px] sm:text-xs font-semibold tracking-wider">
                            <th className="py-2.5 px-3 w-12 text-center">S.No</th>
                            <th className="py-2.5 px-3 sm:px-4">Name (English)</th>
                            <th className="py-2.5 px-3 sm:px-4">Name (Tamil)</th>
                            <th className="py-2.5 px-3 sm:px-4 text-right sm:text-left">Quantity</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-[#EFE3CF]">
                          {itemsLoading ? (
                            <tr>
                              <td colSpan={4} className="py-4 px-3 text-center text-[#7A6458]">
                                Loading items...
                              </td>
                            </tr>
                          ) : (
                            liveItems.map((item, index) => (
                              <tr
                                key={item.sno}
                                className={`transition-colors hover:bg-[#F5EDE0] ${
                                  index % 2 === 0 ? "bg-[#FAF7F0]" : "bg-white"
                                }`}
                              >
                                <td className="py-2 px-3 text-center text-[#7A6458] font-medium">
                                  {item.sno}.
                                </td>
                                <td className="py-2 px-3 sm:px-4 font-medium text-[#3A2226]">
                                  {item.english}
                                </td>
                                <td className="py-2 px-3 sm:px-4 font-normal text-[#5A382A]">
                                  {item.tamil}
                                </td>
                                <td className="py-2 px-3 sm:px-4 font-semibold text-[#7D1E28] text-right sm:text-left">
                                  {item.quantity}
                                </td>
                              </tr>
                            ))
                          )}
                        </tbody>
                      </table>
                    </div>

                    <div className="hidden xl:flex flex-col items-center justify-center p-2">
                      <div className="relative w-36 h-60">
                        <Image
                          src="/images/brassplate_transparent.png"
                          alt="Sacred Brass Deepam"
                          fill
                          className="object-contain drop-shadow-[0_8px_20px_rgba(200,150,50,0.3)]"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === "process" && (
                <div className="space-y-4">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-[family-name:var(--font-cormorant)] text-xl sm:text-2xl text-[#42151B] font-bold">
                      Step-by-Step Pooja Process ({selectedCeremony.name})
                    </h3>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {selectedCeremony.process.map((step) => (
                      <div
                        key={step.step}
                        className="bg-white p-4 sm:p-5 rounded-xl border border-[#DFCBB0] shadow-sm hover:shadow-md transition-shadow relative overflow-hidden"
                      >
                        <div className="flex items-start gap-3">
                          <span className="w-8 h-8 rounded-full bg-[#4A1015] text-[#F5E6C8] flex items-center justify-center font-[family-name:var(--font-cormorant)] font-bold text-sm shrink-0 shadow-inner">
                            {step.step}
                          </span>
                          <div>
                            <h4 className="font-[family-name:var(--font-cormorant)] text-lg font-bold text-[#42151B]">
                              {step.title}
                            </h4>
                            <p className="text-xs text-[#5A4940] leading-relaxed mt-1">
                              {step.desc}
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {activeTab === "benefits" && (
                <div className="space-y-4">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-[family-name:var(--font-cormorant)] text-xl sm:text-2xl text-[#42151B] font-bold">
                      Corporate Blessings &amp; Benefits
                    </h3>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {selectedCeremony.benefits.map((benefit, idx) => (
                      <div
                        key={idx}
                        className="bg-white p-4 sm:p-5 rounded-xl border border-[#DFCBB0] shadow-sm hover:shadow-md transition-shadow flex items-start gap-3"
                      >
                        <div className="w-9 h-9 rounded-full bg-[#FAF2E6] border border-[#DECBB0] flex items-center justify-center text-[#781D27] shrink-0">
                          <Star size={18} />
                        </div>
                        <div>
                          <h4 className="font-[family-name:var(--font-cormorant)] text-lg font-bold text-[#42151B]">
                            {benefit.title}
                          </h4>
                          <p className="text-xs text-[#5A4940] leading-relaxed mt-1">
                            {benefit.desc}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {activeTab === "notes" && (
                <div className="space-y-4">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-[family-name:var(--font-cormorant)] text-xl sm:text-2xl text-[#42151B] font-bold">
                      Important Guidelines &amp; Arrangements
                    </h3>
                  </div>

                  <div className="space-y-3">
                    {selectedCeremony.notes.map((note, idx) => (
                      <div
                        key={idx}
                        className="flex items-start gap-3 bg-white p-4 rounded-xl border border-[#DFCBB0] shadow-sm"
                      >
                        <Info size={18} className="text-[#B08A45] shrink-0 mt-0.5" />
                        <p className="text-xs sm:text-sm text-[#55463E] leading-relaxed">
                          {note}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* 6. FEATURE CARDS */}
      <section className="py-8 sm:py-12 px-4 sm:px-8 max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {featureCards.map((card, idx) => {
            const Icon = card.icon;
            return (
              <div
                key={idx}
                className="bg-[#FCFAF5] rounded-2xl border border-[#E5D7C0] p-6 shadow-sm flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 hover:shadow-md hover:border-[#D4B978]"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center text-[#7D1E28] bg-white border border-[#E9DDC9] mb-4">
                    <Icon size={22} strokeWidth={1.8} />
                  </div>
                  <h3 className="font-[family-name:var(--font-cormorant)] text-xl font-bold text-[#42151B]">
                    {card.title}
                  </h3>
                  <p className="mt-2 text-xs sm:text-[13px] text-[#63534B] leading-relaxed">
                    {card.description}
                  </p>
                </div>

                <button
                  type="button"
                  onClick={() => setIsModalOpen(true)}
                  className="mt-6 inline-flex items-center gap-1.5 text-xs font-semibold text-[#7D1E28] hover:text-[#4A1015] group"
                >
                  <span>Know More</span>
                  <ArrowRight size={13} className="transition-transform group-hover:translate-x-1" />
                </button>
              </div>
            );
          })}
        </div>
      </section>

      {/* 7. CTA BANNER */}
      <section className="px-4 pb-16 pt-6 sm:px-8 sm:pb-24 max-w-[1400px] mx-auto">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-[#3B0E12] via-[#521319] to-[#3B0E12] p-6 sm:p-10 lg:p-12 text-white shadow-2xl">
          <div className="pointer-events-none absolute -left-10 -top-10 h-48 w-48 rounded-full bg-[#E5C77A]/15 blur-2xl" />
          <div className="pointer-events-none absolute -bottom-10 -right-10 h-48 w-48 rounded-full bg-[#E5C77A]/15 blur-2xl" />

          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6 sm:gap-8">
            <div className="flex items-center gap-5">
              <div className="relative w-20 h-20 sm:w-28 sm:h-28 shrink-0">
                <Image
                  src="/images/brassplate_transparent.png"
                  alt="Auspicious Diya"
                  fill
                  className="object-contain drop-shadow-[0_4px_16px_rgba(230,190,100,0.4)]"
                />
              </div>
              <div>
                <h2 className="font-[family-name:var(--font-cormorant)] text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-[#FFFDF8]">
                  Planning an Auspicious Beginning?
                </h2>
                <p className="mt-1.5 text-xs sm:text-sm text-[#F3EAD8]/90 max-w-xl">
                  Let us help you choose the right pooja for your office, business or new premises.
                </p>
              </div>
            </div>

            <div className="shrink-0 w-full md:w-auto">
              <button
                type="button"
                onClick={() => setIsModalOpen(true)}
                className="w-full md:w-auto inline-flex items-center justify-center gap-2 rounded-xl bg-[#E5C77A] px-8 py-3.5 text-xs sm:text-sm font-bold tracking-wider text-[#3D1418] shadow-lg transition-all duration-300 hover:bg-[#F3D78A] hover:scale-105 active:scale-95"
              >
                <span>Enquire Now</span>
                <ArrowRight size={16} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 8. ENQUIRY MODAL */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="relative w-full max-w-xl rounded-2xl bg-[#FCFAF5] border border-[#DFCBB0] p-6 sm:p-8 shadow-2xl max-h-[90vh] overflow-y-auto">
            <button
              type="button"
              onClick={() => setIsModalOpen(false)}
              className="absolute top-4 right-4 text-[#7A6458] hover:text-[#42151B] p-1.5 rounded-full hover:bg-[#EFE3CF] transition-colors"
              aria-label="Close modal"
            >
              <X size={20} />
            </button>

            {modalSuccess ? (
              <div className="py-10 text-center space-y-3">
                <div className="w-16 h-16 rounded-full bg-[#FAF3E5] border-2 border-[#D4B978] flex items-center justify-center text-[#7D1E28] mx-auto">
                  <CheckCircle2 size={36} />
                </div>
                <h3 className="font-[family-name:var(--font-cormorant)] text-2xl sm:text-3xl font-bold text-[#42151B]">
                  Enquiry Submitted Successfully!
                </h3>
                <p className="text-xs sm:text-sm text-[#55463E] max-w-md mx-auto">
                  Thank you for reaching out. Our Vedic priest coordinator will contact you shortly with custom Muhurtham dates and arrangements.
                </p>
              </div>
            ) : (
              <div>
                <div className="text-center mb-6">
                  <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-[#B08A45]">
                    CORPORATE &amp; OFFICE POOJA
                  </span>
                  <h3 className="font-[family-name:var(--font-cormorant)] text-2xl sm:text-3xl font-bold text-[#42151B] mt-1">
                    Request a Customized Quote
                  </h3>
                  <p className="text-xs text-[#63534B] mt-1">
                    Fill in your office details and our Vedic coordinator will assist you with scheduling.
                  </p>
                </div>

                <form onSubmit={handleFormSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-[#42151B] mb-1">
                        Company / Office Name *
                      </label>
                      <div className="relative">
                        <Building2 size={15} className="absolute left-3 top-3 text-[#B08A45]" />
                        <input
                          type="text"
                          required
                          value={formData.companyName}
                          onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                          placeholder="e.g. Acme Technologies"
                          className="w-full rounded-lg border border-[#DFCBB0] bg-white pl-9 pr-3 py-2 text-xs text-[#29231F] focus:border-[#7D1E28] focus:outline-none"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-[#42151B] mb-1">
                        Contact Person Name *
                      </label>
                      <div className="relative">
                        <User size={15} className="absolute left-3 top-3 text-[#B08A45]" />
                        <input
                          type="text"
                          required
                          value={formData.contactPerson}
                          onChange={(e) => setFormData({ ...formData, contactPerson: e.target.value })}
                          placeholder="e.g. Rajesh Kumar"
                          className="w-full rounded-lg border border-[#DFCBB0] bg-white pl-9 pr-3 py-2 text-xs text-[#29231F] focus:border-[#7D1E28] focus:outline-none"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-[#42151B] mb-1">
                        Phone Number *
                      </label>
                      <div className="relative">
                        <Phone size={15} className="absolute left-3 top-3 text-[#B08A45]" />
                        <input
                          type="tel"
                          required
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          placeholder="+91 98765 43210"
                          className="w-full rounded-lg border border-[#DFCBB0] bg-white pl-9 pr-3 py-2 text-xs text-[#29231F] focus:border-[#7D1E28] focus:outline-none"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-[#42151B] mb-1">
                        Email Address
                      </label>
                      <div className="relative">
                        <Mail size={15} className="absolute left-3 top-3 text-[#B08A45]" />
                        <input
                          type="email"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="office@domain.com"
                          className="w-full rounded-lg border border-[#DFCBB0] bg-white pl-9 pr-3 py-2 text-xs text-[#29231F] focus:border-[#7D1E28] focus:outline-none"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-[#42151B] mb-1">
                        Ceremony Type
                      </label>
                      <select
                        value={formData.ceremony}
                        onChange={(e) => setFormData({ ...formData, ceremony: e.target.value })}
                        className="w-full rounded-lg border border-[#DFCBB0] bg-white px-3 py-2 text-xs text-[#29231F] focus:border-[#7D1E28] focus:outline-none"
                      >
                        {ceremonies.map((c) => (
                          <option key={c.id} value={c.name}>
                            {c.name}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-[#42151B] mb-1">
                        Preferred Date / Muhurtham
                      </label>
                      <div className="relative">
                        <Calendar size={15} className="absolute left-3 top-3 text-[#B08A45]" />
                        <input
                          type="date"
                          value={formData.preferredDate}
                          onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                          className="w-full rounded-lg border border-[#DFCBB0] bg-white pl-9 pr-3 py-2 text-xs text-[#29231F] focus:border-[#7D1E28] focus:outline-none"
                        />
                      </div>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#42151B] mb-1">
                      Office City / Location
                    </label>
                    <div className="relative">
                      <MapPin size={15} className="absolute left-3 top-3 text-[#B08A45]" />
                      <input
                        type="text"
                        value={formData.location}
                        onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                        placeholder="e.g. Chennai (OMR / Guindy)"
                        className="w-full rounded-lg border border-[#DFCBB0] bg-white pl-9 pr-3 py-2 text-xs text-[#29231F] focus:border-[#7D1E28] focus:outline-none"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#42151B] mb-1">
                      Additional Requirements / Notes
                    </label>
                    <textarea
                      rows={2}
                      value={formData.notes}
                      onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                      placeholder="e.g. Approximate employee count, specific timing requirements..."
                      className="w-full rounded-lg border border-[#DFCBB0] bg-white p-2.5 text-xs text-[#29231F] focus:border-[#7D1E28] focus:outline-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full rounded-xl bg-[#4A1015] py-3 text-xs sm:text-sm font-bold text-white tracking-wider hover:bg-[#63181E] transition-all shadow-md mt-2"
                  >
                    SUBMIT ENQUIRY
                  </button>
                </form>
              </div>
            )}
          </div>
        </div>
      )}
    </main>
  );
}