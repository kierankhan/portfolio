/** @type {import('tailwindcss').Config} */
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
        shiftbg: {
          '0%': { backgroundPosition: '0% 50%' },
          '25%': { backgroundPosition: '50% 0%' },
          '50%': { backgroundPosition: '100% 50%' },
          '70%': { backgroundPosition: '50% 25%' },
          '100%': { backgroundPosition: '0% 50%' },
        },
      },
      animation: {
        blink: 'blink 1s steps(1, start) infinite',
        slidein: "slidein 1.5s ease",
        slidein300: "slidein 1s ease 300ms",
        slidein500: "slidein 1s ease 500ms",
        slidein700: "slidein 1s ease 700ms",
        shiftbbg: "shiftbg 20s ease infinite"
      },
    },
    screens: {
      'sm': '360px',
      'lg': '1024px'
    }
  },
  plugins: [
    require('@tailwindcss/typography')
  ],
}