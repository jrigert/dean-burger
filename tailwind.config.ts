import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    container: {
      padding: "2rem",
    },
    extend: {
      fontFamily: {
        teko: "var(--font-teko)",
        "open-sans": "var(--font-open-sans)",
      },
      colors: {
        background: "rgba(var(--color-background), <alpha-value>)",
        foreground: "rgba(var(--color-foreground), <alpha-value>)",
        primary: {
          DEFAULT: "rgba(var(--color-primary), <alpha-value>)",
          foreground: "rgba(var(--color-primary-foreground), <alpha-value>)",
        },
      },
    },
  },
  plugins: [],
};
export default config;
