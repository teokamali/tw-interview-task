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
         backgroundImage: {
            "gradient-right":
               "linear-gradient(270deg, #000000 0%, rgba(0, 0, 0, 0.75) 50%, rgba(0, 0, 0, 0.5) 74.73%, rgba(0, 0, 0, 0) 100%)",
            "gradient-bottom": "linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.5) 75.04%, #000000 100%)",
            "gradient-primary-bottom": "linear-gradient(360deg, rgba(253, 65, 65, 0.2) 0%, rgba(253, 65, 65, 0) 100%)",
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
