module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        theme: {
          primary: '#432543',
          secondary: '#6E3C6E',
          tertiary: '#4C2A4D'
        }
      },
      fontFamily: {
        'main': ['Hind Siliguri'],
        'secondary': ['Dancing Script']
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
