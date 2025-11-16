/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // Tells Tailwind to scan all your React components
  ],
  theme: {
    extend: {
      fontFamily: {
        // Adds the 'Inter' font, just like in your HTML
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}