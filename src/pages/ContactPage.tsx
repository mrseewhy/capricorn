import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock, Send, CheckCircle } from "lucide-react";
import {
  FaFacebook as Facebook,
  FaLinkedin as Linkedin,
  FaInstagram as Instagram,
} from "react-icons/fa";
import PageHeader from "../components/PageHeader";
import { fadeInUp, stagger } from "../lib/motion";

/* ── Office data ─────────────────────────────────────────────────────── */
const offices = [
  {
    flag: "🇳🇬",
    city: "Lagos, Nigeria",
    tag: "Headquarters",
    address: "5 Bourdillon Road, Ikoyi, Lagos",
    phone: "+2348096555444",
    phoneDisplay: "+234 809 655 5444",
    email: "info@cgpafrica.com",
    hours: "Mon – Fri: 8:00am – 6:00pm WAT",
    whatsapp: "+2348096555444",
  },
  {
    flag: "🇿🇦",
    city: "Johannesburg, South Africa",
    tag: "South Africa Office",
    address: "201 Sandton Drive, Sandton, 2196",
    phone: "+27795833788",
    phoneDisplay: "+27 79 583 3788",
    email: "info@cgpafrica.com",
    hours: "Mon – Fri: 8:30am – 5:30pm SAST",
    whatsapp: "+27795833788",
  },
];

/* ── Socials ─────────────────────────────────────────────────────────── */
const socials = [
  {
    icon: Facebook,
    label: "Facebook",
    href: "https://www.facebook.com/CGPAFRICA",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/capricorn-global-properties/",
  },
  { icon: Instagram, label: "Instagram", href: "https://instagram.com" },
];

/* ── WhatsApp icon (lucide doesn't ship one) ─────────────────────────── */
const WhatsAppIcon = ({ size = 14 }: { size?: number }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15
      -.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463
      -2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606
      .134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025
      -.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008
      -.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479
      0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306
      1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719
      2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"
    />
    <path
      d="M12 0C5.373 0 0 5.373 0 12c0 2.124.558 4.122 1.532 5.855L.054 23.454
      a.75.75 0 00.917.917l5.635-1.476A11.954 11.954 0 0012 24c6.627 0 12-5.373
      12-12S18.627 0 12 0zm0 21.75a9.715 9.715 0 01-4.953-1.355l-.355-.212
      -3.683.964.982-3.595-.23-.371A9.718 9.718 0 012.25 12C2.25 6.615 6.615
      2.25 12 2.25S21.75 6.615 21.75 12 17.385 21.75 12 21.75z"
    />
  </svg>
);

/* ── Form interests ───────────────────────────────────────────────────── */
const interests = [
  "Buying a Property",
  "Selling a Property",
  "Property Management",
  "Investment Advisory",
  "Relocation Services",
  "Other",
];

/* ── Shared input styles ─────────────────────────────────────────────── */
const inputBase: React.CSSProperties = {
  width: "100%",
  background: "white",
  border: "1px solid var(--color-charcoal-100)",
  color: "var(--color-charcoal-900)",
  fontFamily: "var(--font-sans)",
  fontSize: "0.875rem",
  padding: "0.875rem 1rem",
  outline: "none",
};

const labelBase: React.CSSProperties = {
  display: "block",
  fontSize: "0.7rem",
  textTransform: "uppercase",
  letterSpacing: "0.14em",
  color: "var(--color-charcoal-500)",
  fontFamily: "var(--font-sans)",
  fontWeight: 500,
  marginBottom: "0.5rem",
};

