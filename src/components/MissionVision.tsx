import { motion } from "framer-motion";
import { fadeInUp, stagger } from "../lib/motion";

const cards = [
  {
    label: "Our Mission",
    heading: "Connecting People to Exceptional Places.",
    body: "To be Africa's most trusted real estate partner, delivering premium properties, transparent transactions, and lasting value to high-net-worth individuals, diaspora investors, and institutional buyers across the continent and beyond.",
    accent: "var(--color-gold-500)",
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=900&q=80&auto=format&fit=crop",
  },
  {
    label: "Our Vision",
    heading: "A New Standard for African Real Estate.",
    body: "To redefine what luxury real estate means in Africa — raising the bar for professionalism, design, and client experience until Capricorn Global Properties is synonymous with the finest addresses on the continent and beyond.",
    accent: "var(--color-terra-500)",
    image:
      "https://images.unsplash.com/photo-1560185893-a55cbc8c57e8?w=900&q=80&auto=format&fit=crop",
  },
];

const MissionVision = () => {
  return (
    <section className="py-24 lg:py-32 overflow-hidden bg-white">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
        {/* Section label */}
        <motion.div
          className="flex items-center gap-3  "
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
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
            Who We Are
          </span>
        </motion.div>
        <motion.h2
          variants={fadeInUp}
          className="text-4xl sm:text-5xl leading-tight mb-16 lg:mb-20 mt-6"
          style={{
            fontFamily: "var(--font-serif)",
            fontWeight: 300,
            color: "var(--color-charcoal-900)",
          }}
        >
          Building The World
          <br />
          <span style={{ fontStyle: "italic", color: "var(--color-gold-500)" }}>
            We Want Next
          </span>
        </motion.h2>

        {/* Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
          {cards.map((card) => (
            <motion.div
              key={card.label}
              className="relative overflow-hidden"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              variants={stagger}
              style={{ border: "1px solid var(--color-charcoal-100)" }}
            >
              {/* Image strip */}
              <div className="relative h-60 overflow-hidden">
                <img
                  src={card.image}
                  alt={card.label}
                  className="w-full h-full object-cover"
                />
                <div
                  className="absolute inset-0"
                  style={{ background: "rgba(13,10,8,0.18)" }}
                />
                {/* Label chip over image */}
                <motion.div
                  variants={fadeInUp}
                  className="absolute bottom-5 left-7 flex items-center gap-2.5"
                >
                  <span
                    className="h-px w-6 shrink-0"
                    style={{ background: card.accent }}
                  />
                  <span
                    className="text-[0.65rem] uppercase tracking-[0.22em] text-white"
                    style={{ fontFamily: "var(--font-sans)", fontWeight: 500 }}
                  >
                    {card.label}
                  </span>
                </motion.div>
              </div>

              {/* Content — bright white */}
              <div className="px-8 pt-8 pb-10 bg-white">
                <div
                  className="w-10 h-[2px] mb-7"
                  style={{ background: card.accent }}
                />

                <motion.h2
                  variants={fadeInUp}
                  className="text-3xl sm:text-4xl mb-5 leading-tight whitespace-pre-line"
                  style={{
                    fontFamily: "var(--font-serif)",
                    fontWeight: 300,
                    color: "var(--color-charcoal-900)",
                  }}
                >
                  {card.heading}
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
                  {card.body}
                </motion.p>
              </div>

              {/* Bottom accent bar */}
              <div
                className="h-[3px]"
                style={{
                  background: `linear-gradient(90deg, ${card.accent}, transparent)`,
                }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MissionVision;
