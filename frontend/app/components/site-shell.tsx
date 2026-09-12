"use client";

import { usePathname } from "next/navigation";
import Navbar from "./navbar";
import Footer from "./footer";
import FloatingContact from "./floating-contact";

const HIDE_NAVBAR_FOOTER_PREFIXES = [
  "/dashboard",
  "/login",
  "/forgot-password",
  "/reset-password",
];

export default function SiteShell({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();

  const hideNavFooter = HIDE_NAVBAR_FOOTER_PREFIXES.some((prefix) =>
    pathname?.startsWith(prefix),
  );

  return (
    <>
      {!hideNavFooter && <Navbar />}
      {children}
      {!hideNavFooter && <Footer />}
      {!hideNavFooter && <FloatingContact />}
    </>
  );
}
