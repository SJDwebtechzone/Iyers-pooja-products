"use client";

import { useEffect, useRef, useState } from "react";
import { ArrowUpRight, Mail, MapPin, Phone } from "lucide-react";

export default function ContactDoor() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [videoEnded, setVideoEnded] = useState(false);

  useEffect(() => {
    const video = videoRef.current;

    if (!video) return;

    const handleEnded = () => {
      setVideoEnded(true);
    };

    video.addEventListener("ended", handleEnded);

    return () => {
      video.removeEventListener("ended", handleEnded);
    };
  }, []);

  return (
    <section className="relative min-h-screen overflow-hidden bg-[#6B705C]">

      {/* Temple Door Video */}
      <div className="absolute inset-0 flex items-center justify-center">

        <video
          ref={videoRef}
          autoPlay
          muted
          playsInline
          className="h-full w-full object-cover"
        >
          <source src="/temple-door.mp4" type="video/mp4" />
        </video>

      </div>

      {/* Contact Content */}
      <div
        className={`relative z-10 flex min-h-screen items-center justify-center px-6 transition-all duration-1000 ${
          videoEnded
            ? "opacity-100"
            : "pointer-events-none opacity-0"
        }`}
      >

        <div className="w-full max-w-4xl text-center">

          <span className="mb-5 block text-sm tracking-[0.3em] text-[#D4B978]">
            ✦ CONTACT HOMAM ✦
          </span>

          <h1 className="font-[family-name:var(--font-cormorant)] text-5xl text-white sm:text-6xl lg:text-7xl">
            We&apos;d Love to Hear From You
          </h1>

          <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-[#F0E8DC] sm:text-base">
            Have a question about our pooja products or need assistance?
            We&apos;re here to help.
          </p>

          {/* Contact Details */}
          <div className="mt-12 grid gap-4 sm:grid-cols-3">

            <div className="border border-[#D4B978]/30 bg-black/10 p-6 backdrop-blur-sm">
              <Phone
                size={22}
                className="mx-auto mb-4 text-[#D4B978]"
              />

              <p className="text-xs uppercase tracking-[0.2em] text-[#D4B978]">
                Phone
              </p>

              <p className="mt-2 text-sm text-white">
                +91 XXXXX XXXXX
              </p>
            </div>

            <div className="border border-[#D4B978]/30 bg-black/10 p-6 backdrop-blur-sm">
              <Mail
                size={22}
                className="mx-auto mb-4 text-[#D4B978]"
              />

              <p className="text-xs uppercase tracking-[0.2em] text-[#D4B978]">
                Email
              </p>

              <p className="mt-2 text-sm text-white">
                hello@homam.com
              </p>
            </div>

            <div className="border border-[#D4B978]/30 bg-black/10 p-6 backdrop-blur-sm">
              <MapPin
                size={22}
                className="mx-auto mb-4 text-[#D4B978]"
              />

              <p className="text-xs uppercase tracking-[0.2em] text-[#D4B978]">
                Location
              </p>

              <p className="mt-2 text-sm text-white">
                Chennai, India
              </p>
            </div>

          </div>

          {/* Button */}
          <div className="mt-10">
            <button className="group inline-flex items-center gap-3 bg-[#A71930] px-8 py-4 text-xs font-semibold tracking-[0.15em] text-white transition hover:bg-[#8A1528]">
              SEND MESSAGE

              <ArrowUpRight
                size={16}
                className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </button>
          </div>

        </div>

      </div>

    </section>
  );
}