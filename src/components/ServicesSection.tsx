import { motion } from "framer-motion";
import { fadeInUp, stagger } from "../lib/motion";
import { services } from "../data/Data";

const ServicesSection = () => {
  return (
    <section className="py-28" style={{ background: "#ffffff" }}>
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
        <motion.div
          className="text-center mb-16"
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
        >
          <motion.p
            variants={fadeInUp}
            className="flex items-center justify-center gap-3 mb-4"
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
              What We Offer
            </span>
            <span
              className="h-px w-8"
              style={{ background: "var(--color-gold-500)" }}
            />
          </motion.p>
          <motion.h2
            variants={fadeInUp}
            className="text-4xl sm:text-5xl"
            style={{ fontFamily: "var(--font-serif)", fontWeight: 300 }}
          >
            Comprehensive Real Estate Services
          </motion.h2>
        </motion.div>
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
        >
          {services.map(({ icon: Icon, title, desc }) => (
            <motion.div
              key={title}
              variants={fadeInUp}
              className="group p-8 transition-all duration-300 cursor-pointer"
              style={{ border: "1px solid var(--color-charcoal-100)" }}
              whileHover={{
                borderColor: "rgba(200,145,31,0.4)",
                boxShadow: "0 8px 32px -8px rgba(200,145,31,0.15)",
              }}
            >
              <div
                className="w-12 h-12 flex items-center justify-center mb-6 transition-all duration-300 group-hover:scale-110"
                style={{
                  background: "var(--color-gold-50)",
                  border: "1px solid rgba(200,145,31,0.25)",
                }}
              >
                <Icon size={20} style={{ color: "var(--color-gold-600)" }} />
              </div>
              <h3
                className="text-xl mb-3"
                style={{ fontFamily: "var(--font-serif)", fontWeight: 500 }}
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
                {desc}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;
