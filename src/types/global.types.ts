import type { NextPage } from "next";
import type { AppProps } from "next/app";
import type { FC, PropsWithChildren, ReactElement, ReactNode } from "react";

type NextPageWithLayout = NextPage & {
   layout?: (page: ReactElement) => ReactNode;
};
export type AppPropsWithLayout = AppProps & {
   Component: NextPageWithLayout;
};

export type Nullable<T> = T | null;

export type TIconComponent = FC<{
   size: number | [number, number];
   className?: string;
}>;

export type IBaseComponentProps<T = {}> = FC<PropsWithChildren<T & { className?: string }>>;
