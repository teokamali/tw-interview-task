import LikeIcon from "@/components/icons/like.icon";
import PlayIcon from "@/components/icons/play.icon";
import { IBaseComponentProps } from "@/types/global.types";
import { calculateViews } from "@/utils/calculateViews";
import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { IEpisodeCardProps } from "./episodeCard.types";

const EpisodeCard: IBaseComponentProps<IEpisodeCardProps> = ({
   cover,
   duration,
   episode_season_number,
   id,
   rate,
   seriesName,
   title,
   total_views,
   ep_number,
}) => {
   const { query } = useRouter();
   const { id: seriesID } = query;
   const episodeLink: string = `${seriesID}/episode/${id}`;
   return (
      <div className={clsx("EpisodeCard", "relative group")}>
         <Link href={episodeLink}>
            <div className={clsx("EpCoverImage", "pb-2.5 relative")}>
               <Image
                  src={cover}
                  alt={title}
                  width={280}
                  height={158}
                  className="w-full h-full border border-white/10 rounded-sm object-cover"
                  loading="lazy"
               />
               <div className="w-12 h-12 transition-opacity duration-200 opacity-0 text-white/90 bg-black/20 tran group-hover:opacity-100 flex items-center justify-center rounded-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                  <PlayIcon
                     size={24}
                     className=" rounded-full"
                  />
               </div>
               <div className="bg-[#10151AE5] px-1 absolute left-0.5 bottom-3 rounded-[1px] w-10 h-4 flex items-center justify-center">
                  <span className="text-[11.24px] font-medium text-white text-center leading-4">{duration}</span>
               </div>
            </div>
         </Link>

         <div className={clsx("EpContent", "")}>
            <Link href={episodeLink}>
               <div className={clsx("ContentHeader", "w-full flex items-center justify-between")}>
                  <h3 className="text-neutral-200 transition-colors duration-200 group-hover:text-white group-hover:pr-4 font-medium text-xs leading-5 text-right">
                     {title}
                  </h3>
                  <div className="flex items-center gap-0.5 text-neutral-400 group-hover:opacity-0">
                     <LikeIcon size={20} />
                     <span className="font-medium text-xs leading-5">{rate}%</span>
                  </div>
               </div>
            </Link>

            <Link
               href={`${seriesID}`}
               className="text-[11.24px] font-medium text-neutral-400 hover:text-white group-hover:pr-4 text-right align-middle leading-4"
            >
               {seriesName}
            </Link>
            <ul className="flex items-center gap-[9px]">
               <li className="text-[11.24px] font-medium text-neutral-400 text-right align-middle leading-4">
                  فصل {episode_season_number} قسمت {ep_number}
               </li>
               <li className="text-[11.24px] font-medium relative text-neutral-400 text-right align-middle leading-4 before:w-[1px] before:h-[1px] before:bg-neutral-400 before:rounded-full before:absolute before:-right-1 before:top-1/2 before:-translate-y-1/2">
                  {calculateViews(total_views)} بازدید
               </li>
            </ul>
         </div>
      </div>
   );
};

export default EpisodeCard;
