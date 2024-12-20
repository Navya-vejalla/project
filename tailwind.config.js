/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class", // Enables class-based dark mode
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"], // Ensure paths are correct
  theme: {
    extend: {
      colors: {
        lightBg: "rgb(161, 125, 54)", // Biscuit-like color for light mode
        darkBg: "rgb(35, 145, 81)", // Neutral dark color for dark mode
      },
    },
  },
  plugins: [
    require("@tailwindcss/forms"), // Optional: Enhance form styling
    require("@tailwindcss/typography"), // Optional: Improve text styling
  ],
};
