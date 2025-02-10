import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "rgb(var(--background))",
        foreground: "rgb(var(--foreground))",
        primary: {
          DEFAULT: "rgb(var(--primary))",
          foreground: "rgb(var(--primary-foreground))",
        },
        secondary: "rgb(var(--secondary))",
        content: {
          DEFAULT: "rgb(var(--content))",
          foreground: "rgb(var(--content-foreground))",
        },
        "sub-text": "rgb(var(--sub-text))",
        "sub-text-2": "rgb(var(--sub-text-2))",
        "card-border": "rgb(var(--card-border))",
        success: "rgb(var(--success))",
        important: "rgb(var(--important))",
        caution: "rgb(var(--caution))",
        error: "rgb(var(--error))",
      },
    },
  },
  plugins: [],
} satisfies Config;
