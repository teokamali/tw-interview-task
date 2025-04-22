import Button from "@/components/common/button/button";
import Description from "@/components/common/description/description";
import BookmarkIcon from "@/components/icons/bookmark.icon";
import DislikeIconOutlined from "@/components/icons/dislike-outlined.icon";
import DownloadIcon from "@/components/icons/download.icon";
import IMDBIcon from "@/components/icons/imdb.icon";
import LikeIconOutlined from "@/components/icons/like-outlined.icon";
import LikeIcon from "@/components/icons/like.icon";
import PlayIcon from "@/components/icons/play.icon";
import { useMediaQuery } from "@/hooks/useMediaQuery.hook";
import { IBaseComponentProps } from "@/types/global.types";
import { calculateDuration } from "@/utils/calculateDuration";
import clsx from "clsx";
import Image from "next/image";
import { ISeriesDetail, ISeriesHeroProps } from "./seriesHero.types";

const SeriesHero: IBaseComponentProps<ISeriesHeroProps> = ({
   IMDB_rating,
   age_restriction,
   country,
   cover,
   description,
   duration,
   hasNBClogo,
   isFinished,
   last_session_release_year,
   logo,
   persian_dub,
   release_year,
   satisfaction_rate,
   tags,
   title_en,
   title_fa,
   total_episodes,
   total_sessions,
   mobileCover,
   className,
}) => {
   const seriesDetail: ISeriesDetail[] = [
      {
         icon: <LikeIcon size={20} />,
         title: `${satisfaction_rate}%`,
      },
      {
         icon: <IMDBIcon size={[22, 20]} />,
         title: IMDB_rating,
      },
      {
         icon: null,
         title: calculateDuration(duration),
      },
      {
         icon: null,
         title: `${last_session_release_year}-${release_year} ${isFinished ? "(پایان انتشار)" : ""}`,
      },
      {
         icon: null,
         title: country.join("-"),
      },
      {
         icon: null,
         title: `${total_sessions}فصل (${total_episodes}قسمت)`,
      },
      {
         icon: null,
         title: persian_dub ? "دوبله فارسی" : null,
      },
      {
         icon: null,
         title: age_restriction,
      },
   ];

   const isMobile = useMediaQuery("md");

   return (
      <div className={clsx("SeriesHero", "h-full relative", className)}>
         {/* Cover */}
         <div className="relative z-0">
            {!isMobile ? (
               <Image
                  src={mobileCover}
                  alt={title_en}
                  width={360}
                  height={216}
                  loading="lazy"
                  className="w-full"
               />
            ) : (
               <Image
                  src={cover}
                  alt={title_en}
                  width={1440}
                  height={586}
                  loading="lazy"
                  className="w-full h-full md:max-h-[586px] aspect-video object-cover"
               />
            )}
            {/* Right Shadow */}
            <div
               className={clsx(
                  "RightShadow",
                  "hidden md:block",
                  "bg-gradient-right absolute top-0 right-0 w-full h-full max-w-[50%] z-10",
               )}
            />
            {/* Bottom Shadow */}
            <div className={clsx("BottomShadow", "bg-gradient-bottom absolute inset-0 z-10")} />
         </div>
         {/* Content */}
         <div
            className={clsx(
               "ContentWrapper",
               "w-full flex items-center justify-center text-white z-50 md:absolute md:inset-0",
            )}
         >
            <div className={clsx("Content", "w-full  max-w-[1168px] flex-col items-center gap-10 px-4 xl:px-0")}>
               <Image
                  src={logo}
                  alt={title_en}
                  width={400}
                  height={150}
                  loading="lazy"
                  className="pb-10 hidden md:block"
               />
               <div className={clsx("HeroDetail", "w-full flex flex-col pb-8")}>
                  <h1
                     className={clsx(
                        "HeroTitle",
                        "text-white font-bold text-xl leading-[28px] text-center md:text-right pb-2",
                     )}
                  >
                     {title_fa} | {title_en}
                  </h1>
                  <ul className="text-neutral-200 flex items-center justify-center md:justify-start flex-wrap md:flex-nowrap gap-x-3 gap-y-1.5 pb-2">
                     {seriesDetail.map((detail, index) => {
                        return (
                           <>
                              {detail.icon || detail.title ? (
                                 <li
                                    className={clsx(
                                       "flex items-center relative",
                                       index !== 0
                                          ? "before:w-0.5 before:h-0.5 before:bg-white before:absolute before:-right-1.5"
                                          : "",
                                    )}
                                    key={detail.title}
                                 >
                                    {detail.icon}
                                    <span className="font-medium text-xs leading-5">{detail.title}</span>
                                 </li>
                              ) : null}
                           </>
                        );
                     })}
                  </ul>
                  <ul className="flex items-center gap-1  ">
                     {tags.map((tag) => {
                        return (
                           <li
                              key={tag}
                              className={clsx("Tag", "py-0.5 px-1 bg-white/20 rounded-sm")}
                           >
                              <span className="text-xs font-medium leading-4 text-white">{tag}</span>
                           </li>
                        );
                     })}
                  </ul>
               </div>
               <div className={clsx("HeroActions", "w-full flex flex-col gap-6 md:gap-4  ")}>
                  {/* Actions */}
                  <div className="flex items-center justify-center md:justify-start flex-wrap md:flex-nowrap gap-6">
                     <Button
                        variant={"contained"}
                        color={"primary"}
                        className="flex items-center gap-2 flex-grow md:flex-grow-0 w-full md:w-fit"
                     >
                        <PlayIcon size={24} />
                        <span className="text-base font-medium">پخش</span>
                     </Button>
                     <div className="flex items-center gap-2 ">
                        <Button
                           variant={"outlined"}
                           color={"white"}
                           className="!p-2 "
                        >
                           <DownloadIcon size={24} />
                        </Button>
                        <Button
                           variant={"outlined"}
                           color={"white"}
                           className="!p-2 "
                        >
                           <BookmarkIcon size={24} />
                        </Button>
                     </div>
                     <div className="flex items-center gap-2 ">
                        <Button
                           variant={"outlined"}
                           color={"white"}
                           className="!p-2 "
                        >
                           <LikeIconOutlined size={24} />
                        </Button>
                        <Button
                           variant={"outlined"}
                           color={"white"}
                           className="!p-2 "
                        >
                           <DislikeIconOutlined size={24} />
                        </Button>
                     </div>
                  </div>
                  <div className="flex items-start justify-between w-full">
                     <Description
                        collapsable
                        wordsLimit={32}
                        className="max-w-[576px]"
                     >
                        {description}
                     </Description>
                     {hasNBClogo ? (
                        <Image
                           src={"/images/NPC.png"}
                           alt="NPC Logo"
                           width={85}
                           height={30}
                           className="mt-2 hidden md:block"
                        />
                     ) : (
                        <></>
                     )}
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};

export default SeriesHero;
