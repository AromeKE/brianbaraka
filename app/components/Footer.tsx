import Link from "next/link";

const navLinks = [
  { href: "/about", label: "About" },
  { href: "/work", label: "Work" },
  { href: "/services", label: "Services" },
  { href: "/contact", label: "Contact" },
];

export default function Footer() {
  return (
    <footer style={{ background: "#080F1E", borderTop: "1px solid rgba(255,255,255,0.06)", padding: "56px 0 32px" }}>
      <div className="container">
        <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "40px", marginBottom: "48px" }}>

          {/* Brand */}
          <div>
            <Link href="/" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 800, fontSize: "22px", color: "#F8FAFC", textDecoration: "none", display: "inline-block", marginBottom: "12px" }}>
              Brian<span style={{ color: "#10B981" }}>.</span>
            </Link>
            <p style={{ color: "#94A3B8", fontSize: "14px", lineHeight: 1.7, maxWidth: "280px" }}>
              Growth operator and media strategist based in Nairobi, Kenya. Building systems that scale.
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "32px" }}>
            {/* Nav */}
            <div>
              <p style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: "12px", color: "#F8FAFC", marginBottom: "16px", textTransform: "uppercase", letterSpacing: "0.1em" }}>
                Pages
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                {navLinks.map((link) => (
                  <Link key={link.href} href={link.href} style={{ color: "#94A3B8", fontSize: "14px", textDecoration: "none" }}>
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>

            {/* Contact */}
            <div>
              <p style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: "12px", color: "#F8FAFC", marginBottom: "16px", textTransform: "uppercase", letterSpacing: "0.1em" }}>
                Contact
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                <a href="mailto:baraka@brianbaraka.com" style={{ color: "#94A3B8", fontSize: "14px", textDecoration: "none", wordBreak: "break-all" }}>
                  baraka@brianbaraka.com
                </a>
                <a href="https://wa.me/254724491210" target="_blank" rel="noopener noreferrer" style={{ color: "#94A3B8", fontSize: "14px", textDecoration: "none" }}>
                  WhatsApp
                </a>
                <p style={{ color: "#475569", fontSize: "13px" }}>Nairobi, Kenya</p>
              </div>
            </div>
          </div>
        </div>

        <div style={{ borderTop: "1px solid rgba(255,255,255,0.06)", paddingTop: "28px", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "12px" }}>
          <p style={{ color: "#475569", fontSize: "13px" }}>
            © {new Date().getFullYear()} Brian Baraka. All rights reserved.
          </p>
          <p style={{ color: "#475569", fontSize: "13px" }}>
            Nairobi · Kenya
          </p>
        </div>
      </div>
    </footer>
  );
}
