import React from "react";
import heroImg from "../../../../public/images/contact/contact1.png";

const Hero = () => {
  return (
    <section className="relative w-full min-h-[90vh] flex items-center justify-center bg-orange-500 overflow-hidden px-6 md:px-20 md:py-24 py-16">
      {/* background texture optional */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.12),transparent_60%)]" />

      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center relative z-10">
        {/* LEFT */}
        <div className="text-white md:text-left text-center space-y-6">
          <h1 className="text-4xl md:text-5xl font-bold leading-snug text-black">
            Engineering the Future of Respiratory Care
          </h1>
          <p className="text-black text-base md:text-lg max-w-lg">
            Explore Medantrik's innovative respiratory technologies designed for modern healthcare. Connect with our team for product demonstrations, technical consultation, clinical collaborations, and dedicated customer support.
          </p>
          {/* <button className="bg-black text-white px-6 py-3 rounded-full font-semibold flex items-center justify-center gap-2 mx-auto md:mx-0 hover:bg-gray-800 transition">
            Schedule a Demo <span className="text-lg">➜</span>
          </button> */}
        </div>

        {/* RIGHT — EXACT 2nd IMAGE STYLE */}
        <div className="relative flex justify-center md:justify-end pointer-events-none">
          {/* holder keeps all circles perfectly centered */}
          <div className="relative w-[340px] md:w-[480px] lg:w-[600px] aspect-square">
            {/* soft white glow/blur circle */}
            <div className="absolute inset-0 rounded-full bg-white/10 blur-2xl" />

            {/* WHITE CONCENTRIC RINGS (rotate) */}
            <svg
              viewBox="0 0 100 100"
              className="absolute inset-0 animate-spin-slower"
              aria-hidden="true"
            >
              <g fill="none" stroke="white" strokeOpacity=".35">
                <circle cx="50" cy="50" r="30" strokeWidth="0.6" />
                <circle cx="50" cy="50" r="38" strokeWidth="0.6" />
                <circle cx="50" cy="50" r="46" strokeWidth="0.6" />
              </g>

              {/* dashed accent rings like reference */}
              <g fill="none" stroke="white" strokeLinecap="round" strokeOpacity=".55">
                <circle cx="50" cy="50" r="34" strokeWidth="1.2" strokeDasharray="5 16" />
                <circle cx="50" cy="50" r="42" strokeWidth="1.2" strokeDasharray="6 22" />
              </g>
            </svg>

            {/* HERO IMAGE — always on top */}
            <img
              src={heroImg}
              alt="Medantrik contact hero - NodeX device"
              className="absolute inset-0 m-auto w-[260px] md:w-[340px] lg:w-[440px] drop-shadow-2xl z-10"
            />
          </div>

          {/* (optional) floating white-icon badges can be absolutely placed here with z-20 */}
        </div>
      </div>
    </section>
  );
};

export default Hero;
