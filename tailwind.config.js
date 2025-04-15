/** @type {import('tailwindcss').Config} */
import typography from '@tailwindcss/typography';

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    './components/**/*.{js,jsx}',
    './app/**/*.{js,jsx}',
    './pages/**/*.{js,jsx}'
  ],
  theme: {
    extend: {
      keyframes: {
        slidein: {
          from: {
            opacity: "0",
            transform: "translateY(-10px)",
          },
          to: {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
        gradient: {
          '0%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' },
        },
      },
      animation: {
        blink: 'blink 1s steps(1, start) infinite',
        slidein: "slidein 1.5s ease",
        slidein300: "slidein 1s ease 300ms",
        slidein500: "slidein 1s ease 500ms",
        slidein700: "slidein 1s ease 700ms",
        gradient: "gradient 15s ease infinite"
      },
      backgroundImage: {
        'shifting-gradient': 'linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab)',
      },
    },
    screens: {
      'sm': '360px',
      'lg': '1024px'
    }
  },
  plugins: [
    typography
  ],
}