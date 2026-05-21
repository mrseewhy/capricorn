import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence, type Variants } from "framer-motion";
import { Menu, X, Phone } from "lucide-react";
import logo from "../assets/logo.png";

const navLinks = [
  { label: "Home", to: "/" },
  { label: "About Us", to: "/about-us" },
  { label: "Our Properties", to: "/our-properties" },
  { label: "Services", to: "/services" },
  { label: "Contact Us", to: "/contact-us" },
];

const drawerVariants: Variants = {
  closed: { x: "100%", opacity: 0 },
  open: {
    x: 0,
    opacity: 1,
    transition: { type: "spring" as const, damping: 30, stiffness: 280 },
  },
  exit: { x: "100%", opacity: 0, transition: { duration: 0.25 } },
};

const linkItemVariants: Variants = {
  closed: { x: 30, opacity: 0 },
  open: {
    x: 0,
    opacity: 1,
    transition: { type: "spring" as const, damping: 24, stiffness: 260 },
  },
};

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { pathname } = useLocation();
  const isHome = pathname === "/";

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  const solid = scrolled || !isHome;

  return (
    <>
      <motion.header
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
        style={{
          background: solid
            ? "rgba(13, 10, 8, 0.97)"
            : "linear-gradient(to bottom, rgba(13,10,8,0.72) 0%, transparent 100%)",
          backdropFilter: solid ? "blur(12px)" : "none",
          boxShadow: solid
            ? "0 1px 0 rgba(200,145,31,0.18), 0 4px 24px rgba(0,0,0,0.18)"
            : "none",
        }}
        animate={{ y: 0 }}
        initial={{ y: -20 }}
        transition={{ duration: 0.6 }}
      >
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 flex items-center justify-between h-20">
          <Link to="/" className="shrink-0 flex items-center">
            <img
              src={logo}
              alt="Capricorn Global Properties"
              className="h-11 w-auto"
            />
          </Link>

          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map(({ label, to }) => (
              <Link
                key={to}
                to={to}
                className="relative text-sm font-sans tracking-wide group"
                style={{
                  color:
                    pathname === to
                      ? "var(--color-gold-400)"
                      : "rgba(249,246,239,0.82)",
                  fontWeight: 400,
                  letterSpacing: "0.04em",
                }}
              >
                {label}
                <span
                  className="absolute -bottom-0.5 left-0 h-px transition-all duration-300 group-hover:w-full"
                  style={{
                    width: pathname === to ? "100%" : "0%",
                    background:
                      "linear-gradient(90deg, var(--color-gold-500), var(--color-gold-300))",
                  }}
                />
              </Link>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-4">
            <a
              href="tel:+27795833788"
              className="flex items-center gap-2 text-sm"
              style={{
                color: "var(--color-gold-400)",
                letterSpacing: "0.04em",
              }}
            >
              <Phone size={14} />
              <span>+27 795 833 788</span>
            </a>
            <Link
              to="/our-properties"
              className="px-5 py-2.5 text-sm font-semibold tracking-widest uppercase transition-all duration-300"
              style={{
                background:
                  "linear-gradient(135deg, var(--color-gold-500), var(--color-gold-600))",
                color: "#fff",
                letterSpacing: "0.1em",
                fontSize: "0.72rem",
                boxShadow: "0 4px 16px -2px rgba(200,145,31,0.35)",
              }}
            >
              View Properties
            </Link>
          </div>

          <button
            className="lg:hidden p-2 rounded-sm"
            style={{ color: "var(--color-gold-400)" }}
            onClick={() => setMobileOpen(true)}
            aria-label="Open menu"
          >
            <Menu size={24} />
          </button>
        </div>
      </motion.header>

      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              className="fixed inset-0 z-[60]"
              style={{
                background: "rgba(13,10,8,0.7)",
                backdropFilter: "blur(4px)",
              }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileOpen(false)}
            />
            <motion.div
              className="fixed top-0 right-0 bottom-0 w-80 z-[70] flex flex-col"
              style={{
                background: "var(--color-charcoal-950)",
                borderLeft: "1px solid rgba(200,145,31,0.18)",
              }}
              variants={drawerVariants}
              initial="closed"
              animate="open"
              exit="exit"
            >
              <div
                className="flex items-center justify-between px-8 py-6 border-b"
                style={{ borderColor: "rgba(200,145,31,0.15)" }}
              >
                <img
                  src={logo}
                  alt="Capricorn Global Properties"
                  className="h-10 w-auto"
                />
                <button
                  onClick={() => setMobileOpen(false)}
                  style={{ color: "var(--color-gold-400)" }}
                  aria-label="Close menu"
                >
                  <X size={22} />
                </button>
              </div>

              <nav className="flex-1 flex flex-col justify-center px-8 gap-1">
                {navLinks.map(({ label, to }, i) => (
                  <motion.div
                    key={to}
                    variants={linkItemVariants}
                    initial="closed"
                    animate="open"
                    transition={{ delay: 0.08 + i * 0.07 }}
                  >
                    <Link
                      to={to}
                      className="block py-3 text-2xl border-b"
                      style={{
                        fontFamily: "var(--font-serif)",
                        color:
                          pathname === to
                            ? "var(--color-gold-400)"
                            : "var(--color-ivory-200)",
                        borderColor: "rgba(200,145,31,0.1)",
                        fontWeight: 400,
                      }}
                    >
                      {label}
                    </Link>
                  </motion.div>
                ))}
              </nav>

              <div className="px-8 pb-10">
                <Link
                  to="/our-properties"
                  className="block w-full text-center py-3.5 text-sm font-semibold uppercase tracking-widest"
                  style={{
                    background:
                      "linear-gradient(135deg, var(--color-gold-500), var(--color-gold-600))",
                    color: "#fff",
                    letterSpacing: "0.12em",
                    fontSize: "0.72rem",
                  }}
                >
                  View Properties
                </Link>
                <p
                  className="text-center mt-5 text-sm"
                  style={{ color: "var(--color-charcoal-400)" }}
                >
                  Lagos · Abuja · Johannesburg
                </p>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
