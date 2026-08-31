"use client";

import { Cormorant_Garamond, DM_Sans } from "next/font/google";
import "./globals.css";
import { usePathname } from "next/navigation";
import Navbar from "./components/navbar";
import Footer from "./components/footer";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  display: "swap",
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  display: "swap",
});

const HIDE_NAVBAR_FOOTER_PREFIXES = [
  "/dashboard",
  "/login",
  "/forgot-password",
  "/reset-password",
];

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();

  const hideNavFooter = HIDE_NAVBAR_FOOTER_PREFIXES.some((prefix) =>
    pathname?.startsWith(prefix)
  );

  return (
    <html lang="en">
      <body className={`${cormorant.variable} ${dmSans.variable}`}>
        {!hideNavFooter && <Navbar />}
        {children}
        {!hideNavFooter && <Footer />}
      </body>
    </html>
  );
}