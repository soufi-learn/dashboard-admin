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

        secondary: "#1BA9E9",

        light: {
          main: "#f0f4ff",
          lighter: "#f7faff ",
          darker: "#d9e6ff ",
        },

        dark: {
          main: "#221F3A",
          lighter: "#2E2B4A",
          darker: "#1A182D",
        },

        // Background colors for light and dark modes
        background: {
          light: "#f0f4ff",
          dark: "#221F3A",
        },
      },
    },
  },
  plugins: [],
};
