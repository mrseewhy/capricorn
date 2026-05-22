import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { fadeInUp, stagger } from "../lib/motion";

const AboutSection = () => {
  return (
    <section className="py-0 overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[560px]">
        <div className="relative min-h-72 lg:min-h-auto overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1560185893-a55cbc8c57e8?w=900&q=80&auto=format&fit=crop"
            alt="About Capricorn"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div
            className="absolute inset-0"
            style={{ background: "rgba(13,10,8,0.2)" }}
          />
        </div>
        <motion.div
          className="flex flex-col justify-center px-10 lg:px-16 xl:px-24 py-20 "
          style={{ background: "var(--color-charcoal-950)" }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={stagger}
        >
          <div className="max-w-2xl">
            <motion.p
              variants={fadeInUp}
              className="flex items-center gap-3 mb-5"
            >
              <span
                className="h-px w-8"
                style={{ background: "var(--color-gold-500)" }}
              />
              <span
                className="text-xs uppercase tracking-[0.2em]"
                style={{
                  color: "var(--color-gold-500)",
                  fontFamily: "var(--font-sans)",
                  fontWeight: 500,
                }}
              >
                Our Story
              </span>
            </motion.p>
            <motion.h2
              variants={fadeInUp}
              className="text-4xl sm:text-5xl mb-6 leading-tight"
              style={{
                fontFamily: "var(--font-serif)",
                fontWeight: 300,
                color: "var(--color-ivory-100)",
              }}
            >
              Built on Trust,
              <br />
              <span
                style={{ fontStyle: "italic", color: "var(--color-gold-400)" }}
              >
                Driven by Excellence
              </span>
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="text-base mb-4 leading-relaxed"
              style={{
                color: "rgba(179,170,160,0.75)",
                fontFamily: "var(--font-sans)",
                fontWeight: 300,
              }}
            >
              For over a decade, Capricorn Global Properties has been the
              trusted partner of high-net-worth individuals, diaspora investors,
              and institutional buyers seeking premium real estate across
              Africa's most vibrant cities.
            </motion.p>
            <motion.p
              variants={fadeInUp}
              className="text-base mb-10 leading-relaxed"
              style={{
                color: "rgba(179,170,160,0.75)",
                fontFamily: "var(--font-sans)",
                fontWeight: 300,
              }}
            >
              From the Atlantic shores of Lagos to the financial heart of
              Sandton, we combine deep local expertise with a global perspective
              to deliver unmatched results.
            </motion.p>
            <motion.div variants={fadeInUp}>
              <Link
                to="/about-us"
                className="inline-flex items-center gap-2.5 px-7 py-3.5 text-sm font-semibold uppercase group transition-all duration-300"
                style={{
                  border: "1px solid rgba(200,145,31,0.45)",
                  color: "var(--color-gold-400)",
                  letterSpacing: "0.1em",
                  fontSize: "0.72rem",
                }}
              >
                Discover Our Story
                <ArrowRight
                  size={14}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
