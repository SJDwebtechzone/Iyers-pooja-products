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
"[project]/app/corporate-package/page-client.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>CorporatePackagePage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/styled-jsx/style.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-right.mjs [app-client] (ecmascript) <export default as ChevronRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$package$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Package$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/package.mjs [app-client] (ecmascript) <export default as Package>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$star$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Star$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/star.mjs [app-client] (ecmascript) <export default as Star>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$info$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Info$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/info.mjs [app-client] (ecmascript) <export default as Info>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-check.mjs [app-client] (ecmascript) <export default as CheckCircle2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/check.mjs [app-client] (ecmascript) <export default as Check>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/sparkles.mjs [app-client] (ecmascript) <export default as Sparkles>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.mjs [app-client] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2d$check$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ShieldCheck$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/shield-check.mjs [app-client] (ecmascript) <export default as ShieldCheck>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$heart$2d$handshake$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__HeartHandshake$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/heart-handshake.mjs [app-client] (ecmascript) <export default as HeartHandshake>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$gift$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Gift$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/gift.mjs [app-client] (ecmascript) <export default as Gift>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$list$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__List$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/list.mjs [app-client] (ecmascript) <export default as List>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$flame$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Flame$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/flame.mjs [app-client] (ecmascript) <export default as Flame>");
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
const ceremonies = [
    {
        id: "friday-poojas",
        name: "Friday Poojas",
        iconType: "business",
        tagline: "Weekly blessings of Goddess Mahalakshmi for prosperity and harmony.",
        description: "Friday Poojas are conducted weekly to invoke Goddess Mahalakshmi's blessings for prosperity, harmony and well-being in the workplace.",
        image: "/images/kalash.jpg",
        price: "₹2,999",
        highlights: [
            "Weekly Renewal",
            "Prosperity",
            "Team Positivity",
            "Performed by experienced priests"
        ],
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
                desc: "Lighting the lamp and offering prayers to Goddess Lakshmi."
            },
            {
                step: "02",
                title: "Lakshmi Devi Archana",
                desc: "Performing Lakshmi Devi Archana with flowers and traditional prayers."
            },
            {
                step: "03",
                title: "Naivedyam Samarpanam",
                desc: "Offering fruits and sweets as Naivedyam."
            },
            {
                step: "04",
                title: "Aarthi & Prasadam",
                desc: "Concluding the pooja with Aarthi and distribution of Prasadam."
            }
        ],
        benefits: [
            {
                title: "Weekly Renewal",
                desc: "Creates a positive and peaceful atmosphere in the workplace."
            },
            {
                title: "Prosperity",
                desc: "Performed seeking Goddess Lakshmi's blessings for prosperity."
            },
            {
                title: "Team Positivity",
                desc: "Provides employees with a meaningful shared spiritual experience."
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
        iconType: "ayush",
        tagline: "Monthly new-moon observance seeking ancestral blessings.",
        description: "Amavasai Poojas are performed on the new moon day as a traditional observance seeking ancestral blessings and positive beginnings.",
        image: "/images/kalash.jpg",
        price: "₹3,499",
        highlights: [
            "Monthly Observance",
            "Ancestral Blessings",
            "Positive Beginning",
            "Customizable rituals"
        ],
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
                desc: "Declaring the intention for the Amavasya observance."
            },
            {
                step: "02",
                title: "Traditional Offerings",
                desc: "Performing the traditional offerings using sesame and water."
            },
            {
                step: "03",
                title: "Premises Cleansing",
                desc: "Performing traditional cleansing of the premises."
            },
            {
                step: "04",
                title: "Aarthi & Prasadam",
                desc: "Concluding the ceremony with Aarthi and Prasadam."
            }
        ],
        benefits: [
            {
                title: "Monthly Observance",
                desc: "Provides a traditional monthly spiritual observance."
            },
            {
                title: "Ancestral Blessings",
                desc: "Performed seeking blessings of ancestors."
            },
            {
                title: "Positive Beginning",
                desc: "Marks the beginning of a new lunar cycle."
            }
        ],
        notes: [
            "Scheduled according to the Amavasya date.",
            "Specific rituals can be customized according to requirements."
        ]
    },
    {
        id: "ganapathy-homam",
        name: "Ganapathi Homam",
        iconType: "ganesh",
        tagline: "Remove obstacles and begin every venture with divine blessings.",
        description: "A traditional Ganapathy Homam performed to invoke Lord Ganesha's blessings for removing obstacles, improving clarity and beginning important corporate activities on an auspicious note.",
        image: "/images/kalash.jpg",
        price: "₹3,999",
        highlights: [
            "Obstacle Removal",
            "Positive Environment",
            "Auspicious Beginning",
            "Ideal for inaugurations"
        ],
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
                desc: "The priest begins the ceremony with Sankalpam for the organization."
            },
            {
                step: "02",
                title: "Ganapathy Avahanam",
                desc: "Lord Ganesha is invoked through traditional prayers and offerings."
            },
            {
                step: "03",
                title: "Ganapathy Homam",
                desc: "Sacred offerings are made into the homa fire with Vedic chanting."
            },
            {
                step: "04",
                title: "Purnahuthi & Aarthi",
                desc: "The Homam concludes with Purnahuthi, Aarthi and Prasadam."
            }
        ],
        benefits: [
            {
                title: "Obstacle Removal",
                desc: "Traditionally performed seeking Lord Ganesha's blessings before important activities."
            },
            {
                title: "Positive Environment",
                desc: "Creates a spiritually positive atmosphere in the workplace."
            },
            {
                title: "Auspicious Beginning",
                desc: "Ideal for inaugurations, new offices and important corporate milestones."
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
        iconType: "office",
        tagline: "Blessings for company vehicles, machinery and equipment.",
        description: "Ayudha Pooja is performed for company vehicles, machinery, computers, tools and equipment.",
        image: "/images/kalash.jpg",
        price: "₹4,499",
        highlights: [
            "Vehicle Blessing",
            "Equipment Blessing",
            "Team Confidence",
            "Scalable for fleets"
        ],
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
                desc: "Beginning the ceremony with Sankalpam."
            },
            {
                step: "02",
                title: "Equipment Blessing",
                desc: "Applying turmeric and kumkum to vehicles and equipment."
            },
            {
                step: "03",
                title: "Vehicle Pooja",
                desc: "Performing traditional prayers for company vehicles."
            },
            {
                step: "04",
                title: "Maha Aarthi",
                desc: "Concluding the ceremony with Maha Aarthi and Prasadam."
            }
        ],
        benefits: [
            {
                title: "Vehicle Blessing",
                desc: "Traditional prayers for company vehicles."
            },
            {
                title: "Equipment Blessing",
                desc: "Covers machinery, tools and workplace equipment."
            },
            {
                title: "Team Confidence",
                desc: "Creates a meaningful traditional experience for staff."
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
        iconType: "vastu",
        tagline: "A simple, meaningful closing ceremony for corporate events.",
        description: "A simple closing ceremony suitable for corporate events, celebrations and office gatherings.",
        image: "/images/kalash.jpg",
        price: "₹1,999",
        highlights: [
            "Simple Closure",
            "Team Gathering",
            "Flexible",
            "Scales with headcount"
        ],
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
                desc: "Staff and attendees gather for the closing ceremony."
            },
            {
                step: "02",
                title: "Camphor Aarthi",
                desc: "Traditional Aarthi is performed."
            },
            {
                step: "03",
                title: "Prasadam Blessing",
                desc: "Prasadam is prepared for distribution."
            },
            {
                step: "04",
                title: "Distribution",
                desc: "Prasadam is distributed to attendees."
            }
        ],
        benefits: [
            {
                title: "Simple Closure",
                desc: "Provides a meaningful conclusion to corporate events."
            },
            {
                title: "Team Gathering",
                desc: "Brings employees together for a shared ceremony."
            },
            {
                title: "Flexible",
                desc: "Can be added to other corporate ceremonies."
            }
        ],
        notes: [
            "Suitable for corporate events and celebrations.",
            "Prasadam quantity can be based on the number of attendees."
        ]
    }
];
// ==========================================
// FEATURE CARDS
// ==========================================
const featureCards = [
    {
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$flame$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Flame$3e$__["Flame"],
        title: "Experienced Priests",
        description: "Our priests are well-versed in Vedic rituals and corporate pooja requirements."
    },
    {
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$package$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Package$3e$__["Package"],
        title: "Complete Samagri",
        description: "All required items and samagri will be arranged with utmost care and purity."
    },
    {
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2d$check$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ShieldCheck$3e$__["ShieldCheck"],
        title: "Authentic & Reliable",
        description: "We follow authentic Vedic procedures passed down through generations."
    },
    {
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$heart$2d$handshake$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__HeartHandshake$3e$__["HeartHandshake"],
        title: "Hassle-free Service",
        description: "End-to-end support for your corporate pooja, on time, every time."
    }
];
function CorporatePackagePage() {
    _s();
    const API_BASE = "http://localhost:3001";
    const [selectedCeremony, setSelectedCeremony] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(ceremonies[0]);
    const [selectedPackage, setSelectedPackage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(ceremonies[0]);
    const [activeTab, setActiveTab] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("details");
    const [isModalOpen, setIsModalOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [modalSuccess, setModalSuccess] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
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
    const [liveItems, setLiveItems] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(ceremonies[0].items);
    const [itemsLoading, setItemsLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [dynamicPrice, setDynamicPrice] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [availabilityWeekly, setAvailabilityWeekly] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [availabilityMonthly, setAvailabilityMonthly] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [formData, setFormData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        companyName: "",
        contactPerson: "",
        phone: "",
        email: "",
        ceremony: ceremonies[0].name,
        preferredDate: "",
        location: "",
        notes: ""
    });
    const ceremonySectionRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const packageDetailsRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    // ==========================================
    // BOOKING SUBMIT
    // ==========================================
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
                    pooja: selectedPackage.name
                })
            });
            if (!res.ok) {
                throw new Error("Booking failed");
            }
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
    // HANDLE URL HASH
    // ==========================================
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CorporatePackagePage.useEffect": ()=>{
            const handleHash = {
                "CorporatePackagePage.useEffect.handleHash": ()=>{
                    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
                    ;
                    const rawHash = window.location.hash.replace("#", "").toLowerCase().trim();
                    if (!rawHash) return;
                    const match = ceremonies.find({
                        "CorporatePackagePage.useEffect.handleHash.match": (c)=>c.id.toLowerCase() === rawHash || rawHash.includes(c.id.toLowerCase()) || c.id.toLowerCase().replace(/-/g, "").includes(rawHash.replace(/-/g, ""))
                    }["CorporatePackagePage.useEffect.handleHash.match"]);
                    if (match) {
                        setSelectedCeremony(match);
                        setSelectedPackage(match);
                        setFormData({
                            "CorporatePackagePage.useEffect.handleHash": (prev)=>({
                                    ...prev,
                                    ceremony: match.name
                                })
                        }["CorporatePackagePage.useEffect.handleHash"]);
                        setActiveTab("details");
                        setTimeout({
                            "CorporatePackagePage.useEffect.handleHash": ()=>{
                                const el = document.getElementById("corporate-details-section") || packageDetailsRef.current;
                                if (el) {
                                    el.scrollIntoView({
                                        behavior: "smooth"
                                    });
                                }
                            }
                        }["CorporatePackagePage.useEffect.handleHash"], 120);
                    }
                }
            }["CorporatePackagePage.useEffect.handleHash"];
            handleHash();
            window.addEventListener("hashchange", handleHash);
            return ({
                "CorporatePackagePage.useEffect": ()=>{
                    window.removeEventListener("hashchange", handleHash);
                }
            })["CorporatePackagePage.useEffect"];
        }
    }["CorporatePackagePage.useEffect"], []);
    // ==========================================
    // FETCH PACKAGE ITEMS
    // ==========================================
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CorporatePackagePage.useEffect": ()=>{
            let cancelled = false;
            async function loadItems() {
                setItemsLoading(true);
                try {
                    const res = await fetch(`${API_BASE}/corporate-packages/${selectedPackage.id}`);
                    if (!res.ok) {
                        throw new Error("Failed to load package items");
                    }
                    const data = await res.json();
                    if (!cancelled) {
                        const rows = Array.isArray(data) ? data : data.items || [];
                        const mapped = rows.map({
                            "CorporatePackagePage.useEffect.loadItems.mapped": (row, index)=>({
                                    sno: row.sno ?? index + 1,
                                    english: row.name_english ?? row.english ?? row.nameEnglish ?? "",
                                    tamil: row.name_tamil ?? row.tamil ?? row.nameTamil ?? "",
                                    quantity: row.quantity ?? ""
                                })
                        }["CorporatePackagePage.useEffect.loadItems.mapped"]);
                        setLiveItems(mapped.length > 0 ? mapped : selectedPackage.items);
                    }
                } catch (error) {
                    console.error("Failed to load corporate package items:", error);
                    if (!cancelled) {
                        setLiveItems(selectedPackage.items);
                    }
                } finally{
                    if (!cancelled) {
                        setItemsLoading(false);
                    }
                }
            }
            loadItems();
            return ({
                "CorporatePackagePage.useEffect": ()=>{
                    cancelled = true;
                }
            })["CorporatePackagePage.useEffect"];
        }
    }["CorporatePackagePage.useEffect"], [
        selectedPackage
    ]);
    // ==========================================
    // FETCH LIVE PRICE
    // ==========================================
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CorporatePackagePage.useEffect": ()=>{
            let cancelled = false;
            async function loadPrice() {
                try {
                    const res = await fetch(`${API_BASE}/package-prices/${selectedPackage.id}`);
                    const data = await res.json();
                    if (!cancelled) {
                        setDynamicPrice(data?.price || null);
                        setAvailabilityWeekly(!!data?.availability_weekly);
                        setAvailabilityMonthly(!!data?.availability_monthly);
                    }
                } catch  {
                    if (!cancelled) {
                        setDynamicPrice(null);
                        setAvailabilityWeekly(false);
                        setAvailabilityMonthly(false);
                    }
                }
            }
            loadPrice();
            return ({
                "CorporatePackagePage.useEffect": ()=>{
                    cancelled = true;
                }
            })["CorporatePackagePage.useEffect"];
        }
    }["CorporatePackagePage.useEffect"], [
        selectedPackage
    ]);
    // ==========================================
    // SELECT CEREMONY
    // ==========================================
    const handleSelectCeremony = (ceremony)=>{
        setSelectedCeremony(ceremony);
        setFormData((prev)=>({
                ...prev,
                ceremony: ceremony.name
            }));
    };
    // ==========================================
    // SELECT PACKAGE
    // ==========================================
    const handleSelectPackage = (ceremony)=>{
        setSelectedPackage(ceremony);
        setLiveItems(ceremony.items);
        setActiveTab("details");
    };
    // ==========================================
    // ENQUIRY FORM SUBMIT
    // ==========================================
    const handleFormSubmit = (e)=>{
        e.preventDefault();
        setModalSuccess(true);
        setTimeout(()=>{
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
                notes: ""
            });
        }, 2500);
    };
    // ==========================================
    // RITUAL ICON
    // ==========================================
    const renderRitualIcon = (type, isActive)=>{
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
                            fileName: "[project]/app/corporate-package/page-client.tsx",
                            lineNumber: 984,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            d: "M7 11c0 5 2 9 5 9s5-4 5-9"
                        }, void 0, false, {
                            fileName: "[project]/app/corporate-package/page-client.tsx",
                            lineNumber: 989,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            d: "M12 10.5v3.5a1.5 1.5 0 0 0 3 0"
                        }, void 0, false, {
                            fileName: "[project]/app/corporate-package/page-client.tsx",
                            lineNumber: 990,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            d: "M6 8.5C4 9 3 11 3 13"
                        }, void 0, false, {
                            fileName: "[project]/app/corporate-package/page-client.tsx",
                            lineNumber: 991,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            d: "M18 8.5C20 9 21 11 21 13"
                        }, void 0, false, {
                            fileName: "[project]/app/corporate-package/page-client.tsx",
                            lineNumber: 992,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/corporate-package/page-client.tsx",
                    lineNumber: 977,
                    columnNumber: 11
                }, this);
            case "house":
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                    viewBox: "0 0 24 24",
                    fill: "none",
                    stroke: strokeColor,
                    strokeWidth: "1.6",
                    className: "w-8 h-8",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            d: "M3 10.5L12 3l9 7.5"
                        }, void 0, false, {
                            fileName: "[project]/app/corporate-package/page-client.tsx",
                            lineNumber: 1005,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            d: "M5 9.5V20a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V9.5"
                        }, void 0, false, {
                            fileName: "[project]/app/corporate-package/page-client.tsx",
                            lineNumber: 1006,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            d: "M10 21v-7h4v7"
                        }, void 0, false, {
                            fileName: "[project]/app/corporate-package/page-client.tsx",
                            lineNumber: 1007,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/corporate-package/page-client.tsx",
                    lineNumber: 998,
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
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                            x: "3",
                            y: "3",
                            width: "18",
                            height: "18",
                            rx: "2"
                        }, void 0, false, {
                            fileName: "[project]/app/corporate-package/page-client.tsx",
                            lineNumber: 1020,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                            cx: "12",
                            cy: "12",
                            r: "5"
                        }, void 0, false, {
                            fileName: "[project]/app/corporate-package/page-client.tsx",
                            lineNumber: 1027,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            d: "M12 3v18"
                        }, void 0, false, {
                            fileName: "[project]/app/corporate-package/page-client.tsx",
                            lineNumber: 1032,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            d: "M3 12h18"
                        }, void 0, false, {
                            fileName: "[project]/app/corporate-package/page-client.tsx",
                            lineNumber: 1033,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                            cx: "12",
                            cy: "12",
                            r: "1.5"
                        }, void 0, false, {
                            fileName: "[project]/app/corporate-package/page-client.tsx",
                            lineNumber: 1034,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/corporate-package/page-client.tsx",
                    lineNumber: 1013,
                    columnNumber: 11
                }, this);
            case "office":
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                    viewBox: "0 0 24 24",
                    fill: "none",
                    stroke: strokeColor,
                    strokeWidth: "1.6",
                    className: "w-8 h-8",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                            x: "4",
                            y: "2",
                            width: "16",
                            height: "20",
                            rx: "1"
                        }, void 0, false, {
                            fileName: "[project]/app/corporate-package/page-client.tsx",
                            lineNumber: 1051,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            d: "M9 22v-4h6v4"
                        }, void 0, false, {
                            fileName: "[project]/app/corporate-package/page-client.tsx",
                            lineNumber: 1058,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            d: "M8 6h2"
                        }, void 0, false, {
                            fileName: "[project]/app/corporate-package/page-client.tsx",
                            lineNumber: 1059,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            d: "M14 6h2"
                        }, void 0, false, {
                            fileName: "[project]/app/corporate-package/page-client.tsx",
                            lineNumber: 1060,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            d: "M8 10h2"
                        }, void 0, false, {
                            fileName: "[project]/app/corporate-package/page-client.tsx",
                            lineNumber: 1061,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            d: "M14 10h2"
                        }, void 0, false, {
                            fileName: "[project]/app/corporate-package/page-client.tsx",
                            lineNumber: 1062,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            d: "M8 14h2"
                        }, void 0, false, {
                            fileName: "[project]/app/corporate-package/page-client.tsx",
                            lineNumber: 1063,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            d: "M14 14h2"
                        }, void 0, false, {
                            fileName: "[project]/app/corporate-package/page-client.tsx",
                            lineNumber: 1064,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/corporate-package/page-client.tsx",
                    lineNumber: 1044,
                    columnNumber: 11
                }, this);
            case "business":
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                    viewBox: "0 0 24 24",
                    fill: "none",
                    stroke: strokeColor,
                    strokeWidth: "1.6",
                    className: "w-8 h-8",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            d: "M12 3c-2.5 3-4 6-4 9a4 4 0 0 0 8 0c0-3-1.5-6-4-9z"
                        }, void 0, false, {
                            fileName: "[project]/app/corporate-package/page-client.tsx",
                            lineNumber: 1077,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            d: "M6 19c3 1.5 9 1.5 12 0"
                        }, void 0, false, {
                            fileName: "[project]/app/corporate-package/page-client.tsx",
                            lineNumber: 1078,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/corporate-package/page-client.tsx",
                    lineNumber: 1070,
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
                            fileName: "[project]/app/corporate-package/page-client.tsx",
                            lineNumber: 1091,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                            cx: "12",
                            cy: "18",
                            r: "3"
                        }, void 0, false, {
                            fileName: "[project]/app/corporate-package/page-client.tsx",
                            lineNumber: 1092,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            d: "M5 21c1.5-2 4-3 7-3s5.5 1 7 3"
                        }, void 0, false, {
                            fileName: "[project]/app/corporate-package/page-client.tsx",
                            lineNumber: 1097,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/corporate-package/page-client.tsx",
                    lineNumber: 1084,
                    columnNumber: 11
                }, this);
            default:
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__["Sparkles"], {
                    className: "w-8 h-8",
                    stroke: strokeColor
                }, void 0, false, {
                    fileName: "[project]/app/corporate-package/page-client.tsx",
                    lineNumber: 1103,
                    columnNumber: 11
                }, this);
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        className: "jsx-68f81cd87734d9f4" + " " + "min-h-screen bg-[#FAF6EE] text-[#29231F] font-sans antialiased",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                id: "68f81cd87734d9f4",
                children: "@keyframes priest-blink{0%,to{opacity:1;box-shadow:0 0 #f3d78a00,0 0 #f3d78a00}50%{opacity:.82;box-shadow:0 0 18px #f3d78ae6,0 0 35px #f3d78a59}}.animate-priest-blink{animation:1.6s ease-in-out infinite priest-blink}"
            }, void 0, false, void 0, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "jsx-68f81cd87734d9f4" + " " + "relative mt-[90px] w-full min-h-[620px] flex items-center overflow-hidden border-b border-[#3D1418]",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "jsx-68f81cd87734d9f4" + " " + "absolute inset-0",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                src: "/images/corporate-banner.png",
                                alt: "Corporate Package",
                                fill: true,
                                priority: true,
                                sizes: "100vw",
                                className: "object-cover object-center"
                            }, void 0, false, {
                                fileName: "[project]/app/corporate-package/page-client.tsx",
                                lineNumber: 1162,
                                columnNumber: 5
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "jsx-68f81cd87734d9f4" + " " + "absolute inset-0 bg-gradient-to-r from-white/5 via-white/10 to-white/25"
                            }, void 0, false, {
                                fileName: "[project]/app/corporate-package/page-client.tsx",
                                lineNumber: 1172,
                                columnNumber: 5
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/corporate-package/page-client.tsx",
                        lineNumber: 1161,
                        columnNumber: 3
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "jsx-68f81cd87734d9f4" + " " + "relative z-10 w-full max-w-[1800px] mx-auto px-6 lg:px-10",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "jsx-68f81cd87734d9f4" + " " + "max-w-[650px] lg:ml-[52%]",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                    className: "jsx-68f81cd87734d9f4" + " " + "font-[family-name:var(--font-cormorant)] text-4xl md:text-5xl lg:text-[78px] leading-none font-semibold",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "jsx-68f81cd87734d9f4" + " " + "text-[#5A1820]",
                                            children: "Corporate"
                                        }, void 0, false, {
                                            fileName: "[project]/app/corporate-package/page-client.tsx",
                                            lineNumber: 1194,
                                            columnNumber: 9
                                        }, this),
                                        " ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "jsx-68f81cd87734d9f4" + " " + "bg-gradient-to-r from-[#B8872F] via-[#E6C977] to-[#A8741F] bg-clip-text text-transparent",
                                            children: "Package"
                                        }, void 0, false, {
                                            fileName: "[project]/app/corporate-package/page-client.tsx",
                                            lineNumber: 1197,
                                            columnNumber: 9
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/corporate-package/page-client.tsx",
                                    lineNumber: 1193,
                                    columnNumber: 7
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "jsx-68f81cd87734d9f4" + " " + "my-6 flex items-center gap-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "jsx-68f81cd87734d9f4" + " " + "h-px w-24 bg-[#D4B978]"
                                        }, void 0, false, {
                                            fileName: "[project]/app/corporate-package/page-client.tsx",
                                            lineNumber: 1204,
                                            columnNumber: 9
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "jsx-68f81cd87734d9f4" + " " + "text-[#C39A43] text-xl",
                                            children: "❖"
                                        }, void 0, false, {
                                            fileName: "[project]/app/corporate-package/page-client.tsx",
                                            lineNumber: 1205,
                                            columnNumber: 9
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "jsx-68f81cd87734d9f4" + " " + "h-px w-24 bg-[#D4B978]"
                                        }, void 0, false, {
                                            fileName: "[project]/app/corporate-package/page-client.tsx",
                                            lineNumber: 1206,
                                            columnNumber: 9
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/corporate-package/page-client.tsx",
                                    lineNumber: 1203,
                                    columnNumber: 7
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "jsx-68f81cd87734d9f4" + " " + "max-w-xl text-lg leading-relaxed font-medium text-[#4A1015]",
                                    children: "Traditional poojas and homams for offices, new establishments, business spaces and important corporate occasions."
                                }, void 0, false, {
                                    fileName: "[project]/app/corporate-package/page-client.tsx",
                                    lineNumber: 1210,
                                    columnNumber: 7
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/corporate-package/page-client.tsx",
                            lineNumber: 1177,
                            columnNumber: 5
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/corporate-package/page-client.tsx",
                        lineNumber: 1176,
                        columnNumber: 3
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/corporate-package/page-client.tsx",
                lineNumber: 1159,
                columnNumber: 1
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                ref: ceremonySectionRef,
                id: "choose-ceremony",
                className: "jsx-68f81cd87734d9f4" + " " + "py-10 sm:py-14 px-4 sm:px-8 max-w-[1400px] mx-auto",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "jsx-68f81cd87734d9f4" + " " + "text-center mb-10",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "jsx-68f81cd87734d9f4" + " " + "font-[family-name:var(--font-cormorant)] text-3xl sm:text-4xl font-bold text-[#42151B]",
                            children: "Choose Your Ceremony"
                        }, void 0, false, {
                            fileName: "[project]/app/corporate-package/page-client.tsx",
                            lineNumber: 1240,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/corporate-package/page-client.tsx",
                        lineNumber: 1239,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "jsx-68f81cd87734d9f4" + " " + "grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4",
                        children: ceremonies.map((ceremony)=>{
                            const isActive = selectedCeremony.id === ceremony.id;
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                onClick: ()=>handleSelectCeremony(ceremony),
                                className: "jsx-68f81cd87734d9f4" + " " + `flex flex-col items-center justify-center p-4 sm:p-5 rounded-2xl border transition-all ${isActive ? "bg-[#4A1015] border-[#4A1015] text-white shadow-md" : "bg-[#FAF7F0] border-[#E8DEC8] text-[#42151B] hover:border-[#B08A45]"}`,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "jsx-68f81cd87734d9f4" + " " + "w-12 h-12 flex items-center justify-center mb-3",
                                        children: renderRitualIcon(ceremony.iconType, isActive)
                                    }, void 0, false, {
                                        fileName: "[project]/app/corporate-package/page-client.tsx",
                                        lineNumber: 1267,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "jsx-68f81cd87734d9f4" + " " + "font-[family-name:var(--font-cormorant)] text-base sm:text-lg font-bold text-center",
                                        children: ceremony.name
                                    }, void 0, false, {
                                        fileName: "[project]/app/corporate-package/page-client.tsx",
                                        lineNumber: 1274,
                                        columnNumber: 19
                                    }, this)
                                ]
                            }, ceremony.id, true, {
                                fileName: "[project]/app/corporate-package/page-client.tsx",
                                lineNumber: 1253,
                                columnNumber: 17
                            }, this);
                        })
                    }, void 0, false, {
                        fileName: "[project]/app/corporate-package/page-client.tsx",
                        lineNumber: 1245,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "jsx-68f81cd87734d9f4" + " " + "mt-8 rounded-2xl bg-white border border-[#DFCBB0] p-5 sm:p-8",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "jsx-68f81cd87734d9f4" + " " + "grid grid-cols-1 lg:grid-cols-12 gap-8 items-center",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "jsx-68f81cd87734d9f4" + " " + "lg:col-span-5 relative aspect-[4/3] rounded-xl overflow-hidden",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        src: selectedCeremony.image,
                                        alt: selectedCeremony.name,
                                        fill: true,
                                        className: "object-cover"
                                    }, void 0, false, {
                                        fileName: "[project]/app/corporate-package/page-client.tsx",
                                        lineNumber: 1287,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/app/corporate-package/page-client.tsx",
                                    lineNumber: 1286,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "jsx-68f81cd87734d9f4" + " " + "lg:col-span-7",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "jsx-68f81cd87734d9f4" + " " + "font-[family-name:var(--font-cormorant)] text-3xl font-bold text-[#42151B]",
                                            children: selectedCeremony.name
                                        }, void 0, false, {
                                            fileName: "[project]/app/corporate-package/page-client.tsx",
                                            lineNumber: 1300,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "jsx-68f81cd87734d9f4" + " " + "mt-2 text-[#B37D2A] font-semibold",
                                            children: selectedCeremony.tagline
                                        }, void 0, false, {
                                            fileName: "[project]/app/corporate-package/page-client.tsx",
                                            lineNumber: 1304,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "jsx-68f81cd87734d9f4" + " " + "mt-4 text-base leading-relaxed text-[#55463E] sm:text-lg",
                                            children: selectedCeremony.description
                                        }, void 0, false, {
                                            fileName: "[project]/app/corporate-package/page-client.tsx",
                                            lineNumber: 1308,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "jsx-68f81cd87734d9f4" + " " + "mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3",
                                            children: selectedCeremony.highlights.map((highlight)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "jsx-68f81cd87734d9f4" + " " + "flex items-center gap-2",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__["Check"], {
                                                            size: 16,
                                                            className: "text-[#7D1E28]"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/corporate-package/page-client.tsx",
                                                            lineNumber: 1321,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "jsx-68f81cd87734d9f4" + " " + "text-base sm:text-lg",
                                                            children: highlight
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/corporate-package/page-client.tsx",
                                                            lineNumber: 1326,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, highlight, true, {
                                                    fileName: "[project]/app/corporate-package/page-client.tsx",
                                                    lineNumber: 1317,
                                                    columnNumber: 21
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/app/corporate-package/page-client.tsx",
                                            lineNumber: 1314,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/corporate-package/page-client.tsx",
                                    lineNumber: 1299,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/corporate-package/page-client.tsx",
                            lineNumber: 1285,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/corporate-package/page-client.tsx",
                        lineNumber: 1284,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/corporate-package/page-client.tsx",
                lineNumber: 1234,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                ref: packageDetailsRef,
                id: "corporate-details-section",
                className: "jsx-68f81cd87734d9f4" + " " + "scroll-mt-28 py-10 sm:py-14 px-4 sm:px-8 max-w-[1400px] mx-auto",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "jsx-68f81cd87734d9f4" + " " + "text-center mb-8",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "jsx-68f81cd87734d9f4" + " " + "inline-block px-4 py-1 rounded-full bg-[#EFE3CF] text-xs font-bold text-[#88242F]",
                                children: selectedPackage.name
                            }, void 0, false, {
                                fileName: "[project]/app/corporate-package/page-client.tsx",
                                lineNumber: 1345,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "jsx-68f81cd87734d9f4" + " " + "mt-3 font-[family-name:var(--font-cormorant)] text-3xl sm:text-4xl font-bold text-[#42151B]",
                                children: "Package Details"
                            }, void 0, false, {
                                fileName: "[project]/app/corporate-package/page-client.tsx",
                                lineNumber: 1349,
                                columnNumber: 11
                            }, this),
                            (()=>{
                                const getAvailabilityText = ()=>{
                                    if (availabilityWeekly && availabilityMonthly) {
                                        return "Available on weekly / monthly basis";
                                    }
                                    if (availabilityWeekly) {
                                        return "Available on weekly basis";
                                    }
                                    if (availabilityMonthly) {
                                        return "Available on monthly basis";
                                    }
                                    return null;
                                };
                                const text = getAvailabilityText();
                                if (!text) return null;
                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "jsx-68f81cd87734d9f4" + " " + "mt-3 inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-[#FAF0DF] border border-[#E5C77A] text-xs sm:text-sm font-semibold text-[#8A1C2B] shadow-sm",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "jsx-68f81cd87734d9f4",
                                        children: text
                                    }, void 0, false, {
                                        fileName: "[project]/app/corporate-package/page-client.tsx",
                                        lineNumber: 1370,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/app/corporate-package/page-client.tsx",
                                    lineNumber: 1369,
                                    columnNumber: 15
                                }, this);
                            })(),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "jsx-68f81cd87734d9f4" + " " + "mt-2 text-sm text-[#7A6458] sm:text-base",
                                children: "Select a package to view its samagri items."
                            }, void 0, false, {
                                fileName: "[project]/app/corporate-package/page-client.tsx",
                                lineNumber: 1375,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "jsx-68f81cd87734d9f4" + " " + "mt-6 flex flex-wrap justify-center gap-2 sm:gap-3",
                                children: ceremonies.map((ceremony)=>{
                                    const isActive = selectedPackage.id === ceremony.id;
                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        onClick: ()=>handleSelectPackage(ceremony),
                                        className: "jsx-68f81cd87734d9f4" + " " + `rounded-full px-4 sm:px-5 py-2.5 text-xs sm:text-sm font-semibold transition-all duration-200 ${isActive ? "bg-[#4A1015] text-white shadow-md ring-2 ring-[#D4B978]/40" : "bg-white text-[#42151B] border border-[#DFCBB0] hover:bg-[#F5EDE0]"}`,
                                        children: ceremony.name
                                    }, ceremony.id, false, {
                                        fileName: "[project]/app/corporate-package/page-client.tsx",
                                        lineNumber: 1389,
                                        columnNumber: 19
                                    }, this);
                                })
                            }, void 0, false, {
                                fileName: "[project]/app/corporate-package/page-client.tsx",
                                lineNumber: 1381,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/corporate-package/page-client.tsx",
                        lineNumber: 1344,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "jsx-68f81cd87734d9f4" + " " + "rounded-2xl bg-[#FCFAF5] border border-[#DFCBB0] p-4 sm:p-6 lg:p-7",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "jsx-68f81cd87734d9f4" + " " + "grid grid-cols-1 lg:grid-cols-12 gap-6",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "jsx-68f81cd87734d9f4" + " " + "min-w-0 lg:col-span-3",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "jsx-68f81cd87734d9f4" + " " + "lg:sticky lg:top-28 bg-[#4A1015] rounded-xl p-3 shadow-lg",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "jsx-68f81cd87734d9f4" + " " + "space-y-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        type: "button",
                                                        onClick: ()=>setActiveTab("details"),
                                                        className: "jsx-68f81cd87734d9f4" + " " + `w-full flex items-center gap-3 px-4 py-3 rounded-lg text-left transition-all duration-200 ${activeTab === "details" ? "bg-[#7D1E28] text-white shadow-md" : "text-[#E6CFCE] hover:bg-white/10 hover:text-white"}`,
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$gift$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Gift$3e$__["Gift"], {
                                                                size: 18,
                                                                className: activeTab === "details" ? "text-[#F3D78A]" : "text-[#D4B978]"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/corporate-package/page-client.tsx",
                                                                lineNumber: 1434,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "jsx-68f81cd87734d9f4" + " " + "font-medium",
                                                                children: "Package Details"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/corporate-package/page-client.tsx",
                                                                lineNumber: 1444,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/corporate-package/page-client.tsx",
                                                        lineNumber: 1420,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        type: "button",
                                                        onClick: ()=>setActiveTab("process"),
                                                        className: "jsx-68f81cd87734d9f4" + " " + `w-full flex items-center gap-3 px-4 py-3 rounded-lg text-left transition-all duration-200 ${activeTab === "process" ? "bg-[#7D1E28] text-white shadow-md" : "text-[#E6CFCE] hover:bg-white/10 hover:text-white"}`,
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$list$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__List$3e$__["List"], {
                                                                size: 18,
                                                                className: activeTab === "process" ? "text-[#F3D78A]" : "text-[#D4B978]"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/corporate-package/page-client.tsx",
                                                                lineNumber: 1464,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "jsx-68f81cd87734d9f4" + " " + "font-medium",
                                                                children: "Pooja Process"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/corporate-package/page-client.tsx",
                                                                lineNumber: 1474,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/corporate-package/page-client.tsx",
                                                        lineNumber: 1450,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        type: "button",
                                                        onClick: ()=>setActiveTab("benefits"),
                                                        className: "jsx-68f81cd87734d9f4" + " " + `w-full flex items-center gap-3 px-4 py-3 rounded-lg text-left transition-all duration-200 ${activeTab === "benefits" ? "bg-[#7D1E28] text-white shadow-md" : "text-[#E6CFCE] hover:bg-white/10 hover:text-white"}`,
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$star$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Star$3e$__["Star"], {
                                                                size: 18,
                                                                className: activeTab === "benefits" ? "text-[#F3D78A]" : "text-[#D4B978]"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/corporate-package/page-client.tsx",
                                                                lineNumber: 1494,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "jsx-68f81cd87734d9f4" + " " + "font-medium",
                                                                children: "Benefits"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/corporate-package/page-client.tsx",
                                                                lineNumber: 1504,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/corporate-package/page-client.tsx",
                                                        lineNumber: 1480,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        type: "button",
                                                        onClick: ()=>setActiveTab("notes"),
                                                        className: "jsx-68f81cd87734d9f4" + " " + `w-full flex items-center gap-3 px-4 py-3 rounded-lg text-left transition-all duration-200 ${activeTab === "notes" ? "bg-[#7D1E28] text-white shadow-md" : "text-[#E6CFCE] hover:bg-white/10 hover:text-white"}`,
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$info$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Info$3e$__["Info"], {
                                                                size: 18,
                                                                className: activeTab === "notes" ? "text-[#F3D78A]" : "text-[#D4B978]"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/corporate-package/page-client.tsx",
                                                                lineNumber: 1524,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "jsx-68f81cd87734d9f4" + " " + "font-medium",
                                                                children: "Important Notes"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/corporate-package/page-client.tsx",
                                                                lineNumber: 1534,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/corporate-package/page-client.tsx",
                                                        lineNumber: 1510,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/corporate-package/page-client.tsx",
                                                lineNumber: 1417,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "jsx-68f81cd87734d9f4" + " " + "mt-4 border-t border-white/15 pt-5",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "jsx-68f81cd87734d9f4" + " " + "mb-4",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "jsx-68f81cd87734d9f4" + " " + "block text-[10px] uppercase tracking-[0.16em] text-[#D4B978]",
                                                                children: "Selected Package"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/corporate-package/page-client.tsx",
                                                                lineNumber: 1543,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                                className: "jsx-68f81cd87734d9f4" + " " + "mt-2 font-[family-name:var(--font-cormorant)] text-2xl font-bold leading-tight text-[#F3D78A]",
                                                                children: selectedPackage.name
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/corporate-package/page-client.tsx",
                                                                lineNumber: 1547,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "jsx-68f81cd87734d9f4" + " " + "mt-2 text-xl font-bold text-white",
                                                                children: dynamicPrice ? `₹${dynamicPrice}` : selectedPackage.price
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/corporate-package/page-client.tsx",
                                                                lineNumber: 1551,
                                                                columnNumber: 40
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/corporate-package/page-client.tsx",
                                                        lineNumber: 1542,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        type: "button",
                                                        onClick: ()=>setIsOrderOpen(true),
                                                        className: "jsx-68f81cd87734d9f4" + " " + "w-full rounded-xl bg-[#E5C77A] px-4 py-3 text-sm font-bold text-[#3D1418] shadow-sm transition-all hover:bg-[#F3D78A] hover:shadow-md active:scale-[0.98]",
                                                        children: "Order Now"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/corporate-package/page-client.tsx",
                                                        lineNumber: 1559,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        type: "button",
                                                        onClick: ()=>setIsBookingOpen(true),
                                                        className: "jsx-68f81cd87734d9f4" + " " + "mt-3 w-full rounded-xl border border-[#F3D78A]/50 bg-[#F3D78A] px-3 py-3 text-center text-xs font-bold leading-relaxed text-[#3D1418] shadow-sm animate-priest-blink transition-transform hover:scale-[1.01]",
                                                        children: "Looking for an experienced Iyer for an upcoming pooja?"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/corporate-package/page-client.tsx",
                                                        lineNumber: 1568,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/corporate-package/page-client.tsx",
                                                lineNumber: 1541,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/corporate-package/page-client.tsx",
                                        lineNumber: 1416,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/app/corporate-package/page-client.tsx",
                                    lineNumber: 1415,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "jsx-68f81cd87734d9f4" + " " + "lg:col-span-9",
                                    children: [
                                        activeTab === "details" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "jsx-68f81cd87734d9f4",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "jsx-68f81cd87734d9f4" + " " + "flex flex-col sm:flex-row sm:justify-between sm:items-center gap-3 mb-4",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                            className: "jsx-68f81cd87734d9f4" + " " + "font-[family-name:var(--font-cormorant)] text-2xl font-bold text-[#42151B]",
                                                            children: "Pooja Samagri / Items List"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/corporate-package/page-client.tsx",
                                                            lineNumber: 1593,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "jsx-68f81cd87734d9f4" + " " + "inline-flex w-fit rounded-full bg-[#F5EDE0] px-3 py-1 text-xs font-semibold text-[#7D1E28]",
                                                            children: [
                                                                selectedPackage.name,
                                                                " ",
                                                                "(",
                                                                liveItems.length,
                                                                " ",
                                                                "Items)"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/corporate-package/page-client.tsx",
                                                            lineNumber: 1598,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/corporate-package/page-client.tsx",
                                                    lineNumber: 1592,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "jsx-68f81cd87734d9f4" + " " + "overflow-x-auto rounded-xl border border-[#DFCBB0] bg-white",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                                                        className: "jsx-68f81cd87734d9f4" + " " + "w-full text-left text-sm",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                                                                className: "jsx-68f81cd87734d9f4",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                                    className: "jsx-68f81cd87734d9f4" + " " + "bg-[#5A1015] text-white",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                            className: "jsx-68f81cd87734d9f4" + " " + "py-3 px-3 text-center",
                                                                            children: "S.No"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/corporate-package/page-client.tsx",
                                                                            lineNumber: 1612,
                                                                            columnNumber: 27
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                            className: "jsx-68f81cd87734d9f4" + " " + "py-3 px-4",
                                                                            children: "Name (English)"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/corporate-package/page-client.tsx",
                                                                            lineNumber: 1616,
                                                                            columnNumber: 27
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                            className: "jsx-68f81cd87734d9f4" + " " + "py-3 px-4",
                                                                            children: "Name (Tamil)"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/corporate-package/page-client.tsx",
                                                                            lineNumber: 1620,
                                                                            columnNumber: 27
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                            className: "jsx-68f81cd87734d9f4" + " " + "py-3 px-4",
                                                                            children: "Quantity"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/corporate-package/page-client.tsx",
                                                                            lineNumber: 1624,
                                                                            columnNumber: 27
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/app/corporate-package/page-client.tsx",
                                                                    lineNumber: 1611,
                                                                    columnNumber: 25
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/corporate-package/page-client.tsx",
                                                                lineNumber: 1610,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                                                                className: "jsx-68f81cd87734d9f4",
                                                                children: itemsLoading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                                    className: "jsx-68f81cd87734d9f4",
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                        colSpan: 4,
                                                                        className: "jsx-68f81cd87734d9f4" + " " + "py-10 text-center text-[#7A6458]",
                                                                        children: "Loading items..."
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/corporate-package/page-client.tsx",
                                                                        lineNumber: 1633,
                                                                        columnNumber: 29
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/corporate-package/page-client.tsx",
                                                                    lineNumber: 1632,
                                                                    columnNumber: 27
                                                                }, this) : liveItems.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                                    className: "jsx-68f81cd87734d9f4",
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                        colSpan: 4,
                                                                        className: "jsx-68f81cd87734d9f4" + " " + "py-10 text-center text-[#7A6458]",
                                                                        children: "No items available."
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/corporate-package/page-client.tsx",
                                                                        lineNumber: 1643,
                                                                        columnNumber: 29
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/corporate-package/page-client.tsx",
                                                                    lineNumber: 1642,
                                                                    columnNumber: 27
                                                                }, this) : liveItems.map((item, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                                        className: "jsx-68f81cd87734d9f4" + " " + `border-t border-[#F0E7D8] ${index % 2 === 0 ? "bg-[#FAF7F0]" : "bg-white"}`,
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                                className: "jsx-68f81cd87734d9f4" + " " + "py-3 px-3 text-center font-medium",
                                                                                children: item.sno
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/app/corporate-package/page-client.tsx",
                                                                                lineNumber: 1666,
                                                                                columnNumber: 33
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                                className: "jsx-68f81cd87734d9f4" + " " + "py-3 px-4 font-medium text-[#42151B]",
                                                                                children: item.english
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/app/corporate-package/page-client.tsx",
                                                                                lineNumber: 1672,
                                                                                columnNumber: 33
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                                className: "jsx-68f81cd87734d9f4" + " " + "py-3 px-4 text-[#55463E]",
                                                                                children: item.tamil
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/app/corporate-package/page-client.tsx",
                                                                                lineNumber: 1678,
                                                                                columnNumber: 33
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                                className: "jsx-68f81cd87734d9f4" + " " + "py-3 px-4 font-semibold text-[#7D1E28]",
                                                                                children: item.quantity
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/app/corporate-package/page-client.tsx",
                                                                                lineNumber: 1684,
                                                                                columnNumber: 33
                                                                            }, this)
                                                                        ]
                                                                    }, `${item.sno}-${index}`, true, {
                                                                        fileName: "[project]/app/corporate-package/page-client.tsx",
                                                                        lineNumber: 1656,
                                                                        columnNumber: 31
                                                                    }, this))
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/corporate-package/page-client.tsx",
                                                                lineNumber: 1630,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/corporate-package/page-client.tsx",
                                                        lineNumber: 1609,
                                                        columnNumber: 21
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/app/corporate-package/page-client.tsx",
                                                    lineNumber: 1608,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "jsx-68f81cd87734d9f4" + " " + "mt-4 flex items-start gap-2 text-sm text-[#7A6458]",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$info$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Info$3e$__["Info"], {
                                                            size: 17,
                                                            className: "mt-0.5 shrink-0 text-[#B08A45]"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/corporate-package/page-client.tsx",
                                                            lineNumber: 1698,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "jsx-68f81cd87734d9f4",
                                                            children: "The items and quantities may vary slightly based on the priest's guidance and tradition."
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/corporate-package/page-client.tsx",
                                                            lineNumber: 1703,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/corporate-package/page-client.tsx",
                                                    lineNumber: 1697,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/corporate-package/page-client.tsx",
                                            lineNumber: 1591,
                                            columnNumber: 17
                                        }, this),
                                        activeTab === "process" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "jsx-68f81cd87734d9f4",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    className: "jsx-68f81cd87734d9f4" + " " + "font-[family-name:var(--font-cormorant)] text-2xl font-bold text-[#42151B] mb-4",
                                                    children: "Step-by-Step Pooja Process"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/corporate-package/page-client.tsx",
                                                    lineNumber: 1718,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "jsx-68f81cd87734d9f4" + " " + "grid grid-cols-1 sm:grid-cols-2 gap-4",
                                                    children: selectedCeremony.process.map((step)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "jsx-68f81cd87734d9f4" + " " + "bg-white p-5 rounded-xl border border-[#DFCBB0]",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "jsx-68f81cd87734d9f4" + " " + "flex gap-3",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "jsx-68f81cd87734d9f4" + " " + "w-9 h-9 shrink-0 rounded-full bg-[#4A1015] text-white flex items-center justify-center text-sm font-semibold",
                                                                        children: step.step
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/corporate-package/page-client.tsx",
                                                                        lineNumber: 1733,
                                                                        columnNumber: 29
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "jsx-68f81cd87734d9f4",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                                                className: "jsx-68f81cd87734d9f4" + " " + "font-[family-name:var(--font-cormorant)] text-xl font-bold text-[#42151B]",
                                                                                children: step.title
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/app/corporate-package/page-client.tsx",
                                                                                lineNumber: 1740,
                                                                                columnNumber: 31
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                className: "jsx-68f81cd87734d9f4" + " " + "mt-1 text-sm text-[#55463E]",
                                                                                children: step.desc
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/app/corporate-package/page-client.tsx",
                                                                                lineNumber: 1746,
                                                                                columnNumber: 31
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/app/corporate-package/page-client.tsx",
                                                                        lineNumber: 1739,
                                                                        columnNumber: 29
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/corporate-package/page-client.tsx",
                                                                lineNumber: 1732,
                                                                columnNumber: 27
                                                            }, this)
                                                        }, step.step, false, {
                                                            fileName: "[project]/app/corporate-package/page-client.tsx",
                                                            lineNumber: 1726,
                                                            columnNumber: 25
                                                        }, this))
                                                }, void 0, false, {
                                                    fileName: "[project]/app/corporate-package/page-client.tsx",
                                                    lineNumber: 1723,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/corporate-package/page-client.tsx",
                                            lineNumber: 1717,
                                            columnNumber: 17
                                        }, this),
                                        activeTab === "benefits" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "jsx-68f81cd87734d9f4",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    className: "jsx-68f81cd87734d9f4" + " " + "font-[family-name:var(--font-cormorant)] text-2xl font-bold text-[#42151B] mb-4",
                                                    children: "Corporate Blessings & Benefits"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/corporate-package/page-client.tsx",
                                                    lineNumber: 1764,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "jsx-68f81cd87734d9f4" + " " + "grid grid-cols-1 sm:grid-cols-2 gap-4",
                                                    children: selectedCeremony.benefits.map((benefit, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "jsx-68f81cd87734d9f4" + " " + "bg-white p-5 rounded-xl border border-[#DFCBB0]",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "jsx-68f81cd87734d9f4" + " " + "flex gap-3",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$star$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Star$3e$__["Star"], {
                                                                        size: 20,
                                                                        className: "shrink-0 text-[#B08A45]"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/corporate-package/page-client.tsx",
                                                                        lineNumber: 1780,
                                                                        columnNumber: 29
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "jsx-68f81cd87734d9f4",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                                                className: "jsx-68f81cd87734d9f4" + " " + "font-[family-name:var(--font-cormorant)] text-xl font-bold text-[#42151B]",
                                                                                children: benefit.title
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/app/corporate-package/page-client.tsx",
                                                                                lineNumber: 1786,
                                                                                columnNumber: 31
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                className: "jsx-68f81cd87734d9f4" + " " + "mt-1 text-sm text-[#55463E]",
                                                                                children: benefit.desc
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/app/corporate-package/page-client.tsx",
                                                                                lineNumber: 1792,
                                                                                columnNumber: 31
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/app/corporate-package/page-client.tsx",
                                                                        lineNumber: 1785,
                                                                        columnNumber: 29
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/corporate-package/page-client.tsx",
                                                                lineNumber: 1779,
                                                                columnNumber: 27
                                                            }, this)
                                                        }, index, false, {
                                                            fileName: "[project]/app/corporate-package/page-client.tsx",
                                                            lineNumber: 1775,
                                                            columnNumber: 25
                                                        }, this))
                                                }, void 0, false, {
                                                    fileName: "[project]/app/corporate-package/page-client.tsx",
                                                    lineNumber: 1769,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/corporate-package/page-client.tsx",
                                            lineNumber: 1763,
                                            columnNumber: 17
                                        }, this),
                                        activeTab === "notes" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "jsx-68f81cd87734d9f4",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    className: "jsx-68f81cd87734d9f4" + " " + "font-[family-name:var(--font-cormorant)] text-2xl font-bold text-[#42151B] mb-4",
                                                    children: "Important Guidelines & Arrangements"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/corporate-package/page-client.tsx",
                                                    lineNumber: 1810,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "jsx-68f81cd87734d9f4" + " " + "space-y-3",
                                                    children: selectedCeremony.notes.map((note, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "jsx-68f81cd87734d9f4" + " " + "flex gap-3 bg-white p-4 rounded-xl border border-[#DFCBB0]",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$info$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Info$3e$__["Info"], {
                                                                    size: 18,
                                                                    className: "shrink-0 text-[#B08A45]"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/corporate-package/page-client.tsx",
                                                                    lineNumber: 1825,
                                                                    columnNumber: 27
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    className: "jsx-68f81cd87734d9f4" + " " + "text-sm text-[#55463E]",
                                                                    children: note
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/corporate-package/page-client.tsx",
                                                                    lineNumber: 1830,
                                                                    columnNumber: 27
                                                                }, this)
                                                            ]
                                                        }, index, true, {
                                                            fileName: "[project]/app/corporate-package/page-client.tsx",
                                                            lineNumber: 1821,
                                                            columnNumber: 25
                                                        }, this))
                                                }, void 0, false, {
                                                    fileName: "[project]/app/corporate-package/page-client.tsx",
                                                    lineNumber: 1815,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/corporate-package/page-client.tsx",
                                            lineNumber: 1809,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/corporate-package/page-client.tsx",
                                    lineNumber: 1586,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/corporate-package/page-client.tsx",
                            lineNumber: 1412,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/corporate-package/page-client.tsx",
                        lineNumber: 1411,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/corporate-package/page-client.tsx",
                lineNumber: 1339,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "jsx-68f81cd87734d9f4" + " " + "py-10 px-4 sm:px-8 max-w-[1400px] mx-auto",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "jsx-68f81cd87734d9f4" + " " + "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5",
                    children: featureCards.map((card)=>{
                        const Icon = card.icon;
                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "jsx-68f81cd87734d9f4" + " " + "bg-[#FCFAF5] rounded-2xl border border-[#E5D7C0] p-6",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "jsx-68f81cd87734d9f4" + " " + "w-12 h-12 rounded-xl flex items-center justify-center text-[#7D1E28] bg-white border border-[#E9DDC9] mb-4",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
                                        size: 22,
                                        className: "jsx-68f81cd87734d9f4"
                                    }, void 0, false, {
                                        fileName: "[project]/app/corporate-package/page-client.tsx",
                                        lineNumber: 1860,
                                        columnNumber: 21
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/app/corporate-package/page-client.tsx",
                                    lineNumber: 1859,
                                    columnNumber: 19
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: "jsx-68f81cd87734d9f4" + " " + "font-[family-name:var(--font-cormorant)] text-xl font-bold text-[#42151B]",
                                    children: card.title
                                }, void 0, false, {
                                    fileName: "[project]/app/corporate-package/page-client.tsx",
                                    lineNumber: 1865,
                                    columnNumber: 19
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "jsx-68f81cd87734d9f4" + " " + "mt-2 text-sm text-[#63534B]",
                                    children: card.description
                                }, void 0, false, {
                                    fileName: "[project]/app/corporate-package/page-client.tsx",
                                    lineNumber: 1871,
                                    columnNumber: 19
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    onClick: ()=>setIsBookingOpen(true),
                                    className: "jsx-68f81cd87734d9f4" + " " + "mt-6 text-sm font-semibold text-[#7D1E28]",
                                    children: "Know More →"
                                }, void 0, false, {
                                    fileName: "[project]/app/corporate-package/page-client.tsx",
                                    lineNumber: 1877,
                                    columnNumber: 19
                                }, this)
                            ]
                        }, card.title, true, {
                            fileName: "[project]/app/corporate-package/page-client.tsx",
                            lineNumber: 1853,
                            columnNumber: 17
                        }, this);
                    })
                }, void 0, false, {
                    fileName: "[project]/app/corporate-package/page-client.tsx",
                    lineNumber: 1846,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/corporate-package/page-client.tsx",
                lineNumber: 1845,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "jsx-68f81cd87734d9f4" + " " + "px-4 pb-20 pt-6 sm:px-8 max-w-[1400px] mx-auto",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "jsx-68f81cd87734d9f4" + " " + "relative overflow-hidden rounded-3xl bg-gradient-to-r from-[#3B0E12] via-[#521319] to-[#3B0E12] p-6 text-white shadow-2xl sm:p-10 lg:p-12",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "jsx-68f81cd87734d9f4" + " " + "pointer-events-none absolute -left-10 -top-10 h-48 w-48 rounded-full bg-[#E5C77A]/10 blur-2xl"
                        }, void 0, false, {
                            fileName: "[project]/app/corporate-package/page-client.tsx",
                            lineNumber: 1898,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "jsx-68f81cd87734d9f4" + " " + "pointer-events-none absolute -bottom-10 -right-10 h-48 w-48 rounded-full bg-[#E5C77A]/10 blur-2xl"
                        }, void 0, false, {
                            fileName: "[project]/app/corporate-package/page-client.tsx",
                            lineNumber: 1899,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "jsx-68f81cd87734d9f4" + " " + "relative z-10 flex flex-col items-center justify-between gap-6 md:flex-row sm:gap-8",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "jsx-68f81cd87734d9f4" + " " + "flex items-center gap-5",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "jsx-68f81cd87734d9f4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                className: "jsx-68f81cd87734d9f4" + " " + "font-[family-name:var(--font-cormorant)] text-xl font-semibold text-[#E5C77A] sm:text-2xl",
                                                children: "Planning an Auspicious Beginning?"
                                            }, void 0, false, {
                                                fileName: "[project]/app/corporate-package/page-client.tsx",
                                                lineNumber: 1916,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                className: "jsx-68f81cd87734d9f4" + " " + "mt-1 font-[family-name:var(--font-cormorant)] text-2xl font-bold tracking-tight text-[#FFFDF8] sm:text-3xl lg:text-4xl",
                                                children: "Bring Divine Blessings to Your Workplace."
                                            }, void 0, false, {
                                                fileName: "[project]/app/corporate-package/page-client.tsx",
                                                lineNumber: 1920,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "jsx-68f81cd87734d9f4" + " " + "mt-2.5 flex flex-wrap items-center gap-3 text-xs text-[#F3EAD8]/90 sm:gap-4",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "jsx-68f81cd87734d9f4" + " " + "flex items-center gap-1.5",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__["Check"], {
                                                                size: 14,
                                                                className: "text-[#E5C77A]"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/corporate-package/page-client.tsx",
                                                                lineNumber: 1926,
                                                                columnNumber: 21
                                                            }, this),
                                                            "Experienced Priests"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/corporate-package/page-client.tsx",
                                                        lineNumber: 1925,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "jsx-68f81cd87734d9f4" + " " + "flex items-center gap-1.5",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__["Check"], {
                                                                size: 14,
                                                                className: "text-[#E5C77A]"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/corporate-package/page-client.tsx",
                                                                lineNumber: 1931,
                                                                columnNumber: 21
                                                            }, this),
                                                            "Complete Samagri"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/corporate-package/page-client.tsx",
                                                        lineNumber: 1930,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "jsx-68f81cd87734d9f4" + " " + "flex items-center gap-1.5",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__["Check"], {
                                                                size: 14,
                                                                className: "text-[#E5C77A]"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/corporate-package/page-client.tsx",
                                                                lineNumber: 1936,
                                                                columnNumber: 21
                                                            }, this),
                                                            "Office-ready Service"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/corporate-package/page-client.tsx",
                                                        lineNumber: 1935,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/corporate-package/page-client.tsx",
                                                lineNumber: 1924,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/corporate-package/page-client.tsx",
                                        lineNumber: 1915,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/app/corporate-package/page-client.tsx",
                                    lineNumber: 1902,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "jsx-68f81cd87734d9f4" + " " + "w-full shrink-0 md:w-auto",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        href: "/contact",
                                        className: "inline-flex w-full items-center justify-center rounded-xl bg-[#E5C77A] px-8 py-3.5 text-xs font-bold tracking-wider text-[#3D1418] shadow-lg transition-all duration-300 hover:scale-105 hover:bg-[#F3D78A] active:scale-95 sm:text-sm md:w-auto",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "jsx-68f81cd87734d9f4",
                                                children: "Enquire Now"
                                            }, void 0, false, {
                                                fileName: "[project]/app/corporate-package/page-client.tsx",
                                                lineNumber: 1948,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__["ChevronRight"], {
                                                size: 16
                                            }, void 0, false, {
                                                fileName: "[project]/app/corporate-package/page-client.tsx",
                                                lineNumber: 1949,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/corporate-package/page-client.tsx",
                                        lineNumber: 1944,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/app/corporate-package/page-client.tsx",
                                    lineNumber: 1943,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/corporate-package/page-client.tsx",
                            lineNumber: 1901,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/corporate-package/page-client.tsx",
                    lineNumber: 1897,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/corporate-package/page-client.tsx",
                lineNumber: 1896,
                columnNumber: 7
            }, this),
            isModalOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "jsx-68f81cd87734d9f4" + " " + "fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "jsx-68f81cd87734d9f4" + " " + "relative w-full max-w-xl rounded-2xl bg-[#FCFAF5] p-6 sm:p-8 max-h-[90vh] overflow-y-auto",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            type: "button",
                            onClick: ()=>setIsModalOpen(false),
                            className: "jsx-68f81cd87734d9f4" + " " + "absolute top-4 right-4",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                size: 22
                            }, void 0, false, {
                                fileName: "[project]/app/corporate-package/page-client.tsx",
                                lineNumber: 1967,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/app/corporate-package/page-client.tsx",
                            lineNumber: 1960,
                            columnNumber: 13
                        }, this),
                        modalSuccess ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "jsx-68f81cd87734d9f4" + " " + "py-10 text-center",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__["CheckCircle2"], {
                                    size: 50,
                                    className: "mx-auto text-[#7D1E28]"
                                }, void 0, false, {
                                    fileName: "[project]/app/corporate-package/page-client.tsx",
                                    lineNumber: 1972,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: "jsx-68f81cd87734d9f4" + " " + "mt-4 font-[family-name:var(--font-cormorant)] text-3xl font-bold",
                                    children: "Enquiry Submitted Successfully!"
                                }, void 0, false, {
                                    fileName: "[project]/app/corporate-package/page-client.tsx",
                                    lineNumber: 1977,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "jsx-68f81cd87734d9f4" + " " + "mt-2 text-sm text-[#55463E]",
                                    children: "Thank you for reaching out. Our coordinator will contact you shortly."
                                }, void 0, false, {
                                    fileName: "[project]/app/corporate-package/page-client.tsx",
                                    lineNumber: 1982,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/corporate-package/page-client.tsx",
                            lineNumber: 1971,
                            columnNumber: 15
                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                            onSubmit: handleFormSubmit,
                            className: "jsx-68f81cd87734d9f4" + " " + "space-y-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: "jsx-68f81cd87734d9f4" + " " + "font-[family-name:var(--font-cormorant)] text-3xl font-bold text-[#42151B] text-center",
                                    children: "Request a Customized Quote"
                                }, void 0, false, {
                                    fileName: "[project]/app/corporate-package/page-client.tsx",
                                    lineNumber: 1995,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    required: true,
                                    type: "text",
                                    placeholder: "Company / Office Name",
                                    value: formData.companyName,
                                    onChange: (e)=>setFormData({
                                            ...formData,
                                            companyName: e.target.value
                                        }),
                                    className: "jsx-68f81cd87734d9f4" + " " + "w-full rounded-lg border p-3 text-sm"
                                }, void 0, false, {
                                    fileName: "[project]/app/corporate-package/page-client.tsx",
                                    lineNumber: 2000,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    required: true,
                                    type: "text",
                                    placeholder: "Contact Person Name",
                                    value: formData.contactPerson,
                                    onChange: (e)=>setFormData({
                                            ...formData,
                                            contactPerson: e.target.value
                                        }),
                                    className: "jsx-68f81cd87734d9f4" + " " + "w-full rounded-lg border p-3 text-sm"
                                }, void 0, false, {
                                    fileName: "[project]/app/corporate-package/page-client.tsx",
                                    lineNumber: 2017,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    required: true,
                                    type: "tel",
                                    placeholder: "Phone Number",
                                    value: formData.phone,
                                    onChange: (e)=>setFormData({
                                            ...formData,
                                            phone: e.target.value
                                        }),
                                    className: "jsx-68f81cd87734d9f4" + " " + "w-full rounded-lg border p-3 text-sm"
                                }, void 0, false, {
                                    fileName: "[project]/app/corporate-package/page-client.tsx",
                                    lineNumber: 2034,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    type: "email",
                                    placeholder: "Email Address",
                                    value: formData.email,
                                    onChange: (e)=>setFormData({
                                            ...formData,
                                            email: e.target.value
                                        }),
                                    className: "jsx-68f81cd87734d9f4" + " " + "w-full rounded-lg border p-3 text-sm"
                                }, void 0, false, {
                                    fileName: "[project]/app/corporate-package/page-client.tsx",
                                    lineNumber: 2051,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                    value: formData.ceremony,
                                    onChange: (e)=>setFormData({
                                            ...formData,
                                            ceremony: e.target.value
                                        }),
                                    className: "jsx-68f81cd87734d9f4" + " " + "w-full rounded-lg border p-3 text-sm",
                                    children: ceremonies.map((c)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                            value: c.name,
                                            className: "jsx-68f81cd87734d9f4",
                                            children: c.name
                                        }, c.id, false, {
                                            fileName: "[project]/app/corporate-package/page-client.tsx",
                                            lineNumber: 2082,
                                            columnNumber: 23
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/app/corporate-package/page-client.tsx",
                                    lineNumber: 2067,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    type: "date",
                                    value: formData.preferredDate,
                                    onChange: (e)=>setFormData({
                                            ...formData,
                                            preferredDate: e.target.value
                                        }),
                                    className: "jsx-68f81cd87734d9f4" + " " + "w-full rounded-lg border p-3 text-sm"
                                }, void 0, false, {
                                    fileName: "[project]/app/corporate-package/page-client.tsx",
                                    lineNumber: 2094,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    type: "text",
                                    placeholder: "Office City / Location",
                                    value: formData.location,
                                    onChange: (e)=>setFormData({
                                            ...formData,
                                            location: e.target.value
                                        }),
                                    className: "jsx-68f81cd87734d9f4" + " " + "w-full rounded-lg border p-3 text-sm"
                                }, void 0, false, {
                                    fileName: "[project]/app/corporate-package/page-client.tsx",
                                    lineNumber: 2109,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                    rows: 3,
                                    placeholder: "Additional Requirements / Notes",
                                    value: formData.notes,
                                    onChange: (e)=>setFormData({
                                            ...formData,
                                            notes: e.target.value
                                        }),
                                    className: "jsx-68f81cd87734d9f4" + " " + "w-full rounded-lg border p-3 text-sm"
                                }, void 0, false, {
                                    fileName: "[project]/app/corporate-package/page-client.tsx",
                                    lineNumber: 2125,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "submit",
                                    className: "jsx-68f81cd87734d9f4" + " " + "w-full rounded-xl bg-[#4A1015] py-3 text-sm font-bold text-white",
                                    children: "SUBMIT ENQUIRY"
                                }, void 0, false, {
                                    fileName: "[project]/app/corporate-package/page-client.tsx",
                                    lineNumber: 2141,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/corporate-package/page-client.tsx",
                            lineNumber: 1989,
                            columnNumber: 15
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/corporate-package/page-client.tsx",
                    lineNumber: 1959,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/corporate-package/page-client.tsx",
                lineNumber: 1958,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$order$2d$now$2d$modal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                open: isOrderOpen,
                onClose: ()=>setIsOrderOpen(false),
                packageName: selectedPackage.name,
                packagePrice: dynamicPrice
            }, void 0, false, {
                fileName: "[project]/app/corporate-package/page-client.tsx",
                lineNumber: 2154,
                columnNumber: 7
            }, this),
            isBookingOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "jsx-68f81cd87734d9f4" + " " + "fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "jsx-68f81cd87734d9f4" + " " + "relative w-full max-w-md rounded-2xl bg-[#FAF6EE] border-2 border-[#DECBB0] shadow-2xl p-6 sm:p-8",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            type: "button",
                            onClick: ()=>setIsBookingOpen(false),
                            "aria-label": "Close",
                            className: "jsx-68f81cd87734d9f4" + " " + "absolute top-4 right-4 w-9 h-9 rounded-full flex items-center justify-center text-[#7A6458] hover:bg-[#F1E5D2] hover:text-[#42151B] transition-colors",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                size: 20
                            }, void 0, false, {
                                fileName: "[project]/app/corporate-package/page-client.tsx",
                                lineNumber: 2174,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/app/corporate-package/page-client.tsx",
                            lineNumber: 2166,
                            columnNumber: 13
                        }, this),
                        bookingSuccess ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "jsx-68f81cd87734d9f4" + " " + "py-10 text-center",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "jsx-68f81cd87734d9f4" + " " + "mx-auto w-14 h-14 rounded-full bg-[#E5C77A] flex items-center justify-center",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__["Check"], {
                                        size: 28,
                                        className: "text-[#42151B]"
                                    }, void 0, false, {
                                        fileName: "[project]/app/corporate-package/page-client.tsx",
                                        lineNumber: 2180,
                                        columnNumber: 19
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/app/corporate-package/page-client.tsx",
                                    lineNumber: 2179,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: "jsx-68f81cd87734d9f4" + " " + "mt-5 font-[family-name:var(--font-cormorant)] text-3xl font-bold text-[#42151B]",
                                    children: "Request Received!"
                                }, void 0, false, {
                                    fileName: "[project]/app/corporate-package/page-client.tsx",
                                    lineNumber: 2186,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "jsx-68f81cd87734d9f4" + " " + "mt-3 text-sm leading-relaxed text-[#55463E]",
                                    children: "Our team will contact you shortly to confirm your Iyer request."
                                }, void 0, false, {
                                    fileName: "[project]/app/corporate-package/page-client.tsx",
                                    lineNumber: 2190,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/corporate-package/page-client.tsx",
                            lineNumber: 2178,
                            columnNumber: 15
                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "jsx-68f81cd87734d9f4" + " " + "pr-8",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "jsx-68f81cd87734d9f4" + " " + "font-[family-name:var(--font-cormorant)] text-3xl font-bold text-[#42151B]",
                                            children: "Request for an Iyer"
                                        }, void 0, false, {
                                            fileName: "[project]/app/corporate-package/page-client.tsx",
                                            lineNumber: 2199,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "jsx-68f81cd87734d9f4" + " " + "mt-2 text-sm text-[#63534B]",
                                            children: "Fill in your details and we'll get back to you shortly."
                                        }, void 0, false, {
                                            fileName: "[project]/app/corporate-package/page-client.tsx",
                                            lineNumber: 2203,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/corporate-package/page-client.tsx",
                                    lineNumber: 2198,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "jsx-68f81cd87734d9f4" + " " + "my-5 border-t border-[#DECBB0]"
                                }, void 0, false, {
                                    fileName: "[project]/app/corporate-package/page-client.tsx",
                                    lineNumber: 2210,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                                    onSubmit: handleBookingSubmit,
                                    className: "jsx-68f81cd87734d9f4" + " " + "space-y-3.5",
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
                                            className: "jsx-68f81cd87734d9f4" + " " + "w-full rounded-lg border border-[#DFCBB0] bg-white px-3 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#7D1E28]/20 focus:border-[#7D1E28]"
                                        }, void 0, false, {
                                            fileName: "[project]/app/corporate-package/page-client.tsx",
                                            lineNumber: 2218,
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
                                            className: "jsx-68f81cd87734d9f4" + " " + "w-full rounded-lg border border-[#DFCBB0] bg-white px-3 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#7D1E28]/20 focus:border-[#7D1E28]"
                                        }, void 0, false, {
                                            fileName: "[project]/app/corporate-package/page-client.tsx",
                                            lineNumber: 2235,
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
                                            className: "jsx-68f81cd87734d9f4" + " " + "w-full rounded-lg border border-[#DFCBB0] bg-white px-3 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#7D1E28]/20 focus:border-[#7D1E28]"
                                        }, void 0, false, {
                                            fileName: "[project]/app/corporate-package/page-client.tsx",
                                            lineNumber: 2252,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                            required: true,
                                            rows: 3,
                                            placeholder: "Address",
                                            value: bookingForm.address,
                                            onChange: (e)=>setBookingForm({
                                                    ...bookingForm,
                                                    address: e.target.value
                                                }),
                                            className: "jsx-68f81cd87734d9f4" + " " + "w-full resize-none rounded-lg border border-[#DFCBB0] bg-white px-3 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#7D1E28]/20 focus:border-[#7D1E28]"
                                        }, void 0, false, {
                                            fileName: "[project]/app/corporate-package/page-client.tsx",
                                            lineNumber: 2269,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "jsx-68f81cd87734d9f4" + " " + "rounded-lg bg-[#F3EAD8] px-3 py-2.5",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "jsx-68f81cd87734d9f4" + " " + "block text-[10px] uppercase tracking-wider text-[#7A6458]",
                                                    children: "Selected Pooja"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/corporate-package/page-client.tsx",
                                                    lineNumber: 2287,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "jsx-68f81cd87734d9f4" + " " + "mt-1 block text-sm font-bold text-[#42151B]",
                                                    children: selectedPackage.name
                                                }, void 0, false, {
                                                    fileName: "[project]/app/corporate-package/page-client.tsx",
                                                    lineNumber: 2291,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/corporate-package/page-client.tsx",
                                            lineNumber: 2286,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "submit",
                                            className: "jsx-68f81cd87734d9f4" + " " + "w-full rounded-xl bg-[#5A121D] py-3.5 text-sm font-bold text-white tracking-wide shadow-sm hover:bg-[#400B13] hover:shadow-md transition-all active:scale-[0.99]",
                                            children: "Submit"
                                        }, void 0, false, {
                                            fileName: "[project]/app/corporate-package/page-client.tsx",
                                            lineNumber: 2298,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/corporate-package/page-client.tsx",
                                    lineNumber: 2212,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/corporate-package/page-client.tsx",
                            lineNumber: 2197,
                            columnNumber: 15
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/corporate-package/page-client.tsx",
                    lineNumber: 2164,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/corporate-package/page-client.tsx",
                lineNumber: 2163,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/corporate-package/page-client.tsx",
        lineNumber: 1112,
        columnNumber: 5
    }, this);
}
_s(CorporatePackagePage, "epVvYgdwNvcKKcBO07zO/DiueWY=");
_c = CorporatePackagePage;
var _c;
__turbopack_context__.k.register(_c, "CorporatePackagePage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=app_1560fyu._.js.map