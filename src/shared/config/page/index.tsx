import { RouteObject } from 'react-router-dom';
import { SvgIconComponent } from '@mui/icons-material';

export enum PAGES {
    Main = 'main',
    Documents = 'documents',
    Constructor = 'constructor',
    Auth = 'auth',
    Templates = 'templates',
    ConstructorTemplate = 'constructorTemplate',
    NotFound = 'notFound',
}

export const PAGE_PATHS: Record<PAGES, string> = {
    [PAGES.Main]: '/',
    [PAGES.Documents]: '/documents',
    [PAGES.Constructor]: '/constructor/:id',
    [PAGES.Auth]: '/auth',
    [PAGES.Templates]: '/templates',
    [PAGES.ConstructorTemplate]: '/template/:id',
    [PAGES.NotFound]: '*',
};

export type PageConfig = RouteObject & {
    title: string;
    Icon?: SvgIconComponent;
};

export type PageConfigs = Record<PAGES, PageConfig>;
