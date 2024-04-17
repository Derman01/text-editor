export enum PAGES {
    Main = 'main',
    Constructor = 'constructor',
    Auth = 'auth',
    NotFound = 'notFound',
}

export const PAGE_PATHS: Record<PAGES, string> = {
    [PAGES.Main]: '/',
    [PAGES.Constructor]: '/constructor',
    [PAGES.Auth]: '/auth',
    [PAGES.NotFound]: '*',
};

export type PageConfig = {
    path: string;
    title: string;
    element: JSX.Element;
};

export type PageConfigs = Record<PAGES, PageConfig>;
