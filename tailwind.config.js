/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  content: [
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    colors: {
      'beige': '#D9C8BF',
      'marroncino': 'F2E3D5',
      'grigio': '5C5C5C',
    },
    extend: {},
  },
  plugins: [
    require('flowbite/plugin')
  ],
}
