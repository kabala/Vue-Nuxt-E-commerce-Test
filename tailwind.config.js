const colors = require('tailwindcss/colors')

module.exports = {
  mode: 'jit',
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      transparent: 'transparent',
      primary: {
        DEFAULT: '#2E0040',
        50: '#B600E1',
        100: '#A500CF',
        200: '#8500AB',
        300: '#670087',
        400: '#4A0064',
        500: '#2E0040',
        600: '#220031',
        700: '#170021',
        800: '#0C0012',
        900: '#020003',
      },
      secondary: {
        DEFAULT: '#30A100',
        50: '#B3E600',
        100: '#A1DE00',
        200: '#80CF00',
        300: '#62C000',
        400: '#47B000',
        500: '#30A100',
        600: '#1C9200',
        700: '#0B8200',
        800: '#007303',
        900: '#00640D',
      },
      lightSecondary: '#f1f3e6',
      white: colors.white,
      black: colors.black,
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
