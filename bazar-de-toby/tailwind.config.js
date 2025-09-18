/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",                 
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: { DEFAULT: "#FACC15", 500: "#FACC15", 600: "#EAB308" },
        text: "#111827",
      },
      boxShadow: {
        soft: "0 10px 25px rgba(0,0,0,0.06)",
      },
    },
  },
  plugins: [],
}
