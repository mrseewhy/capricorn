import { motion } from "framer-motion";
import {
  ShieldCheck,
  Globe,
  Handshake,
  BarChart3,
  KeyRound,
  UserCheck,
} from "lucide-react";
import { fadeInUp, stagger } from "../lib/motion";
import { listings } from "../data/Data";

const reasons = [
  {
    icon: ShieldCheck,
    title: "Fully Licensed & Regulated",
    body: "Accredited by ESVARBON and PPRA. Every transaction is handled with legal rigour and complete transparency — no surprises.",
  },
  {
    icon: Globe,
    title: "Pan-African Reach",
    body: "Active across Lagos, Abuja, Accra, Nairobi, and Johannesburg, with a network that opens doors other firms simply cannot.",
  },
  {
    icon: Handshake,
    title: "Diaspora-First Approach",
    body: "We've refined a seamless remote acquisition process so you can buy, lease, or invest from anywhere in the world with total confidence.",
  },
  {
    icon: BarChart3,
    title: "Investment-Grade Insight",
    body: "Our advisors bring data-driven market intelligence to every decision, ensuring your capital is always working as hard as possible.",
  },
  {
    icon: KeyRound,
    title: "Exclusive Off-Market Listings",
    body: "Our relationships give clients first access to properties that never reach the open market — discreet, high-value, and carefully curated.",
  },
  {
    icon: UserCheck,
    title: "White-Glove Client Service",
    body: "From first consultation to final handover, a dedicated advisor walks every step with you. Your timeline, your priorities, our full attention.",
  },
];

const WhyWorkWithUs = () => {
  return (
    <section
      className="py-24 lg:py-32 overflow-hidden"
      style={{ background: "var(--color-ivory-100)" }}
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
        {/* ── Section header ───────────────────────────────────────── */}
        <motion.div
          className="max-w-2xl mb-16 lg:mb-20"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={stagger}
        >
          <motion.p
            variants={fadeInUp}
            className="flex items-center gap-3 mb-5"
          >
            <span
              className="h-px w-8 shrink-0"
              style={{ background: "var(--color-gold-500)" }}
            />
            <span
              className="text-xs uppercase tracking-[0.22em]"
              style={{
                color: "var(--color-gold-500)",
                fontFamily: "var(--font-sans)",
                fontWeight: 500,
              }}
            >
              The Capricorn Difference
            </span>
          </motion.p>

          <motion.h2
            variants={fadeInUp}
            className="text-4xl sm:text-5xl leading-tight mb-6"
            style={{
              fontFamily: "var(--font-serif)",
              fontWeight: 300,
              color: "var(--color-charcoal-900)",
            }}
          >
            Why Clients Choose
            <br />
            <span
              style={{ fontStyle: "italic", color: "var(--color-gold-500)" }}
            >
              Capricorn Global Properties
            </span>
          </motion.h2>

          <motion.p
            variants={fadeInUp}
            className="text-base leading-relaxed"
            style={{
              color: "var(--color-charcoal-500)",
              fontFamily: "var(--font-sans)",
              fontWeight: 300,
            }}
          >
            We earn trust through results. Here is what sets us apart from every
            other real estate firm operating on the continent.
          </motion.p>
        </motion.div>

        {/* ── Cards grid ───────────────────────────────────────────── */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={stagger}
        >
          {reasons.map(({ icon: Icon, title, body }) => (
            <motion.div
              key={title}
              variants={fadeInUp}
              className="group flex flex-col gap-5 px-8 py-9 bg-white transition-shadow duration-300"
              style={{
                border: "1px solid var(--color-charcoal-100)",
                boxShadow: "0 1px 4px rgba(0,0,0,0.04)",
              }}
              whileHover={
                {
                  boxShadow: "0 8px 32px rgba(0,0,0,0.08)",
                } as never
              }
            >
              {/* Icon */}
              <div
                className="w-11 h-11 flex items-center justify-center shrink-0 transition-colors duration-300"
                style={{
                  border: "1px solid rgba(200,145,31,0.3)",
                  color: "var(--color-gold-500)",
                  background: "var(--color-gold-50)",
                }}
              >
                <Icon size={18} strokeWidth={1.5} />
              </div>

              {/* Text */}
              <div className="flex-1">
                <h3
                  className="text-xl mb-3 leading-snug"
                  style={{
                    fontFamily: "var(--font-serif)",
                    fontWeight: 400,
                    color: "var(--color-charcoal-900)",
                  }}
                >
                  {title}
                </h3>
                <p
                  className="text-sm leading-relaxed"
                  style={{
                    color: "var(--color-charcoal-500)",
                    fontFamily: "var(--font-sans)",
                    fontWeight: 300,
                  }}
                >
                  {body}
                </p>
              </div>

              {/* Bottom accent — grows on hover */}
              <div
                className="h-px w-0 group-hover:w-10 transition-all duration-500"
                style={{ background: "var(--color-gold-500)" }}
              />
            </motion.div>
          ))}
        </motion.div>

        {/* ── Stat bar ─────────────────────────────────────────────── */}
        <motion.div
          className="mt-16 grid grid-cols-2 lg:grid-cols-4 divide-x divide-y lg:divide-y-0"
          style={{
            border: "1px solid var(--color-charcoal-100)",
            background: "white",
          }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-40px" }}
          variants={stagger}
        >
          {listings.map(({ num, label }) => (
            <motion.div
              key={label}
              variants={fadeInUp}
              className="flex flex-col items-center justify-center gap-1 py-10 px-6"
            >
              <span
                className="text-4xl sm:text-5xl leading-none"
                style={{
                  fontFamily: "var(--font-serif)",
                  fontWeight: 300,
                  color: "var(--color-gold-500)",
                }}
              >
                {num}
              </span>
              <span
                className="text-xs uppercase tracking-[0.18em] text-center mt-1"
                style={{
                  color: "var(--color-charcoal-400)",
                  fontFamily: "var(--font-sans)",
                  fontWeight: 400,
                }}
              >
                {label}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default WhyWorkWithUs;
