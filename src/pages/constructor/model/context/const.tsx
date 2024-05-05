import { lazy } from 'react';
import { ITabConfig, TABS_ID } from '../types';

const Layout = lazy(() =>
    import('widgets/PlateEditor').then((plateEditor) => {
        return {
            default: plateEditor.Editor,
        };
    })
);

const Settings = lazy(() => {
    return import('widgets/StyleSettings').then((StyleSettings) => {
        return {
            default: StyleSettings.Content,
        };
    });
});

export const TABS_CONFIG: ITabConfig[] = [
    {
        key: TABS_ID.constructor,
        Control: Layout,
        label: 'Редактор',
    },
    {
        key: TABS_ID.settings,
        Control: Settings,
        label: 'Настройки',
    },
];
