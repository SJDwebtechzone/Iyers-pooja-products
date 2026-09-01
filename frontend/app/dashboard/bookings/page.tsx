"use client";

import { useEffect, useState } from "react";
import { Trash2 } from "lucide-react";

type Booking = {
  id: number;
  name: string;
  mobile: string;
  email: string;
  address: string;
  pooja: string | null;
  created_at: string;
};

const API_BASE = "http://localhost:3001";

export default function BookingsPage() {
  const [bookings, setBookings] = useState<Booking[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  async function loadBookings() {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch(`${API_BASE}/bookings`, {
        credentials: "include",
      });
      if (!res.ok) throw new Error("Failed to load");
      const data = await res.json();
      setBookings(data);
    } catch {
      setError("Could not load bookings. Make sure you're logged in.");
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    loadBookings();
  }, []);

  async function handleDelete(id: number) {
    if (!confirm("Delete this booking?")) return;
    try {
      const res = await fetch(`${API_BASE}/bookings/${id}`, {
        method: "DELETE",
        credentials: "include",
      });
      if (!res.ok) throw new Error();
      loadBookings();
    } catch {
      alert("Delete failed. Make sure you're logged in.");
    }
  }

  return (
    <div>
      <h1
        className="text-2xl text-[#2B0C14] mb-1"
        style={{ fontFamily: "'Fraunces', Georgia, serif" }}
      >
        Request Iyer 
      </h1>
      <p className="text-sm text-[#6B5A4E] mb-6">
        Customer requests to book an experienced Iyer priest for an upcoming pooja.
      </p>

      {error && <p className="text-sm text-red-600 mb-4">{error}</p>}

      <div className="bg-white border border-[#E4D7C3] rounded-xl overflow-hidden">
        <table className="w-full text-sm">
          <thead>
            <tr className="bg-[#8A1C2B] text-[#F3E7D3] text-left">
              <th className="px-4 py-3 font-normal">Name</th>
              <th className="px-4 py-3 font-normal">Mobile</th>
              <th className="px-4 py-3 font-normal">Email</th>
              <th className="px-4 py-3 font-normal">Address</th>
              <th className="px-4 py-3 font-normal">Pooja</th>
              <th className="px-4 py-3 font-normal">Requested On</th>
              <th className="px-4 py-3 font-normal w-16 text-right">Actions</th>
            </tr>
          </thead>
          <tbody>
            {loading ? (
              <tr>
                <td colSpan={7} className="px-4 py-6 text-center text-[#6B5A4E]">
                  Loading...
                </td>
              </tr>
            ) : bookings.length === 0 ? (
              <tr>
                <td colSpan={7} className="px-4 py-6 text-center text-[#6B5A4E]">
                  No booking requests yet.
                </td>
              </tr>
            ) : (
              bookings.map((b) => (
                <tr
                  key={b.id}
                  className="border-t border-[#F3E7D3] hover:bg-[#FBF6EE]"
                >
                  <td className="px-4 py-3 text-[#2B0C14]">{b.name}</td>
                  <td className="px-4 py-3 text-[#2B0C14]">{b.mobile}</td>
                  <td className="px-4 py-3 text-[#2B0C14]">{b.email}</td>
                  <td className="px-4 py-3 text-[#6B5A4E] max-w-[220px] truncate">
                    {b.address}
                  </td>
                  <td className="px-4 py-3 text-[#6B5A4E]">{b.pooja ?? "—"}</td>
                  <td className="px-4 py-3 text-[#6B5A4E]">
                    {new Date(b.created_at).toLocaleDateString()}
                  </td>
                  <td className="px-4 py-3">
                    <div className="flex items-center justify-end">
                      <button
                        onClick={() => handleDelete(b.id)}
                        className="text-[#6B5A4E] hover:text-red-600"
                        aria-label="Delete"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}