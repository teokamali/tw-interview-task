import Link from "next/link";

export default function Home() {
   return (
      <div className="min-h-screen">
         <Link
            href={"/series/hunnibal"}
            className="text-neutral-300 hover:underline "
         >
            Navigate to Hunnibal Series Page
         </Link>
      </div>
   );
}
