/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['"Poppins"', "sans-serif"],
      },
      colors: {
        gray: {
          900: "#1a1a1a",
          800: "#333333",
          700: "#4d4d4d",
          600: "#666666",
          500: "#808080",
          400: "#999999",
          300: "#b3b3b3",
          200: "#cccccc",
          100: "#e5e5e5",
          50: "#f2f2f2",
        },
        branding: {
          "success-bright": "#84d187",
          "success": "#00b207",
          "success-dark": "#2c742f",
          "warning": "#ff8a00",
          "error": "#ea4b48"
        }
      }
    },
  },
  plugins: [],
}

