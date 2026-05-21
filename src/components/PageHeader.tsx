import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import { LUXURY_EASE } from '../lib/motion';

interface BreadcrumbItem { label: string; to?: string; }
interface PageHeaderProps {
  title: string; subtitle?: string;
  breadcrumbs: BreadcrumbItem[]; bgImage?: string;
}

export default function PageHeader({ title, subtitle, breadcrumbs, bgImage }: PageHeaderProps) {
  return (
    <section className="relative pt-40 pb-20 overflow-hidden" aria-label="Page header">
      <div className="absolute inset-0"
        style={{ background: bgImage ? `url('${bgImage}') center/cover no-repeat` : 'var(--color-charcoal-950)' }} />
      <div className="absolute inset-0 opacity-[0.04]"
        style={{ backgroundImage: `repeating-linear-gradient(45deg, var(--color-gold-500) 0px, var(--color-gold-500) 1px, transparent 1px, transparent 60px), repeating-linear-gradient(-45deg, var(--color-gold-500) 0px, var(--color-gold-500) 1px, transparent 1px, transparent 60px)` }} />
      {bgImage && <div className="absolute inset-0" style={{ background: 'rgba(13,10,8,0.8)' }} />}
      <div className="absolute bottom-0 left-0 right-0 h-px"
        style={{ background: 'linear-gradient(90deg, transparent, var(--color-gold-500) 30%, var(--color-gold-300) 50%, var(--color-gold-500) 70%, transparent)' }} />

      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
        <motion.nav className="flex items-center gap-1.5 mb-6" aria-label="Breadcrumb"
          initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          {breadcrumbs.map((item, i) => (
            <span key={i} className="flex items-center gap-1.5">
              {i > 0 && <ChevronRight size={13} style={{ color: 'var(--color-gold-700)' }} />}
              {item.to && i < breadcrumbs.length - 1 ? (
                <Link to={item.to} className="text-xs uppercase tracking-widest transition-colors duration-200"
                  style={{ color: 'var(--color-charcoal-400)', letterSpacing: '0.14em', fontFamily: 'var(--font-sans)' }}>
                  {item.label}
                </Link>
              ) : (
                <span className="text-xs uppercase tracking-widest"
                  style={{ color: 'var(--color-gold-500)', letterSpacing: '0.14em', fontFamily: 'var(--font-sans)' }}>
                  {item.label}
                </span>
              )}
            </span>
          ))}
        </motion.nav>

        <motion.h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl mb-4"
          style={{ fontFamily: 'var(--font-serif)', fontWeight: 300, color: 'var(--color-ivory-100)' }}
          initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: LUXURY_EASE }}>
          {title}
        </motion.h1>

        <motion.div className="h-0.5 w-12 mb-5"
          style={{ background: 'linear-gradient(90deg, var(--color-gold-500), var(--color-gold-300))' }}
          initial={{ scaleX: 0, originX: 0 }} animate={{ scaleX: 1 }}
          transition={{ duration: 0.7, delay: 0.3 }} />

        {subtitle && (
          <motion.p className="text-base sm:text-lg max-w-xl"
            style={{ color: 'rgba(232,223,192,0.65)', fontFamily: 'var(--font-sans)', fontWeight: 300 }}
            initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}>
            {subtitle}
          </motion.p>
        )}
      </div>
    </section>
  );
}
