"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import {
  ArrowRight,
  Check,
  ChevronRight,
  Gift,
  Info,
  List,
  Phone,
  Sparkles,
  Star,
} from "lucide-react";

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

const OCCASION_TO_API_CATEGORY: Record<string, string> = {
  "ganapathy-homam": "ganapathi-homam",
  "house-warming": "grahapravesam",
  "marriage": "marriage",
  "bhoomi-poojai": "bhoomi-poojai",
  "punyahavachanam": "punyahavachanam",
  "ruthu-punyahavachanam": "ruthu-punyahavachanam",
  "ayush-homam": "ayush-homam",
};

const API_BASE = "http://localhost:3001";

const consumerPackageData: PackageData = {
  title: "Consumer Package",
  subtitle: "Essential pooja essentials thoughtfully curated for sacred moments at home.",
  breadcrumb: "Consumer Package",
  heroImage: "/images/banner.jpeg",
  introImage: "/images/banner.jpeg",
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
    { sno: 1, english: "Pure Brass Pooja Utensils Set", tamil: "பித்தளை பூஜை பாத்திரங்கள்", quantity: "1 set" },
    { sno: 2, english: "Organic Camphor", tamil: "கற்பூரம்", quantity: "1 pack" },
    { sno: 3, english: "Pure Kumkum", tamil: "குங்குமம்", quantity: "1 pack" },
    { sno: 4, english: "Fresh Garland and Mango Leaves", tamil: "மாலை மற்றும் மாவிலை", quantity: "As required" },
    { sno: 5, english: "Diya Oil and Herbal Incense", tamil: "விளக்கு எண்ணெய் மற்றும் ஊதுபத்தி", quantity: "1 set" },
  ],
  process: [
    "Clean the pooja space and arrange the required items.",
    "Light the diya and incense before beginning the prayer.",
    "Offer flowers, kumkum, and other samagri according to tradition.",
    "Complete the prayer and distribute prasadam to the family.",
  ],
  benefitsDetails: [
    "Supports a calm and positive atmosphere at home.",
    "Makes regular family worship easier to prepare.",
    "Brings essential materials together in one thoughtfully curated package.",
    "Suitable for daily rituals and auspicious occasions.",
  ],
  notes: [
    "Contents may vary slightly based on availability and the specific ritual.",
    "Please follow your family tradition or consult your priest for ritual guidance.",
  ],
  occasions: [
    {
      id: "ganapathy-homam",
      title: "Ganapathy Homam",
      description: "Invoke Lord Ganesha's blessings to remove all obstacles.",
      intro:
        "Ganapathy Homam is a sacred fire ritual performed to invoke the blessings of Lord Ganesha — the remover of all obstacles. This homam is traditionally conducted at the beginning of any new venture, ceremony, or important life event to ensure smooth progress and divine protection. Our package includes all the essential samagri required for this powerful homam.",
      icon: "peace",
      items: [
        { sno: 1, english: "Homa Kunda (Fire Pit)", tamil: "ஹோம குண்டம்", quantity: "1" },
        { sno: 2, english: "Pure A2 Cow Ghee", tamil: "தூய நெய்", quantity: "500 ml" },
        { sno: 3, english: "Coconut and Betel Leaves", tamil: "தேங்காய் மற்றும் வெற்றிலை", quantity: "As required" },
        { sno: 4, english: "Modak and Fruits (Naivedyam)", tamil: "மோதகம் மற்றும் பழங்கள்", quantity: "1 set" },
        { sno: 5, english: "Homa Samagri (Mixed herbs)", tamil: "ஹோம சாமக்ரி", quantity: "1 pack" },
        { sno: 6, english: "Samithu (Sacred Wood)", tamil: "ஸமித்து", quantity: "1 bundle" },
        { sno: 7, english: "Kumkum, Turmeric & Vibhuti", tamil: "குங்குமம், மஞ்சள் & விபூதி", quantity: "1 set" },
        { sno: 8, english: "Fresh Flowers & Garland", tamil: "புதிய மலர் & மாலை", quantity: "As required" },
      ],
      process: [
        "Prepare the homa kunda and arrange all samagri in order.",
        "Invoke Lord Ganesha with the Ganapathy Dhyana Shloka.",
        "Perform the sankalpam with water and rice.",
        "Offer ghee, samithu, and homa samagri to the sacred fire.",
        "Chant the Ganapathy ashtakam and offer modak as naivedyam.",
        "Conclude with the purnahuti and distribute prasadam.",
      ],
      benefits: [
        "Removes obstacles before any new beginning.",
        "Invokes divine wisdom and clarity.",
        "Brings peace and prosperity to the household.",
        "Strengthens devotion and mental focus.",
      ],
      notes: [
        "A qualified priest is recommended to conduct this homam.",
        "Perform on an auspicious day as per the panchangam.",
      ],
    },
    {
      id: "house-warming",
      title: "House Warming (Griha Pravesham)",
      description: "Bless your new home with divine energy and positivity.",
      intro:
        "Griha Pravesham, or House Warming, is one of the most auspicious ceremonies in Hindu tradition. It sanctifies the new home and invites divine blessings for the family who enters it. The ritual involves Vastu Pooja, Ganapathy Homam, and the sacred entry into the home with a kalash. Our package provides all the materials needed for a complete and traditional Griha Pravesham ceremony.",
      icon: "success",
      items: [
        { sno: 1, english: "Kalash and Coconut", tamil: "கலசம் மற்றும் தேங்காய்", quantity: "1 set" },
        { sno: 2, english: "Navadhanyam (Nine grains)", tamil: "நவதானியம்", quantity: "1 set" },
        { sno: 3, english: "Mango Leaves and Garland", tamil: "மாவிலை மற்றும் மாலை", quantity: "As required" },
        { sno: 4, english: "Homa Samagri and Ghee", tamil: "ஹோம சாமக்ரி மற்றும் நெய்", quantity: "1 set" },
        { sno: 5, english: "Turmeric, Kumkum and Rice", tamil: "மஞ்சள், குங்குமம் மற்றும் அரிசி", quantity: "1 set" },
        { sno: 6, english: "Vastu Pooja Items", tamil: "வாஸ்து பூஜை பொருட்கள்", quantity: "1 set" },
        { sno: 7, english: "Milk for Boiling (Paal Kaachuthal)", tamil: "பால் காய்ச்சுதல் பொருட்கள்", quantity: "1 set" },
        { sno: 8, english: "Camphor and Diya", tamil: "கற்பூரம் மற்றும் விளக்கு", quantity: "1 set" },
      ],
      process: [
        "Cleanse the entrance and prepare the kalash with mango leaves.",
        "Perform Vastu Pooja to sanctify the new home.",
        "Conduct Ganapathy Homam for blessings and obstacle removal.",
        "Boil milk at the main entrance as a symbol of prosperity.",
        "Enter the home with the kalash and family members.",
        "Offer prasadam and celebrate the new beginning.",
      ],
      benefits: [
        "Creates an auspicious beginning in the new home.",
        "Invokes blessings for peace, health, and prosperity.",
        "Purifies the home of negative energies.",
        "Helps the family prepare with confidence.",
      ],
      notes: [
        "The priest may recommend additional items based on the family tradition.",
        "Confirm the muhurtham and ritual requirements before the ceremony.",
      ],
    },
    {
      id: "satyanarayana-vratam",
      title: "Satyanarayana Vratam",
      description: "Thoughtfully prepared samagri for a devotional vratam with family and friends.",
      intro:
        "Satyanarayana Vratam is a beloved Hindu devotional ritual performed in gratitude to Lord Vishnu in his form as Satyanarayana. It is observed to seek blessings for health, wealth, family happiness, and fulfillment of wishes. This vratam is typically performed on Purnima (full moon) days or on occasions of personal milestones. Our package includes all the samagri required for a complete and traditional observation.",
      icon: "family",
      items: [
        { sno: 1, english: "Satyanarayana Pooja Book", tamil: "சத்யநாராயண பூஜை புத்தகம்", quantity: "1" },
        { sno: 2, english: "Panchamirtham Ingredients", tamil: "பஞ்சாமிர்த பொருட்கள்", quantity: "1 set" },
        { sno: 3, english: "Fruits and Betel Leaves", tamil: "பழங்கள் மற்றும் வெற்றிலை", quantity: "As required" },
        { sno: 4, english: "Pooja Flowers and Garland", tamil: "பூஜை மலர்கள் மற்றும் மாலை", quantity: "1 set" },
        { sno: 5, english: "Havan Samagri and Ghee", tamil: "ஹவன் சாமக்ரி மற்றும் நெய்", quantity: "1 set" },
        { sno: 6, english: "Wheat Flour (for prasadam)", tamil: "கோதுமை மாவு (பிரசாதம்)", quantity: "500 g" },
        { sno: 7, english: "Banana Leaves", tamil: "வாழை இலைகள்", quantity: "As required" },
        { sno: 8, english: "Kalash with Water", tamil: "கலசம் (நீர் நிரப்பியது)", quantity: "1" },
      ],
      process: [
        "Set up the altar and place the deity and kalash with devotion.",
        "Follow the vratam katha and offer the prescribed naivedyam.",
        "Prepare the panchamirtham for abhishekam.",
        "Distribute the Satyanarayana prasadam to all devotees.",
        "Complete the aarti and share the blessed food.",
      ],
      benefits: [
        "Supports family devotion and togetherness.",
        "Fulfills wishes and resolves difficulties.",
        "Encourages gratitude and spiritual reflection.",
        "Suitable for home celebrations and important milestones.",
      ],
      notes: [
        "Prepare the prasadam fresh and follow the vratam book or priest's guidance.",
        "Quantities should be increased when inviting a larger group of devotees.",
      ],
    },
    {
      id: "daily-pooja",
      title: "Daily Pooja",
      description: "Essential samagri for peaceful daily worship and regular family rituals.",
      intro:
        "Daily Pooja is the foundation of a devotional household — a simple yet powerful practice that brings peace, clarity, and divine connection each morning. Our daily pooja package provides all the essential items needed for regular home worship, carefully curated so your family never runs short of what is needed to maintain a consistent and blessed routine.",
      icon: "peace",
      items: [
        { sno: 1, english: "Pure Brass Pooja Utensils Set", tamil: "பித்தளை பூஜை பாத்திரங்கள்", quantity: "1 set" },
        { sno: 2, english: "Organic Camphor", tamil: "கற்பூரம்", quantity: "1 pack" },
        { sno: 3, english: "Pure Kumkum", tamil: "குங்குமம்", quantity: "1 pack" },
        { sno: 4, english: "Fresh Garland and Mango Leaves", tamil: "மாலை மற்றும் மாவிலை", quantity: "As required" },
        { sno: 5, english: "Diya Oil and Herbal Incense", tamil: "விளக்கு எண்ணெய் மற்றும் ஊதுபத்தி", quantity: "1 set" },
      ],
      process: [
        "Clean the pooja space and arrange the required items.",
        "Light the diya and incense before beginning the prayer.",
        "Offer flowers, kumkum, and other samagri according to tradition.",
        "Complete the prayer and distribute prasadam to the family.",
      ],
      benefits: [
        "Supports a calm and positive atmosphere at home.",
        "Makes regular family worship easier to prepare.",
        "Brings essential materials together in one package.",
        "Suitable for daily rituals and auspicious occasions.",
      ],
      notes: [
        "Contents may vary slightly based on availability and the specific ritual.",
        "Please follow your family tradition or consult your priest for guidance.",
      ],
    },
    {
      id: "marriage",
      title: "Marriage (Vivaha Pooja)",
      description: "Complete sacred samagri and essentials for traditional Vedic wedding ceremonies.",
      intro:
        "Vivaha Samskara is the sacred union of two souls sanctified by Agni Deva and Vedic rituals. Our comprehensive marriage package provides authentic, auspicious samagri for Kasi Yatra, Oonjal, Kanyadaanam, Mangalya Dharanam, Saptapadi, and Laja Homam.",
      icon: "family",
      items: [
        { sno: 1, english: "Pure Turmeric Roots & Powder", tamil: "மஞ்சள் கிழங்கு & பொடி", quantity: "1 kg" },
        { sno: 2, english: "Divine Kumkum & Sandalwood", tamil: "குங்குமம் & சந்தனம்", quantity: "250 g" },
        { sno: 3, english: "Mangalsutra / Thirumangalya Charadu", tamil: "மாங்கல்ய கயிறு & தாலி சரடு", quantity: "1 Set" },
        { sno: 4, english: "Akshatha (Sacred Yellow Rice)", tamil: "அட்சதை", quantity: "1 kg" },
        { sno: 5, english: "Pure A2 Cow Ghee for Homam", tamil: "தூய பசு நெய்", quantity: "1 Litre" },
        { sno: 6, english: "Homa Samagri & Samithu Bundles", tamil: "ஹோம சாமக்ரி & சமித்து", quantity: "2 Sets" },
        { sno: 7, english: "Laja (Puffed Paddy for Laja Homam)", tamil: "பொரி", quantity: "1 kg" },
        { sno: 8, english: "Betel Leaves & Areca Nuts", tamil: "வெற்றிலை பாக்கு", quantity: "100 Sets" },
        { sno: 9, english: "Sacred Coconuts & Silk Vastram", tamil: "தேங்காய் & பட்டு வஸ்திரம்", quantity: "1 Set" },
        { sno: 10, english: "Fresh Garlands & Jasmine Flowers", tamil: "திருமண மாலைகள் & பூக்கள்", quantity: "As required" },
      ],
      process: [
        "Vigneshwara Pooja and Kula Devata invocation.",
        "Kanyadaanam and sacred water oblations.",
        "Mangalya Dharanam with Vedic blessings and mangala vadhyam.",
        "Saptapadi (Seven Sacred Steps) around the Agni Deva.",
        "Laja Homam and elder Ashirvachanam for lifelong harmony.",
      ],
      benefits: [
        "Sanctifies the marital bond with divine grace and Vedic blessings.",
        "Brings prosperity, mutual understanding, and long-lasting companionship.",
        "Complete readiness with zero missing items on the auspicious wedding day.",
        "Traditional packing categorized by each ritual phase.",
      ],
      notes: [
        "Pre-packed in labeled compartments for each stage of the marriage rituals.",
        "Consult with your family vadhyar for any specific community traditions.",
      ],
    },
    {
      id: "bhoomi-poojai",
      title: "Bhoomi Poojai",
      description: "Sacred groundbreaking ritual seeking Mother Earth's blessings before construction.",
      intro:
        "Bhoomi Pooja is performed to venerate Bhoomi Devi (Mother Earth) and Vastu Purusha before commencing construction on a new plot or property. It seeks forgiveness for disturbing the earth and invokes divine protection against structural impediments and evil eyes.",
      icon: "success",
      items: [
        { sno: 1, english: "Navaratnam (Nine Precious Gems)", tamil: "நவரத்தினங்கள்", quantity: "1 Set" },
        { sno: 2, english: "Panchaloham (Five Sacred Metals)", tamil: "ஐம்பொன்", quantity: "1 Set" },
        { sno: 3, english: "Sacred Bhoomi Pooja Bricks & Kalash", tamil: "பூஜை செங்கற்கள் & கலசம்", quantity: "5 Nos" },
        { sno: 4, english: "Navadhanyam (9 Sacred Grains)", tamil: "நவதானியம்", quantity: "1 Set" },
        { sno: 5, english: "Pure Turmeric, Kumkum & Sandalwood", tamil: "மஞ்சள், குங்குமம் & சந்தனம்", quantity: "1 Set" },
        { sno: 6, english: "Coconuts & Betel Leaves", tamil: "தேங்காய் மற்றும் வெற்றிலை", quantity: "5 Sets" },
        { sno: 7, english: "Fresh Lemon & Drishti Gourd", tamil: "எலுமிச்சை & பூசணிக்காய்", quantity: "1 Set" },
        { sno: 8, english: "Camphor, Incense & Mustard Oil", tamil: "கற்பூரம், சாம்பிராணி & எண்ணெய்", quantity: "1 Set" },
      ],
      process: [
        "Purification of the Ishanya (North-East) corner of the construction site.",
        "Bhoomi Devi invocation and prayer for divine permission to build.",
        "Vastu Purusha Pooja and Navagraha blessings.",
        "Laying the sacred foundation brick with Navaratnam and Panchaloham.",
        "Drishti removal with white pumpkin and coconut breaking.",
      ],
      benefits: [
        "Neutralizes geological and directional vastu doshas.",
        "Ensures safe, timely, and accident-free construction progress.",
        "Attracts peace, wealth, and enduring stability for future residents.",
        "Brings auspiciousness to the whole property.",
      ],
      notes: [
        "Must be performed during auspicious Muhurtham facing North-East.",
        "Incorporate water from holy rivers if available for Kalasha abhishekam.",
      ],
    },
    {
      id: "punyahavachanam",
      title: "Punyahavachanam",
      description: "Sacred purification ceremony for sanctifying the home and family members.",
      intro:
        "Punyahavachanam is the Vedic purification ritual performed on the 11th or 28th day following childbirth (Namakaranam), after major life events, or to purify the home after an eclipse or prolonged vacancy. Holy water charged with Vedic suktams is sprinkled across the premises.",
      icon: "peace",
      items: [
        { sno: 1, english: "Copper / Brass Kalash", tamil: "செம்பு / பித்தளை கலசம்", quantity: "1 No" },
        { sno: 2, english: "Mango Leaves & Darbha Grass", tamil: "மாவிலை மற்றும் தர்பை புல்", quantity: "1 Bundle" },
        { sno: 3, english: "Sacred Teertha Herbs & Cardamom", tamil: "பச்சை கற்பூரம், ஏலக்காய்", quantity: "1 Set" },
        { sno: 4, english: "Turmeric, Kumkum & Akshatha", tamil: "மஞ்சள், குங்குமம் & அட்சதை", quantity: "1 Set" },
        { sno: 5, english: "Pure Cow Ghee & Diya", tamil: "பசு நெய் & விளக்கு", quantity: "1 Set" },
        { sno: 6, english: "Coconuts & Seasonal Fruits", tamil: "தேங்காய் மற்றும் பழங்கள்", quantity: "1 Set" },
        { sno: 7, english: "Betel Leaves & Areca Nuts", tamil: "வெற்றிலை பாக்கு", quantity: "12 Sets" },
      ],
      process: [
        "Sankalpam and invocation of Varuna Deva into the sacred Kalash.",
        "Chanting of Pavamana Suktam and cleansing Vedic mantras.",
        "Energizing the holy water with Darbha pavithram.",
        "Sprinkling the consecrated Teertham throughout the house and over attendees.",
        "Ashirvachanam and distribution of prasadam.",
      ],
      benefits: [
        "Removes spiritual impurities (Asaucha) and negative vibrations.",
        "Restores tranquility, purity, and positive aura to the household.",
        "Blesses newborn infants with longevity, health, and protection.",
        "Sanctifies the domestic atmosphere before initiating any ritual.",
      ],
      notes: [
        "Often combined with Namakaranam (naming ceremony) or Ayush Homam.",
      ],
    },
    {
      id: "ruthu-punyahavachanam",
      title: "Ruthu Punyahavachanam",
      description: "Traditional coming-of-age ceremony blessing young women with health and prosperity.",
      intro:
        "Ruthu Punyahavachanam (Manjal Neerattu Vizha / Ritu Shanti) is celebrated to honor a young girl entering womanhood. The ceremony invokes Goddess Lakshmi, Parvati, and Saraswati to bless her with radiant health, auspiciousness, longevity, and future marital bliss.",
      icon: "family",
      items: [
        { sno: 1, english: "Pure Turmeric Root & Kasturi Turmeric", tamil: "கஸ்தூரி மஞ்சள் & மஞ்சள் கிழங்கு", quantity: "500 g" },
        { sno: 2, english: "Divine Kumkum, Chandanam & Vibhuti", tamil: "குங்குமம், சந்தனம் & விபூதி", quantity: "1 Set" },
        { sno: 3, english: "Silk Half-Saree / Pattu Pavadai Vastram", tamil: "பட்டு பாவாடை வஸ்திரம்", quantity: "1 Set" },
        { sno: 4, english: "Fresh Fragrant Flower Garlands & Jada Alankaram", tamil: "பூ மாலை & ஜடை அலங்காரம்", quantity: "1 Set" },
        { sno: 5, english: "Kalash, Mango Leaves & Sacred Thread", tamil: "கலசம் & மாவிலை", quantity: "1 Set" },
        { sno: 6, english: "Seer Bakshanam & Sweets Set", tamil: "சீர் பலகார பொருட்கள்", quantity: "1 Set" },
        { sno: 7, english: "Betel Leaves, Areca Nuts & Seasonal Fruits", tamil: "வெற்றிலை பாக்கு & பழங்கள்", quantity: "21 Sets" },
        { sno: 8, english: "Camphor, Agarbatti & Ghee Diya", tamil: "கற்பூரம், ஊதுபத்தி & நெய் தீபம்", quantity: "1 Set" },
      ],
      process: [
        "Vigneshwara invocation and Kalasha Sthapana.",
        "Turmeric water blessing (Manjal Neerattu) by maternal relatives.",
        "Alankaram with new traditional vastrams and floral ornaments.",
        "Aarthi by married women (Sumangalis) to ward off evil eye (Drishti).",
        "Vedic blessings (Ashirvachanam) and celebratory feast.",
      ],
      benefits: [
        "Invokes divine feminine blessings for health, grace, and vitality.",
        "Wards off negative energies and removes adolescent hurdles.",
        "Fosters family bonding and joyful traditional heritage celebration.",
        "Instills cultural values and spiritual confidence.",
      ],
      notes: [
        "Arrangements can be scaled for both intimate home ceremonies and grand celebrations.",
      ],
    },
    {
      id: "ayush-homam",
      title: "Ayush Homam",
      description: "Vedic longevity homam invoking Ayur Devata for health, vitality, and protection.",
      intro:
        "Ayush Homam is performed to seek the blessings of Ayur Devata, Markandeya, and the Chiranjeevis for long life, robust physical health, and protection against ailments. Traditionally conducted on a child's first birthday (Bodhana) and subsequently on every Janma Nakshatra.",
      icon: "peace",
      items: [
        { sno: 1, english: "Homa Kunda & Special Dravya Samagri", tamil: "ஹோம குண்டம் & சாமக்ரி", quantity: "1 Set" },
        { sno: 2, english: "Pure A2 Cow Ghee", tamil: "தூய பசு நெய்", quantity: "1 Litre" },
        { sno: 3, english: "Charu (Cooked Rice & Ghee offering)", tamil: "சரு பொருட்கள்", quantity: "1 Set" },
        { sno: 4, english: "Samithu (Sacred wood sticks)", tamil: "சமித்து கட்டுகள்", quantity: "2 Bundles" },
        { sno: 5, english: "Sweet Payasam / Modak Ingredients", tamil: "பாயாசம் & நைவேத்திய பொருட்கள்", quantity: "1 Set" },
        { sno: 6, english: "Fresh Garlands, Betel Leaves & Coconuts", tamil: "மாலை, வெற்றிலை & தேங்காய்", quantity: "1 Set" },
        { sno: 7, english: "Turmeric, Kumkum & Akshatha", tamil: "மஞ்சள், குங்குமம் & அட்சதை", quantity: "1 Set" },
      ],
      process: [
        "Sankalpam with the person's Janma Nakshatra, Rasi, and Gotra.",
        "Invocation of Ayur Devata, Brahma, Vishnu, Shiva, and Chiranjeevis.",
        "Offering of Charu, Ghee, and sacred Samithu into the homa fire.",
        "Maha Poornahuthi and recitation of Ayushya Suktam.",
        "Applying energized homa raksha (Bhasma) and receiving elder blessings.",
      ],
      benefits: [
        "Promotes long life (Dirgha Ayush), immunity, and sound physical health.",
        "Clears planetary malefic influences (Arishta Dosha) in horoscope.",
        "Bestows vitality, mental sharpness, and cheerful disposition.",
        "Ideal for children on birth star and elders on Shastiabdhapoorthi.",
      ],
      notes: [
        "Most effective when performed on the birth star (Janma Nakshatram) day.",
      ],
    },
    {
      id: "family-ceremony",
      title: "Family Ceremony",
      description: "A flexible pooja collection for birthdays, anniversaries, and other family milestones.",
      intro:
        "Family ceremonies mark life's most cherished milestones — from birthdays and wedding anniversaries to naming ceremonies and thread ceremonies. Our Family Ceremony package is thoughtfully assembled to cover a wide range of personal and family occasions, giving you a complete collection of sacred items so you can focus on the celebration rather than the preparation.",
      icon: "obstacles",
      items: [
        { sno: 1, english: "Brass Diya and Pooja Plate", tamil: "பித்தளை விளக்கு மற்றும் பூஜை தட்டு", quantity: "1 set" },
        { sno: 2, english: "Flowers and Garland", tamil: "மலர்கள் மற்றும் மாலை", quantity: "As required" },
        { sno: 3, english: "Turmeric, Kumkum and Sandalwood", tamil: "மஞ்சள், குங்குமம் மற்றும் சந்தனம்", quantity: "1 set" },
        { sno: 4, english: "Fruits and Coconut", tamil: "பழங்கள் மற்றும் தேங்காய்", quantity: "As required" },
        { sno: 5, english: "Camphor and Incense", tamil: "கற்பூரம் மற்றும் ஊதுபத்தி", quantity: "1 set" },
      ],
      process: [
        "Arrange the altar and place the family offering before the deity.",
        "Light the diya and offer flowers, fruits, and traditional samagri.",
        "Complete the blessing prayer and share prasadam together.",
      ],
      benefits: [
        "Marks meaningful family moments with tradition.",
        "Helps remove obstacles before a new milestone.",
        "Creates a warm and auspicious gathering at home.",
        "Flexible enough for several family occasions.",
      ],
      notes: [
        "Choose offerings according to the occasion and your family custom.",
        "Ask your priest if the ceremony requires additional samagri.",
      ],
    },
  ],
};

