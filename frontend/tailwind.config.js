/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        midnight: "#121063",
        space: "#505150",
        offblack: "#313639",
      },
    },
  },
  plugins: [],
};
