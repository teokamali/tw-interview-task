import type { IBaseComponentProps } from "@/types/global.types";
import localFont from "next/font/local";

const YekanBakhFont = localFont({
   src: [
      {
         path: "../assets/fonts/woff/YekanBakhFaNum-Thin.woff",
         weight: "100",
         style: "normal",
      },
      {
         path: "../assets/fonts/woff/YekanBakhFaNum-Light.woff",
         weight: "300",
         style: "normal",
      },
      {
         path: "../assets/fonts/woff/YekanBakhFaNum-Regular.woff",
         weight: "normal",
         style: "normal",
      },
      {
         path: "../assets/fonts/woff/YekanBakhFaNum-Regular.woff",
         weight: "500",
         style: "normal",
      },
      {
         path: "../assets/fonts/woff/YekanBakhFaNum-SemiBold.woff",
         weight: "600",
         style: "normal",
      },
      {
         path: "../assets/fonts/woff/YekanBakhFaNum-Bold.woff",
         weight: "bold",
         style: "normal",
      },
      {
         path: "../assets/fonts/woff/YekanBakhFaNum-ExtraBold.woff",
         weight: "800",
         style: "normal",
      },
      {
         path: "../assets/fonts/woff/YekanBakhFaNum-Black.woff",
         weight: "900",
         style: "normal",
      },
      {
         path: "../assets/fonts/woff/YekanBakhFaNum-ExtraBlack.woff",
         weight: "950",
         style: "normal",
      },
   ],
   variable: "--font-YekanBakh",
});
const FontsProvider: IBaseComponentProps = ({ children }) => {
   return <div className={`${YekanBakhFont.variable}`}>{children}</div>;
};

export default FontsProvider;
