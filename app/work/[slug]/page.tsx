import Link from "next/link";
import { notFound } from "next/navigation";

const caseStudies: Record<string, {
  brand: string;
  tag: string;
  headline: string;
  challenge: string;
  strategy: string;
  results: { metric: string; value: string }[];
}> = {
  "safaricom-mpesa": {
    brand: "Safaricom MPESA",
    tag: "App Growth · Fintech · East Africa",
    headline: "7M+ installs. 4.2x ROAS. Africa's largest fintech app launched.",
    challenge: "Safaricom had 56M+ MPESA users on USSD. The opportunity was massive — migrate them to a superior app experience. The challenge was doing it at scale, with rigorous attribution, across iOS and Android simultaneously.",
    strategy: "Built a coordinated Meta, Google UAC and DV360 motion with attribution wired to Network ID, Source App, and Campaign ID from day one. Focused on modeled metrics over raw installs. Ran regular SKAN strategy adjustments for iOS. Let data, not assumptions, drive every budget decision.",
    results: [
      { metric: "App Installs", value: "7M+" },
      { metric: "Plan Achievement", value: "120%" },
      { metric: "ROAS", value: "4.2x" },
      { metric: "Award", value: "MSK Judge's Choice" },
    ],
  },
  "kcb-bank": {
    brand: "KCB Bank",
    tag: "Lead Generation · Banking · East Africa",
    headline: "120,000+ sign-ups. 25% CVR. A lead engine that never switched off.",
    challenge: "KCB Bank wanted to drive high-quality leads for credit card and account opening in a market where cash still dominated and digital banking trust was low.",
    strategy: "Ran photo and video ads highlighting specific card benefits linked directly to sign-up forms. Built custom audiences from website visitors, then created lookalikes to scale. Layered in Dynamic Search Ads on Google and HubSpot CRM automations to nurture leads post-capture. The result was so strong, the campaign became always-on.",
    results: [
      { metric: "Completed Sign-ups", value: "120,000+" },
      { metric: "Conversion Rate", value: "25%" },
      { metric: "ROAS", value: "3.75x" },
      { metric: "Campaign Budget", value: "$70K" },
    ],
  },
  "syngenta-cropwise": {
    brand: "Syngenta Cropwise Grower",
    tag: "App Launch · Agritech · East Africa",
    headline: "109% over target. 12% under budget. A B2C agritech app launched from zero.",
    challenge: "Launch a brand new B2C agritech app to smallholder farmers across East Africa. Target: 6,000 installs. The product was new, the category was nascent, and the audience was hard to reach.",
    strategy: "Led with crop-specific pain-point creative over generic install ads. Ran weekly creative variant rotation across Meta with scale or kill decisions every Friday. Segmented audiences by region and crop type. Wired the full attribution stack including AppsFlyer, Adjust for cross-validation, GA4, and custom Looker Studio dashboards. Closed the loop with post-install surveys to capture voice-of-grower and feed the next experiment cycle.",
    results: [
      { metric: "App Installs", value: "12,543" },
      { metric: "Original Target", value: "6,000" },
      { metric: "Over Target", value: "+109%" },
      { metric: "Under Budget", value: "12%" },
      { metric: "OTP Verified Users", value: "6,165 (49%)" },
      { metric: "Best CTR", value: "5.07%" },
      { metric: "Lowest CPC", value: "$0.01" },
    ],
  },
  "mydawa": {
    brand: "MyDawa",
    tag: "Ecommerce · Attribution · East Africa",
    headline: "40% of revenue was hiding in the wrong channel. We found it and unlocked 33% sales growth.",
    challenge: "MyDawa, one of Africa's fastest growing online pharmacies, suspected their attribution model was broken. Last-click was telling one story. The truth was different.",
    strategy: "Ran a conversion lift study on an $80K budget comparing purchases from exposed vs. control audiences to measure Facebook's true contribution to revenue. Discovered that 40% of sales previously attributed to other channels were in fact Facebook-influenced. Reallocated 50% of budget from programmatic to Meta. Deployed Dynamic Ads, DCO, CBO, and Criteo retargeting to capitalize on the new allocation.",
    results: [
      { metric: "Sales Lift", value: "33%" },
      { metric: "Misattributed Revenue Uncovered", value: "40%" },
      { metric: "Budget Reallocated to Meta", value: "50%" },
      { metric: "Campaign Budget", value: "$80K" },
    ],
  },
  "femmedetox": {
    brand: "FemmeDetox",
    tag: "Ecommerce · Retention · United States",
    headline: "128.7% sales increase. 3.8x retention lift. A beauty brand that stopped leaking revenue.",
    challenge: "FemmeDetox, a fast-growing US natural beauty brand, needed to scale acquisition while improving retention on their subscription model — two goals that usually pull in opposite directions.",
    strategy: "Used customer matching and lookalike audiences to find high-intent buyers at scale. Layered Google in-market audiences across Search, Display, YouTube, and Discovery to capture purchase-ready signals. UGC and video content drove the highest resonance. Built retention loops around subscription behaviour to lift average order value over time.",
    results: [
      { metric: "Sales Increase", value: "128.7%" },
      { metric: "Revenue Target Achievement", value: "120% above target" },
      { metric: "Customer Retention Lift", value: "3.8x" },
      { metric: "Bounce Rate Reduction", value: "25%" },
      { metric: "Campaign Budget", value: "$80K" },
    ],
  },
};

