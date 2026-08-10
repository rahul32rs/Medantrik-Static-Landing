import React, { useState, useEffect } from 'react';
import houseImageDefault from '../../../../public/images/features/iot.jpg';
import img1 from '../../../../public/images/features/OxySense.png';
import img2 from '../../../../public/images/features/audit.jpg';
import img3 from '../../../../public/images/features/iot.jpg';
import img4 from '../../../../public/images/features/quick.webp';
import img5 from '../../../../public/images/features/training.png';
import img6 from '../../../../public/images/features/doctor.png';

// Icons (Font Awesome via react-icons)
import {
  FaHeartbeat,      // Medical accuracy / sensing
  FaBell,           // Alerts
  FaNetworkWired,   // IoT connectivity
  FaTools,          // Calibration & maintenance
  FaChalkboardTeacher, // Training & onboarding
  FaShieldAlt,      // Compliance / safety & data
} from 'react-icons/fa';

import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';

const HeroSection5 = () => {
  const [currentImage, setCurrentImage] = useState(houseImageDefault);
  const reduce = useReducedMotion();

  // ✅ Preload all feature images on component mount
  useEffect(() => {
    const images = [img1, img2, img3, img4, img5, img6];
    images.forEach((src) => {
      const img = new Image();
      img.src = src;
    });
  }, []);

  const handleHover = (img) => setCurrentImage(img);
  const handleLeave = () => setCurrentImage(houseImageDefault);

  return (
    <section className="bg-white py-16">
      {/* Container standardized to match Hero/BrandCarousel (left/right spacing) */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <motion.div
          className="text-center mb-12 md:mb-16"
          initial={reduce ? false : { opacity: 0, y: 30 }}
          whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="text-center">
            <h2 className="text-3xl md:text-[48px] font-semibold leading-tight">
              Medantrik <span className="text-orange-600">Key Features</span>
            </h2>
            <p className="mt-3 text-gray-600 max-w-2xl mx-auto text-sm md:text-base">
              Medtech innovation made in India — purpose‑built devices and software for safer, smarter hospital oxygen infrastructure.
            </p>
          </div>
        </motion.div>

        {/* Features + Image (grid for perfect symmetry) */}
        <div className="grid items-center gap-10 lg:gap-12 md:grid-cols-2 lg:grid-cols-3">
          {/* Left Features */}
          <motion.div
            className="flex flex-col gap-6"
            initial={reduce ? false : { opacity: 0, x: -50 }}
            whileInView={reduce ? undefined : { opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <FeatureItem
              icon={<FaHeartbeat />}
              title="Medical‑Grade Oxygen Purity Monitoring"
              desc="Continuous, high‑fidelity sensing for real‑time oxygen purity and flow visibility across hospital lines."
              onHover={() => handleHover(img1)}
              onLeave={handleLeave}
            />

            <FeatureItem
              icon={<FaBell />}
              title="Instant Alerts & Audit Trails"
              desc="Threshold‑based visual/audio alerts with automatic event logging to support QA and compliance reviews."
              onHover={() => handleHover(img2)}
              onLeave={handleLeave}
            />

            <FeatureItem
              icon={<FaNetworkWired />}
              title="IoT Connectivity & Central Dashboard"
              desc="Wi‑Fi/LAN enabled devices stream data to a unified dashboard for multi‑ward, multi‑site monitoring and analytics."
              onHover={() => handleHover(img3)}
              onLeave={handleLeave}
            />
          </motion.div>

          {/* Center Image (auto spans center column on lg; on md it sits beside lists) */}
          <div className="order-first md:order-none">
            <AnimatePresence mode="wait">
              <motion.img
                key={currentImage}
                src={currentImage}
                alt="Medantrik feature preview"
                loading="eager"
                className="w-full max-w-md md:max-w-lg object-cover aspect-video h-[300px] md:h-[360px] rounded-xl shadow-xl mx-auto"
                initial={reduce ? false : { opacity: 0, scale: 0.98 }}
                animate={reduce ? { opacity: 1 } : { opacity: 1, scale: 1 }}
                exit={reduce ? { opacity: 0 } : { opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.3, ease: 'easeInOut' }}
              />
            </AnimatePresence>
          </div>

          {/* Right Features */}
          <motion.div
            className="flex flex-col gap-6"
            initial={reduce ? false : { opacity: 0, x: 50 }}
            whileInView={reduce ? undefined : { opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <FeatureItem
              icon={<FaTools />}
              title="Quick Calibration & Low‑Touch Maintenance"
              desc="Guided calibration flows, self‑checks, and hot‑swap accessories keep uptime high with minimal downtime."
              onHover={() => handleHover(img4)}
              onLeave={handleLeave}
            />

            <FeatureItem
              icon={<FaChalkboardTeacher />}
              title="On‑Site Training & Remote Support"
              desc="Role‑based onboarding, SOPs, and remote diagnostics ensure fast adoption and 24/7 assistance when it matters."
              onHover={() => handleHover(img5)}
              onLeave={handleLeave}
            />

            <FeatureItem
              icon={<FaShieldAlt />}
              title="Hospital‑Ready Design & Data Safeguards"
              desc="Rugged build for clinical environments with secure data handling and privacy‑first access controls."
              onHover={() => handleHover(img6)}
              onLeave={handleLeave}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const FeatureItem = ({ icon, title, desc, onHover, onLeave }) => (
  <motion.div
    className="flex items-start gap-4 text-left p-4 rounded-xl border border-transparent hover:shadow-md hover:border-orange-200 transition duration-300 cursor-pointer bg-white"
    onMouseEnter={onHover}
    onMouseLeave={onLeave}
    whileHover={{ scale: 1.02 }}
    transition={{ type: 'spring', stiffness: 250 }}
  >
    <div className="bg-orange-100 text-orange-600 p-3 rounded-lg text-xl flex-shrink-0 shadow-sm">
      {icon}
    </div>
    <div>
      <h3 className="font-semibold text-base mb-1">{title}</h3>
      <p className="text-sm text-gray-600 leading-relaxed">{desc}</p>
    </div>
  </motion.div>
);

export default HeroSection5;
