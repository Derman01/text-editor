import { LoginPage } from 'pages/auth';
import { PageConstructor } from 'pages/constructor';
import { Navigate } from 'react-router-dom';
import { PAGES, PAGE_PATHS, PageConfigs } from 'shared/config/page';

export const PAGE_CONFIGS: PageConfigs = {
    [PAGES.Auth]: {
        path: PAGE_PATHS.auth,
        title: 'Авторизация',
        element: <LoginPage />,
    },
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
    [PAGES.NotFound]: {
        path: PAGE_PATHS.notFound,
        title: 'Not Found',
        element: <div>Не найдена страница</div>,
    },
};
