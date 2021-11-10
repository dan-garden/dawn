module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  mode: 'jit',
  theme: {
    screens: {
      'laptop': {'max': '1535px'},
      'ltablet': {'max': '1279px'}, //sm
      'ptablet': {'max': '1023px'},//md
      'mobile': {'max': '767px'},//lg
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
