import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { fadeInUp, stagger } from "../lib/motion";
import { ArrowRight } from "lucide-react";

export default function Hero2() {
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
