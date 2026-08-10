// Gallery.js
import React, { useEffect, useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiChevronLeft, HiChevronRight, HiX } from "react-icons/hi";

const groups = {
  "abhivakti2024": [
    "/images/medantrikgallery/abhivakti2024/IMG_20240316_150913.jpg",
    "/images/medantrikgallery/abhivakti2024/IMG_20240316_151330.jpg",
    "/images/medantrikgallery/abhivakti2024/IMG_20240316_151344.jpg",
    "/images/medantrikgallery/abhivakti2024/IMG_20240316_155035.jpg",
    "/images/medantrikgallery/abhivakti2024/IMG_20240316_155537.jpg"
  ],
  "abhivakti2025": [
    "/images/medantrikgallery/abhivakti2025/IMG_20250117_124131.jpg",
    "/images/medantrikgallery/abhivakti2025/IMG_20250117_123424841_HDR_AE.jpg",
  ],
 "asthama2025": [
  "/images/medantrikgallery/asthama2025/IMG_4941.JPG",
  "/images/medantrikgallery/asthama2025/IMG_4975.JPG",
  "/images/medantrikgallery/asthama2025/IMG_5015.JPG",
  "/images/medantrikgallery/asthama2025/IMG_5017.JPG",
  "/images/medantrikgallery/asthama2025/IMG_5024.JPG",
  "/images/medantrikgallery/asthama2025/IMG_5059.JPG",
  "/images/medantrikgallery/asthama2025/IMG_5105.JPG",
  "/images/medantrikgallery/asthama2025/IMG_5174.JPG",
  "/images/medantrikgallery/asthama2025/IMG_5232.JPG"
],
  "startupmahakumbh": [
    "/images/medantrikgallery/startupmahakumbh/20240319_120713.jpg",
    "/images/medantrikgallery/startupmahakumbh/20240319_121946.jpg",
    "/images/medantrikgallery/startupmahakumbh/20240319_123444.jpg",
    "/images/medantrikgallery/startupmahakumbh/20240319_131424.jpg"
  ]
};

const tabs = Object.keys(groups);

const containerVariants = {
  enter: { x: 300, opacity: 0 },
  center: { x: 0, opacity: 1, transition: { type: "spring", stiffness: 120, damping: 18 } },
  exit: { x: -300, opacity: 0, transition: { ease: "easeInOut" } }
};

