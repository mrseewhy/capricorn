import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence, type Variants } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

/* ── Props ───────────────────────────────────────────────────────────── */
interface ImageGalleryProps {
  /**
   * Pass imported images as an array. In Vite you can do:
   *
   *   const images = Object.values(
   *     import.meta.glob("./img/ *", { eager: true, as: "url" })
   *   ) as string[];
   *
   * Then: <ImageGallery images={images} />
   */
  images: string[];
  /** Optional alt text per image — falls back to "Gallery image N" */
  alts?: string[];
}

/* ── Variants ────────────────────────────────────────────────────────── */
const backdropVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.25 } },
  exit: { opacity: 0, transition: { duration: 0.2 } },
};

const modalVariants: Variants = {
  hidden: { opacity: 0, scale: 0.94 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.3, ease: [0.16, 1, 0.3, 1] },
  },
  exit: { opacity: 0, scale: 0.94, transition: { duration: 0.2 } },
};

const slideVariants: Variants = {
  enter: (dir: number) => ({
    x: dir > 0 ? 60 : -60,
    opacity: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.32, ease: [0.16, 1, 0.3, 1] },
  },
  exit: (dir: number) => ({
    x: dir > 0 ? -60 : 60,
    opacity: 0,
    transition: { duration: 0.22 },
  }),
};

