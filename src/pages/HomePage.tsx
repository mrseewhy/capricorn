import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import Hero2 from "../components/Hero2";
import { fadeInUp, stagger } from "../lib/motion";
import FeaturedPropertiesSection from "../components/FeaturedProperties";
import AboutSection from "../components/AboutSection";
import ServicesSection from "../components/ServicesSection";

// const featuredProperties = [
//   {
//     id: 1,
//     title: "The Meridian Penthouse",
//     location: "Victoria Island, Lagos",
//     price: "₦850,000,000",
//     beds: 4,
//     baths: 5,
//     sqft: "4,200",
//     tag: "Featured",
//     image:
//       "https://images.unsplash.com/photo-1613977257363-707ba9348227?w=800&q=80&auto=format&fit=crop",
//   },
//   {
//     id: 2,
//     title: "Sandton Sky Residence",
//     location: "Sandton, Johannesburg",
//     price: "R 12,500,000",
//     beds: 3,
//     baths: 3,
//     sqft: "2,800",
//     tag: "New",
//     image:
//       "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&q=80&auto=format&fit=crop",
//   },
//   {
//     id: 3,
//     title: "Maitama Garden Estate",
//     location: "Maitama, Abuja",
//     price: "₦1,200,000,000",
//     beds: 6,
//     baths: 7,
//     sqft: "7,500",
//     tag: "Exclusive",
//     image:
//       "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80&auto=format&fit=crop",
//   },
// ];

// const services = [
//   {
//     icon: Shield,
//     title: "Buy & Sell",
//     desc: "Navigate complex transactions with confidence. Our experts guide you through every step.",
//   },
//   {
//     icon: Globe,
//     title: "Global Investment",
//     desc: "Diversify across African markets. We identify high-yield opportunities in emerging luxury corridors.",
//   },
//   {
//     icon: Award,
//     title: "Property Management",
//     desc: "Premium concierge-style management for your investment portfolio across all locations.",
//   },
//   {
//     icon: TrendingUp,
//     title: "Market Advisory",
//     desc: "Data-driven insights on African real estate trends to inform your next strategic move.",
//   },
// ];

export default function HomePage() {
  return (
    <main>
      <Hero2 />
      <FeaturedPropertiesSection />
      <AboutSection />

      {/* Featured Properties */}
      {/* <section
        className="py-28"
        style={{ background: "var(--color-ivory-100)" }}
      >
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
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

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
          >
            {featuredProperties.map((p) => (
              <motion.div
                key={p.id}
                variants={fadeInUp}
                className="group cursor-pointer bg-white overflow-hidden"
                style={{ boxShadow: "0 2px 20px -4px rgba(26,21,18,0.10)" }}
                whileHover={{
                  y: -6,
                  boxShadow: "0 16px 48px -8px rgba(26,21,18,0.18)",
                }}
                transition={{ duration: 0.3 }}
              >
                <div className="relative overflow-hidden h-60">
                  <img
                    src={p.image}
                    alt={p.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <span
                    className="absolute top-4 left-4 px-3 py-1 text-[11px] uppercase tracking-widest font-semibold"
                    style={{
                      background: "var(--color-gold-500)",
                      color: "#fff",
                      fontSize: "0.68rem",
                      letterSpacing: "0.12em",
                    }}
                  >
                    {p.tag}
                  </span>
                </div>
                <div className="p-6">
                  <p
                    className="text-xs uppercase tracking-widest mb-2"
                    style={{
                      color: "var(--color-charcoal-400)",
                      letterSpacing: "0.14em",
                      fontFamily: "var(--font-sans)",
                    }}
                  >
                    {p.location}
                  </p>
                  <h3
                    className="text-xl mb-3"
                    style={{ fontFamily: "var(--font-serif)", fontWeight: 500 }}
                  >
                    {p.title}
                  </h3>
                  <div
                    className="h-px mb-4"
                    style={{ background: "var(--color-charcoal-100)" }}
                  />
                  <div
                    className="flex items-center gap-4 text-xs"
                    style={{
                      color: "var(--color-charcoal-500)",
                      fontFamily: "var(--font-sans)",
                    }}
                  >
                    <span>{p.beds} Bed</span>
                    <span>·</span>
                    <span>{p.baths} Bath</span>
                    <span>·</span>
                    <span>{p.sqft} sqft</span>
                  </div>
                  <div
                    className="mt-4 pt-4 flex items-center justify-between"
                    style={{ borderTop: "1px solid var(--color-charcoal-100)" }}
                  >
                    <p
                      className="text-xl"
                      style={{
                        fontFamily: "var(--font-serif)",
                        fontWeight: 500,
                        color: "var(--color-gold-600)",
                      }}
                    >
                      {p.price}
                    </p>
                    <span
                      className="text-xs uppercase tracking-widest"
                      style={{
                        color: "var(--color-charcoal-400)",
                        letterSpacing: "0.12em",
                        fontFamily: "var(--font-sans)",
                      }}
                    >
                      View Details →
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section> */}

      {/* Services */}
      {/* <section className="py-28" style={{ background: "#ffffff" }}>
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
      </section> */}
      <ServicesSection />

      {/* CTA Banner */}
      <section
        className="py-24 relative overflow-hidden"
        style={{ background: "var(--color-charcoal-900)" }}
      >
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: `radial-gradient(var(--color-gold-500) 1px, transparent 1px)`,
            backgroundSize: "32px 32px",
          }}
        />
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 80% 60% at 50% 100%, rgba(200,145,31,0.08) 0%, transparent 70%)",
          }}
        />
        <motion.div
          className="relative z-10 max-w-3xl mx-auto px-5 sm:px-8 text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={stagger}
        >
          <motion.h2
            variants={fadeInUp}
            className="text-4xl sm:text-5xl lg:text-6xl mb-6"
            style={{
              fontFamily: "var(--font-serif)",
              fontWeight: 300,
              color: "var(--color-ivory-100)",
            }}
          >
            Ready to Find Your
            <span
              className="block"
              style={{ fontStyle: "italic", color: "var(--color-gold-400)" }}
            >
              Dream Property?
            </span>
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="text-base mb-10"
            style={{
              color: "rgba(179,170,160,0.75)",
              fontFamily: "var(--font-sans)",
              fontWeight: 300,
            }}
          >
            Our dedicated advisors are available to curate a bespoke property
            journey tailored to your vision and investment objectives.
          </motion.p>
          <motion.div
            variants={fadeInUp}
            className="flex flex-wrap items-center justify-center gap-4"
          >
            <Link
              to="/contact-us"
              className="inline-flex items-center gap-2.5 px-8 py-4 text-sm font-semibold uppercase tracking-widest transition-all duration-300 group"
              style={{
                background:
                  "linear-gradient(135deg, var(--color-gold-500), var(--color-gold-600))",
                color: "#fff",
                letterSpacing: "0.1em",
                fontSize: "0.72rem",
                boxShadow: "0 4px 24px -4px rgba(200,145,31,0.5)",
              }}
            >
              Speak to an Advisor
              <ArrowRight
                size={14}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </Link>
            <Link
              to="/our-properties"
              className="inline-flex items-center gap-2.5 px-8 py-4 text-sm font-medium border transition-all duration-300"
              style={{
                color: "var(--color-ivory-200)",
                borderColor: "rgba(230,192,99,0.35)",
                letterSpacing: "0.06em",
                fontSize: "0.82rem",
              }}
            >
              Browse Listings
            </Link>
          </motion.div>
        </motion.div>
      </section>
    </main>
  );
}
