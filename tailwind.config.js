/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class", // Enables class-based dark mode
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"], // Ensure paths are correct
  theme: {
    extend: {
      colors: {
        primary: {
          light: "#6366F1", // Light mode primary color
          dark: "#4F46E5", // Dark mode primary color
        },
        background: {
          light: "#FFFFFF", // Light mode background
          dark: "#1A202C", // Dark mode background
        },
      },
    },
  },
  plugins: [
    require("@tailwindcss/forms"), // Optional: Enhance form styling
    require("@tailwindcss/typography"), // Optional: Improve text styling
  ],
};
