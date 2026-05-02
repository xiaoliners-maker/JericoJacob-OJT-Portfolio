const timelineData = [
  { week: 1,  period: "Feb 9–13",  activity: "Orientation, GitHub, DMS Landing Page",      color: "#c9a96e" },
  { week: 2,  period: "Feb 16–20", activity: "AI Seminar, Field Interviews, BIR Research",  color: "#7ab0c9" },
  { week: 3,  period: "Feb 23–27", activity: "Node.js Projects, H4M Project Kickoff",       color: "#a07abe" },
  { week: 4,  period: "Mar 3–6",   activity: "H4M PPT, MediTrack Core Development",         color: "#c9a96e" },
  { week: 5,  period: "Mar 9–13",  activity: "Flutter Mobile App, Firebase Integration",    color: "#7ab0c9" },
  { week: 6,  period: "Mar 16–19", activity: "Edit Profile, Avatar Upload, Push Notifications", color: "#a07abe" },
  { week: 7,  period: "Mar 23–27", activity: "Bug Fixes, UI/UX Polish",                     color: "#c9a96e" },
  { week: 8,  period: "Apr 7–10",  activity: "WFH: UI Enhancement, Feature PPT",            color: "#6a9070" },
  { week: 9,  period: "Apr 13–17", activity: "Vercel Deployment, H4M Finalization",         color: "#7ab0c9" },
  { week: 10, period: "Apr 20–25", activity: "Final Mobile UI Polish & Completion",         color: "#c9a96e" },
];

export default function Timeline() {
  return (
    <section>
      <h2
        style={{
          fontFamily: "var(--font-serif)",
          fontSize: "1.5rem",
          fontWeight: 400,
          color: "var(--text-primary)",
          marginBottom: "2rem",
        }}
      >
        Internship Timeline
      </h2>

      <div style={{ position: "relative" }}>
        {/* Vertical track */}
        <div
          style={{
            position: "absolute",
            left: "15px",
            top: "8px",
            bottom: "8px",
            width: "1px",
            background: "var(--line)",
          }}
        />

        <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
          {timelineData.map((item, i) => (
            <div
              key={item.week}
              style={{
                display: "flex",
                gap: "1.5rem",
                alignItems: "flex-start",
                animation: `fadeUp 0.5s cubic-bezier(0.16,1,0.3,1) ${i * 0.04}s both`,
              }}
            >
              {/* Dot */}
              <div
                style={{
                  flexShrink: 0,
                  width: "31px",
                  height: "31px",
                  borderRadius: "50%",
                  background: "var(--bg)",
                  border: `1px solid ${item.color}40`,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "0.625rem",
                  fontFamily: "var(--font-mono)",
                  color: item.color,
                  zIndex: 1,
                  position: "relative",
                }}
              >
                {item.week}
              </div>

              {/* Row content */}
              <div
                style={{
                  flex: 1,
                  display: "flex",
                  alignItems: "center",
                  gap: "1rem",
                  background: "var(--bg-raised)",
                  border: "1px solid var(--bg-border)",
                  borderRadius: "8px",
                  padding: "0.625rem 1rem",
                  marginBottom: "0",
                }}
              >
                <span
                  style={{
                    fontSize: "0.6875rem",
                    fontFamily: "var(--font-mono)",
                    color: "var(--text-muted)",
                    whiteSpace: "nowrap",
                    flexShrink: 0,
                  }}
                >
                  {item.period}
                </span>
                <span
                  style={{
                    fontSize: "0.8125rem",
                    color: "var(--text-secondary)",
                    lineHeight: 1.4,
                  }}
                >
                  {item.activity}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
