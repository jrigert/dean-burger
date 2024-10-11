import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
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
      scale: {
        "102": "1.02",
      },
    },
  },
  plugins: [],
};
export default config;
