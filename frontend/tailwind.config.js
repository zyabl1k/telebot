/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}',
  ],
  darkMode: 'class',
  theme: {
    screens: {
      'sm': { 'max': '600px' },
      'smList2': { 'max': '1000px' },
      'smList3': { 'max': '600px' }
    },
    extend: {
      colors: {
        root: {
          violet: '#9605ca',
          violet50: '#7f05ab',
          bgDark: '#242424',
          greyDark: '#1a1a1a',
          greyLight: '#dadada',
          greyLight50: '#626262',
        },
      },
      gridTemplateColumns: {
        autoFill: 'repeat(auto-fill, minmax(250px, 1fr))',
      },
      fontFamily: {
        Ubuntu: ['Ubuntu', { fontFeatureSettings: 'kern' }],
      },
    },
  },
  plugins: [require('flowbite/plugin')],
}
