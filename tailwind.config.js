module.exports = {
  content: [
  './src/**/*.{js,ts,jsx,tsx}', // this must match where LandingPage.js lives
  ],
  darkMode: false,
  theme: {
    extend: {
      backgroundImage: {
        'sprite': "url('/icons/multiIcon.svg')",
      },
      backgroundPosition: {
        'icon-red': '0 0',
        'icon-blue': '-32px 0',
        'icon-green': '-64px 0',
      }
    },
  },
  variants: {
    extend: {
      scrollbar: ['rounded'],
    },
  },
  plugins: [
    require('tailwind-scrollbar'),
    require('@tailwindcss/typography'),

  ],
}
