import { ImageResponse } from "next/og";

export const runtime = "edge";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#0a1520",
          color: "white",
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: "4px",
          fontWeight: "bold",
          fontFamily: "sans-serif",
          fontSize: 13,
          letterSpacing: "-0.5px",
        }}
      >
        <span style={{ color: "#FA4616" }}>L</span>TA
      </div>
    ),
    { ...size }
  );
}
