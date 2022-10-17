/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        jade: "#1f3656",
        darkBlue: "#131637",
        bellFlower: " #4451a9",
        freefall: "#565269",
        juliet: "#b9bed3",
        snowbank: "#e9e9e9",
      },
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
      },
    },
  },
  plugins: [],
};
