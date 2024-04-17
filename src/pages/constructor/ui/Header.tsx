import { TabContext, TabList } from '@mui/lab';
import { Tab } from '@mui/material';
import { useTabContext } from '../model/context/Tab';
import classes from './styles/Header.module.scss';

const Header = function (): JSX.Element {
    const { config, selectedTabId, changeSelectedTabId } = useTabContext();
    return (
        <div className={classes.header}>
            <TabContext value={selectedTabId}>
                <TabList className={classes.switcher} onChange={changeSelectedTabId}>
                    {config.map((config) => {
                        return <Tab key={config.key} label={config.label} value={config.key} />;
                    })}
                </TabList>
            </TabContext>
        </div>
    );
};

export default Header;
