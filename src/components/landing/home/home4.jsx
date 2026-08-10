import React from "react";
import {
  FaLightbulb,
  FaCheck,
  FaPlay,
  FaCheckCircle,
  FaClock,
  FaHeartbeat,
} from "react-icons/fa";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom"; // client-side navigation (no refresh)

const sliderImages = [
  "/images/products/lung1.png",
  "/images/products/lung2.png",
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
];

function AnimatedCounter({ value, duration = 1600, suffix = "" }) {
  const [display, setDisplay] = React.useState(1);
  React.useEffect(() => {
    const start = performance.now();
    const from = 1;
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

const cardHover = {
  rest: { y: 0, boxShadow: "0 1px 4px rgba(0,0,0,.06)" },
  hover: { y: -4, boxShadow: "0 12px 30px rgba(0,0,0,.10)" },
};

function StatCard({ icon: Icon, label, value, suffix }) {
  return (
    <motion.div
      initial={{ y: 16, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      variants={cardHover}
      whileHover="hover"
      className="relative overflow-hidden rounded-2xl p-[2px]"
    >
      {/* Clean white background as requested */}
      <div className="relative rounded-2xl bg-white border border-orange-400 p-7 text-center">
        <motion.div
          className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-[#fe8c00] text-white shadow-md"
          initial={{ scale: 0.85, rotate: -6, opacity: 0 }}
          whileInView={{ scale: 1, rotate: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.6 }}
          // subtle continuous breathing animation for icon
          animate={{ scale: [1, 1.08, 1], rotate: [0, 2, 0] }}
          transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
        >
          <Icon className="text-xl" />
        </motion.div>

        <div className="text-3xl font-extrabold tracking-tight text-gray-900">
          <AnimatedCounter value={value} suffix={suffix} />
        </div>
        <div className="mt-1 text-sm font-medium text-gray-600">{label}</div>

        {/* sheen highlight on hover */}
        <motion.span
          aria-hidden
          className="pointer-events-none absolute -inset-1 rounded-3xl"
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
          style={{
            background:
              "linear-gradient(120deg, rgba(254,140,0,.06), rgba(255,255,255,0), rgba(254,140,0,.06))",
            filter: "blur(8px)",
          }}
        />
      </div>
    </motion.div>
  );
}

export default function Home4() {
  const [idx, setIdx] = React.useState(0);
  const [paused, setPaused] = React.useState(false);
  const touchX = React.useRef(null);
  const navigate = useNavigate();

  React.useEffect(() => {
    sliderImages.forEach((src) => {
      const img = new Image();
      img.src = src;
    });
  }, []);

  React.useEffect(() => {
    if (paused) return;
    const id = setInterval(() => {
      setIdx((p) => (p + 1) % sliderImages.length);
    }, 3500);
    return () => clearInterval(id);
  }, [paused]);

  const goTo = (i) =>
    setIdx(((i % sliderImages.length) + sliderImages.length) % sliderImages.length);
  const next = () => goTo(idx + 1);
  const prev = () => goTo(idx - 1);

  return (
    <div className="w-full bg-white py-5 md:py-4">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center pb-10">
          <h2 className="text-3xl md:text-[48px] font-semibold leading-tight">
            Node<span className="text-orange-600">X</span>
          </h2>
        </div>

        {/* Main content grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          {/* Left features */}
          <div className="md:col-span-7">
            <p className="text-gray-700 text-base md:text-lg leading-relaxed mb-6">
              Nodex is a smart, compact respiratory device that leverages AI for early lung
              disease detection and wellness tracking.
            </p>

            <ul className="space-y-4">
              {features.map((f, i) => (
                <li key={i} className="flex items-start gap-3">
                  <div className="flex items-center gap-3">
                    <FaCheck className="text-[#fe8c00] mt-1" />
                  </div>
                  <span className="text-gray-800 leading-snug">{f}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right slider */}
          <div className="md:col-span-5">
            <div
              className="relative h-74 md:h-[380px] rounded-2xl overflow-hidden shadow-xl select-none bg-white"
              onMouseEnter={() => setPaused(true)}
              onMouseLeave={() => setPaused(false)}
              onTouchStart={(e) => {
                touchX.current = e.changedTouches[0].clientX;
              }}
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

              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent" />

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
                    className={`h-2.5 w-2.5 rounded-full transition ${
                      i === idx ? "bg-white" : "bg-white/50 hover:bg-white/80"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="flex justify-center mt-6">
          <motion.button
            whileTap={{ scale: 0.98 }}
            whileHover={{ y: -2 }}
            onClick={() => navigate("/products/nodex")}
            className="inline-flex items-center gap-3 rounded-full bg-[#fe8c00] px-6 py-3 text-white font-semibold shadow-lg hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#fe8c00]"
          >
            <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-white/20">
              <FaPlay />
            </span>
            See How Attachments Work
          </motion.button>
        </div>

        {/* Stats */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          <StatCard icon={FaCheckCircle} label="Detection Accuracy" value={98} suffix="%" />
          <StatCard icon={FaClock} label="Test Duration" value={30} suffix="s" />
          <StatCard icon={FaHeartbeat} label="Health Markers" value={5} suffix="+" />
        </div>
      </div>
    </div>
  );
}
