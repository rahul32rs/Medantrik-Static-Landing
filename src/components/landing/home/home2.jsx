import React from 'react';
import logo1 from '../../../../public/images/brand-logo/BrandLogo1.png';
import logo2 from '../../../../public/images/brand-logo/BrandLogo2.png';
import logo3 from '../../../../public/images/brand-logo/BrandLogo3.png';
import logo4 from '../../../../public/images/brand-logo/BrandLogo4.png';
import logo5 from '../../../../public/images/brand-logo/BrandLogo5.png';
import logo6 from '../../../../public/images/brand-logo/BrandLogo6.png';
import logo7 from '../../../../public/images/brand-logo/BrandLogo7.png';

const logos = [logo1, logo2, logo3, logo4, logo5, logo6, logo7];

const BrandCarousel = () => {
  const repeatedLogos = [...logos, ...logos]; // repeat for infinite effect

  return (
   <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mb-10 relative overflow-hidden">

      {/* Heading */}
      <h2 className="text-3xl text-center md:text-[48px] py-10 font-semibold leading-tight">
         Our Partners &  <span className="text-orange-600">  Supporters </span>
      </h2>

      {/* Scrolling logos */}
      <div className="overflow-hidden">
        <div className="flex items-center gap-16 animate-marquee w-max">
          {repeatedLogos.map((logo, i) => (
            <img
              key={i}
              src={logo}
              alt={`brand-${i}`}
              className="h-18 w-auto transition duration-300"
            />
          ))}
        </div>
      </div>

      {/* Keyframes */}
      <style>{`
        @keyframes marquee {
  0%   { transform: translateX(0); }
  100% { transform: translateX(-50%); }
}

        .animate-marquee {
  animation: marquee 20s linear infinite;
}

      `}</style>
    </div>
  );
};

export default BrandCarousel;
