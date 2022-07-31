/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx}", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        fancy: ["M PLUS Rounded 1c"],
      },
    },
  },
  theme: {
    extend: {},
  },
  plugins: [require("@tailwindcss/forms")],
};
