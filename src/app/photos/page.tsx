"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { X, ArrowRight } from "lucide-react";

const galleryImages = [
  { src: "/images/tarpon7.jpeg",            alt: "Giant Tarpon on the flats",                    category: "Tarpon" },
  { src: "/images/tarpon-1.jpeg",           alt: "Tarpon fishing in Homosassa",                  category: "Tarpon" },
  { src: "/images/tarpon-2.jpeg",           alt: "Sight fishing for giant Tarpon",               category: "Tarpon" },
  { src: "/images/tarpon-4.jpeg",           alt: "Tarpon aerial jump",                           category: "Tarpon" },
  { src: "/images/tarpon-5.jpeg",           alt: "Tarpon on the Nature Coast flats",             category: "Tarpon" },
  { src: "/images/hero-tarpon.jpeg",        alt: "Homosassa Tarpon charter",                     category: "Tarpon" },
  { src: "/images/fly-header.jpeg",         alt: "Fly fishing the Nature Coast",                 category: "Fly Fishing" },
  { src: "/images/fly1.jpeg",              alt: "Fly casting to tailing Redfish",                category: "Fly Fishing" },
  { src: "/images/fly2.jpeg",              alt: "Fly fishing on the backcountry flats",          category: "Fly Fishing" },
  { src: "/images/H-red-on-fly1.jpg.jpeg", alt: "Redfish on the fly rod",                       category: "Fly Fishing" },
  { src: "/images/hero-red.jpg",           alt: "Redfish inshore fishing",                      category: "Inshore" },
  { src: "/images/snook736x429.jpg.jpeg",  alt: "Snook fishing on the Nature Coast",            category: "Inshore" },
  { src: "/images/scallop1.jpeg",          alt: "Scalloping in Homosassa",                      category: "Scalloping" },
  { src: "/images/scallop2.jpeg",          alt: "Family snorkeling for bay scallops",           category: "Scalloping" },
  { src: "/images/scallop3.jpeg",          alt: "Bay scallop harvest",                          category: "Scalloping" },
  { src: "/images/scallop4.jpeg",          alt: "Crystal River scalloping trip",                category: "Scalloping" },
  { src: "/images/scallop5.jpeg",          alt: "Kids scalloping on the Gulf",                  category: "Scalloping" },
  { src: "/images/scallop6.jpeg",          alt: "Snorkeling for scallops",                      category: "Scalloping" },
  { src: "/images/boat.jpg",              alt: "The Light Tackle Adventures bay boat",           category: "The Boat" },
  { src: "/images/jim2.jpg",              alt: "Capt. Jim Lemke",                               category: "The Captain" },
];

const categories = ["All", "Tarpon", "Fly Fishing", "Inshore", "Scalloping", "The Boat", "The Captain"];

export default function PhotosPage() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeImage, setActiveImage] = useState<{ src: string; alt: string } | null>(null);
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered = activeCategory === "All"
    ? galleryImages
    : galleryImages.filter((img) => img.category === activeCategory);

  return (
    <>
      {/* ── HERO ── */}
      <section className="pt-32 pb-20 px-6 relative overflow-hidden">
        <Image
          src="/images/tarpon7.jpeg"
          alt="Gallery Background"
          fill
          className="object-cover object-center -z-20"
          sizes="100vw"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a1520]/80 to-[#0a1520]/95 -z-10" />

        <div className="max-w-5xl mx-auto relative z-10">
          <span className="text-[#FA4616] font-bold tracking-widest text-sm uppercase">
            The Proof
          </span>
          <h1 className="font-[family-name:var(--font-playfair)] text-4xl md:text-5xl font-bold text-white mt-4 leading-tight">
            Photo Gallery
          </h1>
          <p className="text-xl text-slate-300 mt-4 max-w-2xl leading-relaxed">
            Real fish, real water, real moments — from the Nature Coast flats
            with Capt. Jim Lemke.
          </p>
        </div>
      </section>

      {/* ── GALLERY ── */}
      <div className="bg-slate-50 min-h-screen">
        <div className="max-w-7xl mx-auto px-4 py-16 md:py-24">

          {/* Category filter tabs */}
          <div className="flex flex-wrap gap-2 mb-10">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-[7px] text-sm font-semibold transition-all duration-200 ${
                  activeCategory === cat
                    ? "bg-[#FA4616] text-white shadow-md"
                    : "bg-white border border-slate-200 text-slate-600 hover:border-[#FA4616]/40 hover:text-[#FA4616]"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {filtered.map((img) => (
              <div
                key={img.src}
                className="relative aspect-square cursor-pointer overflow-hidden rounded-[7px] group shadow-sm"
                onClick={() => { setActiveImage(img); setIsOpen(true); }}
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300 flex items-end p-4 opacity-0 group-hover:opacity-100">
                  <span className="text-white text-xs font-semibold bg-[#FA4616] px-2 py-1 rounded-[4px]">
                    {img.category}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* CTA below gallery */}
          <div className="mt-16 text-center">
            <p className="text-slate-500 text-base mb-6">
              Ready to create your own memories on the Nature Coast?
            </p>
            <Link
              href="/reservations"
              className="inline-flex items-center gap-2 bg-[#FA4616] hover:bg-[#d93a0f] text-white font-bold px-8 py-3.5 rounded-[7px] text-sm shadow-lg hover:shadow-[#FA4616]/30 transition-all duration-300 group"
            >
              Book Your Charter
              <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

        </div>
      </div>

      {/* ── LIGHTBOX — persistent in DOM, animated via CSS transitions ── */}
      <div
        className={`fixed inset-0 z-[100] flex items-center justify-center bg-black/95 p-4 cursor-zoom-out transition-all duration-300 ease-in-out ${
          isOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={() => setIsOpen(false)}
      >
        {/* Close button */}
        <button
          className="absolute top-4 right-4 text-white bg-white/10 hover:bg-white/20 rounded-full p-2 transition-colors z-10"
          onClick={() => setIsOpen(false)}
          aria-label="Close lightbox"
        >
          <X size={22} />
        </button>

        {activeImage && (
          <>
            {/* Image panel — float-up scale transition */}
            <div
              className={`relative w-full max-w-6xl aspect-video transform transition-all duration-500 ease-out ${
                isOpen
                  ? "scale-100 translate-y-0 opacity-100"
                  : "scale-95 translate-y-8 opacity-0"
              }`}
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={activeImage.src}
                alt={activeImage.alt}
                fill
                className="object-contain"
                sizes="100vw"
                quality={90}
              />
            </div>

            {/* Caption */}
            <p className="absolute bottom-6 left-0 right-0 text-center text-slate-300 text-sm px-4 pointer-events-none">
              {activeImage.alt}
            </p>
          </>
        )}
      </div>
    </>
  );
}
