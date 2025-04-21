import { useMediaQuery } from "@/hooks/useMediaQuery.hook";
import type { IBaseComponentProps } from "@/types/global.types";
import Header from "../header/header";
import MobileHeader from "../mobileHeader/mobileHeader";

const MainLayout: IBaseComponentProps = ({ children }) => {
   const isSm = useMediaQuery("sm");
   const isXs = useMediaQuery("xs");
   return (
      <div className="font-YekanBakh bg-black">
         {isSm ? <Header /> : <> </>}
         {isXs ? <MobileHeader /> : <> </>}

         {children}
      </div>
   );
};

export default MainLayout;
