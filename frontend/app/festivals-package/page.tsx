"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useRef, useEffect } from "react";
import {
  ChevronLeft,
  ChevronRight,
  ArrowRight,
  ShieldCheck,
  PackageCheck,
  Flame,
  Clock,
  HeartHandshake,
  Sun,
  Layers,
  Gift,
  List,
  Star,
  Info,
  Check,
  Sparkles,
  Phone,
} from "lucide-react";

export type PackageItem = {
  sno: number;
  english: string;
  tamil: string;
  quantity: string;
};

export type FestivalPackageData = {
  id: string;
  name: string;
  date: string;
  month: string;
  image: string;
  introImage: string;
  description: string;
  slug: string;
  price: string;
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
};

const festivalPackages: FestivalPackageData[] = [
  {
    id: "new-year-festival",
    name: "New Year Festival",
    date: "01",
    month: "JAN",
    image: "/images/festival-hero.jpg",
    introImage: "/images/festival-hero.jpg",
    description: "Welcome the new year with divine blessings, fresh beginnings and prosperity prayers.",
    slug: "new-year-festival",
    price: "₹2,999",
    introTitle: "New Year Special Pooja & Blessings Package",
    introText:
      "Start the new year with divine grace and positive energy. Our New Year pooja package invokes blessings for health, happiness, prosperity and success throughout the coming year, performed with traditional Vedic rituals.",
    benefits: [
      { icon: "success", title: "Prosperous New Beginnings" },
      { icon: "peace", title: "Peace & Positivity" },
      { icon: "family", title: "Family Well-being" },
      { icon: "obstacles", title: "Removes Past Year's Negativity" },
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
      "Cleanse the pooja altar and decorate with fresh flowers and rangoli.",
      "Perform Sankalpam invoking blessings for the new year ahead.",
      "Offer flowers, turmeric, kumkum and light camphor deeparadhana.",
      "Recite prayers for health, prosperity and family harmony.",
      "Distribute prasadham and share new year greetings with family.",
    ],
    benefitsDetails: [
      "Invokes positive energy and auspicious beginnings for the year ahead.",
      "Removes lingering negativity from the previous year.",
      "Strengthens family bonds through shared devotion and celebration.",
      "Sets a spiritually grounded tone for personal and professional growth.",
    ],
    notes: [
      "Best performed early morning on January 1st as per Panchangam timings.",
      "All samagri items are freshly packed and ready to use.",
    ],
  },
  {
    id: "pongal",
    name: "Pongal",
    date: "01",
    month: "JAN",
    image: "/images/pongal.jpg",
    introImage: "/images/pongal.jpg",
    description: "Thanksgiving harvest festival offering gratitude to Lord Surya, Mother Earth and cattle.",
    slug: "pongal",
    price: "₹3,299",
    introTitle: "Traditional South Indian Pongal & Sankranti Package",
    introText:
      "Pongal is the beloved ancient Tamil harvest festival thanking the Sun God (Surya Bhagavan), nature, and farm animals for life-sustaining sustenance. Our package provides authentic traditional clay/brass pot decorations, sugarcane, raw harvest rice, jaggery, and complete solar worship samagri.",
    benefits: [
      { icon: "family", title: "Harvest of Joy & Health" },
      { icon: "success", title: "Agricultural Abundance" },
      { icon: "peace", title: "Sun God (Surya) Blessings" },
      { icon: "obstacles", title: "Prosperity Year-Round" },
    ],
    items: [
      { sno: 1, english: "Traditional Hand-painted Pongal Paanai (Clay Pot)", tamil: "மண் பொங்கல் பானை", quantity: "1 No" },
      { sno: 2, english: "Fresh Turmeric Plant & Ginger Plant with leaves", tamil: "மஞ்சள் கொத்து & இஞ்சி கொத்து", quantity: "2 Bunches" },
      { sno: 3, english: "Fresh Harvest Raw Rice (Pacharisi)", tamil: "புதிய பச்சரிசி", quantity: "1 kg" },
      { sno: 4, english: "Pure Organic Jaggery (Vellam)", tamil: "பாகு வெல்லம்", quantity: "1 kg" },
      { sno: 5, english: "Cashews, Raisins, Cardamom & Nutmeg", tamil: "முந்திரி, திராட்சை, ஏலக்காய், ஜாதிக்காய்", quantity: "1 Box" },
      { sno: 6, english: "Fresh Sugarcane (Karumbu)", tamil: "செங்கரும்பு", quantity: "2 Pieces" },
      { sno: 7, english: "Cow Milk, Pure Cow Ghee", tamil: "பசு நெய்", quantity: "200 ml" },
      { sno: 8, english: "Vibrant Kolam / Rangoli Rice Flour", tamil: "கோலமாவு & காவி", quantity: "1 Pack" },
      { sno: 9, english: "Surya Gayatri & Aditya Hrudayam Sloka Sheet", tamil: "ஆதித்ய ஹ்ருதயம்", quantity: "1 Set" },
      { sno: 10, english: "Banana Leaf & Pooja Tamboolam", tamil: "வாழை இலை & வெற்றிலை பாக்கு", quantity: "1 Set" },
    ],
    process: [
      "Draw beautiful traditional chariot / sun kolams in an open courtyard facing the rising Sun.",
      "Tie the fresh turmeric plant around the neck of the decorated Pongal pot.",
      "Boil fresh milk and water; as it overflows, chant 'Pongalo Pongal!' with family cheers.",
      "Add fresh harvest rice, jaggery syrup, ghee-roasted cashews, and aromatic spices.",
      "Offer the delicious Sakkarai Pongal and Ven Pongal on fresh banana leaves to Surya Bhagavan.",
      "Perform Surya Namaskaram, wave camphor arathi, and feast together in communal happiness.",
    ],
    benefitsDetails: [
      "Brings radiant health, vitality, eye-health, and positive energy blessed by Surya Deva.",
      "Ensures continuous food security, agricultural prosperity, and business growth.",
      "Fosters gratitude, family togetherness, and reverence for Mother Nature.",
    ],
    notes: [
      "Prepare pongal in an open space where the morning sun rays fall directly onto the pot.",
      "Includes sacred thread to tie the turmeric sprout securely.",
    ],
  },
  {
    id: "maatu-pongal",
    name: "Maatu Pongal",
    date: "16",
    month: "JAN",
    image: "/images/pongal.jpg",
    introImage: "/images/pongal.jpg",
    description: "Honoring cattle with gratitude, colourful decorations and traditional prayers on the third day of Pongal.",
    slug: "maatu-pongal",
    price: "₹2,799",
    introTitle: "Maattu Pongal - Cattle Worship Pooja Package",
    introText:
      "Maattu Pongal celebrates the bond between farmers and their cattle, offering gratitude to bulls and cows for their support in agriculture. Our package includes all items for decorating and honoring cattle with traditional rituals.",
    benefits: [
      { icon: "family", title: "Gratitude to Cattle" },
      { icon: "success", title: "Agricultural Prosperity" },
      { icon: "peace", title: "Rural Harmony" },
      { icon: "obstacles", title: "Protection of Livestock" },
    ],
    items: [
      { sno: 1, english: "Colourful Bead & Bell Garlands for Cattle", tamil: "மணி மாலைகள்", quantity: "2 Sets" },
      { sno: 2, english: "Turmeric & Kumkum", tamil: "மஞ்சள் & குங்குமம்", quantity: "1 Packet" },
      { sno: 3, english: "Fresh Flower Garlands", tamil: "பூ மாலை", quantity: "2 Nos" },
      { sno: 4, english: "Sugarcane & Banana", tamil: "கரும்பு & வாழைப்பழம்", quantity: "1 Set" },
      { sno: 5, english: "Camphor & Arathi Items", tamil: "கற்பூரம் & ஆரத்தி பொருட்கள்", quantity: "1 Set" },
      { sno: 6, english: "Cooked Pongal for Cattle Offering", tamil: "பொங்கல் நைவேத்தியம்", quantity: "1 Set" },
    ],
    process: [
      "Bathe and decorate cattle with turmeric, kumkum and colourful garlands.",
      "Adorn horns with paint and bells; drape fresh flower garlands.",
      "Offer cooked Pongal, sugarcane and bananas to the cattle with gratitude.",
      "Perform camphor arathi around the decorated cattle.",
      "Take cattle in a small procession around the village or home, chanting devotional songs.",
    ],
    benefitsDetails: [
      "Strengthens the sacred bond between farmers and their livestock.",
      "Invokes blessings for continued agricultural abundance.",
      "Preserves traditional rural customs and community harmony.",
    ],
    notes: [
      "Traditionally performed on the third day of the Pongal festival.",
      "Ensure cattle are handled gently and safely during decoration.",
    ],
  },
  {
    id: "telugu-new-year",
    name: "Telugu New Year",
    date: "30",
    month: "MAR",
    image: "/images/festival-hero.jpg",
    introImage: "/images/festival-hero.jpg",
    description: "Ugadi celebrations welcoming the Telugu New Year with Panchanga Sravanam and traditional prayers.",
    slug: "telugu-new-year",
    price: "₹3,099",
    introTitle: "Ugadi - Telugu New Year Pooja Package",
    introText:
      "Ugadi marks the beginning of the Telugu New Year, celebrated with Panchanga Sravanam (almanac reading), Ugadi Pachadi, and prayers for a prosperous year ahead. Our package includes all essential items for a traditional Ugadi celebration.",
    benefits: [
      { icon: "success", title: "New Year Prosperity" },
      { icon: "peace", title: "Balance in Life's Flavors" },
      { icon: "family", title: "Family Togetherness" },
      { icon: "obstacles", title: "Clarity for the Year Ahead" },
    ],
    items: [
      { sno: 1, english: "Neem Flowers & Mango Pieces", tamil: "வேப்பம்பூ & மாங்காய் துண்டுகள்", quantity: "1 Set" },
      { sno: 2, english: "Jaggery & Tamarind", tamil: "வெல்லம் & புளி", quantity: "1 Set" },
      { sno: 3, english: "Panchangam (Almanac) Book", tamil: "பஞ்சாங்கம்", quantity: "1 No" },
      { sno: 4, english: "Turmeric, Kumkum & Sandalwood", tamil: "மஞ்சள், குங்குமம், சந்தனம்", quantity: "1 Set" },
      { sno: 5, english: "Fresh Mango Leaves for Toran", tamil: "மா தளிர் தோரணம்", quantity: "1 Set" },
      { sno: 6, english: "Camphor & Incense Sticks", tamil: "கற்பூரம் & அகர்பத்தி", quantity: "1 Pack" },
    ],
    process: [
      "Decorate the entrance with fresh mango leaf toranam and rangoli.",
      "Prepare Ugadi Pachadi with neem, jaggery, tamarind and mango symbolizing life's flavors.",
      "Perform Sankalpam and offer prayers for the new year.",
      "Listen to Panchanga Sravanam for the year's predictions.",
      "Share Ugadi Pachadi and prasadham with family and neighbors.",
    ],
    benefitsDetails: [
      "Prepares the mind to accept both joys and sorrows of life with equanimity.",
      "Invokes clarity and direction for the year ahead through Panchanga Sravanam.",
      "Strengthens community and family bonds through shared traditions.",
    ],
    notes: [
      "Panchanga Sravanam is traditionally read by a priest or elder in the family.",
      "Ugadi Pachadi ingredients may vary slightly based on regional customs.",
    ],
  },
  {
    id: "gokulaastami",
    name: "Gokulaastami",
    date: "26",
    month: "AUG",
    image: "/images/kalasam_banner.jpg",
    introImage: "/images/kalasam_banner.jpg",
    description: "Celebrate the divine birth of Lord Krishna with sweet delicacies, butter offerings and devotional songs.",
    slug: "gokulaastami",
    price: "₹3,199",
    introTitle: "Sri Krishna Janmashtami & Gokulaastami Pooja Kit",
    introText:
      "Gokulaastami commemorates the birth of Lord Krishna, the embodiment of divine love, bliss, and protection. From drawing the baby Krishna feet with rice paste to preparing Seedai, Murukku, and fresh churned butter naivedyam, our kit has every traditional element.",
    benefits: [
      { icon: "family", title: "Child Blessings (Santhana Bhagyam)" },
      { icon: "peace", title: "Divine Love & Joy" },
      { icon: "success", title: "Wisdom & Gita Grace" },
      { icon: "obstacles", title: "Overcomes Hardships" },
    ],
    items: [
      { sno: 1, english: "Rice Flour for Krishna Footprint Kolam", tamil: "அரிசி மாவு (கிருஷ்ணர் பாதம்)", quantity: "500 gms" },
      { sno: 2, english: "Fresh Butter (Vennai) Clay Cup", tamil: "வெண்ணெய் & மண் சட்டி", quantity: "1 Set" },
      { sno: 3, english: "Aval (Poha), Jaggery & Honey", tamil: "அவல், வெல்லம், தேன்", quantity: "1 Box" },
      { sno: 4, english: "Peacock Feather (Mayil Thogai)", tamil: "மயில் தோகை", quantity: "2 Nos" },
      { sno: 5, english: "Tulsi Leaves (Thiruthuzhai)", tamil: "துளசி தளம்", quantity: "1 Bunch" },
      { sno: 6, english: "Fragrant Flowers (Parijatham / Jasmine)", tamil: "மல்லிகை & பாரிஜாதம்", quantity: "1 Garland" },
      { sno: 7, english: "Santhana Gopala Stotram & Geeta Book", tamil: "சந்தான கோபால ஸ்தோத்திரம்", quantity: "1 No" },
      { sno: 8, english: "Diya Oil, Wicks, Dhoop & Camphor", tamil: "பூஜை எண்ணெய், கற்பூரம்", quantity: "1 Set" },
    ],
    process: [
      "Draw little baby Krishna footprints entering from main door to pooja room using rice paste.",
      "Decorate the Krishna idol with peacock feather, flute, and fresh fragrant tulsi garlands.",
      "Prepare Seedai, Murukku, Aval Payasam, and arrange fresh white butter in small pots.",
      "Recite Vishnu Sahasranamam, Krishna Ashtothram, and Madhurashtakam in the evening.",
      "Perform midnight arathi marking Krishna's birth moment and distribute sweet prasadham.",
    ],
    benefitsDetails: [
      "Bestows offspring (Santhana Bhagyam) and protects children's health and happiness.",
      "Infuses your home with pure joy, unconditional love, and spiritual light.",
      "Removes fear, anxiety, and creates inner peace through Krishna consciousness.",
    ],
    notes: [
      "Pooja is celebrated at Rohini Nakshatra and Ashtami Thithi as per traditional Panchangam.",
    ],
  },
  {
    id: "vinayagarchaturthi",
    name: "Vinayagarchadhurthi",
    date: "07",
    month: "SEP",
    image: "/images/ganesh-chaturthi2.jpg",
    introImage: "/images/ganesh-chaturthi.jpg",
    description: "Invoke blessings of Lord Ganesha for new beginnings, obstacle removal and prosperity.",
    slug: "vinayagarchaturthi",
    price: "₹3,499",
    introTitle: "Auspicious Vinayagar Chathurthi Pooja Kit & Rituals",
    introText:
      "Vinayagar Chathurthi celebrates the birth of Lord Ganesha, the remover of all obstacles and harbinger of wisdom and prosperity. Our complete package includes pure clay idol offerings, fresh durva grass, modak samagri, sacred veda mantras, and every required item for a divine home celebration.",
    benefits: [
      { icon: "obstacles", title: "Removes All Obstacles" },
      { icon: "success", title: "Wisdom & Prosperity" },
      { icon: "family", title: "Auspicious Beginnings" },
      { icon: "peace", title: "Peace & Harmony" },
    ],
    items: [
      { sno: 1, english: "Clay Ganesha Idol (Eco-friendly)", tamil: "மண் விநாயகர் சிலை", quantity: "1 No" },
      { sno: 2, english: "Fresh Durva Grass (Arugampul)", tamil: "அருகம்புல் கட்டு", quantity: "1 Bundle" },
      { sno: 3, english: "Pure Turmeric Powder", tamil: "மஞ்சள் பொடி", quantity: "100 gms" },
      { sno: 4, english: "Divine Kumkum", tamil: "தாழம்பூ குங்குமம்", quantity: "50 gms" },
      { sno: 5, english: "Sandalwood Paste & Blocks", tamil: "சந்தனம்", quantity: "1 Box" },
      { sno: 6, english: "Akshatha (Sacred Rice)", tamil: "அட்சதை", quantity: "100 gms" },
      { sno: 7, english: "Organic Camphor & Arathi Diya", tamil: "பச்சைக் கற்பூரம்", quantity: "50 gms" },
      { sno: 8, english: "Traditional Dhoop & Incense Sticks", tamil: "சாம்பிராணி & ஊதுபத்தி", quantity: "1 Pack" },
      { sno: 9, english: "Pure Cow Ghee & Diya Wicks", tamil: "பசு நெய் & திரி", quantity: "200 ml" },
      { sno: 10, english: "Modak / Kozhukattai Pooja Samagri", tamil: "கொழுக்கட்டை பூஜை பொருட்கள்", quantity: "1 Set" },
      { sno: 11, english: "Panchamrutham Ingredients Set", tamil: "பஞ்சாமிர்த பொருட்கள்", quantity: "1 Set" },
      { sno: 12, english: "Betel Leaves & Areca Nuts (Vethalai Paakku)", tamil: "வெற்றிலை பாக்கு", quantity: "12 Sets" },
      { sno: 13, english: "Sacred Thread (Poonal / Raksha)", tamil: "பூணூல் & காப்பு கயிறு", quantity: "1 Set" },
      { sno: 14, english: "Fresh Pooja Flower Garland", tamil: "பூ மாலை", quantity: "1 No" },
    ],
    process: [
      "Cleanse and decorate the pooja altar with vibrant rangoli and fresh mango leaves.",
      "Install the eco-friendly Lord Ganesha idol facing East or North on a wooden peetam.",
      "Perform Avahana, Sankalpam, and offer sacred water, panchamrutham, and sandal paste.",
      "Adorn Lord Ganesha with fragrant flowers, sacred red flowers, and fresh Durva grass.",
      "Recite Ganapathi Atharvashirsha, 108 Ashtothra Shatanamavali, and offer 21 Modaks.",
      "Perform Maha Deeparadhana, chant mangala arathi, and distribute prasadham with family.",
    ],
    benefitsDetails: [
      "Eliminates hindrances in education, career, business, and major life ventures.",
      "Invites positive vibrations, intellect, clarity, and auspicious energy into the household.",
      "Brings peace, unity, and harmonious relationships among family members.",
      "Bestows divine grace for initiating new milestones, home inaugurations, and contracts.",
    ],
    notes: [
      "Pooja is ideally performed during Madhyahna (midday) muhurtham as per Panchangam.",
      "Durva grass with 3 or 5 blades is considered most sacred to Lord Ganesha.",
      "All samagri items are 100% natural, authentic, and hygienically packed as per Vedic traditions.",
    ],
  },
  {
    id: "ayudha-pooja",
    name: "Ayudha Pooja",
    date: "11",
    month: "OCT",
    image: "/images/kalash.jpg",
    introImage: "/images/kalash.jpg",
    description: "Sanctifying tools of livelihood, books, musical instruments and vehicles with gratitude and divine grace.",
    slug: "ayudha-pooja",
    price: "₹2,799",
    introTitle: "Auspicious Ayudha Pooja & Vahana Pooja Package",
    introText:
      "Ayudha Pooja is the sacred tradition of honouring the tools, vehicles, machinery, computers, and instruments that earn our livelihood. By invoking Goddess Saraswati and Vishwakarma, we pray for continued safety, precision, productivity, and professional prosperity.",
    benefits: [
      { icon: "success", title: "Career & Business Growth" },
      { icon: "obstacles", title: "Vehicle Safety & Protection" },
      { icon: "family", title: "Academic & Creative Success" },
      { icon: "peace", title: "Divine Gratitude" },
    ],
    items: [
      { sno: 1, english: "Sandalwood Paste & Chandanam Tablets", tamil: "சந்தனம் பில்லைகள்", quantity: "1 Box" },
      { sno: 2, english: "Traditional Kumkum & Vibhuti", tamil: "குங்குமம் & விபூதி", quantity: "1 Set" },
      { sno: 3, english: "Pori, Pottukadala, Jaggery & Peanuts", tamil: "பொரி, பொட்டுகடலை, கடலை மிட்டாய்", quantity: "1 kg" },
      { sno: 4, english: "Fresh Lemons (Yelumichai)", tamil: "எலுமிச்சம்பழம்", quantity: "12 Nos" },
      { sno: 5, english: "Ash Gourd (Poosanikkai) for Drishti", tamil: "பூசணிக்காய் & குங்குமம்", quantity: "1 No" },
      { sno: 6, english: "Vahana Pooja Garland (for cars/bikes)", tamil: "வாகன மாலைகள்", quantity: "2 Nos" },
      { sno: 7, english: "Saraswati & Vishwakarma Photo Card", tamil: "சரஸ்வதி & விஸ்வகர்மா படம்", quantity: "1 No" },
      { sno: 8, english: "Sambrani, Camphor & Coconut Sets", tamil: "சாம்பிராணி, கற்பூரம், தேங்காய்", quantity: "1 Set" },
    ],
    process: [
      "Clean and polish all vehicles, laptops, books, machinery, and workspace tools thoroughly.",
      "Apply sandalwood dots and red kumkum pottu to each tool, vehicle, and instrument.",
      "Adorn vehicles with fresh flower garlands and place lemons under wheels.",
      "Place books and sacred tools before Goddess Saraswati; chant Saraswati Namasthubhyam.",
      "Perform camphor deeparadhana and break the auspicious Ash Gourd (Poosanikkai) to ward off evil eye.",
      "Distribute the delicious Pori-kadala prasadham to workers, colleagues, and family.",
    ],
    benefitsDetails: [
      "Protects vehicles from accidents, mechanical failures, and unexpected hazards.",
      "Blesses ventures with uninterrupted operational efficiency and financial profits.",
      "Wards off evil eye (Drishti) from offices, shops, factories, and residences.",
    ],
    notes: [
      "Tools should rest on this day and be resumed on Vijayadhasami with auspicious new work.",
    ],
  },
  {
    id: "vijayadasami",
    name: "Vijayadasami",
    date: "12",
    month: "OCT",
    image: "/images/navratri.jpg",
    introImage: "/images/navratri.jpg",
    description: "The victorious tenth day marking the triumph of good over evil, ideal for Vidyarambham and new beginnings.",
    slug: "vijayadasami",
    price: "₹3,399",
    introTitle: "Vijayadasami - Victory Day Pooja & Vidyarambham Package",
    introText:
      "Vijayadasami marks the triumph of good over evil and is considered the most auspicious day to start new ventures, education (Vidyarambham), and important undertakings. Our package includes everything needed for Ayudha visarjanam, Saraswati pooja, and Vidyarambham rituals.",
    benefits: [
      { icon: "success", title: "Auspicious New Beginnings" },
      { icon: "peace", title: "Victory Over Obstacles" },
      { icon: "family", title: "Educational Blessings" },
      { icon: "obstacles", title: "Removal of Negativity" },
    ],
    items: [
      { sno: 1, english: "Saraswati Photo & Books for Vidyarambham", tamil: "சரஸ்வதி படம் & புத்தகங்கள்", quantity: "1 Set" },
      { sno: 2, english: "Slate & Chalk (for children's Vidyarambham)", tamil: "பலகை & சுண்ணாம்பு கட்டி", quantity: "1 Set" },
      { sno: 3, english: "Turmeric, Kumkum & Sandalwood", tamil: "மஞ்சள், குங்குமம், சந்தனம்", quantity: "1 Set" },
      { sno: 4, english: "Fresh Flowers & Garland", tamil: "பூக்கள் & மாலை", quantity: "1 Set" },
      { sno: 5, english: "Camphor & Arathi Items", tamil: "கற்பூரம் & ஆரத்தி பொருட்கள்", quantity: "1 Set" },
      { sno: 6, english: "Betel Leaves & Areca Nuts", tamil: "வெற்றிலை பாக்கு", quantity: "9 Sets" },
    ],
    process: [
      "Perform Ayudha Visarjanam, returning tools and instruments worshipped on Ayudha Pooja day.",
      "Set up Saraswati altar with books, slate, and educational tools for Vidyarambham.",
      "Guide children to write their first letters as part of Vidyarambham ritual.",
      "Offer flowers, turmeric and kumkum to Goddess Saraswati with devotional chants.",
      "Perform camphor arathi and distribute prasadham to mark the victorious day.",
    ],
    benefitsDetails: [
      "Considered the most auspicious day to begin education, new skills, or ventures.",
      "Invokes the blessings of Goddess Saraswati for wisdom and learning.",
      "Marks the symbolic victory of good over evil, inspiring courage and confidence.",
    ],
    notes: [
      "Vidyarambham is especially significant for young children starting their educational journey.",
      "Considered an auspicious day for starting new businesses or projects without needing a separate muhurtham.",
    ],
  },
  {
    id: "deepavali",
    name: "Deepavali",
    date: "31",
    month: "OCT",
    image: "/images/diwali2.jpg",
    introImage: "/images/diwali.jpg",
    description: "Welcoming Goddess Lakshmi and Lord Kubera with radiant deepams, sweets and prosperity prayers.",
    slug: "deepavali",
    price: "₹3,999",
    introTitle: "Deepavali Maha Lakshmi & Kubera Pooja Package",
    introText:
      "Deepavali is the grand festival of lights, celebrating the triumph of light over darkness and the arrival of Goddess Mahalakshmi into pure, illuminated homes. Our curated kit contains everything required for the sacred early morning Ganga Snanam, Deepa Pooja, and auspicious Lakshmi Kubera worship.",
    benefits: [
      { icon: "success", title: "Abundance & Wealth" },
      { icon: "peace", title: "Joy & Illumination" },
      { icon: "family", title: "Good Fortune" },
      { icon: "obstacles", title: "Debt & Obstacle Relief" },
    ],
    items: [
      { sno: 1, english: "Handcrafted Terracotta & Brass Diyas", tamil: "அகல் விளக்குகள் & பித்தளை தீபம்", quantity: "16 Nos" },
      { sno: 2, english: "Lakshmi Kubera Yantra & Coins Set", tamil: "லட்சுமி குபேர நாணயங்கள்", quantity: "1 Set (108 Coins)" },
      { sno: 3, english: "Deepavali Herbal Legiyam & Oil Set", tamil: "தீபாவளி மருந்து & நல்லெண்ணெய்", quantity: "1 Box" },
      { sno: 4, english: "Pure Cow Ghee & Scented Deepam Oil", tamil: "தீப எண்ணெய் & பசு நெய்", quantity: "500 ml" },
      { sno: 5, english: "Pure Lotus Seeds / Kamal Gatta Mala", tamil: "தாமரை மணி மாலை", quantity: "1 No" },
      { sno: 6, english: "Kowdi (Sea Shells) & Gomti Chakra", tamil: "சோழி & கோமதி சக்கரம்", quantity: "11 Nos" },
      { sno: 7, english: "Vibrant Rangoli Powders (5 Colours)", tamil: "ரங்கோலி வண்ணப் பொடிகள்", quantity: "1 Pack" },
      { sno: 8, english: "Pooja Kumkum, Chandan & Turmeric", tamil: "குங்குமம், சந்தனம், மஞ்சள்", quantity: "1 Set" },
      { sno: 9, english: "Navarathna / Panchaloha Auspicious Coin", tamil: "லட்சுமி பொற்காசு", quantity: "1 No" },
      { sno: 10, english: "Dry Fruits & Sweet Naivedyam Samagri", tamil: "உலர் பழங்கள் நைவேத்தியம்", quantity: "250 gms" },
      { sno: 11, english: "Dhoop, Loban & Camphor", tamil: "தூபம், சாம்பிராணி, கற்பூரம்", quantity: "1 Box" },
    ],
    process: [
      "Wake during Brahma Muhurtham for the auspicious Ganga Snanam with medicinal herbal oil.",
      "Adorn thresholds with colourful rangolis, auspicious footprints of Lakshmi, and fresh flowers.",
      "Place Lakshmi Kubera idol or photo facing North/East, arrange 108 coins and lotus seeds.",
      "Chant Sri Suktham, Lakshmi Ashtothram, and Kubera Gayatri with devotion.",
      "Light 16+ deepams around the pooja room, main entrance, and balcony during Pradosha time.",
      "Offer sweets, kheer, fruits, and share Deepavali blessings with family and friends.",
    ],
    benefitsDetails: [
      "Draws everlasting wealth, debt clearance, and steady commercial success.",
      "Clears negative planetary influences and creates a warm, cheerful sanctuary at home.",
      "Brings good health, vitality, and protection from untimely distress.",
      "Strengthens familial bonds and spreads harmony and generous joy.",
    ],
    notes: [
      "Lakshmi pooja is best conducted in Sthira Lagna (Taurus/Leo ascendant) in the evening.",
      "Use only sesame oil or pure ghee for lighting clay diyas.",
    ],
  },
];

