import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Dipal Katuwal — Full Stack Developer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#f7f4ef",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "64px",
          fontFamily: "serif",
          position: "relative",
        }}
      >
        {/* Grid background */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "linear-gradient(rgba(200,196,188,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(200,196,188,0.4) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />

        {/* Left accent bar */}
        <div
          style={{
            position: "absolute",
            left: 0,
            top: 0,
            bottom: 0,
            width: 6,
            background: "#1a6b9a",
          }}
        />

        {/* Top badge */}
        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <div
            style={{
              background: "rgba(26,107,154,0.06)",
              border: "1px solid rgba(26,107,154,0.2)",
              borderRadius: 6,
              padding: "6px 14px",
              fontSize: 13,
              letterSpacing: "0.18em",
              color: "#1a6b9a",
              fontFamily: "monospace",
              textTransform: "uppercase",
            }}
          >
            Full Stack Developer
          </div>
          <div
            style={{
              background: "rgba(74,222,128,0.06)",
              border: "1px solid rgba(74,222,128,0.3)",
              borderRadius: 6,
              padding: "6px 14px",
              fontSize: 13,
              letterSpacing: "0.12em",
              color: "#16a34a",
              fontFamily: "monospace",
              textTransform: "uppercase",
              display: "flex",
              alignItems: "center",
              gap: 6,
            }}
          >
            <div
              style={{
                width: 7,
                height: 7,
                borderRadius: "50%",
                background: "#4ade80",
              }}
            />
            Available
          </div>
        </div>

        {/* Main name */}
        <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
          <div
            style={{
              fontSize: 80,
              fontWeight: 900,
              color: "#1c1c1c",
              lineHeight: 1.05,
              letterSpacing: "-0.02em",
            }}
          >
            Dipal Katuwal
          </div>
          <div
            style={{
              fontSize: 22,
              color: "#5a5a5a",
              fontFamily: "monospace",
              letterSpacing: "0.02em",
            }}
          >
            Building data-heavy web products for the Nepali market.
          </div>
        </div>

        {/* Tech tags row */}
        <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
          {["MERN Stack", "AI Integrations", "TypeScript", "Next.js", "TensorFlow", "Python"].map(
            (tag) => (
              <div
                key={tag}
                style={{
                  background: "#ffffff",
                  border: "1px solid #c8c4bc",
                  borderRadius: 8,
                  padding: "7px 16px",
                  fontSize: 13,
                  color: "#6a6a6a",
                  fontFamily: "monospace",
                }}
              >
                {tag}
              </div>
            )
          )}
        </div>

        {/* Bottom row */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            borderTop: "1px solid #e4e0d8",
            paddingTop: 20,
          }}
        >
          <div
            style={{
              fontSize: 18,
              color: "#1a6b9a",
              fontFamily: "monospace",
              letterSpacing: "0.05em",
            }}
          >
            dipalkatuwal.dev
          </div>
          <div
            style={{
              fontSize: 13,
              color: "#8a8a8a",
              fontFamily: "monospace",
              letterSpacing: "0.1em",
              textTransform: "uppercase",
            }}
          >
            Nepal · MERN · GenAI
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
