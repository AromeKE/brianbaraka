"use client";
import { useEffect, useRef } from "react";

const brands = [
  "Safaricom", "KCB Bank", "Coca-Cola", "P&G", "Airtel",
  "Syngenta", "Unilever", "Equity Bank", "EssenceMediacom", "WPP",
];

// Duplicate for seamless loop
const doubled = [...brands, ...brands];

export default function BrandCarousel() {
  const trackRef = useRef<HTMLDivElement>(null);
  const xRef = useRef(0);
  const animRef = useRef<number>(0);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const speed = 0.45;

    const animate = () => {
      xRef.current -= speed;
      const halfWidth = track.scrollWidth / 2;
      if (Math.abs(xRef.current) >= halfWidth) {
        xRef.current = 0;
      }
      track.style.transform = `translateX(${xRef.current}px)`;
      animRef.current = requestAnimationFrame(animate);
    };

    animRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animRef.current);
  }, []);

  return (
    <div className="brand-bar">
      {/* Left fade */}
      <div style={{ position: "absolute", left: 0, top: 0, bottom: 0, width: "80px", background: "linear-gradient(to right, #0F172A, transparent)", zIndex: 2, pointerEvents: "none" }} />
      {/* Right fade */}
      <div style={{ position: "absolute", right: 0, top: 0, bottom: 0, width: "80px", background: "linear-gradient(to left, #0F172A, transparent)", zIndex: 2, pointerEvents: "none" }} />

      <p className="section-label" style={{ textAlign: "center", marginBottom: "18px", position: "relative", zIndex: 3 }}>
        Trusted by teams at
      </p>

      <div style={{ overflow: "hidden" }}>
        <div
          ref={trackRef}
          style={{
            display: "flex",
            gap: "56px",
            width: "max-content",
            alignItems: "center",
            willChange: "transform",
          }}
        >
          {doubled.map((brand, i) => (
            <span
              key={i}
              style={{
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                fontWeight: 700,
                fontSize: "14px",
                color: "#3D5068",
                letterSpacing: "0.06em",
                whiteSpace: "nowrap",
                userSelect: "none",
              }}
            >
              {brand}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
