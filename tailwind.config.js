/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens:{
      sm:"480px",
      md:"768px",
      lg:"976px",
      xl:"1440px"
    },
    extend: {
      animation: {
        'bounce-slow': 'bounce 1.5s infinite',
      },
      colors: {
        brightGreen: 'hsl(157, 49%, 49%)'
      },
    },
  },
  plugins: [],
}