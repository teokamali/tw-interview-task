import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/common/tabs/tabs";
import { FC, memo, useState } from "react";
import { ISeriesSeasonsListProps } from "./seriesSeasonsList.types";

import Button from "@/components/common/button/button";
import EpisodeCard from "@/components/common/cards/episodeCard/episodeCard";

const SeriesSeasonsList: FC<ISeriesSeasonsListProps> = ({ seasons, seriesTitle }) => {
   const [page, setPage] = useState(1);
   const PER_PAGE = 8;
   const loadMoreEpisodes = () => {
      setPage((prevPage) => prevPage + 1);
   };
   return (
      <Tabs
         defaultValue="1"
         className="mt-5"
         dir="rtl"
      >
         <TabsList>
            {seasons.map((season, index) => {
               return (
                  <TabsTrigger
                     value={season.id.toString()}
                     key={season.id}
                  >
                     فصل {index + 1}
                  </TabsTrigger>
               );
            })}
         </TabsList>
         {seasons.map((season, sindex) => {
            const currentSeason = sindex + 1;

            const episodes =
               season.episodes.length > PER_PAGE ? season.episodes.slice(0, PER_PAGE * page) : season.episodes;
            return (
               <TabsContent
                  value={season.id.toString()}
                  key={season.id}
                  className="pt-5"
               >
                  <div className="flex flex-col items-center gap-8">
                     <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 min-h-[460px]">
                        {episodes.map((ep, epindex) => {
                           return (
                              <EpisodeCard
                                 episode_season_number={currentSeason}
                                 seriesName={seriesTitle}
                                 ep_number={epindex + 1}
                                 {...ep}
                                 key={ep.id}
                              />
                           );
                        })}
                     </div>
                     {PER_PAGE * page <= season.episodes.length ? (
                        <Button
                           variant={"outlined"}
                           color={"white"}
                           onClick={loadMoreEpisodes}
                           className="px-4 py-2.5 text-sm "
                        >
                           مشاهده بیشتر
                        </Button>
                     ) : (
                        <></>
                     )}
                  </div>
               </TabsContent>
            );
         })}
      </Tabs>
   );
};

export default memo(SeriesSeasonsList);
