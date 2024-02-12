import { type Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

export default {
  content: ["./src/stories/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)", ...fontFamily.sans],
        SFProDisplay: ["SF Pro Display", ...fontFamily.sans],
      },
      colors: {
        bgPrimary: "#0B0B0B",
      },
    },
  },
  plugins: [],
} satisfies Config;
