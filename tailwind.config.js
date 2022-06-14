/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        rubik: ['Rubik', 'sans-serif'],
        dmsans: ['DM Sans', 'sans-serif'],
        manrope: ['Manrope', 'sans-serif']
      },
    },
  },
  plugins: [],
}