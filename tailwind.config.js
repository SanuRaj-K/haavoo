/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        openSans: ["'Open Sans'", "sans-serif"],
        oleo: ["'Oleo Script Swash Caps'", "cursive"],
      },
    },
  },
  plugins: [],
};
