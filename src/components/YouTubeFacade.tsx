"use client";

import { useState } from "react";
import Image from "next/image";

interface YouTubeFacadeProps {
  videoId: string;
  startAt?: number;
}

export default function YouTubeFacade({ videoId, startAt = 0 }: YouTubeFacadeProps) {
  const [active, setActive] = useState(false);

  if (active) {
    return (
      <iframe
        className="absolute top-0 left-0 w-full h-full"
        src={`https://www.youtube.com/embed/${videoId}?start=${startAt}&autoplay=1`}
        title="Capt. Jim Lemke Fishing Charter Video"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      />
    );
  }

  return (
    <button
      onClick={() => setActive(true)}
      aria-label="Play video"
      className="absolute inset-0 w-full h-full group"
    >
      {/* Local verified thumbnail — no external network request */}
      <Image
        src="/images/vid1.jpg"
        alt="Nature Coast fishing charter video"
        fill
        className="object-cover"
        sizes="(max-width: 768px) 100vw, 900px"
      />
      {/* Dark scrim */}
      <span className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors" />
      {/* Play button */}
      <span className="absolute inset-0 flex items-center justify-center">
        <span className="w-16 h-16 rounded-full bg-[#FA4616] flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform duration-200">
          <svg viewBox="0 0 24 24" fill="white" className="w-7 h-7 translate-x-0.5">
            <path d="M8 5v14l11-7z" />
          </svg>
        </span>
      </span>
    </button>
  );
}
