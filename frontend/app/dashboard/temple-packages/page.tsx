"use client";

import { useEffect, useState } from "react";
import { Plus, Pencil, Trash2, X, Check } from "lucide-react";



// -------------------------------------------------------------
// QUANTITY COLUMNS
// Grouped by temple type; each group has Daily / Weekly / Monthly.
// Keys match the backend column names exactly.
// -------------------------------------------------------------

const QUANTITY_FIELDS = [
  "mid_daily",
  "mid_weekly",
  "mid_monthly",
  "divya_daily",
  "divya_weekly",
  "divya_monthly",
] as const;

type QuantityField = (typeof QUANTITY_FIELDS)[number];

const QUANTITY_GROUPS: {
  label: string;
  fields: { key: QuantityField; label: string }[];
}[] = [
  {
    label: "Mid Size Temple",
    fields: [
      { key: "mid_daily", label: "Daily" },
      { key: "mid_weekly", label: "Weekly" },
      { key: "mid_monthly", label: "Monthly" },
    ],
  },
  {
    label: "Divyadesam Temple",
    fields: [
      { key: "divya_daily", label: "Daily" },
      { key: "divya_weekly", label: "Weekly" },
      { key: "divya_monthly", label: "Monthly" },
    ],
  },
];

type PackageItem = {
  id: number;
  sno: number;
  english: string;
  tamil: string | null;
} & Record<QuantityField, string | null>;

type FormState = {
  sno: string;
  english: string;
  tamil: string;
} & Record<QuantityField, string>;

const EMPTY_FORM: FormState = {
  sno: "",
  english: "",
  tamil: "",
  mid_daily: "",
  mid_weekly: "",
  mid_monthly: "",
  divya_daily: "",
  divya_weekly: "",
  divya_monthly: "",
};

const API_BASE = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3001";
const CATEGORY_KEY = "thirumanjam";

// Total column count: S.No + English + Tamil + 6 quantities + Actions
const COLUMN_COUNT = 3 + QUANTITY_FIELDS.length + 1;

