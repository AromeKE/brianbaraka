import Link from "next/link";

const timeline = [
  { year: "2018 – 2021", role: "Media Specialist", company: "WPP Scangroup (GroupM)", location: "Nairobi" },
  { year: "2021", role: "Conversion Rate Optimizer", company: "Accelerated Agency", location: "Hamburg, Germany (Remote)" },
  { year: "2022 – 2023", role: "Lead Media Strategist", company: "EssenceMediacom (WPP)", location: "Nairobi" },
  { year: "2024 – Present", role: "Media Buying & Research Manager", company: "CreativeEdge FCB", location: "Nairobi" },
];

const beliefs = [
  {
    title: "Growth is a system, not a guess.",
    body: "Every campaign I run starts with a hypothesis. Every decision is tied to a metric. Every budget allocation is justified by data, not gut feel or client pressure.",
  },
  {
    title: "Attribution is everything.",
    body: "If you do not know where your growth is coming from, you cannot scale it. I have seen brands misattribute 40% of their revenue to the wrong channels. I fix that before I touch a budget.",
  },
  {
    title: "Creativity and rigour are not opposites.",
    body: "The best growth work sits at the intersection of sharp creative thinking and obsessive measurement. One without the other is either art or accounting. Neither scales.",
  },
  {
    title: "Founder mindset matters.",
    body: "I run campaigns like it is my own money. Because sometimes it is.",
  },
];

const credentials = [
  "McKinsey Forward Program",
  "Meta Lead Trainer, Boost With Meta",
  "Facebook DigifyPRO Africa Trainer, First Kenyan Cohort",
  "CXL Conversion Optimization",
  "Meta Media Planning and Buying",
  "Google Search, Display and Video",
  "Certified Creative Strategy Professional",
  "Certified Digital Marketing Associate",
];

export default function About() {
  return (
    <div style={{ background: "linear-gradient(160deg, #0F172A 0%, #0F2A1F 100%)" }}>

      {/* HERO */}
      <section className="hero-section">
        <div className="container">
          <span className="section-label" style={{ marginBottom: "16px" }}>About</span>
          <h1 style={{ fontSize: "clamp(36px, 6vw, 68px)", fontWeight: 800, lineHeight: 1.08, letterSpacing: "-0.03em", color: "#F8FAFC", marginBottom: "20px", marginTop: "12px" }}>
            I did not just study marketing.{" "}
            <span style={{ color: "#10B981" }}>I went and did it.</span>
          </h1>
          <p style={{ color: "#94A3B8", fontSize: "clamp(15px, 2vw, 17px)", lineHeight: 1.75, maxWidth: "520px" }}>
            From running acquisition for Africa's largest fintech to optimizing Shopify brands in Hamburg. I built my career doing the hard, unglamorous work of figuring out what actually grows a business.
          </p>
        </div>
      </section>

      {/* STORY + BELIEFS */}
      <section className="section" style={{ paddingTop: "0" }}>
        <div className="container">
          <div className="grid-2">
            <div>
              <span className="section-label" style={{ marginBottom: "24px" }}>My Story</span>
              <div style={{ display: "flex", flexDirection: "column", gap: "20px", marginTop: "12px" }}>
                {[
                  "I started my career at WPP Scangroup in Nairobi, where I got thrown into the deep end fast. My first major brief was Safaricom MPESA, East Africa's largest fintech, 56M+ users, a brand new app, and a mandate to drive installs at scale. We delivered 7M+ downloads in year one at 4.2x ROAS. That campaign won the MSK Judge's Choice Award and set the standard for everything I have done since.",
                  "From there I moved to EssenceMediacom, where I designed integrated growth strategies for Coca-Cola, P&G, and Airtel across seven platforms and multiple Sub-Saharan African markets. I learned how to think across channels, not just execute within them.",
                  "I then took a remote role at Accelerated Agency in Hamburg, Germany, owning CRO across six 8-figure European Shopify brands. I built a 40+ hypothesis backlog and operationalized behavioral science as testable, measurable interventions. It changed how I think about conversion forever.",
                  "Today I work as Media Buying and Research Manager at CreativeEdge FCB Nairobi, where I recently shipped a B2C agritech app to 109% of its install target at 12% under budget. I also operate my own businesses — because the best marketers have skin in the game.",
                ].map((p, i) => (
                  <p key={i} style={{ color: "#94A3B8", fontSize: "15px", lineHeight: 1.8 }}>{p}</p>
                ))}
              </div>
            </div>

            <div>
              <span className="section-label" style={{ marginBottom: "24px" }}>What I Believe</span>
              <div style={{ display: "flex", flexDirection: "column", gap: "24px", marginTop: "12px" }}>
                {beliefs.map((belief) => (
                  <div key={belief.title} style={{ borderLeft: "2px solid #10B981", paddingLeft: "18px" }}>
                    <h3 style={{ fontSize: "15px", fontWeight: 700, color: "#F8FAFC", marginBottom: "6px" }}>
                      {belief.title}
                    </h3>
                    <p style={{ color: "#94A3B8", fontSize: "14px", lineHeight: 1.7 }}>{belief.body}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TIMELINE */}
      <section className="section-sm" style={{ background: "rgba(255,255,255,0.02)", borderTop: "1px solid rgba(255,255,255,0.06)", borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
        <div className="container">
          <span className="section-label" style={{ marginBottom: "32px" }}>Career Timeline</span>
          <div style={{ display: "flex", flexDirection: "column" }}>
            {timeline.map((item, i) => (
              <div key={i} className="grid-timeline-row" style={{ borderBottom: i < timeline.length - 1 ? "1px solid rgba(255,255,255,0.06)" : "none" }}>
                <div>
                  <p style={{ fontWeight: 700, fontSize: "13px", color: "#10B981", fontFamily: "'Plus Jakarta Sans', sans-serif" }}>{item.year}</p>
                  <p style={{ fontSize: "12px", color: "#94A3B8", marginTop: "2px" }}>{item.location}</p>
                </div>
                <div>
                  <p style={{ fontWeight: 700, fontSize: "17px", color: "#F8FAFC", marginBottom: "4px", fontFamily: "'Plus Jakarta Sans', sans-serif" }}>{item.role}</p>
                  <p style={{ color: "#94A3B8", fontSize: "14px" }}>{item.company}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CREDENTIALS */}
      <section className="section">
        <div className="container">
          <span className="section-label" style={{ marginBottom: "32px" }}>Credentials</span>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))", gap: "12px", marginTop: "12px" }}>
            {credentials.map((cred) => (
              <div key={cred} className="card" style={{ padding: "16px 20px", display: "flex", alignItems: "center", gap: "12px" }}>
                <span style={{ color: "#10B981", fontSize: "14px", flexShrink: 0 }}>✓</span>
                <span style={{ color: "#94A3B8", fontSize: "13px", lineHeight: 1.5 }}>{cred}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section" style={{ paddingTop: "0" }}>
        <div className="container">
          <div className="cta-block cta-row" style={{ textAlign: "left" }}>
            <div>
              <h2 style={{ fontSize: "clamp(22px, 3vw, 32px)", fontWeight: 800, color: "#F8FAFC", marginBottom: "8px", letterSpacing: "-0.02em" }}>
                Want to work together?
              </h2>
              <p style={{ color: "#94A3B8", fontSize: "15px" }}>
                I take on select engagements with brands serious about growth.
              </p>
            </div>
            <div className="cta-row-buttons">
              <Link href="/contact" className="btn-primary">Let's Talk</Link>
              <a href="/BrianBaraka_CV.pdf" className="btn-outline" download>Download CV</a>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
