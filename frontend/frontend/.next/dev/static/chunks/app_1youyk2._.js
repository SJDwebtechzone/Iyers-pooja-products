(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/app/components/faq.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>FAQSection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/plus.mjs [app-client] (ecmascript) <export default as Plus>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$minus$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Minus$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/minus.mjs [app-client] (ecmascript) <export default as Minus>");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
const faqs = [
    {
        question: "What types of pooja products are available?",
        answer: "We offer a wide range of pooja essentials, including samagri, lamps, incense, diyas, idols, sacred items, and other traditional pooja products."
    },
    {
        question: "Are the products available individually or as pooja kits?",
        answer: "Selected products are available individually, while some are also available as complete pooja kits for specific rituals and occasions."
    },
    {
        question: "How can I know which products I need for my pooja?",
        answer: "Product details and descriptions will help you understand the purpose and usage of each item. You can also contact us if you need assistance."
    },
    {
        question: "Are the products authentic and traditionally sourced?",
        answer: "Yes. We aim to provide authentic and traditionally sourced pooja products suitable for your spiritual practices and rituals."
    },
    {
        question: "Do you provide delivery for pooja products?",
        answer: "Yes, delivery is available for eligible products and locations. Delivery details will be shown during the ordering process."
    },
    {
        question: "Can I return or exchange a product?",
        answer: "Return and exchange eligibility depends on the product and its condition. Please check our return policy for complete details."
    }
];
function FAQSection() {
    _s();
    const [openIndex, setOpenIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const toggleFAQ = (index)=>{
        setOpenIndex(openIndex === index ? null : index);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "bg-[#faf8f3] py-24 px-6",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mx-auto max-w-6xl",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mb-14 text-center",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "mb-3 block text-sm font-medium uppercase tracking-[0.25em] text-[#a47b43]",
                            children: "FAQ"
                        }, void 0, false, {
                            fileName: "[project]/app/components/faq.tsx",
                            lineNumber: 52,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "text-4xl font-semibold tracking-tight text-[#241d17] md:text-5xl",
                            children: "Frequently Asked Questions"
                        }, void 0, false, {
                            fileName: "[project]/app/components/faq.tsx",
                            lineNumber: 56,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "mx-auto mt-5 max-w-2xl text-base leading-7 text-[#746b61]",
                            children: "Find answers to common questions about our pooja products, availability, delivery, and more."
                        }, void 0, false, {
                            fileName: "[project]/app/components/faq.tsx",
                            lineNumber: 60,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/components/faq.tsx",
                    lineNumber: 51,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mx-auto max-w-4xl divide-y divide-[#ded7cd] border-y border-[#ded7cd]",
                    children: faqs.map((faq, index)=>{
                        const isOpen = openIndex === index;
                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    onClick: ()=>toggleFAQ(index),
                                    className: "flex w-full items-center justify-between gap-6 py-6 text-left",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: `text-lg font-medium transition-colors duration-300 ${isOpen ? "text-[#a47b43]" : "text-[#2b241e]"}`,
                                            children: faq.question
                                        }, void 0, false, {
                                            fileName: "[project]/app/components/faq.tsx",
                                            lineNumber: 78,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[#d8cfc3] text-[#8d6a3d]",
                                            children: isOpen ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$minus$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Minus$3e$__["Minus"], {
                                                size: 17,
                                                strokeWidth: 1.5
                                            }, void 0, false, {
                                                fileName: "[project]/app/components/faq.tsx",
                                                lineNumber: 88,
                                                columnNumber: 23
                                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__["Plus"], {
                                                size: 17,
                                                strokeWidth: 1.5
                                            }, void 0, false, {
                                                fileName: "[project]/app/components/faq.tsx",
                                                lineNumber: 90,
                                                columnNumber: 23
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/app/components/faq.tsx",
                                            lineNumber: 86,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/components/faq.tsx",
                                    lineNumber: 73,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: `grid transition-all duration-300 ease-in-out ${isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`,
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "overflow-hidden",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "max-w-3xl pb-6 pr-14 text-[15px] leading-7 text-[#746b61]",
                                            children: faq.answer
                                        }, void 0, false, {
                                            fileName: "[project]/app/components/faq.tsx",
                                            lineNumber: 103,
                                            columnNumber: 21
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/faq.tsx",
                                        lineNumber: 102,
                                        columnNumber: 19
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/app/components/faq.tsx",
                                    lineNumber: 95,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, faq.question, true, {
                            fileName: "[project]/app/components/faq.tsx",
                            lineNumber: 72,
                            columnNumber: 15
                        }, this);
                    })
                }, void 0, false, {
                    fileName: "[project]/app/components/faq.tsx",
                    lineNumber: 67,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/components/faq.tsx",
            lineNumber: 48,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/app/components/faq.tsx",
        lineNumber: 47,
        columnNumber: 5
    }, this);
}
_s(FAQSection, "6UZ+mnQ9sKC06YXeyhrfGXQCT10=");
_c = FAQSection;
var _c;
__turbopack_context__.k.register(_c, "FAQSection");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/components/packages.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>PackagesSection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-right.mjs [app-client] (ecmascript) <export default as ArrowRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-check.mjs [app-client] (ecmascript) <export default as CheckCircle2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/sparkles.mjs [app-client] (ecmascript) <export default as Sparkles>");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$data$2f$packagesData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/data/packagesData.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
const API_BASE = "http://localhost:3001";
function PackagesSection() {
    _s();
    const sectionRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [activeIndex, setActiveIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [isManualScroll, setIsManualScroll] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isDesktop, setIsDesktop] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [packagesData, setPackagesData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$data$2f$packagesData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["packagesData"]);
    // Fetch dashboard-uploaded package card images and override defaults
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "PackagesSection.useEffect": ()=>{
            fetch(`${API_BASE}/home-package-images`).then({
                "PackagesSection.useEffect": (res)=>{
                    if (!res.ok) throw new Error();
                    return res.json();
                }
            }["PackagesSection.useEffect"]).then({
                "PackagesSection.useEffect": (images)=>{
                    if (!images || images.length === 0) return;
                    setPackagesData({
                        "PackagesSection.useEffect": (prev)=>prev.map({
                                "PackagesSection.useEffect": (pkg)=>{
                                    const match = images.find({
                                        "PackagesSection.useEffect.match": (img)=>img.id === pkg.id
                                    }["PackagesSection.useEffect.match"]);
                                    return match ? {
                                        ...pkg,
                                        image: `/images/${match.image_filename}`
                                    } : pkg;
                                }
                            }["PackagesSection.useEffect"])
                    }["PackagesSection.useEffect"]);
                }
            }["PackagesSection.useEffect"]).catch({
                "PackagesSection.useEffect": ()=>{
                // keep static fallback images on failure
                }
            }["PackagesSection.useEffect"]);
        }
    }["PackagesSection.useEffect"], []);
    // Track window size for clean desktop vs mobile transform switching
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "PackagesSection.useEffect": ()=>{
            const handleResize = {
                "PackagesSection.useEffect.handleResize": ()=>setIsDesktop(window.innerWidth >= 1024)
            }["PackagesSection.useEffect.handleResize"];
            handleResize();
            window.addEventListener("resize", handleResize);
            return ({
                "PackagesSection.useEffect": ()=>window.removeEventListener("resize", handleResize)
            })["PackagesSection.useEffect"];
        }
    }["PackagesSection.useEffect"], []);
    // Auto-cycle through all 5 cards every 3.5 seconds
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "PackagesSection.useEffect": ()=>{
            const interval = setInterval({
                "PackagesSection.useEffect.interval": ()=>{
                    if (!isManualScroll) {
                        setActiveIndex({
                            "PackagesSection.useEffect.interval": (prev)=>(prev + 1) % packagesData.length
                        }["PackagesSection.useEffect.interval"]);
                    }
                }
            }["PackagesSection.useEffect.interval"], 3500);
            return ({
                "PackagesSection.useEffect": ()=>clearInterval(interval)
            })["PackagesSection.useEffect"];
        }
    }["PackagesSection.useEffect"], [
        isManualScroll
    ]);
    // Track scroll progress inside pinned section (Card 1 -> 5)
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "PackagesSection.useEffect": ()=>{
            const handleScroll = {
                "PackagesSection.useEffect.handleScroll": ()=>{
                    if (!sectionRef.current || isManualScroll) return;
                    const rect = sectionRef.current.getBoundingClientRect();
                    const totalScrollable = rect.height - window.innerHeight;
                    if (totalScrollable <= 0) return;
                    const scrolled = -rect.top;
                    const progress = Math.max(0, Math.min(1, scrolled / totalScrollable));
                    const newIndex = Math.min(packagesData.length - 1, Math.floor(progress * packagesData.length));
                    setActiveIndex(newIndex);
                }
            }["PackagesSection.useEffect.handleScroll"];
            window.addEventListener("scroll", handleScroll, {
                passive: true
            });
            handleScroll();
            return ({
                "PackagesSection.useEffect": ()=>window.removeEventListener("scroll", handleScroll)
            })["PackagesSection.useEffect"];
        }
    }["PackagesSection.useEffect"], [
        isManualScroll
    ]);
    const selectCard = (index)=>{
        setActiveIndex(index);
        setIsManualScroll(true);
        setTimeout(()=>setIsManualScroll(false), 700);
    };
    const activePackage = packagesData[activeIndex];
    // Precise fan geometry with 65% heavy overlap and requested rotations (-14° to 12°)
    const getFanCardTransform = (index)=>{
        const isActive = index === activeIndex;
        const rotations = [
            -14,
            -7,
            -2,
            5,
            12
        ];
        const xOffsets = [
            -80,
            -40,
            0,
            40,
            80
        ];
        const yOffsets = [
            16,
            5,
            0,
            4,
            14
        ];
        const rot = rotations[index];
        const x = xOffsets[index];
        const y = yOffsets[index];
        if (isActive) {
            return {
                desktopTransform: `translate3d(${x}px, ${y - 16}px, 0px) rotate(0deg) scale(1.04)`,
                mobileTransform: `translate3d(${x * 0.45}px, ${y * 0.4 - 10}px, 0px) rotate(0deg) scale(1.03)`,
                zIndex: 50,
                opacity: 1
            };
        }
        const distFromActive = Math.abs(index - activeIndex);
        return {
            desktopTransform: `translate3d(${x}px, ${y}px, 0px) rotate(${rot}deg) scale(0.96)`,
            mobileTransform: `translate3d(${x * 0.45}px, ${y * 0.4}px, 0px) rotate(${rot * 0.75}deg) scale(0.92)`,
            zIndex: 30 - distFromActive,
            opacity: 0.92
        };
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: "packages-section",
        ref: sectionRef,
        className: "relative w-full bg-[#FAF6F0] text-[#29231F] border-t border-[#E8DFC9]",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "relative w-full lg:min-h-[300vh]",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative flex w-full flex-col justify-center px-6 py-12 sm:px-10 lg:sticky lg:top-[90px] lg:min-h-[calc(100vh-90px)] lg:max-h-[760px] lg:px-16 lg:pt-14 lg:pb-8",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mx-auto mb-6 max-w-2xl text-center lg:mb-8",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mb-2 inline-flex items-center gap-2 rounded-full border border-[#D4B978]/60 bg-[#F4EBD9]/60 px-4 py-1 text-xs font-semibold uppercase tracking-[0.25em] text-[#5A2026]",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__["Sparkles"], {
                                        size: 13,
                                        className: "text-[#B08A45]"
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/packages.tsx",
                                        lineNumber: 136,
                                        columnNumber: 15
                                    }, this),
                                    "Pooja Offerings & Packages"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/components/packages.tsx",
                                lineNumber: 135,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "font-[family-name:var(--font-cormorant)] text-3xl font-bold tracking-tight text-[#5A2026] sm:text-4xl lg:text-5xl",
                                children: "Sacred Packages for Every Occasion"
                            }, void 0, false, {
                                fileName: "[project]/app/components/packages.tsx",
                                lineNumber: 140,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "mt-1.5 text-xs text-[#6E6359] sm:text-sm",
                                children: "Scroll down to view our 5 package cards. All 5 cards remain visible in the hand."
                            }, void 0, false, {
                                fileName: "[project]/app/components/packages.tsx",
                                lineNumber: 144,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/components/packages.tsx",
                        lineNumber: 134,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mx-auto flex w-full max-w-7xl flex-col items-center gap-8 lg:flex-row lg:items-center lg:justify-between lg:gap-12",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "relative flex h-[320px] w-full items-center justify-center sm:h-[360px] lg:h-[400px] lg:w-[45%]",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "relative flex h-full w-full max-w-[420px] items-center justify-center",
                                    children: packagesData.map((pkg, index)=>{
                                        const isActive = index === activeIndex;
                                        const cardState = getFanCardTransform(index);
                                        const currentTransform = isDesktop ? cardState.desktopTransform : cardState.mobileTransform;
                                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            onClick: ()=>selectCard(index),
                                            style: {
                                                transform: currentTransform,
                                                zIndex: cardState.zIndex,
                                                opacity: cardState.opacity
                                            },
                                            className: `absolute top-1/2 left-1/2 -mt-[145px] -ml-[95px] h-[290px] w-[190px] cursor-pointer rounded-2xl border transition-all duration-500 ease-out sm:-mt-[170px] sm:-ml-[115px] sm:h-[340px] sm:w-[230px] lg:-mt-[185px] lg:-ml-[125px] lg:h-[370px] lg:w-[250px] ${isActive ? "border-[#B08A45] bg-[#FFFDF9] shadow-[0_16px_36px_rgba(90,32,38,0.25)] ring-2 ring-[#B08A45]" : "border-[#E1D5C2] bg-[#FAF3E7] shadow-md hover:border-[#B08A45]/70"}`,
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "relative flex h-full w-full flex-col overflow-hidden rounded-2xl p-3.5",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "mb-2 flex items-center justify-between",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: `rounded-full px-2.5 py-0.5 text-[10px] font-bold tracking-wider ${isActive ? "bg-[#5A2026] text-[#E5C77A]" : "bg-[#EDE4D2] text-[#5A2026]"}`,
                                                                children: [
                                                                    "0",
                                                                    index + 1
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/components/packages.tsx",
                                                                lineNumber: 182,
                                                                columnNumber: 27
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-[10px] font-semibold text-[#7A6E63] truncate max-w-[110px]",
                                                                children: pkg.category
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/components/packages.tsx",
                                                                lineNumber: 192,
                                                                columnNumber: 27
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/components/packages.tsx",
                                                        lineNumber: 181,
                                                        columnNumber: 25
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "relative flex-1 overflow-hidden rounded-xl border border-[#E6DBC6] bg-[#EAE0CD]",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                                src: pkg.image,
                                                                alt: pkg.title,
                                                                fill: true,
                                                                sizes: "(max-width: 768px) 190px, 250px",
                                                                className: `object-cover transition-transform duration-700 ${isActive ? "scale-105" : "scale-100 grayscale-[10%]"}`
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/components/packages.tsx",
                                                                lineNumber: 199,
                                                                columnNumber: 27
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/components/packages.tsx",
                                                                lineNumber: 210,
                                                                columnNumber: 27
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "absolute bottom-2.5 inset-x-2.5 text-white",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                        className: "text-[8px] font-semibold uppercase tracking-widest text-[#E5C77A]",
                                                                        children: pkg.subtitle
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/components/packages.tsx",
                                                                        lineNumber: 214,
                                                                        columnNumber: 29
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                                        className: "font-[family-name:var(--font-cormorant)] text-sm font-bold sm:text-base leading-tight",
                                                                        children: pkg.title
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/components/packages.tsx",
                                                                        lineNumber: 217,
                                                                        columnNumber: 29
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/components/packages.tsx",
                                                                lineNumber: 213,
                                                                columnNumber: 27
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/components/packages.tsx",
                                                        lineNumber: 198,
                                                        columnNumber: 25
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "mt-2.5 flex items-center justify-between text-[10px] font-bold",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: isActive ? "text-[#5A2026]" : "text-[#7A6E63]",
                                                                children: isActive ? "✦ Active Card" : "Card 0" + (index + 1)
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/components/packages.tsx",
                                                                lineNumber: 225,
                                                                columnNumber: 27
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-[#B08A45]",
                                                                children: isActive ? "Viewing" : "Click"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/components/packages.tsx",
                                                                lineNumber: 229,
                                                                columnNumber: 27
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/components/packages.tsx",
                                                        lineNumber: 224,
                                                        columnNumber: 25
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/components/packages.tsx",
                                                lineNumber: 178,
                                                columnNumber: 23
                                            }, this)
                                        }, pkg.id, false, {
                                            fileName: "[project]/app/components/packages.tsx",
                                            lineNumber: 163,
                                            columnNumber: 21
                                        }, this);
                                    })
                                }, void 0, false, {
                                    fileName: "[project]/app/components/packages.tsx",
                                    lineNumber: 154,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/components/packages.tsx",
                                lineNumber: 153,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex w-full flex-col justify-center lg:w-[48%]",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "animate-in fade-in slide-in-from-right-3 duration-400 rounded-3xl border border-[#E8DFC9] bg-[#FFFDF9] p-6 shadow-xl sm:p-8",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "mb-3 flex flex-wrap items-center gap-2.5",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "rounded-full bg-[#5A2026]/10 px-3.5 py-0.5 text-xs font-bold uppercase tracking-wider text-[#5A2026]",
                                                    children: activePackage.category
                                                }, void 0, false, {
                                                    fileName: "[project]/app/components/packages.tsx",
                                                    lineNumber: 249,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "rounded-full border border-[#B08A45]/40 bg-[#F8F4EC] px-3.5 py-0.5 text-xs font-semibold text-[#B08A45]",
                                                    children: activePackage.badge
                                                }, void 0, false, {
                                                    fileName: "[project]/app/components/packages.tsx",
                                                    lineNumber: 253,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/components/packages.tsx",
                                            lineNumber: 248,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "font-[family-name:var(--font-cormorant)] text-3xl font-bold text-[#5A2026] sm:text-4xl lg:text-5xl",
                                            children: activePackage.title
                                        }, void 0, false, {
                                            fileName: "[project]/app/components/packages.tsx",
                                            lineNumber: 259,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "mt-1 text-xs font-semibold tracking-wide text-[#B08A45] sm:text-sm",
                                            children: activePackage.subtitle
                                        }, void 0, false, {
                                            fileName: "[project]/app/components/packages.tsx",
                                            lineNumber: 264,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "mt-3 text-xs leading-relaxed text-[#544A42] sm:text-sm",
                                            children: activePackage.description
                                        }, void 0, false, {
                                            fileName: "[project]/app/components/packages.tsx",
                                            lineNumber: 269,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "my-5 h-px w-full bg-[#E9DDC9]"
                                        }, void 0, false, {
                                            fileName: "[project]/app/components/packages.tsx",
                                            lineNumber: 274,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                    className: "mb-3 text-[11px] font-bold uppercase tracking-[0.2em] text-[#7A6E63]",
                                                    children: "Included Package Offerings:"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/components/packages.tsx",
                                                    lineNumber: 278,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                    className: "grid grid-cols-1 gap-2.5 sm:grid-cols-2",
                                                    children: activePackage.features.map((feature, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                            className: "flex items-start gap-2 text-xs font-medium text-[#29231F] sm:text-sm",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__["CheckCircle2"], {
                                                                    size: 16,
                                                                    className: "mt-0.5 shrink-0 text-[#A71930]"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/components/packages.tsx",
                                                                    lineNumber: 288,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    children: feature
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/components/packages.tsx",
                                                                    lineNumber: 292,
                                                                    columnNumber: 25
                                                                }, this)
                                                            ]
                                                        }, i, true, {
                                                            fileName: "[project]/app/components/packages.tsx",
                                                            lineNumber: 284,
                                                            columnNumber: 23
                                                        }, this))
                                                }, void 0, false, {
                                                    fileName: "[project]/app/components/packages.tsx",
                                                    lineNumber: 282,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/components/packages.tsx",
                                            lineNumber: 277,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "mt-7 flex flex-wrap items-center gap-3.5 pt-1",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                    href: activePackage.href,
                                                    className: "inline-flex h-11 items-center justify-center gap-2 rounded-lg bg-[#A71930] px-6 text-xs font-semibold tracking-[0.1em] text-white shadow-md transition-all duration-300 hover:bg-[#7F1515] hover:scale-105",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            children: "EXPLORE THIS PACKAGE"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/components/packages.tsx",
                                                            lineNumber: 304,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__["ArrowRight"], {
                                                            size: 15
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/components/packages.tsx",
                                                            lineNumber: 305,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/components/packages.tsx",
                                                    lineNumber: 300,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                    href: "/contact",
                                                    className: "inline-flex h-11 items-center justify-center rounded-lg border border-[#B08A45] px-5 text-xs font-semibold tracking-[0.1em] text-[#5A2026] transition-all duration-300 hover:bg-[#5A2026] hover:text-white",
                                                    children: "CUSTOMIZE ORDER"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/components/packages.tsx",
                                                    lineNumber: 308,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/components/packages.tsx",
                                            lineNumber: 299,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, activePackage.id, true, {
                                    fileName: "[project]/app/components/packages.tsx",
                                    lineNumber: 243,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/components/packages.tsx",
                                lineNumber: 242,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/components/packages.tsx",
                        lineNumber: 150,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/components/packages.tsx",
                lineNumber: 131,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/app/components/packages.tsx",
            lineNumber: 129,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/app/components/packages.tsx",
        lineNumber: 123,
        columnNumber: 5
    }, this);
}
_s(PackagesSection, "RtlRhAmoAfqz2a8dOPXFR5xTjCQ=");
_c = PackagesSection;
var _c;
__turbopack_context__.k.register(_c, "PackagesSection");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/data/packagesData.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "corporatePoojaPackages",
    ()=>corporatePoojaPackages,
    "packagesData",
    ()=>packagesData
]);
const packagesData = [
    {
        id: "consumer-package",
        title: "Consumer Package",
        subtitle: "Essential Home Poojas & Daily Rituals",
        category: "Household & Family",
        description: "Thoughtfully curated complete pooja kits for everyday family rituals, Grihapravesam, Satyanarayana Vratam, and domestic well-being.",
        features: [
            "Pure Brass Pooja Utensils Set",
            "Organic Camphor & Pure Kumkum",
            "Fresh Garland & Mango Leaf Essentials",
            "Hand-crafted Herbal Incense & Diya Oils"
        ],
        badge: "Most Popular for Homes",
        href: "/consumer-package",
        image: "/images/banner.jpeg",
        accentColor: "#B08A45"
    },
    {
        id: "corporate-package",
        title: "Corporate Package",
        subtitle: "Office Invocations & Milestones",
        category: "Business & Enterprises",
        description: "Traditional Ayushya Homam and Lakshmi Kubera Poojas structured for office inaugurations, corporate milestones, and commercial prosperity.",
        features: [
            "Customized Executive Pooja Kits",
            "Vedic Scholar Pandit Arrangements",
            "Corporate Festive Gifting Hampers",
            "Complete Homa Kunda & Dravya Supplies"
        ],
        badge: "Tailored for Enterprises",
        href: "/corporate-package",
        image: "/images/banner.jpeg",
        accentColor: "#A71930"
    },
    {
        id: "temple-package",
        title: "Temple Package",
        subtitle: "Grand Devalaya Dravyas & Archanas",
        category: "Devalaya & Sanctuaries",
        description: "Bulk sacred offerings, pure A2 Cow Ghee, authentic herbs, and specialized dravyas for temple consecrations, Brahmotsavams, and Nitya Poojas.",
        features: [
            "Authentic Organic Yajna Dravyas",
            "High-grade A2 Cow Ghee & Samithu",
            "Specialized Temple Accessories",
            "Large-scale Bulk Supply Guarantee"
        ],
        badge: "Religious Trusts & Temples",
        href: "/temple",
        image: "/images/banner.jpeg",
        accentColor: "#5A2026"
    },
    {
        id: "overseas-package",
        title: "Overseas Temple Package",
        subtitle: "Global Customs-Cleared Pooja Supplies",
        category: "International Delivery",
        description: "Vacuum-sealed, quarantine-certified pooja materials dispatched worldwide to NRIs, global temples, and overseas cultural centers.",
        features: [
            "Customs & Quarantine Certified",
            "Vacuum-Sealed Longevity Packaging",
            "Express Global Air Logistics",
            "Comprehensive Sacred Dravya Sets"
        ],
        badge: "Worldwide Express Shipping",
        href: "/overseas",
        image: "/images/banner.jpeg",
        accentColor: "#B08A45"
    },
    {
        id: "festivals-package",
        title: "Festivals Package",
        subtitle: "Seasonal Festive Celebration Hampers",
        category: "Seasonal Celebrations",
        description: "All-in-one festive hampers for Vinayaka Chaturthi, Diwali, Navratri, Varalakshmi Vratam, and Pongal with step-by-step vidhi guidance.",
        features: [
            "Eco-Friendly Clay Deities",
            "Occasion-Specific Sacred Dravyas",
            "Step-by-step Pooja Vidhi Guide",
            "Traditional Organic Prasadam Supplies"
        ],
        badge: "Limited Festive Edition",
        href: "/festivals-package",
        image: "/images/banner.jpeg",
        accentColor: "#7F1515"
    }
];
const corporatePoojaPackages = [
    {
        id: "friday-poojas",
        name: "Friday Poojas",
        price: "₹2,999",
        image: "/images/kalash.jpg",
        description: "Friday Poojas are conducted weekly to invoke Goddess Mahalakshmi's blessings for prosperity, harmony and well-being in the workplace.",
        items: [
            {
                sno: 1,
                english: "Fresh Flowers & Garland",
                tamil: "பூக்கள் & மாலை",
                quantity: "1 Set"
            },
            {
                sno: 2,
                english: "Turmeric & Kumkum",
                tamil: "மஞ்சள் & குங்குமம்",
                quantity: "1 Packet"
            },
            {
                sno: 3,
                english: "Camphor & Incense Sticks",
                tamil: "கற்பூரம் & அகர்பத்தி",
                quantity: "1 Pack"
            },
            {
                sno: 4,
                english: "Betel Leaves & Areca Nuts",
                tamil: "வெற்றிலை பாக்கு",
                quantity: "9 Sets"
            },
            {
                sno: 5,
                english: "Fruits & Sweet Naivedyam",
                tamil: "பழங்கள் & நைவேத்தியம்",
                quantity: "1 Set"
            },
            {
                sno: 6,
                english: "Deepam Oil & Cotton Wicks",
                tamil: "தீப எண்ணெய் & திரி",
                quantity: "1 Small Bottle"
            }
        ],
        process: [
            {
                step: "01",
                title: "Deepa Prajwalanam",
                description: "Lighting the lamp and offering prayers to Goddess Lakshmi."
            },
            {
                step: "02",
                title: "Lakshmi Devi Archana",
                description: "Performing Lakshmi Devi Archana with flowers and traditional prayers."
            },
            {
                step: "03",
                title: "Naivedyam Samarpanam",
                description: "Offering fruits and sweets as Naivedyam."
            },
            {
                step: "04",
                title: "Aarthi & Prasadam",
                description: "Concluding the pooja with Aarthi and distribution of Prasadam."
            }
        ],
        benefits: [
            {
                title: "Weekly Renewal",
                description: "Creates a positive and peaceful atmosphere in the workplace."
            },
            {
                title: "Prosperity",
                description: "Performed seeking Goddess Lakshmi's blessings for prosperity."
            },
            {
                title: "Team Positivity",
                description: "Provides employees with a meaningful shared spiritual experience."
            }
        ],
        notes: [
            "Best performed in the morning.",
            "Can be scheduled as a recurring weekly service."
        ]
    },
    {
        id: "amavasai-poojas",
        name: "Amavasai Poojas",
        price: "₹3,499",
        image: "/images/kalash.jpg",
        description: "Amavasai Poojas are performed on the new moon day as a traditional observance seeking ancestral blessings and positive beginnings.",
        items: [
            {
                sno: 1,
                english: "Sesame Seeds",
                tamil: "எள்",
                quantity: "250 gms"
            },
            {
                sno: 2,
                english: "Darbai Grass",
                tamil: "தர்ப்பை புல்",
                quantity: "1 Bundle"
            },
            {
                sno: 3,
                english: "Black Til Oil",
                tamil: "எள் எண்ணெய்",
                quantity: "250 ml"
            },
            {
                sno: 4,
                english: "Turmeric & Kumkum",
                tamil: "மஞ்சள் & குங்குமம்",
                quantity: "1 Packet"
            },
            {
                sno: 5,
                english: "Camphor & Incense",
                tamil: "கற்பூரம் & அகர்பத்தி",
                quantity: "1 Pack"
            },
            {
                sno: 6,
                english: "Betel Leaves & Areca Nuts",
                tamil: "வெற்றிலை பாக்கு",
                quantity: "9 Sets"
            },
            {
                sno: 7,
                english: "Fruits & Naivedyam",
                tamil: "பழங்கள் & நைவேத்தியம்",
                quantity: "1 Set"
            }
        ],
        process: [
            {
                step: "01",
                title: "Amavasya Sankalpam",
                description: "Declaring the intention for the Amavasya observance."
            },
            {
                step: "02",
                title: "Traditional Offerings",
                description: "Performing the traditional offerings using sesame and water."
            },
            {
                step: "03",
                title: "Premises Cleansing",
                description: "Performing traditional cleansing of the premises."
            },
            {
                step: "04",
                title: "Aarthi & Prasadam",
                description: "Concluding the ceremony with Aarthi and Prasadam."
            }
        ],
        benefits: [
            {
                title: "Monthly Observance",
                description: "Provides a traditional monthly spiritual observance."
            },
            {
                title: "Ancestral Blessings",
                description: "Performed seeking blessings of ancestors."
            },
            {
                title: "Positive Beginning",
                description: "Marks the beginning of a new lunar cycle."
            }
        ],
        notes: [
            "Scheduled according to the Amavasya date.",
            "Specific rituals can be customized according to requirements."
        ]
    },
    {
        id: "ganapathy-homam",
        name: "Ganapathy Homam",
        price: "₹3,999",
        image: "/images/kalash.jpg",
        description: "A traditional Ganapathy Homam performed to invoke Lord Ganesha's blessings for removing obstacles, improving clarity and beginning important corporate activities on an auspicious note.",
        items: [
            {
                sno: 1,
                english: "Ganapathy Homam Samagri",
                tamil: "கணபதி ஹோமம் சாமக்ரி",
                quantity: "1 Set"
            },
            {
                sno: 2,
                english: "Navadhanyam",
                tamil: "நவதானியம்",
                quantity: "1 Set"
            },
            {
                sno: 3,
                english: "Homa Samithu",
                tamil: "ஹோம சமித்து",
                quantity: "1 Bundle"
            },
            {
                sno: 4,
                english: "Pure Cow Ghee",
                tamil: "சுத்தமான பசு நெய்",
                quantity: "500 ml"
            },
            {
                sno: 5,
                english: "Turmeric & Kumkum",
                tamil: "மஞ்சள் & குங்குமம்",
                quantity: "1 Packet"
            },
            {
                sno: 6,
                english: "Flowers & Garland",
                tamil: "பூக்கள் & மாலை",
                quantity: "1 Set"
            },
            {
                sno: 7,
                english: "Coconut & Fruits",
                tamil: "தேங்காய் & பழங்கள்",
                quantity: "1 Set"
            },
            {
                sno: 8,
                english: "Camphor & Incense",
                tamil: "கற்பூரம் & அகர்பத்தி",
                quantity: "1 Pack"
            }
        ],
        process: [
            {
                step: "01",
                title: "Sankalpam",
                description: "The priest begins the ceremony with Sankalpam for the organization."
            },
            {
                step: "02",
                title: "Ganapathy Avahanam",
                description: "Lord Ganesha is invoked through traditional prayers and offerings."
            },
            {
                step: "03",
                title: "Ganapathy Homam",
                description: "Sacred offerings are made into the homa fire with Vedic chanting."
            },
            {
                step: "04",
                title: "Purnahuthi & Aarthi",
                description: "The Homam concludes with Purnahuthi, Aarthi and Prasadam."
            }
        ],
        benefits: [
            {
                title: "Obstacle Removal",
                description: "Traditionally performed seeking Lord Ganesha's blessings before important activities."
            },
            {
                title: "Positive Environment",
                description: "Creates a spiritually positive atmosphere in the workplace."
            },
            {
                title: "Auspicious Beginning",
                description: "Ideal for inaugurations, new offices and important corporate milestones."
            }
        ],
        notes: [
            "Ideal for office inaugurations and new beginnings.",
            "Can be customized according to the size of the organization."
        ]
    },
    {
        id: "ayudha-pooja-vehicle-pooja",
        name: "Ayudha Pooja & Vehicle Pooja",
        price: "₹4,499",
        image: "/images/kalash.jpg",
        description: "Ayudha Pooja is performed for company vehicles, machinery, computers, tools and equipment.",
        items: [
            {
                sno: 1,
                english: "Lemon",
                tamil: "எலுமிச்சை",
                quantity: "9 Nos"
            },
            {
                sno: 2,
                english: "Flower Garlands",
                tamil: "பூ மாலைகள்",
                quantity: "4 Nos"
            },
            {
                sno: 3,
                english: "Turmeric & Kumkum",
                tamil: "மஞ்சள் & குங்குமம்",
                quantity: "1 Packet"
            },
            {
                sno: 4,
                english: "Camphor & Incense Sticks",
                tamil: "கற்பூரம் & அகர்பத்தி",
                quantity: "1 Pack"
            },
            {
                sno: 5,
                english: "Coconut",
                tamil: "தேங்காய்",
                quantity: "3 Pieces"
            },
            {
                sno: 6,
                english: "Betel Leaves & Areca Nuts",
                tamil: "வெற்றிலை பாக்கு",
                quantity: "21 Sets"
            },
            {
                sno: 7,
                english: "Sweet Naivedyam",
                tamil: "நைவேத்தியம்",
                quantity: "1 Set"
            }
        ],
        process: [
            {
                step: "01",
                title: "Sankalpam",
                description: "Beginning the ceremony with Sankalpam."
            },
            {
                step: "02",
                title: "Equipment Blessing",
                description: "Applying turmeric and kumkum to vehicles and equipment."
            },
            {
                step: "03",
                title: "Vehicle Pooja",
                description: "Performing traditional prayers for company vehicles."
            },
            {
                step: "04",
                title: "Maha Aarthi",
                description: "Concluding the ceremony with Maha Aarthi and Prasadam."
            }
        ],
        benefits: [
            {
                title: "Vehicle Blessing",
                description: "Traditional prayers for company vehicles."
            },
            {
                title: "Equipment Blessing",
                description: "Covers machinery, tools and workplace equipment."
            },
            {
                title: "Team Confidence",
                description: "Creates a meaningful traditional experience for staff."
            }
        ],
        notes: [
            "Ideal during Ayudha Pooja.",
            "Can be scaled for one vehicle or an entire fleet."
        ]
    },
    {
        id: "aarthi-prasadam-distribution",
        name: "Aarthi & Prasadam Distribution",
        price: "₹1,999",
        image: "/images/kalash.jpg",
        description: "A simple closing ceremony suitable for corporate events, celebrations and office gatherings.",
        items: [
            {
                sno: 1,
                english: "Camphor for Aarthi",
                tamil: "கற்பூரம்",
                quantity: "50 gms"
            },
            {
                sno: 2,
                english: "Brass Aarthi Plate",
                tamil: "ஆரத்தி தட்டு",
                quantity: "1 No"
            },
            {
                sno: 3,
                english: "Turmeric & Kumkum",
                tamil: "மஞ்சள் & குங்குமம்",
                quantity: "1 Packet"
            },
            {
                sno: 4,
                english: "Flowers",
                tamil: "பூக்கள்",
                quantity: "1 Packet"
            },
            {
                sno: 5,
                english: "Sweet Prasadam",
                tamil: "பிரசாதம்",
                quantity: "As per headcount"
            },
            {
                sno: 6,
                english: "Rosewater Sprinkler",
                tamil: "பன்னீர் சொம்பு",
                quantity: "1 No"
            }
        ],
        process: [
            {
                step: "01",
                title: "Gathering",
                description: "Staff and attendees gather for the closing ceremony."
            },
            {
                step: "02",
                title: "Camphor Aarthi",
                description: "Traditional Aarthi is performed."
            },
            {
                step: "03",
                title: "Prasadam Blessing",
                description: "Prasadam is prepared for distribution."
            },
            {
                step: "04",
                title: "Distribution",
                description: "Prasadam is distributed to attendees."
            }
        ],
        benefits: [
            {
                title: "Simple Closure",
                description: "Provides a meaningful conclusion to corporate events."
            },
            {
                title: "Team Gathering",
                description: "Brings employees together for a shared ceremony."
            },
            {
                title: "Flexible",
                description: "Can be added to other corporate ceremonies."
            }
        ],
        notes: [
            "Suitable for corporate events and celebrations.",
            "Prasadam quantity can be based on the number of attendees."
        ]
    }
];
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Home
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$packages$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/packages.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$faq$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/faq.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$up$2d$right$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowUpRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-up-right.mjs [app-client] (ecmascript) <export default as ArrowUpRight>");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
const API_BASE = "http://localhost:3001";
const FALLBACK_BANNER = {
    heading_line1: "Everything You Need.",
    heading_line2: "One Sacred Destination.",
    description: "We save your valuable time by bringing together multiple products for all your poojas, thoughtfully prepared for every occasion.",
    image_filename: "herobanner.png"
};
function Home() {
    _s();
    const [banner, setBanner] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(FALLBACK_BANNER);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Home.useEffect": ()=>{
            fetch(`${API_BASE}/home-banner`).then({
                "Home.useEffect": (res)=>{
                    if (!res.ok) {
                        throw new Error("Failed to fetch home banner");
                    }
                    return res.json();
                }
            }["Home.useEffect"]).then({
                "Home.useEffect": (data)=>{
                    if (data) {
                        setBanner(data);
                    }
                }
            }["Home.useEffect"]).catch({
                "Home.useEffect": ()=>{
                // Keep fallback banner if API fails
                }
            }["Home.useEffect"]);
        }
    }["Home.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        className: "bg-[#F8F4EC] pt-[90px]",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "relative w-full h-[460px] sm:h-[500px] md:h-auto md:aspect-[2.5/1] md:min-h-[480px] md:max-h-[750px] overflow-hidden bg-[#1D0C07]",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        src: `/images/${banner.image_filename}`,
                        alt: "Iyer's Pooja Products",
                        fill: true,
                        priority: true,
                        className: "object-cover object-[15%_10%] sm:object-[22%_center] md:object-center",
                        sizes: "100vw"
                    }, void 0, false, {
                        fileName: "[project]/app/page.tsx",
                        lineNumber: 57,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute inset-0 z-10 flex items-end justify-center pb-4 sm:items-center sm:justify-end sm:pb-0",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "w-full max-w-2xl px-4 py-2 text-center sm:text-right sm:px-10 lg:mr-[6%] lg:px-0 sm:translate-y-6 md:translate-y-8 lg:translate-y-10",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mb-2 sm:mb-4 flex items-center justify-center sm:justify-end gap-2 sm:gap-3",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "h-px w-6 bg-[#9A7228] sm:w-10"
                                        }, void 0, false, {
                                            fileName: "[project]/app/page.tsx",
                                            lineNumber: 73,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-[9px] sm:text-[11px] font-bold uppercase tracking-[0.25em] text-[#8C5D17]",
                                            children: "Iyer's Pooja Products"
                                        }, void 0, false, {
                                            fileName: "[project]/app/page.tsx",
                                            lineNumber: 75,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "h-px w-6 bg-[#9A7228] sm:hidden"
                                        }, void 0, false, {
                                            fileName: "[project]/app/page.tsx",
                                            lineNumber: 79,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/page.tsx",
                                    lineNumber: 72,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                    className: "font-[family-name:var(--font-cormorant)] text-2xl font-bold leading-tight text-[#4A171E] sm:text-3xl md:text-5xl lg:text-6xl xl:text-7xl",
                                    children: [
                                        banner.heading_line1,
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                            fileName: "[project]/app/page.tsx",
                                            lineNumber: 86,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-[#A71930]",
                                            children: banner.heading_line2
                                        }, void 0, false, {
                                            fileName: "[project]/app/page.tsx",
                                            lineNumber: 88,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/page.tsx",
                                    lineNumber: 83,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "mx-auto sm:ml-auto mt-2 sm:mt-4 max-w-sm sm:max-w-xl text-[11px] font-medium leading-relaxed text-[#4A342B] sm:text-sm sm:leading-6 md:text-base md:leading-7",
                                    children: banner.description
                                }, void 0, false, {
                                    fileName: "[project]/app/page.tsx",
                                    lineNumber: 94,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mt-4 sm:mt-7 flex flex-wrap items-center justify-center sm:justify-end gap-2 sm:gap-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            href: "/contact",
                                            className: "inline-flex h-9 sm:h-11 items-center justify-center rounded-md bg-[#A71930] px-5 sm:px-7 text-[10px] sm:text-xs font-semibold tracking-[0.08em] text-white shadow-md transition-all duration-300 hover:bg-[#831424] active:scale-95",
                                            children: "ORDER NOW"
                                        }, void 0, false, {
                                            fileName: "[project]/app/page.tsx",
                                            lineNumber: 101,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                            href: "#packages-section",
                                            className: "inline-flex h-9 sm:h-11 items-center justify-center rounded-md border border-[#5A2026] bg-white px-5 sm:px-7 text-[10px] sm:text-xs font-semibold tracking-[0.08em] text-[#5A2026] shadow-sm transition-all duration-300 hover:bg-[#5A2026] hover:text-white active:scale-95",
                                            children: "EXPLORE PACKAGES"
                                        }, void 0, false, {
                                            fileName: "[project]/app/page.tsx",
                                            lineNumber: 108,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/page.tsx",
                                    lineNumber: 99,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/page.tsx",
                            lineNumber: 69,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/page.tsx",
                        lineNumber: 67,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute bottom-4 left-1/2 hidden h-px w-24 -translate-x-1/2 bg-[#9A7228]/50 md:block"
                    }, void 0, false, {
                        fileName: "[project]/app/page.tsx",
                        lineNumber: 122,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/page.tsx",
                lineNumber: 54,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "bg-[#FFFCF7] px-6 py-24 sm:px-10 sm:py-28 lg:py-32",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mx-auto max-w-4xl text-center",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center justify-center gap-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "h-px w-12 bg-[#B08A45]"
                                }, void 0, false, {
                                    fileName: "[project]/app/page.tsx",
                                    lineNumber: 134,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-[11px] font-semibold uppercase tracking-[0.3em] text-[#B08A45]",
                                    children: "About Iyer's"
                                }, void 0, false, {
                                    fileName: "[project]/app/page.tsx",
                                    lineNumber: 136,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "h-px w-12 bg-[#B08A45]"
                                }, void 0, false, {
                                    fileName: "[project]/app/page.tsx",
                                    lineNumber: 140,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/page.tsx",
                            lineNumber: 133,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "mt-6 font-[family-name:var(--font-cormorant)] text-4xl font-semibold leading-tight text-[#5A2026] sm:text-5xl lg:text-6xl",
                            children: [
                                "Everything for Your Sacred",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {
                                    className: "hidden sm:block"
                                }, void 0, false, {
                                    fileName: "[project]/app/page.tsx",
                                    lineNumber: 146,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-[#A71930]",
                                    children: "Moments, Together."
                                }, void 0, false, {
                                    fileName: "[project]/app/page.tsx",
                                    lineNumber: 148,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/page.tsx",
                            lineNumber: 144,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "mx-auto mt-7 max-w-3xl text-base leading-8 text-[#756B62] sm:text-lg",
                            children: "At Iyer's Pooja Products, we believe preparing for a pooja should be meaningful, not time-consuming. We bring together carefully selected pooja essentials and thoughtfully curated packages, making it easier to find everything you need for every sacred occasion."
                        }, void 0, false, {
                            fileName: "[project]/app/page.tsx",
                            lineNumber: 154,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mx-auto mt-10 flex items-center justify-center gap-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "h-px w-16 bg-[#E9DDC9]"
                                }, void 0, false, {
                                    fileName: "[project]/app/page.tsx",
                                    lineNumber: 164,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-lg text-[#B08A45]",
                                    children: "✦"
                                }, void 0, false, {
                                    fileName: "[project]/app/page.tsx",
                                    lineNumber: 165,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "h-px w-16 bg-[#E9DDC9]"
                                }, void 0, false, {
                                    fileName: "[project]/app/page.tsx",
                                    lineNumber: 166,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/page.tsx",
                            lineNumber: 163,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mt-14 grid grid-cols-1 gap-8 sm:grid-cols-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "px-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "mx-auto flex h-12 w-12 items-center justify-center rounded-full border border-[#B08A45]/40 text-[#A71930]",
                                            children: "✦"
                                        }, void 0, false, {
                                            fileName: "[project]/app/page.tsx",
                                            lineNumber: 174,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "mt-5 font-[family-name:var(--font-cormorant)] text-2xl font-semibold text-[#5A2026]",
                                            children: "Authentic Products"
                                        }, void 0, false, {
                                            fileName: "[project]/app/page.tsx",
                                            lineNumber: 178,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "mt-2 text-sm leading-6 text-[#756B62]",
                                            children: "Carefully selected pooja essentials for meaningful rituals."
                                        }, void 0, false, {
                                            fileName: "[project]/app/page.tsx",
                                            lineNumber: 182,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/page.tsx",
                                    lineNumber: 173,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "border-[#E9DDC9] px-4 sm:border-x",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "mx-auto flex h-12 w-12 items-center justify-center rounded-full border border-[#B08A45]/40 text-[#A71930]",
                                            children: "✦"
                                        }, void 0, false, {
                                            fileName: "[project]/app/page.tsx",
                                            lineNumber: 190,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "mt-5 font-[family-name:var(--font-cormorant)] text-2xl font-semibold text-[#5A2026]",
                                            children: "Complete Packages"
                                        }, void 0, false, {
                                            fileName: "[project]/app/page.tsx",
                                            lineNumber: 194,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "mt-2 text-sm leading-6 text-[#756B62]",
                                            children: "Thoughtfully curated packages with everything you need."
                                        }, void 0, false, {
                                            fileName: "[project]/app/page.tsx",
                                            lineNumber: 198,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/page.tsx",
                                    lineNumber: 189,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "px-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "mx-auto flex h-12 w-12 items-center justify-center rounded-full border border-[#B08A45]/40 text-[#A71930]",
                                            children: "✦"
                                        }, void 0, false, {
                                            fileName: "[project]/app/page.tsx",
                                            lineNumber: 206,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "mt-5 font-[family-name:var(--font-cormorant)] text-2xl font-semibold text-[#5A2026]",
                                            children: "Save Your Time"
                                        }, void 0, false, {
                                            fileName: "[project]/app/page.tsx",
                                            lineNumber: 210,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "mt-2 text-sm leading-6 text-[#756B62]",
                                            children: "Multiple products brought together conveniently in one place."
                                        }, void 0, false, {
                                            fileName: "[project]/app/page.tsx",
                                            lineNumber: 214,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/page.tsx",
                                    lineNumber: 205,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/page.tsx",
                            lineNumber: 170,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/page.tsx",
                    lineNumber: 130,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/page.tsx",
                lineNumber: 128,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$packages$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/app/page.tsx",
                lineNumber: 227,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "relative overflow-hidden border-b border-[#B08A45]/20 bg-[#2A1517] px-6 py-16 sm:px-10 lg:py-24",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute inset-0 z-0",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                src: "/images/bg.jpg",
                                alt: "Pooja background",
                                fill: true,
                                className: "object-cover object-center opacity-75 brightness-105 saturate-105",
                                sizes: "100vw"
                            }, void 0, false, {
                                fileName: "[project]/app/page.tsx",
                                lineNumber: 235,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute inset-0 bg-gradient-to-r from-[#240C0E]/60 via-[#240C0E]/40 to-[#240C0E]/60"
                            }, void 0, false, {
                                fileName: "[project]/app/page.tsx",
                                lineNumber: 243,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute inset-0 bg-black/20"
                            }, void 0, false, {
                                fileName: "[project]/app/page.tsx",
                                lineNumber: 244,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/page.tsx",
                        lineNumber: 234,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative z-10 mx-auto max-w-5xl text-center",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mb-7 flex items-center justify-center gap-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "h-px w-12 bg-[#D4B978] shadow-sm"
                                    }, void 0, false, {
                                        fileName: "[project]/app/page.tsx",
                                        lineNumber: 251,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-sm text-[#F3D78A] [text-shadow:_0_1px_6px_rgba(0,0,0,0.8)]",
                                        children: "✦"
                                    }, void 0, false, {
                                        fileName: "[project]/app/page.tsx",
                                        lineNumber: 253,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "h-px w-12 bg-[#D4B978] shadow-sm"
                                    }, void 0, false, {
                                        fileName: "[project]/app/page.tsx",
                                        lineNumber: 257,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/page.tsx",
                                lineNumber: 250,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "font-[family-name:var(--font-cormorant)] text-4xl font-semibold leading-tight text-[#FFFDF8] sm:text-5xl lg:text-6xl [text-shadow:_0_2px_12px_rgba(0,0,0,0.85)]",
                                children: [
                                    "Planning a Pooja?",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                        fileName: "[project]/app/page.tsx",
                                        lineNumber: 264,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-[#F3D78A]",
                                        children: "We've Got Everything Ready."
                                    }, void 0, false, {
                                        fileName: "[project]/app/page.tsx",
                                        lineNumber: 266,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/page.tsx",
                                lineNumber: 262,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "mx-auto mt-6 max-w-2xl text-sm leading-7 text-[#FFF8EF] sm:text-base font-medium [text-shadow:_0_1px_8px_rgba(0,0,0,0.9)]",
                                children: "Save your valuable time with thoughtfully curated pooja products and packages, brought together for every sacred occasion."
                            }, void 0, false, {
                                fileName: "[project]/app/page.tsx",
                                lineNumber: 273,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mt-9",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    href: "/contact",
                                    className: "group inline-flex h-12 items-center gap-3 rounded-md bg-[#A71930] px-8 text-[12px] font-semibold tracking-[0.1em] text-white shadow-lg transition-all duration-300 hover:bg-[#8A1528] hover:shadow-xl hover:scale-105 active:scale-95",
                                    children: [
                                        "ORDER NOW",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$up$2d$right$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowUpRight$3e$__["ArrowUpRight"], {
                                            size: 16,
                                            strokeWidth: 1.7,
                                            className: "transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                                        }, void 0, false, {
                                            fileName: "[project]/app/page.tsx",
                                            lineNumber: 287,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/page.tsx",
                                    lineNumber: 281,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/page.tsx",
                                lineNumber: 280,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/page.tsx",
                        lineNumber: 247,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/page.tsx",
                lineNumber: 231,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$faq$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/app/page.tsx",
                lineNumber: 301,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/page.tsx",
        lineNumber: 51,
        columnNumber: 5
    }, this);
}
_s(Home, "LkViDZfnf0IX0st8YAGm8ZA7zHQ=");
_c = Home;
var _c;
__turbopack_context__.k.register(_c, "Home");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=app_1youyk2._.js.map