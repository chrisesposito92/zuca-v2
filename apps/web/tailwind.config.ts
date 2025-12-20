import type { Config } from "tailwindcss";
import { heroui } from "@heroui/react";

// Import the existing theme from root
import themeConfig from "../../herouitheme.json";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  darkMode: "class",
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  plugins: [
    heroui({
      themes: themeConfig.themes,
      layout: themeConfig.layout,
    }) as any,
  ],
};

export default config;
