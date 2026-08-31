"use client";

import { useEffect, useState } from "react";
import { Upload } from "lucide-react";

type PackageImage = {
  id: string;
  image_filename: string;
};

const API_BASE = "http://localhost:3001";
const MAX_FILE_SIZE = 1 * 1024 * 1024; // 1MB

const PACKAGE_LABELS: Record<string, string> = {
  "consumer-package": "Consumer Package",
  "corporate-package": "Corporate Package",
  "temple-package": "Temple Package",
  "overseas-package": "Overseas Temple Package",
  "festivals-package": "Festival Package",
};

const PACKAGE_ORDER = [
  "consumer-package",
  "corporate-package",
  "temple-package",
  "overseas-package",
  "festivals-package",
];

export default function PackageImagesPage() {
  const [packageImages, setPackageImages] = useState<PackageImage[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [savingId, setSavingId] = useState<string | null>(null);
  const [previews, setPreviews] = useState<Record<string, string>>({});

  async function loadPackageImages() {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch(`${API_BASE}/home-package-images`);
      if (!res.ok) throw new Error("Failed to load");
      const data = await res.json();
      setPackageImages(data);
    } catch {
      setError("Could not load package images.");
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    loadPackageImages();
  }, []);

  function handleFileChange(e: React.ChangeEvent<HTMLInputElement>, id: string) {
    const file = e.target.files?.[0];
    if (!file) return;

    if (file.size > MAX_FILE_SIZE) {
      alert("Image must be 1MB or smaller. Please choose a smaller file.");
      e.target.value = "";
      return;
    }

    handleSave(id, file);
  }

  async function handleSave(id: string, file: File) {
    setSavingId(id);
    try {
      const previewUrl = URL.createObjectURL(file);
      setPreviews((prev) => ({ ...prev, [id]: previewUrl }));

      const body = new FormData();
      body.append("image", file);

      const res = await fetch(`${API_BASE}/home-package-images/${id}`, {
        method: "PATCH",
        credentials: "include",
        body,
      });
      if (!res.ok) throw new Error();

      loadPackageImages();
    } catch {
      alert("Save failed. Make sure you're logged in.");
    } finally {
      setSavingId(null);
    }
  }

  function getImageUrl(id: string) {
    if (previews[id]) return previews[id];
    const match = packageImages.find((p) => p.id === id);
    return match ? `/images/${match.image_filename}` : "/images/banner.jpeg";
  }

  return (
    <div>
      <h1
        className="text-2xl text-[#2B0C14] mb-6"
        style={{ fontFamily: "'Fraunces', Georgia, serif" }}
      >
        Package Card Images
      </h1>

      {error && <p className="text-sm text-red-600 mb-4">{error}</p>}

      {loading ? (
        <p className="text-[#6B5A4E]">Loading...</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-4xl">
          {PACKAGE_ORDER.map((id) => (
            <div key={id} className="bg-white border border-[#E4D7C3] rounded-xl p-4">
              <p className="text-sm text-[#2B0C14] mb-2">{PACKAGE_LABELS[id]}</p>
              <div className="w-full aspect-[4/3] bg-[#FBF6EE] border border-[#E4D7C3] rounded-lg overflow-hidden mb-3">
                <img
                  src={getImageUrl(id)}
                  alt={PACKAGE_LABELS[id]}
                  className="w-full h-full object-cover"
                />
              </div>
              <label className="inline-flex items-center gap-2 bg-[#8A1C2B] text-[#F3E7D3] text-xs px-3 py-1.5 rounded-lg hover:bg-[#701622] transition cursor-pointer">
                <Upload className="w-3.5 h-3.5" />
                {savingId === id ? "Saving..." : "Change Image"}
                <input
                  type="file"
                  accept="image/*"
                  onChange={(e) => handleFileChange(e, id)}
                  className="hidden"
                  disabled={savingId === id}
                />
              </label>
              <p className="text-[11px] text-[#6B5A4E] mt-1.5">Max file size: 1MB</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}