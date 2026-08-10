import React from 'react';

const Home5 = () => {
  return (
    <section className="bg-white py-16 md:py-24 px-4 md:px-10 relative overflow-hidden">
      <div className="max-w-7xl mx-auto text-center">
        {/* Heading */}
        <h2 className="text-3xl md:text-[48px] font-semibold leading-tight mb-12 md:mb-20">
          What can you do with <br />
          <span className="text-orange-600">Medantrik?</span>
        </h2>

        {/* Desktop View: SVG with Curves and Positioned Boxes */}
        <div className="relative hidden md:block h-[280px] w-full">
          <svg
            className="absolute top-0 left-0 w-full h-full z-0"
            viewBox="0 0 1100 250"
            preserveAspectRatio="none"
          >
            <path
              d="M 0 200 C 180 300, 320 100, 500 60 
                C 680 20, 820 200, 1050 250 "
              stroke="#E5D8FA"
              strokeWidth="8"
              fill="none"
            />
            <circle cx="140" cy="225" r="8" fill="#f8972fff" />
            <circle cx="550" cy="55" r="8" fill="#f8972fff" />
            <circle cx="920" cy="208" r="8" fill="#f8972fff" />
          </svg>

          <div className="absolute top-0 left-0 w-full h-full">
            {/* Left box */}
            <div className="absolute top-[-20px] left-0 w-full max-w-[280px] text-center ml-12">
              <h3 className="text-xl font-semibold text-black mb-2">Diagnose</h3>
              <p className="text-sm text-gray-700 leading-relaxed">
                Experience next-generation lung diagnostics powered by AI. Identify respiratory conditions early through precise data analysis and real-time health insights.
              </p>
            </div>

            {/* Center box */}
            <div className="absolute bottom-[-20px] left-1/2 transform -translate-x-1/2 w-full max-w-[280px] text-center">
              <h3 className="text-xl font-semibold text-black mb-2">Personalize</h3>
              <p className="text-sm text-gray-700 leading-relaxed">
                Unlock personalized care plans tailored to your lung health. Our AI-driven systems adapt to your unique needs, empowering you to breathe better every day.
              </p>
            </div>

            {/* Right box */}
            <div className="absolute top-[-20px] right-0 w-full max-w-[280px] text-center mr-12">
              <h3 className="text-xl font-semibold text-black mb-2">Empower</h3>
              <p className="text-sm text-gray-700 leading-relaxed">
                Take control of your respiratory well-being with smart, connected devices and actionable insights designed to keep your lungs healthy for life.
              </p>
            </div>
          </div>
        </div>

        {/* Mobile View: Stack Boxes Vertically */}
        <div className="block md:hidden space-y-10 mt-4">
          <div className="text-center">
            <h3 className="text-xl font-semibold text-black mb-2">Diagnose</h3>
            <p className="text-sm text-gray-700 leading-relaxed">
              Experience next-generation lung diagnostics powered by AI. Identify respiratory conditions early through precise data analysis and real-time health insights.
            </p>
          </div>

          <div className="text-center">
            <h3 className="text-xl font-semibold text-black mb-2">Personalize</h3>
            <p className="text-sm text-gray-700 leading-relaxed">
              Unlock personalized care plans tailored to your lung health. Our AI-driven systems adapt to your unique needs, empowering you to breathe better every day.
            </p>
          </div>

          <div className="text-center">
            <h3 className="text-xl font-semibold text-black mb-2">Empower</h3>
            <p className="text-sm text-gray-700 leading-relaxed">
              Take control of your respiratory well-being with smart, connected devices and actionable insights designed to keep your lungs healthy for life.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home5;
