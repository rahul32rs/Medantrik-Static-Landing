import React from "react";
import { motion } from "framer-motion";
import {
  Cpu,
  Activity,
  ShieldCheck,
  Battery,
  Gauge,
  Factory,
} from "lucide-react";

const cards = [
  {
    icon: Gauge,
    title: "High-Precision Measurement",
    desc: "Provides accurate oxygen purity readings from 1% to 100% O₂ using advanced electrochemical sensor technology.",
  },
  {
    icon: Cpu,
    title: "Electrochemical Sensor",
    desc: "Works like a self-powered metal-air battery. Oxygen generates an electrical current proportional to concentration, ensuring true zero accuracy.",
  },
  {
    icon: Activity,
    title: "Stable & Reliable Output",
    desc: "Capable of measuring trace oxygen levels with long-term stability and fast response time.",
  },
  {
    icon: ShieldCheck,
    title: "Medical-Grade Compliance",
    desc: "Compliant with CE (MDD), ISO 80601-2-55, EN ISO 13485, and EU RoHS standards.",
  },
  {
    icon: Battery,
    title: "Efficient & Long-Lasting",
    desc: "Low-power design with long sensor life and consistent performance over extended usage.",
  },
  {
    icon: Factory,
    title: "Industrial Ready",
    desc: "Designed for medical, laboratory, and industrial environments with robust build quality.",
  },
];

const OxysenseTwo = () => {
  return (
    <section className="my-16 mx-4 md:mx-8 lg:mx-16">
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">
            How <span className="text-orange-600">OxySense</span> Works
          </h2>
          <p className="mt-3 text-gray-600 max-w-2xl mx-auto text-sm md:text-base">
            OxySense is built using advanced electrochemical oxygen sensing
            technology to deliver reliable, accurate, and certified oxygen
            measurements for critical applications.
          </p>
        </div>

        {/* Cards */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {cards.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={index}
                whileHover={{ y: -8, rotateX: 4, rotateY: -4 }}
                transition={{ type: "spring", stiffness: 200, damping: 15 }}
                className="relative rounded-2xl bg-white p-6 shadow-lg border border-black/5 hover:shadow-2xl"
                style={{ transformStyle: "preserve-3d" }}
              >
                {/* Glow */}
                <div className="absolute -inset-1 rounded-2xl bg-orange-400/10 blur-xl opacity-0 hover:opacity-100 transition" />

                {/* Icon */}
                <div className="relative z-10 mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-orange-100 text-orange-600">
                  <Icon className="h-6 w-6" />
                </div>

                {/* Content */}
                <div className="relative z-10">
                  <h3 className="text-lg font-semibold mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default OxysenseTwo;
