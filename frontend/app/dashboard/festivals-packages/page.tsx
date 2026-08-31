"use client";

import { useEffect, useState } from "react";
import { ChevronLeft, Plus, Pencil, Trash2, X, Check } from "lucide-react";

const CATEGORIES = [
  { slug: "new-year-festival", label: "New Year Festival" },
  { slug: "pongal", label: "Pongal" },
  { slug: "maatu-pongal", label: "Maatu Pongal" },
  { slug: "telugu-new-year", label: "Telugu New Year" },
  { slug: "gokulaastami", label: "Gokulaastami" },
  { slug: "vinayagarchaturthi", label: "Vinayagarchaturthi" },
  { slug: "ayudha-pooja", label: "Ayudha Pooja" },
  { slug: "vijayadasami", label: "Vijayadasami" },
  { slug: "deepavali", label: "Deepavali" },
];

type PackageItem = {
  id: number;
  sno: number;
  name_english: string;
  name_tamil: string | null;
  quantity: string | null;
};

const API_BASE = "http://localhost:3001";

export default function FestivalsPackagesPage() {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  if (!activeCategory) {
    return (
      <div>
        <h1
          className="text-2xl text-[#2B0C14] mb-1"
          style={{ fontFamily: "'Fraunces', Georgia, serif" }}
        >
          Festival Packages
        </h1>
        <p className="text-sm text-[#6B5A4E] mb-6">
          Choose a festival to manage its Package Details.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {CATEGORIES.map((cat) => (
            <button
              key={cat.slug}
              onClick={() => setActiveCategory(cat.slug)}
              className="text-left bg-white border border-[#E4D7C3] rounded-xl p-5 hover:border-[#8A1C2B] hover:shadow-sm transition"
            >
              <p className="text-[#2B0C14] font-medium">{cat.label}</p>
              <p className="text-xs text-[#6B5A4E] mt-1">
                Manage package details
              </p>
            </button>
          ))}
        </div>
      </div>
    );
  }

  return (
    <PackageDetailsTable
      category={activeCategory}
      categoryLabel={CATEGORIES.find((c) => c.slug === activeCategory)!.label}
      onBack={() => setActiveCategory(null)}
    />
  );
}

