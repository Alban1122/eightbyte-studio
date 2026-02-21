import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        gold: {
          50: "#FDF8E8",
          100: "#FAF0C8",
          200: "#F5E08E",
          300: "#EDCF54",
          400: "#D4AF37",
          500: "#B8972E",
          600: "#9A7B24",
          700: "#7C611C",
          800: "#5E4A16",
          900: "#3F3110",
          950: "#201909",
        },
        navy: {
          50: "#E8EAF0",
          100: "#C4C9D6",
          200: "#8E96AD",
          300: "#5C6685",
          400: "#3A4260",
          500: "#252D45",
          600: "#1C2238",
          700: "#161B2E",
          800: "#111524",
          900: "#0C0F1A",
          950: "#080A12",
        },
      },
      fontFamily: {
        sans: ["var(--font-geist-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-geist-mono)", "monospace"],
      },
      animation: {
        "fade-in": "fadeIn 1s ease-out forwards",
        "slide-up": "slideUp 0.8s ease-out forwards",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
