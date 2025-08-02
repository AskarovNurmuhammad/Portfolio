/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      animation: {
        swing: "swing 0.8s ease-in-out",
      },
      keyframes: {
        swing: {
          "0%": { transform: "rotate(0deg)" },
          "25%": { transform: "rotate(35deg)" },
          "50%": { transform: "rotate(-35deg)" },
          "75%": { transform: "rotate(10deg)" },
          "100%": { transform: "rotate(0deg)" },
        },
      },
    },
  },
  plugins: [],
};
