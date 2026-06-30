import Link from "next/link";
import BrandCarousel from "./components/BrandCarousel";
import CountUp from "./components/CountUp";

const stats = [
  { number: "7M+", label: "App installs", context: "Safaricom MPESA" },
  { number: "4.2x", label: "ROAS", context: "Flagship campaigns" },
  { number: "+109%", label: "Over install target", context: "Syngenta Cropwise" },
  { number: "120K+", label: "Lead sign-ups", context: "KCB Bank" },
  { number: "33%", label: "Sales lift", context: "MyDawa attribution" },
  { number: "8+", label: "Years", context: "Africa and Europe" },
];

const pillars = [
  {
    icon: "📈",
    title: "Performance Marketing",
    description: "Full funnel paid media across Meta, Google, TikTok, YouTube, LinkedIn, DV360, and programmatic. Every campaign starts with a hypothesis, attribution wired from day one, and a creative testing cadence that separates signal from noise fast.",
  },
  {
    icon: "🧠",
    title: "Growth Strategy",
    description: "Before I touch a platform, I ask: what is the hypothesis? I design experiments, define success metrics, and build the kind of growth loops that keep compounding long after the campaign ends. Founder mindset. Operator execution.",
  },
  {
    icon: "📊",
    title: "Analytics and Attribution",
    description: "Most brands are flying blind. I fix that. Custom Looker Studio dashboards, multi-touch attribution, AppsFlyer, GA4. I build the visibility layer that turns data into decisions and decisions into growth.",
  },
];

const featured = [
  {
    tag: "App Growth · Fintech",
    headline: "7M+ installs. 4.2x ROAS. Africa's largest fintech app launched.",
    slug: "safaricom-mpesa",
  },
  {
    tag: "Lead Generation · Banking",
    headline: "120,000+ sign-ups. 25% CVR. A lead engine that never switched off.",
    slug: "kcb-bank",
  },
  {
    tag: "App Launch · Agritech",
    headline: "109% over target. 12% under budget. A B2C agritech app launched from zero.",
    slug: "syngenta-cropwise",
  },
];

