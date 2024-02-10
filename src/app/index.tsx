import React from 'react';
import { PAGE_CONFIGS } from './config/routePage';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './styles/index.scss';

const pageConfigs = Object.entries(PAGE_CONFIGS).map(([_, config]) => config);

const router = createBrowserRouter(pageConfigs);

const App = () => {
    return (
        <React.StrictMode>
            <div className="app">
                <RouterProvider router={router} />
            </div>
        </React.StrictMode>
    );
};

export default App;
