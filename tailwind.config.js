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
      "xl": "1024px",
      "2xl": "1280px",
      "3xl": "1440px",
      "4xl": "1680px",
    },
    colors: {
      primary: "#17141A",
      secondary: "#FFC672",
      secondaryHover: "rgba(0,0,0,0.64)",
      gold: "#EFDE8A",
      "gold-light": "rgba(239, 222, 138, 0.60)",
      beige: "#f4ecb5",
      "beige-light": "rgba(244, 236, 181, 0.10)",
      brown: "#453E34",
      black: "#1A161A",
      white: "#fff",
      "white-dark": "rgba(255, 255, 255, 0.8)",
      "white-extra-dark": "rgba(255, 255, 255, 0.08)",
      orange: "#ff7849",
      "gray-dark": "#606068",
      gray: "#D7D7D7",
      "gray-light": "#EFDE8A",
    },
    fontFamily: {
      sans: ["Rajdhani","sans-serif"],
      serif: ["Rajdhani","serif"],
      title: ["GT-Pantheon-Display-Regular-Trial", "sans-serif"],
      text: ["GT-Pantheon-Text-Regular-Trial", "sans-serif"]
    },
    fontSize: {
      "2xs": "14px",
      xs: "16px",
      "0xs": "18px",
      sm: "20px",
      base: "24px",
      xl: "28px",
      "2xl": "32px",
      "3xl": "48px",
      "4xl": "72px",
      "5xl": "83px",
    },
    extend: {
      spacing: {
        128: "32rem",
        144: "36rem",
      },
      borderRadius: {
        "4xl": "2rem",
      },
      backgroundImage: {
        "custom-gradient": "linear-gradient(180deg, #1A1619 0%, #2A232D 100%)",
        "custom-radial":
          "radial-gradient(50% 50% at 50% 50%, rgba(101, 78, 28, 0.25) 0%, rgba(244, 236, 181, 0) 100%)",
      },
      filter: {
        blur: "blur(150px)",
      },
      blur: {
        '24': '24px', // Add custom blur value
      },
      opacity: {
        80: "0.8",
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar'),
  ],
};
