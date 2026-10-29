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
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  const bar = (transform: string, opacity = 1) => ({
    width: "22px",
    height: "2.5px",
    background: "#14110F",
    display: "block",
    borderRadius: "2px",
    transition: "transform 0.2s, opacity 0.2s",
    transform,
    opacity,
  });

  return (
    <>
      <nav className={`nav-pill${scrolled ? " is-scrolled" : ""}`} aria-label="Main">
        <Link
          href="/"
          style={{
            fontFamily: "'Poppins', sans-serif",
            fontWeight: 900,
            fontSize: "20px",
            color: "#14110F",
            textDecoration: "none",
            letterSpacing: "-0.03em",
            flexShrink: 0,
            whiteSpace: "nowrap",
          }}
        >
          Brian Baraka<span style={{ color: "#FF3B1F" }}>.</span>
        </Link>

        {/* Desktop */}
        <div className="nav-links-desktop">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`nav-link${pathname === link.href ? " is-active" : ""}`}
              style={{ color: "#14110F" }}
            >
              {link.label}
            </Link>
          ))}
          <Link href="/contact" className="btn-primary" style={{ fontSize: "13px", padding: "9px 20px", boxShadow: "3px 3px 0 #14110F" }}>
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
          <span style={bar(menuOpen ? "rotate(45deg) translate(5px, 5px)" : "none")} />
          <span style={bar("none", menuOpen ? 0 : 1)} />
          <span style={bar(menuOpen ? "rotate(-45deg) translate(5px, -5px)" : "none")} />
        </button>
      </nav>

      {/* Mobile menu overlay */}
      {menuOpen && (
        <div
          style={{
            position: "fixed",
            inset: 0,
            top: "82px",
            background: "#FFFBF5",
            zIndex: 99,
            display: "flex",
            flexDirection: "column",
            padding: "32px 24px",
            gap: "4px",
            borderTop: "2px solid #14110F",
          }}
        >
          {links.map((link, i) => (
            <Link
              key={link.href}
              href={link.href}
              style={{
                fontFamily: "'Poppins', sans-serif",
                fontSize: "38px",
                fontWeight: 900,
                letterSpacing: "-0.03em",
                color: pathname === link.href ? "#D92A10" : "#14110F",
                textDecoration: "none",
                padding: "10px 0",
                borderBottom: "2px solid #14110F",
                display: "flex",
                alignItems: "baseline",
                gap: "14px",
              }}
            >
              <span style={{ fontSize: "13px", fontWeight: 700, color: "#6B6560" }}>0{i + 1}</span>
              {link.label}
            </Link>
          ))}
          <div style={{ marginTop: "32px" }}>
            <Link href="/contact" className="btn-primary" style={{ fontSize: "16px", padding: "15px 28px", display: "block", textAlign: "center" }}>
              Let&apos;s Talk
            </Link>
          </div>
          <div style={{ marginTop: "auto", paddingTop: "40px" }}>
            <a href="mailto:baraka@brianbaraka.com" style={{ color: "#6B6560", fontSize: "15px", textDecoration: "none", display: "block", fontWeight: 600 }}>
              baraka@brianbaraka.com
            </a>
          </div>
        </div>
      )}
    </>
  );
}
