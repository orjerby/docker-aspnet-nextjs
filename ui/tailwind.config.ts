import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  presets: [require("./clamp.config")],
  theme: {
    rem: {
      divider: "16",
    },
    clampFontSizeList: {
      16: "16px",
      20: "20px",
      22: "22px",
      24: "24px",
    },
    clampSpacingList: {
      5: "5px",
      10: "10px",
      15: "15px",
      20: "20px",
      30: "30px",
    },
    extend: {
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
