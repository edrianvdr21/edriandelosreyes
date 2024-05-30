/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './resources/**/*.html',
  './resources/**/*.blade.php',
  './resources/**/*.js',
  ],
  theme: {
    extend: {
      colors: {
        dark: "#090E34",
        "dark-700": "#090e34b3",
        primary: "#482674",
        secondary: "#13C296",
        "body-color": "#637381",
        warning: "#F9C107",
        danger: "#DC3545",
        success: "#3CA745",
        info: "#3BA2B8",
        light: "#efefef",
        "form-stroke": "#E0E0E0",
        "tg-bg": "#f7f8fa",
        black: "#212B36",
      },
    },
  },
  plugins: [],
}

