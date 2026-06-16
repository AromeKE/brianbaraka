import Link from "next/link";

const caseStudies = [
  {
    slug: "safaricom-mpesa",
    tag: "App Growth · Fintech · East Africa",
    headline: "7M+ installs. 4.2x ROAS. Africa's largest fintech app launched.",
    stats: [
      { number: "7M+", label: "App Installs" },
      { number: "4.2x", label: "ROAS" },
      { number: "120%", label: "Of Plan" },
    ],
  },
  {
    slug: "kcb-bank",
    tag: "Lead Generation · Banking · East Africa",
    headline: "120,000+ sign-ups. 25% CVR. A lead engine that never switched off.",
    stats: [
      { number: "120K+", label: "Sign-ups" },
      { number: "25%", label: "CVR" },
      { number: "3.75x", label: "ROAS" },
    ],
  },
  {
    slug: "syngenta-cropwise",
    tag: "App Launch · Agritech · East Africa",
    headline: "109% over target. 12% under budget. A B2C agritech app launched from zero.",
    stats: [
      { number: "+109%", label: "Over Target" },
      { number: "12,543", label: "Installs" },
      { number: "49%", label: "Verify Rate" },
    ],
  },
  {
    slug: "mydawa",
    tag: "Ecommerce · Attribution · East Africa",
    headline: "40% of revenue was hiding in the wrong channel. Found it. Unlocked 33% growth.",
    stats: [
      { number: "33%", label: "Sales Lift" },
      { number: "40%", label: "Misattributed" },
      { number: "$80K", label: "Budget" },
    ],
  },
  {
    slug: "femmedetox",
    tag: "Ecommerce · Retention · United States",
    headline: "128.7% sales increase. 3.8x retention lift. A beauty brand that stopped leaking revenue.",
    stats: [
      { number: "128.7%", label: "Sales Increase" },
      { number: "3.8x", label: "Retention Lift" },
      { number: "25%", label: "Bounce Rate Drop" },
    ],
  },
];

export default function Work() {
  return (
    <div style={{ background: "linear-gradient(160deg, #0F172A 0%, #0F2A1F 100%)" }}>

      {/* HERO */}
      <section className="hero-section">
        <div className="container">
          <span className="section-label" style={{ marginBottom: "16px" }}>Case Studies</span>
          <h1 style={{ fontSize: "clamp(36px, 6vw, 68px)", fontWeight: 800, lineHeight: 1.08, letterSpacing: "-0.03em", color: "#F8FAFC", marginBottom: "16px", marginTop: "12px" }}>
            Real briefs. Real budgets.{" "}
            <span style={{ color: "#10B981" }}>Real results.</span>
          </h1>
          <p style={{ color: "#94A3B8", fontSize: "clamp(15px, 2vw, 17px)", lineHeight: 1.75, maxWidth: "480px" }}>
            Every case study below started with a problem, a hypothesis, and a plan. Here is what happened when we executed.
          </p>
        </div>
      </section>

      {/* CASE STUDIES */}
      <section className="section" style={{ paddingTop: "0" }}>
        <div className="container">
          <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
            {caseStudies.map((cs) => (
              <Link key={cs.slug} href={`/work/${cs.slug}`} style={{ textDecoration: "none" }}>
                <div className="card" style={{ padding: "clamp(24px, 4vw, 48px)" }}>
                  <p style={{ fontSize: "11px", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "#10B981", marginBottom: "12px", fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                    {cs.tag}
                  </p>
                  <h2 style={{ fontSize: "clamp(17px, 2.5vw, 24px)", fontWeight: 700, color: "#F8FAFC", lineHeight: 1.3, marginBottom: "28px" }}>
                    {cs.headline}
                  </h2>
                  <div style={{ display: "flex", gap: "clamp(20px, 4vw, 48px)", flexWrap: "wrap", justifyContent: "space-between", alignItems: "flex-end" }}>
                    <div style={{ display: "flex", gap: "clamp(20px, 4vw, 40px)", flexWrap: "wrap" }}>
                      {cs.stats.map((stat) => (
                        <div key={stat.label}>
                          <div className="stat-number" style={{ fontSize: "clamp(24px, 3vw, 32px)", marginBottom: "4px" }}>{stat.number}</div>
                          <p style={{ fontSize: "12px", color: "#94A3B8" }}>{stat.label}</p>
                        </div>
                      ))}
                    </div>
                    <span style={{ fontWeight: 700, fontSize: "13px", color: "#06B6D4", fontFamily: "'Plus Jakarta Sans', sans-serif", flexShrink: 0 }}>
                      View →
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section" style={{ paddingTop: "0" }}>
        <div className="container">
          <div className="cta-block">
            <h2 style={{ fontSize: "clamp(24px, 3vw, 36px)", fontWeight: 800, color: "#F8FAFC", letterSpacing: "-0.02em", marginBottom: "12px" }}>
              Seen enough?
            </h2>
            <p style={{ color: "#94A3B8", fontSize: "15px", marginBottom: "28px" }}>
              Let's talk about what we can build together.
            </p>
            <Link href="/contact" className="btn-primary">Start a Conversation</Link>
          </div>
        </div>
      </section>

    </div>
  );
}
