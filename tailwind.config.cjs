/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      white: "var(--white)",
      "header-outline": "var(--header-outline)",
      "dark-text": "var(--dark-text)",
      "score-text": "var(--score-text)",
      "light-box": "var(--light-box)",
    },
    extend: {
      backgroundImage: {
        "gradient-radial":
          "radial-gradient(var(--bg-background-from) , var(--bg-background-to))",
      },
      fontFamily: {
        barlow: ["Barlow Semi Condensed", "sans-serif"],
      },
      boxShadow: {
        "winner-shadow":
          "0 0 0 17px rgba(255, 255, 255, 0.03), 0 0 0 43px rgba(255, 255, 255, 0.02), 0 0 0 75px rgba(255, 255, 255, 0.01);",
      },
    },
  },
  plugins: [],
};
