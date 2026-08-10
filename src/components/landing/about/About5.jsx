import React from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";
import { Linkedin, Instagram, Facebook } from "lucide-react";

// Images (replace with your actual paths)
import PrikshitImg from "../../../../public/images/about/team/prikishit.png";
import PriyaranjanImg from "../../../../public/images/about/team/priyranjan.png";

const FOUNDERS = [
  {
    name: "Priyranjan Tiwari",
    role: "Founder & CEO",
    image: PriyaranjanImg,
    intro:
      "Founder focused on AI-first healthcare devices and global clinical impact",
    socials: {
      linkedin: "https://www.linkedin.com/in/priyaranjan-tiwari/",
      facebook: "#",
      instagram: "#",
    },
  },
  {
    name: "Prikshit Hooda",
    role: "Co-Founder & CTO",
    image: PrikshitImg,
    intro:
      "Building robust platforms, powering diagnostics at scale with elegance",
    socials: {
      linkedin: "https://www.linkedin.com/in/prikshit-hooda/",
      facebook: "#",
      instagram: "#",
    },
  },
];

const truncateWords = (text = "", count = 10) => {
  const words = text.trim().split(/\s+/);
  if (words.length <= count) return text;
  return words.slice(0, count).join(" ") + "…";
};

const Social = ({ href, label, Icon, delay = 0 }) => (
  <motion.a
    href={href}
    target="_blank"
    rel="noreferrer"
    initial={{ opacity: 0, y: 6 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.6 }}
    transition={{ duration: 0.4, delay }}
    className="inline-flex items-center gap-2 rounded-xl px-3 py-2 text-sm font-semibold text-white shadow-lg shadow-orange-300/30 ring-1 ring-orange-300/40 bg-gradient-to-br from-orange-500 via-orange-500 to-amber-400 hover:shadow-orange-400/40 focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 active:translate-y-px"
    whileHover={{ scale: 1.04 }}
    whileTap={{ scale: 0.98 }}
  >
    <Icon size={16} /> {label}
  </motion.a>
);

const Card = ({ founder, delay = 0 }) => {
  const rx = useMotionValue(0);
  const ry = useMotionValue(0);
  const tRotateX = useTransform(ry, [ -30, 30 ], [ 8, -8 ]);
  const tRotateY = useTransform(rx, [ -30, 30 ], [ -8, 8 ]);

  const handleMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const percentX = ((x - centerX) / centerX) * 30;
    const percentY = ((y - centerY) / centerY) * 30;
    rx.set(percentX);
    ry.set(percentY);
  };
  const handleLeave = () => {
    rx.set(0);
    ry.set(0);
  };

  return (
    <motion.article
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.6, delay }}
      style={{ perspective: 1000 }}
      className="group relative"
    >
      <motion.div
        onMouseMove={handleMove}
        onMouseLeave={handleLeave}
        style={{ rotateX: tRotateX, rotateY: tRotateY, transformStyle: "preserve-3d" }}
        className="relative flex flex-row items-center gap-6 overflow-hidden rounded-3xl border border-orange-200/70 bg-white/80 backdrop-blur-xl p-6 shadow-xl hover:shadow-2xl transition will-change-transform"
      >
        <div className="pointer-events-none absolute inset-0 rounded-3xl ring-1 ring-inset ring-orange-200/60" />
        <div className="pointer-events-none absolute -right-10 -top-10 h-24 w-24 rotate-45 bg-gradient-to-br from-orange-100 to-orange-200 opacity-80" />
        <div className="pointer-events-none absolute -left-10 -bottom-10 h-24 w-24 -rotate-45 bg-gradient-to-tr from-amber-100 to-orange-200 opacity-70" />

        {/* Left: Image */}
        <div className="w-2/5 relative" style={{ transform: "translateZ(30px)" }}>
          <div className="absolute -inset-1 rounded-2xl bg-gradient-to-tr from-orange-100 via-transparent to-transparent blur opacity-90" />
          <div className="relative overflow-hidden rounded-2xl">
            <img
              src={founder.image}
              alt={founder.name}
              className="h-56 w-full object-cover object-center transform transition duration-500 group-hover:scale-[1.04]"
              loading="lazy"
            />
          </div>
        </div>

        {/* Right: Content */}
        <div className="w-3/5 space-y-3" style={{ transform: "translateZ(40px)" }}>
          <div className="flex items-center gap-2">
            <span className="inline-flex h-2 w-2 rounded-full bg-orange-500 animate-pulse" />
            <p className="text-xs font-semibold text-orange-700">Meet our founders</p>
          </div>
          <h3 className="text-2xl md:text-3xl font-black tracking-tight text-neutral-900">
            {founder.name}
          </h3>
          <p className="text-sm md:text-base text-neutral-600">{founder.role}</p>
          {founder.intro && (
            <p className="text-sm md:text-[15px] text-neutral-700/90">
              {truncateWords(founder.intro, 10)}
            </p>
          )}
          <div className="pt-1 flex flex-wrap items-center gap-3">
            <Social href={founder.socials.linkedin}  Icon={Linkedin} />
            <Social href={founder.socials.facebook}  Icon={Facebook} delay={0.06} />
            <Social href={founder.socials.instagram} j Icon={Instagram} delay={0.12} />
          </div>
        </div>

        <motion.div
          aria-hidden
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ repeat: Infinity, repeatType: "mirror", duration: 2.4 }}
          className="pointer-events-none absolute right-6 top-6 h-2 w-2 rounded-full bg-gradient-to-tr from-orange-400 to-amber-300 shadow-[0_0_15px_2px_rgba(251,146,60,0.65)]"
          style={{ transform: "translateZ(60px)" }}
        />
      </motion.div>
    </motion.article>
  );
};

const About5 = () => {
  return (
    <section id="founders" className="relative isolate bg-white py-14 md:py-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-orange-200 bg-orange-50 px-3 py-1 text-xs font-medium text-orange-700 shadow-sm">
            <span className="inline-block h-2 w-2 rounded-full bg-orange-500 animate-pulse" />
            Our Leadership
          </div>
          <h2 className="text-3xl md:text-[48px] font-semibold leading-tight">
            Meet Our Founders
          </h2>
          <p className="mt-3 text-neutral-600">
            Visionaries behind Medantrik — building deep-tech healthcare solutions from India for the world.
          </p>
        </motion.div>

        <div className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
          {FOUNDERS.map((f, i) => (
            <Card key={f.name} founder={f} delay={i * 0.12} />
          ))}
        </div>

        <div className="mt-12 flex items-center justify-center">
          <div className="h-px w-40 bg-gradient-to-r from-transparent via-orange-200 to-transparent" />
        </div>
      </div>
    </section>
  );
};

export default About5;
