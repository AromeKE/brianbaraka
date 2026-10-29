import Link from "next/link";

const navLinks = [
  { href: "/about", label: "About" },
  { href: "/work", label: "Work" },
  { href: "/services", label: "Services" },
  { href: "/contact", label: "Contact" },
];

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        {/* Big conversion line */}
        <p className="footer-head" style={{ marginBottom: "20px" }}>Got a growth problem?</p>
        <a href="mailto:baraka@brianbaraka.com" className="footer-email">
          baraka@brianbaraka.com
        </a>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
            gap: "40px",
            margin: "64px 0 56px",
          }}
        >
          {/* Brand */}
          <div>
            <Link
              href="/"
              style={{
                fontFamily: "'Poppins', sans-serif",
                fontWeight: 900,
                fontSize: "26px",
                color: "#FFFFFF",
                textDecoration: "none",
                display: "inline-block",
                marginBottom: "12px",
                letterSpacing: "-0.03em",
              }}
            >
              Brian<span style={{ color: "#FF3B1F" }}>.</span>
            </Link>
            <p style={{ color: "rgba(255,255,255,0.78)", fontSize: "15px", lineHeight: 1.7, maxWidth: "280px" }}>
              Growth operator and media strategist based in Nairobi, Kenya. Building systems that scale.
            </p>
          </div>

          {/* Nav */}
          <div>
            <p className="footer-head">Pages</p>
            <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
              {navLinks.map((link) => (
                <Link key={link.href} href={link.href} className="footer-link">
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <p className="footer-head">Contact</p>
            <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
              <a href="mailto:baraka@brianbaraka.com" className="footer-link" style={{ wordBreak: "break-all" }}>
                baraka@brianbaraka.com
              </a>
              <a href="https://wa.me/254724491210" target="_blank" rel="noopener noreferrer" className="footer-link">
                WhatsApp
              </a>
              <p style={{ color: "rgba(255,255,255,0.65)", fontSize: "14px" }}>Nairobi, Kenya</p>
            </div>
          </div>
        </div>

        <div
          style={{
            borderTop: "1px solid rgba(255,255,255,0.18)",
            paddingTop: "28px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: "12px",
          }}
        >
          <p style={{ color: "rgba(255,255,255,0.65)", fontSize: "13px" }}>
            © {new Date().getFullYear()} Brian Baraka. All rights reserved.
          </p>
          <p style={{ color: "rgba(255,255,255,0.65)", fontSize: "13px" }}>Nairobi · Kenya</p>
        </div>
      </div>
    </footer>
  );
}
