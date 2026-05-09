"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Calendar } from "lucide-react";

interface BlogCardProps {
  title: string;
  excerpt: string;
  date: string;
  href: string;
  imageSrc: string;
  imageAlt: string;
  category?: string;
}

export default function BlogCard({
  title,
  excerpt,
  date,
  href,
  imageSrc,
  imageAlt,
  category = "Fishing Report",
}: BlogCardProps) {
  return (
    <motion.article
      whileHover={{ y: -4 }}
      transition={{ duration: 0.2 }}
      className="group rounded-[7px] overflow-hidden bg-white border border-slate-100 hover:border-[#FA4616]/20 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col"
    >
      {/* Image Container */}
      <div className="relative h-48 overflow-hidden rounded-t-[7px]">
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        {/* Category Badge */}
        <div className="absolute top-3 left-3">
          <span className="bg-[#FA4616] text-white text-[10px] font-semibold uppercase tracking-wider px-2.5 py-1 rounded-[7px]">
            {category}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col flex-1">
        {/* Date */}
        <div className="flex items-center gap-1.5 text-slate-400 text-xs mb-3">
          <Calendar size={12} />
          <span>{date}</span>
        </div>

        {/* Title */}
        <h3 className="font-[family-name:var(--font-playfair)] text-slate-900 text-lg font-semibold mb-2 group-hover:text-[#FA4616] transition-colors duration-200 leading-snug">
          {title}
        </h3>

        {/* Excerpt */}
        <p className="text-slate-600 text-sm leading-relaxed flex-1 mb-4">
          {excerpt}
        </p>

        {/* Read More */}
        <Link
          href={href}
          className="inline-flex items-center gap-1.5 text-[#FA4616] text-sm font-semibold hover:gap-3 transition-all duration-200 group/link"
        >
          Read More
          <ArrowRight
            size={14}
            className="group-hover/link:translate-x-1 transition-transform duration-200"
          />
        </Link>
      </div>
    </motion.article>
  );
}
