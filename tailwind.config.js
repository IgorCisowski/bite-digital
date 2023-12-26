/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        black: "#000000",
        cyan: "#0DA398",
        pink: "#F61FB7",
        text: {
          default: "#FFFFFF",
          secondary: "#C2C2C2",
        },
      },
    },
  },
  plugins: [],
};
