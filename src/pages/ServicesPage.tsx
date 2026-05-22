import { motion } from "framer-motion";
import {
  Shield,
  Globe,
  Award,
  TrendingUp,
  Key,
  Users,
  BarChart3,
  // Headphones,
  Calendar,
} from "lucide-react";
import PageHeader from "../components/PageHeader";
import { Link } from "react-router-dom";
import { fadeInUp, stagger } from "../lib/motion";

const services = [
  {
    icon: Shield,
    title: "Property Sales & Acquisitions",
    desc: "End-to-end support for buyers and sellers of luxury residential and commercial properties across all our markets.",
    features: [
      "Buyer representation",
      "Seller advisory",
      "Off-market access",
      "Legal & documentation support",
    ],
  },
  {
    icon: Calendar,
    title: "Rental & Shortlet Services",
    desc: "Premium rental and shortlet properties across Nigeria and South Africa. We offer both long-term rentals and high-yield short-let.",
    features: [
      "Long-term rental management",
      "Shortlet / Airbnb optimization",

      "Guest management & concierge",
      "Property preparation & styling",
    ],
  },
  {
    icon: Globe,
    title: "International Investment Advisory",
    desc: "Strategic guidance for diaspora investors and global clients looking to deploy capital into Africa's high-growth real estate corridors.",
    features: [
      "Portfolio diversification",
      "Cross-border structuring",
      "Currency risk guidance",
      "Repatriation support",
    ],
  },
  {
    icon: Key,
    title: "Property Management",
    desc: "Concierge-level management of your investment portfolio — from tenant sourcing and rent collection to maintenance and reporting.",
    features: [
      "Tenant screening",
      "Rent optimization",
      "Maintenance management",
      "Monthly reporting",
    ],
  },
  {
    icon: TrendingUp,
    title: "Market Intelligence",
    desc: "Data-driven insights on Nigerian and South African real estate markets, helping you time your entry and exit with precision.",
    features: [
      "Market research reports",
      "Price trend analysis",
      "Location scouting",
      "Comparative market analysis",
    ],
  },
  {
    icon: Users,
    title: "Developer Partnerships",
    desc: "We connect premium developers with qualified buyers and investors, offering project marketing, sales management, and off-plan advisory.",
    features: [
      "Project marketing",
      "Sales management",
      "Buyer identification",
      "Off-plan structuring",
    ],
  },
  {
    icon: BarChart3,
    title: "Investment Valuation",
    desc: "Independent, authoritative property valuations for individuals, corporates, and institutions across all asset classes.",
    features: [
      "Residential valuations",
      "Commercial appraisals",
      "Portfolio reviews",
      "Bank-grade reports",
    ],
  },
  {
    icon: Award,
    title: "Relocation Services",
    desc: "Seamless relocation support for executives, expatriates and returning diaspora — from property search to lifestyle orientation.",
    features: [
      "Executive housing search",
      "Neighbourhood orientation",
      "School & lifestyle advisory",
      "Settling-in support",
    ],
  },
  // { icon: Headphones, title: 'Concierge & Lifestyle', desc: 'For our premium clients, a dedicated advisor provides access to a curated network of service providers.', features: ['Dedicated advisor', 'Interior design referrals', 'Security advisory', 'Lifestyle management'] },
];

export default function ServicesPage() {
  return (
    <main>
      <PageHeader
        title="Our Services"
        subtitle="Comprehensive real estate solutions designed for discerning clients."
        breadcrumbs={[{ label: "Home", to: "/" }, { label: "Services" }]}
      />

      <section className="py-28" style={{ background: "#fff" }}>
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            variants={stagger}
          >
            {services.map(({ icon: Icon, title, desc, features }) => (
              <motion.div
                key={title}
                variants={fadeInUp}
                className="p-8 md:p-10 group transition-all duration-300 cursor-pointer"
                style={{ border: "1px solid var(--color-charcoal-100)" }}
                whileHover={{
                  borderColor: "rgba(200,145,31,0.3)",
                  boxShadow: "0 8px 32px -8px rgba(200,145,31,0.12)",
                }}
              >
                <div className="flex items-start gap-6">
                  <div
                    className="w-14 h-14 flex items-center justify-center shrink-0 transition-all duration-300 group-hover:scale-110"
                    style={{
                      background: "var(--color-gold-50)",
                      border: "1px solid rgba(200,145,31,0.25)",
                    }}
                  >
                    <Icon
                      size={22}
                      style={{ color: "var(--color-gold-600)" }}
                    />
                  </div>
                  <div>
                    <h3
                      className="text-xl mb-3"
                      style={{
                        fontFamily: "var(--font-serif)",
                        fontWeight: 500,
                      }}
                    >
                      {title}
                    </h3>
                    <p
                      className="text-sm leading-relaxed mb-5"
                      style={{
                        color: "var(--color-charcoal-500)",
                        fontFamily: "var(--font-sans)",
                        fontWeight: 300,
                      }}
                    >
                      {desc}
                    </p>
                    <ul className="grid grid-cols-2 gap-x-4 gap-y-1.5">
                      {features.map((f) => (
                        <li
                          key={f}
                          className="flex items-center gap-2 text-xs"
                          style={{
                            color: "var(--color-charcoal-600)",
                            fontFamily: "var(--font-sans)",
                          }}
                        >
                          <span
                            className="w-1 h-1 rounded-full shrink-0"
                            style={{ background: "var(--color-gold-500)" }}
                          />
                          {f}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section
        className="py-20"
        style={{ background: "var(--color-charcoal-950)" }}
      >
        <motion.div
          className="max-w-2xl mx-auto px-5 sm:px-8 text-center"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2
            className="text-4xl sm:text-5xl mb-6"
            style={{
              fontFamily: "var(--font-serif)",
              fontWeight: 300,
              color: "var(--color-ivory-100)",
            }}
          >
            Let Us Guide Your{" "}
            <span
              style={{ fontStyle: "italic", color: "var(--color-gold-400)" }}
            >
              Next Move
            </span>
          </h2>
          <p
            className="text-base mb-10"
            style={{
              color: "rgba(179,170,160,0.75)",
              fontFamily: "var(--font-sans)",
              fontWeight: 300,
            }}
          >
            Every client journey is unique. Tell us what you need and our
            advisors will craft a tailored plan.
          </p>
          <Link
            to="/contact-us"
            className="inline-flex items-center gap-2 px-8 py-4 text-sm font-semibold uppercase tracking-widest"
            style={{
              background:
                "linear-gradient(135deg, var(--color-gold-500), var(--color-gold-600))",
              color: "#fff",
              letterSpacing: "0.1em",
              fontSize: "0.72rem",
              boxShadow: "0 4px 24px -4px rgba(200,145,31,0.5)",
            }}
          >
            Get in Touch
          </Link>
        </motion.div>
      </section>
    </main>
  );
}
