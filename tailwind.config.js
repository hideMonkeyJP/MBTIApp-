/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      animation: {
        'gradient-x': 'gradient-x 15s ease infinite',
        'float': 'float 3s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite',
        'rotate': 'rotate 20s linear infinite',
        'fade-in': 'fadeIn 0.6s ease-out forwards',
        'pulse': 'pulse 2s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};