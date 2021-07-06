module.exports = {
  mode: "jit",
  purge: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./layouts/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        poppins: ['"Poppins"', '"sans-serif"']

      },
      colors: {
        highlight: "#ED3C78",
        descColor: "#333333",
      }

    },
  },
  variants: {
    extend: {
      margin: ["even"],
    },
  },
  plugins: [],
};
