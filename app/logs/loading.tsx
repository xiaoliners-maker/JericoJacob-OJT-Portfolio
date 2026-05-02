export default function Loading() {
  return (
    <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "4.5rem 1.5rem" }}>
      <div className="skeleton" style={{ width: "120px", height: "12px", marginBottom: "1rem" }} />
      <div className="skeleton" style={{ width: "240px", height: "42px", marginBottom: "0.75rem" }} />
      <div className="skeleton" style={{ width: "420px", height: "16px", marginBottom: "3rem" }} />
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: "1rem" }}>
        {Array.from({ length: 6 }).map((_, i) => (
          <div key={i} className="skeleton" style={{ height: "260px", borderRadius: "12px" }} />
        ))}
      </div>
    </div>
  );
}
