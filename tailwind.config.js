module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  plugins: [require('@tailwindcss/forms')],
  variants: {
    extend: {
      opacity: ['disabled']
    }
  }
}
