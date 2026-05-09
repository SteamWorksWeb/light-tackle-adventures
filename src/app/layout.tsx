import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Homosassa Fishing Charters | Light Tackle Adventures — Capt. Jim Lemke",
  description:
    "Book world-class light tackle fishing charters in Homosassa and Crystal River with expert Nature Coast guide Capt. Jim Lemke. Tarpon, Snook, Redfish, Fly Fishing & Scalloping.",
  keywords: [
    "Homosassa fishing charters",
    "Crystal River fishing guide",
    "Nature Coast fishing charters",
    "Homosassa tarpon fishing",
    "fly fishing Homosassa",
    "scalloping Homosassa",
    "Capt Jim Lemke",
    "Chassahowitzka fishing",
    "Weeki Wachee fishing",
    "Hernando Beach fishing charters",
  ],
  openGraph: {
    title: "Homosassa Fishing Charters | Light Tackle Adventures — Capt. Jim Lemke",
    description:
      "Book world-class light tackle fishing charters in Homosassa and Crystal River with expert Nature Coast guide Capt. Jim Lemke. Tarpon, Snook, Redfish, Fly Fishing & Scalloping.",
    url: "https://lighttackleadventures.com",
    siteName: "Light Tackle Adventures",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className="min-h-screen flex flex-col bg-[#0d1b2a] text-white antialiased">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
