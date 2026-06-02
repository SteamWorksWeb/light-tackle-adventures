/**
 * LineDivider — inline SVG replacement for the 208 KB line-break.png.
 * Zero network requests, renders instantly, scales perfectly at any DPI.
 */
export default function LineDivider({ className = "" }: { className?: string }) {
  return (
    <div className={`w-full flex justify-center ${className}`} aria-hidden="true">
      <svg
        viewBox="0 0 800 60"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full max-w-3xl h-auto opacity-40"
        preserveAspectRatio="xMidYMid meet"
      >
        {/* Main fly line — gentle S-curve mimicking a cast */}
        <path
          d="M 20 35 C 120 10, 250 55, 400 30 S 640 8, 780 28"
          fill="none"
          stroke="#4B5563"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        {/* Subtle shadow line for depth */}
        <path
          d="M 20 37 C 120 12, 250 57, 400 32 S 640 10, 780 30"
          fill="none"
          stroke="#9CA3AF"
          strokeWidth="0.5"
          strokeLinecap="round"
          opacity="0.4"
        />
        {/* Fly at the tip */}
        <circle cx="780" cy="28" r="2.5" fill="#FA4616" opacity="0.7" />
        <line x1="783" y1="25" x2="788" y2="20" stroke="#FA4616" strokeWidth="1" opacity="0.5" />
        <line x1="783" y1="28" x2="790" y2="26" stroke="#FA4616" strokeWidth="1" opacity="0.5" />
      </svg>
    </div>
  );
}
