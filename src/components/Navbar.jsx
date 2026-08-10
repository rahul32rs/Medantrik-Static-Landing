import React, { useEffect, useMemo, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { FaBars, FaTimes, FaChevronDown, FaMicrochip, FaLeaf, FaWind, FaPhoneAlt, FaCommentDots } from "react-icons/fa";

// NOTE: Careers is intentionally commented out per request.
const NAV_ITEMS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },

  {
    label: "Products",
    href: "/products", // main products page
    children: [
      { label: "All Products", href: "/products" },

      { label: "NodeX", href: "/products/nodex", icon: <FaMicrochip className="shrink-0" /> },
      { label: "OxySense", href: "/products/oxysense", icon: <FaLeaf className="shrink-0" /> },
      { label: "Mesh Nebulizer", href: "/products/meshnebulizer", icon: <FaWind className="shrink-0" /> },
    ],
  },

  { label: "Blog", href: "/blog" },
  { label: "Career", href: "/career" },
  { label: "Contact", href: "/contact" },

  // ✅ last item
  { label: "Order Products", href: "/order-products" },
];


export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeHash, setActiveHash] = useState("#home");
  const [productsOpen, setProductsOpen] = useState(false); // mobile accordion for Products
  const [desktopProductsOpen, setDesktopProductsOpen] = useState(false); // desktop click-to-open
  const mobileMenuRef = useRef(null);
  const desktopProductsRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Track hash for in-page highlighting (kept if you use #ids on a page)
  useEffect(() => {
    const applyActive = () => {
      const h = window.location.hash || "#home";
      setActiveHash(h.toLowerCase());
    };
    applyActive();
    window.addEventListener("hashchange", applyActive, { passive: true });

    const observers = [];
    const options = { rootMargin: "-40% 0px -55% 0px", threshold: 0 };
    NAV_ITEMS.forEach(({ href }) => {
      if (!href?.startsWith?.("#")) return;
      const id = href.slice(1);
      const el = document.getElementById(id);
      if (!el) return;
      const io = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveHash(`#${id}`);
        });
      }, options);
      io.observe(el);
      observers.push(io);
    });

    return () => {
      window.removeEventListener("hashchange", applyActive);
      observers.forEach((o) => o.disconnect());
    };
  }, []);

  // Lock body when mobile menu is open
  useEffect(() => {
    const original = document.body.style.overflow;
    document.body.style.overflow = open ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = original;
    };
  }, [open]);

  // Close menu on Esc
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") {
        setOpen(false);
        setProductsOpen(false);
        setDesktopProductsOpen(false);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  // Close desktop products dropdown on outside click
  useEffect(() => {
    const onDocClick = (e) => {
      if (!desktopProductsRef.current) return;
      if (!desktopProductsRef.current.contains(e.target)) setDesktopProductsOpen(false);
    };
    if (desktopProductsOpen) document.addEventListener("mousedown", onDocClick);
    return () => document.removeEventListener("mousedown", onDocClick);
  }, [desktopProductsOpen]);

  const prefersReducedMotion = useMemo(
    () =>
      typeof window !== "undefined" &&
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches,
    []
  );

  // motion-enabled Link for animated Link components
  const MotionLink = motion(Link);


  // Active style helper:
  // - For hash links: compare to activeHash
  // - For route links: route is active when the path exactly matches OR (for parent) when pathname starts with it
  const isActive = (href, isParent = false) => {
    if (!href) return false;
    if (href.startsWith("#")) return activeHash === href.toLowerCase();
    if (isParent) return location.pathname.startsWith(href);
    return location.pathname === href;
  };

  // Reusable classes
  const pillBase =
    "group px-3 py-2 text-sm font-medium rounded-xl transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-white/60";
  const pillIdle = "text-white/90 hover:bg-white/10 hover:text-white";
  const pillActive =
    "text-white bg-gradient-to-r from-amber-500/90 to-orange-500/90 shadow-[0_0_0_1px_rgba(255,255,255,0.08)_inset]";

  // Desktop item (no dropdown)
  const DesktopItem = ({ item }) => {
    const active = isActive(item.href);
    const cls = [pillBase, active ? pillActive : pillIdle].join(" ");

    const Label = (
      <span className="relative inline-flex items-center gap-1">
        {item.label}
        <span className="pointer-events-none absolute -bottom-1 left-0 h-[2px] w-0 group-hover:w-full transition-[width] duration-300 bg-white/70" />
      </span>
    );

    return item.href.startsWith("#") ? (
      <a href={item.href} aria-current={active ? "page" : undefined} className={cls}>
        {Label}
      </a>
    ) : (
      <Link to={item.href} aria-current={active ? "page" : undefined} className={cls}>
        {Label}
      </Link>
    );
  };

  // Desktop Products with click-to-open dropdown that animates from top
  const DesktopProducts = ({ item }) => {
    const active = isActive(item.href, true);

    return (
      <div className="relative" ref={desktopProductsRef}>
        <button
          type="button"
          className={[pillBase, active ? pillActive : pillIdle, "inline-flex items-center gap-1"].join(" ")}
          aria-haspopup="menu"
          aria-expanded={desktopProductsOpen}
          onClick={() => setDesktopProductsOpen((v) => !v)}
        >
          <span>{item.label}</span>
          <FaChevronDown className={`transition-transform ${desktopProductsOpen ? "rotate-180" : "rotate-0"}`} />
        </button>

        <AnimatePresence>
          {desktopProductsOpen && (
            <motion.div
              initial={prefersReducedMotion ? { opacity: 0 } : { opacity: 0, y: -8 }}
              animate={prefersReducedMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
              exit={prefersReducedMotion ? { opacity: 0 } : { opacity: 0, y: -8 }}
              transition={{ duration: prefersReducedMotion ? 0.001 : 0.16, ease: "easeOut" }}
              className="absolute left-0 mt-2 w-56 rounded-2xl border border-white/10 bg-[#0b133c]/95 backdrop-blur shadow-xl overflow-hidden z-50"
              role="menu"
            >
              <ul className="py-1">
                {item.children?.map((child) => {
                  const childActive = isActive(child.href);
                  return (
                    <li key={child.href}>
                      <Link
                        to={child.href}
                        onClick={() => setDesktopProductsOpen(false)}
                        className={[
                          "flex items-center gap-3 px-3.5 py-2.5 text-sm transition-all",
                          childActive
                            ? "bg-gradient-to-r from-amber-500/90 to-orange-500/90 text-white"
                            : "text-white/90 hover:bg-white/10 hover:text-white",
                        ].join(" ")}
                      >
                        {child.icon}
                        <span className="truncate">{child.label}</span>
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    );
  };

  const MobileItem = ({ item }) => {
    const active = isActive(item.href);
    const base =
      "px-3 py-3 rounded-xl text-base font-medium focus:outline-none focus-visible:ring-2 focus-visible:ring-white/60";
    const cls = active
      ? "text-white bg-gradient-to-r from-amber-500/90 to-orange-500/90"
      : "text-white hover:bg-white/10";

    if (item.children) {
      const parentActive = isActive(item.href, true);
      return (
        <div className="w-full">
          <button
            type="button"
            className={[base, parentActive ? "bg-white/10 text-white" : "text-white hover:bg-white/10", "w-full inline-flex items-center justify-between"].join(" ")}
            aria-expanded={productsOpen}
            onClick={() => setProductsOpen((v) => !v)}
          >
            <span className="inline-flex items-center gap-2">{item.label}</span>
            <FaChevronDown className={`transition-transform ${productsOpen ? "rotate-180" : "rotate-0"}`} />
          </button>
          <AnimatePresence initial={false}>
            {productsOpen && (
              <motion.ul
                initial={prefersReducedMotion ? false : { height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={prefersReducedMotion ? { opacity: 0 } : { height: 0, opacity: 0 }}
                transition={{ duration: prefersReducedMotion ? 0.001 : 0.2, ease: "easeOut" }}
                className="mt-1 ml-1 flex flex-col gap-1 overflow-hidden"
              >
                {item.children.map((child) => {
                  const childActive = isActive(child.href);
                  return (
                    <li key={child.href}>
                      <Link
                        to={child.href}
                        onClick={() => setOpen(false)}
                        className={[
                          base,
                          childActive
                            ? "bg-gradient-to-r from-amber-500/90 to-orange-500/90 text-white"
                            : "text-white hover:bg-white/10",
                          "flex items-center gap-3",
                        ].join(" ")}
                      >
                        {child.icon}
                        <span>{child.label}</span>
                      </Link>
                    </li>
                  );
                })}
              </motion.ul>
            )}
          </AnimatePresence>
        </div>
      );
    }

    return item.href.startsWith("#") ? (
      <a
        href={item.href}
        aria-current={active ? "page" : undefined}
        className={[base, cls].join(" ")}
        onClick={() => setOpen(false)}
      >
        {item.label}
      </a>
    ) : (
      <Link
        to={item.href}
        aria-current={active ? "page" : undefined}
        className={[base, cls].join(" ")}
        onClick={() => setOpen(false)}
      >
        {item.label}
      </Link>
    );
  };

  return (
    <header
      role="banner"
      className={[
        "fixed inset-x-0 top-0 z-50 transition-all",
        "bg-[#0b133c]",
        scrolled ? "bg-opacity-100 backdrop-blur-md shadow-sm" : "bg-opacity-95 backdrop-blur",
      ].join(" ")}
    >
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8" aria-label="Global">
        <div className="flex h-16 items-center justify-between gap-3">
          {/* Logo */}
          <Link to="/" className="flex items-center" aria-label="Home" onClick={() => setOpen(false)}>
            <img
              src="/images/logo/logo.png"
              alt="Logo"
              className="h-12 w-auto object-contain"
              loading="eager"
              decoding="async"
            />
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-1">
            {NAV_ITEMS.map((item) =>
              item.children ? (
                <DesktopProducts key={item.label} item={item} />
              ) : (
                <DesktopItem key={item.label} item={item} />
              )
            )}

            <div className="flex items-center gap-2 ml-3">
  <motion.a
    href="tel:+918004116503"
    aria-label="Call Us"
    initial={{ translateY: 0 }}
    animate={prefersReducedMotion ? {} : { translateY: [0, -4, 0] }}
    transition={{ repeat: Infinity, duration: 1.6, ease: 'easeInOut' }}
    whileTap={{ scale: 0.96 }}
    className="inline-flex items-center justify-center rounded-full p-2.5 text-white shadow bg-gradient-to-r from-amber-500 to-orange-500 hover:shadow-lg transition"
  >
    <FaPhoneAlt size={16} />
  </motion.a>

  {/* <motion.a
    href="mailto:info@medantrik.in"
    aria-label="Email Us"
    initial={{ translateY: 0 }}
    animate={prefersReducedMotion ? {} : { translateY: [0, -4, 0] }}
    transition={{ repeat: Infinity, duration: 1.6, ease: 'easeInOut' }}
    whileTap={{ scale: 0.96 }}
    className="inline-flex items-center justify-center rounded-full p-2.5 text-white shadow bg-gradient-to-r from-amber-500 to-orange-500 hover:shadow-lg transition"
  >
    <FaCommentDots size={16} />
  </motion.a> */}
</div>
          </div>

          {/* Mobile toggle */}
          <button
            type="button"
            className="md:hidden inline-flex items-center justify-center p-2 rounded-xl text-white hover:bg-white/15 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/60"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
          >
            <span className="sr-only">Toggle menu</span>
            {!open ? <FaBars size={22} /> : <FaTimes size={22} />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            key="mobile-menu"
            id="mobile-menu"
            role="dialog"
            aria-modal="true"
            ref={mobileMenuRef}
            initial={prefersReducedMotion ? false : { height: 0, opacity: 0 }}
            animate={prefersReducedMotion ? { height: "auto", opacity: 1 } : { height: "auto", opacity: 1 }}
            exit={prefersReducedMotion ? { opacity: 0 } : { height: 0, opacity: 0 }}
            transition={prefersReducedMotion ? { duration: 0.001 } : { duration: 0.22, ease: "easeOut" }}
            className="md:hidden overflow-hidden border-t border-white/20 bg-[#0b133c] backdrop-blur"
          >
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-3">
              <div className="flex flex-col gap-1">
                {NAV_ITEMS.map((item) => (
                  <MobileItem key={`m-${item.label}`} item={item} />
                ))}

                {/* removed Get Started here as well */}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile floating action icons (animated, orange gradient) */}
      {/* <div className="md:hidden fixed bottom-6 right-4 flex flex-col gap-3 z-50">
        <motion.a
          href="tel:+918004116503"
          aria-label="Call Us"
          initial={{ scale: 1 }}
          animate={prefersReducedMotion ? {} : { scale: [1, 1.06, 1] }}
          transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
          whileTap={{ scale: 0.96 }}
          className="inline-flex items-center justify-center rounded-full p-3 text-white shadow-lg bg-gradient-to-r from-amber-500 to-orange-500"
        >
          <FaPhoneAlt />
        </motion.a>

        <motion.a
          href="mailto:info@medantrik.in"
          aria-label="Email Us"
          initial={{ translateY: 0 }}
          animate={prefersReducedMotion ? {} : { translateY: [0, -6, 0] }}
          transition={{ repeat: Infinity, duration: 1.6, ease: "easeInOut" }}
          whileTap={{ scale: 0.96 }}
          className="inline-flex items-center justify-center rounded-full p-3 text-white shadow-lg bg-gradient-to-r from-amber-500 to-orange-500"
        >
          <FaCommentDots />
        </motion.a>
      </div> */}
    </header>
  );
}
