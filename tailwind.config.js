/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./containers/**/*.{js,ts,jsx,tsx}",
    "./layouts/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      black: "#000000",
      white: "#FFFFFF",
      gray1: "#333333",
      gray2: "#666666",
      gray3: "#999999",
      gray4: "#CCCCCC",
    },
    extend: {
      width: {
        normal: 250,
      },
      height: {
        normal: 250,
      },
      padding: {
        big: "10%",
        normal: "5%",
      },
      borderWidth: {
        big: 25,
        small: 5,
      },
      fontFamily: {
        light: ["Metropolis-Light"],
        regular: ["Metropolis-Regular"],
        medium: ["Metropolis-Medium"],
        semiBold: ["Metropolis-SemiBold"],
        bold: ["Metropolis-Bold"],
      },
      fontSize: {
        xs: "16px",
        sm: "21px",
        base: "36px",
        xl: "66px",
        "2xl": "96px",
      },
      fontWeight: {
        base: "Metropolis-Regular",
        "2xl": "96px",
      },
    },
  },
  plugins: [],
};
