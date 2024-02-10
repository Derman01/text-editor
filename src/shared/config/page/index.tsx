import { FC } from 'react';

export enum PAGES {
    Main = 'main',
    Constructor = 'constructor',
}

export const PAGE_PATHS: Record<PAGES, string> = {
    [PAGES.Main]: '/',
    [PAGES.Constructor]: '/constructor',
};

export type PageConfig = {
    path: string;
    title: string;
    element: JSX.Element;
};

export type PageConfigs = Record<PAGES, PageConfig>;
