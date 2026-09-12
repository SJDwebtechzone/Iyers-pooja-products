import { Cormorant_Garamond, DM_Sans } from "next/font/google";
import "./globals.css";
import SiteShell from "./components/site-shell";

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

export const metadata = {
  metadataBase: new URL("https://yourdomain.com"),
  applicationName: "Iyyars Pooja Products",
  authors: [{ name: "Iyyars Pooja Products" }],
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${cormorant.variable} ${dmSans.variable}`}>
        <SiteShell>{children}</SiteShell>
      </body>
    </html>
  );
}
