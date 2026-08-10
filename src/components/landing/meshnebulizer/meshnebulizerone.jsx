import React from "react";
import { motion } from "framer-motion";
import { Battery, Zap, Feather, Box, CloudFog, CheckCircle } from "lucide-react";

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" },
};

export default function MeshNebulizerOne() {
  return (
    <section
      id="details"
      className="relative overflow-hidden bg-white text-neutral-900 py-20"
    >
      {/* Soft premium background */}
      <div
        aria-hidden
        className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,165,0,0.12),transparent_55%)]"
      />

      <div className="relative z-10 mx-auto max-w-6xl px-6 grid gap-14 lg:grid-cols-2 lg:items-center">
        {/* Image */}
        <motion.div
          {...fadeUp}
          className="relative flex justify-center"
        >
          <div className="absolute -inset-6 rounded-full bg-orange-200/30 blur-3xl" />
          <img
            src="/images/products/meshnebulizer/meshnebulizer1.png"
            alt="Mesh Nebulizer"
            className="relative w-[520px] max-w-full rounded-3xl shadow-[0_25px_80px_rgba(0,0,0,0.15)]"
            loading="lazy"
          />
        </motion.div>

        {/* Content */}
        <div className="space-y-10">
          {/* Heading */}
          <motion.div {...fadeUp} className="space-y-5">
            <h2 className="text-4xl md:text-5xl font-extrabold leading-tight tracking-tight">
              Breathe freely,
              <span className="block text-orange-500">anywhere</span>
            </h2>

            <p className="text-neutral-600 text-lg max-w-xl">
              A compact, cordless mesh nebulizer that converts prescribed
              medication into an ultra-fine mist using ultrasonic technology —
              designed for comfort at home or on the move.
            </p>
          </motion.div>

          {/* Info cards */}
          <div className="grid gap-6 sm:grid-cols-2">
            {/* How it works */}
            <motion.div
              {...fadeUp}
              className="group rounded-3xl border border-black/5 bg-white/70 p-6 shadow-sm backdrop-blur-md transition hover:-translate-y-1 hover:shadow-lg"
            >
              <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-orange-600">
                How it works
              </h4>

              <ul className="space-y-3 text-sm text-neutral-700">
                {[
                  "Fill the chamber with prescribed medication",
                  "Ultrasonic mesh creates a fine mist",
                  "Inhale calmly for effective delivery",
                ].map((item, i) => (
                  <li key={i} className="flex gap-2">
                    <CheckCircle className="h-4 w-4 text-orange-500 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Power */}
            <motion.div
              {...fadeUp}
              className="group rounded-3xl border border-black/5 bg-white/70 p-6 shadow-sm backdrop-blur-md transition hover:-translate-y-1 hover:shadow-lg"
            >
              <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-orange-600">
                Power & Portability
              </h4>

              <ul className="space-y-3 text-sm text-neutral-700">
                <li className="flex items-center gap-2">
                  <Battery className="h-4 w-4 text-orange-500" />
                  Up to 6 hours continuous use
                </li>
                <li className="flex items-center gap-2">
                  <Zap className="h-4 w-4 text-orange-500" />
                  80% charge in 45 minutes
                </li>
                <li className="flex items-center gap-2">
                  <Feather className="h-4 w-4 text-orange-500" />
                  Ultra-lightweight — 120g
                </li>
              </ul>
            </motion.div>
          </div>

          {/* Highlights */}
          <motion.div {...fadeUp} className="grid gap-5 sm:grid-cols-3">
            {[
              {
                icon: CloudFog,
                title: "Ultra-fine mist",
                desc: "Smooth and deep lung delivery",
              },
              {
                icon: Zap,
                title: "Fast therapy",
                desc: "Quick and efficient sessions",
              },
              {
                icon: Box,
                title: "Travel-ready",
                desc: "Compact with carry case",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="flex items-start gap-3 rounded-2xl border border-black/5 bg-white/70 p-4 backdrop-blur-md transition hover:-translate-y-1 hover:shadow-md"
              >
                <div className="rounded-xl bg-orange-100 p-2">
                  <item.icon className="h-5 w-5 text-orange-600" />
                </div>
                <div>
                  <div className="text-sm font-semibold">{item.title}</div>
                  <div className="text-xs text-neutral-600">{item.desc}</div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
