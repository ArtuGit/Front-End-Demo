/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'robomo': ['"Roboto Mono"', 'monospace'],
      },
      backgroundImage: {
        'gradient-to-b': 'linear-gradient(to bottom, var(--tw-gradient-stops))',
      },
      colors: {
        'peach': '#ffeaae',
        'amber': '#ffc100',
        'flush-orange': '#ff8200',
        'red': '#ff0000',
        'karaka': '#0a0903',
        'bg-gradient-start': '#a9d6e5',
        'bg-gradient-end': '#89c2d9',
      },
    },
  },
  plugins: [],
}

