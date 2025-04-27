module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: {
        'sprite': "url('/images/icons/multiIcon.svg')",
      },
      backgroundPosition: {
        'icon-red': '0 0',
        'icon-blue': '-32px 0',
        'icon-green': '-64px 0',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
