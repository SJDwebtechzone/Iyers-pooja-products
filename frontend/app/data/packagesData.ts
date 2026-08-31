export interface PackageItem {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  description: string;
  features: string[];
  badge: string;
  href: string;
  image: string;
  accentColor: string;
}

export const packagesData: PackageItem[] = [
  {
    id: "consumer-package",
    title: "Consumer Package",
    subtitle: "Essential Home Poojas & Daily Rituals",
    category: "Household & Family",
    description:
      "Thoughtfully curated complete pooja kits for everyday family rituals, Grihapravesam, Satyanarayana Vratam, and domestic well-being.",
    features: [
      "Pure Brass Pooja Utensils Set",
      "Organic Camphor & Pure Kumkum",
      "Fresh Garland & Mango Leaf Essentials",
      "Hand-crafted Herbal Incense & Diya Oils",
    ],
    badge: "Most Popular for Homes",
    href: "/consumer-package",
    image: "/images/banner.jpeg",
    accentColor: "#B08A45",
  },
  {
    id: "corporate-package",
    title: "Corporate Package",
    subtitle: "Office Invocations & Milestones",
    category: "Business & Enterprises",
    description:
      "Traditional Ayushya Homam and Lakshmi Kubera Poojas structured for office inaugurations, corporate milestones, and commercial prosperity.",
    features: [
      "Customized Executive Pooja Kits",
      "Vedic Scholar Pandit Arrangements",
      "Corporate Festive Gifting Hampers",
      "Complete Homa Kunda & Dravya Supplies",
    ],
    badge: "Tailored for Enterprises",
    href: "/corporate-package",
    image: "/images/banner.jpeg",
    accentColor: "#A71930",
  },
  {
    id: "temple-package",
    title: "Temple Package",
    subtitle: "Grand Devalaya Dravyas & Archanas",
    category: "Devalaya & Sanctuaries",
    description:
      "Bulk sacred offerings, pure A2 Cow Ghee, authentic herbs, and specialized dravyas for temple consecrations, Brahmotsavams, and Nitya Poojas.",
    features: [
      "Authentic Organic Yajna Dravyas",
      "High-grade A2 Cow Ghee & Samithu",
      "Specialized Temple Accessories",
      "Large-scale Bulk Supply Guarantee",
    ],
    badge: "Religious Trusts & Temples",
    href: "/temple",
    image: "/images/banner.jpeg",
    accentColor: "#5A2026",
  },
  {
    id: "overseas-package",
    title: "Overseas Temple Package",
    subtitle: "Global Customs-Cleared Pooja Supplies",
    category: "International Delivery",
    description:
      "Vacuum-sealed, quarantine-certified pooja materials dispatched worldwide to NRIs, global temples, and overseas cultural centers.",
    features: [
      "Customs & Quarantine Certified",
      "Vacuum-Sealed Longevity Packaging",
      "Express Global Air Logistics",
      "Comprehensive Sacred Dravya Sets",
    ],
    badge: "Worldwide Express Shipping",
    href: "/overseas",
    image: "/images/banner.jpeg",
    accentColor: "#B08A45",
  },
  {
    id: "festivals-package",
    title: "Festivals Package",
    subtitle: "Seasonal Festive Celebration Hampers",
    category: "Seasonal Celebrations",
    description:
      "All-in-one festive hampers for Vinayaka Chaturthi, Diwali, Navratri, Varalakshmi Vratam, and Pongal with step-by-step vidhi guidance.",
    features: [
      "Eco-Friendly Clay Deities",
      "Occasion-Specific Sacred Dravyas",
      "Step-by-step Pooja Vidhi Guide",
      "Traditional Organic Prasadam Supplies",
    ],
    badge: "Limited Festive Edition",
    href: "/festivals-package",
    image: "/images/banner.jpeg",
    accentColor: "#7F1515",
  },
];
// ============================================================
// CORPORATE POOJA PACKAGE DETAILS
// ============================================================

export interface CorporatePoojaItem {
  sno: number;
  english: string;
  tamil: string;
  quantity: string;
}

export interface CorporatePoojaProcess {
  step: string;
  title: string;
  description: string;
}

export interface CorporatePoojaBenefit {
  title: string;
  description: string;
}

export interface CorporatePoojaPackage {
  id: string;
  name: string;
  price: string;
  image: string;
  description: string;
  items: CorporatePoojaItem[];
  process: CorporatePoojaProcess[];
  benefits: CorporatePoojaBenefit[];
  notes: string[];
}

