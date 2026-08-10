// Footer.jsx
import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { FiClock, FiPhone, FiMail, FiMapPin } from "react-icons/fi";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
  FaGithub,
  FaWhatsapp,
  FaArrowUp,
} from "react-icons/fa";

export default function Footer() {
  const year = new Date().getFullYear();
  const [showTop, setShowTop] = useState(false);
  const [supportOpen, setSupportOpen] = useState(false);
  const fabRef = useRef(null);

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 200);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Robust outside click (pointerdown)
  useEffect(() => {
    const handleOutside = (e) => {
      if (fabRef.current && !fabRef.current.contains(e.target)) setSupportOpen(false);
    };
    document.addEventListener("pointerdown", handleOutside, { passive: true });
    return () => document.removeEventListener("pointerdown", handleOutside);
  }, []);

  const social = [
    { Icon: FaFacebookF, label: "Facebook", href: "https://www.facebook.com/medantrik?_rdr" },
    { Icon: FaTwitter, label: "Twitter", href: "https://x.com/medantrik" },
    { Icon: FaInstagram, label: "Instagram", href: "https://instagram.com/medantrik" },
    { Icon: FaLinkedinIn, label: "LinkedIn", href: "https://www.linkedin.com/company/89568114/admin/dashboard/" },
    { Icon: FaYoutube, label: "YouTube", href: "https://www.youtube.com/@medantrik" },
    // { Icon: FaGithub, label: "GitHub", href: "https://github.com/MEDANTRIK" },
    { Icon: FaWhatsapp, label: "WhatsApp", href: "https://wa.me/8004116503" },
  ];

  const quickLinks = [
    { label: "About Us", href: "/about" },
    { label: "Products", href: "/products" },
    { label: "Careers", href: "/career" },
    { label: "Blog", href: "/blog" },
    { label: "Contact", href: "/contact" },
  ];

  const usefulLinks = [
    { label: "Privacy Policy", href: "/privacypolicy" },
    { label: "Terms and Conditions", href: "/terms" },
    { label: "Returns and Exchange", href: "/returnsandex" },
    { label: "Support", href: "/support" },
    { label: "FAQ", href: "/faq" },
  ];

  const onTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="relative bg-[#0b133c] text-white/90">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="max-w-md">
            <Link to="/" aria-label="Medantrik home" className="inline-flex items-center gap-2">
              <img
                src="/images/logo/logo.png"
                alt="Medantrik logo"
                className="h-13 w-auto object-contain"
                loading="lazy"
                decoding="async"
              />
            </Link>
            <p className="mt-4 text-base leading-relaxed text-white/80">
  Medantrik Medtech leverages AI and smart medical devices to deliver accurate,
  accessible, and personalized respiratory healthcare solutions.
