"use client";
import { useEffect, useRef, useState } from "react";

/**
 * Animates a stat number counting up from 0 when it scrolls into view.
 * Parses leading numeric value out of strings like "7M+", "4.2x", "+109%", "120K+"
 * and re-assembles prefix/suffix around the animated number.
 */
export default function CountUp({
  value,
  duration = 1400,
  className,
  style,
}: {
  value: string;
  duration?: number;
  className?: string;
  style?: React.CSSProperties;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [started, setStarted] = useState(false);
  const [display, setDisplay] = useState<string>(value);

  const match = value.match(/^([^\d]*)([\d,]+\.?\d*)(.*)$/);
  const prefix = match?.[1] ?? "";
  const numStr = match?.[2] ?? "";
  const suffix = match?.[3] ?? "";
  const target = numStr ? parseFloat(numStr.replace(/,/g, "")) : null;
  const hasComma = numStr.includes(",");
  const decimals = numStr.includes(".") ? numStr.split(".")[1].length : 0;

  useEffect(() => {
    if (!ref.current || target === null) return;
    const el = ref.current;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started) {
          setStarted(true);
          const startTime = performance.now();
          const animate = (now: number) => {
            const progress = Math.min((now - startTime) / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            const current = target * eased;
            const formatted = hasComma
              ? Math.round(current).toLocaleString("en-US")
              : current.toFixed(decimals);
            setDisplay(`${prefix}${formatted}${suffix}`);
            if (progress < 1) requestAnimationFrame(animate);
            else setDisplay(value);
          };
          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.4 }
    );
    observer.observe(el);
    return () => observer.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [target]);

  if (target === null) {
    return (
      <div ref={ref} className={className} style={style}>
        {value}
      </div>
    );
  }

  return (
    <div ref={ref} className={className} style={style}>
      {display}
    </div>
  );
}
