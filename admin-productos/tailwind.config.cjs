/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts}"],
  theme: {
    extend: {
      colors: {
        dark: "#121212",
        yellowAccent: "#facc15",
      },
      boxShadow: {
        glow: "0 4px 20px rgba(250, 204, 21, 0.4)",
      },
    },
  },
  plugins: [],
};
