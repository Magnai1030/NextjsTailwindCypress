/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./containers/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      black: "#000000",
      white: "#FFFFFF",
      salmon: "#cccccc"
    },
    extend: {
      width: {
        normal: 250,
      },
      height: {
        normal: 250,
      },
    },
  },
  plugins: [],
};
