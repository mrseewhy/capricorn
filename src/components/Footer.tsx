import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  MapPin,
  Phone,
  Mail,
  ArrowRight,
  Send,
  Share2,
  Link as LinkIcon,
  AtSign,
  Rss,
} from "lucide-react";
import logo from "../assets/logo.png";

const quickLinks = [
  { label: "Home", to: "/" },
  { label: "About Us", to: "/about-us" },
  { label: "Our Properties", to: "/our-properties" },
  { label: "Services", to: "/services" },
  { label: "Contact Us", to: "/contact-us" },
];

const socialLinks = [
  { icon: AtSign, href: "#", label: "Instagram" },
  { icon: Share2, href: "#", label: "Facebook" },
  { icon: LinkIcon, href: "#", label: "LinkedIn" },
  { icon: Rss, href: "#", label: "X / Twitter" },
];

export default function Footer() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleNewsletter = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
      setEmail("");
    }
  };

  return (
    <footer
      style={{
        background: "var(--color-charcoal-950)",
        borderTop: "1px solid rgba(200,145,31,0.15)",
      }}
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 py-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Col 1 — Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <img
              src={logo}
              alt="Capricorn Global Properties"
              className="h-12 w-auto mb-6"
            />
            <p
              className="text-sm leading-relaxed mb-7"
              style={{
                color: "rgba(179,170,160,0.72)",
                fontFamily: "var(--font-sans)",
                fontWeight: 300,
              }}
            >
              A premier real estate company redefining luxury living across
              Africa and beyond. Founded on trust, driven by excellence.
            </p>
            <div className="flex items-center gap-3">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="flex items-center justify-center w-9 h-9 transition-all duration-300"
                  style={{
                    border: "1px solid rgba(200,145,31,0.25)",
                    color: "var(--color-charcoal-400)",
                  }}
                  whileHover={{ scale: 1.05 }}
                >
                  <Icon size={15} />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Col 2 — Quick Links */}
          <div>
            <h3
              className="text-xs uppercase tracking-[0.18em] mb-6"
              style={{
                color: "var(--color-gold-500)",
                fontFamily: "var(--font-sans)",
                fontWeight: 600,
              }}
            >
              Quick Links
            </h3>
            <ul className="space-y-3">
              {quickLinks.map(({ label, to }) => (
                <li key={to}>
                  <Link
                    to={to}
                    className="flex items-center gap-2 text-sm transition-all duration-200 group"
                    style={{
                      color: "rgba(179,170,160,0.72)",
                      fontFamily: "var(--font-sans)",
                    }}
                  >
                    <ArrowRight
                      size={12}
                      className="opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all duration-200"
                      style={{ color: "var(--color-gold-500)" }}
                    />
                    <span className="group-hover:text-white transition-colors duration-200">
                      {label}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3 — Offices */}
          <div>
            <h3
              className="text-xs uppercase tracking-[0.18em] mb-6"
              style={{
                color: "var(--color-gold-500)",
                fontFamily: "var(--font-sans)",
                fontWeight: 600,
              }}
            >
              Our Offices
            </h3>
            <div
              className="space-y-5 text-sm"
              style={{ fontFamily: "var(--font-sans)" }}
            >
              <div>
                <p
                  className="text-xs uppercase tracking-widest mb-2"
                  style={{ color: "var(--color-charcoal-400)" }}
                >
                  Nigeria (HQ)
                </p>
                <div
                  className="flex items-start gap-2.5"
                  style={{ color: "rgba(179,170,160,0.72)" }}
                >
                  <MapPin
                    size={14}
                    style={{
                      color: "var(--color-gold-600)",
                      marginTop: 2,
                      flexShrink: 0,
                    }}
                  />
                  <p>
                    Plot V-148, Maiyegun Beach Estate,
                    <br /> Lekki, Lagos State
                  </p>
                </div>
              </div>
              <div>
                <p
                  className="text-xs uppercase tracking-widest mb-2"
                  style={{ color: "var(--color-charcoal-400)" }}
                >
                  South Africa
                </p>
                <div
                  className="flex items-start gap-2.5"
                  style={{ color: "rgba(179,170,160,0.72)" }}
                >
                  <MapPin
                    size={14}
                    style={{
                      color: "var(--color-gold-600)",
                      marginTop: 2,
                      flexShrink: 0,
                    }}
                  />
                  <p>
                    201 Sandton Drive, Sandton,
                    <br />
                    Johannesburg, 2196
                  </p>
                </div>
              </div>
              <div className="space-y-2">
                <a
                  href="tel:+27795833788"
                  className="flex items-center gap-2.5 hover:text-white transition-colors"
                  style={{ color: "rgba(179,170,160,0.72)" }}
                >
                  <Phone size={13} style={{ color: "var(--color-gold-600)" }} />
                  +27 795 833 788
                </a>
                <a
                  href="tel:+2348096555444"
                  className="flex items-center gap-2.5 hover:text-white transition-colors"
                  style={{ color: "rgba(179,170,160,0.72)" }}
                >
                  <Phone size={13} style={{ color: "var(--color-gold-600)" }} />
                  +234 809 655 5444
                </a>
                <a
                  href="mailto:info@capricornglobal.com"
                  className="flex items-center gap-2.5 hover:text-white transition-colors"
                  style={{ color: "rgba(179,170,160,0.72)" }}
                >
                  <Mail size={13} style={{ color: "var(--color-gold-600)" }} />
                  info@capricornglobal.com
                </a>
              </div>
            </div>
          </div>

          {/* Col 4 — Newsletter */}
          <div>
            <h3
              className="text-xs uppercase tracking-[0.18em] mb-6"
              style={{
                color: "var(--color-gold-500)",
                fontFamily: "var(--font-sans)",
                fontWeight: 600,
              }}
            >
              Market Insights
            </h3>
            <p
              className="text-sm mb-5"
              style={{
                color: "rgba(179,170,160,0.72)",
                fontFamily: "var(--font-sans)",
                fontWeight: 300,
              }}
            >
              Receive curated market reports, exclusive listings, and investment
              intelligence.
            </p>
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                className="py-4 px-5 text-sm text-center"
                style={{
                  border: "1px solid rgba(200,145,31,0.35)",
                  color: "var(--color-gold-400)",
                  fontFamily: "var(--font-sans)",
                }}
              >
                Thank you for subscribing.
              </motion.div>
            ) : (
              <form onSubmit={handleNewsletter}>
                <div
                  className="flex"
                  style={{ border: "1px solid rgba(200,145,31,0.25)" }}
                >
                  <input
                    type="email"
                    required
                    placeholder="Your email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="flex-1 bg-transparent px-4 py-3 text-sm outline-none placeholder:opacity-40"
                    style={{
                      color: "var(--color-ivory-200)",
                      fontFamily: "var(--font-sans)",
                    }}
                  />
                  <button
                    type="submit"
                    className="px-4 flex items-center justify-center"
                    style={{
                      background: "var(--color-gold-600)",
                      color: "#fff",
                    }}
                  >
                    <Send size={14} />
                  </button>
                </div>
                <p
                  className="text-[11px] mt-2.5"
                  style={{ color: "rgba(148,136,128,0.6)" }}
                >
                  No spam. Unsubscribe at any time.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>

      {/* Legal bar */}
      <div
        style={{
          borderTop: "1px solid rgba(200,145,31,0.10)",
          background: "rgba(13,10,8,0.5)",
        }}
      >
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p
            className="text-xs"
            style={{
              color: "rgba(148,136,128,0.6)",
              fontFamily: "var(--font-sans)",
            }}
          >
            © 2026 Capricorn Global Properties. All rights reserved.
          </p>
          <div className="flex items-center gap-5">
            {["Privacy Policy", "Terms of Service", "Cookie Policy"].map(
              (item) => (
                <a
                  key={item}
                  href="#"
                  className="text-xs transition-colors duration-200 hover:text-white"
                  style={{
                    color: "rgba(148,136,128,0.6)",
                    fontFamily: "var(--font-sans)",
                  }}
                >
                  {item}
                </a>
              ),
            )}
          </div>
        </div>
      </div>
    </footer>
  );
}
