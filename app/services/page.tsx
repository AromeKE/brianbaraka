import Link from "next/link";

const services = [
  {
    icon: "📈",
    title: "Performance Marketing",
    tagline: "Paid media that pays back.",
    description: "Full funnel paid media campaigns across Meta, Google, TikTok, YouTube, LinkedIn, DV360, and programmatic. Every campaign starts with a clear hypothesis, attribution wired from day one, and a creative testing cadence that separates signal from noise fast. Not media buying on autopilot. Every week I am making scale or kill decisions based on real data.",
    includes: [
      "Campaign strategy and audience architecture",
      "Creative briefing and testing framework",
      "Full attribution setup: Meta Pixel, GA4, AppsFlyer, Adjust",
      "Weekly performance reporting and optimisation",
      "Scale recommendations backed by data",
    ],
    bestFor: "Brands spending $10K to $200K per month on paid media who need a strategic operator, not just an executor.",
    cta: "Let's Talk Performance",
  },
  {
    icon: "🧠",
    title: "Growth Strategy and Consulting",
    tagline: "Clarity on what to do next and why.",
    description: "Sometimes you do not need someone to run your ads. You need someone to tell you why your growth has stalled, where your attribution is lying to you, and what experiments to run next. I bring 8+ years of cross-channel, cross-market experience to your growth challenges and I think like a founder, not a consultant.",
    includes: [
      "Growth audit covering channels, attribution, creative, and funnel",
      "Experiment design and prioritisation framework",
      "Channel mix strategy and budget allocation recommendations",
      "Attribution model review and correction",
      "Quarterly growth roadmap",
    ],
    bestFor: "Founders, CMOs, and marketing leads who need a sharp outside perspective on their growth engine.",
    cta: "Book a Strategy Session",
  },
  {
    icon: "📊",
    title: "Media Planning and Reporting",
    tagline: "Know where every shilling is going and why.",
    description: "I build media plans grounded in business objectives, not platform defaults. And I build the reporting infrastructure that tells you in plain language whether it is working. Custom Looker Studio dashboards. Multi-touch attribution. Cross-channel performance synthesis. No vanity metrics. Just clarity.",
    includes: [
      "Full media plan covering channels, budgets, phasing, and KPIs",
      "Custom Looker Studio dashboard build",
      "GA4 and Supermetrics integration",
      "Monthly performance reports with actionable insights",
      "Attribution model design and implementation",
    ],
    bestFor: "Agencies and in-house teams who need a media strategist to own the planning and measurement layer.",
    cta: "Get a Media Plan",
  },
];

const steps = [
  { step: "01", title: "Discovery", body: "We talk about your business, goals, current performance, and where growth is being left on the table." },
  { step: "02", title: "Proposal", body: "I put together a clear scope, timeline, and investment. No vague retainers." },
  { step: "03", title: "Execution", body: "I get to work with full transparency on what I am doing and why." },
  { step: "04", title: "Reporting", body: "You get clear, honest reporting every week or month focused on decisions, not data dumps." },
];

