import { useRef } from "react";
import { FiArrowRight, FiShoppingBag } from "react-icons/fi";
import useTilt from "./useTilt";

export default function ProductCard({ p, onExplore }) {
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
        className="
          pt-28 pb-8 px-6
          rounded-3xl
          bg-orange-50
          border border-orange-200
          shadow-[0_20px_60px_rgba(0,0,0,0.12)]
          transition-transform
        "
        style={{ transformStyle: "preserve-3d" }}
      >
        <h3 className="text-2xl font-semibold text-gray-900">{p.title}</h3>
        <p className="text-sm text-gray-500 mt-1">{p.subtitle}</p>
        <p className="text-sm text-gray-700 mt-4">{p.desc}</p>

        {/* BUY SECTION */}
        <div className="mt-8 flex items-center gap-3">
          {/* Main Buy Button */}
          <button
            onClick={() => onExplore(p.route)}
            className="
              flex-1 inline-flex items-center justify-center gap-2
              rounded-xl bg-orange-500 px-4 py-3
              text-white font-medium
              shadow-lg
              hover:bg-orange-600
              hover:scale-[1.02]
              transition
            "
          >
            <FiShoppingBag className="text-lg" />
            Buy Now
            <FiArrowRight />
          </button>

          {/* Icon-only Buy Action */}
          <button
            onClick={() => onExplore(p.route)}
            className="
              inline-flex items-center justify-center
              rounded-xl border border-orange-300
              bg-white px-4 py-3
              text-orange-600
              shadow-sm
              hover:bg-orange-100
              hover:scale-105
              transition
            "
            title="Quick Buy"
          >
            <FiShoppingBag size={20} />
          </button>
        </div>
      </article>
    </div>
  );
}
