import React from "react";
import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";

const Hero = () => {
  return (
    <section
      className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-white text-black"
      aria-label="Nodex product hero"
    >
      {/* Left image */}
      <motion.img
        src="/images/products/lung4.png"
        alt="Nodex product left"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="hidden lg:block absolute left-0 top-1/2 -translate-y-1/2 w-[500px] max-w-[40%] select-none"
      />

      {/* Right image */}
      <motion.img
        src="/images/products/lung5.png"
        alt="Nodex product right"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="hidden lg:block absolute right-0 top-1/2 -translate-y-1/2 w-[520px] max-w-[40%] select-none"
      />

      {/* Soft radial glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 flex items-center justify-center"
      >
        <div className="h-[60vmin] w-[60vmin] rounded-full bg-orange-500/10 blur-3xl" />
      </div>

      {/* Decorative grid */}
      <div
        aria-hidden
        className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,0,0,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.05)_1px,transparent_1px)] bg-[size:32px_32px]"
      />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-6xl px-6 text-center">
        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-4 inline-block rounded-full border border-black/10 bg-black/5 px-4 py-1 text-xs tracking-widest text-black/70 backdrop-blur-sm"
        >
          NEXT-GEN • FAST • ELEGANT
        </motion.p>

        {/* Giant animated title */}
        <motion.h1
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.15 }}
          className="mx-auto max-w-5xl text-5xl font-black leading-[0.95] tracking-tight md:text-7xl lg:text-8xl"
        >
          <span className="block">Meet</span>
          <span className="relative inline-block">
            <span className="absolute -inset-1 -skew-x-6 rounded-2xl bg-gradient-to-r from-orange-500/20 to-orange-400/20 blur-md" aria-hidden />
            <span className="relative bg-gradient-to-r from-orange-500 to-orange-400 bg-clip-text text-transparent">
              NODEX
            </span>
          </span>
          {/* <span className="block text-black/70">device</span> */}
        </motion.h1>

        {/* Subcopy */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mx-auto mt-4 max-w-2xl text-base text-black/70 md:text-lg"
        >
          Powerful performance. Minimal design. Everything you need to stand out.
        </motion.p>
      </div>

      {/* Bouncing arrow */}
      <a
        href="#details"
        aria-label="Scroll to details"
        className="absolute bottom-6 left-1/2 -translate-x-1/2"
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, y: [0, 10, 0] }}
          transition={{ duration: 1.4, repeat: Infinity, ease: "easeInOut" }}
          className="flex h-12 w-12 items-center justify-center rounded-full border border-black/20 bg-black/5 backdrop-blur-sm"
        >
          <ArrowDown className="h-6 w-6" />
        </motion.div>
      </a>
    </section>
  );
};

export default Hero;