/* ── Component ───────────────────────────────────────────────────────── */
const ImageGallery = ({ images, alts = [] }: ImageGalleryProps) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [direction, setDirection] = useState(1);

  const isOpen = activeIndex !== null;

  /* ── Navigation helpers ─────────────────────────────────────────── */
  const openModal = (index: number) => {
    setDirection(1);
    setActiveIndex(index);
  };

  const closeModal = () => setActiveIndex(null);

  const prev = useCallback(() => {
    if (activeIndex === null) return;
    setDirection(-1);
    setActiveIndex((i) => (i! === 0 ? images.length - 1 : i! - 1));
  }, [activeIndex, images.length]);

  const next = useCallback(() => {
    if (activeIndex === null) return;
    setDirection(1);
    setActiveIndex((i) => (i! === images.length - 1 ? 0 : i! + 1));
  }, [activeIndex, images.length]);

  /* ── Keyboard support ───────────────────────────────────────────── */
  useEffect(() => {
    if (!isOpen) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeModal();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [isOpen, prev, next]);

  /* ── Body scroll lock ───────────────────────────────────────────── */
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  if (!images.length) return null;

  const altFor = (i: number) => alts[i] ?? `Gallery image ${i + 1}`;

  return (
    <section
      className="py-24 lg:py-32"
      style={{ background: "var(--color-ivory-100)" }}
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
        {/* ── Section header ───────────────────────────────────────── */}
        <motion.div
          className="flex items-center gap-3 mb-12"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
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
            Gallery
          </span>
        </motion.div>

        {/* ── Grid ─────────────────────────────────────────────────── */}
        <motion.div
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.055 } },
          }}
        >
          {images.map((src, i) => (
            <motion.button
              key={src + i}
              onClick={() => openModal(i)}
              className="group relative overflow-hidden focus-visible:outline-none
                focus-visible:ring-2 focus-visible:ring-offset-2"
              style={
                {
                  aspectRatio: "1 / 1",
                  focusRingColor: "var(--color-gold-500)",
                } as React.CSSProperties
              }
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.45, ease: [0.16, 1, 0.3, 1] },
                },
              }}
              aria-label={`Open ${altFor(i)}`}
            >
              <img
                src={src}
                alt={altFor(i)}
                className="absolute inset-0 w-full h-full object-cover
                  transition-transform duration-700 ease-out
                  group-hover:scale-105"
              />

              {/* Hover overlay */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100
                  transition-opacity duration-300 flex items-center justify-center"
                style={{ background: "rgba(13,10,8,0.35)" }}
              >
                <div
                  className="w-10 h-10 flex items-center justify-center"
                  style={{
                    border: "1px solid rgba(255,255,255,0.6)",
                  }}
                >
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 14 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1 1h5M1 1v5M13 13H8M13 13V8M13 1H8M13 1v5M1 13h5M1 13V8"
                      stroke="white"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                    />
                  </svg>
                </div>
              </div>
            </motion.button>
          ))}
        </motion.div>

        {/* ── Count ────────────────────────────────────────────────── */}
        <p
          className="mt-6 text-[0.7rem] uppercase tracking-[0.18em] text-center"
          style={{
            color: "var(--color-charcoal-400)",
            fontFamily: "var(--font-sans)",
          }}
        >
          {images.length} {images.length === 1 ? "image" : "images"}
        </p>
      </div>

      {/* ── Modal ────────────────────────────────────────────────────── */}
      <AnimatePresence>
        {isOpen && activeIndex !== null && (
          <>
            {/* Backdrop — click outside to close */}
            <motion.div
              className="fixed inset-0 z-[80]"
              style={{
                background: "rgba(13,10,8,0.92)",
                backdropFilter: "blur(6px)",
              }}
              variants={backdropVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              onClick={closeModal}
              aria-hidden="true"
            />

            {/* Modal shell — stopPropagation so clicks on image don't close */}
            <motion.div
              className="fixed inset-0 z-[90] flex items-center justify-center
                px-4 sm:px-10 lg:px-20 pointer-events-none"
              variants={modalVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              {/* Image wrapper */}
              <div
                className="relative w-full max-w-5xl pointer-events-auto
                  flex items-center justify-center overflow-hidden"
                style={{ maxHeight: "85vh" }}
                onClick={(e) => e.stopPropagation()}
              >
                <AnimatePresence mode="wait" custom={direction}>
                  <motion.img
                    key={activeIndex}
                    src={images[activeIndex]}
                    alt={altFor(activeIndex)}
                    custom={direction}
                    variants={slideVariants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    className="object-contain w-full"
                    style={{ maxHeight: "85vh" }}
                    draggable={false}
                  />
                </AnimatePresence>
              </div>
            </motion.div>

            {/* ── Close button ────────────────────────────────────── */}
            <button
              onClick={closeModal}
              aria-label="Close gallery"
              className="fixed top-5 right-5 z-[100] w-10 h-10 flex items-center
                justify-center transition-colors duration-200"
              style={{
                background: "rgba(255,255,255,0.1)",
                border: "1px solid rgba(255,255,255,0.2)",
                color: "white",
              }}
            >
              <X size={18} strokeWidth={1.8} />
            </button>

            {/* ── Left arrow ──────────────────────────────────────── */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                prev();
              }}
              aria-label="Previous image"
              className="fixed left-4 sm:left-6 top-1/2 -translate-y-1/2 z-[100]
                w-11 h-11 flex items-center justify-center
                transition-colors duration-200 hover:bg-white/20"
              style={{
                background: "rgba(255,255,255,0.08)",
                border: "1px solid rgba(255,255,255,0.18)",
                color: "white",
              }}
            >
              <ChevronLeft size={20} strokeWidth={1.8} />
            </button>

            {/* ── Right arrow ─────────────────────────────────────── */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                next();
              }}
              aria-label="Next image"
              className="fixed right-4 sm:right-6 top-1/2 -translate-y-1/2 z-[100]
                w-11 h-11 flex items-center justify-center
                transition-colors duration-200 hover:bg-white/20"
              style={{
                background: "rgba(255,255,255,0.08)",
                border: "1px solid rgba(255,255,255,0.18)",
                color: "white",
              }}
            >
              <ChevronRight size={20} strokeWidth={1.8} />
            </button>

            {/* ── Counter ─────────────────────────────────────────── */}
            <div
              className="fixed bottom-5 left-1/2 -translate-x-1/2 z-[100]
                px-4 py-2 text-[0.68rem] uppercase tracking-[0.2em]"
              style={{
                background: "rgba(13,10,8,0.6)",
                backdropFilter: "blur(8px)",
                border: "1px solid rgba(255,255,255,0.1)",
                color: "rgba(255,255,255,0.7)",
                fontFamily: "var(--font-sans)",
              }}
            >
              {activeIndex + 1} / {images.length}
            </div>
          </>
        )}
      </AnimatePresence>
    </section>
  );
};

export default ImageGallery;
