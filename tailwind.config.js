/** @type {import('tailwindcss').Config} */
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
        secondary: {
          DEFAULT: "rgb(var(--secondary))",
          foreground: "rgb(var(--foreground))",
        },
        content: {
          DEFAULT: "rgb(var(--content))",
          foreground: "rgb(var(--content-foreground))",
        },
        "card-border": "rgb(var(--card-border))",
        "sub-text": "rgb(var(--sub-text))",
        "sub-text-2": "rgb(var(--sub-text-2))",
        "disclaimer-text": "rgb(var(--disclaimer-text))",
        "diamond-blue": "rgb(var(--diamond-blue))",
        "card-bg": "rgb(var(--card-bg))",
        "card-bg-2": "rgb(var(--card-bg-2))",
        success: "rgb(var(--success))",
        important: "rgb(var(--important))",
        caution: "rgb(var(--caution))",
        error: "rgb(var(--error))",
      },
    },
  },
  plugins: [
    ({ addComponents }) => {
      addComponents({
        ".diamond": {
          "@apply bg-gradient-to-r from-diamond-blue via-primary to-diamond-blue inline-block text-transparent bg-clip-text":
            {},
        },
      });
    },
    require("tailwindcss-animate"),
  ],
};
