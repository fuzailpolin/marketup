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
        poppins: ['"Poppins"', '"sans-serif"'],
        mons: ['Montserrat', 'sans-serif']

      },
      colors: {
        primary: "#ED3C78",
        secondary: "#333333",
      },
      height: {
        '30vh': '30vh',
        '70vh': '70vh',
        '25vh': '25vh'
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
