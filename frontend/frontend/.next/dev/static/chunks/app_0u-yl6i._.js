(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/app/components/order-now-modal.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>OrderNowModal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.mjs [app-client] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-right.mjs [app-client] (ecmascript) <export default as ArrowRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeft$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-left.mjs [app-client] (ecmascript) <export default as ArrowLeft>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/check.mjs [app-client] (ecmascript) <export default as Check>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$copy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Copy$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/copy.mjs [app-client] (ecmascript) <export default as Copy>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/loader-circle.mjs [app-client] (ecmascript) <export default as Loader2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$qr$2d$code$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__QrCode$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/qr-code.mjs [app-client] (ecmascript) <export default as QrCode>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2d$check$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ShieldCheck$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/shield-check.mjs [app-client] (ecmascript) <export default as ShieldCheck>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$alert$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CircleAlert$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-alert.mjs [app-client] (ecmascript) <export default as CircleAlert>");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
"use client";
;
;
;
const API_BASE = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.NEXT_PUBLIC_API_URL || "http://localhost:3001";
const EMPTY_FORM = {
    name: "",
    mobile: "",
    email: "",
    address: "",
    preferredDate: ""
};
const NOT_SET = "—";
const DEFAULT_PAYMENT_NOTE = "Please complete the payment using the QR code or UPI ID.";
// -------------------------------------------------------------
// VALIDATION
// -------------------------------------------------------------
function validate(form) {
    const errors = {};
    if (!form.name.trim()) {
        errors.name = "Please enter your full name.";
    }
    const digits = form.mobile.replace(/\D/g, "");
    if (!form.mobile.trim()) {
        errors.mobile = "Please enter your mobile number.";
    } else if (digits.length < 10) {
        errors.mobile = "Please enter a valid mobile number.";
    }
    if (!form.email.trim()) {
        errors.email = "Please enter your email address.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) {
        errors.email = "Please enter a valid email address.";
    }
    if (!form.address.trim()) {
        errors.address = "Please enter your address.";
    }
    if (!form.preferredDate) {
        errors.preferredDate = "Please choose your delivery date.";
    }
    return errors;
}
function formatDate(value) {
    if (!value) return NOT_SET;
    // `2026-09-10` alone parses as UTC midnight, which renders as the previous
    // day for anyone behind UTC. Appending a time forces local parsing.
    const parsed = new Date(`${value}T00:00:00`);
    if (Number.isNaN(parsed.getTime())) return value;
    return parsed.toLocaleDateString("en-IN", {
        day: "numeric",
        month: "long",
        year: "numeric"
    });
}
// -------------------------------------------------------------
// SMALL UI PIECES
// -------------------------------------------------------------
function Field({ id, label, error, children }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                htmlFor: id,
                className: "mb-1.5 block text-[13px] font-medium text-[#42151B]",
                children: [
                    label,
                    " ",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-[#9E2A2B]",
                        children: "*"
                    }, void 0, false, {
                        fileName: "[project]/app/components/order-now-modal.tsx",
                        lineNumber: 130,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/components/order-now-modal.tsx",
                lineNumber: 126,
                columnNumber: 7
            }, this),
            children,
            error ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                id: `${id}-error`,
                role: "alert",
                className: "mt-1.5 flex items-center gap-1 text-xs text-[#B3261E]",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$alert$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CircleAlert$3e$__["CircleAlert"], {
                        size: 13,
                        "aria-hidden": "true"
                    }, void 0, false, {
                        fileName: "[project]/app/components/order-now-modal.tsx",
                        lineNumber: 139,
                        columnNumber: 11
                    }, this),
                    error
                ]
            }, void 0, true, {
                fileName: "[project]/app/components/order-now-modal.tsx",
                lineNumber: 134,
                columnNumber: 9
            }, this) : null
        ]
    }, void 0, true, {
        fileName: "[project]/app/components/order-now-modal.tsx",
        lineNumber: 125,
        columnNumber: 5
    }, this);
}
_c = Field;
const inputClass = (hasError)=>`w-full rounded-xl border bg-white px-3.5 py-2.5 text-sm text-[#2B0C14] placeholder:text-[#B0A093] transition-colors focus:outline-none focus:ring-2 focus:ring-[#E5C77A]/60 ${hasError ? "border-[#B3261E] focus:border-[#B3261E]" : "border-[#DFCBB0] focus:border-[#7D1E28]"}`;
/** One read-only payment row, with copy-to-clipboard for the values worth copying. */ function PaymentRow({ label, value, copyable = false }) {
    _s();
    const [copied, setCopied] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const copyTimer = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const display = value?.trim() ? value.trim() : NOT_SET;
    const canCopy = copyable && display !== NOT_SET;
    // The modal unmounts on close; don't leave a timer running behind it.
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "PaymentRow.useEffect": ()=>({
                "PaymentRow.useEffect": ()=>{
                    if (copyTimer.current !== null) window.clearTimeout(copyTimer.current);
                }
            })["PaymentRow.useEffect"]
    }["PaymentRow.useEffect"], []);
    const handleCopy = async ()=>{
        try {
            await navigator.clipboard.writeText(display);
            setCopied(true);
            if (copyTimer.current !== null) window.clearTimeout(copyTimer.current);
            copyTimer.current = window.setTimeout(()=>setCopied(false), 1800);
        } catch  {
        // Clipboard unavailable (older browser / insecure origin) — the value
        // is on screen and can still be selected manually.
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex items-start justify-between gap-3 border-b border-[#EFE3CF] py-2.5 last:border-b-0",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "shrink-0 text-[13px] text-[#7A6458]",
                children: label
            }, void 0, false, {
                fileName: "[project]/app/components/order-now-modal.tsx",
                lineNumber: 191,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "flex min-w-0 items-center gap-2 text-right",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: `break-all text-[13px] font-semibold ${display === NOT_SET ? "text-[#B0A093]" : "text-[#2B0C14]"}`,
                        children: display
                    }, void 0, false, {
                        fileName: "[project]/app/components/order-now-modal.tsx",
                        lineNumber: 193,
                        columnNumber: 9
                    }, this),
                    canCopy ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        onClick: handleCopy,
                        "aria-label": `Copy ${label}`,
                        className: "shrink-0 rounded-md p-1 text-[#8A7466] transition-colors hover:bg-[#F3E7D3] hover:text-[#7D1E28] focus:outline-none focus:ring-2 focus:ring-[#E5C77A]",
                        children: copied ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__["Check"], {
                            size: 14,
                            className: "text-green-700"
                        }, void 0, false, {
                            fileName: "[project]/app/components/order-now-modal.tsx",
                            lineNumber: 208,
                            columnNumber: 15
                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$copy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Copy$3e$__["Copy"], {
                            size: 14
                        }, void 0, false, {
                            fileName: "[project]/app/components/order-now-modal.tsx",
                            lineNumber: 210,
                            columnNumber: 15
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/components/order-now-modal.tsx",
                        lineNumber: 201,
                        columnNumber: 11
                    }, this) : null
                ]
            }, void 0, true, {
                fileName: "[project]/app/components/order-now-modal.tsx",
                lineNumber: 192,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/components/order-now-modal.tsx",
        lineNumber: 190,
        columnNumber: 5
    }, this);
}
_s(PaymentRow, "8yCU0mzP4+TIRXGNt3HZ3AY2TII=");
_c1 = PaymentRow;
/** One read-only customer detail row shown while reviewing on Step 2. */ function ReviewRow({ label, value }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex items-start justify-between gap-3 py-1.5",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "shrink-0 text-[13px] text-[#7A6458]",
                children: label
            }, void 0, false, {
                fileName: "[project]/app/components/order-now-modal.tsx",
                lineNumber: 223,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "break-words text-right text-[13px] font-medium text-[#2B0C14]",
                children: value.trim() || NOT_SET
            }, void 0, false, {
                fileName: "[project]/app/components/order-now-modal.tsx",
                lineNumber: 224,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/components/order-now-modal.tsx",
        lineNumber: 222,
        columnNumber: 5
    }, this);
}
_c2 = ReviewRow;
function OrderNowModal({ open, onClose, packageName, packagePrice }) {
    _s1();
    const [step, setStep] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(1);
    const [form, setForm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(EMPTY_FORM);
    const [errors, setErrors] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({});
    const [submitting, setSubmitting] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [submitError, setSubmitError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [success, setSuccess] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [payment, setPayment] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [paymentLoading, setPaymentLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [paymentError, setPaymentError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const dialogRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const headingRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    /** Element that had focus before the modal opened, so we can hand it back. */ const triggerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    // Today, in the user's local timezone — used as the date input's minimum.
    const today = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "OrderNowModal.useMemo[today]": ()=>{
            const now = new Date();
            const offset = now.getTimezoneOffset() * 60000;
            return new Date(now.getTime() - offset).toISOString().slice(0, 10);
        }
    }["OrderNowModal.useMemo[today]"], []);
    const resetAll = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "OrderNowModal.useCallback[resetAll]": ()=>{
            setStep(1);
            setForm(EMPTY_FORM);
            setErrors({});
            setSubmitting(false);
            setSubmitError(null);
            setSuccess(false);
        }
    }["OrderNowModal.useCallback[resetAll]"], []);
    // -----------------------------------------------------------
    // OPEN / CLOSE BEHAVIOUR
    // -----------------------------------------------------------
    const handleClose = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "OrderNowModal.useCallback[handleClose]": ()=>{
            // Closing mid-submit would hide the result of an in-flight request the
            // server is still processing — the customer would reorder and pay twice.
            if (submitting) return;
            onClose();
        }
    }["OrderNowModal.useCallback[handleClose]"], [
        onClose,
        submitting
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "OrderNowModal.useEffect": ()=>{
            if (!open) return;
            // Start every visit from a clean slate. Done synchronously on open rather
            // than on a timer after close, so a quick close-and-reopen can't show the
            // previous order's success screen.
            resetAll();
            // Remember what to give focus back to when the modal closes.
            triggerRef.current = document.activeElement instanceof HTMLElement ? document.activeElement : null;
            // Lock background scroll while the modal is open.
            const previousOverflow = document.body.style.overflow;
            document.body.style.overflow = "hidden";
            // Move focus into the dialog for screen-reader and keyboard users.
            headingRef.current?.focus();
            return ({
                "OrderNowModal.useEffect": ()=>{
                    document.body.style.overflow = previousOverflow;
                    triggerRef.current?.focus();
                }
            })["OrderNowModal.useEffect"];
        }
    }["OrderNowModal.useEffect"], [
        open,
        resetAll
    ]);
    // Escape to close + Tab focus trap.
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "OrderNowModal.useEffect": ()=>{
            if (!open) return;
            const onKeyDown = {
                "OrderNowModal.useEffect.onKeyDown": (event)=>{
                    if (event.key === "Escape") {
                        event.preventDefault();
                        handleClose();
                        return;
                    }
                    if (event.key !== "Tab" || !dialogRef.current) return;
                    const focusable = dialogRef.current.querySelectorAll('a[href], button:not([disabled]), input:not([disabled]), textarea:not([disabled]), select:not([disabled]), [tabindex]:not([tabindex="-1"])');
                    if (focusable.length === 0) return;
                    const first = focusable[0];
                    const last = focusable[focusable.length - 1];
                    if (event.shiftKey && document.activeElement === first) {
                        event.preventDefault();
                        last.focus();
                    } else if (!event.shiftKey && document.activeElement === last) {
                        event.preventDefault();
                        first.focus();
                    }
                }
            }["OrderNowModal.useEffect.onKeyDown"];
            document.addEventListener("keydown", onKeyDown);
            return ({
                "OrderNowModal.useEffect": ()=>document.removeEventListener("keydown", onKeyDown)
            })["OrderNowModal.useEffect"];
        }
    }["OrderNowModal.useEffect"], [
        open,
        handleClose
    ]);
    // -----------------------------------------------------------
    // PAYMENT DETAILS — always live from the admin dashboard
    // -----------------------------------------------------------
    const loadPayment = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "OrderNowModal.useCallback[loadPayment]": async ()=>{
            setPaymentLoading(true);
            setPaymentError(null);
            try {
                const res = await fetch(`${API_BASE}/payment-settings`, {
                    cache: "no-store"
                });
                if (!res.ok) throw new Error("Failed to load payment details");
                const data = await res.json();
                setPayment(data);
            } catch (error) {
                console.error("Failed to load payment settings:", error);
                setPayment(null);
                setPaymentError("We couldn't load the payment details just now. You can still submit your order and we'll email you the payment information.");
            } finally{
                setPaymentLoading(false);
            }
        }
    }["OrderNowModal.useCallback[loadPayment]"], []);
    // Fetch as soon as the customer reaches Step 2 so the details are current.
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "OrderNowModal.useEffect": ()=>{
            if (open && step === 2) {
                loadPayment();
            }
        }
    }["OrderNowModal.useEffect"], [
        open,
        step,
        loadPayment
    ]);
    // -----------------------------------------------------------
    // HANDLERS
    // -----------------------------------------------------------
    function setField(key, value) {
        setForm((previous)=>({
                ...previous,
                [key]: value
            }));
        setErrors((previous)=>{
            if (!previous[key]) return previous;
            const next = {
                ...previous
            };
            delete next[key];
            return next;
        });
    }
    function handleContinue(event) {
        event.preventDefault();
        const found = validate(form);
        setErrors(found);
        if (Object.keys(found).length > 0) {
            const firstKey = Object.keys(found)[0];
            document.getElementById(`order-${firstKey}`)?.focus();
            return;
        }
        setStep(2);
    }
    async function handleSubmit(event) {
        event.preventDefault();
        // Re-validate on submit — the customer may have gone back and edited.
        const found = validate(form);
        setErrors(found);
        if (Object.keys(found).length > 0) {
            setStep(1);
            return;
        }
        setSubmitting(true);
        setSubmitError(null);
        try {
            const res = await fetch(`${API_BASE}/orders`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    name: form.name.trim(),
                    mobile: form.mobile.trim(),
                    email: form.email.trim(),
                    address: form.address.trim(),
                    package_name: packageName,
                    preferred_date: form.preferredDate
                })
            });
            if (!res.ok) {
                const detail = await res.json().catch(()=>null);
                throw new Error(detail?.message || "Order failed");
            }
            setSuccess(true);
        } catch (error) {
            console.error("Order submission failed:", error);
            setSubmitError("We couldn't submit your order just now. Please check your connection and try again.");
        } finally{
            setSubmitting(false);
        }
    }
    if (!open) return null;
    const paymentNote = payment?.payment_note?.trim() || DEFAULT_PAYMENT_NOTE;
    const qrSrc = payment?.qr_filename ? `/images/${payment.qr_filename}` : null;
    // -----------------------------------------------------------
    // RENDER
    // -----------------------------------------------------------
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "fixed inset-0 z-[100] overflow-y-auto bg-[#2B0C14]/60 backdrop-blur-sm",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex min-h-full items-end justify-center p-0 sm:items-center sm:p-4",
            onMouseDown: (event)=>{
                if (event.target === event.currentTarget) handleClose();
            },
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                ref: dialogRef,
                role: "dialog",
                "aria-modal": "true",
                "aria-labelledby": "order-modal-title",
                className: "animate-order-modal-in relative w-full max-w-lg overflow-hidden rounded-t-3xl border border-[#E4D7C3] bg-[#FDFAF4] shadow-2xl sm:rounded-3xl",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative border-b border-[#EFE3CF] bg-gradient-to-b from-[#FFFDF8] to-[#FBF6EE] px-5 pb-4 pt-5 sm:px-7 sm:pt-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                "aria-hidden": "true",
                                className: "absolute inset-x-0 top-0 h-[3px] bg-gradient-to-r from-transparent via-[#E5C77A] to-transparent"
                            }, void 0, false, {
                                fileName: "[project]/app/components/order-now-modal.tsx",
                                lineNumber: 483,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                onClick: handleClose,
                                "aria-label": "Close order form",
                                className: "absolute right-3 top-4 rounded-full p-2 text-[#8A7466] transition-colors hover:bg-[#F3E7D3] hover:text-[#7D1E28] focus:outline-none focus:ring-2 focus:ring-[#E5C77A] sm:right-5",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                    size: 18
                                }, void 0, false, {
                                    fileName: "[project]/app/components/order-now-modal.tsx",
                                    lineNumber: 494,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/components/order-now-modal.tsx",
                                lineNumber: 488,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                id: "order-modal-title",
                                ref: headingRef,
                                tabIndex: -1,
                                className: "pr-10 font-[family-name:var(--font-cormorant)] text-2xl font-bold tracking-tight text-[#42151B] outline-none sm:text-[26px]",
                                children: success ? "Order Received" : "Complete Your Order"
                            }, void 0, false, {
                                fileName: "[project]/app/components/order-now-modal.tsx",
                                lineNumber: 497,
                                columnNumber: 13
                            }, this),
                            packageName ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "mt-1 text-[13px] text-[#7A6458]",
                                children: [
                                    packageName,
                                    packagePrice ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "ml-2 font-semibold text-[#7D1E28]",
                                        children: [
                                            "₹",
                                            packagePrice
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/components/order-now-modal.tsx",
                                        lineNumber: 510,
                                        columnNumber: 19
                                    }, this) : null
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/components/order-now-modal.tsx",
                                lineNumber: 507,
                                columnNumber: 15
                            }, this) : null,
                            !success && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ol", {
                                className: "mt-4 flex items-center gap-2",
                                "aria-label": "Order steps",
                                children: [
                                    {
                                        number: 1,
                                        label: "Your Details"
                                    },
                                    {
                                        number: 2,
                                        label: "Payment"
                                    }
                                ].map((entry, index)=>{
                                    const isActive = step === entry.number;
                                    const isDone = step > entry.number;
                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        className: "flex flex-1 items-center gap-2",
                                        "aria-current": isActive ? "step" : undefined,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: `flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-[11px] font-bold transition-colors ${isDone ? "bg-[#7D1E28] text-[#F3D78A]" : isActive ? "bg-[#E5C77A] text-[#42151B]" : "bg-[#EFE3CF] text-[#A99483]"}`,
                                                children: isDone ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__["Check"], {
                                                    size: 13
                                                }, void 0, false, {
                                                    fileName: "[project]/app/components/order-now-modal.tsx",
                                                    lineNumber: 544,
                                                    columnNumber: 35
                                                }, this) : entry.number
                                            }, void 0, false, {
                                                fileName: "[project]/app/components/order-now-modal.tsx",
                                                lineNumber: 535,
                                                columnNumber: 23
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: `whitespace-nowrap text-[12px] font-medium ${isActive || isDone ? "text-[#42151B]" : "text-[#A99483]"}`,
                                                children: entry.label
                                            }, void 0, false, {
                                                fileName: "[project]/app/components/order-now-modal.tsx",
                                                lineNumber: 546,
                                                columnNumber: 23
                                            }, this),
                                            index === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                "aria-hidden": "true",
                                                className: `ml-1 h-px flex-1 ${step > 1 ? "bg-[#E5C77A]" : "bg-[#EFE3CF]"}`
                                            }, void 0, false, {
                                                fileName: "[project]/app/components/order-now-modal.tsx",
                                                lineNumber: 556,
                                                columnNumber: 25
                                            }, this)
                                        ]
                                    }, entry.number, true, {
                                        fileName: "[project]/app/components/order-now-modal.tsx",
                                        lineNumber: 530,
                                        columnNumber: 21
                                    }, this);
                                })
                            }, void 0, false, {
                                fileName: "[project]/app/components/order-now-modal.tsx",
                                lineNumber: 519,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/components/order-now-modal.tsx",
                        lineNumber: 481,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "max-h-[70vh] overflow-y-auto px-5 py-5 sm:max-h-[65vh] sm:px-7 sm:py-6",
                        children: success ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "py-6 text-center",
                            role: "status",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-[#F3E7D3] ring-4 ring-[#E5C77A]/40",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__["Check"], {
                                        size: 26,
                                        className: "text-[#7D1E28]"
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/order-now-modal.tsx",
                                        lineNumber: 576,
                                        columnNumber: 19
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/app/components/order-now-modal.tsx",
                                    lineNumber: 575,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: "font-[family-name:var(--font-cormorant)] text-xl font-bold text-[#42151B]",
                                    children: [
                                        "Thank you, ",
                                        form.name.trim().split(" ")[0] || "devotee"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/components/order-now-modal.tsx",
                                    lineNumber: 578,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "mx-auto mt-2 max-w-sm text-sm leading-relaxed text-[#55463E]",
                                    children: "Your order has been submitted successfully. A confirmation email has been sent to you."
                                }, void 0, false, {
                                    fileName: "[project]/app/components/order-now-modal.tsx",
                                    lineNumber: 581,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "mt-1 text-[13px] font-medium text-[#7D1E28]",
                                    children: form.email.trim()
                                }, void 0, false, {
                                    fileName: "[project]/app/components/order-now-modal.tsx",
                                    lineNumber: 585,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    onClick: handleClose,
                                    className: "mt-6 rounded-xl bg-[#7D1E28] px-6 py-2.5 text-sm font-semibold text-[#F3D78A] transition-colors hover:bg-[#5A121D] focus:outline-none focus:ring-2 focus:ring-[#E5C77A]",
                                    children: "Done"
                                }, void 0, false, {
                                    fileName: "[project]/app/components/order-now-modal.tsx",
                                    lineNumber: 588,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/components/order-now-modal.tsx",
                            lineNumber: 574,
                            columnNumber: 15
                        }, this) : step === 1 ? /* =============== STEP 1 — CUSTOMER DETAILS =============== */ /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                            onSubmit: handleContinue,
                            noValidate: true,
                            className: "animate-order-step-in space-y-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Field, {
                                    id: "order-name",
                                    label: "Customer Name",
                                    error: errors.name,
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        id: "order-name",
                                        name: "name",
                                        type: "text",
                                        autoComplete: "name",
                                        maxLength: 255,
                                        placeholder: "Full name",
                                        value: form.name,
                                        onChange: (e)=>setField("name", e.target.value),
                                        "aria-invalid": Boolean(errors.name),
                                        "aria-describedby": errors.name ? "order-name-error" : undefined,
                                        className: inputClass(Boolean(errors.name))
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/order-now-modal.tsx",
                                        lineNumber: 608,
                                        columnNumber: 19
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/app/components/order-now-modal.tsx",
                                    lineNumber: 603,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "grid gap-4 sm:grid-cols-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Field, {
                                            id: "order-mobile",
                                            label: "Mobile Number",
                                            error: errors.mobile,
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                id: "order-mobile",
                                                name: "mobile",
                                                type: "tel",
                                                inputMode: "tel",
                                                autoComplete: "tel",
                                                maxLength: 20,
                                                placeholder: "10-digit mobile",
                                                value: form.mobile,
                                                onChange: (e)=>setField("mobile", e.target.value),
                                                "aria-invalid": Boolean(errors.mobile),
                                                "aria-describedby": errors.mobile ? "order-mobile-error" : undefined,
                                                className: inputClass(Boolean(errors.mobile))
                                            }, void 0, false, {
                                                fileName: "[project]/app/components/order-now-modal.tsx",
                                                lineNumber: 631,
                                                columnNumber: 21
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/app/components/order-now-modal.tsx",
                                            lineNumber: 626,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Field, {
                                            id: "order-preferredDate",
                                            label: "Delivery Date",
                                            error: errors.preferredDate,
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                id: "order-preferredDate",
                                                name: "preferredDate",
                                                type: "date",
                                                min: today,
                                                value: form.preferredDate,
                                                onChange: (e)=>setField("preferredDate", e.target.value),
                                                "aria-invalid": Boolean(errors.preferredDate),
                                                "aria-describedby": errors.preferredDate ? "order-preferredDate-error" : undefined,
                                                className: inputClass(Boolean(errors.preferredDate))
                                            }, void 0, false, {
                                                fileName: "[project]/app/components/order-now-modal.tsx",
                                                lineNumber: 654,
                                                columnNumber: 21
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/app/components/order-now-modal.tsx",
                                            lineNumber: 649,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/components/order-now-modal.tsx",
                                    lineNumber: 625,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Field, {
                                    id: "order-email",
                                    label: "Email Address",
                                    error: errors.email,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            id: "order-email",
                                            name: "email",
                                            type: "email",
                                            autoComplete: "email",
                                            maxLength: 255,
                                            placeholder: "you@example.com",
                                            value: form.email,
                                            onChange: (e)=>setField("email", e.target.value),
                                            "aria-invalid": Boolean(errors.email),
                                            "aria-describedby": errors.email ? "order-email-error" : undefined,
                                            className: inputClass(Boolean(errors.email))
                                        }, void 0, false, {
                                            fileName: "[project]/app/components/order-now-modal.tsx",
                                            lineNumber: 679,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "mt-1.5 text-[11px] text-[#8A7466]",
                                            children: "Your order confirmation will be sent here."
                                        }, void 0, false, {
                                            fileName: "[project]/app/components/order-now-modal.tsx",
                                            lineNumber: 694,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/components/order-now-modal.tsx",
                                    lineNumber: 674,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Field, {
                                    id: "order-address",
                                    label: "Address",
                                    error: errors.address,
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                        id: "order-address",
                                        name: "address",
                                        rows: 3,
                                        autoComplete: "street-address",
                                        maxLength: 2000,
                                        placeholder: "House / street, area, city, PIN code",
                                        value: form.address,
                                        onChange: (e)=>setField("address", e.target.value),
                                        "aria-invalid": Boolean(errors.address),
                                        "aria-describedby": errors.address ? "order-address-error" : undefined,
                                        className: `${inputClass(Boolean(errors.address))} resize-none`
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/order-now-modal.tsx",
                                        lineNumber: 704,
                                        columnNumber: 19
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/app/components/order-now-modal.tsx",
                                    lineNumber: 699,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "submit",
                                    className: "mt-2 flex w-full items-center justify-center gap-2 rounded-xl bg-[#7D1E28] px-5 py-3 text-sm font-semibold text-[#F3D78A] shadow-sm transition-colors hover:bg-[#5A121D] focus:outline-none focus:ring-2 focus:ring-[#E5C77A] focus:ring-offset-2 focus:ring-offset-[#FDFAF4]",
                                    children: [
                                        "Continue to Payment",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__["ArrowRight"], {
                                            size: 16
                                        }, void 0, false, {
                                            fileName: "[project]/app/components/order-now-modal.tsx",
                                            lineNumber: 726,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/components/order-now-modal.tsx",
                                    lineNumber: 721,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/components/order-now-modal.tsx",
                            lineNumber: 598,
                            columnNumber: 15
                        }, this) : /* =============== STEP 2 — PAYMENT =============== */ /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                            onSubmit: handleSubmit,
                            noValidate: true,
                            className: "animate-order-step-in space-y-5",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                                    "aria-labelledby": "order-review-heading",
                                    className: "rounded-2xl border border-[#EFE3CF] bg-white/70 px-4 py-3.5",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "mb-2 flex items-center justify-between gap-3",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    id: "order-review-heading",
                                                    className: "text-[11px] font-semibold uppercase tracking-[0.12em] text-[#8A1C2B]",
                                                    children: "Your Details"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/components/order-now-modal.tsx",
                                                    lineNumber: 742,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    type: "button",
                                                    onClick: ()=>{
                                                        setSubmitError(null);
                                                        setStep(1);
                                                    },
                                                    className: "flex items-center gap-1 rounded-md px-1.5 py-0.5 text-[12px] font-medium text-[#7D1E28] underline-offset-2 transition-colors hover:underline focus:outline-none focus:ring-2 focus:ring-[#E5C77A]",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeft$3e$__["ArrowLeft"], {
                                                            size: 12
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/components/order-now-modal.tsx",
                                                            lineNumber: 756,
                                                            columnNumber: 23
                                                        }, this),
                                                        "Edit"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/components/order-now-modal.tsx",
                                                    lineNumber: 748,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/components/order-now-modal.tsx",
                                            lineNumber: 741,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "divide-y divide-[#F5EDE0]",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ReviewRow, {
                                                    label: "Name",
                                                    value: form.name
                                                }, void 0, false, {
                                                    fileName: "[project]/app/components/order-now-modal.tsx",
                                                    lineNumber: 762,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ReviewRow, {
                                                    label: "Mobile",
                                                    value: form.mobile
                                                }, void 0, false, {
                                                    fileName: "[project]/app/components/order-now-modal.tsx",
                                                    lineNumber: 763,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ReviewRow, {
                                                    label: "Email",
                                                    value: form.email
                                                }, void 0, false, {
                                                    fileName: "[project]/app/components/order-now-modal.tsx",
                                                    lineNumber: 764,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ReviewRow, {
                                                    label: "Address",
                                                    value: form.address
                                                }, void 0, false, {
                                                    fileName: "[project]/app/components/order-now-modal.tsx",
                                                    lineNumber: 765,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ReviewRow, {
                                                    label: "Delivery Date",
                                                    value: formatDate(form.preferredDate)
                                                }, void 0, false, {
                                                    fileName: "[project]/app/components/order-now-modal.tsx",
                                                    lineNumber: 766,
                                                    columnNumber: 21
                                                }, this),
                                                packageName ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ReviewRow, {
                                                    label: "Package",
                                                    value: packageName
                                                }, void 0, false, {
                                                    fileName: "[project]/app/components/order-now-modal.tsx",
                                                    lineNumber: 771,
                                                    columnNumber: 23
                                                }, this) : null
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/components/order-now-modal.tsx",
                                            lineNumber: 761,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/components/order-now-modal.tsx",
                                    lineNumber: 737,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-3",
                                    "aria-hidden": "true",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "h-px flex-1 bg-gradient-to-r from-transparent to-[#E5C77A]"
                                        }, void 0, false, {
                                            fileName: "[project]/app/components/order-now-modal.tsx",
                                            lineNumber: 778,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-[10px] font-semibold uppercase tracking-[0.18em] text-[#B08D57]",
                                            children: "Payment"
                                        }, void 0, false, {
                                            fileName: "[project]/app/components/order-now-modal.tsx",
                                            lineNumber: 779,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "h-px flex-1 bg-gradient-to-l from-transparent to-[#E5C77A]"
                                        }, void 0, false, {
                                            fileName: "[project]/app/components/order-now-modal.tsx",
                                            lineNumber: 782,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/components/order-now-modal.tsx",
                                    lineNumber: 777,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                                    "aria-labelledby": "order-payment-heading",
                                    "aria-busy": paymentLoading,
                                    className: "rounded-2xl border border-[#E5C77A]/70 bg-gradient-to-b from-[#FFFDF8] to-[#FBF6EE] px-4 py-4 shadow-sm",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            id: "order-payment-heading",
                                            className: "sr-only",
                                            children: "Payment details"
                                        }, void 0, false, {
                                            fileName: "[project]/app/components/order-now-modal.tsx",
                                            lineNumber: 791,
                                            columnNumber: 19
                                        }, this),
                                        paymentLoading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center justify-center gap-2 py-8 text-sm text-[#7A6458]",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                                                    size: 16,
                                                    className: "animate-spin"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/components/order-now-modal.tsx",
                                                    lineNumber: 797,
                                                    columnNumber: 23
                                                }, this),
                                                "Loading payment details..."
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/components/order-now-modal.tsx",
                                            lineNumber: 796,
                                            columnNumber: 21
                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                            children: [
                                                paymentError ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    role: "alert",
                                                    className: "mb-3 flex items-start gap-1.5 rounded-lg bg-[#FBEEEE] px-3 py-2 text-xs leading-relaxed text-[#B3261E]",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$alert$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CircleAlert$3e$__["CircleAlert"], {
                                                            size: 14,
                                                            className: "mt-0.5 shrink-0",
                                                            "aria-hidden": "true"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/components/order-now-modal.tsx",
                                                            lineNumber: 807,
                                                            columnNumber: 27
                                                        }, this),
                                                        paymentError
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/components/order-now-modal.tsx",
                                                    lineNumber: 803,
                                                    columnNumber: 25
                                                }, this) : null,
                                                payment?.business_name?.trim() ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "mb-3 text-center font-[family-name:var(--font-cormorant)] text-lg font-bold text-[#42151B]",
                                                    children: payment.business_name.trim()
                                                }, void 0, false, {
                                                    fileName: "[project]/app/components/order-now-modal.tsx",
                                                    lineNumber: 817,
                                                    columnNumber: 25
                                                }, this) : null,
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "mb-4 flex flex-col items-center",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "rounded-2xl border border-[#E4D7C3] bg-white p-3 shadow-sm",
                                                            children: qrSrc ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                                src: qrSrc,
                                                                alt: `UPI QR code for ${payment?.business_name?.trim() || "payment"}`,
                                                                width: 168,
                                                                height: 168,
                                                                unoptimized: true,
                                                                className: "h-[152px] w-[152px] object-contain sm:h-[168px] sm:w-[168px]"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/components/order-now-modal.tsx",
                                                                lineNumber: 826,
                                                                columnNumber: 29
                                                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex h-[152px] w-[152px] flex-col items-center justify-center gap-2 rounded-xl bg-[#FBF6EE] text-center sm:h-[168px] sm:w-[168px]",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$qr$2d$code$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__QrCode$3e$__["QrCode"], {
                                                                        size: 30,
                                                                        className: "text-[#C4B3A2]",
                                                                        "aria-hidden": "true"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/components/order-now-modal.tsx",
                                                                        lineNumber: 838,
                                                                        columnNumber: 31
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "px-3 text-[11px] leading-snug text-[#8A7466]",
                                                                        children: "QR code not uploaded yet"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/components/order-now-modal.tsx",
                                                                        lineNumber: 843,
                                                                        columnNumber: 31
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/components/order-now-modal.tsx",
                                                                lineNumber: 837,
                                                                columnNumber: 29
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/components/order-now-modal.tsx",
                                                            lineNumber: 824,
                                                            columnNumber: 25
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "mt-2.5 text-[11px] font-semibold uppercase tracking-[0.16em] text-[#B08D57]",
                                                            children: "Scan to Pay"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/components/order-now-modal.tsx",
                                                            lineNumber: 849,
                                                            columnNumber: 25
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/components/order-now-modal.tsx",
                                                    lineNumber: 823,
                                                    columnNumber: 23
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "rounded-xl border border-[#EFE3CF] bg-white px-3.5 py-1",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(PaymentRow, {
                                                            label: "Business Name",
                                                            value: payment?.business_name ?? null
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/components/order-now-modal.tsx",
                                                            lineNumber: 856,
                                                            columnNumber: 25
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(PaymentRow, {
                                                            label: "Account Holder",
                                                            value: payment?.account_holder ?? null
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/components/order-now-modal.tsx",
                                                            lineNumber: 860,
                                                            columnNumber: 25
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(PaymentRow, {
                                                            label: "Account Number",
                                                            value: payment?.account_number ?? null,
                                                            copyable: true
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/components/order-now-modal.tsx",
                                                            lineNumber: 864,
                                                            columnNumber: 25
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(PaymentRow, {
                                                            label: "IFSC Code",
                                                            value: payment?.ifsc_code ?? null,
                                                            copyable: true
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/components/order-now-modal.tsx",
                                                            lineNumber: 869,
                                                            columnNumber: 25
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(PaymentRow, {
                                                            label: "UPI ID",
                                                            value: payment?.upi_id ?? null,
                                                            copyable: true
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/components/order-now-modal.tsx",
                                                            lineNumber: 874,
                                                            columnNumber: 25
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/components/order-now-modal.tsx",
                                                    lineNumber: 855,
                                                    columnNumber: 23
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "mt-3 flex items-start gap-2 rounded-xl bg-[#F7EFE1] px-3 py-2.5 text-[12px] leading-relaxed text-[#6E584D]",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2d$check$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ShieldCheck$3e$__["ShieldCheck"], {
                                                            size: 15,
                                                            className: "mt-px shrink-0 text-[#9E2A2B]",
                                                            "aria-hidden": "true"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/components/order-now-modal.tsx",
                                                            lineNumber: 882,
                                                            columnNumber: 25
                                                        }, this),
                                                        paymentNote
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/components/order-now-modal.tsx",
                                                    lineNumber: 881,
                                                    columnNumber: 23
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/components/order-now-modal.tsx",
                                            lineNumber: 801,
                                            columnNumber: 21
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/components/order-now-modal.tsx",
                                    lineNumber: 786,
                                    columnNumber: 17
                                }, this),
                                submitError ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    role: "alert",
                                    className: "flex items-start gap-1.5 rounded-lg bg-[#FBEEEE] px-3 py-2 text-xs leading-relaxed text-[#B3261E]",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$alert$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CircleAlert$3e$__["CircleAlert"], {
                                            size: 14,
                                            className: "mt-0.5 shrink-0",
                                            "aria-hidden": "true"
                                        }, void 0, false, {
                                            fileName: "[project]/app/components/order-now-modal.tsx",
                                            lineNumber: 898,
                                            columnNumber: 21
                                        }, this),
                                        submitError
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/components/order-now-modal.tsx",
                                    lineNumber: 894,
                                    columnNumber: 19
                                }, this) : null,
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex flex-col-reverse gap-2.5 sm:flex-row",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "button",
                                            onClick: ()=>{
                                                setSubmitError(null);
                                                setStep(1);
                                            },
                                            disabled: submitting,
                                            className: "flex items-center justify-center gap-2 rounded-xl border border-[#DFCBB0] bg-white px-5 py-3 text-sm font-semibold text-[#7D1E28] transition-colors hover:bg-[#FBF6EE] focus:outline-none focus:ring-2 focus:ring-[#E5C77A] disabled:opacity-50 sm:flex-1",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeft$3e$__["ArrowLeft"], {
                                                    size: 16
                                                }, void 0, false, {
                                                    fileName: "[project]/app/components/order-now-modal.tsx",
                                                    lineNumber: 917,
                                                    columnNumber: 21
                                                }, this),
                                                "Back"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/components/order-now-modal.tsx",
                                            lineNumber: 908,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "submit",
                                            disabled: submitting,
                                            className: "flex items-center justify-center gap-2 rounded-xl bg-[#7D1E28] px-5 py-3 text-sm font-semibold text-[#F3D78A] shadow-sm transition-colors hover:bg-[#5A121D] focus:outline-none focus:ring-2 focus:ring-[#E5C77A] focus:ring-offset-2 focus:ring-offset-[#FDFAF4] disabled:cursor-not-allowed disabled:opacity-70 sm:flex-[2]",
                                            children: submitting ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                                                        size: 16,
                                                        className: "animate-spin"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/components/order-now-modal.tsx",
                                                        lineNumber: 928,
                                                        columnNumber: 25
                                                    }, this),
                                                    "Submitting..."
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/components/order-now-modal.tsx",
                                                lineNumber: 927,
                                                columnNumber: 23
                                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                                children: [
                                                    "Submit Order",
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__["Check"], {
                                                        size: 16
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/components/order-now-modal.tsx",
                                                        lineNumber: 934,
                                                        columnNumber: 25
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/components/order-now-modal.tsx",
                                                lineNumber: 932,
                                                columnNumber: 23
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/app/components/order-now-modal.tsx",
                                            lineNumber: 921,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/components/order-now-modal.tsx",
                                    lineNumber: 907,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/components/order-now-modal.tsx",
                            lineNumber: 731,
                            columnNumber: 15
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/components/order-now-modal.tsx",
                        lineNumber: 571,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/components/order-now-modal.tsx",
                lineNumber: 473,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/app/components/order-now-modal.tsx",
            lineNumber: 467,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/app/components/order-now-modal.tsx",
        lineNumber: 464,
        columnNumber: 5
    }, this);
}
_s1(OrderNowModal, "ossz1TgxIUYgeR2WIWIndz6IZAQ=");
_c3 = OrderNowModal;
var _c, _c1, _c2, _c3;
__turbopack_context__.k.register(_c, "Field");
__turbopack_context__.k.register(_c1, "PaymentRow");
__turbopack_context__.k.register(_c2, "ReviewRow");
__turbopack_context__.k.register(_c3, "OrderNowModal");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/overseas/page-client.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>OverseasPackagePage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/styled-jsx/style.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-right.mjs [app-client] (ecmascript) <export default as ArrowRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$star$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Star$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/star.mjs [app-client] (ecmascript) <export default as Star>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$info$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Info$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/info.mjs [app-client] (ecmascript) <export default as Info>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-check.mjs [app-client] (ecmascript) <export default as CheckCircle2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/check.mjs [app-client] (ecmascript) <export default as Check>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/sparkles.mjs [app-client] (ecmascript) <export default as Sparkles>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$phone$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Phone$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/phone.mjs [app-client] (ecmascript) <export default as Phone>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/calendar.mjs [app-client] (ecmascript) <export default as Calendar>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__User$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/user.mjs [app-client] (ecmascript) <export default as User>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$globe$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Globe$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/globe.mjs [app-client] (ecmascript) <export default as Globe>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$flame$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Flame$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/flame.mjs [app-client] (ecmascript) <export default as Flame>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.mjs [app-client] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2d$check$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ShieldCheck$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/shield-check.mjs [app-client] (ecmascript) <export default as ShieldCheck>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$heart$2d$handshake$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__HeartHandshake$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/heart-handshake.mjs [app-client] (ecmascript) <export default as HeartHandshake>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$gift$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Gift$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/gift.mjs [app-client] (ecmascript) <export default as Gift>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$list$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__List$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/list.mjs [app-client] (ecmascript) <export default as List>");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$order$2d$now$2d$modal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/order-now-modal.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
// ==========================================
// OVERSEAS POOJA DATA
// ==========================================
const overseasPoojas = [
    // ========================================
    // 1. THIRUMANJAM
    // ========================================
    {
        id: "thirumanjam",
        name: "Thirumanjam",
        iconType: "other",
        tagline: "Sacred ritual bathing of the deity performed with devotion in holy temples on your behalf.",
        description: "Thirumanjam is the sacred ritual bathing (Abhishekam) of the temple deity using milk, honey, curd, panchamirtham, sandalwood, and holy teertham. Performed by our priests in India on your name and gotra, with photos, videos, and prasadam delivered to your doorstep.",
        image: "/images/temple_sanctum_altar.jpg",
        templeName: "Renowned Agamic Temples Across India",
        highlights: [
            "Performed by experienced Vedic priests",
            "In a sacred and powerful temple",
            "Photos & videos of the pooja",
            "Prasadam delivered worldwide"
        ],
        items: [
            {
                sno: 1,
                english: "Betel Leaves",
                tamil: "வெற்றிலை",
                quantity: "21 Pieces"
            },
            {
                sno: 2,
                english: "Areca Nuts",
                tamil: "பாக்கு",
                quantity: "21 Pieces"
            },
            {
                sno: 3,
                english: "Coconut",
                tamil: "தேங்காய்",
                quantity: "2 Pieces"
            },
            {
                sno: 4,
                english: "Turmeric",
                tamil: "மஞ்சள்",
                quantity: "1 Packet"
            },
            {
                sno: 5,
                english: "Kumkum",
                tamil: "குங்குமம்",
                quantity: "1 Packet"
            },
            {
                sno: 6,
                english: "Panchamirtham",
                tamil: "பஞ்சாமிர்தம்",
                quantity: "1 Bowl"
            },
            {
                sno: 7,
                english: "Ghee (Cow Ghee)",
                tamil: "நெய்",
                quantity: "1 Small Cup"
            },
            {
                sno: 8,
                english: "Sandalwood Paste",
                tamil: "சந்தனம்",
                quantity: "1 Cup"
            },
            {
                sno: 9,
                english: "Incense Sticks",
                tamil: "அகர்பத்தி",
                quantity: "1 Packet"
            },
            {
                sno: 10,
                english: "Camphor (Karpooram)",
                tamil: "கற்பூரம்",
                quantity: "1 Packet"
            }
        ],
        process: [
            {
                step: "01",
                title: "Individual Sankalpam by Name & Gotram",
                desc: "The head priest recites your Full Name, Nakshatra, Rasi, Gotram, and country of residence at the deity's sanctum."
            },
            {
                step: "02",
                title: "Maha Abhishekam (Thirumanjam)",
                desc: "Sacred ritual bathing of the deity using pure cow milk, honey, curd, panchamirtham, sandalwood paste, and holy teertham."
            },
            {
                step: "03",
                title: "Alankaram & Maha Deeparadhana",
                desc: "Adorning the deity with silk vastrams, garlands, and waving multi-tiered camphor lamps with Vedic chants."
            },
            {
                step: "04",
                title: "Sanctification & International Dispatch",
                desc: "Energized Prasadham is carefully packed and couriered with tracking."
            }
        ],
        benefits: [
            {
                title: "Spiritual Elevation & Peace",
                desc: "A devotional ritual intended to support spiritual peace and positive energy, no matter where you live."
            },
            {
                title: "Family Harmony & Well-being",
                desc: "Performed with prayers for the well-being and harmony of your entire family abroad."
            },
            {
                title: "Generational Blessings",
                desc: "A traditional devotional offering seeking divine grace and blessings for your family."
            }
        ],
        notes: [
            "Prasadam is dispatched via international courier with tracking.",
            "High-resolution photos & video clips of your personalized Sankalpam can be shared via WhatsApp & Email.",
            "Custom timings can be discussed according to your overseas timezone."
        ]
    },
    // ========================================
    // 2. VASTU SHANTI POOJA
    // ========================================
    {
        id: "vastu-shanti-pooja",
        name: "Vastu Shanti Pooja",
        iconType: "vastu",
        tagline: "Sanctify your overseas home, apartment, or business space with ancient Vedic traditions.",
        description: "Vastu Shanti Pooja conducted by Vedic priests in India is a traditional ritual performed with prayers for harmony, peace, and auspiciousness in your residence or office anywhere abroad.",
        image: "/images/kalash.jpg",
        templeName: "Sri Vastu Bhagavan Temple / Sacred Agamic Sthalam",
        highlights: [
            "Special Vastu Purusha Mandala invocation",
            "Consecrated Copper Vastu Yantra included in Prasadam",
            "Traditional prayers for spatial harmony",
            "Peace, harmony, and prosperity prayers for overseas homes"
        ],
        items: [
            {
                sno: 1,
                english: "Copper Vastu Purusha Yantra",
                tamil: "செம்பு வாஸ்து யந்திரம்",
                quantity: "1 No"
            },
            {
                sno: 2,
                english: "Navadhanyam & Gemstone Set",
                tamil: "நவதானியம் & நவரத்தினம்",
                quantity: "1 Set"
            },
            {
                sno: 3,
                english: "Pure Brass Kalash & Coconut",
                tamil: "கலசம் & தேங்காய்",
                quantity: "1 Set"
            },
            {
                sno: 4,
                english: "Turmeric, Kumkum & Akshatha",
                tamil: "மஞ்சள், குங்குமம், அட்சதை",
                quantity: "1 Set"
            },
            {
                sno: 5,
                english: "Homam Dravyas & Pure Ghee",
                tamil: "ஹோம பொருட்கள் & நெய்",
                quantity: "1 Set"
            },
            {
                sno: 6,
                english: "Pooja Flowers & Incense",
                tamil: "பூக்கள் & சாம்பிராணி",
                quantity: "1 Set"
            }
        ],
        process: [
            {
                step: "01",
                title: "Directional Cleansing & Sankalpam",
                desc: "Invoking the directional deities while mentioning your overseas property details."
            },
            {
                step: "02",
                title: "Vastu Suktha Homam",
                desc: "Traditional offerings of sacred herbs and ghee into the consecrated fire."
            },
            {
                step: "03",
                title: "Yantra Prana Prathishta",
                desc: "Consecrating the pure copper Vastu Yantra with traditional sacred mantras."
            },
            {
                step: "04",
                title: "Courier Dispatch of Energized Yantra",
                desc: "Dispatching the Yantra with placement instructions for your overseas home."
            }
        ],
        benefits: [
            {
                title: "Traditional Vastu Blessings",
                desc: "A traditional devotional ceremony seeking harmony and auspiciousness for the property."
            },
            {
                title: "Domestic Peace & Family Harmony",
                desc: "Performed with prayers for peace, harmony, and well-being within the household."
            }
        ],
        notes: [
            "Placement instructions with cardinal direction guidance will be included with the package."
        ]
    },
    // ========================================
    // 3. AYUSH HOMAM
    // ========================================
    {
        id: "ayush-homam",
        name: "Ayush Homam",
        iconType: "ayush",
        tagline: "Invoke traditional prayers for longevity, well-being, and protection for children and elders.",
        description: "Ayushya Homam is a traditional Vedic ritual performed with prayers for long life and well-being. It may be arranged for birthdays, newborns, milestone occasions, or family members.",
        image: "/images/about/hero_kalash.jpg",
        templeName: "Thirukkadaiyur Amirthakadeswarar Abhirami Temple",
        highlights: [
            "Conducted at renowned longevity temples in India",
            "Traditional Ayushya Devata prayers",
            "Suitable for important birthday milestones",
            "Protective Raksha thread delivered to your overseas home"
        ],
        items: [
            {
                sno: 1,
                english: "Ayush Homam Sacred Herbs Set",
                tamil: "ஆயுஷ் மூலிகைகள்",
                quantity: "1 Set"
            },
            {
                sno: 2,
                english: "Charu (Sacred Boiled Rice Offering)",
                tamil: "ஹோம சாரு",
                quantity: "1 Pot"
            },
            {
                sno: 3,
                english: "Pure Cow Ghee & Samithu",
                tamil: "பசு நெய் & சமித்து",
                quantity: "1 Set"
            },
            {
                sno: 4,
                english: "Brass Kalash & Holy Water",
                tamil: "கலச தீர்த்தம்",
                quantity: "1 Set"
            },
            {
                sno: 5,
                english: "Turmeric, Kumkum & Vibhuti",
                tamil: "மஞ்சள், குங்குமம், திருநீறு",
                quantity: "1 Set"
            },
            {
                sno: 6,
                english: "Fresh Floral Garlands",
                tamil: "பூ மாலைகள்",
                quantity: "2 Nos"
            }
        ],
        process: [
            {
                step: "01",
                title: "Ayur Devata Sankalpam",
                desc: "Reciting the devotee's Janma Nakshatram and Gotram while offering prayers for longevity."
            },
            {
                step: "02",
                title: "Ayushya Suktham & Moola Mantra Homam",
                desc: "Traditional chanting and sacred offerings into the consecrated fire."
            },
            {
                step: "03",
                title: "Maha Abhishekam & Arathi",
                desc: "Offering sanctified holy water and deepams to the deity with priest blessings."
            },
            {
                step: "04",
                title: "Worldwide Delivery of Prasadam",
                desc: "Raksha thread, holy ash, and prasadam dispatched via international courier."
            }
        ],
        benefits: [
            {
                title: "Prayers for Long Life & Well-being",
                desc: "A traditional homam performed with prayers for longevity, vitality, and family well-being."
            },
            {
                title: "Blessings for Children",
                desc: "Can be arranged for children and babies as part of traditional birthday and family rituals."
            }
        ],
        notes: [
            "Can be conducted on your Janma Nakshatra day according to the Hindu Panchangam."
        ]
    },
    // ========================================
    // 4. KALYANA POOJA
    // ========================================
    {
        id: "kalyana-pooja",
        name: "Kalyana Pooja",
        iconType: "kalyana",
        tagline: "Traditional prayers seeking divine blessings for marriage and harmonious family life.",
        description: "Kalyana Utsavam and Swayamvara Parvathi Pooja can be performed on your behalf in famous marriage blessing temples such as Thirumanancheri, Srivilliputhur, or Madurai Meenakshi.",
        image: "/images/navratri.jpg",
        templeName: "Thirumanancheri Kalyanasundareswarar Temple",
        highlights: [
            "Performed at sacred marriage temples in India",
            "Swayamvara Parvathi Japa & Mangala Archana",
            "Traditional prayers for matrimonial blessings",
            "Blessed marriage garland prasadam sent overseas"
        ],
        items: [
            {
                sno: 1,
                english: "Marriage Flower Garland (Varmala)",
                tamil: "திருமண மாலை",
                quantity: "1 Set"
            },
            {
                sno: 2,
                english: "Sacred Turmeric Root & Mangalya Thread",
                tamil: "மஞ்சள் கிழங்கு & கயிறு",
                quantity: "1 Set"
            },
            {
                sno: 3,
                english: "Pure Thazhampoo Kumkum",
                tamil: "தாழம்பூ குங்குமம்",
                quantity: "1 Box"
            },
            {
                sno: 4,
                english: "Sandalwood Paste & Akshatha",
                tamil: "சந்தனம் & அட்சதை",
                quantity: "1 Box"
            },
            {
                sno: 5,
                english: "Betel Leaves, Nuts & Coconut",
                tamil: "வெற்றிலை பாக்கு & தேங்காய்",
                quantity: "1 Set"
            },
            {
                sno: 6,
                english: "Sweet Naivedyam & Prasadam",
                tamil: "நைவேத்தியம் & பிரசாதம்",
                quantity: "1 Set"
            }
        ],
        process: [
            {
                step: "01",
                title: "Swayamvara Parvathi Sankalpam",
                desc: "Announcing the devotee's name, Nakshatram, and Gotram while offering traditional prayers."
            },
            {
                step: "02",
                title: "Kalyana Utsavam Archana",
                desc: "Chanting traditional divine names and offering fragrant blossoms at the deity's feet."
            },
            {
                step: "03",
                title: "Garland Sanctification & Mangala Arathi",
                desc: "Sanctifying the sacred garland and turmeric thread on the deity's altar."
            },
            {
                step: "04",
                title: "International Courier Dispatch",
                desc: "Carefully packing the sanctified garland, kumkum, and turmeric for international transit."
            }
        ],
        benefits: [
            {
                title: "Marriage Blessings",
                desc: "Traditional prayers seeking auspicious matrimonial opportunities and blessings."
            },
            {
                title: "Harmonious Family Life",
                desc: "Devotional prayers seeking mutual understanding, peace, and harmony."
            }
        ],
        notes: [
            "Sanctified turmeric and kumkum can be preserved and used by the devotee."
        ]
    },
    // ========================================
    // 5. SUDARSHANA HOMAM
    // ========================================
    {
        id: "sudarshana-homam",
        name: "Sudarshana Homam",
        iconType: "sudarshana",
        tagline: "Traditional prayers for protection, courage, peace, and removal of obstacles.",
        description: "Sudarshana Homam invokes Lord Sudarshana and Lord Narasimha through traditional prayers and homam rituals. It may be arranged for devotees seeking spiritual protection and strength during difficult circumstances.",
        image: "/images/temple_hero_gopuram.jpg",
        templeName: "Kanchipuram Sri Varadaraja Perumal Temple / Srirangam",
        highlights: [
            "Performed by experienced Vaishnavite priests",
            "Sudarshana Mantra & Narasimha prayers",
            "Traditional prayers for protection and peace",
            "Consecrated Sudarshana Yantra dispatched"
        ],
        items: [
            {
                sno: 1,
                english: "Sudarshana Yantra (Copper/Silver)",
                tamil: "சுதர்சன யந்திரம்",
                quantity: "1 No"
            },
            {
                sno: 2,
                english: "Tulsi Leaves (Thiruthuzhai)",
                tamil: "துளசி தளம்",
                quantity: "1 Bunch"
            },
            {
                sno: 3,
                english: "Pure Cow Ghee & White Mustard Seeds",
                tamil: "பசு நெய் & வெண்கடுகு",
                quantity: "1 Set"
            },
            {
                sno: 4,
                english: "Homam Samithu & Sacred Herbs",
                tamil: "ஹோம சமித்து & மூலிகைகள்",
                quantity: "1 Set"
            },
            {
                sno: 5,
                english: "Fragrant Sandalwood & Kumkum",
                tamil: "சந்தனம் & குங்குமம்",
                quantity: "1 Set"
            },
            {
                sno: 6,
                english: "Coconuts, Dry Fruits & Naivedyam",
                tamil: "தேங்காய் & நைவேத்தியம்",
                quantity: "1 Set"
            }
        ],
        process: [
            {
                step: "01",
                title: "Sudarshana Yantra Prathishta & Sankalpam",
                desc: "Invoking Lord Sudarshana while mentioning the devotee's Gotram, Nakshatram, and family names."
            },
            {
                step: "02",
                title: "Sudarshana & Narasimha Moola Mantra Havan",
                desc: "Chanting traditional stotras and offering sacred oblations into the consecrated fire altar."
            },
            {
                step: "03",
                title: "Maha Poornahuthi & Raksha Bandhan",
                desc: "Completing the homam and blessing sacred Raksha threads through traditional rituals."
            },
            {
                step: "04",
                title: "International Courier Delivery",
                desc: "Dispatching the energized Sudarshana Yantra and Raksha threads via tracked international express."
            }
        ],
        benefits: [
            {
                title: "Traditional Spiritual Protection",
                desc: "A devotional ritual seeking courage, peace, and protection from negative influences."
            },
            {
                title: "Strength During Difficult Times",
                desc: "Traditional prayers seeking confidence and divine support while facing obstacles."
            }
        ],
        notes: [
            "Prasadam may include an energized Sudarshana coin or pocket yantra."
        ]
    },
    // ========================================
    // 6. OTHER POOJAS
    // ========================================
    {
        id: "other-poojas",
        name: "Other Poojas",
        iconType: "other",
        tagline: "Custom Vedic rituals in sacred temples across India on your behalf.",
        description: "Request any specific temple pooja, abhishekam, archana, or homam across Tamil Nadu, Kerala, Andhra, or Karnataka. Our Vedic network can arrange personalized rituals with photo/video updates and worldwide prasadam delivery.",
        image: "/images/about/story_thali.jpg",
        templeName: "Any Ancient Temple across India",
        highlights: [
            "Custom temple selection based on your family deity",
            "Special Abhishekam, Sahasranamam, or homam arrangements",
            "Direct coordinator support via WhatsApp",
            "Worldwide doorstep delivery of Prasadam"
        ],
        items: [
            {
                sno: 1,
                english: "Personalized Pooja Dravyas Set",
                tamil: "பூஜை பொருட்கள் தொகுப்பு",
                quantity: "1 Set"
            },
            {
                sno: 2,
                english: "Sacred Temple Prasadham Box",
                tamil: "கோவில் பிரசாத பெட்டி",
                quantity: "1 Box"
            },
            {
                sno: 3,
                english: "Vibhuti, Kumkum & Chandanam",
                tamil: "திருநீறு, குங்குமம், சந்தனம்",
                quantity: "1 Set"
            },
            {
                sno: 4,
                english: "Energized Deity Photo & Raksha",
                tamil: "சாமி படம் & காப்பு கயிறு",
                quantity: "1 Set"
            }
        ],
        process: [
            {
                step: "01",
                title: "Temple & Ritual Consultation",
                desc: "Our Vedic coordinator contacts you to confirm your desired temple, deity, Gotram, and prayer date."
            },
            {
                step: "02",
                title: "Temple Priests Coordination",
                desc: "Engaging the temple priests for your customized ritual and archana."
            },
            {
                step: "03",
                title: "Video / Photo Capture",
                desc: "Recording the sacred Sankalpam and archana rituals for your reference."
            },
            {
                step: "04",
                title: "Secure Worldwide Dispatch",
                desc: "Shipping sanctified Prasadam to your international address with tracking."
            }
        ],
        benefits: [
            {
                title: "Connection to Ancestral Temples",
                desc: "Stay connected to your Kuladeivam and ancestral temples regardless of distance."
            },
            {
                title: "Complete Flexibility",
                desc: "Choose a specific temple or ritual according to your family's devotional requirements."
            }
        ],
        notes: [
            "Custom quotes and dates are provided based on the selected temple and ritual complexity."
        ]
    },
    // ========================================
    // 7. GANAPATHI / NAVAGRAHA EXAMPLE
    // ========================================
    {
        id: "ganapathy-pooja",
        name: "Ganapathy Pooja",
        iconType: "ganesh",
        tagline: "Begin auspicious occasions with traditional prayers to Lord Ganesha.",
        description: "Ganapathy Pooja is performed by experienced priests in India with traditional offerings and prayers seeking auspicious beginnings, peace, and the removal of obstacles.",
        image: "/images/temple_sanctum_altar.jpg",
        templeName: "Renowned Ganapathy Temples Across India",
        highlights: [
            "Traditional Ganapathy Archana",
            "Performed by experienced Vedic priests",
            "Personalized Sankalpam using devotee details",
            "Prasadam delivered worldwide"
        ],
        items: [
            {
                sno: 1,
                english: "Coconut",
                tamil: "தேங்காய்",
                quantity: "5 Pieces"
            },
            {
                sno: 2,
                english: "Betel Leaves",
                tamil: "வெற்றிலை",
                quantity: "21 Pieces"
            },
            {
                sno: 3,
                english: "Areca Nuts",
                tamil: "பாக்கு",
                quantity: "21 Pieces"
            },
            {
                sno: 4,
                english: "Turmeric",
                tamil: "மஞ்சள்",
                quantity: "1 Packet"
            },
            {
                sno: 5,
                english: "Kumkum",
                tamil: "குங்குமம்",
                quantity: "1 Packet"
            },
            {
                sno: 6,
                english: "Flowers & Garland",
                tamil: "பூக்கள் & மாலை",
                quantity: "1 Set"
            }
        ],
        process: [
            {
                step: "01",
                title: "Devotee Sankalpam",
                desc: "Your name, Gotram, Nakshatram, and prayer intention are included in the Sankalpam."
            },
            {
                step: "02",
                title: "Ganapathy Archana",
                desc: "Traditional Ganapathy prayers and offerings are performed by the temple priest."
            },
            {
                step: "03",
                title: "Maha Arathi",
                desc: "The ritual concludes with traditional arathi and devotional offerings."
            },
            {
                step: "04",
                title: "Prasadam Dispatch",
                desc: "Prasadam is carefully packed and sent to your overseas address."
            }
        ],
        benefits: [
            {
                title: "Auspicious Beginnings",
                desc: "Traditional prayers seeking auspiciousness and divine blessings before important occasions."
            },
            {
                title: "Obstacle-Removal Prayers",
                desc: "Devotees may request traditional prayers seeking clarity, confidence, and removal of obstacles."
            }
        ],
        notes: [
            "The exact pooja procedure and samagri may vary depending on the selected temple."
        ]
    }
];
// ==========================================
// 4 OVERSEAS FEATURE CARDS
// ==========================================
const overseasFeatures = [
    {
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$flame$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Flame$3e$__["Flame"],
        title: "How It Works",
        description: "You choose the pooja, we perform it in the temple and share blessings with you."
    },
    {
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2d$check$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ShieldCheck$3e$__["ShieldCheck"],
        title: "Why Choose Us",
        description: "Authentic rituals, transparent process and trusted support for devotees worldwide."
    },
    {
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$heart$2d$handshake$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__HeartHandshake$3e$__["HeartHandshake"],
        title: "Our Promise",
        description: "Your devotion, our responsibility. We ensure every pooja is performed with sincerity."
    },
    {
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$globe$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Globe$3e$__["Globe"],
        title: "Delivery Worldwide",
        description: "Prasadam delivered to USA, UK, Canada, Australia and many more countries."
    }
];
function OverseasPackagePage() {
    _s();
    const API_BASE = "http://localhost:3001";
    const [selectedPooja, setSelectedPooja] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(overseasPoojas[0]);
    const [liveItems, setLiveItems] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(overseasPoojas[0].items);
    const [itemsLoading, setItemsLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [dynamicPrice, setDynamicPrice] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [activeTab, setActiveTab] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("details");
    const [isModalOpen, setIsModalOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [modalSuccess, setModalSuccess] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [formData, setFormData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
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
        specialPrayers: ""
    });
    const poojaSectionRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const packageDetailsRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    // BOOKING STATE
    // ORDER NOW (2-step order + payment) modal state.
    // Kept separate from the Iyer-request modal below.
    const [isOrderOpen, setIsOrderOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isBookingOpen, setIsBookingOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [bookingSuccess, setBookingSuccess] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [bookingForm, setBookingForm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        name: "",
        mobile: "",
        address: "",
        email: ""
    });
    const handleBookingSubmit = async (e)=>{
        e.preventDefault();
        try {
            const res = await fetch(`${API_BASE}/bookings`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    ...bookingForm,
                    pooja: `${selectedPooja.name} (Overseas)`
                })
            });
            if (!res.ok) throw new Error("Booking failed");
            setBookingSuccess(true);
            setTimeout(()=>{
                setBookingSuccess(false);
                setIsBookingOpen(false);
                setBookingForm({
                    name: "",
                    mobile: "",
                    address: "",
                    email: ""
                });
            }, 2500);
        } catch  {
            alert("Something went wrong. Please try again.");
        }
    };
    // ==========================================
    // LOAD LIVE ITEMS FOR THIRUMANJAM
    // ==========================================
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "OverseasPackagePage.useEffect": ()=>{
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
                        const mapped = data.map({
                            "OverseasPackagePage.useEffect.loadItems.mapped": (row)=>({
                                    sno: row.sno,
                                    english: row.english,
                                    tamil: row.tamil ?? "",
                                    quantity: row.quantity ?? ""
                                })
                        }["OverseasPackagePage.useEffect.loadItems.mapped"]);
                        setLiveItems(mapped.length > 0 ? mapped : selectedPooja.items);
                    }
                } catch  {
                    if (!cancelled) {
                        setLiveItems(selectedPooja.items);
                    }
                } finally{
                    if (!cancelled) {
                        setItemsLoading(false);
                    }
                }
            }
            loadItems();
            return ({
                "OverseasPackagePage.useEffect": ()=>{
                    cancelled = true;
                }
            })["OverseasPackagePage.useEffect"];
        }
    }["OverseasPackagePage.useEffect"], [
        selectedPooja.id
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "OverseasPackagePage.useEffect": ()=>{
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
                        const mapped = data.map({
                            "OverseasPackagePage.useEffect.loadItems.mapped": (row)=>({
                                    sno: row.sno,
                                    english: row.english,
                                    tamil: row.tamil ?? "",
                                    quantity: row.quantity ?? ""
                                })
                        }["OverseasPackagePage.useEffect.loadItems.mapped"]);
                        setLiveItems(mapped.length > 0 ? mapped : selectedPooja.items);
                    }
                } catch  {
                    if (!cancelled) {
                        setLiveItems(selectedPooja.items);
                    }
                } finally{
                    if (!cancelled) {
                        setItemsLoading(false);
                    }
                }
            }
            loadItems();
            return ({
                "OverseasPackagePage.useEffect": ()=>{
                    cancelled = true;
                }
            })["OverseasPackagePage.useEffect"];
        }
    }["OverseasPackagePage.useEffect"], [
        selectedPooja.id
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "OverseasPackagePage.useEffect": ()=>{
            if (selectedPooja.id !== "thirumanjam") {
                setDynamicPrice(null);
                return;
            }
            let cancelled = false;
            async function loadPrice() {
                try {
                    const res = await fetch(`${API_BASE}/package-prices/overseas-thirumanjam`);
                    if (res.ok) {
                        const data = await res.json();
                        if (!cancelled && data?.price) {
                            setDynamicPrice(data.price);
                        }
                    }
                } catch (error) {
                    console.error("Failed to load overseas package price:", error);
                }
            }
            loadPrice();
            return ({
                "OverseasPackagePage.useEffect": ()=>{
                    cancelled = true;
                }
            })["OverseasPackagePage.useEffect"];
        }
    }["OverseasPackagePage.useEffect"], [
        selectedPooja.id
    ]);
    // ==========================================
    // HASH NAVIGATION
    // ==========================================
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "OverseasPackagePage.useEffect": ()=>{
            const handleHash = {
                "OverseasPackagePage.useEffect.handleHash": ()=>{
                    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
                    ;
                    const rawHash = window.location.hash.replace("#", "").toLowerCase().trim();
                    if (!rawHash) return;
                    const normalizedHash = rawHash.replace(/-/g, "");
                    const match = overseasPoojas.find({
                        "OverseasPackagePage.useEffect.handleHash.match": (p)=>{
                            const normalizedId = p.id.toLowerCase().replace(/-/g, "");
                            const normalizedName = p.name.toLowerCase().replace(/[^a-z0-9]/g, "");
                            return p.id.toLowerCase() === rawHash || rawHash.includes(p.id.toLowerCase()) || normalizedId.includes(normalizedHash) || normalizedName.includes(normalizedHash);
                        }
                    }["OverseasPackagePage.useEffect.handleHash.match"]);
                    if (match) {
                        setSelectedPooja(match);
                        setFormData({
                            "OverseasPackagePage.useEffect.handleHash": (prev)=>({
                                    ...prev,
                                    pooja: match.name
                                })
                        }["OverseasPackagePage.useEffect.handleHash"]);
                        setActiveTab("details");
                        setTimeout({
                            "OverseasPackagePage.useEffect.handleHash": ()=>{
                                const el = document.getElementById("overseas-details-section") || packageDetailsRef.current;
                                if (el) {
                                    el.scrollIntoView({
                                        behavior: "smooth",
                                        block: "start"
                                    });
                                }
                            }
                        }["OverseasPackagePage.useEffect.handleHash"], 120);
                    }
                }
            }["OverseasPackagePage.useEffect.handleHash"];
            handleHash();
            window.addEventListener("hashchange", handleHash);
            return ({
                "OverseasPackagePage.useEffect": ()=>{
                    window.removeEventListener("hashchange", handleHash);
                }
            })["OverseasPackagePage.useEffect"];
        }
    }["OverseasPackagePage.useEffect"], []);
    // ==========================================
    // SELECT POOJA
    // ==========================================
    const handleSelectPooja = (pooja)=>{
        setSelectedPooja(pooja);
        setFormData((prev)=>({
                ...prev,
                pooja: pooja.name
            }));
    };
    // ==========================================
    // FORM SUBMIT
    // ==========================================
    const handleFormSubmit = (e)=>{
        e.preventDefault();
        setModalSuccess(true);
        setTimeout(()=>{
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
                specialPrayers: ""
            });
        }, 2500);
    };
    // ==========================================
    // POOJA ICON
    // ==========================================
    const renderPoojaIcon = (type, isActive)=>{
        const strokeColor = isActive ? "#FFFFFF" : "#B08A45";
        switch(type){
            case "ganesh":
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                    viewBox: "0 0 24 24",
                    fill: "none",
                    stroke: strokeColor,
                    strokeWidth: "1.6",
                    className: "w-8 h-8",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                            cx: "12",
                            cy: "7",
                            r: "3.5"
                        }, void 0, false, {
                            fileName: "[project]/app/overseas/page-client.tsx",
                            lineNumber: 1127,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            d: "M7 11c0 5 2 9 5 9s5-4 5-9"
                        }, void 0, false, {
                            fileName: "[project]/app/overseas/page-client.tsx",
                            lineNumber: 1128,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            d: "M12 10.5v3.5a1.5 1.5 0 0 0 3 0"
                        }, void 0, false, {
                            fileName: "[project]/app/overseas/page-client.tsx",
                            lineNumber: 1129,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            d: "M6 8.5C4 9 3 11 3 13"
                        }, void 0, false, {
                            fileName: "[project]/app/overseas/page-client.tsx",
                            lineNumber: 1130,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            d: "M18 8.5C20 9 21 11 21 13"
                        }, void 0, false, {
                            fileName: "[project]/app/overseas/page-client.tsx",
                            lineNumber: 1131,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/overseas/page-client.tsx",
                    lineNumber: 1120,
                    columnNumber: 11
                }, this);
            case "navagraha":
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                    viewBox: "0 0 24 24",
                    fill: "none",
                    stroke: strokeColor,
                    strokeWidth: "1.6",
                    className: "w-8 h-8",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                            x: "3",
                            y: "3",
                            width: "18",
                            height: "18",
                            rx: "2"
                        }, void 0, false, {
                            fileName: "[project]/app/overseas/page-client.tsx",
                            lineNumber: 1144,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                            cx: "12",
                            cy: "12",
                            r: "2"
                        }, void 0, false, {
                            fileName: "[project]/app/overseas/page-client.tsx",
                            lineNumber: 1145,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                            cx: "7",
                            cy: "7",
                            r: "1.5"
                        }, void 0, false, {
                            fileName: "[project]/app/overseas/page-client.tsx",
                            lineNumber: 1146,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                            cx: "12",
                            cy: "7",
                            r: "1.5"
                        }, void 0, false, {
                            fileName: "[project]/app/overseas/page-client.tsx",
                            lineNumber: 1147,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                            cx: "17",
                            cy: "7",
                            r: "1.5"
                        }, void 0, false, {
                            fileName: "[project]/app/overseas/page-client.tsx",
                            lineNumber: 1148,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                            cx: "7",
                            cy: "12",
                            r: "1.5"
                        }, void 0, false, {
                            fileName: "[project]/app/overseas/page-client.tsx",
                            lineNumber: 1149,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                            cx: "17",
                            cy: "12",
                            r: "1.5"
                        }, void 0, false, {
                            fileName: "[project]/app/overseas/page-client.tsx",
                            lineNumber: 1150,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                            cx: "7",
                            cy: "17",
                            r: "1.5"
                        }, void 0, false, {
                            fileName: "[project]/app/overseas/page-client.tsx",
                            lineNumber: 1151,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                            cx: "12",
                            cy: "17",
                            r: "1.5"
                        }, void 0, false, {
                            fileName: "[project]/app/overseas/page-client.tsx",
                            lineNumber: 1152,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                            cx: "17",
                            cy: "17",
                            r: "1.5"
                        }, void 0, false, {
                            fileName: "[project]/app/overseas/page-client.tsx",
                            lineNumber: 1153,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/overseas/page-client.tsx",
                    lineNumber: 1137,
                    columnNumber: 11
                }, this);
            case "vastu":
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                    viewBox: "0 0 24 24",
                    fill: "none",
                    stroke: strokeColor,
                    strokeWidth: "1.6",
                    className: "w-8 h-8",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            d: "M12 2L2 7l10 5 10-5-10-5z"
                        }, void 0, false, {
                            fileName: "[project]/app/overseas/page-client.tsx",
                            lineNumber: 1166,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            d: "M2 17l10 5 10-5"
                        }, void 0, false, {
                            fileName: "[project]/app/overseas/page-client.tsx",
                            lineNumber: 1167,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            d: "M2 12l10 5 10-5"
                        }, void 0, false, {
                            fileName: "[project]/app/overseas/page-client.tsx",
                            lineNumber: 1168,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/overseas/page-client.tsx",
                    lineNumber: 1159,
                    columnNumber: 11
                }, this);
            case "ayush":
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                    viewBox: "0 0 24 24",
                    fill: "none",
                    stroke: strokeColor,
                    strokeWidth: "1.6",
                    className: "w-8 h-8",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            d: "M12 2a4 4 0 0 0-4 4c0 3 4 7 4 7s4-4 4-7a4 4 0 0 0-4-4z"
                        }, void 0, false, {
                            fileName: "[project]/app/overseas/page-client.tsx",
                            lineNumber: 1181,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                            cx: "12",
                            cy: "18",
                            r: "3"
                        }, void 0, false, {
                            fileName: "[project]/app/overseas/page-client.tsx",
                            lineNumber: 1182,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            d: "M5 21c1.5-2 4-3 7-3s5.5 1 7 3"
                        }, void 0, false, {
                            fileName: "[project]/app/overseas/page-client.tsx",
                            lineNumber: 1183,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/overseas/page-client.tsx",
                    lineNumber: 1174,
                    columnNumber: 11
                }, this);
            case "kalyana":
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                    viewBox: "0 0 24 24",
                    fill: "none",
                    stroke: strokeColor,
                    strokeWidth: "1.6",
                    className: "w-8 h-8",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                            cx: "9",
                            cy: "8",
                            r: "3"
                        }, void 0, false, {
                            fileName: "[project]/app/overseas/page-client.tsx",
                            lineNumber: 1196,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                            cx: "15",
                            cy: "8",
                            r: "3"
                        }, void 0, false, {
                            fileName: "[project]/app/overseas/page-client.tsx",
                            lineNumber: 1197,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            d: "M4 20v-2a4 4 0 0 1 4-4h2"
                        }, void 0, false, {
                            fileName: "[project]/app/overseas/page-client.tsx",
                            lineNumber: 1198,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            d: "M20 20v-2a4 4 0 0 0-4-4h-2"
                        }, void 0, false, {
                            fileName: "[project]/app/overseas/page-client.tsx",
                            lineNumber: 1199,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            d: "M12 13v4"
                        }, void 0, false, {
                            fileName: "[project]/app/overseas/page-client.tsx",
                            lineNumber: 1200,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            d: "M10 15h4"
                        }, void 0, false, {
                            fileName: "[project]/app/overseas/page-client.tsx",
                            lineNumber: 1201,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/overseas/page-client.tsx",
                    lineNumber: 1189,
                    columnNumber: 11
                }, this);
            case "sudarshana":
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                    viewBox: "0 0 24 24",
                    fill: "none",
                    stroke: strokeColor,
                    strokeWidth: "1.6",
                    className: "w-8 h-8",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                            cx: "12",
                            cy: "12",
                            r: "9"
                        }, void 0, false, {
                            fileName: "[project]/app/overseas/page-client.tsx",
                            lineNumber: 1214,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                            cx: "12",
                            cy: "12",
                            r: "3"
                        }, void 0, false, {
                            fileName: "[project]/app/overseas/page-client.tsx",
                            lineNumber: 1215,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            d: "M12 3v6"
                        }, void 0, false, {
                            fileName: "[project]/app/overseas/page-client.tsx",
                            lineNumber: 1216,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            d: "M12 15v6"
                        }, void 0, false, {
                            fileName: "[project]/app/overseas/page-client.tsx",
                            lineNumber: 1217,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            d: "M3 12h6"
                        }, void 0, false, {
                            fileName: "[project]/app/overseas/page-client.tsx",
                            lineNumber: 1218,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            d: "M15 12h6"
                        }, void 0, false, {
                            fileName: "[project]/app/overseas/page-client.tsx",
                            lineNumber: 1219,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            d: "M5.6 5.6l4.2 4.2"
                        }, void 0, false, {
                            fileName: "[project]/app/overseas/page-client.tsx",
                            lineNumber: 1220,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            d: "M14.2 14.2l4.2 4.2"
                        }, void 0, false, {
                            fileName: "[project]/app/overseas/page-client.tsx",
                            lineNumber: 1221,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            d: "M18.4 5.6l-4.2 4.2"
                        }, void 0, false, {
                            fileName: "[project]/app/overseas/page-client.tsx",
                            lineNumber: 1222,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            d: "M9.8 14.2l-4.2 4.2"
                        }, void 0, false, {
                            fileName: "[project]/app/overseas/page-client.tsx",
                            lineNumber: 1223,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/overseas/page-client.tsx",
                    lineNumber: 1207,
                    columnNumber: 11
                }, this);
            case "other":
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                    viewBox: "0 0 24 24",
                    fill: "none",
                    stroke: strokeColor,
                    strokeWidth: "1.6",
                    className: "w-8 h-8",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                            cx: "12",
                            cy: "12",
                            r: "9"
                        }, void 0, false, {
                            fileName: "[project]/app/overseas/page-client.tsx",
                            lineNumber: 1236,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                            cx: "8",
                            cy: "12",
                            r: "1",
                            fill: strokeColor
                        }, void 0, false, {
                            fileName: "[project]/app/overseas/page-client.tsx",
                            lineNumber: 1237,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                            cx: "12",
                            cy: "12",
                            r: "1",
                            fill: strokeColor
                        }, void 0, false, {
                            fileName: "[project]/app/overseas/page-client.tsx",
                            lineNumber: 1238,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                            cx: "16",
                            cy: "12",
                            r: "1",
                            fill: strokeColor
                        }, void 0, false, {
                            fileName: "[project]/app/overseas/page-client.tsx",
                            lineNumber: 1239,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/overseas/page-client.tsx",
                    lineNumber: 1229,
                    columnNumber: 11
                }, this);
            default:
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__["Sparkles"], {
                    className: "w-8 h-8",
                    stroke: strokeColor
                }, void 0, false, {
                    fileName: "[project]/app/overseas/page-client.tsx",
                    lineNumber: 1245,
                    columnNumber: 11
                }, this);
        }
    };
    // ==========================================
    // JSX
    // ==========================================
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        className: "jsx-c1f854d6adf2d02f" + " " + "min-h-screen bg-[#FAF6EE] text-[#29231F] font-sans antialiased selection:bg-[#B08A45]/30",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                id: "c1f854d6adf2d02f",
                children: "@keyframes priest-blink{0%,to{opacity:1;box-shadow:0 0 #f3d78a00}50%{opacity:.7;box-shadow:0 0 14px #f3d78ae6}}.animate-priest-blink{animation:1.6s ease-in-out infinite priest-blink}"
            }, void 0, false, void 0, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "jsx-c1f854d6adf2d02f" + " " + "relative pt-[90px] overflow-hidden min-h-[620px] border-b border-[#E8DDC8]",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "jsx-c1f854d6adf2d02f" + " " + "absolute inset-0 top-[90px]",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            src: "/images/overseas-banner.png",
                            alt: "Ancient Indian temple gopuram",
                            fill: true,
                            priority: true,
                            sizes: "100vw",
                            className: "object-cover object-center"
                        }, void 0, false, {
                            fileName: "[project]/app/overseas/page-client.tsx",
                            lineNumber: 1275,
                            columnNumber: 5
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/overseas/page-client.tsx",
                        lineNumber: 1274,
                        columnNumber: 3
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "jsx-c1f854d6adf2d02f" + " " + "relative z-10 mx-auto max-w-[1600px] min-h-[560px] lg:min-h-[620px]",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "jsx-c1f854d6adf2d02f" + " " + "w-full max-w-[760px] flex flex-col justify-start min-h-[560px] lg:min-h-[620px] pt-20 sm:pt-24 lg:pt-32 pb-10 px-6 sm:px-10 lg:pl-16 lg:pr-8",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "jsx-c1f854d6adf2d02f",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                        style: {
                                            textShadow: "0 2px 10px rgba(255,255,255,0.35)"
                                        },
                                        className: "jsx-c1f854d6adf2d02f" + " " + "font-[family-name:var(--font-cormorant)] text-4xl sm:text-5xl lg:text-6xl xl:text-[64px] font-bold tracking-tight text-[#42151B] leading-[1.12]",
                                        children: [
                                            "Overseas Temple ",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "jsx-c1f854d6adf2d02f" + " " + "text-[#B37D2A]",
                                                children: "Package"
                                            }, void 0, false, {
                                                fileName: "[project]/app/overseas/page-client.tsx",
                                                lineNumber: 1304,
                                                columnNumber: 23
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/overseas/page-client.tsx",
                                        lineNumber: 1300,
                                        columnNumber: 5
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "jsx-c1f854d6adf2d02f" + " " + "mt-4",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            style: {
                                                textShadow: "0 1px 8px rgba(255,255,255,0.4)"
                                            },
                                            className: "jsx-c1f854d6adf2d02f" + " " + "font-[family-name:var(--font-cormorant)] text-xl sm:text-2xl font-semibold text-[#42151B] leading-snug",
                                            children: "Experience sacred temple rituals performed with devotion and authenticity, helping you stay spiritually connected to timeless traditions and divine blessings."
                                        }, void 0, false, {
                                            fileName: "[project]/app/overseas/page-client.tsx",
                                            lineNumber: 1308,
                                            columnNumber: 7
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/app/overseas/page-client.tsx",
                                        lineNumber: 1307,
                                        columnNumber: 5
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/overseas/page-client.tsx",
                                lineNumber: 1288,
                                columnNumber: 3
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/app/overseas/page-client.tsx",
                            lineNumber: 1287,
                            columnNumber: 5
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/overseas/page-client.tsx",
                        lineNumber: 1285,
                        columnNumber: 1
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/overseas/page-client.tsx",
                lineNumber: 1271,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "jsx-c1f854d6adf2d02f" + " " + "py-8 sm:py-12 px-4 sm:px-8 max-w-[1400px] mx-auto",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "jsx-c1f854d6adf2d02f" + " " + "relative rounded-2xl bg-[#FCFAF5] border border-[#DFCBB0] p-6 sm:p-8 shadow-[0_6px_25px_rgba(90,20,30,0.05)] overflow-hidden",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "jsx-c1f854d6adf2d02f" + " " + "absolute top-2 left-2 w-5 h-5 border-t-2 border-l-2 border-[#C79D55]"
                        }, void 0, false, {
                            fileName: "[project]/app/overseas/page-client.tsx",
                            lineNumber: 1372,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "jsx-c1f854d6adf2d02f" + " " + "absolute top-2 right-2 w-5 h-5 border-t-2 border-r-2 border-[#C79D55]"
                        }, void 0, false, {
                            fileName: "[project]/app/overseas/page-client.tsx",
                            lineNumber: 1373,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "jsx-c1f854d6adf2d02f" + " " + "absolute bottom-2 left-2 w-5 h-5 border-b-2 border-l-2 border-[#C79D55]"
                        }, void 0, false, {
                            fileName: "[project]/app/overseas/page-client.tsx",
                            lineNumber: 1374,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "jsx-c1f854d6adf2d02f" + " " + "absolute bottom-2 right-2 w-5 h-5 border-b-2 border-r-2 border-[#C79D55]"
                        }, void 0, false, {
                            fileName: "[project]/app/overseas/page-client.tsx",
                            lineNumber: 1375,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "jsx-c1f854d6adf2d02f" + " " + "hidden md:flex absolute top-0 left-12 flex-col items-center pointer-events-none opacity-80",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "jsx-c1f854d6adf2d02f" + " " + "w-px h-6 bg-[#B08A45]"
                                }, void 0, false, {
                                    fileName: "[project]/app/overseas/page-client.tsx",
                                    lineNumber: 1378,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "jsx-c1f854d6adf2d02f" + " " + "text-lg",
                                    children: "🔔"
                                }, void 0, false, {
                                    fileName: "[project]/app/overseas/page-client.tsx",
                                    lineNumber: 1379,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/overseas/page-client.tsx",
                            lineNumber: 1377,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "jsx-c1f854d6adf2d02f" + " " + "hidden md:flex absolute top-0 right-12 flex-col items-center pointer-events-none opacity-80",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "jsx-c1f854d6adf2d02f" + " " + "w-px h-6 bg-[#B08A45]"
                                }, void 0, false, {
                                    fileName: "[project]/app/overseas/page-client.tsx",
                                    lineNumber: 1383,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "jsx-c1f854d6adf2d02f" + " " + "text-lg",
                                    children: "🔔"
                                }, void 0, false, {
                                    fileName: "[project]/app/overseas/page-client.tsx",
                                    lineNumber: 1384,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/overseas/page-client.tsx",
                            lineNumber: 1382,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "jsx-c1f854d6adf2d02f" + " " + "grid grid-cols-1 md:grid-cols-12 items-center gap-6 relative z-10",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "jsx-c1f854d6adf2d02f" + " " + "md:col-span-3 flex justify-center md:justify-start",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "jsx-c1f854d6adf2d02f" + " " + "relative w-28 h-28 sm:w-36 sm:h-36 transition-transform hover:scale-105 duration-300",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            src: "/images/kalash_transparent.png",
                                            alt: "Sacred Kalash with Coconut and Mango Leaves",
                                            fill: true,
                                            className: "object-contain drop-shadow-[0_6px_14px_rgba(180,130,50,0.2)]"
                                        }, void 0, false, {
                                            fileName: "[project]/app/overseas/page-client.tsx",
                                            lineNumber: 1390,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/app/overseas/page-client.tsx",
                                        lineNumber: 1389,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/app/overseas/page-client.tsx",
                                    lineNumber: 1388,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "jsx-c1f854d6adf2d02f" + " " + "md:col-span-6 text-center px-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                            className: "jsx-c1f854d6adf2d02f" + " " + "font-[family-name:var(--font-cormorant)] text-2xl sm:text-3xl lg:text-[34px] font-bold text-[#42151B] leading-tight",
                                            children: "Sacred Rituals. Global Devotion."
                                        }, void 0, false, {
                                            fileName: "[project]/app/overseas/page-client.tsx",
                                            lineNumber: 1400,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "jsx-c1f854d6adf2d02f" + " " + "flex items-center justify-center gap-2 my-2.5",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "jsx-c1f854d6adf2d02f" + " " + "h-px w-10 bg-gradient-to-r from-transparent to-[#B08A45]"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/overseas/page-client.tsx",
                                                    lineNumber: 1405,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "jsx-c1f854d6adf2d02f" + " " + "w-1.5 h-1.5 rotate-45 bg-[#B08A45]"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/overseas/page-client.tsx",
                                                    lineNumber: 1406,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "jsx-c1f854d6adf2d02f" + " " + "h-px w-10 bg-gradient-to-l from-transparent to-[#B08A45]"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/overseas/page-client.tsx",
                                                    lineNumber: 1407,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/overseas/page-client.tsx",
                                            lineNumber: 1404,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "jsx-c1f854d6adf2d02f" + " " + "text-xs sm:text-sm font-medium text-[#7D5F42] tracking-wide",
                                            children: "We perform poojas and homams in holy temples and send back blessings to you."
                                        }, void 0, false, {
                                            fileName: "[project]/app/overseas/page-client.tsx",
                                            lineNumber: 1410,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/overseas/page-client.tsx",
                                    lineNumber: 1399,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "jsx-c1f854d6adf2d02f" + " " + "md:col-span-3 flex justify-center md:justify-end",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "jsx-c1f854d6adf2d02f" + " " + "relative w-28 h-28 sm:w-36 sm:h-36 transition-transform hover:scale-105 duration-300",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            src: "/images/brassplate_transparent.png",
                                            alt: "Traditional Brass Diya Plate",
                                            fill: true,
                                            className: "object-contain drop-shadow-[0_6px_14px_rgba(180,130,50,0.2)]"
                                        }, void 0, false, {
                                            fileName: "[project]/app/overseas/page-client.tsx",
                                            lineNumber: 1418,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/app/overseas/page-client.tsx",
                                        lineNumber: 1417,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/app/overseas/page-client.tsx",
                                    lineNumber: 1416,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/overseas/page-client.tsx",
                            lineNumber: 1387,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/overseas/page-client.tsx",
                    lineNumber: 1371,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/overseas/page-client.tsx",
                lineNumber: 1370,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                ref: poojaSectionRef,
                className: "jsx-c1f854d6adf2d02f" + " " + "py-8 sm:py-14 px-4 sm:px-8 max-w-[1400px] mx-auto",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "jsx-c1f854d6adf2d02f" + " " + "mt-8 rounded-2xl bg-white border border-[#DFCBB0] p-5 sm:p-8 shadow-[0_10px_35px_rgba(80,20,30,0.06)] overflow-hidden",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "jsx-c1f854d6adf2d02f" + " " + "grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-center",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "jsx-c1f854d6adf2d02f" + " " + "lg:col-span-5 relative aspect-[16/10] sm:aspect-[4/3] w-full rounded-xl overflow-hidden shadow-md border border-[#E9DDC9]",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        src: selectedPooja.image,
                                        alt: selectedPooja.name,
                                        fill: true,
                                        className: "object-cover",
                                        sizes: "(max-width: 1024px) 100vw, 40vw"
                                    }, void 0, false, {
                                        fileName: "[project]/app/overseas/page-client.tsx",
                                        lineNumber: 1494,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "jsx-c1f854d6adf2d02f" + " " + "absolute bottom-3 left-3 rounded-lg bg-[#4A1015]/90 px-3 py-1.5 text-xs font-semibold text-white shadow-md backdrop-blur-sm",
                                        children: [
                                            "Temple: ",
                                            selectedPooja.templeName
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/overseas/page-client.tsx",
                                        lineNumber: 1502,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/overseas/page-client.tsx",
                                lineNumber: 1493,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "jsx-c1f854d6adf2d02f" + " " + "lg:col-span-7 flex flex-col justify-center",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "jsx-c1f854d6adf2d02f" + " " + "font-[family-name:var(--font-cormorant)] text-2xl sm:text-3xl lg:text-4xl font-bold text-[#42151B]",
                                        children: selectedPooja.name
                                    }, void 0, false, {
                                        fileName: "[project]/app/overseas/page-client.tsx",
                                        lineNumber: 1508,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "jsx-c1f854d6adf2d02f" + " " + "mt-1 text-xs sm:text-sm font-semibold text-[#B37D2A]",
                                        children: selectedPooja.tagline
                                    }, void 0, false, {
                                        fileName: "[project]/app/overseas/page-client.tsx",
                                        lineNumber: 1512,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "jsx-c1f854d6adf2d02f" + " " + "mt-3 text-base leading-relaxed text-[#55463E] sm:text-lg",
                                        children: selectedPooja.description
                                    }, void 0, false, {
                                        fileName: "[project]/app/overseas/page-client.tsx",
                                        lineNumber: 1516,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "jsx-c1f854d6adf2d02f" + " " + "mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2",
                                        children: selectedPooja.highlights.map((highlight, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "jsx-c1f854d6adf2d02f" + " " + "flex items-start gap-2.5",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "jsx-c1f854d6adf2d02f" + " " + "w-5 h-5 rounded-full bg-[#FAF3E5] border border-[#D4B978] flex items-center justify-center text-[#7D1E28] shrink-0 mt-0.5",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__["Check"], {
                                                            size: 12,
                                                            strokeWidth: 2.5
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/overseas/page-client.tsx",
                                                            lineNumber: 1524,
                                                            columnNumber: 23
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/overseas/page-client.tsx",
                                                        lineNumber: 1523,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "jsx-c1f854d6adf2d02f" + " " + "text-base font-medium text-[#42151B] leading-snug sm:text-lg",
                                                        children: highlight
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/overseas/page-client.tsx",
                                                        lineNumber: 1527,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, idx, true, {
                                                fileName: "[project]/app/overseas/page-client.tsx",
                                                lineNumber: 1522,
                                                columnNumber: 19
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/app/overseas/page-client.tsx",
                                        lineNumber: 1520,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/overseas/page-client.tsx",
                                lineNumber: 1507,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/overseas/page-client.tsx",
                        lineNumber: 1492,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/app/overseas/page-client.tsx",
                    lineNumber: 1491,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/overseas/page-client.tsx",
                lineNumber: 1434,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                ref: packageDetailsRef,
                id: "overseas-details-section",
                className: "jsx-c1f854d6adf2d02f" + " " + "scroll-mt-28 py-8 sm:py-14 px-4 sm:px-8 max-w-[1400px] mx-auto",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "jsx-c1f854d6adf2d02f" + " " + "text-center mb-8 sm:mb-10",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "jsx-c1f854d6adf2d02f" + " " + "inline-block px-4 py-1 rounded-full bg-[#EFE3CF] border border-[#DECBB0] text-[11px] font-bold tracking-[0.25em] uppercase text-[#88242F] mb-3",
                                children: selectedPooja.name
                            }, void 0, false, {
                                fileName: "[project]/app/overseas/page-client.tsx",
                                lineNumber: 1548,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "jsx-c1f854d6adf2d02f" + " " + "font-[family-name:var(--font-cormorant)] text-3xl sm:text-4xl lg:text-[40px] font-bold text-[#42151B]",
                                children: "Package Details"
                            }, void 0, false, {
                                fileName: "[project]/app/overseas/page-client.tsx",
                                lineNumber: 1552,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "jsx-c1f854d6adf2d02f" + " " + "flex items-center justify-center gap-2 mt-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "jsx-c1f854d6adf2d02f" + " " + "h-px w-12 bg-gradient-to-r from-transparent to-[#B08A45]"
                                    }, void 0, false, {
                                        fileName: "[project]/app/overseas/page-client.tsx",
                                        lineNumber: 1557,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "jsx-c1f854d6adf2d02f" + " " + "w-1.5 h-1.5 rotate-45 border border-[#B08A45]"
                                    }, void 0, false, {
                                        fileName: "[project]/app/overseas/page-client.tsx",
                                        lineNumber: 1558,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "jsx-c1f854d6adf2d02f" + " " + "w-2.5 h-2.5 rotate-45 bg-[#B08A45]"
                                    }, void 0, false, {
                                        fileName: "[project]/app/overseas/page-client.tsx",
                                        lineNumber: 1559,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "jsx-c1f854d6adf2d02f" + " " + "w-1.5 h-1.5 rotate-45 border border-[#B08A45]"
                                    }, void 0, false, {
                                        fileName: "[project]/app/overseas/page-client.tsx",
                                        lineNumber: 1560,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "jsx-c1f854d6adf2d02f" + " " + "h-px w-12 bg-gradient-to-l from-transparent to-[#B08A45]"
                                    }, void 0, false, {
                                        fileName: "[project]/app/overseas/page-client.tsx",
                                        lineNumber: 1561,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/overseas/page-client.tsx",
                                lineNumber: 1556,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/overseas/page-client.tsx",
                        lineNumber: 1547,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "jsx-c1f854d6adf2d02f" + " " + "relative rounded-2xl bg-[#FCFAF5] border border-[#DFCBB0] p-4 sm:p-6 lg:p-7 shadow-[0_10px_35px_rgba(80,20,30,0.06)] overflow-hidden",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "jsx-c1f854d6adf2d02f" + " " + "absolute top-2 left-2 w-4 h-4 border-t-2 border-l-2 border-[#C79D55]"
                            }, void 0, false, {
                                fileName: "[project]/app/overseas/page-client.tsx",
                                lineNumber: 1566,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "jsx-c1f854d6adf2d02f" + " " + "absolute top-2 right-2 w-4 h-4 border-t-2 border-r-2 border-[#C79D55]"
                            }, void 0, false, {
                                fileName: "[project]/app/overseas/page-client.tsx",
                                lineNumber: 1567,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "jsx-c1f854d6adf2d02f" + " " + "absolute bottom-2 left-2 w-4 h-4 border-b-2 border-l-2 border-[#C79D55]"
                            }, void 0, false, {
                                fileName: "[project]/app/overseas/page-client.tsx",
                                lineNumber: 1568,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "jsx-c1f854d6adf2d02f" + " " + "absolute bottom-2 right-2 w-4 h-4 border-b-2 border-r-2 border-[#C79D55]"
                            }, void 0, false, {
                                fileName: "[project]/app/overseas/page-client.tsx",
                                lineNumber: 1569,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "jsx-c1f854d6adf2d02f" + " " + "grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "jsx-c1f854d6adf2d02f" + " " + "lg:col-span-3 bg-[#4A1015] rounded-xl p-3 sm:p-4 text-white shadow-md space-y-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                type: "button",
                                                onClick: ()=>setActiveTab("details"),
                                                className: "jsx-c1f854d6adf2d02f" + " " + `w-full flex items-center gap-3 px-4 py-3.5 rounded-lg text-left text-xs sm:text-sm font-medium transition-all duration-300 ${activeTab === "details" ? "bg-[#7D1E28] text-white shadow-sm border-l-4 border-[#E7BE6B]" : "text-[#E6CFCE] hover:bg-[#5E1520] hover:text-white"}`,
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$gift$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Gift$3e$__["Gift"], {
                                                        size: 18,
                                                        className: activeTab === "details" ? "text-[#E7BE6B]" : "text-[#B8860B]"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/overseas/page-client.tsx",
                                                        lineNumber: 1583,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "jsx-c1f854d6adf2d02f",
                                                        children: "Package Details"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/overseas/page-client.tsx",
                                                        lineNumber: 1592,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/overseas/page-client.tsx",
                                                lineNumber: 1574,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                type: "button",
                                                onClick: ()=>setActiveTab("process"),
                                                className: "jsx-c1f854d6adf2d02f" + " " + `w-full flex items-center gap-3 px-4 py-3.5 rounded-lg text-left text-xs sm:text-sm font-medium transition-all duration-300 ${activeTab === "process" ? "bg-[#7D1E28] text-white shadow-sm border-l-4 border-[#E7BE6B]" : "text-[#E6CFCE] hover:bg-[#5E1520] hover:text-white"}`,
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$list$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__List$3e$__["List"], {
                                                        size: 18,
                                                        className: activeTab === "process" ? "text-[#E7BE6B]" : "text-[#B8860B]"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/overseas/page-client.tsx",
                                                        lineNumber: 1604,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "jsx-c1f854d6adf2d02f",
                                                        children: "Pooja Process"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/overseas/page-client.tsx",
                                                        lineNumber: 1613,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/overseas/page-client.tsx",
                                                lineNumber: 1595,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                type: "button",
                                                onClick: ()=>setActiveTab("benefits"),
                                                className: "jsx-c1f854d6adf2d02f" + " " + `w-full flex items-center gap-3 px-4 py-3.5 rounded-lg text-left text-xs sm:text-sm font-medium transition-all duration-300 ${activeTab === "benefits" ? "bg-[#7D1E28] text-white shadow-sm border-l-4 border-[#E7BE6B]" : "text-[#E6CFCE] hover:bg-[#5E1520] hover:text-white"}`,
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$star$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Star$3e$__["Star"], {
                                                        size: 18,
                                                        className: activeTab === "benefits" ? "text-[#E7BE6B]" : "text-[#B8860B]"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/overseas/page-client.tsx",
                                                        lineNumber: 1625,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "jsx-c1f854d6adf2d02f",
                                                        children: "Benefits"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/overseas/page-client.tsx",
                                                        lineNumber: 1634,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/overseas/page-client.tsx",
                                                lineNumber: 1616,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                type: "button",
                                                onClick: ()=>setActiveTab("notes"),
                                                className: "jsx-c1f854d6adf2d02f" + " " + `w-full flex items-center gap-3 px-4 py-3.5 rounded-lg text-left text-xs sm:text-sm font-medium transition-all duration-300 ${activeTab === "notes" ? "bg-[#7D1E28] text-white shadow-sm border-l-4 border-[#E7BE6B]" : "text-[#E6CFCE] hover:bg-[#5E1520] hover:text-white"}`,
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$info$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Info$3e$__["Info"], {
                                                        size: 18,
                                                        className: activeTab === "notes" ? "text-[#E7BE6B]" : "text-[#B8860B]"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/overseas/page-client.tsx",
                                                        lineNumber: 1646,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "jsx-c1f854d6adf2d02f",
                                                        children: "Important Notes"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/overseas/page-client.tsx",
                                                        lineNumber: 1655,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/overseas/page-client.tsx",
                                                lineNumber: 1637,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "jsx-c1f854d6adf2d02f" + " " + "pt-4 border-t border-white/10 hidden sm:block",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "jsx-c1f854d6adf2d02f" + " " + "text-[10px] uppercase tracking-wider text-[#D4B978]",
                                                        children: "Selected Pooja"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/overseas/page-client.tsx",
                                                        lineNumber: 1658,
                                                        columnNumber: 3
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "jsx-c1f854d6adf2d02f" + " " + "font-[family-name:var(--font-cormorant)] text-xl font-bold text-[#F3D78A]",
                                                        children: selectedPooja.name
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/overseas/page-client.tsx",
                                                        lineNumber: 1662,
                                                        columnNumber: 4
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "jsx-c1f854d6adf2d02f" + " " + "text-xs text-white/80 mt-0.5",
                                                        children: "International Sankalpam"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/overseas/page-client.tsx",
                                                        lineNumber: 1666,
                                                        columnNumber: 3
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "jsx-c1f854d6adf2d02f" + " " + "text-white text-lg font-semibold mt-1",
                                                        children: dynamicPrice ? `₹${dynamicPrice}` : "Contact for price"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/overseas/page-client.tsx",
                                                        lineNumber: 1670,
                                                        columnNumber: 3
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        type: "button",
                                                        onClick: ()=>setIsOrderOpen(true),
                                                        className: "jsx-c1f854d6adf2d02f" + " " + "mt-3 w-full rounded-lg bg-[#E5C77A] py-2 text-center text-xs font-bold text-[#3D1418] transition hover:bg-[#F3D78A]",
                                                        children: "Order Now"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/overseas/page-client.tsx",
                                                        lineNumber: 1674,
                                                        columnNumber: 3
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        type: "button",
                                                        onClick: ()=>setIsBookingOpen(true),
                                                        className: "jsx-c1f854d6adf2d02f" + " " + "mt-3 w-full rounded-lg bg-[#F3D78A] px-3 py-2.5 text-center text-[11px] font-semibold text-[#3D1418] animate-priest-blink",
                                                        children: "Looking for an experienced Iyer for an upcoming pooja?"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/overseas/page-client.tsx",
                                                        lineNumber: 1682,
                                                        columnNumber: 3
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/overseas/page-client.tsx",
                                                lineNumber: 1657,
                                                columnNumber: 1
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/overseas/page-client.tsx",
                                        lineNumber: 1573,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "jsx-c1f854d6adf2d02f" + " " + "lg:col-span-9 relative",
                                        children: [
                                            activeTab === "details" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "jsx-c1f854d6adf2d02f" + " " + "space-y-4",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "jsx-c1f854d6adf2d02f",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                            className: "jsx-c1f854d6adf2d02f" + " " + "font-[family-name:var(--font-cormorant)] text-xl sm:text-2xl text-[#42151B] font-bold",
                                                            children: "Pooja Samagri / Items List"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/overseas/page-client.tsx",
                                                            lineNumber: 1699,
                                                            columnNumber: 21
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/overseas/page-client.tsx",
                                                        lineNumber: 1698,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "jsx-c1f854d6adf2d02f",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "jsx-c1f854d6adf2d02f" + " " + "overflow-x-auto rounded-lg border border-[#DFCBB0] shadow-sm bg-white",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                                                                    className: "jsx-c1f854d6adf2d02f" + " " + "w-full text-left text-xs sm:text-sm border-collapse",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                                                                            className: "jsx-c1f854d6adf2d02f",
                                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                                                className: "jsx-c1f854d6adf2d02f" + " " + "bg-[#5A1015] text-white text-[11px] sm:text-xs font-semibold tracking-wider",
                                                                                children: [
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                                        className: "jsx-c1f854d6adf2d02f" + " " + "py-2.5 px-3 w-12 text-center",
                                                                                        children: "S.No"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/app/overseas/page-client.tsx",
                                                                                        lineNumber: 1710,
                                                                                        columnNumber: 31
                                                                                    }, this),
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                                        className: "jsx-c1f854d6adf2d02f" + " " + "py-2.5 px-3 sm:px-4",
                                                                                        children: "Item (English)"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/app/overseas/page-client.tsx",
                                                                                        lineNumber: 1714,
                                                                                        columnNumber: 31
                                                                                    }, this),
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                                        className: "jsx-c1f854d6adf2d02f" + " " + "py-2.5 px-3 sm:px-4",
                                                                                        children: "Item (Tamil)"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/app/overseas/page-client.tsx",
                                                                                        lineNumber: 1718,
                                                                                        columnNumber: 31
                                                                                    }, this),
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                                        className: "jsx-c1f854d6adf2d02f" + " " + "py-2.5 px-3 sm:px-4 text-right sm:text-left",
                                                                                        children: "Quantity"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/app/overseas/page-client.tsx",
                                                                                        lineNumber: 1722,
                                                                                        columnNumber: 31
                                                                                    }, this)
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/app/overseas/page-client.tsx",
                                                                                lineNumber: 1709,
                                                                                columnNumber: 29
                                                                            }, this)
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/overseas/page-client.tsx",
                                                                            lineNumber: 1708,
                                                                            columnNumber: 27
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                                                                            className: "jsx-c1f854d6adf2d02f" + " " + "divide-y divide-[#EFE3CF]",
                                                                            children: itemsLoading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                                                className: "jsx-c1f854d6adf2d02f",
                                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                                    colSpan: 4,
                                                                                    className: "jsx-c1f854d6adf2d02f" + " " + "py-8 px-4 text-center text-[#7D1E28] font-medium",
                                                                                    children: "Loading package items..."
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/app/overseas/page-client.tsx",
                                                                                    lineNumber: 1731,
                                                                                    columnNumber: 33
                                                                                }, this)
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/app/overseas/page-client.tsx",
                                                                                lineNumber: 1730,
                                                                                columnNumber: 31
                                                                            }, this) : liveItems.length > 0 ? liveItems.map((item, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                                                    className: "jsx-c1f854d6adf2d02f" + " " + `transition-colors hover:bg-[#F5EDE0] ${index % 2 === 0 ? "bg-[#FAF7F0]" : "bg-white"}`,
                                                                                    children: [
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                                            className: "jsx-c1f854d6adf2d02f" + " " + "py-2 px-3 text-center text-[#7A6458] font-medium",
                                                                                            children: [
                                                                                                item.sno,
                                                                                                "."
                                                                                            ]
                                                                                        }, void 0, true, {
                                                                                            fileName: "[project]/app/overseas/page-client.tsx",
                                                                                            lineNumber: 1748,
                                                                                            columnNumber: 35
                                                                                        }, this),
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                                            className: "jsx-c1f854d6adf2d02f" + " " + "py-2 px-3 sm:px-4 font-medium text-[#3A2226]",
                                                                                            children: item.english
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/app/overseas/page-client.tsx",
                                                                                            lineNumber: 1752,
                                                                                            columnNumber: 35
                                                                                        }, this),
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                                            className: "jsx-c1f854d6adf2d02f" + " " + "py-2 px-3 sm:px-4 font-normal text-[#5A382A]",
                                                                                            children: item.tamil
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/app/overseas/page-client.tsx",
                                                                                            lineNumber: 1756,
                                                                                            columnNumber: 35
                                                                                        }, this),
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                                            className: "jsx-c1f854d6adf2d02f" + " " + "py-2 px-3 sm:px-4 font-semibold text-[#7D1E28] text-right sm:text-left",
                                                                                            children: item.quantity
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/app/overseas/page-client.tsx",
                                                                                            lineNumber: 1760,
                                                                                            columnNumber: 35
                                                                                        }, this)
                                                                                    ]
                                                                                }, `${selectedPooja.id}-${item.sno}`, true, {
                                                                                    fileName: "[project]/app/overseas/page-client.tsx",
                                                                                    lineNumber: 1740,
                                                                                    columnNumber: 33
                                                                                }, this)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                                                className: "jsx-c1f854d6adf2d02f",
                                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                                    colSpan: 4,
                                                                                    className: "jsx-c1f854d6adf2d02f" + " " + "py-8 px-4 text-center text-[#7A6458]",
                                                                                    children: "No items available."
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/app/overseas/page-client.tsx",
                                                                                    lineNumber: 1767,
                                                                                    columnNumber: 33
                                                                                }, this)
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/app/overseas/page-client.tsx",
                                                                                lineNumber: 1766,
                                                                                columnNumber: 31
                                                                            }, this)
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/overseas/page-client.tsx",
                                                                            lineNumber: 1728,
                                                                            columnNumber: 27
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/app/overseas/page-client.tsx",
                                                                    lineNumber: 1707,
                                                                    columnNumber: 25
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/overseas/page-client.tsx",
                                                                lineNumber: 1706,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "jsx-c1f854d6adf2d02f" + " " + "mt-3 text-xs text-[#7A6458] italic bg-[#FAF2E6] p-2.5 rounded-lg border border-[#E9DDC9]",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                                        className: "jsx-c1f854d6adf2d02f",
                                                                        children: "Note:"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/overseas/page-client.tsx",
                                                                        lineNumber: 1780,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    " The items & quantities may vary slightly based on the temple and priest's guidance."
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/overseas/page-client.tsx",
                                                                lineNumber: 1779,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/overseas/page-client.tsx",
                                                        lineNumber: 1705,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/overseas/page-client.tsx",
                                                lineNumber: 1697,
                                                columnNumber: 17
                                            }, this),
                                            activeTab === "process" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "jsx-c1f854d6adf2d02f" + " " + "space-y-4",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "jsx-c1f854d6adf2d02f" + " " + "flex items-center justify-between mb-2",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                            className: "jsx-c1f854d6adf2d02f" + " " + "font-[family-name:var(--font-cormorant)] text-xl sm:text-2xl text-[#42151B] font-bold",
                                                            children: [
                                                                "Step-by-Step Temple Process (",
                                                                selectedPooja.name,
                                                                ")"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/overseas/page-client.tsx",
                                                            lineNumber: 1847,
                                                            columnNumber: 21
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/overseas/page-client.tsx",
                                                        lineNumber: 1846,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "jsx-c1f854d6adf2d02f" + " " + "grid grid-cols-1 sm:grid-cols-2 gap-4",
                                                        children: selectedPooja.process.map((step)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "jsx-c1f854d6adf2d02f" + " " + "bg-white p-4 sm:p-5 rounded-xl border border-[#DFCBB0] shadow-sm hover:shadow-md transition-shadow relative overflow-hidden",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "jsx-c1f854d6adf2d02f" + " " + "flex items-start gap-3",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "jsx-c1f854d6adf2d02f" + " " + "w-8 h-8 rounded-full bg-[#4A1015] text-[#F5E6C8] flex items-center justify-center font-[family-name:var(--font-cormorant)] font-bold text-sm shrink-0 shadow-inner",
                                                                            children: step.step
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/overseas/page-client.tsx",
                                                                            lineNumber: 1859,
                                                                            columnNumber: 27
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "jsx-c1f854d6adf2d02f",
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                                                    className: "jsx-c1f854d6adf2d02f" + " " + "font-[family-name:var(--font-cormorant)] text-lg font-bold text-[#42151B]",
                                                                                    children: step.title
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/app/overseas/page-client.tsx",
                                                                                    lineNumber: 1864,
                                                                                    columnNumber: 29
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                    className: "jsx-c1f854d6adf2d02f" + " " + "text-xs text-[#5A4940] leading-relaxed mt-1",
                                                                                    children: step.desc
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/app/overseas/page-client.tsx",
                                                                                    lineNumber: 1868,
                                                                                    columnNumber: 29
                                                                                }, this)
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/app/overseas/page-client.tsx",
                                                                            lineNumber: 1863,
                                                                            columnNumber: 27
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/app/overseas/page-client.tsx",
                                                                    lineNumber: 1858,
                                                                    columnNumber: 25
                                                                }, this)
                                                            }, `${selectedPooja.id}-${step.step}`, false, {
                                                                fileName: "[project]/app/overseas/page-client.tsx",
                                                                lineNumber: 1854,
                                                                columnNumber: 23
                                                            }, this))
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/overseas/page-client.tsx",
                                                        lineNumber: 1852,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/overseas/page-client.tsx",
                                                lineNumber: 1845,
                                                columnNumber: 17
                                            }, this),
                                            activeTab === "benefits" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "jsx-c1f854d6adf2d02f" + " " + "space-y-4",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "jsx-c1f854d6adf2d02f" + " " + "flex items-center justify-between mb-2",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                            className: "jsx-c1f854d6adf2d02f" + " " + "font-[family-name:var(--font-cormorant)] text-xl sm:text-2xl text-[#42151B] font-bold",
                                                            children: "Spiritual & Material Blessings"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/overseas/page-client.tsx",
                                                            lineNumber: 1883,
                                                            columnNumber: 21
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/overseas/page-client.tsx",
                                                        lineNumber: 1882,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "jsx-c1f854d6adf2d02f" + " " + "grid grid-cols-1 sm:grid-cols-2 gap-4",
                                                        children: selectedPooja.benefits.map((benefit, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "jsx-c1f854d6adf2d02f" + " " + "bg-white p-4 sm:p-5 rounded-xl border border-[#DFCBB0] shadow-sm hover:shadow-md transition-shadow flex items-start gap-3",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "jsx-c1f854d6adf2d02f" + " " + "w-9 h-9 rounded-full bg-[#FAF2E6] border border-[#DECBB0] flex items-center justify-center text-[#781D27] shrink-0",
                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$star$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Star$3e$__["Star"], {
                                                                            size: 18
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/overseas/page-client.tsx",
                                                                            lineNumber: 1895,
                                                                            columnNumber: 27
                                                                        }, this)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/overseas/page-client.tsx",
                                                                        lineNumber: 1894,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "jsx-c1f854d6adf2d02f",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                                                className: "jsx-c1f854d6adf2d02f" + " " + "font-[family-name:var(--font-cormorant)] text-lg font-bold text-[#42151B]",
                                                                                children: benefit.title
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/app/overseas/page-client.tsx",
                                                                                lineNumber: 1899,
                                                                                columnNumber: 27
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                className: "jsx-c1f854d6adf2d02f" + " " + "text-xs text-[#5A4940] leading-relaxed mt-1",
                                                                                children: benefit.desc
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/app/overseas/page-client.tsx",
                                                                                lineNumber: 1903,
                                                                                columnNumber: 27
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/app/overseas/page-client.tsx",
                                                                        lineNumber: 1898,
                                                                        columnNumber: 25
                                                                    }, this)
                                                                ]
                                                            }, `${selectedPooja.id}-benefit-${idx}`, true, {
                                                                fileName: "[project]/app/overseas/page-client.tsx",
                                                                lineNumber: 1890,
                                                                columnNumber: 23
                                                            }, this))
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/overseas/page-client.tsx",
                                                        lineNumber: 1888,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/overseas/page-client.tsx",
                                                lineNumber: 1881,
                                                columnNumber: 17
                                            }, this),
                                            activeTab === "notes" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "jsx-c1f854d6adf2d02f" + " " + "space-y-4",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "jsx-c1f854d6adf2d02f" + " " + "flex items-center justify-between mb-2",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                            className: "jsx-c1f854d6adf2d02f" + " " + "font-[family-name:var(--font-cormorant)] text-xl sm:text-2xl text-[#42151B] font-bold",
                                                            children: "Important Information for Overseas Devotees"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/overseas/page-client.tsx",
                                                            lineNumber: 1917,
                                                            columnNumber: 21
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/overseas/page-client.tsx",
                                                        lineNumber: 1916,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "jsx-c1f854d6adf2d02f" + " " + "space-y-3",
                                                        children: selectedPooja.notes.map((note, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "jsx-c1f854d6adf2d02f" + " " + "flex items-start gap-3 bg-white p-4 rounded-xl border border-[#DFCBB0] shadow-sm",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$info$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Info$3e$__["Info"], {
                                                                        size: 18,
                                                                        className: "text-[#B08A45] shrink-0 mt-0.5"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/overseas/page-client.tsx",
                                                                        lineNumber: 1928,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                        className: "jsx-c1f854d6adf2d02f" + " " + "text-xs sm:text-sm text-[#55463E] leading-relaxed",
                                                                        children: note
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/overseas/page-client.tsx",
                                                                        lineNumber: 1933,
                                                                        columnNumber: 25
                                                                    }, this)
                                                                ]
                                                            }, `${selectedPooja.id}-note-${idx}`, true, {
                                                                fileName: "[project]/app/overseas/page-client.tsx",
                                                                lineNumber: 1924,
                                                                columnNumber: 23
                                                            }, this))
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/overseas/page-client.tsx",
                                                        lineNumber: 1922,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/overseas/page-client.tsx",
                                                lineNumber: 1915,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/overseas/page-client.tsx",
                                        lineNumber: 1694,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/overseas/page-client.tsx",
                                lineNumber: 1571,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/overseas/page-client.tsx",
                        lineNumber: 1565,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/overseas/page-client.tsx",
                lineNumber: 1542,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "jsx-c1f854d6adf2d02f" + " " + "py-8 sm:py-12 px-4 sm:px-8 max-w-[1400px] mx-auto",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "jsx-c1f854d6adf2d02f" + " " + "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5",
                    children: overseasFeatures.map((card, idx)=>{
                        const Icon = card.icon;
                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "jsx-c1f854d6adf2d02f" + " " + "bg-[#FCFAF5] rounded-2xl border border-[#E5D7C0] p-6 shadow-sm flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 hover:shadow-md hover:border-[#D4B978]",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "jsx-c1f854d6adf2d02f",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "jsx-c1f854d6adf2d02f" + " " + "w-12 h-12 rounded-xl flex items-center justify-center text-[#7D1E28] bg-white border border-[#E9DDC9] mb-4",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
                                                size: 22,
                                                strokeWidth: 1.8,
                                                className: "jsx-c1f854d6adf2d02f"
                                            }, void 0, false, {
                                                fileName: "[project]/app/overseas/page-client.tsx",
                                                lineNumber: 1962,
                                                columnNumber: 21
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/app/overseas/page-client.tsx",
                                            lineNumber: 1961,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "jsx-c1f854d6adf2d02f" + " " + "font-[family-name:var(--font-cormorant)] text-xl font-bold text-[#42151B]",
                                            children: card.title
                                        }, void 0, false, {
                                            fileName: "[project]/app/overseas/page-client.tsx",
                                            lineNumber: 1965,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "jsx-c1f854d6adf2d02f" + " " + "mt-2 text-xs sm:text-[13px] text-[#63534B] leading-relaxed",
                                            children: card.description
                                        }, void 0, false, {
                                            fileName: "[project]/app/overseas/page-client.tsx",
                                            lineNumber: 1969,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/overseas/page-client.tsx",
                                    lineNumber: 1960,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    onClick: ()=>setIsModalOpen(true),
                                    className: "jsx-c1f854d6adf2d02f" + " " + "mt-6 inline-flex items-center gap-1.5 text-xs font-semibold text-[#7D1E28] hover:text-[#4A1015] group",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "jsx-c1f854d6adf2d02f",
                                            children: "Know More"
                                        }, void 0, false, {
                                            fileName: "[project]/app/overseas/page-client.tsx",
                                            lineNumber: 1979,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__["ArrowRight"], {
                                            size: 13,
                                            className: "transition-transform group-hover:translate-x-1"
                                        }, void 0, false, {
                                            fileName: "[project]/app/overseas/page-client.tsx",
                                            lineNumber: 1981,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/overseas/page-client.tsx",
                                    lineNumber: 1974,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, idx, true, {
                            fileName: "[project]/app/overseas/page-client.tsx",
                            lineNumber: 1956,
                            columnNumber: 15
                        }, this);
                    })
                }, void 0, false, {
                    fileName: "[project]/app/overseas/page-client.tsx",
                    lineNumber: 1951,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/overseas/page-client.tsx",
                lineNumber: 1950,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "jsx-c1f854d6adf2d02f" + " " + "px-4 pb-16 pt-6 sm:px-8 sm:pb-24 max-w-[1400px] mx-auto",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "jsx-c1f854d6adf2d02f" + " " + "relative overflow-hidden rounded-3xl bg-gradient-to-r from-[#3B0E12] via-[#521319] to-[#3B0E12] p-6 sm:p-10 lg:p-12 text-white shadow-2xl",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "jsx-c1f854d6adf2d02f" + " " + "pointer-events-none absolute -left-10 -top-10 h-48 w-48 rounded-full bg-[#E5C77A]/15 blur-2xl"
                        }, void 0, false, {
                            fileName: "[project]/app/overseas/page-client.tsx",
                            lineNumber: 1998,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "jsx-c1f854d6adf2d02f" + " " + "pointer-events-none absolute -bottom-10 -right-10 h-48 w-48 rounded-full bg-[#E5C77A]/15 blur-2xl"
                        }, void 0, false, {
                            fileName: "[project]/app/overseas/page-client.tsx",
                            lineNumber: 2000,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "jsx-c1f854d6adf2d02f" + " " + "relative z-10 flex flex-col md:flex-row items-center justify-between gap-6 sm:gap-8",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "jsx-c1f854d6adf2d02f" + " " + "flex items-center gap-5",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "jsx-c1f854d6adf2d02f" + " " + "relative w-20 h-20 sm:w-28 sm:h-28 shrink-0",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                src: "/images/brassplate_transparent.png",
                                                alt: "Auspicious Diya",
                                                fill: true,
                                                className: "object-contain drop-shadow-[0_4px_16px_rgba(230,190,100,0.4)]"
                                            }, void 0, false, {
                                                fileName: "[project]/app/overseas/page-client.tsx",
                                                lineNumber: 2005,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/app/overseas/page-client.tsx",
                                            lineNumber: 2004,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "jsx-c1f854d6adf2d02f",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    className: "jsx-c1f854d6adf2d02f" + " " + "font-[family-name:var(--font-cormorant)] text-xl sm:text-2xl text-[#E5C77A] font-semibold",
                                                    children: "Can't be in India?"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/overseas/page-client.tsx",
                                                    lineNumber: 2014,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                    className: "jsx-c1f854d6adf2d02f" + " " + "font-[family-name:var(--font-cormorant)] text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-[#FFFDF8]",
                                                    children: "Let Us Bring the Temple to You."
                                                }, void 0, false, {
                                                    fileName: "[project]/app/overseas/page-client.tsx",
                                                    lineNumber: 2018,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "jsx-c1f854d6adf2d02f" + " " + "mt-2.5 flex flex-wrap items-center gap-4 text-xs text-[#F3EAD8]/90",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "jsx-c1f854d6adf2d02f" + " " + "flex items-center gap-1.5",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__["Check"], {
                                                                    size: 14,
                                                                    className: "text-[#E5C77A]"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/overseas/page-client.tsx",
                                                                    lineNumber: 2024,
                                                                    columnNumber: 21
                                                                }, this),
                                                                "100% Authentic"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/overseas/page-client.tsx",
                                                            lineNumber: 2023,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "jsx-c1f854d6adf2d02f" + " " + "flex items-center gap-1.5",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__["Check"], {
                                                                    size: 14,
                                                                    className: "text-[#E5C77A]"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/overseas/page-client.tsx",
                                                                    lineNumber: 2029,
                                                                    columnNumber: 21
                                                                }, this),
                                                                "Secure & Reliable"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/overseas/page-client.tsx",
                                                            lineNumber: 2028,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "jsx-c1f854d6adf2d02f" + " " + "flex items-center gap-1.5",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__["Check"], {
                                                                    size: 14,
                                                                    className: "text-[#E5C77A]"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/overseas/page-client.tsx",
                                                                    lineNumber: 2034,
                                                                    columnNumber: 21
                                                                }, this),
                                                                "Timely Delivery"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/overseas/page-client.tsx",
                                                            lineNumber: 2033,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/overseas/page-client.tsx",
                                                    lineNumber: 2022,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/overseas/page-client.tsx",
                                            lineNumber: 2013,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/overseas/page-client.tsx",
                                    lineNumber: 2003,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "jsx-c1f854d6adf2d02f" + " " + "shrink-0 w-full md:w-auto",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        href: "/contact",
                                        className: "w-full md:w-auto inline-flex items-center justify-center gap-2 rounded-xl bg-[#E5C77A] px-8 py-3.5 text-xs sm:text-sm font-bold tracking-wider text-[#3D1418] shadow-lg transition-all duration-300 hover:bg-[#F3D78A] hover:scale-105 active:scale-95",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "jsx-c1f854d6adf2d02f",
                                                children: "Enquire Now"
                                            }, void 0, false, {
                                                fileName: "[project]/app/overseas/page-client.tsx",
                                                lineNumber: 2046,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__["ArrowRight"], {
                                                size: 16
                                            }, void 0, false, {
                                                fileName: "[project]/app/overseas/page-client.tsx",
                                                lineNumber: 2047,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/overseas/page-client.tsx",
                                        lineNumber: 2042,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/app/overseas/page-client.tsx",
                                    lineNumber: 2041,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/overseas/page-client.tsx",
                            lineNumber: 2002,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/overseas/page-client.tsx",
                    lineNumber: 1997,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/overseas/page-client.tsx",
                lineNumber: 1996,
                columnNumber: 7
            }, this),
            isModalOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "jsx-c1f854d6adf2d02f" + " " + "fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "jsx-c1f854d6adf2d02f" + " " + "relative w-full max-w-xl rounded-2xl bg-[#FCFAF5] border border-[#DFCBB0] p-6 sm:p-8 shadow-2xl max-h-[90vh] overflow-y-auto",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            type: "button",
                            onClick: ()=>setIsModalOpen(false),
                            "aria-label": "Close modal",
                            className: "jsx-c1f854d6adf2d02f" + " " + "absolute top-4 right-4 text-[#7A6458] hover:text-[#42151B] p-1.5 rounded-full hover:bg-[#EFE3CF] transition-colors",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                size: 20
                            }, void 0, false, {
                                fileName: "[project]/app/overseas/page-client.tsx",
                                lineNumber: 2068,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/app/overseas/page-client.tsx",
                            lineNumber: 2062,
                            columnNumber: 13
                        }, this),
                        modalSuccess ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "jsx-c1f854d6adf2d02f" + " " + "py-10 text-center space-y-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "jsx-c1f854d6adf2d02f" + " " + "w-16 h-16 rounded-full bg-[#FAF3E5] border-2 border-[#D4B978] flex items-center justify-center text-[#7D1E28] mx-auto",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__["CheckCircle2"], {
                                        size: 36
                                    }, void 0, false, {
                                        fileName: "[project]/app/overseas/page-client.tsx",
                                        lineNumber: 2075,
                                        columnNumber: 19
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/app/overseas/page-client.tsx",
                                    lineNumber: 2074,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: "jsx-c1f854d6adf2d02f" + " " + "font-[family-name:var(--font-cormorant)] text-2xl sm:text-3xl font-bold text-[#42151B]",
                                    children: "Sankalpam Booking Received!"
                                }, void 0, false, {
                                    fileName: "[project]/app/overseas/page-client.tsx",
                                    lineNumber: 2078,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "jsx-c1f854d6adf2d02f" + " " + "text-xs sm:text-sm text-[#55463E] max-w-md mx-auto",
                                    children: "Thank you! Our temple coordinator will contact you via WhatsApp with the auspicious details, priest assignment, and international shipping schedule."
                                }, void 0, false, {
                                    fileName: "[project]/app/overseas/page-client.tsx",
                                    lineNumber: 2082,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/overseas/page-client.tsx",
                            lineNumber: 2073,
                            columnNumber: 15
                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "jsx-c1f854d6adf2d02f",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "jsx-c1f854d6adf2d02f" + " " + "text-center mb-6",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "jsx-c1f854d6adf2d02f" + " " + "text-[10px] font-bold tracking-[0.2em] uppercase text-[#B08A45]",
                                            children: "OVERSEAS TEMPLE SANKALPAM"
                                        }, void 0, false, {
                                            fileName: "[project]/app/overseas/page-client.tsx",
                                            lineNumber: 2091,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "jsx-c1f854d6adf2d02f" + " " + "font-[family-name:var(--font-cormorant)] text-2xl sm:text-3xl font-bold text-[#42151B] mt-1",
                                            children: "Book Pooja with Worldwide Delivery"
                                        }, void 0, false, {
                                            fileName: "[project]/app/overseas/page-client.tsx",
                                            lineNumber: 2095,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "jsx-c1f854d6adf2d02f" + " " + "text-xs text-[#63534B] mt-1",
                                            children: "Provide your Sankalpam and overseas address details below."
                                        }, void 0, false, {
                                            fileName: "[project]/app/overseas/page-client.tsx",
                                            lineNumber: 2099,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/overseas/page-client.tsx",
                                    lineNumber: 2090,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                                    onSubmit: handleFormSubmit,
                                    className: "jsx-c1f854d6adf2d02f" + " " + "space-y-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "jsx-c1f854d6adf2d02f" + " " + "grid grid-cols-1 sm:grid-cols-2 gap-4",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "jsx-c1f854d6adf2d02f",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                            className: "jsx-c1f854d6adf2d02f" + " " + "block text-xs font-semibold text-[#42151B] mb-1",
                                                            children: "Devotee Full Name *"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/overseas/page-client.tsx",
                                                            lineNumber: 2111,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "jsx-c1f854d6adf2d02f" + " " + "relative",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__User$3e$__["User"], {
                                                                    size: 15,
                                                                    className: "absolute left-3 top-3 text-[#B08A45]"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/overseas/page-client.tsx",
                                                                    lineNumber: 2116,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                    type: "text",
                                                                    required: true,
                                                                    value: formData.devoteeName,
                                                                    onChange: (e)=>setFormData({
                                                                            ...formData,
                                                                            devoteeName: e.target.value
                                                                        }),
                                                                    placeholder: "e.g. Sivasubramanian",
                                                                    className: "jsx-c1f854d6adf2d02f" + " " + "w-full rounded-lg border border-[#DFCBB0] bg-white pl-9 pr-3 py-2 text-xs text-[#29231F] focus:border-[#7D1E28] focus:outline-none"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/overseas/page-client.tsx",
                                                                    lineNumber: 2121,
                                                                    columnNumber: 25
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/overseas/page-client.tsx",
                                                            lineNumber: 2115,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/overseas/page-client.tsx",
                                                    lineNumber: 2110,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "jsx-c1f854d6adf2d02f",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                            className: "jsx-c1f854d6adf2d02f" + " " + "block text-xs font-semibold text-[#42151B] mb-1",
                                                            children: "Gotram"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/overseas/page-client.tsx",
                                                            lineNumber: 2138,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                            type: "text",
                                                            value: formData.gotram,
                                                            onChange: (e)=>setFormData({
                                                                    ...formData,
                                                                    gotram: e.target.value
                                                                }),
                                                            placeholder: "e.g. Koundinya / Bharadwaja",
                                                            className: "jsx-c1f854d6adf2d02f" + " " + "w-full rounded-lg border border-[#DFCBB0] bg-white px-3 py-2 text-xs text-[#29231F] focus:border-[#7D1E28] focus:outline-none"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/overseas/page-client.tsx",
                                                            lineNumber: 2142,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/overseas/page-client.tsx",
                                                    lineNumber: 2137,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/overseas/page-client.tsx",
                                            lineNumber: 2109,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "jsx-c1f854d6adf2d02f" + " " + "grid grid-cols-1 sm:grid-cols-2 gap-4",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "jsx-c1f854d6adf2d02f",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                            className: "jsx-c1f854d6adf2d02f" + " " + "block text-xs font-semibold text-[#42151B] mb-1",
                                                            children: "Nakshatram (Birth Star)"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/overseas/page-client.tsx",
                                                            lineNumber: 2160,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                            type: "text",
                                                            value: formData.nakshatram,
                                                            onChange: (e)=>setFormData({
                                                                    ...formData,
                                                                    nakshatram: e.target.value
                                                                }),
                                                            placeholder: "e.g. Rohini / Swati",
                                                            className: "jsx-c1f854d6adf2d02f" + " " + "w-full rounded-lg border border-[#DFCBB0] bg-white px-3 py-2 text-xs text-[#29231F] focus:border-[#7D1E28] focus:outline-none"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/overseas/page-client.tsx",
                                                            lineNumber: 2164,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/overseas/page-client.tsx",
                                                    lineNumber: 2159,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "jsx-c1f854d6adf2d02f",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                            className: "jsx-c1f854d6adf2d02f" + " " + "block text-xs font-semibold text-[#42151B] mb-1",
                                                            children: "Rasi (Moon Sign)"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/overseas/page-client.tsx",
                                                            lineNumber: 2179,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                            type: "text",
                                                            value: formData.rasi,
                                                            onChange: (e)=>setFormData({
                                                                    ...formData,
                                                                    rasi: e.target.value
                                                                }),
                                                            placeholder: "e.g. Rishabham / Thula",
                                                            className: "jsx-c1f854d6adf2d02f" + " " + "w-full rounded-lg border border-[#DFCBB0] bg-white px-3 py-2 text-xs text-[#29231F] focus:border-[#7D1E28] focus:outline-none"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/overseas/page-client.tsx",
                                                            lineNumber: 2183,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/overseas/page-client.tsx",
                                                    lineNumber: 2178,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/overseas/page-client.tsx",
                                            lineNumber: 2158,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "jsx-c1f854d6adf2d02f" + " " + "grid grid-cols-1 sm:grid-cols-2 gap-4",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "jsx-c1f854d6adf2d02f",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                            className: "jsx-c1f854d6adf2d02f" + " " + "block text-xs font-semibold text-[#42151B] mb-1",
                                                            children: "Country of Residence *"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/overseas/page-client.tsx",
                                                            lineNumber: 2201,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "jsx-c1f854d6adf2d02f" + " " + "relative",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$globe$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Globe$3e$__["Globe"], {
                                                                    size: 15,
                                                                    className: "absolute left-3 top-3 text-[#B08A45]"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/overseas/page-client.tsx",
                                                                    lineNumber: 2206,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                    type: "text",
                                                                    required: true,
                                                                    value: formData.country,
                                                                    onChange: (e)=>setFormData({
                                                                            ...formData,
                                                                            country: e.target.value
                                                                        }),
                                                                    placeholder: "e.g. USA / UK / Australia",
                                                                    className: "jsx-c1f854d6adf2d02f" + " " + "w-full rounded-lg border border-[#DFCBB0] bg-white pl-9 pr-3 py-2 text-xs text-[#29231F] focus:border-[#7D1E28] focus:outline-none"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/overseas/page-client.tsx",
                                                                    lineNumber: 2211,
                                                                    columnNumber: 25
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/overseas/page-client.tsx",
                                                            lineNumber: 2205,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/overseas/page-client.tsx",
                                                    lineNumber: 2200,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "jsx-c1f854d6adf2d02f",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                            className: "jsx-c1f854d6adf2d02f" + " " + "block text-xs font-semibold text-[#42151B] mb-1",
                                                            children: "WhatsApp Number *"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/overseas/page-client.tsx",
                                                            lineNumber: 2228,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "jsx-c1f854d6adf2d02f" + " " + "relative",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$phone$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Phone$3e$__["Phone"], {
                                                                    size: 15,
                                                                    className: "absolute left-3 top-3 text-[#B08A45]"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/overseas/page-client.tsx",
                                                                    lineNumber: 2233,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                    type: "tel",
                                                                    required: true,
                                                                    value: formData.whatsapp,
                                                                    onChange: (e)=>setFormData({
                                                                            ...formData,
                                                                            whatsapp: e.target.value
                                                                        }),
                                                                    placeholder: "+1 (555) 000-0000",
                                                                    className: "jsx-c1f854d6adf2d02f" + " " + "w-full rounded-lg border border-[#DFCBB0] bg-white pl-9 pr-3 py-2 text-xs text-[#29231F] focus:border-[#7D1E28] focus:outline-none"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/overseas/page-client.tsx",
                                                                    lineNumber: 2238,
                                                                    columnNumber: 25
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/overseas/page-client.tsx",
                                                            lineNumber: 2232,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/overseas/page-client.tsx",
                                                    lineNumber: 2227,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/overseas/page-client.tsx",
                                            lineNumber: 2199,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "jsx-c1f854d6adf2d02f" + " " + "grid grid-cols-1 sm:grid-cols-2 gap-4",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "jsx-c1f854d6adf2d02f",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                            className: "jsx-c1f854d6adf2d02f" + " " + "block text-xs font-semibold text-[#42151B] mb-1",
                                                            children: "Selected Pooja"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/overseas/page-client.tsx",
                                                            lineNumber: 2258,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                            value: formData.pooja,
                                                            onChange: (e)=>setFormData({
                                                                    ...formData,
                                                                    pooja: e.target.value
                                                                }),
                                                            className: "jsx-c1f854d6adf2d02f" + " " + "w-full rounded-lg border border-[#DFCBB0] bg-white px-3 py-2 text-xs text-[#29231F] focus:border-[#7D1E28] focus:outline-none",
                                                            children: overseasPoojas.map((p)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                    value: p.name,
                                                                    className: "jsx-c1f854d6adf2d02f",
                                                                    children: p.name
                                                                }, p.id, false, {
                                                                    fileName: "[project]/app/overseas/page-client.tsx",
                                                                    lineNumber: 2273,
                                                                    columnNumber: 27
                                                                }, this))
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/overseas/page-client.tsx",
                                                            lineNumber: 2262,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/overseas/page-client.tsx",
                                                    lineNumber: 2257,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "jsx-c1f854d6adf2d02f",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                            className: "jsx-c1f854d6adf2d02f" + " " + "block text-xs font-semibold text-[#42151B] mb-1",
                                                            children: "Preferred Date / Muhurtham"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/overseas/page-client.tsx",
                                                            lineNumber: 2281,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "jsx-c1f854d6adf2d02f" + " " + "relative",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__["Calendar"], {
                                                                    size: 15,
                                                                    className: "absolute left-3 top-3 text-[#B08A45]"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/overseas/page-client.tsx",
                                                                    lineNumber: 2286,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                    type: "date",
                                                                    value: formData.preferredDate,
                                                                    onChange: (e)=>setFormData({
                                                                            ...formData,
                                                                            preferredDate: e.target.value
                                                                        }),
                                                                    className: "jsx-c1f854d6adf2d02f" + " " + "w-full rounded-lg border border-[#DFCBB0] bg-white pl-9 pr-3 py-2 text-xs text-[#29231F] focus:border-[#7D1E28] focus:outline-none"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/overseas/page-client.tsx",
                                                                    lineNumber: 2291,
                                                                    columnNumber: 25
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/overseas/page-client.tsx",
                                                            lineNumber: 2285,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/overseas/page-client.tsx",
                                                    lineNumber: 2280,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/overseas/page-client.tsx",
                                            lineNumber: 2256,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "jsx-c1f854d6adf2d02f",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: "jsx-c1f854d6adf2d02f" + " " + "block text-xs font-semibold text-[#42151B] mb-1",
                                                    children: "International Delivery Address (for Prasadam) *"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/overseas/page-client.tsx",
                                                    lineNumber: 2308,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                                    rows: 2,
                                                    required: true,
                                                    value: formData.shippingAddress,
                                                    onChange: (e)=>setFormData({
                                                            ...formData,
                                                            shippingAddress: e.target.value
                                                        }),
                                                    placeholder: "Full street address, City, State/Province, Postal Code, Country",
                                                    className: "jsx-c1f854d6adf2d02f" + " " + "w-full rounded-lg border border-[#DFCBB0] bg-white p-2.5 text-xs text-[#29231F] focus:border-[#7D1E28] focus:outline-none"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/overseas/page-client.tsx",
                                                    lineNumber: 2312,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/overseas/page-client.tsx",
                                            lineNumber: 2307,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "jsx-c1f854d6adf2d02f",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: "jsx-c1f854d6adf2d02f" + " " + "block text-xs font-semibold text-[#42151B] mb-1",
                                                    children: "Special Prayer Intentions / Family Names"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/overseas/page-client.tsx",
                                                    lineNumber: 2329,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                                    rows: 2,
                                                    value: formData.specialPrayers,
                                                    onChange: (e)=>setFormData({
                                                            ...formData,
                                                            specialPrayers: e.target.value
                                                        }),
                                                    placeholder: "e.g. Career growth, family prayers, anniversary prayers...",
                                                    className: "jsx-c1f854d6adf2d02f" + " " + "w-full rounded-lg border border-[#DFCBB0] bg-white p-2.5 text-xs text-[#29231F] focus:border-[#7D1E28] focus:outline-none"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/overseas/page-client.tsx",
                                                    lineNumber: 2333,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/overseas/page-client.tsx",
                                            lineNumber: 2328,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "submit",
                                            className: "jsx-c1f854d6adf2d02f" + " " + "w-full rounded-xl bg-[#4A1015] py-3 text-xs sm:text-sm font-bold text-white tracking-wider hover:bg-[#63181E] transition-all shadow-md mt-2",
                                            children: "CONFIRM OVERSEAS SANKALPAM"
                                        }, void 0, false, {
                                            fileName: "[project]/app/overseas/page-client.tsx",
                                            lineNumber: 2348,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/overseas/page-client.tsx",
                                    lineNumber: 2104,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/overseas/page-client.tsx",
                            lineNumber: 2089,
                            columnNumber: 15
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/overseas/page-client.tsx",
                    lineNumber: 2060,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/overseas/page-client.tsx",
                lineNumber: 2059,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$order$2d$now$2d$modal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                open: isOrderOpen,
                onClose: ()=>setIsOrderOpen(false),
                packageName: `${selectedPooja.name} (Overseas)`,
                packagePrice: dynamicPrice
            }, void 0, false, {
                fileName: "[project]/app/overseas/page-client.tsx",
                lineNumber: 2365,
                columnNumber: 1
            }, this),
            isBookingOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "jsx-c1f854d6adf2d02f" + " " + "fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "jsx-c1f854d6adf2d02f" + " " + "relative w-full max-w-md rounded-2xl border-2 border-[#DECBB0] bg-[#FAF6EE] p-6 shadow-2xl sm:p-8",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            type: "button",
                            onClick: ()=>setIsBookingOpen(false),
                            "aria-label": "Close",
                            className: "jsx-c1f854d6adf2d02f" + " " + "absolute right-4 top-4 text-[#7A6458] hover:text-[#42151B]",
                            children: "✕"
                        }, void 0, false, {
                            fileName: "[project]/app/overseas/page-client.tsx",
                            lineNumber: 2375,
                            columnNumber: 7
                        }, this),
                        bookingSuccess ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "jsx-c1f854d6adf2d02f" + " " + "py-8 text-center",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: "jsx-c1f854d6adf2d02f" + " " + "mb-2 font-[family-name:var(--font-cormorant)] text-2xl font-bold text-[#42151B]",
                                    children: "Request Received!"
                                }, void 0, false, {
                                    fileName: "[project]/app/overseas/page-client.tsx",
                                    lineNumber: 2386,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "jsx-c1f854d6adf2d02f" + " " + "text-sm text-[#55463E]",
                                    children: "Our team will contact you shortly to confirm your priest request."
                                }, void 0, false, {
                                    fileName: "[project]/app/overseas/page-client.tsx",
                                    lineNumber: 2389,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/overseas/page-client.tsx",
                            lineNumber: 2385,
                            columnNumber: 15
                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: "jsx-c1f854d6adf2d02f" + " " + "mb-1 font-[family-name:var(--font-cormorant)] text-2xl font-bold text-[#42151B]",
                                    children: "Request for an Iyer"
                                }, void 0, false, {
                                    fileName: "[project]/app/overseas/page-client.tsx",
                                    lineNumber: 2395,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "jsx-c1f854d6adf2d02f" + " " + "mb-5 text-xs text-[#63534B]",
                                    children: "Fill in your details and we'll get back to you shortly."
                                }, void 0, false, {
                                    fileName: "[project]/app/overseas/page-client.tsx",
                                    lineNumber: 2398,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                                    onSubmit: handleBookingSubmit,
                                    className: "jsx-c1f854d6adf2d02f" + " " + "space-y-3.5",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "text",
                                            required: true,
                                            placeholder: "Full Name",
                                            value: bookingForm.name,
                                            onChange: (e)=>setBookingForm({
                                                    ...bookingForm,
                                                    name: e.target.value
                                                }),
                                            className: "jsx-c1f854d6adf2d02f" + " " + "w-full rounded-lg border border-[#DFCBB0] bg-white px-3 py-2.5 text-sm focus:border-[#7D1E28] focus:outline-none"
                                        }, void 0, false, {
                                            fileName: "[project]/app/overseas/page-client.tsx",
                                            lineNumber: 2403,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "tel",
                                            required: true,
                                            placeholder: "Mobile Number",
                                            value: bookingForm.mobile,
                                            onChange: (e)=>setBookingForm({
                                                    ...bookingForm,
                                                    mobile: e.target.value
                                                }),
                                            className: "jsx-c1f854d6adf2d02f" + " " + "w-full rounded-lg border border-[#DFCBB0] bg-white px-3 py-2.5 text-sm focus:border-[#7D1E28] focus:outline-none"
                                        }, void 0, false, {
                                            fileName: "[project]/app/overseas/page-client.tsx",
                                            lineNumber: 2413,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "email",
                                            required: true,
                                            placeholder: "Email Address",
                                            value: bookingForm.email,
                                            onChange: (e)=>setBookingForm({
                                                    ...bookingForm,
                                                    email: e.target.value
                                                }),
                                            className: "jsx-c1f854d6adf2d02f" + " " + "w-full rounded-lg border border-[#DFCBB0] bg-white px-3 py-2.5 text-sm focus:border-[#7D1E28] focus:outline-none"
                                        }, void 0, false, {
                                            fileName: "[project]/app/overseas/page-client.tsx",
                                            lineNumber: 2423,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                            required: true,
                                            rows: 2,
                                            placeholder: "Address",
                                            value: bookingForm.address,
                                            onChange: (e)=>setBookingForm({
                                                    ...bookingForm,
                                                    address: e.target.value
                                                }),
                                            className: "jsx-c1f854d6adf2d02f" + " " + "w-full rounded-lg border border-[#DFCBB0] bg-white px-3 py-2.5 text-sm focus:border-[#7D1E28] focus:outline-none"
                                        }, void 0, false, {
                                            fileName: "[project]/app/overseas/page-client.tsx",
                                            lineNumber: 2433,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "submit",
                                            className: "jsx-c1f854d6adf2d02f" + " " + "w-full rounded-lg bg-[#5A121D] py-3 text-sm font-bold tracking-wide text-white transition-colors hover:bg-[#400B13]",
                                            children: "Submit"
                                        }, void 0, false, {
                                            fileName: "[project]/app/overseas/page-client.tsx",
                                            lineNumber: 2443,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/overseas/page-client.tsx",
                                    lineNumber: 2402,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/overseas/page-client.tsx",
                            lineNumber: 2394,
                            columnNumber: 15
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/overseas/page-client.tsx",
                    lineNumber: 2374,
                    columnNumber: 5
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/overseas/page-client.tsx",
                lineNumber: 2373,
                columnNumber: 3
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/overseas/page-client.tsx",
        lineNumber: 1257,
        columnNumber: 5
    }, this);
}
_s(OverseasPackagePage, "TzgvVLog6xa0+7A/tQ6n8s0kNkg=");
_c = OverseasPackagePage;
var _c;
__turbopack_context__.k.register(_c, "OverseasPackagePage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=app_0u-yl6i._.js.map