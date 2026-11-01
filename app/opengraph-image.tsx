import { ImageResponse } from "next/og";
import { seo } from "./seo";

export const alt = seo.title;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// Gambar pratinjau saat tautan dibagikan (WhatsApp, LinkedIn, X, dll.)
export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "0 90px",
          background: "linear-gradient(135deg, #e6f2fb 0%, #f1f8fe 100%)",
          color: "#2b2e35",
        }}
      >
        <div style={{ display: "flex", fontSize: 30, fontWeight: 700 }}>
          <span style={{ background: "#0b8fd0", color: "#fff", padding: "6px 16px" }}>ANANDA</span>
          <span style={{ background: "#cfe6f5", color: "#0b8fd0", padding: "6px 16px" }}>ANGELI</span>
        </div>
        <div style={{ display: "flex", fontSize: 84, fontWeight: 400, marginTop: 40, lineHeight: 1.1 }}>
          Ananda Gracia Angeli
        </div>
        <div style={{ display: "flex", fontSize: 64, fontWeight: 700, color: "#0b8fd0", marginTop: 8 }}>
          Pengembang Web Fullstack
        </div>
        <div style={{ display: "flex", fontSize: 32, color: "#6b7482", marginTop: 32 }}>
          Lulusan Teknik Informatika · Siap Magang
        </div>
      </div>
    ),
    { ...size }
  );
}
