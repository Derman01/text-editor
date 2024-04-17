import { FunctionComponent } from 'react';

export enum TABS_ID {
    constructor = 'constructor',
    settings = 'settings',
}

export interface ITabConfig {
    key: TABS_ID;
    Control: FunctionComponent;
    label: string;
}
