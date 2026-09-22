import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OgImage() {
  const logoBuffer = await readFile(join(process.cwd(), "public", "logo.png"));
  const logoSrc = `data:image/png;base64,${logoBuffer.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background: "linear-gradient(135deg, #0b2e33 0%, #051417 100%)",
          fontFamily: "sans-serif",
        }}
      >
        <img src={logoSrc} alt="Celibery" width={260} height={88} style={{ marginBottom: 48 }} />
        <div style={{ display: "flex", fontSize: 60, fontWeight: 700, color: "#ffffff", lineHeight: 1.15 }}>
          Smart Tech for
        </div>
        <div style={{ display: "flex", fontSize: 60, fontWeight: 700, color: "#ffffff", lineHeight: 1.15 }}>
          Smarter Living
        </div>
        <div style={{ display: "flex", fontSize: 28, color: "#7fd8e0", marginTop: 28 }}>
          Celibery — NAS storage, GaN chargers & docks
        </div>
      </div>
    ),
    { ...size },
  );
}
