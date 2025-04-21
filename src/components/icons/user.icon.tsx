import { TIconComponent } from "@/types/global.types";

const UserIcon: TIconComponent = ({ size, className }) => {
   return (
      <svg
         width={size}
         height={size}
         viewBox="0 0 24 32"
         fill="none"
         xmlns="http://www.w3.org/2000/svg"
      >
         <path
            d="M3 24C5.33579 21.5226 8.50702 20 12 20C15.493 20 18.6642 21.5226 21 24M16.5 11.5C16.5 13.9853 14.4853 16 12 16C9.51472 16 7.5 13.9853 7.5 11.5C7.5 9.01472 9.51472 7 12 7C14.4853 7 16.5 9.01472 16.5 11.5Z"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
         />
      </svg>
   );
};

export default UserIcon;
