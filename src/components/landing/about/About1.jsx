import React from 'react';
import Img1 from '../../../../public/images/about/banner/7.png';
import Img2 from '../../../../public/images/about/banner/1.png';
import Img3 from '../../../../public/images/about/banner/3.png';
import Img4 from '../../../../public/images/about/banner/4.png';
import Img5 from '../../../../public/images/about/banner/2.png';
import Img6 from '../../../../public/images/about/banner/6.png';
import Img7 from '../../../../public/images/about/banner/5.png';

const teamImages = [Img4, Img2, Img3, Img1, Img5, Img6, Img7];

const angleMap = [
  'rotate-y-[60deg] scale-110',
  'rotate-y-[30deg] scale-95',
  'rotate-y-[15deg] scale-90',
  'rotate-y-0 scale-89',
  '-rotate-y-[15deg] scale-90',
  '-rotate-y-[30deg] scale-95',
  '-rotate-y-[60deg] scale-110',
];

const About1 = () => {
  return (
    <div className="bg-white pt-10 sm:pt-38 text-center">
      <div className="px-4 sm:px-6">
        <div className="hidden sm:flex justify-center items-center gap-6 perspective-[1000px]">
          {teamImages.map((img, idx) => (
            <div
              key={idx}
              className={`w-40 h-64 md:w-48 md:h-72 transform-gpu ${angleMap[idx]} transition-transform duration-300`}
            >
              <img
                src={img}
                alt={`Team ${idx + 1}`}
                className="w-full h-full object-cover rounded-xl shadow-xl"
              />
            </div>
          ))}
        </div>

        {/* Mobile - Horizontal Scroll */}
        <div className="flex sm:hidden gap-4 overflow-x-auto px-2 py-4">
          {teamImages.map((img, idx) => (
            <div key={idx} className="flex-none w-40 h-60 shrink-0">
              <img
                src={img}
                alt={`Team ${idx + 1}`}
                className="w-full h-full object-cover rounded-xl shadow-md"
              />
            </div>
          ))}
        </div>
      </div>

      <p className="mt-10 sm:mt-12 text-base sm:text-xl text-gray-600 font-semibold max-w-4xl mx-auto px-4">
  We help healthcare professionals and patients breathe easier through intelligent, data-driven innovation. 
  Medantrik integrates AI-powered diagnostics and personalized respiratory solutions to simplify complex challenges in lung health. 
  Our technology empowers medical experts to make faster, more accurate decisions—so every patient can breathe freely and live without limitations.
</p>

    </div>
  );
};

export default About1;
