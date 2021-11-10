module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  mode: 'jit',
  theme: {
    screens: {
      'laptop': {'max': '1535px'}, //sm
      'ltablet': {'max': '1279px'}, //md
      'ptablet': {'max': '1023px'}, //lg
      'mobile': {'max': '767px'},
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
