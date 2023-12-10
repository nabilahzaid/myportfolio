/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        primary: ['Inria Serif', 'serif'], // Adds a new `font-primary` class
        secondary: ['Inter', 'sans-serif']
      },
      colors: {
        primary: {
            '50': '#effafc',
            '100': '#d7f2f6',
            '200': '#b4e5ed',
            '300': '#7fd1e1',
            '400': '#44b5cc',
            '500': '#2896af',
            '600': '#257c95',
            '700': '#24657a',
            '800': '#255365',
            '900': '#234656',
            '950': '#122d3a',
        },
        secondary: {
            '50': '#faf5f8',
            '100': '#f6edf1',
            '200': '#eedce4',
            '300': '#e2bfcf',
            '400': '#ce98af',
            '500': '#bd7794',
            '600': '#a25772',
            '700': '#8e485f',
            '800': '#763e50',
            '900': '#643745',
            '950': '#3b1c25',
        },
      }
    },
  },
  plugins: [],
}

