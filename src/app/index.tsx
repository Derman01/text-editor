import React, { Suspense, useEffect } from 'react';
import { PAGE_CONFIGS } from './config/routePage';
import { createBrowserRouter, RouterProvider, useLocation } from 'react-router-dom';
import './styles/index.scss';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { AuthProvider } from 'shared/providers/auth';

const pageConfigs = Object.entries(PAGE_CONFIGS).map(([_, config]) => config);
const titlePages = Object.entries(PAGE_CONFIGS).reduce((prev, [_, config]) => {
    return {
        ...prev,
        [config.path.split('/')[0]]: config.title,
    };
}, {});

const router = createBrowserRouter(pageConfigs);

const App = () => {
    return (
        <React.StrictMode>
            <AuthProvider>
                <div className="app">
                    <Suspense fallback={<>Загрузка</>}>
                        <RouterProvider router={router} />
                    </Suspense>
                </div>
            </AuthProvider>
        </React.StrictMode>
    );
};

export default App;
