import type { Config } from "tailwindcss";

const config: Config = {
   content: [
      "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
      "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
      "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
   ],
   theme: {
      extend: {
         fontFamily: {
            YekanBakh: ["var(--font-YekanBakh)"],
         },
         colors: {
            primary: "#FD4141",
            "neutral-200": "#CBD2D9",
            "neutral-400": "#7B8794",
         },
      },
   },
   plugins: [],
};
export default config;
