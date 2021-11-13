module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    colors: {
      primary: {
        DEFAULT: "#e07a5f",
        light: "#f2cc8f",
      },
      secondary: "#81b29a",
      accent: {
        DEFAULT: "#f4f1de",
        dark: "#3d405b",
      },
    },
    fontFamily: {
      sans: ["Roboto", "ui-sans-serif"],
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