/* ── Component ───────────────────────────────────────────────────────── */
export default function ContactUsPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    interest: "",
    message: "",
    honeypot: "", // hidden — must stay empty
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Silently reject bots that filled the honeypot
    if (form.honeypot) return;
    setSubmitted(true);
  };

  /* Button is active only when required visible fields are filled */
  const canSubmit =
    form.name.trim() !== "" &&
    form.email.trim() !== "" &&
    form.message.trim() !== "" &&
    form.honeypot === "";

  return (
    <main>
      <PageHeader
        title="Contact Us"
        subtitle="Our advisors are ready to assist you. Reach out and let's begin your journey."
        breadcrumbs={[{ label: "Home", to: "/" }, { label: "Contact Us" }]}
      />

      {/* ── Office cards — white background ───────────────────────────── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            variants={stagger}
          >
            {offices.map(
              ({
                flag,
                city,
                tag,
                address,
                phone,
                phoneDisplay,
                email,
                hours,
                whatsapp,
              }) => (
                <motion.div
                  key={city}
                  variants={fadeInUp}
                  className="bg-white p-8 sm:p-10"
                  style={{
                    borderTop: "3px solid var(--color-gold-500)",
                    border: "1px solid var(--color-charcoal-100)",
                    borderTopWidth: "3px",
                    boxShadow: "0 2px 20px -4px rgba(26,21,18,0.07)",
                  }}
                >
                  {/* Tag + flag */}
                  <div className="flex items-center justify-between mb-5">
                    <span
                      className="inline-block px-2.5 py-1 text-[10px] uppercase tracking-widest"
                      style={{
                        background: "var(--color-gold-50)",
                        color: "var(--color-gold-600)",
                        fontFamily: "var(--font-sans)",
                        fontWeight: 600,
                        letterSpacing: "0.15em",
                      }}
                    >
                      {tag}
                    </span>
                    <span className="text-2xl">{flag}</span>
                  </div>

                  <h3
                    className="text-2xl mb-6"
                    style={{
                      fontFamily: "var(--font-serif)",
                      fontWeight: 500,
                      color: "var(--color-charcoal-900)",
                    }}
                  >
                    {city}
                  </h3>

                  {/* Contact details */}
                  <div
                    className="space-y-3.5 text-sm mb-8"
                    style={{ fontFamily: "var(--font-sans)" }}
                  >
                    <div className="flex items-start gap-3">
                      <MapPin
                        size={14}
                        style={{
                          color: "var(--color-gold-600)",
                          marginTop: 2,
                          flexShrink: 0,
                        }}
                      />
                      <p style={{ color: "var(--color-charcoal-600)" }}>
                        {address}
                      </p>
                    </div>
                    <div className="flex items-center gap-3">
                      <Phone
                        size={14}
                        style={{
                          color: "var(--color-gold-600)",
                          flexShrink: 0,
                        }}
                      />
                      <a
                        href={`tel:${phone}`}
                        style={{ color: "var(--color-charcoal-600)" }}
                        className="hover:underline"
                      >
                        {phoneDisplay}
                      </a>
                    </div>
                    <div className="flex items-center gap-3">
                      <Mail
                        size={14}
                        style={{
                          color: "var(--color-gold-600)",
                          flexShrink: 0,
                        }}
                      />
                      <a
                        href={`mailto:${email}`}
                        style={{ color: "var(--color-charcoal-600)" }}
                        className="hover:underline"
                      >
                        {email}
                      </a>
                    </div>
                    <div className="flex items-center gap-3">
                      <Clock
                        size={14}
                        style={{
                          color: "var(--color-gold-600)",
                          flexShrink: 0,
                        }}
                      />
                      <p style={{ color: "var(--color-charcoal-600)" }}>
                        {hours}
                      </p>
                    </div>
                  </div>

                  {/* Divider */}
                  <div
                    className="mb-6"
                    style={{
                      height: "1px",
                      background: "var(--color-charcoal-100)",
                    }}
                  />

                  {/* Social + contact icons */}
                  <div className="flex items-center gap-3">
                    {/* WhatsApp */}
                    <a
                      href={`https://wa.me/${whatsapp.replace(/\D/g, "")}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="WhatsApp"
                      className="w-9 h-9 flex items-center justify-center transition-colors duration-200"
                      style={{
                        border: "1px solid var(--color-charcoal-100)",
                        color: "var(--color-charcoal-400)",
                      }}
                      onMouseEnter={(e) => {
                        (e.currentTarget as HTMLElement).style.color =
                          "#25D366";
                        (e.currentTarget as HTMLElement).style.borderColor =
                          "#25D366";
                      }}
                      onMouseLeave={(e) => {
                        (e.currentTarget as HTMLElement).style.color =
                          "var(--color-charcoal-400)";
                        (e.currentTarget as HTMLElement).style.borderColor =
                          "var(--color-charcoal-100)";
                      }}
                    >
                      <WhatsAppIcon size={14} />
                    </a>

                    {/* Email */}
                    <a
                      href={`mailto:${email}`}
                      aria-label="Email"
                      className="w-9 h-9 flex items-center justify-center transition-colors duration-200"
                      style={{
                        border: "1px solid var(--color-charcoal-100)",
                        color: "var(--color-charcoal-400)",
                      }}
                      onMouseEnter={(e) => {
                        (e.currentTarget as HTMLElement).style.color =
                          "var(--color-gold-500)";
                        (e.currentTarget as HTMLElement).style.borderColor =
                          "var(--color-gold-400)";
                      }}
                      onMouseLeave={(e) => {
                        (e.currentTarget as HTMLElement).style.color =
                          "var(--color-charcoal-400)";
                        (e.currentTarget as HTMLElement).style.borderColor =
                          "var(--color-charcoal-100)";
                      }}
                    >
                      <Mail size={14} />
                    </a>

                    {/* Social icons */}
                    {socials.map(({ icon: Icon, label, href }) => (
                      <a
                        key={label}
                        href={href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={label}
                        className="w-9 h-9 flex items-center justify-center transition-colors duration-200"
                        style={{
                          border: "1px solid var(--color-charcoal-100)",
                          color: "var(--color-charcoal-400)",
                        }}
                        onMouseEnter={(e) => {
                          (e.currentTarget as HTMLElement).style.color =
                            "var(--color-gold-500)";
                          (e.currentTarget as HTMLElement).style.borderColor =
                            "var(--color-gold-400)";
                        }}
                        onMouseLeave={(e) => {
                          (e.currentTarget as HTMLElement).style.color =
                            "var(--color-charcoal-400)";
                          (e.currentTarget as HTMLElement).style.borderColor =
                            "var(--color-charcoal-100)";
                        }}
                      >
                        <Icon size={14} strokeWidth={1.8} />
                      </a>
                    ))}
                  </div>
                </motion.div>
              ),
            )}
          </motion.div>
        </div>
      </section>

      {/* ── Contact form — ivory background ───────────────────────────── */}
      <section
        className="py-28"
        style={{ background: "var(--color-ivory-100)" }}
      >
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            {/* Left: intro text */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              variants={stagger}
            >
              <motion.p
                variants={fadeInUp}
                className="flex items-center gap-3 mb-5"
              >
                <span
                  className="h-px w-8"
                  style={{ background: "var(--color-gold-500)" }}
                />
                <span
                  className="text-xs uppercase tracking-[0.2em]"
                  style={{
                    color: "var(--color-gold-500)",
                    fontFamily: "var(--font-sans)",
                    fontWeight: 500,
                  }}
                >
                  Get in Touch
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
                Let's Start Your
                <br />
                <span
                  style={{
                    fontStyle: "italic",
                    color: "var(--color-gold-500)",
                  }}
                >
                  Property Journey
                </span>
              </motion.h2>

              <motion.p
                variants={fadeInUp}
                className="text-base mb-10 leading-relaxed"
                style={{
                  color: "var(--color-charcoal-500)",
                  fontFamily: "var(--font-sans)",
                  fontWeight: 300,
                }}
              >
                Whether you're looking to buy, sell, invest, or simply explore
                what's available, our team of dedicated real estate advisors is
                here to help. Fill in the form and a specialist will be in touch
                within one business day.
              </motion.p>

              <motion.div variants={fadeInUp} className="space-y-4">
                {[
                  "Response within 1 business day",
                  "No obligation consultation",
                  "Confidential & professional service",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <div
                      className="w-5 h-5 flex items-center justify-center rounded-full"
                      style={{ background: "rgba(200,145,31,0.12)" }}
                    >
                      <CheckCircle
                        size={12}
                        style={{ color: "var(--color-gold-500)" }}
                      />
                    </div>
                    <p
                      className="text-sm"
                      style={{
                        color: "var(--color-charcoal-500)",
                        fontFamily: "var(--font-sans)",
                        fontWeight: 300,
                      }}
                    >
                      {item}
                    </p>
                  </div>
                ))}
              </motion.div>
            </motion.div>

            {/* Right: form */}
            <motion.div
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.9, delay: 0.2 }}
            >
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center py-20 px-8 text-center bg-white"
                  style={{
                    border: "1px solid var(--color-charcoal-100)",
                    boxShadow: "0 2px 20px -4px rgba(26,21,18,0.07)",
                  }}
                >
                  <div
                    className="w-16 h-16 flex items-center justify-center rounded-full mb-6"
                    style={{ background: "rgba(200,145,31,0.1)" }}
                  >
                    <CheckCircle
                      size={28}
                      style={{ color: "var(--color-gold-500)" }}
                    />
                  </div>
                  <h3
                    className="text-2xl mb-3"
                    style={{
                      fontFamily: "var(--font-serif)",
                      fontWeight: 400,
                      color: "var(--color-charcoal-900)",
                    }}
                  >
                    Message Received
                  </h3>
                  <p
                    className="text-sm"
                    style={{
                      color: "var(--color-charcoal-500)",
                      fontFamily: "var(--font-sans)",
                      fontWeight: 300,
                    }}
                  >
                    Thank you for reaching out. A member of our team will
                    contact you within one business day.
                  </p>
                </motion.div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  className="space-y-5 bg-white p-8 sm:p-10"
                  style={{
                    border: "1px solid var(--color-charcoal-100)",
                    boxShadow: "0 2px 20px -4px rgba(26,21,18,0.07)",
                  }}
                >
                  {/* ── Honeypot — visually hidden, never filled by humans ── */}
                  <div
                    aria-hidden="true"
                    style={{
                      position: "absolute",
                      left: "-9999px",
                      opacity: 0,
                      height: 0,
                      overflow: "hidden",
                    }}
                  >
                    <label htmlFor="website">Leave this field blank</label>
                    <input
                      type="text"
                      id="website"
                      name="honeypot"
                      value={form.honeypot}
                      onChange={handleChange}
                      tabIndex={-1}
                      autoComplete="off"
                    />
                  </div>

                  {/* Name + Email */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label style={labelBase}>Full Name *</label>
                      <input
                        type="text"
                        name="name"
                        required
                        placeholder="Your full name"
                        value={form.name}
                        onChange={handleChange}
                        style={inputBase}
                      />
                    </div>
                    <div>
                      <label style={labelBase}>Email Address *</label>
                      <input
                        type="email"
                        name="email"
                        required
                        placeholder="you@example.com"
                        value={form.email}
                        onChange={handleChange}
                        style={inputBase}
                      />
                    </div>
                  </div>

                  {/* Phone + Interest */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label style={labelBase}>Phone Number</label>
                      <input
                        type="tel"
                        name="phone"
                        placeholder="+234 or +27…"
                        value={form.phone}
                        onChange={handleChange}
                        style={inputBase}
                      />
                    </div>
                    <div>
                      <label style={labelBase}>I'm Interested In</label>
                      <select
                        name="interest"
                        value={form.interest}
                        onChange={handleChange}
                        style={{ ...inputBase, appearance: "none" }}
                      >
                        <option value="">Select an interest</option>
                        {interests.map((i) => (
                          <option key={i} value={i}>
                            {i}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label style={labelBase}>Your Message *</label>
                    <textarea
                      name="message"
                      required
                      rows={5}
                      placeholder="Tell us about your property needs, budget, preferred locations…"
                      value={form.message}
                      onChange={handleChange}
                      style={{ ...inputBase, resize: "vertical" }}
                    />
                  </div>

                  {/* Submit */}
                  <button
                    type="submit"
                    disabled={!canSubmit}
                    className="flex items-center justify-center gap-2.5 w-full py-4
                      text-sm font-semibold uppercase tracking-widest transition-all duration-300"
                    style={{
                      background: canSubmit
                        ? "linear-gradient(135deg, var(--color-gold-500), var(--color-gold-600))"
                        : "var(--color-charcoal-100)",
                      color: canSubmit ? "#fff" : "var(--color-charcoal-400)",
                      letterSpacing: "0.12em",
                      fontSize: "0.72rem",
                      boxShadow: canSubmit
                        ? "0 4px 24px -4px rgba(200,145,31,0.4)"
                        : "none",
                      cursor: canSubmit ? "pointer" : "not-allowed",
                    }}
                  >
                    <Send size={14} />
                    Send Message
                  </button>

                  <p
                    className="text-[11px] text-center"
                    style={{
                      color: "var(--color-charcoal-400)",
                      fontFamily: "var(--font-sans)",
                    }}
                  >
                    * Required fields. Your information is kept strictly
                    confidential.
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
