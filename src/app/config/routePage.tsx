import { PageConstructor } from 'pages/constructor';
import { Navigate } from 'react-router-dom';
import { PAGES, PAGE_PATHS, PageConfigs } from 'shared/config/page';

export const PAGE_CONFIGS: PageConfigs = {
    [PAGES.Main]: {
        path: PAGE_PATHS.main,
        title: 'Главная страница',
        element: <Navigate to={PAGE_PATHS.constructor} />,
    },
    [PAGES.Constructor]: {
        path: PAGE_PATHS.constructor,
        title: 'Конструктор',
        element: <PageConstructor />,
    },
};
