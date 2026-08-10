import React, { useEffect, useMemo, useRef, useState } from "react";
import { ChevronLeft, ChevronRight, Pause, Play } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

/**
 * Nodex5 Laptop Showcase – Enhanced
 * - Bigger screen + frame, closer to a real laptop.
 * - Thicker base, hinge, subtle reflection/gloss, and desk shadow.
 * - Auto-plays (hover to pause), arrows + dots, accessible labels.
 * - Tailwind, Framer Motion, Lucide per guidelines.
 */
export default function Nodex5LaptopShowcase() {
  const images = useMemo(
    () => [
      "/images/products/nodexsoftware1.png",
      "/images/products/nodexsoftware2.png",
      "/images/products/nodexsoftware3.png",
    ],
    []
  );

  const [index, setIndex] = useState(0);
  const [playing, setPlaying] = useState(true);
  const timerRef = useRef(null);
  const containerRef = useRef(null);

  // Preload images for smoother transitions
  useEffect(() => {
    images.forEach((src) => {
      const img = new Image();
      img.src = src;
    });
  }, [images]);

  // Autoplay logic
  useEffect(() => {
    if (!playing) return;
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setIndex((i) => (i + 1) % images.length);
    }, 4000);
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [playing, images.length]);

  // Pause on hover
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const onEnter = () => setPlaying(false);
    const onLeave = () => setPlaying(true);
    el.addEventListener("mouseenter", onEnter);
    el.addEventListener("mouseleave", onLeave);
    return () => {
      el.removeEventListener("mouseenter", onEnter);
      el.removeEventListener("mouseleave", onLeave);
    };
  }, []);

  const prev = () => setIndex((i) => (i - 1 + images.length) % images.length);
  const next = () => setIndex((i) => (i + 1) % images.length);

  return (
    <section className="w-full bg-white">
      <div className="mx-auto max-w-7xl px-4 py-14 md:py-20">
        {/* Heading */}
        <div className="text-center pb-10 sm:pb-12">
          <h2 className="text-3xl md:text-[44px] lg:text-[48px] font-semibold leading-tight tracking-tight">
            Physician's Web-
            <span className="inline-block bg-gradient-to-r from-orange-500 via-amber-500 to-orange-600 bg-clip-text text-transparent">
              Dashboard
            </span>
          </h2>
        </div>

        <div className="grid gap-8 md:grid-cols-[1.1fr_1fr] md:gap-12 items-start">
          {/* Left content */}
          <div className="space-y-5">
            <h2 className="text-3xl font-bold leading-tight tracking-tight sm:text-4xl">
              Real‑time reports on laptop view
            </h2>
            <p className="text-slate-600 max-w-prose">
              Healthcare professionals can access comprehensive technical reports via our dedicated PC application, transforming Nodex into a powerful telemedicine platform.
            </p>
            <ul className="grid gap-3 text-slate-700">
              {[
                "View shared patient data in real-time",
                "Access detailed clinical measurements",
                "Monitor multiple patients through a single dashboard",
                "Generate reports for medical records",
                "Compare data against clinical benchmarks",
                "Set personalized treatment plans",
                "Receive alerts for abnormal readings",
                "Cloud sync for secure data access",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-1 h-5 w-5 shrink-0 rounded-full bg-orange-100 ring-1 ring-orange-200 flex items-center justify-center">
                    <span className="h-2 w-2 rounded-full bg-orange-600" />
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Laptop Showcase */}
          <div ref={containerRef} className="relative mx-auto w-full">
            {/* Laptop frame */}
            <div className="relative mx-auto w-full max-w-[1100px] md:max-w-[980px] lg:max-w-[1100px] select-none">
              {/* Outer shell with subtle 3D perspective */}
              <div className="relative mx-auto aspect-[16/10] w-full rounded-[22px] bg-gradient-to-br from-slate-900 to-slate-800 shadow-[0_40px_80px_-20px_rgba(2,6,23,0.45)] ring-1 ring-black/10 overflow-hidden [perspective:1200px]">
                {/* Bezel edge */}
                <div className="absolute inset-0 ring-1 ring-white/10 rounded-[22px]" />
                {/* Inner bevel */}
                <div className="absolute inset-[8px] rounded-[16px] bg-slate-950/70 shadow-inner ring-1 ring-black/40" />

                {/* Camera + sensors */}
                <div className="absolute left-1/2 top-2 h-1.5 w-20 -translate-x-1/2 rounded-full bg-black/60 shadow-inner" />
                <div className="absolute left-1/2 top-3 -translate-x-1/2 flex gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-sky-400/70 ring-1 ring-sky-200/30" />
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400/70 ring-1 ring-emerald-200/30" />
                </div>

                {/* Controls */}
                <div className="pointer-events-none absolute inset-x-0 top-0 z-20 flex justify-between p-3">
                  <div className="pointer-events-auto inline-flex items-center gap-2 rounded-full bg-black/35 px-2.5 py-1.5 backdrop-blur-md ring-1 ring-white/15 shadow-md">
                    <button
                      aria-label="Previous"
                      onClick={prev}
                      className="rounded-full p-1.5 ring-1 ring-white/20 hover:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/40"
                    >
                      <ChevronLeft className="size-4 text-white" />
                    </button>
                    <button
                      aria-label="Next"
                      onClick={next}
                      className="rounded-full p-1.5 ring-1 ring-white/20 hover:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/40"
                    >
                      <ChevronRight className="size-4 text-white" />
                    </button>
                    <button
                      aria-label={playing ? "Pause" : "Play"}
                      onClick={() => setPlaying((p) => !p)}
                      className="rounded-full p-1.5 ring-1 ring-white/20 hover:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/40"
                    >
                      {playing ? <Pause className="size-4 text-white" /> : <Play className="size-4 text-white" />}
                    </button>
                  </div>
                </div>

                {/* Slides (screen) */}
                <div className="absolute inset-[12px] rounded-[12px] overflow-hidden bg-black/90">
                  <AnimatePresence mode="wait">
                    <motion.img
                      key={images[index]}
                      src={images[index]}
                      alt={`Nodex software screen ${index + 1}`}
                      initial={{ opacity: 0, scale: 0.985 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 1.01 }}
                      transition={{ duration: 0.45, ease: "easeOut" }}
                      className="h-full w-full object-cover"
                      draggable={false}
                    />
                  </AnimatePresence>

                  {/* Subtle screen reflection */}
                  <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(115deg,rgba(255,255,255,0.10)_0%,rgba(255,255,255,0.04)_18%,rgba(255,255,255,0)_38%)] mix-blend-screen" />
                </div>
              </div>

              {/* Hinge */}
              <div className="relative mx-auto -mt-1 h-3 w-[98%] rounded-b-[22px] bg-gradient-to-b from-slate-500 to-slate-400 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.35),0_6px_14px_rgba(2,6,23,0.35)] ring-1 ring-black/10">
                <div className="absolute left-1/2 top-0 h-1.5 w-28 -translate-x-1/2 rounded-b-md bg-slate-600/70 shadow-inner" />
              </div>

              {/* Base / keyboard deck */}
              <div className="relative mx-auto mt-2 h-8 w-[96%] rounded-b-[26px] bg-gradient-to-b from-slate-300 to-slate-200 shadow-[0_18px_40px_-12px_rgba(2,6,23,0.45)] ring-1 ring-black/10">
                {/* Keyboard pattern */}
                <div className="absolute inset-x-6 top-1.5 h-3.5 rounded-md bg-[repeating-linear-gradient(90deg,rgba(30,41,59,0.45)_0_6px,transparent_6px_14px)]" />
                {/* Trackpad */}
                <div className="absolute left-1/2 bottom-1.5 h-4 w-28 -translate-x-1/2 rounded-md bg-slate-400/60 ring-1 ring-white/30" />
              </div>

              {/* Desk shadow / feet */}
              <div className="pointer-events-none mx-auto mt-3 h-6 w-[88%] rounded-[999px] bg-gradient-to-r from-transparent via-slate-900/15 to-transparent blur-md" />
            </div>

            {/* Dots */}
            <div className="mt-5 flex items-center justify-center gap-2.5">
              {images.map((_, i) => (
                <button
                  key={i}
                  aria-label={`Go to slide ${i + 1}`}
                  onClick={() => setIndex(i)}
                  className={[
                    "h-2.5 rounded-full transition-all ring-1 ring-black/10",
                    index === i ? "bg-slate-900 w-6" : "bg-slate-400 w-2.5 hover:bg-slate-500",
                  ].join(" ")}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
