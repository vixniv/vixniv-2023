import { type Config } from "tailwindcss";
const defaultTheme = require("tailwindcss/defaultTheme");

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-inter)", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        vblue: "#007AFF",
        vbackground: "#E5E5EA",
        vtext: "#82828D",
      },
    },
  },
  plugins: [],
} satisfies Config;