</p>

          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <ul className="mt-4 space-y-3">
              {quickLinks.map((l) => (
                <li key={l.label}>
                  <Link
                    to={l.href}
                    className="inline-flex items-center gap-2 text-white/80 hover:text-white transition-colors"
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-white/50" />
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Useful Links */}
          <div>
            <h3 className="text-lg font-semibold">Useful Links</h3>
            <ul className="mt-4 space-y-3">
              {usefulLinks.map((l) => (
                <li key={l.label}>
                  <Link to={l.href} className="text-white/80 hover:text-white transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Work Hours / Contact */}
          <div>
            <h3 className="text-lg font-semibold">Work Hours</h3>
            <ul className="mt-4 space-y-3 text-white/80">
              <li className="flex items-start gap-3">
                <FiClock className="mt-1 shrink-0" />
                <span>9 AM – 5 PM, Monday – Saturday</span>
              </li>
              <li className="flex items-start gap-3">
                <FiPhone className="mt-1 shrink-0" />
                <a href="tel:+918004116503" className="hover:text-white">
                  +91 8853667396
                </a>
              </li>
              <li className="flex items-start gap-3">
                <FiMail className="mt-1 shrink-0" />
                <a href="mailto:info@medantrik.in" className="hover:text-white">
                  info@medantrik.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <FiMapPin className="mt-1 shrink-0" />
                <span>Noida, India</span>
              </li>
            </ul>

            <a
              href="tel:+918004116503"
              className="mt-5 inline-flex items-center justify-center gap-2 rounded-xl bg-amber-500 px-4 py-2 font-semibold text-[#0b133c] shadow-sm ring-1 ring-amber-400/60 hover:bg-amber-400 transition"
            >
              <FiPhone /> Call Us Today
            </a>
          </div>
        </div>

        <hr className="mt-12 border-white/10" />

        <div className="mt-6 flex flex-col-reverse items-center justify-between gap-6 sm:flex-row">
          <p className="text-sm text-white/70">© {year} Medantrik Medtech Pvt Ltd. All rights reserved.</p>

          <div className="flex items-center gap-2">
            {social.map(({ Icon, label, href }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                target="_blank"
                rel="noreferrer"
                className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-white/10 hover:bg-white/20 text-white transition focus:outline-none focus-visible:ring-2 focus-visible:ring-white/60"
              >
                {React.createElement(Icon, { size: 18 })}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Floating Support (LEFT) */}
      <div id="support-fab" ref={fabRef} className="fixed left-6 bottom-6 z-50">
        <AnimatePresence>
          {supportOpen && (
            <motion.div
              key="menu"
              initial={{ opacity: 0, scale: 0.85, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.85, y: 20 }}
              transition={{ type: "spring", stiffness: 260, damping: 20 }}
              className="mb-3 flex flex-col items-center space-y-3"
            >
              <a
                href="tel:+918004116503"
                onClick={() => setSupportOpen(false)}
                className="h-12 w-12 rounded-full overflow-hidden shadow-lg border border-white/40 hover:scale-110 transition-transform"
              >
                <img src="/images/contact/callicon.png" alt="Call" className="h-full w-full object-contain" />
              </a>

              <a
                href="https://wa.me/8004116503"
                target="_blank"
                rel="noreferrer"
                onClick={() => setSupportOpen(false)}
                className="h-12 w-12 rounded-full overflow-hidden shadow-lg border border-white/40 hover:scale-110 transition-transform"
              >
                <img src="/images/contact/whataapp.png" alt="WhatsApp" className="h-full w-full object-contain" />
              </a>
            </motion.div>
          )}
        </AnimatePresence>

        <motion.button
          type="button"
          aria-label="Support"
          onClick={(e) => {
            e.stopPropagation();
            setSupportOpen((s) => !s);
          }}
          className={`h-14 w-14 sm:h-16 sm:w-16 p-0 rounded-full overflow-hidden inline-flex items-center justify-center border-2 bg-transparent transition-all duration-300 ${
            supportOpen
              ? "border-white/60 shadow-[0_6px_24px_rgba(0,0,0,.25)]"
              : "border-transparent shadow-[0_6px_16px_rgba(0,0,0,.25)]"
          }`}
          whileTap={{ scale: 0.92 }}
        >
          <motion.img
            key={supportOpen ? "close" : "plugin"}
            src={supportOpen ? "/images/contact/close-button.png" : "/images/contact/plugin.jpg"}
            alt="Support"
            className="h-full w-full object-cover rounded-full select-none"
            animate={supportOpen ? { rotate: 180, y: 0 } : { y: [0, -3, 0] }}
            transition={
              supportOpen
                ? { duration: 0.45, ease: "easeInOut" }
                : { repeat: Infinity, duration: 1.8, ease: "easeInOut" }
            }
            draggable={false}
          />
        </motion.button>
      </div>

      {/* Back to top (RIGHT) */}
      {showTop && (
        <button
          onClick={onTop}
          aria-label="Back to top"
          className="fixed bottom-6 right-6 z-50 inline-flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-full bg-[#fe8c00] text-[#0b133c] shadow-lg hover:bg-amber-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-300"
        >
          <FaArrowUp />
        </button>
      )}
    </footer>
  );
}
