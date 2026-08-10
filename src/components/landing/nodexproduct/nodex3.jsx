import React from "react";
import {
  FaLightbulb,
  FaCheck,
  FaCheckCircle,
  FaClock,
  FaHeartbeat,
} from "react-icons/fa";
import { motion } from "framer-motion";

// === Config ===
const sliderImages = [
  "/images/products/lung4.png",
  "/images/products/lung5.png",
  "/images/products/lung3.png",
  "/images/products/lung4.png",
];

const features = [
  "Multi-sensor spirometry with auto-calibration",
  "Advanced exhaled breath biomarker analysis",
  "Guided breathing therapy with telemedicine",
  "Air resistance exercise module for lung strengthening",
  "Nebulizer attachment for medication delivery",
  "Audio multi-language exercise management",
  "Real-time lung health scoring system",
  "Personalized insights and recommendations",
  "Integrated app for continuous health tracking",
  "Instant 30-second test report generation",
  "Interactive dashboard with detailed analytics",
  "Built-in AI assistant for guidance and support",
];

// === Animated Counter ===
function AnimatedCounter({ value, duration = 1600, suffix = "" }) {
  const [display, setDisplay] = React.useState(0);

  React.useEffect(() => {
    const start = performance.now();
    const from = 0;
    const to = Number(value) || 0;
    let raf;
    const step = (now) => {
      const elapsed = now - start;
      const t = Math.min(1, elapsed / duration);
      const eased = 1 - Math.pow(1 - t, 3);
      const current = Math.round(from + (to - from) * eased);
      setDisplay(current);
      if (t < 1) raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [value, duration]);

  return (
    <span>
      {display}
      {suffix}
    </span>
  );
}

// === 3D Card (white background) ===
function White3DCard({ children, className = "" }) {
  const ref = React.useRef(null);

  // simple tilt interaction
  const handleMove = (e) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width; // 0..1
    const py = (e.clientY - rect.top) / rect.height; // 0..1
    const rx = (py - 0.5) * 6; // tilt range
    const ry = (0.5 - px) * 6;
    el.style.transform = `perspective(900px) rotateX(${rx}deg) rotateY(${ry}deg)`;
  };
  const handleLeave = () => {
    const el = ref.current;
    if (!el) return;
    el.style.transform = "perspective(900px) rotateX(0deg) rotateY(0deg)";
  };

  return (
    <div className={"relative " + className}>
      {/* base shadow */}
      <div className="absolute inset-x-6 -bottom-6 h-12 rounded-full bg-black/5 blur-2xl" aria-hidden />
      <motion.div
        ref={ref}
        onMouseMove={handleMove}
        onMouseLeave={handleLeave}
        initial={{ y: 8, opacity: 0, rotateX: 0, rotateY: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true, margin: "-50px" }}
        whileHover={{ scale: 1.01 }}
        transition={{ type: "spring", stiffness: 200, damping: 20 }}
        className="relative overflow-hidden rounded-2xl border border-orange-200 bg-white p-6 md:p-7 shadow-[0_10px_30px_rgba(0,0,0,0.08)] will-change-transform"
      >
        {/* subtle highlight */}
        <div className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-br from-white via-white to-white" />
        {/* glossy top sheen */}
        <div className="pointer-events-none absolute inset-x-0 top-0 h-12 bg-gradient-to-b from-white/80 to-transparent" />
        <div className="relative">
          {children}
        </div>
      </motion.div>
    </div>
  );
}

function StatCard({ icon: Icon, label, value, suffix }) {
  return (
    <White3DCard>
      <div className="relative text-center">
        <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-[#fe8c00] text-white shadow-md">
          <Icon className="text-xl" />
        </div>
        <motion.div
          initial={{ scale: 0.96, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
          className="text-3xl font-extrabold tracking-tight text-gray-900"
        >
          <AnimatedCounter value={value} suffix={suffix} />
        </motion.div>
        <div className="mt-1 text-sm font-medium text-gray-600">{label}</div>
      </div>
    </White3DCard>
  );
}

export default function Nodex3() {
  const [idx, setIdx] = React.useState(0);
  const [paused, setPaused] = React.useState(false);
  const touchX = React.useRef(null);
  const intervalRef = React.useRef(null);

  // preload images
  React.useEffect(() => {
    sliderImages.forEach((src) => {
      const img = new Image();
      img.src = src;
    });
  }, []);

  // autoplay
  React.useEffect(() => {
    if (paused) return;
    intervalRef.current = setInterval(() => {
      setIdx((p) => (p + 1) % sliderImages.length);
    }, 3500);
    return () => clearInterval(intervalRef.current);
  }, [paused]);

  const goTo = (i) => setIdx(((i % sliderImages.length) + sliderImages.length) % sliderImages.length);
  const next = () => goTo(idx + 1);
  const prev = () => goTo(idx - 1);

  return (
    <section className="relative w-full bg-white py-12 md:py-16">
      {/* soft background accents */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-24 -right-16 h-64 w-64 rounded-full bg-[#fe8c00]/10 blur-3xl" />
        <div className="absolute bottom-0 left-[-10%] h-72 w-72 rounded-full bg-[#fe8c00]/10 blur-3xl" />
        <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-[#fe8c00]/30 to-transparent" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
        {/* Heading */}
        <div className="text-center pb-8 md:pb-12">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#fe8c00]/30 bg-[#fff7ed] px-3 py-1 text-xs font-semibold text-[#c2410c]">
            <FaLightbulb /> Innovative Respiratory Care
          </div>
          <h2 className="mt-4 text-3xl md:text-5xl font-semibold leading-tight tracking-tight">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#fe8c00] to-[#fe8c00]">Node</span>X
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-gray-700 text-base md:text-lg leading-relaxed">
            Nodex is a smart, compact respiratory device that leverages AI for early lung
            disease detection and wellness tracking.
          </p>
        </div>

        {/* Main grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          {/* Features (white 3D card) */}
          <div className="md:col-span-7">
            <White3DCard>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {features.map((f, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="mt-1 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#fe8c00] text-white">
                      <FaCheck className="text-[11px]" />
                    </span>
                    <span className="text-gray-800 leading-snug">{f}</span>
                  </li>
                ))}
              </ul>
            </White3DCard>
          </div>

          {/* Slider (clean white, subtle 3D) */}
          <div className="md:col-span-5">
            <White3DCard className="h-72 md:h-[380px]">
              <div
                className="relative h-72 md:h-[340px] rounded-xl overflow-hidden select-none"
                onMouseEnter={() => setPaused(true)}
                onMouseLeave={() => setPaused(false)}
                onTouchStart={(e) => { touchX.current = e.changedTouches[0].clientX; }}
                onTouchEnd={(e) => {
                  const endX = e.changedTouches[0].clientX;
                  const delta = endX - (touchX.current ?? endX);
                  if (Math.abs(delta) > 40) delta < 0 ? next() : prev();
                  touchX.current = null;
                }}
              >
                <motion.img
                  key={sliderImages[idx]}
                  src={sliderImages[idx]}
                  alt={`Nodex image ${idx + 1}`}
                  className="absolute inset-0 h-full w-full object-contain bg-white"
                  initial={{ opacity: 0.2, scale: 1.02 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                  loading="eager"
                  draggable={false}
                />

                {/* controls */}
                <button
                  aria-label="Previous"
                  onClick={prev}
                  className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full bg-black/40 text-white px-3 py-2 backdrop-blur hover:bg-black/55 focus:outline-none focus:ring-2 focus:ring-white"
                >
                  ‹
                </button>
                <button
                  aria-label="Next"
                  onClick={next}
                  className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-black/40 text-white px-3 py-2 backdrop-blur hover:bg-black/55 focus:outline-none focus:ring-2 focus:ring-white"
                >
                  ›
                </button>

                <div className="absolute bottom-2 left-0 right-0 flex items-center justify-center gap-2">
                  {sliderImages.map((_, i) => (
                    <button
                      key={i}
                      aria-label={`Go to slide ${i + 1}`}
                      onClick={() => goTo(i)}
                      className={`h-2.5 w-2.5 rounded-full ring-1 ring-black/10 transition ${
                        i === idx ? "bg-black/70" : "bg-black/30 hover:bg-black/50"
                      }`}
                    />
                  ))}
                </div>
              </div>
            </White3DCard>
          </div>
        </div>

        {/* Info band (white, buttons removed) */}
        <div className="mt-10">
          <White3DCard>
            <div className="relative">
              <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-1">Advanced Sensor Technology</h3>
              <p className="text-gray-700 leading-relaxed max-w-4xl">
                Nodex incorporates state-of-the-art sensors that maintain continuous auto-calibration,
                ensuring consistently accurate readings in any environment. Our proprietary algorithms
                achieve an industry-leading 98% detection accuracy— the highest available in any respiratory
                monitoring device worldwide. This precision enables reliable early detection of potential
                respiratory issues before they become serious health concerns.
              </p>
            </div>
          </White3DCard>
        </div>

        {/* Stats (white 3D cards with animated values) */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          <motion.div
            initial={{ y: 0 }}
            animate={{ y: [0, -2, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          >
            <StatCard icon={FaCheckCircle} label="Detection Accuracy" value={98} suffix="%" />
          </motion.div>
          <motion.div
            initial={{ y: 0 }}
            animate={{ y: [0, -2, 0] }}
            transition={{ duration: 4.2, repeat: Infinity, ease: "easeInOut", delay: 0.2 }}
          >
            <StatCard icon={FaClock} label="Test Duration" value={30} suffix="s" />
          </motion.div>
          <motion.div
            initial={{ y: 0 }}
            animate={{ y: [0, -2, 0] }}
            transition={{ duration: 4.4, repeat: Infinity, ease: "easeInOut", delay: 0.4 }}
          >
            <StatCard icon={FaHeartbeat} label="Health Markers" value={5} suffix="+" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}