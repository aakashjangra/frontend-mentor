/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        green: 'hsl(75, 94%, 57%)',
        white: 'hsl(0, 0%, 100%)',
        grey: 'hsl(0, 0%, 20%)',
        darkGrey: 'hsl(0, 0%, 12%)',
        offBlack: 'hsl(0, 0%, 8%)',
      }
    },
  },
  plugins: [],
}

