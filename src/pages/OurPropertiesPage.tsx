// import { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { Bed, Bath, Maximize2, MapPin } from "lucide-react";
import PageHeader from "../components/PageHeader";
import PropertyShowcase from "../components/Propertyshowcase";
import PropertyGrid from "../components/Propertygrid";

// const properties = [
//   {
//     id: 1,
//     title: "The Meridian Penthouse",
//     location: "Victoria Island, Lagos",
//     price: "₦850,000,000",
//     beds: 4,
//     baths: 5,
//     sqft: "4,200",
//     type: "Penthouse",
//     country: "Nigeria",
//     image:
//       "https://images.unsplash.com/photo-1613977257363-707ba9348227?w=700&q=80&auto=format&fit=crop",
//     tag: "Featured",
//   },
//   {
//     id: 2,
//     title: "Sandton Sky Residence",
//     location: "Sandton, Johannesburg",
//     price: "R 12,500,000",
//     beds: 3,
//     baths: 3,
//     sqft: "2,800",
//     type: "Apartment",
//     country: "South Africa",
//     image:
//       "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=700&q=80&auto=format&fit=crop",
//     tag: "New",
//   },
//   {
//     id: 3,
//     title: "Maitama Garden Estate",
//     location: "Maitama, Abuja",
//     price: "₦1,200,000,000",
//     beds: 6,
//     baths: 7,
//     sqft: "7,500",
//     type: "Villa",
//     country: "Nigeria",
//     image:
//       "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=700&q=80&auto=format&fit=crop",
//     tag: "Exclusive",
//   },
//   {
//     id: 4,
//     title: "Lekki Phase 1 Residence",
//     location: "Lekki, Lagos",
//     price: "₦320,000,000",
//     beds: 5,
//     baths: 4,
//     sqft: "3,600",
//     type: "Villa",
//     country: "Nigeria",
//     image:
//       "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=700&q=80&auto=format&fit=crop",
//     tag: null,
//   },
//   {
//     id: 5,
//     title: "Cape Town Waterfront Suite",
//     location: "V&A Waterfront, Cape Town",
//     price: "R 8,900,000",
//     beds: 2,
//     baths: 2,
//     sqft: "1,600",
//     type: "Apartment",
//     country: "South Africa",
//     image:
//       "https://images.unsplash.com/photo-1619643946829-e23b9d33f6ae?w=700&q=80&auto=format&fit=crop",
//     tag: "New",
//   },
//   {
//     id: 6,
//     title: "Banana Island Mansion",
//     location: "Banana Island, Lagos",
//     price: "₦2,500,000,000",
//     beds: 8,
//     baths: 10,
//     sqft: "12,000",
//     type: "Villa",
//     country: "Nigeria",
//     image:
//       "https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=700&q=80&auto=format&fit=crop",
//     tag: "Exclusive",
//   },
// ];

// const filters = [
//   "All",
//   "Nigeria",
//   "South Africa",
//   "Apartment",
//   "Villa",
//   "Penthouse",
// ];

export default function OurPropertiesPage() {
  // const [activeFilter, setActiveFilter] = useState("All");

  // const filtered = properties.filter((p) => {
  //   if (activeFilter === "All") return true;
  //   return p.country === activeFilter || p.type === activeFilter;
  // });

  return (
    <main>
      <PageHeader
        title="Our Properties"
        subtitle="Handpicked luxury residences across Nigeria, South Africa and beyond."
        breadcrumbs={[{ label: "Home", to: "/" }, { label: "Our Properties" }]}
      />
      <PropertyShowcase />
      <PropertyGrid />

      {/* <section
        className="py-20"
        style={{ background: "var(--color-ivory-100)" }}
      >
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
          <div className="flex flex-wrap gap-3 mb-12">
            {filters.map((f) => (
              <button
                key={f}
                onClick={() => setActiveFilter(f)}
                className="px-5 py-2.5 text-xs uppercase tracking-widest transition-all duration-200"
                style={{
                  fontFamily: "var(--font-sans)",
                  letterSpacing: "0.12em",
                  fontSize: "0.7rem",
                  fontWeight: activeFilter === f ? 600 : 400,
                  background:
                    activeFilter === f
                      ? "var(--color-gold-500)"
                      : "transparent",
                  color:
                    activeFilter === f ? "#fff" : "var(--color-charcoal-600)",
                  border: `1px solid ${activeFilter === f ? "var(--color-gold-500)" : "var(--color-charcoal-200)"}`,
                }}
              >
                {f}
              </button>
            ))}
          </div>

          <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            <AnimatePresence>
              {filtered.map((p) => (
                <motion.div
                  key={p.id}
                  layout
                  initial={{ opacity: 0, scale: 0.97 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  transition={{ duration: 0.4 }}
                  className="group cursor-pointer bg-white overflow-hidden"
                  style={{ boxShadow: "0 2px 20px -4px rgba(26,21,18,0.10)" }}
                  whileHover={{
                    y: -6,
                    boxShadow: "0 16px 48px -8px rgba(26,21,18,0.18)",
                  }}
                >
                  <div className="relative overflow-hidden h-56">
                    <img
                      src={p.image}
                      alt={p.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    {p.tag && (
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
                    )}
                    <span
                      className="absolute top-4 right-4 px-2 py-1 text-[10px] uppercase tracking-widest"
                      style={{
                        background: "rgba(13,10,8,0.75)",
                        color: "rgba(232,223,192,0.9)",
                        backdropFilter: "blur(8px)",
                        letterSpacing: "0.12em",
                        fontFamily: "var(--font-sans)",
                      }}
                    >
                      {p.type}
                    </span>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-1.5 mb-2">
                      <MapPin
                        size={12}
                        style={{ color: "var(--color-gold-600)" }}
                      />
                      <p
                        className="text-xs uppercase tracking-widest"
                        style={{
                          color: "var(--color-charcoal-400)",
                          letterSpacing: "0.14em",
                          fontFamily: "var(--font-sans)",
                        }}
                      >
                        {p.location}
                      </p>
                    </div>
                    <h3
                      className="text-xl mb-4"
                      style={{
                        fontFamily: "var(--font-serif)",
                        fontWeight: 500,
                      }}
                    >
                      {p.title}
                    </h3>
                    <div
                      className="flex items-center gap-4 text-xs mb-5 pb-5"
                      style={{
                        color: "var(--color-charcoal-500)",
                        fontFamily: "var(--font-sans)",
                        borderBottom: "1px solid var(--color-charcoal-100)",
                      }}
                    >
                      <span className="flex items-center gap-1.5">
                        <Bed size={13} /> {p.beds} Beds
                      </span>
                      <span className="flex items-center gap-1.5">
                        <Bath size={13} /> {p.baths} Baths
                      </span>
                      <span className="flex items-center gap-1.5">
                        <Maximize2 size={13} /> {p.sqft} sqft
                      </span>
                    </div>
                    <div className="flex items-center justify-between">
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
                        Enquire →
                      </span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section> */}
    </main>
  );
}
