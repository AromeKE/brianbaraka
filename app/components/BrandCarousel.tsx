"use client";
import { useEffect, useRef } from "react";

// w/h are the intrinsic pixel size of each file in /public/logos.
// "h" below is the display height, tuned so wide wordmarks and square marks
// carry similar visual weight in the strip.
const brands = [
  { name: "M-PESA", file: "mpesa", w: 213, h: 120, show: 46 },
  { name: "KCB Bank", file: "kcb", w: 536, h: 120, show: 34 },
  { name: "Coca-Cola", file: "coca-cola", w: 120, h: 120, show: 52 },
  { name: "Airtel", file: "airtel", w: 360, h: 120, show: 34 },
  { name: "Equity Bank", file: "equity", w: 184, h: 120, show: 52 },
  { name: "Unilever", file: "unilever", w: 160, h: 120, show: 62 },
  { name: "P&G", file: "pg", w: 276, h: 120, show: 40 },
  { name: "Syngenta", file: "syngenta", w: 416, h: 120, show: 34 },
  { name: "Fanta", file: "fanta", w: 158, h: 120, show: 52 },
  { name: "RUBiS", file: "rubis", w: 152, h: 120, show: 52 },
  { name: "Basco Paints", file: "basco-paints", w: 268, h: 120, show: 44 },
  { name: "Essence Mediacom", file: "essencemediacom", w: 226, h: 120, show: 48 },
  { name: "WPP Media", file: "wpp-media", w: 767, h: 120, show: 26 },
];

// Duplicate for seamless loop
const doubled = [...brands, ...brands];

export default function BrandCarousel() {
  const trackRef = useRef<HTMLDivElement>(null);
  const xRef = useRef(0);
  const animRef = useRef<number>(0);
  const pausedRef = useRef(false);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const speed = 0.6;

    const animate = () => {
      if (!pausedRef.current) {
        xRef.current -= speed;
        const halfWidth = track.scrollWidth / 2;
        if (halfWidth > 0 && Math.abs(xRef.current) >= halfWidth) {
          xRef.current = 0;
        }
        track.style.transform = `translateX(${xRef.current}px)`;
      }
      animRef.current = requestAnimationFrame(animate);
    };

    animRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animRef.current);
  }, []);

  return (
    <div className="brand-bar">
      {/* Left fade */}
      <div style={{ position: "absolute", left: 0, top: 0, bottom: 0, width: "80px", background: "linear-gradient(to right, #FFFBF5, transparent)", zIndex: 2, pointerEvents: "none" }} />
      {/* Right fade */}
      <div style={{ position: "absolute", right: 0, top: 0, bottom: 0, width: "80px", background: "linear-gradient(to left, #FFFBF5, transparent)", zIndex: 2, pointerEvents: "none" }} />

      <p className="section-label" style={{ textAlign: "center", marginBottom: "22px", position: "relative", zIndex: 3 }}>
        Trusted by teams at
      </p>

      <div
        style={{ overflow: "hidden" }}
        onMouseEnter={() => { pausedRef.current = true; }}
        onMouseLeave={() => { pausedRef.current = false; }}
      >
        <div
          ref={trackRef}
          style={{
            display: "flex",
            gap: "64px",
            width: "max-content",
            alignItems: "center",
            willChange: "transform",
            padding: "4px 0",
          }}
        >
          {doubled.map((brand, i) => {
            const width = Math.round((brand.w / brand.h) * brand.show);
            return (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                key={i}
                src={`/logos/${brand.file}.png`}
                alt={i < brands.length ? brand.name : ""}
                aria-hidden={i >= brands.length ? true : undefined}
                width={width}
                height={brand.show}
                draggable={false}
                style={{ height: brand.show, width, flexShrink: 0, borderRadius: 6, userSelect: "none" }}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}
