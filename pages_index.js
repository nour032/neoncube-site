import { useState, useMemo } from "react";

// Remplace ce base64 par un vrai pour afficher l'image
const INLINE_IMG =
  "data:image/webp;base64,UklGRhAAAABXRUJQVlA4WAoAAAAQAAAAMwAAMwAAQUxQSC0AAAABYktHRAC7AADIAAAAABgAAAAAAAAAAAAAAPYAAAD+/////wAAAD+/////wAAAAAAAAAAAAAA..."; // À remplacer par la vraie chaîne

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

      {/* Glow backdrop */}
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute -top-40 left-1/2 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-blue-500/20 blur-[140px]" />
        <div className="absolute bottom-0 right-10 h-[400px] w-[400px] rounded-full bg-sky-400/20 blur-[120px]" />
      </div>

      {/* Nav */}
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

      {/* Hero */}
      <section className="relative mx-auto max-w-7xl px-5 pb-16 pt-14 md:pt-24" id="design">
        <div className="grid items-center gap-10 md:grid-cols-2">
          <div>
            <h1 className="text-4xl md:text-6xl font-semibold leading-[1.05] tracking-tight">
              Chrome. Light. <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">Silence.</span>
            </h1>
            <p className="mt-5 text-white/70 md:text-lg">
              A luxury desktop that looks like a gallery piece. No side vents. Seamless chrome panels with soft blue neon seams. A single centered foot makes it appear to float.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a href="#models" className="rounded-full bg-white text-black px-6 py-3 font-medium hover:bg-white/90">Choose your NeonCube</a>
              <a href="#gallery" className="rounded-full border border-white/20 px-6 py-3 font-medium text-white/90 hover:border-white/40">See the details</a>
            </div>
            <div className="mt-6 flex items-center gap-3 text-sm text-white/60">
              <Icon.Shield className="h-4 w-4"/>
              2‑year premium warranty • White‑glove delivery in Metro Manila
            </div>
          </div>
          <div className="relative">
            <div className="absolute -inset-6 rounded-3xl bg-gradient-to-tr from-blue-500/20 to-cyan-400/20 blur-2xl" />
            {imgValid ? (
              <img src={HERO_IMG} alt="NeonCube chrome case with blue neon seams" className="relative z-10 w-full rounded-3xl shadow-2xl shadow-blue-900/30" onError={() => setHeroError(true)} />
            ) : (
              <div className="relative z-10 h-80 rounded-3xl bg-white/5" />
            )}
          </div>
        </div>
      </section>

      {/* Models / Pricing */}
      <section id="models" className="mx-auto max-w-7xl px-5 py-16">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl md:text-5xl font-semibold">Three sizes. One icon.</h2>
          <p className="mt-4 text-white/70">Pick the silhouette and performance that fits your space. Every model keeps the floating foot, sealed sides and luminous seams.</p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {products.map((p) => (
            <div key={p.id} className={`rounded-2xl border ${p.featured ? "border-blue-400/50 bg-white/[0.02]" : "border-white/10 bg-white/[0.01]"} p-6 backdrop-blur-sm shadow-[0_0_80px_-20px_rgba(56,189,248,0.25)] transition-transform hover:-translate-y-1`}>
              <div className="flex items-center gap-2 text-white/80">
                <Icon.Sparkles className="h-4 w-4 text-cyan-300" />
                <span className="text-sm">{p.dims}</span>
              </div>
              <h3 className="mt-2 text-2xl font-semibold">{p.name}</h3>
              <p className="text-white/70">{p.tagline}</p>
              <div className="mt-4 h-40 rounded-xl bg-gradient-to-tr from-white/5 to-white/0 p-[1px]">
                <div className="h-full rounded-[11px] bg-[radial-gradient(1200px_380px_at_50%_-40%,rgba(59,130,246,.25),transparent)]" />
              </div>
              <ul className="mt-4 space-y-2 text-sm">
                {p.specs.map((s, i) => (
                  <li className="flex items-start gap-2" key={i}>
                    <Icon.Check className="mt-0.5 h-4 w-4 text-cyan-300"/>
                    <span className="text-white/80">{s}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-6 flex items-baseline gap-2">
                <span className="text-2xl font-semibold">{p.price}</span>
                <span className="text-white/50 text-sm">VAT‑inclusive</span>
              </div>
              <button onClick={() => setSelected(p)} className="mt-5 w-full rounded-xl bg-white px-5 py-3 font-medium text-black hover:bg-white/90">{p.cta}</button>
            </div>
          ))}
        </div>

        {/* Selected summary */}
        <div className="mx-auto mt-10 max-w-3xl rounded-2xl border border-white/10 bg-white/5 p-6">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div>
              <p className="text-sm text-white/60">Selected model</p>
              <p className="text-xl font-semibold">{selected.name} — {selected.dims}</p>
            </div>
            <a href="#checkout" className="rounded-full bg-gradient-to-r from-blue-400 to-cyan-300 px-6 py-3 font-semibold text-black">Continue</a>
          </div>
        </div>
      </section>

      {/* Gallery / Story */}
      <section id="gallery" className="mx-auto max-w-7xl px-5 py-16">
        <div className="grid gap-6 md:grid-cols-2">
          {imgValid ? (
            <img src={GALLERY_IMG_1} alt="Chromed panels with rounded corners and neon seams" className="h-full w-full rounded-3xl object-cover" />
          ) : (
            <div className="h-72 w-full rounded-3xl bg-white/5" />
          )}
          <div className="flex flex-col justify-center">
            <h3 className="text-2xl md:text-4xl font-semibold">Crafted like jewelry. Built like a workstation.</h3>
            <p className="mt-4 text-white/70">
              Each surface is a polished chrome panel with softened corners. Between panels, a shadow‑thin gap glows in deep electric blue — as if the computer were breathing light.
              The sides remain pristine: no fan openings, no clutter. Cables exit invisibly through the center foot.
            </p>
            <div className="mt-6 flex items-center gap-3 text-white/80">
              <Icon.Cpu className="h-5 w-5 text-cyan-300"/>
              <span>Designed for silence: thermals tuned for top‑down airflow without side vents.</span>
            </div>
            <div className="mt-3 flex items-center gap-3 text-white/80">
              <Icon.Gift className="h-5 w-5 text-cyan-300"/>
              <span>The perfect luxury gift — a statement piece spouses actually want on display.</span>
            </div>
          </div>
        </div>
        {imgValid ? (
          <img src={GALLERY_IMG_2} alt="Detail of blue neon seam and floating aluminum foot" className="mt-6 w-full rounded-3xl object-cover" />
        ) : (
          <div className="mt-6 h-72 w-full rounded-3xl bg-white/5" />
        )}
      </section>

      {/* Specs callout */}
      <section id="specs" className="mx-auto max-w-7xl px-5 py-16">
        <div className="grid gap-8 rounded-3xl border border-white/10 bg-white/[0.03] p-8 md:grid-cols-3">
          <div>
            <h4 className="text-xl font-semibold">Materials</h4>
            <ul className="mt-3 space-y-2 text-white/70 text-sm">
              <li>Polished aluminum or stainless panels</li>
              <li>Invisible internal frame • single centered aluminum foot</li>
              <li>Blue edge lighting • anti‑fingerprint nano‑coat</li>
            </ul>
          </div>
          <div>
            <h4 className="text-xl font-semibold">Thermals</h4>
            <ul className="mt-3 space-y-2 text-white/70 text-sm">
              <li>No side openings • tuned intake/exhaust path</li>
              <li>Studio‑quiet fan curve • dustless underside intake</li>
              <li>PSU vibration isolation</li>
            </ul>
          </div>
          <div>
            <h4 className="text-xl font-semibold">Connectivity</h4>
            <ul className="mt-3 space-y-2 text-white/70 text-sm">
              <li>Rear I/O routed through flexible central cable bundle</li>
              <li>Foot port dock for tidy desks</li>
              <li>Wi‑Fi 6E • Bluetooth 5.x</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Social proof */}
      <section className="mx-auto max-w-7xl px-5 pb-20">
        <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-white/[0.04] to-white/[0.02] p-8 text-center">
          <p className="text-xl md:text-2xl font-medium">“It looks like a sculpture and sounds like a whisper. Finally, a PC my wife actually wants on the shelf.”</p>
          <p className="mt-2 text-white/60">— Early Founder Edition Owner</p>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="mx-auto max-w-5xl px-5 pb-24">
        <h3 className="text-3xl md:text-4xl font-semibold text-center">Questions, answered</h3>
        <div className="mt-8 divide-y divide-white/10 rounded-2xl border border-white/10">
          {[
            {q:"Does it overheat without side vents?", a:"No. The chassis uses a tuned front‑to‑back path and a quiet bottom intake. Components are selected and profiled per model to maintain sustained performance within acoustic targets."},
            {q:"When will my pre‑order ship?", a:"Founder Edition batches ship in 6–8 weeks. You’ll receive a concierge chat the week before delivery for setup preferences."},
            {q:"Can I customize the blue lighting?", a:"Yes. Intensity and color are software‑controllable. Blue is the default signature look."},
          ].map((item, idx) => (
            <details key={idx} className="group p-6 open:bg-white/[0.02]">
              <summary className="flex cursor-pointer list-none items-center justify-between text-lg font-medium">
                {item.q}
                <span className="text-white/50 group-open:rotate-45 transition">+</span>
              </summary>
              <p className="mt-3 text-white/70">{item.a}</p>
            </details>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 py-10 text-center text-white/50">
        <p className="text-sm">©️ {new Date().getFullYear()} NEONCUBE — Crafted in small batches.</p>
      </footer>
    </div>
  );
}