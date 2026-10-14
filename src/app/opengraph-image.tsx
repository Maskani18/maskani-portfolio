// MASKANI — OG image generator (BR-11).
// Kartu 1200×630 tipografis: nama + bidang. Karya visual final di P10.

import { ImageResponse } from "next/og";

export const alt = "MASKANI — IT Support, QA & Frontend Developer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OG(): ImageResponse {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: 80,
        background: "#0a0a0b",
        color: "#f4f4f5",
        fontFamily: "system-ui, sans-serif",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          fontSize: 24,
          letterSpacing: "0.08em",
          color: "#8a8a93",
          textTransform: "uppercase",
        }}
      >
        <span>IT Support · QA · Frontend</span>
        <span>Indramayu</span>
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
        <div
          style={{
            fontSize: 180,
            fontWeight: 600,
            lineHeight: 0.95,
            letterSpacing: "-0.04em",
          }}
        >
          MASKANI
        </div>
        <div style={{ fontSize: 40, color: "#a1a1aa" }}>
          Kekuatan yang menenggelamkan, Keberanian yang Menyelamatkan
        </div>
      </div>

      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 12,
          fontSize: 22,
        }}
      >
        <div
          style={{
            display: "flex",
            width: 10,
            height: 10,
            borderRadius: 999,
            background: "#8aa4ff",
          }}
        />
        <div
          style={{
            display: "flex",
            color: "#a1a1aa",
            letterSpacing: "0.08em",
          }}
        >
          OPEN TO WORK
        </div>
      </div>
    </div>,
    { ...size },
  );
}
