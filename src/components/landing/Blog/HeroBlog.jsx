import React from "react";
import BlogImg from "../../../../public/images/blog/blogdoctor.png";

export default function BlogHero() {
  return (
    <section className="relative w-full min-h-[90vh] flex items-center justify-center bg-orange-500 overflow-hidden px-6 md:px-20 md:py-24 py-16">
      
      {/* subtle radial texture */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(255,255,255,0.1),transparent_45%)] pointer-events-none" />

      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center relative z-10">

        {/* LEFT: Blog copy */}
        <div className="md:text-left text-center space-y-6">
          <span className="inline-block text-xs tracking-widest uppercase text-black/80">
            Medantrik Blog
          </span>

          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight text-black">
            Medantrik Blog on Respiratory Health <br />
            & AI-Driven Care
          </h1>

          <p className="text-black/90 text-base md:text-lg max-w-lg">
            Medantrik MedTech ke blogs aapko le jaate hain respiratory care ke future
            mein — jahan AI, connected devices aur clinical innovation milkar
            patient outcomes ko better bana rahe hain.
          </p>

          {/* CTA */}
          <div className="flex justify-center md:justify-start">
            <a
              href="#blogs"
              className="bg-black text-white px-6 py-3 rounded-full font-semibold flex items-center justify-center gap-2 mx-auto md:mx-0 hover:bg-gray-800 transition"
            >
              Explore Blogs →
            </a>
          </div>

          <p className="text-sm text-black/70 max-w-md">
            Research • Product • Healthcare • Technology
          </p>
        </div>

        {/* RIGHT: image with rings */}
        <div className="relative flex justify-center md:justify-end pointer-events-none">
          <div className="relative w-[300px] md:w-[450px] lg:w-[540px] aspect-square">

            {/* glow */}
            <div className="absolute inset-0 rounded-full bg-white/10 blur-3xl" />

            {/* rotating rings */}
            <svg
              viewBox="0 0 100 100"
              className="absolute inset-0 animate-spin-slower"
              aria-hidden="true"
            >
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

            {/* blog image */}
            <img
              src={BlogImg}
              alt="Medantrik healthcare blog illustration"
              className="absolute inset-0 m-auto w-[220px] md:w-[320px] lg:w-[480px] drop-shadow-2xl z-10"
            />

            {/* badges */}
            <div className="hidden md:block absolute top-6 left-6 z-20">
              <div className="bg-white/20 text-black px-3 py-2 rounded-full text-sm font-medium backdrop-blur">
                Blog in Healthcare
              </div>
            </div>

            <div className="hidden md:block absolute bottom-6 right-6 z-20">
              <div className="bg-white/20 text-black px-3 py-2 rounded-full text-sm font-medium backdrop-blur">
                Respiratory Research
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
