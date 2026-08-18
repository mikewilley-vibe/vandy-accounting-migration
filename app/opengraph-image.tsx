import { ImageResponse } from "next/og";

export const alt =
  "VANDY Accounting Solutions — small-business accounting in Virginia and North Carolina";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#0e1a24",
          color: "#f6f1e8",
          padding: "64px",
          fontFamily: "Georgia, serif",
        }}
      >
        <div
          style={{
            fontSize: 22,
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            color: "#d97706",
            fontFamily: "sans-serif",
            fontWeight: 700,
          }}
        >
          Now accepting clients in Virginia & North Carolina
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
          <div style={{ fontSize: 72, lineHeight: 1.05, maxWidth: 980 }}>
            You run the business. We’ll handle the books.
          </div>
          <div
            style={{
              fontSize: 28,
              color: "#d7e3dc",
              fontFamily: "sans-serif",
              maxWidth: 820,
            }}
          >
            VANDY Accounting Solutions — bookkeeping, payroll support, cleanup,
            and reporting for owner-operated companies.
          </div>
        </div>
      </div>
    ),
    size,
  );
}
