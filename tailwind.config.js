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
        green12: '#426B1F' // choose your hex
      }
    },
  },
  plugins: [require('flowbite/plugin')],
};
