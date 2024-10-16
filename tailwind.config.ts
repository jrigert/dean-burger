import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
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
        card: "rgba(var(--color-card), <alpha-value>)",
        charcoal: "rgba(var(--color-charcoal), <alpha-value>)",
        container: "rgba(var(--color-container), <alpha-value>)",
        "foreground-dark": "rgba(var(--color-foreground-dark), <alpha-value>)",
        primary: {
          DEFAULT: "rgba(var(--color-primary), <alpha-value>)",
          foreground: "rgba(var(--color-primary-foreground), <alpha-value>)",
        },
        success: {
          DEFAULT: "rgba(var(--color-success), <alpha-value>)",
          foreground: "rgba(var(--color-success-foreground), <alpha-value>)",
        },
        danger: {
          DEFAULT: "rgba(var(--color-danger), <alpha-value>)",
          foreground: "rgba(var(--color-danger-foreground), <alpha-value>)",
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
