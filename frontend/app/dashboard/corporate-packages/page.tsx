"use client";

import {
  useEffect,
  useState,
  type Dispatch,
  type FormEvent,
  type SetStateAction,
} from "react";
import {
  ChevronLeft,
  Plus,
  Pencil,
  Trash2,
  X,
  Check,
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

type BookingForm = {
  name: string;
  mobile: string;
  address: string;
  email: string;
};

const API_BASE = "http://localhost:3001";

export default function CorporatePackagesPage() {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  // Booking state
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [bookingSuccess, setBookingSuccess] = useState(false);

  const [bookingForm, setBookingForm] = useState<BookingForm>({
    name: "",
    mobile: "",
    address: "",
    email: "",
  });

  const handleBookingSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const res = await fetch(`${API_BASE}/bookings`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...bookingForm,
          pooja: "Corporate Package",
        }),
      });

      if (!res.ok) {
        throw new Error("Booking failed");
      }

      setBookingSuccess(true);

      setTimeout(() => {
        setBookingSuccess(false);
        setIsBookingOpen(false);

        setBookingForm({
          name: "",
          mobile: "",
          address: "",
          email: "",
        });
      }, 2500);
    } catch {
      alert("Something went wrong. Please try again.");
    }
  };

  if (!activeCategory) {
    return (
      <>
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

          {/* Booking Buttons */}
          <div className="mt-8">
            <button
              type="button"
              onClick={() => setIsBookingOpen(true)}
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-[#E7BE6B] px-7 py-3.5 text-xs font-bold uppercase tracking-wider text-[#3D0D14] shadow-lg transition-all duration-300 hover:scale-105 hover:bg-[#D4A950] hover:shadow-xl sm:text-sm"
            >
              <span>Book Now</span>
            </button>

            <button
              type="button"
              onClick={() => setIsBookingOpen(true)}
              className="mt-3 block text-xs text-[#7D1E28] underline transition-colors hover:text-[#42151B]"
            >
              Looking to book an experienced Iyer priest for an upcoming
              pooja?
            </button>
          </div>
        </div>

        {isBookingOpen && (
          <BookingModal
            bookingSuccess={bookingSuccess}
            bookingForm={bookingForm}
            setBookingForm={setBookingForm}
            onClose={() => setIsBookingOpen(false)}
            onSubmit={handleBookingSubmit}
          />
        )}
      </>
    );
  }

  return (
    <>
      <PackageDetailsTable
        category={activeCategory}
        categoryLabel={
          CATEGORIES.find((c) => c.slug === activeCategory)?.label ?? ""
        }
        onBack={() => setActiveCategory(null)}
      />

      {isBookingOpen && (
        <BookingModal
          bookingSuccess={bookingSuccess}
          bookingForm={bookingForm}
          setBookingForm={setBookingForm}
          onClose={() => setIsBookingOpen(false)}
          onSubmit={handleBookingSubmit}
        />
      )}
    </>
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

      <div className="mb-6 flex items-center justify-between">
        <h1
          className="text-2xl text-[#2B0C14]"
          style={{ fontFamily: "'Fraunces', Georgia, serif" }}
        >
          {categoryLabel} — Package Details
        </h1>

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

function BookingModal({
  bookingSuccess,
  bookingForm,
  setBookingForm,
  onClose,
  onSubmit,
}: {
  bookingSuccess: boolean;
  bookingForm: BookingForm;
  setBookingForm: Dispatch<SetStateAction<BookingForm>>;
  onClose: () => void;
  onSubmit: (e: FormEvent<HTMLFormElement>) => Promise<void>;
}) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm">
      <div className="relative w-full max-w-md rounded-2xl border-2 border-[#DECBB0] bg-[#FAF6EE] p-6 shadow-2xl sm:p-8">
        <button
          type="button"
          onClick={onClose}
          className="absolute right-4 top-4 text-[#7A6458] hover:text-[#42151B]"
          aria-label="Close"
        >
          ✕
        </button>

        {bookingSuccess ? (
          <div className="py-8 text-center">
            <h3 className="mb-2 text-2xl font-bold text-[#42151B]">
              Booking Received!
            </h3>

            <p className="text-sm text-[#55463E]">
              Our team will contact you shortly to confirm your priest
              booking.
            </p>
          </div>
        ) : (
          <>
            <h3 className="mb-1 text-2xl font-bold text-[#42151B]">
              Book an Iyer Priest
            </h3>

            <p className="mb-5 text-xs text-[#63534B]">
              Fill in your details and we&apos;ll get back to you shortly.
            </p>

            <form onSubmit={onSubmit} className="space-y-3.5">
              <input
                type="text"
                required
                placeholder="Full Name"
                value={bookingForm.name}
                onChange={(e) =>
                  setBookingForm({
                    ...bookingForm,
                    name: e.target.value,
                  })
                }
                className="w-full rounded-lg border border-[#DFCBB0] bg-white px-3 py-2.5 text-sm focus:border-[#7D1E28] focus:outline-none"
              />

              <input
                type="tel"
                required
                placeholder="Mobile Number"
                value={bookingForm.mobile}
                onChange={(e) =>
                  setBookingForm({
                    ...bookingForm,
                    mobile: e.target.value,
                  })
                }
                className="w-full rounded-lg border border-[#DFCBB0] bg-white px-3 py-2.5 text-sm focus:border-[#7D1E28] focus:outline-none"
              />

              <input
                type="email"
                required
                placeholder="Email Address"
                value={bookingForm.email}
                onChange={(e) =>
                  setBookingForm({
                    ...bookingForm,
                    email: e.target.value,
                  })
                }
                className="w-full rounded-lg border border-[#DFCBB0] bg-white px-3 py-2.5 text-sm focus:border-[#7D1E28] focus:outline-none"
              />

              <textarea
                required
                rows={2}
                placeholder="Address"
                value={bookingForm.address}
                onChange={(e) =>
                  setBookingForm({
                    ...bookingForm,
                    address: e.target.value,
                  })
                }
                className="w-full rounded-lg border border-[#DFCBB0] bg-white px-3 py-2.5 text-sm focus:border-[#7D1E28] focus:outline-none"
              />

              <button
                type="submit"
                className="w-full rounded-lg bg-[#5A121D] py-3 text-sm font-bold tracking-wide text-white transition-colors hover:bg-[#400B13]"
              >
                Submit Booking
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
}