/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    // ...
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'
],
  darkMode: "class",
  theme: {
    extend: {},
  },
  plugins: [require('flowbite/plugin')],
}