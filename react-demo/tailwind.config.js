/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-to-b': 'linear-gradient(to bottom, var(--tw-gradient-stops))',
      },
      colors: {
        'bg-gradient-start': '#a9d6e5',
        'bg-gradient-end': '#89c2d9',
      },
    },
  },
  plugins: [],
}

