import { TabContext, TabPanel } from '@mui/lab';
import { useTabContext } from '../model/context/Tab';
import classes from './styles/Content.module.scss';

const Content = function (): JSX.Element {
    const { config, selectedTabId } = useTabContext();
    return (
        <TabContext value={selectedTabId}>
            {config.map(({ Control, key }) => {
                return (
                    <TabPanel className={classes.content} key={key} value={key}>
                        {<Control />}
                    </TabPanel>
                );
            })}
        </TabContext>
    );
};

export default Content;
