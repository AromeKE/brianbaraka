"use client";
import { useEffect, useRef, useState } from "react";

const W = 640;
const H = 220;
const PAD_X = 8;
const PAD_TOP = 16;
const PAD_BOTTOM = 28;

function useInView<T extends HTMLElement>() {
  const ref = useRef<T>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    if (!ref.current) return;
    const el = ref.current;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);
  return { ref, inView };
}

/**
 * Area trend chart — visualizes the trajectory behind a headline result.
 * Renders a clean, on-brand growth curve, optionally with a target reference line.
 * This is an illustrative trajectory built from the campaign's documented totals
 * and milestones, not an exported platform screenshot.
 */
export function TrendChart({
  caption,
  points,
  targetLabel,
  targetValue,
  valueFormatter,
}: {
  caption: string;
  points: { x: string; y: number }[];
  targetLabel?: string;
  targetValue?: number;
  valueFormatter?: (n: number) => string;
}) {
  const { ref, inView } = useInView<HTMLDivElement>();
  const maxY = Math.max(...points.map((p) => p.y), targetValue ?? 0) * 1.08;
  const chartW = W - PAD_X * 2;
  const chartH = H - PAD_TOP - PAD_BOTTOM;
  const gradId = caption.replace(/[^a-zA-Z0-9]/g, "");

  const coords = points.map((p, i) => {
    const x = PAD_X + (i / (points.length - 1)) * chartW;
    const y = PAD_TOP + chartH - (p.y / maxY) * chartH;
    return { ...p, x, y };
  });

  const linePath = coords
    .map((c, i) => `${i === 0 ? "M" : "L"} ${c.x.toFixed(1)} ${c.y.toFixed(1)}`)
    .join(" ");
  const areaPath = `${linePath} L ${coords[coords.length - 1].x.toFixed(1)} ${(PAD_TOP + chartH).toFixed(1)} L ${coords[0].x.toFixed(1)} ${(PAD_TOP + chartH).toFixed(1)} Z`;

  const targetY = targetValue ? PAD_TOP + chartH - (targetValue / maxY) * chartH : null;
  const pathLength = 1200;

  return (
    <div ref={ref} className="card" style={{ padding: "24px 20px 16px" }}>
      <p
        style={{
          fontSize: "11px",
          fontWeight: 700,
          letterSpacing: "0.08em",
          textTransform: "uppercase",
          color: "#94A3B8",
          marginBottom: "14px",
        }}
      >
        {caption}
      </p>
      <svg viewBox={`0 0 ${W} ${H}`} width="100%" height="auto" style={{ overflow: "visible" }}>
        <defs>
          <linearGradient id={`fill-${gradId}`} x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#10B981" stopOpacity="0.35" />
            <stop offset="100%" stopColor="#10B981" stopOpacity="0" />
          </linearGradient>
          <linearGradient id={`stroke-${gradId}`} x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#10B981" />
            <stop offset="100%" stopColor="#06B6D4" />
          </linearGradient>
        </defs>

        {targetY !== null && (
          <>
            <line
              x1={PAD_X}
              x2={W - PAD_X}
              y1={targetY}
              y2={targetY}
              stroke="#475569"
              strokeWidth="1"
              strokeDasharray="4 4"
            />
            <text x={W - PAD_X} y={targetY - 6} textAnchor="end" fontSize="10" fill="#64748B">
              {targetLabel}
            </text>
          </>
        )}

        <path
          d={areaPath}
          fill={`url(#fill-${gradId})`}
          opacity={inView ? 1 : 0}
          style={{ transition: "opacity 0.8s ease 0.4s" }}
        />
        <path
          d={linePath}
          fill="none"
          stroke={`url(#stroke-${gradId})`}
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeDasharray={pathLength}
          strokeDashoffset={inView ? 0 : pathLength}
          style={{ transition: "stroke-dashoffset 1.1s cubic-bezier(0.4, 0, 0.2, 1)" }}
        />

        {coords.map((c, i) => (
          <circle
            key={i}
            cx={c.x}
            cy={c.y}
            r={i === coords.length - 1 ? 4 : 2.5}
            fill={i === coords.length - 1 ? "#10B981" : "#0F172A"}
            stroke="#10B981"
            strokeWidth="1.5"
            opacity={inView ? 1 : 0}
            style={{ transition: `opacity 0.4s ease ${0.6 + i * 0.08}s` }}
          />
        ))}
      </svg>
      <div style={{ display: "flex", justifyContent: "space-between", marginTop: "2px" }}>
        {points.map((p, i) => (
          <span
            key={i}
            style={{
              fontSize: "10px",
              color: "#64748B",
              flex: 1,
              textAlign: i === 0 ? "left" : i === points.length - 1 ? "right" : "center",
            }}
          >
            {p.x}
          </span>
        ))}
      </div>
      {valueFormatter && (
        <p style={{ fontSize: "12px", color: "#10B981", fontWeight: 600, marginTop: "12px" }}>
          {valueFormatter(points[points.length - 1].y)}
        </p>
      )}
    </div>
  );
}

/**
 * Before/after split bar — for attribution or reallocation stories where the
 * insight is a shift between two states rather than a trend over time.
 */
export function SplitBarChart({
  caption,
  before,
  after,
}: {
  caption: string;
  before: { label: string; value: number; sublabel: string };
  after: { label: string; value: number; sublabel: string };
}) {
  const { ref, inView } = useInView<HTMLDivElement>();
  const max = Math.max(before.value, after.value);

  const Bar = ({ data, color, delay }: { data: typeof before; color: string; delay: number }) => (
    <div style={{ flex: 1 }}>
      <p style={{ fontSize: "11px", fontWeight: 700, color: "#94A3B8", textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: "10px" }}>
        {data.label}
      </p>
      <div style={{ background: "rgba(255,255,255,0.04)", borderRadius: "8px", height: "120px", display: "flex", alignItems: "flex-end", overflow: "hidden" }}>
        <div
          style={{
            width: "100%",
            background: color,
            borderRadius: "8px 8px 0 0",
            height: inView ? `${(data.value / max) * 100}%` : "0%",
            transition: `height 0.9s cubic-bezier(0.4,0,0.2,1) ${delay}s`,
          }}
        />
      </div>
      <div className="stat-number" style={{ fontSize: "26px", marginTop: "12px" }}>
        {data.value}%
      </div>
      <p style={{ fontSize: "12px", color: "#94A3B8", marginTop: "2px" }}>{data.sublabel}</p>
    </div>
  );

  return (
    <div ref={ref} className="card" style={{ padding: "24px 20px" }}>
      <p style={{ fontSize: "11px", fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", color: "#94A3B8", marginBottom: "20px" }}>
        {caption}
      </p>
      <div style={{ display: "flex", gap: "24px" }}>
        <Bar data={before} color="rgba(148,163,184,0.4)" delay={0.1} />
        <Bar data={after} color="linear-gradient(135deg, #10B981, #06B6D4)" delay={0.35} />
      </div>
    </div>
  );
}
