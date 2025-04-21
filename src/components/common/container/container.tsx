import { IBaseComponentProps } from "@/types/global.types";
import { cva } from "class-variance-authority";
import clsx from "clsx";
import { IContainerProps } from "./container.types";

const Container: IBaseComponentProps<IContainerProps> = ({ children, maxWidth = "lg", noPadding = false }) => {
   const containerClasses = cva(`mx-auto ${noPadding ? "" : "px-4 "}`, {
      variants: {
         maxWidth: {
            lg: "max-w-[1168px] xl:px-0",
         },
      },
      defaultVariants: {
         maxWidth: "lg",
      },
   });
   return <div className={clsx(containerClasses({ maxWidth }))}>{children}</div>;
};

export default Container;
