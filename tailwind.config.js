/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontSize: {
        sm: "22px",
        md: "26px",
        lg: "32px",
        h1: "120px",
        h3: "60px",
      },
      colors: {
        black: "#000000",
        cyan: "#0DA398",
        pink: "#FE1BB9",
        primary: "#FFFFFF",
        secondary: "#C2C2C2",
      },
      spacing: {
        "24px": "24px",
        "42px": "42px",
        "50px": "50px",
      },
    },
  },
  plugins: [],
};
