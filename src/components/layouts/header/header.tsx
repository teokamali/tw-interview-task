import Button from "@/components/common/button/button";
import Logo from "@/components/common/logo/logo";
import SearchIcon from "@/components/icons/search.icon";
import { IBaseComponentProps } from "@/types/global.types";
import clsx from "clsx";
import Link from "next/link";
import type { INavigation } from "./header.types";

const Header: IBaseComponentProps = ({ className }) => {
   const navigation: INavigation[] = [
      {
         title: "پخش زنده",
         slug: "/live",
      },
      {
         title: "قیلم و سریال",
         slug: "/movies",
      },
      {
         title: "کودک",
         slug: "/kids",
      },
      {
         title: "ورزش",
         slug: "/sport",
      },
      {
         title: "آرشیو محتوایی",
         slug: "/archive",
      },
   ];

   return (
      <header
         className={clsx(
            "Header",
            "flex items-center justify-between bg-[#10151AE5] border-b border-white/5",
            className,
         )}
      >
         <nav className="flex items-stretch gap-4">
            <Logo
               size={48}
               type="brand"
            />
            <ul className="flex items-center gap-4 ">
               {navigation.map((link) => (
                  <li
                     key={link.slug}
                     className="px-2 h-full relative before:transition-all before:duration-200 before:absolute before:left-0 before:right-0 before:bottom-0 before:z-10 before:w-full before:h-[1px] before:scale-x-0 before:bg-white hover:before:scale-x-100 origin-center "
                  >
                     <Link
                        href={link.slug}
                        className="h-full flex items-center justify-center  text-white font-YekanBakh font-medium text-sm "
                     >
                        {link.title}
                     </Link>
                  </li>
               ))}
            </ul>
         </nav>
         <div className="flex items-center text-neutral-400  pl-4">
            <Button
               variant={"icon"}
               className="hover:text-white"
            >
               <SearchIcon size={18} />
            </Button>

            <Button
               variant={"ghost"}
               className="text-neutral-200 hover:text-white font-medium text-sm"
            >
               ورود / ثبت نام
            </Button>
         </div>
      </header>
   );
};

export default Header;
