import PageHeader from "../components/PageHeader";
import { motion } from "framer-motion";
import { Play } from "lucide-react";
import { fadeInUp, stagger } from "../lib/motion";
import BackToProperties from "../components/BackToProperties";
import ImageGallery from "../components/ImageGalllery";

const SouthAfrica = () => {
  const images = Object.values(
    import.meta.glob("/public/shortlet/*.{png,jpg,jpeg,webp}", {
      eager: true,
      query: "?url",
      import: "default",
    }),
  ) as string[];
  return (
    <main>
      <PageHeader
        title="Our Properties In South Africa"
        subtitle="Premium residences in South Africa. Handpicked for discerning investors."
        breadcrumbs={[
          { label: "Home", to: "/" },
          { label: "Our Properties" },
          { label: "Nigeria" },
        ]}
      />
      <section className="py-24 lg:py-32 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            {/* ── Left: Video ─────────────────────────────────────────── */}
            <div
              className="relative overflow-hidden group"
              style={{ aspectRatio: "16/10" }}
            >
              <video
                className="absolute inset-0 w-full h-full object-cover"
                src="/vid"
                poster="/shortlet-1.jpeg"
                autoPlay
                muted
                loop
                controls
                playsInline
              />

              {/* Light scrim */}
              <div
                className="absolute inset-0"
                style={{ background: "rgba(13,10,8,0.2)" }}
              />

              {/* Play badge on hover */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div
                  className="w-14 h-14 flex items-center justify-center rounded-full
                  opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{
                    background: "rgba(200,145,31,0.9)",
                    backdropFilter: "blur(6px)",
                  }}
                >
                  <Play size={20} fill="white" className="text-white ml-1" />
                </div>
              </div>

              {/* Location chip */}
              <div className="absolute bottom-5 left-5">
                <span
                  className="inline-flex items-center gap-2 px-4 py-2 text-[0.62rem]
                  uppercase tracking-[0.2em] text-white"
                  style={{
                    background: "rgba(13,10,8,0.5)",
                    backdropFilter: "blur(8px)",
                    border: "1px solid rgba(200,145,31,0.3)",
                    fontFamily: "var(--font-sans)",
                    fontWeight: 500,
                  }}
                >
                  <span
                    className="w-1.5 h-1.5 rounded-full"
                    style={{ background: "var(--color-gold-400)" }}
                  />
                  South Africa
                </span>
              </div>
            </div>

            {/* ── Right: Text ─────────────────────────────────────────── */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              variants={stagger}
            >
              <motion.p
                variants={fadeInUp}
                className="flex items-center gap-3 mb-6"
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
                  Sandton, South Africa
                </span>
              </motion.p>

              <motion.h2
                variants={fadeInUp}
                className="text-4xl sm:text-5xl mb-6 leading-tight"
                style={{
                  fontFamily: "var(--font-serif)",
                  fontWeight: 300,
                  color: "var(--color-charcoal-900)",
                }}
              >
                Premium Rental & Shortlet
                <br />
                <span
                  style={{
                    fontStyle: "italic",
                    color: "var(--color-gold-500)",
                  }}
                >
                  Across South Africa
                </span>
              </motion.h2>

              <motion.p
                variants={fadeInUp}
                className="text-base mb-4 leading-relaxed"
                style={{
                  color: "var(--color-charcoal-500)",
                  fontFamily: "var(--font-sans)",
                  fontWeight: 300,
                }}
              >
                Experience world-class living and investment opportunities in
                South Africa. Our portfolio features stunning luxury homes,
                waterfront apartments, and premium estates available for sale,
                long-term rental, and shortlet in Sandton, and other key
                regions.
              </motion.p>

              <motion.p
                variants={fadeInUp}
                className="text-base mb-10 leading-relaxed"
                style={{
                  color: "var(--color-charcoal-500)",
                  fontFamily: "var(--font-sans)",
                  fontWeight: 300,
                }}
              >
                We offer sophisticated properties for both ownership and
                flexible luxury living in one of Africa’s most established and
                desirable real estate markets.
              </motion.p>
            </motion.div>
          </div>
        </div>
      </section>
      <ImageGallery images={images} />
      <BackToProperties />
    </main>
  );
};

export default SouthAfrica;
