import { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle } from 'lucide-react';
import PageHeader from '../components/PageHeader';
import { fadeInUp, stagger } from '../lib/motion';

const offices = [
  { city: 'Lagos, Nigeria', tag: 'Headquarters', address: '5 Bourdillon Road, Ikoyi, Lagos', phone: '+234 800 000 0000', email: 'lagos@capricornglobal.com', hours: 'Mon – Fri: 8:00am – 6:00pm' },
  { city: 'Abuja, Nigeria', tag: 'Regional Office', address: 'Plot 15, Cadastral Zone, Maitama, Abuja', phone: '+234 801 000 0000', email: 'abuja@capricornglobal.com', hours: 'Mon – Fri: 8:00am – 5:30pm' },
  { city: 'Johannesburg, SA', tag: 'South Africa Office', address: '201 Sandton Drive, Sandton, 2196', phone: '+27 11 000 0000', email: 'joburg@capricornglobal.com', hours: 'Mon – Fri: 8:30am – 5:30pm' },
];

const interests = ['Buying a Property', 'Selling a Property', 'Property Management', 'Investment Advisory', 'Relocation Services', 'Other'];

export default function ContactUsPage() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', interest: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };
  const handleSubmit = (e: React.FormEvent) => { e.preventDefault(); setSubmitted(true); };

  const inputBase: React.CSSProperties = {
    width: '100%', background: 'var(--color-charcoal-950)', border: '1px solid rgba(200,145,31,0.18)',
    color: 'var(--color-ivory-200)', fontFamily: 'var(--font-sans)', fontSize: '0.875rem',
    padding: '0.875rem 1rem', outline: 'none',
  };
  const labelBase: React.CSSProperties = {
    display: 'block', fontSize: '0.7rem', textTransform: 'uppercase', letterSpacing: '0.14em',
    color: 'var(--color-charcoal-400)', fontFamily: 'var(--font-sans)', fontWeight: 500, marginBottom: '0.5rem',
  };

  return (
    <main>
      <PageHeader title="Contact Us"
        subtitle="Our advisors are ready to assist you. Reach out and let's begin your journey."
        breadcrumbs={[{ label: 'Home', to: '/' }, { label: 'Contact Us' }]} />

      <section className="py-20" style={{ background: 'var(--color-ivory-100)' }}>
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
          <motion.div className="grid grid-cols-1 md:grid-cols-3 gap-6"
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-60px' }} variants={stagger}>
            {offices.map(({ city, tag, address, phone, email, hours }) => (
              <motion.div key={city} variants={fadeInUp} className="bg-white p-8"
                style={{ borderTop: '3px solid var(--color-gold-500)', boxShadow: '0 2px 20px -4px rgba(26,21,18,0.08)' }}>
                <span className="inline-block px-2 py-0.5 text-[10px] uppercase tracking-widest mb-4"
                  style={{ background: 'var(--color-gold-50)', color: 'var(--color-gold-600)', fontFamily: 'var(--font-sans)', fontWeight: 600, letterSpacing: '0.15em' }}>
                  {tag}
                </span>
                <h3 className="text-2xl mb-5" style={{ fontFamily: 'var(--font-serif)', fontWeight: 500 }}>{city}</h3>
                <div className="space-y-3.5 text-sm" style={{ fontFamily: 'var(--font-sans)' }}>
                  <div className="flex items-start gap-3">
                    <MapPin size={14} style={{ color: 'var(--color-gold-600)', marginTop: 2, flexShrink: 0 }} />
                    <p style={{ color: 'var(--color-charcoal-600)' }}>{address}</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone size={14} style={{ color: 'var(--color-gold-600)', flexShrink: 0 }} />
                    <a href={`tel:${phone}`} style={{ color: 'var(--color-charcoal-600)' }}>{phone}</a>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail size={14} style={{ color: 'var(--color-gold-600)', flexShrink: 0 }} />
                    <a href={`mailto:${email}`} style={{ color: 'var(--color-charcoal-600)' }}>{email}</a>
                  </div>
                  <div className="flex items-center gap-3">
                    <Clock size={14} style={{ color: 'var(--color-gold-600)', flexShrink: 0 }} />
                    <p style={{ color: 'var(--color-charcoal-600)' }}>{hours}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="py-28" style={{ background: 'var(--color-charcoal-950)' }}>
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }} variants={stagger}>
              <motion.p variants={fadeInUp} className="flex items-center gap-3 mb-5">
                <span className="h-px w-8" style={{ background: 'var(--color-gold-500)' }} />
                <span className="text-xs uppercase tracking-[0.2em]" style={{ color: 'var(--color-gold-500)', fontFamily: 'var(--font-sans)', fontWeight: 500 }}>Get in Touch</span>
              </motion.p>
              <motion.h2 variants={fadeInUp} className="text-4xl sm:text-5xl mb-6 leading-tight"
                style={{ fontFamily: 'var(--font-serif)', fontWeight: 300, color: 'var(--color-ivory-100)' }}>
                Let's Start Your<br />
                <span style={{ fontStyle: 'italic', color: 'var(--color-gold-400)' }}>Property Journey</span>
              </motion.h2>
              <motion.p variants={fadeInUp} className="text-base mb-10 leading-relaxed"
                style={{ color: 'rgba(179,170,160,0.75)', fontFamily: 'var(--font-sans)', fontWeight: 300 }}>
                Whether you're looking to buy, sell, invest, or simply explore what's available, our team of dedicated real estate advisors is here to help. Fill in the form and a specialist will be in touch within one business day.
              </motion.p>
              <motion.div variants={fadeInUp} className="space-y-4">
                {['Response within 1 business day', 'No obligation consultation', 'Confidential & professional service'].map(item => (
                  <div key={item} className="flex items-center gap-3">
                    <div className="w-5 h-5 flex items-center justify-center rounded-full" style={{ background: 'rgba(200,145,31,0.15)' }}>
                      <CheckCircle size={12} style={{ color: 'var(--color-gold-500)' }} />
                    </div>
                    <p className="text-sm" style={{ color: 'rgba(179,170,160,0.75)', fontFamily: 'var(--font-sans)', fontWeight: 300 }}>{item}</p>
                  </div>
                ))}
              </motion.div>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 32 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }} transition={{ duration: 0.9, delay: 0.2 }}>
              {submitted ? (
                <motion.div initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center py-20 px-8 text-center"
                  style={{ border: '1px solid rgba(200,145,31,0.25)', background: 'rgba(200,145,31,0.04)' }}>
                  <div className="w-16 h-16 flex items-center justify-center rounded-full mb-6" style={{ background: 'rgba(200,145,31,0.12)' }}>
                    <CheckCircle size={28} style={{ color: 'var(--color-gold-500)' }} />
                  </div>
                  <h3 className="text-2xl mb-3" style={{ fontFamily: 'var(--font-serif)', fontWeight: 400, color: 'var(--color-ivory-100)' }}>Message Received</h3>
                  <p className="text-sm" style={{ color: 'rgba(179,170,160,0.75)', fontFamily: 'var(--font-sans)', fontWeight: 300 }}>
                    Thank you for reaching out. A member of our team will contact you within one business day.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label style={labelBase}>Full Name</label>
                      <input type="text" name="name" required placeholder="Your full name" value={form.name} onChange={handleChange} style={inputBase} />
                    </div>
                    <div>
                      <label style={labelBase}>Email Address</label>
                      <input type="email" name="email" required placeholder="you@example.com" value={form.email} onChange={handleChange} style={inputBase} />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label style={labelBase}>Phone Number</label>
                      <input type="tel" name="phone" placeholder="+234 or +27…" value={form.phone} onChange={handleChange} style={inputBase} />
                    </div>
                    <div>
                      <label style={labelBase}>I'm Interested In</label>
                      <select name="interest" value={form.interest} onChange={handleChange} style={{ ...inputBase, appearance: 'none' }}>
                        <option value="" style={{ background: '#0d0a08' }}>Select an interest</option>
                        {interests.map(i => <option key={i} value={i} style={{ background: '#0d0a08' }}>{i}</option>)}
                      </select>
                    </div>
                  </div>
                  <div>
                    <label style={labelBase}>Your Message</label>
                    <textarea name="message" required rows={5} placeholder="Tell us about your property needs, budget, preferred locations…" value={form.message} onChange={handleChange} style={{ ...inputBase, resize: 'vertical' }} />
                  </div>
                  <button type="submit" className="flex items-center justify-center gap-2.5 w-full py-4 text-sm font-semibold uppercase tracking-widest transition-all duration-300"
                    style={{ background: 'linear-gradient(135deg, var(--color-gold-500), var(--color-gold-600))', color: '#fff', letterSpacing: '0.12em', fontSize: '0.72rem', boxShadow: '0 4px 24px -4px rgba(200,145,31,0.4)' }}>
                    <Send size={14} />Send Message
                  </button>
                  <p className="text-[11px] text-center" style={{ color: 'rgba(148,136,128,0.55)', fontFamily: 'var(--font-sans)' }}>
                    Your information is kept strictly confidential.
                  </p>
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
}
