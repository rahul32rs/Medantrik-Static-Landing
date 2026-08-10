import React from "react";
import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";

const OxysenseHero = () => {
  return (
    <section
      className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-white text-neutral-900"
      aria-label="Oxysense product hero"
    >
      {/* Decorative grid */}
      <div
        aria-hidden
        className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,0,0,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.05)_1px,transparent_1px)] bg-[size:28px_28px]"
      />

      {/* Soft radial glow */}
      <div aria-hidden className="pointer-events-none absolute inset-0 flex items-center justify-center">
        <div className="h-[60vmin] w-[60vmin] rounded-full bg-orange-400/15 blur-3xl" />
      </div>

      {/* Floating bubbles */}
      <motion.div
        aria-hidden
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="pointer-events-none absolute inset-0"
      >
        <motion.span
          className="absolute left-[10%] top-[20%] h-6 w-6 rounded-full bg-orange-300/40 blur-[1px]"
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.span
          className="absolute right-[12%] top-[28%] h-8 w-8 rounded-full bg-orange-400/40 blur-[1px]"
          animate={{ y: [0, -30, 0] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.span
          className="absolute left-[18%] bottom-[18%] h-10 w-10 rounded-full bg-orange-500/40 blur-[1px]"
          animate={{ y: [0, -25, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
      </motion.div>

      {/* SIDE IMAGES */}
      <motion.img
        src="/images/products/oxysense/oxysensefront.png"
        alt="Oxysense device (front)"
        aria-hidden
        className="pointer-events-none hidden md:block absolute left-4 lg:left-8 top-1/2 -translate-y-1/2 w-40 md:w-56 lg:w-64 xl:w-82 drop-shadow-2xl"
        initial={{ opacity: 0, x: -40, rotate: -8 }}
        animate={{
          opacity: 1,
          x: 0,
          rotate: [-8, -2, -8],
          y: [0, -6, 0],
        }}
        transition={{
          opacity: { duration: 0.6, delay: 0.2 },
          rotate: { duration: 4, repeat: Infinity, ease: "easeInOut" },
          y: { duration: 5, repeat: Infinity, ease: "easeInOut" },
        }}
      />

      <motion.img
        src="/images/products/oxysense/oxysensefront.png"
        alt="Oxysense device (front)"
        aria-hidden
        className="pointer-events-none hidden md:block absolute right-4 lg:right-8 top-1/2 -translate-y-1/2 w-40 md:w-56 lg:w-64 xl:w-82 drop-shadow-2xl"
        initial={{ opacity: 0, x: 40, rotate: 8 }}
        animate={{
          opacity: 1,
          x: 0,
          rotate: [8, 2, 8],
          y: [0, -6, 0],
        }}
        transition={{
          opacity: { duration: 0.6, delay: 0.25 },
          rotate: { duration: 4.2, repeat: Infinity, ease: "easeInOut" },
          y: { duration: 5.2, repeat: Infinity, ease: "easeInOut" },
        }}
      />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-6xl px-6 text-center">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-4 inline-block rounded-full border border-black/10 bg-black/5 px-4 py-1 text-[11px] tracking-[0.2em] text-neutral-600 backdrop-blur-sm"
        >
          MEASURE • VERIFY • TRUST
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.15 }}
          className="mx-auto max-w-5xl text-5xl font-black leading-[0.95] tracking-tight md:text-7xl lg:text-8xl"
        >
          <span className="block">Meet</span>
          <span className="relative inline-block">
            <span
              className="absolute -inset-1 -skew-x-6 rounded-2xl bg-gradient-to-r from-orange-400/25 via-orange-500/25 to-orange-600/25 blur-md"
              aria-hidden
            />
            <span className="relative bg-gradient-to-r from-orange-500 via-orange-600 to-orange-700 bg-clip-text text-transparent">
              OXYSENSE
            </span>
          </span>
          {/* <span className="block text-neutral-600">device</span> */}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mx-auto mt-4 max-w-2xl text-base text-neutral-600 md:text-lg"
        >
          {/* Clean design. Precise readings. Built to breathe new life into your workflow. */}
        </motion.p>
      </div>

      {/* Scroll hint */}
      <a
        href="#oxysensedetails"
        aria-label="Scroll to details"
        className="absolute bottom-6 left-1/2 -translate-x-1/2"
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, y: [0, 10, 0] }}
          transition={{ duration: 1.4, repeat: Infinity, ease: "easeInOut" }}
          className="flex h-12 w-12 items-center justify-center rounded-full border border-neutral-300 bg-white/70 backdrop-blur-md shadow-sm"
        >
          <ArrowDown className="h-6 w-6" />
        </motion.div>
      </a>
    </section>
  );
};

export default OxysenseHero;
