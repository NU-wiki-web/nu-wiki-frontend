/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./components/**/*.{js,vue,ts}", "./layouts/**/*.vue", "./pages/**/*.vue", "./plugins/**/*.{js,ts}", "./nuxt.config.{js,ts}", "./app.vue"],
  theme: {
    extend: {
      colors: {
        'nu-primary': '#006E4F',
        'nu-secondary': '#E8FFED',
        'nu-teritary': '#4D9595',
        'nu-quaternary': '#FFEC45',
        'nu-quinary': '#E4E7EC',
        'nu-senary': '#54657C',
        'nu-septenary': '#263959',
      }
    },
    extend: {
      colors: {
        primary: "#006E4F",
      }
    },
  },
  plugins: [],
};
