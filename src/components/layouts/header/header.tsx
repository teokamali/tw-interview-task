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
      <header className={clsx("Header", "flex items-center justify-between", className)}>
         <nav className="flex items-center gap-4">
            <Logo
               size={48}
               type="brand"
            />
            <ul className="flex items-center gap-4">
               {navigation.map((link) => (
                  <Link
                     key={link.slug}
                     href={link.slug}
                     className="text-white font-YekanBakh font-medium text-sm"
                  >
                     {link.title}
                  </Link>
               ))}
            </ul>
         </nav>
         <div className="flex items-center gap-4 text-neutral-400 pl-4">
            <Button variant={"icon"}>
               <SearchIcon size={18} />
            </Button>

            <Button
               variant={"ghost"}
               className="text-neutral-200 font-medium text-sm"
            >
               ورود / ثبت نام
            </Button>
         </div>
      </header>
   );
};

export default Header;
