/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,jsx,ts,tsx}',
    './src/components/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'neon-blue': '#00f2fe',
        'dark-bg': '#0a0a0c',
      },
      animation: {
        'glow': 'glow 2s ease-in-out infinite alternate',
      },
      keyframes: {
        glow: {
          '0%': { boxShadow: '0 0 20px #00f2fe' },
          '100%': { boxShadow: '0 0 30px #00f2fe, 0 0 60px #00f2fe' },
        },
      },
    },
  },
  plugins: [],
}