/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js}"],
    theme: {
      extend: {
        colors: {
          "white": "var(--clr-white)",
          "black": "var(--clr-black)"
        }
      },
    },
    plugins: [],
  }