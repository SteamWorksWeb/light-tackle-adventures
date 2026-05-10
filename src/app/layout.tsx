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
  metadataBase: new URL("https://lighttackleadventures.com"),
  title: "Light Tackle Adventures | Homosassa Fishing Charters",
  description:
    "World-class Tarpon, Inshore, and Fly Fishing charters on the Nature Coast of Florida with Capt. Jim Lemke.",
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
    title: "Light Tackle Adventures | Homosassa Fishing Charters",
    description:
      "World-class Tarpon, Inshore, and Fly Fishing charters on the Nature Coast of Florida with Capt. Jim Lemke.",
    url: "https://lighttackleadventures.com",
    siteName: "Light Tackle Adventures",
    images: [
      {
        url: "/images/tarpon7.jpeg",
        width: 1200,
        height: 630,
        alt: "Giant Tarpon jumping on the Nature Coast of Florida",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Light Tackle Adventures | Homosassa Fishing Charters",
    description:
      "World-class Tarpon, Inshore, and Fly Fishing charters on the Nature Coast of Florida with Capt. Jim Lemke.",
    images: ["/images/tarpon7.jpeg"],
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
