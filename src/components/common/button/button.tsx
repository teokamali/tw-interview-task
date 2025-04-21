import { IBaseComponentProps } from "@/types/global.types";
import { VariantProps, cva } from "class-variance-authority";
import clsx from "clsx";
import type { ButtonHTMLAttributes } from "react";

const buttonVariants = cva(
   "flex items-center justify-center font-medium transition focus:outline-none p-3 rounded-sm transition-all duration-200",
   {
      variants: {
         variant: {
            ghost: "bg-transparent",
            text: "bg-transparent hover:underline !p-0",
            contained: "bg-white text-white hover:!bg-opacity-60",
            outlined: "border bg-white bg-opacity-0 hover:!bg-opacity-10",
            icon: "p-2 rounded-full",
         },
         color: {
            primary: "!bg-primary text-white border-primary ",
            secondary: "text-secondary border-secondary",
            white: "border-neutral-400",
         },
      },
      defaultVariants: {
         variant: "contained",
      },
   },
);

const Button: IBaseComponentProps<
   Omit<ButtonHTMLAttributes<HTMLButtonElement>, "color"> & VariantProps<typeof buttonVariants>
> = ({ children, variant, color, className, ...props }) => {
   return (
      <button
         className={clsx(buttonVariants({ variant, color }), className)}
         {...props}
      >
         {children}
      </button>
   );
};

export default Button;
