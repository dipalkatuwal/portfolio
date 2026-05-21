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
        accent: "#1a6b9a",
        ink: "#1c1c1c",
        ink2: "#3a3a3a",
        ink3: "#6a6a6a",
        ink4: "#9a9a9a",
        rule: "#c8c4bc",
        lines: "#e4e0d8",
        bg: "#f7f4ef",
        surface: "#ffffff",
        surface2: "#eeebe4",
        mid: "#5a5a5a",
        muted: "#8a8a8a",
      },
      fontFamily: {
        playfair: ["var(--font-playfair)", "Georgia", "serif"],
        courier: ["var(--font-courier)", "'Courier New'", "monospace"],
        mono: ["var(--font-share-tech)", "'Courier New'", "monospace"],
        vt323: ["var(--font-vt323)", "monospace"],
      },
      scale: {
        "102": "1.02",
        "103": "1.03",
      },
      animation: {
        "avail-pulse": "availPulse 2.5s ease infinite",
        "fade-up": "fadeUp 0.6s cubic-bezier(.22,1,.36,1) forwards",
        blink: "blink 1s step-end infinite",
      },
      keyframes: {
        availPulse: {
          "0%": { boxShadow: "0 0 0 0 rgba(74,222,128,.55)" },
          "70%": { boxShadow: "0 0 0 8px rgba(74,222,128,0)" },
          "100%": { boxShadow: "0 0 0 0 rgba(74,222,128,0)" },
        },
        fadeUp: {
          from: { opacity: "0", transform: "translateY(24px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        blink: {
          "0%,100%": { opacity: "1" },
          "50%": { opacity: "0" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
