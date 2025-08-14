import { useState, useMemo } from "react";

// IMPORTANT: Remplace cette chaîne par le vrai base64 (très long) pour afficher l'image
const INLINE_IMG =
  "data:image/webp;base64,UklGRhAAAABXRUJQVlA4WAoAAAAQAAAAMwAAMwAAQUxQSC0AAAABYktHRAC7AADIAAAAABgAAAAAAAAAAAAAAPYAAAD+/////wAAAD+/////wAAAAAAAAAAAAAA..."; // ← À remplacer

const isValidDataUrl = (s) =>
  typeof s === "string" &&
  s.startsWith("data:image/") &&
  s.includes("base64,") &&
  s.length > 2000;

const Icon = {
  Check: (props) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={props.className}><path d="M20 6 9 17l-5-5"/></svg>
  ),
  Cpu: (props) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={props.className}><rect x="4" y="4" width="16" height="16" rx="2"/><rect x="9" y="9" width="6" height="6"/><path d="M9 1v3M15 1v3M9 20v3M15 20v3M1 9h3M1 15h3M20 9h3M20 15h3"/></svg>
  ),
  Gift: (props) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={props.className}><rect x="3" y="8" width="18" height="13" rx="2"/><path d="M12 8v13M3 12h18M7 8s-2-1.5-2-3 1.5-2 3-2 3 1.5 3 3v2M17 8s2-1.5 2-3-1.5-2-3-2-3 1.5-3 3v2"/></svg>
  ),
  Shield: (props) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={props.className}><path d="M12 22s8-3 8-10V5l-8-3-8 3v7c0 7 8 10 8 10z"/></svg>
  ),
  Sparkles: (props) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={props.className}>
      <path d="M12 3l1.5 4.5L18 9l-4.5 1.5L12 15l-1.5-4.5L6 9l4.5-1.5L12 3z"/>
      <path d="M19 3l.8 2.2L22 6l-2.2.8L19 9l-.8-2.2L16 6l2.2-.8L19 3zM4 14l.6 1.6L6 16l-1.4.4L4 18l-.6-1.6L2 16l1.4-.4L4 14z"/>
    </svg>
  ),
};

const products = [
  {
    id: "S",
    name: "NeonCube S",
    tagline: "Silent power in a slender frame",
    dims: "7 × 20 × 40 cm",
    price: "₱79,990",
    specs: [
      "Up to 8‑core CPU / compact GPU",
      "16 GB unified memory",
      "512 GB NVMe SSD",
      "Whisper cooling, 0 side vents",
    ],
    cta: "Pre‑order S",
  },
  {
    id: "M",
    name: "NeonCube M",
    tagline: "Creator class, still gallery‑ready",
    dims: "9 × 24 × 45 cm",
    price: "₱109,990",
    specs: [
      "Up to 12‑core CPU / mid‑tier GPU",
      "32 GB unified memory",
      "1 TB NVMe SSD",
      "Blue‑edge luminous panels",
    ],
    featured: true,
    cta: "Pre‑order M",
  },
  {
    id: "X",
    name: "NeonCube X",
    tagline: "Flagship performance, art‑piece design",
    dims: "11 × 28 × 50 cm",
    price: "₱169,990",
    specs: [
      "Up to 16‑core CPU / high‑end GPU",
      "64 GB unified memory",
      "2 TB NVMe SSD",
      "Studio‑grade PSU & acoustics",
    ],
    cta: "Pre‑order X",
  },
];

export default function Home() {
  const [selected, setSelected] = useState(products[1]);
  const [heroError, setHeroError] = useState(false);

  const HERO_IMG = INLINE_IMG;
  const GALLERY_IMG_1 = INLINE_IMG;
  const GALLERY_IMG_2 = INLINE_IMG;

  const imgValid = useMemo(() => isValidDataUrl(INLINE_IMG), []);

  return (
    <div className="min-h-screen w-full bg-[#0a0a0c] text-white selection:bg-blue-500/30">
      {!imgValid && (
        <div className="bg-red-600/20 text-red-300 px-4 py-3 text-sm text-center">
          Image data URL is missing or too short. Paste the full string into <code>INLINE_IMG</code> to render the hero & gallery.
        </div>
      )}

      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute -top-40 left-1/2 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-blue-500/20 blur-[140px]" />
        <div className="absolute bottom-0 right-10 h-[400px] w-[400px] rounded-full bg-sky-400/20 blur-[120px]" />
      </div>

      <header className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-black/30 border-b border-white/10">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4">
          <div className="flex items-center gap-3">
            <div className="h-6 w-6 rounded-full bg-gradient-to-br from-blue-400 to-cyan-300 shadow-[0_0_30px_theme(colors.blue.500)]" />
            <span className="font-semibold tracking-wide">NEONCUBE</span>
          </div>
          <nav className="hidden gap-8 md:flex text-sm text-white/80">
            <a href="#design" className="hover:text-white">Design</a>
            <a href="#models" className="hover:text-white">Models</a>
            <a href="#specs" className="hover:text-white">Specs</a>
            <a href="#faq" className="hover:text-white">FAQ</a>
          </nav>
          <a href="#models" className="rounded-full bg-white text-black px-4 py-2 text-sm font-medium hover:bg-white/90">Pre‑order</a>
        </div>
      </header>

      {/* ... reste du code identique ... */}

      {/* Footer */}
      <footer className="border-t border-white/10 py-10 text-center text-white/50">
        <p className="text-sm">©️ {new Date().getFullYear()} NEONCUBE — Crafted in small batches.</p>
      </footer>
    </div>
  );
}
