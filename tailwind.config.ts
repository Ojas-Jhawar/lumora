import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // Base
        paper: "#FBFCFE",
        ink: "#0F1B2D", // deep navy — primary text & wordmark
        slate: {
          DEFAULT: "#445066",
          soft: "#6B7690",
          line: "#E4E8F0", // hairlines / borders
        },
        // Accents — each accent maps to a part of the product, not decoration
        mint: {
          DEFAULT: "#2FBF9F", // learn / explore
          deep: "#1F9D82",
          tint: "#E4F7F2",
        },
        lavender: {
          DEFAULT: "#7C83FD", // community / share
          deep: "#5E65E0",
          tint: "#EEEEFF",
        },
        amber: {
          DEFAULT: "#FF9F45", // act / take action CTAs
          deep: "#E67E1F",
          tint: "#FFF1E2",
        },
      },
      fontFamily: {
        display: ["var(--font-fraunces)", "ui-serif", "Georgia", "serif"],
        sans: ["var(--font-manrope)", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      borderRadius: {
        xs: "8px",
        sm: "12px",
        md: "16px",
        lg: "24px",
        xl: "32px",
        full: "999px",
      },
      boxShadow: {
        soft: "0 1px 2px rgba(15,27,45,0.04), 0 8px 24px -8px rgba(15,27,45,0.10)",
        lift: "0 4px 8px rgba(15,27,45,0.06), 0 16px 40px -12px rgba(15,27,45,0.16)",
      },
      maxWidth: {
        content: "1280px",
        prose: "68ch",
      },
      spacing: {
        "4.5": "1.125rem",
        "13": "3.25rem",
      },
    },
  },
  plugins: [],
};

export default config;
