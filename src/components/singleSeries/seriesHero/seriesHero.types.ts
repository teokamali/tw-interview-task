import { TSeries } from "@/mock/mock-series";
import { ReactElement } from "react";

export interface ISeriesHeroProps extends Omit<TSeries, "id" | "seasons" | "children"> {}
export interface ISeriesDetail {
   icon: ReactElement | null;
   title: string | number | null;
}