export default function Gallery() {
  const [activeGroup, setActiveGroup] = useState(tabs[0]);
  const [selectedIndex, setSelectedIndex] = useState(null); // index in active group's array
  const [direction, setDirection] = useState(0); // for potential slide direction

  // keyboard nav for lightbox
  const onKey = useCallback((e) => {
    if (selectedIndex === null) return;
    const arr = groups[activeGroup];
    if (e.key === "Escape") {
      setSelectedIndex(null);
    } else if (e.key === "ArrowLeft") {
      setSelectedIndex((s) => (s > 0 ? s - 1 : arr.length - 1));
    } else if (e.key === "ArrowRight") {
      setSelectedIndex((s) => (s < arr.length - 1 ? s + 1 : 0));
    }
  }, [selectedIndex, activeGroup]);

  useEffect(() => {
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onKey]);

  // When switching group, reset selected index and animate
  const switchGroup = (group) => {
    const idxCur = tabs.indexOf(activeGroup);
    const idxNew = tabs.indexOf(group);
    setDirection(idxNew > idxCur ? 1 : -1);
    setActiveGroup(group);
    setSelectedIndex(null);
  };

  const arr = groups[activeGroup];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 p-6">
      <div className="max-w-7xl mx-auto">
        <header className="mb-6">
          <h1 className="text-3xl md:text-[48px] font-semibold leading-tight text-center mb-2">Gallery</h1>
          <p className="text-base md:text-xl text-gray-400 text-center max-w-3xl mx-auto">Choose a collection - click any thumbnail to enlarge Images</p>
        </header>

        {/* Tabs / Buttons */}
        <div className="flex justify-center gap-4 mb-6 flex-wrap">
          {tabs.map((t) => (
            <button
              key={t}
              onClick={() => switchGroup(t)}
              className={`px-4 py-2 rounded-full font-medium transition-all shadow-sm
                ${t === activeGroup ? "bg-white text-orange-600 shadow-md ring-2 ring-sky-100" : "bg-transparent text-gray-700 hover:bg-white/60"}`}
            >
              {t}
            </button>
          ))}
        </div>

        {/* Animated underline / info */}
        <div className="flex justify-between items-center mb-4">
          <div className="text-sm text-gray-500">
            Showing <span className="font-semibold">{activeGroup}</span> — {arr.length} images
          </div>
          <div className="text-sm text-gray-400 italic">Click thumbnail to open</div>
        </div>

        {/* Image grid / slider area */}
        <div className="relative">
          <AnimatePresence initial={false} custom={direction}>
            <motion.div
              key={activeGroup}
              variants={containerVariants}
              initial="enter"
              animate="center"
              exit="exit"
              className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4"
            >
              {arr.map((src, i) => (
                <motion.button
                  key={src}
                  onClick={() => setSelectedIndex(i)}
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                  className="overflow-hidden rounded-xl shadow-lg p-0 bg-white border border-transparent"
                >
                  {/* Thumbnail */}
                  <img
                    src={src}
                    alt={`${activeGroup}-${i}`}
                    className="w-full h-46 object-cover transition-transform duration-300 hover:scale-105"
                    onError={(e) => {
                      // fallback if HEIC or missing
                      e.currentTarget.style.opacity = 0.5;
                    }}
                  />
                </motion.button>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Lightbox */}
        <AnimatePresence>
          {selectedIndex !== null && (
            <motion.div
              className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 px-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedIndex(null)}
            >
              <motion.div
                layout
                onClick={(e) => e.stopPropagation()}
                className="relative max-w-[95vw] max-h-[90vh] w-full flex items-center justify-center"
              >
                {/* Close */}
                <button
                  onClick={() => setSelectedIndex(null)}
                  className="absolute top-4 right-4 z-50 p-2 rounded-full bg-white/90 hover:bg-white"
                  aria-label="Close"
                >
                  <HiX className="w-6 h-6" />
                </button>

                {/* Prev */}
                <button
                  onClick={() => setSelectedIndex((s) => (s > 0 ? s - 1 : arr.length - 1))}
                  className="absolute left-2 md:left-6 z-40 p-3 rounded-full bg-white/90 hover:bg-white"
                >
                  <HiChevronLeft className="w-6 h-6" />
                </button>

                {/* Next */}
                <button
                  onClick={() => setSelectedIndex((s) => (s < arr.length - 1 ? s + 1 : 0))}
                  className="absolute right-2 md:right-6 z-40 p-3 rounded-full bg-white/90 hover:bg-white"
                >
                  <HiChevronRight className="w-6 h-6" />
                </button>

                {/* Animated main image */}
                <motion.img
                  key={arr[selectedIndex]}
                  src={arr[selectedIndex]}
                  alt={`large-${selectedIndex}`}
                  className="max-w-full max-h-[80vh] rounded-2xl shadow-2xl object-contain"
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0.8, opacity: 0 }}
                  transition={{ duration: 0.25 }}
                />

                {/* Thumbnails row under big image (optional) */}
                <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-50 flex gap-2 overflow-x-auto py-1 px-2 bg-black/30 rounded-lg">
                  {arr.map((t, idx) => (
                    <button
                      key={t}
                      onClick={() => setSelectedIndex(idx)}
                      className={`w-14 h-10 rounded-md overflow-hidden border-2 ${idx === selectedIndex ? "border-sky-400" : "border-transparent"} `}
                    >
                      <img src={t} alt={`thumb-${idx}`} className="w-full h-full object-cover" />
                    </button>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
