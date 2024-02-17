import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: {
          500: "#1D1F20",
          800: "#111315",
          900: "#17191A",
        },
        cloud: {
          100: "#A1A0A3",
          900: "#25262A",
        },
        cyan: "#23F4F9",
        orange: {
          450: "#F97A4D",
        },

        red: {
          450: "#FF6161",
        },

        green: {
          450: "#95FFA0",
        },
      },

      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
