import { IBaseComponentProps } from "@/types/global.types";
import { VariantProps, cva } from "class-variance-authority";
import clsx from "clsx";
import type { ButtonHTMLAttributes } from "react";

const buttonVariants = cva("flex items-center justify-center font-medium transition focus:outline-none", {
   variants: {
      variant: {
         ghost: "bg-transparent",
         text: "bg-transparent hover:underline",
         contained: "bg-white text-white hover:bg-opacity-90",
         outlined: "border-2 hover:bg-opacity-10",
         icon: "p-2 rounded-full",
      },
      color: {
         primary: "text-primary border-primary",
         secondary: "text-secondary border-secondary",
      },
   },
   defaultVariants: {
      variant: "contained",
   },
});

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
