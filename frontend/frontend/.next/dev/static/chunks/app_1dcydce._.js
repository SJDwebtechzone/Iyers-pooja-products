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
"[project]/app/package/page-client.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ConsumerPackagePage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/styled-jsx/style.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-right.mjs [app-client] (ecmascript) <export default as ArrowRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/check.mjs [app-client] (ecmascript) <export default as Check>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$gift$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Gift$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/gift.mjs [app-client] (ecmascript) <export default as Gift>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$info$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Info$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/info.mjs [app-client] (ecmascript) <export default as Info>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$list$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__List$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/list.mjs [app-client] (ecmascript) <export default as List>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$phone$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Phone$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/phone.mjs [app-client] (ecmascript) <export default as Phone>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/sparkles.mjs [app-client] (ecmascript) <export default as Sparkles>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$star$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Star$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/star.mjs [app-client] (ecmascript) <export default as Star>");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$order$2d$now$2d$modal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/order-now-modal.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
const API_BASE = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.NEXT_PUBLIC_API_URL || "http://localhost:3001";
/*
  IMPORTANT:
  The value on the RIGHT must exactly match
  the category/slug stored in your backend database.
*/ const OCCASION_TO_API_CATEGORY = {
    "ganapathy-homam": "ganapathi-homam",
    "house-warming": "grahapravesam",
    "satyanarayana-vratam": "satyanarayana-vratam",
    "daily-pooja": "daily-pooja",
    marriage: "marriage",
    "bhoomi-poojai": "bhoomi-poojai",
    punyahavachanam: "punyahavachanam",
    "ruthu-punyahavachanam": "ruthu-punyahavachanam",
    "ayush-homam": "ayush-homam",
    "family-ceremony": "family-ceremony"
};
const consumerRitualIds = [
    "ganapathy-homam",
    "marriage",
    "house-warming",
    "bhoomi-poojai",
    "punyahavachanam",
    "ruthu-punyahavachanam",
    "ayush-homam"
];
const consumerPackageData = {
    title: "Consumer Package",
    subtitle: "Essential pooja essentials thoughtfully curated for sacred moments at home.",
    breadcrumb: "Consumer Package",
    heroImage: "/images/consumer-package-banner.png",
    introImage: "/images/image.png",
    bannerImage: "/images/kalash.jpg",
    bannerTitle: "Sacred Moments, Made Simple",
    bannerSubtitle: "Everything you need for your home pooja",
    introTitle: "A complete collection for every family ritual",
    introText: "Our consumer package brings together carefully selected pooja essentials for daily worship, festivals, and important family ceremonies. Each item is prepared to help you observe your traditions with ease and devotion.",
    benefits: [
        {
            icon: "peace",
            title: "Peace and positivity"
        },
        {
            icon: "obstacles",
            title: "Remove obstacles"
        },
        {
            icon: "family",
            title: "Family wellbeing"
        },
        {
            icon: "success",
            title: "Prosperity and success"
        }
    ],
    items: [
        {
            sno: 1,
            english: "Pure Brass Pooja Utensils Set",
            tamil: "பித்தளை பூஜை பாத்திரங்கள்",
            quantity: "1 set"
        }
    ],
    process: [],
    benefitsDetails: [],
    notes: [],
    occasions: [
        {
            id: "ganapathy-homam",
            title: "Ganapathy Homam",
            description: "Invoke Lord Ganesha's blessings to remove all obstacles.",
            intro: "Ganapathy Homam is a sacred fire ritual performed to invoke the blessings of Lord Ganesha. Our package includes all the essential samagri required for this ritual.",
            icon: "peace",
            price: "₹2,499",
            items: [
                {
                    sno: 1,
                    english: "Homa Kunda (Fire Pit)",
                    tamil: "ஹோம குண்டம்",
                    quantity: "1"
                },
                {
                    sno: 2,
                    english: "Pure A2 Cow Ghee",
                    tamil: "தூய நெய்",
                    quantity: "500 ml"
                }
            ],
            process: [
                "Prepare the homa kunda and arrange all samagri.",
                "Invoke Lord Ganesha.",
                "Perform the sankalpam.",
                "Offer ghee and samagri."
            ],
            benefits: [
                "Removes obstacles before new beginnings.",
                "Invokes divine wisdom."
            ],
            notes: [
                "A qualified priest is recommended."
            ]
        },
        {
            id: "house-warming",
            title: "Grahapravesam",
            description: "Bless your new home with divine energy and positivity.",
            intro: "Griha Pravesham is an auspicious ceremony performed to sanctify a new home and invite divine blessings.",
            icon: "success",
            price: "₹4,999",
            items: [
                {
                    sno: 1,
                    english: "Kalash and Coconut",
                    tamil: "கலசம் மற்றும் தேங்காய்",
                    quantity: "1 set"
                }
            ],
            process: [
                "Prepare the home.",
                "Perform Vastu Pooja.",
                "Conduct Ganapathy Homam."
            ],
            benefits: [
                "Creates an auspicious beginning.",
                "Invokes peace and prosperity."
            ],
            notes: [
                "Confirm the muhurtham before the ceremony."
            ]
        },
        {
            id: "satyanarayana-vratam",
            title: "Satyanarayana Vratam",
            description: "Thoughtfully prepared samagri for a devotional vratam.",
            intro: "Satyanarayana Vratam is a devotional ritual performed with family and devotees.",
            icon: "family",
            price: "₹2,999",
            items: [
                {
                    sno: 1,
                    english: "Satyanarayana Pooja Book",
                    tamil: "சத்யநாராயண பூஜை புத்தகம்",
                    quantity: "1"
                }
            ],
            process: [
                "Set up the altar.",
                "Perform the vratam."
            ],
            benefits: [
                "Supports family devotion."
            ],
            notes: [
                "Follow priest guidance."
            ]
        },
        {
            id: "daily-pooja",
            title: "Daily Pooja",
            description: "Essential samagri for peaceful daily worship.",
            intro: "Daily Pooja helps maintain a peaceful and devotional household routine.",
            icon: "peace",
            price: "₹999",
            items: [
                {
                    sno: 1,
                    english: "Pure Brass Pooja Utensils Set",
                    tamil: "பித்தளை பூஜை பாத்திரங்கள்",
                    quantity: "1 set"
                }
            ],
            process: [
                "Clean the pooja space.",
                "Light the diya."
            ],
            benefits: [
                "Supports a positive atmosphere."
            ],
            notes: [
                "Follow family traditions."
            ]
        },
        {
            id: "marriage",
            title: "Marriage",
            description: "Complete sacred samagri for wedding ceremonies.",
            intro: "Vivaha Samskara is a sacred ceremony performed according to Vedic traditions.",
            icon: "family",
            price: "₹15,999",
            items: [
                {
                    sno: 1,
                    english: "Pure Turmeric",
                    tamil: "மஞ்சள்",
                    quantity: "1 kg"
                }
            ],
            process: [
                "Vigneshwara Pooja.",
                "Kanyadaanam.",
                "Mangalya Dharanam."
            ],
            benefits: [
                "Sanctifies the marital bond."
            ],
            notes: [
                "Consult your family priest."
            ]
        },
        {
            id: "bhoomi-poojai",
            title: "Bhoomi Poojai",
            description: "Sacred groundbreaking ritual before construction.",
            intro: "Bhoomi Pooja seeks blessings before beginning construction.",
            icon: "success",
            price: "₹3,499",
            items: [
                {
                    sno: 1,
                    english: "Navadhanyam",
                    tamil: "நவதானியம்",
                    quantity: "1 set"
                }
            ],
            process: [
                "Purify the construction site.",
                "Perform Bhoomi Devi invocation."
            ],
            benefits: [
                "Brings auspiciousness to the property."
            ],
            notes: [
                "Perform during an auspicious Muhurtham."
            ]
        },
        {
            id: "punyahavachanam",
            title: "Punyahavachanam",
            description: "Sacred purification ceremony.",
            intro: "Punyahavachanam is a traditional Vedic purification ceremony.",
            icon: "peace",
            price: "₹1,999",
            items: [
                {
                    sno: 1,
                    english: "Copper Kalash",
                    tamil: "செம்பு கலசம்",
                    quantity: "1"
                }
            ],
            process: [
                "Perform Sankalpam.",
                "Invoke Varuna Deva."
            ],
            benefits: [
                "Restores purity and positivity."
            ],
            notes: [
                "Can be combined with other ceremonies."
            ]
        },
        {
            id: "ruthu-punyahavachanam",
            title: "Ruthu Punyahavachanam",
            description: "Traditional coming-of-age ceremony.",
            intro: "A traditional family ceremony with prayers and blessings.",
            icon: "family",
            price: "₹4,499",
            items: [
                {
                    sno: 1,
                    english: "Turmeric Root",
                    tamil: "மஞ்சள் கிழங்கு",
                    quantity: "500 g"
                }
            ],
            process: [
                "Perform Vigneshwara invocation.",
                "Kalasha Sthapana."
            ],
            benefits: [
                "Celebrates cultural traditions."
            ],
            notes: [
                "Can be arranged according to family tradition."
            ]
        },
        {
            id: "ayush-homam",
            title: "Ayush Homam",
            description: "Vedic longevity homam.",
            intro: "Ayush Homam is performed to seek blessings for health and long life.",
            icon: "peace",
            price: "₹2,799",
            items: [
                {
                    sno: 1,
                    english: "Homa Kunda",
                    tamil: "ஹோம குண்டம்",
                    quantity: "1 set"
                }
            ],
            process: [
                "Perform Sankalpam.",
                "Invoke Ayur Devata."
            ],
            benefits: [
                "Seeks blessings for longevity."
            ],
            notes: [
                "Often performed on the birth star."
            ]
        },
        {
            id: "family-ceremony",
            title: "Family Ceremony",
            description: "A flexible pooja collection for family milestones.",
            intro: "A package designed for birthdays, anniversaries and family ceremonies.",
            icon: "obstacles",
            price: "₹2,499",
            items: [
                {
                    sno: 1,
                    english: "Brass Diya",
                    tamil: "பித்தளை விளக்கு",
                    quantity: "1"
                }
            ],
            process: [
                "Arrange the altar.",
                "Perform the prayer."
            ],
            benefits: [
                "Creates an auspicious family gathering."
            ],
            notes: [
                "Items can vary according to the ceremony."
            ]
        }
    ]
};
function ConsumerPackagePage() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(PackagePage, {
        data: consumerPackageData
    }, void 0, false, {
        fileName: "[project]/app/package/page-client.tsx",
        lineNumber: 498,
        columnNumber: 10
    }, this);
}
_c = ConsumerPackagePage;
function PackagePage({ data }) {
    _s();
    const [activeTab, setActiveTab] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("details");
    const [selectedRitual, setSelectedRitual] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [dynamicItems, setDynamicItems] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [dynamicPrice, setDynamicPrice] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
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
                    pooja: selectedRitual?.title || "Consumer Package"
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
        } catch (error) {
            console.error(error);
            alert("Something went wrong. Please try again.");
        }
    };
    /*
    ====================================================
    FETCH DYNAMIC ITEMS + DYNAMIC PRICE
    ====================================================
  */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "PackagePage.useEffect": ()=>{
            const fetchPackageData = {
                "PackagePage.useEffect.fetchPackageData": async ()=>{
                    // VERY IMPORTANT:
                    // Reset previous ritual values immediately
                    setDynamicItems(null);
                    setDynamicPrice(null);
                    if (!selectedRitual) return;
                    const apiCategory = OCCASION_TO_API_CATEGORY[selectedRitual.id];
                    if (!apiCategory) {
                        console.warn("No API mapping found for:", selectedRitual.id);
                        return;
                    }
                    /*
        FETCH ITEMS
      */ try {
                        const url = `${API_BASE}/consumer-packages/${apiCategory}`;
                        console.log("Fetching Consumer Package Items:", url);
                        const itemsRes = await fetch(url);
                        if (!itemsRes.ok) {
                            throw new Error(`Items API failed: ${itemsRes.status}`);
                        }
                        const itemsData = await itemsRes.json();
                        console.log("Consumer Items API Response:", itemsData);
                        const rows = Array.isArray(itemsData) ? itemsData : Array.isArray(itemsData?.items) ? itemsData.items : Array.isArray(itemsData?.data) ? itemsData.data : [];
                        const mapped = rows.map({
                            "PackagePage.useEffect.fetchPackageData.mapped": (r, index)=>({
                                    sno: Number(r.sno ?? r.id ?? index + 1),
                                    english: String(r.name_english ?? r.english ?? r.nameEnglish ?? r.name ?? ""),
                                    tamil: String(r.name_tamil ?? r.tamil ?? r.nameTamil ?? ""),
                                    quantity: String(r.quantity ?? r.qty ?? "")
                                })
                        }["PackagePage.useEffect.fetchPackageData.mapped"]);
                        if (mapped.length > 0) {
                            setDynamicItems(mapped);
                        } else {
                            setDynamicItems(null);
                        }
                    } catch (error) {
                        console.error("Failed to fetch consumer package items:", error);
                        setDynamicItems(null);
                    }
                    /*
        FETCH PRICE
      */ try {
                        const url = `${API_BASE}/package-prices/${apiCategory}`;
                        console.log("Fetching Consumer Package Price:", url);
                        const priceRes = await fetch(url);
                        if (!priceRes.ok) {
                            throw new Error(`Price API failed: ${priceRes.status}`);
                        }
                        const priceData = await priceRes.json();
                        console.log("Consumer Price API Response:", priceData);
                        const price = priceData?.price ?? priceData?.data?.price ?? null;
                        if (price !== null && price !== undefined) {
                            setDynamicPrice(String(price));
                        } else {
                            setDynamicPrice(null);
                        }
                    } catch (error) {
                        console.error("Failed to fetch consumer package price:", error);
                        setDynamicPrice(null);
                    }
                }
            }["PackagePage.useEffect.fetchPackageData"];
            fetchPackageData();
        }
    }["PackagePage.useEffect"], [
        selectedRitual
    ]);
    /*
    ====================================================
    INITIAL RITUAL FROM URL HASH
    ====================================================
  */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "PackagePage.useEffect": ()=>{
            const handleHash = {
                "PackagePage.useEffect.handleHash": ()=>{
                    const rawHash = window.location.hash.replace("#", "").toLowerCase().trim();
                    if (!rawHash) {
                        if (data.occasions.length > 0) {
                            setSelectedRitual(data.occasions[0]);
                        }
                        return;
                    }
                    const match = data.occasions.find({
                        "PackagePage.useEffect.handleHash.match": (occasion)=>occasion.id.toLowerCase() === rawHash || occasion.id.toLowerCase().replace(/-/g, "") === rawHash.replace(/-/g, "")
                    }["PackagePage.useEffect.handleHash.match"]);
                    if (match) {
                        setSelectedRitual(match);
                        setActiveTab("details");
                        setTimeout({
                            "PackagePage.useEffect.handleHash": ()=>{
                                document.getElementById("ritual-details-section")?.scrollIntoView({
                                    behavior: "smooth"
                                });
                            }
                        }["PackagePage.useEffect.handleHash"], 150);
                    }
                }
            }["PackagePage.useEffect.handleHash"];
            handleHash();
            window.addEventListener("hashchange", handleHash);
            return ({
                "PackagePage.useEffect": ()=>{
                    window.removeEventListener("hashchange", handleHash);
                }
            })["PackagePage.useEffect"];
        }
    }["PackagePage.useEffect"], [
        data.occasions
    ]);
    const tabs = [
        {
            id: "details",
            label: "Package Details",
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$gift$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Gift$3e$__["Gift"]
        },
        {
            id: "process",
            label: "Pooja Process",
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$list$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__List$3e$__["List"]
        },
        {
            id: "benefits",
            label: "Benefits",
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$star$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Star$3e$__["Star"]
        },
        {
            id: "notes",
            label: "Important Notes",
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$info$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Info$3e$__["Info"]
        }
    ];
    const displayPrice = dynamicPrice ? dynamicPrice.startsWith("₹") ? dynamicPrice : `₹${dynamicPrice}` : selectedRitual?.price || "";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        className: "jsx-12d97c49916797c5" + " " + "bg-[#FCFAF6] text-[#29231F]",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                id: "12d97c49916797c5",
                children: "@keyframes priest-blink{0%,to{opacity:1;box-shadow:0 0 #f3d78a00}50%{opacity:.7;box-shadow:0 0 14px #f3d78ae6}}.animate-priest-blink{animation:1.6s ease-in-out infinite priest-blink}"
            }, void 0, false, void 0, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "jsx-12d97c49916797c5" + " " + "relative mt-[90px] min-h-[620px] w-full items-center overflow-hidden border-b border-[#3D1418] flex",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "jsx-12d97c49916797c5" + " " + "absolute inset-0",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                src: data.heroImage,
                                alt: data.title,
                                fill: true,
                                priority: true,
                                sizes: "100vw",
                                className: "object-cover object-center"
                            }, void 0, false, {
                                fileName: "[project]/app/package/page-client.tsx",
                                lineNumber: 871,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "jsx-12d97c49916797c5" + " " + "absolute inset-0 bg-gradient-to-r from-white/5 via-white/10 to-white/25"
                            }, void 0, false, {
                                fileName: "[project]/app/package/page-client.tsx",
                                lineNumber: 879,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/package/page-client.tsx",
                        lineNumber: 870,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "jsx-12d97c49916797c5" + " " + "relative z-10 mx-auto w-full max-w-[1800px] px-6 lg:px-10",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "jsx-12d97c49916797c5" + " " + "max-w-[650px] lg:ml-[52%]",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                    className: "jsx-12d97c49916797c5" + " " + "font-[family-name:var(--font-cormorant)] text-4xl font-semibold leading-none text-[#5A1820] md:text-5xl lg:text-[78px]",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "jsx-12d97c49916797c5",
                                            children: data.title.split(" ")[0]
                                        }, void 0, false, {
                                            fileName: "[project]/app/package/page-client.tsx",
                                            lineNumber: 885,
                                            columnNumber: 15
                                        }, this),
                                        " ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "jsx-12d97c49916797c5" + " " + "bg-gradient-to-r from-[#B8872F] via-[#E6C977] to-[#A8741F] bg-clip-text text-transparent",
                                            children: data.title.split(" ").slice(1).join(" ")
                                        }, void 0, false, {
                                            fileName: "[project]/app/package/page-client.tsx",
                                            lineNumber: 886,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/package/page-client.tsx",
                                    lineNumber: 884,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "jsx-12d97c49916797c5" + " " + "my-6 flex items-center gap-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "jsx-12d97c49916797c5" + " " + "h-px w-24 bg-[#D4B978]"
                                        }, void 0, false, {
                                            fileName: "[project]/app/package/page-client.tsx",
                                            lineNumber: 892,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "jsx-12d97c49916797c5" + " " + "text-xl text-[#C39A43]",
                                            children: "❖"
                                        }, void 0, false, {
                                            fileName: "[project]/app/package/page-client.tsx",
                                            lineNumber: 893,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "jsx-12d97c49916797c5" + " " + "h-px w-24 bg-[#D4B978]"
                                        }, void 0, false, {
                                            fileName: "[project]/app/package/page-client.tsx",
                                            lineNumber: 894,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/package/page-client.tsx",
                                    lineNumber: 891,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "jsx-12d97c49916797c5" + " " + "max-w-xl text-lg font-medium leading-relaxed text-[#4A1015]",
                                    children: data.subtitle
                                }, void 0, false, {
                                    fileName: "[project]/app/package/page-client.tsx",
                                    lineNumber: 897,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/package/page-client.tsx",
                            lineNumber: 883,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/package/page-client.tsx",
                        lineNumber: 882,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/package/page-client.tsx",
                lineNumber: 869,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "jsx-12d97c49916797c5" + " " + "mx-auto max-w-[1400px] px-4 py-10 sm:px-8 sm:py-14",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "jsx-12d97c49916797c5" + " " + "mb-10 text-center",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "jsx-12d97c49916797c5" + " " + "font-[family-name:var(--font-cormorant)] text-3xl font-bold text-[#42151B] sm:text-4xl",
                            children: "Choose Your Ceremony"
                        }, void 0, false, {
                            fileName: "[project]/app/package/page-client.tsx",
                            lineNumber: 907,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/package/page-client.tsx",
                        lineNumber: 906,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "jsx-12d97c49916797c5" + " " + "grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 lg:grid-cols-5",
                        children: data.occasions.map((occasion)=>{
                            const isActive = selectedRitual?.id === occasion.id;
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                onClick: ()=>{
                                    setSelectedRitual(occasion);
                                    setActiveTab("details");
                                    window.history.replaceState(null, "", `#${occasion.id}`);
                                },
                                className: "jsx-12d97c49916797c5" + " " + `flex flex-col items-center justify-center rounded-2xl border p-4 transition-all sm:p-5 ${isActive ? "border-[#4A1015] bg-[#4A1015] text-white shadow-md" : "border-[#E8DEC8] bg-[#FAF7F0] text-[#42151B] hover:border-[#B08A45]"}`,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "jsx-12d97c49916797c5" + " " + "mb-3 flex h-12 w-12 items-center justify-center",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(RitualIcon, {
                                            type: occasion.icon,
                                            active: isActive
                                        }, void 0, false, {
                                            fileName: "[project]/app/package/page-client.tsx",
                                            lineNumber: 932,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/app/package/page-client.tsx",
                                        lineNumber: 931,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "jsx-12d97c49916797c5" + " " + "text-center font-[family-name:var(--font-cormorant)] text-base font-bold sm:text-lg",
                                        children: occasion.title
                                    }, void 0, false, {
                                        fileName: "[project]/app/package/page-client.tsx",
                                        lineNumber: 934,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, occasion.id, true, {
                                fileName: "[project]/app/package/page-client.tsx",
                                lineNumber: 917,
                                columnNumber: 15
                            }, this);
                        })
                    }, void 0, false, {
                        fileName: "[project]/app/package/page-client.tsx",
                        lineNumber: 912,
                        columnNumber: 9
                    }, this),
                    selectedRitual && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "jsx-12d97c49916797c5" + " " + "mt-8 rounded-2xl border border-[#DFCBB0] bg-white p-5 sm:p-8",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "jsx-12d97c49916797c5" + " " + "grid grid-cols-1 items-center gap-8 lg:grid-cols-12",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "jsx-12d97c49916797c5" + " " + "relative aspect-[4/3] overflow-hidden rounded-xl lg:col-span-5",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        src: selectedRitual.image || data.introImage,
                                        alt: selectedRitual.title,
                                        fill: true,
                                        className: "object-cover"
                                    }, void 0, false, {
                                        fileName: "[project]/app/package/page-client.tsx",
                                        lineNumber: 946,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/app/package/page-client.tsx",
                                    lineNumber: 945,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "jsx-12d97c49916797c5" + " " + "lg:col-span-7",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "jsx-12d97c49916797c5" + " " + "font-[family-name:var(--font-cormorant)] text-3xl font-bold text-[#42151B]",
                                            children: selectedRitual.title
                                        }, void 0, false, {
                                            fileName: "[project]/app/package/page-client.tsx",
                                            lineNumber: 955,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "jsx-12d97c49916797c5" + " " + "mt-2 font-semibold text-[#B37D2A]",
                                            children: selectedRitual.description
                                        }, void 0, false, {
                                            fileName: "[project]/app/package/page-client.tsx",
                                            lineNumber: 958,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "jsx-12d97c49916797c5" + " " + "mt-4 text-base leading-relaxed text-[#55463E] sm:text-lg",
                                            children: selectedRitual.intro
                                        }, void 0, false, {
                                            fileName: "[project]/app/package/page-client.tsx",
                                            lineNumber: 961,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "jsx-12d97c49916797c5" + " " + "mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2",
                                            children: selectedRitual.benefits.map((benefit)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "jsx-12d97c49916797c5" + " " + "flex items-center gap-2",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__["Check"], {
                                                            size: 16,
                                                            className: "text-[#7D1E28]"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/package/page-client.tsx",
                                                            lineNumber: 967,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "jsx-12d97c49916797c5" + " " + "text-base sm:text-lg",
                                                            children: benefit
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/package/page-client.tsx",
                                                            lineNumber: 968,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, benefit, true, {
                                                    fileName: "[project]/app/package/page-client.tsx",
                                                    lineNumber: 966,
                                                    columnNumber: 21
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/app/package/page-client.tsx",
                                            lineNumber: 964,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/package/page-client.tsx",
                                    lineNumber: 954,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/package/page-client.tsx",
                            lineNumber: 944,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/package/page-client.tsx",
                        lineNumber: 943,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/package/page-client.tsx",
                lineNumber: 905,
                columnNumber: 7
            }, this),
            selectedRitual && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                id: "ritual-details-section",
                className: "jsx-12d97c49916797c5" + " " + "scroll-mt-28 bg-[#FAF7F0] px-5 py-14 sm:px-8 lg:px-12 lg:py-20",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "jsx-12d97c49916797c5" + " " + "mx-auto max-w-[1400px]",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "jsx-12d97c49916797c5" + " " + "mb-8 text-center",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "jsx-12d97c49916797c5" + " " + "inline-block rounded-full bg-[#EFE3CF] px-4 py-1 text-xs font-bold text-[#88242F]",
                                    children: selectedRitual.title
                                }, void 0, false, {
                                    fileName: "[project]/app/package/page-client.tsx",
                                    lineNumber: 991,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "jsx-12d97c49916797c5" + " " + "mt-3 font-[family-name:var(--font-cormorant)] text-3xl font-bold text-[#42151B] sm:text-4xl",
                                    children: "Package Details"
                                }, void 0, false, {
                                    fileName: "[project]/app/package/page-client.tsx",
                                    lineNumber: 995,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "jsx-12d97c49916797c5" + " " + "mt-2 text-sm text-[#7A6458] sm:text-base",
                                    children: "Select a package to view its samagri items."
                                }, void 0, false, {
                                    fileName: "[project]/app/package/page-client.tsx",
                                    lineNumber: 999,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "jsx-12d97c49916797c5" + " " + "mt-6 flex flex-wrap justify-center gap-2 sm:gap-3",
                                    children: data.occasions.filter((occasion)=>consumerRitualIds.includes(occasion.id)).map((occasion)=>{
                                        const isActive = selectedRitual.id === occasion.id;
                                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "button",
                                            onClick: ()=>{
                                                setSelectedRitual(occasion);
                                                setActiveTab("details");
                                                window.history.replaceState(null, "", `#${occasion.id}`);
                                            },
                                            className: "jsx-12d97c49916797c5" + " " + `rounded-full border px-4 py-2.5 text-xs font-semibold transition-all duration-200 sm:px-5 sm:text-sm ${isActive ? "border-[#4A1015] bg-[#4A1015] text-white shadow-md ring-2 ring-[#D4B978]/40" : "border-[#DFCBB0] bg-white text-[#42151B] hover:bg-[#F5EDE0]"}`,
                                            children: occasion.title
                                        }, occasion.id, false, {
                                            fileName: "[project]/app/package/page-client.tsx",
                                            lineNumber: 1012,
                                            columnNumber: 23
                                        }, this);
                                    })
                                }, void 0, false, {
                                    fileName: "[project]/app/package/page-client.tsx",
                                    lineNumber: 1003,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/package/page-client.tsx",
                            lineNumber: 989,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "jsx-12d97c49916797c5" + " " + "overflow-hidden rounded-xl border border-[#E8D5B5] bg-[#FFFCF7]",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "jsx-12d97c49916797c5" + " " + "grid lg:grid-cols-[250px_1fr]",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "jsx-12d97c49916797c5" + " " + "min-w-0 bg-[#5A2026] p-4 lg:p-5",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "jsx-12d97c49916797c5" + " " + "space-y-2",
                                                children: tabs.map((tab)=>{
                                                    const Icon = tab.icon;
                                                    const active = activeTab === tab.id;
                                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        type: "button",
                                                        onClick: ()=>setActiveTab(tab.id),
                                                        className: "jsx-12d97c49916797c5" + " " + `flex w-full items-center gap-3 rounded-lg px-4 py-3.5 text-left text-sm transition-all ${active ? "bg-[#7A202B] text-white shadow-md" : "text-white/80 hover:bg-white/10"}`,
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
                                                                size: 19,
                                                                className: "jsx-12d97c49916797c5" + " " + ((active ? "text-[#D4B978]" : "text-white/70") || "")
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/package/page-client.tsx",
                                                                lineNumber: 1073,
                                                                columnNumber: 29
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "jsx-12d97c49916797c5",
                                                                children: tab.label
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/package/page-client.tsx",
                                                                lineNumber: 1082,
                                                                columnNumber: 29
                                                            }, this)
                                                        ]
                                                    }, tab.id, true, {
                                                        fileName: "[project]/app/package/page-client.tsx",
                                                        lineNumber: 1058,
                                                        columnNumber: 27
                                                    }, this);
                                                })
                                            }, void 0, false, {
                                                fileName: "[project]/app/package/page-client.tsx",
                                                lineNumber: 1045,
                                                columnNumber: 18
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "jsx-12d97c49916797c5" + " " + "mt-4 border-t border-white/15 pt-5",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "jsx-12d97c49916797c5" + " " + "mb-4",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "jsx-12d97c49916797c5" + " " + "block text-[10px] uppercase tracking-[0.16em] text-[#D4B978]",
                                                                children: "Selected Package"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/package/page-client.tsx",
                                                                lineNumber: 1096,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                                className: "jsx-12d97c49916797c5" + " " + "mt-2 font-[family-name:var(--font-cormorant)] text-2xl font-bold leading-tight text-[#F3D78A]",
                                                                children: selectedRitual.title
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/package/page-client.tsx",
                                                                lineNumber: 1100,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "jsx-12d97c49916797c5" + " " + "mt-2 text-xl font-bold text-white",
                                                                children: displayPrice
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/package/page-client.tsx",
                                                                lineNumber: 1104,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/package/page-client.tsx",
                                                        lineNumber: 1095,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        type: "button",
                                                        onClick: ()=>setIsOrderOpen(true),
                                                        className: "jsx-12d97c49916797c5" + " " + "w-full rounded-xl bg-[#E5C77A] px-4 py-3 text-sm font-bold text-[#3D1418] shadow-sm transition-all hover:bg-[#F3D78A] hover:shadow-md active:scale-[0.98]",
                                                        children: "Order Now"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/package/page-client.tsx",
                                                        lineNumber: 1109,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        type: "button",
                                                        onClick: ()=>setIsBookingOpen(true),
                                                        className: "jsx-12d97c49916797c5" + " " + "mt-3 w-full rounded-xl border border-[#F3D78A]/50 bg-[#F3D78A] px-3 py-3 text-center text-xs font-bold leading-relaxed text-[#3D1418] shadow-sm animate-priest-blink transition-transform hover:scale-[1.01]",
                                                        children: "Looking for an experienced Iyer for an upcoming pooja?"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/package/page-client.tsx",
                                                        lineNumber: 1119,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/package/page-client.tsx",
                                                lineNumber: 1093,
                                                columnNumber: 37
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/package/page-client.tsx",
                                        lineNumber: 1043,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "jsx-12d97c49916797c5" + " " + "min-w-0 p-2 sm:p-7 lg:p-9",
                                        children: [
                                            activeTab === "details" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "jsx-12d97c49916797c5",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "jsx-12d97c49916797c5" + " " + "mb-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                                className: "jsx-12d97c49916797c5" + " " + "font-[family-name:var(--font-cormorant)] text-2xl font-bold text-[#42151B]",
                                                                children: "Pooja Samagri / Items List"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/package/page-client.tsx",
                                                                lineNumber: 1142,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "jsx-12d97c49916797c5" + " " + "inline-flex w-fit rounded-full bg-[#F5EDE0] px-3 py-1 text-xs font-semibold text-[#7D1E28]",
                                                                children: [
                                                                    selectedRitual.title,
                                                                    " (",
                                                                    (dynamicItems ?? selectedRitual.items).length,
                                                                    " Items)"
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/package/page-client.tsx",
                                                                lineNumber: 1146,
                                                                columnNumber: 25
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/package/page-client.tsx",
                                                        lineNumber: 1141,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "jsx-12d97c49916797c5" + " " + "mt-4 overflow-hidden rounded-lg border border-[#E8DCD0] shadow-sm",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                                                            className: "jsx-12d97c49916797c5" + " " + "w-full table-fixed border-collapse text-[10px] sm:text-xs md:text-sm",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                                                                    className: "jsx-12d97c49916797c5",
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                                        className: "jsx-12d97c49916797c5" + " " + "bg-[#7A1524] text-white",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                                className: "jsx-12d97c49916797c5" + " " + "w-[10%] px-2 py-3 text-center",
                                                                                children: "S.No"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/app/package/page-client.tsx",
                                                                                lineNumber: 1159,
                                                                                columnNumber: 31
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                                className: "jsx-12d97c49916797c5" + " " + "w-[36%] px-2 py-3 text-left",
                                                                                children: "Name (English)"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/app/package/page-client.tsx",
                                                                                lineNumber: 1163,
                                                                                columnNumber: 31
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                                className: "jsx-12d97c49916797c5" + " " + "w-[32%] px-2 py-3 text-left",
                                                                                children: "Name (Tamil)"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/app/package/page-client.tsx",
                                                                                lineNumber: 1167,
                                                                                columnNumber: 31
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                                className: "jsx-12d97c49916797c5" + " " + "w-[22%] px-2 py-3 text-left",
                                                                                children: "Quantity"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/app/package/page-client.tsx",
                                                                                lineNumber: 1171,
                                                                                columnNumber: 31
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/app/package/page-client.tsx",
                                                                        lineNumber: 1157,
                                                                        columnNumber: 29
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/package/page-client.tsx",
                                                                    lineNumber: 1155,
                                                                    columnNumber: 27
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                                                                    className: "jsx-12d97c49916797c5",
                                                                    children: (dynamicItems ?? selectedRitual.items).map((item, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                                            className: "jsx-12d97c49916797c5" + " " + ((index % 2 === 0 ? "bg-white" : "bg-[#FBF5EC]") || ""),
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                                    className: "jsx-12d97c49916797c5" + " " + "border-b px-2 py-3 text-center",
                                                                                    children: [
                                                                                        item.sno,
                                                                                        "."
                                                                                    ]
                                                                                }, void 0, true, {
                                                                                    fileName: "[project]/app/package/page-client.tsx",
                                                                                    lineNumber: 1200,
                                                                                    columnNumber: 35
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                                    className: "jsx-12d97c49916797c5" + " " + "border-b px-2 py-3 font-medium break-words",
                                                                                    children: item.english
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/app/package/page-client.tsx",
                                                                                    lineNumber: 1204,
                                                                                    columnNumber: 35
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                                    className: "jsx-12d97c49916797c5" + " " + "border-b px-2 py-3 break-words",
                                                                                    children: item.tamil
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/app/package/page-client.tsx",
                                                                                    lineNumber: 1208,
                                                                                    columnNumber: 35
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                                    className: "jsx-12d97c49916797c5" + " " + "border-b px-2 py-3 break-words",
                                                                                    children: item.quantity
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/app/package/page-client.tsx",
                                                                                    lineNumber: 1212,
                                                                                    columnNumber: 35
                                                                                }, this)
                                                                            ]
                                                                        }, `${item.sno}-${index}`, true, {
                                                                            fileName: "[project]/app/package/page-client.tsx",
                                                                            lineNumber: 1190,
                                                                            columnNumber: 33
                                                                        }, this))
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/package/page-client.tsx",
                                                                    lineNumber: 1179,
                                                                    columnNumber: 27
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/package/page-client.tsx",
                                                            lineNumber: 1153,
                                                            columnNumber: 25
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/package/page-client.tsx",
                                                        lineNumber: 1151,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "jsx-12d97c49916797c5" + " " + "mt-4 flex items-start gap-2 text-sm text-[#7A6458]",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$info$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Info$3e$__["Info"], {
                                                                size: 17,
                                                                className: "mt-0.5 shrink-0 text-[#B08A45]"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/package/page-client.tsx",
                                                                lineNumber: 1228,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "jsx-12d97c49916797c5",
                                                                children: "The items and quantities may vary slightly based on the priest's guidance and tradition."
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/package/page-client.tsx",
                                                                lineNumber: 1232,
                                                                columnNumber: 25
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/package/page-client.tsx",
                                                        lineNumber: 1227,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/package/page-client.tsx",
                                                lineNumber: 1139,
                                                columnNumber: 21
                                            }, this),
                                            activeTab === "process" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "jsx-12d97c49916797c5",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                        className: "jsx-12d97c49916797c5" + " " + "font-[family-name:var(--font-cormorant)] text-2xl font-semibold text-[#5A2026]",
                                                        children: "Pooja Process"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/package/page-client.tsx",
                                                        lineNumber: 1246,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "jsx-12d97c49916797c5" + " " + "mt-6 space-y-4",
                                                        children: selectedRitual.process.map((step, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "jsx-12d97c49916797c5" + " " + "flex gap-4 rounded-lg border border-[#E9DDC9] bg-white p-4",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "jsx-12d97c49916797c5" + " " + "flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#F6EAD5]",
                                                                        children: index + 1
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/package/page-client.tsx",
                                                                        lineNumber: 1263,
                                                                        columnNumber: 31
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "jsx-12d97c49916797c5" + " " + "flex items-center text-sm",
                                                                        children: step
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/package/page-client.tsx",
                                                                        lineNumber: 1267,
                                                                        columnNumber: 31
                                                                    }, this)
                                                                ]
                                                            }, step, true, {
                                                                fileName: "[project]/app/package/page-client.tsx",
                                                                lineNumber: 1258,
                                                                columnNumber: 29
                                                            }, this))
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/package/page-client.tsx",
                                                        lineNumber: 1250,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/package/page-client.tsx",
                                                lineNumber: 1244,
                                                columnNumber: 21
                                            }, this),
                                            activeTab === "benefits" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "jsx-12d97c49916797c5",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                        className: "jsx-12d97c49916797c5" + " " + "font-[family-name:var(--font-cormorant)] text-2xl font-semibold text-[#5A2026]",
                                                        children: "Benefits of the Pooja"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/package/page-client.tsx",
                                                        lineNumber: 1287,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "jsx-12d97c49916797c5" + " " + "mt-6 grid gap-4 sm:grid-cols-2",
                                                        children: selectedRitual.benefits.map((benefit)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "jsx-12d97c49916797c5" + " " + "flex gap-3 rounded-lg border border-[#E9DDC9] bg-white p-5",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__["Check"], {
                                                                        size: 19,
                                                                        className: "text-[#B08A45]"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/package/page-client.tsx",
                                                                        lineNumber: 1303,
                                                                        columnNumber: 31
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                        className: "jsx-12d97c49916797c5" + " " + "text-sm",
                                                                        children: benefit
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/package/page-client.tsx",
                                                                        lineNumber: 1308,
                                                                        columnNumber: 31
                                                                    }, this)
                                                                ]
                                                            }, benefit, true, {
                                                                fileName: "[project]/app/package/page-client.tsx",
                                                                lineNumber: 1298,
                                                                columnNumber: 29
                                                            }, this))
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/package/page-client.tsx",
                                                        lineNumber: 1291,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/package/page-client.tsx",
                                                lineNumber: 1285,
                                                columnNumber: 21
                                            }, this),
                                            activeTab === "notes" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "jsx-12d97c49916797c5",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                        className: "jsx-12d97c49916797c5" + " " + "font-[family-name:var(--font-cormorant)] text-2xl font-semibold text-[#5A2026]",
                                                        children: "Important Notes"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/package/page-client.tsx",
                                                        lineNumber: 1328,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "jsx-12d97c49916797c5" + " " + "mt-6 space-y-4",
                                                        children: selectedRitual.notes.map((note)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "jsx-12d97c49916797c5" + " " + "flex gap-3 rounded-lg bg-[#FBF5EC] p-5",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$info$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Info$3e$__["Info"], {
                                                                        size: 19,
                                                                        className: "text-[#B08A45]"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/package/page-client.tsx",
                                                                        lineNumber: 1344,
                                                                        columnNumber: 31
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                        className: "jsx-12d97c49916797c5" + " " + "text-sm",
                                                                        children: note
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/package/page-client.tsx",
                                                                        lineNumber: 1349,
                                                                        columnNumber: 31
                                                                    }, this)
                                                                ]
                                                            }, note, true, {
                                                                fileName: "[project]/app/package/page-client.tsx",
                                                                lineNumber: 1339,
                                                                columnNumber: 29
                                                            }, this))
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/package/page-client.tsx",
                                                        lineNumber: 1332,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/package/page-client.tsx",
                                                lineNumber: 1326,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/package/page-client.tsx",
                                        lineNumber: 1134,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/package/page-client.tsx",
                                lineNumber: 1039,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/app/package/page-client.tsx",
                            lineNumber: 1037,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/package/page-client.tsx",
                    lineNumber: 987,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/package/page-client.tsx",
                lineNumber: 982,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "jsx-12d97c49916797c5" + " " + "px-5 py-8 sm:px-8 lg:px-12",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "jsx-12d97c49916797c5" + " " + "mx-auto flex max-w-[1400px] flex-col items-center justify-between gap-7 rounded-xl border border-[#E8D5B5] bg-[#FFF8EC] px-7 py-8 lg:flex-row",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "jsx-12d97c49916797c5" + " " + "flex items-center gap-5",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "jsx-12d97c49916797c5" + " " + "flex h-14 w-14 items-center justify-center rounded-full border bg-white",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$phone$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Phone$3e$__["Phone"], {
                                        size: 23,
                                        className: "text-[#B87916]"
                                    }, void 0, false, {
                                        fileName: "[project]/app/package/page-client.tsx",
                                        lineNumber: 1386,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/app/package/page-client.tsx",
                                    lineNumber: 1384,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "jsx-12d97c49916797c5",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "jsx-12d97c49916797c5" + " " + "font-[family-name:var(--font-cormorant)] text-2xl font-semibold text-[#5A2026]",
                                            children: "Have Questions?"
                                        }, void 0, false, {
                                            fileName: "[project]/app/package/page-client.tsx",
                                            lineNumber: 1395,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "jsx-12d97c49916797c5" + " " + "mt-1 text-sm",
                                            children: "Our team is here to help you!"
                                        }, void 0, false, {
                                            fileName: "[project]/app/package/page-client.tsx",
                                            lineNumber: 1399,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/package/page-client.tsx",
                                    lineNumber: 1393,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/package/page-client.tsx",
                            lineNumber: 1382,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                            href: "/contact",
                            className: "jsx-12d97c49916797c5" + " " + "inline-flex h-14 items-center gap-4 rounded-lg bg-[#7A1524] px-9 text-sm font-semibold text-white",
                            children: [
                                data.enquireText || "Enquire Now",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__["ArrowRight"], {
                                    size: 18
                                }, void 0, false, {
                                    fileName: "[project]/app/package/page-client.tsx",
                                    lineNumber: 1415,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/package/page-client.tsx",
                            lineNumber: 1407,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/package/page-client.tsx",
                    lineNumber: 1380,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/package/page-client.tsx",
                lineNumber: 1378,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$order$2d$now$2d$modal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                open: isOrderOpen,
                onClose: ()=>setIsOrderOpen(false),
                packageName: selectedRitual?.title || "Consumer Package",
                packagePrice: dynamicPrice
            }, void 0, false, {
                fileName: "[project]/app/package/page-client.tsx",
                lineNumber: 1427,
                columnNumber: 7
            }, this),
            isBookingOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "jsx-12d97c49916797c5" + " " + "fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "jsx-12d97c49916797c5" + " " + "relative w-full max-w-md rounded-2xl bg-[#FAF6EE] p-6 shadow-2xl",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            type: "button",
                            onClick: ()=>setIsBookingOpen(false),
                            className: "jsx-12d97c49916797c5" + " " + "absolute right-4 top-4",
                            children: "✕"
                        }, void 0, false, {
                            fileName: "[project]/app/package/page-client.tsx",
                            lineNumber: 1449,
                            columnNumber: 13
                        }, this),
                        bookingSuccess ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "jsx-12d97c49916797c5" + " " + "py-8 text-center",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: "jsx-12d97c49916797c5" + " " + "text-2xl font-bold",
                                    children: "Request Received!"
                                }, void 0, false, {
                                    fileName: "[project]/app/package/page-client.tsx",
                                    lineNumber: 1463,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "jsx-12d97c49916797c5" + " " + "mt-2",
                                    children: "Our team will contact you shortly."
                                }, void 0, false, {
                                    fileName: "[project]/app/package/page-client.tsx",
                                    lineNumber: 1467,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/package/page-client.tsx",
                            lineNumber: 1461,
                            columnNumber: 15
                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                            onSubmit: handleBookingSubmit,
                            className: "jsx-12d97c49916797c5" + " " + "space-y-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: "jsx-12d97c49916797c5" + " " + "text-2xl font-bold",
                                    children: "Request for an Iyer"
                                }, void 0, false, {
                                    fileName: "[project]/app/package/page-client.tsx",
                                    lineNumber: 1482,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    required: true,
                                    placeholder: "Full Name",
                                    value: bookingForm.name,
                                    onChange: (e)=>setBookingForm({
                                            ...bookingForm,
                                            name: e.target.value
                                        }),
                                    className: "jsx-12d97c49916797c5" + " " + "w-full rounded-lg border p-3"
                                }, void 0, false, {
                                    fileName: "[project]/app/package/page-client.tsx",
                                    lineNumber: 1486,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    required: true,
                                    placeholder: "Mobile Number",
                                    value: bookingForm.mobile,
                                    onChange: (e)=>setBookingForm({
                                            ...bookingForm,
                                            mobile: e.target.value
                                        }),
                                    className: "jsx-12d97c49916797c5" + " " + "w-full rounded-lg border p-3"
                                }, void 0, false, {
                                    fileName: "[project]/app/package/page-client.tsx",
                                    lineNumber: 1500,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    required: true,
                                    type: "email",
                                    placeholder: "Email Address",
                                    value: bookingForm.email,
                                    onChange: (e)=>setBookingForm({
                                            ...bookingForm,
                                            email: e.target.value
                                        }),
                                    className: "jsx-12d97c49916797c5" + " " + "w-full rounded-lg border p-3"
                                }, void 0, false, {
                                    fileName: "[project]/app/package/page-client.tsx",
                                    lineNumber: 1514,
                                    columnNumber: 17
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
                                    className: "jsx-12d97c49916797c5" + " " + "w-full rounded-lg border p-3"
                                }, void 0, false, {
                                    fileName: "[project]/app/package/page-client.tsx",
                                    lineNumber: 1529,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "submit",
                                    className: "jsx-12d97c49916797c5" + " " + "w-full rounded-lg bg-[#5A121D] py-3 font-bold text-white",
                                    children: "Submit"
                                }, void 0, false, {
                                    fileName: "[project]/app/package/page-client.tsx",
                                    lineNumber: 1546,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/package/page-client.tsx",
                            lineNumber: 1475,
                            columnNumber: 15
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/package/page-client.tsx",
                    lineNumber: 1447,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/package/page-client.tsx",
                lineNumber: 1445,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/package/page-client.tsx",
        lineNumber: 840,
        columnNumber: 5
    }, this);
}
_s(PackagePage, "bzIxCdOzJKcXQP39wtpAOxSia6c=");
_c1 = PackagePage;
/*
============================================================
RITUAL ICON
============================================================
*/ function RitualIcon({ type, active }) {
    const icons = {
        peace: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__["Sparkles"],
        obstacles: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__["Check"],
        family: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$gift$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Gift$3e$__["Gift"],
        success: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$star$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Star$3e$__["Star"]
    };
    const Icon = icons[type];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
        size: 20,
        strokeWidth: 1.3,
        className: active ? "text-[#D4B978]" : "text-[#C48117]"
    }, void 0, false, {
        fileName: "[project]/app/package/page-client.tsx",
        lineNumber: 1594,
        columnNumber: 5
    }, this);
}
_c2 = RitualIcon;
var _c, _c1, _c2;
__turbopack_context__.k.register(_c, "ConsumerPackagePage");
__turbopack_context__.k.register(_c1, "PackagePage");
__turbopack_context__.k.register(_c2, "RitualIcon");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=app_1dcydce._.js.map