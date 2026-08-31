"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useRef, useEffect } from "react";
import {
  ChevronRight,
  ArrowRight,
  Package,
  Star,
  Info,
  CheckCircle2,
  Check,
  Sparkles,
  Phone,
  Calendar,
  User,
  Globe,
  Flame,
  Award,
  X,
  ShieldCheck,
  Camera,
  Truck,
  HeartHandshake,
  Gift,
  List,
} from "lucide-react";

// ==========================================
// DATA MODELS
// ==========================================

export type SamagriItem = {
  sno: number;
  english: string;
  tamil: string;
  quantity: string;
};

export type OverseasPoojaData = {
  id: string;
  name: string;
  iconType:
    | "ganesh"
    | "navagraha"
    | "vastu"
    | "ayush"
    | "kalyana"
    | "sudarshana"
    | "other";
  tagline: string;
  description: string;
  image: string;
  templeName: string;
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

// ==========================================
// OVERSEAS POOJA DATA
// ==========================================

const overseasPoojas: OverseasPoojaData[] = [
  // ========================================
  // 1. THIRUMANJAM
  // ========================================
  {
    id: "thirumanjam",
    name: "Thirumanjam",
    iconType: "other",
    tagline:
      "Sacred ritual bathing of the deity performed with devotion in holy temples on your behalf.",
    description:
      "Thirumanjam is the sacred ritual bathing (Abhishekam) of the temple deity using milk, honey, curd, panchamirtham, sandalwood, and holy teertham. Performed by our priests in India on your name and gotra, with photos, videos, and prasadam delivered to your doorstep.",
    image: "/images/temple_sanctum_altar.jpg",
    templeName: "Renowned Agamic Temples Across India",
    highlights: [
      "Performed by experienced Vedic priests",
      "In a sacred and powerful temple",
      "Photos & videos of the pooja",
      "Prasadam delivered worldwide",
    ],
    items: [
      {
        sno: 1,
        english: "Betel Leaves",
        tamil: "வெற்றிலை",
        quantity: "21 Pieces",
      },
      {
        sno: 2,
        english: "Areca Nuts",
        tamil: "பாக்கு",
        quantity: "21 Pieces",
      },
      {
        sno: 3,
        english: "Coconut",
        tamil: "தேங்காய்",
        quantity: "2 Pieces",
      },
      {
        sno: 4,
        english: "Turmeric",
        tamil: "மஞ்சள்",
        quantity: "1 Packet",
      },
      {
        sno: 5,
        english: "Kumkum",
        tamil: "குங்குமம்",
        quantity: "1 Packet",
      },
      {
        sno: 6,
        english: "Panchamirtham",
        tamil: "பஞ்சாமிர்தம்",
        quantity: "1 Bowl",
      },
      {
        sno: 7,
        english: "Ghee (Cow Ghee)",
        tamil: "நெய்",
        quantity: "1 Small Cup",
      },
      {
        sno: 8,
        english: "Sandalwood Paste",
        tamil: "சந்தனம்",
        quantity: "1 Cup",
      },
      {
        sno: 9,
        english: "Incense Sticks",
        tamil: "அகர்பத்தி",
        quantity: "1 Packet",
      },
      {
        sno: 10,
        english: "Camphor (Karpooram)",
        tamil: "கற்பூரம்",
        quantity: "1 Packet",
      },
    ],
    process: [
      {
        step: "01",
        title: "Individual Sankalpam by Name & Gotram",
        desc: "The head priest recites your Full Name, Nakshatra, Rasi, Gotram, and country of residence at the deity's sanctum.",
      },
      {
        step: "02",
        title: "Maha Abhishekam (Thirumanjam)",
        desc: "Sacred ritual bathing of the deity using pure cow milk, honey, curd, panchamirtham, sandalwood paste, and holy teertham.",
      },
      {
        step: "03",
        title: "Alankaram & Maha Deeparadhana",
        desc: "Adorning the deity with silk vastrams, garlands, and waving multi-tiered camphor lamps with Vedic chants.",
      },
      {
        step: "04",
        title: "Sanctification & International Dispatch",
        desc: "Energized Prasadham is carefully packed and couriered with tracking.",
      },
    ],
    benefits: [
      {
        title: "Spiritual Elevation & Peace",
        desc: "A devotional ritual intended to support spiritual peace and positive energy, no matter where you live.",
      },
      {
        title: "Family Harmony & Well-being",
        desc: "Performed with prayers for the well-being and harmony of your entire family abroad.",
      },
      {
        title: "Generational Blessings",
        desc: "A traditional devotional offering seeking divine grace and blessings for your family.",
      },
    ],
    notes: [
      "Prasadam is dispatched via international courier with tracking.",
      "High-resolution photos & video clips of your personalized Sankalpam can be shared via WhatsApp & Email.",
      "Custom timings can be discussed according to your overseas timezone.",
    ],
  },

  // ========================================
  // 2. VASTU SHANTI POOJA
  // ========================================
  {
    id: "vastu-shanti-pooja",
    name: "Vastu Shanti Pooja",
    iconType: "vastu",
    tagline:
      "Sanctify your overseas home, apartment, or business space with ancient Vedic traditions.",
    description:
      "Vastu Shanti Pooja conducted by Vedic priests in India is a traditional ritual performed with prayers for harmony, peace, and auspiciousness in your residence or office anywhere abroad.",
    image: "/images/kalash.jpg",
    templeName: "Sri Vastu Bhagavan Temple / Sacred Agamic Sthalam",
    highlights: [
      "Special Vastu Purusha Mandala invocation",
      "Consecrated Copper Vastu Yantra included in Prasadam",
      "Traditional prayers for spatial harmony",
      "Peace, harmony, and prosperity prayers for overseas homes",
    ],
    items: [
      {
        sno: 1,
        english: "Copper Vastu Purusha Yantra",
        tamil: "செம்பு வாஸ்து யந்திரம்",
        quantity: "1 No",
      },
      {
        sno: 2,
        english: "Navadhanyam & Gemstone Set",
        tamil: "நவதானியம் & நவரத்தினம்",
        quantity: "1 Set",
      },
      {
        sno: 3,
        english: "Pure Brass Kalash & Coconut",
        tamil: "கலசம் & தேங்காய்",
        quantity: "1 Set",
      },
      {
        sno: 4,
        english: "Turmeric, Kumkum & Akshatha",
        tamil: "மஞ்சள், குங்குமம், அட்சதை",
        quantity: "1 Set",
      },
      {
        sno: 5,
        english: "Homam Dravyas & Pure Ghee",
        tamil: "ஹோம பொருட்கள் & நெய்",
        quantity: "1 Set",
      },
      {
        sno: 6,
        english: "Pooja Flowers & Incense",
        tamil: "பூக்கள் & சாம்பிராணி",
        quantity: "1 Set",
      },
    ],
    process: [
      {
        step: "01",
        title: "Directional Cleansing & Sankalpam",
        desc: "Invoking the directional deities while mentioning your overseas property details.",
      },
      {
        step: "02",
        title: "Vastu Suktha Homam",
        desc: "Traditional offerings of sacred herbs and ghee into the consecrated fire.",
      },
      {
        step: "03",
        title: "Yantra Prana Prathishta",
        desc: "Consecrating the pure copper Vastu Yantra with traditional sacred mantras.",
      },
      {
        step: "04",
        title: "Courier Dispatch of Energized Yantra",
        desc: "Dispatching the Yantra with placement instructions for your overseas home.",
      },
    ],
    benefits: [
      {
        title: "Traditional Vastu Blessings",
        desc: "A traditional devotional ceremony seeking harmony and auspiciousness for the property.",
      },
      {
        title: "Domestic Peace & Family Harmony",
        desc: "Performed with prayers for peace, harmony, and well-being within the household.",
      },
    ],
    notes: [
      "Placement instructions with cardinal direction guidance will be included with the package.",
    ],
  },

  // ========================================
  // 3. AYUSH HOMAM
  // ========================================
  {
    id: "ayush-homam",
    name: "Ayush Homam",
    iconType: "ayush",
    tagline:
      "Invoke traditional prayers for longevity, well-being, and protection for children and elders.",
    description:
      "Ayushya Homam is a traditional Vedic ritual performed with prayers for long life and well-being. It may be arranged for birthdays, newborns, milestone occasions, or family members.",
    image: "/images/about/hero_kalash.jpg",
    templeName: "Thirukkadaiyur Amirthakadeswarar Abhirami Temple",
    highlights: [
      "Conducted at renowned longevity temples in India",
      "Traditional Ayushya Devata prayers",
      "Suitable for important birthday milestones",
      "Protective Raksha thread delivered to your overseas home",
    ],
    items: [
      {
        sno: 1,
        english: "Ayush Homam Sacred Herbs Set",
        tamil: "ஆயுஷ் மூலிகைகள்",
        quantity: "1 Set",
      },
      {
        sno: 2,
        english: "Charu (Sacred Boiled Rice Offering)",
        tamil: "ஹோம சாரு",
        quantity: "1 Pot",
      },
      {
        sno: 3,
        english: "Pure Cow Ghee & Samithu",
        tamil: "பசு நெய் & சமித்து",
        quantity: "1 Set",
      },
      {
        sno: 4,
        english: "Brass Kalash & Holy Water",
        tamil: "கலச தீர்த்தம்",
        quantity: "1 Set",
      },
      {
        sno: 5,
        english: "Turmeric, Kumkum & Vibhuti",
        tamil: "மஞ்சள், குங்குமம், திருநீறு",
        quantity: "1 Set",
      },
      {
        sno: 6,
        english: "Fresh Floral Garlands",
        tamil: "பூ மாலைகள்",
        quantity: "2 Nos",
      },
    ],
    process: [
      {
        step: "01",
        title: "Ayur Devata Sankalpam",
        desc: "Reciting the devotee's Janma Nakshatram and Gotram while offering prayers for longevity.",
      },
      {
        step: "02",
        title: "Ayushya Suktham & Moola Mantra Homam",
        desc: "Traditional chanting and sacred offerings into the consecrated fire.",
      },
      {
        step: "03",
        title: "Maha Abhishekam & Arathi",
        desc: "Offering sanctified holy water and deepams to the deity with priest blessings.",
      },
      {
        step: "04",
        title: "Worldwide Delivery of Prasadam",
        desc: "Raksha thread, holy ash, and prasadam dispatched via international courier.",
      },
    ],
    benefits: [
      {
        title: "Prayers for Long Life & Well-being",
        desc: "A traditional homam performed with prayers for longevity, vitality, and family well-being.",
      },
      {
        title: "Blessings for Children",
        desc: "Can be arranged for children and babies as part of traditional birthday and family rituals.",
      },
    ],
    notes: [
      "Can be conducted on your Janma Nakshatra day according to the Hindu Panchangam.",
    ],
  },

  // ========================================
  // 4. KALYANA POOJA
  // ========================================
  {
    id: "kalyana-pooja",
    name: "Kalyana Pooja",
    iconType: "kalyana",
    tagline:
      "Traditional prayers seeking divine blessings for marriage and harmonious family life.",
    description:
      "Kalyana Utsavam and Swayamvara Parvathi Pooja can be performed on your behalf in famous marriage blessing temples such as Thirumanancheri, Srivilliputhur, or Madurai Meenakshi.",
    image: "/images/navratri.jpg",
    templeName: "Thirumanancheri Kalyanasundareswarar Temple",
    highlights: [
      "Performed at sacred marriage temples in India",
      "Swayamvara Parvathi Japa & Mangala Archana",
      "Traditional prayers for matrimonial blessings",
      "Blessed marriage garland prasadam sent overseas",
    ],
    items: [
      {
        sno: 1,
        english: "Marriage Flower Garland (Varmala)",
        tamil: "திருமண மாலை",
        quantity: "1 Set",
      },
      {
        sno: 2,
        english: "Sacred Turmeric Root & Mangalya Thread",
        tamil: "மஞ்சள் கிழங்கு & கயிறு",
        quantity: "1 Set",
      },
      {
        sno: 3,
        english: "Pure Thazhampoo Kumkum",
        tamil: "தாழம்பூ குங்குமம்",
        quantity: "1 Box",
      },
      {
        sno: 4,
        english: "Sandalwood Paste & Akshatha",
        tamil: "சந்தனம் & அட்சதை",
        quantity: "1 Box",
      },
      {
        sno: 5,
        english: "Betel Leaves, Nuts & Coconut",
        tamil: "வெற்றிலை பாக்கு & தேங்காய்",
        quantity: "1 Set",
      },
      {
        sno: 6,
        english: "Sweet Naivedyam & Prasadam",
        tamil: "நைவேத்தியம் & பிரசாதம்",
        quantity: "1 Set",
      },
    ],
    process: [
      {
        step: "01",
        title: "Swayamvara Parvathi Sankalpam",
        desc: "Announcing the devotee's name, Nakshatram, and Gotram while offering traditional prayers.",
      },
      {
        step: "02",
        title: "Kalyana Utsavam Archana",
        desc: "Chanting traditional divine names and offering fragrant blossoms at the deity's feet.",
      },
      {
        step: "03",
        title: "Garland Sanctification & Mangala Arathi",
        desc: "Sanctifying the sacred garland and turmeric thread on the deity's altar.",
      },
      {
        step: "04",
        title: "International Courier Dispatch",
        desc: "Carefully packing the sanctified garland, kumkum, and turmeric for international transit.",
      },
    ],
    benefits: [
      {
        title: "Marriage Blessings",
        desc: "Traditional prayers seeking auspicious matrimonial opportunities and blessings.",
      },
      {
        title: "Harmonious Family Life",
        desc: "Devotional prayers seeking mutual understanding, peace, and harmony.",
      },
    ],
    notes: [
      "Sanctified turmeric and kumkum can be preserved and used by the devotee.",
    ],
  },

  // ========================================
  // 5. SUDARSHANA HOMAM
  // ========================================
  {
    id: "sudarshana-homam",
    name: "Sudarshana Homam",
    iconType: "sudarshana",
    tagline:
      "Traditional prayers for protection, courage, peace, and removal of obstacles.",
    description:
      "Sudarshana Homam invokes Lord Sudarshana and Lord Narasimha through traditional prayers and homam rituals. It may be arranged for devotees seeking spiritual protection and strength during difficult circumstances.",
    image: "/images/temple_hero_gopuram.jpg",
    templeName: "Kanchipuram Sri Varadaraja Perumal Temple / Srirangam",
    highlights: [
      "Performed by experienced Vaishnavite priests",
      "Sudarshana Mantra & Narasimha prayers",
      "Traditional prayers for protection and peace",
      "Consecrated Sudarshana Yantra dispatched",
    ],
    items: [
      {
        sno: 1,
        english: "Sudarshana Yantra (Copper/Silver)",
        tamil: "சுதர்சன யந்திரம்",
        quantity: "1 No",
      },
      {
        sno: 2,
        english: "Tulsi Leaves (Thiruthuzhai)",
        tamil: "துளசி தளம்",
        quantity: "1 Bunch",
      },
      {
        sno: 3,
        english: "Pure Cow Ghee & White Mustard Seeds",
        tamil: "பசு நெய் & வெண்கடுகு",
        quantity: "1 Set",
      },
      {
        sno: 4,
        english: "Homam Samithu & Sacred Herbs",
        tamil: "ஹோம சமித்து & மூலிகைகள்",
        quantity: "1 Set",
      },
      {
        sno: 5,
        english: "Fragrant Sandalwood & Kumkum",
        tamil: "சந்தனம் & குங்குமம்",
        quantity: "1 Set",
      },
      {
        sno: 6,
        english: "Coconuts, Dry Fruits & Naivedyam",
        tamil: "தேங்காய் & நைவேத்தியம்",
        quantity: "1 Set",
      },
    ],
    process: [
      {
        step: "01",
        title: "Sudarshana Yantra Prathishta & Sankalpam",
        desc: "Invoking Lord Sudarshana while mentioning the devotee's Gotram, Nakshatram, and family names.",
      },
      {
        step: "02",
        title: "Sudarshana & Narasimha Moola Mantra Havan",
        desc: "Chanting traditional stotras and offering sacred oblations into the consecrated fire altar.",
      },
      {
        step: "03",
        title: "Maha Poornahuthi & Raksha Bandhan",
        desc: "Completing the homam and blessing sacred Raksha threads through traditional rituals.",
      },
      {
        step: "04",
        title: "International Courier Delivery",
        desc: "Dispatching the energized Sudarshana Yantra and Raksha threads via tracked international express.",
      },
    ],
    benefits: [
      {
        title: "Traditional Spiritual Protection",
        desc: "A devotional ritual seeking courage, peace, and protection from negative influences.",
      },
      {
        title: "Strength During Difficult Times",
        desc: "Traditional prayers seeking confidence and divine support while facing obstacles.",
      },
    ],
    notes: [
      "Prasadam may include an energized Sudarshana coin or pocket yantra.",
    ],
  },

  // ========================================
  // 6. OTHER POOJAS
  // ========================================
  {
    id: "other-poojas",
    name: "Other Poojas",
    iconType: "other",
    tagline:
      "Custom Vedic rituals in sacred temples across India on your behalf.",
    description:
      "Request any specific temple pooja, abhishekam, archana, or homam across Tamil Nadu, Kerala, Andhra, or Karnataka. Our Vedic network can arrange personalized rituals with photo/video updates and worldwide prasadam delivery.",
    image: "/images/about/story_thali.jpg",
    templeName: "Any Ancient Temple across India",
    highlights: [
      "Custom temple selection based on your family deity",
      "Special Abhishekam, Sahasranamam, or homam arrangements",
      "Direct coordinator support via WhatsApp",
      "Worldwide doorstep delivery of Prasadam",
    ],
    items: [
      {
        sno: 1,
        english: "Personalized Pooja Dravyas Set",
        tamil: "பூஜை பொருட்கள் தொகுப்பு",
        quantity: "1 Set",
      },
      {
        sno: 2,
        english: "Sacred Temple Prasadham Box",
        tamil: "கோவில் பிரசாத பெட்டி",
        quantity: "1 Box",
      },
      {
        sno: 3,
        english: "Vibhuti, Kumkum & Chandanam",
        tamil: "திருநீறு, குங்குமம், சந்தனம்",
        quantity: "1 Set",
      },
      {
        sno: 4,
        english: "Energized Deity Photo & Raksha",
        tamil: "சாமி படம் & காப்பு கயிறு",
        quantity: "1 Set",
      },
    ],
    process: [
      {
        step: "01",
        title: "Temple & Ritual Consultation",
        desc: "Our Vedic coordinator contacts you to confirm your desired temple, deity, Gotram, and prayer date.",
      },
      {
        step: "02",
        title: "Temple Priests Coordination",
        desc: "Engaging the temple priests for your customized ritual and archana.",
      },
      {
        step: "03",
        title: "Video / Photo Capture",
        desc: "Recording the sacred Sankalpam and archana rituals for your reference.",
      },
      {
        step: "04",
        title: "Secure Worldwide Dispatch",
        desc: "Shipping sanctified Prasadam to your international address with tracking.",
      },
    ],
    benefits: [
      {
        title: "Connection to Ancestral Temples",
        desc: "Stay connected to your Kuladeivam and ancestral temples regardless of distance.",
      },
      {
        title: "Complete Flexibility",
        desc: "Choose a specific temple or ritual according to your family's devotional requirements.",
      },
    ],
    notes: [
      "Custom quotes and dates are provided based on the selected temple and ritual complexity.",
    ],
  },

  // ========================================
  // 7. GANAPATHI / NAVAGRAHA EXAMPLE
  // ========================================
  {
    id: "ganapathy-pooja",
    name: "Ganapathy Pooja",
    iconType: "ganesh",
    tagline:
      "Begin auspicious occasions with traditional prayers to Lord Ganesha.",
    description:
      "Ganapathy Pooja is performed by experienced priests in India with traditional offerings and prayers seeking auspicious beginnings, peace, and the removal of obstacles.",
    image: "/images/temple_sanctum_altar.jpg",
    templeName: "Renowned Ganapathy Temples Across India",
    highlights: [
      "Traditional Ganapathy Archana",
      "Performed by experienced Vedic priests",
      "Personalized Sankalpam using devotee details",
      "Prasadam delivered worldwide",
    ],
    items: [
      {
        sno: 1,
        english: "Coconut",
        tamil: "தேங்காய்",
        quantity: "5 Pieces",
      },
      {
        sno: 2,
        english: "Betel Leaves",
        tamil: "வெற்றிலை",
        quantity: "21 Pieces",
      },
      {
        sno: 3,
        english: "Areca Nuts",
        tamil: "பாக்கு",
        quantity: "21 Pieces",
      },
      {
        sno: 4,
        english: "Turmeric",
        tamil: "மஞ்சள்",
        quantity: "1 Packet",
      },
      {
        sno: 5,
        english: "Kumkum",
        tamil: "குங்குமம்",
        quantity: "1 Packet",
      },
      {
        sno: 6,
        english: "Flowers & Garland",
        tamil: "பூக்கள் & மாலை",
        quantity: "1 Set",
      },
    ],
    process: [
      {
        step: "01",
        title: "Devotee Sankalpam",
        desc: "Your name, Gotram, Nakshatram, and prayer intention are included in the Sankalpam.",
      },
      {
        step: "02",
        title: "Ganapathy Archana",
        desc: "Traditional Ganapathy prayers and offerings are performed by the temple priest.",
      },
      {
        step: "03",
        title: "Maha Arathi",
        desc: "The ritual concludes with traditional arathi and devotional offerings.",
      },
      {
        step: "04",
        title: "Prasadam Dispatch",
        desc: "Prasadam is carefully packed and sent to your overseas address.",
      },
    ],
    benefits: [
      {
        title: "Auspicious Beginnings",
        desc: "Traditional prayers seeking auspiciousness and divine blessings before important occasions.",
      },
      {
        title: "Obstacle-Removal Prayers",
        desc: "Devotees may request traditional prayers seeking clarity, confidence, and removal of obstacles.",
      },
    ],
    notes: [
      "The exact pooja procedure and samagri may vary depending on the selected temple.",
    ],
  },
];

// ==========================================
// 4 OVERSEAS FEATURE CARDS
// ==========================================

const overseasFeatures = [
  {
    icon: Flame,
    title: "How It Works",
    description:
      "You choose the pooja, we perform it in the temple and share blessings with you.",
  },
  {
    icon: ShieldCheck,
    title: "Why Choose Us",
    description:
      "Authentic rituals, transparent process and trusted support for devotees worldwide.",
  },
  {
    icon: HeartHandshake,
    title: "Our Promise",
    description:
      "Your devotion, our responsibility. We ensure every pooja is performed with sincerity.",
  },
  {
    icon: Globe,
    title: "Delivery Worldwide",
    description:
      "Prasadam delivered to USA, UK, Canada, Australia and many more countries.",
  },
];

// ==========================================
// MAIN COMPONENT
// ==========================================

export default function OverseasPackagePage() {
  const API_BASE = "http://localhost:3001";

  const [selectedPooja, setSelectedPooja] =
    useState<OverseasPoojaData>(overseasPoojas[0]);

  const [liveItems, setLiveItems] = useState<SamagriItem[]>(
    overseasPoojas[0].items
  );
  const [itemsLoading, setItemsLoading] = useState(false);

  const [activeTab, setActiveTab] = useState<
    "details" | "process" | "benefits" | "notes"
  >("details");

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalSuccess, setModalSuccess] = useState(false);

  const [formData, setFormData] = useState({
    devoteeName: "",
    gotram: "",
    nakshatram: "",
    rasi: "",
    country: "",
    city: "",
    whatsapp: "",
    email: "",
    pooja: overseasPoojas[0].name,
    preferredDate: "",
    shippingAddress: "",
    specialPrayers: "",
  });

  const poojaSectionRef = useRef<HTMLElement>(null);
  const packageDetailsRef = useRef<HTMLElement>(null);

  // ==========================================
  // LOAD LIVE ITEMS FOR THIRUMANJAM
  // ==========================================

  useEffect(() => {
    if (selectedPooja.id !== "thirumanjam") {
      setLiveItems(selectedPooja.items);
      setItemsLoading(false);
      return;
    }

    let cancelled = false;

    async function loadItems() {
      setItemsLoading(true);

      try {
        const res = await fetch(`${API_BASE}/overseas-temple-package`);

        if (!res.ok) {
          throw new Error("Failed to load");
        }

        const data = await res.json();

        if (!cancelled) {
          const mapped: SamagriItem[] = data.map((row: any) => ({
            sno: row.sno,
            english: row.english,
            tamil: row.tamil ?? "",
            quantity: row.quantity ?? "",
          }));

          setLiveItems(
            mapped.length > 0 ? mapped : selectedPooja.items
          );
        }
      } catch {
        if (!cancelled) {
          setLiveItems(selectedPooja.items);
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
  }, [selectedPooja.id]);

  // ==========================================
  // HASH NAVIGATION
  // ==========================================

  useEffect(() => {
    const handleHash = () => {
      if (typeof window === "undefined") return;

      const rawHash = window.location.hash
        .replace("#", "")
        .toLowerCase()
        .trim();

      if (!rawHash) return;

      const normalizedHash = rawHash.replace(/-/g, "");

      const match = overseasPoojas.find((p) => {
        const normalizedId = p.id.toLowerCase().replace(/-/g, "");
        const normalizedName = p.name
          .toLowerCase()
          .replace(/[^a-z0-9]/g, "");

        return (
          p.id.toLowerCase() === rawHash ||
          rawHash.includes(p.id.toLowerCase()) ||
          normalizedId.includes(normalizedHash) ||
          normalizedName.includes(normalizedHash)
        );
      });

      if (match) {
        setSelectedPooja(match);
        setFormData((prev) => ({
          ...prev,
          pooja: match.name,
        }));
        setActiveTab("details");

        setTimeout(() => {
          const el =
            document.getElementById("overseas-details-section") ||
            packageDetailsRef.current;

          if (el) {
            el.scrollIntoView({
              behavior: "smooth",
              block: "start",
            });
          }
        }, 120);
      }
    };

    handleHash();

    window.addEventListener("hashchange", handleHash);

    return () => {
      window.removeEventListener("hashchange", handleHash);
    };
  }, []);

  // ==========================================
  // SELECT POOJA
  // ==========================================

  const handleSelectPooja = (pooja: OverseasPoojaData) => {
    setSelectedPooja(pooja);

    setFormData((prev) => ({
      ...prev,
      pooja: pooja.name,
    }));
  };

  // ==========================================
  // FORM SUBMIT
  // ==========================================

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setModalSuccess(true);

    setTimeout(() => {
      setModalSuccess(false);
      setIsModalOpen(false);

      setFormData({
        devoteeName: "",
        gotram: "",
        nakshatram: "",
        rasi: "",
        country: "",
        city: "",
        whatsapp: "",
        email: "",
        pooja: selectedPooja.name,
        preferredDate: "",
        shippingAddress: "",
        specialPrayers: "",
      });
    }, 2500);
  };

  // ==========================================
  // POOJA ICON
  // ==========================================

  const renderPoojaIcon = (
    type: OverseasPoojaData["iconType"],
    isActive: boolean
  ) => {
    const strokeColor = isActive ? "#FFFFFF" : "#B08A45";

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
            <circle cx="12" cy="7" r="3.5" />
            <path d="M7 11c0 5 2 9 5 9s5-4 5-9" />
            <path d="M12 10.5v3.5a1.5 1.5 0 0 0 3 0" />
            <path d="M6 8.5C4 9 3 11 3 13" />
            <path d="M18 8.5C20 9 21 11 21 13" />
          </svg>
        );

      case "navagraha":
        return (
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke={strokeColor}
            strokeWidth="1.6"
            className="w-8 h-8"
          >
            <rect x="3" y="3" width="18" height="18" rx="2" />
            <circle cx="12" cy="12" r="2" />
            <circle cx="7" cy="7" r="1.5" />
            <circle cx="12" cy="7" r="1.5" />
            <circle cx="17" cy="7" r="1.5" />
            <circle cx="7" cy="12" r="1.5" />
            <circle cx="17" cy="12" r="1.5" />
            <circle cx="7" cy="17" r="1.5" />
            <circle cx="12" cy="17" r="1.5" />
            <circle cx="17" cy="17" r="1.5" />
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
            <path d="M12 2L2 7l10 5 10-5-10-5z" />
            <path d="M2 17l10 5 10-5" />
            <path d="M2 12l10 5 10-5" />
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
            <circle cx="12" cy="18" r="3" />
            <path d="M5 21c1.5-2 4-3 7-3s5.5 1 7 3" />
          </svg>
        );

      case "kalyana":
        return (
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke={strokeColor}
            strokeWidth="1.6"
            className="w-8 h-8"
          >
            <circle cx="9" cy="8" r="3" />
            <circle cx="15" cy="8" r="3" />
            <path d="M4 20v-2a4 4 0 0 1 4-4h2" />
            <path d="M20 20v-2a4 4 0 0 0-4-4h-2" />
            <path d="M12 13v4" />
            <path d="M10 15h4" />
          </svg>
        );

      case "sudarshana":
        return (
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke={strokeColor}
            strokeWidth="1.6"
            className="w-8 h-8"
          >
            <circle cx="12" cy="12" r="9" />
            <circle cx="12" cy="12" r="3" />
            <path d="M12 3v6" />
            <path d="M12 15v6" />
            <path d="M3 12h6" />
            <path d="M15 12h6" />
            <path d="M5.6 5.6l4.2 4.2" />
            <path d="M14.2 14.2l4.2 4.2" />
            <path d="M18.4 5.6l-4.2 4.2" />
            <path d="M9.8 14.2l-4.2 4.2" />
          </svg>
        );

      case "other":
        return (
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke={strokeColor}
            strokeWidth="1.6"
            className="w-8 h-8"
          >
            <circle cx="12" cy="12" r="9" />
            <circle cx="8" cy="12" r="1" fill={strokeColor} />
            <circle cx="12" cy="12" r="1" fill={strokeColor} />
            <circle cx="16" cy="12" r="1" fill={strokeColor} />
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

  // ==========================================
  // JSX
  // ==========================================

  return (
    <main className="min-h-screen bg-[#FAF6EE] text-[#29231F] font-sans antialiased selection:bg-[#B08A45]/30">
      {/* ==========================================
          1. HERO SECTION
      ========================================== */}

      <section className="relative pt-[90px] overflow-hidden bg-[#FAF6EE] border-b border-[#E8DDC8]">
        <div className="pointer-events-none absolute -left-24 -top-24 h-96 w-96 rounded-full bg-[#B08A45]/5 blur-3xl" />

        <div className="mx-auto max-w-[1600px] grid grid-cols-1 lg:grid-cols-12 items-stretch min-h-[560px] lg:min-h-[620px]">
          {/* LEFT */}
          <div className="lg:col-span-6 flex flex-col justify-between pt-8 sm:pt-12 lg:pt-14 pb-8 px-6 sm:px-10 lg:pl-16 lg:pr-8 z-10">
            <div>
              <h1 className="font-[family-name:var(--font-cormorant)] text-4xl sm:text-5xl lg:text-6xl xl:text-[64px] font-bold tracking-tight text-[#42151B] leading-[1.12]">
                Overseas
                <br />
                Temple Package
              </h1>

              <div className="mt-4">
                <p className="font-[family-name:var(--font-cormorant)] text-xl sm:text-2xl font-semibold text-[#B37D2A] leading-snug">
                  Divine Blessings,
                  <br />
                  No Matter Where You Are
                </p>
              </div>

              <p className="mt-3 text-sm sm:text-[15px] text-[#55463E] leading-relaxed max-w-xl">
                We perform authentic temple rituals and poojas in sacred
                temples on your behalf in India and deliver prasadam to your
                doorstep anywhere in the world.
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 mt-8 max-w-xl">
                {/* Feature 1 */}
                <div className="flex flex-col items-center text-center p-3 rounded-xl bg-[#F5EDE0]/70 border border-[#E5D7C0] transition-transform hover:-translate-y-0.5">
                  <div className="w-10 h-10 rounded-full flex items-center justify-center text-[#7D1E28] mb-1.5 bg-[#FFFDF9] border border-[#DFCBB0]">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.6"
                      className="w-5 h-5"
                    >
                      <path d="M12 2v2m-3 3h6l-3-3z" />
                      <path d="M7 7h10l-1 4H8L7 7z" />
                      <path d="M5 11h14l-1 5H6l-1-5z" />
                      <path d="M3 16h18v6H3z" />
                    </svg>
                  </div>

                  <span className="text-[11px] sm:text-xs font-semibold text-[#42151B] leading-tight">
                    Sacred Temples in India
                  </span>
                </div>

                {/* Feature 2 */}
                <div className="flex flex-col items-center text-center p-3 rounded-xl bg-[#F5EDE0]/70 border border-[#E5D7C0] transition-transform hover:-translate-y-0.5">
                  <div className="w-10 h-10 rounded-full flex items-center justify-center text-[#7D1E28] mb-1.5 bg-[#FFFDF9] border border-[#DFCBB0]">
                    <Award size={20} strokeWidth={1.8} />
                  </div>

                  <span className="text-[11px] sm:text-xs font-semibold text-[#42151B] leading-tight">
                    Experienced Vedic Priests
                  </span>
                </div>

                {/* Feature 3 */}
                <div className="flex flex-col items-center text-center p-3 rounded-xl bg-[#F5EDE0]/70 border border-[#E5D7C0] transition-transform hover:-translate-y-0.5">
                  <div className="w-10 h-10 rounded-full flex items-center justify-center text-[#7D1E28] mb-1.5 bg-[#FFFDF9] border border-[#DFCBB0]">
                    <Truck size={20} strokeWidth={1.8} />
                  </div>

                  <span className="text-[11px] sm:text-xs font-semibold text-[#42151B] leading-tight">
                    Prasadam Delivery Worldwide
                  </span>
                </div>

                {/* Feature 4 */}
                <div className="flex flex-col items-center text-center p-3 rounded-xl bg-[#F5EDE0]/70 border border-[#E5D7C0] transition-transform hover:-translate-y-0.5">
                  <div className="w-10 h-10 rounded-full flex items-center justify-center text-[#7D1E28] mb-1.5 bg-[#FFFDF9] border border-[#DFCBB0]">
                    <ShieldCheck size={20} strokeWidth={1.8} />
                  </div>

                  <span className="text-[11px] sm:text-xs font-semibold text-[#42151B] leading-tight">
                    100% Authentic &amp; Transparent
                  </span>
                </div>
              </div>
            </div>

            {/* Breadcrumb */}
            <div className="mt-8 sm:mt-10 -ml-6 sm:-ml-10 lg:-ml-16 self-start">
              <div className="inline-flex items-center gap-2 bg-[#4A1015] text-[#F3EAD8] text-xs sm:text-sm font-medium py-2.5 pl-6 sm:pl-10 pr-8 rounded-r-3xl shadow-md border-y border-r border-[#6B1E26]">
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
                  Overseas Temple Package
                </span>
              </div>
            </div>
          </div>

          {/* RIGHT */}
          <div className="lg:col-span-6 relative min-h-[380px] lg:min-h-full overflow-hidden">
            <div className="absolute inset-0 w-full h-full">
              <Image
                src="/images/temple_hero_gopuram.jpg"
                alt="Ancient Indian temple gopuram"
                fill
                priority
                className="object-cover object-center scale-105"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />

              <div className="absolute inset-y-0 left-0 w-20 sm:w-28 lg:w-40 bg-gradient-to-r from-[#FAF6EE] via-[#FAF6EE]/80 to-transparent pointer-events-none hidden lg:block" />

              <div className="absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-[#FAF6EE] to-transparent pointer-events-none lg:hidden" />

              <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent pointer-events-none" />

              <div className="absolute bottom-5 right-5 hidden sm:flex items-center gap-2.5 rounded-xl bg-[#2A0E13]/85 px-4 py-2.5 text-white shadow-xl backdrop-blur-md border border-[#E7BE6B]/30">
                <Globe size={18} className="text-[#E7BE6B]" />

                <div>
                  <div className="text-[11px] font-bold tracking-wider uppercase text-[#E7BE6B]">
                    IYYARS POOJA LIST
                  </div>

                  <div className="text-[10px] text-white/80">
                    Worldwide Express Dispatch
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==========================================
          2. HIGHLIGHT STRIP
      ========================================== */}

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
                Sacred Rituals. Global Devotion.
              </h2>

              <div className="flex items-center justify-center gap-2 my-2.5">
                <span className="h-px w-10 bg-gradient-to-r from-transparent to-[#B08A45]" />
                <span className="w-1.5 h-1.5 rotate-45 bg-[#B08A45]" />
                <span className="h-px w-10 bg-gradient-to-l from-transparent to-[#B08A45]" />
              </div>

              <p className="text-xs sm:text-sm font-medium text-[#7D5F42] tracking-wide">
                We perform poojas and homams in holy temples and send back
                blessings to you.
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

      {/* ==========================================
          3. CHOOSE YOUR POOJA
      ========================================== */}

      <section
        ref={poojaSectionRef}
        className="py-8 sm:py-14 px-4 sm:px-8 max-w-[1400px] mx-auto"
      >
        <div className="text-center mb-10 sm:mb-12">
          <h2 className="font-[family-name:var(--font-cormorant)] text-3xl sm:text-4xl lg:text-[44px] font-bold text-[#42151B]">
            Choose Your Pooja
          </h2>

          <div className="flex items-center justify-center gap-2 mt-3">
            <span className="h-px w-12 bg-gradient-to-r from-transparent to-[#B08A45]" />
            <span className="w-1.5 h-1.5 rotate-45 border border-[#B08A45]" />
            <span className="w-2.5 h-2.5 rotate-45 bg-[#B08A45]" />
            <span className="w-1.5 h-1.5 rotate-45 border border-[#B08A45]" />
            <span className="h-px w-12 bg-gradient-to-l from-transparent to-[#B08A45]" />
          </div>
        </div>

        {/* POOJA BUTTONS */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-7 gap-3 sm:gap-3.5">
          {overseasPoojas.map((pooja) => {
            const isActive = selectedPooja.id === pooja.id;

            return (
              <button
                key={pooja.id}
                type="button"
                onClick={() => handleSelectPooja(pooja)}
                className={`group flex flex-col items-center justify-center p-3.5 sm:p-4 rounded-2xl border transition-all duration-300 text-center ${
                  isActive
                    ? "bg-[#4A1015] border-[#4A1015] text-white shadow-[0_8px_25px_rgba(74,16,21,0.28)] scale-[1.03]"
                    : "bg-[#FAF7F0] border-[#E8DEC8] text-[#42151B] hover:bg-[#F3EDE0] hover:border-[#D4B978] hover:shadow-md"
                }`}
              >
                <div
                  className={`w-11 h-11 rounded-xl flex items-center justify-center mb-2.5 transition-colors ${
                    isActive
                      ? "bg-white/10 text-white"
                      : "bg-white text-[#B08A45] border border-[#E9DDC9]"
                  }`}
                >
                  {renderPoojaIcon(pooja.iconType, isActive)}
                </div>

                <span
                  className={`font-[family-name:var(--font-cormorant)] text-sm sm:text-base font-bold leading-tight ${
                    isActive ? "text-white" : "text-[#42151B]"
                  }`}
                >
                  {pooja.name}
                </span>
              </button>
            );
          })}
        </div>

        {/* SELECTED POOJA OVERVIEW */}
        <div className="mt-8 rounded-2xl bg-white border border-[#DFCBB0] p-5 sm:p-8 shadow-[0_10px_35px_rgba(80,20,30,0.06)] overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-center">
            <div className="lg:col-span-5 relative aspect-[16/10] sm:aspect-[4/3] w-full rounded-xl overflow-hidden shadow-md border border-[#E9DDC9]">
              <Image
                src={selectedPooja.image}
                alt={selectedPooja.name}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 40vw"
              />

              <div className="absolute bottom-3 left-3 rounded-lg bg-[#4A1015]/90 px-3 py-1.5 text-xs font-semibold text-white shadow-md backdrop-blur-sm">
                Temple: {selectedPooja.templeName}
              </div>
            </div>

            <div className="lg:col-span-7 flex flex-col justify-center">
              <h3 className="font-[family-name:var(--font-cormorant)] text-2xl sm:text-3xl lg:text-4xl font-bold text-[#42151B]">
                {selectedPooja.name}
              </h3>

              <p className="mt-1 text-xs sm:text-sm font-semibold text-[#B37D2A]">
                {selectedPooja.tagline}
              </p>

              <p className="mt-3 text-xs sm:text-sm leading-relaxed text-[#55463E]">
                {selectedPooja.description}
              </p>

              <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                {selectedPooja.highlights.map((highlight, idx) => (
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

      {/* ==========================================
          4. PACKAGE DETAILS
      ========================================== */}

      <section
        ref={packageDetailsRef}
        id="overseas-details-section"
        className="scroll-mt-28 py-8 sm:py-14 px-4 sm:px-8 max-w-[1400px] mx-auto"
      >
        <div className="text-center mb-8 sm:mb-10">
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
            {/* SIDEBAR */}
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
                <Gift
                  size={18}
                  className={
                    activeTab === "details"
                      ? "text-[#E7BE6B]"
                      : "text-[#B8860B]"
                  }
                />

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
                <List
                  size={18}
                  className={
                    activeTab === "process"
                      ? "text-[#E7BE6B]"
                      : "text-[#B8860B]"
                  }
                />

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
                <Star
                  size={18}
                  className={
                    activeTab === "benefits"
                      ? "text-[#E7BE6B]"
                      : "text-[#B8860B]"
                  }
                />

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
                <Info
                  size={18}
                  className={
                    activeTab === "notes"
                      ? "text-[#E7BE6B]"
                      : "text-[#B8860B]"
                  }
                />

                <span>Important Notes</span>
              </button>

              <div className="pt-4 border-t border-white/10 hidden sm:block">
                <span className="text-[10px] uppercase tracking-wider text-[#D4B978]">
                  Selected Pooja
                </span>

                <div className="font-[family-name:var(--font-cormorant)] text-xl font-bold text-[#F3D78A]">
                  {selectedPooja.name}
                </div>

                <div className="text-xs text-white/80 mt-0.5">
                  International Sankalpam
                </div>

                <button
                  type="button"
                  onClick={() => setIsModalOpen(true)}
                  className="mt-3 w-full rounded-lg bg-[#E5C77A] py-2 text-center text-xs font-bold text-[#3D1418] transition hover:bg-[#F3D78A]"
                >
                  Book Sankalpam
                </button>
              </div>
            </div>

            {/* CONTENT */}
            <div className="lg:col-span-9 relative">
              {/* DETAILS TAB */}
              {activeTab === "details" && (
                <div className="space-y-4">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                    <h3 className="font-[family-name:var(--font-cormorant)] text-xl sm:text-2xl text-[#42151B] font-bold">
                      Pooja Samagri / Items List
                    </h3>

                    <span className="text-xs text-[#7D1E28] font-semibold">
                      {selectedPooja.name} ({liveItems.length} Items)
                    </span>
                  </div>

                  <div className="grid grid-cols-1 xl:grid-cols-[1fr_240px] gap-5 items-start">
                    {/* TABLE */}
                    <div>
                      <div className="overflow-x-auto rounded-lg border border-[#DFCBB0] shadow-sm bg-white">
                        <table className="w-full text-left text-xs sm:text-sm border-collapse">
                          <thead>
                            <tr className="bg-[#5A1015] text-white text-[11px] sm:text-xs font-semibold tracking-wider">
                              <th className="py-2.5 px-3 w-12 text-center">
                                S.No
                              </th>

                              <th className="py-2.5 px-3 sm:px-4">
                                Item (English)
                              </th>

                              <th className="py-2.5 px-3 sm:px-4">
                                Item (Tamil)
                              </th>

                              <th className="py-2.5 px-3 sm:px-4 text-right sm:text-left">
                                Quantity
                              </th>
                            </tr>
                          </thead>

                          <tbody className="divide-y divide-[#EFE3CF]">
                            {itemsLoading ? (
                              <tr>
                                <td
                                  colSpan={4}
                                  className="py-8 px-4 text-center text-[#7D1E28] font-medium"
                                >
                                  Loading package items...
                                </td>
                              </tr>
                            ) : liveItems.length > 0 ? (
                              liveItems.map((item, index) => (
                                <tr
                                  key={`${selectedPooja.id}-${item.sno}`}
                                  className={`transition-colors hover:bg-[#F5EDE0] ${
                                    index % 2 === 0
                                      ? "bg-[#FAF7F0]"
                                      : "bg-white"
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
                            ) : (
                              <tr>
                                <td
                                  colSpan={4}
                                  className="py-8 px-4 text-center text-[#7A6458]"
                                >
                                  No items available.
                                </td>
                              </tr>
                            )}
                          </tbody>
                        </table>
                      </div>

                      <p className="mt-3 text-xs text-[#7A6458] italic bg-[#FAF2E6] p-2.5 rounded-lg border border-[#E9DDC9]">
                        <strong>Note:</strong> The items &amp; quantities may
                        vary slightly based on the temple and priest&apos;s
                        guidance.
                      </p>
                    </div>

                    {/* BADGES */}
                    <div className="flex flex-col gap-3">
                      <div className="flex items-center gap-3 p-3 rounded-xl bg-white border border-[#DFCBB0] shadow-sm">
                        <div className="w-10 h-10 rounded-full bg-[#FAF3E5] border border-[#D4B978] flex items-center justify-center text-[#7D1E28] shrink-0">
                          <svg
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="1.6"
                            className="w-5 h-5"
                          >
                            <path d="M12 2v2m-3 3h6l-3-3z" />
                            <path d="M7 7h10l-1 4H8L7 7z" />
                            <path d="M5 11h14l-1 5H6l-1-5z" />
                            <path d="M3 16h18v6H3z" />
                          </svg>
                        </div>

                        <span className="text-xs font-semibold text-[#42151B] leading-tight">
                          Pooja in sacred temples across India
                        </span>
                      </div>

                      <div className="flex items-center gap-3 p-3 rounded-xl bg-white border border-[#DFCBB0] shadow-sm">
                        <div className="w-10 h-10 rounded-full bg-[#FAF3E5] border border-[#D4B978] flex items-center justify-center text-[#7D1E28] shrink-0">
                          <Camera size={20} />
                        </div>

                        <span className="text-xs font-semibold text-[#42151B] leading-tight">
                          Photos &amp; videos shared via email/WhatsApp
                        </span>
                      </div>

                      <div className="flex items-center gap-3 p-3 rounded-xl bg-white border border-[#DFCBB0] shadow-sm">
                        <div className="w-10 h-10 rounded-full bg-[#FAF3E5] border border-[#D4B978] flex items-center justify-center text-[#7D1E28] shrink-0">
                          <Package size={20} />
                        </div>

                        <span className="text-xs font-semibold text-[#42151B] leading-tight">
                          Prasadam carefully packed and delivered safely
                        </span>
                      </div>

                      <div className="flex items-center gap-3 p-3 rounded-xl bg-white border border-[#DFCBB0] shadow-sm">
                        <div className="w-10 h-10 rounded-full bg-[#FAF3E5] border border-[#D4B978] flex items-center justify-center text-[#7D1E28] shrink-0">
                          <Globe size={20} />
                        </div>

                        <span className="text-xs font-semibold text-[#42151B] leading-tight">
                          Worldwide shipping with tracking
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* PROCESS TAB */}
              {activeTab === "process" && (
                <div className="space-y-4">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-[family-name:var(--font-cormorant)] text-xl sm:text-2xl text-[#42151B] font-bold">
                      Step-by-Step Temple Process ({selectedPooja.name})
                    </h3>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {selectedPooja.process.map((step) => (
                      <div
                        key={`${selectedPooja.id}-${step.step}`}
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

              {/* BENEFITS TAB */}
              {activeTab === "benefits" && (
                <div className="space-y-4">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-[family-name:var(--font-cormorant)] text-xl sm:text-2xl text-[#42151B] font-bold">
                      Spiritual &amp; Material Blessings
                    </h3>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {selectedPooja.benefits.map((benefit, idx) => (
                      <div
                        key={`${selectedPooja.id}-benefit-${idx}`}
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

              {/* NOTES TAB */}
              {activeTab === "notes" && (
                <div className="space-y-4">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-[family-name:var(--font-cormorant)] text-xl sm:text-2xl text-[#42151B] font-bold">
                      Important Information for Overseas Devotees
                    </h3>
                  </div>

                  <div className="space-y-3">
                    {selectedPooja.notes.map((note, idx) => (
                      <div
                        key={`${selectedPooja.id}-note-${idx}`}
                        className="flex items-start gap-3 bg-white p-4 rounded-xl border border-[#DFCBB0] shadow-sm"
                      >
                        <Info
                          size={18}
                          className="text-[#B08A45] shrink-0 mt-0.5"
                        />

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

      {/* ==========================================
          5. FEATURE CARDS
      ========================================== */}

      <section className="py-8 sm:py-12 px-4 sm:px-8 max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {overseasFeatures.map((card, idx) => {
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

                  <ArrowRight
                    size={13}
                    className="transition-transform group-hover:translate-x-1"
                  />
                </button>
              </div>
            );
          })}
        </div>
      </section>

      {/* ==========================================
          6. BOTTOM CTA
      ========================================== */}

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
                <h3 className="font-[family-name:var(--font-cormorant)] text-xl sm:text-2xl text-[#E5C77A] font-semibold">
                  Can&apos;t be in India?
                </h3>

                <h2 className="font-[family-name:var(--font-cormorant)] text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-[#FFFDF8]">
                  Let Us Bring the Temple to You.
                </h2>

                <div className="mt-2.5 flex flex-wrap items-center gap-4 text-xs text-[#F3EAD8]/90">
                  <span className="flex items-center gap-1.5">
                    <Check size={14} className="text-[#E5C77A]" />
                    100% Authentic
                  </span>

                  <span className="flex items-center gap-1.5">
                    <Check size={14} className="text-[#E5C77A]" />
                    Secure &amp; Reliable
                  </span>

                  <span className="flex items-center gap-1.5">
                    <Check size={14} className="text-[#E5C77A]" />
                    Timely Delivery
                  </span>
                </div>
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

      {/* ==========================================
          7. BOOKING MODAL
      ========================================== */}

      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="relative w-full max-w-xl rounded-2xl bg-[#FCFAF5] border border-[#DFCBB0] p-6 sm:p-8 shadow-2xl max-h-[90vh] overflow-y-auto">
            {/* CLOSE */}
            <button
              type="button"
              onClick={() => setIsModalOpen(false)}
              className="absolute top-4 right-4 text-[#7A6458] hover:text-[#42151B] p-1.5 rounded-full hover:bg-[#EFE3CF] transition-colors"
              aria-label="Close modal"
            >
              <X size={20} />
            </button>

            {/* SUCCESS */}
            {modalSuccess ? (
              <div className="py-10 text-center space-y-3">
                <div className="w-16 h-16 rounded-full bg-[#FAF3E5] border-2 border-[#D4B978] flex items-center justify-center text-[#7D1E28] mx-auto">
                  <CheckCircle2 size={36} />
                </div>

                <h3 className="font-[family-name:var(--font-cormorant)] text-2xl sm:text-3xl font-bold text-[#42151B]">
                  Sankalpam Booking Received!
                </h3>

                <p className="text-xs sm:text-sm text-[#55463E] max-w-md mx-auto">
                  Thank you! Our temple coordinator will contact you via
                  WhatsApp with the auspicious details, priest assignment, and
                  international shipping schedule.
                </p>
              </div>
            ) : (
              <div>
                <div className="text-center mb-6">
                  <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-[#B08A45]">
                    OVERSEAS TEMPLE SANKALPAM
                  </span>

                  <h3 className="font-[family-name:var(--font-cormorant)] text-2xl sm:text-3xl font-bold text-[#42151B] mt-1">
                    Book Pooja with Worldwide Delivery
                  </h3>

                  <p className="text-xs text-[#63534B] mt-1">
                    Provide your Sankalpam and overseas address details below.
                  </p>
                </div>

                <form
                  onSubmit={handleFormSubmit}
                  className="space-y-4"
                >
                  {/* NAME + GOTRAM */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-[#42151B] mb-1">
                        Devotee Full Name *
                      </label>

                      <div className="relative">
                        <User
                          size={15}
                          className="absolute left-3 top-3 text-[#B08A45]"
                        />

                        <input
                          type="text"
                          required
                          value={formData.devoteeName}
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              devoteeName: e.target.value,
                            })
                          }
                          placeholder="e.g. Sivasubramanian"
                          className="w-full rounded-lg border border-[#DFCBB0] bg-white pl-9 pr-3 py-2 text-xs text-[#29231F] focus:border-[#7D1E28] focus:outline-none"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-[#42151B] mb-1">
                        Gotram
                      </label>

                      <input
                        type="text"
                        value={formData.gotram}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            gotram: e.target.value,
                          })
                        }
                        placeholder="e.g. Koundinya / Bharadwaja"
                        className="w-full rounded-lg border border-[#DFCBB0] bg-white px-3 py-2 text-xs text-[#29231F] focus:border-[#7D1E28] focus:outline-none"
                      />
                    </div>
                  </div>

                  {/* NAKSHATRAM + RASI */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-[#42151B] mb-1">
                        Nakshatram (Birth Star)
                      </label>

                      <input
                        type="text"
                        value={formData.nakshatram}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            nakshatram: e.target.value,
                          })
                        }
                        placeholder="e.g. Rohini / Swati"
                        className="w-full rounded-lg border border-[#DFCBB0] bg-white px-3 py-2 text-xs text-[#29231F] focus:border-[#7D1E28] focus:outline-none"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-[#42151B] mb-1">
                        Rasi (Moon Sign)
                      </label>

                      <input
                        type="text"
                        value={formData.rasi}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            rasi: e.target.value,
                          })
                        }
                        placeholder="e.g. Rishabham / Thula"
                        className="w-full rounded-lg border border-[#DFCBB0] bg-white px-3 py-2 text-xs text-[#29231F] focus:border-[#7D1E28] focus:outline-none"
                      />
                    </div>
                  </div>

                  {/* COUNTRY + WHATSAPP */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-[#42151B] mb-1">
                        Country of Residence *
                      </label>

                      <div className="relative">
                        <Globe
                          size={15}
                          className="absolute left-3 top-3 text-[#B08A45]"
                        />

                        <input
                          type="text"
                          required
                          value={formData.country}
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              country: e.target.value,
                            })
                          }
                          placeholder="e.g. USA / UK / Australia"
                          className="w-full rounded-lg border border-[#DFCBB0] bg-white pl-9 pr-3 py-2 text-xs text-[#29231F] focus:border-[#7D1E28] focus:outline-none"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-[#42151B] mb-1">
                        WhatsApp Number *
                      </label>

                      <div className="relative">
                        <Phone
                          size={15}
                          className="absolute left-3 top-3 text-[#B08A45]"
                        />

                        <input
                          type="tel"
                          required
                          value={formData.whatsapp}
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              whatsapp: e.target.value,
                            })
                          }
                          placeholder="+1 (555) 000-0000"
                          className="w-full rounded-lg border border-[#DFCBB0] bg-white pl-9 pr-3 py-2 text-xs text-[#29231F] focus:border-[#7D1E28] focus:outline-none"
                        />
                      </div>
                    </div>
                  </div>

                  {/* POOJA + DATE */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-[#42151B] mb-1">
                        Selected Pooja
                      </label>

                      <select
                        value={formData.pooja}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            pooja: e.target.value,
                          })
                        }
                        className="w-full rounded-lg border border-[#DFCBB0] bg-white px-3 py-2 text-xs text-[#29231F] focus:border-[#7D1E28] focus:outline-none"
                      >
                        {overseasPoojas.map((p) => (
                          <option key={p.id} value={p.name}>
                            {p.name}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-[#42151B] mb-1">
                        Preferred Date / Muhurtham
                      </label>

                      <div className="relative">
                        <Calendar
                          size={15}
                          className="absolute left-3 top-3 text-[#B08A45]"
                        />

                        <input
                          type="date"
                          value={formData.preferredDate}
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              preferredDate: e.target.value,
                            })
                          }
                          className="w-full rounded-lg border border-[#DFCBB0] bg-white pl-9 pr-3 py-2 text-xs text-[#29231F] focus:border-[#7D1E28] focus:outline-none"
                        />
                      </div>
                    </div>
                  </div>

                  {/* SHIPPING ADDRESS */}
                  <div>
                    <label className="block text-xs font-semibold text-[#42151B] mb-1">
                      International Delivery Address (for Prasadam) *
                    </label>

                    <textarea
                      rows={2}
                      required
                      value={formData.shippingAddress}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          shippingAddress: e.target.value,
                        })
                      }
                      placeholder="Full street address, City, State/Province, Postal Code, Country"
                      className="w-full rounded-lg border border-[#DFCBB0] bg-white p-2.5 text-xs text-[#29231F] focus:border-[#7D1E28] focus:outline-none"
                    />
                  </div>

                  {/* SPECIAL PRAYERS */}
                  <div>
                    <label className="block text-xs font-semibold text-[#42151B] mb-1">
                      Special Prayer Intentions / Family Names
                    </label>

                    <textarea
                      rows={2}
                      value={formData.specialPrayers}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          specialPrayers: e.target.value,
                        })
                      }
                      placeholder="e.g. Career growth, family prayers, anniversary prayers..."
                      className="w-full rounded-lg border border-[#DFCBB0] bg-white p-2.5 text-xs text-[#29231F] focus:border-[#7D1E28] focus:outline-none"
                    />
                  </div>

                  {/* SUBMIT */}
                  <button
                    type="submit"
                    className="w-full rounded-xl bg-[#4A1015] py-3 text-xs sm:text-sm font-bold text-white tracking-wider hover:bg-[#63181E] transition-all shadow-md mt-2"
                  >
                    CONFIRM OVERSEAS SANKALPAM
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