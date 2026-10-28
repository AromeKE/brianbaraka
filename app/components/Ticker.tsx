/** Slanted, endlessly scrolling band. Pure CSS: the content is repeated so a -50% shift loops seamlessly. */
export default function Ticker({ items }: { items: string[] }) {
  const row = (
    <div className="ticker-item" aria-hidden="true">
      {items.map((item) => (
        <span key={item} style={{ display: "flex", alignItems: "center", gap: "48px" }}>
          {item}
          <span className="star">✦</span>
        </span>
      ))}
    </div>
  );

  return (
    <div className="ticker-wrap">
      <div className="ticker" role="marquee" aria-label={items.join(", ")}>
        <div className="ticker-track">
          {row}
          {row}
          {row}
          {row}
        </div>
      </div>
    </div>
  );
}
