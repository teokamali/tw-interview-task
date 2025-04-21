import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import type { ILogoProps } from "./logo.types";

const Logo = ({ size, type }: ILogoProps) => {
   const width = Array.isArray(size) ? size[0] : size;
   const height = Array.isArray(size) ? size[1] : size;

   const getLogoSrc = () => {
      switch (type) {
         case "brand":
            return "/images/logo/logo-brand.svg";

         case "white":
            return "/images/logo/logo-white.svg";
         default:
            return "/images/logo/logo-brand.svg";
      }
   };

   return (
      <div className={clsx("Logo", `w-[${width}px] h-[${height}px]`)}>
         <Link href={"/"}>
            <Image
               src={getLogoSrc()}
               alt="TW Logo"
               width={width}
               height={height}
            />
         </Link>
      </div>
   );
};

export default Logo;
