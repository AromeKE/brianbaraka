"use client";
import { useState } from "react";
import Link from "next/link";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "", email: "", company: "", service: "", message: "", budget: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = () => {
    if (!formData.name || !formData.email || !formData.message) return;
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 800);
  };

  const inputStyle = {
    width: "100%",
    background: "rgba(255,255,255,0.04)",
    border: "1px solid rgba(255,255,255,0.1)",
    borderRadius: "8px",
    padding: "12px 14px",
    color: "#F8FAFC",
    fontSize: "15px",
    fontFamily: "'Inter', sans-serif",
    outline: "none",
    transition: "border-color 0.2s",
  } as React.CSSProperties;

  const labelStyle = {
    display: "block",
    fontFamily: "'Plus Jakarta Sans', sans-serif",
    fontWeight: 600,
    fontSize: "12px",
    color: "#94A3B8",
    marginBottom: "8px",
    textTransform: "uppercase" as const,
    letterSpacing: "0.06em",
  };

  return (
    <div style={{ background: "linear-gradient(160deg, #0F172A 0%, #0F2A1F 100%)" }}>

      {/* HERO */}
      <section className="hero-section">
        <div className="container">
          <span className="section-label" style={{ marginBottom: "16px" }}>Contact</span>
          <h1 style={{ fontSize: "clamp(36px, 6vw, 68px)", fontWeight: 800, lineHeight: 1.08, letterSpacing: "-0.03em", color: "#F8FAFC", marginBottom: "16px", marginTop: "12px" }}>
            Let's build something{" "}
            <span style={{ color: "#10B981" }}>that grows.</span>
          </h1>
          <p style={{ color: "#94A3B8", fontSize: "clamp(15px, 2vw, 17px)", lineHeight: 1.75, maxWidth: "480px" }}>
            Whether you have a brief, a budget, or just a problem you cannot crack — reach out. I respond to every message personally.
          </p>
        </div>
      </section>

      {/* FORM + INFO */}
      <section className="section" style={{ paddingTop: "0" }}>
        <div className="container">
          <div className="grid-2-contact">

            {/* LEFT — contact info */}
            <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
              <div>
                <span className="section-label" style={{ marginBottom: "20px" }}>Reach Me Directly</span>
                <div style={{ display: "flex", flexDirection: "column", gap: "16px", marginTop: "16px" }}>
                  {[
                    { icon: "✉", label: "Email", value: "baraka@brianbaraka.com", href: "mailto:baraka@brianbaraka.com" },
                    { icon: "💬", label: "WhatsApp", value: "+254 724 491 210", href: "https://wa.me/254724491210" },
                  ].map((item) => (
                    <a key={item.label} href={item.href} target={item.href.startsWith("https") ? "_blank" : undefined} rel="noopener noreferrer" style={{ display: "flex", gap: "14px", alignItems: "center", textDecoration: "none" }}>
                      <div style={{ width: "42px", height: "42px", background: "rgba(16,185,129,0.1)", borderRadius: "10px", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "16px", flexShrink: 0 }}>
                        {item.icon}
                      </div>
                      <div>
                        <p style={{ fontWeight: 600, fontSize: "13px", color: "#F8FAFC", marginBottom: "2px", fontFamily: "'Plus Jakarta Sans', sans-serif" }}>{item.label}</p>
                        <p style={{ color: "#10B981", fontSize: "13px" }}>{item.value}</p>
                      </div>
                    </a>
                  ))}
                  <div style={{ display: "flex", gap: "14px", alignItems: "center" }}>
                    <div style={{ width: "42px", height: "42px", background: "rgba(16,185,129,0.1)", borderRadius: "10px", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "16px", flexShrink: 0 }}>📍</div>
                    <div>
                      <p style={{ fontWeight: 600, fontSize: "13px", color: "#F8FAFC", marginBottom: "2px", fontFamily: "'Plus Jakarta Sans', sans-serif" }}>Location</p>
                      <p style={{ color: "#94A3B8", fontSize: "13px", lineHeight: 1.5 }}>Nairobi, Kenya. Working with clients across Africa, Europe, and beyond.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="card" style={{ padding: "20px" }}>
                <p style={{ fontWeight: 700, fontSize: "13px", color: "#10B981", marginBottom: "6px", fontFamily: "'Plus Jakarta Sans', sans-serif" }}>Response Time</p>
                <p style={{ color: "#94A3B8", fontSize: "13px", lineHeight: 1.6 }}>I typically respond within 24 hours on business days.</p>
              </div>

              <div className="card" style={{ padding: "20px" }}>
                <p style={{ fontWeight: 700, fontSize: "13px", color: "#F8FAFC", marginBottom: "6px", fontFamily: "'Plus Jakarta Sans', sans-serif" }}>Want to see my work first?</p>
                <Link href="/work" style={{ color: "#06B6D4", fontSize: "13px", textDecoration: "none", fontWeight: 600 }}>View case studies →</Link>
              </div>
            </div>

            {/* RIGHT — form */}
            <div className="card" style={{ padding: "clamp(24px, 4vw, 44px)" }}>
              {submitted ? (
                <div style={{ textAlign: "center", padding: "32px 0" }}>
                  <div style={{ fontSize: "44px", marginBottom: "20px" }}>✅</div>
                  <h2 style={{ fontWeight: 800, fontSize: "24px", color: "#F8FAFC", marginBottom: "12px" }}>Message received.</h2>
                  <p style={{ color: "#94A3B8", fontSize: "15px", lineHeight: 1.7 }}>
                    Thanks for reaching out. I will get back to you within 24 hours.
                  </p>
                </div>
              ) : (
                <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
                  <h2 style={{ fontWeight: 700, fontSize: "20px", color: "#F8FAFC" }}>Send me a brief</h2>

                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }}>
                    <div>
                      <label style={labelStyle}>Name *</label>
                      <input type="text" placeholder="Your name" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} style={inputStyle} />
                    </div>
                    <div>
                      <label style={labelStyle}>Email *</label>
                      <input type="email" placeholder="your@email.com" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} style={inputStyle} />
                    </div>
                  </div>

                  <div>
                    <label style={labelStyle}>Company or Brand</label>
                    <input type="text" placeholder="Optional" value={formData.company} onChange={(e) => setFormData({ ...formData, company: e.target.value })} style={inputStyle} />
                  </div>

                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }}>
                    <div>
                      <label style={labelStyle}>I need help with</label>
                      <select value={formData.service} onChange={(e) => setFormData({ ...formData, service: e.target.value })} style={{ ...inputStyle, background: "#1E293B" }}>
                        <option value="">Select a service</option>
                        <option value="performance">Performance Marketing</option>
                        <option value="strategy">Growth Strategy</option>
                        <option value="media">Media Planning</option>
                        <option value="other">Something else</option>
                      </select>
                    </div>
                    <div>
                      <label style={labelStyle}>Budget Range</label>
                      <select value={formData.budget} onChange={(e) => setFormData({ ...formData, budget: e.target.value })} style={{ ...inputStyle, background: "#1E293B" }}>
                        <option value="">Select a range</option>
                        <option value="under5k">Under $5,000</option>
                        <option value="5k-15k">$5,000 to $15,000</option>
                        <option value="15k-50k">$15,000 to $50,000</option>
                        <option value="50k+">$50,000+</option>
                        <option value="discuss">Let's discuss</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label style={labelStyle}>Tell me about your project *</label>
                    <textarea
                      placeholder="What are you trying to grow? What is the challenge?"
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      style={{ ...inputStyle, resize: "vertical", minHeight: "120px" }}
                    />
                  </div>

                  <button
                    onClick={handleSubmit}
                    disabled={loading}
                    className="btn-primary"
                    style={{ width: "100%", textAlign: "center", fontSize: "15px", padding: "14px", opacity: loading ? 0.7 : 1 }}
                  >
                    {loading ? "Sending..." : "Send Message →"}
                  </button>
                </div>
              )}
            </div>

          </div>
        </div>
      </section>

      <style>{`
        input::placeholder, textarea::placeholder, select option { color: #475569; }
        input:focus, textarea:focus, select:focus { border-color: rgba(16,185,129,0.4) !important; }
        @media (max-width: 480px) {
          .form-row-2 { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  );
}
