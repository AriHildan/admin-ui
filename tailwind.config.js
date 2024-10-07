/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
    theme: {
      colors: {
        primary: "#299D91"
      },
      extend: {
        fontFamily: {
          body: ['Teko'],
          teko: ['Teko']
        }
      },
    },
  plugins: [],
}

