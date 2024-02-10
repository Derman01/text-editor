import { Route, Routes } from 'react-router-dom';
import { PageConfig } from 'shared/config/page';

interface RoutesProps {
    pageConfigs: PageConfig[];
}

const CustomRoutes = function (props: RoutesProps) {
    const { pageConfigs } = props;
    return (
        <Routes>
            {pageConfigs.map(({ element: content, path, title }) => (
                <Routes key={path} path={path} element={<div>{path}</div>} />
            ))}
        </Routes>
    );
};

const CustomRoute = function ({ element: content, path, title }: PageConfig) {
    return <Route path={path} children={content} />;
};

export default CustomRoutes;
