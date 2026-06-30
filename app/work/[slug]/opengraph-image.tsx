import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const caseStudies: Record<string, { brand: string; tag: string; headline: string; stats: { value: string; label: string }[] }> = {
  "safaricom-mpesa": {
    brand: "Safaricom MPESA",
    tag: "App Growth · Fintech",
    headline: "7M+ installs. 4.2x ROAS.",
    stats: [
      { value: "7M+", label: "Installs" },
      { value: "4.2x", label: "ROAS" },
      { value: "120%", label: "Of plan" },
    ],
  },
  "kcb-bank": {
    brand: "KCB Bank",
    tag: "Lead Generation · Banking",
    headline: "120,000+ sign-ups. 25% CVR.",
    stats: [
      { value: "120K+", label: "Sign-ups" },
      { value: "25%", label: "CVR" },
      { value: "3.75x", label: "ROAS" },
    ],
  },
  "syngenta-cropwise": {
    brand: "Syngenta Cropwise",
    tag: "App Launch · Agritech",
    headline: "109% over target. 12% under budget.",
    stats: [
      { value: "+109%", label: "Over target" },
      { value: "12,543", label: "Installs" },
      { value: "49%", label: "Verify rate" },
    ],
  },
  "mydawa": {
    brand: "MyDawa",
    tag: "Ecommerce · Attribution",
    headline: "40% of revenue was hiding. We found it.",
    stats: [
      { value: "33%", label: "Sales lift" },
      { value: "40%", label: "Misattributed" },
      { value: "$80K", label: "Budget" },
    ],
  },
  "femmedetox": {
    brand: "FemmeDetox",
    tag: "Ecommerce · Retention",
    headline: "128.7% sales increase. 3.8x retention lift.",
    stats: [
      { value: "128.7%", label: "Sales increase" },
      { value: "3.8x", label: "Retention lift" },
      { value: "25%", label: "Bounce rate drop" },
    ],
  },
};

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const cs = caseStudies[slug];

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px",
          background: "linear-gradient(160deg, #0F172A 0%, #0F2A1F 100%)",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              display: "flex",
              fontSize: 22,
              fontWeight: 700,
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              color: "#10B981",
              marginBottom: 28,
            }}
          >
            {cs ? cs.tag : "Case Study"}
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 64,
              fontWeight: 800,
              lineHeight: 1.12,
              letterSpacing: "-0.03em",
              color: "#F8FAFC",
              maxWidth: 980,
              marginBottom: 16,
            }}
          >
            {cs ? cs.headline : "Real briefs. Real budgets. Real results."}
          </div>
          <div style={{ display: "flex", fontSize: 24, color: "#94A3B8" }}>
            {cs ? cs.brand : "Brian Baraka"} — by Brian Baraka
          </div>
        </div>

        <div style={{ display: "flex", gap: 56 }}>
          {(cs ? cs.stats : []).map((stat) => (
            <div key={stat.label} style={{ display: "flex", flexDirection: "column" }}>
              <div style={{ display: "flex", fontSize: 48, fontWeight: 800, color: "#10B981", marginBottom: 6 }}>
                {stat.value}
              </div>
              <div style={{ display: "flex", fontSize: 18, color: "#94A3B8" }}>{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    ),
    { ...size }
  );
}
