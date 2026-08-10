import React, { useState } from 'react';
import whoImg from '../../../../public/images/AboutMultipleai/whoweare.jpg';
import missionImg from '../../../../public/images/AboutMultipleai/ourmission.jpg';
import visionImg from '../../../../public/images/AboutMultipleai/ourvision.jpg';
// import sidebg1 from '../../../assets/home/sidebg1.png';
// import sidebg2 from '../../../assets/home/sidebg2.png';

const sections = [
  {
    title: 'Who We Are',
    heading: 'We’re Medantrik Medtech deep-tech health startup incubated at IIT Kanpur',
    content: `We’re Medantrik Medtech,  The team previously developed India's first Oxygen Purity Meter during the COVID-19 crisis and contributed to drafting its BIS standard—a major milestone in national medical innovation.

Our focus is on building practical tools that assist with routine tasks. We aim to simplify how businesses manage their work, reduce time spent on manual processes, and improve consistency in operations.`,
    img: whoImg,
  },
  {
    "title": "Mission",
    "heading": "Advancing Care Through Intelligent MedTech",
    "content": "At Medantrik, our mission is to make healthcare smarter, faster, and truly patient-focused. We build MedTech solutions that simplify complex workflows, reduce administrative load, and empower clinical teams to focus on what matters most — delivering exceptional care.\n\nWe aim to provide reliable, practical, and scalable technology that supports everyday healthcare operations with ease and confidence.",
    img: whoImg,
  },
  {
    "title": "Vision",
    "heading": "A Healthier Future Powered by Seamless Intelligent Technology",
    "content": "We envision a future where AI and healthcare work together effortlessly — where technology supports doctors quietly in the background while making patient care safer, smoother, and more efficient.\n\nOur vision is to become the most trusted and user-friendly MedTech partner, delivering powerful yet simple digital solutions that prepare healthcare for the future with automation, real-time insights, and a patient-first approach.",
    img: whoImg,
  }
]


const Home5 = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="w-full relative overflow-hidden bg-white mt-2">
      {/* Bottom Left Decorative Image (fixed overlap + positioning) */}
      {/* <img
        src={sidebg1}
        alt="Decoration"
        className="absolute -bottom-1 -left-35 w-[300px] md:w-[400px] lg:w-[500px] pointer-events-none z-0 opacity-120"
      /> */}

      <div className="w-full text-black py-2 relative z-10">
        {/* Page Heading */}
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl md:text-[48px] font-semibold leading-tight">
          Who We Are 
          <span className="text-orange-600"> Medantrik?</span>
        </h2>
        </div>

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6">
          {/* Tabs Row with Active + Others */}
          <div className="flex gap-3 sm:gap-4 mb-10 overflow-x-auto no-scrollbar justify-start sm:justify-start">
            {sections.map((sec, i) => {
              const isActive = activeIndex === i;
              return (
                <button
                  key={i}
                  onClick={() => setActiveIndex(i)}
                  className={`whitespace-nowrap text-[15px] md:text-[16px] font-medium px-5 py-2 rounded-full transition-all duration-300
                    ${
                      isActive
                        ? 'bg-white text-orange-400 border-[3px] border-[#fe8c00] shadow-md'
                        : 'text-black/80 hover:text-orange-400'
                    }`}
                >
                  {sec.title}
                </button>
              );
            })}
          </div>

          {/* Content Box */}
          <div className="border-[3px] border-[#fe8c00] rounded-3xl shadow-lg px-6 md:px-8 lg:px-10 py-8 md:py-10 transition-all duration-500 ease-in-out">
            <div className="grid md:grid-cols-2 items-center gap-10 lg:gap-12">
              {/* Left Text */}
              <div>
                <h3 className="text-[18px] md:text-[28px] lg:text-[32px] font-semibold leading-tight text-orange-400 mb-6">
                  {sections[activeIndex].heading}
                </h3>
                <p className="text-[#1b244b]/80 leading-relaxed max-w-prose">
                  {sections[activeIndex].content}
                </p>
              </div>

              {/* Right Image */}
              <div className="w-full">
                <img
                  src={sections[activeIndex].img}
                  alt={sections[activeIndex].title}
                  className="rounded-2xl w-full max-w-[600px] shadow-xl object-cover aspect-[4/2] mx-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* optional tiny helper to hide scrollbar on webkit */}
      <style>{`
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
    </div>
  );
};

export default Home5;
