import { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, MapPin } from "lucide-react";
import { fadeInUp, stagger } from "../lib/motion";

/* ── Types ───────────────────────────────────────────────────────────── */
type Country = "Nigeria" | "South Africa";
type Filter = "All" | Country;

interface Property {
  id: string;
  title: string;
  country: Country;
  city: string;
  slug: string;
  image: string;
  tag?: string;
}

/* ── Data ────────────────────────────────────────────────────────────── */
const properties: Property[] = [
  {
    id: "1",
    title: "Nigeria",
    country: "Nigeria",
    city: "Nigeria",
    slug: "/our-properties/nigeria",
    image: "/5.jpeg",
  },
  {
    id: "2",
    title: "Sandton Estate",
    country: "South Africa",
    city: "Johannesburg",
    slug: "sandton-estate-johannesburg",
    image: "/shortlet-1.jpeg",
    tag: "Shortlet",
  },
  //   {
  //     id: "3",
  //     title: "Maitama Grand Residence",
  //     country: "Nigeria",
  //     city: "Abuja",
  //     slug: "maitama-grand-abuja",
  //     image: "/public/3.jpeg",
  //       "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&q=80&auto=format&fit=crop",
  //   },
  //   {
  //     id: "4",
  //     title: "Clifton Cliffside Villa",
  //     country: "South Africa",
  //     city: "Cape Town",
  //     slug: "clifton-cliffside-cape-town",
  //     image:
  //       "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80&auto=format&fit=crop",
  //     tag: "Exclusive",
  //   },
  //   {
  //     id: "5",
  //     title: "Banana Island Mansion",
  //     country: "Nigeria",
  //     city: "Lagos",
  //     slug: "banana-island-mansion-lagos",
  //     image:
  //       "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800&q=80&auto=format&fit=crop",
  //   },
  //   {
  //     id: "6",
  //     title: "Waterfall Polo Estate",
  //     country: "South Africa",
  //     city: "Midrand",
  //     slug: "waterfall-polo-estate-midrand",
  //     image:
  //       "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=800&q=80&auto=format&fit=crop",
  //   },
];

const filters: Filter[] = ["All", "Nigeria", "South Africa"];

/* ── Card ────────────────────────────────────────────────────────────── */
const PropertyCard = ({ property }: { property: Property }) => {
  const isNigeria = property.country === "Nigeria";
  const accent = isNigeria ? "var(--color-gold-500)" : "var(--color-terra-500)";
  const accentLight = isNigeria
    ? "var(--color-gold-50)"
    : "rgba(181,103,62,0.07)";
  const linkLabel = isNigeria
    ? "Available in Nigeria"
    : "Available in South Africa";
  const linkPath = isNigeria
    ? `/our-properties/nigeria`
    : `/our-properties/south-africa`;

  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.97 }}
      transition={{ duration: 0.35, ease: [0.25, 0.46, 0.45, 0.94] }}
      className="group flex flex-col overflow-hidden bg-white"
      style={{
        border: "1px solid var(--color-charcoal-100)",
        boxShadow: "0 1px 4px rgba(0,0,0,0.04)",
      }}
    >
      {/* Image — dominant */}
      <div className="relative overflow-hidden" style={{ aspectRatio: "4/3" }}>
        <img
          src={property.image}
          alt={property.title}
          className="w-full h-full object-cover transition-transform
            duration-700 ease-out group-hover:scale-105"
        />

        {/* Gradient for chips */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to top, rgba(13,10,8,0.5) 0%, transparent 50%)",
          }}
        />

        {/* Tag */}
        {property.tag && (
          <div className="absolute top-4 left-4">
            <span
              className="px-3 py-1 text-[0.62rem] uppercase tracking-[0.16em] text-white"
              style={{
                background: accent,
                fontFamily: "var(--font-sans)",
                fontWeight: 500,
              }}
            >
              {property.tag}
            </span>
          </div>
        )}

        {/* City */}
        <div className="absolute bottom-4 left-4 flex items-center gap-1.5">
          <MapPin size={11} color={accent} strokeWidth={2} />
          <span
            className="text-[0.65rem] uppercase tracking-[0.16em] text-white"
            style={{ fontFamily: "var(--font-sans)", fontWeight: 400 }}
          >
            {property.city}
          </span>
        </div>
      </div>

      {/* Bottom strip */}
      <div
        className="flex items-center justify-between gap-3 px-5 py-4"
        style={{
          borderTop: `2px solid ${accent}`,
          background: accentLight,
        }}
      >
        <h3
          className="text-base leading-snug flex-1"
          style={{
            fontFamily: "var(--font-serif)",
            fontWeight: 400,
            color: "var(--color-charcoal-900)",
          }}
        >
          {property.title}
        </h3>

        {/* Clickable country link */}
        <Link
          to={linkPath}
          className="group/link shrink-0 flex items-center gap-1.5
            transition-opacity duration-200 hover:opacity-70"
        >
          <span
            className="text-[0.6rem] uppercase tracking-[0.14em] whitespace-nowrap"
            style={{
              fontFamily: "var(--font-sans)",
              fontWeight: 600,
              color: accent,
            }}
          >
            {linkLabel}
          </span>
          <ArrowRight
            size={11}
            strokeWidth={2.5}
            color={accent}
            className="transition-transform duration-200
              group-hover/link:translate-x-0.5"
          />
        </Link>
      </div>
    </motion.article>
  );
};

