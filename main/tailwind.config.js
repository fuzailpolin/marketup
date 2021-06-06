module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: "class", // or 'media' or 'class'
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
      textColor: ["active"],
    },
  },
  plugins: [],
};
