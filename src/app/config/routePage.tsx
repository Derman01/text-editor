import { AuthPage } from 'pages/auth';
import { PageConstructor } from 'pages/constructor';
import { useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import { api } from 'shared/api';
import { PAGES, PAGE_PATHS, PageConfigs } from 'shared/config/page';

const MainPage = () => {
    useEffect(() => {
        api.auth.getTemplates().then((data) => {
            console.log(data);
        });
    }, []);
    return <div>Main Page</div>;
};

export const PAGE_CONFIGS: PageConfigs = {
    [PAGES.Auth]: {
        path: PAGE_PATHS.auth,
        title: 'Авторизация',
        element: <AuthPage />,
    },
    [PAGES.Main]: {
        path: PAGE_PATHS.main,
        title: 'Главная страница',
        element: <MainPage />,
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
