/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        playfair: ["var(--font-playfair)"],
        mono: ["var(--font-share-tech)", "Courier New", "monospace"],
        courier: ["var(--font-courier)"],
        vt323: ["var(--font-vt323)"],
      },
      colors: {
        ink:    "#111111",   // primary — near-black
        ink3:   "#3a3a3a",   // secondary — clearly visible dark grey
        mid:    "#2e2e2e",   // body text — very readable
        muted:  "#5a5a5a",   // de-emphasis — still legible
        accent: "#1a6b9a",   // blue accent
        rule:   "#d0ccc4",   // border
        lines:  "#ece9e2",   // subtle divider
      },
      animation: {
        "fade-up": "fadeUp 0.7s cubic-bezier(.22,1,.36,1) both",
      },
    },
  },
  plugins: [],
};
