/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      manrope: ["Manrope", "sans-serif"],
      open: ['"Open Sans"', "serif"], // Ensure fonts with spaces have " " surrounding it.
    },
    extend: {},
  },
  plugins: [],
};
