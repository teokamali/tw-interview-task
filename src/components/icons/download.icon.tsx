import { TIconComponent } from "@/types/global.types";
import { getIconSize } from "@/utils/getIconSize.util";

const DownloadIcon: TIconComponent = ({ size }) => {
   const { width, height } = getIconSize(size);
   return (
      <svg
         width={width}
         height={height}
         viewBox="0 0 24 24"
         fill="none"
         xmlns="http://www.w3.org/2000/svg"
      >
         <path
            d="M21 21H3M18 11L12 17M12 17L6 11M12 17V3"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
         />
      </svg>
   );
};

export default DownloadIcon;
