module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        "light-blue": {
          DEFAULT: "#5ac0cc",
          100: "#9cffeb",
        },
        "yellow": {
          DEFAULT: "#dae61a",
        }
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}