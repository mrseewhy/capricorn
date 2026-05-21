import { motion } from 'framer-motion';
import PageHeader from '../components/PageHeader';
import { fadeInUp, stagger, LUXURY_EASE } from '../lib/motion';

const team = [
  { name: 'Adewale Okonkwo', role: 'Founder & CEO', img: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&q=80&fit=crop' },
  { name: 'Amara Diallo', role: 'Head of Acquisitions', img: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=400&q=80&fit=crop' },
  { name: 'Sipho Ndlovu', role: 'SA Operations Director', img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80&fit=crop' },
  { name: 'Ngozi Abiodun', role: 'Head of Client Relations', img: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&q=80&fit=crop' },
];

const values = [
  { title: 'Integrity', desc: 'Every transaction, every recommendation, rooted in honesty and transparency.' },
  { title: 'Excellence', desc: 'We hold ourselves to the highest standard in service, properties, and outcomes.' },
  { title: 'Global Vision', desc: 'African expertise with a world-class lens on markets, trends, and opportunity.' },
  { title: 'Legacy', desc: 'We help our clients build generational wealth through strategic property ownership.' },
];

export default function AboutUsPage() {
  return (
    <main>
      <PageHeader title="About Capricorn"
        subtitle="A decade of excellence in Africa's most dynamic real estate markets."
        breadcrumbs={[{ label: 'Home', to: '/' }, { label: 'About Us' }]} />

      <section className="py-28" style={{ background: '#ffffff' }}>
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }} variants={stagger}>
              <motion.p variants={fadeInUp} className="flex items-center gap-3 mb-4">
                <span className="h-px w-8" style={{ background: 'var(--color-gold-500)' }} />
                <span className="text-xs uppercase tracking-[0.2em]" style={{ color: 'var(--color-gold-600)', fontFamily: 'var(--font-sans)', fontWeight: 500 }}>Our Mission</span>
              </motion.p>
              <motion.h2 variants={fadeInUp} className="text-4xl sm:text-5xl mb-6"
                style={{ fontFamily: 'var(--font-serif)', fontWeight: 300 }}>
                Redefining Real Estate<br />
                <span style={{ fontStyle: 'italic', color: 'var(--color-gold-600)' }}>Across Africa</span>
              </motion.h2>
              <motion.p variants={fadeInUp} className="text-base mb-5 leading-relaxed"
                style={{ color: 'var(--color-charcoal-600)', fontFamily: 'var(--font-sans)', fontWeight: 300 }}>
                Capricorn Global Properties was founded on a singular conviction: that Africa's real estate market deserves world-class representation. Headquartered in Lagos with a growing footprint in South Africa, we have built a reputation as the partner of choice for investors who demand the very best.
              </motion.p>
              <motion.p variants={fadeInUp} className="text-base leading-relaxed"
                style={{ color: 'var(--color-charcoal-600)', fontFamily: 'var(--font-sans)', fontWeight: 300 }}>
                Our team combines deep local market knowledge with an international outlook, ensuring every client — whether a first-time buyer or a seasoned portfolio investor — receives bespoke guidance that transforms ambition into legacy.
              </motion.p>
            </motion.div>
            <motion.div className="relative"
              initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-80px' }} transition={{ duration: 0.9, ease: LUXURY_EASE }}>
              <img src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80&auto=format&fit=crop" alt="Our office" className="w-full h-96 object-cover" />
              <div className="absolute -bottom-5 -left-5 px-8 py-6 hidden sm:block"
                style={{ background: 'var(--color-charcoal-950)', border: '1px solid rgba(200,145,31,0.2)' }}>
                <p className="text-3xl mb-0.5" style={{ fontFamily: 'var(--font-serif)', color: 'var(--color-gold-400)', fontWeight: 500 }}>12+</p>
                <p className="text-xs uppercase tracking-widest" style={{ color: 'var(--color-charcoal-400)', letterSpacing: '0.14em', fontFamily: 'var(--font-sans)' }}>Years of Excellence</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-24" style={{ background: 'var(--color-ivory-100)' }}>
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
          <motion.div className="text-center mb-14" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
            <motion.h2 variants={fadeInUp} className="text-4xl sm:text-5xl" style={{ fontFamily: 'var(--font-serif)', fontWeight: 300 }}>Our Core Values</motion.h2>
          </motion.div>
          <motion.div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
            {values.map(({ title, desc }, i) => (
              <motion.div key={title} variants={fadeInUp} className="p-8 bg-white"
                style={{ borderTop: '3px solid var(--color-gold-500)', boxShadow: '0 2px 16px -4px rgba(26,21,18,0.08)' }}>
                <span className="text-4xl mb-4 block" style={{ fontFamily: 'var(--font-serif)', color: 'var(--color-gold-200)', fontWeight: 300 }}>0{i + 1}</span>
                <h3 className="text-xl mb-3" style={{ fontFamily: 'var(--font-serif)', fontWeight: 500 }}>{title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: 'var(--color-charcoal-500)', fontFamily: 'var(--font-sans)', fontWeight: 300 }}>{desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="py-28" style={{ background: '#ffffff' }}>
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
          <motion.div className="text-center mb-14" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
            <motion.p variants={fadeInUp} className="flex items-center justify-center gap-3 mb-4">
              <span className="h-px w-8" style={{ background: 'var(--color-gold-500)' }} />
              <span className="text-xs uppercase tracking-[0.2em]" style={{ color: 'var(--color-gold-600)', fontFamily: 'var(--font-sans)', fontWeight: 500 }}>The Experts</span>
              <span className="h-px w-8" style={{ background: 'var(--color-gold-500)' }} />
            </motion.p>
            <motion.h2 variants={fadeInUp} className="text-4xl sm:text-5xl" style={{ fontFamily: 'var(--font-serif)', fontWeight: 300 }}>Leadership Team</motion.h2>
          </motion.div>
          <motion.div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
            {team.map(({ name, role, img }) => (
              <motion.div key={name} variants={fadeInUp} className="group cursor-pointer">
                <div className="relative overflow-hidden mb-4 aspect-[4/5]">
                  <img src={img} alt={name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{ background: 'linear-gradient(to top, rgba(13,10,8,0.4), transparent)' }} />
                </div>
                <h3 className="text-lg mb-0.5" style={{ fontFamily: 'var(--font-serif)', fontWeight: 500 }}>{name}</h3>
                <p className="text-xs uppercase tracking-widest" style={{ color: 'var(--color-gold-600)', letterSpacing: '0.12em', fontFamily: 'var(--font-sans)' }}>{role}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </main>
  );
}
