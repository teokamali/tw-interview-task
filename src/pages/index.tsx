import Button from "@/components/common/button/button";
import Link from "next/link";

export default function Home() {
   return (
      <div className="min-h-screen flex items-center justify-center">
         <Link
            href={"/series/hunnibal"}
            className="font-medium"
         >
            <Button
               variant={"contained"}
               color={"primary"}
            >
               رفتن به صفحه اطلاعات سریال
            </Button>
         </Link>
      </div>
   );
}
