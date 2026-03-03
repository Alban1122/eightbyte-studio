import { ImageResponse } from "next/og";

const SIZE = { width: 1200, height: 630 };

export function generateOgImage() {
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
          backgroundColor: "#080A12",
          position: "relative",
        }}
      >
        {/* Subtle border accent at top */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: 3,
            background:
              "linear-gradient(90deg, transparent, #D4AF37, transparent)",
          }}
        />

        {/* Logo mark */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: 120,
            height: 120,
            borderRadius: 24,
            backgroundColor: "#0C0F1A",
            border: "1px solid rgba(212, 175, 55, 0.2)",
            marginBottom: 40,
            fontSize: 64,
            fontWeight: 700,
            color: "#D4AF37",
            letterSpacing: -2,
          }}
        >
          8B
        </div>

        {/* Title */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 16,
            marginBottom: 20,
          }}
        >
          <span
            style={{
              fontSize: 48,
              fontWeight: 300,
              letterSpacing: 8,
              color: "white",
              textTransform: "uppercase" as const,
            }}
          >
            Eight Byte
          </span>
          <div
            style={{
              width: 1,
              height: 36,
              backgroundColor: "rgba(212, 175, 55, 0.4)",
            }}
          />
          <span
            style={{
              fontSize: 48,
              fontWeight: 300,
              letterSpacing: 8,
              color: "#D4AF37",
              textTransform: "uppercase" as const,
            }}
          >
            Studio
          </span>
        </div>

        {/* Description */}
        <p
          style={{
            fontSize: 22,
            fontWeight: 300,
            color: "rgba(255, 255, 255, 0.4)",
            marginTop: 8,
          }}
        >
          Professional web development agency based in Tirana, Albania
        </p>

        {/* URL */}
        <p
          style={{
            fontSize: 16,
            fontWeight: 300,
            color: "rgba(212, 175, 55, 0.5)",
            letterSpacing: 4,
            marginTop: 40,
            textTransform: "uppercase" as const,
          }}
        >
          eightbyte.al
        </p>
      </div>
    ),
    { ...SIZE }
  );
}
