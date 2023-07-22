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
        vbluehover: "#0066D6",
        vbackground: "#E5E5EA",
        vbackgroundhover: "#D7D7DE",
        vtext: "#82828D",
      },
    },
  },
  plugins: [],
} satisfies Config;