function PackageDetailsTable({
  category,
  categoryLabel,
  onBack,
}: {
  category: string;
  categoryLabel: string;
  onBack: () => void;
}) {
  const [items, setItems] = useState<PackageItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const [editingId, setEditingId] = useState<number | null>(null);
  const [form, setForm] = useState({
    sno: "",
    name_english: "",
    name_tamil: "",
    quantity: "",
  });
  const [adding, setAdding] = useState(false);

  async function loadItems() {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch(`${API_BASE}/festivals-packages/${category}`);
      if (!res.ok) throw new Error("Failed to load");
      const data = await res.json();
      setItems(data);
    } catch (e) {
      setError("Could not load package details.");
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    loadItems();
  }, [category]);

  function resetForm() {
    setForm({ sno: "", name_english: "", name_tamil: "", quantity: "" });
    setEditingId(null);
    setAdding(false);
  }

  function startEdit(item: PackageItem) {
    setEditingId(item.id);
    setAdding(false);
    setForm({
      sno: String(item.sno),
      name_english: item.name_english,
      name_tamil: item.name_tamil ?? "",
      quantity: item.quantity ?? "",
    });
  }

  function startAdd() {
    setAdding(true);
    setEditingId(null);
    setForm({
      sno: String(items.length + 1),
      name_english: "",
      name_tamil: "",
      quantity: "",
    });
  }

  async function handleSave() {
    if (!form.name_english.trim()) {
      alert("Name (English) is required");
      return;
    }
    const body = {
      sno: parseInt(form.sno, 10) || 0,
      name_english: form.name_english.trim(),
      name_tamil: form.name_tamil.trim(),
      quantity: form.quantity.trim(),
    };

    try {
      if (editingId) {
        const res = await fetch(
          `${API_BASE}/festivals-packages/${category}/${editingId}`,
          {
            method: "PATCH",
            headers: { "Content-Type": "application/json" },
            credentials: "include",
            body: JSON.stringify(body),
          },
        );
        if (!res.ok) throw new Error();
      } else {
        const res = await fetch(`${API_BASE}/festivals-packages/${category}`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          credentials: "include",
          body: JSON.stringify(body),
        });
        if (!res.ok) throw new Error();
      }
      resetForm();
      loadItems();
    } catch {
      alert("Save failed. Make sure you're logged in.");
    }
  }

  async function handleDelete(id: number) {
    if (!confirm("Delete this item?")) return;
    try {
      const res = await fetch(
        `${API_BASE}/festivals-packages/${category}/${id}`,
        { method: "DELETE", credentials: "include" },
      );
      if (!res.ok) throw new Error();
      loadItems();
    } catch {
      alert("Delete failed. Make sure you're logged in.");
    }
  }

  return (
    <div>
      <button
        onClick={onBack}
        className="flex items-center gap-1.5 text-sm text-[#6B5A4E] hover:text-[#2B0C14] mb-4"
      >
        <ChevronLeft className="w-4 h-4" />
        Back to categories
      </button>

      <div className="flex items-center justify-between mb-6">
        <h1
          className="text-2xl text-[#2B0C14]"
          style={{ fontFamily: "'Fraunces', Georgia, serif" }}
        >
          {categoryLabel} — Package Details
        </h1>
        <button
          onClick={startAdd}
          className="flex items-center gap-1.5 bg-[#8A1C2B] text-[#F3E7D3] text-sm px-4 py-2 rounded-lg hover:bg-[#701622] transition"
        >
          <Plus className="w-4 h-4" />
          Add Item
        </button>
      </div>

      {error && <p className="text-sm text-red-600 mb-4">{error}</p>}

      <div className="bg-white border border-[#E4D7C3] rounded-xl overflow-hidden">
        <table className="w-full text-sm">
          <thead>
            <tr className="bg-[#8A1C2B] text-[#F3E7D3] text-left">
              <th className="px-4 py-3 font-normal w-16">S.No</th>
              <th className="px-4 py-3 font-normal">Name (English)</th>
              <th className="px-4 py-3 font-normal">Name (Tamil)</th>
              <th className="px-4 py-3 font-normal w-32">Quantity</th>
              <th className="px-4 py-3 font-normal w-24 text-right">Actions</th>
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
                <td colSpan={5} className="px-4 py-6 text-center text-[#6B5A4E]">
                  Loading...
                </td>
              </tr>
            ) : items.length === 0 && !adding ? (
              <tr>
                <td colSpan={5} className="px-4 py-6 text-center text-[#6B5A4E]">
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
                    <td className="px-4 py-3 text-[#2B0C14]">
                      {item.name_english}
                    </td>
                    <td className="px-4 py-3 text-[#2B0C14]">
                      {item.name_tamil}
                    </td>
                    <td className="px-4 py-3 text-[#6B5A4E]">
                      {item.quantity}
                    </td>
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
    </div>
  );
}

function EditRow({
  form,
  setForm,
  onSave,
  onCancel,
}: {
  form: { sno: string; name_english: string; name_tamil: string; quantity: string };
  setForm: (f: any) => void;
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
          value={form.name_english}
          onChange={(e) => setForm({ ...form, name_english: e.target.value })}
          placeholder="Name (English)"
          className="w-full border border-[#E4D7C3] rounded px-2 py-1 text-sm"
        />
      </td>
      <td className="px-2 py-2">
        <input
          value={form.name_tamil}
          onChange={(e) => setForm({ ...form, name_tamil: e.target.value })}
          placeholder="Name (Tamil)"
          className="w-full border border-[#E4D7C3] rounded px-2 py-1 text-sm"
        />
      </td>
      <td className="px-2 py-2">
        <input
          value={form.quantity}
          onChange={(e) => setForm({ ...form, quantity: e.target.value })}
          placeholder="e.g. 1 kg"
          className="w-full border border-[#E4D7C3] rounded px-2 py-1 text-sm"
        />
      </td>
      <td className="px-2 py-2">
        <div className="flex items-center justify-end gap-2">
          <button onClick={onSave} className="text-green-700" aria-label="Save">
            <Check className="w-4 h-4" />
          </button>
          <button onClick={onCancel} className="text-[#6B5A4E]" aria-label="Cancel">
            <X className="w-4 h-4" />
          </button>
        </div>
      </td>
    </tr>
  );
}