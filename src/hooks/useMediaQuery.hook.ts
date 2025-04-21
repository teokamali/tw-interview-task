import { useEffect, useState } from "react";

const breakpoints = {
   xs: "(max-width: 639px)",
   sm: "(min-width: 640px)",
   md: "(min-width: 768px)",
   lg: "(min-width: 1024px)",
   xl: "(min-width: 1280px)",
   "2xl": "(min-width: 1536px)",
};

export const useMediaQuery = (query: keyof typeof breakpoints) => {
   const mediaQuery = breakpoints[query];
   const [matches, setMatches] = useState(false);

   useEffect(() => {
      const mediaQueryList = window.matchMedia(mediaQuery);
      const updateMatch = () => setMatches(mediaQueryList.matches);

      updateMatch();
      mediaQueryList.addEventListener("change", updateMatch);

      return () => {
         mediaQueryList.removeEventListener("change", updateMatch);
      };
   }, [mediaQuery]);

   return matches;
};