const featureBadges = [
  {
    icon: Flame,
    title: "Authentic Poojas",
    subtitle: "Performed by experienced priests",
  },
  {
    icon: PackageCheck,
    title: "Curated Packages",
    subtitle: "With packed samagri for every festival",
  },
  {
    icon: ShieldCheck,
    title: "Trusted & Reliable",
    subtitle: "Followed by tradition with accurate rituals",
  },
  {
    icon: Sun,
    title: "Divine Blessings",
    subtitle: "Invite peace, prosperity and happiness",
  },
];

const whyChooseUs = [
  {
    icon: Flame,
    title: "Traditional & Authentic",
    description: "Poojas performed as per Vedic rituals.",
  },
  {
    icon: Clock,
    title: "Timely & Hassle-Free",
    description: "We take care of everything, you focus on devotion.",
  },
  {
    icon: Layers,
    title: "For Every Need",
    description: "Festivals, special occasions and personal prayers.",
  },
  {
    icon: HeartHandshake,
    title: "Blessings that Matter",
    description: "Invoking peace, health, prosperity and happiness.",
  },
];

export default function FestivalPackagePage() {
  const API_BASE = "http://localhost:3001";

  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const detailsSectionRef = useRef<HTMLElement>(null);
  const [selectedFestival, setSelectedFestival] = useState<FestivalPackageData>(festivalPackages[0]);
  const [activeTab, setActiveTab] = useState<"details" | "process" | "benefits" | "notes">("details");

  const [liveItems, setLiveItems] = useState<PackageItem[]>(festivalPackages[0].items);
  const [itemsLoading, setItemsLoading] = useState(false);

 // Set selected festival based on URL hash and listen to hashchange
useEffect(() => {
  const handleHash = () => {
    if (typeof window === "undefined") return;
    const rawHash = window.location.hash.replace("#", "").toLowerCase().trim();
    if (!rawHash) return;

    const match = festivalPackages.find(
      (f) => f.id.toLowerCase() === rawHash
    );

    if (match) {
      setSelectedFestival(match);
      setActiveTab("details");
      setTimeout(() => {
        if (detailsSectionRef.current) {
          const topOffset = detailsSectionRef.current.getBoundingClientRect().top + window.scrollY - 100;
          window.scrollTo({ top: topOffset, behavior: "smooth" });
        }
      }, 120);
    }
  };

  handleHash();
  window.addEventListener("hashchange", handleHash);
  return () => window.removeEventListener("hashchange", handleHash);
}, []);

  // Fetch live items for the selected festival from the backend
  useEffect(() => {
    let cancelled = false;

    async function loadItems() {
      setItemsLoading(true);

      try {
        const res = await fetch(`${API_BASE}/festivals-packages/${selectedFestival.id}`);

        if (!res.ok) {
          throw new Error("Failed to load items");
        }

        const data = await res.json();

        if (!cancelled) {
          const mapped: PackageItem[] = data.map((row: any) => ({
            sno: row.sno,
            english: row.name_english,
            tamil: row.name_tamil ?? "",
            quantity: row.quantity ?? "",
          }));

          setLiveItems(mapped.length > 0 ? mapped : selectedFestival.items);
        }
      } catch {
        if (!cancelled) {
          setLiveItems(selectedFestival.items);
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
  }, [selectedFestival.id]);

  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const scrollAmount = 340;
      scrollContainerRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  const handleSelectFestival = (fest: FestivalPackageData) => {
    setSelectedFestival(fest);
    setActiveTab("details");
    if (detailsSectionRef.current) {
      const topOffset = detailsSectionRef.current.getBoundingClientRect().top + window.scrollY - 100;
      window.scrollTo({ top: topOffset, behavior: "smooth" });
    }
  };

  return (
    <main className="min-h-screen bg-[#FDFBF7] pt-[90px]">
      {/* ================= HERO BANNER ================= */}
      <section className="relative min-h-[520px] w-full overflow-hidden bg-[#24120E] sm:min-h-[580px] lg:min-h-[640px]">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/images/festival-hero.jpg"
            alt="Celebrate Every Festival"
            fill
            priority
            className="object-cover object-center opacity-75"
            sizes="100vw"
          />
          {/* Subtle warm festive gradient overlays */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#1F0C08] via-[#1F0C08]/60 to-[#1F0C08]/40" />
        </div>

        {/* Content */}
        <div className="relative z-10 mx-auto flex min-h-[520px] max-w-5xl flex-col items-center justify-center px-6 py-20 text-center sm:min-h-[580px] sm:px-10 lg:min-h-[640px]">
          {/* Decorative Top Accent */}
          <div className="mb-4 flex items-center justify-center gap-3">
            <span className="h-px w-10 bg-[#D4B978]/70" />
            <span className="text-xs text-[#E5C77A]">✦</span>
            <span className="h-px w-10 bg-[#D4B978]/70" />
          </div>

          {/* Heading */}
          <h1 className="font-[family-name:var(--font-cormorant)] text-4xl font-semibold tracking-wide text-[#FFFDF8] sm:text-5xl md:text-6xl lg:text-7xl">
            Celebrate Every Festival
            <br />
            <span className="text-[#F3D78A]">with Devotion &amp; Tradition</span>
          </h1>

          {/* Divider */}
          <div className="my-5 flex items-center justify-center gap-3 opacity-90">
            <span className="h-px w-14 bg-gradient-to-r from-transparent via-[#E5C77A] to-transparent" />
            <span className="text-sm text-[#E5C77A]">❖</span>
            <span className="h-px w-14 bg-gradient-to-r from-transparent via-[#E5C77A] to-transparent" />
          </div>

          {/* Subtitle */}
          <p className="max-w-2xl text-sm leading-relaxed text-[#F3EAD8]/90 sm:text-base md:text-lg">
            Festivals are the soul of our culture. Worship, celebrate and receive divine blessings with our specially curated pooja packages.
          </p>

          {/* CTA Button */}
          <div className="mt-8">
            <a
              href="#upcoming-festivals"
              className="inline-flex items-center gap-2 rounded-full bg-[#E5C77A] px-8 py-3.5 text-xs font-bold tracking-wider text-[#3D1418] shadow-lg transition-all duration-300 hover:bg-[#F3D78A] hover:shadow-xl hover:scale-105 active:scale-95 sm:text-sm"
            >
              <span>Explore Festival Poojas</span>
              <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </section>

      {/* ================= 4 FEATURE HIGHLIGHTS STRIP ================= */}
      <section className="relative z-20 mx-auto -mt-10 max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl border border-[#E9DDC9] bg-[#FFFDF9] p-6 shadow-[0_10px_35px_rgba(60,30,20,0.06)] backdrop-blur-sm sm:p-8">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
            {featureBadges.map((badge, idx) => {
              const IconComponent = badge.icon;
              return (
                <div
                  key={idx}
                  className="flex items-center gap-4 transition-transform duration-300 hover:translate-y-[-2px]"
                >
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-[#D4B978]/60 bg-[#FAF4E8] text-[#91202B] shadow-sm">
                    <IconComponent size={20} strokeWidth={1.8} />
                  </div>
                  <div>
                    <h3 className="font-[family-name:var(--font-cormorant)] text-lg font-semibold text-[#4A171E] sm:text-xl">
                      {badge.title}
                    </h3>
                    <p className="text-xs leading-snug text-[#7A6E65]">
                      {badge.subtitle}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ================= UPCOMING FESTIVALS SECTION ================= */}
      <section id="upcoming-festivals" className="px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <div className="mx-auto max-w-7xl">
          {/* Section Header */}
          <div className="text-center">
            <div className="mb-2 flex items-center justify-center gap-3">
              <span className="h-px w-10 bg-[#B08A45]" />
              <span className="text-xs text-[#B08A45]">✦</span>
              <span className="h-px w-10 bg-[#B08A45]" />
            </div>
            <h2 className="font-[family-name:var(--font-cormorant)] text-3xl font-bold tracking-tight text-[#4A171E] sm:text-4xl lg:text-5xl">
              Upcoming Festivals
            </h2>
            <div className="mx-auto mt-3 h-0.5 w-12 bg-[#B08A45]/40" />
          </div>

          {/* Slider Container with Navigation */}
          <div className="relative mt-12">
            {/* Left Nav Button */}
            <button
              onClick={() => scroll("left")}
              aria-label="Previous festivals"
              className="absolute -left-3 top-1/2 z-20 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-[#E9DDC9] bg-[#FFFDF9] text-[#4A171E] shadow-md transition-all duration-300 hover:bg-[#4A171E] hover:text-white sm:-left-5"
            >
              <ChevronLeft size={20} />
            </button>

            {/* Right Nav Button */}
            <button
              onClick={() => scroll("right")}
              aria-label="Next festivals"
              className="absolute -right-3 top-1/2 z-20 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-[#E9DDC9] bg-[#FFFDF9] text-[#4A171E] shadow-md transition-all duration-300 hover:bg-[#4A171E] hover:text-white sm:-right-5"
            >
              <ChevronRight size={20} />
            </button>

            {/* Cards Scrollable Row */}
            <div
              ref={scrollContainerRef}
              className="flex gap-6 overflow-x-auto pb-6 pt-2 scrollbar-none scroll-smooth sm:gap-6"
              style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
            >
              {festivalPackages.map((festival) => {
                const isCurrent = selectedFestival.id === festival.id;
                return (
                  <div
                    key={festival.id}
                    className={`group flex w-[260px] shrink-0 flex-col overflow-hidden rounded-2xl border transition-all duration-300 sm:w-[280px] ${
                      isCurrent
                        ? "border-[#91202B] bg-[#FFFDF9] shadow-[0_12px_30px_rgba(145,32,43,0.15)] ring-2 ring-[#91202B]/20"
                        : "border-[#E9DDC9] bg-[#FFFDF9] shadow-[0_4px_20px_rgba(60,30,20,0.04)] hover:-translate-y-1.5 hover:shadow-[0_12px_30px_rgba(60,30,20,0.1)]"
                    }`}
                  >
                    {/* Image with Date Badge */}
                    <div className="relative h-60 w-full overflow-hidden bg-[#24120E]">
                      <Image
                        src={festival.image}
                        alt={festival.name}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                        sizes="(max-width: 640px) 260px, 280px"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/20" />

                      {/* Date Badge */}
                      <div className="absolute left-3.5 top-3.5 flex flex-col items-center justify-center rounded-lg bg-[#5A1C22]/95 px-2.5 py-1.5 text-white shadow-md backdrop-blur-sm">
                        <span className="text-base font-bold leading-none tracking-tight">
                          {festival.date}
                        </span>
                        <span className="text-[9px] font-semibold uppercase tracking-wider text-[#E5C77A]">
                          {festival.month}
                        </span>
                      </div>
                    </div>

                    {/* Card Content */}
                    <div className="flex flex-1 flex-col justify-between p-5 text-center">
                      <div>
                        <h3 className="font-[family-name:var(--font-cormorant)] text-2xl font-semibold text-[#4A171E] transition-colors duration-200 group-hover:text-[#91202B]">
                          {festival.name}
                        </h3>
                        <p className="mt-2 text-xs leading-relaxed text-[#756B62]">
                          {festival.description}
                        </p>
                      </div>

                      {/* Action Link */}
                      <div className="mt-6 border-t border-[#F1E7D7] pt-4">
                        <button
                          type="button"
                          onClick={() => handleSelectFestival(festival)}
                          className="inline-flex items-center gap-1.5 text-xs font-semibold tracking-wide text-[#91202B] transition-colors duration-200 hover:text-[#5A1C22] group-hover:underline"
                        >
                          <span>View Pooja Packages</span>
                          <ArrowRight size={13} className="transition-transform duration-300 group-hover:translate-x-1" />
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ================= WHY CELEBRATE WITH US ================= */}
      <section className="bg-[#FAF6EE] px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <div className="mx-auto max-w-6xl">
          {/* Section Header */}
          <div className="text-center">
            <div className="mb-2 flex items-center justify-center gap-3">
              <span className="h-px w-10 bg-[#B08A45]" />
              <span className="text-xs text-[#B08A45]">✦</span>
              <span className="h-px w-10 bg-[#B08A45]" />
            </div>
            <h2 className="font-[family-name:var(--font-cormorant)] text-3xl font-bold tracking-tight text-[#4A171E] sm:text-4xl lg:text-5xl">
              Why Celebrate Festivals with Us?
            </h2>
            <div className="mx-auto mt-3 h-0.5 w-12 bg-[#B08A45]/40" />
          </div>

          {/* 4 Feature Columns */}
          <div className="mt-14 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {whyChooseUs.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="flex flex-col items-center text-center transition-transform duration-300 hover:translate-y-[-4px]"
                >
                  <div className="flex h-16 w-16 items-center justify-center rounded-full border border-[#D4B978]/60 bg-[#FFFDF9] text-[#91202B] shadow-sm">
                    <Icon size={26} strokeWidth={1.7} />
                  </div>
                  <h3 className="mt-5 font-[family-name:var(--font-cormorant)] text-2xl font-semibold text-[#4A171E]">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-xs leading-relaxed text-[#756B62]">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* =====================================================
          SELECTED FESTIVAL PACKAGE DETAILS (CONSUMER PACKAGE TABLE FORMAT)
      ===================================================== */}
      <section ref={detailsSectionRef} id="package-details-table" className="scroll-mt-24 bg-white px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <div className="mx-auto max-w-7xl">
          {/* Section Header */}
          <div className="mb-10 text-center">
            <div className="mb-2 flex items-center justify-center gap-3">
              <span className="h-px w-10 bg-[#B08A45]" />
              <span className="text-[11px] font-semibold uppercase tracking-[0.3em] text-[#B08A45]">
                {selectedFestival.name}
              </span>
              <span className="h-px w-10 bg-[#B08A45]" />
            </div>

            <h2 className="font-[family-name:var(--font-cormorant)] text-3xl font-bold text-[#4A171E] sm:text-4xl lg:text-5xl">
              Pooja Package Details
            </h2>

            <div className="mx-auto mt-4 flex items-center justify-center gap-2">
              <span className="h-px w-12 bg-[#B08A45]" />
              <span className="h-1.5 w-1.5 rotate-45 bg-[#B08A45]" />
              <span className="h-px w-12 bg-[#B08A45]" />
            </div>
          </div>

          {/* Quick Festival Switcher Pills */}
          <div className="mb-12 flex flex-wrap items-center justify-center gap-2 sm:gap-3">
            {festivalPackages.map((fest) => {
              const active = fest.id === selectedFestival.id;
              return (
                <button
                  key={fest.id}
                  onClick={() => handleSelectFestival(fest)}
                  className={`rounded-full px-4 py-2 text-xs font-semibold tracking-wide transition-all duration-300 sm:px-5 sm:py-2.5 sm:text-sm ${
                    active
                      ? "bg-[#5A1C22] text-white shadow-md"
                      : "border border-[#E9DDC9] bg-[#FAF6EE] text-[#5A4F46] hover:bg-[#F1E7D7] hover:text-[#4A171E]"
                  }`}
                >
                  {fest.name}
                </button>
              );
            })}
          </div>

          {/* Introduction & Highlights Banner for Selected Festival */}
          <div className="mb-12 grid items-center gap-8 rounded-2xl border border-[#E8D5B5] bg-[#FFFCF7] p-6 sm:p-8 lg:grid-cols-[1fr_360px] lg:gap-12 lg:p-10">
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#B08A45]">
                ABOUT THIS FESTIVAL POOJA
              </p>
              <h3 className="mt-2 font-[family-name:var(--font-cormorant)] text-2xl font-bold text-[#4A171E] sm:text-3xl lg:text-4xl">
                {selectedFestival.introTitle}
              </h3>
              <div className="my-4 h-0.5 w-12 bg-[#B08A45]/50" />
              <p className="text-sm leading-7 text-[#4B4540] sm:text-base">
                {selectedFestival.introText}
              </p>

              {/* 4 Benefits Pills */}
              <div className="mt-6 grid grid-cols-2 gap-3 sm:gap-4">
                {selectedFestival.benefits.map((b, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-2.5 rounded-lg border border-[#E9DDC9] bg-white px-3 py-2.5 shadow-sm"
                  >
                    <span className="text-sm text-[#91202B]">✦</span>
                    <span className="text-xs font-medium text-[#4A171E] sm:text-sm">{b.title}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl">
              <Image
                src={selectedFestival.introImage}
                alt={selectedFestival.name}
                fill
                className="object-cover"
                sizes="360px"
              />
              {/* Soft blending gradients to merge image edges into the card background */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#FFFCF7]/60 via-transparent to-transparent" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#FFFCF7]/70 via-transparent to-[#FFFCF7]/30" />
              <div className="absolute inset-0 bg-gradient-to-l from-[#FFFCF7]/40 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 rounded-lg bg-[#5A1C22]/85 px-3.5 py-1.5 text-xs font-semibold text-white shadow-lg backdrop-blur-sm">
                Starting at {selectedFestival.price}
              </div>
            </div>
          </div>

          {/* Details Card with Tabs & Full Table */}
          <div className="overflow-hidden rounded-2xl border border-[#E8D5B5] bg-[#FFFCF7] shadow-lg">
            <div className="grid lg:grid-cols-[260px_1fr]">
              {/* SIDEBAR TABS */}
              <div className="bg-[#5A1C22] p-4 lg:p-6">
                <div className="flex gap-2 overflow-x-auto scrollbar-none [scrollbar-width:none] [&::-webkit-scrollbar]:hidden lg:block lg:space-y-2.5">
                  <button
                    type="button"
                    onClick={() => setActiveTab("details")}
                    className={`flex min-w-max items-center gap-3 rounded-xl px-4 py-3.5 text-left text-sm font-medium transition-all duration-300 lg:w-full ${
                      activeTab === "details"
                        ? "bg-[#7A202B] text-white shadow-md"
                        : "text-white/80 hover:bg-white/10 hover:text-white"
                    }`}
                  >
                    <Gift size={18} className={activeTab === "details" ? "text-[#D4B978]" : "text-white/70"} />
                    <span>Package Details (Items)</span>
                    {activeTab === "details" && <span className="ml-auto hidden text-[#D4B978] lg:block">›</span>}
                  </button>

                  <button
                    type="button"
                    onClick={() => setActiveTab("process")}
                    className={`flex min-w-max items-center gap-3 rounded-xl px-4 py-3.5 text-left text-sm font-medium transition-all duration-300 lg:w-full ${
                      activeTab === "process"
                        ? "bg-[#7A202B] text-white shadow-md"
                        : "text-white/80 hover:bg-white/10 hover:text-white"
                    }`}
                  >
                    <List size={18} className={activeTab === "process" ? "text-[#D4B978]" : "text-white/70"} />
                    <span>Pooja Process</span>
                    {activeTab === "process" && <span className="ml-auto hidden text-[#D4B978] lg:block">›</span>}
                  </button>

                  <button
                    type="button"
                    onClick={() => setActiveTab("benefits")}
                    className={`flex min-w-max items-center gap-3 rounded-xl px-4 py-3.5 text-left text-sm font-medium transition-all duration-300 lg:w-full ${
                      activeTab === "benefits"
                        ? "bg-[#7A202B] text-white shadow-md"
                        : "text-white/80 hover:bg-white/10 hover:text-white"
                    }`}
                  >
                    <Star size={18} className={activeTab === "benefits" ? "text-[#D4B978]" : "text-white/70"} />
                    <span>Benefits</span>
                    {activeTab === "benefits" && <span className="ml-auto hidden text-[#D4B978] lg:block">›</span>}
                  </button>

                  <button
                    type="button"
                    onClick={() => setActiveTab("notes")}
                    className={`flex min-w-max items-center gap-3 rounded-xl px-4 py-3.5 text-left text-sm font-medium transition-all duration-300 lg:w-full ${
                      activeTab === "notes"
                        ? "bg-[#7A202B] text-white shadow-md"
                        : "text-white/80 hover:bg-white/10 hover:text-white"
                    }`}
                  >
                    <Info size={18} className={activeTab === "notes" ? "text-[#D4B978]" : "text-white/70"} />
                    <span>Important Notes</span>
                    {activeTab === "notes" && <span className="ml-auto hidden text-[#D4B978] lg:block">›</span>}
                  </button>
                </div>

                {/* Package Quick Booking Box inside sidebar */}
                <div className="mt-8 hidden rounded-xl border border-white/15 bg-black/20 p-4 text-white lg:block">
                  <span className="text-[11px] uppercase tracking-wider text-[#D4B978]">Starting At</span>
                  <div className="font-[family-name:var(--font-cormorant)] text-3xl font-bold text-[#F3D78A]">
                    {selectedFestival.price}
                  </div>
                  <p className="mt-1 text-xs text-white/75">Includes all packed samagri and home delivery.</p>
                  <a
                    href="/contact"
                    className="mt-4 flex w-full items-center justify-center rounded-lg bg-[#E5C77A] py-2.5 text-xs font-bold tracking-wider text-[#3D1418] transition hover:bg-[#F3D78A]"
                  >
                    BOOK NOW
                  </a>
                </div>
              </div>

              {/* CONTENT AREA */}
              <div className="min-w-0 p-2 sm:p-7 lg:p-9">
                {/* TAB 1: ITEMS TABLE */}
                {activeTab === "details" && (
                  <div>
                    <div className="flex flex-col justify-between gap-1 sm:flex-row sm:items-center">
                      <h3 className="font-[family-name:var(--font-cormorant)] text-xl font-bold text-[#4A171E] sm:text-3xl">
                        Pooja Samagri / Items List ({selectedFestival.name})
                      </h3>
                      <span className="text-[11px] sm:text-xs font-semibold text-[#91202B]">
                        Total Items: {liveItems.length}
                      </span>
                    </div>

                    <div className="mt-4 overflow-hidden rounded-xl border border-[#E8DCD0] shadow-sm">
                      <table className="w-full table-fixed border-collapse text-[10px] sm:text-xs md:text-sm">
                        <thead>
                          <tr className="bg-[#7A1524] text-white">
                            <th className="w-[10%] sm:w-[8%] px-1 py-2 sm:px-3 sm:py-3.5 text-center font-semibold">S.No</th>
                            <th className="w-[36%] sm:w-[36%] px-1.5 py-2 sm:px-4 sm:py-3.5 text-left font-semibold">Name (English)</th>
                            <th className="w-[32%] sm:w-[34%] px-1.5 py-2 sm:px-4 sm:py-3.5 text-left font-semibold">Name (Tamil)</th>
                            <th className="w-[22%] sm:w-[22%] px-1.5 py-2 sm:px-4 sm:py-3.5 text-right sm:text-left font-semibold">Quantity</th>
                          </tr>
                        </thead>
                        <tbody>
                          {itemsLoading ? (
                            <tr>
                              <td colSpan={4} className="py-4 px-3 text-center text-[#876B50]">
                                Loading items...
                              </td>
                            </tr>
                          ) : (
                            liveItems.map((item, index) => (
                              <tr
                                key={item.sno}
                                className={index % 2 === 0 ? "bg-white hover:bg-[#FAF6EE]" : "bg-[#FBF5EC] hover:bg-[#F5EDE0]"}
                              >
                                <td className="border-b border-[#EEE5D9] px-2 py-3 sm:px-4 sm:py-3.5 font-medium text-[#7A6E65] align-top">
                                  {item.sno}.
                                </td>
                                <td className="border-b border-[#EEE5D9] px-2 py-3 sm:px-4 sm:py-3.5 font-medium text-[#29231F] align-top break-words">
                                  <div>{item.english}</div>
                                  <div className="text-[11px] text-[#8C6D4F] sm:hidden mt-0.5">{item.tamil}</div>
                                </td>
                                <td className="hidden sm:table-cell border-b border-[#EEE5D9] px-4 py-3.5 text-[#5A4F46] align-top">
                                  {item.tamil}
                                </td>
                                <td className="border-b border-[#EEE5D9] px-2 py-3 sm:px-4 sm:py-3.5 text-right sm:text-left align-top">
                                  <span className="inline-block rounded bg-[#7A1524]/10 px-1.5 py-0.5 text-[11px] font-semibold text-[#7A1524] sm:bg-transparent sm:p-0 sm:font-semibold sm:text-[#91202B]">
                                    {item.quantity}
                                  </span>
                                </td>
                              </tr>
                            ))
                          )}
                        </tbody>
                      </table>
                    </div>

                    <div className="mt-4 flex items-center gap-2 text-xs text-[#876B50]">
                      <Info size={16} className="shrink-0 text-[#B08A45]" />
                      <span>
                        The items and quantities are prepared according to standard Vedic traditions and priest recommendations. Customizations available upon request.
                      </span>
                    </div>
                  </div>
                )}

                {/* TAB 2: PROCESS */}
                {activeTab === "process" && (
                  <div>
                    <h3 className="font-[family-name:var(--font-cormorant)] text-2xl font-bold text-[#4A171E] sm:text-3xl">
                      Step-by-Step Pooja Process ({selectedFestival.name})
                    </h3>

                    <div className="mt-6 space-y-3.5">
                      {selectedFestival.process.map((step, index) => (
                        <div
                          key={index}
                          className="flex gap-4 rounded-xl border border-[#E9DDC9] bg-white p-4 shadow-sm transition-all hover:border-[#D4B978]"
                        >
                          <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#F6EAD5] text-sm font-bold text-[#7A202B]">
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

                {/* TAB 3: BENEFITS */}
                {activeTab === "benefits" && (
                  <div>
                    <h3 className="font-[family-name:var(--font-cormorant)] text-2xl font-bold text-[#4A171E] sm:text-3xl">
                      Divine Blessings &amp; Significance
                    </h3>

                    <div className="mt-6 grid gap-4 sm:grid-cols-2">
                      {selectedFestival.benefitsDetails.map((benefit, idx) => (
                        <div
                          key={idx}
                          className="flex gap-3 rounded-xl border border-[#E9DDC9] bg-white p-5 shadow-sm transition-all hover:border-[#D4B978]"
                        >
                          <Check size={20} className="mt-0.5 shrink-0 text-[#B08A45]" />
                          <p className="text-sm leading-6 text-[#4B4540]">{benefit}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* TAB 4: NOTES */}
                {activeTab === "notes" && (
                  <div>
                    <h3 className="font-[family-name:var(--font-cormorant)] text-2xl font-bold text-[#4A171E] sm:text-3xl">
                      Important Guidelines &amp; Muhurtham Notes
                    </h3>

                    <div className="mt-6 space-y-4">
                      {selectedFestival.notes.map((note, idx) => (
                        <div
                          key={idx}
                          className="flex gap-3 rounded-xl border border-[#E9DDC9] bg-[#FAF6EE] p-5"
                        >
                          <Info size={20} className="mt-0.5 shrink-0 text-[#B08A45]" />
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

      {/* ================= BOTTOM CTA BANNER ================= */}
      <section className="px-4 pb-20 pt-10 sm:px-6 sm:pb-24 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-[#3B1115] via-[#5C1B23] to-[#3B1115] p-6 text-center text-white shadow-2xl sm:p-10 lg:p-12">
            {/* Background Decorative Lighting */}
            <div className="pointer-events-none absolute -left-12 -top-12 h-64 w-64 rounded-full bg-[#E5C77A]/10 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-12 -right-12 h-64 w-64 rounded-full bg-[#E5C77A]/10 blur-3xl" />

            {/* Inner Content Layout with Left & Right Images */}
            <div className="relative z-10 flex flex-col items-center justify-between gap-6 md:flex-row md:gap-0 lg:gap-0">
              {/* Left Diya Image — blended into banner */}
              <div className="relative hidden h-44 w-44 shrink-0 overflow-hidden md:block lg:h-52 lg:w-52">
                <Image
                  src="/images/diya_banner.jpg"
                  alt="Sacred Diya"
                  fill
                  className="object-cover"
                  sizes="208px"
                />
                {/* Blend into dark banner background */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-[#5C1B23]" />
                <div className="absolute inset-0 bg-gradient-to-l from-transparent via-transparent to-[#3B1115]" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#3B1115]/80 via-transparent to-[#3B1115]/80" />
              </div>

              {/* Center Content */}
              <div className="max-w-3xl flex-1 text-center">
                <h2 className="font-[family-name:var(--font-cormorant)] text-2xl font-bold tracking-tight text-[#FFFDF8] sm:text-3xl md:text-4xl lg:text-[44px] xl:text-5xl whitespace-nowrap">
                  Make Every Festival More Meaningful
                </h2>

                <p className="mx-auto mt-3 max-w-xl text-xs leading-relaxed text-[#F3EAD8]/90 sm:text-sm md:text-base">
                  Choose the perfect pooja and invite divine blessings into your life.
                </p>

                <div className="mt-6 sm:mt-8">
                  <a
                    href="#upcoming-festivals"
                    className="inline-flex items-center gap-2 rounded-full bg-[#E5C77A] px-8 py-3.5 text-xs font-bold tracking-wider text-[#3D1418] shadow-lg transition-all duration-300 hover:bg-[#F3D78A] hover:scale-105 active:scale-95 sm:text-sm"
                  >
                    <span>Explore All Festival Poojas</span>
                    <ArrowRight size={16} />
                  </a>
                </div>
              </div>

              {/* Right Kalash Image — blended into banner */}
              <div className="relative hidden h-44 w-44 shrink-0 overflow-hidden md:block lg:h-52 lg:w-52">
                <Image
                  src="/images/brassplate.jpeg"
                  alt="Sacred Kalash"
                  fill
                  className="object-cover"
                  sizes="208px"
                />
                {/* Blend into dark banner background */}
                <div className="absolute inset-0 bg-gradient-to-l from-transparent via-transparent to-[#5C1B23]" />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-[#3B1115]" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#3B1115]/80 via-transparent to-[#3B1115]/80" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}