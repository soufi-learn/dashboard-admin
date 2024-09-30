/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: {
          main: "#221F3A",
          dark: "#19172C",
          light: "#2E2B4A",
        },

        light: {
          main: "#f0f4ff", // Normal color
          lighter: "#f7faff ", // Light variant
          darker: "#d9e6ff ", // Dark variant
        },

        dark: {
          main: "#221F3A",
          lighter: "#2E2B4A",
          darker: "#1A182D",
        },


        // Background colors for light and dark modes
        background: {
          light: "#f0f4ff", // White background for light mode
          dark: "#221F3A", // Dark background for dark mode
        },
      },
    },
  },
  plugins: [],
};
