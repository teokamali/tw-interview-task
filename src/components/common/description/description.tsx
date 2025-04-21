import { IBaseComponentProps } from "@/types/global.types";
import { useState } from "react";
import Button from "../button/button";
import { IDescriptionProps } from "./description.types";

const Description: IBaseComponentProps<IDescriptionProps> = ({
   children,
   className,
   wordsLimit = 12,
   collapsable = false,
}) => {
   const [collapsed, setCollapsed] = useState<boolean>(collapsable);

   const toggleCollapse = () => {
      setCollapsed((prev) => !prev);
   };

   const limitedContent =
      typeof children === "string" ? `${children.split(" ").slice(0, wordsLimit).join(" ")}...` : children;

   return (
      <div className={className}>
         <p className="inline font-medium text-base">{collapsable && collapsed ? limitedContent : children}</p>
         {collapsable && (
            <Button
               onClick={toggleCollapse}
               variant={"text"}
               className="!inline text-base font-bold"
            >
               {collapsed ? "نمایش بیشتر" : "نمایش کمتر"}
            </Button>
         )}
      </div>
   );
};

export default Description;
