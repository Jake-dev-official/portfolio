/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#3b82f6', // Example: blue-500
        secondary: '#8b5cf6', // Example: violet-500
      }
    },
  },
  plugins: [],
}
