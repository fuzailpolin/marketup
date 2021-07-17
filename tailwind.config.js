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
        mons: ['Montserrat', 'sans-serif'],
        typoSlab: ['TypoSlab_irregular', 'sans-serif']
      },
      colors: {
        primary: "#ED3C78",
        secondary: "#333333",
        jobsBorder: "#707070",
        dark: '#202020',
        sectionBG: "rgba(32, 32, 32, 0.12)"
      },
      height: {
        '30vh': '30vh',
        '60vh': '60vh',
        '70vh': '70vh',
        '25vh': '25vh',
        '75vh': '75vh',
        '80vh': '80vh'
      }
    },
  },
  variants: {
    extend: {
      margin: ["even"],
      transitionProperty: ['hover']
    },
  },
  plugins: [],
};
