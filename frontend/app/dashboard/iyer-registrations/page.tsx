"use client";

import { useEffect, useState } from "react";
import { Trash2, Loader2 } from "lucide-react";

type Registration = {
  id: number;
  name: string;
  phone: string;
  email: string;
  location: string;
  created_at: string;
};

const API_BASE =
  process.env.NEXT_PUBLIC_API_URL ||
  "https://iyerspoojaproducts.com/api";

export default function IyerRegistrationsPage() {
  const [registrations, setRegistrations] = useState<Registration[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [showDeleteAll, setShowDeleteAll] = useState(false);
  const [deletingAll, setDeletingAll] = useState(false);

  async function loadRegistrations() {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch(`${API_BASE}/iyer-registrations`, {
        credentials: "include",
      });
      if (!res.ok) throw new Error("Failed to load");
      const data = await res.json();
      setRegistrations(data);
    } catch {
      setError("Could not load registrations. Make sure you're logged in.");
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    loadRegistrations();
  }, []);

  async function handleDelete(id: number) {
    if (!confirm("Delete this registration?")) return;
    try {
      const res = await fetch(`${API_BASE}/iyer-registrations/${id}`, {
        method: "DELETE",
        credentials: "include",
      });
      if (!res.ok) throw new Error();
      loadRegistrations();
    } catch {
      alert("Delete failed. Make sure you're logged in.");
    }
  }

  async function handleDeleteAll() {
    setDeletingAll(true);
    try {
      const res = await fetch(`${API_BASE}/iyer-registrations/all`, {
        method: "DELETE",
        credentials: "include",
      });
      if (!res.ok) throw new Error();
      setShowDeleteAll(false);
      loadRegistrations();
    } catch {
      alert("Delete all failed — make sure you're logged in.");
    } finally {
      setDeletingAll(false);
    }
  }

  return (
    <div>
      <div className="flex items-start justify-between gap-4 mb-1">
        <h1
          className="text-2xl text-[#2B0C14]"
          style={{ fontFamily: "'Fraunces', Georgia, serif" }}
        >
          Iyer Registration
        </h1>
        {registrations.length > 0 && (
          <button
            onClick={() => setShowDeleteAll(true)}
            className="shrink-0 inline-flex items-center gap-1.5 rounded-lg border border-red-300 text-red-600 px-3 py-1.5 text-sm font-medium hover:bg-red-50"
          >
            <Trash2 className="w-4 h-4" />
            Clear All Registrations
          </button>
        )}
      </div>
      <p className="text-sm text-[#6B5A4E] mb-6">
        Priests who registered themselves via the website navbar form.
      </p>

      {error && <p className="text-sm text-red-600 mb-4">{error}</p>}

      <div className="bg-white border border-[#E4D7C3] rounded-xl overflow-hidden">
        <table className="w-full text-sm">
          <thead>
            <tr className="bg-[#8A1C2B] text-[#F3E7D3] text-left">
              <th className="px-4 py-3 font-normal">Name</th>
              <th className="px-4 py-3 font-normal">Phone</th>
              <th className="px-4 py-3 font-normal">Email</th>
              <th className="px-4 py-3 font-normal">Location</th>
              <th className="px-4 py-3 font-normal">Registered On</th>
              <th className="px-4 py-3 font-normal w-16 text-right">Actions</th>
            </tr>
          </thead>
          <tbody>
            {loading ? (
              <tr>
                <td colSpan={6} className="px-4 py-6 text-center text-[#6B5A4E]">
                  Loading...
                </td>
              </tr>
            ) : registrations.length === 0 ? (
              <tr>
                <td colSpan={6} className="px-4 py-6 text-center text-[#6B5A4E]">
                  No registrations yet.
                </td>
              </tr>
            ) : (
              registrations.map((r) => (
                <tr
                  key={r.id}
                  className="border-t border-[#F3E7D3] hover:bg-[#FBF6EE]"
                >
                  <td className="px-4 py-3 text-[#2B0C14]">{r.name}</td>
                  <td className="px-4 py-3 text-[#2B0C14]">{r.phone}</td>
                  <td className="px-4 py-3 text-[#2B0C14]">{r.email}</td>
                  <td className="px-4 py-3 text-[#6B5A4E] max-w-[220px] truncate">
                    {r.location}
                  </td>
                  <td className="px-4 py-3 text-[#6B5A4E]">
                    {new Date(r.created_at).toLocaleDateString()}
                  </td>
                  <td className="px-4 py-3">
                    <div className="flex items-center justify-end">
                      <button
                        onClick={() => handleDelete(r.id)}
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

      {showDeleteAll && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 px-4">
          <div className="bg-white rounded-xl border border-[#E4D7C3] max-w-sm w-full p-6">
            <h2
              className="text-lg text-[#2B0C14] mb-2"
              style={{ fontFamily: "'Fraunces', Georgia, serif" }}
            >
              Delete all registrations?
            </h2>
            <p className="text-sm text-[#6B5A4E] mb-6">
              Are you sure you want to delete all registrations? This action
              cannot be undone.
            </p>
            <div className="flex justify-end gap-3">
              <button
                onClick={() => setShowDeleteAll(false)}
                disabled={deletingAll}
                className="px-4 py-2 text-sm rounded-lg border border-[#E4D7C3] text-[#6B5A4E] hover:bg-[#FBF6EE] disabled:opacity-60"
              >
                Cancel
              </button>
              <button
                onClick={handleDeleteAll}
                disabled={deletingAll}
                className="px-4 py-2 text-sm rounded-lg bg-red-600 text-white hover:bg-red-700 disabled:opacity-60 inline-flex items-center gap-2"
              >
                {deletingAll && <Loader2 className="w-4 h-4 animate-spin" />}
                Delete All
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}