/* ── Main ────────────────────────────────────────────────────────────── */
const PropertyGrid = () => {
  const [active, setActive] = useState<Filter>("All");

  const filtered =
    active === "All"
      ? properties
      : properties.filter((p) => p.country === active);

  return (
    <section
      className="py-24 lg:py-32 overflow-hidden"
      style={{ background: "var(--color-ivory-100)" }}
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
        {/* ── Header ──────────────────────────────────────────────── */}
        <motion.div
          className="flex flex-col sm:flex-row sm:items-end justify-between gap-8 mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={stagger}
        >
          <div>
            <motion.p
              variants={fadeInUp}
              className="flex items-center gap-3 mb-4"
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
                Handpicked for You
              </span>
            </motion.p>

            <motion.h2
              variants={fadeInUp}
              className="text-4xl sm:text-5xl leading-tight"
              style={{
                fontFamily: "var(--font-serif)",
                fontWeight: 300,
                color: "var(--color-charcoal-900)",
              }}
            >
              Featured Properties
            </motion.h2>
          </div>

          {/* ── Filter tabs ──────────────────────────────────────── */}
          <motion.div
            variants={fadeInUp}
            className="flex items-center gap-1 p-1 self-start sm:self-auto"
            style={{
              background: "white",
              border: "1px solid var(--color-charcoal-100)",
            }}
          >
            {filters.map((f) => (
              <button
                key={f}
                onClick={() => setActive(f)}
                className="relative px-5 py-2 text-[0.72rem] uppercase
                  tracking-[0.12em] transition-colors duration-200"
                style={{
                  fontFamily: "var(--font-sans)",
                  fontWeight: 500,
                  color: active === f ? "white" : "var(--color-charcoal-500)",
                  zIndex: 1,
                }}
              >
                {active === f && (
                  <motion.span
                    layoutId="filter-pill"
                    className="absolute inset-0 z-[-1]"
                    style={{ background: "var(--color-gold-500)" }}
                    transition={{ type: "spring", stiffness: 380, damping: 32 }}
                  />
                )}
                {f}
              </button>
            ))}
          </motion.div>
        </motion.div>

        {/* ── Grid ─────────────────────────────────────────────── */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filtered.map((property) => (
              <PropertyCard key={property.id} property={property} />
            ))}
          </AnimatePresence>
        </motion.div>

        {/* ── View all ─────────────────────────────────────────── */}
      </div>
    </section>
  );
};

export default PropertyGrid;
