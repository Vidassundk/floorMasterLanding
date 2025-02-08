import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/features/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        gulvGreen: "var(--gulvGreen)",
        white: "var(--white)",
        sand: "var(--sand)",
        brown: "var(--brown)",
      },
      fontFamily: {
        helvetica: ["Helvetica", "Arial", "sans-serif"],
      },

      screens: {
        xs: "430px",
      },
    },
  },
  important: true,
  plugins: [
    function ({
      addUtilities,
    }: {
      addUtilities: (utilities: Record<string, any>) => void;
    }) {
      addUtilities({
        ".scrollbar-hide": {
          /* Hide scrollbar for WebKit browsers */
          "-ms-overflow-style": "none", // IE and Edge
          "scrollbar-width": "none", // Firefox
          "&::-webkit-scrollbar": {
            display: "none", // Chrome, Safari, and Opera
          },
        },
      });
    },
  ],
} satisfies Config;
