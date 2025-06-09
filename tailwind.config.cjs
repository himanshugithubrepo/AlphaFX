/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        heading:['Poppins', 'sans-serif'],
        body: ['Montserrat', 'sans-serif'],
        ui: ['Space Grotesk', 'sans-serif'],
      },
      colors: {
        bgDark: '#0D0D0D',
        textPrimary: '#ffffff',
        textMuted: '#cccccc',
        accentRed: '#E50914',    // Netflix red
        accentNeon: '#1ED760',   // Neon green
        borderGray: '#444444',
        cardBg: '#1a1a1a',
      },
      boxShadow: {
        vfx: '0 2px 6px rgba(0, 0, 0, 0.4)',
      },
      letterSpacing: {
        widestPlus: '0.2em',
      },
    },
  },
  plugins: [require('tailwind-scrollbar'),],
};
