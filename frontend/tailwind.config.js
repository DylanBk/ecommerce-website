/** @type {import('tailwindcss').Config} */
const colors = require('./styles/colors');

module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        ...colors,
      }
    },
  },
  plugins: [],
}