export default function ConsumerPackagePage() {
  return <PackagePage data={consumerPackageData} />;
}

function PackagePage({ data }: PackagePageProps) {
  const [activeTab, setActiveTab] = useState("details");
  const [selectedRitual, setSelectedRitual] = useState<OccasionPackage | null>(null);
  const [dynamicItems, setDynamicItems] = useState<PackageItem[] | null>(null);

  useEffect(() => {
    if (!selectedRitual) {
      setDynamicItems(null);
      return;
    }

    const apiCategory = OCCASION_TO_API_CATEGORY[selectedRitual.id];

    if (!apiCategory) {
      setDynamicItems(null);
      return;
    }

    fetch(`${API_BASE}/consumer-packages/${apiCategory}`)
      .then((res) => res.json())
      .then((rows) => {
        const mapped: PackageItem[] = rows.map((r: any) => ({
          sno: r.sno,
          english: r.name_english,
          tamil: r.name_tamil,
          quantity: r.quantity,
        }));

        setDynamicItems(mapped);
      })
      .catch(() => setDynamicItems(null));
  }, [selectedRitual]);

  // Set initial selected ritual based on URL hash or default to first, and listen to hashchange
  useEffect(() => {
    const handleHash = () => {
      if (typeof window === "undefined") return;
      const rawHash = window.location.hash.replace("#", "").toLowerCase().trim();
      if (!rawHash) {
        if (!selectedRitual && data.occasions.length > 0) {
          setSelectedRitual(data.occasions[0]);
        }
        return;
      }

      const match = data.occasions.find(
        (o) =>
          o.id.toLowerCase() === rawHash ||
          (rawHash === "grahapravesam" && (o.id === "grahapravesam" || o.id === "house-warming")) ||
          (rawHash === "house-warming" && (o.id === "grahapravesam" || o.id === "house-warming")) ||
          o.id.toLowerCase().replace(/-/g, "") === rawHash.replace(/-/g, "") ||
          o.title.toLowerCase().replace(/[^a-z0-9]/g, "-").includes(rawHash) ||
          rawHash.includes(o.id.toLowerCase())
      );

      if (match) {
        setSelectedRitual(match);
        setActiveTab("details");
        setTimeout(() => {
          const el = document.getElementById("ritual-details-section") || document.getElementById(match.id);
          if (el) {
            el.scrollIntoView({ behavior: "smooth" });
          }
        }, 120);
      }
    };

    handleHash();
    window.addEventListener("hashchange", handleHash);
    return () => window.removeEventListener("hashchange", handleHash);
  }, [data.occasions]);

  const tabs = [
    { id: "details", label: "Package Details", icon: Gift },
    { id: "process", label: "Pooja Process", icon: List },
    { id: "benefits", label: "Benefits", icon: Star },
    { id: "notes", label: "Important Notes", icon: Info },
  ];

  return (
    <main className="bg-[#FCFAF6] text-[#29231F]">

      {/* =====================================================
          HERO
      ===================================================== */}
      <section className="relative mt-[90px] flex min-h-[calc(100vh-90px)] items-center overflow-hidden">

        {/* Full-width Hero Image */}
        <div className="absolute inset-0 h-full w-full">
          <Image
            src={data.heroImage}
            alt={data.title}
            fill
            priority
            className="object-cover object-left md:object-center"
          />

          {/* Smooth overlay across the image so text on the right is readable */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20 lg:bg-gradient-to-r lg:from-transparent lg:via-black/50 lg:to-black/85" />
        </div>

        {/* Right Content without solid black box cut */}
        <div className="relative z-10 ml-auto flex w-full flex-col justify-center px-6 py-16 sm:px-10 lg:w-[50%] lg:px-16 xl:px-24">

          <div className="w-full max-w-[650px]">

            <p className="mb-5 text-[11px] font-semibold uppercase tracking-[0.35em] text-[#D4B978]">
              ✦ POOJA PACKAGE ✦
            </p>

            <h1 className="font-[family-name:var(--font-cormorant)] text-5xl font-medium leading-[1] text-white sm:text-6xl lg:text-7xl">
              {data.title}
            </h1>

            {/* Gold divider */}
            <div className="my-7 flex items-center gap-3">
              <span className="h-px w-14 bg-[#B08A45]" />
              <Sparkles
                size={14}
                strokeWidth={1}
                className="text-[#D4B978]"
              />
              <span className="h-px w-14 bg-[#B08A45]" />
            </div>

            <p className="max-w-lg text-sm leading-7 text-white/90 sm:text-base">
              {data.subtitle}
            </p>

            {/* Breadcrumb */}
            <div className="mt-8 flex flex-wrap items-center gap-3 border-t border-white/20 pt-6 text-xs font-medium">
              <a
                href="/"
                className="text-white/70 transition-colors hover:text-[#D4B978]"
              >
                Home
              </a>

              <span className="text-white/40">›</span>

              <a
                href="/package"
                className="text-white/70 transition-colors hover:text-[#D4B978]"
              >
                Pooja Packages
              </a>

              <span className="text-white/40">›</span>

              <span className="text-[#D4B978]">
                {data.breadcrumb}
              </span>
            </div>

          </div>
        </div>
      </section>


      {/* =====================================================
          DECORATIVE BANNER (Kalash on left, Text in center, Diya on right)
      ===================================================== */}
      <section className="px-5 py-8 sm:px-8 lg:px-12 lg:py-10">

        <div className="relative mx-auto max-w-[1400px] overflow-hidden rounded-2xl border border-[#E8D5B5] bg-gradient-to-r from-[#FFF9EE] via-[#FFFDF8] to-[#FFF9EE] px-4 py-6 shadow-sm sm:px-8 sm:py-8 lg:px-12">

          {/* Subtle patterned background */}
          <div className="absolute inset-0 opacity-[0.03]">
            <div
              className="h-full w-full"
              style={{
                backgroundImage:
                  "radial-gradient(#A71930 1px, transparent 1px)",
                backgroundSize: "18px 18px",
              }}
            />
          </div>

          <div className="relative flex flex-col items-center justify-between gap-4 sm:flex-row sm:gap-6 lg:gap-10">

            {/* Left side: Kalasam (blended seamlessly without hard box) */}
            <div className="relative h-28 w-28 shrink-0 sm:h-36 sm:w-36 md:h-44 md:w-44 lg:h-48 lg:w-48">
              <Image
                src="/images/kalasam_banner.png"
                alt="Sacred Kalasam"
                fill
                className="object-contain"
              />
            </div>

            {/* Center: Text */}
            <div className="flex-1 text-center">

              <p className="font-[family-name:var(--font-cormorant)] text-2xl italic text-[#7C3030] sm:text-3xl lg:text-4xl">
                {data.bannerSubtitle}
              </p>

              <h2 className="mt-1 font-[family-name:var(--font-cormorant)] text-3xl font-semibold text-[#5A2026] sm:text-4xl lg:text-5xl">
                {data.bannerTitle}
              </h2>

              <div className="mx-auto mt-4 flex items-center justify-center gap-2">
                <span className="h-px w-12 bg-[#B08A45]" />
                <span className="h-1.5 w-1.5 rotate-45 bg-[#B08A45]" />
                <span className="h-px w-12 bg-[#B08A45]" />
              </div>

            </div>

            {/* Right side: Hanging Diya (blended seamlessly) */}
            <div className="relative h-28 w-28 shrink-0 sm:h-36 sm:w-36 md:h-44 md:w-44 lg:h-48 lg:w-48">
              <Image
                src="/images/diya_banner.png"
                alt="Sacred Diya"
                fill
                className="object-contain"
              />
            </div>

          </div>
        </div>
      </section>


      {/* =====================================================
          INTRODUCTION
      ===================================================== */}
      <section className="px-5 py-14 sm:px-8 lg:px-12 lg:py-20">

        <div className="mx-auto max-w-[1400px]">

          {/* TOP GRID: text + image */}
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">

            {/* LEFT CONTENT */}
            <div>

              <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.28em] text-[#B08A45]">
                ABOUT THE POOJA
              </p>

              <h2 className="font-[family-name:var(--font-cormorant)] text-4xl font-semibold leading-tight text-[#5A2026] sm:text-5xl">
                {data.introTitle}
              </h2>

              <div className="my-6 flex items-center gap-2">
                <span className="h-px w-12 bg-[#B08A45]" />
                <span className="h-1.5 w-1.5 rotate-45 bg-[#B08A45]" />
              </div>

              <p className="max-w-xl text-[15px] leading-8 text-[#4B4540]">
                {data.introText}
              </p>

              {/* Benefits */}
              <div className="mt-10 grid grid-cols-2 gap-7 sm:grid-cols-4 lg:grid-cols-2 xl:grid-cols-4">
                {data.benefits.map((benefit) => (
                  <Benefit key={benefit.title} type={benefit.icon} title={benefit.title} />
                ))}
              </div>

            </div>

            {/* RIGHT IMAGE */}
            <div className="relative">
              <div className="absolute -inset-3 rounded-2xl border border-[#D9BC86]/40" />
              <div className="relative aspect-[4/3] overflow-hidden rounded-xl">
                <Image
                  src={data.introImage}
                  alt={data.introTitle}
                  fill
                  className="object-cover transition-transform duration-700 hover:scale-105"
                />
              </div>
              <div className="absolute -bottom-5 -left-5 hidden h-20 w-20 border-b border-l border-[#B08A45] sm:block" />
              <div className="absolute -right-5 -top-5 hidden h-20 w-20 border-r border-t border-[#B08A45] sm:block" />
            </div>

          </div>

          {/* RITUAL TYPE BUTTONS — below the grid */}
          <div className="mt-16 border-b border-[#E8D5B5] pb-12 mb-8">

            <div className="mb-6 flex items-center gap-3">
              <span className="h-px w-10 bg-[#B08A45]" />
              <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#B08A45]">
                SELECT A RITUAL TO VIEW PACKAGE DETAILS
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              {data.occasions.map((occasion) => {
                const isActive = selectedRitual?.id === occasion.id;
                return (
                  <button
                    key={occasion.id}
                    type="button"
                    onClick={() => {
                      setSelectedRitual(occasion);
                      setActiveTab("details");
                    }}
                    className={`group flex items-center gap-2.5 rounded-full border px-5 py-2.5 text-sm font-medium transition-all duration-300 ${
                      isActive
                        ? "border-[#7A1524] bg-[#7A1524] text-white shadow-md"
                        : "border-[#D9BC86] bg-[#FFF9EF] text-[#5A2026] hover:border-[#7A1524] hover:bg-[#7A1524] hover:text-white"
                    }`}
                  >
                    <RitualIcon type={occasion.icon} active={isActive} />
                    <span>{occasion.title}</span>
                  </button>
                );
              })}
            </div>

          </div>

        </div>
      </section>


      {/* =====================================================
          PACKAGE DETAILS (Only visible when a ritual is selected)
      ===================================================== */}
      {selectedRitual && (
        <section className="scroll-mt-28 bg-white px-5 py-14 sm:px-8 lg:px-12 lg:py-20" id="ritual-details-section">
          <div className="mx-auto max-w-[1400px]">

            {/* Heading & Optional Image */}
            {selectedRitual.image ? (
              <div className="mb-14 grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
                
                {/* Left: Image */}
                <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl border border-[#D9BC86]/40 shadow-sm">
                  <Image
                    src={selectedRitual.image}
                    alt={selectedRitual.title}
                    fill
                    className="object-cover transition-transform duration-700 hover:scale-105"
                  />
                </div>

                {/* Right: Text */}
                <div className="text-left">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-[#B08A45]">
                    RITUAL OVERVIEW
                  </p>
                  <h2 className="mt-3 font-[family-name:var(--font-cormorant)] text-4xl font-semibold text-[#5A2026] sm:text-5xl">
                    {selectedRitual.title}
                  </h2>
                  <div className="mt-5 flex items-center gap-2">
                    <span className="h-px w-12 bg-[#B08A45]" />
                    <span className="h-1.5 w-1.5 rotate-45 bg-[#B08A45]" />
                  </div>
                  <p className="mt-6 text-[15px] leading-8 text-[#4B4540]">
                    {selectedRitual.intro}
                  </p>
                </div>

              </div>
            ) : (
              <div className="mb-14 text-center">
                <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-[#B08A45]">
                  RITUAL OVERVIEW
                </p>
                <h2 className="mt-2 font-[family-name:var(--font-cormorant)] text-4xl font-semibold text-[#5A2026] sm:text-5xl">
                  {selectedRitual.title}
                </h2>
                <div className="mx-auto mt-4 flex items-center justify-center gap-2">
                  <span className="h-px w-12 bg-[#B08A45]" />
                  <span className="h-1.5 w-1.5 rotate-45 bg-[#B08A45]" />
                  <span className="h-px w-12 bg-[#B08A45]" />
                </div>
                <p className="mx-auto mt-5 max-w-3xl text-[15px] leading-8 text-[#4B4540]">
                  {selectedRitual.intro}
                </p>
              </div>
            )}

            {/* Details Card */}
            <div className="overflow-hidden rounded-xl border border-[#E8D5B5] bg-[#FFFCF7]">
              <div className="grid lg:grid-cols-[250px_1fr]">

                {/* SIDEBAR */}
                <div className="bg-[#5A2026] p-4 lg:p-5">
                  <div className="flex gap-2 overflow-x-auto scrollbar-none [scrollbar-width:none] [&::-webkit-scrollbar]:hidden lg:block lg:space-y-2">
                    {tabs.map((tab) => {
                      const Icon = tab.icon;
                      const active = activeTab === tab.id;

                      return (
                        <button
                          key={tab.id}
                          type="button"
                          onClick={() => setActiveTab(tab.id)}
                          className={`flex min-w-max items-center gap-3 rounded-lg px-4 py-3.5 text-left text-sm transition-all duration-300 lg:w-full ${
                            active
                              ? "bg-[#7A202B] text-white shadow-md"
                              : "text-white/80 hover:bg-white/10 hover:text-white"
                          }`}
                        >
                          <Icon
                            size={19}
                            strokeWidth={1.5}
                            className={active ? "text-[#D4B978]" : "text-white/70"}
                          />
                          <span>{tab.label}</span>
                          {active && (
                            <span className="ml-auto hidden text-[#D4B978] lg:block">›</span>
                          )}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* CONTENT */}
                <div className="min-w-0 p-2 sm:p-7 lg:p-9">

                  {/* PACKAGE DETAILS */}
                  {activeTab === "details" && (
                    <div>
                      <h3 className="font-[family-name:var(--font-cormorant)] text-xl font-semibold text-[#5A2026] sm:text-2xl">
                        Pooja Samagri / Items List
                      </h3>
                      <div className="mt-4 overflow-hidden rounded-lg border border-[#E8DCD0] shadow-sm">
                        <table className="w-full table-fixed border-collapse text-[10px] sm:text-xs md:text-sm">
                          <thead>
                            <tr className="bg-[#7A1524] text-white">
                              <th className="w-[10%] sm:w-[8%] px-1 py-2 sm:px-3 sm:py-3 text-center font-medium">S.No</th>
                              <th className="w-[36%] sm:w-[36%] px-1.5 py-2 sm:px-4 sm:py-3 text-left font-medium">Name (English)</th>
                              <th className="w-[32%] sm:w-[34%] px-1.5 py-2 sm:px-4 sm:py-3 text-left font-medium">Name (Tamil)</th>
                              <th className="w-[22%] sm:w-[22%] px-1.5 py-2 sm:px-4 sm:py-3 text-right sm:text-left font-medium">Quantity</th>
                            </tr>
                          </thead>
                          <tbody>
                            {(dynamicItems ?? selectedRitual.items).map((item, index) => (
                              <tr
                                key={item.sno}
                                className={index % 2 === 0 ? "bg-white" : "bg-[#FBF5EC]"}
                              >
                                <td className="border-b border-[#EEE5D9] px-1 py-2 sm:px-3 sm:py-3 text-center text-[#7A6E65] align-top">{item.sno}.</td>
                                <td className="border-b border-[#EEE5D9] px-1.5 py-2 sm:px-4 sm:py-3 font-medium text-[#29231F] align-top break-words leading-tight">{item.english}</td>
                                <td className="border-b border-[#EEE5D9] px-1.5 py-2 sm:px-4 sm:py-3 text-[#5A4F46] align-top break-words leading-tight">{item.tamil}</td>
                                <td className="border-b border-[#EEE5D9] px-1.5 py-2 sm:px-4 sm:py-3 text-right sm:text-left font-semibold sm:font-normal text-[#91202B] sm:text-[#4B4540] align-top break-words">{item.quantity}</td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                      <div className="mt-4 flex gap-2 text-xs text-[#876B50]">
                        <Info size={15} className="mt-0.5 shrink-0 text-[#B08A45]" />
                        <span>
                          The items and quantities may vary slightly based on the priest&apos;s guidance and tradition.
                        </span>
                      </div>
                    </div>
                  )}

                  {/* PROCESS */}
                  {activeTab === "process" && (
                    <div>
                      <h3 className="font-[family-name:var(--font-cormorant)] text-2xl font-semibold text-[#5A2026]">
                        Pooja Process
                      </h3>
                      <div className="mt-6 space-y-4">
                        {selectedRitual.process.map((step, index) => (
                          <div key={step} className="flex gap-4 rounded-lg border border-[#E9DDC9] bg-white p-4">
                            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#F6EAD5] text-sm font-semibold text-[#7A202B]">
                              {index + 1}
                            </div>
                            <div className="flex items-center text-sm leading-6 text-[#4B4540]">
                              {step}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* BENEFITS */}
                  {activeTab === "benefits" && (
                    <div>
                      <h3 className="font-[family-name:var(--font-cormorant)] text-2xl font-semibold text-[#5A2026]">
                        Benefits of the Pooja
                      </h3>
                      <div className="mt-6 grid gap-4 sm:grid-cols-2">
                        {selectedRitual.benefits.map((benefit) => (
                          <div key={benefit} className="flex gap-3 rounded-lg border border-[#E9DDC9] bg-white p-5">
                            <Check size={19} className="mt-0.5 shrink-0 text-[#B08A45]" />
                            <p className="text-sm leading-6 text-[#4B4540]">{benefit}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* NOTES */}
                  {activeTab === "notes" && (
                    <div>
                      <h3 className="font-[family-name:var(--font-cormorant)] text-2xl font-semibold text-[#5A2026]">
                        Important Notes
                      </h3>
                      <div className="mt-6 space-y-4">
                        {selectedRitual.notes.map((note) => (
                          <div key={note} className="flex gap-3 rounded-lg bg-[#FBF5EC] p-5">
                            <Info size={19} className="mt-0.5 shrink-0 text-[#B08A45]" />
                            <p className="text-sm leading-6 text-[#4B4540]">{note}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                </div>
              </div>
            </div>

          </div>
        </section>
      )}


      {/* =====================================================
          CTA
      ===================================================== */}
      <section className="px-5 py-8 sm:px-8 lg:px-12">

        <div className="relative mx-auto flex max-w-[1400px] flex-col items-center justify-between gap-7 overflow-hidden rounded-xl border border-[#E8D5B5] bg-[#FFF8EC] px-7 py-8 sm:px-10 lg:flex-row">

          {/* Decorative pattern */}
          <div className="absolute -left-10 -top-10 h-40 w-40 rounded-full border border-[#B08A45]/20" />
          <div className="absolute -bottom-20 -right-10 h-48 w-48 rounded-full border border-[#B08A45]/20" />

          <div className="relative flex items-center gap-5">

            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-[#E5C98E] bg-white">
              <Phone
                size={23}
                strokeWidth={1.5}
                className="text-[#B87916]"
              />
            </div>

            <div>
              <h3 className="font-[family-name:var(--font-cormorant)] text-2xl font-semibold text-[#5A2026]">
                Have Questions?
              </h3>

              <p className="mt-1 text-sm text-[#5B514A]">
                Our team is here to help you!
              </p>
            </div>

          </div>

          <a
            href="/contact"
            className="group relative inline-flex h-14 items-center gap-4 rounded-lg bg-[#7A1524] px-9 text-sm font-semibold text-white transition-all duration-300 hover:bg-[#5A2026]"
          >
            {data.enquireText || "Enquire Now"}

            <ArrowRight
              size={18}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </a>

        </div>
      </section>

    </main>
  );
}


/* ============================================================
   BENEFIT ICON
============================================================ */

function Benefit({
  type,
  title,
}: {
  type: "peace" | "obstacles" | "family" | "success";
  title: string;
}) {
  const icons = {
    peace: Sparkles,
    obstacles: Check,
    family: Gift,
    success: Star,
  };

  const Icon = icons[type];

  return (
    <div className="text-center">

      <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full border border-[#E9D8BA] bg-[#FFF9EF]">
        <Icon
          size={24}
          strokeWidth={1.3}
          className="text-[#C48117]"
        />
      </div>

      <p className="mx-auto mt-3 max-w-[130px] text-xs font-medium leading-5 text-[#29231F]">
        {title}
      </p>

    </div>
  );
}

/* ============================================================
   RITUAL ICON (icon-only, for clickable ritual list buttons)
============================================================ */

function RitualIcon({
  type,
  active,
}: {
  type: "peace" | "obstacles" | "family" | "success";
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
      className={active ? "text-[#D4B978]" : "text-[#C48117]"}
    />
  );
}