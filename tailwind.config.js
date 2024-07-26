/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        orbitron: ['Orbitron', 'sans-serif'],
      },
      backgroundImage: {
        'custom-gradient': 'linear-gradient(to top left, red, blue)',
        'ct':'linear-gradient(to top left,#430E49,#170B36)',
      },
    },
  },
  plugins: [],
}