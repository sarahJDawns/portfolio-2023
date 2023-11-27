const plugin = require("tailwindcss/plugin");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  darkMode: "class",
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "2rem",
        lg: "4rem",
        xl: "5rem",
        "2xl": "6rem",
      },
    },
    colors: {
      background: "#ecfee8",
      accent: "#bccbb9",
      text: "#2b3012",
      secondtext: "#4d5620",
      accent1: "#dff1db",
      accent2: "#d62828",
    },
    fontFamily: {
      body: ["Ubuntu", "sans-serif"],
      heading: ["Ubuntu", "sans-serif"],
    },
  },
  plugins: [],
};
