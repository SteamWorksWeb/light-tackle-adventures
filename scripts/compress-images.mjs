/**
 * compress-images.mjs
 * Runs once to compress the heavy source images in /public/images.
 * Safe to re-run — it backs up originals as *.orig before overwriting.
 */
import sharp from "sharp";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const IMG_DIR = path.join(__dirname, "..", "public", "images");

const targets = [
  // Hero images — the LCP elements, most critical
  { file: "hero-red.jpg",              quality: 78, width: 2400 },
  { file: "tarpon-hero-mobile.jpeg",   quality: 75, width: 900  },

  // Charter grid cards
  { file: "tarpon7.jpeg",              quality: 75, width: 1200 },
  { file: "hero-red.jpg",              quality: 78, width: 2400 }, // already listed — deduped below
  { file: "scallop1.jpeg",             quality: 75, width: 1200 },
  { file: "fly2.jpeg",                 quality: 75, width: 1200 },

  // CTA band image
  { file: "scallop2.jpeg",             quality: 75, width: 1200 },

  // About section portrait
  { file: "jim2.jpg",                  quality: 78, width: 900  },

  // Blog / report cards
  { file: "tarpon-5.jpeg",             quality: 75, width: 900  },
  { file: "snook.jpeg",                quality: 75, width: 900  },

  // line-break.png — large decorative PNG → tiny WebP
  { file: "line-break.png",            quality: 70, width: 1600, convertToWebp: true },

  // Background texture
  { file: "slideRedBoat-1024x449.jpg.jpeg", quality: 65, width: 1024 },
];

// Deduplicate by filename
const seen = new Set();
const unique = targets.filter(t => {
  if (seen.has(t.file)) return false;
  seen.add(t.file);
  return true;
});

let totalSaved = 0;

for (const { file, quality, width, convertToWebp } of unique) {
  const src = path.join(IMG_DIR, file);
  if (!fs.existsSync(src)) {
    console.log(`  SKIP  ${file} (not found)`);
    continue;
  }

  const backup = src + ".orig";
  if (!fs.existsSync(backup)) {
    fs.copyFileSync(src, backup);
  }

  const beforeBytes = fs.statSync(src).size;

  const destFile = convertToWebp
    ? path.join(IMG_DIR, file.replace(/\.(png|jpg|jpeg)$/, ".webp"))
    : src;

  try {
    const pipeline = sharp(src).resize({ width, withoutEnlargement: true });

    if (convertToWebp || destFile.endsWith(".webp")) {
      await pipeline.webp({ quality }).toFile(destFile + ".tmp");
    } else if (destFile.endsWith(".png")) {
      await pipeline.png({ quality }).toFile(destFile + ".tmp");
    } else {
      await pipeline.jpeg({ quality, mozjpeg: true }).toFile(destFile + ".tmp");
    }

    // Atomic swap
    if (convertToWebp && destFile !== src) {
      fs.renameSync(destFile + ".tmp", destFile);
    } else {
      fs.renameSync(destFile + ".tmp", destFile);
    }

    const afterBytes = fs.statSync(destFile).size;
    const saved = beforeBytes - afterBytes;
    totalSaved += Math.max(saved, 0);
    console.log(
      `  ✓  ${file.padEnd(45)} ${kb(beforeBytes)} → ${kb(afterBytes)}  (saved ${kb(saved)})`
    );
  } catch (err) {
    console.error(`  ✗  ${file}: ${err.message}`);
  }
}

console.log(`\nTotal saved: ${kb(totalSaved)}\n`);

function kb(bytes) {
  return (bytes / 1024).toFixed(1).padStart(7) + " KB";
}
