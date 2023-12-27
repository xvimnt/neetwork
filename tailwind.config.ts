import { type Config } from "tailwindcss";
import colors from "tailwindcss/colors";
export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    colors: {
      black: colors.black,
      white: colors.white,
      gray: colors.gray,
      red: colors.red,
      green: colors.green,
      blue: colors.blue,
      emerald: colors.emerald,
      indigo: colors.indigo,
      yellow: colors.yellow,
      primary: {
        100: "#C1E6E3",
        200: "#9FD9D5",
        300: "#7CCBC6",
        400: "#5ABEBA",
        500: "#5EAAA8", // Original color
        600: "#33988B",
        700: "#277D70",
        800: "#1B6155",
        900: "#0F463A",
      },
      accent: {
        100: "#8ED5D3",
        200: "#67C0BE",
        300: "#3FAFA8",
        400: "#1F9994",
        500: "#056676", // Original color
        600: "#04565A",
        700: "#03453D",
        800: "#023521",
        900: "#011C05",
      },
      secondary: {
        100: "#D7E6E2",
        200: "#B0CFCB",
        300: "#89B9B3",
        400: "#63A49C",
        500: "#A3D2CA", // Original color
        600: "#3D8E88",
        700: "#2E6F66",
        800: "#1F5044",
        900: "#0F3123",
      },
      tertiary: {
        100: "#F2EBE6",
        200: "#E5D7CA",
        300: "#D9C2AD",
        400: "#CCAE91",
        500: "#E8DED2", // Original color
        600: "#B9B2A8",
        700: "#8A876E",
        800: "#5B5D44",
        900: "#2C2E1A",
      },
    },
    extend: {
      screens: {
        "3xl": "1920px",
      },
    },
  },
  plugins: [],
} satisfies Config;
