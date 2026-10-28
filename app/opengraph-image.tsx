import { ImageResponse } from "next/og";
import { siteDescription } from "@/lib/site";

export const alt = "Chakri — Software Engineer";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#0A0A0A",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        <div
          style={{
            fontSize: 88,
            fontWeight: 600,
            color: "#F5F5F4",
            letterSpacing: "-0.02em",
          }}
        >
          Chakri
        </div>
        <div
          style={{
            marginTop: 20,
            maxWidth: 720,
            paddingLeft: 48,
            paddingRight: 48,
            fontSize: 28,
            lineHeight: 1.4,
            color: "#A1A1AA",
            textAlign: "center",
          }}
        >
          {siteDescription}
        </div>
        <div
          style={{
            marginTop: 40,
            width: 56,
            height: 4,
            backgroundColor: "#FACC15",
          }}
        />
      </div>
    ),
    {
      ...size,
    },
  );
}
