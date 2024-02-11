import { type Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

export default {
  content: ["./src/stories/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    colors: {
      bgPrimary: "#0B0B0B",
    },
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)", ...fontFamily.sans],
      },
    },
  },
  plugins: [],
} satisfies Config;
