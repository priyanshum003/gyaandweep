/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        danger: "#DA3C37",
        success: "#0F9960",
        paleSand : "#F6EBDE",
        brown : "#763D2D",
        active : "#F5F5F5"
      },
      backgroundImage: {
        'gradient-brown': 'linear-gradient(180deg, #9B4E33 0%, #763D2D 100%)',
      },
      animation: {
        'slide-in': 'slideIn 0.3s ease-in-out forwards',
        'slide-out': 'slideOut 0.3s ease-in-out forwards',
      },
      keyframes: {
        slideIn: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(0)' },
        },
        slideOut: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-100%)' },
        },
      },
    },
  },
  plugins: [],
}