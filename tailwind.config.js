/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'brand-orange': '#FF5C35',
        'brand-navy': '#131354',
        'brand-navy-dark': '#0F0F3D',
        'brand-blue': '#2828C6',
        'bg-light': '#F0F4F8',
        'gray-light': '#D9D9D9',
        'gray-medium': '#CCCCCC',
      },
      fontFamily: {
        rajdhani: ['Rajdhani', 'sans-serif'],
        outfit: ['Outfit', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
