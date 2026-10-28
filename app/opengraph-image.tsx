import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = "Brian Baraka — Growth Operator & Media Strategist";

export default async function Image() {
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
          background: "linear-gradient(160deg, #FFFFFF 0%, #FFF6F0 100%)",
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
              color: "#FF3B1F",
              marginBottom: 28,
            }}
          >
            Growth Operator &amp; Media Strategist
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 76,
              fontWeight: 800,
              lineHeight: 1.08,
              letterSpacing: "-0.03em",
              color: "#14110F",
              maxWidth: 980,
            }}
          >
            Growth is a system. I build it.
          </div>
        </div>

        <div style={{ display: "flex", gap: 56 }}>
          {[
            { number: "7M+", label: "App installs" },
            { number: "4.2x", label: "ROAS" },
            { number: "120K+", label: "Lead sign-ups" },
            { number: "8+", label: "Years, Africa & Europe" },
          ].map((stat) => (
            <div key={stat.label} style={{ display: "flex", flexDirection: "column" }}>
              <div
                style={{
                  display: "flex",
                  fontSize: 44,
                  fontWeight: 800,
                  color: "#FF3B1F",
                  marginBottom: 6,
                }}
              >
                {stat.number}
              </div>
              <div style={{ display: "flex", fontSize: 18, color: "#6B6560" }}>
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    ),
    { ...size }
  );
}
