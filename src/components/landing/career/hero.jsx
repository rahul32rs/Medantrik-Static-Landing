import React from "react";
import clientImg from "../../../../public/images/career/client.png";

export default function CareerHero() {
  return (
    <section className="relative w-full min-h-[90vh] flex items-center justify-center bg-orange-500 overflow-hidden px-6 md:px-20 md:py-24 py-16">
      {/* subtle radial texture */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_15%,rgba(255,255,255,0.08),transparent_40%)] pointer-events-none" />

      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center relative z-10">
        {/* LEFT: copy */}
        <div className="text-white md:text-left text-center space-y-6">
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight text-black">
            Join Medantrik Be the breath of change
          </h1>

          <p className="text-black/90 text-base md:text-lg max-w-lg">
            Hum innovative respiratory products banate hain — NodeX aur clinical-grade solutions jo rozmarra ki zindagi sudhaar dete hain. Agar aap passionate aur impact-driven ho, toh humari team mein apni jagah dhoondho.
          </p>

          {/* Only Contact Team button — Explore Openings removed */}
          <div className="flex justify-center md:justify-start">
            <a
              href="#career"
              className="bg-black text-white px-6 py-3 rounded-full font-semibold flex items-center justify-center gap-2 mx-auto md:mx-0 hover:bg-gray-800 transition"
            >
              Contact Team
            </a>
          </div>

          <p className="text-sm text-black/70 max-w-md mt-2">
            Flexible remote options, engineering, aur customer success roles — hum diverse skillsets welcome karte hain.
          </p>
        </div>

        {/* RIGHT: image with concentric rings */}
        <div className="relative flex justify-center md:justify-end pointer-events-none">
          <div className="relative w-[320px] md:w-[460px] lg:w-[560px] aspect-square">
            {/* soft glow */}
            <div className="absolute inset-0 rounded-full bg-white/10 blur-3xl" />

            {/* rotating rings */}
            <svg viewBox="0 0 100 100" className="absolute inset-0 animate-spin-slower" aria-hidden="true">
              <g fill="none" stroke="white" strokeOpacity="0.35">
                <circle cx="50" cy="50" r="28" strokeWidth="0.6" />
                <circle cx="50" cy="50" r="38" strokeWidth="0.6" />
                <circle cx="50" cy="50" r="48" strokeWidth="0.6" />
              </g>
              <g fill="none" stroke="white" strokeLinecap="round" strokeOpacity="0.5">
                <circle cx="50" cy="50" r="34" strokeWidth="1.1" strokeDasharray="5 14" />
                <circle cx="50" cy="50" r="42" strokeWidth="1.1" strokeDasharray="6 20" />
              </g>
            </svg>

            {/* hero client image */}
            <img
              src={clientImg}
              alt="Medantrik team / client imagery"
              className="absolute inset-0 m-auto w-[240px] md:w-[340px] lg:w-[520px] drop-shadow-2xl z-10"
            />

            {/* floating badges */}
            <div className="hidden md:block absolute top-6 left-6 z-20 pointer-events-none">
              <div className="bg-white/20 text-black px-3 py-2 rounded-full text-sm font-medium backdrop-blur">
                Clinical R&D
              </div>
            </div>

            <div className="hidden md:block absolute bottom-6 right-6 z-20 pointer-events-none">
              <div className="bg-white/20 text-black px-3 py-2 rounded-full text-sm font-medium backdrop-blur">
                Customer Success
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
