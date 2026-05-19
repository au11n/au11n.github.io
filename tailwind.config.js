/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./layouts/**/*.html",
    "./content/**/*.{md,html}",
  ],
  theme: {
    extend: {
      colors: {
        bg: { DEFAULT: "#0f172a", light: "#f8fafc" },
        sidebar: { DEFAULT: "#1e293b", light: "#e2e8f0" },
        accent: { DEFAULT: "#38bdf8", hover: "#7dd3fc" },
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
