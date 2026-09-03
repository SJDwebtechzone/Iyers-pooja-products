"use client";

import {
  useEffect,
  useState,
  type Dispatch,
  type SetStateAction,
} from "react";
import {
  ChevronLeft,
  Plus,
  Pencil,
  Trash2,
  X,
  Check,
  IndianRupee,
} from "lucide-react";

const CATEGORIES = [
  { slug: "friday-poojas", label: "Friday Poojas" },
  { slug: "amavasai-poojas", label: "Amavasai Poojas" },
  { slug: "ganapathy-homam", label: "Ganapathy Homam" },
  {
    slug: "ayudha-pooja-vehicle-pooja",
    label: "Ayudha Pooja & Vehicle Pooja",
  },
  {
    slug: "aarthi-prasadam-distribution",
    label: "Aarthi & Prasadam Distribution",
  },
];

type PackageItem = {
  id: number;
  sno: number;
  name_english: string;
  name_tamil: string | null;
  quantity: string | null;
};

type PackageForm = {
  sno: string;
  name_english: string;
  name_tamil: string;
  quantity: string;
};

const API_BASE = "http://localhost:3001";

export default function CorporatePackagesPage() {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  if (!activeCategory) {
    return (
      <div>
        <h1
          className="mb-1 text-2xl text-[#2B0C14]"
          style={{ fontFamily: "'Fraunces', Georgia, serif" }}
        >
          Corporate Packages
        </h1>

        <p className="mb-6 text-sm text-[#6B5A4E]">
          Choose a package to manage its Package Details.
        </p>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {CATEGORIES.map((cat) => (
            <button
              key={cat.slug}
              type="button"
              onClick={() => setActiveCategory(cat.slug)}
              className="rounded-xl border border-[#E4D7C3] bg-white p-5 text-left transition hover:border-[#8A1C2B] hover:shadow-sm"
            >
              <p className="font-medium text-[#2B0C14]">
                {cat.label}
              </p>

              <p className="mt-1 text-xs text-[#6B5A4E]">
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
      categoryLabel={
        CATEGORIES.find((c) => c.slug === activeCategory)?.label ?? ""
      }
      onBack={() => setActiveCategory(null)}
    />
  );
}

function PriceEditor({ categoryKey }: { categoryKey: string }) {
  const [price, setPrice] = useState("");
  const [editing, setEditing] = useState(false);
  const [saving, setSaving] = useState(false);
  const [loading, setLoading] = useState(true);

  async function loadPrice() {
    setLoading(true);
    try {
      const res = await fetch(`${API_BASE}/package-prices/${categoryKey}`);
      const data = await res.json();
      setPrice(data.price ?? "");
    } catch {
      // ignore, leave price blank
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    loadPrice();
    setEditing(false);
  }, [categoryKey]);

  async function handleSave() {
    setSaving(true);
    try {
      const res = await fetch(`${API_BASE}/package-prices/${categoryKey}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify({ price }),
      });
      if (!res.ok) throw new Error();
      setEditing(false);
    } catch {
      alert("Could not save price. Make sure you're logged in.");
    } finally {
      setSaving(false);
    }
  }

  return (
    <div className="flex items-center justify-between bg-white border border-[#E4D7C3] rounded-xl px-5 py-4 mb-4">
      <div className="flex items-center gap-2">
        <IndianRupee className="w-4 h-4 text-[#8A1C2B]" />
        <span className="text-sm text-[#6B5A4E]">Package Price:</span>
        {editing ? (
          <input
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            placeholder="e.g. 9999"
            className="border border-[#E4D7C3] rounded px-2 py-1 text-sm w-32"
            autoFocus
          />
        ) : (
          <span className="text-[#2B0C14] font-medium">
            {loading ? "Loading..." : price ? `₹${price}` : "Not set"}
          </span>
        )}
      </div>

      {editing ? (
        <div className="flex items-center gap-2">
          <button
            onClick={handleSave}
            disabled={saving}
            className="text-green-700 disabled:opacity-50"
            aria-label="Save price"
          >
            <Check className="w-4 h-4" />
          </button>
          <button
            onClick={() => {
              setEditing(false);
              loadPrice();
            }}
            className="text-[#6B5A4E]"
            aria-label="Cancel"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      ) : (
        <button
          onClick={() => setEditing(true)}
          className="flex items-center gap-1.5 bg-[#F3E7D3] text-[#2B0C14] text-sm px-3 py-1.5 rounded-lg hover:bg-[#E4D7C3] transition"
        >
          <Pencil className="w-3.5 h-3.5" />
          {price ? "Edit Price" : "Add Price"}
        </button>
      )}
    </div>
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

  const [form, setForm] = useState<PackageForm>({
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
      const res = await fetch(
        `${API_BASE}/corporate-packages/${category}`,
      );

      if (!res.ok) {
        throw new Error("Failed to load");
      }

      const data = await res.json();

      setItems(data);
    } catch {
      setError("Could not load package details.");
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    loadItems();
  }, [category]);

  function resetForm() {
    setForm({
      sno: "",
      name_english: "",
      name_tamil: "",
      quantity: "",
    });

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
      if (editingId !== null) {
        const res = await fetch(
          `${API_BASE}/corporate-packages/${category}/${editingId}`,
          {
            method: "PATCH",
            headers: {
              "Content-Type": "application/json",
            },
            credentials: "include",
            body: JSON.stringify(body),
          },
        );

        if (!res.ok) {
          throw new Error("Update failed");
        }
      } else {
        const res = await fetch(
          `${API_BASE}/corporate-packages/${category}`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            credentials: "include",
            body: JSON.stringify(body),
          },
        );

        if (!res.ok) {
          throw new Error("Create failed");
        }
      }

      resetForm();
      await loadItems();
    } catch {
      alert("Save failed. Make sure you're logged in.");
    }
  }

  async function handleDelete(id: number) {
    if (!confirm("Delete this item?")) {
      return;
    }

    try {
      const res = await fetch(
        `${API_BASE}/corporate-packages/${category}/${id}`,
        {
          method: "DELETE",
          credentials: "include",
        },
      );

      if (!res.ok) {
        throw new Error("Delete failed");
      }

      await loadItems();
    } catch {
      alert("Delete failed. Make sure you're logged in.");
    }
  }

  return (
    <div>
      <button
        type="button"
        onClick={onBack}
        className="mb-4 flex items-center gap-1.5 text-sm text-[#6B5A4E] hover:text-[#2B0C14]"
      >
        <ChevronLeft className="h-4 w-4" />
        Back to categories
      </button>

      <h1
        className="mb-4 text-2xl text-[#2B0C14]"
        style={{ fontFamily: "'Fraunces', Georgia, serif" }}
      >
        {categoryLabel} — Package Details
      </h1>

      <PriceEditor categoryKey={category} />

      <div className="mb-6 flex items-center justify-end">
        <button
          type="button"
          onClick={startAdd}
          className="flex items-center gap-1.5 rounded-lg bg-[#8A1C2B] px-4 py-2 text-sm text-[#F3E7D3] transition hover:bg-[#701622]"
        >
          <Plus className="h-4 w-4" />
          Add Item
        </button>
      </div>

      {error && (
        <p className="mb-4 text-sm text-red-600">
          {error}
        </p>
      )}

      <div className="overflow-hidden rounded-xl border border-[#E4D7C3] bg-white">
        <table className="w-full text-sm">
          <thead>
            <tr className="bg-[#8A1C2B] text-left text-[#F3E7D3]">
              <th className="w-16 px-4 py-3 font-normal">
                S.No
              </th>

              <th className="px-4 py-3 font-normal">
                Name (English)
              </th>

              <th className="px-4 py-3 font-normal">
                Name (Tamil)
              </th>

              <th className="w-32 px-4 py-3 font-normal">
                Quantity
              </th>

              <th className="w-24 px-4 py-3 text-right font-normal">
                Actions
              </th>
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
                  colSpan={5}
                  className="px-4 py-6 text-center text-[#6B5A4E]"
                >
                  Loading...
                </td>
              </tr>
            ) : items.length === 0 && !adding ? (
              <tr>
                <td
                  colSpan={5}
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
                    <td className="px-4 py-3 text-[#6B5A4E]">
                      {item.sno}
                    </td>

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
                          type="button"
                          onClick={() => startEdit(item)}
                          className="text-[#6B5A4E] hover:text-[#8A1C2B]"
                          aria-label="Edit"
                        >
                          <Pencil className="h-4 w-4" />
                        </button>

                        <button
                          type="button"
                          onClick={() => handleDelete(item.id)}
                          className="text-[#6B5A4E] hover:text-red-600"
                          aria-label="Delete"
                        >
                          <Trash2 className="h-4 w-4" />
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
  form: PackageForm;
  setForm: Dispatch<SetStateAction<PackageForm>>;
  onSave: () => void;
  onCancel: () => void;
}) {
  return (
    <tr className="border-t border-[#F3E7D3] bg-[#FBF6EE]">
      <td className="px-2 py-2">
        <input
          type="number"
          value={form.sno}
          onChange={(e) =>
            setForm({
              ...form,
              sno: e.target.value,
            })
          }
          className="w-14 rounded border border-[#E4D7C3] px-2 py-1 text-sm"
        />
      </td>

      <td className="px-2 py-2">
        <input
          value={form.name_english}
          onChange={(e) =>
            setForm({
              ...form,
              name_english: e.target.value,
            })
          }
          placeholder="Name (English)"
          className="w-full rounded border border-[#E4D7C3] px-2 py-1 text-sm"
        />
      </td>

      <td className="px-2 py-2">
        <input
          value={form.name_tamil}
          onChange={(e) =>
            setForm({
              ...form,
              name_tamil: e.target.value,
            })
          }
          placeholder="Name (Tamil)"
          className="w-full rounded border border-[#E4D7C3] px-2 py-1 text-sm"
        />
      </td>

      <td className="px-2 py-2">
        <input
          value={form.quantity}
          onChange={(e) =>
            setForm({
              ...form,
              quantity: e.target.value,
            })
          }
          placeholder="e.g. 1 kg"
          className="w-full rounded border border-[#E4D7C3] px-2 py-1 text-sm"
        />
      </td>

      <td className="px-2 py-2">
        <div className="flex items-center justify-end gap-2">
          <button
            type="button"
            onClick={onSave}
            className="text-green-700"
            aria-label="Save"
          >
            <Check className="h-4 w-4" />
          </button>

          <button
            type="button"
            onClick={onCancel}
            className="text-[#6B5A4E]"
            aria-label="Cancel"
          >
            <X className="h-4 w-4" />
          </button>
        </div>
      </td>
    </tr>
  );
}