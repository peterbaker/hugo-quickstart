/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["content/**/*.md", "layouts/**/*.html"],
  theme: {
    extend: {},
    fontFamily: {
      sans: ['Playfair Display', 'sans-serif'],
      serif: ['Playfair Display', 'serif'],
    },
  },
  plugins: [],
};