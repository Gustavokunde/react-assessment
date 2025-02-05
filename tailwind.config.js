/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class", // Enable dark mode
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        darkBg: "#121212",
        darkCard: "#1E1E1E",
        lightText: "#E4E4E4",
      },
    },
  },
  plugins: [],
};