export const corporatePoojaPackages: CorporatePoojaPackage[] = [
  {
    id: "friday-poojas",
    name: "Friday Poojas",
    price: "₹2,999",
    image: "/images/kalash.jpg",

    description:
      "Friday Poojas are conducted weekly to invoke Goddess Mahalakshmi's blessings for prosperity, harmony and well-being in the workplace.",

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
        description:
          "Lighting the lamp and offering prayers to Goddess Lakshmi.",
      },
      {
        step: "02",
        title: "Lakshmi Devi Archana",
        description:
          "Performing Lakshmi Devi Archana with flowers and traditional prayers.",
      },
      {
        step: "03",
        title: "Naivedyam Samarpanam",
        description:
          "Offering fruits and sweets as Naivedyam.",
      },
      {
        step: "04",
        title: "Aarthi & Prasadam",
        description:
          "Concluding the pooja with Aarthi and distribution of Prasadam.",
      },
    ],

    benefits: [
      {
        title: "Weekly Renewal",
        description:
          "Creates a positive and peaceful atmosphere in the workplace.",
      },
      {
        title: "Prosperity",
        description:
          "Performed seeking Goddess Lakshmi's blessings for prosperity.",
      },
      {
        title: "Team Positivity",
        description:
          "Provides employees with a meaningful shared spiritual experience.",
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
    price: "₹3,499",
    image: "/images/kalash.jpg",

    description:
      "Amavasai Poojas are performed on the new moon day as a traditional observance seeking ancestral blessings and positive beginnings.",

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
        description:
          "Declaring the intention for the Amavasya observance.",
      },
      {
        step: "02",
        title: "Traditional Offerings",
        description:
          "Performing the traditional offerings using sesame and water.",
      },
      {
        step: "03",
        title: "Premises Cleansing",
        description:
          "Performing traditional cleansing of the premises.",
      },
      {
        step: "04",
        title: "Aarthi & Prasadam",
        description:
          "Concluding the ceremony with Aarthi and Prasadam.",
      },
    ],

    benefits: [
      {
        title: "Monthly Observance",
        description:
          "Provides a traditional monthly spiritual observance.",
      },
      {
        title: "Ancestral Blessings",
        description:
          "Performed seeking blessings of ancestors.",
      },
      {
        title: "Positive Beginning",
        description:
          "Marks the beginning of a new lunar cycle.",
      },
    ],

    notes: [
      "Scheduled according to the Amavasya date.",
      "Specific rituals can be customized according to requirements.",
    ],
  },

  {
    id: "ganapathy-homam",
    name: "Ganapathy Homam",
    price: "₹3,999",
    image: "/images/kalash.jpg",

    description:
      "A traditional Ganapathy Homam performed to invoke Lord Ganesha's blessings for removing obstacles, improving clarity and beginning important corporate activities on an auspicious note.",

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
        description:
          "The priest begins the ceremony with Sankalpam for the organization.",
      },
      {
        step: "02",
        title: "Ganapathy Avahanam",
        description:
          "Lord Ganesha is invoked through traditional prayers and offerings.",
      },
      {
        step: "03",
        title: "Ganapathy Homam",
        description:
          "Sacred offerings are made into the homa fire with Vedic chanting.",
      },
      {
        step: "04",
        title: "Purnahuthi & Aarthi",
        description:
          "The Homam concludes with Purnahuthi, Aarthi and Prasadam.",
      },
    ],

    benefits: [
      {
        title: "Obstacle Removal",
        description:
          "Traditionally performed seeking Lord Ganesha's blessings before important activities.",
      },
      {
        title: "Positive Environment",
        description:
          "Creates a spiritually positive atmosphere in the workplace.",
      },
      {
        title: "Auspicious Beginning",
        description:
          "Ideal for inaugurations, new offices and important corporate milestones.",
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
    price: "₹4,499",
    image: "/images/kalash.jpg",

    description:
      "Ayudha Pooja is performed for company vehicles, machinery, computers, tools and equipment.",

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
        description:
          "Beginning the ceremony with Sankalpam.",
      },
      {
        step: "02",
        title: "Equipment Blessing",
        description:
          "Applying turmeric and kumkum to vehicles and equipment.",
      },
      {
        step: "03",
        title: "Vehicle Pooja",
        description:
          "Performing traditional prayers for company vehicles.",
      },
      {
        step: "04",
        title: "Maha Aarthi",
        description:
          "Concluding the ceremony with Maha Aarthi and Prasadam.",
      },
    ],

    benefits: [
      {
        title: "Vehicle Blessing",
        description:
          "Traditional prayers for company vehicles.",
      },
      {
        title: "Equipment Blessing",
        description:
          "Covers machinery, tools and workplace equipment.",
      },
      {
        title: "Team Confidence",
        description:
          "Creates a meaningful traditional experience for staff.",
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
    price: "₹1,999",
    image: "/images/kalash.jpg",

    description:
      "A simple closing ceremony suitable for corporate events, celebrations and office gatherings.",

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
        description:
          "Staff and attendees gather for the closing ceremony.",
      },
      {
        step: "02",
        title: "Camphor Aarthi",
        description:
          "Traditional Aarthi is performed.",
      },
      {
        step: "03",
        title: "Prasadam Blessing",
        description:
          "Prasadam is prepared for distribution.",
      },
      {
        step: "04",
        title: "Distribution",
        description:
          "Prasadam is distributed to attendees.",
      },
    ],

    benefits: [
      {
        title: "Simple Closure",
        description:
          "Provides a meaningful conclusion to corporate events.",
      },
      {
        title: "Team Gathering",
        description:
          "Brings employees together for a shared ceremony.",
      },
      {
        title: "Flexible",
        description:
          "Can be added to other corporate ceremonies.",
      },
    ],

    notes: [
      "Suitable for corporate events and celebrations.",
      "Prasadam quantity can be based on the number of attendees.",
    ],
  },
];