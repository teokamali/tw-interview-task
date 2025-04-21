import Button from "@/components/common/button/button";
import Logo from "@/components/common/logo/logo";
import ChevronRight from "@/components/icons/chevron-right.icon";
import UserIcon from "@/components/icons/user.icon";
import clsx from "clsx";

const MobileHeader = () => {
   return (
      <header className={clsx("MobileHeader", "flex items-center justify-between")}>
         <Button
            variant={"icon"}
            className="text-neutral-200"
         >
            <ChevronRight size={24} />
         </Button>
         <Logo
            size={56}
            type="white"
         />
         <Button
            variant={"icon"}
            className="text-neutral-200"
         >
            <UserIcon size={32} />
         </Button>
      </header>
   );
};

export default MobileHeader;
