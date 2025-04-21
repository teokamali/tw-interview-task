import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/common/tabs/tabs";
import { FC } from "react";
import { ISeriesSeasonsListProps } from "./seriesSeasonsList.types";

import EpisodeCard from "@/components/common/cards/episodeCard/episodeCard";

const SeriesSeasonsList: FC<ISeriesSeasonsListProps> = ({ seasons, seriesTitle }) => {
   return (
      <Tabs
         defaultValue="1"
         className="mt-5"
         dir="rtl"
      >
         <TabsList className="">
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
            return (
               <TabsContent
                  value={season.id.toString()}
                  key={season.id}
                  className="pt-5"
               >
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 min-h-[460px]">
                     {season.episodes.map((ep, epindex) => {
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
               </TabsContent>
            );
         })}
      </Tabs>
   );
};

export default SeriesSeasonsList;
