import React from "react";
import { motion as Motion } from "framer-motion";
import { FaLinkedin, FaFacebookF, FaInstagram } from "react-icons/fa";

// Images
import DrAnandImg from "../../../../public/images/about/team/dr.anand.png";
import RKAgarwalImg from "../../../../public/images/about/team/rkagrwal.png";
import JhaImg from "../../../../public/images/about/team/jha.png";
import VedprakashImg from "../../../../public/images/about/team/vedprakash.png";

const teamMembers = [
  {
    name: "Dr. Anand Kumar",
    role: "Professor & Head of Chest Department (GSVM College) • Respiratory Diseases Expert",
    image: DrAnandImg,
    socials: { linkedin: "#", facebook: "#", instagram: "#" },
  },
  {
    name: "RK Agarwal",
    role: "Managing Director (Netplast) • 35+ Years • IIT Kanpur Alumni",
    image: RKAgarwalImg,
    socials: { linkedin: "#", facebook: "#", instagram: "#" },
  },
  {
    name: "Shikhar Krishn Jha",
    role: "Assistant Professor, Dept. of Material Science & Engineering • IIT Kanpur",
    image: JhaImg,
    socials: { linkedin: "#", facebook: "#", instagram: "#" },
  },
  {
    name: "Dr. Vedprakash Shukla",
    role: "MBBS, DTCD • 35+ Years of Experience",
    image: VedprakashImg,
    socials: { linkedin: "#", facebook: "#", instagram: "#" },
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.08, delayChildren: 0.04 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 180, damping: 20 } },
};

const SocialButton = ({ href, label, children }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    aria-label={label}
    className="inline-flex h-9 w-9 items-center justify-center rounded-full text-white transition-all duration-300
               bg-gradient-to-r from-[#fe8c00] to-[#f83600] group-hover/card:bg-white group-hover/card:text-black
               group-hover/card:[background-image:none] hover:!bg-[#1d1d1d] hover:!text-white"
  >
    {children}
  </a>
);

function TeamCard({ member }) {
  return (
    <Motion.article
      variants={cardVariants}
      whileHover={{ y: -4 }}
      className="group/card relative flex h-full flex-col overflow-hidden rounded-[24px] bg-white ring-1 ring-black/5 shadow-sm"
    >
      <div
        className="pointer-events-none absolute inset-0 w-0 h-full rounded-[24px]
                   shadow-[inset_0_0_25px_rgba(0,0,0,0.30)]
                   bg-gradient-to-r from-[#fe8c00] to-[#f83600]
                   transition-all duration-300 group-hover/card:w-full"
        aria-hidden
      />

      <div className="relative z-10 flex h-full flex-col p-6">
        {/* Fixed-size avatar wrapper */}
        <div
          className="mx-auto mb-5 w-44 h-44 sm:w-48 sm:h-48 overflow-hidden rounded-full p-3
                     transition-all duration-500 shadow-[inset_0_0_20px_rgba(0,0,0,0.20)] group-hover/card:p-0"
        >
          <img
            src={member.image}
            alt={member.name}
            loading="lazy"
            className="h-full w-full rounded-full object-cover"
          />
        </div>

        {/* Text block with fixed minimum heights to avoid jumpy layout */}
        <div className="text-center transition-colors duration-300 group-hover/card:text-white">
          <h3 className="text-xl sm:text-2xl font-semibold tracking-tight min-h-[2.5rem] flex items-center justify-center">
            {member.name}
          </h3>
          <p className="mt-1 text-sm sm:text-base text-slate-600 group-hover/card:text-white/90 min-h-[3.5rem]">
            {member.role}
          </p>
        </div>

        {/* Push socials to bottom so all cards align */}
        <div className="mt-auto">
          <ul className="mt-4 flex items-center justify-center gap-3">
            {member.socials.facebook && (
              <li><SocialButton href={member.socials.facebook} label={`${member.name} on Facebook`}><FaFacebookF /></SocialButton></li>
            )}
            {member.socials.instagram && (
              <li><SocialButton href={member.socials.instagram} label={`${member.name} on Instagram`}><FaInstagram /></SocialButton></li>
            )}
            {member.socials.linkedin && (
              <li><SocialButton href={member.socials.linkedin} label={`${member.name} on LinkedIn`}><FaLinkedin /></SocialButton></li>
            )}
          </ul>
        </div>
      </div>
    </Motion.article>
  );
}

export default function About3() {
  return (
    <section className="relative overflow-hidden bg-white py-12 sm:py-16 md:py-20">
      <div className="container mx-auto px-4 sm:px-6 md:px-10 lg:px-16">
        <header className="mx-auto mb-10 sm:mb-14 max-w-3xl text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold leading-tight">Meet the Mentors</h2>
          <p className="mt-3 text-slate-600">A small crew with big energy—builders, thinkers, and doers.</p>
        </header>

        <Motion.ul
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8 items-stretch"
        >
          {teamMembers.map((m) => (
            <li key={m.name} className="list-none h-full">
              <TeamCard member={m} />
            </li>
          ))}
        </Motion.ul>
      </div>
    </section>
  );
}
