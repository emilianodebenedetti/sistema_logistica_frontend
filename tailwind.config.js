/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        darkGreen: '#426B1F',
        beige: '#FAFAF5'
      }
    },
  },
  plugins: [require('flowbite/plugin')],
};
