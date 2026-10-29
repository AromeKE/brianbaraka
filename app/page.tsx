import fs from "node:fs";
import path from "node:path";
import Image from "next/image";
import Link from "next/link";
import BrandCarousel from "./components/BrandCarousel";
import CountUp from "./components/CountUp";
import Reveal from "./components/Reveal";
import Ticker from "./components/Ticker";

const stats = [
  { number: "7M+", label: "App installs", context: "Safaricom MPESA" },
  { number: "4.2x", label: "ROAS", context: "Flagship campaigns" },
  { number: "+109%", label: "Over install target", context: "Syngenta Cropwise" },
  { number: "120K+", label: "Lead sign-ups", context: "KCB Bank" },
  { number: "33%", label: "Sales lift", context: "MyDawa attribution" },
  { number: "8+", label: "Years", context: "Africa and Europe" },
];

const heroScores = [
  { tone: "red", number: "7M+", label: "App installs", context: "Safaricom MPESA" },
  { tone: "blue", number: "4.2x", label: "ROAS", context: "Flagship campaigns" },
  { tone: "yellow", number: "120K+", label: "Lead sign-ups", context: "KCB Bank" },
];

const tickerItems = [
  "Performance Marketing",
  "Growth Strategy",
  "Attribution",
  "Media Planning",
  "Meta",
  "Google",
  "TikTok",
  "YouTube",
  "LinkedIn",
  "Looker Studio",
];