const slugOrder = ["safaricom-mpesa", "kcb-bank", "syngenta-cropwise", "mydawa", "femmedetox"];

export default function CaseStudy({ params }: { params: { slug: string } }) {
  const cs = caseStudies[params.slug];
  if (!cs) notFound();

  const currentIndex = slugOrder.indexOf(params.slug);
  const prevSlug = currentIndex > 0 ? slugOrder[currentIndex - 1] : null;
  const nextSlug = currentIndex < slugOrder.length - 1 ? slugOrder[currentIndex + 1] : null;
  const prevCs = prevSlug ? caseStudies[prevSlug] : null;
  const nextCs = nextSlug ? caseStudies[nextSlug] : null;

  return (
    <div style={{ background: "linear-gradient(160deg, #0F172A 0%, #0F2A1F 100%)" }}>
      <section className="hero-section">
        <div style={{ maxWidth: "760px", margin: "0 auto", padding: "0 20px" }}>
          <Link href="/work" style={{ color: "#94A3B8", fontSize: "13px", textDecoration: "none", fontWeight: 500, display: "inline-flex", alignItems: "center", gap: "6px", marginBottom: "32px", fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
            ← Back to Work
          </Link>
          <span className="section-label" style={{ marginBottom: "16px" }}>{cs.tag}</span>
          <h1 style={{ fontSize: "clamp(28px, 5vw, 52px)", fontWeight: 800, lineHeight: 1.1, letterSpacing: "-0.03em", color: "#F8FAFC", marginBottom: "40px", marginTop: "12px" }}>
            {cs.headline}
          </h1>

          {/* Stats grid */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))", gap: "16px", marginBottom: "56px" }}>
            {cs.results.map((r) => (
              <div key={r.metric} className="card" style={{ padding: "20px" }}>
                <div className="stat-number" style={{ fontSize: "clamp(22px, 3vw, 28px)", marginBottom: "6px" }}>{r.value}</div>
                <p style={{ fontSize: "12px", color: "#94A3B8", lineHeight: 1.4 }}>{r.metric}</p>
              </div>
            ))}
          </div>

          {/* Challenge */}
          <div style={{ marginBottom: "40px" }}>
            <span className="section-label" style={{ marginBottom: "14px" }}>The Challenge</span>
            <p style={{ color: "#94A3B8", fontSize: "clamp(14px, 1.5vw, 16px)", lineHeight: 1.85, marginTop: "12px" }}>{cs.challenge}</p>
          </div>

          {/* Strategy */}
          <div style={{ marginBottom: "56px" }}>
            <span className="section-label" style={{ marginBottom: "14px" }}>The Strategy</span>
            <p style={{ color: "#94A3B8", fontSize: "clamp(14px, 1.5vw, 16px)", lineHeight: 1.85, marginTop: "12px" }}>{cs.strategy}</p>
          </div>

          <div className="hero-buttons" style={{ marginBottom: "64px" }}>
            <Link href="/work" className="btn-outline">← All Case Studies</Link>
            <Link href="/contact" className="btn-primary">Work With Me</Link>
          </div>

          {/* Prev / Next */}
          <div style={{ borderTop: "1px solid rgba(255,255,255,0.06)", paddingTop: "40px" }}>
            <div className="grid-case-nav">
              {prevCs && prevSlug ? (
                <Link href={`/work/${prevSlug}`} style={{ textDecoration: "none" }}>
                  <div className="card" style={{ padding: "20px" }}>
                    <p style={{ fontSize: "11px", color: "#94A3B8", marginBottom: "8px", fontFamily: "'Plus Jakarta Sans', sans-serif" }}>← Previous</p>
                    <p style={{ fontWeight: 700, fontSize: "14px", color: "#F8FAFC", fontFamily: "'Plus Jakarta Sans', sans-serif" }}>{prevCs.brand}</p>
                  </div>
                </Link>
              ) : <div />}
              {nextCs && nextSlug ? (
                <Link href={`/work/${nextSlug}`} style={{ textDecoration: "none" }}>
                  <div className="card" style={{ padding: "20px", textAlign: "right" }}>
                    <p style={{ fontSize: "11px", color: "#94A3B8", marginBottom: "8px", fontFamily: "'Plus Jakarta Sans', sans-serif" }}>Next →</p>
                    <p style={{ fontWeight: 700, fontSize: "14px", color: "#F8FAFC", fontFamily: "'Plus Jakarta Sans', sans-serif" }}>{nextCs.brand}</p>
                  </div>
                </Link>
              ) : <div />}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export async function generateStaticParams() {
  return Object.keys(caseStudies).map((slug) => ({ slug }));
}
