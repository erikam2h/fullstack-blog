/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: ["light", "dark", "valentine", "dracula", "cmyk", "sunset"],
  },
  plugins: [require("daisyui")],
};
