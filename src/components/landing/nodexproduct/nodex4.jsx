import { motion } from "framer-motion";
import { CheckCircle2, Stethoscope, Wind, Dumbbell } from "lucide-react";

const modules = [
  {
    key: "aerocheck",
    name: "AeroCheck™",
    sub: "Diagnostic Attachment",
    media: "/nodexvideos/AeroCheck.gif",
    icon: Stethoscope,
    tagline: "AeroCheck Attachment",
    points: [
      "Comprehensive spirometry measurements",
      "Pulmonary Function Testing (PFT)",
      "Total Functional Testing (TFT)",
      "Breath biomarker analysis",
      "Early disease detection capability",
      "Measures lung capacity, airflow, and identifies disease indicators before symptoms appear.",
    ],
  },
  {
    key: "aerorelief",
    name: "AeroRelief™",
    sub: "Therapy Attachment",
    media: "/nodexvideos/AeroRelief.gif",
    icon: Wind,
    tagline: "AeroRelief Attachment",
    points: [
      "Integrated nebulizer system",
      "Fine particle medication delivery",
      "Optimized for asthma/COPD treatment",
      "Precise dosage monitoring",
      "Battery-efficient operation",
      "Delivers medication efficiently for immediate respiratory relief with guided breathing protocols.",
    ],
  },
  {
    key: "aeroboost",
    name: "AeroBoost™",
    sub: "Exercise Attachment",
    media: "/nodexvideos/AeroBoost.gif",
    icon: Dumbbell,
    tagline: "AeroBoost Attachment",
    points: [
      "Adjustable resistance training",
      "Guided breathing protocols",
      "Performance measurement",
      "Progress tracking",
      "Audio voice coaching",
      "Strengthens lungs through resistance training and improves recovery after respiratory illness.",
    ],
  },
];

// Motion variants
const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.04 },
  },
};

const fadeIn = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const hoverLift = {
  rest: { y: 0, rotateX: 0, boxShadow: "0 1px 0 rgba(0,0,0,0.04)" },
  hover: { y: -4, rotateX: 1.5, transition: { type: "spring", stiffness: 240, damping: 18 } },
};

export default function NodeXModuleCards() {
  return (
    <section className="relative bg-white text-neutral-900 py-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center pb-10 sm:pb-12">
          <h2 className="text-3xl md:text-[44px] lg:text-[48px] font-semibold leading-tight tracking-tight">
            Medantrik Products <br />
            <span className="inline-block bg-gradient-to-r from-orange-500 via-amber-500 to-orange-600 bg-clip-text text-transparent">
              NodeX
            </span>
          </h2>
        </div>

        {/* Cards */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="grid gap-6 md:gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
        >
          {modules.map((m, i) => {
            const Icon = m.icon;
            return (
              <motion.article
                key={m.key}
                variants={fadeIn}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.3 }}
                className="group relative overflow-hidden rounded-3xl border border-neutral-200 bg-white shadow-sm ring-1 ring-transparent transition-all duration-300 will-change-transform"
                animate="rest"
                whileHover="hover"
              >
                {/* orange top accent */}
                {/* <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-orange-500 via-amber-400 to-orange-600" />
                 */}

                {/* media */}
                <motion.div
                  variants={hoverLift}
                  className="p-4 sm:p-6"
                >
                  <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-neutral-200">
                    {/* Using <img> so GIFs play automatically */}
                    <img
                      src={m.media}
                      alt={`${m.name} preview`}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                    />
                    {/* soft gradient overlay for readability */}
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/10 to-transparent" />
                  </div>
                </motion.div>

                {/* content */}
                <div className="px-5 sm:px-6 pb-5 sm:pb-6 space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="flex size-11 items-center justify-center rounded-2xl bg-orange-50 text-orange-600 ring-1 ring-orange-200">
                      <Icon className="size-5" aria-hidden />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold tracking-tight">{m.name}</h3>
                      <p className="text-sm text-neutral-600">{m.sub}</p>
                    </div>
                  </div>

                  <p className="text-sm font-medium text-neutral-900">{m.tagline}</p>

                  <ul className="space-y-2">
                    {m.points.map((pt, idx) => (
                      <li key={idx} className="flex gap-2 text-sm leading-relaxed text-neutral-800">
                        <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-orange-600" aria-hidden />
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="pt-2">
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-neutral-100 px-3 py-1 text-xs font-medium text-neutral-800 ring-1 ring-neutral-200">
                      <svg viewBox="0 0 24 24" className="size-3" aria-hidden>
                        <path d="M12 2l2.39 4.84L20 8l-4 3.9L17 18l-5-2.6L7 18l1-6.1L4 8l5.61-1.16L12 2z" fill="currentColor" />
                      </svg>
                      Patent Filed
                    </span>
                  </div>
                </div>

                {/* orange glow on hover */}
                <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100" aria-hidden>
                  <div className="absolute inset-0 bg-gradient-to-b from-orange-500/0 via-orange-500/0 to-orange-500/10" />
                  <div className="absolute -inset-px rounded-3xl ring-2 ring-orange-500/20" />
                </div>
              </motion.article>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
