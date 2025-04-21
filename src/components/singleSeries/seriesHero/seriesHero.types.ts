import { TSeries } from "@/mock/mock-series";

export interface ISeriesHeroProps extends Omit<TSeries, "id" | "seasons" | "children"> {}
