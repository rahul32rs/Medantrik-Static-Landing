import React from "react";
import { motion } from "framer-motion";
import { Lightbulb, HeartPulse, Activity } from "lucide-react";


const defaultItems = [
  {
    title: "The Challenge",
    icon: Activity,
    accent: "from-orange-500 to-amber-500",
    body:
      "India faces 45% of global respiratory deaths despite only 15% of cases. Late diagnosis and lack of monitoring tools are key factors.",
  },
  {
    title: "Our Solution",
    icon: Lightbulb,
    accent: "from-amber-500 to-orange-500",
    body:
      "Nodex is an affordable, multi-sensor respiratory device enabling early detection and home monitoring of lung health.",
  },
  {
    title: "Our Impact",
    icon: HeartPulse,
    accent: "from-orange-500 to-red-500",
    body:
      "Empowering users to track lung capacity, respiratory rate, and breath biomarkers for better outcomes and early intervention.",
  },
];

const container = {
  hidden: { opacity: 0, y: 12 },
  show: {
    opacity: 1,
    y: 0,
    transition: { staggerChildren: 0.08, delayChildren: 0.08, duration: 0.45 },
  },
};

const item = {
  hidden: { opacity: 0, y: 24, scale: 0.98 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { type: "spring", stiffness: 110, damping: 16 },
  },
};

function IconWrap({ Icon, accent }) {
  // Continuous, gentle float + breathe animation for the icon
  return (
    <div className="relative">
      <motion.div
        initial={{ y: 0, scale: 1 }}
        animate={{ y: [0, -4, 0], scale: [1, 1.02, 1] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        className={`grid h-12 w-12 place-items-center rounded-2xl bg-gradient-to-br ${accent} text-white shadow-lg`}
      >
        <Icon className="h-6 w-6" />
      </motion.div>

      {/* Soft ambient glow on hover */}
      <motion.div
        aria-hidden
        className="pointer-events-none absolute -inset-1 -z-10 rounded-3xl bg-gradient-to-br from-orange-500/0 via-amber-500/0 to-red-500/0 blur-xl"
        whileHover={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
      />
    </div>
  );
}

function Card({ title, body, icon: Icon, accent }) {
  return (
    <motion.div
      variants={item}
      whileHover={{ y: -6 }}
      whileTap={{ scale: 0.985 }}
      className="group relative rounded-3xl border border-zinc-200 bg-white p-6 shadow-[0_8px_30px_rgb(0,0,0,0.06)] transition-transform"
    >
      {/* Thin accent bar */}
      {/* <div className={`pointer-events-none absolute inset-x-0 -top-0.5 h-0.5 rounded-t-3xl bg-gradient-to-r ${accent} opacity-90`} /> */}

      <div className="flex items-start gap-5">
        <IconWrap Icon={Icon} accent={accent} />

        <div className="pt-1">
          <h3 className="text-lg font-semibold tracking-tight text-zinc-900">
            {title}
          </h3>
          <p className="mt-2 text-base leading-relaxed text-zinc-600">
            {body}
          </p>
        </div>
      </div>

      {/* Focus ring on hover for crisp UI feedback */}
      <div
        className={`pointer-events-none absolute inset-0 rounded-3xl ring-0 ring-orange-500/0 transition-[ring,box-shadow] duration-300 group-hover:ring-2 group-hover:ring-orange-500/20`}
      />
    </motion.div>
  );
}

export default function Nodex2({ items = defaultItems}) {
  return (
    <section className="relative mx-auto max-w-7xl px-4 py-18 sm:px-6 lg:px-8">
      {/* Heading */}
        <div className="text-center pb-10">
          <h2 className="text-3xl md:text-[48px] font-semibold leading-tight">
            Transforming Respiratory Health <br />
            <span className="text-orange-600">Monitoring</span>
          </h2>
        </div>

      {/* Cards grid */}
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3"
      >
        {items.map((it, i) => (
          <Card key={i} {...it} />
        ))}
      </motion.div>
    </section>
  );
}
