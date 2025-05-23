import type { TIconComponent } from "@/types/global.types";
import { getIconSize } from "@/utils/getIconSize.util";

const SearchIcon: TIconComponent = ({ size, className }) => {
   const { height, width } = getIconSize(size);

   return (
      <svg
         width={width}
         height={height}
         viewBox="0 0 20 20"
         fill="none"
         xmlns="http://www.w3.org/2000/svg"
      >
         <path
            d="M19 19L14.65 14.65M17 9C17 13.4183 13.4183 17 9 17C4.58172 17 1 13.4183 1 9C1 4.58172 4.58172 1 9 1C13.4183 1 17 4.58172 17 9Z"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
         />
      </svg>
   );
};

export default SearchIcon;
