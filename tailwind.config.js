/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#E11D48',
          foreground: '#FFFFFF',
        },
        secondary: {
          DEFAULT: '#4F46E5',
          foreground: '#FFFFFF',
        },
      },
    },
  },
  plugins: [],
};