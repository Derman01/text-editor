import React, { Suspense, useEffect } from 'react';
import { PAGE_CONFIGS } from './config/routePage';
import { createBrowserRouter, RouterProvider, useLocation } from 'react-router-dom';
import './styles/index.scss';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { AuthProvider } from 'shared/providers/auth';
import { TooltipProvider } from '@/components/plate-ui/tooltip';

const pageConfigs = Object.entries(PAGE_CONFIGS).map(([_, config]) => config);


const router = createBrowserRouter(pageConfigs);

const App = () => {
    return (
        <React.StrictMode>
            <AuthProvider>
                <TooltipProvider disableHoverableContent delayDuration={500} skipDelayDuration={0}>
                    <div className="app">
                        <Suspense fallback={<>Загрузка</>}>
                            <RouterProvider router={router} />
                        </Suspense>
                    </div>
                </TooltipProvider>
            </AuthProvider>
        </React.StrictMode>
    );
};

export default App;
