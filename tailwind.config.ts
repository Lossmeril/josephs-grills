import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pageTemplates/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      orange: {
        DEFAULT: "#F45D2F",
      },
      red: {
        DEFAULT: "#DD2C2C",
      },
      white: "#FFFFFF",
      black: "#000000",
      mutedtext: {
        dark: "#2e2e2e",
        light: "#dedede",
      },
    },
  },
  plugins: [],
};
export default config;
