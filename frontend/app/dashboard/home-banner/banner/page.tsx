"use client";

import { useEffect, useState } from "react";
import { Upload, Save } from "lucide-react";

type Banner = {
  id: number;
  heading_line1: string;
  heading_line2: string;
  description: string;
  image_filename: string;
};

const API_BASE = "http://localhost:3001";
const MAX_FILE_SIZE = 1 * 1024 * 1024; // 1MB

export default function HomeBannerFormPage() {
  const [banner, setBanner] = useState<Banner | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [saving, setSaving] = useState(false);

  const [form, setForm] = useState({
    heading_line1: "",
    heading_line2: "",
    description: "",
  });
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);

  async function loadBanner() {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch(`${API_BASE}/home-banner`);
      if (!res.ok) throw new Error("Failed to load");
      const data = await res.json();
      setBanner(data);
      setForm({
        heading_line1: data.heading_line1,
        heading_line2: data.heading_line2,
        description: data.description,
      });
    } catch {
      setError("Could not load banner details.");
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    loadBanner();
  }, []);

  function handleFileChange(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file) return;

    if (file.size > MAX_FILE_SIZE) {
      alert("Image must be 1MB or smaller. Please choose a smaller file.");
      e.target.value = "";
      return;
    }

    setImageFile(file);
    setPreviewUrl(URL.createObjectURL(file));
  }

  async function handleSave() {
    if (!form.heading_line1.trim() || !form.heading_line2.trim()) {
      alert("Both heading lines are required");
      return;
    }

    setSaving(true);
    try {
      const body = new FormData();
      body.append("heading_line1", form.heading_line1.trim());
      body.append("heading_line2", form.heading_line2.trim());
      body.append("description", form.description.trim());
      if (imageFile) {
        body.append("image", imageFile);
      }

      const res = await fetch(`${API_BASE}/home-banner`, {
        method: "PATCH",
        credentials: "include",
        body,
      });
      if (!res.ok) throw new Error();

      setImageFile(null);
      setPreviewUrl(null);
      loadBanner();
      alert("Banner updated successfully.");
    } catch {
      alert("Save failed. Make sure you're logged in.");
    } finally {
      setSaving(false);
    }
  }

  if (loading) {
    return <p className="text-[#6B5A4E]">Loading...</p>;
  }

  return (
    <div>
      <h1
        className="text-2xl text-[#2B0C14] mb-6"
        style={{ fontFamily: "'Fraunces', Georgia, serif" }}
      >
        Home Page Banner
      </h1>

      {error && <p className="text-sm text-red-600 mb-4">{error}</p>}

      <div className="bg-white border border-[#E4D7C3] rounded-xl p-6 max-w-2xl space-y-5">
        <div>
          <label className="block text-sm text-[#2B0C14] mb-2">Banner Image</label>
          <div className="w-full aspect-[16/6] bg-[#FBF6EE] border border-[#E4D7C3] rounded-lg overflow-hidden mb-3">
            <img
              src={previewUrl ?? `/images/${banner?.image_filename}`}
              alt="Banner preview"
              className="w-full h-full object-cover"
            />
          </div>
          <label className="inline-flex items-center gap-2 bg-[#8A1C2B] text-[#F3E7D3] text-sm px-4 py-2 rounded-lg hover:bg-[#701622] transition cursor-pointer">
            <Upload className="w-4 h-4" />
            Choose New Image
            <input
              type="file"
              accept="image/*"
              onChange={handleFileChange}
              className="hidden"
            />
          </label>
          <p className="text-xs text-[#6B5A4E] mt-1.5">Max file size: 1MB</p>
        </div>

        <div>
          <label className="block text-sm text-[#2B0C14] mb-1.5">
            Heading (Line 1)
          </label>
          <input
            value={form.heading_line1}
            onChange={(e) => setForm({ ...form, heading_line1: e.target.value })}
            className="w-full border border-[#E4D7C3] rounded-lg px-3 py-2 text-sm"
            placeholder="e.g. Everything You Need."
          />
        </div>

        <div>
          <label className="block text-sm text-[#2B0C14] mb-1.5">
            Heading (Line 2)
          </label>
          <input
            value={form.heading_line2}
            onChange={(e) => setForm({ ...form, heading_line2: e.target.value })}
            className="w-full border border-[#E4D7C3] rounded-lg px-3 py-2 text-sm"
            placeholder="e.g. One Sacred Destination."
          />
        </div>

        <div>
          <label className="block text-sm text-[#2B0C14] mb-1.5">
            Description
          </label>
          <textarea
            value={form.description}
            onChange={(e) => setForm({ ...form, description: e.target.value })}
            rows={3}
            className="w-full border border-[#E4D7C3] rounded-lg px-3 py-2 text-sm"
            placeholder="Short description shown under the heading"
          />
        </div>

        <button
          onClick={handleSave}
          disabled={saving}
          className="flex items-center gap-1.5 bg-[#8A1C2B] text-[#F3E7D3] text-sm px-4 py-2 rounded-lg hover:bg-[#701622] transition disabled:opacity-60"
        >
          <Save className="w-4 h-4" />
          {saving ? "Saving..." : "Save Changes"}
        </button>
      </div>
    </div>
  );
}