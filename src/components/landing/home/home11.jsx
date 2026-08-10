// Premium product cards – image overflowing top, clean content layout
// Matches provided reference: image slightly outside card, title → desc → actions row

import React, { useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FiDownload, FiArrowRight } from "react-icons/fi";

const products = [
  {
    id: "oxysense",
    title: "OxySense",
    subtitle: "Inline Oxygen Analyzer",
    img: "/images/products/oxysense/oxysensefront.png",
    desc: "Prevent hypoxia & hyperoxia — inline oxygen purity meter.",
    route: "/products/oxysense",
  },
  {
    id: "nodex",
    title: "NODex",
    subtitle: "Breath Diagnosis Device",
    img: "/images/products/lung5.png",
    desc: "AI-enabled device that diagnoses COPD and keeps records.",
    route: "/products/nodex",
  },
   {
    id: "meshnebulizer",
    title: "Mesh Nebulizers",
    subtitle: "Portable Ultrasonic Mesh Nebulizer",
    img: "/images/products/meshnebulizer/meshnebulizer1.png",
    desc: "Compact, quiet and effective nebulizer for all ages.",
    route: "/products/meshnebulizer",
  },
];

function useTilt(ref) {
  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const move = (e) => {
      const r = el.getBoundingClientRect();
      const x = (e.clientX - r.left) / r.width - 0.5;
      const y = (e.clientY - r.top) / r.height - 0.5;
      el.style.transform = `rotateX(${y * -10}deg) rotateY(${x * 14}deg)`;
    };

    const reset = () => (el.style.transform = "rotateX(0) rotateY(0)");

    el.addEventListener("mousemove", move);
    el.addEventListener("mouseleave", reset);
    return () => {
      el.removeEventListener("mousemove", move);
      el.removeEventListener("mouseleave", reset);
    };
  }, []);
}

function ProductCard({ p, onExplore }) {
  const ref = useRef(null);
  useTilt(ref);

  return (
    <div className="relative perspective-[1200px] group">
      {/* floating image */}
      <div className="absolute -top-35 -right-2/3 -translate-x-1/2 z-20">
       <img
  src={p.img}
  alt={p.title}
  className="
    w-80 h-90 object-contain
    drop-shadow-[0_35px_70px_rgba(0,0,0,0.25)]
    transition-transform duration-500 ease-out
    group-hover:scale-110
    group-hover:-translate-y-3
  "
/>

      </div>

      <article
        ref={ref}
        className="pt-28 pb-8 px-6 rounded-3xl bg-orange-50 border border-orange-200 shadow-[0_20px_60px_rgba(0,0,0,0.12)] transition-transform"
        style={{ transformStyle: "preserve-3d" }}
      >
        <h3 className="text-2xl font-semibold text-left text-gray-900">{p.title}</h3>
        <p className="text-sm text-left text-gray-500 mt-1">{p.subtitle}</p>
        <p className="text-sm text-left text-gray-700 mt-4">{p.desc}</p>

        {/* actions */}
        <div className="mt-8 flex items-center gap-3">
          <button
            onClick={() => onExplore(p.route)}
            className="flex-1 inline-flex items-center justify-center gap-2 rounded-xl bg-orange-500 px-4 py-3 text-white font-medium shadow hover:bg-orange-600"
          >
            Explore <FiArrowRight />
          </button>

          <div className="relative group/download">
  <button
    disabled
    className="
      inline-flex items-center justify-center gap-2
      rounded-xl bg-orange-100 px-4 py-3
      text-orange-600 font-medium
      cursor-not-allowed
    "
  >
    <FiDownload />
  </button>

  {/* tooltip */}
  <span
    className="
      absolute -top-10 left-1/2 -translate-x-1/2
      whitespace-nowrap
      rounded-lg bg-gray-900 px-3 py-1.5
      text-xs text-white
      opacity-0 scale-95
      transition-all duration-300
      group-hover/download:opacity-100
      group-hover/download:scale-100
    "
  >
    Download Brochure
  </span>
</div>

        </div>
      </article>
    </div>
  );
}

export default function Home11() {
  const navigate = useNavigate();

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-center text-4xl md:text-5xl font-semibold py-6 ">
          Our <span className="text-orange-500">Products</span>
        </h2>

        <div className="
  mt-24
  grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3
  gap-y-32 gap-x-14
  sm:gap-y-20
  lg:gap-14
">
          {products.map((p) => (
            <ProductCard key={p.id} p={p} onExplore={navigate} />
          ))}
        </div>
      </div>
    </section>
  );
}
