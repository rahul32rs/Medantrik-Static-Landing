import React from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";

// Import the 6 core values images
import Img1 from "../../../../public/images/about/Our Core Values 1 to 6/1.png";
import Img2 from "../../../../public/images/about/Our Core Values 1 to 6/2.png";
import Img3 from "../../../../public/images/about/Our Core Values 1 to 6/3.png";
import Img4 from "../../../../public/images/about/Our Core Values 1 to 6/4.png";
import Img5 from "../../../../public/images/about/Our Core Values 1 to 6/5.png";
import Img6 from "../../../../public/images/about/Our Core Values 1 to 6/6.png";

const values = [
  {
    title: "Precision Engineering",
    description:
      "Advanced hardware and intelligent sensing technologies built to deliver dependable respiratory diagnostics and monitoring.",
    image: Img1,
  },
  {
    title: "Clinical Reliability",
    description:
      "Designed to support healthcare professionals with accurate, consistent, and evidence-driven respiratory solutions.",
    image: Img2,
  },
  {
    title: "Purposeful Innovation",
    description:
      "Developing technologies that address real healthcare challenges with practical, scalable, and impactful solutions.",
    image: Img3,
  },
  {
    title: "Accessibility",
    description:
      "Making advanced respiratory care portable, affordable, and available wherever it is needed.",
    image: Img4,
  },
  {
    title: "Quality & Compliance",
    description:
      "Committed to high manufacturing standards, rigorous testing, and continuous product improvement.",
    image: Img5,
  },
  {
    title: "Research & Continuous Improvement",
    description:
      "We continuously improve our technologies through clinical validation, user feedback, and ongoing research to deliver smarter respiratory solutions.",
    image: Img6,
  },
];

const useTilt = () => {
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const rotateX = useTransform(my, [-20, 20], [8, -8]);
  const rotateY = useTransform(mx, [-20, 20], [-8, 8]);

  const onMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const cx = rect.width / 2;
    const cy = rect.height / 2;
    mx.set(((x - cx) / cx) * 20);
    my.set(((y - cy) / cy) * 20);
  };
  const onLeave = () => {
    mx.set(0);
    my.set(0);
  };

  return { style: { rotateX, rotateY, transformStyle: "preserve-3d" }, onMove, onLeave };
};

const ValueCard = ({ v, idx }) => {
  const tilt = useTilt();
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.6, delay: idx * 0.06 }}
      className="relative"
      style={{ perspective: 1000 }}
    >
      <motion.div
        onMouseMove={tilt.onMove}
        onMouseLeave={tilt.onLeave}
        style={tilt.style}
        className="group relative h-full overflow-hidden rounded-2xl border border-orange-200/70 bg-white/90 p-6 shadow-lg transition hover:shadow-2xl"
      >
        {/* Gradient border glow */}
        <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-inset ring-orange-200/70" />
        <div className="pointer-events-none absolute -inset-px rounded-2xl bg-gradient-to-br from-orange-100/40 via-transparent to-amber-100/50 opacity-0 group-hover:opacity-100 transition" />

        {/* Floating sparkle */}
        <motion.span
          aria-hidden
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ repeat: Infinity, repeatType: "mirror", duration: 2.8, delay: idx * 0.2 }}
          className="pointer-events-none absolute right-5 top-5 h-2 w-2 rounded-full bg-orange-400 shadow-[0_0_14px_2px_rgba(251,146,60,0.6)]"
          style={{ transform: "translateZ(40px)" }}
        />

        {/* Image with movement */}
        <div className="flex justify-center mb-4" style={{ transform: "translateZ(30px)" }}>
          <motion.img
            src={v.image}
            alt={v.title}
            className="w-20 h-20 object-contain"
            initial={{ scale: 0.9, opacity: 0, y: -10 }}
            whileInView={{ scale: 1, opacity: 1, y: 0 }}
            whileHover={{ y: -10 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 300, damping: 18, delay: idx * 0.05 }}
          />
        </div>

        {/* Title */}
        <h3 className="text-2xl font-extrabold text-neutral-900 text-center" style={{ transform: "translateZ(40px)" }}>
          {v.title}
        </h3>

        {/* Description */}
        <p
          className="mt-2 text-[15px] leading-relaxed text-neutral-700 text-center"
          style={{ transform: "translateZ(35px)" }}
        >
          {v.description}
        </p>

        {/* CTA micro-interaction */}
        <div className="mt-5 flex justify-center" style={{ transform: "translateZ(45px)" }}>
          <motion.span
            className="inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-xs font-semibold text-orange-800 bg-orange-50 ring-1 ring-orange-200/70 shadow-sm"
            whileHover={{ scale: 1.06 }}
          >
            <span className="inline-block h-2 w-2 rounded-full bg-orange-500 animate-pulse" />
            Core value
          </motion.span>
        </div>
      </motion.div>
    </motion.article>
  );
};

const About4 = () => {
  return (
    <section className="bg-[#fdfbfa] py-16 relative overflow-hidden">
      <div className="relative z-10 container mx-auto px-6 md:px-24">
        <p className="text-sm md:text-base text-center text-indigo-700 font-semibold mb-2 tracking-wide">OUR VALUES</p>
        <h2 className="text-3xl md:text-[48px] font-semibold leading-tight text-center mb-12">
          What We Stand For
        </h2>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
          {values.map((v, idx) => (
            <ValueCard key={v.title} v={v} idx={idx} />
          ))}
        </div>
      </div>

      
    </section>
  );
};

export default About4;
