/** @type {import('tailwindcss').Config} */
import tailwindScrollbar from 'tailwind-scrollbar';
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        playfair: ['Playfair Display', 'serif'], // Tambahkan font Playfair Display
      },
    },
  },
  plugins: [
    tailwindScrollbar
  ],
};

