import { useState } from "react";
import { motion } from "framer-motion";
import { Search, MapPin, Home, DollarSign, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { fadeInUp, stagger, LUXURY_EASE } from "../lib/motion";

const propertyTypes = ["Apartment", "Penthouse", "Villa", "Commercial", "Land"];
const budgets = [
  "₦50M – ₦100M",
  "₦100M – ₦500M",
  "₦500M+",
  "R2M – R10M (ZAR)",
  "R10M+ (ZAR)",
];

export default function Hero() {
  // const [location, setLocation] = useState("");
  // const [propertyType, setPropertyType] = useState("");
  // const [budget, setBudget] = useState("");

  return (
    <section
      className="relative min-h-screen flex flex-col justify-end overflow-hidden"
      aria-label="Hero"
    >
      <div
        className="absolute inset-0 bg-cover bg-center scale-105"
        style={{
          backgroundImage: `url(./hero.avif)`,
          transformOrigin: "center",
        }}
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to top, rgba(13,10,8,0.92) 0%, rgba(13,10,8,0.55) 50%, rgba(13,10,8,0.25) 100%)",
        }}
      />
      <div
        className="absolute inset-x-0 bottom-0 h-64 pointer-events-none"
        style={{
          background:
            "linear-gradient(to top, rgba(200,145,31,0.06) 0%, transparent 100%)",
        }}
      />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 pb-0 pt-32">
        <motion.div
          className="max-w-3xl mt-6"
          variants={stagger}
          initial="hidden"
          animate="visible"
        >
          <motion.div
            variants={fadeInUp}
            className="flex items-center gap-3 mb-6"
          >
            <span
              className="h-px w-10"
              style={{ background: "var(--color-gold-500)" }}
            />
            <span
              className="text-xs uppercase tracking-[0.22em] font-sans"
              style={{ color: "var(--color-gold-400)", fontWeight: 500 }}
            >
              Premium Real Estate · Africa &amp; Beyond
            </span>
          </motion.div>

          <motion.h1
            variants={fadeInUp}
            className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl mb-6"
            style={{
              fontFamily: "var(--font-serif)",
              fontWeight: 300,
              color: "var(--color-ivory-100)",
            }}
          >
            Where Luxury
            <br />
            <span
              style={{
                fontStyle: "italic",
                background:
                  "linear-gradient(90deg, var(--color-gold-400), var(--color-gold-200), var(--color-gold-500))",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Meets Legacy
            </span>
          </motion.h1>

          <motion.p
            variants={fadeInUp}
            className="text-base sm:text-lg leading-relaxed mb-10 max-w-xl"
            style={{
              color: "rgba(232,223,192,0.72)",
              fontFamily: "var(--font-sans)",
              fontWeight: 300,
            }}
          >
            Exceptional properties across Nigeria, South Africa and beyond. We
            build, sell and connect discerning investors and families with
            spaces that define a lifetime.
          </motion.p>

          <motion.div
            variants={fadeInUp}
            className="flex flex-wrap gap-4 mb-14"
          >
            <Link
              to="/our-properties"
              className="inline-flex items-center gap-2.5 px-7 py-4 text-sm font-semibold tracking-widest uppercase transition-all duration-300 group"
              style={{
                background:
                  "linear-gradient(135deg, var(--color-gold-500), var(--color-gold-600))",
                color: "#fff",
                letterSpacing: "0.1em",
                fontSize: "0.72rem",
                boxShadow: "0 4px 24px -4px rgba(200,145,31,0.5)",
              }}
            >
              Explore Properties
              <ArrowRight
                size={15}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </Link>
            <Link
              to="/about-us"
              className="inline-flex items-center gap-2.5 px-7 py-4 text-sm font-medium border transition-all duration-300"
              style={{
                color: "var(--color-ivory-200)",
                borderColor: "rgba(230,192,99,0.4)",
                letterSpacing: "0.06em",
                fontSize: "0.82rem",
                backdropFilter: "blur(4px)",
              }}
            >
              Our Story
            </Link>
          </motion.div>
        </motion.div>

        {/* Search Bar */}
        {/* <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.1, ease: LUXURY_EASE }}
          className="w-full mb-0"
        >
          <div
            className="flex flex-col lg:flex-row items-stretch lg:items-center"
            style={{
              background: "rgba(13,10,8,0.88)",
              backdropFilter: "blur(20px)",
              border: "1px solid rgba(200,145,31,0.2)",
              boxShadow:
                "0 20px 60px -12px rgba(0,0,0,0.5), inset 0 1px 0 rgba(200,145,31,0.1)",
            }}
          >
            <div
              className="flex items-center gap-3 flex-1 px-6 py-5 border-b lg:border-b-0 lg:border-r"
              style={{ borderColor: "rgba(200,145,31,0.15)" }}
            >
              <MapPin
                size={17}
                style={{ color: "var(--color-gold-500)", flexShrink: 0 }}
              />
              <div className="flex-1">
                <p
                  className="text-[10px] uppercase tracking-widest mb-1"
                  style={{ color: "var(--color-gold-500)", fontWeight: 500 }}
                >
                  Location
                </p>
                <input
                  type="text"
                  placeholder="Lagos, Abuja, Cape Town…"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  className="w-full bg-transparent text-sm outline-none placeholder:opacity-40"
                  style={{
                    color: "var(--color-ivory-200)",
                    fontFamily: "var(--font-sans)",
                  }}
                />
              </div>
            </div>

            <div
              className="flex items-center gap-3 flex-1 px-6 py-5 border-b lg:border-b-0 lg:border-r"
              style={{ borderColor: "rgba(200,145,31,0.15)" }}
            >
              <Home
                size={17}
                style={{ color: "var(--color-gold-500)", flexShrink: 0 }}
              />
              <div className="flex-1">
                <p
                  className="text-[10px] uppercase tracking-widest mb-1"
                  style={{ color: "var(--color-gold-500)", fontWeight: 500 }}
                >
                  Property Type
                </p>
                <select
                  value={propertyType}
                  onChange={(e) => setPropertyType(e.target.value)}
                  className="w-full bg-transparent text-sm outline-none appearance-none"
                  style={{
                    color: propertyType
                      ? "var(--color-ivory-200)"
                      : "rgba(249,246,239,0.4)",
                    fontFamily: "var(--font-sans)",
                  }}
                >
                  <option value="" style={{ background: "#1a1512" }}>
                    Select type
                  </option>
                  {propertyTypes.map((t) => (
                    <option key={t} value={t} style={{ background: "#1a1512" }}>
                      {t}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div
              className="flex items-center gap-3 flex-1 px-6 py-5 border-b lg:border-b-0"
              style={{ borderColor: "rgba(200,145,31,0.15)" }}
            >
              <DollarSign
                size={17}
                style={{ color: "var(--color-gold-500)", flexShrink: 0 }}
              />
              <div className="flex-1">
                <p
                  className="text-[10px] uppercase tracking-widest mb-1"
                  style={{ color: "var(--color-gold-500)", fontWeight: 500 }}
                >
                  Budget
                </p>
                <select
                  value={budget}
                  onChange={(e) => setBudget(e.target.value)}
                  className="w-full bg-transparent text-sm outline-none appearance-none"
                  style={{
                    color: budget
                      ? "var(--color-ivory-200)"
                      : "rgba(249,246,239,0.4)",
                    fontFamily: "var(--font-sans)",
                  }}
                >
                  <option value="" style={{ background: "#1a1512" }}>
                    Select range
                  </option>
                  {budgets.map((b) => (
                    <option key={b} value={b} style={{ background: "#1a1512" }}>
                      {b}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <button
              className="flex items-center justify-center gap-2.5 px-8 py-5 text-sm font-semibold uppercase tracking-widest transition-all duration-300 shrink-0"
              style={{
                background:
                  "linear-gradient(135deg, var(--color-gold-500), var(--color-gold-600))",
                color: "#fff",
                fontSize: "0.72rem",
                letterSpacing: "0.12em",
                minWidth: "11rem",
              }}
            >
              <Search size={15} />
              Search
            </button>
          </div>
        </motion.div> */}
      </div>

      {/* Stats bar */}
      <motion.div
        className="relative z-10 w-full mt-8 py-4"
        style={{
          background: "rgba(13,10,8,0.75)",
          borderTop: "1px solid rgba(200,145,31,0.12)",
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.8 }}
      >
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
          <div className="grid grid-cols-2 lg:grid-cols-4">
            {[
              { num: "500+", label: "Premium Listings" },
              { num: "12+", label: "Years of Excellence" },
              { num: "3,200+", label: "Satisfied Clients" },
              { num: "4", label: "African Markets" },
            ].map(({ num, label }, i) => (
              <div
                key={label}
                className="px-6 py-5 text-center"
                style={{
                  borderLeft:
                    i > 0 ? "1px solid rgba(200,145,31,0.12)" : undefined,
                }}
              >
                <p
                  className="text-2xl sm:text-3xl mb-0.5"
                  style={{
                    fontFamily: "var(--font-serif)",
                    fontWeight: 500,
                    color: "var(--color-gold-400)",
                  }}
                >
                  {num}
                </p>
                <p
                  className="text-[11px] uppercase tracking-widest"
                  style={{
                    color: "rgba(179,170,160,0.7)",
                    letterSpacing: "0.12em",
                  }}
                >
                  {label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
