/** @type {import('tailwindcss').Config} */


module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      zIndex: {
        '1000': '1000',
      },
      backgroundImage: {
        'navbar-texture': "url('../src/assets/ball.png')",
        'cheer': "url('../src/assets/crowd.jpg')",

      }
    },
  },
  plugins: [],
}