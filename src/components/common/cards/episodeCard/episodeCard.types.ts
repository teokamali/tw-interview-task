import { TEpisode } from "@/mock/mock-series";

export interface IEpisodeCardProps extends TEpisode {
   seriesName: string;
   episode_season_number: number;
   ep_number: number;
}
