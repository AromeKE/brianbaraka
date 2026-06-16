"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/about", label: "About" },
  { href: "/work", label: "Work" },
  { href: "/services", label: "Services" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  return (
    <>
      <nav
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 100,
          padding: "0 20px",
          height: "64px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          background: scrolled ? "rgba(15, 23, 42, 0.96)" : "transparent",
          backdropFilter: scrolled ? "blur(16px)" : "none",
          borderBottom: scrolled ? "1px solid rgba(255,255,255,0.06)" : "none",
          transition: "background 0.3s ease, border-color 0.3s ease",
        }}
      >
        <Link
          href="/"
          style={{
            fontFamily: "'Plus Jakarta Sans', sans-serif",
            fontWeight: 800,
            fontSize: "18px",
            color: "#F8FAFC",
            textDecoration: "none",
            letterSpacing: "-0.02em",
            flexShrink: 0,
          }}
        >
          Brian<span style={{ color: "#10B981" }}>.</span>
        </Link>

        {/* Desktop */}
        <div className="nav-links-desktop">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: "14px",
                fontWeight: 500,
                color: pathname === link.href ? "#F8FAFC" : "#94A3B8",
                textDecoration: "none",
                transition: "color 0.2s ease",
              }}
            >
              {link.label}
            </Link>
          ))}
          <Link href="/contact" className="btn-primary" style={{ fontSize: "13px", padding: "10px 20px" }}>
            Let&apos;s Talk
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          className="nav-menu-btn"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
        >
          <span style={{ width: "22px", height: "2px", background: "#F8FAFC", display: "block", transition: "transform 0.2s", transform: menuOpen ? "rotate(45deg) translate(5px, 5px)" : "none" }} />
          <span style={{ width: "22px", height: "2px", background: "#F8FAFC", display: "block", opacity: menuOpen ? 0 : 1, transition: "opacity 0.2s" }} />
          <span style={{ width: "22px", height: "2px", background: "#F8FAFC", display: "block", transition: "transform 0.2s", transform: menuOpen ? "rotate(-45deg) translate(5px, -5px)" : "none" }} />
        </button>
      </nav>

      {/* Mobile menu overlay */}
      {menuOpen && (
        <div
          style={{
            position: "fixed",
            inset: 0,
            top: "64px",
            background: "rgba(15, 23, 42, 0.99)",
            zIndex: 99,
            display: "flex",
            flexDirection: "column",
            padding: "40px 24px",
            gap: "8px",
          }}
        >
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              style={{
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                fontSize: "28px",
                fontWeight: 700,
                color: pathname === link.href ? "#10B981" : "#F8FAFC",
                textDecoration: "none",
                padding: "12px 0",
                borderBottom: "1px solid rgba(255,255,255,0.06)",
              }}
            >
              {link.label}
            </Link>
          ))}
          <div style={{ marginTop: "32px" }}>
            <Link href="/contact" className="btn-primary" style={{ fontSize: "16px", padding: "14px 28px", display: "block", textAlign: "center" }}>
              Let&apos;s Talk
            </Link>
          </div>
          <div style={{ marginTop: "auto", paddingTop: "40px" }}>
            <a href="mailto:baraka@brianbaraka.com" style={{ color: "#94A3B8", fontSize: "14px", textDecoration: "none", display: "block" }}>
              baraka@brianbaraka.com
            </a>
          </div>
        </div>
      )}
    </>
  );
}
