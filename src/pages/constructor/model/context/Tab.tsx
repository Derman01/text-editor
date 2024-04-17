import { SyntheticEvent, createContext, lazy, useContext, useMemo, useState } from 'react';
import { ITabConfig, TABS_ID } from '../types';
import { TABS_CONFIG } from './const';

interface ITabContext {
    config: ITabConfig[];
    selectedTabId: TABS_ID;
    changeSelectedTabId: (event: SyntheticEvent, newTabValue: TABS_ID) => void;
}

const TabContext = createContext<ITabContext>({});

const TabProvider = function ({ children }) {
    const [selectedTabId, setSelectedTabId] = useState(TABS_ID.constructor);

    const changeSelectedTabId = (event: React.SyntheticEvent, newTabValue: TABS_ID) => {
        setSelectedTabId(newTabValue);
    };

    const value = useMemo(
        (): ITabContext => ({
            config: TABS_CONFIG,
            changeSelectedTabId,
            selectedTabId: selectedTabId,
        }),
        [changeSelectedTabId, selectedTabId]
    );

    return <TabContext.Provider value={value} children={children} />;
};

const useTabContext = () => useContext(TabContext);

export { TabProvider, useTabContext };
