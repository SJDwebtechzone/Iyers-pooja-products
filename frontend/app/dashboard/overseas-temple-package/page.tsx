"use client";

import { useEffect, useState } from "react";
import { Plus, Pencil, Trash2, X, Check } from "lucide-react";

type PackageItem = {
  id: number;
  sno: number;
  english: string;
  tamil: string | null;
  quantity: string | null;
};

const API_BASE = "http://localhost:3001";
const CATEGORY_KEY = "overseas-thirumanjam";

export default function OverseasTemplePackagePage() {
  const [items, setItems] = useState<PackageItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const [editingId, setEditingId] = useState<number | null>(null);
  const [form, setForm] = useState({
    sno: "",
    english: "",
    tamil: "",
    quantity: "",
  });
  const [adding, setAdding] = useState(false);

  async function loadItems() {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch(`${API_BASE}/overseas-temple-package`);
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
  }, []);

  function resetForm() {
    setForm({ sno: "", english: "", tamil: "", quantity: "" });
    setEditingId(null);
    setAdding(false);
  }

  function startEdit(item: PackageItem) {
    setEditingId(item.id);
    setAdding(false);
    setForm({
      sno: String(item.sno),
      english: item.english,
      tamil: item.tamil ?? "",
      quantity: item.quantity ?? "",
    });
  }

  function startAdd() {
    setAdding(true);
    setEditingId(null);
    setForm({
      sno: String(items.length + 1),
      english: "",
      tamil: "",
      quantity: "",
    });
  }

  async function handleSave() {
    if (!form.english.trim()) {
      alert("Name (English) is required");
      return;
    }
    const body = {
      sno: parseInt(form.sno, 10) || 0,
      english: form.english.trim(),
      tamil: form.tamil.trim(),
      quantity: form.quantity.trim(),
    };

    try {
      if (editingId) {
        const res = await fetch(`${API_BASE}/overseas-temple-package/${editingId}`, {
          method: "PATCH",
          headers: { "Content-Type": "application/json" },
          credentials: "include",
          body: JSON.stringify(body),
        });
        if (!res.ok) throw new Error();
      } else {
        const res = await fetch(`${API_BASE}/overseas-temple-package`, {
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
      const res = await fetch(`${API_BASE}/overseas-temple-package/${id}`, {
        method: "DELETE",
        credentials: "include",
      });
      if (!res.ok) throw new Error();
      loadItems();
    } catch {
      alert("Delete failed. Make sure you're logged in.");
    }
  }

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h1
          className="text-2xl text-[#2B0C14]"
          style={{ fontFamily: "'Fraunces', Georgia, serif" }}
        >
          Overseas Temple Package (Thirumanjam) — Package Details
        </h1>
      </div>

      <div className="mb-4">
        <PriceEditor categoryKey={CATEGORY_KEY} />
      </div>

      <div className="flex items-center justify-end mb-4">
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
              <EditRow form={form} setForm={setForm} onSave={handleSave} onCancel={resetForm} />
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
                  <EditRow key={item.id} form={form} setForm={setForm} onSave={handleSave} onCancel={resetForm} />
                ) : (
                  <tr key={item.id} className="border-t border-[#F3E7D3] hover:bg-[#FBF6EE]">
                    <td className="px-4 py-3 text-[#6B5A4E]">{item.sno}</td>
                    <td className="px-4 py-3 text-[#2B0C14]">{item.english}</td>
                    <td className="px-4 py-3 text-[#2B0C14]">{item.tamil}</td>
                    <td className="px-4 py-3 text-[#6B5A4E]">{item.quantity}</td>
                    <td className="px-4 py-3">
                      <div className="flex items-center justify-end gap-2">
                        <button onClick={() => startEdit(item)} className="text-[#6B5A4E] hover:text-[#8A1C2B]" aria-label="Edit">
                          <Pencil className="w-4 h-4" />
                        </button>
                        <button onClick={() => handleDelete(item.id)} className="text-[#6B5A4E] hover:text-red-600" aria-label="Delete">
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
          <button onClick={handleSave} disabled={saving} className="text-green-700" aria-label="Save">
            <Check className="w-4 h-4" />
          </button>
          <button onClick={() => setEditing(false)} className="text-[#6B5A4E]" aria-label="Cancel">
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
  form: { sno: string; english: string; tamil: string; quantity: string };
  setForm: (f: any) => void;
  onSave: () => void;
  onCancel: () => void;
}) {
  return (
    <tr className="border-t border-[#F3E7D3] bg-[#FBF6EE]">
      <td className="px-2 py-2">
        <input type="number" value={form.sno} onChange={(e) => setForm({ ...form, sno: e.target.value })} className="w-14 border border-[#E4D7C3] rounded px-2 py-1 text-sm" />
      </td>
      <td className="px-2 py-2">
        <input value={form.english} onChange={(e) => setForm({ ...form, english: e.target.value })} placeholder="Name (English)" className="w-full border border-[#E4D7C3] rounded px-2 py-1 text-sm" />
      </td>
      <td className="px-2 py-2">
        <input value={form.tamil} onChange={(e) => setForm({ ...form, tamil: e.target.value })} placeholder="Name (Tamil)" className="w-full border border-[#E4D7C3] rounded px-2 py-1 text-sm" />
      </td>
      <td className="px-2 py-2">
        <input value={form.quantity} onChange={(e) => setForm({ ...form, quantity: e.target.value })} placeholder="e.g. 1 kg" className="w-full border border-[#E4D7C3] rounded px-2 py-1 text-sm" />
      </td>
      <td className="px-2 py-2">
        <div className="flex items-center justify-end gap-2">
          <button onClick={onSave} className="text-green-700" aria-label="Save"><Check className="w-4 h-4" /></button>
          <button onClick={onCancel} className="text-[#6B5A4E]" aria-label="Cancel"><X className="w-4 h-4" /></button>
        </div>
      </td>
    </tr>
  );
}