export default function Home() {
  return (
    <div style={{ background: "linear-gradient(160deg, #0F172A 0%, #0F2A1F 100%)" }}>

      {/* HERO */}
      <section className="hero-section">
        <div className="container">
          <span className="section-label" style={{ marginBottom: "20px" }}>Growth Operator and Media Strategist</span>
          <h1 style={{
            fontSize: "clamp(40px, 7vw, 84px)",
            fontWeight: 800,
            lineHeight: 1.05,
            letterSpacing: "-0.03em",
            color: "#F8FAFC",
            marginBottom: "24px",
            marginTop: "16px",
          }}>
            Growth is a system.{" "}
            <span style={{ color: "#10B981" }}>I build it.</span>
          </h1>
          <p style={{ fontSize: "clamp(15px, 2vw, 18px)", lineHeight: 1.75, color: "#94A3B8", maxWidth: "520px", marginBottom: "12px" }}>
            I am Brian Baraka. A growth operator with 8+ years turning budgets into business results across Africa and Europe. I have driven 7M+ app installs, uncovered hidden revenue through attribution, and scaled campaigns for some of the continent's biggest brands.
          </p>
          <Link href="/about" style={{ color: "#06B6D4", fontSize: "14px", fontWeight: 600, textDecoration: "none", display: "inline-block", marginBottom: "36px", fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
            Learn more about me →
          </Link>
          <div className="hero-buttons">
            <Link href="/work" className="btn-primary">See My Work</Link>
            <Link href="/contact" className="btn-outline">Let's Talk</Link>
          </div>
        </div>
      </section>

      {/* BRAND CAROUSEL */}
      <BrandCarousel />

      {/* WHAT I DO */}
      <section className="section">
        <div className="container">
          <span className="section-label" style={{ marginBottom: "16px" }}>What I Do</span>
          <h2 style={{ fontSize: "clamp(26px, 4vw, 44px)", fontWeight: 800, letterSpacing: "-0.02em", color: "#F8FAFC", marginBottom: "12px", marginTop: "12px" }}>
            Strategy, media, and measurement.
          </h2>
          <p style={{ color: "#94A3B8", fontSize: "16px", lineHeight: 1.7, marginBottom: "48px", maxWidth: "480px" }}>
            That intersection is where the real growth happens.{" "}
            <Link href="/services" style={{ color: "#06B6D4", textDecoration: "none", fontWeight: 600 }}>See all services →</Link>
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "20px" }}>
            {pillars.map((pillar) => (
              <div key={pillar.title} className="card" style={{ padding: "32px" }}>
                <div style={{ fontSize: "26px", marginBottom: "16px" }}>{pillar.icon}</div>
                <h3 style={{ fontSize: "18px", fontWeight: 700, color: "#F8FAFC", marginBottom: "12px" }}>{pillar.title}</h3>
                <p style={{ color: "#94A3B8", fontSize: "14px", lineHeight: 1.75 }}>{pillar.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="section-sm" style={{ background: "rgba(255,255,255,0.02)", borderTop: "1px solid rgba(255,255,255,0.06)", borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
        <div className="container">
          <span className="section-label" style={{ textAlign: "center", marginBottom: "12px", display: "block" }}>The Scoreboard</span>
          <h2 style={{ fontSize: "clamp(24px, 3vw, 36px)", fontWeight: 800, color: "#F8FAFC", textAlign: "center", letterSpacing: "-0.02em", marginBottom: "48px", marginTop: "12px" }}>
            The numbers that matter.
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))", gap: "32px" }}>
            {stats.map((stat) => (
              <div key={stat.number} style={{ textAlign: "center" }}>
                <CountUp value={stat.number} className="stat-number" style={{ fontSize: "clamp(32px, 4vw, 48px)", marginBottom: "6px" }} />
                <p style={{ fontWeight: 600, fontSize: "14px", color: "#F8FAFC", marginBottom: "4px", fontFamily: "'Plus Jakarta Sans', sans-serif" }}>{stat.label}</p>
                <p style={{ fontSize: "12px", color: "#94A3B8" }}>{stat.context}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURED WORK */}
      <section className="section">
        <div className="container">
          <span className="section-label" style={{ marginBottom: "16px" }}>Featured Work</span>
          <h2 style={{ fontSize: "clamp(26px, 4vw, 44px)", fontWeight: 800, letterSpacing: "-0.02em", color: "#F8FAFC", marginBottom: "40px", marginTop: "12px" }}>
            A few things I am proud of.
          </h2>
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            {featured.map((item) => (
              <Link key={item.slug} href={`/work/${item.slug}`} style={{ textDecoration: "none" }}>
                <div className="card work-card-inner">
                  <div style={{ flex: 1 }}>
                    <p style={{ fontSize: "11px", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "#10B981", marginBottom: "10px", fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                      {item.tag}
                    </p>
                    <h3 style={{ fontSize: "clamp(16px, 2vw, 20px)", fontWeight: 700, color: "#F8FAFC", lineHeight: 1.35 }}>
                      {item.headline}
                    </h3>
                  </div>
                  <span style={{ fontWeight: 700, fontSize: "13px", color: "#06B6D4", whiteSpace: "nowrap", fontFamily: "'Plus Jakarta Sans', sans-serif", flexShrink: 0 }}>
                    View Case Study →
                  </span>
                </div>
              </Link>
            ))}
          </div>
          <div style={{ textAlign: "center", marginTop: "40px" }}>
            <Link href="/work" className="btn-outline">See All Work</Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section" style={{ paddingTop: "0" }}>
        <div className="container">
          <div className="cta-block">
            <span className="section-label" style={{ display: "block", marginBottom: "16px" }}>Ready to Grow?</span>
            <h2 style={{ fontSize: "clamp(28px, 4vw, 48px)", fontWeight: 800, color: "#F8FAFC", letterSpacing: "-0.02em", marginBottom: "16px" }}>
              You have seen the numbers.
            </h2>
            <p style={{ color: "#94A3B8", fontSize: "clamp(15px, 1.5vw, 17px)", lineHeight: 1.7, marginBottom: "32px", maxWidth: "440px", margin: "0 auto 32px" }}>
              Now let's talk about yours. I am available for select consulting engagements.
            </p>
            <Link href="/contact" className="btn-primary" style={{ fontSize: "15px", padding: "14px 32px" }}>
              Start the Conversation
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
