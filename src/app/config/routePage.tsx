import { Folder, Settings } from '@mui/icons-material';
import { AuthPage } from 'pages/auth';
import { PageConstructor } from 'pages/constructor';
import { ConstructorTemplatePage } from 'pages/costructorTemplate';
import { DocumentPage } from 'pages/documents';
import { TemplatePage } from 'pages/templates';
import { Navigate } from 'react-router-dom';
import { PAGES, PAGE_PATHS, PageConfigs } from 'shared/config/page';

export const PAGE_CONFIGS: PageConfigs = {
    [PAGES.Main]: {
        path: PAGE_PATHS.main,
        title: 'Главная страница',
        element: <Navigate to={PAGE_PATHS.documents} />,
    },
    [PAGES.Auth]: {
        path: PAGE_PATHS.auth,
        title: 'Авторизация',
        element: <AuthPage />,
    },
    [PAGES.Documents]: {
        path: PAGE_PATHS.documents,
        title: 'Документы',
        element: <DocumentPage />,
        Icon: Folder,
    },
    [PAGES.Constructor]: {
        path: PAGE_PATHS.constructor,
        title: 'Конструктор',
        element: <PageConstructor />,
    },
    [PAGES.Templates]: {
        path: PAGE_PATHS.templates,
        title: 'Шаблоны',
        element: <TemplatePage />,
        Icon: Settings,
    },
    [PAGES.ConstructorTemplate]: {
        path: PAGE_PATHS.constructorTemplate,
        title: 'Конструктор шаблонов',
        element: <ConstructorTemplatePage />,
    },
    [PAGES.NotFound]: {
        path: PAGE_PATHS.notFound,
        title: 'Not Found',
        element: <div>Не найдена страница</div>,
    },
};
