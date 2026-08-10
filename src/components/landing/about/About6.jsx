import React from "react";

/**
 * About6.jsx — Animated Reviews / Testimonials Section
 * TailwindCSS-based, fully responsive, with infinite vertical scroll per column.
 * - Pass your own `reviews` or use the provided defaults.
 * - Control speed, pause-on-hover, number of columns, and directions.
 * - Accessible: supports prefers-reduced-motion and ARIA for ratings.
 */

export default function About6({
  title = "What Our Customers Say",
  subtitle = "Hear from thousands of happy users who trust our service.",
  reviews = defaultReviews,
  columns = 3, // 1–3 are sensible here
  directions = ["t2b", "b2t", "t2b"], // per column: "t2b" or "b2t"
  speedSeconds = 60, // base animation duration; can be overridden per column via directionsWithSpeed
  directionsWithSpeed, // optional: [{dir:"t2b", speed:50}, ...] overrides
  pauseOnHover = true,
  heightClass = "h-[40rem]",
  className = "",
}) {
  const cols = Math.max(1, Math.min(3, columns));

  // Split reviews into N columns as evenly as possible
  const split = splitIntoColumns(reviews, cols);

  // Derive per-column direction + speed
  const dirSpec = Array.from({ length: cols }).map((_, i) => {
    const fallbackDir = directions[i % directions.length] || "t2b";
    const fromOverride = directionsWithSpeed?.[i];
    return {
      dir: fromOverride?.dir || fallbackDir,
      speed: fromOverride?.speed || speedSeconds,
    };
  });

  return (
    <section
      aria-labelledby="reviews-heading"
      className={`bg-white text-black w-full py-16 md:py-24 ${className}`}
    >
      <div className={`container mx-auto max-w-7xl ${pauseOnHover ? "group" : ""} px-4`}>
        <header className="text-center mb-12 md:mb-16">
          <h2
            id="reviews-heading"
            className="text-3xl md:text-[48px] font-semibold leading-tight text-center mb-2"
          >
            {title}
          </h2>
          {subtitle && (
            <p className="text-base md:text-xl text-gray-400 max-w-2xl mx-auto">{subtitle}</p>
          )}
        </header>

        <div className={`grid grid-cols-1 ${cols >= 2 ? "md:grid-cols-2" : ""} ${cols >= 3 ? "lg:grid-cols-3" : ""} gap-6 md:gap-8`}>
          {split.map((colItems, idx) => {
            const { dir, speed } = dirSpec[idx];
            const isMiddle = idx === 1;
            const isRight = idx === 2;

            // Responsive visibility to mimic original behavior
            const visibility = idx === 0 ? "block" : idx === 1 ? "hidden md:block" : "hidden lg:block";
            const maskDirection = idx === 1 ? "to_top" : "to_bottom"; // middle fades top, others bottom

            return (
              <div
                key={idx}
                className={`${visibility} overflow-hidden ${heightClass} rounded-3xl [mask-image:linear-gradient(${maskDirection === "to_top" ? "to_top" : "to_bottom"},transparent,white_20%,white_80%,transparent)]`}
              >
                <AnimatedColumn
                  items={colItems}
                  direction={dir}
                  speedSeconds={speed}
                  pauseOnHover={pauseOnHover}
                />
              </div>
            );
          })}
        </div>
      </div>

      {/* Local styles for keyframes & utilities */}
      <style>{`
        @keyframes scroll-top-to-bottom { 0% { transform: translateY(0); } 100% { transform: translateY(-50%); } }
        @keyframes scroll-bottom-to-top { 0% { transform: translateY(-50%); } 100% { transform: translateY(0); } }

        .animate-scroll-t2b { animation: scroll-top-to-bottom var(--scroll-duration, 60s) linear infinite; }
        .animate-scroll-b2t { animation: scroll-bottom-to-top var(--scroll-duration, 60s) linear infinite; }
        .group:hover .group-hover-pause { animation-play-state: paused; }
        .animated-column { will-change: transform; }

        @media (prefers-reduced-motion: reduce) {
          .animate-scroll-t2b, .animate-scroll-b2t { animation: none !important; }
        }
      `}</style>
    </section>
  );
}

function AnimatedColumn({ items, direction = "t2b", speedSeconds = 60, pauseOnHover = true }) {
  const dirClass = direction === "b2t" ? "animate-scroll-b2t" : "animate-scroll-t2b";
  const pauseClass = pauseOnHover ? "group-hover-pause" : "";

  // Duplicate once for seamless loop
  const doubled = [...items, ...items];

  return (
    <div
      className={`animated-column flex flex-col gap-6 ${pauseClass} ${dirClass}`}
      style={{ "--scroll-duration": `${speedSeconds}s` }}
    >
      <div className="flex flex-col gap-6">
        {items.map((r, i) => (
          <ReviewCard key={`a-${i}`} {...r} />
        ))}
      </div>
      <div className="flex flex-col gap-6" aria-hidden>
        {items.map((r, i) => (
          <ReviewCard key={`b-${i}`} {...r} />
        ))}
      </div>
    </div>
  );
}

function ReviewCard({ img, name, role, rating = 5, quote }) {
  const stars = "★★★★★".slice(0, Math.max(0, Math.min(5, rating)));

  return (
    <article className="bg-white border border-[#fd8b01]/30 p-6 rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.05)] hover:shadow-[0_6px_28px_rgba(0,0,0,0.08)] transition-transform duration-300 transform hover:scale-105">
      <header className="flex items-center mb-4">
        <img
          src={img}
          alt={name}
          className="w-12 h-12 rounded-full object-cover mr-3"
        />
        <div>
          <p className="font-semibold text-[#fd8b01]">{name}</p>
          <p className="text-sm text-gray-500">{role}</p>
        </div>
      </header>

      <div
        className="text-yellow-400 mb-2"
        role="img"
        aria-label={`${rating} out of 5 stars`}
      >
        {stars}
      </div>

      <p className="text-gray-700 italic">“{quote}”</p>
    </article>
  );
}


// ---------- Helpers ----------
function splitIntoColumns(arr, n) {
  const cols = Array.from({ length: n }, () => []);
  arr.forEach((item, i) => cols[i % n].push(item));
  return cols;
}

// ---------- Defaults from your original HTML ----------
const defaultReviews = [

];

