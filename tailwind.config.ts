import { type Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

export default {
  content: ["./src/stories/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      transitionTimingFunction: {
        'in-expo': 'cubic-bezier(0.95, 0.05, 0.795, 0.035)',
        'out-expo': 'cubic-bezier(0.19, 1, 0.22, 1)',
      },
      animation:{
        border: 'border 4s ease infinite',
      },
      keyframes: {
          border:{
            '0%, 100%': {backgroundPosition: '0% 50%'},
            '50%': {backgroundPosition: '100% 50%'},
          },
      },
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
