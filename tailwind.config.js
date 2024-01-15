/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        black: "#000000",
        graphit: "#767676",
        darkGray: "#2C2C2C",
        cyan: "#0DA398",
        pink: "#FE1BB9",
        primary: "#FFFFFF",
        secondary: "#C2C2C2",
      },
      spacing: {
        "24px": "24px",
        "42px": "42px",
        "50px": "50px",
        "1580px": "1580px",
        "1920px": "1920px",
      },
    },
  },
  plugins: [],
};
