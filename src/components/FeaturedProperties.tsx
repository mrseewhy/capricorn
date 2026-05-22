import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { fadeInUp, stagger } from "../lib/motion";

export default function FeaturedProperties() {
  return (
    <section className="py-28" style={{ background: "var(--color-ivory-100)" }}>
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
        {/* Header */}
        <motion.div
          className="flex flex-col sm:flex-row items-start sm:items-end justify-between mb-14 gap-6"
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
        >
          <div>
            <motion.p
              variants={fadeInUp}
              className="flex items-center gap-3 mb-3"
            >
              <span
                className="h-px w-8"
                style={{ background: "var(--color-gold-500)" }}
              />
              <span
                className="text-xs uppercase tracking-[0.2em]"
                style={{
                  color: "var(--color-gold-600)",
                  fontFamily: "var(--font-sans)",
                  fontWeight: 500,
                }}
              >
                Curated Selection
              </span>
            </motion.p>
            <motion.h2
              variants={fadeInUp}
              className="text-4xl sm:text-5xl"
              style={{
                fontFamily: "var(--font-serif)",
                fontWeight: 300,
                color: "var(--color-charcoal-900)",
              }}
            >
              Featured Properties
            </motion.h2>
          </div>
          <motion.div variants={fadeInUp}>
            <Link
              to="/our-properties"
              className="flex items-center gap-2 text-sm group"
              style={{
                color: "var(--color-gold-600)",
                fontFamily: "var(--font-sans)",
                fontWeight: 500,
              }}
            >
              View all listings
              <ArrowRight
                size={15}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </Link>
          </motion.div>
        </motion.div>

        {/* Grid */}
        <motion.div
          className="grid grid-cols-1 gap-6 lg:grid-cols-12 lg:h-[650px]"
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
        >
          {/* Large Video */}
          <motion.div
            className="group relative overflow-hidden rounded-sm lg:col-span-8"
            variants={fadeInUp}
            style={{ boxShadow: "0 2px 20px -4px rgba(26,21,18,0.10)" }}
            whileHover={{
              y: -6,
              boxShadow: "0 16px 48px -8px rgba(26,21,18,0.18)",
            }}
            transition={{ duration: 0.3 }}
          >
            <video
              autoPlay
              muted
              loop
              playsInline
              controls
              className="relative z-10 h-full w-full object-cover transition duration-700 group-hover:scale-[1.02]"
              poster="./4.jpeg"
            >
              <source src="/public/vid/ipetu.mp4" type="video/mp4" />
            </video>

            {/* subtle overlay */}
            <div className="absolute inset-0 bg-black/10" />
          </motion.div>

          {/* Right Side */}
          <motion.div
            className="grid gap-6 lg:col-span-4"
            variants={fadeInUp}
            style={{ boxShadow: "0 2px 20px -4px rgba(26,21,18,0.10)" }}
            whileHover={{
              y: -6,
              boxShadow: "0 16px 48px -8px rgba(26,21,18,0.18)",
            }}
            transition={{ duration: 0.3 }}
          >
            {/* Nigeria */}
            <article className="group relative overflow-hidden rounded-sm">
              <img
                src="./5.jpeg"
                alt="Nigeria Luxury Homes"
                className="h-full min-h-[280px] w-full object-cover transition duration-700 group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent" />

              <div className="absolute bottom-8 left-8">
                <p className="text-sm uppercase tracking-[0.3em] text-white/70">
                  Nigeria
                </p>

                <h3 className="mt-2 font-serif text-3xl text-white">
                  Premium Homes
                </h3>
              </div>
            </article>

            {/* South Africa */}
            <article className="group relative overflow-hidden rounded-sm">
              <img
                src="./shortlet-1.jpeg"
                alt="South Africa Luxury Homes"
                className="h-full min-h-[280px] w-full object-cover transition duration-700 group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent" />

              <div className="absolute bottom-8 left-8">
                <p className="text-sm uppercase tracking-[0.3em] text-white/70">
                  South Africa
                </p>

                <h3 className="mt-2 font-serif text-3xl text-white">
                  Luxury Estates
                </h3>
              </div>
            </article>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