export default function Services() {
  return (
    <div style={{ background: "linear-gradient(160deg, #FFFFFF 0%, #FFF6F0 100%)" }}>

      {/* HERO */}
      <section className="hero-section">
        <div className="container">
          <span className="section-label" style={{ marginBottom: "16px" }}>Services</span>
          <h1 style={{ fontSize: "clamp(36px, 6vw, 68px)", fontWeight: 800, lineHeight: 1.08, letterSpacing: "-0.03em", color: "#14110F", marginBottom: "16px", marginTop: "12px" }}>
            What I do.{" "}
            <span style={{ color: "#FF3B1F" }}>How I work.</span>
          </h1>
          <p style={{ color: "#6B6560", fontSize: "clamp(15px, 2vw, 17px)", lineHeight: 1.75, maxWidth: "480px", marginBottom: "12px" }}>
            I take on select engagements with brands and teams who are serious about growth.
          </p>
          <Link href="/work" style={{ color: "#2F5BFF", fontSize: "14px", fontWeight: 600, textDecoration: "none", fontFamily: "'Poppins', sans-serif" }}>
            See the results that back this up →
          </Link>
        </div>
      </section>

      {/* SERVICES */}
      <section className="section" style={{ paddingTop: "0" }}>
        <div className="container">
          <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
            {services.map((service) => (
              <div key={service.title} className="card service-card-inner">
                <div className="grid-service">
                  <div>
                    <div style={{ fontSize: "32px", marginBottom: "16px" }}>{service.icon}</div>
                    <h2 style={{ fontSize: "clamp(20px, 2.5vw, 26px)", fontWeight: 800, color: "#14110F", marginBottom: "6px", letterSpacing: "-0.02em" }}>
                      {service.title}
                    </h2>
                    <p style={{ color: "#FF3B1F", fontWeight: 600, fontSize: "14px", marginBottom: "16px", fontFamily: "'Poppins', sans-serif" }}>
                      {service.tagline}
                    </p>
                    <p style={{ color: "#6B6560", fontSize: "14px", lineHeight: 1.8, marginBottom: "16px" }}>
                      {service.description}
                    </p>
                    <p style={{ color: "#9C948A", fontSize: "13px", lineHeight: 1.6, fontStyle: "italic" }}>
                      Best for: {service.bestFor}
                    </p>
                  </div>
                  <div>
                    <p style={{ fontWeight: 700, fontSize: "12px", color: "#14110F", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: "16px", fontFamily: "'Poppins', sans-serif" }}>
                      What is included
                    </p>
                    <div style={{ display: "flex", flexDirection: "column", gap: "10px", marginBottom: "32px" }}>
                      {service.includes.map((item) => (
                        <div key={item} style={{ display: "flex", gap: "10px", alignItems: "flex-start" }}>
                          <span style={{ color: "#FF3B1F", marginTop: "2px", flexShrink: 0, fontSize: "13px" }}>✓</span>
                          <span style={{ color: "#6B6560", fontSize: "14px", lineHeight: 1.6 }}>{item}</span>
                        </div>
                      ))}
                    </div>
                    <Link href="/contact" className="btn-primary" style={{ fontSize: "14px", padding: "12px 22px" }}>
                      {service.cta} →
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="section-sm" style={{ background: "rgba(20,17,15,0.025)", borderTop: "1px solid rgba(20,17,15,0.08)", borderBottom: "1px solid rgba(20,17,15,0.08)" }}>
        <div className="container">
          <span className="section-label" style={{ marginBottom: "12px" }}>How I Work</span>
          <h2 style={{ fontSize: "clamp(24px, 3vw, 36px)", fontWeight: 800, color: "#14110F", letterSpacing: "-0.02em", marginBottom: "40px", marginTop: "12px" }}>
            Simple process. No surprises.
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "32px" }}>
            {steps.map((step) => (
              <div key={step.step}>
                <div style={{ fontWeight: 800, fontSize: "36px", color: "#FF3B1F", opacity: 0.25, marginBottom: "12px", fontFamily: "'Poppins', sans-serif", lineHeight: 1 }}>
                  {step.step}
                </div>
                <h3 style={{ fontWeight: 700, fontSize: "17px", color: "#14110F", marginBottom: "10px" }}>{step.title}</h3>
                <p style={{ color: "#6B6560", fontSize: "14px", lineHeight: 1.7 }}>{step.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section" style={{ paddingTop: "48px" }}>
        <div className="container">
          <div className="cta-block">
            <span className="section-label" style={{ display: "block", marginBottom: "14px" }}>Availability</span>
            <h2 style={{ fontSize: "clamp(22px, 3vw, 36px)", fontWeight: 800, color: "#14110F", letterSpacing: "-0.02em", marginBottom: "12px" }}>
              Not sure which service fits?
            </h2>
            <p style={{ color: "#6B6560", fontSize: "15px", lineHeight: 1.7, maxWidth: "420px", margin: "0 auto 12px" }}>
              Send me a brief and I will tell you honestly whether I can help and how.
            </p>
            <p style={{ color: "#FF3B1F", fontWeight: 600, fontSize: "13px", marginBottom: "28px", fontFamily: "'Poppins', sans-serif" }}>
              Open to new engagements from July 2026
            </p>
            <Link href="/contact" className="btn-primary">Send a Brief</Link>
          </div>
        </div>
      </section>

    </div>
  );
}
