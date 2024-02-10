import { lazy } from 'react';

const PageConstructor = lazy(() => import('./ui/Page'));

export { PageConstructor };
