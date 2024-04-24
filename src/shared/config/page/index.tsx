import { RouteObject } from 'react-router-dom';

export enum PAGES {
    Main = 'main',
    Constructor = 'constructor',
    Auth = 'auth',
    NotFound = 'notFound',
}

export const PAGE_PATHS: Record<PAGES, string> = {
    [PAGES.Main]: '/',
    [PAGES.Constructor]: '/constructor/:id',
    [PAGES.Auth]: '/auth',
    [PAGES.NotFound]: '*',
};

export type PageConfig = RouteObject & {
    title: string;
};

export type PageConfigs = Record<PAGES, PageConfig>;
