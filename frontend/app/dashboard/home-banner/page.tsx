"use client";

import Link from "next/link";

export default function HomePageLanding() {
  return (
    <div>
      <h1
        className="text-2xl text-[#2B0C14] mb-1.5"
        style={{ fontFamily: "'Fraunces', Georgia, serif" }}
      >
        Home Page
      </h1>
      <p className="text-sm text-[#6B5A4E] mb-6">
        Choose a section to manage.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-4xl">
        <Link
          href="/dashboard/home-banner/banner"
          className="bg-white border border-[#E4D7C3] rounded-xl p-5 hover:border-[#B08A45] hover:shadow-md transition"
        >
          <h3 className="text-base text-[#2B0C14]">Home Page Banner</h3>
          <p className="text-sm text-[#6B5A4E] mt-1">
            Manage banner image, heading & description
          </p>
        </Link>

        <Link
          href="/dashboard/home-banner/package-images"
          className="bg-white border border-[#E4D7C3] rounded-xl p-5 hover:border-[#B08A45] hover:shadow-md transition"
        >
          <h3 className="text-base text-[#2B0C14]">Package Card Images</h3>
          <p className="text-sm text-[#6B5A4E] mt-1">
            Manage the 5 package card images
          </p>
        </Link>
      </div>
    </div>
  );
}