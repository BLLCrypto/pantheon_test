import plugin from "tailwindcss";

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Include all JS, JSX, TS, and TSX files in src folder
  ],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    colors: {
      primary: "#17141A",
      secondary: "#FFC672",
      secondaryHover: "rgba(0,0,0,0.64)",
      gold: "#EFDE8A",
      blue: "#1fb6ff",
      black: "black",
      white: "#fff",
      purple: "#7e5bef",
      pink: "#ff49db",
      orange: "#ff7849",
      green: "#13ce66",
      yellow: "#ffc82c",
      "gray-dark": "#606068",
      gray: "#D7D7D7",
      "gray-light": "#EFDE8A",
    },
    fontFamily: {
      sans: ["Rajdhani", "sans-serif"],
      serif: ["Rajdhani", "serif"],
    },
    fontSize: {
      xs: "16px",
      sm: "20px",
      base: "24px",
      xl: "28px",
      "2xl": "1.563rem",
      "3xl": "1.953rem",
      "4xl": "2.441rem",
      "5xl": "3.052rem",
    },
    extend: {
      spacing: {
        128: "32rem",
        144: "36rem",
      },
      borderRadius: {
        "4xl": "2rem",
      },
    },
  },
  plugins: [],
};