export default function TemplePackagesPage() {
  const [items, setItems] = useState<PackageItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const [editingId, setEditingId] = useState<number | null>(null);
  const [form, setForm] = useState<FormState>(EMPTY_FORM);
  const [adding, setAdding] = useState(false);
  const [showDeleteAllConfirm, setShowDeleteAllConfirm] = useState(false);
  const [deletingAll, setDeletingAll] = useState(false);

  async function loadItems() {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch(`${API_BASE}/temple-packages`);
      if (!res.ok) throw new Error("Failed to load");
      const data = await res.json();
      setItems(Array.isArray(data) ? data : []);
    } catch {
      setError("Could not load package details.");
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    loadItems();
  }, []);

  function resetForm() {
    setForm(EMPTY_FORM);
    setEditingId(null);
    setAdding(false);
  }

  function startEdit(item: PackageItem) {
    setEditingId(item.id);
    setAdding(false);

    const next: FormState = {
      ...EMPTY_FORM,
      sno: String(item.sno ?? ""),
      english: item.english ?? "",
      tamil: item.tamil ?? "",
    };
    QUANTITY_FIELDS.forEach((field) => {
      next[field] = item[field] ?? "";
    });
    setForm(next);
  }

  function startAdd() {
    setAdding(true);
    setEditingId(null);
    setForm({ ...EMPTY_FORM, sno: String(items.length + 1) });
  }

  async function handleSave() {
    if (!form.english.trim()) {
      alert("Name (English) is required");
      return;
    }

    const body: Record<string, string | number> = {
      sno: parseInt(form.sno, 10) || 0,
      english: form.english.trim(),
      tamil: form.tamil.trim(),
    };
    QUANTITY_FIELDS.forEach((field) => {
      body[field] = form[field].trim();
    });

    try {
      const url = editingId
        ? `${API_BASE}/temple-packages/${editingId}`
        : `${API_BASE}/temple-packages`;

      const res = await fetch(url, {
        method: editingId ? "PATCH" : "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify(body),
      });
      if (!res.ok) throw new Error();

      resetForm();
      loadItems();
    } catch {
      alert("Save failed. Make sure you're logged in.");
    }
  }

  async function handleDelete(id: number) {
    if (!confirm("Delete this item?")) return;
    try {
      const res = await fetch(`${API_BASE}/temple-packages/${id}`, {
        method: "DELETE",
        credentials: "include",
      });
      if (!res.ok) throw new Error();
      loadItems();
    } catch {
      alert("Delete failed. Make sure you're logged in.");
    }
  }

  async function handleDeleteAll() {
    setDeletingAll(true);
    try {
      const res = await fetch(`${API_BASE}/temple-packages/all`, {
        method: "DELETE",
        credentials: "include",
      });
      if (!res.ok) throw new Error();
      setShowDeleteAllConfirm(false);
      loadItems();
    } catch {
      alert("Delete all failed. Make sure you're logged in.");
    } finally {
      setDeletingAll(false);
    }
  }

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h1
          className="text-2xl text-[#2B0C14]"
          style={{ fontFamily: "'Fraunces', Georgia, serif" }}
        >
          Temple Package (Thirumanjam) — Package Details
        </h1>
      </div>

      <div className="mb-4">
        <PriceEditor categoryKey={CATEGORY_KEY} />
      </div>

      <div className="flex items-center justify-between mb-4">
        <p className="text-xs text-[#6B5A4E]">
          Leave a quantity blank if it does not apply — the website shows
          &ldquo;—&rdquo; for unconfigured values.
        </p>
        <div className="flex items-center gap-3">
          {items.length > 0 && (
            <button
              onClick={() => setShowDeleteAllConfirm(true)}
              className="flex items-center gap-1.5 border border-red-600 text-red-600 text-sm px-4 py-2 rounded-lg hover:bg-red-50 transition"
            >
              <Trash2 className="w-4 h-4" />
              Delete All
            </button>
          )}
          <button
            onClick={startAdd}
            className="flex items-center gap-1.5 bg-[#8A1C2B] text-[#F3E7D3] text-sm px-4 py-2 rounded-lg hover:bg-[#701622] transition"
          >
            <Plus className="w-4 h-4" />
            Add Item
          </button>
        </div>
      </div>

      {error && <p className="text-sm text-red-600 mb-4">{error}</p>}

      <div className="bg-white border border-[#E4D7C3] rounded-xl overflow-x-auto">
        <table className="w-full text-sm min-w-[1100px]">
          <thead>
            {/* Grouped header row */}
            <tr className="bg-[#8A1C2B] text-[#F3E7D3] text-left">
              <th rowSpan={2} className="px-4 py-3 font-normal w-16 align-bottom">
                S.No
              </th>
              <th rowSpan={2} className="px-4 py-3 font-normal align-bottom">
                Name (English)
              </th>
              <th rowSpan={2} className="px-4 py-3 font-normal align-bottom">
                Name (Tamil)
              </th>
              {QUANTITY_GROUPS.map((group) => (
                <th
                  key={group.label}
                  colSpan={group.fields.length}
                  className="px-4 py-2 font-normal text-center border-l border-[#F3E7D3]/30"
                >
                  {group.label}
                </th>
              ))}
              <th
                rowSpan={2}
                className="px-4 py-3 font-normal w-24 text-right align-bottom"
              >
                Actions
              </th>
            </tr>
            <tr className="bg-[#701622] text-[#F3E7D3] text-left">
              {QUANTITY_GROUPS.map((group) =>
                group.fields.map((field, index) => (
                  <th
                    key={field.key}
                    className={`px-3 py-2 font-normal text-center text-xs w-28 ${
                      index === 0 ? "border-l border-[#F3E7D3]/30" : ""
                    }`}
                  >
                    {field.label}
                  </th>
                )),
              )}
            </tr>
          </thead>
          <tbody>
            {adding && (
              <EditRow
                form={form}
                setForm={setForm}
                onSave={handleSave}
                onCancel={resetForm}
              />
            )}
            {loading ? (
              <tr>
                <td
                  colSpan={COLUMN_COUNT}
                  className="px-4 py-6 text-center text-[#6B5A4E]"
                >
                  Loading...
                </td>
              </tr>
            ) : items.length === 0 && !adding ? (
              <tr>
                <td
                  colSpan={COLUMN_COUNT}
                  className="px-4 py-6 text-center text-[#6B5A4E]"
                >
                  No items yet. Click &ldquo;Add Item&rdquo; to create one.
                </td>
              </tr>
            ) : (
              items.map((item) =>
                editingId === item.id ? (
                  <EditRow
                    key={item.id}
                    form={form}
                    setForm={setForm}
                    onSave={handleSave}
                    onCancel={resetForm}
                  />
                ) : (
                  <tr
                    key={item.id}
                    className="border-t border-[#F3E7D3] hover:bg-[#FBF6EE]"
                  >
                    <td className="px-4 py-3 text-[#6B5A4E]">{item.sno}</td>
                    <td className="px-4 py-3 text-[#2B0C14]">{item.english}</td>
                    <td className="px-4 py-3 text-[#2B0C14]">
                      {item.tamil || "—"}
                    </td>
                    {QUANTITY_GROUPS.map((group) =>
                      group.fields.map((field, index) => (
                        <td
                          key={field.key}
                          className={`px-3 py-3 text-center text-[#6B5A4E] ${
                            index === 0 ? "border-l border-[#F3E7D3]" : ""
                          }`}
                        >
                          {item[field.key] || "—"}
                        </td>
                      )),
                    )}
                    <td className="px-4 py-3">
                      <div className="flex items-center justify-end gap-2">
                        <button
                          onClick={() => startEdit(item)}
                          className="text-[#6B5A4E] hover:text-[#8A1C2B]"
                          aria-label="Edit"
                        >
                          <Pencil className="w-4 h-4" />
                        </button>
                        <button
                          onClick={() => handleDelete(item.id)}
                          className="text-[#6B5A4E] hover:text-red-600"
                          aria-label="Delete"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ),
              )
            )}
          </tbody>
        </table>
      </div>

      {showDeleteAllConfirm && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-4">
          <div className="bg-white rounded-xl border border-[#E4D7C3] shadow-xl max-w-sm w-full p-6">
            <h3 className="text-lg font-semibold text-[#2B0C14] mb-2">
              Delete all package items?
            </h3>
            <p className="text-sm text-[#6B5A4E] mb-6">
              Are you sure you want to delete all package items in{" "}
              <span className="font-medium text-[#2B0C14]">
                Temple Package (Thirumanjam)
              </span>
              ? This action cannot be undone.
            </p>
            <div className="flex justify-end gap-3">
              <button
                onClick={() => setShowDeleteAllConfirm(false)}
                disabled={deletingAll}
                className="px-4 py-2 text-sm rounded-lg text-[#6B5A4E] hover:bg-[#F3E7D3] transition disabled:opacity-50"
              >
                Cancel
              </button>
              <button
                onClick={handleDeleteAll}
                disabled={deletingAll}
                className="px-4 py-2 text-sm rounded-lg bg-red-600 text-white hover:bg-red-700 transition disabled:opacity-50"
              >
                {deletingAll ? "Deleting..." : "Yes, Delete All"}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

function PriceEditor({ categoryKey }: { categoryKey: string }) {
  const [price, setPrice] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [editing, setEditing] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [saving, setSaving] = useState(false);

  async function loadPrice() {
    setLoading(true);
    try {
      const res = await fetch(`${API_BASE}/package-prices/${categoryKey}`);
      if (res.ok) {
        const data = await res.json();
        setPrice(data?.price ?? null);
      } else {
        setPrice(null);
      }
    } catch {
      setPrice(null);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    loadPrice();
  }, []);

  function startEdit() {
    setInputValue(price ?? "");
    setEditing(true);
  }

  async function handleSave() {
    if (!inputValue.trim()) {
      alert("Price is required");
      return;
    }
    setSaving(true);
    try {
      const res = await fetch(`${API_BASE}/package-prices/${categoryKey}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify({ price: inputValue.trim() }),
      });
      if (!res.ok) throw new Error();
      setEditing(false);
      loadPrice();
    } catch {
      alert("Save failed. Make sure you're logged in.");
    } finally {
      setSaving(false);
    }
  }

  return (
    <div className="bg-white border border-[#E4D7C3] rounded-xl px-4 py-3 flex items-center justify-between">
      <div className="flex items-center gap-2">
        <span className="text-sm text-[#6B5A4E]">Package Price:</span>
        {editing ? (
          <input
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="e.g. 5000"
            className="w-32 border border-[#E4D7C3] rounded px-2 py-1 text-sm"
          />
        ) : (
          <span className="text-[#2B0C14] text-sm font-medium">
            {loading ? "Loading..." : price ? `₹${price}` : "Not set"}
          </span>
        )}
      </div>

      {editing ? (
        <div className="flex items-center gap-2">
          <button
            onClick={handleSave}
            disabled={saving}
            className="text-green-700"
            aria-label="Save"
          >
            <Check className="w-4 h-4" />
          </button>
          <button
            onClick={() => setEditing(false)}
            className="text-[#6B5A4E]"
            aria-label="Cancel"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      ) : (
        <button
          onClick={startEdit}
          className="flex items-center gap-1.5 bg-[#8A1C2B] text-[#F3E7D3] text-sm px-3 py-1.5 rounded-lg hover:bg-[#701622] transition"
        >
          <Pencil className="w-3.5 h-3.5" />
          {price ? "Edit Price" : "Add Price"}
        </button>
      )}
    </div>
  );
}

function EditRow({
  form,
  setForm,
  onSave,
  onCancel,
}: {
  form: FormState;
  setForm: (f: FormState) => void;
  onSave: () => void;
  onCancel: () => void;
}) {
  return (
    <tr className="border-t border-[#F3E7D3] bg-[#FBF6EE]">
      <td className="px-2 py-2">
        <input
          type="number"
          value={form.sno}
          onChange={(e) => setForm({ ...form, sno: e.target.value })}
          className="w-14 border border-[#E4D7C3] rounded px-2 py-1 text-sm"
        />
      </td>
      <td className="px-2 py-2">
        <input
          value={form.english}
          onChange={(e) => setForm({ ...form, english: e.target.value })}
          placeholder="Name (English)"
          className="w-full min-w-[140px] border border-[#E4D7C3] rounded px-2 py-1 text-sm"
        />
      </td>
      <td className="px-2 py-2">
        <input
          value={form.tamil}
          onChange={(e) => setForm({ ...form, tamil: e.target.value })}
          placeholder="Name (Tamil)"
          className="w-full min-w-[140px] border border-[#E4D7C3] rounded px-2 py-1 text-sm"
        />
      </td>

      {QUANTITY_GROUPS.map((group) =>
        group.fields.map((field, index) => (
          <td
            key={field.key}
            className={`px-2 py-2 ${
              index === 0 ? "border-l border-[#E4D7C3]" : ""
            }`}
          >
            <input
              value={form[field.key]}
              onChange={(e) =>
                setForm({ ...form, [field.key]: e.target.value })
              }
              placeholder="e.g. 50 grms"
              aria-label={`${group.label} ${field.label}`}
              className="w-full min-w-[90px] border border-[#E4D7C3] rounded px-2 py-1 text-sm"
            />
          </td>
        )),
      )}

      <td className="px-2 py-2">
        <div className="flex items-center justify-end gap-2">
          <button onClick={onSave} className="text-green-700" aria-label="Save">
            <Check className="w-4 h-4" />
          </button>
          <button
            onClick={onCancel}
            className="text-[#6B5A4E]"
            aria-label="Cancel"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      </td>
    </tr>
  );
}