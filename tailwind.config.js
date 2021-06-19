/** @type {import('@types/tailwindcss/tailwind-config').TailwindConfig} */
const defaultTheme = require("tailwindcss/defaultTheme");

const config = {
  mode: "jit",
  purge: ["./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    fontFamily: {
      ...defaultTheme.fontFamily,
      title: ["Nunito", ...defaultTheme.fontFamily.sans],
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("@tailwindcss/forms")],
};

module.exports = config;