const pillars = [
  {
    tone: { c: "#FF3B1F", on: "#FFFFFF" },
    title: "Performance Marketing",
    description: "Full funnel paid media across Meta, Google, TikTok, YouTube, LinkedIn, DV360, and programmatic. Every campaign starts with a hypothesis, attribution wired from day one, and a creative testing cadence that separates signal from noise fast.",
  },
  {
    tone: { c: "#2F5BFF", on: "#FFFFFF" },
    title: "Growth Strategy",
    description: "Before I touch a platform, I ask: what is the hypothesis? I design experiments, define success metrics, and build the kind of growth loops that keep compounding long after the campaign ends. Founder mindset. Operator execution.",
  },
  {
    tone: { c: "#FFD60A", on: "#14110F" },
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
  // Drop a portrait at /public/brian.png and it appears in the hero automatically.
  const hasPortrait = fs.existsSync(path.join(process.cwd(), "public", "brian.png"));

  return (
    <div>

      {/* HERO */}
      <div className="hero-wrap">
        <div className="hero-blob" style={{ width: 420, height: 420, background: "#FF3B1F", top: -120, right: -80 }} />
        <div className="hero-blob" style={{ width: 360, height: 360, background: "#2F5BFF", bottom: -140, left: -120, opacity: 0.25 }} />
        <div className="hero-blob" style={{ width: 300, height: 300, background: "#FFD60A", top: "30%", left: "38%", opacity: 0.3 }} />

        <section className="hero-section">
          <div className="container hero-grid">
            <div>
              <span className="eyebrow">
                <span className="eyebrow-dot" />
                Growth operator and media strategist
              </span>

              <h1 className="hero-title">
                <span className="line">Growth is</span>
                <span className="line">
                  a <span className="accent">system.</span>
                </span>
                <span className="line">
                  <span className="mark">I build it.</span>
                </span>
              </h1>

              <p className="hero-lede">
                I am Brian Baraka. A growth operator with 8+ years turning budgets into business results across Africa and Europe. I have driven 7M+ app installs, uncovered hidden revenue through attribution, and scaled campaigns for some of the continent&apos;s biggest brands.
              </p>
              <Link href="/about" className="hero-link">
                Learn more about me →
              </Link>

              <div className="hero-buttons">
                <Link href="/work" className="btn-primary" style={{ fontSize: "16px", padding: "15px 30px" }}>See My Work</Link>
                <Link href="/contact" className="btn-outline" style={{ fontSize: "16px", padding: "15px 30px" }}>Let&apos;s Talk</Link>
              </div>
            </div>

            {/* Hero visual: scoreboard stack (with optional portrait) */}
            <div>
              {hasPortrait && (
                <div className="portrait" style={{ marginBottom: 24 }}>
                  <Image src="/brian.png" alt="Brian Baraka" fill priority sizes="(min-width: 980px) 400px, 90vw" style={{ objectFit: "cover" }} />
                </div>
              )}
              <div className="score-stack">
                {heroScores.map((score) => (
                  <div key={score.number} className={`score-card score-${score.tone}`}>
                    <div className="n">{score.number}</div>
                    <div className="l">{score.label}</div>
                    <div className="c">{score.context}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* TICKER */}
      <Ticker items={tickerItems} />

      {/* BRAND CAROUSEL */}
      <BrandCarousel />

      {/* WHAT I DO */}
      <section className="section">
        <div className="container">
          <Reveal>
            <span className="section-label" style={{ marginBottom: "16px" }}>What I Do</span>
            <h2 style={{ fontSize: "clamp(32px, 5.4vw, 64px)", fontWeight: 900, letterSpacing: "-0.04em", lineHeight: 1.02, color: "#14110F", marginBottom: "16px", marginTop: "12px" }}>
              Strategy, media,<br />and <span className="mark">measurement.</span>
            </h2>
            <p style={{ color: "#6B6560", fontSize: "17px", lineHeight: 1.7, marginBottom: "52px", maxWidth: "480px" }}>
              That intersection is where the real growth happens.{" "}
              <Link href="/services" style={{ color: "#2F5BFF", textDecoration: "none", fontWeight: 700, borderBottom: "2px solid currentColor" }}>See all services →</Link>
            </p>
          </Reveal>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "24px" }}>
            {pillars.map((pillar, i) => (
              <Reveal key={pillar.title} delay={i * 110}>
                <div className="pillar" style={{ ["--c" as string]: pillar.tone.c, ["--on" as string]: pillar.tone.on }}>
                  <div className="pillar-num">0{i + 1}</div>
                  <h3>{pillar.title}</h3>
                  <p>{pillar.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="section stats-band">
        <div className="container" style={{ position: "relative" }}>
          <Reveal>
            <span className="section-label" style={{ textAlign: "center", marginBottom: "12px", color: "#FFD60A" }}>The Scoreboard</span>
            <h2 style={{ fontSize: "clamp(30px, 5vw, 60px)", fontWeight: 900, color: "#FFFFFF", textAlign: "center", letterSpacing: "-0.04em", lineHeight: 1.02, marginBottom: "56px", marginTop: "12px" }}>
              The numbers that matter.
            </h2>
          </Reveal>
          <div className="stats-grid">
            {stats.map((stat, i) => (
              <Reveal key={stat.number} delay={i * 70} style={{ textAlign: "center" }}>
                <CountUp value={stat.number} className="stat-solid" />
                <p className="stat-label">{stat.label}</p>
                <p className="stat-ctx">{stat.context}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURED WORK */}
      <section className="section">
        <div className="container">
          <Reveal>
            <span className="section-label" style={{ marginBottom: "16px" }}>Featured Work</span>
            <h2 style={{ fontSize: "clamp(32px, 5.4vw, 64px)", fontWeight: 900, letterSpacing: "-0.04em", lineHeight: 1.02, color: "#14110F", marginBottom: "48px", marginTop: "12px" }}>
              A few things I am <span className="mark">proud of.</span>
            </h2>
          </Reveal>
          <div className="work-list">
            {featured.map((item, i) => (
              <Reveal key={item.slug} delay={i * 90}>
                <Link href={`/work/${item.slug}`} className="work-row">
                  <div className="work-idx" aria-hidden="true">0{i + 1}</div>
                  <div>
                    <p className="work-tag">{item.tag}</p>
                    <h3 className="work-title">{item.headline}</h3>
                  </div>
                  <span className="work-arrow" aria-label="View case study">→</span>
                </Link>
              </Reveal>
            ))}
          </div>
          <div style={{ textAlign: "center", marginTop: "48px" }}>
            <Link href="/work" className="btn-outline">See All Work</Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section cta-band" style={{ padding: "96px 24px" }}>
        <div className="shape" style={{ width: 220, height: 220, borderRadius: "50%", background: "#FFD60A", top: -90, left: -60 }} />
        <div className="shape" style={{ width: 160, height: 160, borderRadius: 28, background: "#2F5BFF", bottom: -60, right: 6, transform: "rotate(18deg)" }} />
        <div className="container" style={{ position: "relative" }}>
          <Reveal>
            <span className="section-label" style={{ marginBottom: "20px", color: "#FFFFFF", fontSize: "13px" }}>Ready to Grow?</span>
            <h2>
              You have seen<br />the numbers.
            </h2>
            <p className="sub">
              Now let&apos;s talk about yours. I am available for select consulting engagements.
            </p>
            <Link href="/contact" className="btn-yellow" style={{ fontSize: "17px", padding: "17px 38px" }}>
              Start the Conversation →
            </Link>
          </Reveal>
        </div>
      </section>

    </div>
  );
}
